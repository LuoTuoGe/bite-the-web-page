import{d as Y7,r as G,c as g,a as j7,b as c,w as U,v as E,f as h,j as R,F as I,t as d,u as T,e as F,n as Y,g as q,o as y,H as F7,h as V7,p as W7,i as L7,_ as $7,__tla as B7}from"./index.4c22e0cb.js";let l0,G7=Promise.all([(()=>{try{return B7}catch{}})()]).then(async()=>{const s0="/bite-the-web-page/btr_star_figure_bg.8f8dd898.wasm",d0=async(e={},b)=>{let f;if(b.startsWith("data:")){const t=b.replace(/^data:.*?base64,/,"");let a;if(typeof Buffer=="function"&&typeof Buffer.from=="function")a=Buffer.from(t,"base64");else if(typeof atob=="function"){const i=atob(t);a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l)}else throw new Error("Cannot decode base64-encoded data URL");f=await WebAssembly.instantiate(a,e)}else{const t=await fetch(b),a=t.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&a.startsWith("application/wasm"))f=await WebAssembly.instantiateStreaming(t,e);else{const i=await t.arrayBuffer();f=await WebAssembly.instantiate(i,e)}}return f.instance.exports},C=new Array(32).fill(void 0);C.push(void 0,null,!0,!1);function V(e){return C[e]}let W=C.length;function i0(e){e<36||(C[e]=W,W=e)}function L(e){const b=V(e);return i0(e),b}function $(e){W===C.length&&C.push(C.length+1);const b=W;return W=C[b],C[b]=e,b}const u0=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let t0=new u0("utf-8",{ignoreBOM:!0,fatal:!0});t0.decode();let H=new Uint8Array;function O(){return H.byteLength===0&&(H=new Uint8Array(a0.buffer)),H}function J(e,b){return t0.decode(O().subarray(e,e+b))}function N(e){const b=typeof e;if(b=="number"||b=="boolean"||e==null)return`${e}`;if(b=="string")return`"${e}"`;if(b=="symbol"){const a=e.description;return a==null?"Symbol":`Symbol(${a})`}if(b=="function"){const a=e.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(e)){const a=e.length;let i="[";a>0&&(i+=N(e[0]));for(let l=1;l<a;l++)i+=", "+N(e[l]);return i+="]",i}const f=/\[object ([^\]]+)\]/.exec(toString.call(e));let t;if(f.length>1)t=f[1];else return toString.call(e);if(t=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:t}let P=0;const o0=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let Z=new o0("utf-8");const p0=typeof Z.encodeInto=="function"?function(e,b){return Z.encodeInto(e,b)}:function(e,b){const f=Z.encode(e);return b.set(f),{read:e.length,written:f.length}};function v0(e,b,f){if(f===void 0){const u=Z.encode(e),_=b(u.length);return O().subarray(_,_+u.length).set(u),P=u.length,_}let t=e.length,a=b(t);const i=O();let l=0;for(;l<t;l++){const u=e.charCodeAt(l);if(u>127)break;i[a+l]=u}if(l!==t){l!==0&&(e=e.slice(l)),a=f(a,t,t=l+e.length*3);const u=O().subarray(a+l,a+t),_=p0(e,u);l+=_.written}return P=l,a}let K=new Int32Array;function c0(){return K.byteLength===0&&(K=new Int32Array(a0.buffer)),K}function m0(e,b,f,t,a){const i=I0(e,b,f,t,a);return L(i)}function g0(e){L(e)}function y0(e,b){alert(J(e,b))}function h0(e){return $(e)}function _0(e){const b=V(e);return $(b)}function w0(e,b){const f=J(e,b);return $(f)}function x0(e,b,f){V(e)[L(b)]=L(f)}function D0(){const e=new Array;return $(e)}function S0(){const e=new Object;return $(e)}function T0(e,b,f){V(e)[b>>>0]=L(f)}function C0(e,b){const f=N(V(b)),t=v0(f,k0,U0),a=P;c0()[e/4+1]=a,c0()[e/4+0]=t}function M0(e,b){throw new Error(J(e,b))}URL=globalThis.URL;const B=await d0({"./btr_star_figure_bg.js":{__wbindgen_object_drop_ref:g0,__wbg_alert_767ba4c3a3333412:y0,__wbindgen_number_new:h0,__wbindgen_object_clone_ref:_0,__wbindgen_string_new:w0,__wbg_set_20cbc34131e76824:x0,__wbg_new_1d9a920c6bfc44a8:D0,__wbg_new_0b9bfdd97583284e:S0,__wbg_set_a68214f35c417fa9:T0,__wbindgen_debug_string:C0,__wbindgen_throw:M0}},s0),a0=B.memory,I0=B.build_stage;B.greet;const k0=B.__wbindgen_malloc,U0=B.__wbindgen_realloc,n0=["\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678"],j=["\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5"],A0=["\u6B63\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u51AC\u6708","\u814A\u6708"],Y0=["\u521D\u4E00","\u521D\u4E8C","\u521D\u4E09","\u521D\u56DB","\u521D\u4E94","\u521D\u516D","\u521D\u4E03","\u521D\u516B","\u521D\u4E5D","\u521D\u5341","\u5341\u4E00","\u5341\u4E8C","\u5341\u4E09","\u5341\u56DB","\u5341\u4E94","\u5341\u516D","\u5341\u4E03","\u5341\u516B","\u5341\u4E5D","\u5EFF\u5341","\u5EFF\u4E00","\u5EFF\u4E8C","\u5EFF\u4E09","\u5EFF\u56DB","\u5EFF\u4E94","\u5EFF\u516D","\u5EFF\u4E03","\u5EFF\u516B","\u5EFF\u4E5D","\u4E09\u5341"];var Q={1:{1:"\u6625\u8282",15:"\u5143\u5BB5"},2:{2:"\u9F99\u62AC\u5934"},5:{5:"\u7AEF\u5348"},7:{7:"\u4E03\u5915",15:"\u4E2D\u5143"},8:{15:"\u4E2D\u79CB"},9:{9:"\u91CD\u9633"},12:{29:"\u9664\u5915",30:"\u9664\u5915"}},X={1:{1:"\u5143\u65E6"},2:{14:"\u60C5\u4EBA\u8282"},3:{8:"\u5987\u5973\u8282"},4:{1:"\u611A\u4EBA\u8282",4:"\u6E05\u660E\u8282"},5:{1:"\u52B3\u52A8\u8282",4:"\u9752\u5E74\u8282"},6:{1:"\u513F\u7AE5\u8282"},7:{1:"\u5EFA\u515A\u8282"},8:{1:"\u5EFA\u519B\u8282"},9:{10:"\u6559\u5E08\u8282"},10:{1:"\u56FD\u5E86\u8282"}};const n={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,37600,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,42192,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],gan:["\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678"],zhi:["\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5"],animals:["\u9F20","\u725B","\u864E","\u5154","\u9F99","\u86C7","\u9A6C","\u7F8A","\u7334","\u9E21","\u72D7","\u732A"],lunarTerm:["\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u60CA\u86F0","\u6625\u5206","\u6E05\u660E","\u8C37\u96E8","\u7ACB\u590F","\u5C0F\u6EE1","\u8292\u79CD","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u5904\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA","\u51AC\u81F3"],lTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],nStr2:["\u521D","\u5341","\u5EFF","\u5345"],nStr3:["\u6B63","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341","\u51AC","\u814A"],nStr4:["\u96F6","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],lYearDays:function(e){var b,f=348;for(b=32768;b>8;b>>=1)f+=n.lunarInfo[e-1900]&b?1:0;return f+n.leapDays(e)},leapMonth:function(e){return 15&n.lunarInfo[e-1900]},leapDays:function(e){return n.leapMonth(e)?65536&n.lunarInfo[e-1900]?30:29:0},monthDays:function(e,b){return b>12||b<1?-1:n.lunarInfo[e-1900]&65536>>b?30:29},solarDays:function(e,b){if(b>12||b<1)return-1;var f=b-1;return f==1?e%4==0&&e%100!=0||e%400==0?29:28:n.solarMonth[f]},toGanZhi:function(e){return n.gan[e%10]+n.zhi[e%12]},getTerm:function(e,b){if(e<1900||e>2100||b<1||b>24)return-1;var f=n.lTermInfo[e-1900],t=[parseInt("0x"+f.substr(0,5)).toString(),parseInt("0x"+f.substr(5,5)).toString(),parseInt("0x"+f.substr(10,5)).toString(),parseInt("0x"+f.substr(15,5)).toString(),parseInt("0x"+f.substr(20,5)).toString(),parseInt("0x"+f.substr(25,5)).toString()],a=[t[0].substr(0,1),t[0].substr(1,2),t[0].substr(3,1),t[0].substr(4,2),t[1].substr(0,1),t[1].substr(1,2),t[1].substr(3,1),t[1].substr(4,2),t[2].substr(0,1),t[2].substr(1,2),t[2].substr(3,1),t[2].substr(4,2),t[3].substr(0,1),t[3].substr(1,2),t[3].substr(3,1),t[3].substr(4,2),t[4].substr(0,1),t[4].substr(1,2),t[4].substr(3,1),t[4].substr(4,2),t[5].substr(0,1),t[5].substr(1,2),t[5].substr(3,1),t[5].substr(4,2)];return parseInt(a[b-1])},toChinaYear:function(e){var b=parseInt((e/1e3).toString()),f=parseInt((e%1e3/100).toString()),t=parseInt((e%100/10).toString()),a=e%10;return n.nStr4[b]+n.nStr4[f]+n.nStr4[t]+n.nStr4[a]+"\u5E74"},toChinaMonth:function(e){if(e>12||e<1)return-1;var b=n.nStr3[e-1];return b+="\u6708"},toChinaDay:function(e){var b;switch(e){case 10:b="\u521D\u5341";break;case 20:b="\u4E8C\u5341";break;case 30:b="\u4E09\u5341";break;default:b=n.nStr2[Math.floor(e/10)],b+=n.nStr1[e%10]}return b},getAnimal:function(e){return n.animals[(e-4)%12]},solar2lunar:function(e,b,f){if(e<1900||e>2100||e==1900&&b==1&&f<31)return-1;if(e)t=new Date(e,parseInt(b.toString())-1,f);else var t=new Date;var a,i=0,l=(e=t.getFullYear(),b=t.getMonth()+1,f=t.getDate(),(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(1900,0,31))/864e5);for(a=1900;a<2101&&l>0;a++)l-=i=n.lYearDays(a);l<0&&(l+=i,a--);var u=new Date,_=!1;u.getFullYear()==e&&u.getMonth()+1==b&&u.getDate()==f&&(_=!0);var p=t.getDay(),M=n.nStr1[p];p==0&&(p=7);var s=a,v=n.leapMonth(a),w=!1;for(a=1;a<13&&l>0;a++)v>0&&a==v+1&&w==0?(--a,w=!0,i=n.leapDays(s)):i=n.monthDays(s,a),w==1&&a==v+1&&(w=!1),l-=i;l==0&&v>0&&a==v+1&&(w?w=!1:(w=!0,--a)),l<0&&(l+=i,--a);var D=a,A=l+1,z=b-1,x=n.getTerm(e,3),o=n.toGanZhi(e-4),r=new Date(e,1,x).getTime();new Date(e,z,f).getTime()<r&&(o=n.toGanZhi(e-5));var m=n.getTerm(e,2*b-1),e0=n.getTerm(e,2*b),k=n.toGanZhi(12*(e-1900)+b+11);f>=m&&(k=n.toGanZhi(12*(e-1900)+b+12));var b0=!1,f0="";m==f&&(b0=!0,f0=n.lunarTerm[2*b-2]),e0==f&&(b0=!0,f0=n.lunarTerm[2*b-1]);var k7=Date.UTC(e,z,1,0,0,0,0)/864e5+25567+10,U7=n.toGanZhi(k7+f-1),r0=Q[D]&&Q[D][A]?Q[D][A]:"";[2022,2025,2026,2027,2028,2029,2031,2032].includes(e)&&D===12&&A===29&&(r0="\u9664\u5915");var A7=X[b]&&X[b][f]?X[b][f]:"";return{lYear:s,lMonth:D,lDay:A,animal:n.getAnimal(s),yearCn:n.toChinaYear(s),monthCn:(w&&v===D?"\u95F0":"")+n.toChinaMonth(D),dayCn:n.toChinaDay(A),cYear:e,cMonth:b,cDay:f,gzYear:o,gzMonth:k,gzDay:U7,isToday:_,isLeap:w,nWeek:p,ncWeek:"\u661F\u671F"+M,isTerm:b0,term:f0,lunarFestival:r0,festival:A7}},lunar2solar:function(e,b,f,t){var a=n.leapMonth(e);if(t&&a!=b||e==2100&&b==12&&f>1||e==1900&&b==1&&f<31)return-1;var i=n.monthDays(e,b);if(e<1900||e>2100||f>i)return-1;for(var l=0,u=1900;u<e;u++)l+=n.lYearDays(u);var _=0,p=!1;for(u=1;u<b;u++)_=n.leapMonth(e),p||_<=u&&_>0&&(l+=n.leapDays(e),p=!0),l+=n.monthDays(e,u);t&&(l+=i);var M=Date.UTC(1900,1,30,0,0,0),s=new Date(864e5*(l+f-31)+M),v=s.getUTCFullYear(),w=s.getUTCMonth()+1,D=s.getUTCDate();return n.solar2lunar(v,w,D)}};var j0=n;const S=e=>(W7("data-v-63e6241e"),e=e(),L7(),e),F0={class:"container"},V0={key:0,class:"mt-20"},W0={class:"flex justify-center"},L0={class:"p-4 flex justify-center"},$0={class:"ml-2"},B0={class:"ml-2"},G0={class:"ml-2"},O0={class:"ml-2"},Z0={class:"ml-2"},z0=S(()=>c("div",{class:"text-center"},"Tips: \u95F0\u6708\u751F\u4EBA\u4F5C\u4E0B\u6708\u8BBA",-1)),E0={class:"mt-2 mx-auto border-stone-400 border-t border-l relative w-80 h-80 text-xs md:w-[750px] md:h-[750px] md:text-base"},R0={class:"absolute border-stone-400 border-b border-r w-1/2 h-1/2 left-1/4 top-1/4 p-4 text-sm md:p-6 md:text-2xl"},q0=S(()=>c("br",null,null,-1)),H0=S(()=>c("br",null,null,-1)),J0=S(()=>c("br",null,null,-1)),N0=S(()=>c("br",null,null,-1)),P0=S(()=>c("br",null,null,-1)),K0=["onClick"],Q0={class:"px-1 md:p-1 h-[3.7rem] md:h-36"},X0={class:"md:h-20 leading-tight flex flex-wrap items-start"},e7={class:"text-blue"},b7={class:"text-gray"},f7={class:"text-blue"},t7={class:"text-gray"},c7={class:"flex mt-1 hidden md:flex"},a7=S(()=>c("span",{class:"mr-1.5 text-sm"},"\u5927\u9650",-1)),n7={class:"text-xs"},r7={class:"flex hidden md:flex"},l7=S(()=>c("div",{class:"shrink-0 mr-1.5 text-sm"},"\u5C0F\u9650",-1)),s7={class:"flex flex-wrap text-xs"},d7={class:"w-8"},i7={class:"text-center"},u7={key:0,class:"text-red"},o7={key:2,class:"fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-back w-96 h-[30rem] px-8 py-12 shadow-lg"},p7={class:"w-80 border rounded"},v7={class:"p-2 h-[17rem]"},m7={class:"h-48 leading-tight flex flex-wrap items-start text-xl"},g7={class:"text-blue"},y7={class:"text-gray"},h7={class:"flex mt-1"},_7=S(()=>c("span",{class:"mr-3"},"\u5927\u9650",-1)),w7={class:""},x7={class:"flex"},D7=S(()=>c("div",{class:"shrink-0 mr-3"},"\u5C0F\u9650",-1)),S7={class:"flex flex-wrap"},T7={class:"w-7"},C7={class:"text-center text-xl"},M7={key:0,class:"text-red"},I7=Y7({__name:"StarFigure",setup(e){const b=["\u547D\u5BAB","\u5144\u5F1F","\u592B\u59BB","\u5B50\u5973","\u8D22\u5E1B","\u75BE\u5384","\u8FC1\u79FB","\u4EC6\u5F79","\u5B98\u7984","\u7530\u5B85","\u798F\u5FB7","\u7236\u6BCD"],f=["\u7D2B\u5FAE","\u5929\u673A","\u592A\u9633","\u6B66\u66F2","\u5929\u540C","\u5EC9\u8D1E","\u5929\u5E9C","\u592A\u9634","\u8D2A\u72FC","\u5DE8\u95E8","\u5929\u76F8","\u5929\u6881","\u4E03\u6740","\u7834\u519B","\u5DE6\u8F85","\u53F3\u5F3C","\u6587\u660C","\u6587\u66F2","\u5929\u9B41","\u5929\u94BA","\u7984\u5B58","\u5929\u9A6C","\u64CE\u7F8A","\u9640\u7F57","\u706B\u661F","\u94C3\u661F","\u5730\u7A7A","\u5730\u52AB","\u4E09\u53F0","\u516B\u5EA7","\u6069\u5149","\u5929\u8D35","\u53F0\u8F85","\u5C01\u8BF0","\u5929\u5B98","\u5929\u798F","\u5929\u54ED","\u5929\u865A","\u7EA2\u9E3E","\u5929\u559C","\u9F99\u6C60","\u51E4\u9601","\u5B64\u8FB0","\u5BE1\u5BBF"],t=["\u91D1\u56DB\u5C40","\u6C34\u4E8C\u5C40","\u706B\u516D\u5C40","\u571F\u4E94\u5C40","\u6728\u4E09\u5C40"],a=["","\u7984","\u6743","\u79D1","\u5FCC"],i=["","\u9677","\u4E0D","\u5E73","\u5229","\u5730","\u65FA","\u5E99"],l=[{left:"50%",top:"75%"},{left:"25%",top:"75%"},{left:"0%",top:"75%"},{left:"0%",top:"50%"},{left:"0%",top:"25%"},{left:"0%",top:"0%"},{left:"25%",top:"0%"},{left:"50%",top:"0%"},{left:"75%",top:"0%"},{left:"75%",top:"25%"},{left:"75%",top:"50%"},{left:"75%",top:"75%"}],u=x=>x<14?"text-purple":x<22?"text-red":x<28?"text-green":"text-black",_=x=>x===0?"border-purple":x===4||x===8||x===6?"border-yellow":"border-transparent",p=G({isMale:!0}),M=G(!1),s=G({}),v=G({}),w=G(!1),D=()=>{let{isMale:x,year:o,month:r,day:m,hour:e0}={...p.value};if(!M.value){const k=j0.solar2lunar(o,r,m);typeof k=="object"&&(o=k.lYear,r=k.lMonth,m=k.lDay,k.isLeap&&(r+=1,r===13&&(r=1,o+=1)))}s.value=m0(x,o,r,m,e0),console.log(s.value),v.value=s.value.palaces[4]},A=()=>{s.value={}},z=x=>{v.value=s.value.palaces[x],w.value=!0};return(x,o)=>(y(),g(I,null,[j7(F7,{title:"\u6597\u6570"}),c("div",F0,[s.value.id?(y(),g(I,{key:1},[c("div",{class:"w-80 md:w-[750px] mx-auto"},[c("div",{class:"mt-4 w-20",onClick:A},"\u8FD4\u56DE")]),c("div",E0,[c("div",R0,[h(d(T(n0)[s.value.birth[0]])+d(T(j)[s.value.birth[1]])+"\u5E74 "+d(T(A0)[s.value.birth[2]])+d(T(Y0)[s.value.birth[3]])+" "+d(T(j)[s.value.birth[4]])+"\u65F6",1),q0,h(" "+d(s.value.is_sun?"\u9633":"\u9634")+d(s.value.is_male?"\u7537":"\u5973"),1),H0,h(" "+d(t[s.value.table_id]),1),J0,h(" \u547D\u5728"+d(T(n0)[s.value.fate_palace[0]])+d(T(j)[s.value.fate_palace[1]])+" \u8EAB\u5BAB\u5728"+d(T(j)[s.value.destiny_palace]),1),N0,h(" \u547D\u4E3B"+d(f[s.value.fate_master])+" \u8EAB\u4E3B"+d(f[s.value.destiny_master]),1),P0]),(y(!0),g(I,null,F(s.value.palaces,r=>(y(),g("div",{class:"w-1/4 h-1/4 absolute border-stone-400 border-b border-r",style:V7(l[r.id]),onClick:m=>z(r.id)},[c("div",{class:Y(["w-full h-full border-2 md:border-8",_(r.type_id)])},[c("div",Q0,[c("div",X0,[(y(!0),g(I,null,F(r.stars,m=>(y(),g("span",{class:Y(["w-4 hidden md:inline",u(m.id)])},[h(d(f[m.id])+" ",1),c("span",e7,d(a[m.turn]),1),c("span",b7,d(i[m.light]),1)],2))),256)),(y(!0),g(I,null,F(r.stars,m=>(y(),g("span",{class:Y(["w-3 inline md:hidden",u(m.id)])},[m.id<28?(y(),g(I,{key:0},[h(d(f[m.id])+" ",1),c("span",f7,d(a[m.turn]),1),c("span",t7,d(i[m.light]),1)],64)):q("",!0)],2))),256))]),c("div",c7,[a7,c("span",n7,d(r.big_limit)+" ~ "+d(r.big_limit+9),1)]),c("div",r7,[l7,c("div",s7,[(y(!0),g(I,null,F(r.small_limit,m=>(y(),g("span",d7,d(m),1))),256))])])]),c("div",i7,[h(d(T(j)[r.id])+" ",1),c("span",{class:Y(!r.type_id&&"text-red")},d(b[r.type_id]),3),s.value.destiny_palace===r.id?(y(),g("span",u7," \u8EAB\u5BAB")):q("",!0)])],2)],12,K0))),256))])],64)):(y(),g("div",V0,[c("div",W0,[U(c("input",{type:"radio",value:"false","onUpdate:modelValue":o[0]||(o[0]=r=>M.value=r)},null,512),[[E,M.value]]),h("\u516C\u5386 "),U(c("input",{class:"ml-2",type:"radio",value:"true","onUpdate:modelValue":o[1]||(o[1]=r=>M.value=r)},null,512),[[E,M.value]]),h("\u519C\u5386 ")]),c("div",L0,[c("div",$0,[U(c("input",{type:"radio",value:"true","onUpdate:modelValue":o[2]||(o[2]=r=>p.value.isMale=r)},null,512),[[E,p.value.isMale]]),h("\u7537 "),U(c("input",{type:"radio",value:"false","onUpdate:modelValue":o[3]||(o[3]=r=>p.value.isMale=r)},null,512),[[E,p.value.isMale]]),h("\u5973 ")]),c("div",B0,[U(c("input",{class:"w-14 input",type:"number","onUpdate:modelValue":o[4]||(o[4]=r=>p.value.year=r)},null,512),[[R,p.value.year]]),h("\u5E74")]),c("div",G0,[U(c("input",{class:"w-8 input",type:"number","onUpdate:modelValue":o[5]||(o[5]=r=>p.value.month=r)},null,512),[[R,p.value.month]]),h("\u6708")]),c("div",O0,[U(c("input",{class:"w-8 input",type:"number","onUpdate:modelValue":o[6]||(o[6]=r=>p.value.day=r)},null,512),[[R,p.value.day]]),h("\u65E5")]),c("div",Z0,[U(c("input",{class:"w-8 input",type:"number","onUpdate:modelValue":o[7]||(o[7]=r=>p.value.hour=r)},null,512),[[R,p.value.hour]]),h("\u65F6")])]),z0,c("div",{class:"my-button purple mt-10 w-80 mx-auto",onClick:D},"\u6392\u76D8")])),w.value?(y(),g("div",o7,[c("div",p7,[c("div",{class:Y(["mx-auto border-8",_(v.value.type_id)])},[c("div",v7,[c("div",m7,[(y(!0),g(I,null,F(v.value.stars,r=>(y(),g("span",{class:Y(["w-5",u(r.id)])},[h(d(f[r.id])+" ",1),c("span",g7,d(a[r.turn]),1),c("span",y7,d(i[r.light]),1)],2))),256))]),c("div",h7,[_7,c("span",w7,d(v.value.big_limit)+" ~ "+d(v.value.big_limit+9),1)]),c("div",x7,[D7,c("div",S7,[(y(!0),g(I,null,F(v.value.small_limit,r=>(y(),g("span",T7,d(r),1))),256))])])]),c("div",C7,[h(d(T(j)[v.value.id])+" ",1),c("span",{class:Y(!v.value.type_id&&"text-red")},d(b[v.value.type_id]),3),s.value.destiny_palace===v.value.id?(y(),g("span",M7," \u8EAB\u5BAB")):q("",!0)])],2)]),c("div",{class:"my-button sub mt-6",onClick:o[8]||(o[8]=r=>w.value=!1)},"\u8FD4\u56DE")])):q("",!0)])],64))}});l0=$7(I7,[["__scopeId","data-v-63e6241e"]])});export{G7 as __tla,l0 as default};
