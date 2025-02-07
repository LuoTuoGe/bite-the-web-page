import{d as A,r as i,j as f,c as p,a as S,b as a,F as h,e as B,t as c,o as y,H as F,n as k,h as H,p as I,i as L,_ as q}from"./index-DW-Kapye.js";import{s as z}from"./utils-CkGa03O8.js";const l=[{id:1,name:"\u65B0\u624B",series:"\u57FA\u7840",lands:[5,4,4,6,2,5,4,6,3,2,2,5,6,3,3,2,2,4,1,4,4,4,1,1,3,5,4,4,1,3,4,5,2,3,4,4,5]},{id:2,name:"\u504F\u8FDC\u57CE\u5821",series:"\u57FA\u7840",lands:[1,3,4,2,6,4,5,4,2,4,4,5,4,2,4,3,4,4,1,2,4,1,3,5,5,3,3,6,3,2,2,4,4,1,6,5,5]},{id:3,name:"\u77E5\u8BC6\u4E4B\u73AF",series:"\u57FA\u7840",lands:[4,4,1,4,4,4,4,2,2,5,6,3,3,6,5,2,5,3,1,3,6,4,2,1,3,3,4,1,2,5,5,4,4,2,5,4,4]},{id:4,name:"\u91CD\u5EFA",series:"\u57FA\u7840",lands:[2,4,4,5,4,2,1,6,4,2,2,2,3,4,3,1,2,4,3,4,3,1,4,4,5,3,4,4,5,5,1,6,3,4,5,6,5]},{id:5,name:"\u4E09\u80DE\u80CE",series:"\u57FA\u7840",lands:[4,3,4,3,4,4,1,2,3,2,1,2,2,4,4,2,2,3,3,3,1,6,4,4,5,1,5,5,4,6,5,4,4,5,6,5,4]},{id:6,name:"\u4E00\u6761\u5927\u6CB3\u6CE2\u6D6A\u5BBD",series:"\u57FA\u7840",lands:[3,3,3,1,2,4,4,6,2,3,2,4,4,2,2,3,4,6,1,6,2,1,3,4,5,5,5,5,1,5,4,4,4,5,4,4,4]},{id:7,name:"\u4E2D\u5FC3\u57CE",series:"\u57FA\u7840",lands:[5,4,4,5,5,3,3,5,1,3,6,4,4,6,1,3,2,4,4,4,3,3,1,2,4,4,2,4,1,2,6,2,4,5,5,2,4]},{id:8,name:"\u5916\u57CE\u533A",series:"\u57FA\u7840",lands:[5,5,4,4,4,2,2,1,5,4,3,3,2,2,4,4,1,6,6,6,1,4,4,3,3,2,2,4,5,1,3,3,4,4,4,5,5]},{id:9,name:"\u53CC\u5B50\u57CE",series:"\u57FA\u7840",lands:[1,5,3,6,4,3,5,4,1,4,4,3,3,4,4,4,4,2,6,6,4,4,4,2,2,5,4,2,1,2,5,1,2,3,5,5,3]},{id:10,name:"\u5927\u57CE\u5E02",series:"\u57FA\u7840",lands:[4,3,4,1,2,4,3,4,5,2,2,4,6,6,5,5,5,2,4,3,3,1,4,4,4,4,6,5,2,2,3,3,5,1,4,4,1]},{id:11,name:"\u76AE\u6761\u57CE",series:"\u4E00\u6269",lands:[1,5,5,5,3,4,2,5,4,3,3,4,2,1,4,4,3,5,4,3,6,4,4,1,5,4,3,6,4,2,2,4,6,4,2,2,1]},{id:12,name:"\u53D8\u5316",series:"\u4E00\u6269",lands:[5,5,3,3,5,1,3,3,1,4,6,5,4,4,4,2,4,6,2,4,3,4,2,4,1,5,3,4,2,2,4,5,1,2,4,4,6]},{id:13,name:"\u77E5\u8BC6\u516C\u56ED",series:"\u4E00\u6269",lands:[1,4,4,5,6,2,6,5,5,6,4,4,1,4,4,4,1,3,2,5,5,5,4,3,3,2,2,2,3,3,3,2,4,4,4,1,4]},{id:14,name:"\u56DB\u4EBA\u5E2E",series:"\u4E00\u6269",lands:[3,3,3,3,4,4,4,1,4,4,2,2,2,5,4,6,1,2,3,3,1,5,4,6,6,2,4,5,4,1,2,4,5,5,4,4,5]},{id:15,name:"\u5927\u90FD\u4F1A",series:"\u4E00\u6269",lands:[5,5,3,3,5,2,5,1,3,1,2,6,6,4,4,6,3,4,4,5,4,4,3,4,4,4,5,1,3,4,4,4,2,1,2,2,2]},{id:16,name:"\u4E09\u6E56\u95F4",series:"\u4E00\u6269",lands:[4,4,1,5,3,4,6,4,5,1,4,6,5,4,4,4,3,3,6,5,4,1,4,3,3,1,2,2,4,3,2,5,2,4,2,2,5]},{id:17,name:"\u4E2D\u592E\u516C\u56ED",series:"\u4E00\u6269",lands:[4,5,4,4,4,4,5,4,3,5,5,1,5,1,4,3,5,2,6,2,6,4,3,4,2,2,6,3,1,4,2,2,3,4,4,1,3]},{id:18,name:"\u5821\u76F8\u8FDE",series:"\u4E00\u6269",lands:[6,5,3,3,2,6,5,3,3,4,2,6,1,2,2,4,4,2,1,3,2,4,4,1,1,4,3,4,4,5,5,4,4,4,5,5,4]},{id:19,name:"2013\u51A0\u519B\u8054\u8D5B\u5730\u56FE",series:"\u51A0\u519B\u8054\u8D5B",lands:[3,3,4,1,1,3,4,2,4,2,2,4,4,4,4,4,2,6,5,3,3,5,2,2,5,5,4,1,4,3,6,4,5,1,6,4,5]},{id:20,name:"2016\u51A0\u519B\u8054\u8D5B\u5730\u56FE",series:"\u51A0\u519B\u8054\u8D5B",lands:[5,4,4,4,3,5,5,1,5,1,3,2,4,5,5,4,4,2,4,2,4,3,4,4,6,3,2,4,4,6,3,2,1,1,6,3,2]},{id:21,name:"\u5317\u90E8\u77FF\u533A",series:"\u7279\u522B\u5178\u85CF\u7248(\u65B0)",lands:[4,5,3,3,4,4,2,4,5,1,4,1,2,4,3,1,4,4,2,3,3,5,6,4,3,4,1,5,6,6,4,4,2,5,5,2,2]},{id:22,name:"\u5357\u90E8\u730E\u533A",series:"\u7279\u522B\u5178\u85CF\u7248(\u65B0)",lands:[4,4,5,5,4,4,3,1,5,3,5,6,2,2,2,3,1,4,6,3,1,2,3,4,4,6,3,2,4,1,5,5,2,4,4,4,4]},{id:23,name:"\u4E09\u89D2\u5F62",series:"\u54E8\u6240\u6269",lands:[4,4,1,6,5,5,5,5,5,3,2,4,4,3,2,1,3,4,4,4,2,4,4,3,4,4,2,1,4,3,5,2,6,1,3,2,6]},{id:24,name:"\u516D\u80DE\u80CE",series:"\u54E8\u6240\u6269",lands:[1,5,5,4,4,5,5,2,1,4,6,5,5,2,4,4,6,6,2,2,2,4,4,3,2,3,3,4,4,3,3,3,1,1,4,4,4]},{id:25,name:"\u57CE\u5821\u7586\u754C",series:"\u54E8\u6240\u6269",lands:[3,3,5,5,4,4,3,4,4,6,4,4,3,4,4,1,2,1,6,1,3,1,4,4,2,5,5,6,4,4,2,5,5,3,2,2,2]},{id:26,name:"\u955C",series:"\u54E8\u6240\u6269",lands:[2,2,4,1,5,2,4,4,4,5,5,6,2,2,3,5,5,5,6,2,3,1,1,3,4,6,4,4,1,4,4,3,3,4,4,4,3]},{id:27,name:"\u996E\u6C34\u6C60",series:"\u54E8\u6240\u6269",lands:[2,2,2,2,1,2,5,5,1,3,3,2,5,5,1,6,4,4,3,4,4,4,6,4,3,4,4,4,3,5,5,4,4,3,4,1,6]},{id:28,name:"\u5404\u5B88\u4E00\u65B9",series:"\u54E8\u6240\u6269",lands:[1,3,3,2,5,4,4,4,2,3,4,4,6,1,2,4,3,4,6,2,3,2,4,1,6,2,5,3,4,4,4,5,5,5,5,4,1]},{id:29,name:"\u57CE\u4E61\u7ED3\u5408\u90E8",series:"\u54E8\u6240\u6269",lands:[5,2,6,2,4,5,2,2,3,4,1,4,4,1,3,4,2,4,1,3,4,6,4,2,3,3,5,3,6,4,1,4,5,5,4,4,5]},{id:30,name:"\u4E2D\u592E\u8D70\u5ECA",series:"\u54E8\u6240\u6269",lands:[1,4,4,6,2,5,4,4,2,5,4,1,4,3,5,5,4,4,2,3,3,6,5,3,4,2,4,4,3,3,4,2,1,6,5,1,2]}],D=d=>(I("data-v-a76955b1"),d=d(),L(),d),G={class:"mx-auto mt-16 w-80 h-80 flex justify-center items-center"},J={class:"relative"},K=D(()=>a("div",{class:"hexagon left-0 top-0"},null,-1)),N=["onClick"],O={CLASS:"flex flex-col items-center mt-4"},P={class:"text-3xl"},Q={class:"mt-1"},R={class:"text-4xl"},T={class:"mt-1 text-xl text-gray"},U={class:"flex justify-center mt-6"},u=30,w=1.73205,V=A({__name:"Burgundy",setup(d){const v=[],C=[6,2,6,3,5,1,5,1,4,2,4,2,4,2,1,6,1,3,6,3,5,3,5,6,1,5,1,6,4,5,2,4,2,3,4,3,1],E=i(1),_=[{name:"\u672A\u77E5",color:"bg-[#EEE]"},{name:"\u57CE\u5821",color:"bg-red"},{name:"\u7267\u573A",color:"bg-green"},{name:"\u4FEE\u9053\u9662",color:"bg-amber-300"},{name:"\u5EFA\u7B51",color:"bg-yellow"},{name:"\u6E2F\u53E3",color:"bg-blue"},{name:"\u77FF\u4E95",color:"bg-gray"}];for(let s=-3;s<=3;s++)for(let e=-3;e<=3;e++)Math.abs(s+e)<=3&&v.push([s,e]);const r=f(new Array(37).fill(0)),b=i(0),x=i(""),g=i(""),n=i(1),t=s=>{let e;s>l.length?(e=l[0],n.value=1):s<1?(e=l[l.length-1],n.value=l.length):(e=l[s-1],n.value=s),b.value=e.id,x.value=e.name,g.value=e.series,r.splice(0,r.length,...e.lands)},j=async()=>{for(let s=0;s<10;s++)t(Math.floor(Math.random()*l.length)+1),await z(25)};t(1);const M=(s,e)=>({left:u*w*s+u*w*e/2+"px",top:u/2*3*e+"px"});return f([]),(s,e)=>(y(),p(h,null,[S(F,{title:""}),a("div",G,[a("div",J,[K,(y(),p(h,null,B(v,(m,o)=>a("div",{class:k(["hexagon",[_[r[o]].color||"[#EEE]"]]),style:H(M(m[0],m[1])),onClick:$=>r[o]=E.value},[a("span",{class:k("dice dice-"+C[o])},null,2)],14,N)),64))])]),a("div",O,[a("span",P,c(b.value),1),a("div",Q,[a("span",R,c(x.value),1)]),a("div",T,c(g.value),1)]),a("div",U,[a("div",{class:"mx-6 w-28 my-button black-sub",onClick:e[0]||(e[0]=m=>t(n.value-1))},"\u4E0A\u4E00\u5F20"),a("div",{class:"mx-6 w-28 my-button black-sub",onClick:e[1]||(e[1]=m=>t(n.value+1))},"\u4E0B\u4E00\u5F20")]),a("div",{class:"mx-auto mt-4 w-28 my-button black",onClick:j},"\u968F\u4E00\u4E2A")],64))}}),Y=q(V,[["__scopeId","data-v-a76955b1"]]);export{Y as default};
