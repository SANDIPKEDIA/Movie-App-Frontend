"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[537],{537:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var r=a(43),t=a(401),l=a(168),n=a(216),i=a(61),c=a(579);const o=()=>{const[e,s]=(0,r.useState)(""),a=(0,n.Zp)(),[o,m]=(0,r.useState)(!1),d=()=>{m(!o),s("")};return(0,c.jsx)("div",{className:"main backdrop",children:(0,c.jsx)("div",{className:"backdrop-overlay main d-flex align-items-center justify-content-center",children:(0,c.jsx)("div",{className:"card w-600p",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title main-text-primary",children:o?"Create New Account":"Login"}),(0,c.jsxs)("form",{onSubmit:o?a=>{a.preventDefault();const r=JSON.parse(localStorage.getItem("userList"))||[];if(r.includes(e))t.oR.error(i.A.USEREXISTS);else{const a=[...r,e];localStorage.setItem("userList",JSON.stringify(a)),t.oR.success(i.A.REGISTERED),s(""),m(!1)}}:r=>{r.preventDefault();(JSON.parse(localStorage.getItem("userList"))||[]).includes(e)?(localStorage.setItem("LoggedInUser",e),t.oR.success(i.A.LOGIN),s(""),a(l.A.HOME)):t.oR.error(i.A.USERNOTEXISTS)},children:[(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,c.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:e,minLength:4,onChange:e=>{s(e.target.value)},placeholder:"Enter your email address"}),(0,c.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),(0,c.jsx)("div",{className:"mb-3 text-center",children:o?(0,c.jsxs)("p",{children:["Already have an account?\xa0",(0,c.jsx)("span",{className:"text-primary",style:{cursor:"pointer"},onClick:d,children:"Login"})]}):(0,c.jsxs)("p",{children:["Don't have an account?"," ",(0,c.jsx)("span",{className:"text-primary",style:{cursor:"pointer"},onClick:d,children:"Create New Account"})]})}),(0,c.jsx)("div",{className:"d-flex justify-content-end gap-2",children:(0,c.jsx)("button",{type:"submit",className:"btn main-btn-primary",children:o?"Sign Up":"Login"})})]})]})})})})}}}]);
//# sourceMappingURL=537.bd55fa4c.chunk.js.map