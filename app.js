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

function buildLesson(id,title,label,rule,targets,listen,finalTask){
  const seed=Number(id.slice(-1))||1;
  const select=(prompt,correct,wrongs,explain,n)=>{
    const choices=[correct,...wrongs], shift=(seed+n*3)%choices.length;
    const options=choices.slice(shift).concat(choices.slice(0,shift));
    return {type:'choice',prompt,options,answer:options.indexOf(correct),explain};
  };
  return {id,title,label,questions:[
    select(...rule,0),
    ...targets.map((target,index)=>select(target[5]||`选择“${target[0]}”的自然英文表达。`,target[1],target.slice(2,5),`自然表达是 “${target[1]}”。`,index+1)),
    select('先听英文，再选出对应意思。',listen[1],listen[2],listen[3],3,{listen:listen[0]}),
    finalTask
  ].map((q,index)=>index===3?{...q,listen:listen[0]}:q)};
}

function buildSceneLesson(id,title,label,dialogue,words,choice1,speak1,choice2,speak2){
  const vocabulary=words.map(([word,pronunciation,meaning,usage])=>{
    const exampleLine=dialogue.find(line=>line[1].toLowerCase().includes(word.toLowerCase()));
    return {type:'vocab',word,pronunciation,meaning,usage,example:exampleLine?.[1]||word,exampleZh:exampleLine?.[2]||''};
  });
  const roleplay=dialogue.filter((line,index)=>index%2===0&&dialogue[index+1]?.[0]==='You').map((line,index)=>({
    type:'roleplay',prompt:`第 ${index+1} 轮：先听对方说，再用自己的话回答。`,cue:line[1],cueZh:line[2],response:dialogue[index*2+1][1],responseZh:dialogue[index*2+1][2]
  }));
  return {id,title,label,estimatedMinutes:30,questions:[
    {type:'dialogue',prompt:'先听完整对话，再逐句跟读。重点看下面的核心表达和词汇注释。',dialogue,words},
    ...vocabulary,
    {...choice1,type:'choice'},
    {type:'speak',prompt:speak1[0],phrase:speak1[1],zh:speak1[2],words:speak1[3]||[]},
    {...choice2,type:'choice'},
    {type:'speak',prompt:speak2[0],phrase:speak2[1],zh:speak2[2],words:speak2[3]||[]},
    ...roleplay
  ]};
}

function expandCompactLessons(){
  lessonCatalog.forEach(unit=>unit.lessons.forEach(lesson=>{
    if(lesson.estimatedMinutes || lesson.title.includes('回顾') || lesson.questions.length!==5) return;
    const samples=[];
    const addSample=(phrase,meaning,usage)=>{
      if(!phrase || !/[a-z]/i.test(phrase) || phrase.trim().split(/\s+/).length<2) return;
      if(samples.some(item=>item.phrase.toLowerCase()===phrase.toLowerCase())) return;
      samples.push({phrase,meaning:meaning||'先理解整句意思，再模仿表达。',usage:usage||'先听读，再脱离提示自己说一遍。'});
    };
    lesson.questions.forEach(q=>{
      if(q.type==='speak') addSample(q.phrase,q.zh,q.prompt);
      else if(q.type==='choice' && q.options?.[q.answer]){
        const meaning=q.prompt?.match(/[“「]([^”」]+)[”」]/)?.[1] || q.prompt;
        addSample(q.options[q.answer],meaning,q.explain);
      } else if(q.type==='write') addSample(q.modelAnswer,q.prompt,'参考句：先读懂，再试着换成自己的信息。');
    });
    if(samples.length<3) return;
    const selected=samples.slice(0,3);
    const dialogue=[
      ['Coach','Let’s practice a few useful sentences.','我们来练几句实用英语。'],
      ['You',selected[0].phrase,selected[0].meaning],
      ['Coach','Good. Listen to the next sentence.','很好，听一听下一句。'],
      ['You',selected[1].phrase,selected[1].meaning],
      ['Coach','Now try one more.','现在再试一句。'],
      ['You',selected[2].phrase,selected[2].meaning]
    ];
    const phraseCards=selected.map(item=>({type:'vocab',word:item.phrase,pronunciation:'整句听读',meaning:item.meaning,usage:item.usage,example:item.phrase,exampleZh:item.meaning}));
    const roleplay=dialogue.filter((line,index)=>index%2===0&&dialogue[index+1]?.[0]==='You').map((line,index)=>({
      type:'roleplay',prompt:`第 ${index+1} 轮：听提示后，先自己说，再看参考句。`,cue:line[1],cueZh:line[2],response:dialogue[index*2+1][1],responseZh:dialogue[index*2+1][2]
    }));
    lesson.questions=[
      {type:'dialogue',prompt:'先听提示和示范句，再跟读三句。熟悉后试着不看中文说出来。',dialogue,words:selected.map(item=>[item.phrase,'整句听读',item.meaning,item.usage])},
      ...phraseCards,
      ...lesson.questions,
      ...roleplay
    ];
    lesson.estimatedMinutes=30;
  }));
}

