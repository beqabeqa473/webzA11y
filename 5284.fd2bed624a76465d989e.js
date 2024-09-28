(()=>{"use strict";const e=!1,t="tt-media-progressive",n="tt-assets",s=("undefined"!=typeof window&&window.innerHeight,Math.round(450),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/jpeg","image/gif"])),a=new Set(["video/mp4","video/quicktime"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...s,...a]),new Set(["USERNAME_PURCHASE_AVAILABLE","USERNAME_INVALID"]),new Set(["t.me","web.t.me","a.t.me","k.t.me","z.t.me"]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]),new Set(["USER_CANCELED"]);const i=e=>new Promise((t=>{setTimeout((()=>t()),e)}));async function o(e){const t=await r((async()=>{const t=await self.caches.open(n),s=await t.match(e.request);return{cache:t,cached:s}}),3e3),{cache:s,cached:a}=t||{};if(s&&a){if(a.ok)return a;await s.delete(e.request)}const i=await fetch(e.request);return i.ok&&s&&s.put(e.request,i.clone()),i}async function r(e,t){let n=!1;try{return await Promise.race([i(t).then((()=>n?void 0:Promise.reject(new Error("TIMEOUT")))),e()])}catch(e){return void console.error(e)}finally{n=!0}}const c=524288,l=6e4,u=new Map;async function d(e,t){const n=t.url.includes("/download/")?(await self.clients.matchAll()).find((e=>"window"===e.type&&"top-level"===e.frameType)):await self.clients.get(e.clientId);if(!n)return;const s=Date.now().toString(36)+Math.random().toString(36).slice(2),a={};let o=!1;const r=Promise.race([i(l).then((()=>o?void 0:Promise.reject(new Error("ERROR_PART_TIMEOUT")))),new Promise(((e,t)=>{Object.assign(a,{resolve:e,reject:t})}))]);return u.set(s,a),r.catch((()=>{})).finally((()=>{u.delete(s),o=!0})),n.postMessage({type:"requestPart",messageId:s,params:t}),r}self.addEventListener("message",(e=>{const{type:t,messageId:n,result:s}=e.data;if("partResponse"===t){const e=u.get(n);e&&e.resolve(s)}}));const f=1048576;class p{constructor(){var e,t,n,s;e=this,n=void 0,(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t="queue"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.queue=[]}push(e){this.queue.push(e)}async pop(){return await this.queue.shift()}get size(){return this.queue.length}}var h=function(e){return e.True="1",e.False="0",e}(h||{});let m=(new Date).valueOf();const w=new Set,g={};function y(e){return e.custom.from_id?e.custom.from_id:e.custom.chat_id||e.custom.channel_id?`-${e.custom.chat_id||e.custom.channel_id}`:void 0}function v(e){if(e.custom.msg_id)return parseInt(e.custom.msg_id,10)}async function S(){const e=new URL(self.registration.scope).origin;return(await self.clients.matchAll({type:"window"})).filter((t=>new URL(t.url).origin===e))}async function R(e){const t=(await S())[0];t&&t.postMessage({type:"playNotificationSound",payload:{id:e}})}function b(e){let{chatId:t,messageId:n,body:s,title:a,icon:i,reaction:o,isSilent:r,shouldReplaceHistory:c}=e;const l=(new Date).valueOf()-m<1e3,u={body:s,data:{chatId:t,messageId:n,reaction:o,count:1,shouldReplaceHistory:c},icon:i||"icon-192x192.png",badge:"icon-192x192.png",tag:String(l?0:t||0),vibrate:[200,100,200]};return Promise.all([o||r?void 0:R(String(n)||t||""),self.registration.showNotification(a,u)])}async function E(t,n){if(n.chatId&&(t.postMessage({type:"focusMessage",payload:n}),!t.focused))try{await t.focus()}catch(t){e&&console.warn("[SW] ",t)}}function I(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}self.addEventListener("sync",(()=>{m=Date.now()}));class P{constructor(){I(this,"promise",void 0),I(this,"reject",void 0),I(this,"resolve",void 0),this.promise=new Promise(((e,t)=>{this.reject=t,this.resolve=e}))}static resolved(e){const t=new P;return t.resolve(e),t}}const T=new Map;const q=/\.(wasm|html)$/,A=/[\da-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|tgs|json|wasm)$/;self.addEventListener("install",(t=>{e&&console.log("ServiceWorker installed"),t.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(t=>{e&&console.log("ServiceWorker activated"),t.waitUntil(Promise.race([i(3e3),Promise.all([self.caches.delete(n),self.clients.claim()])]))})),self.addEventListener("fetch",(s=>{const{url:a}=s.request,i=self.registration.scope;if(!a.startsWith(i))return!1;const{pathname:l,protocol:u}=new URL(a),{pathname:h}=new URL(i);if(l.includes("/progressive/"))return s.respondWith(async function(n){const{url:s}=n.request,a=n.request.headers.get("range"),i=/^bytes=(\d+)-(\d+)?$/g.exec(a||""),o=Number(i[1]),r=Number(i[2]);let l=r;if((!l||l-o+1>c)&&(l=o+c-1),0===o&&1===l){const e=n.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),t=e&&Number(e[1]),s=e?.[2];if(t&&s)return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:[["Content-Range",`bytes 0-1/${t}`],["Accept-Ranges","bytes"],["Content-Length","2"],["Content-Type",s]]})}const u=`${s}?start=${o}&end=${l}`,[f,p]=await async function(e){const n=await self.caches.open(t);return Promise.all([n.match(`${e}&type=arrayBuffer`).then((e=>e?e.arrayBuffer():void 0)),n.match(`${e}&type=headers`).then((e=>e?e.json():void 0))])}(u);if(e&&console.log(`FETCH PROGRESSIVE ${u} (request: ${o}-${r}) CACHED: ${Boolean(f)}`),f)return new Response(f,{status:206,statusText:"Partial Content",headers:p});let h;try{h=await d(n,{url:s,start:o,end:l})}catch(t){e&&console.error("FETCH PROGRESSIVE",t)}if(!h)return new Response("",{status:500,statusText:"Failed to fetch progressive part"});const{arrayBuffer:m,fullSize:w,mimeType:g}=h,y=Math.min(l-o+1,m.byteLength);l=o+y-1;const v=m.slice(0,y),S=[["Content-Range",`bytes ${o}-${l}/${w}`],["Accept-Ranges","bytes"],["Content-Length",String(y)],["Content-Type",g]];return y<=524288&&l<2097151&&async function(e,n,s){const a=await self.caches.open(t);Promise.all([a.put(new Request(`${e}&type=arrayBuffer`),new Response(n)),a.put(new Request(`${e}&type=headers`),new Response(JSON.stringify(s)))])}(u,v,S),new Response(v,{status:206,statusText:"Partial Content",headers:S})}(s)),!0;if(l.includes("/download/"))return s.respondWith(async function(t){const{url:n}=t.request;let s;try{s=await d(t,{url:n,start:0,end:65536})}catch(t){e&&console.error("FETCH DOWNLOAD",t)}if(!s)return new Response("",{status:500,statusText:"Failed to fetch file to download"});const a=t.request.url.match(/filename=(.*)/),i=a?`filename="${decodeURIComponent(a[1])}"`:"",{fullSize:o,mimeType:r}=s,c=[["Content-Length",String(o)],["Content-Type",r],["Content-Disposition",`attachment; ${i}`]],l=new p,u=e=>(l.push(d(t,{url:n,start:e,end:e+f-1}).then((e=>e?.arrayBuffer))),e+f);let h=0;const m=new ReadableStream({start(){for(let e=0;e<8&&!(h>=o);e++)h=u(h)},async pull(e){const t=await l.pop();t?(e.enqueue(new Uint8Array(t)),t.byteLength<f?e.close():h<o&&(h=u(h))):e.close()}});return new Response(m,{status:200,statusText:"OK",headers:c})}(s)),!0;if(l.includes("/share/")&&s.respondWith(async function(e){if("POST"===e.request.method)try{!async function(e,t){const n=await self.clients.get(t);n&&(await function(e){const t=T.get(e);if(t)return t.promise;const n=new P;return T.set(e,n),n.promise}(t),n.postMessage({type:"share",payload:e}))}(function(e){const t=e.getAll("files");return{title:e.get("title"),text:e.get("text"),url:e.get("url"),files:t}}(await e.request.formData()),e.resultingClientId)}catch(e){console.warn("[SHARE] Failed to parse input data",e)}return Response.redirect(".")}(s)),"http:"===u||"https:"===u){if(l===h||l.match(q))return s.respondWith(async function(e){const t=await r((()=>fetch(e.request)),3e3);if(!t?.ok)return o(e);const s=t.clone();return self.caches.open(n).then((t=>t?.put(e.request,s))),t}(s)),!0;if(l.match(A))return s.respondWith(o(s)),!0}return!1})),self.addEventListener("push",(function(t){e&&(console.log("[SW] Push received event",t),t.data&&console.log("[SW] Push received with data",t.data.json()));const n=function(t){try{return t.data.json()}catch(n){return void(e&&console.log("[SW] Unable to parse push notification data",t.data))}}(t);if(!n||n.mute===h.True)return;const s=function(e){let t=e.title||"Telegram Web A";const n=e.custom?.silent===h.True;return n&&(t+=" 🔕"),{chatId:y(e),messageId:v(e),body:e.description,isSilent:n,title:t}}(n);w.has(s.messageId)?w.delete(s.messageId):t.waitUntil(b(s))})),self.addEventListener("notificationclick",(function(t){const n=self.registration.scope;t.notification.close();const{data:s}=t.notification;t.waitUntil((async()=>{const t=await S();if(await Promise.all(t.map((e=>(g[e.id]=s,E(e,s))))),self.clients.openWindow&&!(t.length>0)){g[0]=s;try{const e=await self.clients.openWindow(n);e&&(g[e.id]=s)}catch(t){e&&console.warn("[SW] ",t)}}})())})),self.addEventListener("message",(e=>{(function(e){if(!e.data)return;const t=e.source;if("clientReady"===e.data.type){const n=g[t.id]||g[0];n&&(delete g[t.id],delete g[0],e.waitUntil(E(t,n)))}if("showMessageNotification"===e.data.type){const t=e.data.payload;e.waitUntil((async()=>(t.chatId&&(await self.registration.getNotifications({tag:t.chatId})).forEach((e=>e.close())),w.add(t.messageId),b(t)))())}"closeMessageNotifications"===e.data.type&&e.waitUntil(async function(e){let{chatId:t,lastReadInboxMessageId:n}=e;const s=await self.registration.getNotifications(),a=n||Number.MAX_VALUE;s.forEach((e=>{("0"===e.tag||e.data.chatId===t&&e.data.messageId<=a)&&e.close()}))}(e.data.payload))})(e),function(e){const{source:t,data:n}=e;if(t&&"clientReady"===n.type){const{id:e}=t,n=T.get(e);n?n.resolve():T.set(e,P.resolved())}}(e)}))})();
//# sourceMappingURL=5284.fd2bed624a76465d989e.js.map