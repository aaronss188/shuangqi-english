# 双栖英语

一个给两个人一起用的手机网页英语学习原型。设计上借鉴了成熟语言学习产品的核心机制，但没有复制其品牌、角色、文案或专有素材。

## 已经做好的功能

- 手机优先的学习路径
- 两个独立学习者，可随时切换
- XP、连续学习天数、每日最小目标
- 5 颗心机制与错题回炉
- 选择题和跟读题
- 浏览器英文朗读
- 每日一句
- 双人总进度
- 本地进度导入与导出
- PWA，可添加到手机桌面
- 离线缓存基础页面
- AI 英语搭档：兔子 API 流式对话、模型选择、语音输入和朗读

## 最快打开方式

不要直接双击 HTML 文件，推荐在目录里启动一个本地服务器：

```bash
python -m http.server 8080
```

然后在浏览器打开：

```text
http://localhost:8080
```

如果要在手机使用，最方便的是把整个文件夹部署到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages。

## 当前双人模式说明

当前原型的数据存储在浏览器 LocalStorage 中。

这意味着：

- 两个人共用同一台手机或同一个浏览器时，可以直接使用。
- 两个人分别使用自己的手机时，数据不会自动同步。
- 页面里提供了 JSON 进度导入与导出，可临时手动同步。

如果希望两台手机实时同步，可以接 Supabase。仓库中已经放了 `supabase-schema.sql` 作为数据库骨架。

## 启用 AI 英语搭档（兔子 API）

GitHub Pages 是静态网站，不能安全地把兔子 API 密钥放进网页。因此项目包含一个独立的 Cloudflare Worker 代理：网页只请求 Worker，Worker 再访问兔子 API。Rabbit API 的模型 ID 可选择，但必须支持 `/v1/chat/completions`。

1. 在兔子 API 账户创建 API Key，并在 Cloudflare 登录/创建账户。密钥不要发到聊天、不要放进网页设置或仓库。
2. 在本目录安装 Wrangler 并登录 Cloudflare：`npm install -g wrangler`，然后 `wrangler login`。
3. 在项目目录依次设置后端密钥：

   ```bash
   wrangler secret put RABBIT_API_KEY
   wrangler secret put APP_PASSWORD
   ```

   第一个输入兔子 API Key；第二个设置至少 12 个字符的家庭访问码。输入过程不会回显，两个值都不会写进代码。
4. 部署代理：`wrangler deploy`。命令返回一个 `https://...workers.dev` 地址。
5. 在手机网站的“AI 英语搭档 → 连接兔子 API / 选择模型”里填入 Worker 地址、访问码和兔子模型广场里的模型 ID，然后点“刷新”或“保存并连接”。此处的模型需支持 Chat Completions；若模型广场标注不清楚，可直接填模型 ID 测试。

聊天记录和网址/模型选择保存在当前浏览器本地；访问码仅保存在当前标签页会话中；兔子 API Key 只保存在 Cloudflare Worker Secret。兔子 API 用量按兔子账户计费，与 ChatGPT Plus 额度分开。语音输入使用浏览器 Web Speech API，浏览器/系统不支持时仍可打字和使用朗读。

## 下一版建议

1. 加真正的双手机邀请码组队。
2. 加 Supabase 登录和实时同步。
3. 加 AMEP 风格生活英语课程包。
4. 加 Web Speech Recognition 做真实发音评分。
5. 加夫妻周任务，例如本周合计 10 节。
6. 加自定义奖励，例如完成 7 天后兑换一顿夜宵或一次电影。
7. 加 AI 对话练习，将每日课程最后一题改成 3 轮真实场景对话。

## 设计说明

本项目使用自己的名称、图标和界面视觉。核心只借鉴语言学习产品中常见的游戏化设计原则，例如学习路径、连续天数、经验值、低门槛小课、错题复习和即时反馈。
