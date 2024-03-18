const api = JSON.parse('[{"title":"Menu","properties":[{"name":"jssStyle","tag":{"cn":"","en":"","default":"","version":""},"required":false,"type":"{  menu?: () => MenuClasses;} "},{"name":"mode","tag":{"cn":"菜单样式","en":"style of menu","default":"\\\"inline\\\"","version":""},"required":false,"type":"\\\"inline\\\" | \\\"vertical\\\" | \\\"horizontal\\\" | \\\"vertical-auto\\\" "},{"name":"data","tag":{"cn":"需要渲染成菜单的数据","en":"Menu items data","default":"[]","version":""},"required":false,"type":"object[]"},{"name":"theme","tag":{"cn":"主题","en":"theme of menu","default":"","version":""},"required":false,"type":"\\\"dark\\\" "},{"name":"height","tag":{"cn":"菜单高度","en":"menu height","default":"","version":""},"required":false,"type":"string | number "},{"name":"openKeys","tag":{"cn":"展开的菜单(受控)","en":"expended menu","default":"[]","version":""},"required":false,"type":"(string | number)[]"},{"name":"caretColor","tag":{"cn":"三角展开符颜色","en":"triangle expansion color","default":"","version":""},"required":false,"type":"string "},{"name":"frontCaret","tag":{"cn":"前置实心三角展开符","en":"Front solid triangle expansion","default":"","version":""},"required":false,"type":"boolean "},{"name":"inlineIndent","tag":{"cn":"每一层缩进宽度","en":"indent of each level","default":"24","version":""},"required":false,"type":"number "},{"name":"looseChildren","tag":{"cn":"如果 children 有设置则菜单项可展开","en":"menu item expandable if has children","default":"false","version":""},"required":false,"type":"boolean "},{"name":"keygen","tag":{"cn":"生成每一项key的辅助方法。为 true 时，以数据项本身作为key，相当于 (d => d)。为函数时，使用此函数返回值。为string时，使用这个string对应的数据值。如 \\\"id\\\"，相当于 (d => d.id)","en":"Key generator. When it is true, the data itself is used as the key equivalent to (d => d). When it is a function, use its return value. When it is a string，ues the value of the string. For example, \\\"id\\\" is the same thing as (d) => d.id.","default":"true","version":""},"required":true,"type":"| ObjectKey<DataItem>  | ((data: DataItem, index?: number) => string | number)  | true"},{"name":"defaultOpenKeys","tag":{"cn":"初始展开的菜单;如果需要设置此值,则需要设置keygen,此值为一个包含key的数组","en":"Initial expanded menu","default":"[]","version":""},"required":false,"type":"(string | number)[]"},{"name":"parentSelectable","tag":{"cn":"父级菜单是否可选中","en":"parent menu Selectable","default":"false","version":""},"required":false,"type":"boolean "},{"name":"onClick","tag":{"cn":"子菜单点击事件,参数为当条数据","en":"The function will be called when the user clicks the menu item.","default":"","version":""},"required":false,"type":"((data: DataItem) => void) "},{"name":"active","tag":{"cn":"验证是否激活,参数为对应的数据对象,返回true则代表该菜单激活","en":"The item is actived when the active function return true.","default":"","version":""},"required":false,"type":"((data: DataItem) => boolean) "},{"name":"disabled","tag":{"cn":"是否禁用选项","en":"Whether to be disabled","default":"d => d.disabled","version":""},"required":false,"type":"((data: DataItem) => boolean) "},{"name":"frontCaretType","tag":{"cn":"前置三角展开符类型","en":"front triangle expansion symbol type","default":"\\\"solid\\\"","version":""},"required":false,"type":"\\\"hollow\\\" | \\\"solid\\\" "},{"name":"onOpenChange","tag":{"cn":"菜单展开/收起回调","en":"menu open change callback","default":"","version":""},"required":false,"type":"((keys: Key[]) => void) "},{"name":"linkKey","tag":{"cn":"需要注入子菜单的链接键值","en":"the key of inject the link value of the submenu","default":"","version":""},"required":false,"type":"((d: DataItem) => string) | ObjectKey<DataItem> "},{"name":"renderItem","tag":{"cn":"元素渲染方式,如果为字符串,则会以对应的值作为显示内容;如果为函数,则以函数返回的结果作为显示内容,函数参数为对应的数据对象","en":"Element render mode. If it is a string, the corresponding value is taken as the display content; If it is a function, the result returned by the function is taken as the display content.","default":"\\\"title\\\"","version":""},"required":false,"type":"ObjectKey<DataItem> | ((data: DataItem, index: number) => ReactNode) "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "}],"cn":"","en":"","sort":"0"}]');
export default api;
