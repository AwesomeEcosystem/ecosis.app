import{d as w,r as d,q as y,g as u,k as t,F as g,s as k,l as m,w as v,v as f,t as e,x as c,o as _,y as b}from"./index-4b0acb29.js";import{u as C}from"./wallet-b6ed79f6.js";const B={class:"flex flex-col justify-start h-auto"},S={class:"stats stats-vertical lg:stats-horizontal bg-base-100 card text-primary-content shadow h-auto"},F={class:"stats stats-vertical overflow-scroll"},T={class:"stat"},V=t("div",{class:"stat-title"},"Balance",-1),z={class:"stat-value w-full flex flex-wrap justify-between"},A={class:"!text-gray-300 mr-2 !font-normal"},E={class:"stat-actions"},M={class:"stat-actions"},W=["onClick"],$={id:"my_modal_5",class:"modal modal-bottom sm:modal-middle"},j={method:"dialog",class:"modal-box"},D={class:"form-control w-full"},N=t("label",{class:"label"},[t("span",{class:"label-text"},"Amount")],-1),U={class:"form-control w-full"},Y=t("label",{class:"label"},[t("span",{class:"label-text"},"Receiver")],-1),Z={class:"flex flex-col w-full text-gray-500 italic pt-2"},q={class:"modal-action"},L=t("button",{class:"btn"},"Close",-1),J=w({__name:"Wallet",setup(R){const o=d(0),n=d(""),a=d({name:"",fee:0,balance:0}),p=i=>i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),r=C(),h=i=>{a.value=i},x=()=>{p(n.value)&&r.transfer(n.value,o.value,a.value)};return y(async()=>{await r.fetchWallets()}),(i,l)=>(_(),u("main",null,[t("section",B,[t("div",S,[t("div",F,[(_(!0),u(g,null,k(m(r).tokens,s=>(_(),u("div",T,[V,t("div",z,[t("span",A,e(s.symbol),1),c(e(m(b)(s.balance.toFixed(3)||0)),1)]),t("div",E,[t("div",M,[t("button",{class:"btn btn-sm btn-primary w-full",onclick:"my_modal_5.showModal()",onClick:G=>h(s)},"Send",8,W)])])]))),256)),t("dialog",$,[t("form",j,[t("div",D,[N,v(t("input",{type:"number",placeholder:"20",class:"input input-bordered w-full bg-base-300","onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s)},null,512),[[f,o.value]])]),t("div",U,[Y,v(t("input",{type:"text",placeholder:"Enter e-mail address ",class:"input input-bordered w-full bg-base-300","onUpdate:modelValue":l[1]||(l[1]=s=>n.value=s)},null,512),[[f,n.value]])]),t("div",Z,[t("span",null,"Transaction Fee: "+e(a.value.fee),1),t("span",null,[c("You are about to send "),t("b",null,e(o.value)+" "+e(a.value.name),1),c(" to "+e(n.value),1)]),t("span",null,[c("You will have "),t("b",null,e(m(b)(a.value.balance-o.value-a.value.fee))+" "+e(a.value.name),1),c(" left")])]),t("div",q,[t("button",{class:"btn btn-success",onClick:l[2]||(l[2]=s=>x())},"Send"),L])])])])])])]))}});export{J as default};
