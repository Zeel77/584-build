(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{48501:function(e,t,a){Promise.resolve().then(a.bind(a,28967))},28967:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(57437),l=a(2265),n=a(42126),o=()=>{let[e,t]=(0,l.useState)({id:0,firstName:"",lastName:"",password:"",roleId:0,email:"",mobileNo:"",status:"",shiftDetail:""}),a=a=>{let{name:s,value:l}=a.target;t({...e,[s]:l})},o=async t=>{t.preventDefault(),console.log(e);try{let t=await n.Z.post("https://logistic-backend.azurewebsites.net/api/auth/register",e,{headers:{"Content-Type":"application/json"}});console.log(t.data)}catch(e){console.log(e)}};return(0,s.jsxs)("div",{className:"shadow-md shadow-blue-300 h-full w-full flex flex-col items-center p-2 overflow-y-scroll",children:[(0,s.jsx)("p",{className:"text-[2.5vmax] text-blue-500 font-bold",children:"Welcome to AquaOPS!"}),(0,s.jsx)("p",{className:"text-[1.3vmax] text-slate-500 mb-[3vmax]",children:"Fill out the registration form below to sign up"}),(0,s.jsxs)("form",{className:"flex flex-col w-full px-[5vmax] gap-[0.5vmax]",onSubmit:o,children:[(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"First Name"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"text",name:"firstName",value:e.firstName,onChange:a}),(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Last Name"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"text",name:"lastName",value:e.lastName,onChange:a}),(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Email"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"email",name:"email",value:e.email,onChange:a}),(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Mobile Number"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"text",name:"mobileNo",value:e.mobileNo,onChange:a}),(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Password"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"text",name:"password",value:e.password,onChange:a}),(0,s.jsx)("input",{className:"w-full bg-blue-500 self-center h-[6vh] rounded-xl text-white my-[2vmax]",type:"submit",value:"Submit"})]}),(0,s.jsx)("p",{className:"text-[1.4vmax] text-slate-400",children:"Or sign-up with another account"}),(0,s.jsxs)("div",{className:"w-full flex gap-2 justify-between px-[5vmax] my-[1vmax]",children:[(0,s.jsx)("button",{className:"bg-red-600 w-3/4 h-[5vh] text-white rounded text-[1.1vmax]",children:"Google"}),(0,s.jsx)("button",{className:"bg-blue-600 w-3/4 h-[5vh] text-white rounded text-[1.1vmax]",children:"Facebook"})]}),(0,s.jsxs)("p",{className:"text-[1.3vmax] text-slate-700 mb-[2vmax]",children:["Already have an account? ",(0,s.jsx)("span",{className:"text-blue-500 underline",children:(0,s.jsx)("a",{href:"",children:"Sign in"})})]})]})},x=a(16463),i=()=>{let e=(0,l.useRef)(),t=(0,x.useRouter)(),[a,o]=(0,l.useState)({Email:"",Password:""}),[i,m]=(0,l.useState)("");(0,l.useEffect)(()=>{},[]);let u=e=>{let{name:t,value:s}=e.target;o({...a,[t]:s})},r=async s=>{e.textConnect="Loading...",s.preventDefault(),console.log(s.target.Email.value),m(s.target.Email.value);try{let{data:e}=await n.Z.post("https://logistic-backend.azurewebsites.net/api/auth/login",a,{headers:{"Content-Type":"application/json"}});console.log(e.data);let s=e.data.token;sessionStorage.setItem("authtoken",s),sessionStorage.setItem("uname",e.data.username),200===e.status?1===e.data.userType?t.push("/admindashboard"):t.push("/home"):alert("Wrong credentials!")}catch(e){console.log(e),alert("Something went wrong!")}};return(0,s.jsxs)("div",{className:"shadow-md shadow-blue-300 h-full w-full flex flex-col items-center p-2",children:[(0,s.jsx)("p",{className:"text-[2.5vmax] text-blue-500 font-bold",children:"Welcome to AquaOPS!"}),(0,s.jsx)("p",{className:"text-[1.3vmax] text-slate-500 mb-[3vmax]",children:"Fill out the registration form below to sign up"}),(0,s.jsxs)("form",{className:"flex flex-col w-full px-[5vmax] gap-[0.5vmax]",onSubmit:r,children:[(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Email"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"email",name:"Email",value:a.email,onChange:u}),(0,s.jsx)("label",{className:"text-[1.2vmax] text-blue-500",children:"Password"}),(0,s.jsx)("input",{className:"outline-none bg-slate-100 h-[6vh] rounded-lg p-[0.7vmax]",type:"password",name:"Password",value:a.password,onChange:u}),(0,s.jsx)("button",{className:"w-full bg-blue-500 self-center h-[6vh] rounded-xl text-white my-[2vmax] cursor-pointer hover:bg-blue-600",type:"submit",children:"Submit"})]}),(0,s.jsx)("p",{className:"text-[1.4vmax] text-slate-400",children:"Or sign-in with another account"}),(0,s.jsxs)("div",{className:"w-full flex gap-2 justify-between px-[5vmax] my-[1vmax]",children:[(0,s.jsx)("button",{className:"bg-red-600 w-3/4 h-[5vh] text-white rounded text-[1.1vmax]",children:"Google"}),(0,s.jsx)("button",{ref:e,className:"bg-blue-600 w-3/4 h-[5vh] text-white rounded text-[1.1vmax]",children:"Facebook"})]}),(0,s.jsxs)("p",{className:"text-[1.3vmax] text-slate-700 mb-[2vmax]",children:["Not have an account? ",(0,s.jsx)("span",{className:"text-blue-500 underline",children:(0,s.jsx)("a",{href:"",children:"Sign Up"})})]})]})},m=()=>{let[e,t]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:"flex h-screen ",children:[(0,s.jsx)("div",{className:"w-1/2 flex justify-center items-center",children:(0,s.jsx)("img",{src:"logo.png",alt:"",className:"w-[30vmax] h-[20vmax]"})}),(0,s.jsxs)("div",{className:"w-1/2 flex flex-col justify-center items-center p-[4vmax] ",children:[(0,s.jsxs)("div",{className:"w-full flex justify-between ",children:[(0,s.jsx)("button",{className:"".concat(e?"bg-slate-100 text-slate-500":"bg-blue-500 shadow-sm shadow-blue-300 text-white"," w-1/2 h-[7vh]  text-[1.1vmax] "),onClick:()=>{t(!1)},children:"Sign-Up"}),(0,s.jsx)("button",{className:"".concat(e?"bg-blue-500 shadow-sm shadow-blue-300 text-white":"bg-slate-100 text-slate-500"," w-1/2 h-[7vh] text-[1.1vmax]"),onClick:()=>{t(!0)},children:"Sign-In"})]}),e?(0,s.jsx)(i,{}):(0,s.jsx)(o,{})]})]})}},16463:function(e,t,a){"use strict";var s=a(71169);a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}}),a.o(s,"useSearchParams")&&a.d(t,{useSearchParams:function(){return s.useSearchParams}})}},function(e){e.O(0,[126,971,23,744],function(){return e(e.s=48501)}),_N_E=e.O()}]);