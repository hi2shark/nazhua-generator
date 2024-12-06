export default {
  title: '',
  hideWorldMap: false,
  hideHomeWorldMap: false,
  hideDetailWorldMap: false,
  hideFilter: false,
  hideTag: false,
  freeAmount: '',
  infinityCycle: '', // 无限周期名称
  buyBtnText: '', // 购买按钮文案
  hideNavbarServerCount: false, // 隐藏服务器数量
  hideNavbarServerStat: false, // 隐藏服务器统计
  hideListItemStatusDonut: false, // 隐藏列表项的饼图
  hideListItemStat: false, // 隐藏列表项的统计信息
  hideListItemBill: false, // 隐藏列表项的账单信息
  listServerStatusType: '', // 服务器状态类型--列表 progress、donut
  detailServerStatusType: '', // 服务器状态类型--详情页 progress、donut
  nezhaVersion: 'v0', // 哪吒版本
  apiMonitorPath: '/api/v1/monitor/{id}',
  wsPath: '/ws',
  nezhaPath: '/nezha/',
  nezhaV0ConfigType: 'servers', // 哪吒v0数据读取类型
  v1ApiMonitorPath: '/api/v1/service/{id}',
  v1WsPath: '/api/v1/ws/server',
  v1GroupPath: '/api/v1/server-group',
  routeMode: '', // 路由模式
  // customCodeMap: {}, // 自定义的地图点信息 - 这个需要读取自定义节点后再塞进来
};

export const fieldLabels = {
  title: {
    label: '网站标题',
    placeholder: '请输入网站标题',
    remark: '默认显示为“哪吒探针”',
    type: 'input',
  },
  hideWorldMap: {
    label: '隐藏地图',
    type: 'switch',
    remark: '隐藏地图后，首页和详情页都不会显示地图',
  },
  hideHomeWorldMap: {
    label: '首页隐藏地图',
    type: 'switch',
  },
  hideDetailWorldMap: {
    label: '详情页隐藏地图',
    type: 'switch',
  },
  hideFilter: {
    label: '隐藏筛选',
    type: 'switch',
  },
  hideTag: {
    label: '隐藏标签',
    type: 'switch',
  },
  freeAmount: {
    label: '免费的叫啥',
    placeholder: '请输入免费服务的费用名称',
    remark: '默认显示为“免费”，万一你想叫它“白嫖”呢？',
    type: 'input',
  },
  buyBtnText: {
    label: '购买按钮文案',
    placeholder: '请输入购买按钮文案',
    remark: '默认显示为“购买”，万一你想叫它“下单”呢？',
    type: 'input',
  },
  infinityCycle: {
    label: '无限周期名称',
    placeholder: '请输入无限周期名称',
    remark: '默认显示为“无限”，万一你想叫它“永久”呢？',
    type: 'input',
  },
  hideNavbarServerCount: {
    label: '隐藏服务器数量',
    type: 'switch',
    remark: '隐藏导航栏的服务器数量统计',
  },
  hideNavbarServerStat: {
    label: '隐藏服务器统计',
    type: 'switch',
    remark: '隐藏导航栏的服务器统计信息',
  },
  hideListItemStatusDonut: {
    label: '隐藏列表饼图',
    remark: '隐藏列表项的状态饼图，不影响详情页的状态饼图',
    type: 'switch',
  },
  hideListItemStat: {
    label: '隐藏列表统计',
    remark: '隐藏列表项的统计信息，不影响详情页的统计信息',
    type: 'switch',
  },
  hideListItemBill: {
    label: '隐藏列表账单',
    remark: '隐藏列表项的账单信息，不影响详情页的账单信息',
    type: 'switch',
  },
  listServerStatusType: {
    label: '列表状态类型',
    placeholder: '请选择列表状态类型',
    remark: '列表项的状态类型',
    type: 'select',
    options: [
      {
        label: '圆环饼图(donut) - 默认',
        value: 'donut',
      },
      {
        label: '进度条(progress)',
        value: 'progress',
      },
    ],
  },
  detailServerStatusType: {
    label: '详情状态类型',
    placeholder: '请选择详情状态类型',
    remark: '详情页的状态类型',
    type: 'select',
    options: [
      {
        label: '圆环饼图(donut) - 默认',
        value: 'donut',
      },
      {
        label: '进度条(progress)',
        value: 'progress',
      },
    ],
  },
  nezhaVersion: {
    label: '哪吒版本',
    placeholder: '请选择哪吒版本',
    remark: '哪吒探针的版本，目前仅支持v0和v1，默认为v0',
    type: 'select',
    options: [
      {
        label: 'v0 - 默认',
        value: 'v0',
      },
      {
        label: 'v1',
        value: 'v1',
      },
    ],
  },
  apiMonitorPath: {
    label: '监控API地址',
    placeholder: '请输入网络服务监控API路径',
    remark: '主要是网络服务那个监控数据的读取，目前只会替换关键词 {id}',
    type: 'input',
  },
  wsPath: {
    label: 'WS服务地址',
    placeholder: '请输入WebSocket服务的路径',
    remark: '如果ws不可用，无法实时更新数据',
    type: 'input',
  },
  nezhaPath: {
    label: '哪吒主页地址',
    placeholder: '请输入哪吒的路径',
    remark: 'v0哪吒探针主页的地址，用于异步读取公开的节点信息，如果不可用无法读取“公开备注”',
    type: 'input',
  },
  nezhaV0ConfigType: {
    label: '数据匹配关键词',
    placeholder: '请输入哪吒v0数据匹配关键词',
    remark: 'v0哪吒主页上的数据匹配关键词，[ServerStatus、Default]主题是 servers，其它是 initData',
    type: 'input',
    options: [
      {
        label: 'servers',
        value: 'servers',
        remark: 'ServerStatus、Default主题',
      },
      {
        label: 'initData',
        value: 'initData',
        remark: '其它主题',
      },
    ],
  },
  v1ApiMonitorPath: {
    label: 'v1监控API地址',
    placeholder: '请输入v1网络服务监控API路径',
    remark: '主要是网络服务那个监控数据的读取，目前只会替换关键词 {id}',
    type: 'input',
  },
  v1WsPath: {
    label: 'v1WS服务地址',
    placeholder: '请输入v1WebSocket服务的路径',
    remark: '如果ws不可用，无法实时更新数据',
    type: 'input',
  },
  v1GroupPath: {
    label: 'v1服务器组API地址',
    placeholder: '请输入v1服务器组API路径',
    remark: 'v1版本的服务器组API',
    type: 'input',
  },
  routeMode: {
    label: '路由模式',
    placeholder: '请选择路由模式',
    remark: '默认为h5，如果是hash模式，需要后端支持',
    type: 'select',
    options: [
      {
        label: 'h5',
        value: 'h5',
        remark: 'H5路由模式',
      },
      {
        label: 'hash',
        value: 'hash',
        remark: 'Hash路由模式',
      },
    ],
  },
};
