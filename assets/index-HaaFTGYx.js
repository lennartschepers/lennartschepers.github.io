(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const Xg="5";var Th;typeof window<"u"&&((Th=window.__svelte??(window.__svelte={})).v??(Th.v=new Set)).add(Xg);let Tr=!1,Yg=!1;function Zg(){Tr=!0}Zg();const ep=1,tp=2,np=16,rp=2,op=1,ip=2,Ke=Symbol(),Ou=!1,ft=2,Ih=4,$i=8,Wa=16,zt=32,Ir=64,gi=128,it=256,pi=512,Xe=1024,Ht=2048,Fn=4096,Mt=8192,Gi=16384,sp=32768,ja=65536,Ah=1<<17,ap=1<<19,bh=1<<20,ia=1<<21,Ot=Symbol("$state"),lp=Symbol("legacy props");var Ki=Array.isArray,up=Array.prototype.indexOf,Ua=Array.from,kh=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,cp=Object.getOwnPropertyDescriptors,hp=Object.prototype,dp=Array.prototype,Sh=Object.getPrototypeOf,Lu=Object.isExtensible;const or=()=>{};function fp(n){return n()}function sa(n){for(var e=0;e<n.length;e++)n[e]()}let mi=[];function gp(){var n=mi;mi=[],sa(n)}function Rh(n){mi.length===0&&queueMicrotask(gp),mi.push(n)}function Ph(n){return n===this.v}function Ch(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Dh(n){return!Ch(n,this.v)}function pp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _p(n){throw new Error("https://svelte.dev/e/effect_orphan")}function vp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ep(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Zn(n,e){if(typeof n!="object"||n===null||Ot in n)return n;const t=Sh(n);if(t!==hp&&t!==dp)return n;var r=new Map,o=Ki(n),i=Xt(0),a=ee,l=c=>{var d=ee;Et(a);var f;return f=c(),Et(d),f};return o&&r.set("length",Xt(n.length)),new Proxy(n,{defineProperty(c,d,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&wp();var p=r.get(d);return p===void 0?(p=l(()=>Xt(f.value)),r.set(d,p)):le(p,l(()=>Zn(f.value))),!0},deleteProperty(c,d){var f=r.get(d);if(f===void 0)d in c&&r.set(d,l(()=>Xt(Ke)));else{if(o&&typeof d=="string"){var p=r.get("length"),v=Number(d);Number.isInteger(v)&&v<p.v&&le(p,v)}le(f,Ke),xu(i)}return!0},get(c,d,f){var S;if(d===Ot)return n;var p=r.get(d),v=d in c;if(p===void 0&&(!v||(S=Cn(c,d))!=null&&S.writable)&&(p=l(()=>Xt(Zn(v?c[d]:Ke))),r.set(d,p)),p!==void 0){var I=G(p);return I===Ke?void 0:I}return Reflect.get(c,d,f)},getOwnPropertyDescriptor(c,d){var f=Reflect.getOwnPropertyDescriptor(c,d);if(f&&"value"in f){var p=r.get(d);p&&(f.value=G(p))}else if(f===void 0){var v=r.get(d),I=v==null?void 0:v.v;if(v!==void 0&&I!==Ke)return{enumerable:!0,configurable:!0,value:I,writable:!0}}return f},has(c,d){var I;if(d===Ot)return!0;var f=r.get(d),p=f!==void 0&&f.v!==Ke||Reflect.has(c,d);if(f!==void 0||oe!==null&&(!p||(I=Cn(c,d))!=null&&I.writable)){f===void 0&&(f=l(()=>Xt(p?Zn(c[d]):Ke)),r.set(d,f));var v=G(f);if(v===Ke)return!1}return p},set(c,d,f,p){var O;var v=r.get(d),I=d in c;if(o&&d==="length")for(var S=f;S<v.v;S+=1){var D=r.get(S+"");D!==void 0?le(D,Ke):S in c&&(D=l(()=>Xt(Ke)),r.set(S+"",D))}v===void 0?(!I||(O=Cn(c,d))!=null&&O.writable)&&(v=l(()=>Xt(void 0)),le(v,l(()=>Zn(f))),r.set(d,v)):(I=v.v!==Ke,le(v,l(()=>Zn(f))));var P=Reflect.getOwnPropertyDescriptor(c,d);if(P!=null&&P.set&&P.set.call(p,f),!I){if(o&&typeof d=="string"){var N=r.get("length"),L=Number(d);Number.isInteger(L)&&L>=N.v&&le(N,L+1)}xu(i)}return!0},ownKeys(c){G(i);var d=Reflect.ownKeys(c).filter(v=>{var I=r.get(v);return I===void 0||I.v!==Ke});for(var[f,p]of r)p.v!==Ke&&!(f in c)&&d.push(f);return d},setPrototypeOf(){yp()}})}function xu(n,e=1){le(n,n.v+e)}function Fu(n){try{if(n!==null&&typeof n=="object"&&Ot in n)return n[Ot]}catch{}return n}function Tp(n,e){return Object.is(Fu(n),Fu(e))}const so=new Map;function ao(n,e){var t={f:0,v:n,reactions:null,equals:Ph,rv:0,wv:0};return t}function Xt(n,e){const t=ao(n);return Fh(t),t}function Lt(n,e=!1){var r;const t=ao(n);return e||(t.equals=Dh),Tr&&ie!==null&&ie.l!==null&&((r=ie.l).s??(r.s=[])).push(t),t}function le(n,e,t=!1){ee!==null&&!mt&&yo()&&(ee.f&(ft|Wa))!==0&&!(qe!=null&&qe.includes(n))&&Ep();let r=t?Zn(e):e;return _i(n,r)}function _i(n,e){if(!n.equals(e)){var t=n.v;_o?so.set(n,e):so.set(n,t),n.v=e,n.wv=jh(),Vh(n,Ht),yo()&&oe!==null&&(oe.f&Xe)!==0&&(oe.f&(zt|Ir))===0&&(rt===null?Cp([n]):rt.push(n))}return e}function Vh(n,e){var t=n.reactions;if(t!==null)for(var r=yo(),o=t.length,i=0;i<o;i++){var a=t[i],l=a.f;(l&Ht)===0&&(!r&&a===oe||(gt(a,e),(l&(Xe|it))!==0&&((l&ft)!==0?Vh(a,Fn):Zi(a))))}}function Qi(n){var e=ft|Ht,t=ee!==null&&(ee.f&ft)!==0?ee:null;return oe===null||t!==null&&(t.f&it)!==0?e|=it:oe.f|=bh,{ctx:ie,deps:null,effects:null,equals:Ph,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??oe}}function Ip(n){const e=Qi(n);return Fh(e),e}function vi(n){const e=Qi(n);return e.equals=Dh,e}function Nh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)hn(e[t])}}function Ap(n){for(var e=n.parent;e!==null;){if((e.f&ft)===0)return e;e=e.parent}return null}function bp(n){var e,t=oe;cn(Ap(n));try{Nh(n),e=Bh(n)}finally{cn(t)}return e}function Mh(n){var e=bp(n),t=(rn||(n.f&it)!==0)&&n.deps!==null?Fn:Xe;gt(n,t),n.equals(e)||(n.v=e,n.wv=jh())}let kp=!1;var Wu,Oh,Lh,xh;function Sp(){if(Wu===void 0){Wu=window,Oh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Lh=Cn(e,"firstChild").get,xh=Cn(e,"nextSibling").get,Lu(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Lu(t)&&(t.__t=void 0)}}function Ba(n=""){return document.createTextNode(n)}function wi(n){return Lh.call(n)}function Ji(n){return xh.call(n)}function ne(n,e){return wi(n)}function ut(n,e){{var t=wi(n);return t instanceof Comment&&t.data===""?Ji(t):t}}function Z(n,e=1,t=!1){let r=n;for(;e--;)r=Ji(r);return r}function Rp(n){n.textContent=""}let ni=!1,aa=!1,yi=null,Dn=!1,_o=!1;function ju(n){_o=n}let ri=[];let ee=null,mt=!1;function Et(n){ee=n}let oe=null;function cn(n){oe=n}let qe=null;function Pp(n){qe=n}function Fh(n){ee!==null&&ee.f&ia&&(qe===null?Pp([n]):qe.push(n))}let Be=null,tt=0,rt=null;function Cp(n){rt=n}let Wh=1,Ei=0,rn=!1,Sn=null;function jh(){return++Wh}function Ar(n){var p;var e=n.f;if((e&Ht)!==0)return!0;if((e&Fn)!==0){var t=n.deps,r=(e&it)!==0;if(t!==null){var o,i,a=(e&pi)!==0,l=r&&oe!==null&&!rn,c=t.length;if(a||l){var d=n,f=d.parent;for(o=0;o<c;o++)i=t[o],(a||!((p=i==null?void 0:i.reactions)!=null&&p.includes(d)))&&(i.reactions??(i.reactions=[])).push(d);a&&(d.f^=pi),l&&f!==null&&(f.f&it)===0&&(d.f^=it)}for(o=0;o<c;o++)if(i=t[o],Ar(i)&&Mh(i),i.wv>n.wv)return!0}(!r||oe!==null&&!rn)&&gt(n,Xe)}return!1}function Dp(n,e){for(var t=e;t!==null;){if((t.f&gi)!==0)try{t.fn(n);return}catch{t.f^=gi}t=t.parent}throw ni=!1,n}function Vp(n){return(n.f&Gi)===0&&(n.parent===null||(n.parent.f&gi)===0)}function Xi(n,e,t,r){if(ni){if(t===null&&(ni=!1),Vp(e))throw n;return}t!==null&&(ni=!0);{Dp(n,e);return}}function Uh(n,e,t=!0){var r=n.reactions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];qe!=null&&qe.includes(n)||((i.f&ft)!==0?Uh(i,e,!1):e===i&&(t?gt(i,Ht):(i.f&Xe)!==0&&gt(i,Fn),Zi(i)))}}function Bh(n){var I;var e=Be,t=tt,r=rt,o=ee,i=rn,a=qe,l=ie,c=mt,d=n.f;Be=null,tt=0,rt=null,rn=(d&it)!==0&&(mt||!Dn||ee===null),ee=(d&(zt|Ir))===0?n:null,qe=null,Uu(n.ctx),mt=!1,Ei++,n.f|=ia;try{var f=(0,n.fn)(),p=n.deps;if(Be!==null){var v;if(Ti(n,tt),p!==null&&tt>0)for(p.length=tt+Be.length,v=0;v<Be.length;v++)p[tt+v]=Be[v];else n.deps=p=Be;if(!rn)for(v=tt;v<p.length;v++)((I=p[v]).reactions??(I.reactions=[])).push(n)}else p!==null&&tt<p.length&&(Ti(n,tt),p.length=tt);if(yo()&&rt!==null&&!mt&&p!==null&&(n.f&(ft|Fn|Ht))===0)for(v=0;v<rt.length;v++)Uh(rt[v],n);return o!==null&&(Ei++,rt!==null&&(r===null?r=rt:r.push(...rt))),f}finally{Be=e,tt=t,rt=r,ee=o,rn=i,qe=a,Uu(l),mt=c,n.f^=ia}}function Np(n,e){let t=e.reactions;if(t!==null){var r=up.call(t,n);if(r!==-1){var o=t.length-1;o===0?t=e.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(e.f&ft)!==0&&(Be===null||!Be.includes(e))&&(gt(e,Fn),(e.f&(it|pi))===0&&(e.f^=pi),Nh(e),Ti(e,0))}function Ti(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)Np(n,t[r])}function Yi(n){var e=n.f;if((e&Gi)===0){gt(n,Xe);var t=oe,r=ie,o=Dn;oe=n,Dn=!0;try{(e&Wa)!==0?qp(n):Gh(n),$h(n);var i=Bh(n);n.teardown=typeof i=="function"?i:null,n.wv=Wh;var a=n.deps,l;Ou&&Yg&&n.f&Ht}catch(c){Xi(c,n,t,r||n.ctx)}finally{Dn=o,oe=t}}}function Mp(){try{vp()}catch(n){if(yi!==null)Xi(n,yi,null);else throw n}}function Op(){var n=Dn;try{var e=0;for(Dn=!0;ri.length>0;){e++>1e3&&Mp();var t=ri,r=t.length;ri=[];for(var o=0;o<r;o++){var i=xp(t[o]);Lp(i)}}}finally{aa=!1,Dn=n,yi=null,so.clear()}}function Lp(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var r=n[t];if((r.f&(Gi|Mt))===0)try{Ar(r)&&(Yi(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Kh(r):r.fn=null))}catch(o){Xi(o,r,null,r.ctx)}}}function Zi(n){aa||(aa=!0,queueMicrotask(Op));for(var e=yi=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(Ir|zt))!==0){if((t&Xe)===0)return;e.f^=Xe}}ri.push(e)}function xp(n){for(var e=[],t=n;t!==null;){var r=t.f,o=(r&(zt|Ir))!==0,i=o&&(r&Xe)!==0;if(!i&&(r&Mt)===0){if((r&Ih)!==0)e.push(t);else if(o)t.f^=Xe;else{var a=ee;try{ee=t,Ar(t)&&Yi(t)}catch(d){Xi(d,t,null,t.ctx)}finally{ee=a}}var l=t.first;if(l!==null){t=l;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return e}function G(n){var e=n.f,t=(e&ft)!==0;if(Sn!==null&&Sn.add(n),ee!==null&&!mt){if(!(qe!=null&&qe.includes(n))){var r=ee.deps;n.rv<Ei&&(n.rv=Ei,Be===null&&r!==null&&r[tt]===n?tt++:Be===null?Be=[n]:(!rn||!Be.includes(n))&&Be.push(n))}}else if(t&&n.deps===null&&n.effects===null){var o=n,i=o.parent;i!==null&&(i.f&it)===0&&(o.f^=it)}return t&&(o=n,Ar(o)&&Mh(o)),_o&&so.has(n)?so.get(n):n.v}function Fp(n){var e=Sn;Sn=new Set;var t=Sn,r;try{if(qt(n),e!==null)for(r of Sn)e.add(r)}finally{Sn=e}return t}function Wp(n){var e=Fp(()=>qt(n));for(var t of e)if((t.f&Ah)!==0)for(const r of t.deps||[])(r.f&ft)===0&&_i(r,r.v);else _i(t,t.v)}function qt(n){var e=mt;try{return mt=!0,n()}finally{mt=e}}const jp=-7169;function gt(n,e){n.f=n.f&jp|e}function Up(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Ot in n)la(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Ot in t&&la(t)}}}function la(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{la(n[r],e)}catch{}const t=Sh(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=cp(t);for(let o in r){const i=r[o].get;if(i)try{i.call(n)}catch{}}}}}function zh(n){oe===null&&ee===null&&_p(),ee!==null&&(ee.f&it)!==0&&oe===null&&mp(),_o&&pp()}function Bp(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function br(n,e,t,r=!0){var o=oe,i={ctx:ie,deps:null,nodes_start:null,nodes_end:null,f:n|Ht,first:null,fn:e,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Yi(i),i.f|=sp}catch(c){throw hn(i),c}else e!==null&&Zi(i);var a=t&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(bh|gi))===0;if(!a&&r&&(o!==null&&Bp(i,o),ee!==null&&(ee.f&ft)!==0)){var l=ee;(l.effects??(l.effects=[])).push(i)}return i}function es(n){const e=br($i,null,!1);return gt(e,Xe),e.teardown=n,e}function ua(n){zh();var e=oe!==null&&(oe.f&zt)!==0&&ie!==null&&!ie.m;if(e){var t=ie;(t.e??(t.e=[])).push({fn:n,effect:oe,reaction:ee})}else{var r=vo(n);return r}}function zp(n){return zh(),wo(n)}function Hp(n){const e=br(Ir,n,!0);return(t={})=>new Promise(r=>{t.outro?Ii(e,()=>{hn(e),r(void 0)}):(hn(e),r(void 0))})}function vo(n){return br(Ih,n,!1)}function Hh(n,e){var t=ie,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=wo(()=>{n(),!r.ran&&(r.ran=!0,le(t.l.r2,!0),qt(e))})}function qh(){var n=ie;wo(()=>{if(G(n.l.r2)){for(var e of n.l.r1){var t=e.effect;(t.f&Xe)!==0&&gt(t,Fn),Ar(t)&&Yi(t),e.ran=!1}n.l.r2.v=!1}})}function wo(n){return br($i,n,!0)}function _t(n,e=[],t=Qi){const r=e.map(t);return za(()=>n(...r.map(G)))}function za(n,e=0){return br($i|Wa|e,n,!0)}function lo(n,e=!0){return br($i|zt,n,!0,e)}function $h(n){var e=n.teardown;if(e!==null){const t=_o,r=ee;ju(!0),Et(null);try{e.call(null)}finally{ju(t),Et(r)}}}function Gh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var r=t.next;(t.f&Ir)!==0?t.parent=null:hn(t,e),t=r}}function qp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&zt)===0&&hn(e),e=t}}function hn(n,e=!0){var t=!1;if((e||(n.f&ap)!==0)&&n.nodes_start!==null){for(var r=n.nodes_start,o=n.nodes_end;r!==null;){var i=r===o?null:Ji(r);r.remove(),r=i}t=!0}Gh(n,e&&!t),Ti(n,0),gt(n,Gi);var a=n.transitions;if(a!==null)for(const c of a)c.stop();$h(n);var l=n.parent;l!==null&&l.first!==null&&Kh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Kh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Ii(n,e){var t=[];Ha(n,t,!0),Qh(t,()=>{hn(n),e&&e()})}function Qh(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var o of n)o.out(r)}else e()}function Ha(n,e,t){if((n.f&Mt)===0){if(n.f^=Mt,n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&e.push(a);for(var r=n.first;r!==null;){var o=r.next,i=(r.f&ja)!==0||(r.f&zt)!==0;Ha(r,e,i?t:!1),r=o}}}function Ai(n){Jh(n,!0)}function Jh(n,e){if((n.f&Mt)!==0){n.f^=Mt,(n.f&Xe)===0&&(n.f^=Xe),Ar(n)&&(gt(n,Ht),Zi(n));for(var t=n.first;t!==null;){var r=t.next,o=(t.f&ja)!==0||(t.f&zt)!==0;Jh(t,o?e:!1),t=r}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}function qa(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let ie=null;function Uu(n){ie=n}function Wn(n,e=!1,t){var r=ie={p:ie,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};Tr&&!e&&(ie.l={s:null,u:null,r1:[],r2:ao(!1)}),es(()=>{r.d=!0})}function jn(n){const e=ie;if(e!==null){n!==void 0&&(e.x=n);const a=e.e;if(a!==null){var t=oe,r=ee;e.e=null;try{for(var o=0;o<a.length;o++){var i=a[o];cn(i.effect),Et(i.reaction),vo(i.fn)}}finally{cn(t),Et(r)}}ie=e.p,e.m=!0}return n||{}}function yo(){return!Tr||ie!==null&&ie.l===null}const $p=["touchstart","touchmove"];function Gp(n){return $p.includes(n)}let Bu=!1;function Kp(){Bu||(Bu=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Xh(n){var e=ee,t=oe;Et(null),cn(null);try{return n()}finally{Et(e),cn(t)}}function Yh(n,e,t,r=t){n.addEventListener(e,()=>Xh(t));const o=n.__on_r;o?n.__on_r=()=>{o(),r(!0)}:n.__on_r=()=>r(!0),Kp()}const Qp=new Set,zu=new Set;function Jp(n,e,t,r={}){function o(i){if(r.capture||Qr.call(e,i),!i.cancelBubble)return Xh(()=>t==null?void 0:t.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Rh(()=>{e.addEventListener(n,o,r)}):e.addEventListener(n,o,r),o}function ot(n,e,t,r,o){var i={capture:r,passive:o},a=Jp(n,e,t,i);(e===document.body||e===window||e===document)&&es(()=>{e.removeEventListener(n,a,i)})}function Qr(n){var L;var e=this,t=e.ownerDocument,r=n.type,o=((L=n.composedPath)==null?void 0:L.call(n))||[],i=o[0]||n.target,a=0,l=n.__root;if(l){var c=o.indexOf(l);if(c!==-1&&(e===document||e===window)){n.__root=e;return}var d=o.indexOf(e);if(d===-1)return;c<=d&&(a=c)}if(i=o[a]||n.target,i!==e){kh(n,"currentTarget",{configurable:!0,get(){return i||t}});var f=ee,p=oe;Et(null),cn(null);try{for(var v,I=[];i!==null;){var S=i.assignedSlot||i.parentNode||i.host||null;try{var D=i["__"+r];if(D!=null&&(!i.disabled||n.target===i))if(Ki(D)){var[P,...N]=D;P.apply(i,[n,...N])}else D.call(i,n)}catch(O){v?I.push(O):v=O}if(n.cancelBubble||S===e||S===null)break;i=S}if(v){for(let O of I)queueMicrotask(()=>{throw O});throw v}}finally{n.__root=e,delete n.currentTarget,Et(f),cn(p)}}}function Xp(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function ca(n,e){var t=oe;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function _e(n,e){var t=(e&op)!==0,r=(e&ip)!==0,o,i=!n.startsWith("<!>");return()=>{o===void 0&&(o=Xp(i?n:"<!>"+n),t||(o=wi(o)));var a=r||Oh?document.importNode(o,!0):o.cloneNode(!0);if(t){var l=wi(a),c=a.lastChild;ca(l,c)}else ca(a,a);return a}}function ha(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ba();return n.append(e,t),ca(e,t),n}function ue(n,e){n!==null&&n.before(e)}function He(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Yp(n,e){return Zp(n,e)}const Xn=new Map;function Zp(n,{target:e,anchor:t,props:r={},events:o,context:i,intro:a=!0}){Sp();var l=new Set,c=p=>{for(var v=0;v<p.length;v++){var I=p[v];if(!l.has(I)){l.add(I);var S=Gp(I);e.addEventListener(I,Qr,{passive:S});var D=Xn.get(I);D===void 0?(document.addEventListener(I,Qr,{passive:S}),Xn.set(I,1)):Xn.set(I,D+1)}}};c(Ua(Qp)),zu.add(c);var d=void 0,f=Hp(()=>{var p=t??e.appendChild(Ba());return lo(()=>{if(i){Wn({});var v=ie;v.c=i}o&&(r.$$events=o),d=n(p,r)||{},i&&jn()}),()=>{var S;for(var v of l){e.removeEventListener(v,Qr);var I=Xn.get(v);--I===0?(document.removeEventListener(v,Qr),Xn.delete(v)):Xn.set(v,I)}zu.delete(c),p!==t&&((S=p.parentNode)==null||S.removeChild(p))}});return em.set(d,f),d}let em=new WeakMap;function Je(n,e,[t,r]=[0,0]){var o=n,i=null,a=null,l=Ke,c=t>0?ja:0,d=!1;const f=(v,I=!0)=>{d=!0,p(I,v)},p=(v,I)=>{l!==(l=v)&&(l?(i?Ai(i):I&&(i=lo(()=>I(o))),a&&Ii(a,()=>{a=null})):(a?Ai(a):I&&(a=lo(()=>I(o,[t+1,r]))),i&&Ii(i,()=>{i=null})))};za(()=>{d=!1,e(f),d||p(null,null)},c)}function tm(n,e){return e}function nm(n,e,t,r){for(var o=[],i=e.length,a=0;a<i;a++)Ha(e[a].e,o,!0);var l=i>0&&o.length===0&&t!==null;if(l){var c=t.parentNode;Rp(c),c.append(t),r.clear(),Zt(n,e[0].prev,e[i-1].next)}Qh(o,()=>{for(var d=0;d<i;d++){var f=e[d];l||(r.delete(f.k),Zt(n,f.prev,f.next)),hn(f.e,!l)}})}function rm(n,e,t,r,o,i=null){var a=n,l={flags:e,items:new Map,first:null};{var c=n;a=c.appendChild(Ba())}var d=null,f=!1,p=vi(()=>{var v=t();return Ki(v)?v:v==null?[]:Ua(v)});za(()=>{var v=G(p),I=v.length;f&&I===0||(f=I===0,om(v,l,a,o,e,r,t),i!==null&&(I===0?d?Ai(d):d=lo(()=>i(a)):d!==null&&Ii(d,()=>{d=null})),G(p))})}function om(n,e,t,r,o,i,a){var l=n.length,c=e.items,d=e.first,f=d,p,v=null,I=[],S=[],D,P,N,L;for(L=0;L<l;L+=1){if(D=n[L],P=i(D,L),N=c.get(P),N===void 0){var O=f?f.e.nodes_start:t;v=sm(O,e,v,v===null?e.first:v.next,D,P,L,r,o,a),c.set(P,v),I=[],S=[],f=v.next;continue}if(im(N,D,L),(N.e.f&Mt)!==0&&Ai(N.e),N!==f){if(p!==void 0&&p.has(N)){if(I.length<S.length){var z=S[0],Q;v=z.prev;var X=I[0],E=I[I.length-1];for(Q=0;Q<I.length;Q+=1)Hu(I[Q],z,t);for(Q=0;Q<S.length;Q+=1)p.delete(S[Q]);Zt(e,X.prev,E.next),Zt(e,v,X),Zt(e,E,z),f=z,v=E,L-=1,I=[],S=[]}else p.delete(N),Hu(N,f,t),Zt(e,N.prev,N.next),Zt(e,N,v===null?e.first:v.next),Zt(e,v,N),v=N;continue}for(I=[],S=[];f!==null&&f.k!==P;)(f.e.f&Mt)===0&&(p??(p=new Set)).add(f),S.push(f),f=f.next;if(f===null)continue;N=f}I.push(N),v=N,f=N.next}if(f!==null||p!==void 0){for(var m=p===void 0?[]:Ua(p);f!==null;)(f.e.f&Mt)===0&&m.push(f),f=f.next;var _=m.length;if(_>0){var y=l===0?t:null;nm(e,m,y,c)}}oe.first=e.first&&e.first.e,oe.last=v&&v.e}function im(n,e,t,r){_i(n.v,e),n.i=t}function sm(n,e,t,r,o,i,a,l,c,d){var f=(c&ep)!==0,p=(c&np)===0,v=f?p?Lt(o):ao(o):o,I=(c&tp)===0?a:ao(a),S={i:I,v,k:i,a:null,e:null,prev:t,next:r};try{return S.e=lo(()=>l(n,v,I,d),kp),S.e.prev=t&&t.e,S.e.next=r&&r.e,t===null?e.first=S:(t.next=S,t.e.next=S.e),r!==null&&(r.prev=S,r.e.prev=S.e),S}finally{}}function Hu(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,o=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==r;){var a=Ji(i);o.before(i),i=a}}function Zt(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function am(n,e,t){var r=n==null?"":""+n;return r===""?null:r}function qu(n,e,t,r,o,i){var a=n.__className;if(a!==t){var l=am(t);l==null?n.removeAttribute("class"):n.className=l,n.__className=t}return i}function lm(n,e,t=e){var r=yo();Yh(n,"input",o=>{var i=o?n.defaultValue:n.value;if(i=qs(n)?$s(i):i,t(i),r&&i!==(i=e())){var a=n.selectionStart,l=n.selectionEnd;n.value=i??"",l!==null&&(n.selectionStart=a,n.selectionEnd=Math.min(l,n.value.length))}}),qt(e)==null&&n.value&&t(qs(n)?$s(n.value):n.value),wo(()=>{var o=e();qs(n)&&o===$s(n.value)||n.type==="date"&&!o&&!n.value||o!==n.value&&(n.value=o??"")})}function qs(n){var e=n.type;return e==="number"||e==="range"}function $s(n){return n===""?null:+n}function $u(n,e,t){var r=Cn(n,e);r&&r.set&&(n[e]=t,es(()=>{n[e]=null}))}function Zh(n,e,t){if(n.multiple)return hm(n,e);for(var r of n.options){var o=eo(r);if(Tp(o,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function um(n,e){vo(()=>{var t=new MutationObserver(()=>{var r=n.__value;Zh(n,r)});return t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function cm(n,e,t=e){var r=!0;Yh(n,"change",o=>{var i=o?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(i),eo);else{var l=n.querySelector(i)??n.querySelector("option:not([disabled])");a=l&&eo(l)}t(a)}),vo(()=>{var o=e();if(Zh(n,o,r),r&&o===void 0){var i=n.querySelector(":checked");i!==null&&(o=eo(i),t(o))}n.__value=o,r=!1}),um(n)}function hm(n,e){for(var t of n.options)t.selected=~e.indexOf(eo(t))}function eo(n){return"__value"in n?n.__value:n.value}function Gu(n,e){return n===e||(n==null?void 0:n[Ot])===e}function dm(n={},e,t,r){return vo(()=>{var o,i;return wo(()=>{o=i,i=[],qt(()=>{n!==t(...i)&&(e(n,...i),o&&Gu(t(...o),n)&&e(null,...o))})}),()=>{Rh(()=>{i&&Gu(t(...i),n)&&e(null,...i)})}}),n}function kr(n=!1){const e=ie,t=e.l.u;if(!t)return;let r=()=>Up(e.s);if(n){let o=0,i={};const a=Qi(()=>{let l=!1;const c=e.s;for(const d in c)c[d]!==i[d]&&(i[d]=c[d],l=!0);return l&&o++,o});r=()=>G(a)}t.b.length&&zp(()=>{Ku(e,r),sa(t.b)}),ua(()=>{const o=qt(()=>t.m.map(fp));return()=>{for(const i of o)typeof i=="function"&&i()}}),t.a.length&&ua(()=>{Ku(e,r),sa(t.a)})}function Ku(n,e){if(n.l.s)for(const t of n.l.s)G(t);e()}function Eo(n){ie===null&&qa(),Tr&&ie.l!==null?mm(ie).m.push(n):ua(()=>{const e=qt(n);if(typeof e=="function")return e})}function fm(n){ie===null&&qa(),Eo(()=>()=>qt(n))}function gm(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function pm(){const n=ie;return n===null&&qa(),(e,t,r)=>{var i;const o=(i=n.s.$$events)==null?void 0:i[e];if(o){const a=Ki(o)?o.slice():[o],l=gm(e,t,r);for(const c of a)c.call(n.x,l);return!l.defaultPrevented}return!0}}function mm(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}function ed(n,e,t){if(n==null)return e(void 0),or;const r=qt(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const Yn=[];function bt(n,e=or){let t=null;const r=new Set;function o(l){if(Ch(n,l)&&(n=l,t)){const c=!Yn.length;for(const d of r)d[1](),Yn.push(d,n);if(c){for(let d=0;d<Yn.length;d+=2)Yn[d][0](Yn[d+1]);Yn.length=0}}}function i(l){o(l(n))}function a(l,c=or){const d=[l,c];return r.add(d),r.size===1&&(t=e(o,i)||or),l(n),()=>{r.delete(d),r.size===0&&t&&(t(),t=null)}}return{set:o,update:i,subscribe:a}}function da(n){let e;return ed(n,t=>e=t)(),e}let Qo=!1,fa=Symbol();function ze(n,e,t){const r=t[e]??(t[e]={store:null,source:Lt(void 0),unsubscribe:or});if(r.store!==n&&!(fa in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=or;else{var o=!0;r.unsubscribe=ed(n,i=>{o?r.source.v=i:le(r.source,i)}),o=!1}return n&&fa in t?da(n):G(r.source)}function _m(n,e){return n.set(e),e}function To(){const n={};function e(){es(()=>{for(var t in n)n[t].unsubscribe();kh(n,fa,{enumerable:!1,value:!0})})}return[n,e]}function vm(n){var e=Qo;try{return Qo=!1,[n(),Qo]}finally{Qo=e}}function Qu(n,e,t,r){var I;var o=!Tr||(t&rp)!==0,i=!1,a;[a,i]=vm(()=>n[e]);var l=Ot in n||lp in n;((I=Cn(n,e))==null?void 0:I.set)??(l&&e in n);var c=r,d=!0,f=()=>(d&&(d=!1,c=r),c),p;if(o)p=()=>{var S=n[e];return S===void 0?f():(d=!0,S)};else{var v=vi(()=>n[e]);v.f|=Ah,p=()=>{var S=G(v);return S!==void 0&&(c=void 0),S===void 0?c:S}}return p}const wm=()=>{};var Ju={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ym=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=n[t++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=n[t++],a=n[t++],l=n[t++],c=((o&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|a&63)}}return e.join("")},nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const i=n[o],a=o+1<n.length,l=a?n[o+1]:0,c=o+2<n.length,d=c?n[o+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,I=d&63;c||(I=64,a||(v=64)),r.push(t[f],t[p],t[v],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(td(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ym(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const i=t[n.charAt(o++)],l=o<n.length?t[n.charAt(o)]:0;++o;const d=o<n.length?t[n.charAt(o)]:64;++o;const p=o<n.length?t[n.charAt(o)]:64;if(++o,i==null||l==null||d==null||p==null)throw new Em;const v=i<<2|l>>4;if(r.push(v),d!==64){const I=l<<4&240|d>>2;if(r.push(I),p!==64){const S=d<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tm=function(n){const e=td(n);return nd.encodeByteArray(e,!0)},bi=function(n){return Tm(n).replace(/\./g,"")},rd=function(n){try{return nd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=()=>Im().__FIREBASE_DEFAULTS__,bm=()=>{if(typeof process>"u"||typeof Ju>"u")return;const n=Ju.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},km=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rd(n[1]);return e&&JSON.parse(e)},ts=()=>{try{return wm()||Am()||bm()||km()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},od=n=>{var e,t;return(t=(e=ts())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sm=n=>{const e=od(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},id=()=>{var n;return(n=ts())===null||n===void 0?void 0:n.config},sd=n=>{var e;return(e=ts())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bi(JSON.stringify(t)),bi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Dm(){var n;const e=(n=ts())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Om(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lm(){return!Dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Fm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="FirebaseError";class $t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wm,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],a=i?jm(i,r):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new $t(o,l,r)}}function jm(n,e){return n.replace(Um,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Um=/\{\$([^}]+)}/g;function Bm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const i=n[o],a=e[o];if(Xu(i)&&Xu(a)){if(!Ft(i,a))return!1}else if(i!==a)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Xu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zm(n,e){const t=new Hm(n,e);return t.subscribe.bind(t)}class Hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qm(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Gs),o.error===void 0&&(o.error=Gs),o.complete===void 0&&(o.complete=Gs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Rm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Km(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const a=this.instances.get(o);return a&&e(a,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gm(n){return n===kn?void 0:n}function Km(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Jm={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Xm=q.INFO,Ym={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Zm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Ym[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Xm,this._logHandler=Zm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const e_=(n,e)=>e.some(t=>n instanceof t);let Yu,Zu;function t_(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n_(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ad=new WeakMap,ga=new WeakMap,ld=new WeakMap,Ks=new WeakMap,Ga=new WeakMap;function r_(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(sn(n.result)),o()},a=()=>{r(n.error),o()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ad.set(t,n)}).catch(()=>{}),Ga.set(e,n),e}function o_(n){if(ga.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),o()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ga.set(n,e)}let pa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ld.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function i_(n){pa=n(pa)}function s_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qs(this),e,...t);return ld.set(r,e.sort?e.sort():[e]),sn(r)}:n_().includes(n)?function(...e){return n.apply(Qs(this),e),sn(ad.get(this))}:function(...e){return sn(n.apply(Qs(this),e))}}function a_(n){return typeof n=="function"?s_(n):(n instanceof IDBTransaction&&o_(n),e_(n,t_())?new Proxy(n,pa):n)}function sn(n){if(n instanceof IDBRequest)return r_(n);if(Ks.has(n))return Ks.get(n);const e=a_(n);return e!==n&&(Ks.set(n,e),Ga.set(e,n)),e}const Qs=n=>Ga.get(n);function l_(n,e,{blocked:t,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(n,e),l=sn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(sn(a.result),c.oldVersion,c.newVersion,sn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",d=>o(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const u_=["get","getKey","getAll","getAllKeys","count"],c_=["put","add","delete","clear"],Js=new Map;function ec(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=c_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||u_.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,o?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),o&&c.done]))[0]};return Js.set(e,i),i}i_(n=>({...n,get:(e,t,r)=>ec(e,t)||n.get(e,t,r),has:(e,t)=>!!ec(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(d_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function d_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ma="@firebase/app",tc="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new $a("@firebase/app"),f_="@firebase/app-compat",g_="@firebase/analytics-compat",p_="@firebase/analytics",m_="@firebase/app-check-compat",__="@firebase/app-check",v_="@firebase/auth",w_="@firebase/auth-compat",y_="@firebase/database",E_="@firebase/data-connect",T_="@firebase/database-compat",I_="@firebase/functions",A_="@firebase/functions-compat",b_="@firebase/installations",k_="@firebase/installations-compat",S_="@firebase/messaging",R_="@firebase/messaging-compat",P_="@firebase/performance",C_="@firebase/performance-compat",D_="@firebase/remote-config",V_="@firebase/remote-config-compat",N_="@firebase/storage",M_="@firebase/storage-compat",O_="@firebase/firestore",L_="@firebase/vertexai",x_="@firebase/firestore-compat",F_="firebase",W_="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="[DEFAULT]",j_={[ma]:"fire-core",[f_]:"fire-core-compat",[p_]:"fire-analytics",[g_]:"fire-analytics-compat",[__]:"fire-app-check",[m_]:"fire-app-check-compat",[v_]:"fire-auth",[w_]:"fire-auth-compat",[y_]:"fire-rtdb",[E_]:"fire-data-connect",[T_]:"fire-rtdb-compat",[I_]:"fire-fn",[A_]:"fire-fn-compat",[b_]:"fire-iid",[k_]:"fire-iid-compat",[S_]:"fire-fcm",[R_]:"fire-fcm-compat",[P_]:"fire-perf",[C_]:"fire-perf-compat",[D_]:"fire-rc",[V_]:"fire-rc-compat",[N_]:"fire-gcs",[M_]:"fire-gcs-compat",[O_]:"fire-fst",[x_]:"fire-fst-compat",[L_]:"fire-vertex","fire-js":"fire-js",[F_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,U_=new Map,va=new Map;function nc(n,e){try{n.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cr(n){const e=n.name;if(va.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,n);for(const t of ki.values())nc(t,n);for(const t of U_.values())nc(t,n);return!0}function Ka(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ct(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Io("app","Firebase",B_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=W_;function ud(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_a,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw an.create("bad-app-name",{appName:String(o)});if(t||(t=id()),!t)throw an.create("no-options");const i=ki.get(o);if(i){if(Ft(t,i.options)&&Ft(r,i.config))return i;throw an.create("duplicate-app",{appName:o})}const a=new Qm(o);for(const c of va.values())a.addComponent(c);const l=new z_(t,r,a);return ki.set(o,l),l}function cd(n=_a){const e=ki.get(n);if(!e&&n===_a&&id())return ud();if(!e)throw an.create("no-app",{appName:n});return e}function ln(n,e,t){var r;let o=(r=j_[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const i=o.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${o}" with version "${e}":`];i&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}cr(new Mn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="firebase-heartbeat-database",q_=1,uo="firebase-heartbeat-store";let Xs=null;function hd(){return Xs||(Xs=l_(H_,q_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(uo)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),Xs}async function $_(n){try{const t=(await hd()).transaction(uo),r=await t.objectStore(uo).get(dd(n));return await t.done,r}catch(e){if(e instanceof $t)Wt.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function rc(n,e){try{const r=(await hd()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,dd(n)),await r.done}catch(t){if(t instanceof $t)Wt.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(r.message)}}}function dd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=1024,K_=30;class Q_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new X_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats.length>K_){const a=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:r,unsentEntries:o}=J_(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Wt.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function J_(n,e=G_){const t=[];let r=n.slice();for(const o of n){const i=t.find(a=>a.agent===o.agent);if(i){if(i.dates.push(o.date),ic(t)>e){i.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ic(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class X_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?Fm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ic(n){return bi(JSON.stringify({version:2,heartbeats:n})).length}function Y_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n){cr(new Mn("platform-logger",e=>new h_(e),"PRIVATE")),cr(new Mn("heartbeat",e=>new Q_(e),"PRIVATE")),ln(ma,tc,n),ln(ma,tc,"esm2017"),ln("fire-js","")}Z_("");var ev="firebase",tv="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(ev,tv,"app");function Qa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nv=fd,gd=new Io("auth","Firebase",fd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new $a("@firebase/auth");function rv(n,...e){Si.logLevel<=q.WARN&&Si.warn(`Auth (${Sr}): ${n}`,...e)}function oi(n,...e){Si.logLevel<=q.ERROR&&Si.error(`Auth (${Sr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,...e){throw Xa(n,...e)}function dt(n,...e){return Xa(n,...e)}function Ja(n,e,t){const r=Object.assign(Object.assign({},nv()),{[e]:t});return new Io("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return Ja(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ov(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(n,"argument-error"),Ja(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gd.create(n,...e)}function j(n,e,...t){if(!n)throw Xa(e,...t)}function Dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function jt(n,e){n||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iv(){return sc()==="http:"||sc()==="https:"}function sc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iv()||Nm()||"connection"in navigator)?navigator.onLine:!0}function av(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=Cm()||Mm()}get(){return sv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new bo(3e4,6e4);function Za(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rr(n,e,t,r,o={}){return md(n,o,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ao(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},i);return Vm()||(d.referrerPolicy="no-referrer"),pd.fetch()(_d(n,n.config.apiHost,t,l),d)})}async function md(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lv),e);try{const o=new hv(n),i=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Jo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Jo(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Jo(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ja(n,f,d);Tt(n,f)}}catch(o){if(o instanceof $t)throw o;Tt(n,"network-request-failed",{message:String(o)})}}async function cv(n,e,t,r,o={}){const i=await Rr(n,e,t,r,o);return"mfaPendingCredential"in i&&Tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function _d(n,e,t,r){const o=`${e}${t}?${r}`;return n.config.emulator?Ya(n.config,o):`${n.config.apiScheme}://${o}`}class hv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),uv.get())})}}function Jo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=dt(n,e,r);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,e){return Rr(n,"POST","/v1/accounts:delete",e)}async function vd(n,e){return Rr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fv(n,e=!1){const t=Fe(n),r=await t.getIdToken(e),o=el(r);j(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:to(Ys(o.auth_time)),issuedAtTime:to(Ys(o.iat)),expirationTime:to(Ys(o.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ys(n){return Number(n)*1e3}function el(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const o=rd(t);return o?JSON.parse(o):(oi("Failed to decode base64 JWT payload"),null)}catch(o){return oi("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ac(n){const e=el(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $t&&gv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n){var e;const t=n.auth,r=await n.getIdToken(),o=await co(n,vd(t,{idToken:r}));j(o==null?void 0:o.users.length,t,"internal-error");const i=o.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wd(i.providerUserInfo):[],l=_v(n.providerData,a),c=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ya(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function mv(n){const e=Fe(n);await Ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _v(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function wd(n){return n.map(e=>{var{providerId:t}=e,r=Qa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(n,e){const t=await md(n,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:i}=n.config,a=_d(n,o,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",pd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wv(n,e){return Rr(n,"POST","/v2/accounts:revokeToken",Za(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:i}=await vv(e,t);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:i}=t,a=new ir;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),o&&(j(typeof o=="string","internal-error",{appName:e}),a.accessToken=o),i&&(j(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,i=Qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ya(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await co(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fv(this,e)}reload(){return mv(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await co(this,dv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,i,a,l,c,d,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(o=t.email)!==null&&o!==void 0?o:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:z,isAnonymous:Q,providerData:X,stsTokenManager:E}=t;j(O&&E,e,"internal-error");const m=ir.fromJSON(this.name,E);j(typeof O=="string",e,"internal-error"),Yt(p,e.name),Yt(v,e.name),j(typeof z=="boolean",e,"internal-error"),j(typeof Q=="boolean",e,"internal-error"),Yt(I,e.name),Yt(S,e.name),Yt(D,e.name),Yt(P,e.name),Yt(N,e.name),Yt(L,e.name);const _=new Vt({uid:O,auth:e,email:v,emailVerified:z,displayName:p,isAnonymous:Q,photoURL:S,phoneNumber:I,tenantId:D,stsTokenManager:m,createdAt:N,lastLoginAt:L});return X&&Array.isArray(X)&&(_.providerData=X.map(y=>Object.assign({},y))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const o=new ir;o.updateFromServerResponse(t);const i=new Vt({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Ri(i),i}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];j(o.localId!==void 0,"internal-error");const i=o.providerUserInfo!==void 0?wd(o.providerUserInfo):[],a=!(o.email&&o.passwordHash)&&!(i!=null&&i.length),l=new ir;l.updateFromIdToken(r);const c=new Vt({uid:o.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:i,metadata:new ya(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map;function Nt(n){jt(n instanceof Function,"Expected a class definition");let e=lc.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yd.type="NONE";const uc=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e,t){return`firebase:${n}:${e}:${t}`}class sr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=ii(this.userKey,o.apiKey,i),this.fullPersistenceKey=ii("persistence",o.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sr(Nt(uc),e,r);const o=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=o[0]||Nt(uc);const a=ii(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const p=Vt._fromJSON(e,f);d!==i&&(l=p),i=d;break}}catch{}const c=o.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new sr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ed(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kd(e))return"Blackberry";if(Sd(e))return"Webos";if(Td(e))return"Safari";if((e.includes("chrome/")||Id(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ed(n=xe()){return/firefox\//i.test(n)}function Td(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Id(n=xe()){return/crios\//i.test(n)}function Ad(n=xe()){return/iemobile/i.test(n)}function bd(n=xe()){return/android/i.test(n)}function kd(n=xe()){return/blackberry/i.test(n)}function Sd(n=xe()){return/webos/i.test(n)}function tl(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yv(n=xe()){var e;return tl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ev(){return Om()&&document.documentMode===10}function Rd(n=xe()){return tl(n)||bd(n)||Sd(n)||kd(n)||/windows phone/i.test(n)||Ad(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,e=[]){let t;switch(n){case"Browser":t=cc(xe());break;case"Worker":t=`${cc(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,e={}){return Rr(n,"GET","/v2/passwordPolicy",Za(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=6;class bv{constructor(e){var t,r,o,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Av,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsLowercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hc(this),this.idTokenSubscription=new hc(this),this.beforeStateQueue=new Tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nt(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vd(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=o==null?void 0:o._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(o=c.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(a){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ri(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Vn(this));const t=e?Fe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iv(this),t=new bv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,o);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ns(n){return Fe(n)}class hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=zm(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sv(n){nl=n}function Rv(n){return nl.loadJS(n)}function Pv(){return nl.gapiScript}function Cv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n,e){const t=Ka(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),i=t.getOptions();if(Ft(i,e??{}))return o;Tt(o,"already-initialized")}return t.initialize({options:e})}function Vv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nv(n,e,t){const r=ns(n);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,i=Cd(e),{host:a,port:l}=Mv(e),c=l===null?"":`:${l}`,d={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Ft(d,r.config.emulator)&&Ft(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ov()}function Cd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mv(n){const e=Cd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:dc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:dc(a)}}}function dc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ov(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,t){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,e){return cv(n,"POST","/v1/accounts:signInWithIdp",Za(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="http://localhost";class On extends Dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,i=Qa(t,["providerId","signInMethod"]);if(!r||!o)return null;const a=new On(r,o);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:Lv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ao(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ko{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ko{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ko{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nn.credential(t,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const i=await Vt._fromIdTokenResponse(e,r,o),a=fc(r);return new hr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=fc(r);return new hr({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends $t{constructor(e,t,r,o){var i;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Pi(e,t,r,o)}}function Vd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(n,i,e,r):i})}async function xv(n,e,t=!1){const r=await co(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(n,e,t=!1){const{auth:r}=n;if(ct(r.app))return Promise.reject(Vn(r));const o="reauthenticate";try{const i=await co(n,Vd(r,o,e,n),t);j(i.idToken,r,"internal-error");const a=el(i.idToken);j(a,r,"internal-error");const{sub:l}=a;return j(n.uid===l,r,"user-mismatch"),hr._forOperation(n,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e,t=!1){if(ct(n.app))return Promise.reject(Vn(n));const r="signIn",o=await Vd(n,r,e),i=await hr._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(i.user),i}function jv(n,e,t,r){return Fe(n).onIdTokenChanged(e,t,r)}function Uv(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function Bv(n,e,t,r){return Fe(n).onAuthStateChanged(e,t,r)}function zv(n){return Fe(n).signOut()}const Ci="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=1e3,qv=10;class Md extends Nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ev()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,qv):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const $v=Md;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Od.type="SESSION";const Ld=Od;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:i}=t.data,a=this.handlersMap[o];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const l=Array.from(a).map(async d=>d(t.origin,i)),c=await Gv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const d=ol("",20);o.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:o,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),o.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[o.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function Qv(n){vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Jv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Yv(){return xd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firebaseLocalStorageDb",Zv=1,Di="firebaseLocalStorage",Wd="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function os(n,e){return n.transaction([Di],e?"readwrite":"readonly").objectStore(Di)}function ew(){const n=indexedDB.deleteDatabase(Fd);return new So(n).toPromise()}function Ea(){const n=indexedDB.open(Fd,Zv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Di,{keyPath:Wd})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Di)?e(r):(r.close(),await ew(),e(await Ea()))})})}async function gc(n,e,t){const r=os(n,!0).put({[Wd]:e,value:t});return new So(r).toPromise()}async function tw(n,e){const t=os(n,!1).get(e),r=await new So(t).toPromise();return r===void 0?null:r.value}function pc(n,e){const t=os(n,!0).delete(e);return new So(t).toPromise()}const nw=800,rw=3;class jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ea(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(Yv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jv(),!this.activeServiceWorker)return;this.sender=new Kv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ea();return await gc(e,Ci,"1"),await pc(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const i=os(o,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:i}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jd.type="LOCAL";const ow=jd;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n,e){return e?Nt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iw(n){return Wv(n.auth,new il(n),n.bypassAuthState)}function sw(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Fv(t,new il(n),n.bypassAuthState)}async function aw(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),xv(t,new il(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,r,o,i=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iw;case"linkViaPopup":case"linkViaRedirect":return aw;case"reauthViaPopup":case"reauthViaRedirect":return sw;default:Tt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new bo(2e3,1e4);async function uw(n,e,t){if(ct(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const r=ns(n);ov(n,e,rl);const o=Ud(r,t);return new Rn(r,"signInViaPopup",e,o).executeNotNull()}class Rn extends Bd{constructor(e,t,r,o,i){super(e,t,o,i),this.provider=r,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lw.get())};e()}}Rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="pendingRedirect",si=new Map;class hw extends Bd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await dw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dw(n,e){const t=pw(e),r=gw(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function fw(n,e){si.set(n._key(),e)}function gw(n){return Nt(n._redirectPersistence)}function pw(n){return ii(cw,n.config.apiKey,n.name)}async function mw(n,e,t=!1){if(ct(n.app))return Promise.reject(Vn(n));const r=ns(n),o=Ud(r,e),a=await new hw(r,o,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=10*60*1e3;class vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ww(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zd(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_w&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ww(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e={}){return Rr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Iw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await yw(n);for(const t of e)try{if(Aw(t))return}catch{}Tt(n,"unauthorized-domain")}function Aw(n){const e=wa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Tw.test(t))return!1;if(Ew.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new bo(3e4,6e4);function _c(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kw(n){return new Promise((e,t)=>{var r,o,i;function a(){_c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_c(),t(dt(n,"network-request-failed"))},timeout:bw.get()})}if(!((o=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((i=vt().gapi)===null||i===void 0)&&i.load)a();else{const l=Cv("iframefcb");return vt()[l]=()=>{gapi.load?a():t(dt(n,"network-request-failed"))},Rv(`${Pv()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ai=null,e})}let ai=null;function Sw(n){return ai=ai||kw(n),ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new bo(5e3,15e3),Pw="__/auth/iframe",Cw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ya(e,Cw):`https://${n.config.authDomain}/${Pw}`,r={apiKey:e.apiKey,appName:n.name,v:Sr},o=Vw.get(n.config.apiHost);o&&(r.eid=o);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ao(r).slice(1)}`}async function Mw(n){const e=await Sw(n),t=vt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:Nw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const a=dt(n,"network-request-failed"),l=vt().setTimeout(()=>{i(a)},Rw.get());function c(){vt().clearTimeout(l),o(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lw=500,xw=600,Fw="_blank",Ww="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jw(n,e,t,r=Lw,o=xw){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ow),{width:r.toString(),height:o.toString(),top:i,left:a}),d=xe().toLowerCase();t&&(l=Id(d)?Fw:t),Ed(d)&&(e=e||Ww,c.scrollbars="yes");const f=Object.entries(c).reduce((v,[I,S])=>`${v}${I}=${S},`,"");if(yv(d)&&l!=="_self")return Uw(e||"",l),new vc(null);const p=window.open(e||"",l,f);j(p,n,"popup-blocked");try{p.focus()}catch{}return new vc(p)}function Uw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="__/auth/handler",zw="emulator/auth/handler",Hw=encodeURIComponent("fac");async function wc(n,e,t,r,o,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sr,eventId:o};if(e instanceof rl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),d=c?`#${Hw}=${encodeURIComponent(c)}`:"";return`${qw(n)}?${Ao(l).slice(1)}${d}`}function qw({config:n}){return n.emulator?Ya(n,zw):`https://${n.authDomain}/${Bw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class $w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=mw,this._overrideRedirectResult=fw}async _openPopup(e,t,r,o){var i;jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await wc(e,t,r,wa(),o);return jw(e,a,ol())}async _openRedirect(e,t,r,o){await this._originValidation(e);const i=await wc(e,t,r,wa(),o);return Qv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:i}=this.eventManagers[t];return o?Promise.resolve(o):(jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Mw(e),r=new vw(e);return t.register("authEvent",o=>(j(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zs,{type:Zs},o=>{var i;const a=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[Zs];a!==void 0&&t(!!a),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rd()||Td()||tl()}}const Gw=$w;var yc="@firebase/auth",Ec="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jw(n){cr(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pd(n)},d=new kv(r,o,i,c);return Vv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Mn("auth-internal",e=>{const t=ns(e.getProvider("auth").getImmediate());return(r=>new Kw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(yc,Ec,Qw(n)),ln(yc,Ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=5*60,Yw=sd("authIdTokenMaxAge")||Xw;let Tc=null;const Zw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Yw)return;const o=t==null?void 0:t.token;Tc!==o&&(Tc=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ey(n=cd()){const e=Ka(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dv(n,{popupRedirectResolver:Gw,persistence:[ow,$v,Ld]}),r=sd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zw(i.toString());Uv(t,a,()=>a(t.currentUser)),jv(t,l=>a(l))}}const o=od("auth");return o&&Nv(t,`http://${o}`),t}function ty(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Sv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const i=dt("internal-error");i.customData=o,t(i)},r.type="text/javascript",r.charset="UTF-8",ty().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jw("Browser");var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,Hd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,b){for(var w=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)w[ve-2]=arguments[ve];return m.prototype[T].apply(y,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var b=E.g[3],w=m+(b^_&(T^b))+y[0]+3614090360&4294967295;m=_+(w<<7&4294967295|w>>>25),w=b+(T^m&(_^T))+y[1]+3905402710&4294967295,b=m+(w<<12&4294967295|w>>>20),w=T+(_^b&(m^_))+y[2]+606105819&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(m^T&(b^m))+y[3]+3250441966&4294967295,_=T+(w<<22&4294967295|w>>>10),w=m+(b^_&(T^b))+y[4]+4118548399&4294967295,m=_+(w<<7&4294967295|w>>>25),w=b+(T^m&(_^T))+y[5]+1200080426&4294967295,b=m+(w<<12&4294967295|w>>>20),w=T+(_^b&(m^_))+y[6]+2821735955&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(m^T&(b^m))+y[7]+4249261313&4294967295,_=T+(w<<22&4294967295|w>>>10),w=m+(b^_&(T^b))+y[8]+1770035416&4294967295,m=_+(w<<7&4294967295|w>>>25),w=b+(T^m&(_^T))+y[9]+2336552879&4294967295,b=m+(w<<12&4294967295|w>>>20),w=T+(_^b&(m^_))+y[10]+4294925233&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(m^T&(b^m))+y[11]+2304563134&4294967295,_=T+(w<<22&4294967295|w>>>10),w=m+(b^_&(T^b))+y[12]+1804603682&4294967295,m=_+(w<<7&4294967295|w>>>25),w=b+(T^m&(_^T))+y[13]+4254626195&4294967295,b=m+(w<<12&4294967295|w>>>20),w=T+(_^b&(m^_))+y[14]+2792965006&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(m^T&(b^m))+y[15]+1236535329&4294967295,_=T+(w<<22&4294967295|w>>>10),w=m+(T^b&(_^T))+y[1]+4129170786&4294967295,m=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(m^_))+y[6]+3225465664&4294967295,b=m+(w<<9&4294967295|w>>>23),w=T+(m^_&(b^m))+y[11]+643717713&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^m&(T^b))+y[0]+3921069994&4294967295,_=T+(w<<20&4294967295|w>>>12),w=m+(T^b&(_^T))+y[5]+3593408605&4294967295,m=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(m^_))+y[10]+38016083&4294967295,b=m+(w<<9&4294967295|w>>>23),w=T+(m^_&(b^m))+y[15]+3634488961&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^m&(T^b))+y[4]+3889429448&4294967295,_=T+(w<<20&4294967295|w>>>12),w=m+(T^b&(_^T))+y[9]+568446438&4294967295,m=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(m^_))+y[14]+3275163606&4294967295,b=m+(w<<9&4294967295|w>>>23),w=T+(m^_&(b^m))+y[3]+4107603335&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^m&(T^b))+y[8]+1163531501&4294967295,_=T+(w<<20&4294967295|w>>>12),w=m+(T^b&(_^T))+y[13]+2850285829&4294967295,m=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(m^_))+y[2]+4243563512&4294967295,b=m+(w<<9&4294967295|w>>>23),w=T+(m^_&(b^m))+y[7]+1735328473&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^m&(T^b))+y[12]+2368359562&4294967295,_=T+(w<<20&4294967295|w>>>12),w=m+(_^T^b)+y[5]+4294588738&4294967295,m=_+(w<<4&4294967295|w>>>28),w=b+(m^_^T)+y[8]+2272392833&4294967295,b=m+(w<<11&4294967295|w>>>21),w=T+(b^m^_)+y[11]+1839030562&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^m)+y[14]+4259657740&4294967295,_=T+(w<<23&4294967295|w>>>9),w=m+(_^T^b)+y[1]+2763975236&4294967295,m=_+(w<<4&4294967295|w>>>28),w=b+(m^_^T)+y[4]+1272893353&4294967295,b=m+(w<<11&4294967295|w>>>21),w=T+(b^m^_)+y[7]+4139469664&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^m)+y[10]+3200236656&4294967295,_=T+(w<<23&4294967295|w>>>9),w=m+(_^T^b)+y[13]+681279174&4294967295,m=_+(w<<4&4294967295|w>>>28),w=b+(m^_^T)+y[0]+3936430074&4294967295,b=m+(w<<11&4294967295|w>>>21),w=T+(b^m^_)+y[3]+3572445317&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^m)+y[6]+76029189&4294967295,_=T+(w<<23&4294967295|w>>>9),w=m+(_^T^b)+y[9]+3654602809&4294967295,m=_+(w<<4&4294967295|w>>>28),w=b+(m^_^T)+y[12]+3873151461&4294967295,b=m+(w<<11&4294967295|w>>>21),w=T+(b^m^_)+y[15]+530742520&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^m)+y[2]+3299628645&4294967295,_=T+(w<<23&4294967295|w>>>9),w=m+(T^(_|~b))+y[0]+4096336452&4294967295,m=_+(w<<6&4294967295|w>>>26),w=b+(_^(m|~T))+y[7]+1126891415&4294967295,b=m+(w<<10&4294967295|w>>>22),w=T+(m^(b|~_))+y[14]+2878612391&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~m))+y[5]+4237533241&4294967295,_=T+(w<<21&4294967295|w>>>11),w=m+(T^(_|~b))+y[12]+1700485571&4294967295,m=_+(w<<6&4294967295|w>>>26),w=b+(_^(m|~T))+y[3]+2399980690&4294967295,b=m+(w<<10&4294967295|w>>>22),w=T+(m^(b|~_))+y[10]+4293915773&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~m))+y[1]+2240044497&4294967295,_=T+(w<<21&4294967295|w>>>11),w=m+(T^(_|~b))+y[8]+1873313359&4294967295,m=_+(w<<6&4294967295|w>>>26),w=b+(_^(m|~T))+y[15]+4264355552&4294967295,b=m+(w<<10&4294967295|w>>>22),w=T+(m^(b|~_))+y[6]+2734768916&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~m))+y[13]+1309151649&4294967295,_=T+(w<<21&4294967295|w>>>11),w=m+(T^(_|~b))+y[4]+4149444226&4294967295,m=_+(w<<6&4294967295|w>>>26),w=b+(_^(m|~T))+y[11]+3174756917&4294967295,b=m+(w<<10&4294967295|w>>>22),w=T+(m^(b|~_))+y[2]+718787259&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,T=this.h,b=0;b<m;){if(T==0)for(;b<=_;)o(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<m;)if(y[T++]=E.charCodeAt(b++),T==this.blockSize){o(this,y),T=0;break}}else for(;b<m;)if(y[T++]=E[b++],T==this.blockSize){o(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function i(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var b=E[T]|0;y&&b==m||(_[T]=b,y=!1)}this.g=_}var l={};function c(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return P(d(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=p,T=0;T<E.length;T+=8){var b=Math.min(8,E.length-T),w=parseInt(E.substring(T,T+b),m);8>b?(b=d(Math.pow(m,b)),y=y.j(b).add(d(w))):(y=y.j(_),y=y.add(d(w)))}return y}var p=c(0),v=c(1),I=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(D(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,y="";;){var T=z(_,m).g;_=N(_,T.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,S(_))return b+y;for(;6>b.length;)b="0"+b;y=b+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=N(this,E),D(E)?-1:S(E)?0:1};function P(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new a(_,~E.h).add(v)}n.abs=function(){return D(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=m;T++){var b=y+(this.i(T)&65535)+(E.i(T)&65535),w=(b>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=w>>>16,b&=65535,w&=65535,_[T]=w<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function N(E,m){return E.add(P(m))}n.j=function(E){if(S(this)||S(E))return p;if(D(this))return D(E)?P(this).j(P(E)):P(P(this).j(E));if(D(E))return P(this.j(P(E)));if(0>this.l(I)&&0>E.l(I))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var b=this.i(y)>>>16,w=this.i(y)&65535,ve=E.i(T)>>>16,We=E.i(T)&65535;_[2*y+2*T]+=w*We,L(_,2*y+2*T),_[2*y+2*T+1]+=b*We,L(_,2*y+2*T+1),_[2*y+2*T+1]+=w*ve,L(_,2*y+2*T+1),_[2*y+2*T+2]+=b*ve,L(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function L(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function O(E,m){this.g=E,this.h=m}function z(E,m){if(S(m))throw Error("division by zero");if(S(E))return new O(p,p);if(D(E))return m=z(P(E),m),new O(P(m.g),P(m.h));if(D(m))return m=z(E,P(m)),new O(P(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,y=m;0>=y.l(E);)_=Q(_),y=Q(y);var T=X(_,1),b=X(y,1);for(y=X(y,2),_=X(_,2);!S(y);){var w=b.add(y);0>=w.l(E)&&(T=T.add(_),b=w),y=X(y,1),_=X(_,1)}return m=N(E,T.j(m)),new O(T,m)}for(T=p;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),b=d(_),w=b.j(m);D(w)||0<w.l(E);)_-=y,b=d(_),w=b.j(m);S(b)&&(b=v),T=T.add(b),E=N(E,w)}return new O(T,E)}n.A=function(E){return z(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function Q(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function X(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,T=[],b=0;b<y;b++)T[b]=0<m?E.i(b+_)>>>m|E.i(b+_+1)<<32-m:E.i(b+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,un=a}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qd,Jr,$d,li,Ta,Gd,Kd,Qd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,h){return s==Array.prototype||s==Object.prototype||(s[u]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var u=0;u<s.length;++u){var h=s[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function o(s,u){if(u)e:{var h=r;s=s.split(".");for(var g=0;g<s.length-1;g++){var A=s[g];if(!(A in h))break e;h=h[A]}s=s[s.length-1],g=h[s],u=u(g),u!=g&&u!=null&&e(h,s,{configurable:!0,writable:!0,value:u})}}function i(s,u){s instanceof String&&(s+="");var h=0,g=!1,A={next:function(){if(!g&&h<s.length){var k=h++;return{value:u(k,s[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}o("Array.prototype.values",function(s){return s||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function f(s,u,h){return s.call.apply(s.bind,arguments)}function p(s,u,h){if(!s)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,g),s.apply(u,A)}}return function(){return s.apply(u,arguments)}}function v(s,u,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function I(s,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),s.apply(this,g)}}function S(s,u){function h(){}h.prototype=u.prototype,s.aa=u.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(g,A,k){for(var V=Array(arguments.length-2),re=2;re<arguments.length;re++)V[re-2]=arguments[re];return u.prototype[A].apply(g,V)}}function D(s){const u=s.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=s[g];return h}return[]}function P(s,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const A=s.length||0,k=g.length||0;s.length=A+k;for(let V=0;V<k;V++)s[A+V]=g[V]}else s.push(g)}}class N{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(s){return/^[\s\xa0]*$/.test(s)}function O(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function z(s){return z[" "](s),s}z[" "]=function(){};var Q=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function X(s,u,h){for(const g in s)u.call(h,s[g],g,s)}function E(s,u){for(const h in s)u.call(void 0,s[h],h,s)}function m(s){const u={};for(const h in s)u[h]=s[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let h,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(h in g)s[h]=g[h];for(let k=0;k<_.length;k++)h=_[k],Object.prototype.hasOwnProperty.call(g,h)&&(s[h]=g[h])}}function T(s){var u=1;s=s.split(":");const h=[];for(;0<u&&s.length;)h.push(s.shift()),u--;return s.length&&h.push(s.join(":")),h}function b(s){l.setTimeout(()=>{throw s},0)}function w(){var s=$e;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class ve{constructor(){this.h=this.g=null}add(u,h){const g=We.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var We=new N(()=>new at,s=>s.reset());class at{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let se,we=!1,$e=new ve,Pe=()=>{const s=l.Promise.resolve(void 0);se=()=>{s.then(Ye)}};var Ye=()=>{for(var s;s=w();){try{s.h.call(s.g)}catch(h){b(h)}var u=We;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}we=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Ge=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return s}();function ge(s,u){if(Y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,g=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Q){e:{try{z(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=s.fromElement:h=="mouseout"&&(u=s.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ce[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ge.aa.h.call(this)}}S(ge,Y);var Ce={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),wn=0;function Hn(s,u,h,g,A){this.listener=s,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=A,this.key=++wn,this.da=this.fa=!1}function kt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function St(s){this.src=s,this.g={},this.h=0}St.prototype.add=function(s,u,h,g,A){var k=s.toString();s=this.g[k],s||(s=this.g[k]=[],this.h++);var V=En(s,u,g,A);return-1<V?(u=s[V],h||(u.fa=!1)):(u=new Hn(u,this.src,k,!!g,A),u.fa=h,s.push(u)),u};function yn(s,u){var h=u.type;if(h in s.g){var g=s.g[h],A=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(g,A,1),k&&(kt(u),s.g[h].length==0&&(delete s.g[h],s.h--))}}function En(s,u,h,g){for(var A=0;A<s.length;++A){var k=s[A];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==g)return A}return-1}var qn="closure_lm_"+(1e6*Math.random()|0),$n={};function Mr(s,u,h,g,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)Mr(s,u[k],h,g,A);return null}return h=Wl(h),s&&s[Ze]?s.K(u,h,d(g)?!!g.capture:!1,A):bs(s,u,h,!1,g,A)}function bs(s,u,h,g,A,k){if(!u)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,re=Ss(s);if(re||(s[qn]=re=new St(s)),h=re.add(u,h,g,V,k),h.proxy)return h;if(g=ks(),h.proxy=g,g.src=s,g.listener=h,s.addEventListener)Ge||(A=V),A===void 0&&(A=!1),s.addEventListener(u.toString(),g,A);else if(s.attachEvent)s.attachEvent(Or(u.toString()),g);else if(s.addListener&&s.removeListener)s.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ks(){function s(h){return u.call(s.src,s.listener,h)}const u=Ag;return s}function Vo(s,u,h,g,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)Vo(s,u[k],h,g,A);else g=d(g)?!!g.capture:!!g,h=Wl(h),s&&s[Ze]?(s=s.i,u=String(u).toString(),u in s.g&&(k=s.g[u],h=En(k,h,g,A),-1<h&&(kt(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete s.g[u],s.h--)))):s&&(s=Ss(s))&&(u=s.g[u.toString()],s=-1,u&&(s=En(u,h,g,A)),(h=-1<s?u[s]:null)&&Gt(h))}function Gt(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Ze])yn(u.i,s);else{var h=s.type,g=s.proxy;u.removeEventListener?u.removeEventListener(h,g,s.capture):u.detachEvent?u.detachEvent(Or(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=Ss(u))?(yn(h,s),h.h==0&&(h.src=null,u[qn]=null)):kt(s)}}}function Or(s){return s in $n?$n[s]:$n[s]="on"+s}function Ag(s,u){if(s.da)s=!0;else{u=new ge(u,this);var h=s.listener,g=s.ha||s.src;s.fa&&Gt(s),s=h.call(g,u)}return s}function Ss(s){return s=s[qn],s instanceof St?s:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(s){return typeof s=="function"?s:(s[Rs]||(s[Rs]=function(u){return s.handleEvent(u)}),s[Rs])}function De(){ye.call(this),this.i=new St(this),this.M=this,this.F=null}S(De,ye),De.prototype[Ze]=!0,De.prototype.removeEventListener=function(s,u,h,g){Vo(this,s,u,h,g)};function je(s,u){var h,g=s.F;if(g)for(h=[];g;g=g.F)h.push(g);if(s=s.M,g=u.type||u,typeof u=="string")u=new Y(u,s);else if(u instanceof Y)u.target=u.target||s;else{var A=u;u=new Y(g,s),y(u,A)}if(A=!0,h)for(var k=h.length-1;0<=k;k--){var V=u.g=h[k];A=No(V,g,!0,u)&&A}if(V=u.g=s,A=No(V,g,!0,u)&&A,A=No(V,g,!1,u)&&A,h)for(k=0;k<h.length;k++)V=u.g=h[k],A=No(V,g,!1,u)&&A}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var h=s.g[u],g=0;g<h.length;g++)kt(h[g]);delete s.g[u],s.h--}}this.F=null},De.prototype.K=function(s,u,h,g){return this.i.add(String(s),u,!1,h,g)},De.prototype.L=function(s,u,h,g){return this.i.add(String(s),u,!0,h,g)};function No(s,u,h,g){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var V=u[k];if(V&&!V.da&&V.capture==h){var re=V.listener,be=V.ha||V.src;V.fa&&yn(s.i,V),A=re.call(be,g)!==!1&&A}}return A&&!g.defaultPrevented}function jl(s,u,h){if(typeof s=="function")h&&(s=v(s,h));else if(s&&typeof s.handleEvent=="function")s=v(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function Ul(s){s.g=jl(()=>{s.g=null,s.i&&(s.i=!1,Ul(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class bg extends ye{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(s){ye.call(this),this.h=s,this.g={}}S(Lr,ye);var Bl=[];function zl(s){X(s.g,function(u,h){this.g.hasOwnProperty(h)&&Gt(u)},s),s.g={}}Lr.prototype.N=function(){Lr.aa.N.call(this),zl(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=l.JSON.stringify,kg=l.JSON.parse,Sg=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Cs(){}Cs.prototype.h=null;function Hl(s){return s.h||(s.h=s.i())}function ql(){}var xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ds(){Y.call(this,"d")}S(Ds,Y);function Vs(){Y.call(this,"c")}S(Vs,Y);var Tn={},$l=null;function Mo(){return $l=$l||new De}Tn.La="serverreachability";function Gl(s){Y.call(this,Tn.La,s)}S(Gl,Y);function Fr(s){const u=Mo();je(u,new Gl(u))}Tn.STAT_EVENT="statevent";function Kl(s,u){Y.call(this,Tn.STAT_EVENT,s),this.stat=u}S(Kl,Y);function Ue(s){const u=Mo();je(u,new Kl(u,s))}Tn.Ma="timingevent";function Ql(s,u){Y.call(this,Tn.Ma,s),this.size=u}S(Ql,Y);function Wr(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function jr(){this.g=!0}jr.prototype.xa=function(){this.g=!1};function Rg(s,u,h,g,A,k){s.info(function(){if(s.g)if(k)for(var V="",re=k.split("&"),be=0;be<re.length;be++){var J=re[be].split("=");if(1<J.length){var Ve=J[0];J=J[1];var Ne=Ve.split("_");V=2<=Ne.length&&Ne[1]=="type"?V+(Ve+"="+J+"&"):V+(Ve+"=redacted&")}}else V=null;else V=k;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+h+`
`+V})}function Pg(s,u,h,g,A,k,V){s.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+h+`
`+k+" "+V})}function Gn(s,u,h,g){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Dg(s,h)+(g?" "+g:"")})}function Cg(s,u){s.info(function(){return"TIMEOUT: "+u})}jr.prototype.info=function(){};function Dg(s,u){if(!s.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var g=h[s];if(!(2>g.length)){var A=g[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return Ps(h)}catch{return u}}var Oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ns;function Lo(){}S(Lo,Cs),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Ns=new Lo;function Kt(s,u,h,g){this.j=s,this.i=u,this.l=h,this.R=g||1,this.U=new Lr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xl}function Xl(){this.i=null,this.g="",this.h=!1}var Yl={},Ms={};function Os(s,u,h){s.L=1,s.v=jo(Rt(u)),s.m=h,s.P=!0,Zl(s,null)}function Zl(s,u){s.F=Date.now(),xo(s),s.A=Rt(s.v);var h=s.A,g=s.R;Array.isArray(g)||(g=[String(g)]),fu(h.i,"t",g),s.C=0,h=s.j.J,s.h=new Xl,s.g=Du(s.j,h?u:null,!s.m),0<s.O&&(s.M=new bg(v(s.Y,s,s.g),s.O)),u=s.U,h=s.g,g=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Bl[0]=A.toString()),A=Bl);for(var k=0;k<A.length;k++){var V=Mr(h,A[k],g||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Fr(),Rg(s.i,s.u,s.A,s.l,s.R,s.m)}Kt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Pt(s)==3?u.j():this.Y(s)},Kt.prototype.Y=function(s){try{if(s==this.g)e:{const Ne=Pt(this.g);var u=this.g.Ba();const Jn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||yu(this.g)))){this.J||Ne!=4||u==7||(u==8||0>=Jn?Fr(3):Fr(2)),Ls(this);var h=this.g.Z();this.X=h;t:if(eu(this)){var g=yu(this.g);s="";var A=g.length,k=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),Ur(this);var V="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,s+=this.h.i.decode(g[u],{stream:!(k&&u==A-1)});g.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Pg(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,be=this.g;if((re=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(re)){var J=re;break t}}J=null}if(h=J)Gn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xs(this,h);else{this.o=!1,this.s=3,Ue(12),In(this),Ur(this);break e}}if(this.P){h=!0;let lt;for(;!this.J&&this.C<V.length;)if(lt=Vg(this,V),lt==Ms){Ne==4&&(this.s=4,Ue(14),h=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==Yl){this.s=4,Ue(15),Gn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Gn(this.i,this.l,lt,null),xs(this,lt);if(eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||V.length!=0||this.h.h||(this.s=1,Ue(16),h=!1),this.o=this.o&&h,!h)Gn(this.i,this.l,V,"[Invalid Chunked Response]"),In(this),Ur(this);else if(0<V.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),zs(Ve),Ve.M=!0,Ue(11))}}else Gn(this.i,this.l,V,null),xs(this,V);Ne==4&&In(this),this.o&&!this.J&&(Ne==4?Su(this.j,this):(this.o=!1,xo(this)))}else Qg(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),In(this),Ur(this)}}}catch{}finally{}};function eu(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Vg(s,u){var h=s.C,g=u.indexOf(`
`,h);return g==-1?Ms:(h=Number(u.substring(h,g)),isNaN(h)?Yl:(g+=1,g+h>u.length?Ms:(u=u.slice(g,g+h),s.C=g+h,u)))}Kt.prototype.cancel=function(){this.J=!0,In(this)};function xo(s){s.S=Date.now()+s.I,tu(s,s.I)}function tu(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Wr(v(s.ba,s),u)}function Ls(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Kt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Cg(this.i,this.A),this.L!=2&&(Fr(),Ue(17)),In(this),this.s=2,Ur(this)):tu(this,this.S-s)};function Ur(s){s.j.G==0||s.J||Su(s.j,s)}function In(s){Ls(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,zl(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function xs(s,u){try{var h=s.j;if(h.G!=0&&(h.g==s||Fs(h.h,s))){if(!s.K&&Fs(h.h,s)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)$o(h),Ho(h);else break e;Bs(h),Ue(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wr(v(h.Za,h),6e3));if(1>=ou(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else bn(h,11)}else if((s.K||h.g==s)&&$o(h),!L(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let J=A[u];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Ve=J[3];Ve!=null&&(h.la=Ve,h.j.info("VER="+h.la));const Ne=J[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));const Jn=J[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(g=1.5*Jn,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const lt=s.g;if(lt){const Ko=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var k=g.h;k.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ws(k,k.h),k.h=null))}if(g.D){const Hs=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hs&&(g.ya=Hs,ae(g.I,g.D,Hs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var V=s;if(g.qa=Cu(g,g.J?g.ia:null,g.W),V.K){iu(g.h,V);var re=V,be=g.L;be&&(re.I=be),re.B&&(Ls(re),xo(re)),g.g=V}else bu(g);0<h.i.length&&qo(h)}else J[0]!="stop"&&J[0]!="close"||bn(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?bn(h,7):Us(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Fr(4)}catch{}}var Ng=class{constructor(s,u){this.g=s,this.map=u}};function nu(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ru(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ou(s){return s.h?1:s.g?s.g.size:0}function Fs(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Ws(s,u){s.g?s.g.add(u):s.h=u}function iu(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}nu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function su(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const h of s.g.values())u=u.concat(h.D);return u}return D(s.i)}function Mg(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var u=[],h=s.length,g=0;g<h;g++)u.push(s[g]);return u}u=[],h=0;for(g in s)u[h++]=s[g];return u}function Og(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var u=[];s=s.length;for(var h=0;h<s;h++)u.push(h);return u}u=[],h=0;for(const g in s)u[h++]=g;return u}}}function au(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var h=Og(s),g=Mg(s),A=g.length,k=0;k<A;k++)u.call(void 0,g[k],h&&h[k],s)}var lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lg(s,u){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var g=s[h].indexOf("="),A=null;if(0<=g){var k=s[h].substring(0,g);A=s[h].substring(g+1)}else k=s[h];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function An(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof An){this.h=s.h,Fo(this,s.j),this.o=s.o,this.g=s.g,Wo(this,s.s),this.l=s.l;var u=s.i,h=new Hr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),uu(this,h),this.m=s.m}else s&&(u=String(s).match(lu))?(this.h=!1,Fo(this,u[1]||"",!0),this.o=Br(u[2]||""),this.g=Br(u[3]||"",!0),Wo(this,u[4]),this.l=Br(u[5]||"",!0),uu(this,u[6]||"",!0),this.m=Br(u[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}An.prototype.toString=function(){var s=[],u=this.j;u&&s.push(zr(u,cu,!0),":");var h=this.g;return(h||u=="file")&&(s.push("//"),(u=this.o)&&s.push(zr(u,cu,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(zr(h,h.charAt(0)=="/"?Wg:Fg,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",zr(h,Ug)),s.join("")};function Rt(s){return new An(s)}function Fo(s,u,h){s.j=h?Br(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Wo(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function uu(s,u,h){u instanceof Hr?(s.i=u,Bg(s.i,s.h)):(h||(u=zr(u,jg)),s.i=new Hr(u,s.h))}function ae(s,u,h){s.i.set(u,h)}function jo(s){return ae(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Br(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function zr(s,u,h){return typeof s=="string"?(s=encodeURI(s).replace(u,xg),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function xg(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var cu=/[#\/\?@]/g,Fg=/[#\?:]/g,Wg=/[#\?]/g,jg=/[#\?@]/g,Ug=/#/g;function Hr(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Lg(s.i,function(u,h){s.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Hr.prototype,n.add=function(s,u){Qt(this),this.i=null,s=Kn(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(u),this.h+=1,this};function hu(s,u){Qt(s),u=Kn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function du(s,u){return Qt(s),u=Kn(s,u),s.g.has(u)}n.forEach=function(s,u){Qt(this),this.g.forEach(function(h,g){h.forEach(function(A){s.call(u,A,g,this)},this)},this)},n.na=function(){Qt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const A=s[g];for(let k=0;k<A.length;k++)h.push(u[g])}return h},n.V=function(s){Qt(this);let u=[];if(typeof s=="string")du(this,s)&&(u=u.concat(this.g.get(Kn(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)u=u.concat(s[h])}return u},n.set=function(s,u){return Qt(this),this.i=null,s=Kn(this,s),du(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function fu(s,u,h){hu(s,u),0<h.length&&(s.i=null,s.g.set(Kn(s,u),D(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const k=encodeURIComponent(String(g)),V=this.V(g);for(g=0;g<V.length;g++){var A=k;V[g]!==""&&(A+="="+encodeURIComponent(String(V[g]))),s.push(A)}}return this.i=s.join("&")};function Kn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Bg(s,u){u&&!s.j&&(Qt(s),s.i=null,s.g.forEach(function(h,g){var A=g.toLowerCase();g!=A&&(hu(this,g),fu(this,A,h))},s)),s.j=u}function zg(s,u){const h=new jr;if(l.Image){const g=new Image;g.onload=I(Jt,h,"TestLoadImage: loaded",!0,u,g),g.onerror=I(Jt,h,"TestLoadImage: error",!1,u,g),g.onabort=I(Jt,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(Jt,h,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=s}else u(!1)}function Hg(s,u){const h=new jr,g=new AbortController,A=setTimeout(()=>{g.abort(),Jt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:g.signal}).then(k=>{clearTimeout(A),k.ok?Jt(h,"TestPingServer: ok",!0,u):Jt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Jt(h,"TestPingServer: error",!1,u)})}function Jt(s,u,h,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(h)}catch{}}function qg(){this.g=new Sg}function $g(s,u,h){const g=h||"";try{au(s,function(A,k){let V=A;d(A)&&(V=Ps(A)),u.push(g+k+"="+encodeURIComponent(V))})}catch(A){throw u.push(g+"type="+encodeURIComponent("_badmap")),A}}function Uo(s){this.l=s.Ub||null,this.j=s.eb||!1}S(Uo,Cs),Uo.prototype.g=function(){return new Bo(this.l,this.j)},Uo.prototype.i=function(s){return function(){return s}}({});function Bo(s,u){De.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Bo,De),n=Bo.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,$r(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gu(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function gu(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?qr(this):$r(this),this.readyState==3&&gu(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,qr(this))},n.Qa=function(s){this.g&&(this.response=s,qr(this))},n.ga=function(){this.g&&qr(this)};function qr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,$r(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=u.next();return s.join(`\r
`)};function $r(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function pu(s){let u="";return X(s,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function js(s,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=pu(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):ae(s,u,h))}function he(s){De.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(he,De);var Gg=/^https?$/i,Kg=["POST","PUT"];n=he.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ns.g(),this.v=this.o?Hl(this.o):Hl(Ns),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(k){mu(this,k);return}if(s=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)h.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kg,u,void 0))||g||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,V]of h)this.g.setRequestHeader(k,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wu(this),this.u=!0,this.g.send(s),this.u=!1}catch(k){mu(this,k)}};function mu(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,_u(s),zo(s)}function _u(s){s.A||(s.A=!0,je(s,"complete"),je(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,je(this,"complete"),je(this,"abort"),zo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vu(this):this.bb())},n.bb=function(){vu(this)};function vu(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Pt(s)!=4||s.Z()!=2)){if(s.u&&Pt(s)==4)jl(s.Ea,0,s);else if(je(s,"readystatechange"),Pt(s)==4){s.h=!1;try{const V=s.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=V===0){var A=String(s.D).match(lu)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),g=!Gg.test(A?A.toLowerCase():"")}h=g}if(h)je(s,"complete"),je(s,"success");else{s.m=6;try{var k=2<Pt(s)?s.g.statusText:""}catch{k=""}s.l=k+" ["+s.Z()+"]",_u(s)}}finally{zo(s)}}}}function zo(s,u){if(s.g){wu(s);const h=s.g,g=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||je(s,"ready");try{h.onreadystatechange=g}catch{}}}function wu(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Pt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),kg(u)}};function yu(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Qg(s){const u={};s=(s.g&&2<=Pt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<s.length;g++){if(L(s[g]))continue;var h=T(s[g]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=u[A]||[];u[A]=k,k.push(h)}E(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gr(s,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||u}function Eu(s){this.Aa=0,this.i=[],this.j=new jr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gr("baseRetryDelayMs",5e3,s),this.cb=Gr("retryDelaySeedMs",1e4,s),this.Wa=Gr("forwardChannelMaxRetries",2,s),this.wa=Gr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new nu(s&&s.concurrentRequestLimit),this.Da=new qg,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Eu.prototype,n.la=8,n.G=1,n.connect=function(s,u,h,g){Ue(0),this.W=s,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Cu(this,null,this.W),qo(this)};function Us(s){if(Tu(s),s.G==3){var u=s.U++,h=Rt(s.I);if(ae(h,"SID",s.K),ae(h,"RID",u),ae(h,"TYPE","terminate"),Kr(s,h),u=new Kt(s,s.j,u),u.L=2,u.v=jo(Rt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Du(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xo(u)}Pu(s)}function Ho(s){s.g&&(zs(s),s.g.cancel(),s.g=null)}function Tu(s){Ho(s),s.u&&(l.clearTimeout(s.u),s.u=null),$o(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function qo(s){if(!ru(s.h)&&!s.s){s.s=!0;var u=s.Ga;se||Pe(),we||(se(),we=!0),$e.add(u,s),s.B=0}}function Jg(s,u){return ou(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Wr(v(s.Ga,s,u),Ru(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Kt(this,this.j,s);let k=this.o;if(this.S&&(k?(k=m(k),y(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Au(this,A,u),h=Rt(this.I),ae(h,"RID",s),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),Kr(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(pu(k)))+"&"+u:this.m&&js(h,this.m,k)),Ws(this.h,A),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",u),ae(h,"SID","null"),A.T=!0,Os(A,h,null)):Os(A,h,u),this.G=2}}else this.G==3&&(s?Iu(this,s):this.i.length==0||ru(this.h)||Iu(this))};function Iu(s,u){var h;u?h=u.l:h=s.U++;const g=Rt(s.I);ae(g,"SID",s.K),ae(g,"RID",h),ae(g,"AID",s.T),Kr(s,g),s.m&&s.o&&js(g,s.m,s.o),h=new Kt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Au(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ws(s.h,h),Os(h,g,u)}function Kr(s,u){s.H&&X(s.H,function(h,g){ae(u,g,h)}),s.l&&au({},function(h,g){ae(u,g,h)})}function Au(s,u,h){h=Math.min(s.i.length,h);var g=s.l?v(s.l.Na,s.l,s):null;e:{var A=s.i;let k=-1;for(;;){const V=["count="+h];k==-1?0<h?(k=A[0].g,V.push("ofs="+k)):k=0:V.push("ofs="+k);let re=!0;for(let be=0;be<h;be++){let J=A[be].g;const Ve=A[be].map;if(J-=k,0>J)k=Math.max(0,A[be].g-100),re=!1;else try{$g(Ve,V,"req"+J+"_")}catch{g&&g(Ve)}}if(re){g=V.join("&");break e}}}return s=s.i.splice(0,h),u.D=s,g}function bu(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;se||Pe(),we||(se(),we=!0),$e.add(u,s),s.v=0}}function Bs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Wr(v(s.Fa,s),Ru(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Wr(v(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),Ho(this),ku(this))};function zs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function ku(s){s.g=new Kt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Rt(s.qa);ae(u,"RID","rpc"),ae(u,"SID",s.K),ae(u,"AID",s.T),ae(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&ae(u,"TO",s.ja),ae(u,"TYPE","xmlhttp"),Kr(s,u),s.m&&s.o&&js(u,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=jo(Rt(u)),h.m=null,h.P=!0,Zl(h,s)}n.Za=function(){this.C!=null&&(this.C=null,Ho(this),Bs(this),Ue(19))};function $o(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Su(s,u){var h=null;if(s.g==u){$o(s),zs(s),s.g=null;var g=2}else if(Fs(s.h,u))h=u.D,iu(s.h,u),g=1;else return;if(s.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=s.B;g=Mo(),je(g,new Ql(g,h)),qo(s)}else bu(s);else if(A=u.s,A==3||A==0&&0<u.X||!(g==1&&Jg(s,u)||g==2&&Bs(s)))switch(h&&0<h.length&&(u=s.h,u.i=u.i.concat(h)),A){case 1:bn(s,5);break;case 4:bn(s,10);break;case 3:bn(s,6);break;default:bn(s,2)}}}function Ru(s,u){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*u}function bn(s,u){if(s.j.info("Error code "+u),u==2){var h=v(s.fb,s),g=s.Xa;const A=!g;g=new An(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(g,"https"),jo(g),A?zg(g.toString(),h):Hg(g.toString(),h)}else Ue(2);s.G=0,s.l&&s.l.sa(u),Pu(s),Tu(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Pu(s){if(s.G=0,s.ka=[],s.l){const u=su(s.h);(u.length!=0||s.i.length!=0)&&(P(s.ka,u),P(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Cu(s,u,h){var g=h instanceof An?Rt(h):new An(h);if(g.g!="")u&&(g.g=u+"."+g.g),Wo(g,g.s);else{var A=l.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new An(null);g&&Fo(k,g),u&&(k.g=u),A&&Wo(k,A),h&&(k.l=h),g=k}return h=s.D,u=s.ya,h&&u&&ae(g,h,u),ae(g,"VER",s.la),Kr(s,g),g}function Du(s,u,h){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new he(new Uo({eb:h})):new he(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}n=Vu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Go(){}Go.prototype.g=function(s,u){return new et(s,u)};function et(s,u){De.call(this),this.g=new Eu(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!L(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Qn(this)}S(et,De),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Us(this.g)},et.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Ps(s),s=h);u.i.push(new Ng(u.Ya++,s)),u.G==3&&qo(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,et.aa.N.call(this)};function Nu(s){Ds.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(const h in u){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}S(Nu,Ds);function Mu(){Vs.call(this),this.status=1}S(Mu,Vs);function Qn(s){this.g=s}S(Qn,Vu),Qn.prototype.ua=function(){je(this.g,"a")},Qn.prototype.ta=function(s){je(this.g,new Nu(s))},Qn.prototype.sa=function(s){je(this.g,new Mu)},Qn.prototype.ra=function(){je(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Qd=function(){return new Go},Kd=function(){return Mo()},Gd=Tn,Ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oo.NO_ERROR=0,Oo.TIMEOUT=8,Oo.HTTP_ERROR=6,li=Oo,Jl.COMPLETE="complete",$d=Jl,ql.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",De.prototype.listen=De.prototype.K,Jr=ql,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,qd=he}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const Ac="@firebase/firestore",bc="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new $a("@firebase/firestore");function er(){return Ln.logLevel}function M(n,...e){if(Ln.logLevel<=q.DEBUG){const t=e.map(sl);Ln.debug(`Firestore (${Pr}): ${n}`,...t)}}function Ut(n,...e){if(Ln.logLevel<=q.ERROR){const t=e.map(sl);Ln.error(`Firestore (${Pr}): ${n}`,...t)}}function dr(n,...e){if(Ln.logLevel<=q.WARN){const t=e.map(sl);Ln.warn(`Firestore (${Pr}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+n;throw Ut(e),new Error(e)}function te(n,e){n||W()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends $t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oy{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const o=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await o(this.currentUser)})},l=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Oe(e)}}class iy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new iy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ay{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ct(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){te(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const o=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>o(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?o(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new kc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new kc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=ly(40);for(let i=0;i<o.length;++i)r.length<20&&o[i]<t&&(r+=e.charAt(o[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Ia(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return H(r,o);{const i=Xd(),a=uy(i.encode(Sc(n,t)),i.encode(Sc(e,t)));return a!==0?a:H(r,o)}}t+=r>65535?2:1}return H(n.length,e.length)}function Sc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function uy(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function fr(n,e,t){return n.length===e.length&&n.every((r,o)=>t(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=-62135596800,Pc=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pc);return new Te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rc)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pc}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Rc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new Te(0,0))}static max(){return new U(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="__name__";class pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const i=pt.compareSegments(e.get(o),t.get(o));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=pt.isNumericId(e),o=pt.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?pt.extractNumericId(e).compare(pt.extractNumericId(t)):Ia(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return un.fromString(e.substring(4,e.length-2))}}class de extends pt{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new de(t)}static emptyPath(){return new de([])}}const cy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends pt{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return cy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cc}static keyField(){return new Se([Cc])}static fromServerFormat(e){const t=[];let r="",o=0;const i=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;o<e.length;){const l=e[o];if(l==="\\"){if(o+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[o+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(r+=l,o++):(i(),o++)}if(i(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(de.fromString(e))}static fromName(e){return new F(de.fromString(e).popFirst(5))}static empty(){return new F(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new de(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=-1;function hy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=U.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new dn(o,F.empty(),e)}function dy(n){return new dn(n.readTime,n.key,ho)}class dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dn(U.min(),F.empty(),ho)}static max(){return new dn(U.max(),F.empty(),ho)}}function fy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class py{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==gy)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,o)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,o)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let o=0,i=0,a=!1;e.forEach(l=>{++o,l.next(()=>{++i,a&&i===o&&t()},c=>r(c))}),a=!0,i===o&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(o=>o?R.resolve(o):r());return t}static forEach(e,t){const r=[];return e.forEach((o,i)=>{r.push(t.call(this,o,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,o)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>o(f))}})}static doWhile(e,t){return new R((r,o)=>{const i=()=>{e()===!0?t().next(()=>{i()},o):r()};i()})}}function my(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}is.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function ss(n){return n==null}function Vi(n){return n===0&&1/n==-1/0}function _y(n){return typeof n=="number"&&Number.isInteger(n)&&!Vi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="";function vy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dc(e)),e=wy(n.get(t),e);return Dc(e)}function wy(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const i=n.charAt(o);switch(i){case"\0":t+="";break;case Zd:t+="";break;default:t+=i}}return t}function Dc(n){return n+Zd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&o&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,r,o,i){this.key=e,this.value=t,this.color=r??ke.RED,this.left=o??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,i){return new ke(e??this.key,t??this.value,r??this.color,o??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const i=r(e,o.key);return o=i<0?o.copy(null,null,null,o.left.insert(e,t,r),null):i===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return ke.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,o,i){return this}insert(e,t,r){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,i=r.getNext().key;if(this.comparator(o,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new ht([])}unionWith(e){let t=new Ie(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tf("Invalid base64 string: "+i):i}}(e);return new Re(t)}static fromUint8Array(e){const t=function(o){let i="";for(let a=0;a<o.length;++a)i+=String.fromCharCode(o[a]);return i}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const yy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(te(!!n),typeof n=="string"){let e=0;const t=yy.exec(n);if(te(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="server_timestamp",rf="__type__",of="__previous_value__",sf="__local_write_time__";function ll(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rf])===null||t===void 0?void 0:t.stringValue)===nf}function as(n){const e=n.mapValue.fields[of];return ll(e)?as(e):e}function fo(n){const e=fn(n.mapValue.fields[sf].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t,r,o,i,a,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}const Ni="(default)";class go{constructor(e,t){this.projectId=e,this.database=t||Ni}static empty(){return new go("","")}get isDefaultDatabase(){return this.database===Ni}isEqual(e){return e instanceof go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="__type__",Ty="__max__",Zo={mapValue:{}},lf="__vector__",Mi="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ll(n)?4:Ay(n)?9007199254740991:Iy(n)?10:11:W()}function It(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fo(n).isEqual(fo(e));case 3:return function(o,i){if(typeof o.timestampValue=="string"&&typeof i.timestampValue=="string"&&o.timestampValue.length===i.timestampValue.length)return o.timestampValue===i.timestampValue;const a=fn(o.timestampValue),l=fn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,i){return gn(o.bytesValue).isEqual(gn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,i){return fe(o.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(n,e);case 2:return function(o,i){if("integerValue"in o&&"integerValue"in i)return fe(o.integerValue)===fe(i.integerValue);if("doubleValue"in o&&"doubleValue"in i){const a=fe(o.doubleValue),l=fe(i.doubleValue);return a===l?Vi(a)===Vi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return function(o,i){const a=o.mapValue.fields||{},l=i.mapValue.fields||{};if(Vc(a)!==Vc(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!It(a[c],l[c])))return!1;return!0}(n,e);default:return W()}}function po(n,e){return(n.values||[]).find(t=>It(t,e))!==void 0}function gr(n,e){if(n===e)return 0;const t=pn(n),r=pn(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=fe(i.integerValue||i.doubleValue),c=fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Mc(n.timestampValue,e.timestampValue);case 4:return Mc(fo(n),fo(e));case 5:return Ia(n.stringValue,e.stringValue);case 6:return function(i,a){const l=gn(i),c=gn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=H(l[d],c[d]);if(f!==0)return f}return H(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=H(fe(i.latitude),fe(a.latitude));return l!==0?l:H(fe(i.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Oc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,d,f;const p=i.fields||{},v=a.fields||{},I=(l=p[Mi])===null||l===void 0?void 0:l.arrayValue,S=(c=v[Mi])===null||c===void 0?void 0:c.arrayValue,D=H(((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Oc(I,S)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Zo.mapValue&&a===Zo.mapValue)return 0;if(i===Zo.mapValue)return 1;if(a===Zo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const v=Ia(c[p],f[p]);if(v!==0)return v;const I=gr(l[c[p]],d[f[p]]);if(I!==0)return I}return H(c.length,f.length)}(n.mapValue,e.mapValue);default:throw W()}}function Mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=fn(n),r=fn(e),o=H(t.seconds,r.seconds);return o!==0?o:H(t.nanos,r.nanos)}function Oc(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const i=gr(t[o],r[o]);if(i)return i}return H(t.length,r.length)}function pr(n){return Aa(n)}function Aa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",o=!0;for(const i of t.values||[])o?o=!1:r+=",",r+=Aa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let o="{",i=!0;for(const a of r)i?i=!1:o+=",",o+=`${a}:${Aa(t.fields[a])}`;return o+"}"}(n.mapValue):W()}function ui(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=as(n);return e?16+ui(e):16;case 5:return 2*n.stringValue.length;case 6:return gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,i)=>o+ui(i),0)}(n.arrayValue);case 10:case 11:return function(r){let o=0;return vn(r.fields,(i,a)=>{o+=i.length+ui(a)}),o}(n.mapValue);default:throw W()}}function ba(n){return!!n&&"integerValue"in n}function ul(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function Iy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[af])===null||t===void 0?void 0:t.stringValue)===lf}function no(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=no(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=no(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ay(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ty}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(t)}setAll(e){let t=Se.emptyPath(),r={},o=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,o),r={},o=[],t=l.popLast()}a?r[l.lastSegment()]=no(a):o.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,o)}delete(e){const t=this.field(e.popLast());ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];ci(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){vn(t,(o,i)=>e[o]=i);for(const o of r)delete e[o]}clone(){return new nt(no(this.value))}}function uf(n){const e=[];return vn(n.fields,(t,r)=>{const o=new Se([t]);if(ci(r)){const i=uf(r.mapValue).fields;if(i.length===0)e.push(o);else for(const a of i)e.push(o.child(a))}else e.push(o)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,r,o,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,U.min(),U.min(),U.min(),nt.empty(),0)}static newFoundDocument(e,t,r,o){return new Le(e,1,t,U.min(),r,o,0)}static newNoDocument(e,t){return new Le(e,2,t,U.min(),U.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,U.min(),U.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const i=e[o],a=n.position[o];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=gr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t="asc"){this.field=e,this.dir=t}}function by(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{}class Ee extends cf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Sy(e,t,r):t==="array-contains"?new Cy(e,r):t==="in"?new Dy(e,r):t==="not-in"?new Vy(e,r):t==="array-contains-any"?new Ny(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ry(e,r):new Py(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gr(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends cf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new At(e,t)}matches(e){return hf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hf(n){return n.op==="and"}function df(n){return ky(n)&&hf(n)}function ky(n){for(const e of n.filters)if(e instanceof At)return!1;return!0}function ka(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(df(n))return n.filters.map(e=>ka(e)).join(",");{const e=n.filters.map(t=>ka(t)).join(",");return`${n.op}(${e})`}}function ff(n,e){return n instanceof Ee?function(r,o){return o instanceof Ee&&r.op===o.op&&r.field.isEqual(o.field)&&It(r.value,o.value)}(n,e):n instanceof At?function(r,o){return o instanceof At&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((i,a,l)=>i&&ff(a,o.filters[l]),!0):!1}(n,e):void W()}function gf(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(gf).join(" ,")+"}"}(n):"Filter"}class Sy extends Ee{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ry extends Ee{constructor(e,t){super(e,"in",t),this.keys=pf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Py extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=pf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Cy extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ul(t)&&po(t.arrayValue,this.value)}}class Dy extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&po(this.value.arrayValue,t)}}class Vy extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!po(this.value.arrayValue,t)}}class Ny extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ul(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t=null,r=[],o=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function jc(n,e=null,t=[],r=[],o=null,i=null,a=null){return new My(n,e,t,r,o,i,a)}function cl(n){const e=B(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ka(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.le=t}return e.le}function hl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!by(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ff(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wc(n.startAt,e.startAt)&&Wc(n.endAt,e.endAt)}function Sa(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t=null,r=[],o=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Oy(n,e,t,r,o,i,a,l){return new ls(n,e,t,r,o,i,a,l)}function dl(n){return new ls(n)}function Uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ly(n){return n.collectionGroup!==null}function ro(n){const e=B(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(Se.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Li(i,r))}),t.has(Se.keyField().canonicalString())||e.he.push(new Li(Se.keyField(),r))}return e.he}function wt(n){const e=B(n);return e.Pe||(e.Pe=xy(e,ro(n))),e.Pe}function xy(n,e){if(n.limitType==="F")return jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const i=o.dir==="desc"?"asc":"desc";return new Li(o.field,i)});const t=n.endAt?new Oi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Oi(n.startAt.position,n.startAt.inclusive):null;return jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ra(n,e,t){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function us(n,e){return hl(wt(n),wt(e))&&n.limitType===e.limitType}function mf(n){return`${cl(wt(n))}|lt:${n.limitType}`}function tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(o=>gf(o)).join(", ")}]`),ss(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(o=>pr(o)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(o=>pr(o)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function cs(n,e){return e.isFoundDocument()&&function(r,o){const i=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,o){for(const i of ro(r))if(!i.field.isKeyField()&&o.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,o){for(const i of r.filters)if(!i.matches(o))return!1;return!0}(n,e)&&function(r,o){return!(r.startAt&&!function(a,l,c){const d=Fc(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,ro(r),o)||r.endAt&&!function(a,l,c){const d=Fc(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,ro(r),o))}(n,e)}function Fy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _f(n){return(e,t)=>{let r=!1;for(const o of ro(n)){const i=Wy(o,e,t);if(i!==0)return i;r=r||o.field.isKeyField()}return 0}}function Wy(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),d=l.data.field(i);return c!==null&&d!==null?gr(c,d):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,i]of r)if(this.equalsFn(o,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<o.length;i++)if(this.equalsFn(o[i][0],e))return void(o[i]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(t,r)=>{for(const[o,i]of r)e(o,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new ce(F.comparator);function Bt(){return jy}const vf=new ce(F.comparator);function Xr(...n){let e=vf;for(const t of n)e=e.insert(t.key,t);return e}function wf(n){let e=vf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pn(){return oo()}function yf(){return oo()}function oo(){return new Un(n=>n.toString(),(n,e)=>n.isEqual(e))}const Uy=new ce(F.comparator),By=new Ie(F.comparator);function $(...n){let e=By;for(const t of n)e=e.add(t);return e}const zy=new Ie(H);function Hy(){return zy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function Ef(n){return{integerValue:""+n}}function qy(n,e){return _y(e)?Ef(e):fl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this._=void 0}}function $y(n,e,t){return n instanceof xi?function(o,i){const a={fields:{[rf]:{stringValue:nf},[sf]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return i&&ll(i)&&(i=as(i)),i&&(a.fields[of]=i),{mapValue:a}}(t,e):n instanceof mr?If(n,e):n instanceof _r?Af(n,e):function(o,i){const a=Tf(o,i),l=Bc(a)+Bc(o.Ie);return ba(a)&&ba(o.Ie)?Ef(l):fl(o.serializer,l)}(n,e)}function Gy(n,e,t){return n instanceof mr?If(n,e):n instanceof _r?Af(n,e):t}function Tf(n,e){return n instanceof Fi?function(r){return ba(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xi extends hs{}class mr extends hs{constructor(e){super(),this.elements=e}}function If(n,e){const t=bf(e);for(const r of n.elements)t.some(o=>It(o,r))||t.push(r);return{arrayValue:{values:t}}}class _r extends hs{constructor(e){super(),this.elements=e}}function Af(n,e){let t=bf(e);for(const r of n.elements)t=t.filter(o=>!It(o,r));return{arrayValue:{values:t}}}class Fi extends hs{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Bc(n){return fe(n.integerValue||n.doubleValue)}function bf(n){return ul(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.field=e,this.transform=t}}function Ky(n,e){return n.field.isEqual(e.field)&&function(r,o){return r instanceof mr&&o instanceof mr||r instanceof _r&&o instanceof _r?fr(r.elements,o.elements,It):r instanceof Fi&&o instanceof Fi?It(r.Ie,o.Ie):r instanceof xi&&o instanceof xi}(n.transform,e.transform)}class Qy{constructor(e,t){this.version=e,this.transformResults=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ds{}function Sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pf(n.key,xt.none()):new fs(n.key,n.data,xt.none());{const t=n.data,r=nt.empty();let o=new Ie(Se.comparator);for(let i of e.fields)if(!o.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),o=o.add(i)}return new Bn(n.key,r,new ht(o.toArray()),xt.none())}}function Jy(n,e,t){n instanceof fs?function(o,i,a){const l=o.value.clone(),c=Hc(o.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Bn?function(o,i,a){if(!hi(o.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Hc(o.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Rf(o)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(o,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function io(n,e,t,r){return n instanceof fs?function(i,a,l,c){if(!hi(i.precondition,a))return l;const d=i.value.clone(),f=qc(i.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bn?function(i,a,l,c){if(!hi(i.precondition,a))return l;const d=qc(i.fieldTransforms,c,a),f=a.data;return f.setAll(Rf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return hi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Xy(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),i=Tf(r.transform,o||null);i!=null&&(t===null&&(t=nt.empty()),t.set(r.field,i))}return t||null}function zc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&fr(r,o,(i,a)=>Ky(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fs extends ds{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Bn extends ds{constructor(e,t,r,o,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hc(n,e,t){const r=new Map;te(n.length===t.length);for(let o=0;o<t.length;o++){const i=n[o],a=i.transform,l=e.data.field(i.field);r.set(i.field,Gy(a,l,t[o]))}return r}function qc(n,e,t){const r=new Map;for(const o of n){const i=o.transform,a=t.data.field(o.field);r.set(o.field,$y(i,a,e))}return r}class Pf extends ds{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yy extends ds{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const i=this.mutations[o];i.key.isEqual(e.key)&&Jy(i,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=io(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=io(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yf();return this.mutations.forEach(o=>{const i=e.get(o.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(o.key)?null:l;const c=Sf(a,l);c!==null&&r.set(o.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(t,r)=>zc(t,r))&&fr(this.baseMutations,e.baseMutations,(t,r)=>zc(t,r))}}class gl{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){te(e.mutations.length===r.length);let o=function(){return Uy}();const i=e.mutations;for(let a=0;a<i.length;a++)o=o.insert(i[a].key,r[a].version);return new gl(e,t,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,K;function nE(n){switch(n){case C.OK:return W();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return W()}}function Cf(n){if(n===void 0)return Ut("GRPC error has no .code"),C.UNKNOWN;switch(n){case pe.OK:return C.OK;case pe.CANCELLED:return C.CANCELLED;case pe.UNKNOWN:return C.UNKNOWN;case pe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case pe.INTERNAL:return C.INTERNAL;case pe.UNAVAILABLE:return C.UNAVAILABLE;case pe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case pe.NOT_FOUND:return C.NOT_FOUND;case pe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case pe.ABORTED:return C.ABORTED;case pe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case pe.DATA_LOSS:return C.DATA_LOSS;default:return W()}}(K=pe||(pe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new un([4294967295,4294967295],0);function $c(n){const e=Xd().encode(n),t=new Hd;return t.update(e),new Uint8Array(t.digest())}function Gc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new un([t,r],0),new un([o,i],0)]}class pl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Yr(`Invalid padding: ${t}`);if(r<0)throw new Yr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Yr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=un.fromNumber(this.Ee)}Ae(e,t,r){let o=e.add(t.multiply(un.fromNumber(r)));return o.compare(rE)===1&&(o=new un([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=$c(e),[r,o]=Gc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,o,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new pl(i,o,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=$c(e),[r,o]=Gc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,o,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,r,o,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new gs(U.min(),o,new ce(H),Bt(),$())}}class Ro{constructor(e,t,r,o,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ro(r,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,r,o){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=o}}class Df{constructor(e,t){this.targetId=e,this.ge=t}}class Vf{constructor(e,t,r=Re.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Kc{constructor(){this.pe=0,this.ye=Qc(),this.we=Re.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=$(),t=$(),r=$();return this.ye.forEach((o,i)=>{switch(i){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:W()}}),new Ro(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Qc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,te(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class oE{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Bt(),this.$e=ei(),this.Ue=ei(),this.Ke=new ce(H)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,r=e.ge.count,o=this.Xe(t);if(o){const i=o.target;if(Sa(i))if(r===0){const a=new F(i.path);this.ze(t,a,Le.newNoDocument(a,U.min()))}else te(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:i=0}=t;let a,l;try{a=gn(r).toUint8Array()}catch(c){if(c instanceof tf)return dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new pl(a,o,i)}catch(c){return dr(c instanceof Yr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let o=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Sa(l.target)){const c=new F(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Le.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=$();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const d=this.Xe(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const o=new gs(e,t,this.Ke,this.Qe,r);return this.Qe=Bt(),this.$e=ei(),this.Ue=ei(),this.Ke=new ce(H),o}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Kc,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Ie(H),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ie(H),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Kc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ei(){return new ce(F.comparator)}function Qc(){return new ce(F.comparator)}const iE={asc:"ASCENDING",desc:"DESCENDING"},sE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aE={and:"AND",or:"OR"};class lE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pa(n,e){return n.useProto3Json||ss(e)?e:{value:e}}function Wi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uE(n,e){return Wi(n,e.toTimestamp())}function yt(n){return te(!!n),U.fromTimestamp(function(t){const r=fn(t);return new Te(r.seconds,r.nanos)}(n))}function ml(n,e){return Ca(n,e).canonicalString()}function Ca(n,e){const t=function(o){return new de(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Mf(n){const e=de.fromString(n);return te(Wf(e)),e}function Da(n,e){return ml(n.databaseId,e.path)}function ea(n,e){const t=Mf(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Lf(t))}function Of(n,e){return ml(n.databaseId,e)}function cE(n){const e=Mf(n);return e.length===4?de.emptyPath():Lf(e)}function Va(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lf(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jc(n,e,t){return{name:Da(n,e),fields:t.value.mapValue.fields}}function hE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(te(f===void 0||typeof f=="string"),Re.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Re.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Cf(d.code);return new x(f,d.message||"")}(a);t=new Vf(r,o,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=ea(n,r.document.name),i=yt(r.document.updateTime),a=r.document.createTime?yt(r.document.createTime):U.min(),l=new nt({mapValue:{fields:r.document.fields}}),c=Le.newFoundDocument(o,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new di(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=ea(n,r.document),i=r.readTime?yt(r.readTime):U.min(),a=Le.newNoDocument(o,i),l=r.removedTargetIds||[];t=new di([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=ea(n,r.document),i=r.removedTargetIds||[];t=new di([],i,o,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:i}=r,a=new tE(o,i),l=r.targetId;t=new Df(l,a)}}return t}function dE(n,e){let t;if(e instanceof fs)t={update:Jc(n,e.key,e.value)};else if(e instanceof Pf)t={delete:Da(n,e.key)};else if(e instanceof Bn)t={update:Jc(n,e.key,e.data),updateMask:EE(e.fieldMask)};else{if(!(e instanceof Yy))return W();t={verify:Da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof xi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fi)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(o,i){return i.updateTime!==void 0?{updateTime:uE(o,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function fE(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(o,i){let a=o.updateTime?yt(o.updateTime):yt(i);return a.isEqual(U.min())&&(a=yt(i)),new Qy(a,o.transformResults||[])}(t,e))):[]}function gE(n,e){return{documents:[Of(n,e.path)]}}function pE(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Of(n,o);const i=function(d){if(d.length!==0)return Ff(At.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:nr(v.field),direction:vE(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Pa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:o}}function mE(n){let e=cE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){te(r===1);const f=t.from[0];f.allDescendants?o=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const v=xf(p);return v instanceof At&&df(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(v=>function(S){return new Li(rr(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,ss(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(p){const v=!!p.before,I=p.values||[];return new Oi(I,v)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const v=!p.before,I=p.values||[];return new Oi(I,v)}(t.endAt)),Oy(e,o,a,i,l,"F",c,d)}function _E(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=rr(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=rr(t.unaryFilter.field);return Ee.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(t.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(rr(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(r=>xf(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function vE(n){return iE[n]}function wE(n){return sE[n]}function yE(n){return aE[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return Se.fromServerFormat(n.fieldPath)}function Ff(n){return n instanceof Ee?function(t){if(t.op==="=="){if(xc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(t.field),op:wE(t.op),value:t.value}}}(n):n instanceof At?function(t){const r=t.getFilters().map(o=>Ff(o));return r.length===1?r[0]:{compositeFilter:{op:yE(t.op),filters:r}}}(n):W()}function EE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,o,i=U.min(),a=U.min(),l=Re.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.Tt=e}}function IE(n){const e=mE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ra(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.Tn=new bE}addToCollectionParentIndex(e,t){return this.Tn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(dn.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class bE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Ie(de.comparator),i=!o.has(r);return this.index[t]=o.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Ie(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jf=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(jf,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new vr(0)}static Kn(){return new vr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="LruGarbageCollector",kE=1048576;function Zc([n,e],[t,r]){const o=H(n,t);return o===0?H(e,r):o}class SE{constructor(e){this.Hn=e,this.buffer=new Ie(Zc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){M(Yc,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dr(t)?M(Yc,"Ignoring IndexedDB error during garbage collection: ",t):await Cr(t)}await this.er(3e5)})}}class PE{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(is.ae);const r=new SE(t);return this.tr.forEachTarget(e,o=>r.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>r.Zn(o))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Xc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,o,i,a,l,c,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),o=this.params.maximumSequenceNumbersToCollect):o=p,a=Date.now(),this.nthSequenceNumber(e,o))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),er()<=q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${o} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:i,documentsRemoved:p})))}}function CE(n,e){return new PE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.changes=new Un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(r!==null&&io(r.mutation,o,ht.empty(),Te.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,t,r=$()){const o=Pn();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,r).next(i=>{let a=Xr();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,$()))}populateOverlays(e,t,r){const o=[];return r.forEach(i=>{t.has(i)||o.push(i)}),this.documentOverlayCache.getOverlays(e,o).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,o){let i=Bt();const a=oo(),l=function(){return oo()}();return t.forEach((c,d)=>{const f=r.get(d.key);o.has(d.key)&&(f===void 0||f.mutation instanceof Bn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),io(f.mutation,d,f.mutation.getFieldMask(),Te.now())):a.set(d.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var p;return l.set(d,new VE(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=oo();let o=new ce((a,l)=>a-l),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=r.get(c)||ht.empty();f=l.applyToLocalView(d,f),r.set(c,f);const p=(o.get(l.batchId)||$()).add(c);o=o.insert(l.batchId,p)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,p=yf();f.forEach(v=>{if(!i.has(v)){const I=Sf(t.get(v),r.get(v));I!==null&&p.set(v,I),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,o){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ly(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next(i=>{const a=o-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-i.size):R.resolve(Pn());let l=ho,c=i;return a.next(d=>R.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{c=c.insert(f,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,$())).next(f=>({batchId:l,changes:wf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let o=Xr();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const i=t.collectionGroup;let a=Xr();return this.indexManager.getCollectionParents(e,i).next(l=>R.forEach(l,c=>{const d=function(p,v){return new ls(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,o).next(f=>{f.forEach((p,v)=>{a=a.insert(p,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,o){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,o))).next(a=>{i.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Le.newInvalidDocument(f)))});let l=Xr();return a.forEach((c,d)=>{const f=i.get(c);f!==void 0&&io(f.mutation,d,ht.empty(),Te.now()),cs(t,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return R.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:yt(o.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:IE(o.bundledQuery),readTime:yt(o.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.overlays=new ce(F.comparator),this.Rr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pn();return R.forEach(t,o=>this.getOverlay(e,o).next(i=>{i!==null&&r.set(o,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((o,i)=>{this.Et(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.Rr.get(r);return o!==void 0&&(o.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const o=Pn(),i=t.length+1,a=new F(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&o.set(c.getKey(),c)}return R.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let i=new ce((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Pn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=o)););return R.resolve(l)}Et(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const a=this.Rr.get(o.largestBatchId).delete(r.key);this.Rr.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new eE(t,r));let i=this.Rr.get(t);i===void 0&&(i=$(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.Vr=new Ie(Ae.mr),this.gr=new Ie(Ae.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Ae(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Ae(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new F(new de([])),r=new Ae(t,e),o=new Ae(t,e+1),i=[];return this.gr.forEachInRange([r,o],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new F(new de([])),r=new Ae(t,e),o=new Ae(t,e+1);let i=$();return this.gr.forEachInRange([r,o],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ae(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return F.comparator(e.key,t.key)||H(e.Cr,t.Cr)}static pr(e,t){return H(e.Cr,t.Cr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ie(Ae.mr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zy(i,t,r,o);this.mutationQueue.push(a);for(const l of o)this.Mr=this.Mr.add(new Ae(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Nr(r),i=o<0?0:o;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?al:this.Fr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ae(t,0),o=new Ae(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,o],a=>{const l=this.Or(a.Cr);i.push(l)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(H);return t.forEach(o=>{const i=new Ae(o,0),a=new Ae(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new Ae(new F(i),0);let l=new Ie(H);return this.Mr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===o&&(l=l.add(c.Cr)),!0)},a),R.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const o=this.Or(r);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){te(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(t.mutations,o=>{const i=new Ae(o.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Ae(t,0),o=this.Mr.firstAfterOrEqual(r);return R.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.kr=e,this.docs=function(){return new ce(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),i=o?o.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(o=>{const i=this.docs.get(o);r=r.insert(o,i?i.document.mutableCopy():Le.newInvalidDocument(o))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let i=Bt();const a=t.path,l=new F(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||fy(dy(f),r)<=0||(o.has(f.key)||cs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,o){W()}qr(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new WE(this)}getSize(e){return R.resolve(this.size)}}class WE extends DE{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.persistence=e,this.Qr=new Un(t=>cl(t),hl),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new _l,this.targetCount=0,this.Kr=vr.Un()}forEachTarget(e,t){return this.Qr.forEach((r,o)=>t(o)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),R.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new vr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.zn(t),R.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let o=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),o++)}),R.waitFor(i).next(()=>o)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const o=this.persistence.referenceDelegate,i=[];return o&&t.forEach(a=>{i.push(o.markPotentiallyOrphaned(e,a))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new is(0),this.zr=!1,this.zr=!0,this.jr=new LE,this.referenceDelegate=e(this),this.Hr=new jE(this),this.indexManager=new AE,this.remoteDocumentCache=function(o){return new FE(o)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new TE(t),this.Yr=new ME(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new xE(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const o=new UE(this.Gr.next());return this.referenceDelegate.Zr(),r(o).next(i=>this.referenceDelegate.Xr(o).next(()=>i)).toPromise().then(i=>(o.raiseOnCommittedEvent(),i))}ei(e,t){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class UE extends py{constructor(e){super(),this.currentSequenceNumber=e}}class vl{constructor(e){this.persistence=e,this.ti=new _l,this.ni=null}static ri(e){return new vl(e)}get ii(){if(this.ni)return this.ni;throw W()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),R.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const o=F.fromPath(r);return this.si(e,o).next(i=>{i||t.removeEntry(o,U.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return R.or([()=>R.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ji{constructor(e,t){this.persistence=e,this.oi=new Un(r=>vy(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=CE(this,t)}static ri(e,t){return new ji(e,t)}Zr(){}Xr(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(o=>r+o))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return R.forEach(this.oi,(r,o)=>this.ar(e,r,o).next(i=>i?R.resolve():t(o)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),i=o.newChangeBuffer();return o.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),R.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ui(e.data.value)),t}ar(e,t,r){return R.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return R.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=o}static Yi(e,t){let r=$(),o=$();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:o=o.add(i.doc.key)}return new wl(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Lm()?8:my(xe())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,o){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,o,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new BE;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,o){return r.documentReadCount<this.es?(er()<=q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(er()<=q.DEBUG&&M("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ts*o?(er()<=q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(t))):R.resolve())}rs(e,t){if(Uc(t))return R.resolve(null);let r=wt(t);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Ra(t,null,"F"),r=wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=$(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.cs(t,l);return this.ls(t,d,a,c.readTime)?this.rs(e,Ra(t,null,"F")):this.hs(e,d,t,c)}))})))}ss(e,t,r,o){return Uc(t)||o.isEqual(U.min())?R.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,o)?R.resolve(null):(er()<=q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),tr(t)),this.hs(e,a,t,hy(o,ho)).next(l=>l))})}cs(e,t){let r=new Ie(_f(e));return t.forEach((o,i)=>{cs(e,i)&&(r=r.add(i))}),r}ls(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(o)>0)}_s(e,t,r){return er()<=q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",tr(t)),this.ns.getDocumentsMatchingQuery(e,t,dn.min(),r)}hs(e,t,r,o){return this.ns.getDocumentsMatchingQuery(e,r,o).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="LocalStore",HE=3e8;class qE{constructor(e,t,r,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new ce(H),this.Is=new Un(i=>cl(i),hl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NE(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function $E(n,e,t,r){return new qE(n,e,t,r)}async function Bf(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next(i=>(o=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=$();for(const d of o){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:l}))})})}function GE(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const p=d.batch,v=p.keys();let I=R.resolve();return v.forEach(S=>{I=I.next(()=>f.getEntry(c,S)).next(D=>{const P=d.docVersions.get(S);te(P!==null),D.version.compareTo(P)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=$();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,o))})}function zf(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function KE(n,e){const t=B(n),r=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const v=o.get(p);if(!v)return;l.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,p)));let I=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Re.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),o=o.insert(p,I),function(D,P,N){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=HE?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(v,I,f)&&l.push(t.Hr.updateTargetData(i,I))});let c=Bt(),d=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(QE(i,a,e.documentUpdates).next(f=>{c=f.Vs,d=f.fs})),!r.isEqual(U.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(p=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return R.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(t.Ts=o,i))}function QE(n,e,t){let r=$(),o=$();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Bt();return t.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(o=o.add(l)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):M(yl,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Vs:a,fs:o}})}function JE(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XE(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return t.Hr.getTargetData(r,e).next(i=>i?(o=i,R.resolve(o)):t.Hr.allocateTargetId(r).next(a=>(o=new on(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=t.Ts.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Na(n,e,t){const r=B(n),o=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!Dr(a))throw a;M(yl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(o.target)}function eh(n,e,t){const r=B(n);let o=U.min(),i=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const p=B(c),v=p.Is.get(f);return v!==void 0?R.resolve(p.Ts.get(v)):p.Hr.getTargetData(d,f)}(r,a,wt(e)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?o:U.min(),t?i:$())).next(l=>(YE(r,Fy(e),l),{documents:l,gs:i})))}function YE(n,e,t){let r=n.Es.get(e)||U.min();t.forEach((o,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class th{constructor(){this.activeTargetIds=Hy()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZE{constructor(){this.ho=new th,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new th,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="ConnectivityMonitor";class rh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){M(nh,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){M(nh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti=null;function Ma(){return ti===null?ti=function(){return 268435456+Math.round(2147483648*Math.random())}():ti++,"0x"+ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="RestConnection",tT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nT{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${o}`,this.wo=this.databaseId.database===Ni?`project_id=${r}`:`project_id=${r}&database_id=${o}`}So(e,t,r,o,i){const a=Ma(),l=this.bo(e,t.toUriEncodedString());M(ta,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,o,i),this.vo(e,l,c,r).then(d=>(M(ta,`Received RPC '${e}' ${a}: `,d),d),d=>{throw dr(ta,`RPC '${e}' ${a} failed with error: `,d,"url: ",l,"request:",r),d})}Co(e,t,r,o,i,a){return this.So(e,t,r,o,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,i)=>e[i]=o),r&&r.headers.forEach((o,i)=>e[i]=o)}bo(e,t){const r=tT[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class oT extends nT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,o){const i=Ma();return new Promise((a,l)=>{const c=new qd;c.setWithCredentials(!0),c.listenOnce($d.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case li.NO_ERROR:const f=c.getResponseJson();M(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case li.TIMEOUT:M(Me,`RPC '${e}' ${i} timed out`),l(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const p=c.getStatus();if(M(Me,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const I=v==null?void 0:v.error;if(I&&I.status&&I.message){const S=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(N)>=0?N:C.UNKNOWN}(I.status);l(new x(S,I.message))}else l(new x(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new x(C.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{M(Me,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(o);M(Me,`RPC '${e}' ${i} sending request:`,o),c.send(t,"POST",d,r,15)})}Wo(e,t,r){const o=Ma(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qd(),l=Kd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");M(Me,`Creating RPC '${e}' stream ${o}: ${f}`,c);const p=a.createWebChannel(f,c);let v=!1,I=!1;const S=new rT({Fo:P=>{I?M(Me,`Not sending because RPC '${e}' stream ${o} is closed:`,P):(v||(M(Me,`Opening RPC '${e}' stream ${o} transport.`),p.open(),v=!0),M(Me,`RPC '${e}' stream ${o} sending:`,P),p.send(P))},Mo:()=>p.close()}),D=(P,N,L)=>{P.listen(N,O=>{try{L(O)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,Jr.EventType.OPEN,()=>{I||(M(Me,`RPC '${e}' stream ${o} transport opened.`),S.Qo())}),D(p,Jr.EventType.CLOSE,()=>{I||(I=!0,M(Me,`RPC '${e}' stream ${o} transport closed`),S.Uo())}),D(p,Jr.EventType.ERROR,P=>{I||(I=!0,dr(Me,`RPC '${e}' stream ${o} transport errored:`,P),S.Uo(new x(C.UNAVAILABLE,"The operation could not be completed")))}),D(p,Jr.EventType.MESSAGE,P=>{var N;if(!I){const L=P.data[0];te(!!L);const O=L,z=(O==null?void 0:O.error)||((N=O[0])===null||N===void 0?void 0:N.error);if(z){M(Me,`RPC '${e}' stream ${o} received error:`,z);const Q=z.status;let X=function(_){const y=pe[_];if(y!==void 0)return Cf(y)}(Q),E=z.message;X===void 0&&(X=C.INTERNAL,E="Unknown error status: "+Q+" with message "+z.message),I=!0,S.Uo(new x(X,E)),p.close()}else M(Me,`RPC '${e}' stream ${o} received:`,L),S.Ko(L)}}),D(l,Gd.STAT_EVENT,P=>{P.stat===Ta.PROXY?M(Me,`RPC '${e}' stream ${o} detected buffering proxy`):P.stat===Ta.NOPROXY&&M(Me,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function na(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){return new lE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r=1e3,o=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=o,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-r);o>0&&M("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="PersistentStream";class qf{constructor(e,t,r,o,i,a,l,c){this.Ti=e,this.n_=r,this.r_=o,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hf(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.i_===t&&this.V_(r,o)},r=>{e(()=>{const o=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(o)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{r(()=>this.m_(o))}),this.stream.onMessage(o=>{r(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return M(oh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(M(oh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iT extends qf{constructor(e,t,r,o,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=hE(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?yt(a.readTime):U.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Va(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Sa(c)?{documents:gE(i,c)}:{query:pE(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nf(i,a.resumeToken);const d=Pa(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=Wi(i,a.snapshotVersion.toTimestamp());const d=Pa(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=_E(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Va(this.serializer),t.removeTarget=e,this.I_(t)}}class sT extends qf{constructor(e,t,r,o,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=fE(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Va(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>dE(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{}class lT extends aT{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Ca(t,r),o,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(C.UNKNOWN,i.toString())})}Co(e,t,r,o,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Ca(t,r),o,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class uT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ut(t),this.N_=!1):M("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="RemoteStore";class cT{constructor(e,t,r,o,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{zn(this)&&(M(xn,"Restarting streams for network reachability change."),await async function(c){const d=B(c);d.W_.add(4),await Po(d),d.j_.set("Unknown"),d.W_.delete(4),await ms(d)}(this))})}),this.j_=new uT(r,o)}}async function ms(n){if(zn(n))for(const e of n.G_)await e(!0)}async function Po(n){for(const e of n.G_)await e(!1)}function $f(n,e){const t=B(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Al(t)?Il(t):Vr(t).c_()&&Tl(t,e))}function El(n,e){const t=B(n),r=Vr(t);t.K_.delete(e),r.c_()&&Gf(t,e),t.K_.size===0&&(r.c_()?r.P_():zn(t)&&t.j_.set("Unknown"))}function Tl(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vr(n).y_(e)}function Gf(n,e){n.H_.Ne(e),Vr(n).w_(e)}function Il(n){n.H_=new oE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Vr(n).start(),n.j_.B_()}function Al(n){return zn(n)&&!Vr(n).u_()&&n.K_.size>0}function zn(n){return B(n).W_.size===0}function Kf(n){n.H_=void 0}async function hT(n){n.j_.set("Online")}async function dT(n){n.K_.forEach((e,t)=>{Tl(n,e)})}async function fT(n,e){Kf(n),Al(n)?(n.j_.q_(e),Il(n)):n.j_.set("Unknown")}async function gT(n,e,t){if(n.j_.set("Online"),e instanceof Vf&&e.state===2&&e.cause)try{await async function(o,i){const a=i.cause;for(const l of i.targetIds)o.K_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.K_.delete(l),o.H_.removeTarget(l))}(n,e)}catch(r){M(xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ui(n,r)}else if(e instanceof di?n.H_.We(e):e instanceof Df?n.H_.Ze(e):n.H_.je(e),!t.isEqual(U.min()))try{const r=await zf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(d);f&&i.K_.set(d,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),Gf(i,c);const p=new on(f.target,c,d,f.sequenceNumber);Tl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M(xn,"Failed to raise snapshot:",r),await Ui(n,r)}}async function Ui(n,e,t){if(!Dr(e))throw e;n.W_.add(1),await Po(n),n.j_.set("Offline"),t||(t=()=>zf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(xn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ms(n)})}function Qf(n,e){return e().catch(t=>Ui(n,t,e))}async function _s(n){const e=B(n),t=mn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:al;for(;pT(e);)try{const o=await JE(e.localStore,r);if(o===null){e.U_.length===0&&t.P_();break}r=o.batchId,mT(e,o)}catch(o){await Ui(e,o)}Jf(e)&&Xf(e)}function pT(n){return zn(n)&&n.U_.length<10}function mT(n,e){n.U_.push(e);const t=mn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Jf(n){return zn(n)&&!mn(n).u_()&&n.U_.length>0}function Xf(n){mn(n).start()}async function _T(n){mn(n).C_()}async function vT(n){const e=mn(n);for(const t of n.U_)e.b_(t.mutations)}async function wT(n,e,t){const r=n.U_.shift(),o=gl.from(r,e,t);await Qf(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await _s(n)}async function yT(n,e){e&&mn(n).S_&&await async function(r,o){if(function(a){return nE(a)&&a!==C.ABORTED}(o.code)){const i=r.U_.shift();mn(r).h_(),await Qf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,o)),await _s(r)}}(n,e),Jf(n)&&Xf(n)}async function ih(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),M(xn,"RemoteStore received new credentials");const r=zn(t);t.W_.add(3),await Po(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ms(t)}async function ET(n,e){const t=B(n);e?(t.W_.delete(2),await ms(t)):e||(t.W_.add(2),await Po(t),t.j_.set("Unknown"))}function Vr(n){return n.J_||(n.J_=function(t,r,o){const i=B(t);return i.M_(),new iT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(n.datastore,n.asyncQueue,{xo:hT.bind(null,n),No:dT.bind(null,n),Lo:fT.bind(null,n),p_:gT.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Al(n)?Il(n):n.j_.set("Unknown")):(await n.J_.stop(),Kf(n))})),n.J_}function mn(n){return n.Y_||(n.Y_=function(t,r,o){const i=B(t);return i.M_(),new sT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:_T.bind(null,n),Lo:yT.bind(null,n),D_:vT.bind(null,n),v_:wT.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await _s(n)):(await n.Y_.stop(),n.U_.length>0&&(M(xn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t,r,o,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,i){const a=Date.now()+r,l=new bl(e,t,a,o,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kl(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),Dr(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{static emptySet(e){return new lr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Xr(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,i=r.getNext().key;if(!o.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Z_=new ce(F.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):W():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wr{constructor(e,t,r,o,i,a,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,o,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new wr(e,t,lr.emptySet(t),a,r,o,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class IT{constructor(){this.queries=ah(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const o=B(t),i=o.queries;o.queries=ah(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function ah(){return new Un(n=>mf(n),us)}async function AT(n,e){const t=B(n);let r=3;const o=e.query;let i=t.queries.get(o);i?!i.na()&&e.ra()&&(r=2):(i=new TT,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(o,!0);break;case 1:i.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(a){const l=kl(a,`Initialization of query '${tr(e.query)}' failed`);return void e.onError(l)}t.queries.set(o,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Sl(t)}async function bT(n,e){const t=B(n),r=e.query;let o=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?o=e.ra()?0:1:!i.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kT(n,e){const t=B(n);let r=!1;for(const o of e){const i=o.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(o)&&(r=!0);a.ea=o}}r&&Sl(t)}function ST(n,e,t){const r=B(n),o=r.queries.get(e);if(o)for(const i of o.ta)i.onError(t);r.queries.delete(e)}function Sl(n){n.ia.forEach(e=>{e.next()})}var Oa,lh;(lh=Oa||(Oa={}))._a="default",lh.Cache="cache";class RT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Oa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.key=e}}class Zf{constructor(e){this.key=e}}class PT{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=$(),this.mutatedKeys=$(),this.ya=_f(e),this.wa=new lr(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new sh,o=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=o,l=!1;const c=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,d=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((f,p)=>{const v=o.get(f),I=cs(this.query,p)?p:null,S=!!v&&this.mutatedKeys.has(v.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;v&&I?v.data.isEqual(I.data)?S!==D&&(r.track({type:3,doc:I}),P=!0):this.va(v,I)||(r.track({type:2,doc:I}),P=!0,(c&&this.ya(I,c)>0||d&&this.ya(I,d)<0)&&(l=!0)):!v&&I?(r.track({type:0,doc:I}),P=!0):v&&!I&&(r.track({type:1,doc:v}),P=!0,(c||d)&&(l=!0)),P&&(I?(a=a.add(I),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,p)=>function(I,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return D(I)-D(S)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),o=o!=null&&o;const l=t&&!o?this.Fa():[],c=this.pa.size===0&&this.current&&!o?1:0,d=c!==this.ga;return this.ga=c,a.length!==0||d?{snapshot:new wr(this.query,e.wa,i,a,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new sh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=$(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Zf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Yf(r))}),t}Oa(e){this.fa=e.gs,this.pa=$();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return wr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Rl="SyncEngine";class CT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class DT{constructor(e){this.key=e,this.Ba=!1}}class VT{constructor(e,t,r,o,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Un(l=>mf(l),us),this.qa=new Map,this.Qa=new Set,this.$a=new ce(F.comparator),this.Ua=new Map,this.Ka=new _l,this.Wa={},this.Ga=new Map,this.za=vr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function NT(n,e,t=!0){const r=ig(n);let o;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Na()):o=await eg(r,e,t,!0),o}async function MT(n,e){const t=ig(n);await eg(t,e,!0,!1)}async function eg(n,e,t,r){const o=await XE(n.localStore,wt(e)),i=o.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await OT(n,e,i,a==="current",o.resumeToken)),n.isPrimaryClient&&t&&$f(n.remoteStore,o),l}async function OT(n,e,t,r,o){n.Ha=(p,v,I)=>async function(D,P,N,L){let O=P.view.ba(N);O.ls&&(O=await eh(D.localStore,P.query,!1).then(({documents:E})=>P.view.ba(E,O)));const z=L&&L.targetChanges.get(P.targetId),Q=L&&L.targetMismatches.get(P.targetId)!=null,X=P.view.applyChanges(O,D.isPrimaryClient,z,Q);return ch(D,P.targetId,X.Ma),X.snapshot}(n,p,v,I);const i=await eh(n.localStore,e,!0),a=new PT(e,i.gs),l=a.ba(i.documents),c=Ro.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),d=a.applyChanges(l,n.isPrimaryClient,c);ch(n,t,d.Ma);const f=new CT(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function LT(n,e,t){const r=B(n),o=r.ka.get(e),i=r.qa.get(o.targetId);if(i.length>1)return r.qa.set(o.targetId,i.filter(a=>!us(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Na(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),t&&El(r.remoteStore,o.targetId),La(r,o.targetId)}).catch(Cr)):(La(r,o.targetId),await Na(r.localStore,o.targetId,!0))}async function xT(n,e){const t=B(n),r=t.ka.get(e),o=t.qa.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),El(t.remoteStore,r.targetId))}async function FT(n,e,t){const r=qT(n);try{const o=await function(a,l){const c=B(a),d=Te.now(),f=l.reduce((I,S)=>I.add(S.key),$());let p,v;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=Bt(),D=$();return c.ds.getEntries(I,f).next(P=>{S=P,S.forEach((N,L)=>{L.isValidDocument()||(D=D.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,S)).next(P=>{p=P;const N=[];for(const L of l){const O=Xy(L,p.get(L.key).overlayedDocument);O!=null&&N.push(new Bn(L.key,O,uf(O.value.mapValue),xt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,d,N,l)}).next(P=>{v=P;const N=P.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(I,P.batchId,N)})}).then(()=>({batchId:v.batchId,changes:wf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(a,l,c){let d=a.Wa[a.currentUser.toKey()];d||(d=new ce(H)),d=d.insert(l,c),a.Wa[a.currentUser.toKey()]=d}(r,o.batchId,t),await Co(r,o.changes),await _s(r.remoteStore)}catch(o){const i=kl(o,"Failed to persist write");t.reject(i)}}async function tg(n,e){const t=B(n);try{const r=await KE(t.localStore,e);e.targetChanges.forEach((o,i)=>{const a=t.Ua.get(i);a&&(te(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.Ba=!0:o.modifiedDocuments.size>0?te(a.Ba):o.removedDocuments.size>0&&(te(a.Ba),a.Ba=!1))}),await Co(t,r,e)}catch(r){await Cr(r)}}function uh(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&o.push(l.snapshot)}),function(a,l){const c=B(a);c.onlineState=l;let d=!1;c.queries.forEach((f,p)=>{for(const v of p.ta)v.sa(l)&&(d=!0)}),d&&Sl(c)}(r.eventManager,e),o.length&&r.La.p_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WT(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Ua.get(e),i=o&&o.key;if(i){let a=new ce(F.comparator);a=a.insert(i,Le.newNoDocument(i,U.min()));const l=$().add(i),c=new gs(U.min(),new Map,new ce(H),a,l);await tg(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),Pl(r)}else await Na(r.localStore,e,!1).then(()=>La(r,e,t)).catch(Cr)}async function jT(n,e){const t=B(n),r=e.batch.batchId;try{const o=await GE(t.localStore,e);rg(t,r,null),ng(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Co(t,o)}catch(o){await Cr(o)}}async function UT(n,e,t){const r=B(n);try{const o=await function(a,l){const c=B(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(p=>(te(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);rg(r,e,t),ng(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Co(r,o)}catch(o){await Cr(o)}}function ng(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function rg(n,e,t){const r=B(n);let o=r.Wa[r.currentUser.toKey()];if(o){const i=o.get(e);i&&(t?i.reject(t):i.resolve(),o=o.remove(e)),r.Wa[r.currentUser.toKey()]=o}}function La(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||og(n,r)})}function og(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(El(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Pl(n))}function ch(n,e,t){for(const r of t)r instanceof Yf?(n.Ka.addReference(r.key,e),BT(n,r)):r instanceof Zf?(M(Rl,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||og(n,r.key)):W()}function BT(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(M(Rl,"New document in limbo: "+t),n.Qa.add(r),Pl(n))}function Pl(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new F(de.fromString(e)),r=n.za.next();n.Ua.set(r,new DT(t)),n.$a=n.$a.insert(t,r),$f(n.remoteStore,new on(wt(dl(t.path)),r,"TargetPurposeLimboResolution",is.ae))}}async function Co(n,e,t){const r=B(n),o=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){o.push(d);const p=wl.Yi(c.targetId,d);i.push(p)}}))}),await Promise.all(a),r.La.p_(o),await async function(c,d){const f=B(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(d,v=>R.forEach(v.Hi,I=>f.persistence.referenceDelegate.addReference(p,v.targetId,I)).next(()=>R.forEach(v.Ji,I=>f.persistence.referenceDelegate.removeReference(p,v.targetId,I)))))}catch(p){if(!Dr(p))throw p;M(yl,"Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const I=f.Ts.get(v),S=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(S);f.Ts=f.Ts.insert(v,D)}}}(r.localStore,i))}async function zT(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){M(Rl,"User change. New user:",e.toKey());const r=await Bf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new x(C.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Co(t,r.Rs)}}function HT(n,e){const t=B(n),r=t.Ua.get(e);if(r&&r.Ba)return $().add(r.key);{let o=$();const i=t.qa.get(e);if(!i)return o;for(const a of i){const l=t.ka.get(a);o=o.unionWith(l.view.Sa)}return o}}function ig(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WT.bind(null,e),e.La.p_=kT.bind(null,e.eventManager),e.La.Ja=ST.bind(null,e.eventManager),e}function qT(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UT.bind(null,e),e}class Bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ps(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return $E(this.persistence,new zE,e.initialUser,this.serializer)}Xa(e){return new Uf(vl.ri,this.serializer)}Za(e){return new ZE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bi.provider={build:()=>new Bi};class $T extends Bi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){te(this.persistence.referenceDelegate instanceof ji);const r=this.persistence.referenceDelegate.garbageCollector;return new RE(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new Uf(r=>ji.ri(r,t),this.serializer)}}class xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zT.bind(null,this.syncEngine),await ET(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IT}()}createDatastore(e){const t=ps(e.databaseInfo.databaseId),r=function(i){return new oT(i)}(e.databaseInfo);return function(i,a,l,c){return new lT(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,o,i,a,l){return new cT(r,o,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>uh(this.syncEngine,t,0),function(){return rh.D()?new rh:new eT}())}createSyncEngine(e,t){return function(o,i,a,l,c,d,f){const p=new VT(o,i,a,l,c,d);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const i=B(o);M(xn,"RemoteStore shutting down."),i.W_.add(5),await Po(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xa.provider={build:()=>new xa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirestoreClient";class KT{constructor(e,t,r,o,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Oe.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(_n,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(_n,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=kl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ra(n,e){n.asyncQueue.verifyOperationInProgress(),M(_n,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async o=>{r.isEqual(o)||(await Bf(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QT(n);M(_n,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ih(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,o)=>ih(e.remoteStore,o)),n._onlineComponents=e}async function QT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(_n,"Using user provided OfflineComponentProvider");try{await ra(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===C.FAILED_PRECONDITION||o.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await ra(n,new Bi)}}else M(_n,"Using default OfflineComponentProvider"),await ra(n,new $T(void 0));return n._offlineComponents}async function sg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(_n,"Using user provided OnlineComponentProvider"),await hh(n,n._uninitializedComponentsProvider._online)):(M(_n,"Using default OnlineComponentProvider"),await hh(n,new xa))),n._onlineComponents}function JT(n){return sg(n).then(e=>e.syncEngine)}async function dh(n){const e=await sg(n),t=e.eventManager;return t.onListen=NT.bind(null,e.syncEngine),t.onUnlisten=LT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xT.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function YT(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gh(n){if(!F.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function ur(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cl(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firestore.googleapis.com",ph=!0;class mh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lg,this.ssl=ph}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ph;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kE)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ag((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ny;switch(r.type){case"firstParty":return new sy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fh.get(t);r&&(M("ComponentProvider","Removing Datastore"),fh.delete(t),r.terminate())}(this),Promise.resolve()}}function ZT(n,e,t,r={}){var o;const i=(n=ur(n,Dl))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==lg&&i.host!==l&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ft(c,a)&&(n._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Oe.MOCK_USER;else{d=Pm(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Oe(p)}n._authCredentials=new ry(new Jd(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class st{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class mo extends vs{constructor(e,t,r){super(e,t,dl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new F(e))}withConverter(e){return new mo(this.firestore,e,this._path)}}function ws(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Yd.newId()),XT("doc","path",e),n instanceof Dl){const r=de.fromString(e,...t);return gh(r),new st(n,null,new F(r))}{if(!(n instanceof st||n instanceof mo))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return gh(r),new st(n.firestore,n instanceof mo?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="AsyncQueue";class vh{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hf(this,"async_queue_retry"),this.Su=()=>{const r=na();r&&M(_h,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=na();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=na();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Nn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Dr(e))throw e;M(_h,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=bl.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(o),o}Du(){this.gu&&W()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function wh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const i of r)if(i in o&&typeof o[i]=="function")return!0;return!1}(n,["next","error","complete"])}class zi extends Dl{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new vh,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vh(e),this._firestoreClient=void 0,await e}}}function eI(n,e){const t=typeof n=="object"?n:cd(),r=typeof n=="string"?n:Ni,o=Ka(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const i=Sm("firestore");i&&ZT(o,...i)}return o}function ug(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tI(n),n._firestoreClient}function tI(n){var e,t,r;const o=n._freezeSettings(),i=function(l,c,d,f){return new Ey(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ag(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new KT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(Re.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==o[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=/^__.*__$/;class cg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Es{constructor(e,t,r,o,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Es(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.$u(e),o}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Hi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(hg(this.Lu)&&nI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class rI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ps(e)}ju(e,t,r,o=!1){return new Es({Lu:e,methodName:t,zu:r,path:Se.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oI(n){const e=n._freezeSettings(),t=ps(n._databaseId);return new rI(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Ts extends Do{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ts}}function dg(n,e,t){return new Es({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ml extends Do{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=dg(this,e,!0),r=this.Hu.map(i=>Nr(i,t)),o=new mr(r);return new kf(e.path,o)}isEqual(e){return e instanceof Ml&&Ft(this.Hu,e.Hu)}}class Ol extends Do{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=dg(this,e,!0),r=this.Hu.map(i=>Nr(i,t)),o=new _r(r);return new kf(e.path,o)}isEqual(e){return e instanceof Ol&&Ft(this.Hu,e.Hu)}}function iI(n,e,t,r){const o=n.ju(1,e,t);gg("Data must be an object, but it was:",o,r);const i=[],a=nt.empty();vn(r,(c,d)=>{const f=Ll(e,c,t);d=Fe(d);const p=o.Uu(f);if(d instanceof Ts)i.push(f);else{const v=Nr(d,p);v!=null&&(i.push(f),a.set(f,v))}});const l=new ht(i);return new cg(a,l,o.fieldTransforms)}function sI(n,e,t,r,o,i){const a=n.ju(1,e,t),l=[yh(e,r,t)],c=[o];if(i.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(yh(e,i[v])),c.push(i[v+1]);const d=[],f=nt.empty();for(let v=l.length-1;v>=0;--v)if(!uI(d,l[v])){const I=l[v];let S=c[v];S=Fe(S);const D=a.Uu(I);if(S instanceof Ts)d.push(I);else{const P=Nr(S,D);P!=null&&(d.push(I),f.set(I,P))}}const p=new ht(d);return new cg(f,p,a.fieldTransforms)}function Nr(n,e){if(fg(n=Fe(n)))return gg("Unsupported field value:",e,n),aI(n,e);if(n instanceof Do)return function(r,o){if(!hg(o.Lu))throw o.Wu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(o);i&&o.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,o){const i=[];let a=0;for(const l of r){let c=Nr(l,o.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,o){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qy(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Te.fromDate(r);return{timestampValue:Wi(o.serializer,i)}}if(r instanceof Te){const i=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wi(o.serializer,i)}}if(r instanceof Vl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yr)return{bytesValue:Nf(o.serializer,r._byteString)};if(r instanceof st){const i=o.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw o.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ml(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Nl)return function(a,l){return{mapValue:{fields:{[af]:{stringValue:lf},[Mi]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Wu("VectorValues must only contain numeric values.");return fl(l.serializer,d)})}}}}}}(r,o);throw o.Wu(`Unsupported field value: ${Cl(r)}`)}(n,e)}function aI(n,e){const t={};return ef(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(n,(r,o)=>{const i=Nr(o,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Vl||n instanceof yr||n instanceof st||n instanceof Do||n instanceof Nl)}function gg(n,e,t){if(!fg(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const r=Cl(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function yh(n,e,t){if((e=Fe(e))instanceof ys)return e._internalPath;if(typeof e=="string")return Ll(n,e);throw Hi("Field path arguments must be of type string or ",n,!1,void 0,t)}const lI=new RegExp("[~\\*/\\[\\]]");function Ll(n,e,t){if(e.search(lI)>=0)throw Hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ys(...e.split("."))._internalPath}catch{throw Hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hi(n,e,t,r,o){const i=r&&!r.isEmpty(),a=o!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${o}`),c+=")"),new x(C.INVALID_ARGUMENT,l+n+c)}function uI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r,o,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cI extends pg{data(){return super.data()}}function mg(n,e){return typeof e=="string"?Ll(n,e):e instanceof ys?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dI{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vn(e,(o,i)=>{r[o]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,o;const i=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Mi].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(a=>fe(a.doubleValue));return new Nl(i)}convertGeoPoint(e){return new Vl(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=as(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const t=fn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);te(Wf(r));const o=new go(r.get(1),r.get(3)),i=new F(r.popFirst(5));return o.isEqual(t)||Ut(`Document ${i} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _g extends pg{constructor(e,t,r,o,i,a){super(e,t,r,o,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fi extends _g{data(e={}){return super.data(e)}}class fI{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Zr(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new Zr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,i){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const c=new fi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Zr(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new fi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Zr(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:gI(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class vg extends dI{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function xl(n,e,t,...r){n=ur(n,st);const o=ur(n.firestore,zi),i=oI(o);let a;return a=typeof(e=Fe(e))=="string"||e instanceof ys?sI(i,"updateDoc",n._key,e,t,r):iI(i,"updateDoc",n._key,e),mI(o,[a.toMutation(n._key,xt.exists(!0))])}function pI(n,...e){var t,r,o;n=Fe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wh(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(wh(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(o=p.complete)===null||o===void 0?void 0:o.bind(p)}let c,d,f;if(n instanceof st)d=ur(n.firestore,zi),f=dl(n._key.path),c={next:p=>{e[a]&&e[a](_I(d,n,p))},error:e[a+1],complete:e[a+2]};else{const p=ur(n,vs);d=ur(p.firestore,zi),f=p._query;const v=new vg(d);c={next:I=>{e[a]&&e[a](new fI(d,v,p,I))},error:e[a+1],complete:e[a+2]},hI(n._query)}return function(v,I,S,D){const P=new GT(D),N=new RT(I,P,S);return v.asyncQueue.enqueueAndForget(async()=>AT(await dh(v),N)),()=>{P.su(),v.asyncQueue.enqueueAndForget(async()=>bT(await dh(v),N))}}(ug(d),f,l,c)}function mI(n,e){return function(r,o){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>FT(await JT(r),o,i)),i.promise}(ug(n),e)}function _I(n,e,t){const r=t.docs.get(e._key),o=new vg(n);return new _g(n,o,e._key,r,new Zr(t.hasPendingWrites,t.fromCache),e.converter)}function vI(...n){return new Ml("arrayUnion",n)}function wI(...n){return new Ol("arrayRemove",n)}(function(e,t=!0){(function(o){Pr=o})(Sr),cr(new Mn("firestore",(r,{instanceIdentifier:o,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new zi(new oy(r.getProvider("auth-internal")),new ay(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new go(d.options.projectId,f)}(a,o),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ln(Ac,bc,e),ln(Ac,bc,"esm2017")})();const yI={apiKey:"AIzaSyBPwEkq14ujW78bocG-X5UKMrZNC6oUmMo",authDomain:"dedinstenebs.firebaseapp.com",projectId:"dedinstenebs",storageBucket:"dedinstenebs.firebasestorage.app",messagingSenderId:"330325865129",appId:"1:330325865129:web:c3ca41f27c4f138a3a6fb8"},wg=ud(yI),oa=ey(wg),Is=eI(wg),As=bt([]),EI=bt([]),Er=bt([]),Fl=bt(!0),yg=bt(0),Eg=bt(""),Tg=bt({}),qi=bt(!1),TI=bt([]),Ig=bt(0),II=JSON.parse(`[{"vraag":"Wat weet je van de Warhol?","antwoord 1":"Nachtcafé","antwoord 2":"Stefan","antwoord 3":"Goedkope cocktails voor 12 uur","antwoord 4":"Jan Hamming","antwoord 5":"Garderobe"},{"vraag":"Wat weet je over Burning?","antwoord 1":"Metal","antwoord 2":"Stadskanaal","antwoord 3":"Scourge of Humanity","antwoord 4":"Hugo","antwoord 5":"Merchandise"},{"vraag":"Wat weet je van de Rijksuniversiteit Groningen?","antwoord 1":"Academiegebouw","antwoord 2":"Aletta Jacobs","antwoord 3":"Internationaal","antwoord 4":"Opgericht in 1614","antwoord 5":"Ubbo Emmius"},{"vraag":"Wat weet je over Beertje Paddington?","antwoord 1":"Kinderliteratuur","antwoord 2":"Peru","antwoord 3":"Marmelade","antwoord 4":"Rode hoed","antwoord 5":"Michael Bond"},{"vraag":"Wat weet je over Zweden?","antwoord 1":"Scandinavië","antwoord 2":"Stockholm","antwoord 3":"Gehaktballetjes","antwoord 4":"IKEA","antwoord 5":"ABBA"},{"vraag":"Wat weet je over Baldur's Gate III?","antwoord 1":"Video game","antwoord 2":"Roleplay","antwoord 3":"Larian Studios","antwoord 4":"D&D","antwoord 5":"Fantasy"},{"vraag":"Wat weet je over boulderen?","antwoord 1":"Klimsport","antwoord 2":"Korte routes","antwoord 3":"Ongezekerd","antwoord 4":"Rots","antwoord 5":"GROPO"},{"vraag":"Wat weet je over BTS?","antwoord 1":"Bangtan Boys","antwoord 2":"K-Pop","antwoord 3":"Jungkook","antwoord 4":"Army","antwoord 5":"HYBE"},{"vraag":"Wat weet je over het Hondsrug College?","antwoord 1":"Middelbare school","antwoord 2":"Emmen","antwoord 3":"Underground","antwoord 4":"De Marke","antwoord 5":"Studiehuis"},{"vraag":"Wat weet je over Pokémon?","antwoord 1":"Japans","antwoord 2":"Pikachu","antwoord 3":"Animatieserie","antwoord 4":"Video game","antwoord 5":"Ruilkaarten"},{"vraag":"Wat weet je over The Sims?","antwoord 1":"Video game","antwoord 2":"Electronic Arts","antwoord 3":"Simulatie","antwoord 4":"Maxis","antwoord 5":"Plumbob"},{"vraag":"Wat weet je over World of Warcraft?","antwoord 1":"MMORPG","antwoord 2":"Release in 2004","antwoord 3":"Blizzard Entertainment","antwoord 4":"Azeroth","antwoord 5":"Fantasy"},{"vraag":"Wat weet je over het centrum van Broca?","antwoord 1":"Motorisch spraakcentrum","antwoord 2":"Frontale kwab","antwoord 3":"Paul Pierre Broca","antwoord 4":"Afasie","antwoord 5":"Centrum van Wernicke"},{"vraag":"Wat weet je over Sex & The City?","antwoord 1":"Dramaserie","antwoord 2":"New York","antwoord 3":"Sarah Jessica Parker","antwoord 4":"Carrie Bradshaw","antwoord 5":"Release in 1998"},{"vraag":"Wat weet je over Crufts?","antwoord 1":"Hondenshow","antwoord 2":"Internationaal","antwoord 3":"Verenigd Koninkrijk","antwoord 4":"The Kennel Club","antwoord 5":"Best in Show"},{"vraag":"Wat weet je over het Zwanenmeer?","antwoord 1":"Ballet","antwoord 2":"Tchaikovsky","antwoord 3":"Bolsjojballet","antwoord 4":"Geschreven in 1875","antwoord 5":"Odette"},{"vraag":"Wat weet je over The Sopranos?","antwoord 1":"Dramaserie","antwoord 2":"Tony Soprano","antwoord 3":"Italiaans-Amerikaanse mafia","antwoord 4":"New Jersey","antwoord 5":"Release in 1999"},{"vraag":"Wat weet je over Wildlands Adventure Zoo?","antwoord 1":"Dierentuin","antwoord 2":"Emmen","antwoord 3":"IJsberen","antwoord 4":"200 miljoen euro","antwoord 5":"Geopend in 2016"},{"vraag":"Wat weet je over de tetra?","antwoord 1":"Vis","antwoord 2":"Zoet water","antwoord 3":"Populair voor thuisaquaria","antwoord 4":"Afrika","antwoord 5":"Centraal en Zuid-Amerika"},{"vraag":"Wat weet je over Taiwan?","antwoord 1":"Onafhankelijke staat","antwoord 2":"Oost-Azië","antwoord 3":"Taipei","antwoord 4":"Formosa","antwoord 5":"Lai Ching-te"},{"vraag":"Wat weet je over hockey?","antwoord 1":"Balsport","antwoord 2":"Hockeystick","antwoord 3":"Grasveld","antwoord 4":"Zaalhockey","antwoord 5":"Teamsport"},{"vraag":"Wat weet je over spikeball?","antwoord 1":"Balsport","antwoord 2":"Trampoline","antwoord 3":"Twee teams","antwoord 4":"Serveren","antwoord 5":"Roundnet"},{"vraag":"Wat weet je over Berghain?","antwoord 1":"Nachtclub","antwoord 2":"Berlijn","antwoord 3":"Wereldberoemd","antwoord 4":"Techno","antwoord 5":"Geen foto's/video's"},{"vraag":"Wat weet je over limoncello?","antwoord 1":"Likeur","antwoord 2":"Italiaans","antwoord 3":"Citroen","antwoord 4":"After-dinner","antwoord 5":"Tussen 25 en 36%"},{"vraag":"Wat weet je over Guns N' Roses?","antwoord 1":"Hard rock band","antwoord 2":"Amerikaans","antwoord 3":"Los Angeles, Californië","antwoord 4":"Axl Rose","antwoord 5":"Opgericht in 1985"},{"vraag":"Wat weet je over Tool?","antwoord 1":"Metal band","antwoord 2":"Amerikaans","antwoord 3":"Los Angeles, Californië","antwoord 4":"Opgericht in 1990","antwoord 5":"Maynard James Keenan"},{"vraag":"Wat weet je over Aphex Twin?","antwoord 1":"Muzikant","antwoord 2":"Brits","antwoord 3":"Richard David James","antwoord 4":"Ambient","antwoord 5":"Intelligent dance music"},{"vraag":"Wat weet je over Friedrich Nietzsche?","antwoord 1":"Duits","antwoord 2":"Filosoof","antwoord 3":"Also sprach Zarathustra","antwoord 4":"Nihilisme","antwoord 5":"\\"Gott ist tot.\\""},{"vraag":"Wat weet je over Lady Gaga?","antwoord 1":"Stefani Germanotta","antwoord 2":"Zangeres","antwoord 3":"Popmuziek","antwoord 4":"Bad Romance","antwoord 5":"A Star is Born"},{"vraag":"Wat weet je over Unitas S.G.?","antwoord 1":"Studentenvereniging","antwoord 2":"Opgericht in 1996","antwoord 3":"t Filiaal","antwoord 4":"Jaarclubs","antwoord 5":"Introductietijd"},{"vraag":"Wat weet je over Xi Jinping?","antwoord 1":"President van China","antwoord 2":"Verkozen in 2013","antwoord 3":"Chinese Communistische Partij","antwoord 4":"Censuur","antwoord 5":"Winnie the Pooh"},{"vraag":"Wat weet je over de Groningen Giants?","antwoord 1":"American Football","antwoord 2":"Corpus den Hoorn","antwoord 3":"Groen met wit","antwoord 4":"Opgericht in 1999","antwoord 5":"Perfect season 2015"},{"vraag":"Wat weet je over Friesland?","antwoord 1":"Provincie","antwoord 2":"Leeuwarden","antwoord 3":"Friese taal","antwoord 4":"650.000 inwoners","antwoord 5":"Pompeblêd"},{"vraag":"Wat weet je over chihuahua's?","antwoord 1":"Hondenras","antwoord 2":"Mexico","antwoord 3":"Kleinste ras ter wereld","antwoord 4":"Dominant","antwoord 5":"Slechte gezondheid"},{"vraag":"Wat weet je over Mark Pol?","antwoord 1":"Politicus","antwoord 2":"VVD","antwoord 3":"Burgemeester van Texel","antwoord 4":"Geboren in 1986","antwoord 5":"Overheidsadviseur"},{"vraag":"Wat weet je over Python? ","antwoord 1":"Programmeertaal","antwoord 2":"Duck typing","antwoord 3":"Guido van Rossum","antwoord 4":"Dynamisch","antwoord 5":"General-purpose"},{"vraag":"Wat weet je over Daan Prevoo?","antwoord 1":"Politicus","antwoord 2":"SP","antwoord 3":"Burgemeester van Valkenburg","antwoord 4":"Partijloos","antwoord 5":"Familie van Mas"},{"vraag":"Wat weet je over Mr. Polska?","antwoord 1":"Rapper","antwoord 2":"Nederlands-Pools","antwoord 3":"Krokobil","antwoord 4":"Dominik Włodzimierz Czajka","antwoord 5":"Inge's guilty pleasure"},{"vraag":"Wat weet je over Evelyn Bosma?","antwoord 1":"Onderzoeker","antwoord 2":"Universiteit Leiden","antwoord 3":"Docent Tweedetaalverwerving","antwoord 4":"Fries","antwoord 5":"Klokhuis wetenschapsprijs"},{"vraag":"Wat weet je over de DSM-5?","antwoord 1":"Diagnostisch handboek","antwoord 2":"Uitgebracht in 2013","antwoord 3":"American Psychiatric Association","antwoord 4":"Psychische stoornissen","antwoord 5":"Classificaties"},{"vraag":"Wat weet je over de film Easy Rider?","antwoord 1":"Dramafilm","antwoord 2":"Release in 1969","antwoord 3":"Peter Fonda","antwoord 4":"Motorrijders","antwoord 5":"Dennis Hopper"},{"vraag":"Wat weet je over Love on the Spectrum?","antwoord 1":"Realityserie","antwoord 2":"Netflix","antwoord 3":"Daten met autisme","antwoord 4":"Release in 2022","antwoord 5":"Mark houdt van dino's"},{"vraag":"Wat weet je over de orthodoxe kerk?","antwoord 1":"Christelijke stroming","antwoord 2":"Grieks en Russisch","antwoord 3":"Erkent de paus niet","antwoord 4":"Traditioneel","antwoord 5":"Liturgisch"},{"vraag":"Wat weet je over Mario Kart?","antwoord 1":"Video game","antwoord 2":"Racen","antwoord 3":"Lennart heeft babyhulp nodig","antwoord 4":"Power-ups","antwoord 5":"Rainbow Road"},{"vraag":"Wat weet je over Wegmisbruikers?","antwoord 1":"TV-programma","antwoord 2":"SBS6","antwoord 3":"André van der Toorn","antwoord 4":"Verkeersovertredingen","antwoord 5":"Politie"},{"vraag":"Wat weet je over High School Musical?","antwoord 1":"Disney","antwoord 2":"Zac Efron","antwoord 3":"Vanessa Hudgens","antwoord 4":"Drie films","antwoord 5":"Breaking Free"},{"vraag":"Wat weet je over Rihanna?","antwoord 1":"Zangeres","antwoord 2":"Fenty Beauty","antwoord 3":"Barbados","antwoord 4":"Robyn Fenty","antwoord 5":"Umbrella"},{"vraag":"Wat weet je over Charli XCX?","antwoord 1":"Zangeres","antwoord 2":"Brits","antwoord 3":"Hyperpop","antwoord 4":"I Love It","antwoord 5":"Brat Summer"},{"vraag":"Wat weet je van Emmen?","antwoord 1":"Vlinderstad","antwoord 2":"Drenthe","antwoord 3":"Eric van Oosterhout","antwoord 4":"Wildlands","antwoord 5":"Zwetser"},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"","antwoord 1":"","antwoord 2":"","antwoord 3":"","antwoord 4":"","antwoord 5":""},{"vraag":"Wat weet je over Demi?","antwoord 1":"Klein","antwoord 2":"Apple bandit","antwoord 3":"Elke maand nieuwe hobby","antwoord 4":"Planten","antwoord 5":""},{"vraag":"Wat weet je over Hester?","antwoord 1":"Goede wenkies","antwoord 2":"Unitas","antwoord 3":"Katten","antwoord 4":"Groninger","antwoord 5":""},{"vraag":"Wat weet je over Mas?","antwoord 1":"Kaal","antwoord 2":"Drummer","antwoord 3":"Kicker","antwoord 4":"Luidruchtig","antwoord 5":"Linkshandig"},{"vraag":"Wat weet je over Daan?","antwoord 1":"Groninger Giants","antwoord 2":"Bassist","antwoord 3":"Slechte spelling","antwoord 4":"Conservatief","antwoord 5":"Knikkerbaan"},{"vraag":"Wat weet je over Bram?","antwoord 1":"Hond","antwoord 2":"Anarcho-communist","antwoord 3":"Afwassen","antwoord 4":"Zout","antwoord 5":"Cleo"},{"vraag":"Wat weet je over Evelyn?","antwoord 1":"Ballet","antwoord 2":"Geheimen vertellen","antwoord 3":"Mode","antwoord 4":"Bakken","antwoord 5":"Friesland"},{"vraag":"Wat weet je over James?","antwoord 1":"Kiwi","antwoord 2":"Sex and the city","antwoord 3":"Druiven","antwoord 4":"Rihanna","antwoord 5":"RuneScape"},{"vraag":"Wat weet je over Lennart?","antwoord 1":"Lang","antwoord 2":"Naaimachine","antwoord 3":"Zuivel","antwoord 4":"Geen rijbewijs","antwoord 5":"Tedpilled"},{"vraag":"Wat weet je over Marieke?","antwoord 1":"SOG","antwoord 2":"Hockey","antwoord 3":"Reizen","antwoord 4":"Beertje Paddington","antwoord 5":"Taiwan"},{"vraag":"Wat weet je over Mark?","antwoord 1":"Gay","antwoord 2":"Pokemon","antwoord 3":"Spaans","antwoord 4":"Cocktails","antwoord 5":"Vissen"},{"vraag":"Wat weet je over René?","antwoord 1":"Rood haar","antwoord 2":"Besneden","antwoord 3":"Gymjuf","antwoord 4":"Bailey","antwoord 5":"Luistervos"},{"vraag":"Wat weet je over Zeger?","antwoord 1":"Bourgondisch","antwoord 2":"Kapitein","antwoord 3":"Haat dieren","antwoord 4":"Modelvliegtuigjes","antwoord 5":"Scherpe kaaklijn"}]`),AI=[{Sleutelwoord:"Brabant","Woord 1":"Brownies","Woord 2":"Alpaca's","Woord 3":"Den Bosch","Woord 4":"Jenga"},{Sleutelwoord:"Prikkel","Woord 1":"Melk","Woord 2":"Sodastream","Woord 3":"Nut","Woord 4":"sherry"},{Sleutelwoord:"Ad","Woord 1":"Fundum","Woord 2":"Ice","Woord 3":"Limoncello","Woord 4":"Advocaat"},{Sleutelwoord:"Lennart's bestuursjaar","Woord 1":"Creatief","Woord 2":"Extravert","Woord 3":"Lang","Woord 4":"ASCI"},{Sleutelwoord:"Gall & Gall","Woord 1":"Daan","Woord 2":"Mas","Woord 3":"Zeger","Woord 4":"Slijterij"},{Sleutelwoord:"Daan's spelling","Woord 1":"Rasicistisch","Woord 2":"Fontijn","Woord 3":"Commeserais","Woord 4":"Berijkbaar"},{Sleutelwoord:"Mas' Studieloopbaan/opleidingen ","Woord 1":"Bedrijfskunde","Woord 2":"Economics and Business Economics ","Woord 3":"IRIO","Woord 4":"VWO+"},{Sleutelwoord:"Buitenlandse minors","Woord 1":"Lund","Woord 2":"Sevilla","Woord 3":"Berlijn","Woord 4":"Bologna"},{Sleutelwoord:"Demi's haarkleuren","Woord 1":"Blond","Woord 2":"Roze","Woord 3":"Bruin","Woord 4":"Grijs"},{Sleutelwoord:"Mas' Halloween outfits","Woord 1":"Cheerleader","Woord 2":"Avatar","Woord 3":"J-Roc","Woord 4":"Oma Wolf"},{Sleutelwoord:"Lennart's Halloween outfits","Woord 1":"Patrick Bateman","Woord 2":"Beer","Woord 3":"Edward","Woord 4":"Mosseljongen"},{Sleutelwoord:"Demi's Halloween outfits","Woord 1":"Mia Wallace","Woord 2":"Mario","Woord 3":"Wednesday Addams","Woord 4":"Meerminman"},{Sleutelwoord:"Squad vakanties","Woord 1":"Veluwe ","Woord 2":"Brabant","Woord 3":"Berlijn","Woord 4":"Frankrijk"},{Sleutelwoord:"Bram","Woord 1":"Hond","Woord 2":"Minne hond","Woord 3":"Skere hond","Woord 4":"Linkse hond"},{Sleutelwoord:"K-Pop groepen","Woord 1":"Blackpink","Woord 2":"BTS","Woord 3":"Twice","Woord 4":"aespa"},{Sleutelwoord:"Auto's die Mas heeft gehad","Woord 1":"Opel Corsa","Woord 2":"Mitsubishi Colt","Woord 3":"Renault Megane","Woord 4":"Kia Niro"},{Sleutelwoord:"Bijnamen van Lennart","Woord 1":"Snikkelbeer","Woord 2":"Vladimir","Woord 3":"Flikkertie","Woord 4":"Lenniepennie"},{Sleutelwoord:"Mensen die in Mas' ouders huis hebben gekotst","Woord 1":"Demi","Woord 2":"Zeger","Woord 3":"Mas","Woord 4":"Bram"},{Sleutelwoord:"Piercings","Woord 1":"Rook","Woord 2":"Industrial","Woord 3":"Conch ","Woord 4":"Helix"},{Sleutelwoord:"Soja","Woord 1":"Edamame","Woord 2":"Drink","Woord 3":"Allergie","Woord 4":"Tofu"},{Sleutelwoord:"Anticonceptie","Woord 1":"Pil","Woord 2":"Spiraal","Woord 3":"Condoom","Woord 4":"Implanon"},{Sleutelwoord:"Ginger","Woord 1":"Rood haar","Woord 2":"Sproeten","Woord 3":"Geen ziel","Woord 4":"Gember"},{Sleutelwoord:"Hond","Woord 1":"Bruno","Woord 2":"Beertje","Woord 3":"Minne","Woord 4":"Skere"},{Sleutelwoord:"Drankspellen","Woord 1":"Do or drink","Woord 2":"Mijn oom in Vietnam","Woord 3":"Kingsen","Woord 4":"Do or drink"},{Sleutelwoord:"Straat","Woord 1":"Van Heemskerck","Woord 2":"Zwane","Woord 3":"Hendrik","Woord 4":"Folkingedwars"},{Sleutelwoord:"Dansen","Woord 1":"Ballet","Woord 2":"Street","Woord 3":"Buik","Woord 4":"Floss"},{Sleutelwoord:"Bijnamen van Daan","Woord 1":"Pabbe","Woord 2":"Daniël","Woord 3":"Heitie","Woord 4":"Bananiël"},{Sleutelwoord:"Zuivel","Woord 1":"Melk","Woord 2":"Skyr","Woord 3":"Kwark","Woord 4":"Kaas"},{Sleutelwoord:"Club","Woord 1":"Bordeaux","Woord 2":"Senza","Woord 3":"Mate","Woord 4":"Oost"},{Sleutelwoord:"Spritz","Woord 1":"Aperol","Woord 2":"Limoncello","Woord 3":"Amaro","Woord 4":"Sangria"},{Sleutelwoord:"Geo","Woord 1":"61 jaar","Woord 2":"SQL","Woord 3":"Tinder","Woord 4":"Bosnië"},{Sleutelwoord:"Dark Pictures","Woord 1":"Man of Medan","Woord 2":"Little Hope","Woord 3":"House of Ashes","Woord 4":"The Devil in Me"},{Sleutelwoord:"Socki","Woord 1":"Blaffen","Woord 2":"Trillen","Woord 3":"Corina","Woord 4":"Haat Lennart"},{Sleutelwoord:"High School Musical","Woord 1":"Zac Efron","Woord 2":"Zingen","Woord 3":"Drama","Woord 4":"Bob to the Top"},{Sleutelwoord:"2C-B","Woord 1":"Drugs","Woord 2":'"Nee ik zit niet in het spel"',"Woord 3":"Gamen","Woord 4":"Love on the Spectrum"},{Sleutelwoord:"Brillendragers","Woord 1":"Daan ","Woord 2":"Marieke","Woord 3":"Zeger","Woord 4":"Bram"},{Sleutelwoord:"Bailey","Woord 1":"Chihuahua","Woord 2":"Aardappel","Woord 3":"Slechte knieën","Woord 4":"Likken"},{Sleutelwoord:"Pip","Woord 1":"Plumeau","Woord 2":"Roze bandje","Woord 3":"Wit-zwart","Woord 4":"Zacht"},{Sleutelwoord:"Dinkie","Woord 1":"Bruine jenever","Woord 2":"Ginger ale","Woord 3":"Limoen","Woord 4":"IJs"},{Sleutelwoord:"Bal","Woord 1":"Flunky","Woord 2":"Spike","Woord 3":"Zak","Woord 4":"Rond"}],bI=[{Foto:1,vraag:"Wat is er aan de hand op deze foto?",antwoord:"Daan had zijn Swapfiets in de autoparkeergarage gezet en die was dicht na het stappen","":"","Foto 19 en 33 missen":""},{Foto:2,vraag:"[vraag marieke zeger of daan]",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:3,vraag:"[vraag zeger of daan]",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:4,vraag:"René ligt hier tijdens een avondje zuipen lekker te tukken. In welke straat was dit?",antwoord:"Hendrikstraat","":"","Foto 19 en 33 missen":""},{Foto:5,vraag:"Hoe werd de jas in deze outfit genoemd?",antwoord:"De Wapjas","":"","Foto 19 en 33 missen":""},{Foto:6,vraag:"Wat is de eerste tattoo die Mark heeft gezet?",antwoord:"Hart met een = in het midden","":"","Foto 19 en 33 missen":""},{Foto:7,vraag:"Hoe heet deze prachtige dame?",antwoord:"Svetlana","":"","Foto 19 en 33 missen":""},{Foto:8,vraag:"Waar waren Mark en Demi heen geweest toen Mark ongevraagd deze foto maakte?",antwoord:"Amsterdam","":"","Foto 19 en 33 missen":""},{Foto:9,vraag:"Hoeveel gram eiwitten zit er in een bak Skyr van de AH?",antwoord:"11 g per 100 g","":"","Foto 19 en 33 missen":""},{Foto:10,vraag:"Wat is de draagtijd van een gewone zeehond?",antwoord:"10 tot 11 maanden","":"","Foto 19 en 33 missen":""},{Foto:11,vraag:"Waar is deze foto genomen?",antwoord:"Het Bevrijdingsfestival","":"","Foto 19 en 33 missen":""},{Foto:12,vraag:"Waarom is kleine Daan hier zo vreemd gekleed?",antwoord:"Hij is Mini Prins Carnaval","":"","Foto 19 en 33 missen":""},{Foto:13,vraag:"Op welke feestdag is deze foto gemaakt?",antwoord:"Oudjaarsdag / nieuwjaarsdag","":"","Foto 19 en 33 missen":""},{Foto:14,vraag:"Wat gaf het broertje van Zeger aan Zeger als afscheidscadeau?",antwoord:"Hij adte een fles rode wijn","":"","Foto 19 en 33 missen":""},{Foto:15,vraag:"Na welk feestje was Bram zodanig toegetakeld dat hij naar de eerste hulp ging?",antwoord:"Gala van het Hondsrug College","":"","Foto 19 en 33 missen":""},{Foto:16,vraag:"Op welke film zijn deze prachtige kostuums gebaseerd?",antwoord:"Midsommar","":"","Foto 19 en 33 missen":""},{Foto:17,vraag:"",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:18,vraag:"daan",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:20,vraag:"zeger",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:21,vraag:"len",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:22,vraag:"Wat wilde Lennart het allerliefst doen na zijn constitutieborrel?",antwoord:"Uitgaan","":"","Foto 19 en 33 missen":""},{Foto:23,vraag:"mas eef",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:24,vraag:"Mas eef",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:25,vraag:"Wiens tieten heeft Evelyn allemaal aangeraakt?",antwoord:"Daan, Mas, Hester, Lennart","":"","Foto 19 en 33 missen":""},{Foto:26,vraag:"In welke zaal hadden Mas, Bram en Daan dit optreden?",antwoord:"Lola","":"","Foto 19 en 33 missen":""},{Foto:27,vraag:"Wie/wat ging er weg na deze maar komt steeds terug?",antwoord:"Mas zijn haartjes","":"","Foto 19 en 33 missen":""},{Foto:28,vraag:"mas",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:29,vraag:"demi of daan",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:30,vraag:"Waar is deze foto gemaakt?",antwoord:"Club Bordeaux","":"","Foto 19 en 33 missen":""},{Foto:31,vraag:"Welke vloeistof liet Rene op Lennart's broek exploderen?",antwoord:"Bleek","":"","Foto 19 en 33 missen":""},{Foto:32,vraag:"Wat is Mas hier aan het doen?",antwoord:"Dit is niet Mas maar Dylan","":"","Foto 19 en 33 missen":""},{Foto:34,vraag:"Naast zijn muzikale carrière, waar staat deze rapper nog meer bekend om?",antwoord:"Zijn sekstape","":"","Foto 19 en 33 missen":""},{Foto:35,vraag:"Waar is deze foto gemaakt?",antwoord:"Eindhoven (of Faster and Louder)","":"","Foto 19 en 33 missen":""},{Foto:36,vraag:"Wie stellen zich altijd aan tijdens het drinken van een ICE?",antwoord:"Marieke, Demi, Bram","":"","Foto 19 en 33 missen":""},{Foto:37,vraag:"Waarom had Bram hier een hele dure dag beleefd?",antwoord:"Na het laagste klimobstakel was hij er alweer klaar mee","":"","Foto 19 en 33 missen":""},{Foto:38,vraag:"",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:39,vraag:"Mas, zeger",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:40,vraag:"Mark, hes, eef, mas, len",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:41,vraag:"hes, eef",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:42,vraag:"",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:43,vraag:"Rene mas hes mark eef demi len",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:44,vraag:"Wie staan er op deze prachtige foto?",antwoord:"Lennart, demi, mark, hester, bram en marieke","":"","Foto 19 en 33 missen":""},{Foto:45,vraag:"Wat moest iedereen doen op het afscheidsfeestje van Marieke en Zeger?",antwoord:"In hun vriendenboekjes schrijven","":"","Foto 19 en 33 missen":""},{Foto:46,vraag:"Hoe duur was de bucket van de week vroeger in 't Golden Fust?",antwoord:"12,50 EUR","":"","Foto 19 en 33 missen":""},{Foto:47,vraag:"Hoe heet deze hamster en waarom rookt hij een jonko?",antwoord:"Krokante Peter.","":"","Foto 19 en 33 missen":""},{Foto:48,vraag:"Wat dronk Mas vroeger altijd als antikatermiddel?",antwoord:"Roosvicee Multivit","":"","Foto 19 en 33 missen":""},{Foto:49,vraag:"Wie van de squad heeft er allemaal met Mark gezoend?",antwoord:"Bram, Demi, Mas, James","":"","Foto 19 en 33 missen":""},{Foto:50,vraag:"Hoeveel spelletjes hebben Lennart, Daan en Mas samen gekocht?",antwoord:"In totaal 4, inclusief uitbreidingen","":"","Foto 19 en 33 missen":""},{Foto:51,vraag:"Wat was de prijs van een halve liter Pripps Blå? (+-10 cent)",antwoord:1.28,"":"","Foto 19 en 33 missen":""},{Foto:"",vraag:"",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:"",vraag:"",antwoord:"","":"","Foto 19 en 33 missen":""},{Foto:"",vraag:"Welke watervogelsoort is groter dan Demi?",antwoord:"(Australische) Pelikaan","":"","Foto 19 en 33 missen":""}],kI=[{vraag:"Welke video games hebben Daan en Demi allebei in hun Steam library staan?","antwoord 1":"Among Us","antwoord 2":"Baldur's Gate III","antwoord 3":"Borderlands 3","antwoord 4":"Disco Elysium","antwoord 5":"Civilization VI","antwoord 6":"Stardew Valley","antwoord 7":"Terraria","antwoord 8":"Assassin's Creed Odyssey","antwoord 9":"Crusader Kings II","antwoord 10":"Planet Zoo"},{vraag:"Wat zijn de namen van de moeders van de squad?","antwoord 1":"Heleen","antwoord 2":"Denise","antwoord 3":"Ina","antwoord 4":"Petra","antwoord 5":"Mirjam","antwoord 6":"Ida","antwoord 7":"Harma","antwoord 8":"Marcella ","antwoord 9":"Marion","antwoord 10":""},{vraag:"Wat zijn de namen van de vaders van de squad?","antwoord 1":"Roelof","antwoord 2":"Andrew","antwoord 3":"Koert","antwoord 4":"Arie","antwoord 5":"Gert","antwoord 6":"Fokke","antwoord 7":"Fernand","antwoord 8":"Chris","antwoord 9":"Martin","antwoord 10":""},{vraag:"Wie zijn er allemaal naar het Hondsrug College geweest?","antwoord 1":"Mas","antwoord 2":"Daan","antwoord 3":"Lennart","antwoord 4":"Mark","antwoord 5":"Demi","antwoord 6":"Zeger","antwoord 7":"Bram","antwoord 8":"Dennis","antwoord 9":"Dylan","antwoord 10":"Eirini"},{vraag:"Welke uitgaansgelegenheden zijn er nu in Groningen die er ook al waren tijdens onze eerste KEI-week?","antwoord 1":"Warhol","antwoord 2":"Sunny Beach","antwoord 3":"Twister","antwoord 4":"Shooters","antwoord 5":"Het Feest","antwoord 6":"Wolter Wolthers","antwoord 7":"Ocean 41","antwoord 8":"Klein Amsterdam","antwoord 9":"Het Gat van Groningen","antwoord 10":"De Negende Cirkel"},{vraag:"Wat zijn de namen van de huisdieren die mensen in de squad hebben (gehad)?","antwoord 1":"Bailey","antwoord 2":"Pip","antwoord 3":"Cody","antwoord 4":"Poesle","antwoord 5":"Pedro","antwoord 6":"Simba","antwoord 7":"Misty","antwoord 8":"Mini","antwoord 9":"","antwoord 10":""},{vraag:"Hoe heten de zussen van mensen in de squad?","antwoord 1":"Kerstin","antwoord 2":"Britta","antwoord 3":"Jorien","antwoord 4":"Ilse","antwoord 5":"Tessel","antwoord 6":"Lisa","antwoord 7":"Heather","antwoord 8":"Merel","antwoord 9":"Zoë ","antwoord 10":"Puck"},{vraag:"Van welke studie- of studentenverenigingen zijn mensen in de squad lid geweest?","antwoord 1":"Esperia","antwoord 2":"ASCI","antwoord 3":"Clio","antwoord 4":"VIP","antwoord 5":"EPU","antwoord 6":"Unitas","antwoord 7":"Cleopatra","antwoord 8":"Ibn Battuta","antwoord 9":"SOG","antwoord 10":"Societas "},{vraag:"Welke studies zijn er zoal gedaan door mensen in de squad?","antwoord 1":"Psychologie","antwoord 2":"Economie","antwoord 3":"Informatiekunde","antwoord 4":"Europese Talen en Culturen","antwoord 5":"Milieukunde","antwoord 6":"Sociale Geografie","antwoord 7":"Fysiotherapie","antwoord 8":"Religiewetenschappen","antwoord 9":"Bedrijfskunde","antwoord 10":"Pedagogische Wetenschappen"},{vraag:"Welke Halloweenkostuums zijn er over de jaren gedragen door mensen in de squad?","antwoord 1":"Appa","antwoord 2":"Aang","antwoord 3":"Cheerleader","antwoord 4":"Patrick Bateman","antwoord 5":"Lady Gaga","antwoord 6":"Mia Wallace","antwoord 7":"Meerminman","antwoord 8":"Mosseljongen","antwoord 9":"Piraat","antwoord 10":"Haai"},{vraag:"In welke landen is Mark geweest tijdens zijn grote reis naar Oceanië en Azië?","antwoord 1":"Australië","antwoord 2":"Nieuw-Zeeland","antwoord 3":"Vietnam","antwoord 4":"Japan","antwoord 5":"Laos","antwoord 6":"Thailand","antwoord 7":"Indonesië","antwoord 8":"Taiwan","antwoord 9":"Maleisië","antwoord 10":"Tasmanië"},{vraag:"Welke tattoos heeft Mark?","antwoord 1":"Walvis","antwoord 2":"Klavertje vier","antwoord 3":"Sneeuwvlok","antwoord 4":"Simba","antwoord 5":"Wereldkaart","antwoord 6":"Pootafdruk","antwoord 7":"Mannaz rune","antwoord 8":"Hete luchtballon","antwoord 9":"Hart","antwoord 10":"Mandala"},{vraag:"Welke drugs zijn er gedaan door de mensen van de squad?","antwoord 1":"Wiet","antwoord 2":"XTC","antwoord 3":"2C-B","antwoord 4":"Cocaïne","antwoord 5":"3MMC","antwoord 6":"Meth","antwoord 7":"Truffels","antwoord 8":"LSD","antwoord 9":"Benzodiazepine","antwoord 10":"Lachgas"},{vraag:"Welke talen worden er gesproken (op A1 niveau) door mensen van de squad?","antwoord 1":"Nederlands","antwoord 2":"Engels","antwoord 3":"Fries","antwoord 4":"Duits","antwoord 5":"Spaans","antwoord 6":"Italiaans","antwoord 7":"Zweeds","antwoord 8":"Frans","antwoord 9":"Chinees","antwoord 10":"Drents"},{vraag:"Wat waren de namen van de allereerste huisdieren van mensen in de squad?","antwoord 1":"Rocky","antwoord 2":"Nash","antwoord 3":"Speedy","antwoord 4":"Diesel","antwoord 5":"Poekie","antwoord 6":"Humpie","antwoord 7":"Tijgertje","antwoord 8":"Simba","antwoord 9":"Mini","antwoord 10":""},{vraag:"Welke beroepen hebben mensen in de squad?","antwoord 1":"Fysiotherapeut","antwoord 2":"Lerarenopleider","antwoord 3":"Software Engineer","antwoord 4":"Omgevingsmanager","antwoord 5":"Officier","antwoord 6":"Psycholoog","antwoord 7":"Projectingenieur","antwoord 8":"Medewerker Burgerzaken","antwoord 9":"Projectmedewerker","antwoord 10":"Behandelaar Accreditatie"},{vraag:"Wat zijn 10 spiergroepen die men kan trainen in de sportschool?","antwoord 1":"Biceps","antwoord 2":"Triceps","antwoord 3":"Quadriceps","antwoord 4":"Latissimus dorsi","antwoord 5":"Pectorals","antwoord 6":"Deltoids","antwoord 7":"Rhomboids","antwoord 8":"Rectus Abdominis","antwoord 9":"Gluteus Maximus","antwoord 10":"Hamstrings"},{vraag:"Welke programmeertalen ken je?","antwoord 1":"C","antwoord 2":"Python","antwoord 3":"Java","antwoord 4":"C++","antwoord 5":"PHP","antwoord 6":"Javascript","antwoord 7":"Lua","antwoord 8":"C#","antwoord 9":"Rust","antwoord 10":"Go"},{vraag:"Met welke bands heeft Burning allemaal samen opgetreden?","antwoord 1":"Metal bats","antwoord 2":"Sad Iron","antwoord 3":"Plan nine","antwoord 4":"Killers","antwoord 5":"Picture","antwoord 6":"Discordia","antwoord 7":"Helloïse","antwoord 8":"Cobra spell","antwoord 9":"Omen","antwoord 10":"Avenger"},{vraag:"Wat zijn vrouwelijke exen van mensen in de squad?","antwoord 1":"Julia","antwoord 2":"Eva","antwoord 3":"Fleur","antwoord 4":"Birgit","antwoord 5":"Lotte","antwoord 6":"Andrea","antwoord 7":"Demi","antwoord 8":"Ashley","antwoord 9":"Laura","antwoord 10":"Daphne"},{vraag:"Wat zijn beroepen van de ouders van mensen in de squad?","antwoord 1":"Piercer","antwoord 2":"Dierenarts","antwoord 3":"Accountant","antwoord 4":"Belastingadviseur","antwoord 5":"Docent natuurkunde","antwoord 6":"Coördinator Buurthuizen","antwoord 7":"Administratief medewerker","antwoord 8":"","antwoord 9":"","antwoord 10":""},{vraag:"Op welke politieke partijen hebben mensen in de squad gestemd?","antwoord 1":"Forum voor Democratie","antwoord 2":"Partij voor de Dieren","antwoord 3":"D66","antwoord 4":"GroenLinks","antwoord 5":"NSC","antwoord 6":"SP","antwoord 7":"JA21","antwoord 8":"Volt","antwoord 9":"VVD","antwoord 10":"Partij van de Arbeid"},{vraag:"In welke landen buiten Europa is Marieke allemaal geweest?","antwoord 1":"Rusland","antwoord 2":"Taiwan","antwoord 3":"India","antwoord 4":"Vietnam","antwoord 5":"Laos","antwoord 6":"Thailand","antwoord 7":"Canada","antwoord 8":"Verenigde Staten","antwoord 9":"Colombia","antwoord 10":"Marokko"},{vraag:"Bij welke organisaties werken mensen in de squad?","antwoord 1":"Sopra Steria","antwoord 2":"Liander","antwoord 3":"Grunneger Power","antwoord 4":"Hanze Hogeschool","antwoord 5":"Koninklijke Luchtmacht","antwoord 6":"Kenonz","antwoord 7":"NVAO","antwoord 8":"Fitaal Heerenveen","antwoord 9":"Okapi Detachering","antwoord 10":"Italia Groningen"}],SI=[{vraag:"Welke diersoorten zijn aanwezig in het iconische Griendtsveenparkje?","antwoord 1":"Alpaca's","antwoord 2":"Herten","antwoord 3":"Geiten","antwoord 4":"Ezels","antwoord 5":"Konijnen"},{vraag:"Wie zijn de echte Eurovisie-winnaars volgens Hester's playlist?","antwoord 1":"Go_A","antwoord 2":"Joost","antwoord 3":"Verka Serduchka","antwoord 4":"Käärijä","antwoord 5":"Konstrakta"},{vraag:"Hoe heten de D&D karakters van de squad?","antwoord 1":"Valmoira","antwoord 2":"Leeuwenhart","antwoord 3":"Blauwkapje","antwoord 4":"Seraphina the Chaste","antwoord 5":"Jeun Autiste, Earl of Sweatshirt"},{vraag:"Welke memorabele verjaardagscadeaus zijn er binnen de squad uitgewisseld?","antwoord 1":"Lana de opblaaspop","antwoord 2":"Tom Hardy body pillow","antwoord 3":"Drentse weersteen","antwoord 4":"Hamsterterrarium","antwoord 5":"Mega Mark's Anti-Mok Mok"},{vraag:"Wat was de exacte quote van Glas et al. (2019) over traumatische herinneringen?","antwoord 1":"Herinner het","antwoord 2":"Herleef het","antwoord 3":"Iedere dag","antwoord 4":"Leef de trauma","antwoord 5":"Wees je trauma"},{vraag:"Wat zijn de straatnamen van de huidige woonadressen van iedereen in de squad?","antwoord 1":"Coehoornsingel","antwoord 2":"Van Heemskerckstraat","antwoord 3":"Quadoelenweg","antwoord 4":"Elzenlaan","antwoord 5":"Maria Stuartplein"},{vraag:"Welke sporten worden er beoefend door mensen in de squad?","antwoord 1":"Ballet","antwoord 2":"Hockey","antwoord 3":"American Football","antwoord 4":"Fitness","antwoord 5":"Boulderen"},{vraag:"Wat zijn typische kenmerken van een autismespectrumstoornis?","antwoord 1":"Problemen op sociaal gebied","antwoord 2":"Moeite met verandering","antwoord 3":"Dingen te letterlijk nemen","antwoord 4":"Goede detailwaarneming","antwoord 5":"Prikkelgevoeligheid"},{vraag:"Wat zijn al Mas zijn namen?","antwoord 1":"Mas","antwoord 2":"Martin","antwoord 3":"Jeu","antwoord 4":"Roelof","antwoord 5":"Prevoo"},{vraag:"Wat zijn de 5 meest bekende films met Tom Hardy in de cast?","antwoord 1":"Inception","antwoord 2":"Mad Max: Fury Road","antwoord 3":"The Revenant","antwoord 4":"The Dark Knight Rises","antwoord 5":"Venom"},{vraag:"Welke bordspellen doen Mas, Daan en Lennart vaak samen?","antwoord 1":"Spirit Island","antwoord 2":"Kwakzalvers","antwoord 3":"Carcassonne","antwoord 4":"Hansa Teutonica","antwoord 5":"It's A Wonderful World"},{vraag:"Naar welke plekken zijn de squadleden gezamenlijk op vakantie geweest?","antwoord 1":"De Veluwe","antwoord 2":"Brabant","antwoord 3":"Berlijn","antwoord 4":"Lund","antwoord 5":"Frankrijk"},{vraag:"Wie in de squad zijn begonnen aan een studie die ze niet afgemaakt hebben?","antwoord 1":"Daan","antwoord 2":"Lennart","antwoord 3":"Mark","antwoord 4":"Mas","antwoord 5":"Bram"},{vraag:"Wat was James' top 5 muziekartiesten op Spotify in 2024?","antwoord 1":"Lana del Rey","antwoord 2":"The Smashing Pumpkins","antwoord 3":"Orville Peck","antwoord 4":"Rihanna","antwoord 5":"Kate Bush"},{vraag:"Wat was Demi's top 5 muziekartiesten op Spotify in 2024?","antwoord 1":"Charli XCX","antwoord 2":"Caroline Polachek","antwoord 3":"Beyoncé","antwoord 4":"Nicki Minaj","antwoord 5":"Lana del Rey"},{vraag:"Welke opleidingen heeft Rene gevolgd (en voltooid)?","antwoord 1":"Sport en Beweging","antwoord 2":"ALO","antwoord 3":"Pedagogische Wetenschappen","antwoord 4":"Docentopleiding Burgerschap","antwoord 5":"Talentontwikkeling en diversiteit"},{vraag:"Wat zijn de meest gesproken Romaanse talen?","antwoord 1":"Spaans","antwoord 2":"Italiaans","antwoord 3":"Portugees","antwoord 4":"Frans","antwoord 5":"Roemeens"},{vraag:"Wat zijn alle titels in de bekendste boekenreeks van autrice Sarah J. Maas?","antwoord 1":"A Court of Thorns and Roses","antwoord 2":"A Court of Mist and Fury","antwoord 3":"A Court Wings and Ruin","antwoord 4":"A Court of Frost and Starlight","antwoord 5":"A Court of Silver Flames"},{vraag:"Welke mannen van de squad hebben ooit met een andere man gezoend?","antwoord 1":"Mark","antwoord 2":"Mas","antwoord 3":"Daan","antwoord 4":"James","antwoord 5":"Bram"},{vraag:"Wat zijn de namen van de broers van de mensen in de squad?","antwoord 1":"Simon","antwoord 2":"Mel","antwoord 3":"Tom","antwoord 4":"Willem","antwoord 5":"Wessel"},{vraag:"Welke mensen in de squad hebben een master?","antwoord 1":"Demi","antwoord 2":"René","antwoord 3":"Zeger","antwoord 4":"Mark","antwoord 5":"Marieke"},{vraag:"Wie van de squad heeft een bestuursjaar gedaan?","antwoord 1":"Mark","antwoord 2":"Marieke","antwoord 3":"Zeger","antwoord 4":"Hester","antwoord 5":"Bram"},{vraag:"Wat zijn hobby's van Mas?","antwoord 1":"Drummen","antwoord 2":"American Football","antwoord 3":"Wikipedia","antwoord 4":"Gymmen","antwoord 5":"Drugs doen"},{vraag:"Welke tattoos heeft Inge?","antwoord 1":"Kwallen","antwoord 2":"Vlinder","antwoord 3":"Mes","antwoord 4":"Prei","antwoord 5":"Cassettebandje "},{vraag:"Noem momenten waar Evelyn een psychose had.","antwoord 1":'"Mensen uit Niger heten Nigerees"',"antwoord 2":"Lesbische eilanden","antwoord 3":"Sleutels kwijt, Zeger over hek, sleutels in tas","antwoord 4":"Vrijwillig uitgaan in Emmen","antwoord 5":"Onderzetter in de bosjes in de tuin"},{vraag:"Wat zijn de ingrediënten van Lennart's vervloekte studentenmaaltijd?","antwoord 1":"Pasta","antwoord 2":"Gehakt","antwoord 3":"Broccoli","antwoord 4":"Crème fraîche","antwoord 5":"Kipkruiden"},{vraag:"Van welke bands heeft Mas een tattoo?","antwoord 1":"Dio ","antwoord 2":"Iron Maiden ","antwoord 3":"Megadeth","antwoord 4":"Guns 'N Roses","antwoord 5":"Led Zeppelin"},{vraag:"Wat kan je vertellen over Japie de sprinkhaan?","antwoord 1":"Groen","antwoord 2":"Berlijn","antwoord 3":"Terras","antwoord 4":"Viel van Lennart's hoofd","antwoord 5":"Heeft onze groep overleefd"},{vraag:"Wat was Daan's top 5 muziekartiesten in 2023?","antwoord 1":"Gojira","antwoord 2":"Airbourne","antwoord 3":"ZZ Top","antwoord 4":"TOOL","antwoord 5":"Metallica"},{vraag:"Wat was de top 5 muziekartiesten van Hester en Mas in 2023?","antwoord 1":"Kendrick Lamar","antwoord 2":"Tyler, The Creator","antwoord 3":"Thundercat","antwoord 4":"Frank Ocean","antwoord 5":"Burzum"},{vraag:"Wat was de top 5 muziekartiesten van Bram in 2022?","antwoord 1":"FIDLAR","antwoord 2":"Gojira","antwoord 3":"Daddy Issues","antwoord 4":"100 gecs","antwoord 5":"Hang Youth"},{vraag:"Voor welke organisaties heeft Demi gewerkt?","antwoord 1":"INTER-PSY","antwoord 2":"HSK","antwoord 3":"GGZ Friesland","antwoord 4":"Humanitas","antwoord 5":"TranscriptieOnline"},{vraag:"Wat zijn mannelijke exen van mensen in de squad?","antwoord 1":"Bart","antwoord 2":"Tim","antwoord 3":"Joran","antwoord 4":"Doug","antwoord 5":"Mark"},{vraag:"Welke spellen hebben Daan en Eef thuis?","antwoord 1":"Do or Drink","antwoord 2":"Burke's Gambit","antwoord 3":"Verboden Eiland","antwoord 4":"Twister","antwoord 5":"Similo"},{vraag:"Bij welke sportscholen hebben mensen van de squad een abonnement (gehad)?","antwoord 1":"BasicFit","antwoord 2":"Push & Pull","antwoord 3":"ProFit","antwoord 4":"Levels Emmen","antwoord 5":""},{vraag:"Welke kleur All Stars heeft Hester?","antwoord 1":"Zwart","antwoord 2":"Zwart","antwoord 3":"Wit","antwoord 4":"Grijs","antwoord 5":"Blauw"},{vraag:"Wat weet je van het Great Barrier Reef?","antwoord 1":"Koraalrif","antwoord 2":"Australie","antwoord 3":"Grootste ter wereld","antwoord 4":"348,700 km²","antwoord 5":"Bedreigd"},{vraag:"Wat weet je van de Love Parade?","antwoord 1":"Berlijn","antwoord 2":"EDM Festival","antwoord 3":"Liefde vieren","antwoord 4":"Verdrukking","antwoord 5":"Meet Her At The Love Parade"},{vraag:"Wat weet je van Henk Wijngaard?","antwoord 1":"Zanger","antwoord 2":"Met de vlam in de pijp","antwoord 3":"Stadskanaal","antwoord 4":"Vrachtwagenchauffeur","antwoord 5":"Beun de beunhaas"},{vraag:"Wat weet je van Hang Youth?","antwoord 1":"Band","antwoord 2":"Punk","antwoord 3":"Amsterdam","antwoord 4":"Abel van Gijlswijk","antwoord 5":"Belastingdienst"},{vraag:"Wat weet je van Kanye West?","antwoord 1":"Rapper","antwoord 2":"Chicago","antwoord 3":"Niggas in Paris","antwoord 4":"Controversieel","antwoord 5":"Kim Kardashian"},{vraag:"Wat weet je van fascisme?","antwoord 1":"Autoritair nationalisme","antwoord 2":"Extreem rechts","antwoord 3":"Oorsprong in Italie","antwoord 4":"Adolf Hitler","antwoord 5":"Antidemocratisch"},{vraag:"Wat weet je van draaiorgels?","antwoord 1":"Automatisch spelend pijporgel","antwoord 2":"Orgelboek","antwoord 3":"Zwanestraat","antwoord 4":"Mansbakje","antwoord 5":"Wim Zonneveld"},{vraag:"Wat weet je van Paradigm?","antwoord 1":"Suikerunie","antwoord 2":"Technofeest","antwoord 3":"Flesjes water","antwoord 4":"Festival","antwoord 5":"Niemand doet drugs :)"},{vraag:"Wat doen we in het Noorderplantsoen?","antwoord 1":"Balletje gooien","antwoord 2":"Drinken","antwoord 3":"Hondjes aaien","antwoord 4":"Zonnen","antwoord 5":"Muziek luisteren"},{vraag:"Wat weet je over Cobra Spell?","antwoord 1":"Metalband","antwoord 2":"Sonia Anubis","antwoord 3":"Hoofdprogramma","antwoord 4":"Altijd ruzie","antwoord 5":"Album 666"},{vraag:"Wat zijn de ingredienten van bier?","antwoord 1":"Water","antwoord 2":"Granen","antwoord 3":"Hop","antwoord 4":"Gist","antwoord 5":"Mout"},{vraag:"Wat zijn de 5 meest bekende meubels van IKEA?","antwoord 1":"BILLY","antwoord 2":"LACK","antwoord 3":"KALLAX","antwoord 4":"MALM","antwoord 5":"PAX"},{vraag:"Wat zijn de ingrediënten voor een esma?","antwoord 1":"Koffielikeur","antwoord 2":"Wodka","antwoord 3":"Espresso","antwoord 4":"Suikersiroop","antwoord 5":"Koffiebonen"},{vraag:"Wat zijn de ingrediënten van pesto?","antwoord 1":"Basilicum","antwoord 2":"Pijnboompitten","antwoord 3":"Parmesaanse kaas","antwoord 4":"Olijfolie","antwoord 5":"Citroensap"}],RI={369:JSON.parse(`[{"vraag":"Wat is James' volledige naam?","antwoord":"James Andrew Stuart Cartman"},{"vraag":"Wat is Daan's tweede naam?","antwoord":"Maurits"},{"vraag":"Wat is Lennart's tweede naam?","antwoord":"Albert"},{"vraag":"Wat is Inge's tweede naam?","antwoord":"Kristine"},{"vraag":"Wat is Zeger's tweede naam?","antwoord":"Franciscus"},{"vraag":"Wat is het sterrenbeeld van Demi?","antwoord":"Maagd"},{"vraag":"Wat is het sterrenbeeld van Hester?","antwoord":"Stier"},{"vraag":"Wat is het sterrenbeeld van Mas?","antwoord":"Weegschaal"},{"vraag":"Wat is het sterrenbeeld van Daan?","antwoord":"Stier"},{"vraag":"Wat is het sterrenbeeld van Bram?","antwoord":"Leeuw"},{"vraag":"Wat is het sterrenbeeld van Evelyn?","antwoord":"Maagd"},{"vraag":"Wat is het sterrenbeeld van Inge?","antwoord":"Waterman"},{"vraag":"Wat is het sterrenbeeld van James?","antwoord":"Ram"},{"vraag":"Wat is het sterrenbeeld van Len?","antwoord":"Kreeft"},{"vraag":"Wat is het sterrenbeeld van Marieke","antwoord":"Vissen"},{"vraag":"Wat is het sterrenbeeld van Mark?","antwoord":"Tweeling"},{"vraag":"Wat is het sterrenbeeld van René?","antwoord":"Maagd"},{"vraag":"Wat is het sterrenbeeld van Zeger?","antwoord":"Waterman"},{"vraag":"Wat heeft Demi gestudeerd?","antwoord":"Psychologie"},{"vraag":"Wat heeft Hester gestudeerd?","antwoord":"Milieukunde"},{"vraag":"Wat heeft Mas gestudeerd?","antwoord":"Bedrijfskunde"},{"vraag":"Wat heeft Daan gestudeerd?","antwoord":"Sociale Geografie & Planologie"},{"vraag":"Wat heeft Evelyn gestudeerd?","antwoord":"Fysiotherapie"},{"vraag":"Wat studeert Inge?","antwoord":"Sociologie"},{"vraag":"Wat heeft James gestudeerd?","antwoord":"Economie"},{"vraag":"Wat heeft Lennart gestudeerd?","antwoord":"Informatiekunde"},{"vraag":"Wat heeft Marieke gestudeerd?","antwoord":"Theologie"},{"vraag":"Wat heeft Mark gestudeerd?","antwoord":"Europese Talen en Culturen"},{"vraag":"Wat heeft René gestudeerd?","antwoord":"Pedagogische Wetenschappen"},{"vraag":"Wat heeft Zeger gestudeerd?","antwoord":"International Relations and International Organization"},{"vraag":"Wat is de volledige naam van Demi's masteropleiding?","antwoord":"Clinical Forensic Psychology & Victimology"},{"vraag":"Welke master heeft Mark gedaan?","antwoord":"Neurolinguïstiek"},{"vraag":"In welke plaats is Demi opgegroeid?","antwoord":"Nieuw-Amsterdam"},{"vraag":"In welke plaats is Hester opgegroeid?","antwoord":"Groningen"},{"vraag":"In welke plaats is Mas opgegroeid?","antwoord":"Erica"},{"vraag":"In welke plaats is Daan opgegroeid?","antwoord":"Barger-Oosterveld"},{"vraag":"In welke plaats is Evelyn opgegroeid?","antwoord":"Langswaegen"},{"vraag":"In welke plaats is James opgegroeid?","antwoord":"Londen"},{"vraag":"In welke plaats is Lennart opgegroeid?","antwoord":"Emmen"},{"vraag":"In welke plaats is Mark opgegroeid?","antwoord":"Klazienaveen"},{"vraag":"In welke plaats is René opgegroeid?","antwoord":"Klazienaveen"},{"vraag":"In welke plaats is Inge opgegroeid?","antwoord":"Deventer"},{"vraag":"In welke plaats is Zeger opgegroeid?","antwoord":"Ter Apel"},{"vraag":"Wie heeft de meeste broers en/of zussen?","antwoord":"James"},{"vraag":"Wat was Evelyn's favoriete schoolvak vroeger?","antwoord":"Knutselen"},{"vraag":"Wat was James' favoriete schoolvak vroeger?","antwoord":"Engels"},{"vraag":"Naar welke middelbare school is James geweest?","antwoord":"Nower Hill High School"},{"vraag":"Wie van de squad mist een zintuig?","antwoord":"Mark"},{"vraag":"Wie van de squad heeft de meeste landen bezocht?","antwoord":"Mark"},{"vraag":"Wat is Mark's favoriete alcoholische drank?","antwoord":"Limoncello Spritz"},{"vraag":"Wat is James' favoriete shot?","antwoord":"Tequila"},{"vraag":"Wat is Demi's favoriete alcoholische drank?","antwoord":"Apple Bandits"},{"vraag":"Wat is Lennart's favoriete drinken?","antwoord":"Melk"},{"vraag":"Wie deed de befaamde advocaatad?","antwoord":"Mas"},{"vraag":"Met welk nummer maakte René ons elke ochtend wakker op de Veluwe?","antwoord":"SHUM - Go_A"},{"vraag":"Welke film keken we toen we er voor de eerste keer wietbrownies gegeten werden op de Veluwe?","antwoord":"Rocketman"},{"vraag":"Wie hebben er op de Veluwe gesnoept van de wietbrownies?","antwoord":"Demi, Mas, Lennart, Marieke"},{"vraag":"Wie heeft een ernstig geval van niet-gediagnosticeerde dyslexie?","antwoord":"Daan"},{"vraag":"Wie hebben er gekotst van de wietbrownies in Brabant?","antwoord":"Mas en Daan"},{"vraag":"Wie heeft er ooit terwijl diegene in de badkuip van Mas zijn ouders was, eruit gekotst?","antwoord":"Zeger"},{"vraag":"Welke gefrituurde snack heeft Mark ooit een aantal dagen in zijn jaszak laten zitten?","antwoord":"Eierbal"},{"vraag":"Wie is Demi's celebrity crush?","antwoord":"Tom Hardy"},{"vraag":"Hoe heet de bar waar Mark en James elkaar hebben ontmoet?","antwoord":"Boodle Beasley"},{"vraag":"In welke plaats hebben Mark en James elkaar ontmoet?","antwoord":"Hobart"},{"vraag":"Hoe is de sekspop die Zeger voor zijn verjaardag kreeg vermoedelijk aan haar einde gekomen?","antwoord":"Jeffrey ontvoerde haar in zijn busje"},{"vraag":"Welke Pokémon heeft Mark op zijn been getatoeëerd? ","antwoord":"Mimikyu"},{"vraag":"Hoe heet de zuurdesembakkerij van Zeger's moeder?","antwoord":"Berkenstein bakt"},{"vraag":"In welk jaar was het eerste Halloweenfeestje van de squad?","antwoord":"In 2021"},{"vraag":"Hoe heet het parkje vlakbij Erica waar je o.a. herten, alpaca's, ezels en schapen kan voeren?","antwoord":"Het Griendtsveenparkje"},{"vraag":"Welk dialect spreekt men in Oosterwolde?","antwoord":"Stellingwerfs"},{"vraag":"Uit welk land kwam de bal die Lennart is kwijtgeraakt in de Huttenheugte?","antwoord":"Malta"},{"vraag":"Wat is James' Instagram handle?","antwoord":"hansfizzlebeef"},{"vraag":"Hoe heet de 61-jarige man die Daan had versierd via Demi's Tinder account?","antwoord":"Geo"},{"vraag":"Wat was Lennart aan het eten toen René bij Corpus den Hoorn een bal op hem gooide?","antwoord":"Ongezouten pinda's"},{"vraag":"Wie in de squad heeft de meeste tattoo's?","antwoord":"Mark"},{"vraag":"Wat is Mas' favoriete tattoo?","antwoord":"Guns N' Roses tattoo op onderarm"},{"vraag":"Wat was James' eerste tattoo?","antwoord":"Handen op rechteronderarm"},{"vraag":"Van welke band heeft James een tattoo?","antwoord":"Weezer"},{"vraag":"Wat is Daan's guilty pleasure?","antwoord":"Just Dance doen met Evelyn"},{"vraag":"Wat is Jame's guilty pleasure?","antwoord":"Thuis scheten laten omdat Mark ze toch niet ruikt"},{"vraag":"Op welke politica had Zeger een flinke crush?","antwoord":"Sigrid Kaag "},{"vraag":"Wat wil Evelyn altijd heel graag doen als ze iets te veel gedronken heeft?","antwoord":"Geheimen vertellen"},{"vraag":"Hoe heet de middelbare school waar een groot deel van de squadleden elkaar ontmoet hebben?","antwoord":"Hondsrug College"},{"vraag":"Hoe heet het drankje met ginger ale en jenever dat weleens besteld wordt door de squad in de Warhol?","antwoord":"Dinkie"},{"vraag":"Wie van de squad vertoont kleptomane trekjes door dingen uit bars en restaurants te stelen?","antwoord":"Mark"},{"vraag":"Van welk Disney-karakter heeft Mark een tattoo?","antwoord":"Simba"},{"vraag":"Wat is de echte naam van Bipp, de kat die dagelijks bij Lennart en Demi inbreekt?","antwoord":"Murphy"},{"vraag":"Hoe gaat de eerste kat van Mark en James heten?","antwoord":"Morbius"},{"vraag":"Wat is het eerste instrument dat Daan ooit gespeeld heeft?","antwoord":"Trombone"},{"vraag":"Van wie is deze uitspraak: \\"Eem op 't ruggie leg'n en kuttie kiek'n.\\"?","antwoord":"Jeffrey de Jong"},{"vraag":"Wie van de squad heeft er eens ingebroken bij Wildlands?","antwoord":"Lennart"},{"vraag":"Wie is ooit zijn/haar hamster kwijtgeraakt in huis voor een paar weken waarna de hamster werd teruggevonden?","antwoord":"Evelyn"},{"vraag":"Wie is ooit zijn/haar hamster buiten kwijtgeraakt voor een paar dagen waarna de hamster werd teruggevonden?","antwoord":"Demi"},{"vraag":"Demi's hamsters kregen allemaal een variatie op deze naam:","antwoord":"(Krokante) Peter"},{"vraag":"Wat is 'Krokante Peter' in het Pools?","antwoord":"Chrupiący Piotruś"},{"vraag":"Wat is 'Krokante Peter' in het Spaans?","antwoord":"Pedro Crujiente"},{"vraag":"Wat is Evelyn's favoriete TV-serie?","antwoord":"Mad Men"},{"vraag":"Wat is de engste film die Daan ooit gezien heeft?","antwoord":"Hereditary"},{"vraag":"Wat is James' favoriete video game?","antwoord":"Skyrim"},{"vraag":"Wat is Daan's favoriete video game?","antwoord":"Mount & Blade"},{"vraag":"Wie is Evelyn's favoriete muziekartiest?","antwoord":"Lady Gaga"},{"vraag":"Wat is James' favoriete TV-serie?","antwoord":"Sex & The City"},{"vraag":"Wat wilde Evelyn als kind graag worden?","antwoord":"Ballerina"},{"vraag":"Wat wilde Hester als kind graag worden?","antwoord":"Juf"},{"vraag":"Wat wilde James als kind graag worden?","antwoord":"Lollipop man"},{"vraag":"Wat wilde Daan als kind graag worden?","antwoord":"Dokter"},{"vraag":"Wat wilde Demi als kind graag worden?","antwoord":"Dierenarts"},{"vraag":"Met welke motorbende waren Mark en Demi aan het chillen in de Sunny Beach?","antwoord":"Satudarah"},{"vraag":"In welke programmeertaal werkt Lennart?","antwoord":"Python"},{"vraag":"Wie van de squad heeft een vet adequaat mondje?","antwoord":"Lennart"},{"vraag":"Wie van de squad staat bekend om zijn vrouwenlipjes?","antwoord":"Daan"},{"vraag":"Wie wordt door alcohol altijd zo'n gekke flirthoer?","antwoord":"Evelyn"},{"vraag":"Van wie is deze uitspraak: \\"Het is pas autistisch als het uit de Franse regio Autisme komt, anders is het gewoon dom zijn met bubbels.\\"?","antwoord":"Lennart"},{"vraag":"Waar hadden Ina en Fleur het over in de wok waardoor Lennart 113 wilde bellen?","antwoord":"Buttplay"},{"vraag":"Welke dieren zijn enorme neukmachines volgens Evelyn?","antwoord":"Cavia's"},{"vraag":"Waar kwam Daan's seksueel agressieve Tinder date vandaan?","antwoord":"Curaçao"},{"vraag":"Wie van de squad heeft er ooit in een videoclip gezeten?","antwoord":"Hester"},{"vraag":"Wie van de squad heeft er ooit een bakwedstrijd gewonnen?","antwoord":"Hester"},{"vraag":"Naar welke plaats in Duitsland zijn Lennart en Zeger geweest voor een muziekfestival?","antwoord":"Leipzig"},{"vraag":"Hoe heette Bram toen hij naar Faster & Louder ging?","antwoord":"Dildo Hanenbergh"},{"vraag":"Wie heeft er seks gehad in de Primark?","antwoord":"René"},{"vraag":"Wie hebben er seks gehad in een fastfood restaurant?","antwoord":"Marieke en Zeger"},{"vraag":"Wie is de slechtste winnaar?","antwoord":"Daan"},{"vraag":"Wie van de squad heeft een diploma varkens masseren?","antwoord":"Demi"},{"vraag":"Hoe heette de kroeg naast het huis van Mas zijn ouders?","antwoord":"The Spot"},{"vraag":"Wie heeft er over twee mensen tegelijkertjd heen gekotst?","antwoord":"Demi"},{"vraag":"Welke vrouw heeft er met de meeste vrouwen gezoend?","antwoord":"Hester"},{"vraag":"Wie van de squad heeft de meeste boetes gekregen door rijden?","antwoord":"Mas"},{"vraag":"Wat werd er van het VVV-gebouw afgegooid?","antwoord":"Lennart's televisie"},{"vraag":"Waar belande Brams fiets voor het stappen?","antwoord":"In de bosjes "},{"vraag":"Waar werd Bram aangehouden door de politie omdat hij op de snelweg fietste?","antwoord":"Haren"},{"vraag":"Welke film keken Lennart, Daan, Mas, Hester en Evelyn toen ze aan de 2C-B zaten?","antwoord":"Easy Rider"},{"vraag":"Welke leden van de squad zijn samen naar de basisschool geweest?","antwoord":"Lennart en Bram"},{"vraag":"Wie heeft de naam van een huisdier op zijn/haar knie getattoeerd? ","antwoord":"Mas"},{"vraag":"Wie haalt soms het beste en soms het slechtste in Lennart naar boven?","antwoord":"René"},{"vraag":"Welk vunzige boek over vampieren, weerwolven en knotting was Demi aan het lezen in Den Haag?","antwoord":"Bride"},{"vraag":"Welke ingrediënten bevat Lennart's nare shake?","antwoord":"Pindakaas, melk en havermout"},{"vraag":"Welke ingrediënten bevat Mas' bak vogelvoer?","antwoord":"Sojadrink, whey, brinta, lijnzaad, chiazaad"},{"vraag":"Wie in de squad hebben er geschiedenis gestudeerd en niet afgemaakt?","antwoord":"Daan en Inge"},{"vraag":"Van welk kinderprogramma zingen Mark en Demi altijd de theme song, tot grote ergernis van Lennart?","antwoord":"Wayside"},{"vraag":"Welke celebrities heeft James op The Sims gemaakt en hebben daar nu een relatie?","antwoord":"Fred Durst en Guy Fieri"},{"vraag":"Welke miljardair zou James redden van de revolutie?","antwoord":"Rihanna"},{"vraag":"Wie van de squad haat elke niet-gele kaas?","antwoord":"Daan"},{"vraag":"Wie heeft als hobby Marktplaats en kringloopwinkels afspeuren?","antwoord":"Hester"},{"vraag":"Wat dacht Mark dat het woord 'tarrel' betekende?","antwoord":"Hagelslag"},{"vraag":"Wat vindt Zeger de mooiste kist?","antwoord":"Sukhoi 35-M"},{"vraag":"Hoe heet het modemerk waar Evelyn veel te veel geld aan besteedt?","antwoord":"Rouje"},{"vraag":"In welk café viel Mark op de middelbare school in slaap op een bankje?","antwoord":"Het Eurocafe"},{"vraag":"Welke artiest luisterde Zeger toen hij in slaap viel op zijn telefoon waardoor Lennart niet kon slapen?","antwoord":"Bruce Springsteen"},{"vraag":"Wat moet je volgens Mas naar eendjes gooien?","antwoord":"LSD"},{"vraag":"Welke schattige dierenfiguurtjes verzamelt Evelyn?","antwoord":"Sylvanian Families"}]`),openDeur:II,puzzel:AI,fotoRonde:bI,ingelijst:kI,finale:SI},PI=()=>{const n=ws(Is,"gameState","currentState");pI(n,e=>{if(e.exists()){const t=e.data();Er.set(t.currentPlayers),As.set(t.playersThisRound),EI.set(t.playersNextRound),yg.set(t.currentCategory),Eg.set(t.currentCategoryPhase),Tg.set(t.currentQuestion),TI.set(t.questionHistory),Ig.set(t.questionNr369),Fl.set(t.isPlayer1sTurn)}})},CI=async(n,e)=>{const t=ws(Is,"gameState","currentState");await xl(t,{[n]:vI(e)})},Fa=async(n,e)=>{const t=ws(Is,"gameState","currentState");e&&await xl(t,{[n]:wI(e)})},me=async(n,e)=>{const t=ws(Is,"gameState","currentState");await xl(t,{[n]:e})},DI=n=>{const e=RI[n];return e[Math.floor(Math.random()*e.length)]},VI=(n,e)=>{const t=da(Er),r=[{name:da(Er)[0].name,score:e?t[0].score+n:t[0].score},{name:t[1].name,score:e?t[1].score:t[1].score+n}];me("currentPlayers",r)};var NI=_e("<button>Begin</button>"),MI=_e('<div><h1 class="font-bold">Ronde 3-6-9</h1> <p>Deze ronde bestaat uit 9 open vragen. Beide tellers starten op 60 seconden. De juiste antwoorden op de vragen 3, 6 en 9 leveren 20 seconden op. Is je antwoord fout of pas je de vraag? Dan gaat de beurt naar de tegenspeler. In het balkje bovenin zie je hoeveel tijd je hebt om de vraag te beantwoorden. <!></p></div>');function OI(n,e){Wn(e,!1);const[t,r]=To(),o=()=>ze(qi,"$isController",t),i=()=>{me("currentCategoryPhase","preShow")};kr();var a=MI(),l=Z(ne(a),2),c=Z(ne(l));{var d=f=>{var p=NI();ot("click",p,i),ue(f,p)};Je(c,f=>{o()&&f(d)})}ue(n,a),jn(),r()}function LI(n){return n===1?n:1-Math.pow(2,-10*n)}var xI=_e('<div class="flex gap-4 mt-3 items-center justify-center space-y-4"><div class="text-2xl md:text-6xl mb-0 text-black font-bold h-10 md:h-16 flex items-center justify-center w-50 md:w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg"> </div> <span class="font-bold text-xl mb-0 text-white">tegen</span> <div class="text-2xl md:text-6xl text-black font-bold h-10 md:h-16 flex items-center justify-center w-50 md:w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg"> </div></div>');function FI(n,e){Wn(e,!1);const[t,r]=To(),o=()=>ze(As,"$playersThisRound",t),i=()=>ze(Er,"$currentPlayers",t);let a=o().map(Q=>Q.name).concat(i().map(Q=>Q.name)),l=Lt(""),c=Lt(""),d=!1,f,p=1e4,v=Qu(e,"targetName1",8),I=Qu(e,"targetName2",8),S;function D(){if(d)return;d=!0,S=Date.now();let Q=0;function X(){Q=Date.now()-S;let E=Q/p;if(E>=1){clearInterval(f),le(l,v()),le(c,I()),d=!1;return}let m=LI(E),_=50+100*m*m;le(l,a[Math.floor(Math.random()*a.length)]),le(c,a[Math.floor(Math.random()*a.length)]),clearInterval(f),f=setInterval(X,_)}X()}Eo(()=>{D()}),kr();var P=xI(),N=ne(P),L=ne(N),O=Z(N,4),z=ne(O);_t(()=>{He(L,G(l)),He(z,G(c))}),ue(n,P),jn(),r()}var WI=_e('<div class="flex justify-between mb-12"><div><p> </p><p> </p></div> <div><p> </p><p> </p></div></div>');function Eh(n,e){Wn(e,!1);const[t,r]=To(),o=()=>ze(Er,"$currentPlayers",t),i=()=>ze(Fl,"$isPlayer1sTurn",t);kr();var a=ha(),l=ut(a);{var c=d=>{var f=WI(),p=ne(f),v=ne(p),I=ne(v),S=Z(v),D=ne(S),P=Z(p,2),N=ne(P),L=ne(N),O=Z(N),z=ne(O);_t(()=>{qu(p,1,`${(i()?"font-bold text-white":"")??""} text-gray-300 text-3xl`),He(I,o()[0].name),He(D,o()[0].score),qu(P,1,`${(i()?"":"font-bold text-white")??""} text-gray-300 text-3xl`),He(L,o()[1].name),He(z,o()[1].score)}),ue(d,f)};Je(l,d=>{o()&&d(c)})}ue(n,a),jn(),r()}var jI=_e('<p class="sm:text-2xl"> </p>');function UI(n,e){Wn(e,!1);let t=Lt(20),r;const o=pm(),i=()=>{clearInterval(r),le(t,20),r=setInterval(()=>{G(t)>0?le(t,G(t)-1):clearInterval(r)},1e3)},a=()=>{clearInterval(r)};fm(()=>{a()}),Eo(()=>{i()}),Hh(()=>G(t),()=>{G(t)===0&&(console.log("0 from timer"),o("timeOut"))}),qh(),kr();var l=jI(),c=ne(l);return _t(()=>He(c,G(t))),ue(n,l),$u(e,"startTimer",i),$u(e,"stopTimer",a),jn({startTimer:i,stopTimer:a})}var BI=_e('<p class="text-xl md:text-4xl font-bold"> </p> <p class="text-xl md:text-3xl"> </p> <button class="text-white">Toon de vraag</button>',1),zI=_e('<!> <p class="text-xl mb-2"> </p> <!>',1),HI=_e('<p class="text-xl md:text-3xl"> </p> <button>Goed</button> <button>Fout/Pas</button>',1),qI=_e('<!> <p class="text-xl mb-2"> </p> <p class="text-xl md:text-4xl font-bold"> </p> <!> <!>',1),$I=_e('<button class="text-white">Naar uitleg</button>'),GI=_e("<!> <!>",1),KI=_e('<p class="font-bold flex text-2xl sm:text-5xl mb-32 justify-center items-center">de <span><img class="w-12 h-12 sm:w-24 sm:h-24" src="/src/assets/logo.svg" alt="logo"></span> domste men <span>s</span></p> <!>',1);function QI(n,e){Wn(e,!1);const[t,r]=To(),o=()=>ze(Eg,"$currentCategoryPhase",t),i=()=>ze(Fl,"$isPlayer1sTurn",t),a=()=>ze(As,"$playersThisRound",t),l=()=>ze(Ig,"$questionNr369",t),c=()=>ze(Er,"$currentPlayers",t),d=()=>ze(qi,"$isController",t),f=()=>ze(Tg,"$currentQuestion",t);let p=Lt();const v=()=>{if(a().length==2)me("currentPlayers",[{name:a()[0].name,score:60},{name:a()[1].name,score:60}]),me("playersThisRound",[]);else if(a().length==1)console.error("Only one player left, this is not supposed to happen!!");else{let _=a().sort(()=>.5-Math.random());me("currentPlayers",_.slice(0,2)),Fa("playersThisRound",_[0]),Fa("playersThisRound",_[1])}},I=()=>{G(p).stopTimer(),(l()===3||l()===6||l()===9)&&VI(10,i()),l()<=12&&(me("questionNr369",l()+1),me("currentCategoryPhase","preShow"),N())},S=()=>{console.log("wrong"),l()<=11&&(P()||me("isPlayer1sTurn",!i()),D()||(me("currentCategoryPhase","preShow"),N(),me("questionNr369",l()+1)))},D=()=>i()&&l()%2!==0?!0:!i()&&l()%2===0,P=()=>i()&&l()%2===0?!0:!i()&&l()%2!==0,N=()=>{const _=DI("369");me("currentQuestion",_)},L=()=>{me("currentCategoryPhase","show")};Eo(()=>{v(),me("questionNr369",1),me("isPlayer1sTurn",!0),N()}),Hh(()=>(o(),i(),G(p)),()=>{var _;o()==="show"&&(i()||!i())&&((_=G(p))==null||_.startTimer())}),qh(),kr();var O=KI(),z=ut(O),Q=Z(ne(z),3),X=Z(z,2);{var E=_=>{OI(_,{})},m=(_,y)=>{{var T=w=>{var ve=zI(),We=ut(ve);Eh(We,{});var at=Z(We,2),se=ne(at),we=Z(at,2);{var $e=Pe=>{var Ye=BI(),ye=ut(Ye),Y=ne(ye),Ge=Z(ye,2),ge=ne(Ge),Ce=Z(Ge,2);_t(()=>{He(Y,f().vraag),He(ge,`Antwoord: ${f().antwoord??""}`)}),ot("click",Ce,L),ue(Pe,Ye)};Je(we,Pe=>{d()&&Pe($e)})}_t(()=>{var Pe,Ye;return He(se,`Vraag ${l()??""}, voor ${(i()?(Pe=c()[0])==null?void 0:Pe.name:(Ye=c()[1])==null?void 0:Ye.name)??""}:`)}),ue(w,ve)},b=(w,ve)=>{{var We=se=>{var we=qI(),$e=ut(we);Eh($e,{});var Pe=Z($e,2),Ye=ne(Pe),ye=Z(Pe,2),Y=ne(ye),Ge=Z(ye,2);dm(UI(Ge,{$$events:{timeOut:S},$$legacy:!0}),Ze=>le(p,Ze),()=>G(p));var ge=Z(Ge,2);{var Ce=Ze=>{var wn=HI(),Hn=ut(wn),kt=ne(Hn),St=Z(Hn,2),yn=Z(St,2);_t(()=>He(kt,`Antwoord: ${f().antwoord??""}`)),ot("click",St,I),ot("click",yn,S),ue(Ze,wn)};Je(ge,Ze=>{d()&&Ze(Ce)})}_t(()=>{He(Ye,`Vraag ${l()??""}, voor ${(i()?c()[0].name:c()[1].name)??""}:`),He(Y,f().vraag)}),ue(se,we)},at=se=>{var we=GI(),$e=ut(we);{var Pe=Y=>{const Ge=vi(()=>{var Ce;return(Ce=c()[0])==null?void 0:Ce.name}),ge=vi(()=>{var Ce;return(Ce=c()[1])==null?void 0:Ce.name});FI(Y,{get targetName1(){return G(Ge)},get targetName2(){return G(ge)}})};Je($e,Y=>{c()&&Y(Pe)})}var Ye=Z($e,2);{var ye=Y=>{var Ge=$I();ot("click",Ge,()=>me("currentCategoryPhase","uitleg")),ue(Y,Ge)};Je(Ye,Y=>{d()&&Y(ye)})}ue(se,we)};Je(w,se=>{o()==="show"?se(We):se(at,!1)},ve)}};Je(_,w=>{o()==="preShow"?w(T):w(b,!1)},y)}};Je(X,_=>{o()==="uitleg"?_(E):_(m,!1)})}ot("click",Q,()=>me("currentCategory",0)),ue(n,O),jn(),r()}var JI=_e("<p>Loading...</p>"),XI=_e('<div class="flex gap-4 justify-center mb-1"><li> </li><span class="font-bold  px-1 bg-black text-white cursor-pointer">X</span></div>'),YI=_e('<div class="p-10"><div><p class="font-bold">Spelers:</p> <ul></ul></div> <input class="bg-white p-2 rounded text-black my-2"> <button class="text-white">Speler toevoegen</button></div> <button class="text-white">Start de quiz</button>',1),ZI=_e('<h1 class="mt-30 font-bold">wachten op de quizmaster...</h1>'),eA=_e('<p class="font-bold flex text-2xl sm:text-5xl justify-center items-center">de <span><img class="w-12 h-12 sm:w-24 sm:h-24" src="/src/assets/logo.svg" alt="logo"></span> domste mens</p> <div class="mb-4"><p class="text-xl mt-12 ">Voor wie is dit scherm?</p> <select><option>Scherm voor de spelers</option><option>Scherm voor de quizmaster</option></select></div> <!> <p class="mt-30"> </p> <button>uitloggen</button>',1),tA=_e('<button class="text-white">Reset categorie</button>'),nA=_e("<button>Login with Google</button>"),rA=_e("<main><!></main>");function oA(n,e){Wn(e,!1);const[t,r]=To(),o=()=>ze(yg,"$currentCategory",t),i=()=>ze(qi,"$isController",t),a=()=>ze(As,"$playersThisRound",t);let l=Lt(null),c=Lt(!0),d=Lt("");const f=async()=>{const O=new Ct;try{const z=await uw(oa,O);le(l,z.user),console.log("Logged in as:",G(l).displayName)}catch(z){console.error(z)}},p=async()=>{try{await zv(oa),le(l,null)}catch(O){console.error(O)}},v=()=>{me("currentCategory",1),me("currentCategoryPhase","")};Bv(oa,O=>{O?(le(l,O),PI()):le(l,null),le(c,!1)});const I=async()=>{const O={name:G(d),score:0};G(d)&&(CI("playersThisRound",O),le(d,""))},S=async O=>{Fa("playersThisRound",O)};Eo(()=>{me("currentCategoryPhase","")}),kr();var D=rA(),P=ne(D);{var N=O=>{var z=JI();ue(O,z)},L=O=>{var z=ha(),Q=ut(z);{var X=m=>{var _=ha(),y=ut(_);{var T=w=>{var ve=eA(),We=Z(ut(ve),2),at=Z(ne(We),2);_t(()=>{i(),Wp(()=>{})});var se=ne(at);se.value=(se.__value=!1)==null?"":!1;var we=Z(se);we.value=(we.__value=!0)==null?"":!0;var $e=Z(We,2);{var Pe=ge=>{var Ce=YI(),Ze=ut(Ce),wn=ne(Ze),Hn=Z(ne(wn),2);rm(Hn,5,a,tm,(En,qn)=>{var $n=XI(),Mr=ne($n),bs=ne(Mr),ks=Z(Mr),Vo=Ip(()=>S(G(qn)));_t(()=>{var Gt;return He(bs,(Gt=G(qn))==null?void 0:Gt.name)}),ot("click",ks,function(...Gt){var Or;(Or=G(Vo))==null||Or.apply(this,Gt)}),ue(En,$n)});var kt=Z(wn,2),St=Z(kt,2),yn=Z(Ze,2);lm(kt,()=>G(d),En=>le(d,En)),ot("click",St,I),ot("click",yn,v),ue(ge,Ce)},Ye=ge=>{var Ce=ZI();ue(ge,Ce)};Je($e,ge=>{i()?ge(Pe):ge(Ye,!1)})}var ye=Z($e,2),Y=ne(ye),Ge=Z(ye,2);_t(()=>He(Y,`Ingelogd als: ${G(l).displayName??""}`)),cm(at,i,ge=>_m(qi,ge)),ot("click",Ge,p),ue(w,ve)},b=(w,ve)=>{{var We=se=>{QI(se,{})},at=se=>{var we=tA();ot("click",we,()=>me("currentCategory",0)),ue(se,we)};Je(w,se=>{o()==1?se(We):se(at,!1)},ve)}};Je(y,w=>{o()==0?w(T):w(b,!1)})}ue(m,_)},E=m=>{var _=nA();ot("click",_,f),ue(m,_)};Je(Q,m=>{G(l)?m(X):m(E,!1)})}ue(O,z)};Je(P,O=>{G(c)?O(N):O(L,!1)})}ue(n,D),jn(),r()}Yp(oA,{target:document.getElementById("app")});
