var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,i;function l(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,e,n){t.$$.on_destroy.push(l(e,n))}function p(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function $(t,e,n,o,r,s){if(r){const c=f(e,n,o,s);t.p(c,r)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function g(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function k(){return w(" ")}function _(){return w("")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:j(t,o,e[o])}function q(t,e){t.value=null==e?"":e}function C(t){i=t}function P(){if(!i)throw new Error("Function called outside component initialization");return i}function S(){const t=P();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function A(t,e){P().$$.context.set(t,e)}function z(t){return P().$$.context.get(t)}const R=[],L=[],O=[],M=[],N=Promise.resolve();let B=!1;function H(t){O.push(t)}const T=new Set;let K=0;function D(){const t=i;do{for(;K<R.length;){const t=R[K];K++,C(t),U(t.$$)}for(C(null),R.length=0,K=0;L.length;)L.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];T.has(e)||(T.add(e),e())}O.length=0}while(R.length);for(;M.length;)M.pop()();B=!1,T.clear(),C(t)}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const F=new Set;let J;function G(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function V(t,e){t&&t.i&&(F.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),J.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function X(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e,o,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),c||H((()=>{const e=i.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(H)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(R.push(t),B||(B=!0,N.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,c,a,l,u,p=[-1]){const f=i;C(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let $=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),$&&nt(e,t)),n})):[],d.update(),$=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),tt(e,n.target,n.anchor,n.customElement),D()}C(f)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ct(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!st.length;for(const t of r)t[1](),st.push(t,e);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function at(e,n,o){const c=!Array.isArray(e),a=c?[e]:e,i=n.length<2;return u=e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(c?u[0]:u,e);i?e(o):f=s(o)?o:t},$=a.map(((t,e)=>l(t,(t=>{u[e]=t,p&=~(1<<e),o&&d()}),(()=>{p|=1<<e}))));return o=!0,d(),function(){r($),f()}},{subscribe:ct(o,u).subscribe};var u}const it={},lt={};function ut(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const pt=function(t,e){const n=[];let o=ut(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=ut(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=ut(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[c,a=""]=s.split("?");e++,n.push({pathname:c,search:a}),o.push(t)},replaceState(t,r,s){const[c,a=""]=s.split("?");n[e]={pathname:c,search:a},o[e]=t}}}}()),{navigate:ft}=pt,dt=/^:(.+)/;function $t(t,e){return t.substr(0,e.length)===e}function mt(t){return"*"===t[0]}function ht(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function gt(t){return t.replace(/(^\/+|\/+$)/g,"")}function vt(t,e){return{route:t,score:t.default?0:ht(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return dt.test(t)}(e)?mt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function yt(t,e){let n,o;const[r]=e.split("?"),s=ht(r),c=""===s[0],a=function(t){return t.map(vt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=a.length;t<r;t++){const r=a[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:e};continue}const l=ht(r.path),u={},p=Math.max(s.length,l.length);let f=0;for(;f<p;f++){const t=l[f],e=s[f];if(void 0!==t&&mt(t)){u["*"===t?"*":t.slice(1)]=s.slice(f).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=dt.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:r,params:u,uri:"/"+s.slice(0,f).join("/")};break}}return n||o||null}function bt(t,e){return t+(e?`?${e}`:"")}function xt(t,e){return`${gt("/"===e?t:`${gt(t)}/${gt(e)}`)}/`}function wt(t){let e;const n=t[9].default,o=p(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[r]){o&&o.p&&(!e||256&r)&&$(o,n,t,t[8],e?d(n,t[8],r,null):m(t[8]),null)},i(t){e||(V(o,t),e=!0)},o(t){W(o,t),e=!1},d(t){o&&o.d(t)}}}function kt(t,e,n){let o,r,s,{$$slots:c={},$$scope:a}=e,{basepath:i="/"}=e,{url:l=null}=e;const p=z(it),f=z(lt),d=ct([]);u(t,d,(t=>n(6,r=t)));const $=ct(null);let m=!1;const h=p||ct(l?{pathname:l}:pt.location);u(t,h,(t=>n(5,o=t)));const g=f?f.routerBase:ct({path:i,uri:i});u(t,g,(t=>n(7,s=t)));const v=at([g,$],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}}));var y;return p||(y=()=>pt.listen((t=>{h.set(t.location)})),P().$$.on_mount.push(y),A(it,h)),A(lt,{activeRoute:$,base:g,routerBase:v,registerRoute:function(t){const{path:e}=s;let{path:n}=t;if(t._path=n,t.path=xt(e,n),"undefined"==typeof window){if(m)return;const e=function(t,e){return yt([t],e)}(t,o.pathname);e&&($.set(e),m=!0)}else d.update((e=>(e.push(t),e)))},unregisterRoute:function(t){d.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,i=t.basepath),"url"in t&&n(4,l=t.url),"$$scope"in t&&n(8,a=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=s;d.update((e=>(e.forEach((e=>e.path=xt(t,e._path))),e)))}if(96&t.$$.dirty){const t=yt(r,o.pathname);$.set(t)}},[d,h,g,i,l,o,r,s,a,c]}class _t extends rt{constructor(t){super(),ot(this,t,kt,wt,c,{basepath:3,url:4})}}const Et=t=>({params:4&t,location:16&t}),jt=t=>({params:t[2],location:t[4]});function It(t){let e,n,o,r;const s=[Ct,qt],c=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),o=_()},m(t,n){c[e].m(t,n),y(t,o,n),r=!0},p(t,r){let i=e;e=a(t),e===i?c[e].p(t,r):(G(),W(c[i],1,1,(()=>{c[i]=null})),Q(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),V(n,1),n.m(o.parentNode,o))},i(t){r||(V(n),r=!0)},o(t){W(n),r=!1},d(t){c[e].d(t),t&&b(o)}}}function qt(t){let e;const n=t[10].default,o=p(n,t,t[9],jt);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||532&r)&&$(o,n,t,t[9],e?d(n,t[9],r,Et):m(t[9]),jt)},i(t){e||(V(o,t),e=!0)},o(t){W(o,t),e=!1},d(t){o&&o.d(t)}}}function Ct(t){let n,o,r;const s=[{location:t[4]},t[2],t[3]];var c=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Z(n.$$.fragment),o=_()},m(t,e){n&&tt(n,t,e),y(t,o,e),r=!0},p(t,e){const r=28&e?X(s,[16&e&&{location:t[4]},4&e&&Y(t[2]),8&e&&Y(t[3])]):{};if(c!==(c=t[0])){if(n){G();const t=n;W(t.$$.fragment,1,0,(()=>{et(t,1)})),Q()}c?(n=new c(a()),Z(n.$$.fragment),V(n.$$.fragment,1),tt(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&V(n.$$.fragment,t),r=!0)},o(t){n&&W(n.$$.fragment,t),r=!1},d(t){t&&b(o),n&&et(n,t)}}}function Pt(t){let e,n,o=null!==t[1]&&t[1].route===t[7]&&It(t);return{c(){o&&o.c(),e=_()},m(t,r){o&&o.m(t,r),y(t,e,r),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,n),2&n&&V(o,1)):(o=It(t),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(G(),W(o,1,1,(()=>{o=null})),Q())},i(t){n||(V(o),n=!0)},o(t){W(o),n=!1},d(t){o&&o.d(t),t&&b(e)}}}function St(t,n,o){let r,s,{$$slots:c={},$$scope:a}=n,{path:i=""}=n,{component:l=null}=n;const{registerRoute:p,unregisterRoute:f,activeRoute:d}=z(lt);u(t,d,(t=>o(1,r=t)));const $=z(it);u(t,$,(t=>o(4,s=t)));const m={path:i,default:""===i};let g={},v={};var y;return p(m),"undefined"!=typeof window&&(y=()=>{f(m)},P().$$.on_destroy.push(y)),t.$$set=t=>{o(13,n=e(e({},n),h(t))),"path"in t&&o(8,i=t.path),"component"in t&&o(0,l=t.component),"$$scope"in t&&o(9,a=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:e,...r}=n;o(3,v=r)}},n=h(n),[l,r,g,v,s,d,$,m,i,a,c]}class At extends rt{constructor(t){super(),ot(this,t,St,Pt,c,{path:8,component:0})}}function zt(t){let n,o,r,s;const c=t[16].default,a=p(c,t,t[15],null);let i=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],l={};for(let t=0;t<i.length;t+=1)l=e(l,i[t]);return{c(){n=x("a"),a&&a.c(),I(n,l)},m(e,c){y(e,n,c),a&&a.m(n,null),o=!0,r||(s=E(n,"click",t[5]),r=!0)},p(t,[e]){a&&a.p&&(!o||32768&e)&&$(a,c,t,t[15],o?d(c,t[15],e,null):m(t[15]),null),I(n,l=X(i,[(!o||1&e)&&{href:t[0]},(!o||4&e)&&{"aria-current":t[2]},2&e&&t[1],64&e&&t[6]]))},i(t){o||(V(a,t),o=!0)},o(t){W(a,t),o=!1},d(t){t&&b(n),a&&a.d(t),r=!1,s()}}}function Rt(t,n,o){let r;const s=["to","replace","state","getProps"];let c,a,i=g(n,s),{$$slots:l={},$$scope:p}=n,{to:f="#"}=n,{replace:d=!1}=n,{state:$={}}=n,{getProps:m=(()=>({}))}=n;const{base:v}=z(lt);u(t,v,(t=>o(14,a=t)));const y=z(it);u(t,y,(t=>o(13,c=t)));const b=S();let x,w,k,_;return t.$$set=t=>{n=e(e({},n),h(t)),o(6,i=g(n,s)),"to"in t&&o(7,f=t.to),"replace"in t&&o(8,d=t.replace),"state"in t&&o(9,$=t.state),"getProps"in t&&o(10,m=t.getProps),"$$scope"in t&&o(15,p=t.$$scope)},t.$$.update=()=>{16512&t.$$.dirty&&o(0,x="/"===f?a.uri:function(t,e){if($t(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=ht(n),c=ht(r);if(""===s[0])return bt(r,o);if(!$t(s[0],"."))return bt(("/"===r?"":"/")+c.concat(s).join("/"),o);const a=c.concat(s),i=[];return a.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),bt("/"+i.join("/"),o)}(f,a.uri)),8193&t.$$.dirty&&o(11,w=$t(c.pathname,x)),8193&t.$$.dirty&&o(12,k=x===c.pathname),4096&t.$$.dirty&&o(2,r=k?"page":void 0),15361&t.$$.dirty&&o(1,_=m({location:c,href:x,isPartiallyCurrent:w,isCurrent:k}))},[x,_,r,v,y,function(t){if(b("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=c.pathname===x||d;ft(x,{state:$,replace:e})}},i,f,d,$,m,w,k,c,a,p,l]}class Lt extends rt{constructor(t){super(),ot(this,t,Rt,zt,c,{to:7,replace:8,state:9,getProps:10})}}function Ot(t){let e,n,o;return{c(){e=x("h2"),e.textContent="randy",n=k(),o=x("h2"),o.textContent="randy",j(e,"class","svelte-19obzgj"),j(o,"class","svelte-19obzgj")},m(t,r){y(t,e,r),y(t,n,r),y(t,o,r)},d(t){t&&b(e),t&&b(n),t&&b(o)}}}function Mt(t){let e;return{c(){e=w("about me")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function Nt(t){let e;return{c(){e=w("contact me")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function Bt(t){let e,n,o,r,s,c,a,i,l,u,p,f,d;return o=new Lt({props:{to:"/",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new Lt({props:{class:"nav-link",to:"/about",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),i=new Lt({props:{class:"nav-link",to:"/contact",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){e=x("nav"),n=x("div"),Z(o.$$.fragment),r=k(),s=x("span"),Z(c.$$.fragment),a=k(),Z(i.$$.fragment),l=k(),u=x("a"),u.textContent="linkedin",p=k(),f=x("a"),f.textContent="github",j(n,"class","logo svelte-19obzgj"),j(u,"class","nav-link"),j(u,"target","_blank"),j(u,"href","https://www.linkedin.com/in/randallstanford/"),j(f,"class","nav-link"),j(f,"target","_blank"),j(f,"href","https://github.com/randallwstanford"),j(s,"class","nav svelte-19obzgj")},m(t,$){y(t,e,$),v(e,n),tt(o,n,null),v(e,r),v(e,s),tt(c,s,null),v(s,a),tt(i,s,null),v(s,l),v(s,u),v(s,p),v(s,f),d=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),c.$set(r);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s)},i(t){d||(V(o.$$.fragment,t),V(c.$$.fragment,t),V(i.$$.fragment,t),d=!0)},o(t){W(o.$$.fragment,t),W(c.$$.fragment,t),W(i.$$.fragment,t),d=!1},d(t){t&&b(e),et(o),et(c),et(i)}}}class Ht extends rt{constructor(t){super(),ot(this,t,null,Bt,c,{})}}function Tt(e){let n;return{c(){n=x("div"),n.innerHTML='<span style="--i:1" class="svelte-1tv7i8r">L</span> \n  <span style="--i:2" class="svelte-1tv7i8r">o</span> \n  <span style="--i:3" class="svelte-1tv7i8r">a</span> \n  <span style="--i:4" class="svelte-1tv7i8r">d</span> \n  <span style="--i:5" class="svelte-1tv7i8r">i</span> \n  <span style="--i:6" class="svelte-1tv7i8r">n</span> \n  <span style="--i:7" class="svelte-1tv7i8r">g</span> \n  <span style="--i:8" class="svelte-1tv7i8r"> </span> \n  <span style="--i:9" class="svelte-1tv7i8r">I</span> \n  <span style="--i:10" class="svelte-1tv7i8r">m</span> \n  <span style="--i:11" class="svelte-1tv7i8r">a</span> \n  <span style="--i:12" class="svelte-1tv7i8r">g</span> \n  <span style="--i:13" class="svelte-1tv7i8r">e</span> \n  <span style="--i:14" class="svelte-1tv7i8r">.</span> \n  <span style="--i:15" class="svelte-1tv7i8r">.</span> \n  <span style="--i:16" class="svelte-1tv7i8r">.</span>',j(n,"class","loading svelte-1tv7i8r")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}class Kt extends rt{constructor(t){super(),ot(this,t,null,Tt,c,{})}}function Dt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ut(e){let n,o;return n=new Kt({}),{c(){Z(n.$$.fragment)},m(t,e){tt(n,t,e),o=!0},p:t,i(t){o||(V(n.$$.fragment,t),o=!0)},o(t){W(n.$$.fragment,t),o=!1},d(t){et(n,t)}}}function Ft(e){let n,o;return{c(){var t,r;n=x("img"),t=n.src,r=o=e[1].img,a||(a=document.createElement("a")),a.href=r,t!==a.href&&j(n,"src",o),j(n,"alt",""),j(n,"class","svelte-179fmc5")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}function Jt(t){let e,n,o,r,s,c,a,i,l,u,p,f=t[1].name+"",d=t[1].description+"";const $=[Ft,Ut],m=[];return i=function(t,e){return t[1].img?0:1}(t),l=m[i]=$[i](t),{c(){e=x("div"),n=x("div"),o=w(f),r=k(),s=x("div"),c=w(d),a=k(),l.c(),u=k(),j(n,"class","title svelte-179fmc5"),j(s,"class","description svelte-179fmc5"),j(e,"class","project svelte-179fmc5")},m(t,l){y(t,e,l),v(e,n),v(n,o),v(e,r),v(e,s),v(s,c),v(e,a),m[i].m(e,null),v(e,u),p=!0},p(t,e){l.p(t,e)},i(t){p||(V(l),p=!0)},o(t){W(l),p=!1},d(t){t&&b(e),m[i].d()}}}function Gt(t){let e,n,o,r,s=t[0],c=[];for(let e=0;e<s.length;e+=1)c[e]=Jt(Dt(t,s,e));const a=t=>W(c[t],1,1,(()=>{c[t]=null}));return{c(){e=x("div"),n=x("h1"),n.textContent="Projeasdsdcts",o=k();for(let t=0;t<c.length;t+=1)c[t].c();j(n,"class","project-title svelte-179fmc5")},m(t,s){y(t,e,s),v(e,n),v(e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);r=!0},p(t,[n]){if(1&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=Dt(t,s,o);c[o]?(c[o].p(r,n),V(c[o],1)):(c[o]=Jt(r),c[o].c(),V(c[o],1),c[o].m(e,null))}for(G(),o=s.length;o<c.length;o+=1)a(o);Q()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)V(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)W(c[t]);r=!1},d(t){t&&b(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t)}}}function Qt(t){return[[{id:2,name:"Cocktail Builder",img:"https://user-images.githubusercontent.com/83252804/138566931-80b8c442-3cc7-4ac1-8ee0-0b4424aa7d54.png",description:"Single page application that shows you what cocktails you are able to build with the product you have on hand."},{id:1,name:"Altier API",img:"",description:"API to handle all routes for an e-commerce site."},{id:3,name:"Project Catwalk",img:"",description:"A client requested e-commerce site redesign."}]]}class Vt extends rt{constructor(t){super(),ot(this,t,Qt,Gt,c,{})}}function Wt(e){let n,o,r,s;return r=new Vt({}),{c(){n=x("div"),o=x("div"),Z(r.$$.fragment),j(o,"class","content svelte-1gf4zz5"),j(n,"class","body svelte-1gf4zz5")},m(t,e){y(t,n,e),v(n,o),tt(r,o,null),s=!0},p:t,i(t){s||(V(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&b(n),et(r)}}}class Xt extends rt{constructor(t){super(),ot(this,t,null,Wt,c,{})}}function Yt(e){let n,o,r,s,c;return o=new Ht({}),s=new Xt({}),{c(){n=x("div"),Z(o.$$.fragment),r=k(),Z(s.$$.fragment),j(n,"id","container"),j(n,"class","svelte-1kclt47")},m(t,e){y(t,n,e),tt(o,n,null),v(n,r),tt(s,n,null),c=!0},p:t,i(t){c||(V(o.$$.fragment,t),V(s.$$.fragment,t),c=!0)},o(t){W(o.$$.fragment,t),W(s.$$.fragment,t),c=!1},d(t){t&&b(n),et(o),et(s)}}}class Zt extends rt{constructor(t){super(),ot(this,t,null,Yt,c,{})}}function te(e){let n,o,r,s,c;return o=new Ht({}),{c(){n=x("div"),Z(o.$$.fragment),r=k(),s=x("div"),s.innerHTML='<div class="content svelte-tphtxw"><h1 class="svelte-tphtxw">About me</h1> \n      <p class="svelte-tphtxw">I&#39;m Randall and I&#39;m a fullstack engineer</p> \n      <p class="svelte-tphtxw">I recently completed Hack Reactor&#39;s software engineering bootcamp in Novemeber of 2021 and I had an incredible, rich, and fruitful expereince. I built this site in January of 2022 using Svelte, a technology I decided to pick up for fun.</p> \n      <p class="svelte-tphtxw">I have always have a strong passion and love for coffee and spent a lot of time learning about coffee roasting, coffee processing, and the coffee supply chain in my previous jobs. I decided I didn&#39;t want to work in the coffee industry anymore as I felt the ceiling for opportunity was limiting to my capabilites. I had a knack and curiosity about technology so I looked to software development as a new career path. After a year of self studying javascript, I saved up, quit my job, and took a leap to take the bootcamp and kickstart my career.</p> \n      <p class="svelte-tphtxw">In Hack Reactor we cover a whole lot from frontend, backend, deployment, data persistence, reading documentation, and being self autonomous as developer.</p></div>',j(s,"class","body svelte-tphtxw"),j(n,"id","container"),j(n,"class","svelte-tphtxw")},m(t,e){y(t,n,e),tt(o,n,null),v(n,r),v(n,s),c=!0},p:t,i(t){c||(V(o.$$.fragment,t),c=!0)},o(t){W(o.$$.fragment,t),c=!1},d(t){t&&b(n),et(o)}}}class ee extends rt{constructor(t){super(),ot(this,t,null,te,c,{})}}function ne(t){let e,n,o,r,s,c,a,i,l,u,p,f,d,$,m,h,g,w,_,I,C;return n=new Ht({}),{c(){e=x("div"),Z(n.$$.fragment),o=k(),r=x("div"),s=x("div"),c=x("h1"),c.textContent="Contact Me",a=k(),i=x("div"),l=x("form"),u=x("input"),p=k(),f=x("input"),d=k(),$=x("input"),m=k(),h=x("textarea"),g=k(),w=x("div"),w.innerHTML='<button type="submit" class="svelte-1dxpql7">Submit</button>',j(c,"class","svelte-1dxpql7"),j(u,"type","text"),j(u,"action","https://formsubmit.co/randallwstanford@gmail.com"),j(u,"method","POST"),j(u,"placeholder","Name"),j(u,"class","contact svelte-1dxpql7"),u.required=!0,j(f,"type","email"),j(f,"placeholder","Email"),j(f,"class","contact svelte-1dxpql7"),f.required=!0,j($,"type","text"),j($,"placeholder","Subject"),j($,"class","contact svelte-1dxpql7"),j(h,"placeholder","Message"),j(h,"class","contact svelte-1dxpql7"),h.required=!0,j(w,"class","button svelte-1dxpql7"),j(i,"class","form svelte-1dxpql7"),j(s,"class","content svelte-1dxpql7"),j(r,"class","body svelte-1dxpql7"),j(e,"id","container"),j(e,"class","svelte-1dxpql7")},m(b,x){y(b,e,x),tt(n,e,null),v(e,o),v(e,r),v(r,s),v(s,c),v(s,a),v(s,i),v(i,l),v(l,u),v(l,p),v(l,f),v(l,d),v(l,$),v(l,m),v(l,h),q(h,t[0]),v(l,g),v(l,w),_=!0,I||(C=E(h,"input",t[1]),I=!0)},p(t,[e]){1&e&&q(h,t[0])},i(t){_||(V(n.$$.fragment,t),_=!0)},o(t){W(n.$$.fragment,t),_=!1},d(t){t&&b(e),et(n),I=!1,C()}}}function oe(t,e,n){var o="";return[o,function(){o=this.value,n(0,o)}]}class re extends rt{constructor(t){super(),ot(this,t,oe,ne,c,{})}}function se(e){let n,o,r,s,c,a;return n=new At({props:{path:"about",component:ee}}),r=new At({props:{path:"contact",component:re}}),c=new At({props:{path:"/",component:Zt}}),{c(){Z(n.$$.fragment),o=k(),Z(r.$$.fragment),s=k(),Z(c.$$.fragment)},m(t,e){tt(n,t,e),y(t,o,e),tt(r,t,e),y(t,s,e),tt(c,t,e),a=!0},p:t,i(t){a||(V(n.$$.fragment,t),V(r.$$.fragment,t),V(c.$$.fragment,t),a=!0)},o(t){W(n.$$.fragment,t),W(r.$$.fragment,t),W(c.$$.fragment,t),a=!1},d(t){et(n,t),t&&b(o),et(r,t),t&&b(s),et(c,t)}}}function ce(t){let e,n;return e=new _t({props:{url:t[0],$$slots:{default:[se]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,o){tt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function ae(t,e,n){let{url:o=""}=e;return t.$$set=t=>{"url"in t&&n(0,o=t.url)},[o]}class ie extends rt{constructor(t){super(),ot(this,t,ae,ce,c,{url:0})}}function le(e){let n,o,r;return o=new ie({}),{c(){n=x("main"),Z(o.$$.fragment)},m(t,e){y(t,n,e),tt(o,n,null),r=!0},p:t,i(t){r||(V(o.$$.fragment,t),r=!0)},o(t){W(o.$$.fragment,t),r=!1},d(t){t&&b(n),et(o)}}}return new class extends rt{constructor(t){super(),ot(this,t,null,le,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