const newStageStart=lessonCatalog.length;
lessonCatalog.push(
  {
    unit:'阶段 6 · 家庭与日常',subtitle:'家人、家务、工作日与休闲安排',icon:'🏠',lessons:[
      buildLesson('u8l1','介绍家人','家庭表达',
        ['选择正确的所有格：___ sister is a nurse.','My',['Me','I','Mine'],'My 是形容词性物主代词，放在名词 sister 前。'],
        [['这是我哥哥。','This is my older brother.','This is me older brother.','This is I older brother.','This is mine older brother.'],['她有两个孩子。','She has two children.','She have two children.','She is have two children.','She has two childs.']],
        ['My parents live in a small town.','我父母住在一个小镇。',['我父母在一个小镇工作。','我和父母去小镇。','我父母来自一个大城市。'],'听 live in，抓住居住地点。'],
        {type:'speak',prompt:'介绍一位家人和一个特点。',phrase:'My wife is kind, and she enjoys reading.','zh':'我妻子很友善，她喜欢阅读。'}),
      buildLesson('u8l2','描述房间与物品','家居词汇',
        ['“客厅里有一把椅子”应选哪句？','There is a chair in the living room.',['There are a chair in the living room.','It has a chair in living room.','There is chair at living room.'],'单数物品用 There is；房间前用 in。'],
        [['灯在沙发旁边。','The lamp is next to the sofa.','The lamp is between the sofa.','The lamp next the sofa.','The lamp is near of sofa.'],['钥匙在桌子上。','The keys are on the table.','The keys is on the table.','The keys are in the table.','Keys on table is.']],
        ['There are two bedrooms upstairs.','楼上有两间卧室。',['楼下有两间卧室。','楼上有一间浴室。','楼上有两间客厅。'],'听 two bedrooms 和 upstairs。'],
        {type:'speak',prompt:'说说家里一个物品在哪里。',phrase:'My phone is on the table next to the window.','zh':'我的手机在窗边的桌子上。'}),
      buildLesson('u8l3','家务怎么分工','日常动词',
        ['“我周末洗衣服”怎么说？','I do the laundry on weekends.',['I make the laundry on weekends.','I am do laundry on weekends.','I does the laundry on weekends.'],'do the laundry 是“洗衣服”的常用搭配。'],
        [['她每天做晚饭。','She makes dinner every day.','She make dinner every day.','She does dinner every day.','She is make dinner every day.'],['我们轮流打扫厨房。','We take turns cleaning the kitchen.','We take turn clean the kitchen.','We take turns to cleaning kitchen.','We are take turns clean.']],
        ['He usually takes out the rubbish after dinner.','他通常晚饭后倒垃圾。',['他通常晚饭前买垃圾袋。','他每天早上做晚饭。','他晚饭后洗衣服。'],'听 usually、after dinner 和 takes out。'],
        {type:'write',prompt:'写两句介绍你们家谁做什么家务。',modelAnswer:'I usually cook dinner. My wife takes out the rubbish.'}),
      buildLesson('u8l4','工作日作息','时间与习惯',
        ['“我早上八点开始工作”怎么说？','I start work at eight in the morning.',['I am start work in eight morning.','I starts work at eight in the morning.','I start to work on eight morning.'],'start work 表示开始工作；具体时刻前用 at。'],
        [['我下班后回家。','I go home after work.','I go to home after work.','I am go home after work.','I goes home after work.'],['午休通常持续半小时。','My lunch break usually lasts half an hour.','My lunch break usual last half hour.','My lunch break is last half hour.','My lunch break lasts usually a half.']],
        ['I leave home at seven forty-five and walk to the bus stop.','我七点四十五离家，步行去公交站。',['我七点四十五到家，坐公交去上班。','我七点半离家，开车去车站。','我八点离开办公室去公交站。'],'听 leave home 的时间和出行方式。'],
        {type:'speak',prompt:'用两句描述你的工作日早晨。',phrase:'I get up at seven and leave home at eight.','zh':'我七点起床，八点出门。'}),
      buildLesson('u8l5','休闲与兴趣','喜欢做什么',
        ['“我喜欢散步”怎么说？','I enjoy going for walks.',['I enjoy go for walks.','I am enjoy walking.','I enjoys going for walks.'],'enjoy 后面接动词 -ing 形式。'],
        [['她喜欢听播客。','She likes listening to podcasts.','She likes listen to podcasts.','She like listening podcasts.','She is like podcasts.'],['我们有时周末去徒步。','We sometimes go hiking on weekends.','We sometime goes hiking on weekends.','We go sometimes hike in weekends.','We are go hiking weekends.']],
        ['In my free time, I like watching movies with my friends.','空闲时，我喜欢和朋友看电影。',['工作时，我喜欢和朋友看电影。','空闲时，我喜欢独自做饭。','周末时，我和朋友去上班。'],'听 free time 和 watching movies。'],
        {type:'write',prompt:'写三句介绍一个兴趣：做什么、多久一次、为什么喜欢。',modelAnswer:'I enjoy cooking. I cook three times a week because it helps me relax.'})
    ]
  },
  {
    unit:'阶段 7 · 饮食、购物与服务',subtitle:'点餐、数量、付款和处理小问题',icon:'🛍️',lessons:[
      buildLesson('u9l1','说出食物与偏好','食物词汇',
        ['“我不吃牛肉”怎么说？','I don’t eat beef.',['I am not eat beef.','I doesn’t eat beef.','I don’t eats beef.'],'一般现在时否定：I don’t + 动词原形。'],
        [['我更喜欢茶。','I prefer tea.','I am prefer tea.','I prefers tea.','I preference tea.'],['这道菜有鸡肉和米饭。','This dish comes with chicken and rice.','This dish come with chickens and rice.','This dish is come chicken rice.','This dish has with chicken and rice.']],
        ['I’m allergic to peanuts, so I can’t eat this sauce.','我对花生过敏，所以不能吃这种酱。',['我喜欢花生，所以想要多加酱。','我对牛奶过敏，不能吃米饭。','我对海鲜过敏，想要这种酱。'],'注意 peanuts 和 sauce 是关键食材信息。'],
        {type:'speak',prompt:'表达一种饮食偏好或忌口。',phrase:'I don’t eat pork, but I can eat chicken.','zh':'我不吃猪肉，但可以吃鸡肉。'}),
      buildLesson('u9l2','可数与不可数','数量表达',
        ['“两杯咖啡”怎么说？','two cups of coffee',['two coffee cups','two cup of coffees','two cups coffee','two coffees cup'],'coffee 通常不可数；用 cups of 表示具体数量。'],
        [['一点牛奶','a little milk','a few milk','a little milks','little of milk'],['几个苹果','a few apples','a little apples','a few apple','few of apples']],
        ['Could I have a bottle of water and two sandwiches?','请给我一瓶水和两个三明治。',['请给我两瓶果汁和一份沙拉。','请给我一杯咖啡和一个苹果。','请给我一瓶牛奶和两块蛋糕。'],'听数量词 bottle of 和 two sandwiches。'],
        {type:'write',prompt:'写一句购物清单，至少包含一种饮料和两种食物。',modelAnswer:'I need a bottle of water, some rice, and three apples.'}),
      buildLesson('u9l3','在餐厅点餐','礼貌请求',
        ['更礼貌地请求菜单，应该说？','Could we see the menu, please?',['Give us menu.','We can see menu?','Could we seeing a menu?'],'Could we...? 是礼貌询问；menu 前可加 the。'],
        [['我想要一份鸡肉沙拉。','I’d like a chicken salad.','I like have chicken salad.','I’d like chicken salads.','I am like a chicken salad.'],['可以不要洋葱吗？','Could I have it without onions?','Can I have no onion in it?','Could I have it with no onions not?','I could without onions have it?']],
        ['Would you like anything to drink?','您想喝点什么吗？',['您想要账单吗？','您想吃甜点吗？','您想坐靠窗的位置吗？'],'这是服务员询问饮料的常见说法。'],
        {type:'speak',prompt:'点一份餐，并提出一个简单要求。',phrase:'I’d like the grilled fish, with no onions, please.','zh':'我想要烤鱼，不要洋葱，谢谢。'}),
      buildLesson('u9l4','购物与价格','尺码和金额',
        ['“这件衬衫多少钱？”怎么问？','How much is this shirt?',['How many is this shirt?','How much this shirt cost?','How many money is shirt?'],'问单件商品价格用 How much is...?'],
        [['我可以试穿吗？','Can I try it on?','Can I try on it?','Do I try it?','Can I wear it up?'],['有小一号的吗？','Do you have this in a smaller size?','Do you have a small more size?','Is there smaller one size?','You have this size little?']],
        ['It’s on sale for twenty dollars, but the blue one is thirty.','它打折后是二十美元，但蓝色那件是三十美元。',['两件都是二十美元。','蓝色那件是二十美元，另一件三十美元。','打折后是三十美元。'],'听清颜色与价格的对应关系。'],
        {type:'speak',prompt:'问能否试穿并确认价格。',phrase:'Can I try this on? How much is it?','zh':'我可以试穿这件吗？多少钱？'}),
      buildLesson('u9l5','退换与解决问题','服务沟通',
        ['“我想换一个尺寸”怎么说？','I’d like to exchange it for a different size.',['I like change it in different size.','I’d like exchanging for a other size.','I want exchange to a different sizes.'],'exchange A for B 表示把 A 换成 B。'],
        [['收据在这里。','Here is my receipt.','Here are my receipt.','This is have my receipt.','Here my receipt is it.'],['它有点坏了。','It’s a little damaged.','It has a little damage it.','It’s little damage.','It is a little breaking.']],
        ['I bought this yesterday, but it doesn’t work. Could I get a refund?','我昨天买的这个，但它不能用。我可以退款吗？',['我昨天买的这个很好用，能再买一个吗？','我今天买的这个不能用，可以换颜色吗？','我上周买的这个有点小，能试穿吗？'],'先听购买时间和问题，再听退款请求。'],
        {type:'write',prompt:'写一条简短消息：说明商品问题并提出解决办法。',modelAnswer:'I bought this kettle yesterday, but it doesn’t work. Could I exchange it, please?'})
    ]
  },
  {
    unit:'阶段 8 · 出行与公共信息',subtitle:'交通、方向、时刻表和常见标识',icon:'🚌',lessons:[
      buildLesson('u10l1','方位与地点','介词入门',
        ['“银行在邮局对面”怎么说？','The bank is across from the post office.',['The bank is across the post office.','The bank across from is post office.','The bank is opposite to the post office.'],'across from 表示在……对面。'],
        [['药店在超市旁边。','The pharmacy is next to the supermarket.','The pharmacy is next the supermarket.','The pharmacy is near to the supermarket.','The pharmacy is next of supermarket.'],['咖啡店在街角。','The cafe is on the corner.','The cafe is in the corner of street.','The cafe is at corner street.','The cafe on corner is.']],
        ['The library is between the school and the community centre.','图书馆在学校和社区中心之间。',['图书馆在学校对面，社区中心旁边。','社区中心在图书馆和学校之间。','图书馆在学校后面，社区中心前面。'],'between A and B 表示在两者之间。'],
        {type:'speak',prompt:'用一个方位词描述附近地点。',phrase:'The bus stop is in front of the supermarket.','zh':'公交站在超市前面。'}),
      buildLesson('u10l2','理解公交和火车信息','交通时刻',
        ['“下一班火车十分钟后到”怎么说？','The next train arrives in ten minutes.',['The next train arrives after ten minute ago.','The next train is arrive ten minutes.','Next train arriving on ten minutes.'],'in ten minutes 表示十分钟后。'],
        [['我要一张单程票。','I need a one-way ticket.','I need one way tickets.','I need a single travel.','I am need a one-way ticket.'],['这趟车去机场吗？','Does this train go to the airport?','Is this train goes to airport?','Do this train go airport?','This train going to the airport?']],
        ['The number twelve bus leaves from stop B at quarter past nine.','12路公交九点一刻从 B 站台发车。',['12路公交九点半到达 B 站台。','21路公交九点一刻从 A 站台发车。','12路公交九点差一刻到机场。'],'重点听线路号、站台和 quarter past nine。'],
        {type:'speak',prompt:'询问要坐哪路车去机场。',phrase:'Which bus should I take to the airport?','zh':'去机场我应该坐哪路公交？'}),
      buildLesson('u10l3','使用路线指引','顺序与转弯',
        ['“在第二个路口右转”怎么说？','Turn right at the second intersection.',['Turn right in second traffic.','Turn to right at two intersection.','Right turn on the second corner.'],'at the second intersection 是在第二个路口。'],
        [['沿这条路直走。','Go straight along this road.','Go straight in this road.','Go direct this road.','Walk straightly to this street.'],['过桥后左转。','Turn left after the bridge.','Turn left before cross bridge.','Turn to left after bridge is.','After the bridge turn to left side.']],
        ['Walk past the park, then cross the street. The station is on your left.','经过公园，然后过马路。车站在你的左边。',['穿过公园后右转，车站在右边。','经过车站后过马路，公园在左边。','沿街直走，车站在公园后面。'],'past 是经过；on your left 是在你的左边。'],
        {type:'write',prompt:'写两步简单路线：从家走到附近的商店。',modelAnswer:'Go straight along this road. Turn left at the corner. The shop is next to the cafe.'}),
      buildLesson('u10l4','看懂公共标识','生活阅读',
        ['标识 “Keep off the grass” 是什么意思？','请勿踩踏草坪',['请在草坪上等候','请沿草坪边走','请修剪草坪'],'keep off 表示不要靠近或踩踏。'],
        [['No entry','禁止进入','请进入','入口在此','禁止停车'],['Staff only','仅限员工进入','员工请离开','请在此工作','员工停车场']],
        ['Please keep your ticket until the end of your journey.','请保留车票，直到行程结束。',['请在旅程开始时购买车票。','请在到站后丢掉车票。','请把车票交给司机。'],'听 until the end，理解保留车票的时间。'],
        {type:'speak',prompt:'读出并解释一个简单标识。',phrase:'Please queue here and wait for the next bus.','zh':'请在这里排队，等候下一班公交。'}),
      buildLesson('u10l5','旅行中的小状况','求助与说明',
        ['“我找不到我的行李”怎么说？','I can’t find my luggage.',['I don’t can find my luggage.','I can’t found my luggage.','I am not find my baggage.'],'can’t 后接动词原形 find。'],
        [['我的航班延误了。','My flight has been delayed.','My flight is delay.','My flight delayed is.','My flight has delay.'],['我应该去哪个柜台？','Which counter should I go to?','Which counter I should go?','Where counter should I going?','What counter do I should go?']],
        ['Your gate has changed. Please go to gate twenty-four.','您的登机口有变，请前往 24 号登机口。',['您的航班取消，请前往 24 号柜台。','您的登机口是 42 号，请等待通知。','您的航班延误，请前往 20 号登机口。'],'听清 changed 和 gate twenty-four。'],
        {type:'speak',prompt:'在机场说明行李没有到。',phrase:'My luggage hasn’t arrived. Where should I go for help?','zh':'我的行李还没到。我应该去哪里寻求帮助？'})
    ]
  },
  {
    unit:'阶段 9 · 句型升级',subtitle:'正在发生、能力建议、比较和连接词',icon:'🧩',lessons:[
      buildLesson('u11l1','现在正在做什么','现在进行时',
        ['“她正在做饭”怎么说？','She is cooking.',['She cooks now.','She cooking.','She does cooking.'],'现在进行时：be + 动词-ing。'],
        [['我现在在等公交。','I’m waiting for the bus now.','I wait for the bus now.','I am wait the bus now.','I waiting bus now.'],['他们正在看电视。','They are watching TV.','They is watching TV.','They watch TV now.','They are watch TV.']],
        ['We’re having dinner right now. Can I call you later?','我们现在正在吃晚饭。我晚点给你打电话好吗？',['我们晚点吃饭，现在可以给你打电话。','我们正在打电话，晚点吃晚饭好吗？','我们吃完晚饭了，现在给你打电话。'],'right now 表示此刻；later 表示稍后。'],
        {type:'speak',prompt:'说说你现在正在做什么。',phrase:'I’m learning English and listening to music.','zh':'我正在学英语、听音乐。'}),
      buildLesson('u11l2','会做与请求帮助','can / could',
        ['礼貌地请别人重复一遍，怎么说？','Could you say that again, please?',['You can say again?','Could you to say again?','Do you repeat that?'],'Could you...? 是礼貌请求；后接动词原形。'],
        [['我会开车。','I can drive.','I can to drive.','I am can drive.','I cans drive.'],['你能帮我一下吗？','Can you give me a hand?','Can you to help my hand?','Do you can help me?','Can you helping me?']],
        ['Could you speak a little more slowly?','你可以说得稍微慢一点吗？',['你可以说得更大声吗？','你可以再说一遍吗？','你可以说得快一点吗？'],'听 more slowly，是请求放慢语速。'],
        {type:'speak',prompt:'礼貌请求对方说慢一点。',phrase:'Could you speak a little more slowly, please?','zh':'您可以说得稍微慢一点吗？'}),
      buildLesson('u11l3','提出建议与说明责任','should / have to',
        ['“你应该多休息”怎么说？','You should get more rest.',['You should to get more rest.','You have get more rest.','You are should rest more.'],'should 后面接动词原形，表达建议。'],
        [['我必须明天早起。','I have to get up early tomorrow.','I have get up early tomorrow.','I must to get up early tomorrow.','I has to get up early tomorrow.'],['你不必现在决定。','You don’t have to decide now.','You mustn’t decide now.','You don’t have decide now.','You haven’t to decide now.']],
        ['You should bring a jacket. It might get cold tonight.','你应该带件外套，今晚可能会变冷。',['你必须带伞，今晚一定下雨。','你不应该穿外套，今晚很热。','你可以带夹克，明天会变暖。'],'听建议 should bring 和可能性 might get cold。'],
        {type:'speak',prompt:'给朋友一个关于休息或出行的建议。',phrase:'You should take a short break and drink some water.','zh':'你应该休息一会儿，喝点水。'}),
      buildLesson('u11l4','比较两种选择','比较级',
        ['“火车比公交快”怎么说？','The train is faster than the bus.',['The train is more fast than the bus.','The train faster that the bus.','The train is fastest than bus.'],'短形容词 fast 变比较级 faster，后接 than。'],
        [['这个房间比那个大。','This room is bigger than that one.','This room is more big than that one.','This room bigger that one.','This room is biggest than that one.'],['今天比昨天暖和。','It’s warmer today than yesterday.','It’s more warm today that yesterday.','It warmer than yesterday today.','It’s warmest today than yesterday.']],
        ['The blue phone is cheaper, but the black one has a better camera.','蓝色手机更便宜，但黑色手机的相机更好。',['蓝色手机相机更好，黑色手机更便宜。','两部手机价格相同，黑色相机更好。','黑色手机更便宜，但蓝色相机更好。'],'比较价格和相机时留意 cheaper 与 better 的对应对象。'],
        {type:'write',prompt:'写两句比较公交和火车，至少写出一个优点和一个理由。',modelAnswer:'The train is faster than the bus, but the bus is cheaper. I take the bus because it costs less.'}),
      buildLesson('u11l5','连接想法','and / but / because / so',
        ['“我很累，所以今晚要早点睡”怎么说？','I’m tired, so I’m going to bed early tonight.',['I’m tired because I go to bed early tonight.','I’m tired but I’m going to bed early tonight.','I’m tired so going bed early tonight.'],'so 引出结果；because 引出原因。'],
        [['我喜欢散步，因为它让我放松。','I like walking because it helps me relax.','I like walk so it helps relax me.','I like walking but it helps me relaxing.','I like walking because helps relax.'],['天气冷，但阳光很好。','It’s cold, but it’s sunny.','It’s cold, so it’s sunny.','It cold but sunny is.','It’s cold because sunny.']],
        ['I missed the bus, so I took a taxi because I was late.','我错过了公交，所以因为快迟到了就打了出租车。',['我赶上了公交，所以因为很早就打了出租车。','我错过了出租车，所以坐公交，因为不晚。','我错过公交和出租车，但迟到了。'],'区分 so 后的结果和 because 后的原因。'],
        {type:'write',prompt:'写两句介绍一个习惯，并用 because 解释原因。',modelAnswer:'I practise English every day because I want to speak more confidently.'})
    ]
  },
  {
    unit:'阶段 10 · 讲经历与计划',subtitle:'过去事件、先后顺序、近期安排与预测',icon:'⏳',lessons:[
      buildLesson('u12l1','常见不规则过去式','讲过去',
        ['“我们上周末去了海边”怎么说？','We went to the beach last weekend.',['We go to the beach last weekend.','We goed to the beach last weekend.','We were go to the beach last weekend.'],'go 的过去式是 went；last weekend 常与过去时连用。'],
        [['我昨天买了一件外套。','I bought a jacket yesterday.','I buyed a jacket yesterday.','I have buy a jacket yesterday.','I was buy a jacket yesterday.'],['她早上吃了早餐。','She had breakfast in the morning.','She has breakfast yesterday morning.','She haved breakfast this morning.','She did had breakfast morning.']],
        ['I took the wrong train and arrived twenty minutes late.','我坐错了火车，晚到了二十分钟。',['我坐对了火车，提前二十分钟到。','我错过火车，在车站等了二十分钟。','我坐错公交，迟到了半小时。'],'听 take 的过去式 took，以及结果 arrived late。'],
        {type:'speak',prompt:'讲一件上周做过的事。',phrase:'I went shopping with my wife last Saturday.','zh':'上周六我和妻子去购物了。'}),
      buildLesson('u12l2','按顺序讲事情','first / then / after that',
        ['“首先我买票，然后上车”怎么说？','First, I bought a ticket. Then I got on the bus.',['First I buy ticket, then get on bus.','At first I bought, after I got bus.','First I bought ticket, so I got in bus.'],'first 和 then 帮助听者理解事件顺序；注意过去式 bought/got。'],
        [['之后我们在咖啡店见面。','After that, we met at the cafe.','After that, we meet at the cafe.','Then after that we was meet cafe.','After that we are met the cafe.'],['最后我回家休息。','Finally, I went home to rest.','At finally I go home rest.','Finally I went to home for rest.','The last I went home resting.']],
        ['First, turn on the machine. Then add water. Finally, press this button.','首先打开机器，然后加水，最后按这个按钮。',['先加水，再打开机器，最后按按钮。','先按按钮，再加水，最后打开机器。','先打开机器，最后加水，然后按按钮。'],'听清 first、then、finally 的操作顺序。'],
        {type:'write',prompt:'用 first、then、finally 写出早晨出门前的三个步骤。',modelAnswer:'First, I get dressed. Then I make breakfast. Finally, I leave home.'}),
      buildLesson('u12l3','描述生活经历','现在完成时初步',
        ['“我去过悉尼”怎么说？','I have been to Sydney.',['I have went to Sydney.','I was been to Sydney.','I have be in Sydney.'],'have been to 表示去过某地的经历。'],
        [['她已经吃过午饭了。','She has already had lunch.','She have already ate lunch.','She has already eat lunch.','She did already had lunch.'],['你试过这道菜吗？','Have you tried this dish?','Did you tried this dish?','Have you try this dish?','Are you tried this dish?']],
        ['Have you ever travelled by train? Yes, I have, but only once.','你坐火车旅行过吗？坐过，但只有一次。',['你坐火车上班吗？是的，每天都坐。','你昨天坐火车了吗？坐了两次。','你想坐火车旅行吗？是的，现在就想。'],'ever 常用于询问人生经历；once 是一次。'],
        {type:'speak',prompt:'说一个你做过或没做过的生活体验。',phrase:'I have tried Mexican food, but I haven’t tried Thai food.','zh':'我吃过墨西哥菜，但没吃过泰国菜。'}),
      buildLesson('u12l4','安排近期计划','be going to',
        ['“我们周末打算拜访朋友”怎么说？','We’re going to visit our friends this weekend.',['We going visit friends this weekend.','We will going to visit friends.','We are go to visit our friends.'],'be going to + 动词原形表达已有计划。'],
        [['我打算今晚做饭。','I’m going to cook dinner tonight.','I going to cook dinner tonight.','I’m going cook dinner tonight.','I’m going to cooking dinner tonight.'],['她打算报名英语课。','She’s going to sign up for an English class.','She going sign up an English class.','She’s going signing for English class.','She is go to sign up English class.']],
        ['We’re going to leave at eight, so please be ready by seven forty-five.','我们打算八点出发，所以请在七点四十五前准备好。',['我们七点四十五到，八点前离开。','我们八点出发，请在八点十五准备好。','我们打算七点四十五离开，八点到。'],'by seven forty-five 表示不晚于七点四十五。'],
        {type:'write',prompt:'写一条消息，邀请朋友参加你的周末计划。',modelAnswer:'Hi! We’re going to have a picnic on Saturday. Would you like to come?' }),
      buildLesson('u12l5','做预测和临时决定','will',
        ['“我来帮你拿这个袋子”作为临时决定，怎么说？','I’ll help you carry that bag.',['I helping you carry that bag.','I going help you carry that bag.','I’ll to help you carrying that bag.'],'I’ll 是 I will 的缩写；will 后用动词原形。'],
        [['我想明天会很忙。','I think I’ll be busy tomorrow.','I think I be busy tomorrow.','I think I will busy tomorrow.','I am think I’ll busy tomorrow.'],['别担心，我会给你发消息。','Don’t worry. I’ll text you.','Don’t worry. I’ll texting you.','I text you will later.','I will to text you.']],
        ['The weather may change this afternoon, so we’ll decide later.','今天下午天气可能变化，所以我们晚点再决定。',['天气肯定变好了，所以我们现在决定。','今天早上可能下雨，所以我们已经决定。','天气下午不会变，所以我们不用再决定。'],'may 表示可能；we’ll decide later 是晚点决定。'],
        {type:'speak',prompt:'做一个简单预测，并说明你的想法。',phrase:'I think it will be sunny tomorrow, so we can go for a walk.','zh':'我觉得明天会晴，所以我们可以去散步。'})
    ]
  },
  {
    unit:'阶段 11 · 听力与阅读策略',subtitle:'抓主题、找细节、读通知和短消息',icon:'🔎',lessons:[
      buildLesson('u13l1','先听主题大意','听力抓主旨',
        ['听力练习第一遍最适合做什么？','先判断场景和主题',['试着听懂每一个单词','先翻译整段再听','只听最后一句'],'先抓场景、人物和目的，再听细节；不要被生词卡住。'],
        [['听到 platform，通常是在什么场景？','车站或交通出行','餐厅点餐','看医生','购物退货'],['听到 reservation，最可能在做什么？','预订桌位或服务','问公交线路','描述症状','讨论天气']],
        ['Good morning. The number six bus to the city centre is now boarding at stop three.','早上好，前往市中心的 6 路公交现在在 3 号站台开始上客。',['6 路公交已经离开市中心，正在去 3 号站台。','去机场的 3 路公交在 6 号站台上客。','6 路公交因故取消，请去市中心。'],'先确定交通公告，再抓线路、目的地和站台。'],
        {type:'speak',prompt:'听完后用一句话复述关键信息。',phrase:'The number six bus leaves from stop three.','zh':'6 路公交从 3 号站台发车。'}),
      buildLesson('u13l2','听准数字与时间','听力细节',
        ['听时间时，quarter past nine 是几点？','9:15',['9:45','9:30','8:45'],'quarter past 表示过一刻钟；quarter to 表示差一刻。'],
        [['half past six','6:30','6:15','6:45','5:30','half past six 是几点？'],['twenty to four','3:40','4:20','3:20','4:40','twenty to four 是几点？']],
        ['The appointment is on the fifteenth of May at two twenty.','预约日期是 5 月 15 日，时间是两点二十分。',['预约在 5 月 5 日两点四十。','预约在 5 月 15 日四点二十分。','预约在 5 月 50 日两点二十分。'],'听清 fifteenth、May 和 two twenty。'],
        {type:'write',prompt:'把听到的预约时间写成英文日期和时间。',modelAnswer:'The appointment is on May fifteenth at two twenty.'}),
      buildLesson('u13l3','读通知找关键信息','阅读定位',
        ['读一张活动海报，优先找哪几类信息？','日期、时间、地点和参加方式',['每个生词的词典定义','作者的个人经历','文章里最长的句子'],'任务型阅读先定位需要的信息，避免逐词翻译。'],
        [['notice','通知','小说','菜单','收据','notice 是什么意思？'],['available','可用的；有空的','已经完成的','很贵的','很远的','available 是什么意思？']],
        ['The swimming pool is closed on Monday for cleaning. It opens again at six on Tuesday morning.','游泳池周一因清洁关闭，周二早上六点重新开放。',['游泳池周二关闭，周一早上六点开放。','游泳池周一全天开放，周二清洁。','游泳池每周六早上六点开放。'],'找出 closed 的日期与 opens again 的日期。'],
        {type:'speak',prompt:'用一句话概括通知的开放时间。',phrase:'The pool reopens at six on Tuesday morning.','zh':'游泳池周二早上六点重新开放。'}),
      buildLesson('u13l4','读懂短信与邮件','阅读语气与目的',
        ['短信 “Can we move our meeting to Friday?” 的目的是什么？','把会议改到星期五',['取消整个会议','确认会议室地址','询问会议时长'],'move a meeting to... 表示把会议改到某个时间。'],
        [['Could you let me know?','你能告诉我吗？','我已经知道了。','请不要告诉我。','你能替我做吗？','“Could you let me know?”是什么意思？'],['I’m afraid I can’t make it.','恐怕我去不了。','我很期待参加。','我已经到了。','请帮我安排一下。','“I’m afraid I can’t make it.”是什么意思？']],
        ['Hi Alex, I’m running late because my train is delayed. Please start without me. I’ll be there around 6:20.','嗨，Alex，我要迟到了，因为火车晚点。请先开始，不用等我。我大约 6:20 到。',['请 Alex 等他到 6:20 再开始；火车准时。','他取消了活动，火车大约 6:20 发车。','火车晚点，但他会提前到，请先等他。'],'识别原因、请求和预计到达时间。'],
        {type:'write',prompt:'写一条两句短信：说明会迟到，并给出预计到达时间。',modelAnswer:'Sorry, I’m running late because the bus is delayed. I’ll be there around 6:20.'}),
      buildLesson('u13l5','读短文抓主旨与细节','A2 短文',
        ['阅读短文时怎样找到特定日期？','快速扫描数字、星期和月份',['只看第一行','从头逐词翻译','只找形容词'],'扫描式阅读可以先找数字、日期和专有名词。'],
        [['main idea','主旨','详细例子','作者姓名','时间顺序','main idea 是什么意思？'],['for example','例如','最后','因为','相反','for example 是什么意思？']],
        ['The local market opens every Sunday. You can buy fresh vegetables, bread and flowers there. It closes at one in the afternoon.','当地集市每周日开放，可以买到新鲜蔬菜、面包和鲜花，下午一点关门。',['集市每天下午一点开门，只卖面包。','集市每周日开放，下午一点关门。','集市每周一开放，卖蔬菜和衣服。'],'主旨是介绍集市；细节是星期日开放、下午一点关门。'],
        {type:'write',prompt:'用两句英文总结这段集市信息。',modelAnswer:'The local market opens every Sunday. It sells fresh food and flowers and closes at one.'})
    ]
  },
  {
    unit:'阶段 12 · 雅思基础任务',subtitle:'口语短答、阅读定位、基础段落写作',icon:'📝',lessons:[
      buildLesson('u14l1','回答个人日常问题','口语短答',
        ['回答 “Where do you live?” 最完整的基础方式是？','I live in an apartment near the city centre.',['Apartment.','I am live near city centre.','I living in the centre.'],'口语短答可以先直接回答，再补一个简单细节。'],
        [['我在一家小公司工作。','I work for a small company.','I working in small company.','I works for a small company.','I am work small company.'],['我通常晚上学英语。','I usually study English in the evening.','I usual study English on evening.','I am usually study English evening.','I studies English in evening.']],
        ['What do you usually do after work? I usually cook dinner and watch a little TV.','你下班后通常做什么？我通常做晚饭，再看一会儿电视。',['你周末做什么？我通常工作和看电影。','你上班后做什么？我通常睡觉和做饭。','你通常几点下班？我七点做晚饭。'],'识别问题主题 after work 与回答中的两项活动。'],
        {type:'speak',prompt:'用 2 至 3 句回答一个个人日常问题。',phrase:'I usually relax at home after work. I cook dinner and talk with my wife.','zh':'我下班后通常在家放松。我做晚饭，和妻子聊天。'}),
      buildLesson('u14l2','把短答案扩成三句','口语展开',
        ['简单回答后，最容易补充什么？','原因或一个具体例子',['换一个完全不同的话题','重复同一句话三遍','背一段很长的模板'],'回答 + 原因/例子，短而清楚，比背长模板更自然。'],
        [['我喜欢散步，因为它让我放松。','I like walking because it helps me relax.','I like walking so it helps relaxing.','I am like walking because relax.','I enjoy walk because it relax me.'],['例如，我每周去公园两次。','For example, I go to the park twice a week.','For example I goes twice park week.','I go for example park in two week.','For example, I going to park twice.']],
        ['Do you enjoy cooking? Yes, I do. It helps me relax, and I often try a new recipe at the weekend.','你喜欢做饭吗？喜欢。做饭让我放松，我经常在周末试一道新菜。',['不喜欢做饭；我只在周末买菜。','喜欢做饭，因为周末不做新菜。','喜欢做饭，我每天都去餐厅。'],'听回答、理由和例子三个部分。'],
        {type:'speak',prompt:'按“回答 + 原因 + 例子”说三句。',phrase:'I enjoy walking because it keeps me active. For example, I walk by the river on Sundays.','zh':'我喜欢散步，因为这让我保持活力。例如，我周日会沿河散步。'}),
      buildLesson('u14l3','写清楚简单句','写作句子基础',
        ['完整的英文陈述句通常需要什么？','主语和动词',['两个形容词','介词和逗号','只写一个名词'],'基本句子至少要有主语和谓语动词。'],
        [['我每天练习英语。','I practise English every day.','I every day English practise.','Practise English every day I.','I am practise English every day.'],['她在医院工作。','She works at a hospital.','She work in hospital.','At hospital she working.','She is work in a hospital.']],
        ['My English class is on Tuesday and Thursday. It starts at six in the evening.','我的英语课在周二和周四，晚上六点开始。',['我的英语课每天六点结束，周二和周四开始。','我的英语课在周二和周四，晚上六点开始。','我的英语课只在周四上午六点开始。'],'听课程日期和开始时间。'],
        {type:'write',prompt:'写一段三句自我介绍：住在哪里、做什么、为什么学英语。',modelAnswer:'I live in a small city. I work in an office. I am learning English because I want to travel.'}),
      buildLesson('u14l4','写一段连贯小短文','段落结构',
        ['一段短文中，哪个句子最适合放在开头？','概括这一段主题的句子',['一个无关细节','一个没有上下文的代词','最后一句结论'],'先给主题，再补两三个相关细节，段落更容易读懂。'],
        [['first','首先','然而','虽然','最后','first 在说明步骤时是什么意思？'],['also','此外；也','因为','除非','直到','also 是什么意思？']],
        ['I like my neighbourhood. It is quiet and there is a small park nearby. I often walk there after dinner.','我喜欢我住的社区。那里很安静，附近有一个小公园。我常在晚饭后去那里散步。',['我不喜欢社区，因为公园离家很远。','社区很安静，附近有公园，我常在那里散步。','我晚饭前去附近的餐馆工作。'],'句子按观点、地点特点、个人例子展开。'],
        {type:'write',prompt:'写 4 句介绍你喜欢的地方：主题、特点、活动和理由。',modelAnswer:'I like the park near my home. It is quiet and clean. I walk there with my wife on weekends. It helps me relax.'}),
      buildLesson('u14l5','综合阅读与短答','基础模考练习',
        ['选择最清楚的个人经历表达。','Last year, I moved to a new neighbourhood and made two friends.',['Last year I move new area and make friends.','I was move last year and two friends.','I have move to area last year.'],'last year 是明确过去时间，应使用 moved 和 made。'],
        [['我每周上两次课。','I have classes twice a week.','I have two class in week.','I am have classes twice week.','My class twice on a week.'],['我希望以后能更自信地说英语。','I hope I can speak English more confidently.','I hope I speaking English confident.','I can hope speak English more confident.','I hope to speaking English confidently more.']],
        ['Sam works from Monday to Friday. He takes the train at 7:40 and arrives at the office at 8:15.','Sam 周一到周五上班。他 7:40 坐火车，8:15 到办公室。',['Sam 周末上班，8:15 坐火车，7:40 到办公室。','Sam 周一到周五上班，7:40 坐火车，8:15 到办公室。','Sam 每天开车上班，8:15 离开办公室。'],'分别定位工作日、出发时间和到达时间。'],
        {type:'write',prompt:'用三句写一段自己的日常：频率、交通或时间、一个理由。',modelAnswer:'I work five days a week. I take the bus at eight. I like this routine because it is convenient.'})
    ]
  },
  {
    unit:'阶段 13 · 词根词缀与总复习',subtitle:'用构词规律拓词，再完成综合检查',icon:'🌿',lessons:[
      buildLesson('u15l1','前缀 un- 与 re-','词汇扩展',
        ['加上 re- 通常表示什么？','再一次',['相反','没有','人或职业'],'re- 常表示 again，如 rewrite（重写）、reopen（重新开放）。'],
        [['unhappy','不开心的','再开心一次','很开心的','开心的人','“unhappy”是什么意思？'],['rewrite','重写','不再写','写作者','写错了','“rewrite”是什么意思？']],
        ['The shop is closed now, but it will reopen tomorrow morning.','商店现在关门了，但明早会重新营业。',['商店现在营业，明早会关门。','商店明天早上重新装修。','商店今天关门，明天也不会开。'],'reopen 中 re- 表示重新；closed 是关门。'],
        {type:'speak',prompt:'用 un- 或 re- 词汇造一个简单句。',phrase:'I had to rewrite the message because it was unclear.','zh':'我得重写这条消息，因为它不清楚。'}),
      buildLesson('u15l2','后缀 -er / -ful / -less','词汇扩展',
        ['careful 中 -ful 最接近什么意思？','充满……的；有……特质的',['没有……的','再一次','做……的人'],'-ful 常表示“充满某种特质”，careful 是小心的。'],
        [['teacher','教师','教室','教学方法','教科书','“teacher”是什么意思？'],['useful','有用的','无用的','使用者','重新使用','“useful”是什么意思？']],
        ['The information was useful, so I saved it for later.','这个信息很有用，所以我保存起来以后看。',['信息没用，所以我删掉了。','这个信息很难懂，我马上打印了。','信息很重要，所以我立即发出去了。'],'useful 是有用的；for later 是留到以后。'],
        {type:'write',prompt:'选一个词根词缀词汇写句子：helpful、careless 或 teacher。',modelAnswer:'My teacher is helpful, and she explains new words clearly.'}),
      buildLesson('u15l3','常见词族','词形变化',
        ['use 的形容词 “有用的” 是什么？','useful',['user','used','usingly'],'useful 是形容词；useful information 表示有用的信息。'],
        [['teach → 教师','teacher','teachingly','teached','teachful','“teach”对应的职业名词是？'],['help → 帮助；帮手','help / helper','helpfuler','helped person','helpness','选出 help 的动词和表示“帮手”的名词。']],
        ['Learning a few related words together can help you remember them.','把几个相关词放在一起学，可以帮助你记住它们。',['把单词拆得越碎，就越难记住。','学习相关的词可以帮助记忆。','学习句子比学习词汇更困难。'],'related words 是相关词；remember 是记住。'],
        {type:'speak',prompt:'用一个词族里的两个词各造一句短句。',phrase:'I use this app every day. It is useful for learning English.','zh':'我每天使用这个应用。它对学英语很有用。'}),
      buildLesson('u15l4','词根 port 与 spect','中后期构词',
        ['port 在 transport / import / export 中常与什么概念有关？','携带、运输',['看见','写字','发出声音'],'port 来自“携带”相关词根；transport 是运输，import/export 是进出口。'],
        [['inspect','检查；查看','运送出去','写在里面','重新看见','“inspect”是什么意思？'],['transport','运输','翻译','交易价格','看穿','“transport”是什么意思？']],
        ['Please inspect your luggage before you leave the airport.','离开机场前请检查你的行李。',['离开机场前请托运行李。','请在机场出口等待行李。','请在机场购买旅行用品。'],'inspect 表示检查；luggage 是行李。'],
        {type:'write',prompt:'任选 transport、import、export 或 inspect 写一个句子。',modelAnswer:'Trains transport many people across the city.'}),
      buildLesson('u15l5','综合阶段检查','把所学串起来',
        ['综合表达时，哪个做法最有帮助？','先用熟悉的短句表达，再补细节',['尽量用很长但不确定的句子','为了流利跳过时态和主语','每句话都套同一个模板'],'清楚、完整、可理解的简单表达是继续提升的基础。'],
        [['I went to work by bus yesterday.','昨天我坐公交去上班。','我每天坐公交去上班。','我明天打算坐公交上班。','我昨天在家坐公交。','“I went to work by bus yesterday.”是什么意思？'],['I’m going to study because I have an English test.','我打算学习，因为我有英语考试。','我昨天学习，因为考试结束了。','我每天学习，但没有英语考试。','我正在学习，所以我参加了考试。','“I’m going to study because I have an English test.”是什么意思？']],
        ['I usually cook at home, but last Saturday I had dinner with friends. We are going to meet again next week.','我通常在家做饭，但上周六和朋友出去吃了。我们打算下周再见。',['我通常在外面吃饭，但上周六在家做饭。我们下周不会见面。','我通常在家做饭，上周六和朋友吃饭，打算下周再见。','我上周六和朋友做饭，通常下周出去吃饭。'],'听出习惯、过去事件和未来计划三种时间信息。'],
        {type:'write',prompt:'用 4 至 5 句写一段综合介绍：日常习惯、一件过去的事、一个未来计划和一个理由。',modelAnswer:'I usually study English at night. Last weekend, I practised with my wife. We are going to visit friends next week. We want to use more English because we hope to travel.'})
    ]
  }
);
lessonCatalog.push(
  {
    unit:'阶段 14 · 日常对话：家与邻里',subtitle:'从打招呼、聊日常到自然求助',icon:'🏡',lessons:[
      buildSceneLesson('u16l1','认识新邻居','打招呼与自我介绍',[
        ['Mia','Hi, I’m Mia from next door.','嗨，我是隔壁的 Mia。'],['You','Hi, I’m Alex. Nice to meet you.','嗨，我是 Alex。很高兴认识你。'],['Mia','Welcome to the neighborhood!','欢迎搬来这个社区！'],['You','Thanks! We just moved in last week.','谢谢！我们上周刚搬来。'],['Mia','Let me know if you need anything.','如果你需要什么，告诉我一声。'],['You','That’s really nice of you.','你真是太好了。']
      ],[['next door','/ˌnekst ˈdɔːr/','隔壁','常说 live next door，住在隔壁。'],['neighborhood','/ˈneɪbərˌhʊd/','社区；街坊','美式拼法；英式常写 neighbourhood。'],['move in','/muːv ɪn/','搬进来','move in last week 表示上周搬进来。'],['let me know','/let mi noʊ/','告诉我；让我知道','礼貌邀请对方之后再联系。']],
        {prompt:'Mia 住在哪里？',options:['next door','downtown','at the station','in a hotel'],answer:0,explain:'next door 指“隔壁”。'},['向新邻居介绍自己','Hi, I’m Alex. Nice to meet you.','嗨，我是 Alex。很高兴认识你。'],
        {prompt:'“我们上周刚搬来”是哪句？',options:['We just moved in last week.','We move next week.','We live here for a year.','We are moving tomorrow.'],answer:0,explain:'moved in 是 move in 的过去式，表示已经搬进来。'},['回应对方主动提供帮助','That’s really nice of you.','你真是太好了。']),
      buildSceneLesson('u16l2','早上出门前','日常作息与简单提醒',[
        ['Sam','Are you ready to go?','你准备好出门了吗？'],['You','Almost. I’m looking for my keys.','快好了。我在找钥匙。'],['Sam','They’re on the kitchen counter.','它们在厨房台面上。'],['You','Got them. Did you pack lunch?','找到了。你带午饭了吗？'],['Sam','Yes, it’s in my bag. Let’s head out.','带了，在我包里。我们出发吧。'],['You','Okay. I’ll lock the door.','好，我来锁门。']
      ],[['almost','/ˈɔːlmoʊst/','差不多；几乎','Almost. 常用来回答“准备好了吗”。'],['look for','/lʊk fɔːr/','寻找','look for my keys；look 是寻找动作。'],['counter','/ˈkaʊntər/','台面；柜台','kitchen counter 是厨房操作台。'],['head out','/hed aʊt/','出门；动身','口语短语，表示离开当前地点。']],
        {prompt:'钥匙在哪里？',options:['On the kitchen counter.','In the car.','In Sam’s bag.','By the front door.'],answer:0,explain:'counter 是厨房台面。'},['说你正在找某物','I’m looking for my keys.','我正在找我的钥匙。'],
        {prompt:'“我们出发吧”怎么说？',options:['Let’s head out.','Let’s look for it.','Let’s pack lunch.','Let’s lock it.'],answer:0,explain:'head out 表示出门、动身。'},['说自己来锁门','I’ll lock the door.','我来锁门。']),
      buildSceneLesson('u16l3','聊聊天气和周末','闲聊与安排',[
        ['Mia','It’s beautiful out today, isn’t it?','今天天气真好，是吧？'],['You','Yeah, it’s sunny but a little windy.','是啊，晴天，不过有点风。'],['Mia','Do you have any plans this weekend?','你这周末有什么安排吗？'],['You','We’re thinking about going to the beach.','我们在考虑去海边。'],['Mia','That sounds fun. Which beach?','听起来不错。去哪片海滩？'],['You','We haven’t decided yet. Any suggestions?','还没决定。你有什么建议吗？']
      ],[['out','/aʊt/','外面；户外','It’s beautiful out 是很自然的天气闲聊。'],['windy','/ˈwɪndi/','有风的','windy 描述天气；wind 的 d 不单独发音。'],['be thinking about','/bi ˈθɪŋkɪŋ əˈbaʊt/','正在考虑','后面接名词或动词 -ing。'],['suggestion','/səˈdʒestʃən/','建议','Any suggestions? 是征求建议的常用问法。']],
        {prompt:'他们还决定去哪片海滩了吗？',options:['还没有。','已经决定了。','他们不去海滩。','Mia 不知道周末安排。'],answer:0,explain:'We haven’t decided yet. 表示还没有决定。'},['问别人周末有什么安排','Do you have any plans this weekend?','你这周末有什么安排吗？'],
        {prompt:'“你有什么建议吗？”怎么说？',options:['Any suggestions?','Any reservations?','Any directions?','Any questions for me?'],answer:0,explain:'suggestion 是建议；Any suggestions? 简洁自然。'},['表达自己还没决定','We haven’t decided yet.','我们还没决定。']),
      buildSceneLesson('u16l4','请邻居帮个忙','提出请求与致谢',[
        ['You','Hi, Mia. Could I ask you a quick favor?','嗨，Mia。我能请你帮个小忙吗？'],['Mia','Sure. What do you need?','当然。你需要什么？'],['You','Could you water our plants while we’re away?','我们不在时，你能帮忙给植物浇水吗？'],['Mia','No problem. How often should I water them?','没问题。我应该多久浇一次？'],['You','Just once a day is fine. Thank you so much.','一天一次就可以。太谢谢你了。'],['Mia','Of course. Have a great trip!','不客气。旅途愉快！']
      ],[['favor','/ˈfeɪvər/','帮忙；恩惠','ask someone a favor 是请某人帮忙。'],['while','/waɪl/','在……期间','while we’re away 表示我们不在期间。'],['water','/ˈwɔːtər/','浇水','water 作动词时是给植物浇水。'],['once a day','/wʌns ə deɪ/','每天一次','once 表示一次；twice 表示两次。']],
        {prompt:'邻居要帮忙做什么？',options:['给植物浇水','照看宠物','收快递','打扫厨房'],answer:0,explain:'water our plants 是给植物浇水。'},['礼貌地请人帮忙','Could I ask you a quick favor?','我能请你帮个小忙吗？'],
        {prompt:'“我们不在期间”是哪一段？',options:['while we’re away','once a day','no problem','have a great trip'],answer:0,explain:'while we’re away 表示我们不在的这段时间。'},['感谢对方帮忙','Thank you so much.','太谢谢你了。']),
      buildSceneLesson('u16l5','约朋友来家里','邀请与确认时间',[
        ['You','Would you like to come over for dinner?','你愿意来家里吃晚饭吗？'],['Mia','I’d love to. What day works for you?','我很愿意。你哪天方便？'],['You','How about Saturday around six?','周六六点左右怎么样？'],['Mia','Saturday works. Should I bring anything?','周六可以。需要我带点什么吗？'],['You','Could you bring a dessert?','你能带个甜点来吗？'],['Mia','Absolutely. See you then!','当然可以。到时见！']
      ],[['come over','/kʌm ˈoʊvər/','到家里来；串门','邀请到自己家常说 come over。'],['I’d love to','/aɪd lʌv tuː/','我很愿意','接受邀请的友好表达。'],['work for you','/wɜːrk fɔːr juː/','对你方便','What day works for you? 问哪天合适。'],['dessert','/dɪˈzɜːrt/','甜点','重音在第二音节；和 desert“沙漠”不同。']],
        {prompt:'他们约在什么时候？',options:['周六六点左右','周五中午','周日早上','周六八点'],answer:0,explain:'Saturday around six 是周六六点左右。'},['邀请朋友来家里吃饭','Would you like to come over for dinner?','你愿意来家里吃晚饭吗？'],
        {prompt:'Mia 会带什么？',options:['甜点','饮料','主菜','鲜花'],answer:0,explain:'Could you bring a dessert? 对方答应带甜点。'},['接受邀请并说自己很愿意','I’d love to.','我很愿意。'])
    ]
  },
  {
    unit:'阶段 15 · 日常对话：吃饭与购物',subtitle:'点单、买菜、付款和解决小问题',icon:'🛍️',lessons:[
      buildSceneLesson('u17l1','在咖啡店点单','美式咖啡店表达',[
        ['Barista','Hi! What can I get for you?','你好！想喝点什么？'],['You','Could I get a medium latte, please?','请给我一杯中杯拿铁，可以吗？'],['Barista','Sure. Would you like it hot or iced?','好的。要热的还是冰的？'],['You','Iced, please. And could I get oat milk?','请做冰的。可以换燕麦奶吗？'],['Barista','Absolutely. Anything else?','当然可以。还需要别的吗？'],['You','That’s all. For here, please.','就这些，请在店里喝。']
      ],[['barista','/bəˈrɪstə/','咖啡师；咖啡店店员','咖啡店点单时对方常这样称呼。'],['medium','/ˈmiːdiəm/','中杯；中等的','店内杯型通常有 small / medium / large。'],['iced','/aɪst/','加冰的；冰的','iced coffee 是冰咖啡。'],['oat milk','/ˈoʊt mɪlk/','燕麦奶','点单可说 Could I get oat milk?']],
        {prompt:'顾客点了什么？',options:['一杯中杯冰拿铁','一杯热美式','一杯大杯冰茶','一杯小杯热巧克力'],answer:0,explain:'medium latte + iced 表示中杯冰拿铁。'},['询问能否换燕麦奶','Could I get oat milk?','可以给我换燕麦奶吗？'],
        {prompt:'顾客打算在哪里喝？',options:['在店里','带走','车里','还没决定'],answer:0,explain:'For here 表示在店内；to go 表示带走。'},['说明要在店里喝','For here, please.','请在店里喝。']),
      buildSceneLesson('u17l2','在简餐店吃饭','入座与点餐',[
        ['Host','Hi! How many are in your party?','你好！请问几位？'],['You','A table for two, please.','请给我们两个人的桌子。'],['Host','Right this way. Here are your menus.','这边请。这是你们的菜单。'],['Server','Can I start you off with something to drink?','先给你们来点喝的吗？'],['You','Just water for now, thanks.','现在先要水就好，谢谢。'],['Server','Are you ready to order?','你们准备好点餐了吗？']
      ],[['party','/ˈpɑːrti/','同行的一组人','餐馆里 How many in your party? 是问几位用餐。'],['table for two','/ˈteɪbəl fər tuː/','两人桌','在美国餐馆常用来报人数。'],['right this way','/raɪt ðɪs weɪ/','这边请','服务人员带位时的固定表达。'],['for now','/fər naʊ/','暂时；目前','Just water for now 表示暂时先要水。']],
        {prompt:'他们几个人用餐？',options:['两位','一位','三位','四位'],answer:0,explain:'A table for two 是两个人的桌位。'},['告诉服务员要两人桌','A table for two, please.','请给我们两个人的桌子。'],
        {prompt:'Just water for now 是什么意思？',options:['现在先要水','不要水','要两杯咖啡','饭后再点水'],answer:0,explain:'for now 表示目前、暂时。'},['暂时只要水','Just water for now, thanks.','现在先要水就好，谢谢。']),
      buildSceneLesson('u17l3','在超市找东西','询问商品位置',[
        ['You','Excuse me, where can I find the eggs?','打扰一下，请问鸡蛋在哪里？'],['Worker','They’re in aisle five, near the milk.','在五号货架通道，牛奶附近。'],['You','Thanks. Is this milk on sale?','谢谢。这种牛奶在打折吗？'],['Worker','Yes, it’s two for five dollars.','是的，两件五美元。'],['You','Great. I’ll take two.','太好了。我买两件。'],['Worker','You can check out at the front.','你可以在前面结账。']
      ],[['find','/faɪnd/','找到；在哪里能买到','Where can I find...? 用来问商品位置。'],['aisle','/aɪl/','货架通道','s 不发音；aisle five 是五号通道。'],['on sale','/ɑːn seɪl/','打折的','注意不是 for sale（待售）。'],['check out','/tʃek aʊt/','结账','check out at the front 表示在前面结账。']],
        {prompt:'鸡蛋在哪里？',options:['五号通道，牛奶附近','收银台后面','三号通道，面包附近','店门口'],answer:0,explain:'aisle five, near the milk 是五号通道、牛奶附近。'},['询问商品在哪里','Where can I find the eggs?','请问鸡蛋在哪里？'],
        {prompt:'two for five dollars 表示什么？',options:['两件五美元','一件两美元','五件两美元','两美元折扣'],answer:0,explain:'two for five dollars 是两件合计五美元。'},['确认自己要买两件','I’ll take two.','我买两件。']),
      buildSceneLesson('u17l4','买衣服试尺码','试穿与询问尺寸',[
        ['You','I like this jacket. Do you have it in a medium?','我喜欢这件夹克。有中码吗？'],['Clerk','Let me check for you.','我帮你查一下。'],['Clerk','Here you go. The fitting room is over there.','给你。试衣间在那边。'],['You','Thanks. Can I try it on?','谢谢。我可以试穿吗？'],['Clerk','Of course. How does it fit?','当然。尺寸合适吗？'],['You','It fits well, but the sleeves are a little long.','很合身，不过袖子有点长。']
      ],[['jacket','/ˈdʒækɪt/','夹克；外套','常见衣物词。'],['medium','/ˈmiːdiəm/','中码','衣服尺码常用 small、medium、large。'],['fitting room','/ˈfɪtɪŋ ruːm/','试衣间','也可说 changing room；美式商店常见 fitting room。'],['fit','/fɪt/','合身；适合','How does it fit? 问衣服穿着合不合适。']],
        {prompt:'顾客想找什么尺码？',options:['中码','小码','大码','加大码'],answer:0,explain:'in a medium 是中码。'},['询问能不能试穿','Can I try it on?','我可以试穿吗？'],
        {prompt:'衣服哪里有点长？',options:['袖子','裤腿','衣领','衣摆'],answer:0,explain:'sleeves 是袖子。'},['描述袖子有点长','The sleeves are a little long.','袖子有点长。']),
      buildSceneLesson('u17l5','结账和索要收据','付款与礼貌结束',[
        ['Cashier','Did you find everything okay?','东西都找齐了吗？'],['You','Yes, thanks. Can I pay with my phone?','找齐了，谢谢。我可以用手机付款吗？'],['Cashier','Sure. You can tap right here.','可以，在这里轻触一下就行。'],['You','All set. Could I get a receipt, please?','好了。可以给我一张收据吗？'],['Cashier','Of course. Would you like a bag?','当然。需要袋子吗？'],['You','No bag, thanks. I brought my own.','不用袋子，谢谢。我自己带了。']
      ],[['cashier','/kæˈʃɪr/','收银员','在收银台付款时的工作人员。'],['tap','/tæp/','轻触；碰一下','手机或银行卡感应付款常说 tap。'],['receipt','/rɪˈsiːt/','收据','p 不发音；常说 get a receipt。'],['my own','/maɪ oʊn/','我自己的','I brought my own 表示我自己带了。']],
        {prompt:'顾客用什么付款？',options:['手机','现金','支票','礼品卡'],answer:0,explain:'pay with my phone 是用手机付款。'},['询问能否用手机付款','Can I pay with my phone?','我可以用手机付款吗？'],
        {prompt:'顾客最后要不要袋子？',options:['不要，自己带了','要两个','要纸袋','还没决定'],answer:0,explain:'No bag, I brought my own 表示不需要袋子，我自己带了。'},['索要一张收据','Could I get a receipt, please?','可以给我一张收据吗？'])
    ]
  },
  {
    unit:'阶段 16 · 日常对话：出行与办事',subtitle:'问路、预约、买药和处理听不懂的情况',icon:'🚌',lessons:[
      buildSceneLesson('u18l1','问公交车怎么坐','路线与下车提醒',[
        ['You','Excuse me, does this bus go downtown?','打扰一下，这辆公交去市中心吗？'],['Driver','Yes. You need to get off at Main Street.','去的。你需要在 Main Street 下车。'],['You','How many stops is that?','还要坐几站？'],['Driver','About six stops. I’ll let you know.','大约六站。到了我告诉你。'],['You','Thanks. How much is the fare?','谢谢。车费多少钱？'],['Driver','It’s three dollars. You can tap your card.','三美元。可以刷卡感应。']
      ],[['downtown','/ˈdaʊnˌtaʊn/','市中心','美式常用；澳洲也常听到 city centre。'],['get off','/ɡet ɔːf/','下车','公交、火车都可用；上车是 get on。'],['stop','/stɑːp/','车站；停靠站','six stops 是六站。'],['fare','/fer/','车费','the bus fare 是公交车费。']],
        {prompt:'乘客应该在哪里下车？',options:['Main Street','Market Street','机场','火车总站'],answer:0,explain:'get off at Main Street 是在 Main Street 下车。'},['询问公交是否去市中心','Does this bus go downtown?','这辆公交去市中心吗？'],
        {prompt:'还要坐几站？',options:['大约六站','三站','十站','一站'],answer:0,explain:'About six stops 表示大约六站。'},['询问车费','How much is the fare?','车费多少钱？']),
      buildSceneLesson('u18l2','打车告诉司机目的地','地址与上下车',[
        ['Driver','Where would you like to go?','您想去哪里？'],['You','Could you take me to the airport, please?','请送我去机场，可以吗？'],['Driver','Sure. Do you have a preferred route?','可以。您有偏好的路线吗？'],['You','The fastest route is fine.','走最快的路线就好。'],['Driver','There’s some traffic on the highway.','高速公路上有些堵车。'],['You','That’s okay. Please drop me off at Terminal Two.','没关系。请在二号航站楼让我下车。']
      ],[['take me to','/teɪk mi tuː/','送我去','打车告诉司机目的地的常用句型。'],['preferred','/prɪˈfɜːrd/','偏好的；更喜欢的','preferred route 是偏好的路线。'],['traffic','/ˈtræfɪk/','交通；车流','有堵车常说 heavy traffic。'],['drop me off','/drɑːp mi ɔːf/','让我下车；送我到','drop someone off 是把某人送到某处。']],
        {prompt:'乘客要去哪里？',options:['机场','市中心','火车站','酒店'],answer:0,explain:'take me to the airport 表示送我去机场。'},['告诉司机送自己去机场','Could you take me to the airport, please?','请送我去机场，可以吗？'],
        {prompt:'乘客要在哪里下车？',options:['二号航站楼','一号航站楼','高速路入口','停车场'],answer:0,explain:'Terminal Two 是二号航站楼。'},['说明希望司机在哪儿放自己下车','Please drop me off at Terminal Two.','请在二号航站楼让我下车。']),
      buildSceneLesson('u18l3','在诊所预约看诊','预约时间与症状',[
        ['Receptionist','Good morning. How can I help you?','早上好。有什么可以帮您？'],['You','I’d like to make an appointment with a doctor.','我想预约看医生。'],['Receptionist','Is this your first visit?','这是您第一次来吗？'],['You','Yes. I have a sore throat and a cough.','是的。我喉咙痛，还咳嗽。'],['Receptionist','We have an opening tomorrow at nine.','我们明天九点有一个空档。'],['You','That works for me. Do I need to bring anything?','这个时间我可以。需要带什么吗？']
      ],[['receptionist','/rɪˈsepʃənɪst/','接待员；前台','诊所或办公室前台工作人员。'],['make an appointment','/meɪk ən əˈpɔɪntmənt/','预约','make an appointment with a doctor。'],['sore throat','/sɔːr θroʊt/','喉咙痛','描述常见症状；sore 表示疼痛的。'],['opening','/ˈoʊpənɪŋ/','空档；可预约的时间','We have an opening 表示有时间可以安排。']],
        {prompt:'预约安排在什么时候？',options:['明天九点','今天下午三点','下周一上午','明天中午'],answer:0,explain:'tomorrow at nine 是明天九点。'},['提出预约看医生','I’d like to make an appointment with a doctor.','我想预约看医生。'],
        {prompt:'病人有哪些症状？',options:['喉咙痛和咳嗽','头痛和发烧','胃痛和恶心','背痛和咳嗽'],answer:0,explain:'sore throat 是喉咙痛；a cough 是咳嗽。'},['说明自己喉咙痛并咳嗽','I have a sore throat and a cough.','我喉咙痛，还咳嗽。']),
      buildSceneLesson('u18l4','在药房买非处方药','描述轻微症状并听说明',[
        ['You','Hi, do you have anything for a headache?','你好，有没有治头痛的药？'],['Pharmacist','How long have you had it?','你头痛多久了？'],['You','Since this morning. It’s not too bad.','从今天早上开始，不是特别严重。'],['Pharmacist','This one may help. Follow the directions on the label.','这款可能有帮助。请按标签说明服用。'],['You','Can I take it with food?','我可以和食物一起服用吗？'],['Pharmacist','Yes, but ask a doctor if it gets worse.','可以，但如果症状加重，请咨询医生。']
      ],[['anything for','/ˈeniθɪŋ fɔːr/','有没有什么能治/应对','在药店询问某类用品的实用说法。'],['pharmacist','/ˈfɑːrməsɪst/','药剂师','可以向药剂师询问药品使用信息。'],['directions','/dəˈrekʃənz/','使用说明；指示','directions on the label 是标签上的说明。'],['get worse','/ɡet wɜːrs/','变得更严重','症状加重常说 it gets worse。']],
        {prompt:'顾客头痛多久了？',options:['从今天早上','从昨天','一周','刚刚开始'],answer:0,explain:'Since this morning 表示从今天早上开始。'},['询问有没有治头痛的东西','Do you have anything for a headache?','有没有治头痛的药？'],
        {prompt:'药剂师建议顾客怎么做？',options:['按标签说明服用，恶化时问医生','马上加倍服用','和其他药混着吃','停止喝水'],answer:0,explain:'Follow the directions on the label，并在变严重时咨询医生。'},['询问是否能和食物一起服用','Can I take it with food?','我可以和食物一起服用吗？']),
      buildSceneLesson('u18l5','没听懂时请对方重复','沟通修复与确认信息',[
        ['Staff','Your appointment is at three fifteen on Thursday.','您的预约是周四三点十五分。'],['You','Sorry, could you say that again?','不好意思，您能再说一遍吗？'],['Staff','Thursday at three fifteen.','周四三点十五分。'],['You','Did you say three fifty or three fifteen?','您说的是三点五十还是三点十五？'],['Staff','Three fifteen. I can text you the details.','三点十五。我可以把详情发短信给您。'],['You','That would be great. Thank you.','那太好了。谢谢。']
      ],[['say that again','/seɪ ðæt əˈɡen/','再说一遍','礼貌请求重复；也可说 Could you repeat that?'],['fifteen','/ˌfɪfˈtiːn/','十五','重音在 teen；与 fifty（五十）区分。'],['details','/ˈdiːteɪlz/','详情；细节','text you the details 是把详情发短信给你。'],['That would be great','/ðæt wʊd bi ɡreɪt/','那太好了','自然接受对方提出的帮助。']],
        {prompt:'预约时间是几点？',options:['周四三点十五','周四三点五十','周五三点十五','周四四点十五'],answer:0,explain:'three fifteen 是 3:15；fifty 是 50。'},['礼貌地请对方再说一遍','Could you say that again?','您能再说一遍吗？'],
        {prompt:'工作人员提出怎样帮助？',options:['发短信告知详情','改到周五','派车接送','寄纸质信件'],answer:0,explain:'I can text you the details 是可以把详情发短信给你。'},['确认自己听到的两个时间','Did you say three fifty or three fifteen?','您说的是三点五十还是三点十五？'])
    ]
  }
);
for(const [stageIndex,unit] of lessonCatalog.slice(newStageStart).entries()){
  const bank=unit.lessons.flatMap(lesson=>lesson.questions.filter(question=>question.type==='choice'));
  const questions=Array.from({length:5},(_,index)=>JSON.parse(JSON.stringify(bank[Math.floor(index*bank.length/5)])));
  unit.lessons.push({id:`${unit.lessons[0].id.slice(0,-1)}r`,title:`阶段 ${stageIndex+6} 回顾`,label:'阶段复习',questions});
}

