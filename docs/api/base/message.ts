const api = JSON.parse('[{"title":"MessageOptions","properties":[{"name":"className","tag":{"cn":"类名","en":"extend className","default":"","version":""},"required":false,"type":"string "},{"name":"onClose","tag":{"cn":"关闭后回调事件","en":"The callback function when the message is closed.","default":"","version":""},"required":false,"type":"(() => void) "},{"name":"position","tag":{"cn":"消息显示的位置","en":"The position where the message display","default":"\\\"top\\\"","version":""},"required":false,"type":"\\\"top\\\" | \\\"middle\\\" | \\\"top-left\\\" | \\\"top-right\\\" | \\\"bottom-left\\\" | \\\"bottom-right\\\" "},{"name":"title","tag":{"cn":"标题文字","en":"title","default":"","version":""},"required":false,"type":"string "},{"name":"hideClose","tag":{"cn":"是否隐藏关闭按钮","en":"show close button","default":"false","version":""},"required":false,"type":"boolean "},{"name":"top","tag":{"cn":"距离顶部的距离。注意，Message 容器距离顶部默认为 20px，如果需要距离顶部 0px，需要设置为 -20px","en":"Distance from the top. Note that the Message container is 20px from the top by default. If you need the distance to be 0px from the top, you need to set it to -20px.","default":"\\\"auto\\\"","version":""},"required":false,"type":"string "},{"name":"container","tag":{"cn":"渲染的目标节点","en":"target element","default":"document.body","version":""},"required":false,"type":"(() => HTMLElement) | HTMLElement "}],"cn":"","en":""}]');
export default api;
