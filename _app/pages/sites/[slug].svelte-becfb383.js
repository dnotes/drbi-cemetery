import{S as Q,i as J,s as O,e as g,c as v,b as p,L as ne,f as k,Q as q,K,d as u,R as ie,T as G,t as H,a as E,g as P,M as W,F as h,h as X,j as Y,m as Z,o as $,x as T,u as C,v as x,k as I,n as M,P as re,U as fe,w as oe,r as ce}from"../../chunks/vendor-84689ad3.js";import{b as ue}from"../../chunks/paths-28a87002.js";import{S as me}from"../../chunks/SiteList-89b7677f.js";function _e(n){let t,a,e,l;return{c(){t=g("img"),this.h()},l(s){t=v(s,"IMG",{class:!0,src:!0,alt:!0,title:!0}),this.h()},h(){p(t,"class",n[0]),ne(t.src,a=n[2])||p(t,"src",a),p(t,"alt",n[1]),p(t,"title",n[3])},m(s,i){k(s,t,i),e||(l=[q(t,"click",n[6]),q(t,"mouseover",n[7]),q(t,"mouseout",n[8]),q(t,"focus",n[9]),q(t,"blur",n[10])],e=!0)},p(s,[i]){i&1&&p(t,"class",s[0]),i&2&&p(t,"alt",s[1])},i:K,o:K,d(s){s&&u(t),e=!1,ie(l)}}}function he(n,t,a){let{image:e}=t,{alt:l=""}=t,{class:s=""}=t;typeof e=="string"&&(e={src:e,alt:l||"",title:""});let{src:i,alt:f,title:m}=e;f||(f=l||"");function V(o){G.call(this,n,o)}function y(o){G.call(this,n,o)}function S(o){G.call(this,n,o)}function B(o){G.call(this,n,o)}function w(o){G.call(this,n,o)}return n.$$set=o=>{"image"in o&&a(4,e=o.image),"alt"in o&&a(5,l=o.alt),"class"in o&&a(0,s=o.class)},[s,f,i,m,e,l,V,y,S,B,w]}class de extends Q{constructor(t){super();J(this,t,he,_e,O,{image:4,alt:5,class:0})}}function ee(n,t,a){const e=n.slice();return e[2]=t[a],e[4]=a,e}function te(n){let t,a,e,l=n[0].nickname+"",s,i;return{c(){t=g("br"),a=g("span"),e=H('"'),s=H(l),i=H('"'),this.h()},l(f){t=v(f,"BR",{}),a=v(f,"SPAN",{class:!0,style:!0});var m=E(a);e=P(m,'"'),s=P(m,l),i=P(m,'"'),m.forEach(u),this.h()},h(){p(a,"class","font-tulpen"),W(a,"font-size","70%")},m(f,m){k(f,t,m),k(f,a,m),h(a,e),h(a,s),h(a,i)},p(f,m){m&1&&l!==(l=f[0].nickname+"")&&X(s,l)},d(f){f&&u(t),f&&u(a)}}}function le(n){let t,a;return t=new de({props:{image:"/sites/"+n[0].image,alt:n[0].name,class:"w-2xl mx-auto"}}),{c(){Y(t.$$.fragment)},l(e){Z(t.$$.fragment,e)},m(e,l){$(t,e,l),a=!0},p(e,l){const s={};l&1&&(s.image="/sites/"+e[0].image),l&1&&(s.alt=e[0].name),t.$set(s)},i(e){a||(T(t.$$.fragment,e),a=!0)},o(e){C(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function ge(n){let t,a=n[1],e=[];for(let l=0;l<a.length;l+=1)e[l]=se(ee(n,a,l));return{c(){t=g("p");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=v(l,"P",{});var s=E(t);for(let i=0;i<e.length;i+=1)e[i].l(s);s.forEach(u)},m(l,s){k(l,t,s);for(let i=0;i<e.length;i+=1)e[i].m(t,null)},p(l,s){if(s&2){a=l[1];let i;for(i=0;i<a.length;i+=1){const f=ee(l,a,i);e[i]?e[i].p(f,s):(e[i]=se(f),e[i].c(),e[i].m(t,null))}for(;i<e.length;i+=1)e[i].d(1);e.length=a.length}},d(l){l&&u(t),re(e,l)}}}function ve(n){let t;return{c(){t=g("br")},l(a){t=v(a,"BR",{})},m(a,e){k(a,t,e)},d(a){a&&u(t)}}}function se(n){let t,a=n[2]+"",e,l=n[4]&&ve();return{c(){l&&l.c(),t=I(),e=H(a)},l(s){l&&l.l(s),t=M(s),e=P(s,a)},m(s,i){l&&l.m(s,i),k(s,t,i),k(s,e,i)},p:K,d(s){l&&l.d(s),s&&u(t),s&&u(e)}}}function pe(n){let t,a,e,l,s,i,f=n[0].name+"",m,V,y,S,B,w,o=n[0].html+"",F,L,D,j;document.title=t=""+(n[0].name+" "+(n[0].nickname&&`"${n[0].nickname}"`)+" | Desert Rose Memorial Garden");let _=n[0].nickname&&te(n),c=n[0].image&&le(n),b=n[1].length&&ge(n);return D=new me({}),{c(){a=I(),e=g("div"),l=g("div"),s=g("div"),i=g("h2"),m=H(f),V=I(),_&&_.c(),y=I(),c&&c.c(),S=I(),b&&b.c(),B=I(),w=g("div"),F=I(),L=g("div"),Y(D.$$.fragment),this.h()},l(r){fe('[data-svelte="svelte-zar3sd"]',document.head).forEach(u),a=M(r),e=v(r,"DIV",{class:!0});var z=E(e);l=v(z,"DIV",{class:!0,style:!0});var A=E(l);s=v(A,"DIV",{class:!0});var R=E(s);i=v(R,"H2",{});var U=E(i);m=P(U,f),V=M(U),_&&_.l(U),U.forEach(u),y=M(R),c&&c.l(R),S=M(R),b&&b.l(R),R.forEach(u),B=M(A),w=v(A,"DIV",{});var ae=E(w);ae.forEach(u),A.forEach(u),F=M(z),L=v(z,"DIV",{class:!0});var N=E(L);Z(D.$$.fragment,N),N.forEach(u),z.forEach(u),this.h()},h(){p(s,"class","text-center"),p(l,"class","max-w-full mb-8"),W(l,"width","672px"),p(L,"class","lg:w-64 lg:text-right lg:ml-8"),p(e,"class","flex flex-wrap justify-center")},m(r,d){k(r,a,d),k(r,e,d),h(e,l),h(l,s),h(s,i),h(i,m),h(i,V),_&&_.m(i,null),h(s,y),c&&c.m(s,null),h(s,S),b&&b.m(s,null),h(l,B),h(l,w),w.innerHTML=o,h(e,F),h(e,L),$(D,L,null),j=!0},p(r,[d]){(!j||d&1)&&t!==(t=""+(r[0].name+" "+(r[0].nickname&&`"${r[0].nickname}"`)+" | Desert Rose Memorial Garden"))&&(document.title=t),(!j||d&1)&&f!==(f=r[0].name+"")&&X(m,f),r[0].nickname?_?_.p(r,d):(_=te(r),_.c(),_.m(i,null)):_&&(_.d(1),_=null),r[0].image?c?(c.p(r,d),d&1&&T(c,1)):(c=le(r),c.c(),T(c,1),c.m(s,S)):c&&(ce(),C(c,1,1,()=>{c=null}),oe()),r[1].length&&b.p(r,d),(!j||d&1)&&o!==(o=r[0].html+"")&&(w.innerHTML=o)},i(r){j||(T(c),T(D.$$.fragment,r),j=!0)},o(r){C(c),C(D.$$.fragment,r),j=!1},d(r){r&&u(a),r&&u(e),_&&_.d(),c&&c.d(),b&&b.d(),x(D)}}}const De=!1,je=!1;async function Ie({fetch:n,page:t}){return{props:{site:(await n(`${ue}/sites.json`).then(l=>l.json())).find(l=>l.slug===t.params.slug)}}}function be(n,t,a){let{site:e}=t,l=[(e==null?void 0:e.born)&&`b. ${e.born}`,(e==null?void 0:e.deceased)&&`d. ${e.deceased}`].filter(Boolean);return n.$$set=s=>{"site"in s&&a(0,e=s.site)},[e,l]}class Me extends Q{constructor(t){super();J(this,t,be,pe,O,{site:0})}}export{Me as default,De as hydrate,Ie as load,je as router};
