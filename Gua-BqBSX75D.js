import{d as R,r as u,c,a as j,b as l,F as n,e as d,t as i,g as A,f as B,o as t,H as E,n as b}from"./index-Dn79ZQWs.js";const F=l("div",{class:"container px-4"},[l("div",{class:"text-xl my-3"},"\u79FB\u52A8\u6307\u4EE4"),l("div",{class:"my-button w-16"},"\u65B0\u589E"),l("div")],-1),H={class:"fixed inset-0 bg-back"},I={class:"container h-full flex flex-col"},J=l("div",{class:"px-8 h-12 border-b flex items-center shrink-0"},[l("span",{class:"material-icons text-lg mr-4"},"arrow_back_ios"),B(" \u7F16\u5199\u6307\u4EE4 ")],-1),M={class:"px-8 pb-10 h-full overflow-y-scroll"},N=l("div",{class:"mt-8"},"\u9009\u62E9\u79FB\u52A8\u5175\u56E2",-1),P={class:"flex items-center"},T=["onClick"],U={class:"flex flex-wrap mt-2"},W=["onClick"],q=l("div",{class:"mt-8"},"\u9009\u62E9\u76EE\u7684\u5730",-1),z={class:"flex flex-wrap items-center"},D=["onClick"],K={class:"flex flex-wrap mt-2"},L=["onClick"],S={class:"mt-8 text-xl text-center"},V=l("div",{class:"my-2 flex justify-center"},[l("div",{class:"my-button w-full"},"\u786E\u5B9A")],-1),X=R({__name:"Gua",setup($){const h=[[55,96,88,35,34,36,44,45],[13,14,15],[1,2]],x=u([]),g=["\u9646\u519B","\u7A7A\u519B","\u6D77\u519B"],k=u(null),v=u(null),_=e=>{k.value=e,x.value=h[e],v.value=0},p=u([]),w=["\u5FB7\u5360\u533AG","\u610F\u5360\u533AT","\u65E5\u5360\u533AJ","\u82CF\u8054R","\u82F1\u56FDB","\u7F8E\u56FDU","\u4E2D\u56FDC","\u4E2D\u7ACB\u56FDN","\u5730\u4E2D\u6D77M","\u592A\u5E73\u6D0BP","\u5370\u5EA6\u6D0BI","\u5927\u897F\u6D0BA"],y=u(null),f=[];(()=>{const e=[17,18,23,17,17,17,17,17,17,17,30,20];w.map(m=>m.slice(-1)).forEach((m,a)=>{const s=[];for(let r=1;r<=e[a];r++){let C=m;a>=8&&(C+="-"),s.push(C+r)}f.push(s)})})(),console.log(f);const o=u(null),G=e=>{y.value=e,p.value=f[e],o.value=""};return(e,m)=>(t(),c(n,null,[j(E,{title:"War Room \u6307\u4EE4\u5361"}),F,l("div",H,[l("div",I,[J,l("div",M,[N,l("div",P,[(t(),c(n,null,d(g,(a,s)=>l("div",{class:b(["my-button w-20 mr-2 mt-2",k.value===s?"black":"black-sub"]),onClick:r=>_(s)},i(a),11,T)),64))]),l("div",U,[(t(!0),c(n,null,d(x.value,a=>(t(),c("div",{class:b(["my-button w-16 mt-2 mr-2",v.value===a?"black":"black-sub"]),onClick:s=>v.value=a},i(a),11,W))),256))]),q,l("div",z,[(t(),c(n,null,d(w,(a,s)=>l("div",{class:b(["my-button w-20 mr-2 mt-2",y.value===s?"black":"black-sub"]),onClick:r=>G(s)},i(a),11,D)),64))]),l("div",K,[(t(!0),c(n,null,d(p.value,a=>(t(),c("div",{class:b(["my-button w-16 mt-2 mr-2",o.value===a?"black":"black-sub"]),onClick:s=>o.value=a},i(a),11,L))),256))]),v.value&&o.value?(t(),c(n,{key:0},[l("div",S," \u547D\u4EE4 \u7B2C"+i(v.value)+"\u5E08 \u79FB\u52A8\u5230 "+i(o.value),1),V],64)):A("",!0)])])])],64))}});export{X as default};
