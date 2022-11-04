import{S as Ye,i as We,s as Xe,a as Ze,e as D,c as Qe,b as F,g as Z,t as V,d as Q,f as q,h as C,j as xe,o as $e,k as et,l as tt,m as nt,n as Ee,p as H,q as rt,r as at,u as ot,v as J,w as G,x as se,y as K,z as M,A as Ce}from"./chunks/index-750e33a9.js";import{g as Fe,f as Je,s as X,a as Oe,b as st,i as it}from"./chunks/singletons-5f234332.js";import{_ as Y}from"./chunks/preload-helper-b21cceae.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;he.delete(o)}return me(r,e)};const he=new Map;function ht(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${dt(n.body)}"]`);const c=document.querySelector(s);if(c!=null&&c.textContent){const{body:t,...i}=JSON.parse(c.textContent),f=c.getAttribute("data-ttl");return f&&he.set(e,{body:t,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,i))}return me(r,n)}function mt(r,e){const n=he.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);he.delete(r)}return me(r,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(r){const e=[],n=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${yt(r).map((c,t,i)=>{const f=decodeURIComponent(c),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(_)return e.push(_[1]),n.push(_[2]),"(?:/([^/]+))?";const y=t===i.length-1;return f?"/"+f.split(/\[(.+?)\](?!\])/).map((U,z)=>{if(z%2){const B=_t.exec(U);if(!B)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ie,x,le,te]=B;return e.push(le),n.push(te),x?"(.*?)":ie?"([^/]*)?":"([^/]+?)"}return y&&U.includes(".")&&(o=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r){return r.slice(1).split("/").filter(wt)}function bt(r,e,n,o,s){const c={};let t=-1;for(let i=0;i<n.length;i+=1){const f=n[i],d=o[i];let _=r[i+1]||"";if(d){const y=s[d];if(!y)throw new Error(`Missing "${d}" param matcher`);if(t=e.indexOf(`=${d}`,t+1),!(!_&&e.lastIndexOf("[[",t)>e.lastIndexOf("[...",t))&&!y(_))return}c[f]=_}return c}function vt(r,e,n,o){const s=new Set(e);return Object.entries(n).map(([i,[f,d,_]])=>{const{pattern:y,names:T,types:E}=gt(i),U={id:i,exec:z=>{const B=y.exec(z);if(B)return bt(B,i,T,E,o)},errors:[1,..._||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:c(f)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function c(i){const f=i<0;return f&&(i=~i),[f,r[i]]}function t(i){return i===void 0?i:[s.has(i),r[i]]}}function Et(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&se(e.$$.fragment,t),n=D()},m(t,i){e&&K(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&2&&(f.form=t[1]),s!==(s=t[0][0])){if(e){Z();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function kt(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[It]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&se(e.$$.fragment,t),n=D()},m(t,i){e&&K(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&1051&&(f.$$scope={dirty:i,ctx:t}),s!==(s=t[0][0])){if(e){Z();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function $t(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&se(e.$$.fragment,t),n=D()},m(t,i){e&&K(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&2&&(f.form=t[1]),s!==(s=t[0][1])){if(e){Z();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ot(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&se(e.$$.fragment,t),n=D()},m(t,i){e&&K(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&1043&&(f.$$scope={dirty:i,ctx:t}),s!==(s=t[0][1])){if(e){Z();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Rt(r){let e,n,o;var s=r[0][2];function c(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&se(e.$$.fragment,t),n=D()},m(t,i){e&&K(e,t,i),F(t,n,i),o=!0},p(t,i){const f={};if(i&16&&(f.data=t[4]),i&2&&(f.form=t[1]),s!==(s=t[0][2])){if(e){Z();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function It(r){let e,n,o,s;const c=[Ot,$t],t=[];function i(f,d){return f[0][2]?0:1}return e=i(r),n=t[e]=c[e](r),{c(){n.c(),o=D()},l(f){n.l(f),o=D()},m(f,d){t[e].m(f,d),F(f,o,d),s=!0},p(f,d){let _=e;e=i(f),e===_?t[e].p(f,d):(Z(),V(t[_],1,1,()=>{t[_]=null}),Q(),n=t[e],n?n.p(f,d):(n=t[e]=c[e](f),n.c()),q(n,1),n.m(o.parentNode,o))},i(f){s||(q(n),s=!0)},o(f){V(n),s=!1},d(f){t[e].d(f),f&&C(o)}}}function Ge(r){let e,n=r[6]&&Ke(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=nt(e);n&&n.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,s){F(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Ke(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&C(e)}}}function St(r){let e,n,o,s,c;const t=[kt,Et],i=[];function f(_,y){return _[0][1]?0:1}e=f(r),n=i[e]=t[e](r);let d=r[5]&&Ge(r);return{c(){n.c(),o=Ze(),d&&d.c(),s=D()},l(_){n.l(_),o=Qe(_),d&&d.l(_),s=D()},m(_,y){i[e].m(_,y),F(_,o,y),d&&d.m(_,y),F(_,s,y),c=!0},p(_,[y]){let T=e;e=f(_),e===T?i[e].p(_,y):(Z(),V(i[T],1,1,()=>{i[T]=null}),Q(),n=i[e],n?n.p(_,y):(n=i[e]=t[e](_),n.c()),q(n,1),n.m(o.parentNode,o)),_[5]?d?d.p(_,y):(d=Ge(_),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(_){c||(q(n),c=!0)},o(_){V(n),c=!1},d(_){i[e].d(_),_&&C(o),d&&d.d(_),_&&C(s)}}}function Lt(r,e,n){let{stores:o}=e,{page:s}=e,{components:c}=e,{form:t}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let _=!1,y=!1,T=null;return $e(()=>{const E=o.page.subscribe(()=>{_&&(n(6,y=!0),n(7,T=document.title||"untitled page"))});return n(5,_=!0),E}),r.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,c=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,i=E.data_0),"data_1"in E&&n(3,f=E.data_1),"data_2"in E&&n(4,d=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[c,t,i,f,d,_,y,T,o,s]}class At extends Ye{constructor(e){super(),We(this,e,Lt,St,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Nt=r=>/^\d+$/.test(r),jt={integer:Nt},_e=[()=>Y(()=>import("./chunks/0-d99f83ef.js"),["./chunks/0-d99f83ef.js","./chunks/_layout-1daba58d.js","./components/pages/_layout.svelte-31515c2a.js","./chunks/index-750e33a9.js","./chunks/theme-e8745f42.js","./chunks/config-d039572b.js","./assets/_layout-edf9ad3d.css"],import.meta.url),()=>Y(()=>import("./chunks/1-160997a7.js"),["./chunks/1-160997a7.js","./components/error.svelte-ae162408.js","./chunks/index-750e33a9.js","./chunks/stores-d2e84f67.js","./chunks/singletons-5f234332.js"],import.meta.url),()=>Y(()=>import("./chunks/2-db3274bf.js"),["./chunks/2-db3274bf.js","./chunks/_layout-b4ee359a.js","./components/pages/(item)/posts/_layout.svelte-57b7cf2f.js","./chunks/index-750e33a9.js","./chunks/singletons-5f234332.js"],import.meta.url),()=>Y(()=>import("./chunks/3-0fca2edb.js"),["./chunks/3-0fca2edb.js","./components/pages/(list)/_layout.svelte-699cb0be.js","./chunks/index-750e33a9.js","./chunks/singletons-5f234332.js","./chunks/stores-d2e84f67.js","./chunks/home-80138a57.js","./chunks/isExternalLink-6c714be6.js"],import.meta.url),()=>Y(()=>import("./chunks/4-8168256f.js"),["./chunks/4-8168256f.js","./components/pages/(item)/posts/_slug_/_page.svelte-e31d0cf1.js","./chunks/index-750e33a9.js","./chunks/preload-helper-b21cceae.js","./chunks/PostList-475ca048.js","./chunks/config-d039572b.js","./chunks/singletons-5f234332.js","./chunks/theme-e8745f42.js","./chunks/stores-d2e84f67.js","./chunks/seo-e187edec.js","./chunks/home-80138a57.js","./assets/_page-79e023df.css"],import.meta.url),()=>Y(()=>import("./chunks/5-02720f16.js"),["./chunks/5-02720f16.js","./components/pages/(list)/_page.svelte-3173bfc9.js","./chunks/index-750e33a9.js","./chunks/ListLayout-89728f5d.js","./chunks/singletons-5f234332.js","./chunks/config-d039572b.js","./chunks/PostList-475ca048.js","./chunks/seo-e187edec.js","./chunks/stores-d2e84f67.js"],import.meta.url),()=>Y(()=>import("./chunks/6-a44fb91d.js"),["./chunks/6-a44fb91d.js","./components/pages/(list)/about/_page.svelte-aaaa9c64.js","./chunks/index-750e33a9.js","./chunks/seo-e187edec.js","./chunks/stores-d2e84f67.js","./chunks/singletons-5f234332.js","./chunks/config-d039572b.js","./chunks/isExternalLink-6c714be6.js"],import.meta.url),()=>Y(()=>import("./chunks/7-3acd5e66.js"),["./chunks/7-3acd5e66.js","./components/pages/(list)/page/_page_integer_/_page.svelte-64d4ae3b.js","./chunks/index-750e33a9.js","./chunks/ListLayout-89728f5d.js","./chunks/singletons-5f234332.js","./chunks/config-d039572b.js","./chunks/PostList-475ca048.js","./chunks/seo-e187edec.js","./chunks/stores-d2e84f67.js"],import.meta.url)],Pt=[],Tt={"/(list)":[-6,[3]],"/(list)/about":[-7,[3]],"/(list)/page/[page=integer]":[-8,[3]],"/(item)/posts/[slug]":[-5,[2]]},Ut={handleError:({error:r})=>{console.error(r)}};class Re{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}const Dt="/__data.json";async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Bt=-2,Ct=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const n=e,o=Array(n.length);function s(c){if(c===qt)return;if(c===Ct)return NaN;if(c===Ft)return 1/0;if(c===Jt)return-1/0;if(c===Gt)return-0;if(c in o)return o[c];const t=n[c];if(!t||typeof t!="object")o[c]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[c]=new Date(t[1]);break;case"Set":const f=new Set;o[c]=f;for(let y=1;y<t.length;y+=1)f.add(s(t[y]));break;case"Map":const d=new Map;o[c]=d;for(let y=1;y<t.length;y+=2)d.set(s(t[y]),s(t[y+1]));break;case"RegExp":o[c]=new RegExp(t[1],t[2]);break;case"Object":o[c]=Object(t[1]);break;case"BigInt":o[c]=BigInt(t[1]);break;case"null":const _=Object.create(null);o[c]=_;for(let y=1;y<t.length;y+=2)_[t[y]]=s(t[y+1]);break}else{const i=new Array(t.length);o[c]=i;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Bt&&(i[f]=s(d))}}else{const i={};o[c]=i;for(const f in t){const d=t[f];i[f]=s(d)}}return o[c]}return s(0)}const He="sveltekit:scroll",W="sveltekit:index",ue=vt(_e,Pt,Tt,jt),Ie=_e[0],Se=_e[1];Ie();Se();let oe={};try{oe=JSON.parse(sessionStorage[He])}catch{}function ke(r){oe[r]=Oe()}function Mt({target:r,base:e,trailing_slash:n}){var Ve;const o=[];let s=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},i=!1,f=!1,d=!0,_=!1,y=!1,T,E=(Ve=history.state)==null?void 0:Ve[W];E||(E=Date.now(),history.replaceState({...history.state,[W]:E},"",location.href));const U=oe[E];U&&(history.scrollRestoration="manual",scrollTo(U.x,U.y));let z=!1,B,ie,x;async function le(){x=x||Promise.resolve(),await x,x=null;const a=new URL(location.href),p=ye(a,!0);s=null,await Ae(p,a,[])}async function te(a,{noscroll:p=!1,replaceState:h=!1,keepfocus:l=!1,state:u={}},m,g){return typeof a=="string"&&(a=new URL(a,Fe(document))),be({url:a,scroll:p?Oe():null,keepfocus:l,redirect_chain:m,details:{state:u,replaceState:h},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const p=ye(a,!1);if(!p)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:p.id,promise:Pe(p)},s.promise}async function Ae(a,p,h,l,u={},m){var $,k;ie=u;let g=a&&await Pe(a);if(g||(g=await De(p,null,ae(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(a==null?void 0:a.url)||p,ie!==u)return!1;if(g.type==="redirect")if(h.length>10||h.includes(p.pathname))g=await ce({status:500,error:ae(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return te(new URL(g.location,p).href,{},[...h,p.pathname],u),!1;else((k=($=g.props)==null?void 0:$.page)==null?void 0:k.status)>=400&&await X.updated.check()&&await fe(p);if(o.length=0,y=!1,_=!0,l&&l.details){const{details:b}=l,v=b.replaceState?0:1;b.state[W]=E+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(s=null,f){t=g.state,g.props.page&&(g.props.page.url=p);const b=de();T.$set(g.props),b()}else Ne(g);if(l){const{scroll:b,keepfocus:v}=l;if(!v){const R=document.body,S=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),S!==null?R.setAttribute("tabindex",S):R.removeAttribute("tabindex")}if(await Ce(),d){const R=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,g.props.page&&(B=g.props.page),m&&m(),_=!1}function Ne(a){var u,m;t=a.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),B=a.props.page;const h=de();T=new At({target:r,props:{...a.props,stores:X},hydrate:!0}),h();const l={from:null,to:pe("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(g=>g(l)),f=!0}async function ne({url:a,params:p,branch:h,status:l,error:u,route:m,form:g}){var S;const $=h.filter(Boolean),k={type:"loaded",state:{url:a,params:p,branch:h,error:u,route:m},props:{components:$.map(L=>L.node.component)}};g!==void 0&&(k.props.form=g);let b={},v=!B;for(let L=0;L<$.length;L+=1){const j=$[L];b={...b,...j.data},(v||!t.branch.some(P=>P===j))&&(k.props[`data_${L}`]=b,v=v||Object.keys((S=j.data)!=null?S:{}).length>0)}if(v||(v=Object.keys(B.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==u||g!==void 0||v){k.props.page={error:u,params:p,routeId:m&&m.id,status:l,url:a,form:g,data:v?b:B.data};const L=(j,P)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ge({loader:a,parent:p,url:h,params:l,routeId:u,server_data_node:m}){var b,v,R,S,L;let g=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let j=function(...I){for(const w of I){const{href:O}=new URL(w,h);$.dependencies.add(O)}};const P={routeId:u,params:new Proxy(l,{get:(I,w)=>($.params.add(w),I[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{$.url=!0}),async fetch(I,w){let O;I instanceof Request?(O=I.url,w={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...w}):O=I;const N=new URL(O,h).href;return j(N),f?mt(N,w):ht(O,N,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(R=await k.shared.load.call(null,P))!=null?R:null,g=g?await Vt(g):null}return{node:k,loader:a,server:m,shared:(S=k.shared)!=null&&S.load?{type:"data",data:g,uses:$}:null,data:(L=g!=null?g:m==null?void 0:m.data)!=null?L:null}}function je(a,p,h,l){if(y)return!0;if(!h)return!1;if(h.parent&&p||h.url&&a)return!0;for(const u of h.params)if(l[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function we(a,p){var h,l;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((h=a.uses.dependencies)!=null?h:[]),params:new Set((l=a.uses.params)!=null?l:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&p!=null?p:null}async function Pe({id:a,invalidating:p,url:h,params:l,route:u}){var I;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:g,leaf:$}=u,k=[...g,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,R=k.reduce((w,O,N)=>{var re;const A=t.branch[N],ee=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||je(v,w.some(Boolean),(re=A.server)==null?void 0:re.uses,l));return w.push(ee),w},[]);if(R.some(Boolean)){try{b=await ze(h,R)}catch(w){return ce({status:500,error:ae(w,{url:h,params:l,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const S=b==null?void 0:b.nodes;let L=!1;const j=k.map(async(w,O)=>{var re;if(!w)return;const N=t.branch[O],A=S==null?void 0:S[O];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!je(v,L,(re=N.shared)==null?void 0:re.uses,l))return N;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:w[1],url:h,params:l,routeId:u.id,parent:async()=>{var Be;const qe={};for(let ve=0;ve<O;ve+=1)Object.assign(qe,(Be=await j[ve])==null?void 0:Be.data);return qe},server_data_node:we(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of j)w.catch(()=>{});const P=[];for(let w=0;w<k.length;w+=1)if(k[w])try{P.push(await j[w])}catch(O){if(O instanceof Me)return{type:"redirect",location:O.location};let N=500,A;S!=null&&S.includes(O)?(N=(I=O.status)!=null?I:N,A=O.error):O instanceof Re?(N=O.status,A=O.body):A=ae(O,{params:l,url:h,routeId:u.id});const ee=await Te(w,P,m);return ee?await ne({url:h,params:l,branch:P.slice(0,ee.idx).concat(ee.node),status:N,error:A,route:u}):await De(h,u.id,A,N)}else P.push(void 0);return await ne({url:h,params:l,branch:P,status:200,error:null,route:u,form:p?void 0:null})}async function Te(a,p,h){for(;a--;)if(h[a]){let l=a;for(;!p[l];)l-=1;try{return{idx:l+1,node:{node:await h[a](),loader:h[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:p,url:h,routeId:l}){var b;const u={},m=await Ie();let g=null;if(m.server)try{const v=await ze(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||i)&&await fe(h)}const $=await ge({loader:Ie,url:h,params:u,routeId:l,parent:()=>Promise.resolve({}),server_data_node:we(g)}),k={node:await Se(),loader:Se,shared:null,server:null,data:null};return await ne({url:h,params:u,branch:[$,k],status:a,error:p,route:null})}function ye(a,p){if(Ue(a))return;const h=decodeURI(a.pathname.slice(e.length)||"/");for(const l of ue){const u=l.exec(h);if(u){const m=new URL(a.origin+lt(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:p,route:l,params:ct(u),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function be({url:a,scroll:p,keepfocus:h,redirect_chain:l,details:u,type:m,delta:g,nav_token:$,accepted:k,blocked:b}){var j,P,I,w;let v=!1;const R=ye(a,!1),S={from:pe("from",{params:t.params,routeId:(P=(j=t.route)==null?void 0:j.id)!=null?P:null,url:t.url}),to:pe("to",{params:(I=R==null?void 0:R.params)!=null?I:null,routeId:(w=R==null?void 0:R.route.id)!=null?w:null,url:a}),type:m};g!==void 0&&(S.delta=g);const L={...S,cancel:()=>{v=!0}};if(c.before_navigate.forEach(O=>O(L)),v){b();return}ke(E),k(),f&&X.navigating.set(S),await Ae(R,a,l,{scroll:p,keepfocus:h,details:u},$,()=>{c.after_navigate.forEach(O=>O(S)),X.navigating.set(null)})}async function De(a,p,h,l){return a.origin===location.origin&&a.pathname===location.pathname&&!i?await ce({status:l,error:h,url:a,routeId:p}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{$e(()=>(c.after_navigate.push(a),()=>{const p=c.after_navigate.indexOf(a);c.after_navigate.splice(p,1)}))},before_navigate:a=>{$e(()=>(c.before_navigate.push(a),()=>{const p=c.before_navigate.indexOf(a);c.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(_||!f)&&(d=!1)},goto:(a,p={})=>te(a,p,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:p}=new URL(a,location.href);o.push(h=>h.href===p)}return le()},invalidateAll:()=>(y=!0,le()),prefetch:async a=>{const p=new URL(a,Fe(document));await Le(p)},prefetch_routes:async a=>{const h=(a?ue.filter(l=>a.some(u=>l.exec(u))):ue).map(l=>Promise.all([...l.layouts,l.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async a=>{if(a.type==="error"){const p=new URL(location.href),{branch:h,route:l}=t;if(!l)return;const u=await Te(t.branch.length,h,l.errors);if(u){const m=await ne({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:l});t=m.state;const g=de();T.$set(m.props),g()}}else if(a.type==="redirect")te(a.location,{},[]);else{const p={form:a.data,page:{...B,form:a.data,status:a.status}},h=de();T.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,$;let u=!1;const m={from:pe("from",{params:t.params,routeId:($=(g=t.route)==null?void 0:g.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};c.before_navigate.forEach(k=>k(m)),u?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(E);try{sessionStorage[He]=JSON.stringify(oe)}catch{}}});const a=l=>{const{url:u,options:m}=Je(l);if(u&&m.prefetch){if(Ue(u))return;Le(u)}};let p;const h=l=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=l.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:u,url:m,options:g}=Je(l);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||g.reload||($?u.target.baseVal:u.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){z=!0,ke(E),t.url=m,X.page.set({...B,url:m}),X.page.notify();return}be({url:m,scroll:g.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[W]===E)return;const u=l.state[W]-E;be({url:new URL(location.href),scroll:oe[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{E=l.state[W]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[W]:++E},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:p,node_ids:h,params:l,routeId:u,data:m,form:g})=>{var b;i=!0;const $=new URL(location.href);let k;try{const v=h.map(async(R,S)=>{const L=m[S];return ge({loader:_e[R],url:$,params:l,routeId:u,parent:async()=>{const j={};for(let P=0;P<S;P+=1)Object.assign(j,(await v[P]).data);return j},server_data_node:we(L)})});k=await ne({url:$,params:l,branch:await Promise.all(v),status:a,error:p,form:g,route:(b=ue.find(R=>R.id===u))!=null?b:null})}catch(v){if(v instanceof Me){await fe(new URL(v.location,location.href));return}k=await ce({status:v instanceof Re?v.status:500,error:ae(v,{url:$,params:l,routeId:u}),url:$,routeId:u})}Ne(k)}}}async function ze(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Dt;const o=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Kt(s)}function ae(r,e){var n;return r instanceof Re?r.body:(n=Ut.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function de(){return()=>{}}async function Xt({env:r,hydrate:e,paths:n,target:o,trailing_slash:s}){st(n);const c=Mt({target:o,base:n.base,trailing_slash:s});it({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Xt as start};
