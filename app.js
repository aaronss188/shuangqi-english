const STORAGE_KEY = 'shuangqi_english_v1';
const AI_SETTINGS_KEY = 'shuangqi_ai_settings_v1';
const AI_HISTORY_KEY = 'shuangqi_ai_history_v1';

const lessonCatalog = [
  {
    unit: '单元 1 · 先开口', subtitle: '打招呼与状态', icon: '🌱',
    lessons: [
      {
        id: 'u1l1', title: '你好，我有点累', label: '第一句',
        questions: [
          { type: 'choice', prompt: '“我有点累”最自然的表达是？', options: ['I little tired.', 'I am a little tired.', 'I have tired.', 'I am little sleep.'], answer: 1, explain: 'I am a little tired. 是完整又自然的表达。' },
          { type: 'choice', prompt: '“你好，很高兴认识你”选哪句？', options: ['Hi, nice to meet you.', 'Hi, I meet you.', 'Hello, good see.', 'Hey, nice know you.'], answer: 0, explain: 'Nice to meet you 是常见初次见面表达。' },
          { type: 'speak', prompt: '跟读这一句', phrase: 'I am a little tired.', zh: '我有点累。' },
          { type: 'choice', prompt: '“我很好”怎么说？', options: ['I am good.', 'I good.', 'Me is good.', 'I am well good.'], answer: 0, explain: '日常口语里 I am good 很常见。' },
          { type: 'speak', prompt: '再开一次口', phrase: 'Hi, nice to meet you.', zh: '你好，很高兴认识你。' }
        ]
      },
      {
        id: 'u1l2', title: '我想要这个', label: '表达需求',
        questions: [
          { type: 'choice', prompt: '“我想要这个”怎么说？', options: ['I want this.', 'I need here.', 'I want it here now.', 'Me want this.'], answer: 0, explain: 'I want this 是最直接的基础表达。' },
          { type: 'choice', prompt: '“请给我一杯水”更自然的是？', options: ['Water me.', 'Can I have some water, please?', 'Give water.', 'I take water.'], answer: 1, explain: 'Can I have ... please? 很实用，也更礼貌。' },
          { type: 'speak', prompt: '跟读请求句', phrase: 'Can I have some water, please?', zh: '请给我一点水，可以吗？' },
          { type: 'choice', prompt: '“我不知道”怎么说？', options: ['I do not know.', 'I no know.', 'No idea me.', 'I am not know.'], answer: 0, explain: 'I do not know / I don’t know 都可以。' },
          { type: 'speak', prompt: '把它说出来', phrase: "I don't know.", zh: '我不知道。' }
        ]
      },
      {
        id: 'u1l3', title: '今天怎么样', label: '简单交流',
        questions: [
          { type: 'choice', prompt: '“今天怎么样？”怎么说？', options: ['How is today?', 'How is your day?', 'What today?', 'Today how?'], answer: 1, explain: 'How is your day? 很适合日常问候。' },
          { type: 'choice', prompt: '“还不错”怎么说？', options: ['Not bad.', 'No bad.', 'Not good bad.', 'It no bad.'], answer: 0, explain: 'Not bad 是很常见的轻松回答。' },
          { type: 'speak', prompt: '来一轮问候', phrase: 'How is your day?', zh: '你今天过得怎么样？' },
          { type: 'choice', prompt: '“我有点忙”怎么说？', options: ['I am a little busy.', 'I little busy.', 'Me busy little.', 'I have busy.'], answer: 0, explain: 'a little + 形容词，很实用。' },
          { type: 'speak', prompt: '跟读', phrase: 'I am a little busy today.', zh: '我今天有点忙。' }
        ]
      }
    ]
  },
  {
    unit: '单元 2 · 出门能用', subtitle: '吃饭、买东西、问路', icon: '🧭',
    lessons: [
      {
        id: 'u2l1', title: '点餐不慌', label: '吃饭',
        questions: [
          { type: 'choice', prompt: '“我要这个”在点餐时怎么说？', options: ["I'll have this.", 'I eat this now.', 'This give me.', 'I take eating.'], answer: 0, explain: "I'll have this. 是点餐时很自然的表达。" },
          { type: 'choice', prompt: '“不要辣”怎么说？', options: ['No spicy, please.', 'Not hot fire.', 'I no spicy.', 'No red.'], answer: 0, explain: '简单说 No spicy, please. 就够用了。' },
          { type: 'speak', prompt: '点一份', phrase: "I'll have this, please.", zh: '我要这个，谢谢。' },
          { type: 'choice', prompt: '“多少钱？”怎么问？', options: ['How much is it?', 'How many money?', 'What price money?', 'It how much money?'], answer: 0, explain: 'How much is it? 是最基础的价格问法。' },
          { type: 'speak', prompt: '问价格', phrase: 'How much is it?', zh: '这个多少钱？' }
        ]
      },
      {
        id: 'u2l2', title: '商店买东西', label: '购物',
        questions: [
          { type: 'choice', prompt: '“有大一点的吗？”怎么说？', options: ['Do you have a bigger one?', 'Have big more?', 'This more large?', 'Give bigger.'], answer: 0, explain: 'Do you have a bigger one? 很通用。' },
          { type: 'speak', prompt: '跟读', phrase: 'Do you have a bigger one?', zh: '有大一点的吗？' },
          { type: 'choice', prompt: '“我只是看看”怎么说？', options: ['I am just looking.', 'I only eye.', 'I see only.', 'No buy now me.'], answer: 0, explain: 'I am just looking. 是逛店神器。' },
          { type: 'choice', prompt: '“可以刷卡吗？”怎么说？', options: ['Can I pay by card?', 'Can money card?', 'Card okay pay?', 'Use card money?'], answer: 0, explain: 'Can I pay by card? 很自然。' },
          { type: 'speak', prompt: '结账一句', phrase: 'Can I pay by card?', zh: '可以刷卡吗？' }
        ]
      },
      {
        id: 'u2l3', title: '问路', label: '出行',
        questions: [
          { type: 'choice', prompt: '“洗手间在哪里？”怎么问？', options: ['Where is the restroom?', 'Restroom what place?', 'Toilet go where?', 'Where restroom go?'], answer: 0, explain: 'Where is the restroom? 很实用。' },
          { type: 'choice', prompt: '“远吗？”怎么问？', options: ['Is it far?', 'It is long?', 'How far away long?', 'Far yes?'], answer: 0, explain: 'Is it far? 足够简单。' },
          { type: 'speak', prompt: '开口问路', phrase: 'Excuse me, where is the station?', zh: '打扰一下，车站在哪里？' },
          { type: 'choice', prompt: '“谢谢你的帮助”怎么说？', options: ['Thanks for your help.', 'Thanks your helping me now.', 'Good help thanks.', 'Thank you help.'], answer: 0, explain: 'Thanks for your help. 很自然。' },
          { type: 'speak', prompt: '收尾一句', phrase: 'Thanks for your help.', zh: '谢谢你的帮助。' }
        ]
      }
    ]
  },
  {
    unit: '单元 3 · 澳洲生活', subtitle: '把英语放进真实场景', icon: '☀️',
    lessons: [
      {
        id: 'u3l1', title: '看医生基础', label: '生活',
        questions: [
          { type: 'choice', prompt: '“我头疼”怎么说？', options: ['I have a headache.', 'My head is paining.', 'I headache.', 'Head pain me.'], answer: 0, explain: 'I have a headache. 是标准表达。' },
          { type: 'speak', prompt: '跟读', phrase: 'I have a headache.', zh: '我头疼。' },
          { type: 'choice', prompt: '“从昨天开始”怎么说？', options: ['Since yesterday.', 'From yesterday go.', 'Yesterday start before.', 'At yesterday.'], answer: 0, explain: 'Since yesterday 可以直接补充时间。' },
          { type: 'choice', prompt: '“我需要预约”怎么说？', options: ['I need an appointment.', 'I need a meeting doctor.', 'I book need.', 'Appointment give me.'], answer: 0, explain: 'I need an appointment. 很直接。' },
          { type: 'speak', prompt: '预约一句', phrase: 'I need an appointment, please.', zh: '我需要预约，谢谢。' }
        ]
      }
    ]
  }
];

