(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{44020:function(e){"use strict";var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),o=new RegExp("("+r+")+","gi");function n(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),o=e.slice(r);return Array.prototype.concat.call([],n(t),n(o))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(t),o=1;o<r.length;o++)r=(e=n(r,o).join("")).match(t);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(r){var c=a(n[0]);c!==n[0]&&(t[n[0]]=c)}n=o.exec(e)}t["%C2"]="\ufffd";for(var i=Object.keys(t),s=0;s<i.length;s++){var l=i[s];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,r){for(var t={},o=Object.keys(e),n=Array.isArray(r),a=0;a<o.length;a++){var c=o[a],i=e[c];(n?-1!==r.indexOf(c):r(c,i,e))&&(t[c]=i)}return t}},17537:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graphview",function(){return t(67172)}])},67172:function(e,r,t){"use strict";t.r(r);var o=t(85893),n=t(67294),a=t(9008),c=t(87357),i=t(46447),s=t(56123),l=t(17563);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function p(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f={layout:{hierarchical:!1},edges:{color:"#000000"}};var g=function(){var e=function(e,r){var t=function(){var e=Math.floor(256*Math.random()).toString(16).padStart(2,"0"),r=Math.floor(256*Math.random()).toString(16).padStart(2,"0"),t=Math.floor(256*Math.random()).toString(16).padStart(2,"0");return"#".concat(e).concat(r).concat(t)}();i((function(o){var n=o.graph,a=n.nodes,c=n.edges,i=o.counter,s=d(o,["graph","counter"]),l=i+1,f=Math.floor(Math.random()*(i-1))+1;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){u(e,r,t[r])}))}return e}({graph:{nodes:p(a).concat([{id:l,label:"Node ".concat(l),color:t,x:e,y:r}]),edges:p(c).concat([{from:f,to:l}])},counter:l},s)}))},r=(0,n.useState)({counter:5,graph:{nodes:[{id:1,label:"10.44.112.139",color:"#e04141"},{id:2,label:"hvaddc02",color:"#e09c41"},{id:3,label:"gbnvpwsof02",color:"#e0df41"},{id:4,label:"gbnvrwapp17",color:"#7be041"},{id:5,label:"svprdvc01",color:"#d6847e"},{id:6,label:"iwcmsdev",color:"#21e0c9"},{id:7,label:"tls-d167",color:"#51e0c9"},{id:8,label:"tls-d168",color:"#94c1ac"},{id:9,label:"gbprdxwi01",color:"#44c29a"},{id:10,label:"gbprdxaw72",color:"#ee90b9"},{id:11,label:"gbprdxdi01",color:"#26d5b0"}],edges:[{from:2,to:1},{from:3,to:1},{from:4,to:1},{from:5,to:1},{from:6,to:1},{from:7,to:1},{from:8,to:1},{from:9,to:1},{from:10,to:1},{from:11,to:1}]},events:{select:function(e){var r=e.nodes,t=e.edges;console.log("Selected nodes:"),console.log(r),console.log("Selected edges:"),console.log(t),alert("Selected node: "+r)},doubleClick:function(r){var t=r.pointer.canvas;e(t.x,t.y)}}}),t=r[0],i=r[1],g=t.graph,y=t.events,m=(0,n.useState)({counter:5,graph2:{nodes:[{id:1,label:"10.44.112.139",color:"#e04141"},{id:2,label:"gbprdxdi01",color:"#26d5b0"}],edges:[{from:2,to:1}]},events2:{select:function(e){var r=e.nodes,t=e.edges;console.log("Selected nodes:"),console.log(r),console.log("Selected edges:"),console.log(t),alert("Selected node: "+r)},doubleClick:function(r){var t=r.pointer.canvas;e(t.x,t.y)}}}),b=m[0],h=m[1],v=(0,n.useState)(null),j=v[0],x=v[1],S=(0,n.useState)(null),O=(S[0],S[1]),k=(0,n.useState)(null),w=(k[0],k[1]);n.useEffect((function(){var r=l.parse(window.location.search),t=r.did,o=r.h,n=r.ip;x(t),O(o),w(n),o&&h({counter:5,graph2:{nodes:[{id:1,label:n,color:"#e04141"},{id:2,label:o,color:"#26d5b0"}],edges:[{from:2,to:1}]},events2:{select:function(e){var r=e.nodes,t=e.edges;console.log("Selected nodes:"),console.log(r),console.log("Selected edges:"),console.log(t),alert("Selected node: "+r)},doubleClick:function(r){var t=r.pointer.canvas;e(t.x,t.y)}}})}),[]);b.graph2,b.events2;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.default,{children:(0,o.jsx)("title",{children:"Graph View"})}),(0,o.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:j?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{graph:b.graph2,options:f,events:b.events2,style:{height:"700px"}})}):(0,o.jsx)(s.Z,{graph:g,options:f,events:y,style:{height:"700px"}})})]})};g.getLayout=function(e){return(0,o.jsx)(i.c,{children:e})},r.default=g},17563:function(e,r,t){"use strict";const o=t(70610),n=t(44020),a=t(80500),c=t(92806),i=Symbol("encodeFragmentIdentifier");function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,r){return r.encode?r.strict?o(e):encodeURIComponent(e):e}function u(e,r){return r.decode?n(e):e}function d(e){return Array.isArray(e)?e.sort():"object"===typeof e?d(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function p(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function f(e){const r=(e=p(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function g(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,o)=>{r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===o[e]&&(o[e]={}),o[e][r[1]]=t):o[e]=t};case"bracket":return(e,t,o)=>{r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==o[e]?o[e]=[].concat(o[e],t):o[e]=[t]:o[e]=t};case"colon-list-separator":return(e,t,o)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==o[e]?o[e]=[].concat(o[e],t):o[e]=[t]:o[e]=t};case"comma":case"separator":return(r,t,o)=>{const n="string"===typeof t&&t.includes(e.arrayFormatSeparator),a="string"===typeof t&&!n&&u(t,e).includes(e.arrayFormatSeparator);t=a?u(t,e):t;const c=n||a?t.split(e.arrayFormatSeparator).map((r=>u(r,e))):null===t?t:u(t,e);o[r]=c};case"bracket-separator":return(r,t,o)=>{const n=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!n)return void(o[r]=t?u(t,e):t);const a=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>u(r,e)));void 0!==o[r]?o[r]=[].concat(o[r],a):o[r]=a};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const n of e.split("&")){if(""===n)continue;let[e,c]=a(r.decode?n.replace(/\+/g," "):n,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?c:u(c,r),t(u(e,r),c,o)}for(const n of Object.keys(o)){const e=o[n];if("object"===typeof e&&null!==e)for(const t of Object.keys(e))e[t]=g(e[t],r);else o[n]=g(e,r)}return!1===r.sort?o:(!0===r.sort?Object.keys(o).sort():Object.keys(o).sort(r.sort)).reduce(((e,r)=>{const t=o[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=d(t):e[r]=t,e}),Object.create(null))}r.extract=f,r.parse=y,r.stringify=(e,r)=>{if(!e)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);const t=t=>{return r.skipNull&&(null===(o=e[t])||void 0===o)||r.skipEmptyString&&""===e[t];var o},o=function(e){switch(e.arrayFormat){case"index":return r=>(t,o)=>{const n=t.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?t:null===o?[...t,[l(r,e),"[",n,"]"].join("")]:[...t,[l(r,e),"[",l(n,e),"]=",l(o,e)].join("")]};case"bracket":return r=>(t,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?t:null===o?[...t,[l(r,e),"[]"].join("")]:[...t,[l(r,e),"[]=",l(o,e)].join("")];case"colon-list-separator":return r=>(t,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?t:null===o?[...t,[l(r,e),":list="].join("")]:[...t,[l(r,e),":list=",l(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(o,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?o:(n=null===n?"":n,0===o.length?[[l(t,e),r,l(n,e)].join("")]:[[o,l(n,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?t:null===o?[...t,l(r,e)]:[...t,[l(r,e),"=",l(o,e)].join("")]}}(r),n={};for(const c of Object.keys(e))t(c)||(n[c]=e[c]);const a=Object.keys(n);return!1!==r.sort&&a.sort(r.sort),a.map((t=>{const n=e[t];return void 0===n?"":null===n?l(t,r):Array.isArray(n)?0===n.length&&"bracket-separator"===r.arrayFormat?l(t,r)+"[]":n.reduce(o(t),[]).join("&"):l(t,r)+"="+l(n,r)})).filter((e=>e.length>0)).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[t,o]=a(e,"#");return Object.assign({url:t.split("?")[0]||"",query:y(f(e),r)},r&&r.parseFragmentIdentifier&&o?{fragmentIdentifier:u(o,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[i]:!0},t);const o=p(e.url).split("?")[0]||"",n=r.extract(e.url),a=r.parse(n,{sort:!1}),c=Object.assign(a,e.query);let s=r.stringify(c,t);s&&(s=`?${s}`);let u=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(u=`#${t[i]?l(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${o}${s}${u}`},r.pick=(e,t,o)=>{o=Object.assign({parseFragmentIdentifier:!0,[i]:!1},o);const{url:n,query:a,fragmentIdentifier:s}=r.parseUrl(e,o);return r.stringifyUrl({url:n,query:c(a,t),fragmentIdentifier:s},o)},r.exclude=(e,t,o)=>{const n=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,n,o)}},80500:function(e){"use strict";e.exports=(e,r)=>{if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];const t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},function(e){e.O(0,[883,775,239,814,959,668,232,245,895,733,123,447,774,888,179],(function(){return r=17537,e(e.s=r);var r}));var r=e.O();_N_E=r}]);