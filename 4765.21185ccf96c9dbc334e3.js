"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[4765],{43434:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357),l=n(68584);const r=(0,a.ph)((e=>{let{title:t="Change your profile picture",disabled:n,isForForum:r,currentAvatarBlobUrl:i,onChange:s}=e;const[c,d]=(0,a.J0)(),[u,m]=(0,a.J0)(i);(0,a.vJ)((()=>{m(i)}),[i]);const A=(0,a.hb)((e=>{d(void 0),s(e),u&&u!==i&&URL.revokeObjectURL(u),m(URL.createObjectURL(e))}),[u,i,s]),h=(0,a.hb)((()=>{d(void 0)}),[]),v=(0,o.A)(u&&"filled",n&&"disabled",r&&"rounded-square");return a.Ay.createElement("div",{className:"AvatarEditable"},a.Ay.createElement("label",{className:v,role:"button",tabIndex:0,title:t},a.Ay.createElement("input",{type:"file",onChange:function(e){const t=e.target;t?.files?.[0]&&(d(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.Ay.createElement("i",{className:"icon icon-camera-add"}),u&&a.Ay.createElement("img",{src:u,draggable:!1,alt:"Avatar"})),a.Ay.createElement(l.A,{file:c,onClose:h,onChange:A}))}))},24713:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),l=n(68292),r=n(26607);const i=(0,a.ph)((e=>{let{text:t,className:n,isAlternateColor:i}=e;return a.Ay.createElement(r.A,{className:(0,o.A)("Y3ZoW17O",i?"Lq67O2D2":"DWjOG2Ze",n),isOpen:Boolean(t)},t&&a.Ay.createElement(l.A,{text:t}))}))},77561:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(17712),l=n(19806);const r=(0,a.ph)((e=>{let{id:t,options:n,selected:r=[],disabled:i,nestedCheckbox:s,loadingOptions:c,isRound:d,onChange:u}=e;const[m,A]=(0,a.J0)(r||[]),h=(0,o.A)(((e,t)=>{const{value:n,checked:a}=e.currentTarget;let o;a?(o=[...m,n],t&&n&&o.push(t.value),t&&n===t.value&&t.nestedOptions?.forEach((e=>{o.includes(e.value)||o.push(e.value)}))):(o=m.filter((e=>e!==n)),t&&n===t.value?t.nestedOptions?.forEach((e=>{o=o.filter((t=>t!==e.value))})):t&&((t.nestedOptions?.map((e=>e.value))||[]).some((e=>o.includes(e)))||(o=o.filter((e=>e!==t.value))))),A(o),u(o)})),v=(0,o.A)((e=>{const t=e?.filter((e=>m.includes(e.value))).length;return t>0?t:void 0}));return a.Ay.createElement("div",{id:t,className:"radio-group"},n.map((e=>a.Ay.createElement(l.A,{label:e.label,subLabel:e.subLabel,value:e.value,checked:-1!==r.indexOf(e.value),disabled:e.disabled||i,isLoading:c?-1!==c.indexOf(e.value):void 0,onChange:h,nestedCheckbox:s,nestedCheckboxCount:v(e.nestedOptions??[]),nestedOptionList:e,values:m,isRound:d}))))}))},94189:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(84051),o=n(87357),l=n(10328),r=n(59030),i=n(64493),s=n(8410);const c=(0,a.ph)((e=>{let{isOpen:t,title:n,header:c,text:d,textParts:u,confirmLabel:m="Confirm",confirmIsDestructive:A,isConfirmDisabled:h,isOnlyConfirm:v,areButtonsInColumn:y,className:g,children:p,confirmHandler:b,onClose:E,onCloseAnimationEnd:f}=e;const C=(0,r.A)(),N=(0,a.li)(null),w=(0,a.hb)((e=>{-1===e&&b()}),[b]),k=(0,l.A)(N,t,w,".Button");return a.Ay.createElement(s.A,{className:(0,o.A)("confirm",g),title:n||C("Telegram"),header:c,isOpen:t,onClose:E,onCloseAnimationEnd:f},d&&d.split("\\n").map((e=>a.Ay.createElement("p",null,e))),u||p,a.Ay.createElement("div",{className:y?"dialog-buttons-column":"dialog-buttons mt-2",ref:N,onKeyDown:k},a.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:b,color:A?"danger":"primary",disabled:h},m),!v&&a.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:E},C("Cancel"))))}))},68584:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(84051),o=n(31481),l=n(87679),r=n(59030),i=n(64493),s=n(52745),c=n(8410);const d={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let u,m,A;const h=(0,a.ph)((e=>{let{file:t,onChange:h,onClose:v}=e;const[y,g]=(0,a.J0)(!1);(0,a.vJ)((()=>{t&&(y?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;A=new u(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const o=await(0,l.zE)(e);await A.bind({url:o})}catch(e){o.Oig&&console.error(e)}}(t):async function(){return m||(m=Promise.all([n.e(4903),n.e(7643)]).then(n.bind(n,27643)),u=(await m).default),m}().then((()=>g(!0))))}),[t,y]);const p=(0,r.A)(),b=(0,a.hb)((async()=>{if(!A)return;const e=await A.result(d),t="string"==typeof e?e:(0,l.ti)(e,"avatar.jpg");h(t)}),[h]);return a.Ay.createElement(c.A,{isOpen:Boolean(t),onClose:v,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},y?a.Ay.createElement("div",{id:"avatar-crop"}):a.Ay.createElement(s.A,null),a.Ay.createElement(i.A,{className:"confirm-button",round:!0,color:"primary",onClick:b,ariaLabel:p("CropImage")},a.Ay.createElement("i",{className:"icon icon-check"})))}))},80401:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(84051),o=n(87357),l=n(95807),r=n(59030);const i={x:0,y:0},s=(0,a.ph)((e=>{let{children:t,id:n,onDrag:s,onDragEnd:d,style:u,knobStyle:m,isDisabled:A}=e;const h=(0,r.A)(),v=(0,a.li)(null),[y,g]=(0,a.J0)({isDragging:!1,origin:i,translation:i}),p=e=>{e.stopPropagation(),e.preventDefault();const{x:t,y:n}=c(e);g({...y,isDragging:!0,origin:{x:t,y:n},width:v.current?.offsetWidth,height:v.current?.offsetHeight})},b=(0,a.hb)((e=>{const{x:t,y:a}=c(e),o={x:t-y.origin.x,y:a-y.origin.y};g((e=>({...e,translation:o}))),s(o,n)}),[n,s,y.origin.x,y.origin.y]),E=(0,a.hb)((()=>{g((e=>({...e,isDragging:!1,width:void 0,height:void 0}))),d()}),[d]);(0,a.vJ)((()=>{y.isDragging&&A&&g((e=>({...e,isDragging:!1,width:void 0,height:void 0})))}),[A,y.isDragging]),(0,a.vJ)((()=>(y.isDragging?(window.addEventListener("touchmove",b),window.addEventListener("mousemove",b),window.addEventListener("touchend",E),window.addEventListener("touchcancel",E),window.addEventListener("mouseup",E)):(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",E),window.removeEventListener("touchcancel",E),window.removeEventListener("mouseup",E),g((e=>({...e,translation:i})))),()=>{y.isDragging&&(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",E),window.removeEventListener("touchcancel",E),window.removeEventListener("mouseup",E))})),[b,E,y.isDragging]);const f=(0,o.A)("kWQHzIMD",y.isDragging&&"k0c5WDAy"),C=(0,a.Kr)((()=>(0,l.A)(y.isDragging&&`transform: translate(${y.translation.x}px, ${y.translation.y}px)`,y.width?`width: ${y.width}px`:void 0,y.height?`height: ${y.height}px`:void 0,u)),[u,y.height,y.isDragging,y.translation.x,y.translation.y,y.width]);return a.Ay.createElement("div",{style:C,className:f,ref:v},t,!A&&a.Ay.createElement("div",{"aria-label":h("i18n_dragToSort"),tabIndex:0,role:"button",className:(0,o.A)("UpzQzcvs","div-button","draggable-knob"),onMouseDown:p,onTouchStart:p,style:m},a.Ay.createElement("i",{className:"icon icon-sort","aria-hidden":!0})))}));function c(e){let t,n;return"touches"in e?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),{x:t,y:n}}},12933:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),l=n(59030),r=n(64493);const i=e=>{let{isShown:t,className:n,color:i="primary",ariaLabel:s,disabled:c,onClick:d,children:u}=e;const m=(0,l.A)(),A=(0,o.A)("FloatingActionButton",t&&"revealed",n);return a.Ay.createElement(r.A,{className:A,color:i,round:!0,disabled:c,onClick:t&&!c?d:void 0,ariaLabel:s,tabIndex:-1,isRtl:m.isRtl},u)}},46222:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(84051),o=n(89925),l=n(66644),r=n(95807),i=n(9718),s=n(37836),c=n(82393),d=n(17712);const u=".ListItem",m=20,A=800,h=e=>{let{ref:t,style:n,className:h,items:v,itemSelector:y=u,preloadBackwards:g=m,sensitiveArea:p=A,withAbsolutePositioning:b,maxHeight:E,noScrollRestore:f=!1,noScrollRestoreOnTop:C=!1,noFastList:N,cacheBuster:w,beforeChildren:k,children:x,onLoadMore:L,onScroll:T,onWheel:S,onClick:R,onKeyDown:D,onDragOver:M,onDragLeave:B}=e,I=(0,a.li)(null);t&&(I=t);const O=(0,a.li)({}),[K,F]=(0,a.Kr)((()=>L?[(0,s.sg)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];L({direction:o.TN.Backwards,noScroll:e})}),1e3,!0,!1),(0,s.sg)((()=>{L({direction:o.TN.Forwards})}),1e3,!0,!1)]:[]),[L,v]);(0,a.vJ)((()=>{const e=I.current;if(!K||!e)return;if(g>0&&(!v||v.length<g))return void K(!0);const{scrollHeight:t,clientHeight:n}=e;n&&t<n&&K()}),[v,K,g]),(0,a.Nf)((()=>{(0,l.gm)((()=>{const e=I.current,t=O.current;let n;if(t.listItemElements=e.querySelectorAll(y),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:a}=e,o=t.currentAnchor.getBoundingClientRect().top;n=a+(o-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}if(b||f)return;const{scrollTop:a}=e;return C&&0===a?void 0:()=>{(0,i.A)(e,n),t.isScrollTopJustUpdated=!0}}))}),[v,y,f,C,w,b]);const J=(0,d.A)((e=>{if(F&&K){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=O.current,a=O.current.listItemElements;if(e)return void(O.current.isScrollTopJustUpdated=!1);const o=a.length,l=I.current,{scrollTop:r,scrollHeight:i,offsetHeight:s}=l,c=r<=(o?a[0].offsetTop:0)+p,d=(o?a[o-1].offsetTop+a[o-1].offsetHeight:i)-(r+s)<=p;let u=!1;if(c){const e=a[0];if(e){const a=e.getBoundingClientRect().top,o=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:a;t&&void 0!==n&&o>n&&(O.current.currentAnchor=e,O.current.currentAnchorTop=a,u=!0,F())}}if(d){const e=a[o-1];if(e){const a=e.getBoundingClientRect().top,o=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:a;t&&void 0!==n&&o<n&&(O.current.currentAnchor=e,O.current.currentAnchorTop=a,u=!0,K())}}if(!u)if(t?.offsetParent)O.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=a[0];e&&(O.current.currentAnchor=e,O.current.currentAnchorTop=e.getBoundingClientRect().top)}}T&&T(e)}));return a.Ay.createElement("div",{ref:I,className:h,role:"chat-list custom-scroll"===h?"region":void 0,"aria-label":"chat-list custom-scroll"===h?"Chats navigation":void 0,onScroll:J,onWheel:S,teactFastList:!N&&!b,onKeyDown:D,onDragOver:M,onDragLeave:B,onClick:R,style:n},k,b&&v?.length?a.Ay.createElement("div",{teactFastList:!N,style:(0,r.A)("position: relative",c.Ni&&`height: ${E}px`),role:"list"},x):x)}},22720:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(84051),o=n(66644),l=n(87357),r=n(82393),i=n(4961),s=n(10722),c=n(11217),d=n(37661),u=n(17712),m=n(59030),A=n(18276),h=n(64493),v=n(71429),y=n(24433),g=n(60859),p=n(42452);const b=e=>{let{ref:t,buttonRef:n,icon:b,iconClassName:E,leftElement:f,buttonClassName:C,menuBubbleClassName:N,secondaryIcon:w,secondaryIconClassName:k,rightElement:x,className:L,ariaLabel:T,style:S,children:R,disabled:D,allowDisabledClick:M,ripple:B,narrow:I,inactive:O,focus:K,destructive:F,multiline:J,isStatic:P,allowSelection:z,withColorTransition:$,contextActions:q,withPortalForMenu:W,href:H,onMouseDown:_,onClick:U,onContextMenu:j,clickArg:Q,onSecondaryIconClick:Y,onDragEnter:V}=e,X=(0,a.li)(null);t&&(X=t);const[Z,G,ee]=(0,d.A)(),{isContextMenuOpen:te,contextMenuAnchor:ne,handleBeforeContextMenu:ae,handleContextMenu:oe,handleContextMenuClose:le,handleContextMenuHide:re}=(0,s.A)(X,!q),ie=(0,u.A)((()=>X.current)),se=(0,u.A)((()=>X.current.closest(".custom-scroll"))),ce=(0,u.A)((()=>(W?document.querySelector("#portals"):X.current).querySelector(".ListItem-context-menu .bubble"))),de=(0,u.A)((()=>({withPortal:W}))),ue=(0,u.A)((e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.button!==r.w3.Main||e.preventDefault()})),me=(0,u.A)((e=>{if((!D||M)&&U){if(H){if((e.ctrlKey||e.metaKey||e.shiftKey)&&e.button===r.w3.Main||e.button===r.w3.Auxiliary)return;e.preventDefault()}U(e,Q),r.TF&&!B&&(G(),(0,o.YS)(ee))}})),{handleClick:Ae,handleMouseDown:he}=(0,c.Q)((e=>{D&&!M||0!==e.button||!Y&&!q||(e.stopPropagation(),Y?Y(e):oe(e))})),ve=(0,u.A)((e=>{O||r.TF||(!q||e.button!==r.w3.Secondary&&U||ae(e),e.button===r.w3.Main&&(U?me(e):oe(e)))})),ye=(0,m.A)(),ge=(0,l.A)("ListItem",L,z&&"allow-selection",B&&"has-ripple",I&&"narrow",D&&"disabled",M&&"click-allowed",O&&"inactive",ne&&"has-menu-open",K&&"focus",F&&"destructive",J&&"multiline",P&&"is-static",$&&"with-color-transition"),pe=H?"a":"div";return a.Ay.createElement("div",{ref:X,className:ge,dir:ye.isRtl?"rtl":void 0,style:S,onMouseDown:_,onDragEnter:V,role:"listitem"},a.Ay.createElement(pe,{className:(0,l.A)("ListItem-button",Z&&"active",C),role:P?void 0:"link",ariaLabel:T,href:H,ref:n,tabIndex:P?void 0:0,onClick:!O&&r.TF?me:ue,onMouseDown:ve,onContextMenu:j||(!O&&q?oe:void 0)},!D&&!O&&B&&a.Ay.createElement(p.A,null),f,b&&a.Ay.createElement(A.A,{name:b,className:(0,l.A)("ListItem-main-icon",E)}),J&&a.Ay.createElement("div",{className:"multiline-item"},R),!J&&R,w&&a.Ay.createElement(h.A,{className:(0,l.A)("secondary-icon",k),round:!0,color:"translucent",size:"smaller",onClick:Ae,onMouseDown:he},a.Ay.createElement(A.A,{name:w})),x),q&&void 0!==ne&&a.Ay.createElement(v.A,{isOpen:te,anchor:ne,getTriggerElement:ie,getRootElement:se,getMenuElement:ce,getLayout:de,className:"ListItem-context-menu with-menu-transitions",autoClose:!0,onClose:le,onCloseAnimationEnd:re,withPortal:W,bubbleClassName:N},q.map((e=>"isSeparator"in e?a.Ay.createElement(g.A,{key:e.key||"separator"}):a.Ay.createElement(y.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},a.Ay.createElement("span",{className:"list-item-ellipsis"},(0,i.A)(e.title)))))))}},60859:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const l={root:"h039vb1K",thin:"NGKaFgra",thick:"_BdnjPEa"},r=e=>{let{className:t,size:n="thin"}=e;return a.Ay.createElement("div",{className:(0,o.A)(l.root,l[n],t)})}},8410:(e,t,n)=>{n.d(t,{A:()=>p,U:()=>g});var a=n(84051),o=n(87357),l=n(52674),r=n(14680),i=n(91034),s=n(29441),c=n(26072),d=n(17712),u=n(37859),m=n(59030),A=n(21511),h=n(18276),v=n(64493),y=n(3325);const g=200,p=(0,i.A)((e=>{let{dialogRef:t,title:n,className:i,contentClassName:p,headerClassName:b,isOpen:E,isSlim:f,header:C,hasCloseButton:N,hasAbsoluteCloseButton:w,noBackdrop:k,noBackdropClose:x,children:L,style:T,dialogStyle:S,isLowStackPriority:R,onClose:D,onCloseAnimationEnd:M,onEnter:B}=e;const{ref:I,shouldRender:O}=(0,A.A)({isOpen:E,onCloseAnimationEnd:M,withShouldRender:!0}),K=N||w;(0,a.vJ)((()=>{if(E)return(0,r.FD)(),r.wb}),[E]);const F=(0,d.A)((e=>!!B&&(e.preventDefault(),B(),!0)));(0,a.vJ)((()=>E?(0,l.A)({onEsc:D,onEnter:F}):void 0),[E,D,F]),(0,a.vJ)((()=>E&&I.current?(0,s.A)(I.current):void 0),[E,I]),(0,c.A)({isActive:E,onBack:D}),(0,u.A)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(E)),(E||!E&&void 0!==t)&&(0,a.VK)(g),()=>{document.body.classList.remove("has-open-dialog")}}),[E]);const J=(0,m.A)();if(!O)return;const P=(0,o.A)("Modal",i,k&&"transparent-backdrop",f&&"slim",R&&"low-priority");return a.Ay.createElement(y.A,null,a.Ay.createElement("div",{ref:I,className:P,tabIndex:-1,role:"dialog"},a.Ay.createElement("div",{className:"modal-container"},a.Ay.createElement("div",{className:"modal-backdrop",onClick:x?void 0:D}),a.Ay.createElement("div",{className:"modal-dialog",ref:t,style:S},C||(n||K?a.Ay.createElement("div",{className:(0,o.A)("modal-header",b)},K&&a.Ay.createElement(v.A,{className:(0,o.A)(w&&"modal-absolute-close-button"),round:!0,color:"translucent",size:"smaller",ariaLabel:J("Close"),onClick:D},a.Ay.createElement(h.A,{name:"close"})),a.Ay.createElement("div",{className:"modal-title"},n)):void 0),a.Ay.createElement("div",{className:(0,o.A)("modal-content custom-scroll",p),style:T},L)))))}))},21052:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(84051),o=n(13439),l=n(31481),r=n(87357),i=n(11778),s=n(50680),c=n(64493),d=n(3325);const u=3e3,m=e=>{let{title:t,className:n,message:m,duration:A=u,containerId:h,onDismiss:v,action:y,actionText:g}=e;const p=(0,o.ko)(),[b,E]=(0,a.J0)(!0),f=(0,a.li)(null),{transitionClassNames:C}=(0,s.A)(b),N=(0,a.hb)((()=>{E(!1),setTimeout(v,150+l.xB5)}),[v]),w=(0,a.hb)((()=>{y&&(Array.isArray(y)?y.forEach((e=>p[e.action](e.payload))):p[y.action](y.payload)),N()}),[y,p,N]);(0,a.vJ)((()=>b?(0,i.A)(N):void 0),[b,N]),(0,a.vJ)((()=>(f.current=window.setTimeout(N,A),()=>{f.current&&(clearTimeout(f.current),f.current=void 0)})),[A,N]);const k=(0,a.hb)((()=>{f.current&&(clearTimeout(f.current),f.current=void 0)}),[]),x=(0,a.hb)((()=>{f.current=window.setTimeout(N,A)}),[A,N]);return a.Ay.createElement(d.A,{className:"Notification-container",containerId:h},a.Ay.createElement("div",{className:(0,r.A)("Notification",C,n),onClick:w,onMouseEnter:k,onMouseLeave:x},a.Ay.createElement("div",{className:"content"},t&&a.Ay.createElement("div",{className:"notification-title"},t),m),y&&g&&a.Ay.createElement(c.A,{color:"translucent-white",onClick:w,className:"Notification-button"},g)))}},35913:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(84051),o=n(66644),l=n(19822),r=n(87357),i=n(86974),s=n(41257),c=n(38691),d=n(18276);const u={s:42,m:48,l:54,xl:52},m=.05,A=(0,a.ph)((e=>{let{progress:t=0,size:n="l",square:A,transparent:h,noCross:v,rotationOffset:y,withColor:g,onClick:p}=e;const b=(0,a.li)(null),E=u[n],f=(0,s.i)(t),C=(0,c.A)(),N=(0,i.A)(b,!g);(0,a.vJ)((()=>{let e,t,a=!0,r=m;(0,l.i0)((()=>{if(!b.current)return!1;f.current!==t&&(r=Math.min(Math.max(m,t||0),1),e=Date.now(),t=f.current);const o=Math.min(Math.max(m,f.current),1),i=Math.min(1,(Date.now()-e)/600),s=l.qM.easeOutQuad(i),c=r+(o-r)*s;return function(e,t,n,a,o,l){let r=arguments.length>6&&void 0!==arguments[6]&&arguments[6];const i=t/2,s=(t-n)/2-2*l,c=(arguments.length>7?arguments[7]:void 0)??Date.now()%2e3/2e3,d=2*Math.PI*c,u=d+2*Math.PI*o,m=e.getContext("2d");r&&(e.width=t,e.height=t,m.lineCap="round",m.strokeStyle=a,m.lineWidth=n),m.clearRect(0,0,t,t),m.beginPath(),m.arc(i,i,s,d,u),m.stroke()}(b.current,E*C,("xl"===n?3:2)*C,N??"white",c,C,a,y),a=!1,c<1}),o.RK)}),[f,n,E,C,y,N]);const w=(0,r.A)(`ProgressSpinner size-${n}`,h&&"transparent",A&&"square",v&&"no-cross");return a.Ay.createElement("div",{className:w,onClick:p},!v&&a.Ay.createElement(d.A,{name:"close"}),a.Ay.createElement("canvas",{ref:b,className:"ProgressSpinner_canvas",style:`width: ${E}; height: ${E}px;`}))}))},24956:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),l=n(59030),r=n(57474);const i=(0,a.ph)((e=>{let{id:t,label:n,subLabel:i,subLabelClassName:s,value:c,name:d,checked:u,disabled:m,hidden:A,isLoading:h,className:v,onlyInput:y,withIcon:g,isLink:p,onChange:b,onSubLabelClick:E}=e;const f=(0,l.A)(),C=(0,o.A)("Radio",v,m&&"disabled",A&&"hidden-widget",g&&"with-icon",h&&"loading",y&&"onlyInput");return a.Ay.createElement("label",{className:C,dir:f.isRtl?"rtl":void 0},a.Ay.createElement("input",{type:"radio",name:d,value:c,id:t,checked:u,onChange:b,disabled:m||A}),a.Ay.createElement("div",{className:"Radio-main"},a.Ay.createElement("span",{className:"label",dir:f.isRtl?"auto":void 0},n),i&&a.Ay.createElement("span",{className:(0,o.A)(s,"subLabel",p?"subLabelLink":void 0),dir:f.isRtl?"auto":void 0,onClick:p?E:void 0},i)),h&&a.Ay.createElement(r.A,null))}))},1087:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(17712),l=n(24956);const r=(0,a.ph)((e=>{let{id:t,name:n,options:r,selected:i,disabled:s,loadingOption:c,onChange:d,onClickAction:u,subLabelClassName:m,isLink:A,withIcon:h,subLabel:v}=e;const y=(0,a.hb)((e=>{const{value:t}=e.currentTarget;d(t,e)}),[d]),g=(0,o.A)((e=>()=>{u?.(e)}));return a.Ay.createElement("div",{id:t,className:"radio-group"},r.map((e=>a.Ay.createElement(l.A,{name:n,label:e.label,subLabel:v||e.subLabel,subLabelClassName:m,value:e.value,checked:e.value===i,hidden:e.hidden,disabled:s,withIcon:h,isLoading:c?c===e.value:void 0,className:e.className,onChange:y,onSubLabelClick:g(e.value),isLink:A}))))}))},82497:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357),l=n(59030);const r=(0,a.ph)((e=>{let{options:t,min:n=0,max:r=(t?t.length-1:100),step:i=1,label:s,value:c,disabled:d,bold:u,className:m,renderValue:A,onChange:h,isCenteredLayout:v}=e;const y=(0,l.A)(),g=(0,a.hb)((e=>{h(Number(e.currentTarget.value))}),[h]),p=(0,o.A)(m,"RangeSlider",d&&"disabled",u&&"bold"),b=(0,a.Kr)((()=>t?c/(t.length-1)*100:(c-n)/((r-n)/i)*100),[t,c,r,n,i]);return a.Ay.createElement("div",{className:p},v?a.Ay.createElement("div",{className:"slider-top-row",dir:y.isRtl?"rtl":void 0},!t&&a.Ay.createElement(a.Ay.Fragment,null,a.Ay.createElement("span",{className:"value-min",dir:"auto"},n),a.Ay.createElement("span",{className:"label",dir:"auto"},A?A(c):c),a.Ay.createElement("span",{className:"value-max",dir:"auto"},r))):s?a.Ay.createElement("div",{className:"slider-top-row",dir:y.isRtl?"rtl":void 0},a.Ay.createElement("span",{className:"label",dir:"auto"},s),!t&&a.Ay.createElement("span",{className:"value",dir:"auto"},A?A(c):c)):void 0,a.Ay.createElement("div",{className:"slider-main"},a.Ay.createElement("div",{className:"slider-fill-track",style:`width: ${b}%`}),a.Ay.createElement("input",{min:n,max:r,value:c,step:i,type:"range",className:"RangeSlider__input",onChange:g}),t&&a.Ay.createElement("div",{className:"slider-options"},t.map(((e,t)=>a.Ay.createElement("div",{className:(0,o.A)("slider-option",t===c&&"active"),onClick:()=>h(t)},e))))))}))},11124:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const l=(0,a.ph)((e=>{let{marks:t,onChange:n,rangeCount:l}=e;const r=(0,a.li)(null),i=(0,a.Kr)((()=>(t.indexOf(l)/(t.length-1)*100).toFixed(2)),[t,l]),s=(0,a.Kr)((()=>t.indexOf(l)),[t,l]),c=(0,a.Kr)((()=>t.indexOf(l).toString()),[t,l]);return(0,a.Nf)((()=>{r.current.style.setProperty("--fill-percentage",`${i}%`)}),[i]),a.Ay.createElement("div",{className:"s8NMMSES"},a.Ay.createElement("form",null,a.Ay.createElement("div",{className:"i_wrxmyh"},a.Ay.createElement("div",{className:"O7SI4r_Y"},t.map(((e,t)=>{const n=t<=s;return a.Ay.createElement("div",{key:e,className:(0,o.A)("b6UDc3zh",n?"VELPJsJ0":"K8NtimIi")})}))),a.Ay.createElement("div",{className:"bVlnaLCI"},t.map((e=>a.Ay.createElement("div",{key:e,className:(0,o.A)("AFFaq4eZ",l===e&&"cuogxYPG")},e)))),a.Ay.createElement("input",{ref:r,type:"range",className:"H_rMZrqn",min:"0",max:t.length-1,value:c,onChange:e=>{const a=parseInt(e.target.value,10),o=t[a];n(o)},step:"1"}))))}))},66469:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(84051),o=n(82393),l=n(17712),r=n(64493);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}let s,c=!0;const d=e=>{let{onActivate:t,...n}=e;const d=(0,a.li)(!1),u=(0,l.A)((e=>{if(d.current=!0,c)return c=!1,void t(e);s&&(clearTimeout(s),s=void 0),s=window.setTimeout((()=>{d.current&&t(e)}),200)})),m=(0,l.A)((()=>{d.current=!1})),A=(0,l.A)((e=>{d.current=!0,t(e)}));return a.Ay.createElement(r.A,i({},n,{onMouseEnter:o.TF?void 0:u,onMouseLeave:o.TF?void 0:m,onClick:o.TF?A:t}))}},36393:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(84051),o=n(87357),l=n(37661),r=n(79174),i=n(39351),s=n(17712),c=n(59030),d=n(18276),u=n(64493),m=n(52745),A=n(41036);const h=(0,a.ph)((e=>{let{ref:t,children:n,resultsItemSelector:h,value:v,inputId:y,className:g,focused:p,isLoading:b=!1,spinnerColor:E,spinnerBackgroundColor:f,placeholder:C,disabled:N,autoComplete:w,canClose:k,autoFocusSearch:x,hasUpButton:L,hasDownButton:T,teactExperimentControlled:S,withBackIcon:R,onChange:D,onStartBackspace:M,onReset:B,onFocus:I,onBlur:O,onClick:K,onUpClick:F,onDownClick:J,onSpinnerClick:P}=e,z=(0,a.li)(null);t&&(z=t);const[$,q,W]=(0,l.A)(p);(0,r.A)(z,x,W),(0,a.vJ)((()=>{z.current&&(p?z.current.focus():z.current.blur())}),[p,C]);const H=(0,c.A)(),_=(0,i.A)();function U(){q(),I?.()}const j=(0,s.A)((e=>{if(h){if("ArrowDown"===e.key||"Enter"===e.key){const e=document.querySelector(h);e&&e.focus()}"Backspace"===e.key&&0===e.currentTarget.selectionStart&&0===e.currentTarget.selectionEnd&&M?.()}}));return a.Ay.createElement("div",{className:(0,o.A)("SearchInput",g,$&&"has-focus"),onClick:K,dir:H.isRtl?"rtl":void 0},a.Ay.createElement(A.Ay,{name:"fade",shouldCleanup:!0,activeKey:Number(!b&&!R),className:"icon-container-left",slideClassName:"icon-container-slide"},b&&!R?a.Ay.createElement(m.A,{color:E,backgroundColor:f,onClick:P}):R?a.Ay.createElement(d.A,{name:"arrow-left",className:"back-icon",onClick:B}):a.Ay.createElement(d.A,{name:"search",className:"search-icon"})),a.Ay.createElement("div",null,n),a.Ay.createElement("input",{ref:z,id:y,type:"text",dir:"auto",placeholder:C||H("Search"),className:"form-control",value:v,disabled:N,autoComplete:w,onChange:function(e){const{currentTarget:t}=e;D(t.value),$||U()},onFocus:U,onBlur:function(){W(),O?.()},onKeyDown:j,teactExperimentControlled:S}),L&&a.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:F,disabled:!F,ariaLabel:_("AriaSearchOlderResult")},a.Ay.createElement(d.A,{name:"up"})),T&&a.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:J,disabled:!J,ariaLabel:_("AriaSearchNewerResult")},a.Ay.createElement(d.A,{name:"down"})),a.Ay.createElement(A.Ay,{name:"fade",shouldCleanup:!0,activeKey:Number(b),className:"icon-container-right",slideClassName:"icon-container-slide"},R&&b?a.Ay.createElement(m.A,{color:E,backgroundColor:f,onClick:P}):(v||k)&&B&&a.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:B},a.Ay.createElement(d.A,{name:"close"}))))}))},63173:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const l=(0,a.ph)((e=>{const{id:t,value:n,label:l,hasArrow:r,error:i,ref:s,tabIndex:c,onChange:d,children:u}=e,m=i||l,A=(0,o.A)("input-group",n&&"touched",i&&"error",m&&"with-label",r&&"with-arrow","input-group");return a.Ay.createElement("div",{className:A},a.Ay.createElement("select",{className:"form-control",id:t,value:n||"",onChange:d,tabIndex:c,ref:s},u),m&&t&&a.Ay.createElement("label",{htmlFor:t},m))}))},91356:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(52844),l=n(68584);const r=(0,a.ph)((e=>{let{onChange:t,inputRef:n}=e;const[r,i]=(0,a.J0)(),s=(0,a.hb)((e=>{i(void 0),t(e)}),[t]),c=(0,a.hb)((()=>{i(void 0)}),[]),d=(0,a.hb)((()=>{(0,o.p)("image/png, image/jpeg",(e=>{const t=e.target;t?.files?.[0]&&i(t.files[0])}),!0)}),[]);return a.Ay.createElement(a.Ay.Fragment,null,a.Ay.createElement("input",{ref:n,className:"axfkbhWJ",onClick:d}),a.Ay.createElement(l.A,{file:r,onClose:c,onChange:s}))}))},32581:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357),l=n(59030);const r=function(e){let{children:t,className:n}=e;const r=(0,l.A)();return a.Ay.createElement("div",{dir:r.isRtl?"rtl":void 0,className:(0,o.A)("LxlpQKLr",n)},t)}},55573:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(59030),l=n(64493);const r=e=>{let{count:t,itemName:n,itemPluralName:r,isLoading:i,onClick:s}=e;const c=(0,o.A)();return a.Ay.createElement(l.A,{className:"ShowMoreButton",color:"translucent",size:"smaller",isText:!0,isLoading:i,isRtl:c.isRtl,onClick:s},a.Ay.createElement("i",{className:"icon icon-down"}),"Show ",t," more ",t>1?r||`${n}s`:n)}},26607:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(73767),l=n(21511);const r=e=>{let{isOpen:t,isHidden:n,isCustom:r,id:i,className:s,onClick:c,children:d,noCloseTransition:u,shouldAnimateFirstRender:m,style:A,ref:h}=e;const v=(0,o.A)(t),y=(0,o.A)(d),g=(0,a.li)(),p=void 0===v,{ref:b,shouldRender:E}=(0,l.A)({isOpen:t&&!n,ref:h,noMountTransition:p&&!m,className:!r&&void 0,noCloseTransition:u,withShouldRender:!0});return v&&!t&&(g.current=y),(E||n)&&a.Ay.createElement("div",{id:i,ref:b,className:s,onClick:c,style:A},t?d:g.current)}},63152:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const l=(0,a.ph)((e=>{let{id:t,name:n,value:l,label:r,checked:i=!1,disabled:s,inactive:c,noAnimation:d,onChange:u,onCheck:m}=e;const A=(0,a.hb)((e=>{u&&u(e),m&&m(e.currentTarget.checked)}),[u,m]),h=(0,o.A)("Switcher",s&&"disabled",c&&"inactive",d&&"no-animation");return a.Ay.createElement("label",{className:h,title:r},a.Ay.createElement("input",{type:"checkbox",id:t,name:n,value:l,checked:i,disabled:s,onChange:A}),a.Ay.createElement("span",{className:"widget"}))}))},34132:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(84051),o=n(66644),l=n(87357),r=n(41402),i=n(82393),s=n(4961),c=n(10722),d=n(11217),u=n(17712),m=n(71429),A=n(24433),h=n(60859);const v="Tab--active",y=e=>{let{className:t,title:n,isActive:y,isBlocked:g,badgeCount:p,isBadgeActive:b,previousActiveTab:E,onClick:f,clickArg:C,contextActions:N,contextRootElementSelector:w}=e;const k=(0,a.li)(null);(0,a.Nf)((()=>{y&&void 0===E&&k.current&&k.current.classList.add(v)}),[y,E]),(0,a.vJ)((()=>{if(!y||void 0===E)return;const e=k.current,t=e.parentElement.children[E];if(!t)return void(y&&!e.classList.contains(v)&&(0,o.RK)((()=>{e.classList.add(v)})));const n=e.querySelector(".platform"),a=t.querySelector(".platform"),l=a.parentElement.offsetLeft-n.parentElement.offsetLeft,i=a.clientWidth/n.clientWidth;(0,o.RK)((()=>{a.classList.remove("animate"),n.classList.remove("animate"),n.style.transform=`translate3d(${l}px, 0, 0) scale3d(${i}, 1, 1)`,(0,o.gm)((()=>((0,r.A)(n),()=>{n.classList.add("animate"),n.style.transform="none",t.classList.remove(v),e.classList.add(v)})))}))}),[y,E]);const{contextMenuAnchor:x,handleContextMenu:L,handleBeforeContextMenu:T,handleContextMenuClose:S,handleContextMenuHide:R,isContextMenuOpen:D}=(0,c.A)(k,!N),{handleClick:M,handleMouseDown:B}=(0,d.Q)((e=>{!N||e.button!==i.w3.Secondary&&f||T(e),"mousedown"===e.type&&e.button!==i.w3.Main||f?.(C)})),I=(0,u.A)((()=>k.current)),O=(0,u.A)((()=>w?k.current.closest(w):document.body)),K=(0,u.A)((()=>document.querySelector("#portals").querySelector(".Tab-context-menu .bubble"))),F=(0,u.A)((()=>({withPortal:!0})));return a.Ay.createElement("div",{className:(0,l.A)("Tab",f&&"Tab--interactive",t),onClick:M,onMouseDown:B,role:"tab","aria-selected":y,onContextMenu:L,ref:k},a.Ay.createElement("span",{className:"Tab_inner"},(0,s.A)(n),Boolean(p)&&a.Ay.createElement("span",{className:(0,l.A)("badge",b&&"Tab__badge--active")},p),g&&a.Ay.createElement("i",{className:"icon icon-lock-badge blocked"}),a.Ay.createElement("i",{className:"platform"})),N&&void 0!==x&&a.Ay.createElement(m.A,{isOpen:D,anchor:x,getTriggerElement:I,getRootElement:O,getMenuElement:K,getLayout:F,className:"Tab-context-menu",autoClose:!0,onClose:S,onCloseAnimationEnd:R,withPortal:!0},N.map((e=>"isSeparator"in e?a.Ay.createElement(h.A,{key:e.key||"separator"}):a.Ay.createElement(A.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},e.title)))))}},24680:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(84051),o=n(31481),l=n(57446),r=n(87357),i=n(82393),s=n(36838),c=n(59030),d=n(73767),u=n(34132);const m=i.pz?450:i.Ni?400:300,A=(0,a.ph)((e=>{let{tabs:t,areFolders:n,activeTab:i,onSwitchTab:A,contextRootElementSelector:h,className:v}=e;const y=(0,a.li)(null),g=(0,d.A)(i);(0,s.A)(y,void 0,!0),(0,a.vJ)((()=>{const e=y.current,{scrollWidth:t,offsetWidth:n,scrollLeft:a}=e;if(t<=n)return;const o=e.childNodes[i];if(!o)return;const{offsetLeft:r,offsetWidth:s}=o,c=r-n/2+s/2;Math.abs(c-a)<16||(0,l.A)(e,c,m)}),[i]);const p=(0,c.A)();return a.Ay.createElement("div",{className:(0,r.A)("TabList","no-scrollbar",v),ref:y,dir:p.isRtl?"rtl":void 0,role:"tablist"},t.map(((e,t)=>a.Ay.createElement(u.A,{key:e.id??e.title,title:n&&e.id!==o.DSF?e.title:p(e.title),isActive:t===i,isBlocked:e.isBlocked,badgeCount:e.badgeCount,isBadgeActive:e.isBadgeActive,previousActiveTab:g,onClick:A,clickArg:t,contextActions:e.contextActions,contextRootElementSelector:h}))))}))},94079:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(84051),o=n(66644),l=n(87357),r=n(17712),i=n(59030);const s=(0,a.ph)((e=>{let{ref:t,id:n,className:s,value:c,label:d,error:u,success:m,disabled:A,readOnly:h,placeholder:v,autoComplete:y,inputMode:g,maxLength:p,maxLengthIndicator:b,tabIndex:E,onChange:f,onInput:C,onKeyPress:N,onKeyDown:w,onBlur:k,onPaste:x,noReplaceNewlines:L}=e,T=(0,a.li)(null);t&&(T=t);const S=(0,i.A)(),R=u||m||d,D=(0,l.A)("input-group",c&&"touched",u?"error":m&&"success",A&&"disabled",h&&"disabled",R&&"with-label",s),M=(0,r.A)((e=>{(0,o.RK)((()=>{e.style.height="0",(0,o.gm)((()=>{const t=e.scrollHeight;return()=>{e.style.height=`${t}px`}}))}))}));(0,a.Nf)((()=>{const e=T.current;e&&M(e)}),[]);const B=(0,a.hb)((e=>{const t=e.currentTarget;if(!L){const e=t.selectionEnd;t.value=t.value.replace(/\n/g," "),t.selectionEnd=e}M(t),f?.(e)}),[L,f]);return a.Ay.createElement("div",{className:D,dir:S.isRtl?"rtl":void 0},a.Ay.createElement("textarea",{ref:T,className:"form-control",id:n,dir:"auto",value:c||"",tabIndex:E,placeholder:v,maxLength:p,autoComplete:y,inputMode:g,disabled:A,readOnly:h,onChange:B,onInput:C,onKeyPress:N,onKeyDown:w,onBlur:k,onPaste:x,"aria-label":R}),R&&a.Ay.createElement("label",{htmlFor:n},R),b&&a.Ay.createElement("div",{className:"max-length-indicator"},b))}))},61361:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(84051),o=n(17663),l=n(80140),r=n(32625),i=n(30857),s=n(59030);const c=(0,a.ph)((e=>{let{langKey:t,endsAt:n,onEnd:c}=e;const d=(0,s.A)(),u=(0,i.A)(),m=(0,l.Fm)(),A=m<n;if((0,r.A)(u,A?500:void 0),(0,a.vJ)((()=>{A||c?.()}),[A,c]),!A)return;const h=n-m,v=(0,o.QO)(h);return a.Ay.createElement("span",null,d(t,v))}))},629:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const l={root:"eGD1rubd",widget:"EXXsQxeq",min:"C4vXj96y",mid:"nRNm3LRD",max:"LdztzMx0",filler:"kudEBJOk"},r=(0,a.ph)((function(e){let{value:t}=e;return a.Ay.createElement("div",{className:(0,o.A)(l.root,"Toggle"),"aria-hidden":!0},a.Ay.createElement("i",{className:(0,o.A)(l.filler,l[t])}),a.Ay.createElement("i",{className:(0,o.A)(l.widget,l[t])}))}))},283:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const l="AtWkrIxV",r=(0,a.ph)((()=>a.Ay.createElement("div",{className:"Oob7moh7"},a.Ay.createElement("div",{className:(0,o.A)("ao0o6F_1",l)}),a.Ay.createElement("div",{className:"e94nYlC4"},a.Ay.createElement("div",{className:(0,o.A)("ANs9RCJu",l)}),a.Ay.createElement("div",{className:(0,o.A)("RSn3O5Rx",l)})))))},55158:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357),l=n(95807);const r=e=>{let{variant:t="rectangular",animation:n="wave",width:r,height:i,forceAspectRatio:s,inline:c,className:d}=e;const u=(0,o.A)("Skeleton",t,n,d,c&&"inline"),m=r&&i?`aspect-ratio: ${r}/${i}`:void 0,A=(0,l.A)(s&&m,Boolean(r)&&`width: ${r}px`,!s&&Boolean(i)&&`height: ${i}px`);return a.Ay.createElement("div",{className:u,style:A},c&&" ")}}}]);
//# sourceMappingURL=4765.21185ccf96c9dbc334e3.js.map