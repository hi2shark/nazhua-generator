const codeMaps = {
  PEK: {
    x: 1025,
    y: 178,
    name: '北京',
    country: '中国',
  },
  PVG: {
    x: 1057,
    y: 225,
    name: '上海',
    country: '中国',
  },
  CKG: {
    x: 1010,
    y: 235,
    name: '重庆',
    country: '中国',
  },
  TFU: {
    x: 1000,
    y: 230,
    name: '成都',
    country: '中国',
  },
  HKG: {
    x: 1039,
    y: 263,
    name: '香港',
    country: '中国',
  },
  MFM: {
    x: 1035,
    y: 264,
    name: '澳门',
    country: '中国',
  },
  TPE: {
    x: 1067,
    y: 253,
    name: '台北',
    country: '中国',
  },
  OSA: {
    x: 1109,
    y: 207,
    name: '大阪',
    country: '日本',
  },
  TYO: {
    x: 1124,
    y: 199,
    name: '东京',
    country: '日本',
  },
  SEL: {
    x: 1077,
    y: 198,
    name: '首尔',
    country: '韩国',
  },
  SIN: {
    x: 1000,
    y: 354,
    name: '新加坡',
    country: '新加坡',
  },
  JHB: {
    x: 997,
    y: 350,
    name: '新山',
    country: '马来西亚',
  },
  KUL: {
    x: 990,
    y: 345,
    name: '吉隆坡',
    country: '马来西亚',
  },
  HAN: {
    x: 998,
    y: 274,
    name: '河内',
    country: '越南',
  },
  SGN: {
    x: 1015,
    y: 314,
    name: '胡志明市',
    country: '越南',
  },
  LAX: {
    x: 95,
    y: 207,
    name: '洛杉矶',
    country: '美国',
  },
  LAS: {
    x: 98,
    y: 198,
    name: '拉斯维加斯',
    country: '美国',
  },
  SLC: {
    x: 111,
    y: 189,
    name: '盐湖城',
    country: '美国',
  },
  SJC: {
    x: 87,
    y: 193,
    name: '圣何塞',
    country: '美国',
  },
  SEA: {
    x: 118,
    y: 143,
    name: '西雅图',
    country: '美国',
  },
  MIA: {
    x: 243,
    y: 244,
    name: '迈阿密',
    country: '美国',
  },
  ORD: {
    x: 233,
    y: 175,
    name: '芝加哥',
    country: '美国',
  },
  NYC: {
    x: 280,
    y: 179,
    name: '纽约',
    country: '美国',
  },
  YYZ: {
    x: 267,
    y: 161,
    name: '多伦多',
    country: '加拿大',
  },
  SYD: {
    x: 1167,
    y: 519,
    name: '悉尼',
    country: '澳大利亚',
  },
  AMS: {
    x: 595,
    y: 125,
    name: '阿姆斯特丹',
    country: '荷兰',
  },
  LON: {
    x: 571,
    y: 127,
    name: '伦敦',
    country: '英国',
  },
  FRA: {
    x: 603,
    y: 137,
    name: '法兰克福',
    country: '德国',
  },
  LUX: {
    x: 591,
    y: 140,
    name: '卢森堡',
    country: '卢森堡',
  },
  CDG: {
    x: 579,
    y: 145,
    name: '巴黎',
    country: '法国',
  },
  SVO: {
    x: 704,
    y: 115,
    name: '莫斯科',
    country: '俄罗斯',
  },
  OTP: {
    x: 673,
    y: 160,
    name: '布加勒斯特',
    country: '罗马尼亚',
  },
  IST: {
    x: 676,
    y: 176,
    name: '伊斯坦布尔',
    country: '土耳其',
  },
};

export const aliasMapping = {
  SGP: 'SIN',
  ICN: 'SEL',
  NRT: 'TYO',
  HND: 'TYO',
  KIX: 'OSA',
  PAR: 'CDG',
  MOW: 'SVO',
  CHI: 'ORD',
  SHA: 'PVG',
  CAN: 'CKG',
  CTU: 'TFU',
  BJS: 'PEK',
  HK: 'HKG',
  MO: 'MFM',
  TW: 'TPE',
};

export const countryCodeMapping = {
  CN: 'PEK',
  JP: 'TYO',
  SG: 'SIN',
  KR: 'SEL',
  MY: 'KUL',
  VN: 'HAN',
  TR: 'IST',
  RO: 'OTP',
  LU: 'LUX',
  FR: 'CDG',
  RU: 'SVO',
  DE: 'FRA',
  NL: 'AMS',
  UK: 'LON',
  GB: 'LON',
  AU: 'SYD',
  US: 'LAX',
};

export default codeMaps;
