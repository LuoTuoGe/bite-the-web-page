import{d as ft,r as k,c as l,a as dt,b as u,F as w,e as D,f as et,n as C,t as E,g as $,u as G,o as i,H as pt,h as _t,p as bt,i as kt,_ as yt}from"./index.bce72571.js";function ot(c,d,p=0){if(p===c.length-1){d(c);return}else for(let h=p;h<c.length;h++){const y=c[p];c[p]=c[h],c[h]=y,ot(c,d,p+1),c[h]=c[p],c[p]=y}}function ut(c,d,p,h=0){for(let y=0;y<c.length;y++)d[h]=c[y],h===d.length-1?p(d):ut(c,d,p,h+1)}const J=c=>(bt("data-v-6e950e67"),c=c(),kt(),c),gt={class:"container p-4"},At={class:"mx-auto relative"},xt=["onClick"],ht={class:"w-24 h-24 border border-black px-2"},Et=["onClick"],wt={class:"fixed inset-y-0 right-0 2xl:right-96"},Ct={class:"absolute right-4 bottom-24"},Bt={class:"flex flex-col items-center"},Dt={class:"flex"},Ft={class:"my-10 w-56 flex flex-wrap justify-center"},$t=["onClick"],mt={key:0,class:"fixed bottom-0 right-0 left-0 top-24 bg-back border-t border-black"},Mt={class:"container mx-auto"},Tt={key:0,class:"mx-6 my-2"},St={key:1,class:"mx-6 my-2"},Pt={class:"my-table flex justify-center"},Ot={class:"border-t border-l border-black"},jt={class:"flex"},qt={class:"item"},zt={class:"flex"},Lt={class:"item"},Nt={class:"item"},Rt={key:0,class:"text-xs"},Vt=J(()=>u("div",{class:"mx-6 my-2"},"\u5361\u724C\u6536\u76CA",-1)),Wt={class:"my-table flex justify-center"},Ht={class:"flex border-t border-l border-black"},Yt={class:"item"},Gt={class:"text-center mt-4"},Jt={class:"mt-4 flex justify-around"},Kt={key:1,class:"p-4 fixed inset-y-16 inset-x-6 bg-back shadow-lg shadow-gray-400 rounded-lg"},Qt=J(()=>u("div",{class:"text-center text-lg"},"\u9A86\u9A7C",-1)),Ut={class:"flex flex-wrap justify-center my-2"},Xt=["onClick"],Zt={key:0},It=J(()=>u("div",{class:"text-center text-lg"},"\u9677\u9631",-1)),te={class:"flex flex-wrap justify-center my-2"},ee={class:"absolute bottom-4 inset-x-0 flex justify-center"},oe=ft({__name:"Camel",setup(c){const d=["blue","green","red","yellow","purple","black","zinc-400"],p=["\u84DD\u9A86\u9A7C","\u7EFF\u9A86\u9A7C","\u7EA2\u9A86\u9A7C","\u9EC4\u9A86\u9A7C","\u7D2B\u9A86\u9A7C","\u9ED1\u9A86\u9A7C","\u767D\u9A86\u9A7C"],h=["","+1","-1"],y=[5,3,2],a=k([]),m=k([]),_=k([]),K=k([]),z=k(0),L=k([]),Q=k([]),j=k([]),M=k(!1);function U(){M.value=!M.value,N()}function N(){a.value=[];for(let e=0;e<5;e++)a.value.push({id:e,position:0,top:99,bottom:99});j.value=[];for(let e=0;e<5;e++)j.value.push(e);M.value&&(j.value.push(5),a.value.push({id:6,position:16,top:99,bottom:99}),a.value.push({id:5,position:16,top:99,bottom:99})),m.value=[],_.value=[]}function st(){confirm("\u786E\u5B9A\u6E05\u7A7A\u72B6\u6001\u5417\uFF1F")&&N()}function R(e,t,o,r=!1){if(t>6)return alert("\u9A86\u9A7C\u4E0D\u5B58\u5728!!!"),e;if(o===0)return e;if(t>=5&&!r){let s=t===5?6:5;e[t].top===s&&(t=s),e[t].top===99&&e[s].top<5&&(t=s)}const v=t<5?1:-1;e[t].bottom=99;for(let s of e)if(s.top===t){s.top=99;break}let f=e[t].position+o*v;if(_.value[f]===1&&(f+=v),_.value[f]===2){e[t].position=f-v;let s=t;for(;;)if(e[s].top!==99)s=e[s].top,e[s].position=e[t].position;else{for(let n=0;n<e.length;n++)if(e[n].position===e[t].position&&e[n].bottom===99&&n!==t){e[s].top=n,e[n].bottom=s;break}break}}else{e[t].position=f;for(let n=0;n<e.length;n++)if(e[n].position===e[t].position&&e[n].top===99&&n!==t){e[n].top=t,e[t].bottom=n;break}let s=t;for(;e[s].top!==99;)s=e[s].top,e[s].position=e[t].position}return e}function nt(e,t){a.value=R(a.value,e,t,!0)}function lt(e){const t=e.length,o=M.value?e.length-1:e.length;if(!o)return 1;let r=1;for(let v=1;v<=t;v++)r*=v;for(let v=1;v<=o;v++)r*=3;return r*=2,r}function V(e,t){let o=0;for(;;){if(e[t].bottom===99)return o;t=e[t].bottom,o++}}function W(e){return e.sort((t,o)=>V(e,o.id)-V(e,t.id)).sort((t,o)=>o.position-t.position).map(t=>t.id).filter(t=>t<5)}function it(){const e=[1,2,3],t=[...m.value],o=M.value?t.length-1:t.length;if(o<1){alert("\u9AB0\u5B50\u4E0D\u591F");return}const r=new Array(o).fill(0),v=5,f=[];for(let s=0;s<v;s++)f.push(new Array(v).fill(0));if(t.length===0){const s=a.value.map(S=>({...S}));W(s).forEach((S,T)=>{f[T][S]+=1})}else ot(t,s=>{const n=M.value?s.slice(0,o):s;ut(e,r,S=>{let T=a.value.map(A=>({...A}));for(let A=0;A<n.length;A++){const x=n[A],tt=S[A];if(T=R(T,x,tt),T[x].position>15&&x<5||T[x].position<0&&x>=5)break}const I=W(T);if(!n.includes(5))I.forEach((A,x)=>{f[x][A]+=2});else{I.forEach((B,F)=>{f[F][B]+=1});let A=[...n];A[A.indexOf(5)]=6;let x=a.value.map(B=>({...B}));for(let B=0;B<A.length;B++){const F=A[B],ct=S[B];if(x=R(x,F,ct),x[F].position>15&&F<5||x[F].position<0&&F>=5)break}W(x).forEach((B,F)=>{f[F][B]+=1})}})});return K.value=f,z.value=lt(t),L.value=f.map(s=>s.map(n=>n/z.value*100)),rt(),!0}function rt(){const t=[];for(let o=0;o<5;o++)t.push(new Array(y.length).fill(0));L.value.forEach((o,r)=>{o.forEach((v,f)=>{const s=v/100;if(r===0)for(let n in y)t[f][n]+=y[n]*s;else if(r===1)for(let n in y)t[f][n]+=s;else for(let n in y)t[f][n]-=s})}),Q.value=t}N();const P=k(!1),q=k(!1),O=k(!1),b=k(!1);let g=0;const H=k(0);async function at(){let e=Date.now();if(it()){q.value=!0;let o=Date.now();H.value=(o-e)/1e3,console.log("used time: ",H.value,"s")}}function X(e){!e||(g=e,P.value=!0)}function Z(e){if(P.value=!1,e===99){for(let t of a.value)t.position===g&&(t.position=t.id>=5?16:0,t.top=99,t.bottom=99);return}if(O.value){const t=a.value[e];t.top!==99&&(a.value[t.top].bottom=t.bottom),t.bottom!==99&&(a.value[t.bottom].top=t.top),a.value[e].position=e>=5?16:0,a.value[e].top=99,a.value[e].bottom=99}else if(g<a.value[e].position&&e<5||g>a.value[e].position&&e>=5){alert("\u4E0D\u80FD\u5F80\u56DE\u79FB\u52A8");return}nt(e,Math.abs(g-a.value[e].position)),g=0}function Y(e){e!=0&&(_.value[g+1]||_.value[g-1])||(P.value=!1,_.value[g]=e,g=0)}function vt(e){m.value.includes(e)?m.value=m.value.filter(t=>t!==e):m.value.push(e)}return(e,t)=>(i(),l(w,null,[dt(pt,{title:"\u9A86\u9A7C\u54E5\u8BA1\u7B97\u5668"}),u("div",gt,[u("div",At,[(i(),l(w,null,D(16,o=>u("div",{class:"w-24 h-24 border border-black px-2",onClick:r=>X(o-1)},[et(E(o-1?o-1:"\u8D77\u70B9")+" ",1),_.value[o-1]?(i(),l("div",{key:0,class:C(["mt-3 text-lg text-center",`text-${d[_.value[o-1]]}`])}," \u9677\u9631 "+E(h[_.value[o-1]]),3)):$("",!0)],8,xt)),64)),u("div",ht,[et(" \u7EC8\u70B9 "),_.value[16]?(i(),l("div",{key:0,class:C(["mt-3 text-lg text-center",`text-${d[_.value[16]]}`])}," \u9677\u9631 "+E(h[_.value[16]]),3)):$("",!0)]),(i(!0),l(w,null,D(a.value,(o,r)=>(i(),l("div",{class:C(["absolute left-12",`text-${d[r]}`]),style:_t({top:4.2+a.value[r].position*6-V(a.value,r)+"rem"}),onClick:v=>X(o.position)},E(p[r]),15,Et))),256))])]),u("div",wt,[u("div",{class:"absolute right-4 top-14 my-button red w-32 my-2",onClick:st},"\u6062\u590D\u521D\u59CB\u72B6\u6001"),M.value?(i(),l("div",{key:0,class:"absolute right-4 top-28 my-button black w-32 my-2",onClick:U},"\u6DF7\u4E71\u9A86\u9A7C\u6A21\u5F0F")):(i(),l("div",{key:1,class:"absolute right-4 top-28 my-button black-sub w-32 my-2",onClick:U},"\u666E\u901A\u6A21\u5F0F")),u("div",Ct,[u("div",Bt,[u("div",Dt,[u("div",{class:C(["mx-2 text-xl decoration-4 underline-offset-4",O.value&&"underline"]),onClick:t[0]||(t[0]=o=>O.value=!0)},"\u8BBE\u7F6E\u6A21\u5F0F ",2),u("div",{class:C(["mx-2 text-xl decoration-4 underline-offset-4",!O.value&&"underline"]),onClick:t[1]||(t[1]=o=>O.value=!1)},"\u524D\u8FDB\u6A21\u5F0F ",2)]),u("div",Ft,[(i(!0),l(w,null,D(j.value,o=>(i(),l("div",{class:C(["w-16 h-16 rounded-lg mb-2 mx-1",`bg-${d[o]} `+(!m.value.includes(o)&&"opacity-20")]),onClick:r=>vt(o)},null,10,$t))),256))]),u("div",{class:"my-button sub w-32 mb-2",onClick:t[2]||(t[2]=o=>q.value=!0)},"\u67E5\u770B\u7ED3\u679C"),u("div",{class:"my-button w-32",onClick:at},"\u8BA1\u7B97")])])]),q.value?(i(),l("div",mt,[u("div",Mt,[b.value?$("",!0):(i(),l("div",Tt,"\u80DC\u7387")),b.value?(i(),l("div",St,"\u51FA\u73B0\u9891\u6B21")):$("",!0),u("div",Pt,[u("div",Ot,[u("div",jt,[u("div",qt,E(b.value?z.value:""),1),(i(!0),l(w,null,D(a.value.filter(o=>o.id<5),o=>(i(),l("div",{class:C(["item",`text-${d[o.id]}`])},E(p[o.id]),3))),256))]),(i(!0),l(w,null,D(b.value?K.value:L.value,(o,r)=>(i(),l("div",zt,[u("div",Lt,"\u7B2C"+E(r+1)+"\u540D",1),(i(!0),l(w,null,D(o,v=>(i(),l("div",Nt,[u("span",{class:C([v===0&&"opacity-50 ",v===Math.max(...o)&&"text-red"])},[u("span",{class:C(!b.value&&"text-xl")},E(v.toFixed(0)),3),b.value?$("",!0):(i(),l("span",Rt,"%"))],2)]))),256))]))),256))])]),Vt,u("div",Wt,[u("div",Ht,[u("div",null,[(i(),l(w,null,D(y,o=>u("div",Yt,"\u6295\u6CE8"+E(o),1)),64))]),(i(!0),l(w,null,D(Q.value,(o,r)=>(i(),l("div",null,[(i(!0),l(w,null,D(o,v=>(i(),l("div",{class:C(["item",[v<0&&"opacity-50 ",v>1&&"text-red"]])},E(+v.toFixed(2)),3))),256))]))),256))])]),u("div",Gt," \u8BA1\u7B97\u7528\u65F6: "+E(H.value)+" s ",1),u("div",Jt,[u("div",{class:"my-button w-32",onMousedown:t[3]||(t[3]=o=>b.value=!b.value),onMouseup:t[4]||(t[4]=o=>b.value=!b.value),onTouchstart:t[5]||(t[5]=o=>b.value=!b.value),onTouchend:t[6]||(t[6]=o=>b.value=!b.value)},"\u5207\u6362\u8868\u683C ",32),u("div",{class:"my-button sub w-32",onClick:t[7]||(t[7]=o=>q.value=!1)},"\u5173\u95ED")])])])):$("",!0),P.value?(i(),l("div",Kt,[u("div",null,[Qt,u("div",Ut,[(i(!0),l(w,null,D(a.value,(o,r)=>(i(),l("div",{key:r,class:C(["square",`text-${d[r]}`]),onClick:v=>Z(r)},E(p[r]),11,Xt))),128)),u("div",{class:"square",onClick:t[8]||(t[8]=o=>Z(99))}," \u6E05\u7A7A")])]),!a.value.map(o=>o.position).includes(G(g))&&!_.value[G(g)+1]&&!_.value[G(g)-1]?(i(),l("div",Zt,[It,u("div",te,[u("div",{class:"square text-red",onClick:t[9]||(t[9]=o=>Y(2))},"\u9677\u9631 -1"),u("div",{class:"square text-green",onClick:t[10]||(t[10]=o=>Y(1))},"\u9677\u9631 +1"),u("div",{class:"square",onClick:t[11]||(t[11]=o=>Y(0))}," \u6E05\u7A7A")])])):$("",!0),u("div",ee,[u("div",{class:"my-button sub w-32",onClick:t[12]||(t[12]=o=>P.value=!1)},"\u53D6\u6D88")])])):$("",!0)],64))}});const se=yt(oe,[["__scopeId","data-v-6e950e67"]]);export{se as default};
