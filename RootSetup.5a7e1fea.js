import{d as F,r as m,c as l,a as x,b as u,f as A,F as y,e as D,o,w as k,k as w,n as f,t as c,u as h,g as B,l as g}from"./index.43d7fe88.js";const b={class:"mx-auto my-16 w-80"},V=["value"],N={class:"flex flex-wrap"},R={class:"w-40"},I=["value"],M={key:0,class:"ml-4"},S={key:1,class:"ml-4"},L=F({__name:"RootSetup",setup(H){const E=[{id:1,name:"\u732B\u54AA\u8D35\u65CF",intensity:10},{id:2,name:"\u98DE\u9E70\u738B\u671D",intensity:7},{id:3,name:"\u68EE\u6797\u8054\u76DF",intensity:3},{id:4,name:"\u795E\u79D8\u6E38\u4FA0",intensity:5},{id:5,name:"\u8725\u8734\u795E\u6559",intensity:2},{id:6,name:"\u6CB3\u72F8\u5546\u4F1A",intensity:5},{id:7,name:"\u795E\u79D8\u6E38\u4FA02",intensity:5},{id:8,name:"\u9F39\u9F20\u5E1D\u56FD",intensity:8},{id:9,name:"\u9634\u8C0B\u515A\u7FBD",intensity:3},{id:10,name:"\u767E\u4EBA\u519B\u56E2",intensity:8},{id:11,name:"\u9057\u7269\u5B88\u536B",intensity:8}];let r=["\u730E\u4EBA","\u5DE5\u5320","\u76D7\u8D3C","\u6076\u68CD","\u9738\u738B","\u65E0\u8D56"];const _=m(2),d=m([]),v=m([]),p=n=>{for(let t=0;t<n.length;t++){const a=Math.floor(Math.random()*(n.length-t))+t,e=n[t];n[t]=n[a],n[a]=e}},C=()=>{const n=d.value;p(n);const t=[],a=n.map(s=>E[s-1]),e=a.filter(s=>s.intensity>=7);let i=a.filter(s=>s.intensity<7);if(!e.length){alert("\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EA2\u8272\u79CD\u65CF");return}t.push(e.pop()),i=e.concat(i),p(i);for(let s=0;s<_.value;s++)t.push(i.pop());p(r),v.value=t};return(n,t)=>{const a=g("Header");return o(),l(y,null,[x(a,{back:!1}),u("div",b,[u("div",null,[A(" \u73A9\u5BB6\u4EBA\u6570 "),u("input",{class:"ml-12 indent-2 w-10",type:"number",value:_.value},null,8,V)]),u("div",N,[(o(),l(y,null,D(E,e=>u("div",R,[k(u("input",{value:e.id,"onUpdate:modelValue":t[0]||(t[0]=i=>d.value=i),type:"checkbox"},null,8,I),[[w,d.value]]),u("span",{class:f(e.intensity>=7?"text-red":"")},c(e.name)+" / "+c(e.intensity),3)])),64))]),u("div",{class:"my-button purple mt-10 w-80 mx-auto",onClick:C},"\u62BD\u53D6"),(o(!0),l(y,null,D(v.value,e=>(o(),l("div",null,[u("span",{class:f(e.intensity>=7?"text-red":"")},c(e.name)+" / "+c(e.intensity),3),e.id===4?(o(),l("span",M,c(h(r)[0]),1)):B("",!0),e.id===7?(o(),l("span",S,c(h(r)[1]),1)):B("",!0)]))),256))])],64)}}});export{L as default};
