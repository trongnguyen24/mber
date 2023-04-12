import{o as Ne,t as se}from"../chunks/index.1b571520.js";import{S as Me,a as He,I as T,g as $e,f as xe,b as ge,c as ie,s as D,i as Te,d as W,e as H,P as De,h as ze}from"../chunks/singletons.0d3e7b8e.js";function Be(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function Ge(t){return t.split("%25").map(decodeURI).join("%25")}function Ye(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const We=["href","pathname","search","searchParams","toString","toJSON"];function Xe(t,r){const l=new URL(t);for(const i of We){let m=l[i];Object.defineProperty(l,i,{get(){return r(),m},enumerable:!0,configurable:!0})}return Ze(l),l}function Ze(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Qe="/__data.json";function et(t){return t.replace(/\/$/,"")+Qe}function Ve(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ce(t,r){const l=JSON.stringify(r);try{sessionStorage[t]=l}catch{}}function tt(...t){let r=5381;for(const l of t)if(typeof l=="string"){let i=l.length;for(;i;)r=r*33^l.charCodeAt(--i)}else if(ArrayBuffer.isView(l)){const i=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let m=i.length;for(;m;)r=r*33^i[--m]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const ce=window.fetch;window.fetch=(t,r)=>((t instanceof Request?t.method:r?.method||"GET")!=="GET"&&Z.delete(ve(t)),ce(t,r));const Z=new Map;function nt(t,r){const l=ve(t,r),i=document.querySelector(l);if(i?.textContent){const{body:m,...d}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&Z.set(l,{body:m,init:d,ttl:1e3*Number(S)}),Promise.resolve(new Response(m,d))}return ce(t,r)}function at(t,r,l){if(Z.size>0){const i=ve(t,l),m=Z.get(i);if(m){if(performance.now()<m.ttl&&["default","force-cache","only-if-cached",void 0].includes(l?.cache))return new Response(m.body,m.init);Z.delete(i)}}return ce(r,l)}function ve(t,r){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r?.headers||r?.body){const m=[];r.headers&&m.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&m.push(r.body),i+=`[data-hash="${tt(...m)}"]`}return i}const rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ot(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${it(t).map(i=>{const m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(m)return r.push({name:m[1],matcher:m[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return r.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((w,_)=>{if(_%2){if(w.startsWith("x+"))return _e(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return _e(String.fromCharCode(...w.slice(2).split("-").map(x=>parseInt(x,16))));const p=rt.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,P,I,b,A]=p;return r.push({name:b,matcher:A,optional:!!P,rest:!!I,chained:I?_===1&&S[0]==="":!1}),I?"(.*?)":P?"([^/]*)?":"([^/]+?)"}return _e(w)}).join("")}).join("")}/?$`),params:r}}function st(t){return!/^\([^)]+\)$/.test(t)}function it(t){return t.slice(1).split("/").filter(st)}function ct(t,r,l){const i={},m=t.slice(1);let d=0;for(let S=0;S<r.length;S+=1){const c=r[S],w=m[S-d];if(c.chained&&c.rest&&d){i[c.name]=m.slice(S-d,S+1).filter(_=>_).join("/"),d=0;continue}if(w===void 0){c.rest&&(i[c.name]="");continue}if(!c.matcher||l[c.matcher](w)){i[c.name]=w;const _=r[S+1],p=m[S+1];_&&!_.rest&&p&&(d=0);continue}if(c.optional&&c.chained){d++;continue}return}if(!d)return i}function _e(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function lt({nodes:t,server_loads:r,dictionary:l,matchers:i}){const m=new Set(r);return Object.entries(l).map(([c,[w,_,p]])=>{const{pattern:P,params:I}=ot(c),b={id:c,exec:A=>{const x=P.exec(A);if(x)return ct(x,I,i)},errors:[1,...p||[]].map(A=>t[A]),layouts:[0,..._||[]].map(S),leaf:d(w)};return b.errors.length=b.layouts.length=Math.max(b.errors.length,b.layouts.length),b});function d(c){const w=c<0;return w&&(c=~c),[w,t[c]]}function S(c){return c===void 0?c:[m.has(c),t[c]]}}let X=class{constructor(r,l){this.status=r,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}},qe=class{constructor(r,l){this.status=r,this.location=l}};async function ft(t){for(const r in t)if(typeof t[r]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([l,i])=>[l,await i])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ut=-1,dt=-2,pt=-3,ht=-4,mt=-5,gt=-6;function _t(t,r){if(typeof t=="number")return m(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const l=t,i=Array(l.length);function m(d,S=!1){if(d===ut)return;if(d===pt)return NaN;if(d===ht)return 1/0;if(d===mt)return-1/0;if(d===gt)return-0;if(S)throw new Error("Invalid input");if(d in i)return i[d];const c=l[d];if(!c||typeof c!="object")i[d]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const w=c[0],_=r?.[w];if(_)return i[d]=_(m(c[1]));switch(w){case"Date":i[d]=new Date(c[1]);break;case"Set":const p=new Set;i[d]=p;for(let b=1;b<c.length;b+=1)p.add(m(c[b]));break;case"Map":const P=new Map;i[d]=P;for(let b=1;b<c.length;b+=2)P.set(m(c[b]),m(c[b+1]));break;case"RegExp":i[d]=new RegExp(c[1],c[2]);break;case"Object":i[d]=Object(c[1]);break;case"BigInt":i[d]=BigInt(c[1]);break;case"null":const I=Object.create(null);i[d]=I;for(let b=1;b<c.length;b+=2)I[c[b]]=m(c[b+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(c.length);i[d]=w;for(let _=0;_<c.length;_+=1){const p=c[_];p!==dt&&(w[_]=m(p))}}else{const w={};i[d]=w;for(const _ in c){const p=c[_];w[_]=m(p)}}return i[d]}return m(0)}function yt(t){return t.filter(r=>r!=null)}const F=Ve(Me)??{},Y=Ve(He)??{};function ye(t){F[t]=W()}function wt(t,r){const l=lt(t),i=t.nodes[0],m=t.nodes[1];i(),m();const d=document.documentElement,S=[],c=[];let w=null;const _={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},P=!1,I=!1,b=!0,A=!1,x=!1,M=!1,C=!1,V,O=history.state?.[T];O||(O=Date.now(),history.replaceState({...history.state,[T]:O},"",location.href));const le=F[O];le&&(history.scrollRestoration="manual",scrollTo(le.x,le.y));let q,be,Q;async function Ee(){Q=Q||Promise.resolve(),await Q,Q=null;const e=new URL(location.href),n=K(e,!0);w=null,await Le(n,e,[])}function ke(e){c.some(n=>n?.snapshot)&&(Y[e]=c.map(n=>n?.snapshot?.capture()))}function Se(e){Y[e]?.forEach((n,a)=>{c[a]?.snapshot?.restore(n)})}async function fe(e,{noScroll:n=!1,replaceState:a=!1,keepFocus:o=!1,state:s={},invalidateAll:f=!1},g,u){return typeof e=="string"&&(e=new URL(e,$e(document))),ae({url:e,scroll:n?W():null,keepfocus:o,redirect_chain:g,details:{state:s,replaceState:a},nav_token:u,accepted:()=>{f&&(C=!0)},blocked:()=>{},type:"goto"})}async function Re(e){return w={id:e.id,promise:Oe(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function ee(...e){const a=l.filter(o=>e.some(s=>o.exec(s))).map(o=>Promise.all([...o.layouts,o.leaf].map(s=>s?.[1]())));await Promise.all(a)}async function Le(e,n,a,o,s,f={},g){be=f;let u=e&&await Oe(e);if(u||(u=await je(n,{id:null},await B(new Error(`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)),n=e?.url||n,be!==f)return!1;if(u.type==="redirect")if(a.length>10||a.includes(n.pathname))u=await te({status:500,error:await B(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return fe(new URL(u.location,n).href,{},[...a,n.pathname],f),!1;else u.props.page?.status>=400&&await D.updated.check()&&await z(n);if(S.length=0,C=!1,A=!0,o&&(ye(o),ke(o)),u.props.page?.url&&u.props.page.url.pathname!==n.pathname&&(n.pathname=u.props.page?.url.pathname),s&&s.details){const{details:h}=s,v=h.replaceState?0:1;if(h.state[T]=O+=v,history[h.replaceState?"replaceState":"pushState"](h.state,"",n),!h.replaceState){let E=O+1;for(;Y[E]||F[E];)delete Y[E],delete F[E],E+=1}}if(w=null,I?(p=u.state,u.props.page&&(u.props.page.url=n),V.$set(u.props)):Ie(u),s){const{scroll:h,keepfocus:v}=s,{activeElement:E}=document;await se();const y=document.activeElement!==E&&document.activeElement!==document.body;if(!v&&!y&&await we(),b){const L=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));h?scrollTo(h.x,h.y):L?L.scrollIntoView():scrollTo(0,0)}}else await se();b=!0,u.props.page&&(q=u.props.page),g&&g(),A=!1}function Ie(e){p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),q=e.props.page,V=new t.root({target:r,props:{...e.props,stores:D,components:c},hydrate:!0}),Se(O);const a={from:null,to:{params:p.params,route:{id:p.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};_.after_navigate.forEach(o=>o(a)),I=!0}async function J({url:e,params:n,branch:a,status:o,error:s,route:f,form:g}){let u="never";for(const k of a)k?.slash!==void 0&&(u=k.slash);e.pathname=Be(e.pathname,u),e.search=e.search;const h={type:"loaded",state:{url:e,params:n,branch:a,error:s,route:f},props:{constructors:yt(a).map(k=>k.node.component)}};g!==void 0&&(h.props.form=g);let v={},E=!q,y=0;for(let k=0;k<Math.max(a.length,p.branch.length);k+=1){const U=a[k],re=p.branch[k];U?.data!==re?.data&&(E=!0),U&&(v={...v,...U.data},E&&(h.props[`data_${y}`]=v),y+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||g!==void 0&&g!==q.form||E)&&(h.props.page={error:s,params:n,route:{id:f?.id??null},status:o,url:new URL(e),form:g??null,data:E?v:q.data}),h}async function ue({loader:e,parent:n,url:a,params:o,route:s,server_data_node:f}){let g=null;const u={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},h=await e();if(h.universal?.load){let v=function(...y){for(const L of y){const{href:k}=new URL(L,a);u.dependencies.add(k)}};const E={route:{get id(){return u.route=!0,s.id}},params:new Proxy(o,{get:(y,L)=>(u.params.add(L),y[L])}),data:f?.data??null,url:Xe(a,()=>{u.url=!0}),async fetch(y,L){let k;y instanceof Request?(k=y.url,L={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...L}):k=y;const U=new URL(k,a);return v(U.href),U.origin===a.origin&&(k=U.href.slice(a.origin.length)),I?at(k,U.href,L):nt(k,L)},setHeaders:()=>{},depends:v,parent(){return u.parent=!0,n()}};g=await h.universal.load.call(null,E)??null,g=g?await ft(g):null}return{node:h,loader:e,server:f,universal:h.universal?.load?{type:"data",data:g,uses:u}:null,data:g??f?.data??null,slash:h.universal?.trailingSlash??f?.slash}}function Ae(e,n,a,o,s){if(C)return!0;if(!o)return!1;if(o.parent&&e||o.route&&n||o.url&&a)return!0;for(const f of o.params)if(s[f]!==p.params[f])return!0;for(const f of o.dependencies)if(S.some(g=>g(new URL(f))))return!0;return!1}function de(e,n){return e?.type==="data"?e:e?.type==="skip"?n??null:null}async function Oe({id:e,invalidating:n,url:a,params:o,route:s}){if(w?.id===e)return w.promise;const{errors:f,layouts:g,leaf:u}=s,h=[...g,u];f.forEach(R=>R?.().catch(()=>{})),h.forEach(R=>R?.[1]().catch(()=>{}));let v=null;const E=p.url?e!==p.url.pathname+p.url.search:!1,y=p.route?s.id!==p.route.id:!1;let L=!1;const k=h.map((R,j)=>{const $=p.branch[j],N=!!R?.[0]&&($?.loader!==R[1]||Ae(L,y,E,$.server?.uses,o));return N&&(L=!0),N});if(k.some(Boolean)){try{v=await Fe(a,k)}catch(R){return te({status:R instanceof X?R.status:500,error:await B(R,{url:a,params:o,route:{id:s.id}}),url:a,route:s})}if(v.type==="redirect")return v}const U=v?.nodes;let re=!1;const pe=h.map(async(R,j)=>{if(!R)return;const $=p.branch[j],N=U?.[j];if((!N||N.type==="skip")&&R[1]===$?.loader&&!Ae(re,y,E,$.universal?.uses,o))return $;if(re=!0,N?.type==="error")throw N;return ue({loader:R[1],url:a,params:o,route:s,parent:async()=>{const he={};for(let me=0;me<j;me+=1)Object.assign(he,(await pe[me])?.data);return he},server_data_node:de(N===void 0&&R[0]?{type:"skip"}:N??null,R[0]?$?.server:void 0)})});for(const R of pe)R.catch(()=>{});const G=[];for(let R=0;R<h.length;R+=1)if(h[R])try{G.push(await pe[R])}catch(j){if(j instanceof qe)return{type:"redirect",location:j.location};let $=500,N;if(U?.includes(j))$=j.status??$,N=j.error;else if(j instanceof X)$=j.status,N=j.body;else{if(await D.updated.check())return await z(a);N=await B(j,{params:o,url:a,route:{id:s.id}})}const oe=await Pe(R,G,f);return oe?await J({url:a,params:o,branch:G.slice(0,oe.idx).concat(oe.node),status:$,error:N,route:s}):await je(a,{id:s.id},N,$)}else G.push(void 0);return await J({url:a,params:o,branch:G,status:200,error:null,route:s,form:n?void 0:null})}async function Pe(e,n,a){for(;e--;)if(a[e]){let o=e;for(;!n[o];)o-=1;try{return{idx:o+1,node:{node:await a[e](),loader:a[e],data:{},server:null,universal:null}}}catch{continue}}}async function te({status:e,error:n,url:a,route:o}){const s={};let f=null;if(t.server_loads[0]===0)try{const v=await Fe(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;f=v.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||P)&&await z(a)}const u=await ue({loader:i,url:a,params:s,route:o,parent:()=>Promise.resolve({}),server_data_node:de(f)}),h={node:await m(),loader:m,universal:null,server:null,data:null};return await J({url:a,params:s,branch:[u,h],status:e,error:n,route:null})}function K(e,n){if(Te(e,H))return;const a=ne(e);for(const o of l){const s=o.exec(a);if(s)return{id:e.pathname+e.search,invalidating:n,route:o,params:Ye(s),url:e}}}function ne(e){return Ge(e.pathname.slice(H.length)||"/")}function Ue({url:e,type:n,intent:a,delta:o}){let s=!1;const f={from:{params:p.params,route:{id:p.route?.id??null},url:p.url},to:{params:a?.params??null,route:{id:a?.route?.id??null},url:e},willUnload:!a,type:n};o!==void 0&&(f.delta=o);const g={...f,cancel:()=>{s=!0}};return x||_.before_navigate.forEach(u=>u(g)),s?null:f}async function ae({url:e,scroll:n,keepfocus:a,redirect_chain:o,details:s,type:f,delta:g,nav_token:u,accepted:h,blocked:v}){const E=K(e,!1),y=Ue({url:e,type:f,delta:g,intent:E});if(!y){v();return}const L=O;h(),x=!0,I&&D.navigating.set(y),await Le(E,e,o,L,{scroll:n,keepfocus:a,details:s},u,()=>{x=!1,_.after_navigate.forEach(k=>k(y)),D.navigating.set(null)})}async function je(e,n,a,o){return e.origin===location.origin&&e.pathname===location.pathname&&!P?await te({status:o,error:a,url:e,route:n}):await z(e)}function z(e){return location.href=e.href,new Promise(()=>{})}function Ke(){let e;d.addEventListener("mousemove",f=>{const g=f.target;clearTimeout(e),e=setTimeout(()=>{o(g,2)},20)});function n(f){o(f.composedPath()[0],1)}d.addEventListener("mousedown",n),d.addEventListener("touchstart",n,{passive:!0});const a=new IntersectionObserver(f=>{for(const g of f)g.isIntersecting&&(ee(ne(new URL(g.target.href))),a.unobserve(g.target))},{threshold:0});function o(f,g){const u=xe(f,d);if(!u)return;const{url:h,external:v}=ge(u,H);if(v)return;const E=ie(u);if(!E.reload)if(g<=E.preload_data){const y=K(h,!1);y&&Re(y)}else g<=E.preload_code&&ee(ne(h))}function s(){a.disconnect();for(const f of d.querySelectorAll("a")){const{url:g,external:u}=ge(f,H);if(u)continue;const h=ie(f);h.reload||(h.preload_code===De.viewport&&a.observe(f),h.preload_code===De.eager&&ee(ne(g)))}}_.after_navigate.push(s),s()}function B(e,n){return e instanceof X?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ne(()=>(_.after_navigate.push(e),()=>{const n=_.after_navigate.indexOf(e);_.after_navigate.splice(n,1)}))},before_navigate:e=>{Ne(()=>(_.before_navigate.push(e),()=>{const n=_.before_navigate.indexOf(e);_.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(A||!I)&&(b=!1)},goto:(e,n={})=>fe(e,n,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:n}=new URL(e,location.href);S.push(a=>a.href===n)}return Ee()},invalidateAll:()=>(C=!0,Ee()),preload_data:async e=>{const n=new URL(e,$e(document)),a=K(n,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Re(a)},preload_code:ee,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:a,route:o}=p;if(!o)return;const s=await Pe(p.branch.length,a,o.errors);if(s){const f=await J({url:n,params:p.params,branch:a.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:o});p=f.state,V.$set(f.props),se().then(we)}}else e.type==="redirect"?fe(e.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await se(),V.$set({form:e.data}),e.type==="success"&&we())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let n=!1;if(!x){const a={from:{params:p.params,route:{id:p.route?.id??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>n=!0};_.before_navigate.forEach(o=>o(a))}n?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(ye(O),Ce(Me,F),ke(O),Ce(He,Y))}),navigator.connection?.saveData||Ke(),d.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const n=xe(e.composedPath()[0],d);if(!n)return;const{url:a,external:o,target:s}=ge(n,H);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const f=ie(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(o||f.reload){Ue({url:a,type:"link"})||e.preventDefault(),x=!0;return}const[u,h]=a.href.split("#");if(h!==void 0&&u===location.href.split("#")[0]){M=!0,ye(O),p.url=a,D.page.set({...q,url:a}),D.page.notify();return}ae({url:a,scroll:f.noscroll?W():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),d.addEventListener("submit",e=>{if(e.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if((a?.formMethod||n.method)!=="get")return;const s=new URL(a?.hasAttribute("formaction")&&a?.formAction||n.action);if(Te(s,H))return;const f=e.target,{noscroll:g,reload:u}=ie(f);if(u)return;e.preventDefault(),e.stopPropagation();const h=new FormData(f),v=a?.getAttribute("name");v&&h.append(v,a?.getAttribute("value")??""),s.search=new URLSearchParams(h).toString(),ae({url:s,scroll:g?W():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{if(e.state?.[T]){if(e.state[T]===O)return;const n=F[e.state[T]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){F[O]=W(),O=e.state[T],scrollTo(n.x,n.y);return}const a=e.state[T]-O;let o=!1;await ae({url:new URL(location.href),scroll:n,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[T]},blocked:()=>{history.go(-a),o=!0},type:"popstate",delta:a}),o||Se(O)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[T]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&D.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:a,params:o,route:s,data:f,form:g})=>{P=!0;const u=new URL(location.href);({params:o={},route:s={id:null}}=K(u,!1)||{});let h;try{const v=a.map(async(E,y)=>{const L=f[y];return L?.uses&&(L.uses=Je(L.uses)),ue({loader:t.nodes[E],url:u,params:o,route:s,parent:async()=>{const k={};for(let U=0;U<y;U+=1)Object.assign(k,(await v[U]).data);return k},server_data_node:de(L)})});h=await J({url:u,params:o,branch:await Promise.all(v),status:e,error:n,form:g,route:l.find(({id:E})=>E===s.id)??null})}catch(v){if(v instanceof qe){await z(new URL(v.location,location.href));return}h=await te({status:v instanceof X?v.status:500,error:await B(v,{url:u,params:o,route:s}),url:u,route:s})}Ie(h)}}}async function Fe(t,r){const l=new URL(t);l.pathname=et(t.pathname),l.searchParams.append("x-sveltekit-invalidated",r.map(m=>m?"1":"").join("_"));const i=await ce(l.href);if(!i.ok)throw new X(i.status,await i.json());return new Promise(async m=>{const d=new Map,S=i.body.getReader(),c=new TextDecoder;function w(p){return _t(p,{Promise:P=>new Promise((I,b)=>{d.set(P,{fulfil:I,reject:b})})})}let _="";for(;;){const{done:p,value:P}=await S.read();if(p&&!_)break;for(_+=!P&&_?`
`:c.decode(P);;){const I=_.indexOf(`
`);if(I===-1)break;const b=JSON.parse(_.slice(0,I));if(_=_.slice(I+1),b.type==="redirect")return m(b);if(b.type==="data")b.nodes?.forEach(A=>{A?.type==="data"&&(A.uses=Je(A.uses),A.data=w(A.data))}),m(b);else if(b.type==="chunk"){const{id:A,data:x,error:M}=b,C=d.get(A);d.delete(A),M?C.reject(w(M)):C.fulfil(w(x))}}}})}function Je(t){return{dependencies:new Set(t?.dependencies??[]),params:new Set(t?.params??[]),parent:!!t?.parent,route:!!t?.route,url:!!t?.url}}function we(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,l=r.getAttribute("tabindex");return r.tabIndex=-1,r.focus({preventScroll:!0}),l!==null?r.setAttribute("tabindex",l):r.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{i(getSelection()?.removeAllRanges())})})}}async function St(t,r,l){const i=wt(t,r);ze({client:i}),l?await i._hydrate(l):i.goto(location.href,{replaceState:!0}),i._start_router()}export{St as start};
