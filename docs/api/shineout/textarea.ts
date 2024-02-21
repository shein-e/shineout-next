const api = JSON.parse('[{"title":"Textarea","properties":[{"name":"value","tag":{"cn":"defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖","en":"DefaultValue and value can be set at the same time and defaultValue will be overridden by value.","default":"","version":""},"required":false,"type":"string "},{"name":"onChange","tag":{"cn":"值改变回调函数","en":"The callback function for changing value","default":"","version":""},"required":false,"type":"((value: string) => void) "},{"name":"defaultValue","tag":{"cn":"默认值  和 value 类型相同","en":"DefaultValue","default":"","version":""},"required":false,"type":"string "},{"name":"onBlur","tag":{"cn":"失去焦点后的回调","en":"The callback when Textarea blur","default":"","version":""},"required":false,"type":"FocusEventHandler<Element> "},{"name":"onFocus","tag":{"cn":"focus 事件回调函数","en":"Callback function for blur focus","default":"","version":""},"required":false,"type":"FocusEventHandler<Element> "},{"name":"onClick","tag":{"cn":"click 事件回调函数","en":"Callback function for click","default":"","version":""},"required":false,"type":"MouseEventHandler<Element> "},{"name":"disabled","tag":{"cn":"是否禁用","en":"Disabled","default":"false","version":""},"required":false,"type":"boolean "},{"name":"textareaRef","tag":{"cn":"获取textarea dom","en":"Get textarea dom","default":"","version":""},"required":false,"type":"Ref<HTMLTextAreaElement> "},{"name":"size","tag":{"cn":"不同尺寸","en":"There are three built-in size: small、default、large.","default":"\\\"default\\\"","version":""},"required":false,"type":"\\\"small\\\" | \\\"large\\\" | \\\"default\\\""},{"name":"prefix","tag":{"cn":"前缀","en":"The prefix of the textarea","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"status","tag":{"cn":"组件状态","en":"The status of the component","default":"","version":""},"required":false,"type":"\\\"error\\\" "},{"name":"suffix","tag":{"cn":"后缀","en":"The suffix of the textarea","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"underline","tag":{"cn":"是否只展示下边框","en":"Whether to display only the bottom border","default":"false","version":""},"required":false,"type":"boolean "},{"name":"border","tag":{"cn":"是否展示边框","en":"Whether to display border","default":"true","version":""},"required":false,"type":"boolean "},{"name":"resize","tag":{"cn":"是否可以伸缩高度","en":"Support resize","default":"false","version":""},"required":false,"type":"boolean "},{"name":"onEnterPress","tag":{"cn":"回车键的回调函数","en":"The callback function for enter key","default":"","version":""},"required":false,"type":"((value: string, e: KeyboardEvent<Element>) => void) "},{"name":"autosize","tag":{"cn":"高度是否随内容自动变化","en":"Whether the height changes automatically with the content","default":"false","version":""},"required":false,"type":"boolean "},{"name":"info","tag":{"cn":"提示信息","en":"Information","default":"","version":""},"required":false,"type":"number | ((value: string ) => ReactNode | Error) "},{"name":"maxHeight","tag":{"cn":"输入框的最大高度, 超过之后会出现滚动条","en":"the maxHeight of the textarea, scroll bars appear after more than","default":"","version":""},"required":false,"type":"string | number "},{"name":"trim","tag":{"cn":"Trim 为 true 时，失去焦点时会自动删除空白字符","en":"When trim is true, blank characters are automatically deleted when lose focus","default":"false","version":""},"required":false,"type":"boolean "},{"name":"renderFooter","tag":{"cn":"渲染 textarea footer","en":"Render textarea footer","default":"","version":""},"required":false,"type":"((value?: string ) => ReactNode) "},{"name":"width","tag":{"cn":"输入框宽度","en":"Input width","default":"","version":""},"required":false,"type":"string | number "},{"name":"delay","tag":{"cn":"用户输入触发 onChange 和校验间隔时间，单位 毫秒","en":"User input triggers the onChange and to check interval, unit: ms","default":"","version":""},"required":false,"type":"number "},{"name":"popover","tag":{"cn":"校验信息弹出位置","en":"The position where the validation info pop up","default":"","version":""},"required":false,"type":"PopoverProps[\\\"position\\\"]"},{"name":"popoverProps","tag":{"cn":"校验或者tip弹框接受的属性","en":"Vilidate popup properties","default":"","version":""},"required":false,"type":"PopoverProps "},{"name":"tip","tag":{"cn":"提示信息","en":"Prompt information","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"error","tag":{"cn":"错误信息","en":"error message","default":"","version":""},"required":false,"type":"string | { message?: string ; } "},{"name":"beforeChange","tag":{"cn":"值改变前的回调，当返回值不为空时将作为组件的新值","en":"The callback before the value is changed, when the return value is not empty, it will be used as the new value of the component","default":"","version":""},"required":false,"type":"((value: T) => void | T ) "},{"name":"onError","tag":{"cn":"rules 校验回调","en":"rules validation callback","default":"","version":""},"required":false,"type":"((error?: Error ) => void) "},{"name":"reserveAble","tag":{"cn":"设置为 true 组件卸载后表单不自动删除数据","en":"If set to true, the form will not automatically delete the data after the component is uninstalled","default":"","version":""},"required":false,"type":"boolean "},{"name":"rules","tag":{"cn":"校验规则 详见 [Rule](/components/rule)","en":"Validation rules, see [Rule](/components/rule) usage for details","default":"","version":""},"required":false,"type":"RuleItem[]"},{"name":"bind","tag":{"cn":"当值改变是会联动校验 bind 中的字段, 需要配合 Form 使用","en":"When the value changes, it will link to verify the fields in the bind, which needs to be used with Form","default":"","version":""},"required":false,"type":"string[] "}],"cn":"","en":"","sort":"0"}]');
export default api;
