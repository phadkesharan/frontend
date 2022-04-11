(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{27948:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var i=r(63366),n=r(87462),s=r(67294),a=(r(45697),r(86010)),o=r(77463),u=r(33616),h=r(11496),d=r(21420);function l(e){return(0,d.Z)("MuiContainer",e)}(0,r(11271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(98216),c=r(85893);const p=["className","component","disableGutters","fixed","maxWidth"],m=(0,h.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,f.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var g=s.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiContainer"}),{className:s,component:h="div",disableGutters:d=!1,fixed:g=!1,maxWidth:_="lg"}=r,v=(0,i.Z)(r,p),y=(0,n.Z)({},r,{component:h,disableGutters:d,fixed:g,maxWidth:_}),b=(e=>{const{classes:t,fixed:r,disableGutters:i,maxWidth:n}=e,s={root:["root",n&&`maxWidth${(0,f.Z)(String(n))}`,r&&"fixed",i&&"disableGutters"]};return(0,o.Z)(s,l,t)})(y);return(0,c.jsx)(m,(0,n.Z)({as:h,ownerState:y,className:(0,a.Z)(b.root,s),ref:t},v))}))},72882:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var i=r(87462),n=r(63366),s=r(67294),a=(r(45697),r(86010)),o=r(77463),u=r(33616),h=r(11496),d=r(21420);function l(e){return(0,d.Z)("MuiTableContainer",e)}(0,r(11271).Z)("MuiTableContainer",["root"]);var f=r(85893);const c=["className","component"],p=(0,h.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var m=s.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableContainer"}),{className:s,component:h="div"}=r,d=(0,n.Z)(r,c),m=(0,i.Z)({},r,{component:h}),g=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},l,t)})(m);return(0,f.jsx)(p,(0,i.Z)({ref:t,as:h,className:(0,a.Z)(g.root,s),ownerState:m},d))}))},41504:function(e,t,r){e.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(1),n=r(2),s=r(3),a=({accept:e=".csv, text/csv",cssClass:t="csv-reader-input",cssInputClass:r="csv-input",cssLabelClass:n="csv-label",fileEncoding:a="UTF-8",inputId:o="react-csv-reader-input",inputName:u="react-csv-reader-input",inputStyle:h={},label:d,onError:l=(()=>{}),onFileLoaded:f,parserOptions:c={},disabled:p=!1,strict:m=!1})=>i.createElement("div",{className:t},d&&i.createElement("label",{className:n,htmlFor:o},d),i.createElement("input",{className:r,type:"file",id:o,name:u,style:h,accept:e,onChange:t=>{let r=new FileReader;const i=t.target.files;if(i.length>0){const t={name:i[0].name,size:i[0].size,type:i[0].type};if(m&&e.indexOf(t.type)<=0)return void l(new Error(`[strict mode] Accept type not respected: got '${t.type}' but not in '${e}'`));r.onload=e=>{var n;const o=s.parse(r.result,Object.assign(c,{error:l,encoding:a}));f(null!==(n=null==o?void 0:o.data)&&void 0!==n?n:[],t,i[0])},r.readAsText(i[0],a)}},disabled:p}));a.propTypes={accept:n.string,cssClass:n.string,cssInputClass:n.string,cssLabelClass:n.string,fileEncoding:n.string,inputId:n.string,inputName:n.string,inputStyle:n.object,label:n.oneOfType([n.string,n.element]),onError:n.func,onFileLoaded:n.func.isRequired,parserOptions:n.object,disabled:n.bool,strict:n.bool},t.default=a},function(e,t){e.exports=r(67294)},function(e,t){e.exports=r(45697)},function(e,t,r){var i,n;void 0===(n="function"==typeof(i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=r&&/blob:/i.test((t.location||{}).protocol),n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(k(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!k(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=g,u.id=s++,n[u.id]=u}();return u.userStep=i.step,u.userChunk=i.chunk,u.userComplete=i.complete,u.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,void u.postMessage({input:r,config:i,workerId:u.id})}var c=null;return a.NODE_STREAM_INPUT,"string"==typeof r?c=i.download?new h(i):new l(i):!0===r.readable&&k(r.read)&&k(r.on)?c=new f(i):(t.File&&r instanceof File||r instanceof Object)&&(c=new d(i)),c.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,d=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(l=t.escapeFormulae)}}();var f=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,h);if("object"==typeof e[0])return m(d||c(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:c(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function c(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&i){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=g(e[h],h);0<t.length&&(a+=s)}for(var d=0;d<t.length;d++){var l=o?e.length:t[d].length,f=!1,c=o?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!o&&(f="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&o){for(var p=[],m=0;m<l;m++){var _=u?e[m]:m;p.push(t[d][_])}f=""===p.join("").trim()}if(!f){for(var v=0;v<l;v++){0<v&&!c&&(a+=n);var y=o&&u?e[v]:v;a+=g(t[d][y],v)}d<t.length-1&&(!r||0<l&&!c)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===l&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(f,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1)?o+i+o:i}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=c,a.NetworkStreamer=h,a.FileStreamer=d,a.StringStreamer=l,a.ReadableStreamStreamer=f,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,u=i[0];if(k(e.before)){var h=e.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return t=u.file,r=u.inputElem,n=h.reason,void(k(e.error)&&e.error({name:"AbortError"},t,r,n));if("skip"===h.action)return void s();"object"==typeof h.config&&(u.instanceConfig=o.extend(u.instanceConfig,h.config))}else if("skip"===h)return void s()}var d=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(d)&&d(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else k(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(k(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function d(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function c(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,h=this,d=0,l=0,f=!1,c=!1,g=[],_={data:[],errors:[],meta:{}};if(k(e.step)){var v=e.step;e.step=function(t){if(_=t,w())x();else{if(x(),0===_.data.length)return;d+=t.data.length,e.preview&&d>e.preview?r.abort():(_.data=_.data[0],v(_,h))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function x(){if(_&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)b(_.data[t])&&_.data.splice(t--,1);return w()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;w()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),g.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=g.length?"__parsed_extra":g[i]),e.transform&&(a=e.transform(a,s)),a=E(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>g.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+i,l+r):i<g.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+i,l+r)),n}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=g),l+=r,_}()}function w(){return e.header&&0===g.length}function E(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var i}function C(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,u)),i=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,r,i,n,s){var o,u,h,d;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var l=0;l<s.length;l++){var f=s[l],c=0,p=0,g=0;h=void 0;for(var _=new m({comments:n,delimiter:f,newline:r,preview:10}).parse(t),v=0;v<_.data.length;v++)if(i&&b(_.data[v]))g++;else{var y=_.data[v].length;p+=y,void 0!==h?0<y&&(c+=Math.abs(y-h),h=y):h=y}0<_.data.length&&(p/=_.data.length-g),(void 0===u||c<=u)&&(void 0===d||d<p)&&1.99<p&&(u=c,o=f,d=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var d=y(e);return e.preview&&e.header&&d.preview++,t=n,r=new m(d),_=r.parse(t,s,o),x(),f?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){h.streamer._halted?(f=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),_.meta.aborted=!0,k(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var d=0,l=!1;this.parse=function(e,a,f){if("string"!=typeof e)throw new Error("Input must be a string");var c=e.length,m=r.length,g=i.length,_=n.length,v=k(s),y=[],b=[],x=[],w=d=0;if(!e)return W();if(u||!1!==u&&-1===e.indexOf(t)){for(var E=e.split(i),C=0;C<E.length;C++){if(x=E[C],d+=x.length,C!==E.length-1)d+=i.length;else if(f)return W();if(!n||x.substring(0,_)!==n){if(v){if(y=[],A(x.split(r)),z(),l)return W()}else A(x.split(r));if(o&&o<=C)return y=y.slice(0,o),W(!0)}}return W()}for(var R=e.indexOf(r,d),S=e.indexOf(i,d),O=new RegExp(p(h)+p(t),"g"),T=e.indexOf(t,d);;)if(e[d]!==t)if(n&&0===x.length&&e.substring(d,d+_)===n){if(-1===S)return W();d=S+g,S=e.indexOf(i,d),R=e.indexOf(r,d)}else{if(-1!==R&&(R<S||-1===S)){if(!(R<T)){x.push(e.substring(d,R)),d=R+m,R=e.indexOf(r,d);continue}var I=N(R,T,S);if(I&&void 0!==I.nextDelim){R=I.nextDelim,T=I.quoteSearch,x.push(e.substring(d,R)),d=R+m,R=e.indexOf(r,d);continue}}if(-1===S)break;if(x.push(e.substring(d,S)),F(S+g),v&&(z(),l))return W();if(o&&y.length>=o)return W(!0)}else for(T=d,d++;;){if(-1===(T=e.indexOf(t,T+1)))return f||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:d}),j();if(T===c-1)return j(e.substring(d,T).replace(O,t));if(t!==h||e[T+1]!==h){if(t===h||0===T||e[T-1]!==h){-1!==R&&R<T+1&&(R=e.indexOf(r,T+1)),-1!==S&&S<T+1&&(S=e.indexOf(i,T+1));var D=M(-1===S?R:Math.min(R,S));if(e[T+1+D]===r){x.push(e.substring(d,T).replace(O,t)),e[d=T+1+D+m]!==t&&(T=e.indexOf(t,d)),R=e.indexOf(r,d),S=e.indexOf(i,d);break}var L=M(S);if(e.substring(T+1+L,T+1+L+g)===i){if(x.push(e.substring(d,T).replace(O,t)),F(T+1+L+g),R=e.indexOf(r,d),T=e.indexOf(t,d),v&&(z(),l))return W();if(o&&y.length>=o)return W(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:d}),T++}}else T++}return j();function A(e){y.push(e),w=d}function M(t){var r=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(r=i.length)}return r}function j(t){return f||(void 0===t&&(t=e.substring(d)),x.push(t),d=c,A(x),v&&z()),W()}function F(t){d=t,A(x),x=[],S=e.indexOf(i,d)}function W(e){return{data:y,errors:b,meta:{delimiter:r,linebreak:i,aborted:l,truncated:!!e,cursor:w+(a||0)}}}function z(){s(W()),y=[],b=[]}function N(i,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,n+1);if(n<i&&i<o&&(o<s||-1===s)){var u=e.indexOf(r,o);if(-1===u)return a;o<u&&(o=e.indexOf(t,o+1)),a=N(u,o,s)}else a={nextDelim:i,quoteSearch:n};return a}},this.abort=function(){l=!0},this.getCharIndex=function(){return d}}function g(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function v(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(d.prototype=Object.create(u.prototype)).constructor=d,(l.prototype=Object.create(l.prototype)).constructor=l,(f.prototype=Object.create(u.prototype)).constructor=f,a})?i.apply(t,[]):i)||(e.exports=n)}])}}]);