const defaultState = {
  activeUser: 'me',
  users: {
    me: { name: '岄', avatar: '岄', xp: 0, streak: 0, hearts: 5, completed: [], mistakes: [], lastStudyDate: null, dailyDone: 0 },
    partner: { name: '搭档', avatar: '伴', xp: 0, streak: 0, hearts: 5, completed: [], mistakes: [], lastStudyDate: null, dailyDone: 0 }
  },
  dailyGoal: 1,
  lastGlobalDate: null
};

let state = loadState();
let currentLesson = null;
let questionIndex = 0;
let selectedAnswer = null;
let answered = false;
let correctCount = 0;

const $ = (id) => document.getElementById(id);
const todayKey = () => new Date().toISOString().slice(0,10);

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function loadState(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeState(clone(defaultState), saved) : clone(defaultState);
  } catch { return clone(defaultState); }
}
function mergeState(base, saved){
  return {
    ...base,
    ...saved,
    users: {
      me: { ...base.users.me, ...(saved.users?.me || {}) },
      partner: { ...base.users.partner, ...(saved.users?.partner || {}) }
    }
  };
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function user(){ return state.users[state.activeUser]; }
function otherUser(){ return state.users[state.activeUser === 'me' ? 'partner' : 'me']; }

function resetDailyIfNeeded(){
  const today = todayKey();
  if(state.lastGlobalDate !== today){
    Object.values(state.users).forEach(u => u.dailyDone = 0);
    state.lastGlobalDate = today;
    save();
  }
}

function render(){
  resetDailyIfNeeded();
  const u = user();
  $('topAvatar').textContent = u.avatar || u.name.slice(0,1);
  $('brandSub').textContent = `${u.name} · 今天只学 ${Math.max(5, state.dailyGoal * 5)} 分钟`;
  $('streakCount').textContent = u.streak;
  $('xpCount').textContent = u.xp;
  $('heartCount').textContent = u.hearts;
  $('reviewCount').textContent = u.mistakes.length ? `${u.mistakes.length} 道待复习` : '暂无错题';
  const done = Math.min(u.dailyDone, state.dailyGoal);
  const pct = state.dailyGoal ? Math.round(done / state.dailyGoal * 100) : 100;
  $('goalRing').style.strokeDasharray = `${pct} ${100-pct}`;
  $('goalText').textContent = `${done}/${state.dailyGoal}`;
  $('heroTitle').textContent = done >= state.dailyGoal ? '今天已经通关 ✓' : '完成 1 节，就算通关';
  $('heroCopy').textContent = done >= state.dailyGoal ? '现在继续学是赚到，不继续也不欠作业。' : '不拼意志力，只拼把门槛降到地板。';
  renderCouple();
  renderPath();
}

function renderCouple(){
  const entries = Object.entries(state.users);
  $('coupleGrid').innerHTML = entries.map(([key,u]) => {
    const pct = Math.min(100, Math.round((u.dailyDone / Math.max(1,state.dailyGoal))*100));
    return `<div class="person-card">
      <div class="person-row">
        <div class="person-avatar">${escapeHtml(u.avatar || u.name.slice(0,1))}</div>
        <div class="person-meta"><b>${escapeHtml(u.name)}${key===state.activeUser?' · 当前':''}</b><small>${u.xp} XP · 🔥 ${u.streak} 天</small></div>
      </div>
      <div class="mini-progress"><span style="width:${pct}%"></span></div>
    </div>`;
  }).join('');
}

function renderPath(){
  const u = user();
  let html = '';
  let lessonCounter = 0;
  lessonCatalog.forEach(unit => {
    html += `<div class="unit-label"><div>${unit.icon} ${unit.unit}</div><small>${unit.subtitle}</small></div>`;
    unit.lessons.forEach((lesson, idx) => {
      const allLessons = lessonCatalog.flatMap(x=>x.lessons);
      const globalIndex = allLessons.findIndex(x=>x.id===lesson.id);
      const prev = allLessons[globalIndex-1];
      const unlocked = globalIndex === 0 || (prev && u.completed.includes(prev.id));
      const done = u.completed.includes(lesson.id);
      const cls = done ? 'done' : unlocked ? '' : 'locked';
      const icon = done ? '✓' : unlocked ? (lessonCounter+1) : '🔒';
      html += `<div class="path-row ${lessonCounter%2===0?'left':'right'}">
        <div class="node-wrap">
          <button class="node ${cls}" data-lesson="${lesson.id}" ${unlocked?'':'disabled'}>
            ${icon}${done?'<span class="node-badge">★</span>':''}
          </button>
          <div class="node-label">${escapeHtml(lesson.title)}<br>${escapeHtml(lesson.label)}</div>
        </div>
      </div>`;
      lessonCounter++;
    });
  });
  $('lessonPath').innerHTML = html;
  document.querySelectorAll('[data-lesson]').forEach(btn => btn.addEventListener('click', () => openLesson(btn.dataset.lesson)));
}

function openLesson(id){
  const lesson = lessonCatalog.flatMap(u=>u.lessons).find(l=>l.id===id);
  if(!lesson) return;
  currentLesson = lesson;
  questionIndex = 0;
  selectedAnswer = null;
  answered = false;
  correctCount = 0;
  $('lessonScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderQuestion();
}

function renderQuestion(){
  const q = currentLesson.questions[questionIndex];
  const u = user();
  $('lessonHearts').textContent = u.hearts;
  $('lessonProgress').style.width = `${(questionIndex/currentLesson.questions.length)*100}%`;
  selectedAnswer = null;
  answered = false;

  if(q.type === 'choice'){
    $('lessonBody').innerHTML = `<div class="question-kicker">第 ${questionIndex+1} / ${currentLesson.questions.length} 题</div>
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="question-hint">不用追求一次全对，先让嘴和脑子熟起来。</div>
      <div class="answer-grid">${q.options.map((opt,i)=>`<button class="answer-btn" data-answer="${i}">${escapeHtml(opt)}</button>`).join('')}</div>`;
    document.querySelectorAll('[data-answer]').forEach(btn => btn.addEventListener('click', () => {
      if(answered) return;
      selectedAnswer = Number(btn.dataset.answer);
      document.querySelectorAll('[data-answer]').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      renderFooter();
    }));
  } else {
    $('lessonBody').innerHTML = `<div class="question-kicker">第 ${questionIndex+1} / ${currentLesson.questions.length} 题</div>
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="speak-card">
        <div class="big-phrase">${escapeHtml(q.phrase)}</div>
        <div class="question-hint">${escapeHtml(q.zh)}</div>
        <div class="speak-actions">
          <button id="listenBtn">🔊 听一遍</button>
          <button id="speakBtn">🎙️ 我说了</button>
        </div>
      </div>`;
    $('listenBtn').addEventListener('click', ()=> speakText(q.phrase));
    $('speakBtn').addEventListener('click', ()=>{
      selectedAnswer = 'spoken';
      showToast('算你开口了，过关 👏');
      renderFooter();
    });
  }
  renderFooter();
}

function renderFooter(feedback=null){
  const q = currentLesson.questions[questionIndex];
  const canSubmit = q.type==='choice' ? selectedAnswer!==null : selectedAnswer==='spoken';
  let html = '';
  if(feedback){
    html += `<div class="feedback ${feedback.good?'good':'bad'}">${escapeHtml(feedback.text)}</div>`;
  }
  if(answered){
    html += `<button class="primary-btn" id="nextBtn">${questionIndex===currentLesson.questions.length-1?'查看结果':'继续'}</button>`;
  } else {
    html += `<button class="primary-btn" id="checkBtn" ${canSubmit?'':'disabled'} style="${canSubmit?'':'opacity:.45;box-shadow:none'}">${q.type==='speak'?'完成跟读':'检查'}</button>`;
  }
  $('lessonFooter').innerHTML = html;
  if($('checkBtn')) $('checkBtn').addEventListener('click', checkAnswer);
  if($('nextBtn')) $('nextBtn').addEventListener('click', nextQuestion);
}

function checkAnswer(){
  if(answered) return;
  const q = currentLesson.questions[questionIndex];
  if(q.type==='choice' && selectedAnswer===null) return;
  if(q.type==='speak' && selectedAnswer!=='spoken') return;
  answered = true;
  let good = true;
  let text = '不错，继续。';
  if(q.type==='choice'){
    good = selectedAnswer === q.answer;
    document.querySelectorAll('[data-answer]').forEach((b,i)=>{
      if(i===q.answer) b.classList.add('correct');
      if(i===selectedAnswer && !good) b.classList.add('wrong');
    });
    if(good){ correctCount++; text = `答对了。${q.explain}`; }
    else {
      text = `差一点。${q.explain}`;
      user().hearts = Math.max(0, user().hearts - 1);
      const mistakeId = `${currentLesson.id}:${questionIndex}`;
      if(!user().mistakes.includes(mistakeId)) user().mistakes.push(mistakeId);
      save();
      $('lessonHearts').textContent = user().hearts;
    }
  } else {
    correctCount++;
    text = '开口比憋在脑子里强得多。';
  }
  renderFooter({good,text});
}

function nextQuestion(){
  if(questionIndex < currentLesson.questions.length-1){
    questionIndex++;
    renderQuestion();
  } else {
    finishLesson();
  }
}

function finishLesson(){
  const u = user();
  const firstClear = !u.completed.includes(currentLesson.id);
  if(firstClear) u.completed.push(currentLesson.id);
  const earned = 10 + correctCount * 3 + (firstClear ? 5 : 0);
  u.xp += earned;
  u.hearts = Math.min(5, u.hearts + 1);
  u.dailyDone += 1;
  updateStreak(u);
  save();
  $('lessonProgress').style.width = '100%';
  $('lessonBody').innerHTML = `<div class="complete-card">
    <div class="complete-emoji">🌿</div>
    <h2>这一节拿下了</h2>
    <p class="question-hint">够了。今天就算你已经完成英语任务。</p>
    <div class="stat-row">
      <div class="stat-box"><b>+${earned}</b><small>XP</small></div>
      <div class="stat-box"><b>${correctCount}/${currentLesson.questions.length}</b><small>完成</small></div>
      <div class="stat-box"><b>${u.streak}</b><small>连续天数</small></div>
    </div>
  </div>`;
  $('lessonFooter').innerHTML = `<button class="primary-btn" id="finishBtn">回到学习路径</button>`;
  $('finishBtn').addEventListener('click', closeLesson);
}

function updateStreak(u){
  const today = todayKey();
  if(u.lastStudyDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-1);
  const yKey = yesterday.toISOString().slice(0,10);
  u.streak = u.lastStudyDate === yKey ? u.streak + 1 : 1;
  u.lastStudyDate = today;
}

function closeLesson(){
  $('lessonScreen').classList.add('hidden');
  document.body.style.overflow = '';
  currentLesson = null;
  render();
}

function speakText(text){
  if(!('speechSynthesis' in window)){ showToast('这个浏览器不支持朗读'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = .85;
  speechSynthesis.speak(u);
}

function openSheet(html){
  $('sheetContent').innerHTML = html;
  $('sheetBackdrop').classList.remove('hidden');
  $('sheet').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeSheet(){
  $('sheetBackdrop').classList.add('hidden');
  $('sheet').classList.add('hidden');
  document.body.style.overflow = '';
}

function openProfileSheet(){
  openSheet(`<div class="sheet-title">今天谁来学？</div>
    <div class="sheet-copy">两个人的 XP、连续天数、错题和学习路径分别保存。</div>
    <div class="option-list">
      ${Object.entries(state.users).map(([key,u])=>`<button class="option-btn ${key===state.activeUser?'selected':''}" data-user="${key}">
        <div class="person-avatar">${escapeHtml(u.avatar || u.name.slice(0,1))}</div>
        <div><b>${escapeHtml(u.name)}</b><div class="sheet-copy">${u.xp} XP · 连续 ${u.streak} 天</div></div>
      </button>`).join('')}
    </div>`);
  document.querySelectorAll('[data-user]').forEach(btn=>btn.addEventListener('click',()=>{
    state.activeUser = btn.dataset.user; save(); closeSheet(); render();
  }));
}

function openCoupleSheet(){
  const a = state.users.me, b = state.users.partner;
  const total = a.xp + b.xp;
  openSheet(`<div class="sheet-title">双人小队</div>
    <div class="sheet-copy">不是排行榜，是互相把对方从沙发里薅出来一点点。</div>
    <div class="option-list">
      <div class="option-btn"><div class="person-avatar">${escapeHtml(a.avatar)}</div><div><b>${escapeHtml(a.name)}</b><div class="sheet-copy">${a.xp} XP · ${a.completed.length} 节完成</div></div></div>
      <div class="option-btn"><div class="person-avatar">${escapeHtml(b.avatar)}</div><div><b>${escapeHtml(b.name)}</b><div class="sheet-copy">${b.xp} XP · ${b.completed.length} 节完成</div></div></div>
    </div>
    <div class="hero-card" style="margin-top:14px;grid-template-columns:1fr">
      <div><div class="eyebrow">共同经验</div><h1>${total} XP</h1><p>以后可以扩展成双人任务、周挑战和奖励兑换。</p></div>
    </div>`);
}

function openSettings(){
  const u = user();
  openSheet(`<div class="sheet-title">设置</div>
    <div class="sheet-copy">先把规则做得轻一点。能持续，比一天学两小时重要。</div>
    <div class="input-row"><label>当前学习者姓名</label><input id="nameInput" value="${escapeAttr(u.name)}" maxlength="10"></div>
    <div class="input-row"><label>每日最小目标：完成几节</label><input id="goalInput" type="number" min="1" max="5" value="${state.dailyGoal}"></div>
    <button class="primary-btn" id="saveSettings">保存</button>
    <button class="secondary-btn" id="resetHearts">恢复 5 颗心</button>`);
  $('saveSettings').addEventListener('click',()=>{
    const name = $('nameInput').value.trim() || u.name;
    const goal = Math.max(1, Math.min(5, Number($('goalInput').value)||1));
    u.name = name; u.avatar = name.slice(0,1); state.dailyGoal = goal; save(); closeSheet(); render(); showToast('设置已保存');
  });
  $('resetHearts').addEventListener('click',()=>{ u.hearts=5; save(); closeSheet(); render(); showToast('心心补满了 💚'); });
}

function openPhrase(){
  const phrases = [
    ['I am a little tired.', '我有点累。'],
    ['Can I have some water, please?', '请给我一点水，可以吗？'],
    ['How is your day?', '你今天过得怎么样？'],
    ["I'll have this, please.", '我要这个，谢谢。'],
    ['I am just looking.', '我只是看看。'],
    ['Excuse me, where is the station?', '打扰一下，车站在哪里？']
  ];
  const item = phrases[new Date().getDate()%phrases.length];
  openSheet(`<div class="sheet-title">每日一句</div>
    <div class="sheet-copy">今天就练这一句，别给大脑加戏。</div>
    <div class="speak-card"><div class="big-phrase">${escapeHtml(item[0])}</div><div class="question-hint">${escapeHtml(item[1])}</div></div>
    <button class="primary-btn" id="phraseSpeak">🔊 听一遍</button>
    <button class="secondary-btn" id="phraseDone">我跟读了 3 遍</button>`);
  $('phraseSpeak').addEventListener('click',()=>speakText(item[0]));
  $('phraseDone').addEventListener('click',()=>{ user().xp += 3; updateStreak(user()); save(); closeSheet(); render(); showToast('+3 XP，今天嘴巴开机了'); });
}

function openReview(){
  const u = user();
  if(!u.mistakes.length){ showToast('暂时没有错题，挺干净'); return; }
  const rows = u.mistakes.map(id=>{
    const [lessonId, qIndex] = id.split(':');
    const lesson = lessonCatalog.flatMap(x=>x.lessons).find(l=>l.id===lessonId);
    const q = lesson?.questions[Number(qIndex)];
    return q ? `<div class="option-btn"><div><b>${escapeHtml(q.prompt)}</b><div class="sheet-copy">${escapeHtml(q.explain||'重新看一遍即可')}</div></div></div>` : '';
  }).join('');
  openSheet(`<div class="sheet-title">错题回炉</div><div class="sheet-copy">只复习错过的，不给你塞一整本题库。</div><div class="option-list">${rows}</div><button class="primary-btn" id="clearMistakes">这些我记住了</button>`);
  $('clearMistakes').addEventListener('click',()=>{ u.mistakes=[]; save(); closeSheet(); render(); showToast('错题本清空'); });
}

function openSync(){
  openSheet(`<div class="sheet-title">双人同步</div>
    <div class="sheet-copy">当前版本在同一台手机或同一个浏览器里，两个人可直接切换使用。若你们要各自在自己的手机上用，需要把站点接一个免费云数据库。</div>
    <div class="option-list">
      <div class="option-btn"><div class="person-avatar">✓</div><div><b>现在就能用</b><div class="sheet-copy">同设备双账号、独立进度、双人总 XP。</div></div></div>
      <div class="option-btn"><div class="person-avatar">☁</div><div><b>双手机实时同步</b><div class="sheet-copy">项目里已经预留 Supabase 方案，按 README 配置即可。</div></div></div>
    </div>
    <button class="primary-btn" id="exportBtn">导出当前进度</button>
    <button class="secondary-btn" id="importBtn">导入进度</button>
    <input id="importFile" type="file" accept="application/json" class="hidden">`);
  $('exportBtn').addEventListener('click', exportState);
  $('importBtn').addEventListener('click', ()=>$('importFile').click());
  $('importFile').addEventListener('change', importState);
}

function exportState(){
  const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = '双栖英语-学习进度.json'; a.click();
  URL.revokeObjectURL(url);
}
function importState(e){
  const file = e.target.files?.[0]; if(!file) return;
  const r = new FileReader();
  r.onload = ()=>{
    try{ state = mergeState(clone(defaultState), JSON.parse(r.result)); save(); closeSheet(); render(); showToast('进度已导入'); }
    catch{ showToast('这个进度文件读不懂'); }
  };
  r.readAsText(file);
}

function showTab(tab){
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.tab===tab));
  if(tab==='learn') return;
  if(tab==='couple') openCoupleSheet();
  if(tab==='stats'){
    const u = user();
    openSheet(`<div class="sheet-title">${escapeHtml(u.name)}的进度</div><div class="sheet-copy">轻量记录，不制造焦虑。</div>
      <div class="stat-row"><div class="stat-box"><b>${u.xp}</b><small>总 XP</small></div><div class="stat-box"><b>${u.streak}</b><small>连续天数</small></div><div class="stat-box"><b>${u.completed.length}</b><small>完成课程</small></div></div>`);
  }
  if(tab==='me') openProfileSheet();
}

function escapeHtml(s=''){ return String(s).replace(/[&<>'"]/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[c])); }
function escapeAttr(s=''){ return escapeHtml(s); }
let toastTimer;
function showToast(msg){
  clearTimeout(toastTimer); $('toast').textContent=msg; $('toast').classList.remove('hidden');
  toastTimer=setTimeout(()=>$('toast').classList.add('hidden'),2200);
}

// AI tutor: the browser stores only the worker URL and chosen model. API credentials
// remain in the worker; the optional family access code is kept for this tab only.
let aiSettings = (()=>{ try { return JSON.parse(localStorage.getItem(AI_SETTINGS_KEY)) || {}; } catch { return {}; } })();
let aiHistory = (()=>{ try { return JSON.parse(localStorage.getItem(AI_HISTORY_KEY)) || {}; } catch { return {}; } })();
let aiBusy = false;
let aiRecognition = null;
function aiProfileKey(){ return state.activeUser; }
function saveAIHistory(){ localStorage.setItem(AI_HISTORY_KEY, JSON.stringify(aiHistory)); }
function aiEndpoint(path){
  const base = ($('aiGatewayUrl').value || aiSettings.gatewayUrl || window.SHUANGQI_AI_GATEWAY_URL || '').trim().replace(/\/+$/, '');
  if(!base) throw new Error('先填写后端地址并保存连接。');
  return `${base}/${path}`;
}
function openAI(){
  $('aiLearnerLabel').textContent = ` · ${user().name}`;
  $('aiGatewayUrl').value = aiSettings.gatewayUrl || window.SHUANGQI_AI_GATEWAY_URL || '';
  $('aiModel').value = aiSettings.model || '';
  $('aiAccessCode').value = sessionStorage.getItem('shuangqi_ai_access') || '';
  $('aiScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderAIHistory();
  $('aiInput').focus();
}
function closeAI(){ $('aiScreen').classList.add('hidden'); document.body.style.overflow = ''; }
function renderAIHistory(){
  const messages = aiHistory[aiProfileKey()] || [];
  const box = $('aiMessages'); box.replaceChildren();
  if(!messages.length){
    const welcome = document.createElement('div'); welcome.className = 'ai-bubble assistant';
    welcome.textContent = `嗨，${user().name}！我们可以用美式日常英语慢慢练。我会先用简单英语交流，再用中文解释和纠错。你想从今天过得怎么样开始吗？`;
    box.append(welcome);
  }
  messages.forEach((message, index)=>appendAIMessage(message, index));
  box.scrollTop = box.scrollHeight;
}
function appendAIMessage(message, index){
  const row = document.createElement('div'); row.className = `ai-bubble ${message.role === 'assistant' ? 'assistant' : 'user'}`;
  const text = document.createElement('div'); text.className = 'ai-message-text'; text.textContent = message.content || ''; row.append(text);
  if(message.role === 'assistant'){
    const actions = document.createElement('div'); actions.className = 'ai-bubble-actions';
    const speak = document.createElement('button'); speak.type = 'button'; speak.className = 'ai-speak-btn'; speak.textContent = '🔊 播报';
    speak.addEventListener('click', ()=>speakText((message.content || '').split(/\n|中文解释|讲解[:：]/)[0])); actions.append(speak); row.append(actions);
  }
  if(index === -1) row.dataset.pending = 'true';
  $('aiMessages').append(row); return row;
}
function saveAIConnection(){
  aiSettings = { gatewayUrl: $('aiGatewayUrl').value.trim().replace(/\/+$/, ''), model: $('aiModel').value.trim() };
  localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(aiSettings));
  sessionStorage.setItem('shuangqi_ai_access', $('aiAccessCode').value.trim());
  showToast('连接设置已保存在此设备');
}
async function loadAIModels(){
  try{
    const response = await fetch(aiEndpoint('models'), { headers: { 'X-App-Password': $('aiAccessCode').value.trim() } });
    const payload = await response.json();
    if(!response.ok) throw new Error(payload.error || `加载失败 (${response.status})`);
    const list = Array.isArray(payload.data) ? payload.data : (Array.isArray(payload.models) ? payload.models : []);
    $('aiModelOptions').replaceChildren(...list.map(item=>{ const option=document.createElement('option'); option.value=typeof item==='string'?item:item.id; return option; }));
    if(!$('aiModel').value && list.length) $('aiModel').value = $('aiModelOptions').options[0].value;
    showToast(`读到 ${list.length} 个模型；请选择支持聊天补全的模型`);
  } catch(error){ showToast(error.message || '连接模型列表失败'); }
}
async function sendAIMessage(event){
  event?.preventDefault();
  if(aiBusy) return;
  const content = $('aiInput').value.trim(); if(!content) return;
  saveAIConnection();
  if(!aiSettings.gatewayUrl || !aiSettings.model || !sessionStorage.getItem('shuangqi_ai_access')){ showToast('先填写后端地址、模型 ID 和访问码'); $('aiSetup').open = true; return; }
  const key=aiProfileKey(), messages=aiHistory[key] || [];
  messages.push({ role:'user', content }); aiHistory[key]=messages.slice(-20); saveAIHistory();
  $('aiInput').value=''; renderAIHistory(); aiBusy=true; $('aiSend').disabled=true;
  const pending=appendAIMessage({role:'assistant',content:'…'}, -1), output=pending.querySelector('.ai-message-text');
  try{
    const response=await fetch(aiEndpoint('chat'), { method:'POST', headers:{'Content-Type':'application/json','X-App-Password':sessionStorage.getItem('shuangqi_ai_access') || ''}, body:JSON.stringify({ model:aiSettings.model, messages:messages.slice(-12), learner:user().name }) });
    if(!response.ok){ let detail=''; try{ detail=(await response.json()).error || ''; }catch{} throw new Error(detail || `请求失败 (${response.status})`); }
    if(!response.body) throw new Error('浏览器不支持流式回复');
    const reader=response.body.getReader(), decoder=new TextDecoder(); let buffer='', full='';
    while(true){
      const {value,done}=await reader.read(); if(done) break; buffer+=decoder.decode(value,{stream:true});
      const blocks=buffer.split(/\r?\n\r?\n/); buffer=blocks.pop();
      for(const block of blocks){
        for(const line of block.split(/\r?\n/)) if(line.startsWith('data:')){
          const raw=line.slice(5).trim(); if(!raw || raw==='[DONE]') continue;
          let packet; try{packet=JSON.parse(raw);}catch{continue;}
          const piece=packet.choices?.[0]?.delta?.content || packet.choices?.[0]?.message?.content || '';
          if(typeof piece==='string') full+=piece;
          else if(Array.isArray(piece)) full+=piece.map(part=>part.text || '').join('');
          output.textContent=full || '…'; $('aiMessages').scrollTop=$('aiMessages').scrollHeight;
          if(packet.error) throw new Error(packet.error.message || '模型回复失败');
        }
      }
    }
    if(!full) throw new Error('模型没有返回文字，请检查模型是否支持 /v1/chat/completions。');
    messages.push({role:'assistant',content:full}); aiHistory[key]=messages.slice(-20); saveAIHistory();
    pending.remove(); appendAIMessage({role:'assistant',content:full}, messages.length);
  }catch(error){ pending.remove(); messages.pop(); aiHistory[key]=messages; saveAIHistory(); appendAIMessage({role:'assistant',content:`暂时没连上：${error.message}\n\n检查后端地址、访问码和模型 ID。`}, -2); }
  finally{aiBusy=false;$('aiSend').disabled=false;$('aiMessages').scrollTop=$('aiMessages').scrollHeight;}
}
function startAIMic(){
  const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){ showToast('当前浏览器不支持语音输入，请试试 Chrome'); return; }
  if(aiRecognition){ aiRecognition.stop(); aiRecognition=null; return; }
  aiRecognition=new SpeechRecognition(); aiRecognition.lang='en-US'; aiRecognition.interimResults=true;
  aiRecognition.onresult=event=>{ let transcript=''; for(let i=event.resultIndex;i<event.results.length;i++) transcript+=event.results[i][0].transcript; $('aiInput').value=transcript; };
  aiRecognition.onerror=()=>showToast('没有听清，请再试一次'); aiRecognition.onend=()=>{aiRecognition=null;$('aiMic').classList.remove('listening');};
  $('aiMic').classList.add('listening'); aiRecognition.start();
}
function clearAIChat(){ aiHistory[aiProfileKey()]=[]; saveAIHistory(); renderAIHistory(); }

$('profileBtn').addEventListener('click', openProfileSheet);
$('coupleBtn').addEventListener('click', openCoupleSheet);
$('settingsBtn').addEventListener('click', openSettings);
$('phraseBtn').addEventListener('click', openPhrase);
$('reviewBtn').addEventListener('click', openReview);
$('syncBtn').addEventListener('click', openSync);
$('aiBtn').addEventListener('click', openAI);
$('closeAI').addEventListener('click', closeAI);
$('newAIChat').addEventListener('click', clearAIChat);
$('aiForm').addEventListener('submit', sendAIMessage);
$('saveAISettings').addEventListener('click', saveAIConnection);
$('loadAIModels').addEventListener('click', loadAIModels);
$('aiMic').addEventListener('click', startAIMic);
$('closeLesson').addEventListener('click', ()=>{
  if(confirm('先退出这一节吗？当前这节不会计入完成。')) closeLesson();
});
$('sheetBackdrop').addEventListener('click', closeSheet);
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>showTab(btn.dataset.tab)));

if('serviceWorker' in navigator){ window.addEventListener('load', ()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
render();
