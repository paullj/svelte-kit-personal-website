import{S as X,i as Y,s as Z,w as x,a as y,e as T,x as ee,c as I,y as le,b as d,f as te,t as ie,z as se,h as u,H as re,k as v,l as g,m as b,n as k,Q as G,q as D,r as L,E as p,u as H}from"../../../../chunks/index-750e33a9.js";import{S as ae,d as $}from"../../../../chunks/seo-e187edec.js";import{p as ne}from"../../../../chunks/stores-75980091.js";import{o as S}from"../../../../chunks/config-d039572b.js";import{d as M}from"../../../../chunks/singletons-a37c3c78.js";import{b as P}from"../../../../chunks/isExternalLink-6c714be6.js";function N(n,e,i){const l=n.slice();return l[4]=e[i][0],l[5]=e[i][1],l}function q(n,e,i){const l=n.slice();return l[8]=e[i].title,l[9]=e[i].subtitle,l[10]=e[i].date,l[11]=e[i].description,l[12]=e[i].links,l}function z(n,e,i){const l=n.slice();return l[15]=e[i][0],l[16]=e[i][1],l}function A(n){let e,i=n[0].summary+"";return{c(){e=v("p"),this.h()},l(l){e=g(l,"P",{class:!0});var t=b(e);t.forEach(u),this.h()},h(){k(e,"class","mb-4 prose prose-sky dark:prose-invert font-extralight")},m(l,t){d(l,e,t),e.innerHTML=i},p(l,t){t&1&&i!==(i=l[0].summary+"")&&(e.innerHTML=i)},d(l){l&&u(e)}}}function C(n){let e,i=Object.entries(n[0].sections),l=[];for(let t=0;t<i.length;t+=1)l[t]=W(N(n,i,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=T()},l(t){for(let r=0;r<l.length;r+=1)l[r].l(t);e=T()},m(t,r){for(let s=0;s<l.length;s+=1)l[s].m(t,r);d(t,e,r)},p(t,r){if(r&1){i=Object.entries(t[0].sections);let s;for(s=0;s<i.length;s+=1){const h=N(t,i,s);l[s]?l[s].p(h,r):(l[s]=W(h),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},d(t){G(l,t),t&&u(e)}}}function Q(n){let e,i=n[8]+"",l;return{c(){e=v("p"),l=D(i),this.h()},l(t){e=g(t,"P",{class:!0});var r=b(e);l=L(r,i),r.forEach(u),this.h()},h(){k(e,"class","mr-2 font-light")},m(t,r){d(t,e,r),p(e,l)},p(t,r){r&1&&i!==(i=t[8]+"")&&H(l,i)},d(t){t&&u(e)}}}function U(n){let e,i=n[9]+"",l;return{c(){e=v("p"),l=D(i),this.h()},l(t){e=g(t,"P",{class:!0});var r=b(e);l=L(r,i),r.forEach(u),this.h()},h(){k(e,"class","font-medium tracking-wide text-primary-40 dark:text-primary-30")},m(t,r){d(t,e,r),p(e,l)},p(t,r){r&1&&i!==(i=t[9]+"")&&H(l,i)},d(t){t&&u(e)}}}function B(n){let e,i=Object.entries(n[12]),l=[];for(let t=0;t<i.length;t+=1)l[t]=F(z(n,i,t));return{c(){e=v("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var r=b(e);for(let s=0;s<l.length;s+=1)l[s].l(r);r.forEach(u),this.h()},h(){k(e,"class","mr-4 space-x-2 text-sm")},m(t,r){d(t,e,r);for(let s=0;s<l.length;s+=1)l[s].m(e,null)},p(t,r){if(r&1){i=Object.entries(t[12]);let s;for(s=0;s<i.length;s+=1){const h=z(t,i,s);l[s]?l[s].p(h,r):(l[s]=F(h),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},d(t){t&&u(e),G(l,t)}}}function F(n){let e,i=n[15]+"",l,t;return{c(){e=v("a"),l=D(i),this.h()},l(r){e=g(r,"A",{href:!0,class:!0});var s=b(e);l=L(s,i),s.forEach(u),this.h()},h(){k(e,"href",t=""+((P(n[16])?M:"")+n[16])),k(e,"class","underline text-accent-light")},m(r,s){d(r,e,s),p(e,l)},p(r,s){s&1&&i!==(i=r[15]+"")&&H(l,i),s&1&&t!==(t=""+((P(r[16])?M:"")+r[16]))&&k(e,"href",t)},d(r){r&&u(e)}}}function J(n){let e,i=n[10]+"",l;return{c(){e=v("div"),l=D(i),this.h()},l(t){e=g(t,"DIV",{class:!0});var r=b(e);l=L(r,i),r.forEach(u),this.h()},h(){k(e,"class","font-medium text-primary-40 dark:text-primary-30")},m(t,r){d(t,e,r),p(e,l)},p(t,r){r&1&&i!==(i=t[10]+"")&&H(l,i)},d(t){t&&u(e)}}}function K(n){let e,i=n[11]+"";return{c(){e=v("div"),this.h()},l(l){e=g(l,"DIV",{class:!0});var t=b(e);t.forEach(u),this.h()},h(){k(e,"class","max-w-full ml-4 leading-tight prose-sm prose font-extralight text-primary-30 dark:text-primary-20 prose-sky dark:prose-invert")},m(l,t){d(l,e,t),e.innerHTML=i},p(l,t){t&1&&i!==(i=l[11]+"")&&(e.innerHTML=i)},d(l){l&&u(e)}}}function R(n){let e,i,l,t,r,s,h,E,a=n[8]&&Q(n),o=n[9]&&U(n),f=n[12]&&B(n),_=n[10]&&J(n),c=n[11]&&K(n);return{c(){e=v("li"),i=v("div"),l=v("div"),a&&a.c(),t=y(),o&&o.c(),r=y(),s=v("div"),f&&f.c(),h=y(),_&&_.c(),E=y(),c&&c.c(),this.h()},l(m){e=g(m,"LI",{class:!0});var w=b(e);i=g(w,"DIV",{class:!0});var O=b(i);l=g(O,"DIV",{class:!0});var V=b(l);a&&a.l(V),t=I(V),o&&o.l(V),V.forEach(u),r=I(O),s=g(O,"DIV",{class:!0});var j=b(s);f&&f.l(j),h=I(j),_&&_.l(j),j.forEach(u),O.forEach(u),E=I(w),c&&c.l(w),w.forEach(u),this.h()},h(){k(l,"class","flex flex-row flex-wrap items-center flex-grow leading-tight"),k(s,"class","flex flex-row items-center"),k(i,"class","flex flex-row items-start"),k(e,"class","mb-4")},m(m,w){d(m,e,w),p(e,i),p(i,l),a&&a.m(l,null),p(l,t),o&&o.m(l,null),p(i,r),p(i,s),f&&f.m(s,null),p(s,h),_&&_.m(s,null),p(e,E),c&&c.m(e,null)},p(m,w){m[8]?a?a.p(m,w):(a=Q(m),a.c(),a.m(l,t)):a&&(a.d(1),a=null),m[9]?o?o.p(m,w):(o=U(m),o.c(),o.m(l,null)):o&&(o.d(1),o=null),m[12]?f?f.p(m,w):(f=B(m),f.c(),f.m(s,h)):f&&(f.d(1),f=null),m[10]?_?_.p(m,w):(_=J(m),_.c(),_.m(s,null)):_&&(_.d(1),_=null),m[11]?c?c.p(m,w):(c=K(m),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(m){m&&u(e),a&&a.d(),o&&o.d(),f&&f.d(),_&&_.d(),c&&c.d()}}}function W(n){let e,i=n[4]+"",l,t,r,s,h,E,a=n[5],o=[];for(let f=0;f<a.length;f+=1)o[f]=R(q(n,a,f));return{c(){e=v("h3"),l=D(i),t=y(),r=v("ul");for(let f=0;f<o.length;f+=1)o[f].c();s=y(),h=v("li"),E=y(),this.h()},l(f){e=g(f,"H3",{class:!0});var _=b(e);l=L(_,i),_.forEach(u),t=I(f),r=g(f,"UL",{});var c=b(r);for(let m=0;m<o.length;m+=1)o[m].l(c);s=I(c),h=g(c,"LI",{}),b(h).forEach(u),E=I(c),c.forEach(u),this.h()},h(){k(e,"class","text-xl underline capitalize")},m(f,_){d(f,e,_),p(e,l),d(f,t,_),d(f,r,_);for(let c=0;c<o.length;c+=1)o[c].m(r,null);p(r,s),p(r,h),p(r,E)},p(f,_){if(_&1&&i!==(i=f[4]+"")&&H(l,i),_&1){a=f[5];let c;for(c=0;c<a.length;c+=1){const m=q(f,a,c);o[c]?o[c].p(m,_):(o[c]=R(m),o[c].c(),o[c].m(r,s))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}},d(f){f&&u(e),f&&u(t),f&&u(r),G(o,f)}}}function fe(n){var E;let e,i,l,t,r;e=new ae({props:{title:n[2],description:n[3],keywords:(E=$.keywords)==null?void 0:E.join(", "),openGraph:{title:n[2],description:n[3],url:$.url,type:"website",images:[{url:`${$.url}/api/image.png`,width:S.width,height:S.height,alt:`${$.title} Open Graph image`}]}}});let s=n[0].summary&&A(n),h=n[0].sections&&C(n);return{c(){x(e.$$.fragment),i=y(),s&&s.c(),l=y(),h&&h.c(),t=T()},l(a){ee(e.$$.fragment,a),i=I(a),s&&s.l(a),l=I(a),h&&h.l(a),t=T()},m(a,o){le(e,a,o),d(a,i,o),s&&s.m(a,o),d(a,l,o),h&&h.m(a,o),d(a,t,o),r=!0},p(a,[o]){const f={};o&2&&(f.openGraph={title:a[2],description:a[3],url:$.url,type:"website",images:[{url:`${$.url}/api/image.png`,width:S.width,height:S.height,alt:`${$.title} Open Graph image`}]}),e.$set(f),a[0].summary?s?s.p(a,o):(s=A(a),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),a[0].sections?h?h.p(a,o):(h=C(a),h.c(),h.m(t.parentNode,t)):h&&(h.d(1),h=null)},i(a){r||(te(e.$$.fragment,a),r=!0)},o(a){ie(e.$$.fragment,a),r=!1},d(a){se(e,a),a&&u(i),s&&s.d(a),a&&u(l),h&&h.d(a),a&&u(t)}}}function oe(n,e,i){let l;re(n,ne,h=>i(1,l=h));let{data:t}=e;const r=`${$.title} - About`,s=$.description;return n.$$set=h=>{"data"in h&&i(0,t=h.data)},[t,l,r,s]}class de extends X{constructor(e){super(),Y(this,e,oe,fe,Z,{data:0})}}export{de as default};