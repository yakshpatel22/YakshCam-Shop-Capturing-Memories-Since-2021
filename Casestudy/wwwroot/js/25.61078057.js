"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[25],{5572:(e,t,s)=>{s.d(t,{C:()=>n,_:()=>r});const a="/api/",r=async e=>{let t,s=o();try{let r=await fetch(`${a}${e}`,{method:"GET",headers:s});t=await r.json()}catch(r){console.log(r),t={error:`Error has occured: ${r.message}`}}return t},n=async(e,t)=>{let s,r=o();try{let n=await fetch(`${a}${e}`,{method:"POST",headers:r,body:JSON.stringify(t)});s=await n.json()}catch(n){s=n}return s},o=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},1025:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(9835),r=s(6970);const n=(0,a._)("div",{class:"text-h4 text-center q-mt-md q-mb-md"},"Login",-1),o={class:"text-center q-mt-lg"},l=["src"],i={class:"text-title2 text-center text-positive text-bold q-mt-sm"};function d(e,t,s,d,u,m){const c=(0,a.up)("q-input"),p=(0,a.up)("q-btn"),g=(0,a.up)("q-form"),w=(0,a.up)("q-card"),h=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("div",o,[(0,a._)("img",{src:"/img/logo.png",width:"250",height:"175"},null,8,l)]),(0,a._)("div",i,(0,r.zw)(d.state.status),1),(0,a.Wm)(w,{class:"q-ma-md q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{ref:"myForm",class:"q-gutter-md",greedy:"",onSubmit:d.login,onReset:d.resetFields},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{outlined:"",placeholder:"enter email address",id:"email",modelValue:d.state.email,"onUpdate:modelValue":t[0]||(t[0]=e=>d.state.email=e),rules:[d.isRequired,d.isValidEmail]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{outlined:"",placeholder:"enter password",id:"password",type:"password",modelValue:d.state.password,"onUpdate:modelValue":t[1]||(t[1]=e=>d.state.password=e),rules:[d.isRequired],autocomplete:"on"},null,8,["modelValue","rules"]),(0,a.Wm)(p,{label:"Login",type:"submit"}),(0,a.Wm)(p,{label:"Reset",type:"reset"})])),_:1},8,["onSubmit","onReset"])])),_:1}),(0,a.Wm)(h)],64)}var u=s(499),m=s(5572),c=s(8910);const p={setup(){const e=(0,c.tv)(),t=(0,c.yj)();let s=(0,u.qj)({status:"",email:"e@here.com",password:"Abc1234?"});const a=e=>{const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},r=e=>!!e||"field is required",n=async()=>{s.status="logging into server";let a={firstname:s.firstname,lastname:s.lastname,email:s.email,password:s.password};try{await sessionStorage.removeItem("customer");let r=await(0,m.C)("login",a);-1!==r.token.indexOf("failed")?s.status=r.token:(s.status="logged in",await sessionStorage.setItem("customer",JSON.stringify(r)),t.query.nextUrl?e.push(t.query.nextUrl):e.push({path:"/"}))}catch(r){s.status=r.message}},o=()=>{s.firstname="",s.lastname="",s.email="",s.password="",s.status=""};return{state:s,login:n,isValidEmail:a,isRequired:r,resetFields:o}}};var g=s(1639),w=s(4458),h=s(8326),y=s(6611),f=s(4455),q=s(9984),b=s.n(q);const v=(0,g.Z)(p,[["render",d]]),x=v;b()(p,"components",{QCard:w.Z,QForm:h.Z,QInput:y.Z,QBtn:f.Z})}}]);