import{S as C,i as F,s as K,e as g,c as v,b as _,L as x,f as w,Q as q,K as P,d as f,R as ee,T as B,j as Q,m as $,o as z,x as G,u as T,v as J,a as D,k as L,t as N,n as S,g as O,P as te,U as le,M as se,F as h,w as ae,r as ie}from"../../chunks/vendor-84689ad3.js";import{b as ne}from"../../chunks/paths-28a87002.js";import{S as re}from"../../chunks/SiteList-89b7677f.js";function oe(a){let t,n,e,l;return{c(){t=g("img"),this.h()},l(s){t=v(s,"IMG",{class:!0,src:!0,alt:!0,title:!0}),this.h()},h(){_(t,"class",a[0]),x(t.src,n=a[2])||_(t,"src",n),_(t,"alt",a[1]),_(t,"title",a[3])},m(s,i){w(s,t,i),e||(l=[q(t,"click",a[6]),q(t,"mouseover",a[7]),q(t,"mouseout",a[8]),q(t,"focus",a[9]),q(t,"blur",a[10])],e=!0)},p(s,[i]){i&1&&_(t,"class",s[0]),i&2&&_(t,"alt",s[1])},i:P,o:P,d(s){s&&f(t),e=!1,ee(l)}}}function ce(a,t,n){let{image:e}=t,{alt:l=""}=t,{class:s=""}=t;typeof e=="string"&&(e={src:e,alt:l||"",title:""});let{src:i,alt:u,title:V}=e;u||(u=l||"");function E(r){B.call(this,a,r)}function y(r){B.call(this,a,r)}function p(r){B.call(this,a,r)}function j(r){B.call(this,a,r)}function R(r){B.call(this,a,r)}return a.$$set=r=>{"image"in r&&n(4,e=r.image),"alt"in r&&n(5,l=r.alt),"class"in r&&n(0,s=r.class)},[s,u,i,V,e,l,E,y,p,j,R]}class fe extends C{constructor(t){super();F(this,t,ce,oe,K,{image:4,alt:5,class:0})}}function W(a,t,n){const e=a.slice();return e[3]=t[n],e[5]=n,e}function X(a){let t,n;return t=new fe({props:{image:"/sites/"+a[0].image,alt:a[0].name,class:"w-2xl mx-auto"}}),{c(){Q(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,l){z(t,e,l),n=!0},p(e,l){const s={};l&1&&(s.image="/sites/"+e[0].image),l&1&&(s.alt=e[0].name),t.$set(s)},i(e){n||(G(t.$$.fragment,e),n=!0)},o(e){T(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function ue(a){let t,n=a[1],e=[];for(let l=0;l<n.length;l+=1)e[l]=Y(W(a,n,l));return{c(){t=g("p");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=v(l,"P",{});var s=D(t);for(let i=0;i<e.length;i+=1)e[i].l(s);s.forEach(f)},m(l,s){w(l,t,s);for(let i=0;i<e.length;i+=1)e[i].m(t,null)},p(l,s){if(s&2){n=l[1];let i;for(i=0;i<n.length;i+=1){const u=W(l,n,i);e[i]?e[i].p(u,s):(e[i]=Y(u),e[i].c(),e[i].m(t,null))}for(;i<e.length;i+=1)e[i].d(1);e.length=n.length}},d(l){l&&f(t),te(e,l)}}}function me(a){let t;return{c(){t=g("br")},l(n){t=v(n,"BR",{})},m(n,e){w(n,t,e)},d(n){n&&f(t)}}}function Y(a){let t,n=a[3]+"",e,l=a[5]&&me();return{c(){l&&l.c(),t=L(),e=N(n)},l(s){l&&l.l(s),t=S(s),e=O(s,n)},m(s,i){l&&l.m(s,i),w(s,t,i),w(s,e,i)},p:P,d(s){l&&l.d(s),s&&f(t),s&&f(e)}}}function _e(a){let t,n,e,l,s,i,u,V,E,y,p,j=a[0].html+"",R,r,b,I;document.title=t=""+(a[2]+" | Desert Rose Memorial Garden");let c=a[0].image&&X(a),d=a[1].length&&ue(a);return b=new re({props:{current:a[0].slug}}),{c(){n=L(),e=g("div"),l=g("div"),s=g("div"),i=g("h2"),u=N(a[2]),V=L(),c&&c.c(),E=L(),d&&d.c(),y=L(),p=g("div"),R=L(),r=g("div"),Q(b.$$.fragment),this.h()},l(o){le('[data-svelte="svelte-1sx6m7a"]',document.head).forEach(f),n=S(o),e=v(o,"DIV",{class:!0});var k=D(e);l=v(k,"DIV",{class:!0,style:!0});var H=D(l);s=v(H,"DIV",{class:!0});var M=D(s);i=v(M,"H2",{});var U=D(i);u=O(U,a[2]),U.forEach(f),V=S(M),c&&c.l(M),E=S(M),d&&d.l(M),M.forEach(f),y=S(H),p=v(H,"DIV",{});var Z=D(p);Z.forEach(f),H.forEach(f),R=S(k),r=v(k,"DIV",{class:!0});var A=D(r);$(b.$$.fragment,A),A.forEach(f),k.forEach(f),this.h()},h(){_(s,"class","text-center"),_(l,"class","max-w-full mb-8"),se(l,"width","672px"),_(r,"class","lg:w-64 lg:text-right lg:ml-8"),_(e,"class","flex flex-wrap justify-center")},m(o,m){w(o,n,m),w(o,e,m),h(e,l),h(l,s),h(s,i),h(i,u),h(s,V),c&&c.m(s,null),h(s,E),d&&d.m(s,null),h(l,y),h(l,p),p.innerHTML=j,h(e,R),h(e,r),z(b,r,null),I=!0},p(o,[m]){(!I||m&4)&&t!==(t=""+(o[2]+" | Desert Rose Memorial Garden"))&&(document.title=t),o[0].image?c?(c.p(o,m),m&1&&G(c,1)):(c=X(o),c.c(),G(c,1),c.m(s,E)):c&&(ie(),T(c,1,1,()=>{c=null}),ae()),o[1].length&&d.p(o,m),(!I||m&1)&&j!==(j=o[0].html+"")&&(p.innerHTML=j);const k={};m&1&&(k.current=o[0].slug),b.$set(k)},i(o){I||(G(c),G(b.$$.fragment,o),I=!0)},o(o){T(c),T(b.$$.fragment,o),I=!1},d(o){o&&f(n),o&&f(e),c&&c.d(),d&&d.d(),J(b)}}}const pe=!1,be=!1;async function ke({fetch:a,page:t}){return{props:{site:(await a(`${ne}/sites.json`).then(l=>l.json())).find(l=>l.slug===t.params.slug)}}}function he(a,t,n){let{site:e}=t,l=[(e==null?void 0:e.born)&&`b. ${e.born}`,(e==null?void 0:e.deceased)&&`d. ${e.deceased}`].filter(Boolean),s=e.name.replace(/^([^,]+), *([^,]+)/,`$2 ${e.nickname?`"${e.nickname}" `:""}$1`);return a.$$set=i=>{"site"in i&&n(0,e=i.site)},[e,l,s]}class we extends C{constructor(t){super();F(this,t,he,_e,K,{site:0})}}export{we as default,pe as hydrate,ke as load,be as router};