import{S as v,i as b,s as k,W as w,k as c,l as o,m as i,h as l,n as u,b as d,F as p,X as g,C as h,E as x,q as m,r as _}from"../chunks/index.1b571520.js";import"../chunks/utils.73a3fb9b.js";import{p as E}from"../chunks/stores.82823db2.js";import"../chunks/index.dac61b29.js";function y(n){let e,r;return{c(){e=c("p"),r=m("An error occurred!")},l(t){e=o(t,"P",{});var a=i(e);r=_(a,"An error occurred!"),a.forEach(l)},m(t,a){d(t,e,a),p(e,r)},p:h,d(t){t&&l(e)}}}function C(n){let e,r=n[3].items[0].brief+"";return{c(){e=c("div"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=i(e);a.forEach(l),this.h()},h(){u(e,"class","w-full max-w-4xl mx-auto prose")},m(t,a){d(t,e,a),e.innerHTML=r},p:h,d(t){t&&l(e)}}}function D(n){let e,r;return{c(){e=c("p"),r=m("...waiting"),this.h()},l(t){e=o(t,"P",{class:!0});var a=i(e);r=_(a,"...waiting"),a.forEach(l),this.h()},h(){u(e,"class","text-center")},m(t,a){d(t,e,a),p(e,r)},p:h,d(t){t&&l(e)}}}function I(n){let e,r,t={ctx:n,current:null,token:null,hasCatch:!0,pending:D,then:C,catch:y,value:3,error:4};return w(n[0],t),{c(){e=c("div"),r=c("div"),t.block.c(),this.h()},l(a){e=o(a,"DIV",{class:!0});var s=i(e);r=o(s,"DIV",{class:!0});var f=i(r);t.block.l(f),f.forEach(l),s.forEach(l),this.h()},h(){u(r,"class","w-full"),u(e,"class","flex flex-col items-center h-full w-full")},m(a,s){d(a,e,s),p(e,r),t.block.m(r,t.anchor=null),t.mount=()=>r,t.anchor=null},p(a,[s]){n=a,g(t,n,s)},i:h,o:h,d(a){a&&l(e),t.block.d(),t.token=null,t=null}}}function P(n,e,r){let t;return x(n,E,s=>r(1,t=s)),t.params.id,[(async()=>await(await fetch("https://lazy-traffic.pockethost.io//api/collections/brief/records?filter=(club~%277nldrfiragiimw4%27)&sort=-created")).json())()]}class S extends v{constructor(e){super(),b(this,e,P,I,k,{})}}export{S as default};
