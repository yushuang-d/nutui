import{c as l}from"./mobile.70c3a3a4.js";import{a as e,s as a,x as n,r as t,o as s,c as u,f as o,q as c}from"./vendor.91b30fe3.js";import"./index.644dcea4.js";const{createDemo:d}=l("rate"),r=d({setup(){const l=e({val:4,val2:2,result:"",result2:""});return{state:l,onClick:e=>{l.result="您点击了第"+e+"个!"}}}}),v=c("data-v-e917fe00");a("data-v-e917fe00");const i={class:"demo"},h=o("h2",null,"基本用法",-1),f=o("h2",null,"自定义图标",-1),m=o("h2",null,"自定义数量",-1),p=o("h2",null,"自定义颜色",-1),k=o("h2",null,"禁用状态",-1),C=o("h2",null,"只读状态",-1),b=o("h2",null,"监听 change 事件",-1);n();const j=v(((l,e,a,n,c,d)=>{const r=t("nut-rate");return s(),u("div",i,[h,o("div",null,[o(r,{value:l.state.val,"onUpdate:value":e[1]||(e[1]=e=>l.state.val=e)},null,8,["value"])]),f,o("div",null,[o(r,{checkedIcon:"heart-fill1",uncheckedIcon:"heart"})]),m,o("div",null,[o(r,{total:6})]),p,o("div",null,[o(r,{activeColor:"#FFC800"})]),k,o("div",null,[o(r,{disabled:!0})]),C,o("div",null,[o(r,{value:2,readOnly:!0})]),b,o("div",null,[o(r,{onClick:l.onClick},null,8,["onClick"])])])}));r.render=j,r.__scopeId="data-v-e917fe00";export default r;