export default {
  title: '哪吒监控', // 网站标题
  customFavicon: '', // 自定义favicon地址
  footerSlogan: '', // 页脚标语
  freeAmount: '白嫖', // 免费服务的费用名称
  infinityCycle: '长期有效', // 无限周期名称
  buyBtnText: '购买', // 购买按钮文案
  customBackgroundImage: '', // 自定义的背景图片地址
  lightBackground: false, // 启用了浅色系背景图，会强制关闭点点背景
  showFireworks: true, // 是否显示烟花，建议开启浅色系背景
  showLantern: true, // 是否显示灯笼
  enableInnerSearch: true, // 启用内部搜索
  listServerItemTypeToggle: true, // 服务器列表项类型切换
  listServerItemType: 'card', // 服务器列表项类型 card/row
  listServerStatusType: 'progress', // 服务器状态类型--列表
  listServerRealTimeShowLoad: false, // 列表实时显示负载
  detailServerStatusType: 'progress', // 服务器状态类型--详情页
  simpleColorMode: false, // 启用简约色系
  serverStatusLinear: true, // 服务器状态渐变线性显示 - 与简约色系互斥
  disableSarasaTermSC: true, // 禁用Sarasa Term SC字体
  hideWorldMap: false, // 隐藏地图
  hideHomeWorldMap: false, // 隐藏首页地图
  hideDetailWorldMap: false, // 隐藏详情地图
  homeWorldMapPosition: 'top', // 首页地图位置 top/bottom
  detailWorldMapPosition: 'top', // 详情页地图位置 top/bottom
  hideNavbarServerCount: false, // 隐藏服务器数量
  hideNavbarServerStat: false, // 隐藏服务器统计
  hideListItemStatusDonut: false, // 隐藏列表项的饼图
  hideListItemStat: false, // 隐藏列表项的统计信息
  hideListItemBill: false, // 隐藏列表项的账单信息
  hideFilter: false, // 隐藏筛选
  hideTag: false, // 隐藏标签
  hideDotBG: false, // 隐藏盒子里面的点阵背景
  monitorRefreshTime: 10, // 监控刷新时间间隔，单位s（秒）, 0为不刷新，为保证不频繁请求源站，最低生效值为10s
  monitorChartType: 'multi', // 监控图表类型 single/multi
  monitorChartTypeToggle: true, // 监控图表类型切换
  filterGPUKeywords: ['Virtual Display'], // 如果GPU名称中包含这些关键字，则过滤掉
  nezhaVersion: 'v0', // 哪吒版本
  apiMonitorPath: '/api/v1/monitor/{id}',
  wsPath: '/ws',
  nezhaPath: '/nezha/',
  nezhaV0ConfigType: 'servers', // 哪吒v0数据读取类型
  v1ApiMonitorPath: '/api/v1/service/{id}',
  v1WsPath: '/api/v1/ws/server',
  v1ApiGroupPath: '/api/v1/server-group',
  v1ApiSettingPath: '/api/v1/setting',
  v1ApiProfilePath: '/api/v1/profile',
  v1DashboardUrl: '/dashboard', // v1版本控制台地址
  v1HideNezhaDashboardBtn: false, // v1版本导航栏控制台入口/登录按钮 在nezhaVersion为v1时有效
  routeMode: 'h5', // 路由模式
  // customCodeMap: {}, // 自定义的地图点信息 - 这个需要读取自定义节点后再塞进来
};

