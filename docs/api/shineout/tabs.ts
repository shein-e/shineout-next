const api = JSON.parse('[{"title":"Tabs","properties":[{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"lazy","tag":{"cn":"是否开启懒加载","en":"Whether to enable lazy loading","default":"true","version":""},"required":false,"type":"boolean "},{"name":"shape","tag":{"cn":"Shape 不为空时，activeBackground 等颜色参数将会无效，当shape为bordered时，指向card","en":"When Shape is not empty, color parameters such as activeBackground will be invalid. When shape is bordered, it points to card","default":"\\\"card\\\"","version":""},"required":false,"type":"\\\"button\\\" | \\\"line\\\" | \\\"bordered\\\" | \\\"card\\\" | \\\"dash\\\" | \\\"fill\\\" "},{"name":"children","tag":{"cn":"子元素,必须为 Panel 元素","en":"Child element, must be a Panel element","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"extra","tag":{"cn":"额外内容","en":"Extra content","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"splitColor","tag":{"cn":"分割线颜色,替代原有border属性","en":"Split line color, replace the original border property","default":"","version":""},"required":false,"type":"string "},{"name":"hideSplit","tag":{"cn":"是否隐藏分割线","en":"Whether to hide the split line","default":"","version":""},"required":false,"type":"boolean "},{"name":"collapsible","tag":{"cn":"是否可折叠","en":"Whether can be collapsed","default":"","version":""},"required":false,"type":"boolean "},{"name":"defaultCollapsed","tag":{"cn":"默认折叠状态,当 collapsible 设置为 true 时生效","en":"Default collapse state, effective when collapsible is set to true","default":"","version":""},"required":false,"type":"boolean "},{"name":"autoFill","tag":{"cn":"自动填充内容区域","en":"Auto fill the panel","default":"","version":""},"required":false,"type":"boolean "},{"name":"switchToTop","tag":{"cn":"切换 tab 将自动滚动到 Tabs","en":"Switch tabs will scroll to Tabs","default":"","version":""},"required":false,"type":"boolean "},{"name":"sticky","tag":{"cn":"开启头部附着","en":"Sticky header","default":"","version":""},"required":false,"type":"number | boolean | StickyProps "},{"name":"position","tag":{"cn":"选项卡位置","en":"The position of the tab","default":"","version":""},"required":false,"type":"| \\\"top-left\\\"  | \\\"top-right\\\"  | \\\"bottom-left\\\"  | \\\"bottom-right\\\"  | \\\"left-top\\\"  | \\\"left-bottom\\\"  | \\\"right-top\\\"  | \\\"right-bottom\\\" "},{"name":"activeBackground","tag":{"cn":"选中标签背景色","en":"Active background color","default":"","version":""},"required":false,"type":"string "},{"name":"inactiveBackground","tag":{"cn":"未选中标签背景色","en":"Inactive background color","default":"","version":""},"required":false,"type":"string "},{"name":"tabBarStyle","tag":{"cn":"tab bar 的样式对象","en":"Style in tab bar","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"onChange","tag":{"cn":"标签选中时触发回调事件","en":"Change callback","default":"","version":""},"required":false,"type":"((key: string | number) => void) "},{"name":"color","tag":{"cn":"标签页文字颜色，仅当 shape 为 \\\"card\\\" 时生效","en":"The color of tab\\\"s text only when the shape is \\\"card\\\"","default":"","version":""},"required":false,"type":"string "},{"name":"active","tag":{"cn":"当前选中标签页（受控）","en":"Current active tab id or index","default":"","version":""},"required":false,"type":"string | number "},{"name":"defaultActive","tag":{"cn":"默认选中标签页（非受控）","en":"Default active tab id or index","default":"0","version":""},"required":false,"type":"string | number "}],"cn":"","en":"","sort":"1"},{"title":"Tabs.Panel","properties":[{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"id","tag":{"cn":"选填，默认为 index","en":"The default is index","default":"","version":""},"required":false,"type":"string | number "},{"name":"tab","tag":{"cn":"标签标题内容","en":"Tab content","default":"index","version":""},"required":true,"type":"ReactNode"},{"name":"disabled","tag":{"cn":"是否禁用","en":"Specifies the Panel should be disabled","default":"false","version":""},"required":false,"type":"boolean "},{"name":"children","tag":{"cn":"Panel 内容","en":"Panel content","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"splitColor","tag":{"cn":"分割线颜色,仅在shape=line的时候生效","en":"The color of the dividing line, only takes effect when shape=line","default":"","version":""},"required":false,"type":"string "},{"name":"color","tag":{"cn":"标签页文字颜色，仅当 shape 为 \\\"card\\\" 时生效","en":"The color of tab\\\"s text only when the shape is \\\"card\\\"","default":"","version":""},"required":false,"type":"string "},{"name":"activeBackground","tag":{"cn":"背景色，会覆盖 Tabs 的activeBackground","en":"Background color, will override Tabs\\\"s activeBackground","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"","sort":"2"}]');
export default api;
