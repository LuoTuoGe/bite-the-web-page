import{d as vt,r as p,c as i,a as ct,b as o,F as h,e as w,f as tt,n as g,t as y,g as E,u as Q,o as s,H as rt,h as dt,p as ft,i as pt,_ as mt}from"./index.js";import{f as bt,a as xt}from"./utils.js";const R=D=>(ft("data-v-d54807e7"),D=D(),pt(),D),kt={class:"container p-4"},yt={class:"mx-auto relative"},ht=["onClick"],gt={class:"w-24 h-24 border border-black px-2"},wt=["onClick"],Ct={class:"fixed inset-y-0 right-0 2xl:right-96"},Et={class:"absolute right-4 bottom-24"},_t={class:"flex flex-col items-center"},$t={class:"flex"},jt={class:"my-10 w-56 flex flex-wrap justify-center"},qt=["onClick"],Mt={key:0,class:"fixed bottom-0 right-0 left-0 top-24 bg-back border-t border-black"},At={class:"container mx-auto"},Ft={key:0,class:"mx-6 my-2"},Dt={key:1,class:"mx-6 my-2"},Tt={class:"my-table flex justify-center"},zt={class:"border-t border-l border-black"},Ht={class:"flex"},It={class:"item"},Ot={class:"flex"},Bt={class:"item"},Gt={class:"item"},Jt={key:0,class:"text-xs"},Kt=R(()=>o("div",{class:"mx-6 my-2"},"\u5361\u724C\u6536\u76CA",-1)),Lt={class:"my-table flex justify-center"},Nt={class:"flex border-t border-l border-black"},Pt={class:"item"},Qt={class:"text-center mt-4"},Rt={class:"mt-4 flex justify-around"},Ut={key:1,class:"p-4 fixed inset-y-16 inset-x-6 bg-back shadow-lg shadow-gray-400 rounded-lg"},Vt=R(()=>o("div",{class:"text-center text-lg"},"\u9A86\u9A7C",-1)),Wt={class:"flex flex-wrap justify-center my-2"},Xt=["onClick"],Yt={key:0},Zt=R(()=>o("div",{class:"text-center text-lg"},"\u9677\u9631",-1)),St={class:"flex flex-wrap justify-center my-2"},tl={class:"absolute bottom-4 inset-x-0 flex justify-center"},ll=vt({__name:"Camel",setup(D){const j=["blue","green","red","yellow","purple","black","zinc-400"],I=["\u84DD\u9A86\u9A7C","\u7EFF\u9A86\u9A7C","\u7EA2\u9A86\u9A7C","\u9EC4\u9A86\u9A7C","\u7D2B\u9A86\u9A7C","\u9ED1\u9A86\u9A7C","\u767D\u9A86\u9A7C"],U=["","+1","-1"],q=[5,3,2],v=p([]),_=p([]),d=p([]),V=p([]),O=p(0),B=p([]),W=p([]),T=p([]),$=p(!1);function X(){$.value=!$.value,G()}function G(){v.value=[];for(let l=0;l<5;l++)v.value.push({id:l,position:0,top:99,bottom:99});T.value=[];for(let l=0;l<5;l++)T.value.push(l);$.value&&(T.value.push(5),v.value.push({id:6,position:16,top:99,bottom:99}),v.value.push({id:5,position:16,top:99,bottom:99})),_.value=[],d.value=[]}function lt(){confirm("\u786E\u5B9A\u6E05\u7A7A\u72B6\u6001\u5417\uFF1F")&&G()}function J(l,t,e,c=!1){if(t>6)return alert("\u9A86\u9A7C\u4E0D\u5B58\u5728!!!"),l;if(e===0)return l;if(t>=5&&!c){let a=t===5?6:5;l[t].top===a&&(t=a),l[t].top===99&&l[a].top<5&&(t=a)}const n=t<5?1:-1;l[t].bottom=99;for(let a of l)if(a.top===t){a.top=99;break}let r=l[t].position+e*n;if(d.value[r]===1&&(r+=n),d.value[r]===2){l[t].position=r-n;let a=t;for(;;)if(l[a].top!==99)a=l[a].top,l[a].position=l[t].position;else{for(let u=0;u<l.length;u++)if(l[u].position===l[t].position&&l[u].bottom===99&&u!==t){l[a].top=u,l[u].bottom=a;break}break}}else{l[t].position=r;for(let u=0;u<l.length;u++)if(l[u].position===l[t].position&&l[u].top===99&&u!==t){l[u].top=t,l[t].bottom=u;break}let a=t;for(;l[a].top!==99;)a=l[a].top,l[a].position=l[t].position}return l}function et(l,t){v.value=J(v.value,l,t,!0)}function ot(l){const t=l.length,e=$.value?l.length-1:l.length;if(!e)return 1;let c=1;for(let n=1;n<=t;n++)c*=n;for(let n=1;n<=e;n++)c*=3;return c*=2,c}function K(l,t){let e=0;for(;;){if(l[t].bottom===99)return e;t=l[t].bottom,e++}}function L(l){return l.sort((t,e)=>K(l,e.id)-K(l,t.id)).sort((t,e)=>e.position-t.position).map(t=>t.id).filter(t=>t<5)}function at(){const l=[1,2,3],t=[..._.value],e=$.value?t.length-1:t.length;if(e<1){alert("\u9AB0\u5B50\u4E0D\u591F");return}const c=new Array(e).fill(0),n=5,r=[];for(let a=0;a<n;a++)r.push(new Array(n).fill(0));if(t.length===0){const a=v.value.map(u=>({...u}));L(a).forEach((u,H)=>{r[H][u]+=1})}else bt(t,a=>{const u=$.value?a.slice(0,e):a;xt(l,c,H=>{let F=v.value.map(b=>({...b}));for(let b=0;b<u.length;b++){const x=u[b],k=H[b];if(F=J(F,x,k),F[x].position>15&&x<5||F[x].position<0&&x>=5)break}const S=L(F);if(!u.includes(5))S.forEach((b,x)=>{r[x][b]+=2});else{S.forEach((k,C)=>{r[C][k]+=1});let b=[...u];b[b.indexOf(5)]=6;let x=v.value.map(k=>({...k}));for(let k=0;k<b.length;k++){const C=b[k],ut=H[k];if(x=J(x,C,ut),x[C].position>15&&C<5||x[C].position<0&&C>=5)break}L(x).forEach((k,C)=>{r[C][k]+=1})}})});return V.value=r,O.value=ot(t),B.value=r.map(a=>a.map(u=>u/O.value*100)),it(),!0}function it(){const l=[];for(let t=0;t<5;t++)l.push(new Array(q.length).fill(0));B.value.forEach((t,e)=>{t.forEach((c,n)=>{const r=c/100;if(e===0)for(let a in q)l[n][a]+=q[a]*r;else if(e===1)for(let a in q)l[n][a]+=r;else for(let a in q)l[n][a]-=r})}),W.value=l}G();const M=p(!1),z=p(!1),A=p(!1),f=p(!1);let m=0;const N=p(0);async function st(){let l=Date.now();if(at()){z.value=!0;let t=Date.now();N.value=(t-l)/1e3,console.log("used time: ",N.value,"s")}}function Y(l){l&&(m=l,M.value=!0)}function Z(l){if(M.value=!1,l===99){for(let t of v.value)t.position===m&&(t.position=t.id>=5?16:0,t.top=99,t.bottom=99);return}if(A.value){const t=v.value[l];t.top!==99&&(v.value[t.top].bottom=t.bottom),t.bottom!==99&&(v.value[t.bottom].top=t.top),v.value[l].position=l>=5?16:0,v.value[l].top=99,v.value[l].bottom=99}else if(m<v.value[l].position&&l<5||m>v.value[l].position&&l>=5){alert("\u4E0D\u80FD\u5F80\u56DE\u79FB\u52A8");return}et(l,Math.abs(m-v.value[l].position)),m=0}function P(l){l!=0&&(d.value[m+1]||d.value[m-1])||(M.value=!1,d.value[m]=l,m=0)}function nt(l){_.value.includes(l)?_.value=_.value.filter(t=>t!==l):_.value.push(l)}return(l,t)=>(s(),i(h,null,[ct(rt,{title:"\u9A86\u9A7C\u54E5\u8BA1\u7B97\u5668"}),o("div",kt,[o("div",yt,[(s(),i(h,null,w(16,e=>o("div",{class:"w-24 h-24 border border-black px-2",onClick:c=>Y(e-1)},[tt(y(e-1?e-1:"\u8D77\u70B9")+" ",1),d.value[e-1]?(s(),i("div",{key:0,class:g(["mt-3 text-lg text-center",`text-${j[d.value[e-1]]}`])}," \u9677\u9631 "+y(U[d.value[e-1]]),3)):E("",!0)],8,ht)),64)),o("div",gt,[tt(" \u7EC8\u70B9 "),d.value[16]?(s(),i("div",{key:0,class:g(["mt-3 text-lg text-center",`text-${j[d.value[16]]}`])}," \u9677\u9631 "+y(U[d.value[16]]),3)):E("",!0)]),(s(!0),i(h,null,w(v.value,(e,c)=>(s(),i("div",{class:g(["absolute left-12",`text-${j[c]}`]),style:dt({top:4.2+v.value[c].position*6-K(v.value,c)+"rem"}),onClick:n=>Y(e.position)},y(I[c]),15,wt))),256))])]),o("div",Ct,[o("div",{class:"absolute right-4 top-14 my-button red w-32 my-2",onClick:lt},"\u6062\u590D\u521D\u59CB\u72B6\u6001"),$.value?(s(),i("div",{key:0,class:"absolute right-4 top-28 my-button black w-32 my-2",onClick:X},"\u6DF7\u4E71\u9A86\u9A7C\u6A21\u5F0F")):(s(),i("div",{key:1,class:"absolute right-4 top-28 my-button black-sub w-32 my-2",onClick:X},"\u666E\u901A\u6A21\u5F0F")),o("div",Et,[o("div",_t,[o("div",$t,[o("div",{class:g(["mx-2 text-xl decoration-4 underline-offset-4",A.value&&"underline"]),onClick:t[0]||(t[0]=e=>A.value=!0)},"\u8BBE\u7F6E\u6A21\u5F0F ",2),o("div",{class:g(["mx-2 text-xl decoration-4 underline-offset-4",!A.value&&"underline"]),onClick:t[1]||(t[1]=e=>A.value=!1)},"\u524D\u8FDB\u6A21\u5F0F ",2)]),o("div",jt,[(s(!0),i(h,null,w(T.value,e=>(s(),i("div",{class:g(["w-16 h-16 rounded-lg mb-2 mx-1",`bg-${j[e]} `+(!_.value.includes(e)&&"opacity-20")]),onClick:c=>nt(e)},null,10,qt))),256))]),o("div",{class:"my-button sub w-32 mb-2",onClick:t[2]||(t[2]=e=>z.value=!0)},"\u67E5\u770B\u7ED3\u679C"),o("div",{class:"my-button w-32",onClick:st},"\u8BA1\u7B97")])])]),z.value?(s(),i("div",Mt,[o("div",At,[f.value?E("",!0):(s(),i("div",Ft,"\u80DC\u7387")),f.value?(s(),i("div",Dt,"\u51FA\u73B0\u9891\u6B21")):E("",!0),o("div",Tt,[o("div",zt,[o("div",Ht,[o("div",It,y(f.value?O.value:""),1),(s(!0),i(h,null,w(v.value.filter(e=>e.id<5),e=>(s(),i("div",{class:g(["item",`text-${j[e.id]}`])},y(I[e.id]),3))),256))]),(s(!0),i(h,null,w(f.value?V.value:B.value,(e,c)=>(s(),i("div",Ot,[o("div",Bt,"\u7B2C"+y(c+1)+"\u540D",1),(s(!0),i(h,null,w(e,n=>(s(),i("div",Gt,[o("span",{class:g([n===0&&"opacity-50 ",n===Math.max(...e)&&"text-red"])},[o("span",{class:g(!f.value&&"text-xl")},y(n.toFixed(0)),3),f.value?E("",!0):(s(),i("span",Jt,"%"))],2)]))),256))]))),256))])]),Kt,o("div",Lt,[o("div",Nt,[o("div",null,[(s(),i(h,null,w(q,e=>o("div",Pt,"\u6295\u6CE8"+y(e),1)),64))]),(s(!0),i(h,null,w(W.value,(e,c)=>(s(),i("div",null,[(s(!0),i(h,null,w(e,n=>(s(),i("div",{class:g(["item",[n<0&&"opacity-50 ",n>1&&"text-red"]])},y(+n.toFixed(2)),3))),256))]))),256))])]),o("div",Qt," \u8BA1\u7B97\u7528\u65F6: "+y(N.value)+" s ",1),o("div",Rt,[o("div",{class:"my-button w-32",onMousedown:t[3]||(t[3]=e=>f.value=!f.value),onMouseup:t[4]||(t[4]=e=>f.value=!f.value),onTouchstart:t[5]||(t[5]=e=>f.value=!f.value),onTouchend:t[6]||(t[6]=e=>f.value=!f.value)},"\u5207\u6362\u8868\u683C ",32),o("div",{class:"my-button sub w-32",onClick:t[7]||(t[7]=e=>z.value=!1)},"\u5173\u95ED")])])])):E("",!0),M.value?(s(),i("div",Ut,[o("div",null,[Vt,o("div",Wt,[(s(!0),i(h,null,w(v.value,(e,c)=>(s(),i("div",{key:c,class:g(["square",`text-${j[c]}`]),onClick:n=>Z(c)},y(I[c]),11,Xt))),128)),o("div",{class:"square",onClick:t[8]||(t[8]=e=>Z(99))}," \u6E05\u7A7A")])]),!v.value.map(e=>e.position).includes(Q(m))&&!d.value[Q(m)+1]&&!d.value[Q(m)-1]?(s(),i("div",Yt,[Zt,o("div",St,[o("div",{class:"square text-red",onClick:t[9]||(t[9]=e=>P(2))},"\u9677\u9631 -1"),o("div",{class:"square text-green",onClick:t[10]||(t[10]=e=>P(1))},"\u9677\u9631 +1"),o("div",{class:"square",onClick:t[11]||(t[11]=e=>P(0))}," \u6E05\u7A7A")])])):E("",!0),o("div",tl,[o("div",{class:"my-button sub w-32",onClick:t[12]||(t[12]=e=>M.value=!1)},"\u53D6\u6D88")])])):E("",!0)],64))}}),el=mt(ll,[["__scopeId","data-v-d54807e7"]]);export{el as default};
