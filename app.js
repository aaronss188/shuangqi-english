const STORAGE_KEY = 'shuangqi_english_v1';

const lessonCatalog = [
  {
    unit: '阶段 1 · 开口与表达需求', subtitle: '问候、状态、简单请求', icon: '🌱',
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
    unit: '生活场景 · 外出交流', subtitle: '点餐、购物、问路', icon: '🧭',
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
    unit: '生活场景 · 健康服务', subtitle: '看诊、预约、表达症状', icon: '☀️',
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
  },
  {
    unit: '阶段 2 · 句子基础', subtitle: 'be 动词、一般现在时、提问与时间表达', icon: '🧱',
    lessons: [
      { id:'u4l1', title:'用 be 介绍自己', label:'句型基础', questions:[
        {type:'choice',prompt:'“她很友好”怎么说？',options:['She friendly.','She is friendly.','She are friendly.','She be friendly.'],answer:1,explain:'主语 she 配 is：She is friendly.'},
        {type:'choice',prompt:'“我们不是很忙”怎么说？',options:['We not very busy.','We are not very busy.','We is not very busy.','We do not very busy.'],answer:1,explain:'be 动词句的否定在 be 后加 not：We are not...'},
        {type:'choice',prompt:'“你是新来的学生吗？”怎么问？',options:['Are you a new student?','Do you are a new student?','You are a new student?','Is you a new student?'],answer:0,explain:'be 动词问句把 are 放到主语前：Are you...?'},
        {type:'speak',prompt:'说一个关于自己的事实',phrase:'I am from China, and I am learning English.','zh':'我来自中国，我正在学英语。'},
        {type:'choice',prompt:'“他们在家”怎么说？',options:['They is at home.','They are at home.','They am at home.','They be at home.'],answer:1,explain:'they 配 are；地点前用 at：They are at home.'}
      ]},
      { id:'u4l2', title:'说日常习惯', label:'一般现在时', questions:[
        {type:'choice',prompt:'“我每天坐公交上班”怎么说？',options:['I take the bus to work every day.','I takes the bus every day.','I am take bus every day.','I taking bus to work.'],answer:0,explain:'一般现在时描述习惯；I 后用动词原形 take。'},
        {type:'choice',prompt:'“他在一家咖啡店工作”怎么说？',options:['He work at a cafe.','He works at a cafe.','He is work at a cafe.','He working at a cafe.'],answer:1,explain:'一般现在时主语 he/she/it 后，动词通常加 -s。'},
        {type:'choice',prompt:'“你喜欢咖啡吗？”怎么问？',options:['Like you coffee?','Are you like coffee?','Do you like coffee?','Does you like coffee?'],answer:2,explain:'一般现在时用 Do + you + 动词原形提问。'},
        {type:'choice',prompt:'“她周末不工作”怎么说？',options:['She don’t work on weekends.','She doesn’t work on weekends.','She isn’t work on weekends.','She not works on weekends.'],answer:1,explain:'she 的否定用 doesn’t，后面的动词恢复原形 work。'},
        {type:'speak',prompt:'说说你的一个日常习惯',phrase:'I usually have breakfast at home.','zh':'我通常在家吃早餐。'}
      ]},
      { id:'u4l3', title:'时间与频率', label:'把话说具体', questions:[
        {type:'choice',prompt:'“我通常七点起床”怎么说？',options:['I usually get up at seven.','I get usually up seven.','Usually I am get up at seven.','I usual get up at seven.'],answer:0,explain:'频率副词 usually 常放在实义动词前。'},
        {type:'choice',prompt:'“她有时在家做饭”怎么说？',options:['She sometimes cooks at home.','She sometimes cook at home.','She is sometimes cook at home.','She cook sometimes at home.'],answer:0,explain:'she 后 cook 加 s；sometimes 放在动词前很自然。'},
        {type:'choice',prompt:'“我周一到周五上班”怎么说？',options:['I work from Monday to Friday.','I work in Monday to Friday.','I working Monday until Friday.','I works from Monday to Friday.'],answer:0,explain:'from...to... 表示从……到……。'},
        {type:'choice',prompt:'“现在是几点？”怎么问？',options:['What time is it?','What hour now?','How time is now?','What is time it?'],answer:0,explain:'询问当前时间用 What time is it?'},
        {type:'speak',prompt:'说出你的起床时间',phrase:'I get up at seven thirty on weekdays.','zh':'我工作日七点半起床。'}
      ]}
    ]
  },
  {
    unit: '阶段 3 · 生活表达', subtitle: '家、出行、健康与真实需求', icon: '🏡',
    lessons: [
      { id:'u5l1', title:'家人与住处', label:'生活词汇', questions:[
        {type:'choice',prompt:'“我和妻子住在一套公寓里”怎么说？',options:['I live in an apartment with my wife.','I living in apartment and wife.','I lives at apartment with my wife.','I live my wife apartment.'],answer:0,explain:'live in + 住所；with my wife 表示和妻子一起。'},
        {type:'choice',prompt:'“厨房里有一张桌子”怎么说？',options:['There is a table in the kitchen.','There are a table in the kitchen.','It is a table in kitchen.','Have a table in the kitchen.'],answer:0,explain:'单数名词用 There is；复数用 There are。'},
        {type:'choice',prompt:'“卧室里有两扇窗户”怎么说？',options:['There is two windows in the bedroom.','There are two windows in the bedroom.','There have two windows in bedroom.','It has two windows in the bedroom.'],answer:1,explain:'two windows 是复数，用 There are。'},
        {type:'choice',prompt:'“我家附近有一家超市”怎么说？',options:['There is a supermarket near my home.','There are a supermarket near my home.','A supermarket near my home have.','My home has near a supermarket.'],answer:0,explain:'介绍某地有某物，可用 There is/are。'},
        {type:'speak',prompt:'介绍你住的地方',phrase:'I live in a small apartment near a park.','zh':'我住在公园附近的一套小公寓里。'}
      ]},
      { id:'u5l2', title:'坐车与问路', label:'出行英语', questions:[
        {type:'choice',prompt:'“去市中心的公交车在哪儿坐？”怎么问？',options:['Where can I catch the bus to downtown?','Where I catch bus downtown?','Where does bus to downtown?','How catch I downtown bus?'],answer:0,explain:'Where can I... 是礼貌又实用的询问方式。'},
        {type:'choice',prompt:'“我需要在下一站下车”怎么说？',options:['I need to get off at the next stop.','I need get out next stop.','I get off in next station need.','I need getting at next stop.'],answer:0,explain:'get off 表示下车；need 后接 to + 动词。'},
        {type:'choice',prompt:'“车站离这里多远？”怎么问？',options:['How far is the station from here?','How long is station here?','How far the station from here?','What distance station is?'],answer:0,explain:'How far is... from here? 用来问距离。'},
        {type:'choice',prompt:'“直走，然后左转”怎么说？',options:['Go straight, then turn left.','Go straightly and turn the left.','Straight go, then left turn.','Go ahead to left side turn.'],answer:0,explain:'路线指引常用 Go straight, then turn left/right.'},
        {type:'speak',prompt:'问车站怎么走',phrase:'Excuse me, how do I get to the train station?','zh':'打扰一下，请问去火车站怎么走？'}
      ]},
      { id:'u5l3', title:'健康与预约', label:'表达症状', questions:[
        {type:'choice',prompt:'“我从昨天开始喉咙痛”怎么说？',options:['I have a sore throat since yesterday.','I have had a sore throat since yesterday.','My throat is sore from yesterday.','I sore throat yesterday until.'],answer:1,explain:'从过去持续到现在，常用 have had + 症状 + since。'},
        {type:'choice',prompt:'“我可以预约周五吗？”怎么问？',options:['Can I make an appointment for Friday?','Can I do appointment in Friday?','I can appointment Friday?','Can I book on doctor Friday?'],answer:0,explain:'make an appointment for + 日期，表示预约某天。'},
        {type:'choice',prompt:'“我对这种药过敏”怎么说？',options:['I am allergic to this medicine.','I allergic for this medicine.','I have allergy with this medicine.','This medicine allergic me.'],answer:0,explain:'be allergic to... 表示对……过敏。'},
        {type:'choice',prompt:'药品说明写着 “Take twice a day”，意思是？',options:['每天服用两次','一次服两片','两天后服用','每天服药两天'],answer:0,explain:'twice a day 是每天两次；具体用药请遵照医护人员建议。'},
        {type:'speak',prompt:'向诊所说明需要预约',phrase:'I would like to make an appointment, please.','zh':'我想预约看诊，谢谢。'}
      ]}
    ]
  },
  {
    unit: '阶段 4 · 扩展句子', subtitle: '过去、计划、比较与表达理由', icon: '🧭',
    lessons: [
      { id:'u6l1', title:'讲昨天发生的事', label:'一般过去时', questions:[
        {type:'choice',prompt:'“昨天我在家休息”怎么说？',options:['I rest at home yesterday.','I rested at home yesterday.','I am resting at home yesterday.','I did rested at home yesterday.'],answer:1,explain:'规则动词 rest 的过去式是 rested。'},
        {type:'choice',prompt:'“她昨天去了超市”怎么说？',options:['She goed to the supermarket.','She went to the supermarket.','She goes to the supermarket yesterday.','She did went to the supermarket.'],answer:1,explain:'go 的过去式是不规则变化 went。'},
        {type:'choice',prompt:'“你昨晚看电影了吗？”怎么问？',options:['Did you watch a movie last night?','Did you watched a movie last night?','Were you watch a movie last night?','You did watched a movie?'],answer:0,explain:'Did 后用动词原形 watch。'},
        {type:'choice',prompt:'“我没有听到电话”怎么说？',options:['I didn’t heard the phone.','I didn’t hear the phone.','I wasn’t hear the phone.','I not heard the phone.'],answer:1,explain:'didn’t 后的动词用原形 hear。'},
        {type:'speak',prompt:'说说昨天做过的一件事',phrase:'I went to the shops and cooked dinner yesterday.','zh':'我昨天去商店买东西，然后做了晚饭。'}
      ]},
      { id:'u6l2', title:'说计划与安排', label:'未来表达', questions:[
        {type:'choice',prompt:'“我今晚要学习英语”怎么说？',options:['I am going to study English tonight.','I going study English tonight.','I go to studying English tonight.','I am go study English tonight.'],answer:0,explain:'be going to + 动词原形，常表达已有计划。'},
        {type:'choice',prompt:'“明天会下雨”怎么说？',options:['It will rain tomorrow.','It will rains tomorrow.','It is rain tomorrow.','It raining tomorrow.'],answer:0,explain:'will 后接动词原形 rain。'},
        {type:'choice',prompt:'“你周末打算做什么？”怎么问？',options:['What are you going to do this weekend?','What you going do weekend?','What will you doing this weekend?','What are you do at weekend?'],answer:0,explain:'What are you going to do...? 询问计划。'},
        {type:'choice',prompt:'“我们星期六见面吧”怎么说？',options:['Let’s meet on Saturday.','Let’s meeting in Saturday.','We meet at Saturday let.','Let meet Saturday on.'],answer:0,explain:'Let’s + 动词原形提出建议；星期前用 on。'},
        {type:'speak',prompt:'说一个本周计划',phrase:'I am going to practise English for ten minutes tonight.','zh':'我今晚打算练十分钟英语。'}
      ]},
      { id:'u6l3', title:'比较与表达理由', label:'连接想法', questions:[
        {type:'choice',prompt:'“坐公交比打车便宜”怎么说？',options:['The bus is cheaper than a taxi.','The bus is cheap than a taxi.','The bus more cheap from taxi.','The bus is cheapest than a taxi.'],answer:0,explain:'短形容词比较级通常加 -er，再用 than 引出比较对象。'},
        {type:'choice',prompt:'“因为下雨，我待在家里”怎么说？',options:['I stayed home because it was raining.','I stayed home because raining.','Because it raining, I stay home yesterday.','I stayed home so because rain.'],answer:0,explain:'because 后接完整句子，说明原因。'},
        {type:'choice',prompt:'“我喜欢这个社区，因为它很安静”怎么说？',options:['I like this neighbourhood because it is quiet.','I like this neighbourhood so it quiet.','I like because this neighbourhood quiet.','I like this neighbourhood because quiet.'],answer:0,explain:'用 because + 主语 + 动词解释理由。'},
        {type:'choice',prompt:'“我觉得英语有用，但有时很难”怎么说？',options:['I think English is useful, but it is sometimes difficult.','I think English useful but sometimes difficult it.','I think English is useful because it is difficult.','I am think English useful, but hard sometimes.'],answer:0,explain:'but 连接两个相反或不同的想法。'},
        {type:'speak',prompt:'用 because 说一个理由',phrase:'I study English because I want to communicate with more people.','zh':'我学英语，因为我想和更多人交流。'}
      ]}
    ]
  },
  {
    unit: '阶段 5 · 听读与综合', subtitle: '听关键信息、读短文、理解日常通知', icon: '📚',
    lessons: [
      { id:'u7l1', title:'听懂时间与地点', label:'听力基础', questions:[
        {type:'choice',prompt:'听句子，选出预约时间。',listen:'Your appointment is at ten thirty on Thursday morning.',options:['周四上午十点半','周二上午十点半','周四下午三点','周三上午十点'],answer:0,explain:'抓住 Thursday morning 和 ten thirty 两个关键信息。'},
        {type:'choice',prompt:'听句子，选出要去的地点。',listen:'The meeting is in room twelve, next to the front desk.',options:['12号房间，在前台旁边','20号房间，在电梯旁边','前台对面的餐厅','12楼的会议室'],answer:0,explain:'room twelve 是 12 号房间；next to 是在旁边。'},
        {type:'choice',prompt:'听句子，选出公交车票价。',listen:'A single ticket to the city centre is four dollars fifty.',options:['$4.15','$4.50','$5.40','$14.50'],answer:1,explain:'four dollars fifty 是 4.50；听数字时留意顺序。'},
        {type:'choice',prompt:'听句子，选出需要带的东西。',listen:'Please bring your photo ID and the completed form.',options:['照片证件和填好的表格','护照和两张照片','银行卡和收据','手机和预约信'],answer:0,explain:'photo ID 是带照片的身份证件，completed form 是填好的表格。'},
        {type:'speak',prompt:'跟读并注意时间重音',phrase:'My appointment is at ten thirty on Thursday.','zh':'我的预约在周四十点半。'}
      ]},
      { id:'u7l2', title:'读懂短通知与信息', label:'阅读基础', questions:[
        {type:'choice',passage:'COMMUNITY CENTRE\nEnglish class: Tuesday and Thursday, 6:00–7:30 pm.\nPlease arrive ten minutes early.',prompt:'英语课在什么时候？',options:['周二和周四晚上六点到七点半','周二早上六点','每天晚上七点半','周四下午四点到六点'],answer:0,explain:'先定位 English class，再读日期和时间。'},
        {type:'choice',passage:'NOTICE\nThe lift is out of service today. Please use the stairs.',prompt:'这条通知告诉你什么？',options:['电梯今天暂停使用，请走楼梯','楼梯今天关闭，请坐电梯','电梯今天维修完成','请在楼梯间等候'],answer:0,explain:'out of service 表示暂时不能使用。'},
        {type:'choice',passage:'Hi Sam,\nI’m running late. The bus is stuck in traffic. I should be there at 6:15.\n—Mia',prompt:'Mia 为什么会迟到？',options:['公交车堵在路上','她错过了火车','她还在家工作','她不知道地址'],answer:0,explain:'running late 是快迟到了；stuck in traffic 是堵车。'},
        {type:'choice',passage:'SALE\nAll children’s jackets: 20% off this week.\nOpen Monday to Saturday.',prompt:'哪种商品打折？',options:['儿童夹克','所有鞋子','成人外套','书包'],answer:0,explain:'定位 All children’s jackets，确认折扣商品。'},
        {type:'speak',prompt:'用一句话复述通知中的时间',phrase:'The English class starts at six on Tuesday.','zh':'英语课周二六点开始。'}
      ]},
      { id:'u7l3', title:'短文理解与综合复习', label:'基础阅读', questions:[
        {type:'choice',passage:'Emma moved to a new city last year. She takes the train to work because it is faster than driving. On weekends, she likes walking by the river with her friends.',prompt:'Emma 为什么坐火车上班？',options:['因为比开车快','因为她不会开车','因为火车站在家里','因为她周末上班'],answer:0,explain:'回到原文找 because 后的原因：it is faster than driving。'},
        {type:'choice',passage:'Emma moved to a new city last year. She takes the train to work because it is faster than driving. On weekends, she likes walking by the river with her friends.',prompt:'Emma 周末喜欢做什么？',options:['和朋友在河边散步','在家看电视','开车去上班','独自坐火车'],answer:0,explain:'在原文定位 On weekends 后面的活动。'},
        {type:'choice',prompt:'选择正确的短消息：你今天不舒服，想取消预约。',options:['I’m not feeling well today, so I need to cancel my appointment.','I feel not well yesterday and appointment cancel.','I not feel good, can appointment?','I am sick so I go to appointment canceling.'],answer:0,explain:'用 so 连接状况和结果；cancel my appointment 是取消预约。'},
        {type:'choice',prompt:'“我去年搬到这里，现在在附近工作”怎么说？',options:['I moved here last year, and I work nearby now.','I move here last year and worked nearby now.','I was move here last year, I work near now.','I moved here the last year and am work nearby.'],answer:0,explain:'last year 用过去时 moved；现在的工作用一般现在时 work。'},
        {type:'speak',prompt:'用三句简单英语介绍自己、日常和一个计划',phrase:'I live with my wife. I usually study English at night. This weekend, I am going to visit a friend.','zh':'我和妻子住在一起。我通常晚上学英语。这个周末我打算去看一位朋友。'}
      ]}
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
      ${q.passage ? `<div class="reading-passage">${escapeHtml(q.passage)}</div>` : ''}
      ${q.listen ? `<button class="listen-prompt" id="questionListen">🔊 先听英文，再选答案</button>` : ''}
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="question-hint">不用追求一次全对，先让嘴和脑子熟起来。</div>
      <div class="answer-grid">${q.options.map((opt,i)=>`<button class="answer-btn" data-answer="${i}">${escapeHtml(opt)}</button>`).join('')}</div>`;
    if(q.listen) $('questionListen').addEventListener('click', ()=>speakText(q.listen));
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

function openLivePractice(){
  const next = lessonCatalog.flatMap(unit=>unit.lessons).find(lesson=>!user().completed.includes(lesson.id));
  const topic = next ? next.title : '日常生活与兴趣';
  const prompt = `陪我围绕“${topic}”用美式英语自然聊天。请根据我的回答灵活追问，不要照固定脚本。遇到错误时先自然回应，不要频繁打断；聊完后用中文总结 3 个最值得改进的表达，并给我一个下次复习的小目标。`;
  openSheet(`<div class="sheet-title">GPT Live 自由口语</div>
    <div class="sheet-copy">课程负责循序渐进地打基础；口语不设固定对话。打开 GPT 的 Live 语音后，可以让它围绕当前课程主题自然追问。</div>
    <div class="live-topic">本次可聊主题：<b>${escapeHtml(topic)}</b></div>
    <div class="live-prompt">${escapeHtml(prompt)}</div>
    <button class="primary-btn" id="copyLivePrompt">复制练习提示</button>`);
  $('copyLivePrompt').addEventListener('click', async ()=>{
    try{ await navigator.clipboard.writeText(prompt); showToast('提示已复制，打开 GPT Live 开始聊吧'); }
    catch{ showToast('复制失败，可以长按上面的提示文字复制'); }
  });
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

$('profileBtn').addEventListener('click', openProfileSheet);
$('coupleBtn').addEventListener('click', openCoupleSheet);
$('settingsBtn').addEventListener('click', openSettings);
$('phraseBtn').addEventListener('click', openPhrase);
$('liveBtn').addEventListener('click', openLivePractice);
$('reviewBtn').addEventListener('click', openReview);
$('syncBtn').addEventListener('click', openSync);
$('closeLesson').addEventListener('click', ()=>{
  if(confirm('先退出这一节吗？当前这节不会计入完成。')) closeLesson();
});
$('sheetBackdrop').addEventListener('click', closeSheet);
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>showTab(btn.dataset.tab)));

if('serviceWorker' in navigator){ window.addEventListener('load', ()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
render();
