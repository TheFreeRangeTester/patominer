(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6938:(e,s,t)=>{Promise.resolve().then(t.bind(t,7637)),Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,5186,23)),Promise.resolve().then(t.t.bind(t,4635,23)),Promise.resolve().then(t.t.bind(t,9324,23))},7637:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(5155),r=t(2115);function n(){let[e,s]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[l,i]=(0,r.useState)(!1),o=async t=>{t.preventDefault(),i(!0),n("");try{let t=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}),a=await t.json();if(!t.ok)throw Error(a.message||"Error subscribing to newsletter");n("\xa1Thanks for subscribing!"),s("")}catch(e){n(e instanceof Error?e.message:"Error subscribing to newsletter")}finally{i(!1)}};return(0,a.jsxs)("div",{className:"bg-gray-100 p-6 rounded-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Subscribe to our newsletter!"}),(0,a.jsxs)("form",{onSubmit:o,children:[(0,a.jsx)("input",{type:"email",value:e,onChange:e=>s(e.target.value),placeholder:"Enter your email",required:!0,className:"w-full px-4 py-2 rounded bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-500"}),(0,a.jsxs)("button",{type:"submit",disabled:l,className:"mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed",children:[l?"Subscribing...":"Subscribe",(0,a.jsx)("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),t&&(0,a.jsx)("p",{className:"mt-3 text-sm text-gray-700",children:t})]})]})}},9324:()=>{},4635:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},5186:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var s=s=>e(e.s=s);e.O(0,[352,173,441,517,358],()=>s(6938)),_N_E=e.O()}]);