expandCompactLessons();

const beginnerStages=[
  {unit:'零基础 1 · 第一次开口',subtitle:'先会打招呼、说状态、介绍自己和听懂数字',icon:'🐣',lessons:[
    buildSceneLesson('a0l1','你好，我叫……','打招呼与名字',[
      ['Neighbor','Hi! I’m Mia. Are you new in the neighborhood?','你好！我叫 Mia。你刚搬到这个社区吗？'],['You','Yes. I’m Leo. Nice to meet you.','是的。我叫 Leo。很高兴认识你。'],['Neighbor','Nice to meet you, too. Where are you from?','我也很高兴认识你。你来自哪里？'],['You','I’m from China.','我来自中国。'],['Neighbor','Welcome! Do you live nearby?','欢迎！你住在附近吗？'],['You','Yes, I live on King Street.','是的，我住在 King 街。']
    ],[['neighborhood','/ˈneɪbərˌhʊd/','社区；街区','new in the neighborhood 表示新搬到这个街区。'],['nice to meet you','/naɪs tə miːt juː/','很高兴认识你','初次见面时的固定表达。'],['be from','/bi frəm/','来自','I’m from + 国家或城市。'],['nearby','/ˌnɪrˈbaɪ/','附近','live nearby 表示住在附近。']],
      {prompt:'初次见面时，哪句表示“很高兴认识你”？',options:['Nice to meet you.','See you yesterday.','I meet nice.','How much is it?'],answer:0,explain:'Nice to meet you 是初次见面的常用表达。'},['介绍自己','I’m Leo. Nice to meet you.','我叫 Leo。很高兴认识你。'],
      {prompt:'“我来自中国”应该怎么说？',options:['I’m from China.','I’m China from.','I live China.','I have China.'],answer:0,explain:'介绍来自哪里用 be from。'},['说出自己来自哪里','I’m from China.','我来自中国。']),
    buildSceneLesson('a0l2','你今天怎么样？','询问状态与简单回答',[
      ['Friend','Hey, how are you today?','嗨，你今天怎么样？'],['You','I’m good, thanks. How about you?','我挺好的，谢谢。你呢？'],['Friend','I’m okay, but I’m a little tired.','我还可以，不过有点累。'],['You','Did you have a busy day?','你今天忙吗？'],['Friend','Yes, I worked a lot.','是的，我工作了很久。'],['You','I see. Let’s get some rest.','这样啊。我们休息一下吧。']
    ],[['how about you','/haʊ əˈbaʊt juː/','你呢','回答后把问题礼貌地问回去。'],['okay','/oʊˈkeɪ/','还可以；好的','表示状态一般或接受安排。'],['a little','/ə ˈlɪtəl/','有一点','放在形容词前：a little tired。'],['get some rest','/ɡet səm rest/','休息一下','给疲惫的人建议休息。']],
      {prompt:'别人问“How are you?”，哪个回答自然？',options:['I’m good, thanks.','I good thanks.','My are good.','I have fine.'],answer:0,explain:'I’m good, thanks 是自然的日常回答。'},['回答并问回对方','I’m good, thanks. How about you?','我挺好的，谢谢。你呢？'],
      {prompt:'“我有点累”怎么说？',options:['I’m a little tired.','I little have tired.','I’m tired little a.','I do tired.'],answer:0,explain:'a little 放在形容词 tired 前。'},['说出自己的状态','I’m a little tired today.','我今天有点累。']),
    buildSceneLesson('a0l3','我来自哪里，住在哪里','国家、语言与住处',[
      ['Classmate','Where are you from, Leo?','Leo，你来自哪里？'],['You','I’m from China.','我来自中国。'],['Classmate','Do you speak English?','你会说英语吗？'],['You','A little. I’m learning English.','会一点。我正在学英语。'],['Classmate','Where do you live now?','你现在住在哪里？'],['You','I live in Melbourne with my wife.','我和妻子住在墨尔本。']
    ],[['speak','/spiːk/','说；讲','speak English 表示会说英语。'],['a little','/ə ˈlɪtəl/','一点；少量','用来表达会一点、懂一点。'],['learn','/lɜːrn/','学习','I’m learning 表示我正在学习。'],['live in','/lɪv ɪn/','住在','城市前常用 in：live in Melbourne。']],
      {prompt:'问别人来自哪里，应该说哪句？',options:['Where are you from?','Where you are?','What are you from?','Where do from?'],answer:0,explain:'Where are you from? 用来询问来自哪里。'},['说自己正在学英语','I’m learning English.','我正在学英语。'],
      {prompt:'“我和妻子住在墨尔本”怎么说？',options:['I live in Melbourne with my wife.','I living Melbourne wife.','I have live with wife.','I lives at Melbourne.'],answer:0,explain:'live in + 城市；with my wife 表示和妻子一起。'},['介绍住处','I live in Melbourne with my wife.','我和妻子住在墨尔本。']),
    buildSceneLesson('a0l4','数字、电话和时间','听懂并确认数字',[
      ['Receptionist','What’s your phone number?','你的电话号码是多少？'],['You','It’s 0412 358 690.','是 0412 358 690。'],['Receptionist','Sorry, could you say the last three numbers again?','不好意思，最后三位数字能再说一遍吗？'],['You','Six nine zero.','六、九、零。'],['Receptionist','Thanks. Your appointment is at ten thirty.','谢谢。你的预约在十点半。'],['You','Ten thirty. Got it.','十点半。记住了。']
    ],[['phone number','/foʊn ˈnʌmbər/','电话号码','提供电话时可以一个数字一个数字说。'],['last','/læst/','最后的','the last three numbers 是最后三位数字。'],['again','/əˈɡen/','再一次','Could you say that again? 可礼貌请求重复。'],['got it','/ɡɑːt ɪt/','明白了；记住了','确认自己听懂对方的信息。']],
      {prompt:'没听清数字时，哪句最合适？',options:['Could you say that again?','I no hear.','What number it?','Say more loud.'],answer:0,explain:'Could you say that again? 礼貌地请对方重复。'},['请对方重复电话号码','Could you say the last three numbers again?','最后三位数字能再说一遍吗？'],
      {prompt:'10:30 应该怎么读？',options:['Ten thirty.','Thirty ten.','Ten thirteen.','Three ten.'],answer:0,explain:'10:30 读作 ten thirty。'},['确认预约时间','Ten thirty. Got it.','十点半，记住了。'])
  ]},
  {unit:'零基础 2 · 身边的英语',subtitle:'从家人、家里、食物到每天的生活习惯',icon:'🏡',lessons:[
    buildSceneLesson('a1l1','介绍家人和朋友','称呼与简单描述',[
      ['Friend','Who’s this in the photo?','照片里这个人是谁？'],['You','This is my wife, Nana.','这是我妻子 Nana。'],['Friend','What does she do?','她是做什么工作的？'],['You','She works in an office.','她在办公室工作。'],['Friend','Do you have any brothers or sisters?','你有兄弟姐妹吗？'],['You','Yes. I have one older brother.','有。我有一个哥哥。']
    ],[['photo','/ˈfoʊtoʊ/','照片','in the photo 表示在照片里。'],['wife','/waɪf/','妻子','复数是 wives。'],['work in','/wɜːrk ɪn/','在……工作','work in an office 表示在办公室工作。'],['older brother','/ˈoʊldər ˈbrʌðər/','哥哥','older 表示年纪更大；弟弟是 younger brother。']],
      {prompt:'介绍照片中的人，哪句正确？',options:['This is my wife.','This my wife is.','She my wife.','This are wife.'],answer:0,explain:'This is my... 用来介绍一个人。'},['介绍妻子','This is my wife, Nana.','这是我妻子 Nana。'],
      {prompt:'“她在办公室工作”怎么说？',options:['She works in an office.','She work office.','She is work office.','She working in office.'],answer:0,explain:'一般现在时 she 后动词加 -s。'},['介绍一位家人','She works in an office.','她在办公室工作。']),
    buildSceneLesson('a1l2','家里有什么？','房间与物品位置',[
      ['Guest','Your home is nice. Is there a kitchen?','你家很不错。有厨房吗？'],['You','Yes. There’s a small kitchen next to the living room.','有。客厅旁边有一个小厨房。'],['Guest','Where’s the bathroom?','洗手间在哪里？'],['You','It’s down the hall, on the left.','沿着走廊走，在左边。'],['Guest','Is there a towel in the bathroom?','洗手间里有毛巾吗？'],['You','Yes, it’s on the shelf.','有，在架子上。']
    ],[['kitchen','/ˈkɪtʃən/','厨房','在厨房里：in the kitchen。'],['next to','/nekst tuː/','在……旁边','说明两个地点相邻。'],['hall','/hɔːl/','走廊','down the hall 表示沿走廊往前。'],['shelf','/ʃelf/','架子','单数 shelf，复数 shelves。']],
      {prompt:'“客厅旁边有一个厨房”怎么说？',options:['There’s a kitchen next to the living room.','It have kitchen by living room.','There are a kitchen.','Kitchen next living room is.'],answer:0,explain:'There’s = There is，表示有一个；next to 表示旁边。'},['询问洗手间在哪里','Where’s the bathroom?','洗手间在哪里？'],
      {prompt:'“毛巾在架子上”怎么说？',options:['The towel is on the shelf.','The towel on shelf are.','Towel is in the shelf.','The towel has shelf.'],answer:0,explain:'物品在表面上用 on。'},['告诉客人毛巾的位置','It’s on the shelf.','它在架子上。']),
    buildSceneLesson('a1l3','吃什么，喝什么？','食物和个人喜好',[
      ['Partner','Are you hungry?','你饿了吗？'],['You','A little. What would you like to eat?','有一点。你想吃什么？'],['Partner','I’d like some rice and chicken.','我想吃米饭和鸡肉。'],['You','Would you like some water, too?','你还想喝点水吗？'],['Partner','Yes, please. I like cold water.','好的。我喜欢凉水。'],['You','Here you are.','给你。']
    ],[['hungry','/ˈhʌŋɡri/','饿的','Are you hungry? 询问对方饿不饿。'],['would like','/wʊd laɪk/','想要','比 want 更礼貌：I’d like...。'],['some','/səm/','一些','some rice / some water，常用于肯定句和礼貌请求。'],['here you are','/hɪr ju ɑːr/','给你','递东西给别人时使用。']],
      {prompt:'礼貌地说“我想要一些米饭”，怎么说？',options:['I’d like some rice.','I like some rice now want.','I am like rice.','I’d some rice.'],answer:0,explain:'I’d like 是 I would like 的缩写，礼貌表达想要。'},['询问对方想吃什么','What would you like to eat?','你想吃什么？'],
      {prompt:'“给你”递水时怎么说？',options:['Here you are.','Here you have.','You here is.','There you take.'],answer:0,explain:'Here you are 是递东西时的自然表达。'},['询问是否要喝水','Would you like some water?','你想喝点水吗？']),
    buildSceneLesson('a1l4','我每天做什么','日常作息与频率',[
      ['Coworker','What time do you get up on weekdays?','你工作日几点起床？'],['You','I usually get up at seven.','我通常七点起床。'],['Coworker','How do you get to work?','你怎么去上班？'],['You','I take the bus.','我坐公交车。'],['Coworker','Do you have breakfast at home?','你在家吃早饭吗？'],['You','Yes, I have eggs and toast.','是的，我吃鸡蛋和吐司。']
    ],[['weekday','/ˈwiːkdeɪ/','工作日','weekdays 指周一到周五。'],['usually','/ˈjuːʒuəli/','通常','频率副词 usually 常放在实义动词前。'],['get up','/ɡet ʌp/','起床','get up at seven 是七点起床。'],['take the bus','/teɪk ðə bʌs/','坐公交','take + 交通工具表示乘坐。']],
      {prompt:'“我通常七点起床”怎么说？',options:['I usually get up at seven.','I get usually up seven.','I usually gets up seven.','I am usually get up.'],answer:0,explain:'usually 放在动词 get 前；时间前用 at。'},['询问工作日几点起床','What time do you get up on weekdays?','你工作日几点起床？'],
      {prompt:'“我坐公交去上班”怎么说？',options:['I take the bus to work.','I bus take work.','I go work by the bus take.','I takes bus to work.'],answer:0,explain:'take the bus 是乘坐公交车。'},['说说自己的早晨','I usually get up at seven.','我通常七点起床。'])
  ]},
  {unit:'零基础 3 · 带着英语出门',subtitle:'咖啡店、超市、公交和听不懂时怎么办',icon:'🧺',lessons:[
    buildSceneLesson('a2l1','买一杯咖啡','菜单词汇与礼貌点单',[
      ['Barista','Hi there. What can I get for you?','你好。想来点什么？'],['You','Can I have a small latte, please?','请给我一杯小杯拿铁，可以吗？'],['Barista','Sure. Would you like regular or oat milk?','好的。你要普通牛奶还是燕麦奶？'],['You','Oat milk, please.','请用燕麦奶。'],['Barista','For here or to go?','在店里喝还是带走？'],['You','To go, thanks.','带走，谢谢。']
    ],[['barista','/bəˈriːstə/','咖啡师','在咖啡店制作咖啡的人。'],['latte','/ˈlɑːteɪ/','拿铁','a small latte 是一杯小杯拿铁。'],['oat milk','/oʊt mɪlk/','燕麦奶','点单时可替换普通牛奶。'],['to go','/tə ɡoʊ/','带走','美式表达；澳洲也常听到 takeaway。']],
      {prompt:'礼貌地点一杯小杯拿铁，选哪句？',options:['Can I have a small latte, please?','Give me small latte.','I have latte please?','Can small latte me?'],answer:0,explain:'Can I have...please? 是礼貌点单句型。'},['选择牛奶种类','Oat milk, please.','请用燕麦奶。'],
      {prompt:'“带走”怎么说？',options:['To go.','For here.','Go to here.','Take go.'],answer:0,explain:'To go 表示带走；for here 表示在店内吃喝。'},['回答在店内喝还是带走','To go, thanks.','带走，谢谢。']),
    buildSceneLesson('a2l2','拿着清单逛超市','找商品、数量与价格',[
      ['You','Excuse me, where can I find the eggs?','打扰一下，请问鸡蛋在哪里？'],['Staff','They’re in aisle five, next to the milk.','在五号通道，牛奶旁边。'],['You','Thanks. I also need some bread.','谢谢。我还需要一些面包。'],['Staff','The bread is in aisle two.','面包在二号通道。'],['You','How much are these eggs?','这些鸡蛋多少钱？'],['Staff','They’re four dollars a dozen.','一打四美元。']
    ],[['aisle','/aɪl/','通道；过道','s 不发音；aisle five 是五号通道。'],['find','/faɪnd/','找到','Where can I find...? 询问商品在哪里。'],['also','/ˈɔːlsoʊ/','也；还','补充清单上的另一项。'],['a dozen','/ə ˈdʌzən/','一打；十二个','four dollars a dozen 表示一打四美元。']],
      {prompt:'在超市礼貌询问鸡蛋在哪里，怎么说？',options:['Where can I find the eggs?','Where eggs can?','I find egg what place?','Where is find eggs?'],answer:0,explain:'Where can I find...? 是询问商品位置的实用句型。'},['询问商品位置','Where can I find the eggs?','请问鸡蛋在哪里？'],
      {prompt:'“一打鸡蛋”里的 a dozen 是多少个？',options:['12 个','10 个','6 个','20 个'],answer:0,explain:'a dozen 表示十二个。'},['补充购物清单','I also need some bread.','我还需要一些面包。']),
    buildSceneLesson('a2l3','坐公交去市中心','看线路、上车和下车',[
      ['You','Excuse me, does this bus go downtown?','打扰一下，这辆公交去市中心吗？'],['Driver','Yes. Get on here and get off at City Hall.','去的。在这里上车，在市政厅下车。'],['You','How many stops is that?','还要坐几站？'],['Driver','Five stops. I’ll let you know.','五站。我会告诉你。'],['You','Can I tap my card to pay?','我可以刷卡付款吗？'],['Driver','Yes, just tap it when you get on.','可以，上车时刷一下就行。']
    ],[['downtown','/ˈdaʊnˌtaʊn/','市中心','美式常用；澳洲也常说 city centre。'],['get on','/ɡet ɑːn/','上车','公交或火车都可以用 get on。'],['get off','/ɡet ɔːf/','下车','在某站下车：get off at + 地点。'],['tap','/tæp/','轻触；感应支付','tap my card 表示刷感应卡。']],
      {prompt:'“这辆公交去市中心吗？”怎么问？',options:['Does this bus go downtown?','This bus downtown goes?','Do bus go city?','Is bus go downtown?'],answer:0,explain:'第三人称单数 bus 用 Does 开头提问。'},['询问还要坐几站','How many stops is that?','还要坐几站？'],
      {prompt:'get off 表示什么？',options:['下车','上车','买票','转弯'],answer:0,explain:'get off 是下车；get on 是上车。'},['询问能否刷卡','Can I tap my card to pay?','我可以刷卡付款吗？']),
    buildSceneLesson('a2l4','没听懂时怎么继续','请求重复、放慢和确认',[
      ['Receptionist','Your class starts at quarter past six.','你的课六点一刻开始。'],['You','Sorry, could you say that again?','不好意思，你能再说一遍吗？'],['Receptionist','It starts at six fifteen.','六点十五开始。'],['You','Could you speak a little more slowly, please?','你可以说慢一点吗？'],['Receptionist','Of course. Six fifteen.','当然。六点十五。'],['You','Thanks. So, six fifteen on Tuesday?','谢谢。所以是周二六点十五，对吗？']
    ],[['quarter past','/ˈkwɔːrtər pæst/','过一刻','quarter past six 是六点十五。'],['say that again','/seɪ ðæt əˈɡen/','再说一遍','礼貌请求重复信息。'],['slowly','/ˈsloʊli/','慢慢地','speak more slowly 表示说慢一点。'],['so','/soʊ/','所以；那么','用 so 重述并确认自己听到的信息。']],
      {prompt:'没听清时，哪句最礼貌？',options:['Could you say that again?','Again now.','You repeat me.','I don’t hearing.'],answer:0,explain:'Could you... 是礼貌请求；say that again 表示再说一遍。'},['请对方说慢一点','Could you speak a little more slowly?','你可以说慢一点吗？'],
      {prompt:'quarter past six 是几点？',options:['六点十五','六点半','六点四十五','五点十五'],answer:0,explain:'quarter past six 是六点过一刻，即 6:15。'},['复述时间并确认','So, six fifteen on Tuesday?','所以是周二六点十五，对吗？'])
  ]}
];

