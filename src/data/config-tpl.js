export default {
  title: '',
  hideWorldMap: false,
  hideHomeWorldMap: false,
  hideDetailWorldMap: false,
  hideFilter: false,
  hideTag: false,
  freeAmount: '',
  infinityCycle: '', // 无限周期名称
  hideListItemBill: false, // 隐藏列表项的账单信息
  buyBtnText: '', // 购买按钮文案
  apiMonitorPath: '/api/v1/monitor/{id}',
  wsPath: '/ws',
  nezhaPath: '/nezha/',
  nezhaV0ConfigType: 'servers', // 哪吒v0数据读取类型
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
  infinityCycle: {
    label: '无限周期名称',
    placeholder: '请输入无限周期名称',
    remark: '默认显示为“无限”，万一你想叫它“永久”呢？',
    type: 'input',
  },
  hideListItemBill: {
    label: '隐藏列表账单',
    remark: '隐藏列表项的账单信息，不影响详情页的账单信息',
    type: 'switch',
  },
  buyBtnText: {
    label: '购买按钮文案',
    placeholder: '请输入购买按钮文案',
    remark: '默认显示为“购买”，万一你想叫它“下单”呢？',
    type: 'input',
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
};
