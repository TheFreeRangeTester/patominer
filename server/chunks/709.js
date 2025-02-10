exports.id=709,exports.ids=[709],exports.modules={3937:(e,s,t)=>{Promise.resolve().then(t.bind(t,9611))},7089:(e,s,t)=>{Promise.resolve().then(t.bind(t,6620))},5396:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},9364:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,1284,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},6620:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var r=t(5512),l=t(9254),n=t.n(l),o=t(2335),a=t.n(o);t(6080);var i=t(8531),c=t.n(i),d=t(8009);function h(){let[e,s]=(0,d.useState)(""),[t,l]=(0,d.useState)(""),[n,o]=(0,d.useState)(!1),a=async t=>{t.preventDefault(),o(!0),l("");try{let t=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}),r=await t.json();if(!t.ok)throw Error(r.message||"Error subscribing to newsletter");l("\xa1Thanks for subscribing!"),s("")}catch(e){l(e instanceof Error?e.message:"Error subscribing to newsletter")}finally{o(!1)}};return(0,r.jsxs)("div",{className:"bg-gray-100 p-4 md:p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg md:text-xl font-bold mb-4",children:"Subscribe to our newsletter!"}),(0,r.jsxs)("form",{onSubmit:a,children:[(0,r.jsx)("input",{type:"email",value:e,onChange:e=>s(e.target.value),placeholder:"Enter your email",required:!0,className:"w-full px-3 md:px-4 py-2 rounded bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"}),(0,r.jsxs)("button",{type:"submit",disabled:n,className:"w-full md:w-auto mt-3 inline-flex items-center justify-center gap-2 border-black border-2 bg-white px-4 md:px-6 py-2 md:py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed",children:[n?"Subscribing...":"Subscribe",(0,r.jsx)("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),t&&(0,r.jsx)("p",{className:"mt-3 text-sm text-gray-700",children:t})]})]})}function x(){return(0,r.jsx)("footer",{className:"bg-purple-200 text-black py-8 md:py-12",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8",children:[(0,r.jsxs)("div",{className:"text-center sm:text-left col-span-1",children:[(0,r.jsx)("h3",{className:"text-base md:text-xl font-bold mb-3 md:mb-4",children:"Sitemap"}),(0,r.jsxs)("ul",{className:"space-y-1.5 md:space-y-2 text-sm md:text-base",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/about",className:"hover:text-purple-700 transition-colors",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/workshops",className:"hover:text-purple-700 transition-colors",children:"Workshops"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/courses",className:"hover:text-purple-700 transition-colors",children:"Courses"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/consultations",className:"hover:text-purple-700 transition-colors",children:"Consultations"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/tutoring",className:"hover:text-purple-700 transition-colors",children:"Tutoring"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/talks",className:"hover:text-purple-700 transition-colors",children:"Conferences"})})]})]}),(0,r.jsxs)("div",{className:"text-center sm:text-left col-span-1",children:[(0,r.jsx)("h3",{className:"text-base md:text-xl font-bold mb-3 md:mb-4",children:"Follow us"}),(0,r.jsxs)("ul",{className:"space-y-1.5 md:space-y-2 text-sm md:text-base",children:[(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{href:"https://facebook.com",target:"_blank",className:"hover:text-purple-700 transition-colors inline-flex items-center gap-2",children:[(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})}),(0,r.jsx)("span",{children:"Facebook"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{href:"https://twitter.com",target:"_blank",className:"hover:text-purple-700 transition-colors inline-flex items-center gap-2",children:[(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})}),(0,r.jsx)("span",{children:"Twitter"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{href:"https://instagram.com",target:"_blank",className:"hover:text-purple-700 transition-colors inline-flex items-center gap-2",children:[(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),(0,r.jsx)("span",{children:"Instagram"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{href:"https://www.linkedin.com/in/patricio-m-690b3729/",target:"_blank",className:"hover:text-purple-700 transition-colors inline-flex items-center gap-2",children:[(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),(0,r.jsx)("span",{children:"LinkedIn"})]})})]})]}),(0,r.jsxs)("div",{className:"text-center sm:text-left col-span-2 md:col-span-1",children:[(0,r.jsx)("h2",{className:"text-base md:text-xl font-bold mb-3 md:mb-4",children:"Be on the loop!"}),(0,r.jsx)(h,{})]}),(0,r.jsxs)("div",{className:"text-center sm:text-left col-span-2 md:col-span-1 order-last md:order-none",children:[(0,r.jsx)("h3",{className:"text-base md:text-xl font-bold mb-3 md:mb-4",children:"Contact me"}),(0,r.jsx)("p",{className:"mb-2",children:(0,r.jsxs)(c(),{href:"mailto:patominer@gmail.com",className:"hover:text-purple-700 transition-colors inline-flex items-center gap-2",children:[(0,r.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),(0,r.jsx)("span",{children:"patominer@gmail.com"})]})})]})]}),(0,r.jsx)("div",{className:"mt-8 pt-8 border-t border-purple-300 text-center text-sm md:text-base",children:(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Patricio Miner. All rights reserved."]})})]})})}function m({children:e}){let[s,t]=(0,d.useState)(!1);return(0,r.jsx)("html",{lang:"es",children:(0,r.jsx)("body",{className:`${n().variable} ${a().variable} antialiased bg-purple-100`,children:(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)("nav",{className:"bg-white/70 backdrop-blur-sm border-b border-purple-100",children:(0,r.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(c(),{href:"/",className:"text-xl font-bold text-black",children:"Pato Miner"}),(0,r.jsx)("button",{onClick:()=>t(!s),className:"md:hidden","aria-label":"Toggle menu",children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:s?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16m-7 6h7"})})})]}),(0,r.jsxs)("div",{className:"hidden md:flex md:space-x-4",children:[(0,r.jsx)(p,{href:"https://discord.gg/placeholder",text:"Community",external:!0}),(0,r.jsx)(p,{href:"/about",text:"About me"}),(0,r.jsx)(p,{href:"/workshops",text:"Workshops"}),(0,r.jsx)(p,{href:"/courses",text:"Courses"})]}),(0,r.jsx)("div",{className:`md:hidden transition-all duration-300 ease-in-out ${s?"max-h-96 opacity-100 mt-4":"max-h-0 opacity-0 overflow-hidden"}`,children:(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(u,{href:"https://discord.gg/placeholder",text:"Community",external:!0}),(0,r.jsx)(u,{href:"/about",text:"About me"}),(0,r.jsx)(u,{href:"/workshops",text:"Workshops"}),(0,r.jsx)(u,{href:"/courses",text:"Courses"})]})})]})})}),(0,r.jsx)("main",{className:"flex-grow",children:e}),(0,r.jsx)(x,{})]})})})}function p({href:e,text:s,external:t=!1}){return(0,r.jsxs)(c(),{href:e,target:t?"_blank":void 0,rel:t?"noopener noreferrer":void 0,className:"relative px-4 py-2 group",children:[(0,r.jsx)("span",{className:"relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black",children:s}),(0,r.jsx)("span",{className:"absolute inset-0 w-full h-full bg-transparent group-hover:bg-red-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"}),(0,r.jsx)("span",{className:"absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"})]})}function u({href:e,text:s,external:t=!1}){return(0,r.jsx)(c(),{href:e,target:t?"_blank":void 0,rel:t?"noopener noreferrer":void 0,className:"block px-4 py-2 text-black hover:bg-red-300 rounded-lg transition-colors duration-300 text-right",children:s})}},9611:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/runner/work/patominer/patominer/app/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/runner/work/patominer/patominer/app/layout.tsx","default")},6080:()=>{}};