import{c as t}from"./mobile.b4c555b8.js";import{r as e,o as l,c as n,f as i,i as d,j as a}from"./vendor.ed841bd5.js";import"./index.97d10053.js";const{createDemo:o}=t("steps");var u=o({props:{},setup:()=>({})});const c={class:"demo"},r=i("h2",null,"基本用法",-1),s=a("1"),f=a("2"),p=a("3"),_=a("4"),h=i("h2",null,"标题和描述信息",-1),m=a("1"),v=i("h2",null,"自定义图标",-1),x=a("1"),g=a("2"),b=a("3"),j=i("h2",null,"竖向步骤条",-1),y={style:{height:"300px",padding:"0 20px"}},w=a("1"),D=a("2"),k=a("3"),q={style:{height:"300px",padding:"0 20px"}},z=a("1"),A=a("2"),B=a("3");u.render=function(t,a,o,u,C,E){const F=e("nut-step"),G=e("nut-steps");return l(),n("div",c,[r,i(G,{current:"1"},{default:d((()=>[i(F,{title:"进行中"},{default:d((()=>[s])),_:1}),i(F,{title:"未开始"},{default:d((()=>[f])),_:1}),i(F,{title:"未开始"},{default:d((()=>[p])),_:1}),i(F,{title:"未开始"},{default:d((()=>[_])),_:1})])),_:1}),h,i(G,{current:"2"},{default:d((()=>[i(F,{title:"已完成",content:"步骤描述"},{default:d((()=>[m])),_:1}),i(F,{title:"进行中",content:"步骤描述"}),i(F,{title:"未开始",content:"步骤描述"})])),_:1}),v,i(G,{current:"1"},{default:d((()=>[i(F,{title:"已完成",icon:"notice"},{default:d((()=>[x])),_:1}),i(F,{title:"进行中",icon:"notice"},{default:d((()=>[g])),_:1}),i(F,{class:"nut-step-wait",title:"未开始",icon:"notice"},{default:d((()=>[b])),_:1})])),_:1}),j,i("div",y,[i(G,{direction:"vertical",current:"2"},{default:d((()=>[i(F,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:d((()=>[w])),_:1}),i(F,{title:"进行中",content:"您的订单正在配送途中"},{default:d((()=>[D])),_:1}),i(F,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:d((()=>[k])),_:1})])),_:1})]),i("div",q,[i(G,{direction:"vertical","progress-dot":"",current:"2"},{default:d((()=>[i(F,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:d((()=>[z])),_:1}),i(F,{title:"进行中",content:"您的订单正在配送途中"},{default:d((()=>[A])),_:1}),i(F,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:d((()=>[B])),_:1})])),_:1})])])};export default u;