import{S as A,i as R,s as T,e as g,t as I,k as j,c as v,a as w,g as L,d as m,n as E,b as _,f as x,F as p,h as C,L as F,K as S,N as G}from"../../chunks/vendor-5bb5fb32.js";import{b as D}from"../../chunks/paths-28a87002.js";function q(o,s,a){const i=o.slice();return i[1]=s[a],i}function y(o){let s,a,i=o[1].name+"",l,f,d;return{c(){s=g("li"),a=g("a"),l=I(i),d=j(),this.h()},l(c){s=v(c,"LI",{});var n=w(s);a=v(n,"A",{rel:!0,href:!0});var u=w(a);l=L(u,i),u.forEach(m),d=E(n),n.forEach(m),this.h()},h(){_(a,"rel","prefetch"),_(a,"href",f=""+(D+"/sites/"+o[1].slug))},m(c,n){x(c,s,n),p(s,a),p(a,l),p(s,d)},p(c,n){n&1&&i!==(i=c[1].name+"")&&C(l,i),n&1&&f!==(f=""+(D+"/sites/"+c[1].slug))&&_(a,"href",f)},d(c){c&&m(s)}}}function K(o){let s,a,i,l,f,d,c,n,u=o[0],r=[];for(let e=0;e<u.length;e+=1)r[e]=y(q(o,u,e));return{c(){s=g("img"),i=j(),l=g("div"),f=g("p"),d=I("The following is a list of souls whose remains have been laid to rest in Desert Rose:"),c=j(),n=g("ul");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){s=v(e,"IMG",{class:!0,src:!0,alt:!0}),i=E(e),l=v(e,"DIV",{class:!0});var h=w(l);f=v(h,"P",{});var t=w(f);d=L(t,"The following is a list of souls whose remains have been laid to rest in Desert Rose:"),t.forEach(m),c=E(h),n=v(h,"UL",{});var b=w(n);for(let k=0;k<r.length;k+=1)r[k].l(b);b.forEach(m),h.forEach(m),this.h()},h(){_(s,"class","max-w-md lg:max-w-2xl mx-auto md:ml-8 md:float-right"),F(s.src,a="/images/gravesites.jpg")||_(s,"src",a),_(s,"alt","A row of gravesites in the sand, each lined in brick and covered with small desert stones."),_(l,"class","p:10 max-w-md mx-auto md:mx-0")},m(e,h){x(e,s,h),x(e,i,h),x(e,l,h),p(l,f),p(f,d),p(l,c),p(l,n);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(e,[h]){if(h&1){u=e[0];let t;for(t=0;t<u.length;t+=1){const b=q(e,u,t);r[t]?r[t].p(b,h):(r[t]=y(b),r[t].c(),r[t].m(n,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=u.length}},i:S,o:S,d(e){e&&m(s),e&&m(i),e&&m(l),G(r,e)}}}async function U({fetch:o}){return{props:{sites:await o(`${D}/sites.json`).then(a=>a.json())}}}function M(o,s,a){let{sites:i}=s;return o.$$set=l=>{"sites"in l&&a(0,i=l.sites)},[i]}class V extends A{constructor(s){super();R(this,s,M,K,T,{sites:0})}}export{V as default,U as load};
