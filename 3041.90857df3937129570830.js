"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3041],{51133:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>P,AuthPassword:()=>b,AuthRegister:()=>w});var a=n(60748),r=n(33555),o=n(60782),s=n(97184),l=n(32340),i=n(46590),c=n(59107),u=n(83716),d=n(47348),m=n(42797),h=n(97799);const g=(0,a.X$)((({code:e,codeLength:t,trackingDirection:n,isTracking:r,isBig:o})=>{const[s,l]=(0,a.eJ)(!1),{isMobile:i}=(0,m.ZP)(),c=165/t,g=i?u.qpg:u.z7m,p=(0,a.I4)((()=>l(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:o?"big":""},!s&&a.ZP.createElement("div",{className:"monkey-preview"}),a.ZP.createElement(h.Z,{size:o?u.K2q:g,className:r?"hidden":void 0,tgsUrl:d.l.MonkeyIdle,play:!r,onLoad:p}),a.ZP.createElement(h.Z,{size:o?u.K2q:g,className:r?"shown":"hidden",tgsUrl:d.l.MonkeyTracking,playSegment:r?function(){const a=e&&e.length>1||n<0?15+c*(e.length-1):0,r=e.length===t?180:15+c*e.length;return n<1?[r,a]:[a,r]}():void 0,speed:2,noLoop:!0}))}));var p=n(97687),Z=n(34288);const P=(0,a.X$)((0,r.c$)((e=>(0,o.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:n,authError:o})=>{const{setAuthCode:u,returnToAuthPhoneNumber:d,clearAuthError:m}=(0,r.Sv)(),h=(0,c.Z)(),P=(0,a.sO)(null),[v,E]=(0,a.eJ)(""),[b,f]=(0,a.eJ)(!1),[N,w]=(0,a.eJ)(1);(0,a.d4)((()=>{s.$b||P.current.focus()}),[]),(0,i.Z)({isActive:!0,onBack:d});const y=(0,a.I4)((e=>{o&&m();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==v&&(E(t.value),b?t.value.length||f(!1):f(!0),v&&v.length>t.value.length?w(-1):w(1),5===t.value.length&&u({code:t.value}))}),[o,m,v,b,u]);return a.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(g,{code:v,codeLength:5,isTracking:b,trackingDirection:N}),a.ZP.createElement("h1",null,e,a.ZP.createElement("div",{className:"auth-number-edit div-button",onClick:function(){d()},role:"button",tabIndex:0,title:h("WrongNumber"),"aria-label":h("WrongNumber")},a.ZP.createElement("i",{className:"icon icon-edit"}))),a.ZP.createElement("p",{className:"note"},(0,l.Z)(h(t?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),a.ZP.createElement(p.Z,{ref:P,id:"sign-in-code",label:h("Code"),onInput:y,value:v,error:o&&h(o),autoComplete:"off",inputMode:"numeric"}),n&&a.ZP.createElement(Z.Z,null)))})));var v=n(99364),E=n(93490);const b=(0,a.X$)((0,r.c$)((e=>(0,o.ei)(e,["authIsLoading","authError","authHint"])))((({authIsLoading:e,authError:t,authHint:n})=>{const{setAuthPassword:o,clearAuthError:s}=(0,r.Sv)(),l=(0,c.Z)(),[i,u]=(0,a.eJ)(!1),d=(0,a.I4)((e=>{u(e)}),[]),m=(0,a.I4)((e=>{o({password:e})}),[o]);return a.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(E.Z,{isPasswordVisible:i}),a.ZP.createElement("h1",null,l("Login.Header.Password")),a.ZP.createElement("p",{className:"note"},l("Login.EnterPasswordDescription")),a.ZP.createElement(v.Z,{clearError:s,error:t&&l(t),hint:n,isLoading:e,isPasswordVisible:i,onChangePasswordVisibility:d,onSubmit:m})))})));var f=n(90730),N=n(231);const w=(0,a.X$)((0,r.c$)((e=>(0,o.ei)(e,["authIsLoading","authError"])))((({authIsLoading:e,authError:t})=>{const{signUp:n,clearAuthError:o,uploadProfilePhoto:s}=(0,r.Sv)(),l=(0,c.Z)(),[i,u]=(0,a.eJ)(!1),[d,m]=(0,a.eJ)(),[h,g]=(0,a.eJ)(""),[Z,P]=(0,a.eJ)(""),v=(0,a.I4)((e=>{t&&o();const{target:n}=e;g(n.value),u(n.value.length>0)}),[t,o]),E=(0,a.I4)((e=>{const{target:t}=e;P(t.value)}),[]);return a.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),n({firstName:h,lastName:Z}),d&&s({file:d})}},a.ZP.createElement(f.Z,{onChange:m}),a.ZP.createElement("h2",null,l("YourName")),a.ZP.createElement("p",{className:"note"},l("Login.Register.Desc")),a.ZP.createElement(p.Z,{id:"registration-first-name",label:l("Login.Register.FirstName.Placeholder"),onChange:v,value:h,error:t&&l(t),autoComplete:"given-name"}),a.ZP.createElement(p.Z,{id:"registration-last-name",label:l("Login.Register.LastName.Placeholder"),onChange:E,value:Z,autoComplete:"family-name"}),i&&a.ZP.createElement(N.Z,{type:"submit",ripple:!0,isLoading:e},l("Next")))))})))},99364:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(60748),r=n(83716),o=n(57710),s=n(46752),l=n(3858),i=n(97184),c=n(42797),u=n(59107),d=n(28183),m=n(231);const h=(0,a.X$)((({isLoading:e=!1,isPasswordVisible:t,error:n,hint:h,placeholder:g="Password",submitLabel:p="Next",description:Z,shouldShowSubmit:P,shouldResetValue:v,shouldDisablePasswordManager:E=!1,noRipple:b=!1,clearError:f,onChangePasswordVisibility:N,onInputChange:w,onSubmit:y})=>{const L=(0,a.sO)(null),k=(0,u.Z)(),{isMobile:C}=(0,c.ZP)(),[I,S]=(0,a.eJ)(""),[A,J]=(0,a.eJ)(!1),x=C?550:400;return(0,a.d4)((()=>{v&&S("")}),[v]),(0,d.Z)((()=>{i.$b||L.current.focus()}),x),(0,a.d4)((()=>{n&&(0,o.WM)((()=>{L.current.focus(),L.current.select()}))}),[n]),a.ZP.createElement("form",{action:"",onSubmit:y?function(t){t.preventDefault(),e||A&&y(I)}:l.Z,autoComplete:"off"},a.ZP.createElement("div",{className:(0,s.Z)("input-group password-input",I&&"touched",n&&"error"),dir:k.isRtl?"rtl":void 0},E&&a.ZP.createElement("input",{type:"password",id:"prevent_autofill",autoComplete:"off",className:"visually-hidden",tabIndex:-2}),a.ZP.createElement("input",{ref:L,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:I||"",autoComplete:E?"one-time-code":"current-password",onChange:function(e){n&&f();const{target:t}=e;S(t.value),J(t.value.length>=r.loe),w&&w(t.value)},maxLength:256,dir:"auto"}),a.ZP.createElement("label",null,n||h||g),a.ZP.createElement("div",{className:"div-button toggle-password",onClick:function(){N(!t)},role:"button",tabIndex:0,title:"Toggle password visibility","aria-label":"Toggle password visibility"},a.ZP.createElement("i",{className:(0,s.Z)("icon",t?"icon-eye":"icon-eye-closed")}))),Z&&a.ZP.createElement("p",{className:"description"},Z),y&&(A||P)&&a.ZP.createElement(m.Z,{type:"submit",ripple:!b,isLoading:e,disabled:!A},p))}))},93490:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(60748),r=n(83716),o=n(47348),s=n(42797),l=n(60706),i=n(28183),c=n(97799);const u=[0,50],d=[0,20],m=[20,0],h=(0,a.X$)((({isPasswordVisible:e,isBig:t})=>{const[n,h]=(0,l.Z)(!1),[g,p]=(0,l.Z)(!1),{isMobile:Z}=(0,s.ZP)(),P=Z?r.qpg:r.z7m;(0,i.Z)(p,2e3);const v=(0,a.I4)(h,[h]);return a.ZP.createElement("div",{id:"monkey",className:t?"big":""},!n&&a.ZP.createElement("div",{className:"monkey-preview"}),a.ZP.createElement(c.Z,{size:t?r.K2q:P,className:g?"hidden":"shown",tgsUrl:o.l.MonkeyClose,playSegment:u,noLoop:!0,onLoad:v}),a.ZP.createElement(c.Z,{size:t?r.K2q:P,className:g?"shown":"hidden",tgsUrl:o.l.MonkeyPeek,playSegment:e?d:m,noLoop:!0}))}))},72645:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(60748);const r=(e,t,n)=>{const r=(0,a.sO)();return(0,a.bt)((()=>{const n=r.current;return r.current=t,e(n||[])}),t,n)}},28183:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(60748),r=n(25190);const o=function(e,t,n=[]){const o=(0,r.Z)(e);(0,a.d4)((()=>{if("number"!=typeof t)return;const e=setTimeout((()=>o()),t);return()=>clearTimeout(e)}),[t,o,...n])}},98069:(e,t,n)=>{n.d(t,{In:()=>o,l_:()=>r,wT:()=>s});let a=0;function r(){a+=1}function o(){a-=1}function s(){return a>0}},3858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=e=>{e.stopPropagation(),e.preventDefault()}},1911:(e,t,n)=>{function a(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const a=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;a>=0&&(r=t.shiftKey?a>0?a-1:n.length-1:a<n.length-1?a+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}n.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=3041.90857df3937129570830.js.map