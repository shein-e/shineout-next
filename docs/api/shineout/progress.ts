const api = JSON.parse('[{"title":"Progress","properties":[{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"最外层扩展样式","en":"Container element style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"popup","tag":{"cn":"是否通过弹出框展示children","en":"popup to show children","default":"","version":""},"required":false,"type":"boolean "},{"name":"background","tag":{"cn":"背景色","en":"Background color","default":"\\\"#e9ecef\\\"","version":""},"required":false,"type":"string "},{"name":"children","tag":{"cn":"附加内容","en":"Content","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"color","tag":{"cn":"前景色, 可以设置为对象变成渐变.","en":"The foreground color can be set to the object to become a gradient","default":"primary","version":""},"required":false,"type":"string | {  form?: string , to?: string  } "},{"name":"shape","tag":{"cn":"样式","en":"Options","default":"\\\"line\\\"","version":""},"required":false,"type":"\\\"line\\\" | \\\"circle\\\" | \\\"line-pop\\\" | \\\"line-inner\\\" "},{"name":"size","tag":{"cn":"进度条大小，仅对 circle 有效","en":"The width and height of \\\"circle\\\" shape","default":"100","version":""},"required":false,"type":"number "},{"name":"strokeWidth","tag":{"cn":"线框宽度","en":"The width of the stroke","default":"8","version":""},"required":false,"type":"number "},{"name":"type","tag":{"cn":"内置配色","en":"Built-in color","default":"","version":""},"required":false,"type":"\\\"success\\\" | \\\"info\\\" | \\\"warning\\\" | \\\"danger\\\" "},{"name":"value","tag":{"cn":"百分比值，0 <= value <= 100","en":"Percentage, 0 <= value <= 100","default":"0","version":""},"required":false,"type":"number "},{"name":"strokeLinecap","tag":{"cn":"进度条两端的描边形状","en":"The shape to be used at the end of open subpaths when they are stroked","default":"","version":""},"required":false,"type":"\\\"butt\\\" | \\\"round\\\" | \\\"square\\\" | \\\"inherit\\\" "},{"name":"icon","tag":{"cn":"是否显示图标","en":"Whether to show the icon","default":"false","version":""},"required":false,"type":"boolean "},{"name":"iconSize","tag":{"cn":"图标大小","en":"Icon size","default":"","version":""},"required":false,"type":"number "}],"cn":"","en":"","sort":"0"}]');
export default api;