export const fieldLabels = {
  title: {
    label: '网站标题',
    placeholder: '请输入网站标题',
    remark: '默认显示为“哪吒探针”',
    type: 'input',
    v1customCode: true,
  },
  customFavicon: {
    label: '自定义favicon',
    placeholder: '请输入自定义favicon地址',
    remark: '自定义favicon地址，建议您输入完整的图标地址',
    type: 'input',
    v1customCode: true,
    version: '0.5.7+',
  },
  footerSlogan: {
    label: '页脚标语',
    placeholder: '请输入页脚标语',
    remark: '留空不占位，支持HTML代码（不支持script标签动态代码）',
    type: 'input',
    v1customCode: true,
    version: '0.5.2+',
  },
  freeAmount: {
    label: '免费的叫啥',
    placeholder: '请输入免费服务的费用名称',
    remark: '默认显示为“免费”，万一你想叫它“白嫖”呢？',
    type: 'input',
    v1customCode: true,
  },
  buyBtnText: {
    label: '购买按钮文案',
    placeholder: '请输入购买按钮文案',
    remark: '默认显示为“购买”，万一你想叫它“下单”呢？',
    type: 'input',
    v1customCode: true,
  },
  infinityCycle: {
    label: '无限周期名称',
    placeholder: '请输入无限周期名称',
    remark: '默认显示为“长期有效”，万一你想叫它“永久”呢？',
    type: 'input',
    v1customCode: true,
  },
  customBackgroundImage: {
    label: '自定义背景图片',
    placeholder: '请输入自定义背景图片地址',
    remark: '自定义背景图片地址，注意不要太大',
    type: 'input',
    v1customCode: true,
    version: '0.4.23+',
  },
  lightBackground: {
    label: '启用浅色背景',
    type: 'switch',
    remark: '启用浅色背景，会强制关闭点点背景，配合自定义背景图片使用',
    v1customCode: true,
    version: '0.4.23+',
  },
  showFireworks: {
    label: '启用烟花',
    type: 'switch',
    remark: '启用烟花，建议开启浅色背景',
    v1customCode: true,
    version: '0.5.1+',
  },
  showLantern: {
    label: '启用灯笼',
    type: 'switch',
    remark: '启用“新年快乐”灯笼',
    v1customCode: true,
    version: '0.5.1+',
  },
  enableInnerSearch: {
    label: '启用内部搜索',
    type: 'switch',
    remark: '启用内部搜索，默认启用',
    v1customCode: true,
    version: '0.5.4+',
  },
  listServerItemTypeToggle: {
    label: '列表项类型切换',
    type: 'switch',
    remark: '启用列表项类型切换，启用后列表项类型会显示为切换按钮，可以切换为卡片和行',
    v1customCode: true,
    version: '0.5.0+',
  },
  listServerItemType: {
    label: '列表项类型',
    placeholder: '请选择列表项类型',
    remark: '列表项的显示类型',
    type: 'select',
    options: [
      {
        label: '卡片(card)',
        value: 'card',
      },
      {
        label: '行(row)',
        value: 'row',
      },
    ],
    v1customCode: true,
    version: '0.4.21+',
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
    v1customCode: true,
  },
  listServerRealTimeShowLoad: {
    label: '列表显示负载',
    type: 'switch',
    remark: '列表显示显示服务器的负载，启用后会影响网速的显示模块',
    v1customCode: true,
    version: '0.4.13+',
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
    v1customCode: true,
  },
  simpleColorMode: {
    label: '简约色系',
    type: 'switch',
    remark: '启用简约色系，会强制关闭服务器状态渐变线性显示',
    v1customCode: true,
    version: '0.6.0+',
  },
  serverStatusLinear: {
    label: '状态渐变显示',
    type: 'switch',
    remark: '状态线性渐变色显示，不勾选则为单色显示，与简约色系互斥',
    v1customCode: true,
    version: '0.4.19+',
  },
  disableSarasaTermSC: {
    label: '禁用内置字体',
    type: 'switch',
    remark: '禁用Sarasa Term SC字体',
    v1customCode: true,
  },
  hideWorldMap: {
    label: '隐藏地图',
    type: 'switch',
    remark: '隐藏地图后，首页和详情页都不会显示地图',
    v1customCode: true,
  },
  hideHomeWorldMap: {
    label: '首页隐藏地图',
    type: 'switch',
    v1customCode: true,
  },
  hideDetailWorldMap: {
    label: '详情页隐藏地图',
    type: 'switch',
    v1customCode: true,
  },
  homeWorldMapPosition: {
    label: '首页地图位置',
    placeholder: '请选择首页地图位置',
    remark: '首页地图位置',
    type: 'select',
    options: [
      {
        label: '顶部(top)',
        value: 'top',
      },
      {
        label: '底部(bottom)',
        value: 'bottom',
      },
    ],
    v1customCode: true,
    version: '0.6.4+',
  },
  detailWorldMapPosition: {
    label: '详情页地图位置',
    placeholder: '请选择详情页地图位置',
    remark: '详情页地图位置',
    type: 'select',
    options: [
      {
        label: '顶部(top)',
        value: 'top',
      },
      {
        label: '底部(bottom)',
        value: 'bottom',
      },
    ],
    v1customCode: true,
    version: '0.6.4+',
  },
  hideNavbarServerCount: {
    label: '隐藏服务器数量',
    type: 'switch',
    remark: '隐藏导航栏的服务器数量统计',
    v1customCode: true,
  },
  hideNavbarServerStat: {
    label: '隐藏服务器统计',
    type: 'switch',
    remark: '隐藏导航栏的服务器统计信息',
    v1customCode: true,
  },
  hideListItemStatusDonut: {
    label: '隐藏列表饼图',
    remark: '隐藏列表项的状态饼图，不影响详情页的状态饼图',
    type: 'switch',
    v1customCode: true,
  },
  hideListItemStat: {
    label: '隐藏列表统计',
    remark: '隐藏列表项的统计信息，不影响详情页的统计信息',
    type: 'switch',
    v1customCode: true,
  },
  hideListItemBill: {
    label: '隐藏列表账单',
    remark: '隐藏列表项的账单信息，不影响详情页的账单信息',
    type: 'switch',
    v1customCode: true,
  },
  hideFilter: {
    label: '隐藏筛选',
    remark: '隐藏列表页的标签和在线/离线筛选功能',
    type: 'switch',
    v1customCode: true,
  },
  hideTag: {
    label: '隐藏标签',
    remark: '隐藏列表项的标签筛选功能',
    type: 'switch',
    v1customCode: true,
  },
  hideDotBG: {
    label: '隐藏点阵背景',
    type: 'switch',
    remark: '隐藏盒子里面的点阵背景',
    v1customCode: true,
  },
  monitorRefreshTime: {
    label: '监控刷新时间',
    placeholder: '请输入监控刷新时间',
    remark: '监控刷新时间间隔，单位s（秒）, 0为不刷新，为保证不频繁请求源站，最低生效值为10s',
    type: 'input',
    v1customCode: true,
    version: '0.4.8+',
  },
  monitorChartType: {
    label: '监控图表类型',
    placeholder: '请选择监控图表类型',
    remark: '监控图表类型，single单独显示/multi聚合在一起',
    type: 'select',
    options: [
      {
        label: '单个(single)',
        value: 'single',
      },
      {
        label: '多个(multi)',
        value: 'multi',
      },
    ],
    v1customCode: true,
    version: '0.6.4+',
  },
  monitorChartTypeToggle: {
    label: '监控图表类型切换',
    type: 'switch',
    remark: '启用监控图表类型切换',
    v1customCode: true,
    version: '0.6.4+',
  },
  filterGPUKeywords: {
    label: 'GPU过滤关键字',
    placeholder: '请输入GPU过滤关键字',
    remark: '按下Enter建(回车)确定关键词；如果GPU名称中包含这些关键字，则过滤掉',
    type: 'input-tag',
    v1customCode: true,
    version: '0.4.9+',
  },
  nezhaVersion: {
    label: '哪吒版本',
    placeholder: '请选择哪吒版本',
    remark: '哪吒探针的版本，目前仅支持v0和v1，0.4.13前默认为v0，0.4.13后默认为自动处理',
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
  v1ApiGroupPath: {
    label: 'v1服务器组API地址',
    placeholder: '请输入v1服务器组API路径',
    remark: 'v1版本的服务器组API',
    type: 'input',
  },
  v1ApiSettingPath: {
    label: 'v1设置API地址',
    placeholder: '请输入v1设置API路径',
    remark: 'v1版本的设置API',
    type: 'input',
  },
  v1ApiProfilePath: {
    label: 'v1用户信息地址',
    placeholder: '请输入v1用户信息API路径',
    remark: 'v1版本的用户信息API',
    type: 'input',
  },
  v1DashboardUrl: {
    label: 'v1控制台地址',
    placeholder: '请输入v1控制台地址',
    remark: 'v1版本的控制台地址，默认为 /dashboard',
    type: 'input',
    v1customCode: true,
  },
  v1HideNezhaDashboardBtn: {
    label: '隐藏控制台按钮',
    type: 'switch',
    remark: '隐藏导航栏的控制台入口/登录按钮',
    v1customCode: true,
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
