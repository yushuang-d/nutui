var h=(u,m,s)=>new Promise((p,i)=>{var F=e=>{try{d(s.next(e))}catch(o){i(o)}},t=e=>{try{d(s.throw(e))}catch(o){i(o)}},d=e=>e.done?p(e.value):Promise.resolve(e.value).then(F,t);d((s=s.apply(u,m)).next())});import{c as D}from"./mobile.91493e7d.js";import{_ as b}from"./index.17098d96.js";import{r as E,e as g,j as l,k as _,g as a,o as w,l as A}from"./vendor.d705eb26.js";const{createDemo:v}=D("uploader"),C=v({setup(){const u="https://my-json-server.typicode.com/linrufeng/demo/posts",m={custom:"test"},s=e=>new Promise(o=>{const n=new FileReader;n.onloadend=c=>o(c.target.result),n.readAsDataURL(e)}),p=e=>new Promise(o=>{const n=new Image;n.onload=()=>o(n),n.src=e}),i=(e,o,n)=>new Promise(c=>e.toBlob(r=>c(r),o,n));return{onOversize:e=>{console.log("oversize \u89E6\u53D1 \u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 50kb",e)},beforeUpload:e=>h(this,null,function*(){const o=document.createElement("canvas"),n=o.getContext("2d"),c=yield s(e[0]),r=yield p(c);o.width=r.width,o.height=r.height,n.clearRect(0,0,r.width,r.height),n.drawImage(r,0,0,r.width,r.height);let f=yield i(o,"image/jpeg",.5);return[yield new File([f],e[0].name)]}),onDelete:(e,o)=>{console.log("delete \u4E8B\u4EF6\u89E6\u53D1",e,o)},uploadUrl:u,formData:m}}}),U={class:"demo bg-w"},B=a("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),z=a("h2",null,"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",-1),O=A("\u4E0A\u4F20\u6587\u4EF6"),j=a("h2",null,"\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934\uFF08\u79FB\u52A8\u7AEF\u751F\u6548\uFF09",-1),k=a("h2",null,"\u4E0A\u4F20\u72B6\u6001",-1),y=a("h2",null,"\u9650\u5236\u4E0A\u4F20\u6570\u91CF5\u4E2A",-1),R=a("h2",null,"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F\uFF08\u6BCF\u4E2A\u6587\u4EF6\u6700\u5927\u4E0D\u8D85\u8FC7 50kb\uFF09",-1),$=a("h2",null,"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F\uFF08\u5728beforeupload\u94A9\u5B50\u4E2D\u5904\u7406\uFF09",-1),I=a("h2",null,"\u81EA\u5B9A\u4E49\u6570\u636E FormData \u3001 headers ",-1),L=a("h2",null,"\u7981\u7528\u72B6\u6001",-1);function N(u,m,s,p,i,F){const t=E("nut-uploader"),d=E("nut-button");return w(),g("div",U,[B,l(t,{url:u.uploadUrl,onStart:u.start},null,8,["url","onStart"]),z,l(t,{url:u.uploadUrl},{default:_(()=>[l(d,{type:"primary",icon:"uploader"},{default:_(()=>[O]),_:1})]),_:1},8,["url"]),j,l(t,{capture:""}),k,l(t,{url:u.uploadUrl,multiple:"",onDelete:u.onDelete},null,8,["url","onDelete"]),y,l(t,{url:u.uploadUrl,multiple:"",maximum:"5"},null,8,["url"]),R,l(t,{url:u.uploadUrl,multiple:"",maximize:1024*50,onOversize:u.onOversize},null,8,["url","onOversize"]),$,l(t,{url:u.uploadUrl,multiple:"","before-upload":u.beforeUpload,maximize:1024*50,onOversize:u.onOversize},null,8,["url","before-upload","onOversize"]),I,l(t,{url:u.uploadUrl,data:u.formData,headers:u.formData,"with-credentials":!0},null,8,["url","data","headers"]),L,l(t,{disabled:""})])}var G=b(C,[["render",N]]);export{G as default};