import{c as t}from"./mobile.9df57ac7.js";import{a as s,r as o,o as i,c as e,f as l,i as n,j as a}from"./index.bd4b4460.js";const{createDemo:h}=t("popup");var p=h({props:{},setup:()=>({state:s({showBasic:!1,showTop:!1,showBottom:!1,showLeft:!1,showRight:!1,showIcon:!1,showIconPosition:!1,showCloseIcon:!1,showRound:!1,showCombination:!1})})});const c={class:"demo"},b=l("h2",null,"基础用法",-1),w=a("正文"),v=l("h2",null,"弹出位置",-1),d=l("h2",null,"关闭图标",-1),u=l("h2",null,"圆角弹框",-1),k=l("h2",null,"指定挂载节点",-1),r=a("app");p.render=function(t,s,a,h,p,m){const f=o("nut-cell"),g=o("nut-popup");return i(),e("div",c,[b,l(f,{title:"展示弹出层","is-link":"",onClick:s[1]||(s[1]=s=>t.state.showBasic=!0)}),l(g,{"pop-class":"popclass",style:{padding:"30px 50px"},visible:t.state.showBasic,"onUpdate:visible":s[2]||(s[2]=s=>t.state.showBasic=s),"z-index":100},{default:n((()=>[w])),_:1},8,["visible"]),v,l(f,{title:"顶部弹出","is-link":"",onClick:s[3]||(s[3]=s=>t.state.showTop=!0)}),l(g,{position:"top",style:{height:"20%"},visible:t.state.showTop,"onUpdate:visible":s[4]||(s[4]=s=>t.state.showTop=s)},null,8,["visible"]),l(f,{title:"底部弹出","is-link":"",onClick:s[5]||(s[5]=s=>t.state.showBottom=!0)}),l(g,{position:"bottom",style:{height:"20%"},visible:t.state.showBottom,"onUpdate:visible":s[6]||(s[6]=s=>t.state.showBottom=s)},null,8,["visible"]),l(f,{title:"左侧弹出","is-link":"",onClick:s[7]||(s[7]=s=>t.state.showLeft=!0)}),l(g,{position:"left",style:{width:"20%",height:"100%"},visible:t.state.showLeft,"onUpdate:visible":s[8]||(s[8]=s=>t.state.showLeft=s)},null,8,["visible"]),l(f,{title:"右侧弹出","is-link":"",onClick:s[9]||(s[9]=s=>t.state.showRight=!0)}),l(g,{position:"right",style:{width:"20%",height:"100%"},visible:t.state.showRight,"onUpdate:visible":s[10]||(s[10]=s=>t.state.showRight=s)},null,8,["visible"]),d,l(f,{title:"关闭图标","is-link":"",onClick:s[11]||(s[11]=s=>t.state.showIcon=!0)}),l(g,{position:"bottom",closeable:"",style:{height:"20%"},visible:t.state.showIcon,"onUpdate:visible":s[12]||(s[12]=s=>t.state.showIcon=s)},null,8,["visible"]),l(f,{title:"图标位置","is-link":"",onClick:s[13]||(s[13]=s=>t.state.showIconPosition=!0)}),l(g,{position:"bottom",closeable:"","close-icon-position":"top-left",style:{height:"20%"},visible:t.state.showIconPosition,"onUpdate:visible":s[14]||(s[14]=s=>t.state.showIconPosition=s)},null,8,["visible"]),l(f,{title:"自定义图标","is-link":"",onClick:s[15]||(s[15]=s=>t.state.showCloseIcon=!0)}),l(g,{position:"bottom",closeable:"","close-icon-position":"top-left","close-icon":"heart",style:{height:"20%"},visible:t.state.showCloseIcon,"onUpdate:visible":s[16]||(s[16]=s=>t.state.showCloseIcon=s)},null,8,["visible"]),u,l(f,{title:"圆角弹框","is-link":"",onClick:s[17]||(s[17]=s=>t.state.showRound=!0)}),l(g,{position:"bottom",closeable:"",round:"",style:{height:"30%"},visible:t.state.showRound,"onUpdate:visible":s[18]||(s[18]=s=>t.state.showRound=s)},null,8,["visible"]),k,l(f,{title:"指定挂载节点","is-link":"",onClick:s[19]||(s[19]=s=>t.state.showTeleport=!0)}),l(g,{style:{padding:"30px 50px"},teleport:"#app",visible:t.state.showTeleport,"onUpdate:visible":s[20]||(s[20]=s=>t.state.showTeleport=s)},{default:n((()=>[r])),_:1},8,["visible"])])};export default p;
