(()=>{var e={};e.id=374,e.ids=[374],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},1378:(e,r,s)=>{"use strict";s.r(r),s.d(r,{patchFetch:()=>b,routeModule:()=>d,serverHooks:()=>v,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var t={};s.r(t),s.d(t,{POST:()=>p});var o=s(2706),n=s(8203),i=s(5994),a=s(9187);let c=process.env.CONVERTKIT_FORM_ID,u=process.env.CONVERTKIT_API_KEY;async function p(e){try{let{email:r}=await e.json();if(console.log("Environment Variables:",{FORM_ID:process.env.CONVERTKIT_FORM_ID||"not set",API_KEY_EXISTS:!!process.env.CONVERTKIT_API_KEY,NODE_ENV:"production",email:r}),!r)return a.NextResponse.json({message:"Email is required"},{status:400});if(!c||!u)throw console.error("Missing environment variables:",{hasFormId:!!c,hasApiKey:!!u}),Error("Configuration error");let s=`https://api.convertkit.com/v3/forms/${c}/subscribe`,t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_secret:u,email:r})}),o=await t.json();if(!t.ok)throw console.error("ConvertKit Error:",o),Error(o.message||o.error||"Error subscribing to newsletter");return a.NextResponse.json({success:!0,message:"Successfully subscribed to newsletter!"})}catch(e){return console.error("Newsletter subscription error:",{name:e instanceof Error?e.name:"Unknown",message:e instanceof Error?e.message:"Unknown error",stack:e instanceof Error?e.stack:void 0}),a.NextResponse.json({success:!1,message:e instanceof Error?e.message:"Error subscribing to newsletter"},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/subscribe/route",pathname:"/api/subscribe",filename:"route",bundlePath:"app/api/subscribe/route"},resolvedPagePath:"/home/runner/work/patominer/patominer/app/api/subscribe/route.ts",nextConfigOutput:"",userland:t}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:v}=d;function b(){return(0,i.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},6487:()=>{},8335:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,452],()=>s(1378));module.exports=t})();