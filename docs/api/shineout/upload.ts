const api = JSON.parse('[{"title":"Upload","properties":[{"name":"onChange","tag":{"cn":"值改变回调(上传成功，删除)。values: 数组, 其每个值是 onSuccess 的返回值","en":"The callback function when the value is changing(Upload successfully, delete). values: Array, the value is the onSuccess returns","default":"","version":""},"required":false,"type":"((value: T[]) => void) "},{"name":"value","tag":{"cn":"defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖 在 Form 中，value会被表单接管，value 无效","en":"value","default":"","version":""},"required":false,"type":"any[]"},{"name":"accept","tag":{"cn":"上传文件类型, 和标准一致, 详见[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)","en":"The type of the upload file, same as the standard,See details [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)","default":"","version":""},"required":false,"type":"string "},{"name":"action","tag":{"cn":"上传地址","en":"The address for uploading","default":"","version":""},"required":false,"type":"string | ((file: File) => string) "},{"name":"beforeUpload","tag":{"cn":"上传前的回调","en":"The callback of before upload","default":"","version":""},"required":false,"type":"((file: File) => Promise<any>) "},{"name":"validatorHandle","tag":{"cn":"是否处理校验失败的情况, 如果提供一个函数, 则以函数的返回值判断是否处理此 error","en":"Whether to handle the case of validation failure, if a function is provided, it is judged by the return value of the function.","default":"true","version":""},"required":false,"type":"boolean | ((error: any, file: File) => boolean) "},{"name":"headers","tag":{"cn":"请求头部信息","en":"Request headers","default":"","version":""},"required":false,"type":"object"},{"name":"htmlName","tag":{"cn":"服务端接收的 filename，不填使用 name","en":"The filename received by the server. If it is not filled in, use the name.","default":"","version":""},"required":false,"type":"string "},{"name":"limit","tag":{"cn":"最大上传文件数","en":"Maximum number of uploaded files","default":"100","version":""},"required":false,"type":"number "},{"name":"responseType","tag":{"cn":"设置 xhr.responseType","en":"set xhr.responseType","default":"","version":""},"required":false,"type":"XMLHttpRequestResponseType "},{"name":"request","tag":{"cn":"自定义上传方法。 options: 上传的配置","en":"Custom upload method. options: the options of upload","default":"","version":""},"required":false,"type":"(options: UploadOptions) => Xhr | void"},{"name":"params","tag":{"cn":"上传参数","en":"params","default":"","version":""},"required":false,"type":"object"},{"name":"withCredentials","tag":{"cn":"是否携带 cookie","en":"Whether to take the cookie","default":"false","version":""},"required":false,"type":"boolean "},{"name":"onStart","tag":{"cn":"开始上传的回调函数","en":"callback when start","default":"","version":""},"required":false,"type":"((file: File) => void) "},{"name":"onProgress","tag":{"cn":"上传中进度","en":"onProgress","default":"","version":""},"required":false,"type":"false | ((fileInfo: FileRecord) => any) "},{"name":"onSuccess","tag":{"cn":"上传成功事件\\nres: 上传接口返回结果\\nfile: 选择的文件\\ndata: 请求的数据\\nxhr: 返回的 response","en":"onSuccess","default":"","version":""},"required":false,"type":"((res: any, file: File, data?: any, xhr?: XhrResult ) => ValueItem | Error) "},{"name":"onHttpError","tag":{"cn":"上传出错事件(props 中为 onHttpError)","en":"onHttpError callback","default":"","version":""},"required":false,"type":"((xhr: XhrResult, file: File) => string ) "},{"name":"filesFilter","tag":{"cn":"文件选中后的筛选，用户可自定义最终需要上传的文件列表。需返回一个新的文件列表","en":"Filter after file selection, users can customize the list of files that need to be uploaded eventually. Need to return a new file list","default":"","version":""},"required":false,"type":"((fileList: File[]) => File[]) "},{"name":"validator","tag":{"cn":"上传前文件校验，详见下方 Validator","en":"Check file before uploading","default":"","version":""},"required":false,"type":"Validator"},{"name":"forceAccept","tag":{"cn":"在使用时关闭了 accept 提供的文件类型过滤后，强制对文件类型进行校验（值同accept)","en":"After disabled the file type filtering provided by accept, it is mandatory to check the file type, value same as accept","default":"","version":""},"required":false,"type":"string "},{"name":"onErrorRemove","tag":{"cn":"上传失败图片删除之后的回调","en":"remove update failed callback","default":"","version":""},"required":false,"type":"((xhr: XhrResult, file: File, fileInfo?: any) => void) "},{"name":"beforeCancel","tag":{"cn":"取消文件上传前的回调","en":"The callback function before cancel upload file.","default":"","version":""},"required":false,"type":"((file: FileRecord) => void) "},{"name":"recoverAble","tag":{"cn":"是否可以恢复已删除的value","en":"Whether to recover deleted values.","default":"false","version":""},"required":false,"type":"boolean "},{"name":"disabled","tag":{"cn":"是否禁用","en":"is disabled","default":"false","version":""},"required":false,"type":"boolean "},{"name":"beforeRemove","tag":{"cn":"删除前的确认，返回一个Promise用于最终确定是否删除","en":"callback before remove","default":"","version":""},"required":false,"type":"((value: ValueItem) => Promise<any>) "},{"name":"ignorePreview","tag":{"cn":"是否忽略上传图片预览","en":"ignore image preview","default":"","version":""},"required":false,"type":"boolean "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"showUploadList","tag":{"cn":"是否展示上传列表","en":"show upload list","default":"true","version":""},"required":false,"type":"boolean "},{"name":"drop","tag":{"cn":"是否开启拖拽上传文件","en":"drop to update","default":"false","version":""},"required":false,"type":"boolean "},{"name":"multiple","tag":{"cn":"文件多选","en":"multiple file","default":"false","version":""},"required":false,"type":"boolean "},{"name":"children","tag":{"cn":"上传占位内容","en":"Upload placeholder","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"webkitdirectory","tag":{"cn":"同原生 input 标签的 webkitdirectory 属性","en":"The same as the native webkitdirectory tag","default":"","version":""},"required":false,"type":"string | boolean "},{"name":"defaultValue","tag":{"cn":"默认值","en":"default value","default":"","version":""},"required":false,"type":"T[] "},{"name":"renderResult","tag":{"cn":"结果展示","en":"Display results","default":"a => a","version":""},"required":false,"type":"((data: any) => ReactNode) "},{"name":"canDelete","tag":{"cn":"文件是否可以删除","en":"Can the file be deleted","default":"true","version":""},"required":false,"type":"boolean | ((item: T, index: number) => boolean) "},{"name":"customResult","tag":{"cn":"自定义Result 组件","en":"custom Result component","default":"","version":""},"required":false,"type":"ComponentType<{ value: any; files: any; onValueRemove: (index: number) => void; onFileRemove: (id: string) => void; }> "},{"name":"forceAcceptErrorMsg","tag":{"cn":"forceAccept 类型校验失败后自定义错误提示","en":"Custom error prompt after forceAccept type verification fails","default":"","version":""},"required":false,"type":"string "},{"name":"removeConfirm","tag":{"cn":"是否在删除文件和图片前弹出确认","en":"Confirmation before deletion","default":"","version":""},"required":false,"type":"string | PopoverConfirmProps "},{"name":"listType","tag":{"cn":"展示类型","en":"The type of display","default":"\\\"text\\\"","version":""},"required":false,"type":"\\\"text\\\" | \\\"image\\\" "},{"name":"leftHandler","tag":{"cn":"添加图片视图是否在左侧展示","en":"Add image view is displayed on the left","default":"false","version":""},"required":false,"type":"boolean "},{"name":"imageStyle","tag":{"cn":"图片选择框的样式","en":"The style of the image","default":"{width: 80, height: 80}","version":""},"required":false,"type":"CSSProperties "},{"name":"renderContent","tag":{"cn":"自定义渲染上传的图片","en":"Custom rendering of uploaded images","default":"","version":""},"required":false,"type":"((res: any, item: T, index: number, values: T[]) => ReactNode) "},{"name":"onPreview","tag":{"cn":"自定义预览图片操作，默认为画廊展示","en":"how to preview the image","default":"","version":""},"required":false,"type":"((url: string, value: T, index: number, values: T[], fun: { preview: () => void; }) => void) "},{"name":"name","tag":{"cn":"Form 内存取数据的 key","en":"The key access data in the Form","default":"","version":""},"required":false,"type":"Name "},{"name":"beforeChange","tag":{"cn":"值改变前的回调，当返回值不为空时将作为组件的新值","en":"The callback before the value is changed, when the return value is not empty, it will be used as the new value of the component","default":"","version":""},"required":false,"type":"((value: T) => void | T ) "},{"name":"reserveAble","tag":{"cn":"设置为 true 组件卸载后表单不自动删除数据","en":"If set to true, the form will not automatically delete the data after the component is uninstalled","default":"","version":""},"required":false,"type":"boolean "},{"name":"rules","tag":{"cn":"校验规则 详见 [Rule](/components/rule)","en":"Validation rules, see [Rule](/components/rule) usage for details","default":"","version":""},"required":false,"type":"RuleItem[]"},{"name":"onError","tag":{"cn":"rules 校验回调","en":"rules validation callback","default":"","version":""},"required":false,"type":"((error?: Error ) => void) "},{"name":"bind","tag":{"cn":"当值改变是会联动校验 bind 中的字段, 需要配合 Form 使用","en":"When the value changes, it will link to verify the fields in the bind, which needs to be used with Form","default":"","version":""},"required":false,"type":"string[] "}],"cn":"","en":"","sort":"0"},{"title":"Upload.Image","properties":[{"name":"width","tag":{"cn":"上传图片容器宽度","en":"Upload image container width","default":"80","version":""},"required":false,"type":"number "},{"name":"height","tag":{"cn":"上传图片容器高度","en":"Upload image container height","default":"80","version":""},"required":false,"type":"number "}],"cn":"基本API 和 Upload 一致，特定API如下","en":"The basic API is consistent with Upload, and the specific API is as follows","sort":"1"},{"title":"Upload.Button","properties":[{"name":"size","tag":{"cn":"按钮尺寸","en":"The size of the button","default":"\\\"default\\\"","version":""},"required":false,"type":"\\\"small\\\" | \\\"large\\\" | \\\"default\\\" "},{"name":"type","tag":{"cn":"按钮类型","en":"The type of the button","default":"\\\"default\\\"","version":""},"required":false,"type":"| \\\"default\\\"  | \\\"primary\\\"  | \\\"secondary\\\"  | \\\"danger\\\"  | \\\"warning\\\"  | \\\"success\\\"  | \\\"link\\\" "},{"name":"placeholder","tag":{"cn":"按钮默认内容","en":"Button default content","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"loading","tag":{"cn":"上传中按钮的内容，如果是字符串默认会有spin loading","en":"content of uploading, will have spin if a string","default":"","version":""},"required":false,"type":"ReactNode"}],"cn":"基本API 和 Upload 一致，特定API如下","en":"The basic API is consistent with Upload, and the specific API is as follows","sort":"2"},{"title":"UploadOptions","properties":[{"name":"url","tag":{"cn":"上传地址从 action 中获取","en":"The upload address can be obtained from action","default":"","version":""},"required":true,"type":"string"},{"name":"name","tag":{"cn":"formData 中存的字段名","en":"key of formData","default":"","version":""},"required":true,"type":"string"},{"name":"withCredentials","tag":{"cn":"是否携带 cookie","en":"Whether to take the cookie","default":"false","version":""},"required":true,"type":"boolean"},{"name":"responseType","tag":{"cn":"同 props 中的 responseType","en":"same as responseType in props","default":"","version":""},"required":true,"type":"XMLHttpRequestResponseType "},{"name":"file","tag":{"cn":"传入文件","en":"incoming file","default":"","version":""},"required":true,"type":"File"},{"name":"headers","tag":{"cn":"请求头部信息","en":"request header information","default":"","version":""},"required":false,"type":"object"},{"name":"onError","tag":{"cn":"上传出错事件(props 中为 onHttpError)","en":"onError callback","default":"","version":""},"required":true,"type":"(xhr: XhrResult) => void"},{"name":"onLoad","tag":{"cn":"上传事件","en":"onLoad","default":"","version":""},"required":true,"type":"(xhr: XhrResult) => void"},{"name":"onProgress","tag":{"cn":"上传中进度","en":"onProgress","default":"","version":""},"required":true,"type":"(event: ProgressEvent<EventTarget>, msg?: string ) => any"},{"name":"onStart","tag":{"cn":"开始上传事件","en":"onStart","default":"","version":""},"required":false,"type":"((file: File) => void) "},{"name":"onSuccess","tag":{"cn":"上传成功事件","en":"onSuccess","default":"","version":""},"required":false,"type":"((res?: string , file?: File , data?: any, xhr?: XhrResult ) => Error | T) "},{"name":"params","tag":{"cn":"上传参数","en":"params","default":"","version":""},"required":false,"type":"object"}],"cn":"","en":"","sort":"3"},{"title":"Validator","properties":[{"name":"customValidator","tag":{"cn":"自定义校验","en":"custom validator","default":"","version":""},"required":false,"type":"((file: File) => void | Promise<any> | Error) "},{"name":"ext","tag":{"cn":"判断后缀名，传入参数为文件后缀，校验失败返回 Error","en":"Judge the file extension, return the Error when the verification fails.","default":"","version":""},"required":false,"type":"((ext: string) => void | Promise<any> | Error) "},{"name":"imageSize","tag":{"cn":"只对 Image 有效，判断图片尺寸，校验失败返回 Error","en":"It is only valid for Image to determine the size of images and return the Error when the verification fails.","default":"","version":""},"required":false,"type":"(image: { width: number; height: number; }) => void | Error"},{"name":"size","tag":{"cn":"判断文件大小，校验失败返回 Error","en":"Judge the size of the file and return the Error when the verification fails.","default":"","version":""},"required":false,"type":"((size: number) => void | Promise<any> | Error) "}],"cn":"","en":"","sort":"4"}]');
export default api;
