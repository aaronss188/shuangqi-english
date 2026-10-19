const SYSTEM_PROMPT = `You are a warm, practical English tutor for a Chinese couple learning together. Their current level is beginner and their long-term target is roughly IELTS 4.5. Start with useful American everyday English and build gradually. Speak in short, natural English sentences, then give a concise Chinese explanation when useful. Correct mistakes gently by showing: a natural corrected sentence, one brief reason in Chinese, and one short follow-up question. Teach only a small amount at a time. Keep the learner speaking; ask one question at a time. Do not claim a guaranteed IELTS score. If asked for pronunciation, explain stress and offer a short phrase to repeat.`;
const corsHeaders = origin => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-App-Password',
  'Access-Control-Max-Age': '86400',
  'Vary': 'Origin'
});
function json(body, status, origin) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}
function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(x => x.trim()).filter(Boolean);
  return allowed.includes(origin) ? origin : '';
}
function authorized(request, env) {
  const configured = env.APP_PASSWORD || '';
  const supplied = request.headers.get('X-App-Password') || '';
  return configured.length >= 12 && supplied.length === configured.length && supplied === configured;
}
export default {
  async fetch(request, env) {
    const origin = allowedOrigin(request, env);
    if (request.method === 'OPTIONS') {
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (!origin) return new Response('Origin not allowed', { status: 403 });
    const url = new URL(request.url);
    if (!['/models', '/chat'].includes(url.pathname)) return json({ error: 'Not found' }, 404, origin);
    if (!authorized(request, env)) return json({ error: '访问码不正确或后端尚未配置访问码。' }, 401, origin);
    if (!env.RABBIT_API_KEY) return json({ error: '后端尚未设置兔子 API 密钥。' }, 503, origin);
    const base = (env.RABBIT_API_BASE || 'https://api.tu-zi.com').replace(/\/+$/, '');
    if (url.pathname === '/models') {
      if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405, origin);
      const upstream = await fetch(`${base}/v1/models`, { headers: { Authorization: `Bearer ${env.RABBIT_API_KEY}` }, signal: AbortSignal.timeout(20000) });
      const data = await upstream.text();
      return new Response(data, { status: upstream.status, headers: { ...corsHeaders(origin), 'Content-Type': upstream.headers.get('Content-Type') || 'application/json', 'Cache-Control': 'no-store' } });
    }
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, origin);
    let input;
    try {
      if (Number(request.headers.get('Content-Length') || 0) > 24000) return json({ error: '对话太长，请开一个新对话。' }, 413, origin);
      input = await request.json();
    } catch { return json({ error: '请求内容不是有效 JSON。' }, 400, origin); }
    if (typeof input.model !== 'string' || !input.model.trim() || input.model.length > 200) return json({ error: '请填写有效的模型 ID。' }, 400, origin);
    if (!Array.isArray(input.messages) || input.messages.length > 12) return json({ error: '最多发送最近 12 条对话。' }, 400, origin);
    if (input.messages.some(message => !['user', 'assistant'].includes(message?.role) || typeof message.content !== 'string' || message.content.length > 1200)) return json({ error: '对话内容无效或过长。' }, 400, origin);
    const messages = input.messages.map(message => ({ role: message.role, content: message.content }));
    if (!messages.length || messages[messages.length - 1].role !== 'user') return json({ error: '缺少用户消息。' }, 400, origin);
    const response = await fetch(`${base}/v1/chat/completions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RABBIT_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: input.model.trim(), messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages], stream: true, max_tokens: 450 }),
      signal: AbortSignal.timeout(90000)
    });
    const headers = new Headers(corsHeaders(origin));
    headers.set('Content-Type', response.headers.get('Content-Type') || 'text/event-stream; charset=utf-8');
    headers.set('Cache-Control', 'no-store, no-transform');
    headers.set('X-Accel-Buffering', 'no');
    if (!response.ok) {
      const detail = await response.text();
      return new Response(detail.slice(0, 3000), { status: response.status, headers });
    }
    return new Response(response.body, { status: response.status, headers });
  }
};
