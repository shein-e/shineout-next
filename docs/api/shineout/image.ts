const api = JSON.parse('[{"title":"Image.Group","properties":[{"name":"showCount","tag":{"cn":"显示图片数量","en":"The number of images to be displayed","default":"","version":""},"required":false,"type":"boolean "},{"name":"target","tag":{"cn":"图片打开方式","en":"Target of image","default":"\\\"_modal\\\"","version":""},"required":false,"type":"\\\"_self\\\" | \\\"_blank\\\" | \\\"_modal\\\" | \\\"_download\\\" "},{"name":"shape","tag":{"cn":"图片形状","en":"Image shape","default":"\\\"rounded\\\"","version":""},"required":false,"type":"\\\"rounded\\\" | \\\"circle\\\" | \\\"thumbnail\\\" "},{"name":"lazy","tag":{"cn":"是否延迟加载","en":"Whether to delay loading","default":"false","version":""},"required":false,"type":"boolean "},{"name":"pile","tag":{"cn":"是否堆叠","en":"Whether to stack","default":"false","version":""},"required":false,"type":"boolean "},{"name":"fit","tag":{"cn":"图片填充方式","en":"Image fill type","default":"","version":""},"required":false,"type":"\\\"fill\\\" | \\\"center\\\" | \\\"fit\\\" | \\\"stretch\\\" "},{"name":"width","tag":{"cn":"图片宽度","en":"The width of the image","default":"\\\"100%\\\"","version":""},"required":false,"type":"string | number "},{"name":"height","tag":{"cn":"图片高度","en":"The height of the image","default":"\\\"100%\\\"","version":""},"required":false,"type":"string | number "},{"name":"children","tag":{"cn":"子元素","en":"Children","default":"","version":""},"required":true,"type":"ReactNode"}],"cn":"","en":""},{"title":"Image","properties":[{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"onClick","tag":{"cn":"点击图片的回调","en":"The callback of click","default":"","version":""},"required":false,"type":"MouseEventHandler<Element> "},{"name":"onError","tag":{"cn":"src或alt 地址请求出错回调","en":"Callback of image src or alt request fail","default":"","version":""},"required":false,"type":"((e: Event, type: number) => void) "},{"name":"placeholder","tag":{"cn":"图加载时的占位内容","en":"Loading image placeholder content","default":"\\\"loading","version":""},"required":false,"type":"ReactNode"},{"name":"title","tag":{"cn":"原生 title 属性","en":"The original property of html","default":"","version":""},"required":false,"type":"string "},{"name":"fit","tag":{"cn":"图片填充方式","en":"Image fill type","default":"-","version":""},"required":false,"type":"\\\"fill\\\" | \\\"center\\\" | \\\"fit\\\" | \\\"stretch\\\" "},{"name":"container","tag":{"cn":"懒加载容器","en":"Lazy load container","default":"-","version":""},"required":false,"type":"string | HTMLElement "},{"name":"error","tag":{"cn":"自定义错误内容","en":"Custom error content","default":"-","version":""},"required":false,"type":"ReactNode"},{"name":"href","tag":{"cn":"原始图片地址","en":"Original picture address","default":"","version":""},"required":false,"type":"string "},{"name":"lazy","tag":{"cn":"是否延迟加载，如果为数字则表示懒加载偏移量","en":"Whether to delay loading, number to set lazy offset","default":"false","version":""},"required":false,"type":"number | boolean "},{"name":"noImgDrag","tag":{"cn":"是否禁止 img 元素原生 draggable 属性","en":"The original property of html","default":"false","version":""},"required":false,"type":"boolean "},{"name":"shape","tag":{"cn":"图片形状","en":"Image shape","default":"\\\"rounded\\\"","version":""},"required":false,"type":"\\\"rounded\\\" | \\\"circle\\\" | \\\"thumbnail\\\" "},{"name":"target","tag":{"cn":"图片打开方式","en":"Target of image","default":"\\\"_modal\\\"","version":""},"required":false,"type":"\\\"_self\\\" | \\\"_blank\\\" | \\\"_modal\\\" | \\\"_download\\\" "},{"name":"width","tag":{"cn":"图片宽度","en":"The width of the image","default":"\\\"100%\\\"","version":""},"required":false,"type":"string | number "},{"name":"height","tag":{"cn":"图片高度","en":"The height of the image","default":"\\\"100%\\\"","version":""},"required":false,"type":"string | number "},{"name":"src","tag":{"cn":"图片地址","en":"The picture address","default":"","version":""},"required":false,"type":"string "},{"name":"alt","tag":{"cn":"备用地址，src无效时会应用","en":"Alternate address, applied when src is invalid","default":"","version":""},"required":false,"type":"string "},{"name":"autoSSL","tag":{"cn":"是否根据页面自动转换协议","en":"Auto transform protocol","default":"false","version":""},"required":false,"type":"boolean "}],"cn":"","en":""}]');
export default api;
