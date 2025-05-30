type Data = {
  [key: string]: { title: string; score: number }[];
};

// Helper function to deduplicate movies
const deduplicateMovies = (data: Data): Data => {
  const movieMap = new Map<string, { year: string; score: number }>();
  
  // First pass: collect all movies and keep the highest rated version
  Object.entries(data).forEach(([year, movies]) => {
    movies.forEach(movie => {
      const existing = movieMap.get(movie.title);
      if (!existing || movie.score > existing.score) {
        movieMap.set(movie.title, { year, score: movie.score });
      }
    });
  });
  
  // Second pass: create new data structure with deduplicated movies
  const result: Data = {};
  movieMap.forEach((value, title) => {
    if (!result[value.year]) {
      result[value.year] = [];
    }
    result[value.year]!.push({ title, score: value.score });
  });
  
  // Sort movies within each year by score in descending order
  Object.keys(result).forEach(year => {
    result[year]!.sort((a, b) => b.score - a.score);
  });
  
  return result;
};

const rawData: Data = {
  "2005": [
    { "title": "功夫", "score": 8.7 },
    { "title": "七剑", "score": 7.0 },
    { "title": "头文字 D", "score": 7.3 },
    { "title": "无极", "score": 5.3 },
    { "title": "黑社会", "score": 8.2 },
    { "title": "如果·爱", "score": 7.5 },
    { "title": "神话", "score": 6.5 },
    { "title": "长恨歌", "score": 7.7 },
    { "title": "天下无贼", "score": 8.7 },
    { "title": "空房间", "score": 8.1 },
    { "title": "千年湖", "score": 7.6 },
    { "title": "卡萨布兰卡", "score": 8.7 },
    { "title": "辛德勒的名单", "score": 9.5 },
    { "title": "阿甘正传", "score": 9.5 },
    { "title": "肖申克的救赎", "score": 9.7 }
  ],
  "2006": [
    { "title": "疯狂的石头", "score": 8.5 },
    { "title": "满城尽带黄金甲", "score": 6.8 },
    { "title": "图雅的婚事", "score": 8.3 },
    { "title": "夜宴", "score": 6.7 },
    { "title": "宝贝计划", "score": 7.3 },
    { "title": "霍元甲", "score": 7.5 },
    { "title": "门徒", "score": 7.7 },
    { "title": "伊莎贝拉", "score": 7.6 },
    { "title": "卧虎", "score": 7.1 },
    { "title": "黑社会 2：以和为贵", "score": 8.2 },
    { "title": "父子", "score": 8.0 },
    { "title": "放逐", "score": 8.0 },
    { "title": "无间道风云", "score": 7.3 },
    { "title": "龙虎门", "score": 6.8 },
    { "title": "情癫大圣", "score": 6.3 }
  ],
  "2007": [
    { "title": "集结号", "score": 8.0 },
    { "title": "色，戒", "score": 8.1 },
    { "title": "谍影重重 3", "score": 8.8 },
    { "title": "投名状", "score": 7.7 },
    { "title": "门", "score": 7.0 },
    { "title": "男人的战争", "score": 8.0 },
    { "title": "太阳照常升起", "score": 7.5 },
    { "title": "天堂口", "score": 6.6 },
    { "title": "伤城", "score": 7.5 },
    { "title": "我在伊朗长大", "score": 8.8 },
    { "title": "大电影 2.0", "score": 6.5 },
    { "title": "卧虎藏龙", "score": 8.2 },
    { "title": "无间道", "score": 9.2 },
    { "title": "英雄", "score": 7.7 },
    { "title": "十面埋伏", "score": 7.2 }
  ],
  "2008": [
    { "title": "蝙蝠侠：黑暗骑士", "score": 9.2 },
    { "title": "机器人总动员", "score": 9.3 },
    { "title": "钢铁侠", "score": 8.3 },
    { "title": "赤壁 (上)", "score": 7.4 },
    { "title": "非诚勿扰", "score": 7.6 },
    { "title": "画皮", "score": 6.2 },
    { "title": "功夫之王", "score": 5.0 },
    { "title": "长江七号", "score": 6.5 },
    { "title": "梅兰芳", "score": 7.2 },
    { "title": "叶问", "score": 8.0 },
    { "title": "三个傻瓜", "score": 9.2 },
    { "title": "地球上的星星", "score": 9.2 },
    { "title": "当幸福来敲门", "score": 9.1 },
    { "title": "穿越时空的少女", "score": 8.7 },
    { "title": "忠犬八公物语", "score": 9.0 }
  ],
  "2009": [
    { "title": "阿凡达", "score": 8.8 },
    { "title": "无耻混蛋", "score": 8.6 },
    { "title": "飞屋环游记", "score": 9.0 },
    { "title": "海上钢琴师", "score": 9.3 },
    { "title": "风之谷", "score": 8.9 },
    { "title": "天空之城", "score": 9.1 },
    { "title": "龙猫", "score": 9.2 },
    { "title": "借东西的小人阿莉埃蒂", "score": 8.8 },
    { "title": "神偷奶爸", "score": 8.6 },
    { "title": "玩具总动员 3", "score": 8.9 },
    { "title": "盗梦空间", "score": 9.3 },
    { "title": "哈利·波特与死亡圣器 (上)", "score": 8.5 },
    { "title": "国王的演讲", "score": 8.4 },
    { "title": "社交网络", "score": 8.1 },
    { "title": "127 小时", "score": 8.0 }
  ],
  "2010": [
    { "title": "盗梦空间", "score": 9.3 },
    { "title": "让子弹飞", "score": 9.0 },
    { "title": "怦然心动", "score": 9.1 },
    { "title": "唐山大地震", "score": 7.9 },
    { "title": "大兵小将", "score": 7.2 },
    { "title": "叶问 2：宗师传奇", "score": 7.2 },
    { "title": "岁月神偷", "score": 8.7 },
    { "title": "十月围城", "score": 7.6 },
    { "title": "国王的演讲", "score": 8.4 },
    { "title": "社交网络", "score": 8.1 },
    { "title": "玩具总动员 3", "score": 8.9 },
    { "title": "驯龙高手", "score": 8.7 },
    { "title": "神偷奶爸", "score": 8.6 },
    { "title": "哈利·波特与死亡圣器 (上)", "score": 8.5 },
    { "title": "爱丽丝梦游仙境", "score": 7.3 }
  ],
  "2011": [
    { "title": "熔炉", "score": 9.3 },
    { "title": "一次别离", "score": 8.7 },
    { "title": "阳光姐妹淘", "score": 8.8 },
    { "title": "辛亥革命", "score": 6.2 },
    { "title": "金陵十三钗", "score": 8.2 },
    { "title": "倭寇的踪迹", "score": 7.8 },
    { "title": "武侠", "score": 7.3 },
    { "title": "窃听风暴", "score": 9.1 },
    { "title": "飞屋环游记", "score": 9.0 },
    { "title": "海上钢琴师", "score": 9.3 },
    { "title": "哈利·波特与死亡圣器 (下)", "score": 8.7 },
    { "title": "变形金刚 3", "score": 7.2 },
    { "title": "加勒比海盗 4：惊涛怪浪", "score": 7.3 },
    { "title": "功夫熊猫 2", "score": 8.0 },
    { "title": "速度与激情 5", "score": 8.6 }
  ],
  "2012": [
    { "title": "少年派的奇幻漂流", "score": 9.1 },
    { "title": "泰囧", "score": 7.5 },
    { "title": "悲惨世界", "score": 8.5 },
    { "title": "霍比特人 1：意外之旅", "score": 8.3 },
    { "title": "蝙蝠侠：黑暗骑士崛起", "score": 8.7 },
    { "title": "普罗米修斯", "score": 7.6 },
    { "title": "复仇者联盟", "score": 8.1 },
    { "title": "寒战", "score": 7.6 },
    { "title": "搜索", "score": 8.4 },
    { "title": "金陵十三钗", "score": 8.2 },
    { "title": "听风者", "score": 7.0 },
    { "title": "画皮 2", "score": 6.2 },
    { "title": "大魔术师", "score": 7.6 },
    { "title": "全城热恋 2", "score": 5.7 },
    { "title": "龙门飞甲", "score": 6.8 }
  ],
  "2013": [
    { "title": "疯狂原始人", "score": 8.7 },
    { "title": "狩猎", "score": 9.1 },
    { "title": "辩护人", "score": 9.2 },
    { "title": "素媛", "score": 9.3 },
    { "title": "小时代", "score": 3.8 },
    { "title": "中国合伙人", "score": 7.7 },
    { "title": "致我们终将逝去的青春", "score": 6.7 },
    { "title": "西游·降魔篇", "score": 7.0 },
    { "title": "被解救的姜戈", "score": 8.7 },
    { "title": "霍比特人 2：史矛革之战", "score": 8.5 },
    { "title": "环太平洋", "score": 7.7 },
    { "title": "钢铁侠 3", "score": 7.6 },
    { "title": "雷神 2：黑暗世界", "score": 7.4 },
    { "title": "饥饿游戏 2：星火燎原", "score": 7.5 },
    { "title": "速度与激情 6", "score": 8.3 }
  ],
  "2014": [
    { "title": "星际穿越", "score": 9.4 },
    { "title": "布达佩斯大饭店", "score": 8.9 },
    { "title": "消失的爱人", "score": 8.7 },
    { "title": "超能陆战队", "score": 8.6 },
    { "title": "爆裂鼓手", "score": 8.7 },
    { "title": "模仿游戏", "score": 8.8 },
    { "title": "霍比特人 3：五军之战", "score": 8.3 },
    { "title": "银河护卫队", "score": 8.1 },
    { "title": "美国队长 2：冬日战士", "score": 7.9 },
    { "title": "X 战警：逆转未来", "score": 8.2 },
    { "title": "超体", "score": 7.4 },
    { "title": "明日边缘", "score": 8.1 },
    { "title": "猩球崛起 2：黎明之战", "score": 7.6 },
    { "title": "地心引力", "score": 8.0 },
    { "title": "一个人的武林", "score": 7.1 }
  ],
  "2015": [
    { "title": "荒蛮故事", "score": 8.8 },
    { "title": "疯狂的麦克斯 4：狂暴之路", "score": 8.6 },
    { "title": "心迷宫", "score": 8.7 },
    { "title": "夏洛特烦恼", "score": 7.5 },
    { "title": "滚蛋吧！肿瘤君", "score": 7.5 },
    { "title": "烈日灼心", "score": 8.0 },
    { "title": "解救吾先生", "score": 7.7 },
    { "title": "师父", "score": 7.9 },
    { "title": "西游记之大圣归来", "score": 8.4 },
    { "title": "港囧", "score": 5.7 },
    { "title": "煎饼侠", "score": 6.0 },
    { "title": "捉妖记", "score": 6.8 },
    { "title": "速度与激情 7", "score": 8.4 },
    { "title": "复仇者联盟 2：奥创纪元", "score": 7.6 },
    { "title": "星球大战：原力觉醒", "score": 7.3 }
  ],
  "2016": [
    { "title": "血战钢锯岭", "score": 8.7 },
    { "title": "驴得水", "score": 8.3 },
    { "title": "一个叫欧维的男人决定去死", "score": 8.7 },
    { "title": "湄公河行动", "score": 8.0 },
    { "title": "树大招风", "score": 7.7 },
    { "title": "比利·林恩的中场战事", "score": 8.5 },
    { "title": "完美陌生人", "score": 8.5 },
    { "title": "萨利机长", "score": 8.3 },
    { "title": "初恋这首情歌", "score": 8.5 },
    { "title": "神奇动物在哪里", "score": 7.8 },
    { "title": "疯狂动物城", "score": 9.2 },
    { "title": "美人鱼", "score": 6.7 },
    { "title": "你的名字。", "score": 8.5 },
    { "title": "釜山行", "score": 8.5 },
    { "title": "死侍", "score": 7.6 }
  ],
  "2017": [
    { "title": "摔跤吧！爸爸", "score": 9.0 },
    { "title": "请以你的名字呼唤我", "score": 8.8 },
    { "title": "看不见的客人", "score": 8.8 },
    { "title": "海边的曼彻斯特", "score": 8.6 },
    { "title": "银翼杀手 2049", "score": 8.3 },
    { "title": "至暗时刻", "score": 8.5 },
    { "title": "敦刻尔克", "score": 8.4 },
    { "title": "爱乐之城", "score": 8.4 },
    { "title": "嘉年华", "score": 8.2 },
    { "title": "相爱相亲", "score": 7.8 },
    { "title": "不成问题的问题", "score": 8.0 },
    { "title": "目击者之追凶", "score": 8.2 },
    { "title": "芳华", "score": 7.7 },
    { "title": "一念无明", "score": 8.0 },
    { "title": "寻梦环游记", "score": 9.1 }
  ],
  "2018": [
    { "title": "我不是药神", "score": 9.0 },
    { "title": "小偷家族", "score": 8.7 },
    { "title": "头号玩家", "score": 8.6 },
    { "title": "三块广告牌", "score": 8.7 },
    { "title": "蜘蛛侠：平行宇宙", "score": 8.6 },
    { "title": "大佛普拉斯", "score": 8.7 },
    { "title": "摄影机不要停！", "score": 8.2 },
    { "title": "无名之辈", "score": 8.0 },
    { "title": "燃烧", "score": 8.1 },
    { "title": "现在去见你", "score": 8.2 },
    { "title": "奇迹男孩", "score": 8.6 },
    { "title": "幸福的拉扎罗", "score": 8.5 },
    { "title": "复仇者联盟 3：无限战争", "score": 8.1 },
    { "title": "网络谜踪", "score": 8.5 },
    { "title": "死侍 2", "score": 7.5 }
  ],
  "2019": [
    { "title": "哪吒之魔童降世", "score": 8.4 },
    { "title": "少年的你", "score": 8.2 },
    { "title": "谁先爱上他的", "score": 8.6 },
    { "title": "地久天长", "score": 8.0 },
    { "title": "流浪地球", "score": 7.9 },
    { "title": "寄生虫", "score": 8.7 },
    { "title": "小丑", "score": 8.7 },
    { "title": "波西米亚狂想曲", "score": 8.7 },
    { "title": "复仇者联盟 4：终局之战", "score": 8.5 },
    { "title": "绿皮书", "score": 8.9 },
    { "title": "爱尔兰人", "score": 8.6 },
    { "title": "婚姻故事", "score": 8.7 },
    { "title": "乔乔的异想世界", "score": 8.8 },
    { "title": "小妇人", "score": 8.6 },
    { "title": "利刃出鞘", "score": 8.2 }
  ],
  "2020": [
    { "title": "阳光普照", "score": 8.5 },
    { "title": "一秒钟", "score": 7.8 },
    { "title": "气球", "score": 7.9 },
    { "title": "八佰", "score": 7.6 },
    { "title": "热带雨", "score": 7.5 },
    { "title": "金都", "score": 7.7 },
    { "title": "叔·叔", "score": 7.7 },
    { "title": "半个喜剧", "score": 7.4 },
    { "title": "我和我的家乡", "score": 7.2 },
    { "title": "夺冠", "score": 7.4 },
    { "title": "1917", "score": 8.5 },
    { "title": "信条", "score": 7.6 },
    { "title": "南山的部长们", "score": 8.0 },
    { "title": "理查德·朱维尔的哀歌", "score": 7.8 },
    { "title": "疯狂原始人 2", "score": 7.8 }
  ],
  "2021": [
    { "title": "雄狮少年", "score": 8.3 },
    { "title": "孤味", "score": 8.0 },
    { "title": "你好，李焕英", "score": 7.7 },
    { "title": "白蛇传·情", "score": 8.0 },
    { "title": "同学麦娜丝", "score": 7.8 },
    { "title": "悬崖之上", "score": 7.6 },
    { "title": "吉祥如意", "score": 7.5 },
    { "title": "无声", "score": 7.5 },
    { "title": "拆弹专家 2", "score": 7.5 },
    { "title": "心灵奇旅", "score": 8.7 },
    { "title": "健听女孩", "score": 8.3 },
    { "title": "困在时间里的父亲", "score": 8.6 },
    { "title": "沙丘", "score": 7.9 },
    { "title": "速度与激情 9", "score": 5.2 },
    { "title": "黑寡妇", "score": 6.2 }
  ],
  "2022": [
    { "title": "爱情神话", "score": 8.1 },
    { "title": "狙击手", "score": 7.7 },
    { "title": "一场很（没）有必要的春晚", "score": 7.7 },
    { "title": "瀑布", "score": 7.7 },
    { "title": "还是觉得你最好", "score": 7.6 },
    { "title": "奇迹·笨小孩", "score": 7.4 },
    { "title": "人生大事", "score": 7.3 },
    { "title": "妈妈！", "score": 7.2 },
    { "title": "万里归途", "score": 7.2 },
    { "title": "隐入尘烟", "score": 8.5 },
    { "title": "西线无战事", "score": 8.5 },
    { "title": "青春变形记", "score": 8.0 },
    { "title": "阿凡达：水之道", "score": 7.8 },
    { "title": "祝你好运，里奥·格兰德", "score": 8.1 },
    { "title": "套装", "score": 7.9 }
  ],
  "2023": [
    { "title": "流浪地球 2", "score": 8.3 },
    { "title": "长安三万里", "score": 8.3 },
    { "title": "椒麻堂会", "score": 8.5 },
    { "title": "关于我和鬼变成家人的那件事", "score": 8.1 },
    { "title": "宇宙探索编辑部", "score": 8.0 },
    { "title": "封神第一部：朝歌风云", "score": 7.7 },
    { "title": "我爱你！", "score": 7.5 },
    { "title": "三大队", "score": 7.6 },
    { "title": "保你平安", "score": 7.3 },
    { "title": "奥本海默", "score": 8.8 },
    { "title": "蜘蛛侠：纵横宇宙", "score": 8.5 },
    { "title": "银河护卫队 3", "score": 8.3 },
    { "title": "坠落的审判", "score": 8.7 },
    { "title": "穿靴子的猫 2", "score": 7.9 },
    { "title": "巴比伦", "score": 7.5 }
  ],
  "2024": [
    { "title": "好东西", "score": 8.9 },
    { "title": "出走的决心", "score": 8.8 },
    { "title": "破·地狱", "score": 8.4 },
    { "title": "年少日记", "score": 8.4 },
    { "title": "雄狮少年 2", "score": 8.5 },
    { "title": "周处除三害", "score": 8.2 },
    { "title": "年会不能停！", "score": 8.0 },
    { "title": "我们一起摇太阳", "score": 7.9 },
    { "title": "走走停停", "score": 7.8 },
    { "title": "只此青绿", "score": 8.1 },
    { "title": "机器人之梦", "score": 8.7 },
    { "title": "名侦探柯南：迷宫的十字路口", "score": 8.5 },
    { "title": "黑箱日记", "score": 9.2 },
    { "title": "猫猫的奇幻漂流", "score": 8.4 },
    { "title": "女人世界", "score": 8.4 }
  ],
  "2025": [
    { "title": "哪吒之魔童闹海", "score": 8.5 },
    { "title": "蛟龙行动", "score": 6.3 },
    { "title": "唐探 1900", "score": 6.5 },
    { "title": "射雕英雄传：侠之大者", "score": 5.2 },
    { "title": "封神第二部：战火西岐", "score": 6.5 },
    { "title": "熊出没·重启未来", "score": 7.1 },
    { "title": "虎毒不", "score": 7.6 },
    { "title": "母爱食堂", "score": 7.1 },
    { "title": "日落日出", "score": 7.0 },
    { "title": "巴黎夏日", "score": 8.2 },
    { "title": "天空的另一面", "score": 7.8 },
    { "title": "大风杀", "score": 7.0 },
    { "title": "雷霆特攻队", "score": 6.8 },
    { "title": "水饺皇后", "score": 6.5 },
    { "title": "假面骑士歌查德：毕业", "score": 7.2 }
  ]
}

const data = deduplicateMovies(rawData);

export default data;
