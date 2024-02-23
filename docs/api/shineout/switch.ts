const api = JSON.parse('[{"title":"Switch","properties":[{"name":"checked","tag":{"cn":"当前选中状态，checked 传入时为受控组件","en":"Checked status，will in control when pass","default":"","version":""},"required":false,"type":"boolean "},{"name":"onChange","tag":{"cn":"改变回调,Checked 表示选中状态","en":"Change callback, Checked means selected status","default":"","version":""},"required":false,"type":"((value: boolean) => void) "},{"name":"onClick","tag":{"cn":"勾选框点击回调","en":"Click callback","default":"","version":""},"required":false,"type":"((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) "},{"name":"disabled","tag":{"cn":"是否禁用","en":"Disable checkbox","default":"false","version":""},"required":false,"type":"boolean "},{"name":"inputRef","tag":{"cn":"获取input dom","en":"Get input dom","default":"","version":""},"required":false,"type":"Ref<HTMLInputElement> "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"size","tag":{"cn":"不同尺寸","en":"There are three built-in size: small、default、large.","default":"\\\"default\\\"","version":""},"required":false,"type":"\\\"small\\\" | \\\"large\\\" | \\\"default\\\""},{"name":"content","tag":{"cn":"选中和未选中时的内容","en":"Content with checked and unchecked","default":"","version":""},"required":false,"type":"[ReactNode, ReactNode] "},{"name":"loading","tag":{"cn":"加载中","en":"Loading","default":"false","version":""},"required":false,"type":"boolean "},{"name":"value","tag":{"cn":"Checked 未设置的情况下， checked = value","en":"Set while no checked","default":"","version":""},"required":false,"type":"boolean "},{"name":"defaultValue","tag":{"cn":"默认值 和 value 类型相同","en":"Default value,same type as value","default":"","version":""},"required":false,"type":"boolean "},{"name":"name","tag":{"cn":"Form 内存取数据的 key","en":"The key access data in the Form","default":"","version":""},"required":false,"type":"Name "},{"name":"beforeChange","tag":{"cn":"值改变前的回调，当返回值不为空时将作为组件的新值","en":"The callback before the value is changed, when the return value is not empty, it will be used as the new value of the component","default":"","version":""},"required":false,"type":"((value: T) => void | T ) "},{"name":"reserveAble","tag":{"cn":"设置为 true 组件卸载后表单不自动删除数据","en":"If set to true, the form will not automatically delete the data after the component is uninstalled","default":"","version":""},"required":false,"type":"boolean "},{"name":"rules","tag":{"cn":"校验规则 详见 [Rule](/components/rule)","en":"Validation rules, see [Rule](/components/rule) usage for details","default":"","version":""},"required":false,"type":"RuleItem[]"},{"name":"onError","tag":{"cn":"rules 校验回调","en":"rules validation callback","default":"","version":""},"required":false,"type":"((error?: Error ) => void) "},{"name":"bind","tag":{"cn":"当值改变是会联动校验 bind 中的字段, 需要配合 Form 使用","en":"When the value changes, it will link to verify the fields in the bind, which needs to be used with Form","default":"","version":""},"required":false,"type":"string[] "},{"name":"popover","tag":{"cn":"校验信息弹出位置","en":"The position where the validation info pop up","default":"","version":""},"required":false,"type":"PopoverProps[\\\"position\\\"]"},{"name":"tip","tag":{"cn":"提示信息","en":"Prompt information","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"popoverProps","tag":{"cn":"校验或者tip弹框接受的属性","en":"Vilidate popup properties","default":"","version":""},"required":false,"type":"PopoverProps "}],"cn":"","en":"","sort":"0"}]');
export default api;