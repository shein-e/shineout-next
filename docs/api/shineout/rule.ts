const api = JSON.parse('[{"title":"required","subTitle":"function(message)","properties":[{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"","sort":"0"},{"title":"min","subTitle":"function(min, message)","properties":[{"name":"min","tag":{"cn":"最小值","en":"min","default":"","version":""},"required":true,"type":"number"},{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"","sort":"0"},{"title":"max","subTitle":"function(max, message)","properties":[{"name":"max","tag":{"cn":"最大值","en":"max","default":"","version":""},"required":true,"type":"number"},{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"","sort":"0"},{"title":"range","subTitle":"function(min, max, message)","properties":[{"name":"min","tag":{"cn":"最小值","en":"min","default":"","version":""},"required":true,"type":"number"},{"name":"max","tag":{"cn":"最大值","en":"max","default":"","version":""},"required":true,"type":"number"},{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"","sort":"0"},{"title":"regExp","subTitle":"function(reg, message)","properties":[{"name":"reg","tag":{"cn":"正则表达式","en":"reg","default":"","version":""},"required":true,"type":"string | RegExp"},{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"","en":"function(reg: RegExp, message?: string)","sort":"0"},{"title":"type","subTitle":"function(message)","properties":[{"name":"message","tag":{"cn":"报错提示","en":"message","default":"","version":""},"required":false,"type":"string "}],"cn":"type 可选值为 [\\\"email\\\", \\\"integer\\\", \\\"number\\\", \\\"url\\\", \\\"json\\\", \\\"hex\\\", \\\"rgb\\\", \\\"ipv4\\\"]","en":"type can be [\\\"email\\\", \\\"integer\\\", \\\"number\\\", \\\"url\\\", \\\"json\\\", \\\"hex\\\", \\\"rgb\\\", \\\"ipv4\\\"]","sort":"0"},{"title":"custom","subTitle":"function(value, formValue, callback)","properties":[{"name":"value","tag":{"cn":"值","en":"value","default":"","version":""},"required":false,"type":"any"},{"name":"formValue","tag":{"cn":"form 值","en":"form value","default":"","version":""},"required":false,"type":"object "},{"name":"callback","tag":{"cn":"回调","en":"callback","default":"","version":""},"required":false,"type":"((result: true | Error) => void) "}],"cn":"","en":"","sort":"0"}]');
export default api;