beginnerStages.forEach((unit,index)=>{
  const bank=unit.lessons.flatMap(lesson=>lesson.questions.filter(question=>question.type==='choice'));
  unit.lessons.push({id:`a${index}lr`,title:`零基础阶段 ${index+1} 复习`,label:'间隔复习',estimatedMinutes:10,questions:Array.from({length:5},(_,i)=>JSON.parse(JSON.stringify(bank[Math.floor(i*bank.length/5)])))});
});
lessonCatalog.unshift(...beginnerStages);

const defaultState = {
  activeUser: 'me',
  users: {
    me: { name: '岄', avatar: '岄', xp: 0, streak: 0, hearts: 5, completed: [], mistakes: [], lastStudyDate: null, dailyDone: 0, dailyStudyMinutes: 0 },
    partner: { name: '娜娜', avatar: '娜', xp: 0, streak: 0, hearts: 5, completed: [], mistakes: [], lastStudyDate: null, dailyDone: 0, dailyStudyMinutes: 0 }
  },
  dailyGoal: 1,
  dailyGoalMinutes: 30,
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
  const partner = { ...base.users.partner, ...(saved.users?.partner || {}) };
  if(partner.name === '搭档') partner.name = '娜娜';
  if(partner.avatar === '伴') partner.avatar = '娜';
  return {
    ...base,
    ...saved,
    users: {
      me: { ...base.users.me, ...(saved.users?.me || {}) },
      partner
    }
  };
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function user(){ return state.users[state.activeUser]; }
function otherUser(){ return state.users[state.activeUser === 'me' ? 'partner' : 'me']; }

function resetDailyIfNeeded(){
  const today = todayKey();
  if(state.lastGlobalDate !== today){
    Object.values(state.users).forEach(u => { u.dailyDone = 0; u.dailyStudyMinutes = 0; });
    state.lastGlobalDate = today;
    save();
  }
}

function render(){
  resetDailyIfNeeded();
  const u = user();
  $('topAvatar').textContent = u.avatar || u.name.slice(0,1);
  $('brandSub').textContent = `${u.name} · 今日目标 ${state.dailyGoalMinutes} 分钟`;
  $('streakCount').textContent = u.streak;
  $('xpCount').textContent = u.xp;
  $('heartCount').textContent = u.hearts;
  $('reviewCount').textContent = u.mistakes.length ? `${u.mistakes.length} 道待复习` : '暂无错题';
  const done = Math.min(u.dailyStudyMinutes, state.dailyGoalMinutes);
  const pct = state.dailyGoalMinutes ? Math.round(done / state.dailyGoalMinutes * 100) : 100;
  $('goalRing').style.strokeDasharray = `${pct} ${100-pct}`;
  $('goalText').textContent = `${done}/${state.dailyGoalMinutes}分`;
  $('heroTitle').textContent = done >= state.dailyGoalMinutes ? '今天的学习目标完成了 ✓' : `今天学够 ${state.dailyGoalMinutes} 分钟`;
  $('heroCopy').textContent = done >= state.dailyGoalMinutes ? '今天的计划完成了。想继续就继续，不用给自己加压。' : `一节完整课约 30 分钟：听对话、学词句、跟读，再自己回应。`;
  renderCouple();
  renderPath();
}

function renderCouple(){
  const entries = Object.entries(state.users);
  $('coupleGrid').innerHTML = entries.map(([key,u]) => {
    const pct = Math.min(100, Math.round((u.dailyStudyMinutes / Math.max(1,state.dailyGoalMinutes))*100));
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
  const stepLabel=`学习环节 ${questionIndex+1} / ${currentLesson.questions.length}${currentLesson.estimatedMinutes?` · 约 ${currentLesson.estimatedMinutes} 分钟`:''}`;
  $('lessonHearts').textContent = u.hearts;
  $('lessonProgress').style.width = `${(questionIndex/currentLesson.questions.length)*100}%`;
  selectedAnswer = null;
  answered = false;

  if(q.type === 'dialogue'){
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel} · 情景对话</div>
      <div class="question-title">${escapeHtml(currentLesson.title)}</div>
      <div class="question-hint">${escapeHtml(q.prompt)} · 美式发音</div>
      ${renderSceneMaterial(currentLesson.id)}
      <button class="listen-prompt" id="dialogueListen">🔊 播放完整对话</button>
      <div class="dialogue-list">${q.dialogue.map((line,index)=>`<div class="dialogue-line"><div class="dialogue-line-top"><b>${escapeHtml(line[0])}</b><button class="dialogue-play" data-dialogue-line="${index}" aria-label="播放第${index+1}句">▶</button></div><div class="dialogue-en">${escapeHtml(line[1])}</div><div class="dialogue-zh">${escapeHtml(line[2])}</div></div>`).join('')}</div>
      ${renderWordNotes(q.words)}`;
    $('dialogueListen').addEventListener('click',()=>speakText(q.dialogue.map(line=>line[1]).join('. ')));
    document.querySelectorAll('[data-dialogue-line]').forEach(btn=>btn.addEventListener('click',()=>speakText(q.dialogue[Number(btn.dataset.dialogueLine)][1])));
  } else if(q.type === 'vocab'){
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel} · 核心词汇</div>
      <div class="question-title">${escapeHtml(currentLesson.title)}</div>
      <div class="vocab-focus"><div><b>${escapeHtml(q.word)}</b><span>${escapeHtml(q.pronunciation)}</span></div><strong>${escapeHtml(q.meaning)}</strong><p>${escapeHtml(q.usage)}</p></div>
      <div class="vocab-example"><small>对话例句</small><div>${escapeHtml(q.example)}</div><p>${escapeHtml(q.exampleZh)}</p></div>
      <div class="speak-actions"><button id="vocabWordListen">🔊 听单词</button><button id="vocabExampleListen">🔊 听例句</button></div>
      <div class="question-hint">建议：跟读 3 遍，再想一个你自己的例句。</div>`;
    $('vocabWordListen').addEventListener('click',()=>speakText(q.word));
    $('vocabExampleListen').addEventListener('click',()=>speakText(q.example));
  } else if(q.type === 'choice'){
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel}</div>
      ${q.passage ? `<div class="reading-passage">${escapeHtml(q.passage)}</div>` : ''}
      ${q.listen ? `<button class="listen-prompt" id="questionListen">🔊 先听英文，再选答案</button>` : ''}
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="question-hint">不用追求一次全对，先让嘴和脑子熟起来。</div>
      ${renderWordNotes(q.words)}
      <div class="answer-grid">${q.options.map((opt,i)=>`<button class="answer-btn" data-answer="${i}">${escapeHtml(opt)}</button>`).join('')}</div>`;
    if(q.listen) $('questionListen').addEventListener('click', ()=>speakText(q.listen));
    document.querySelectorAll('[data-answer]').forEach(btn => btn.addEventListener('click', () => {
      if(answered) return;
      selectedAnswer = Number(btn.dataset.answer);
      document.querySelectorAll('[data-answer]').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      renderFooter();
    }));
  } else if(q.type === 'speak') {
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel} · 跟读开口</div>
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="speak-card">
        <div class="big-phrase">${escapeHtml(q.phrase)}</div>
        <div class="question-hint">${escapeHtml(q.zh)}</div>
        ${renderWordNotes(q.words)}
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
  } else if(q.type === 'roleplay'){
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel} · 轮到你回应</div>
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="roleplay-card"><small>对方说</small><div class="dialogue-en">${escapeHtml(q.cue)}</div><div class="dialogue-zh">${escapeHtml(q.cueZh)}</div><button class="listen-prompt" id="roleplayCueListen">🔊 听对方</button></div>
      <div class="roleplay-challenge">先别看答案，自己用英语说一句回应。可以换成你真实会用的信息。</div>
      <details class="roleplay-answer"><summary>说完后查看参考回应</summary><div class="dialogue-en">${escapeHtml(q.response)}</div><div class="dialogue-zh">${escapeHtml(q.responseZh)}</div><button class="listen-prompt" id="roleplayAnswerListen">🔊 听参考回应</button></details>`;
    $('roleplayCueListen').addEventListener('click',()=>speakText(q.cue));
    $('roleplayAnswerListen').addEventListener('click',()=>speakText(q.response));
  } else {
    $('lessonBody').innerHTML = `<div class="question-kicker">${stepLabel} · 写作练习</div>
      <div class="question-title">${escapeHtml(q.prompt)}</div>
      <div class="question-hint">先自己写，再对照参考答案。这个练习不会自动判语法对错。</div>
      <textarea class="writing-answer" id="writingAnswer" rows="5" maxlength="800" placeholder="用英文写几句……"></textarea>`;
    $('writingAnswer').addEventListener('input', event=>{ selectedAnswer=event.target.value.trim(); $('checkBtn').disabled=!selectedAnswer; });
  }
  renderFooter();
}

const sceneMaterials={
  a2l1:{title:'咖啡店菜单 · Beginner order',image:'assets/scenes/melbourne-cafe.jpg',alt:'墨尔本街区咖啡店里顾客向咖啡师点单',rows:[['Small latte','$5.00'],['Oat milk','+$0.80'],['For here','店内喝'],['To go','带走']],tip:'先看饮品、牛奶选项和堂食/外带，再用 Can I have…? 点单。价格为示例澳元。'},
  a2l2:{title:'超市购物清单 · First shop',image:'assets/scenes/australian-supermarket.jpg',alt:'顾客在澳洲超市向店员询问商品位置',rows:[['☐ Eggs','Aisle 5'],['☐ Milk','Aisle 5 · Dairy'],['☐ Bread','Aisle 2 · Bakery'],['☐ Apples','Fruit & veg']],tip:'Aisle 是货架通道；Dairy 是乳制品区；Fruit & veg 是蔬果区。商品位置是练习示例。'},
  a2l3:{title:'公交线路卡 · City bus',image:'assets/scenes/melbourne-bus.jpg',alt:'乘客在墨尔本公交站向司机询问路线',rows:[['Route','246 · City'],['Board','Main Street'],['Get off','City Hall'],['Fare','Tap your card']],tip:'Board 表示上车地点；get off 表示下车。路线为练习示例。'},
  u17l1:{title:'咖啡店菜单 · Counter Coffee',image:'assets/scenes/melbourne-cafe.jpg',alt:'墨尔本街区咖啡店里顾客向咖啡师点单',rows:[['Flat white','$4.80'],['Latte','$5.00'],['Iced latte','$5.50'],['Oat milk','+$0.80']],tip:'价格为澳元。For here = 店内喝；To go = 带走。'},
  u17l2:{title:'简餐菜单 · All-day menu',image:'assets/scenes/melbourne-cafe.jpg',alt:'澳洲街区咖啡店的柜台与顾客',rows:[['Eggs on toast','$14'],['Chicken sandwich','$16'],['Soup of the day','$12'],['Tap water','Free']],tip:'价格为澳元。问有没有空桌：Do you have a table for two?'},
  u17l3:{title:'购物清单 · Shopping list',image:'assets/scenes/australian-supermarket.jpg',alt:'顾客在澳洲超市向店员询问商品位置',rows:[['☐ Eggs','Aisle 5'],['☐ Milk','Aisle 5 · Dairy'],['☐ Bread','Aisle 2 · Bakery'],['Special','2 for $5.00']],tip:'价格为澳元。Aisle 是货架通道；on sale 表示打折。'},
  u17l4:{title:'衣物尺码牌 · Size guide',rows:[['S','Small'],['M','Medium'],['L','Large'],['Fitting room','Back left']],tip:'试衣服说 try it on；合身可以说 It fits well.'},
  u17l5:{title:'超市小票 · Receipt',image:'assets/scenes/australian-supermarket.jpg',alt:'澳洲超市购物和结账场景',rows:[['Groceries','$18.40'],['Reusable bag','$0.20'],['Card payment','$18.60'],['Receipt','Keep for returns']],tip:'价格为澳元。澳洲商店常鼓励自带购物袋；receipt 的 p 不发音。'},
  u18l1:{title:'公交站牌 · Route 246',image:'assets/scenes/melbourne-bus.jpg',alt:'乘客在墨尔本公交站向司机询问路线',rows:[['Route','246 · Downtown'],['Stop','Main Street'],['Fare','$3.00'],['Next stop','Library']],tip:'Get on 是上车；get off 是下车。'},
  u18l2:{title:'行程卡 · Airport ride',rows:[['Destination','Airport · Terminal 2'],['Pickup','Main Street'],['Traffic','Heavy on highway'],['Drop-off','Terminal 2']],tip:'Drop me off at… 表示请在……让我下车。'},
  u18l3:{title:'GP 预约卡 · Appointment',rows:[['Date','Thursday'],['Time','9:00 am'],['Reason','Sore throat, cough'],['Bring','Photo ID, Medicare card']],tip:'澳洲看全科医生常说 GP（general practitioner）。'},
  u18l4:{title:'药品标签 · Pharmacy label',rows:[['Medicine','Pain relief'],['Directions','Follow the label'],['With food?','Ask the pharmacist'],['If worse','Contact a doctor']],tip:'真实用药请遵照药品标签和医护人员建议。'}
};

function renderSceneMaterial(id){
  const material=sceneMaterials[id];
  if(!material) return '';
  return `<section class="scene-material">${material.image?`<img src="${material.image}" alt="${escapeHtml(material.alt)}" loading="lazy">`:''}<div class="material-paper"><div class="material-heading">${escapeHtml(material.title)}</div>${material.rows.map(([key,value])=>`<div class="material-row"><span>${escapeHtml(key)}</span><b>${escapeHtml(value)}</b></div>`).join('')}<div class="material-tip">${escapeHtml(material.tip)}</div></div></section>`;
}

function renderWordNotes(words=[]){
  if(!words.length) return '';
  return `<div class="word-notes"><div class="word-notes-title">📚 核心表达与单词注释</div>${words.map(([word,pronunciation,meaning,usage])=>`<div class="word-note"><div><b>${escapeHtml(word)}</b><span>${escapeHtml(pronunciation)}</span></div><strong>${escapeHtml(meaning)}</strong><small>${escapeHtml(usage)}</small></div>`).join('')}</div>`;
}

function renderFooter(feedback=null){
  const q = currentLesson.questions[questionIndex];
  const canSubmit = ['dialogue','vocab','roleplay'].includes(q.type) ? true : q.type==='choice' ? selectedAnswer!==null : q.type==='speak' ? selectedAnswer==='spoken' : Boolean(selectedAnswer);
  let html = '';
  if(feedback){
    html += `<div class="feedback ${feedback.good?'good':'bad'}">${escapeHtml(feedback.text)}</div>`;
  }
  if(answered){
    html += `<button class="primary-btn" id="nextBtn">${questionIndex===currentLesson.questions.length-1?'查看结果':'继续'}</button>`;
  } else {
    const actionLabel=q.type==='dialogue'?'对话听读完成':q.type==='vocab'?'单词复习完成':q.type==='roleplay'?'我说出自己的回应了':q.type==='speak'?'完成跟读':q.type==='write'?'对照参考答案':'检查';
    html += `<button class="primary-btn" id="checkBtn" ${canSubmit?'':'disabled'} style="${canSubmit?'':'opacity:.45;box-shadow:none'}">${actionLabel}</button>`;
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
  if(q.type==='write' && !selectedAnswer) return;
  answered = true;
  let good = true;
  let text = '不错，继续。';
  if(q.type==='dialogue'||q.type==='vocab'||q.type==='roleplay'){
    correctCount++;
    text = q.type==='vocab'?'记得听词、复述，再用自己的生活造句。':q.type==='roleplay'?'完成一轮真实回应练习。':'先听整体，再逐句跟读，留意单词注释里的用法。';
  } else if(q.type==='choice'){
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
  } else if(q.type==='speak') {
    correctCount++;
    text = '开口比憋在脑子里强得多。';
  } else {
    correctCount++;
    text = `参考答案：${q.modelAnswer}。对照检查句子是否完整、动词时态是否合适。`;
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
  u.dailyStudyMinutes += currentLesson.estimatedMinutes || 5;
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
    <div class="input-row"><label>每日学习时长目标（分钟）</label><input id="goalInput" type="number" min="15" max="90" step="15" value="${state.dailyGoalMinutes}"></div>
    <button class="primary-btn" id="saveSettings">保存</button>
    <button class="secondary-btn" id="resetHearts">恢复 5 颗心</button>`);
  $('saveSettings').addEventListener('click',()=>{
    const name = $('nameInput').value.trim() || u.name;
    const goal = Math.max(15, Math.min(90, Number($('goalInput').value)||30));
    u.name = name; u.avatar = name.slice(0,1); state.dailyGoalMinutes = goal; save(); closeSheet(); render(); showToast('设置已保存');
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
    return q ? `<div class="option-btn"><div><b>${escapeHtml(q.prompt)}</b><div class="sheet-copy">${escapeHtml(q.explain||q.modelAnswer||'重新看一遍即可')}</div></div></div>` : '';
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
  a.href = url; a.download = '娜娜的澳洲起点-学习进度.json'; a.click();
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
