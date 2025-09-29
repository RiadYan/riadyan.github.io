import"./DsnmJJEf.js";import{d as wt,w as Oe,s as fe,o as ht,e as aa}from"./C-6G6OPQ.js";import{F as jt,M as He,G as ae,af as Ut,O as mt,H as vt,j as h,a3 as Ht,J as ra,K as na,L as yt,N as We,V as Ce,ag as oa,ak as sa,P as Ke,R as ia,b5 as qe,b6 as Qe,Q as $e,b7 as kt,m as la,b8 as Et,b9 as Wt,ao as Bt,aB as da,S as _t,T as Ft,ba as ca,bb as rt,Y as va,aM as gt,bc as fa,ai as ua,bd as ha,an as ma,be as _a,a5 as Jt,bf as ga,I as xa,bg as pa,av as ba,bh as wa,bi as ya,bj as ka,w as Ea,X as Na,bk as Pa,o as xt,p as O,D as Ma,s as j,a as l,b as L,e as v,g as E,n as W,r as c,c as y,f as g,aK as Ye,bl as Ca,k as Fe,d as S,i as Be,t as ce,l as Xe,h as be,aL as Me}from"./DQpQESNN.js";import{p as Ue,r as B,s as F,b as Ae,i as w,a as et,c as Ta}from"./BWNoV6RW.js";import{i as Kt}from"./CHrWbWSC.js";import{c as Nt,r as Sa,a as Da,s as nt}from"./C08PSCzU.js";import{g as Aa}from"./kkhgfCGO.js";function Re(a,e){return e}function Ra(a,e,t){for(var n=a.items,o=[],i=e.length,r=0;r<i;r++)ha(e[r].e,o,!0);var s=i>0&&o.length===0&&t!==null;if(s){var x=t.parentNode;ma(x),x.append(t),n.clear(),pe(a,e[0].prev,e[i-1].next)}_a(o,()=>{for(var m=0;m<i;m++){var f=e[m];s||(n.delete(f.k),pe(a,f.prev,f.next)),gt(f.e,!s)}})}function ze(a,e,t,n,o,i=null){var r=a,s={flags:e,items:new Map,first:null},x=(e&Wt)!==0;if(x){var m=a;r=ae?He(Ut(m)):m.appendChild(mt())}ae&&vt();var f=null,p=!1,N=new Map,D=Ht(()=>{var P=t();return da(P)?P:P==null?[]:Bt(P)}),d,_;function k(){za(_,d,s,N,r,o,e,n,t),i!==null&&(d.length===0?f?_t(f):f=Ke(()=>i(r)):f!==null&&Ft(f,()=>{f=null}))}jt(()=>{_??=Jt,d=h(D);var P=d.length;if(p&&P===0)return;p=P===0;let A=!1;if(ae){var $=ra(r)===na;$!==(P===0)&&(r=yt(),He(r),We(!1),A=!0)}if(ae){for(var U=null,V,u=0;u<P;u++){if(Ce.nodeType===oa&&Ce.data===sa){r=Ce,A=!0,We(!1);break}var b=d[u],I=n(b,u);V=ft(Ce,s,U,null,b,I,u,o,e,t),s.items.set(I,V),U=V}P>0&&He(yt())}if(ae)P===0&&i&&(f=Ke(()=>i(r)));else if(ia()){var ve=new Set,Pe=$e;for(u=0;u<P;u+=1){b=d[u],I=n(b,u);var Z=s.items.get(I)??N.get(I);Z?(e&(qe|Qe))!==0&&Yt(Z,b,u,e):(V=ft(null,s,null,null,b,I,u,o,e,t,!0),N.set(I,V)),ve.add(I)}for(const[H,ue]of s.items)ve.has(H)||Pe.skipped_effects.add(ue.e);Pe.add_callback(k)}else k();A&&We(!0),h(D)}),ae&&(r=Ce)}function za(a,e,t,n,o,i,r,s,x){var m=(r&fa)!==0,f=(r&(qe|Qe))!==0,p=e.length,N=t.items,D=t.first,d=D,_,k=null,P,A=[],$=[],U,V,u,b;if(m)for(b=0;b<p;b+=1)U=e[b],V=s(U,b),u=N.get(V),u!==void 0&&(u.a?.measure(),(P??=new Set).add(u));for(b=0;b<p;b+=1){if(U=e[b],V=s(U,b),u=N.get(V),u===void 0){var I=n.get(V);if(I!==void 0){n.delete(V),N.set(V,I);var ve=k?k.next:d;pe(t,k,I),pe(t,I,ve),ot(I,ve,o),k=I}else{var Pe=d?d.e.nodes_start:o;k=ft(Pe,t,k,k===null?t.first:k.next,U,V,b,i,r,x)}N.set(V,k),A=[],$=[],d=k.next;continue}if(f&&Yt(u,U,b,r),(u.e.f&rt)!==0&&(_t(u.e),m&&(u.a?.unfix(),(P??=new Set).delete(u))),u!==d){if(_!==void 0&&_.has(u)){if(A.length<$.length){var Z=$[0],H;k=Z.prev;var ue=A[0],he=A[A.length-1];for(H=0;H<A.length;H+=1)ot(A[H],Z,o);for(H=0;H<$.length;H+=1)_.delete($[H]);pe(t,ue.prev,he.next),pe(t,k,ue),pe(t,he,Z),d=Z,k=he,b-=1,A=[],$=[]}else _.delete(u),ot(u,d,o),pe(t,u.prev,u.next),pe(t,u,k===null?t.first:k.next),pe(t,k,u),k=u;continue}for(A=[],$=[];d!==null&&d.k!==V;)(d.e.f&rt)===0&&(_??=new Set).add(d),$.push(d),d=d.next;if(d===null)continue;u=d}A.push(u),k=u,d=u.next}if(d!==null||_!==void 0){for(var we=_===void 0?[]:Bt(_);d!==null;)(d.e.f&rt)===0&&we.push(d),d=d.next;var ye=we.length;if(ye>0){var Le=(r&Wt)!==0&&p===0?o:null;if(m){for(b=0;b<ye;b+=1)we[b].a?.measure();for(b=0;b<ye;b+=1)we[b].a?.fix()}Ra(t,we,Le)}}m&&va(()=>{if(P!==void 0)for(u of P)u.a?.apply()}),a.first=t.first&&t.first.e,a.last=k&&k.e;for(var C of n.values())gt(C.e);n.clear()}function Yt(a,e,t,n){(n&qe)!==0&&kt(a.v,e),(n&Qe)!==0?kt(a.i,t):a.i=t}function ft(a,e,t,n,o,i,r,s,x,m,f){var p=(x&qe)!==0,N=(x&ca)===0,D=p?N?la(o,!1,!1):Et(o):o,d=(x&Qe)===0?r:Et(r),_={i:d,v:D,k:i,a:null,e:null,prev:t,next:n};try{if(a===null){var k=document.createDocumentFragment();k.append(a=mt())}return _.e=Ke(()=>s(a,D,d,m),ae),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?f||(e.first=_):(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function ot(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,o=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==null&&i!==n;){var r=ua(i);o.before(i),i=r}}function pe(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Oa(a,e,t,n,o,i){let r=ae;ae&&vt();var s,x,m=null;ae&&Ce.nodeType===ga&&(m=Ce,vt());var f=ae?Ce:a,p;jt(()=>{const N=e()||null;var D=pa;N!==s&&(p&&(N===null?Ft(p,()=>{p=null,x=null}):N===x?_t(p):(gt(p),wt(!1))),N&&N!==x&&(p=Ke(()=>{if(m=ae?m:document.createElementNS(D,N),ba(m,m),n){ae&&wa(N)&&m.append(document.createComment(""));var d=ae?Ut(m):m.appendChild(mt());ae&&(d===null?We(!1):He(d)),n(m,d)}Jt.nodes_end=m,f.before(m)})),s=N,s&&(x=s),wt(!0))},xa),r&&(We(!0),He(f))}function La(a,e,t=e){var n=ya(),o=new WeakSet;ka(a,"input",i=>{var r=i?a.defaultValue:a.value;if(r=st(a)?it(r):r,t(r),$e!==null&&o.add($e),n&&r!==(r=e())){var s=a.selectionStart,x=a.selectionEnd;a.value=r??"",x!==null&&(a.selectionStart=s,a.selectionEnd=Math.min(x,a.value.length))}}),(ae&&a.defaultValue!==a.value||Ea(e)==null&&a.value)&&(t(st(a)?it(a.value):a.value),$e!==null&&o.add($e)),Na(()=>{var i=e();if(a===document.activeElement){var r=Pa??$e;if(o.has(r))return}st(a)&&i===it(a.value)||a.type==="date"&&!i&&!a.value||i!==a.value&&(a.value=i??"")})}function st(a){var e=a.type;return e==="number"||e==="range"}function it(a){return a===""?null:+a}async function Ia(a){const e=await fetch(`https://api.github.com/repos/${a}/commits?per_page=1`);return e.ok?(await e.json())[0]?.commit?.committer?.date??"Unknown":"Unknown"}async function $a(a){const e=await fetch(`https://crates.io/api/v1/crates/${a}`);return e.ok?(await e.json())?.crate?.updated_at??"Unknown":"Unknown"}function Va(a,e){if(!a)return"Unknown";const t=typeof a=="string"?new Date(a):a;if(isNaN(t.getTime()))return"Unknown";const n={year:"numeric",month:"short",day:"2-digit"};return new Intl.DateTimeFormat(navigator.language||"en-US",{...n,...e}).format(t)}const pt=Oe(!0),Xt=Oe(null),Zt=Oe("list"),Pt="projects_cache",Ga=1e3*60*60*24;function lt(a){Xt.set(a),pt.set(!0)}function Mt(a){Zt.set(a)}function Ct(){pt.set(!1)}let ja=xt([{name:"Torbox SDK",type:"SDK",icon:"Cog",description:"Collection of Rust crates for Torbox integration",tech:["Rust","WASM"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-08-19",expanded:!1,subProjects:[{name:"torbox-core-rs",description:"Core functionality",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-08-15",icon:"Code"},{name:"torbox-user-rs",description:"User management and authentication",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-07-22",icon:"Lock"},{name:"torbox-general-rs",description:"Interaction with the Torbox servers",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-06-18",icon:"Database"}],state:"ALPHA"},{name:"Siv Vault",type:"App",icon:"BookOpen",description:"Secure book reading application with plugin system",tech:["Rust","Tauri","Svelte","SQLite"],link:"#",modified:"[REDACTED]",expanded:!1,subProjects:[{name:"siv-core",description:"Core application logic",tech:["Rust","WASM"],link:"#",modified:"[REDACTED]",icon:"Code"},{name:"siv-ui",description:"User interface components",tech:["Svelte","Typescript"],link:"#",modified:"[REDACTED]",icon:"Package"}],state:"ONGOING"},{name:"Portfolio Website",type:"Website",icon:"Globe",description:"The website you're on right now",tech:["Svelte","Tailwind","Rust","Axum"],link:"#",modified:"2025-03-12",state:"PUBLISHED"},{name:"PROJECT - [REDACTED]",type:"App",icon:"BookOpen",expanded:!1,description:"Anonymous app using P2P, DDL, scraping and other methods to satisfy the users need, more than 40k + users.",tech:["Rust","Tauri","SolidJS","Typescript","Tailwind"],link:"REDACTED",modified:"[REDACTED]",state:"PUBLISHED"},{name:"tauri-helper",type:"Crate",icon:"Cog",description:"Rust utility crate for Tauri apps to automate command collection, generation, and registration, reducing boilerplate and improving maintainability.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri-helper",modified:"2025-08-23",subProjects:[{name:"tauri_helper_macros",description:"Macro-based system to collect #[tauri::command] and #[auto_collect_command] functions automatically.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri_helper_macros",modified:"2025-08-23",icon:"Code"},{name:"tauri_helper_core",description:"The core functions of the tauri_helper crate.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri_helper_core",modified:"2025-08-23",icon:"Code"}],state:"PUBLISHED"}]);async function Ua(){const a=localStorage.getItem(Pt);if(a){const{timestamp:n,data:o}=JSON.parse(a);if(Date.now()-n<Ga)return o}async function e(n){let o=n.modified;if(o!=="[REDACTED]"){if(n.link?.includes("github.com")){const i=n.link.replace("https://github.com/","");o=await Ia(i)}if(n.link?.includes("crates.io")){const i=n.link.split("/").pop();o=await $a(i)}o=Va(o)}return{...n,modified:o}}const t=await Promise.all(ja.map(async n=>{const o=await e(n);if(n.subProjects){const i=await Promise.all(n.subProjects.map(r=>e(r)));return{...o,subProjects:i}}return o}));return localStorage.setItem(Pt,JSON.stringify({timestamp:Date.now(),data:t})),t}/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ha={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wa=Ma("<svg><!><!></svg>");function J(a,e){O(e,!0);const t=Ue(e,"color",3,"currentColor"),n=Ue(e,"size",3,24),o=Ue(e,"strokeWidth",3,2),i=Ue(e,"absoluteStrokeWidth",3,!1),r=Ue(e,"iconNode",19,()=>[]),s=B(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var x=Wa();Nt(x,p=>({...Ha,...s,width:n(),height:n(),stroke:t(),"stroke-width":p,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(o())*24/Number(n()):o()]);var m=v(x);ze(m,17,r,Re,(p,N)=>{var D=Ye(()=>Ca(h(N),2));let d=()=>h(D)[0],_=()=>h(D)[1];var k=y(),P=g(k);Oa(P,d,!0,(A,$)=>{Nt(A,()=>({..._()}))}),l(p,k)});var f=E(m);j(f,()=>e.children??W),c(x),l(a,x),L()}function Ba(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];J(a,F({name:"book-open"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ze(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m9 18 6-6-6-6"}]];J(a,F({name:"chevron-right"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Tt(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];J(a,F({name:"code"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Fa(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];J(a,F({name:"cog"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ja(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];J(a,F({name:"cpu"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function St(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];J(a,F({name:"database"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Dt(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 12h.01"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h8"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1"}]];J(a,F({name:"door-closed-locked"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function dt(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];J(a,F({name:"external-link"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function At(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];J(a,F({name:"file"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ka(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];J(a,F({name:"folder"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ya(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];J(a,F({name:"git-graph"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Rt(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];J(a,F({name:"globe"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function ct(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];J(a,F({name:"lock"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Xa(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];J(a,F({name:"mail"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Za(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];J(a,F({name:"moon"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function zt(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];J(a,F({name:"package"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function qa(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];J(a,F({name:"search"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ot(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];J(a,F({name:"server"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Qa(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];J(a,F({name:"sun"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function er(a,e){O(e,!0);/**
 * @license @lucide/svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];J(a,F({name:"x"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=y(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}const qt=typeof window<"u",tr=qt&&localStorage.getItem("theme")||"dark",ut=Oe(tr);ut.subscribe(a=>{qt&&(document.documentElement.classList.toggle("light",a==="light"),localStorage.setItem("theme",a))});var ar=S('<button class="rounded-lg border border-info/30 p-2 text-info transition-all hover:bg-info-hover" aria-label="Toggle theme"><!></button>');function rr(a,e){O(e,!1);const[t,n]=et(),o=()=>Ae(ut,"$theme",t);o();function i(){ut.set(o()==="dark"?"light":"dark")}Kt();var r=ar();r.__click=i;var s=v(r);{var x=f=>{Qa(f,{size:16})},m=f=>{Za(f,{size:16})};w(s,f=>{o()==="dark"?f(x):f(m,!1)})}c(r),l(a,r),L(),n()}Fe(["click"]);const Lt=Oe(!1),It=Oe(!1),$t=Oe({});var nr=S('<div class="space-y-0.5 px-2 py-1"><a href="/techCenter" class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><!> <span class="text-text-muted">Tech Center</span></a> <a href="/contact" class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><!> <span class="text-text-muted">Contact</span></a></div>'),or=S('<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase"><span>INFORMATION</span> <button class="flex w-full flex-row justify-end rounded p-1"><!></button></div> <!>',1);function sr(a,e){O(e,!1);const[t,n]=et(),o=()=>Ae(It,"$showInfo",t);Kt();var i=or(),r=g(i),s=E(v(r),2);s.__click=()=>It.update(p=>!p);var x=v(s);{let p=Ht(()=>`text-info/80 transition-transform ${o()?"rotate-90":""}`);Ze(x,{size:14,get class(){return h(p)}})}c(s),c(r);var m=E(r,2);{var f=p=>{var N=nr(),D=v(N),d=v(D);Ya(d,{size:14,class:"mr-2 text-info/80"}),Be(2),c(D);var _=E(D,2),k=v(_);Xa(k,{size:14,class:"mr-2 text-info/80"}),Be(2),c(_),c(N),l(p,N)};w(m,p=>{o()&&p(f)})}l(a,i),L(),n()}Fe(["click"]);var ir=(a,e,t)=>e(h(t)),lr=(a,e,t)=>e(h(t)),dr=S('<button class="flex items-center rounded-r px-4 py-1 hover:bg-info-hover"><!></button>'),cr=S('<div class="absolute top-0 left-0 h-4 w-px bg-info-hover"></div>'),vr=(a,e,t)=>e(h(t)),fr=S('<div class="relative flex items-center"><!> <div class="h-px w-3 bg-info-hover"></div> <button class="flex w-full flex-1 flex-row items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><span class="text-text-muted"> </span></button></div>'),ur=S('<div class="ml-4 border-l-2 border-info-hover pl-3"></div>'),hr=S('<div class="group"><div class="flex items-stretch"><button class="flex flex-1 items-center rounded-l px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><span class="text-text-muted"> </span></button> <!></div> <!></div>'),mr=S('<div class="space-y-0.5 px-2 py-1"></div>'),_r=S('<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase"><a href="/" class="flex items-center"><span>WORKSPACE</span></a> <button class="flex w-full flex-row justify-end rounded p-1"><!></button></div> <!>',1);function gr(a,e){O(e,!0);const[t,n]=et(),o=()=>Ae(Lt,"$showWorkspace",t),i=()=>Ae($t,"$expandedProjects",t);function r(d){$t.update(_=>({..._,[d.name]:!_[d.name]}))}function s(d){location.pathname!=="/"?Aa("/"):e.select(d)}var x=_r(),m=g(x),f=E(v(m),2);f.__click=()=>Lt.update(d=>!d);var p=v(f);{let d=Ye(()=>`text-info/80 transition-transform ${o()?"rotate-90":""}`);Ze(p,{size:14,get class(){return h(d)}})}c(f),c(m);var N=E(m,2);{var D=d=>{var _=mr();ze(_,21,()=>e.projects,Re,(k,P)=>{var A=hr(),$=v(A),U=v($);U.__click=[ir,s,P];var V=v(U),u=v(V,!0);c(V),c(U);var b=E(U,2);{var I=Z=>{var H=dr();H.__click=[lr,r,P];var ue=v(H);{let he=Ye(()=>`ml-auto text-info/80 transition-transform ${i()[h(P).name]?"rotate-90":""}`);Ze(ue,{size:14,get class(){return h(he)}})}c(H),l(Z,H)};w(b,Z=>{h(P).subProjects&&Z(I)})}c($);var ve=E($,2);{var Pe=Z=>{var H=ur();ze(H,21,()=>h(P).subProjects,Re,(ue,he,we)=>{var ye=fr(),Le=v(ye);{var C=R=>{var M=cr();l(R,M)};w(Le,R=>{we>0&&R(C)})}var T=E(Le,4);T.__click=[vr,s,he];var K=v(T),le=v(K,!0);c(K),c(T),c(ye),ce(()=>fe(le,h(he).name)),l(ue,ye)}),c(H),l(Z,H)};w(ve,Z=>{i()[h(P).name]&&Z(Pe)})}c(A),ce(()=>fe(u,h(P).name)),l(k,A)}),c(_),l(d,_)};w(N,d=>{o()&&d(D)})}l(a,x),L(),n()}Fe(["click"]);var xr=S('<div class="flex w-full flex-col border-r border-info-hover bg-background/80 p-0 backdrop-blur-lg md:w-64"><div class="flex flex-row items-center justify-between border-b border-info-hover p-4"><h1 class="text-lg font-bold tracking-wider text-info/90">RIAD EXPLORER</h1> <!></div> <div class="flex-1 overflow-y-auto"><div class="divide-y divide-info-hover"><div class="py-2"><!></div> <div class="border-b-1 border-info-hover py-2"><!></div></div></div></div>');function pr(a,e){var t=xr(),n=v(t),o=E(v(n),2);rr(o,{}),c(n);var i=E(n,2),r=v(i),s=v(r),x=v(s);gr(x,{get projects(){return e.projects},get select(){return e.select}}),c(s);var m=E(s,2),f=v(m);sr(f,{}),c(m),c(r),c(i),c(t),l(a,t)}function br(a,e,t,n,o){const i=e();if(i.length!==0){if(a.key==="ArrowDown")a.preventDefault(),be(t,(h(t)+1)%i.length);else if(a.key==="ArrowUp")a.preventDefault(),be(t,(h(t)-1+i.length)%i.length);else if(a.key==="Enter"){a.preventDefault();const r=i[h(t)];r&&(n.select(r),be(o,""),be(t,0))}}}var wr=(a,e,t,n,o)=>{be(e,""),t.select(h(n)),be(o,0)},yr=S("<li> </li>"),kr=S('<ul class="absolute top-full left-0 z-50 mt-1 max-h-64 w-full overflow-auto rounded border border-info/30 bg-background/95 shadow-lg"></ul>'),Er=S('<div class="flex h-12 w-full items-center justify-center border-b border-info-hover bg-background/70 px-4 backdrop-blur-lg md:justify-end"><div class="relative w-72"><div class="relative"><!> <input type="text" placeholder="Search projects..." class="w-full rounded border border-info/30 bg-background/50 py-1.5 pr-12 pl-9 text-sm text-text-disabled focus:ring-1 focus:ring-info/50 focus:outline-none"/> <span class="absolute top-1/2 right-2 hidden -translate-y-1/2 rounded border border-gray-700 bg-background/70 px-1.5 py-0.5 text-[10px] text-text-muted md:flex">Ctrl + K</span></div> <!></div></div>');function Vt(a,e){O(e,!0);let t=Xe(""),n=Xe(0),o;function i(){return h(t)?e.projects.filter(d=>d.name.toLowerCase().includes(h(t).toLowerCase())):[]}function r(d){d.ctrlKey&&d.key.toLowerCase()==="k"&&(d.preventDefault(),o?.focus())}ht(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}));var s=Er(),x=v(s),m=v(x),f=v(m);qa(f,{size:16,class:"absolute top-1/2 left-3 -translate-y-1/2 text-text-muted"});var p=E(f,2);Sa(p),p.__keydown=[br,i,n,e,t],Ta(p,d=>o=d,()=>o),Be(2),c(m);var N=E(m,2);{var D=d=>{var _=kr();ze(_,21,i,Re,(k,P,A)=>{var $=yr();$.__click=[wr,t,e,P,n];var U=v($,!0);c($),ce(()=>{Da($,1,`cursor-pointer px-3 py-1 text-sm ${A===h(n)?"bg-info/20 text-info":"text-text-disabled hover:bg-info/10"}`),fe(U,h(P).name)}),l(k,$)}),c(_),l(d,_)};w(N,d=>{h(t)&&i().length>0&&d(D)})}c(x),c(s),La(p,()=>h(t),d=>be(t,d)),l(a,s),L()}Fe(["keydown","click"]);var Nr=(a,e,t)=>e(h(t).name),Pr=S('<span class="rounded bg-info/10 px-2 py-1 text-xs text-info/70"> </span>'),Mr=S('<div class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors" aria-disabled="true"><!> ONGOING</div>'),Cr=S('<a class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors hover:bg-info/30"><!> Open</a>'),Tr=S('<div class="mt-3 space-y-2 border-t border-info/10 pt-3 text-start"><p class="text-xs text-text-muted"> </p> <div class="flex flex-wrap gap-1"></div> <div class="flex items-center justify-between pt-2"><span class="text-xs text-text-muted"> </span> <!></div></div>'),Sr=S('<button class="w-full rounded-lg border border-info/20 bg-background/40 p-3 transition-all duration-150 hover:border-info/40"><div class="flex w-full items-center justify-between rounded text-left transition-all duration-150"><div class="flex items-center px-2 py-1"><!> <span class="text-sm font-medium text-info/90"> </span></div> <!></div> <!></button>'),Dr=S('<div class="mb-6"><h3 class="mb-3 text-sm font-semibold text-text-muted">SUBPROJECTS</h3> <div class="space-y-2"></div></div>'),Ar=S('<span class="rounded-lg border border-info/30 bg-background/60 px-3 py-1 text-xs text-info/90"> </span>'),Rr=S('<div class="mb-6"><h3 class="mb-2 text-sm font-semibold text-text-muted">TECHNOLOGIES</h3> <div class="flex flex-wrap gap-2"></div></div>'),zr=S('<a class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"><!> OPEN <!></a>'),Or=S('<a aria-disabled="true" class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition"><!> ONGOING <!></a>'),Lr=S('<a target="_blank" rel="noopener noreferrer" class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"><!> OPEN <!></a>'),Ir=S('<div class="mb-6 flex items-center"><div class="mr-4 h-12 w-12 rounded bg-info-hover p-3 text-info/80"><!></div> <div><h2 class="text-xl font-bold text-info/90"> </h2> <div class="text-xs text-text-muted"><!></div></div></div> <div class="mb-6"><h3 class="mb-2 text-sm font-semibold text-text-muted">DESCRIPTION</h3> <p class="text-sm text-text-muted"> </p></div> <!> <!> <!>',1),$r=S('<div class="relative flex w-92 flex-col rounded-md border border-info-hover bg-background/80 p-6 backdrop-blur-lg md:w-full md:rounded-none md:border-l"><button class="absolute top-4 right-4 rounded-full p-1 text-text-muted hover:bg-background hover:text-text-disabled" aria-label="close preview"><!></button> <!></div>');function Gt(a,e){O(e,!0);let t=Xe(xt([]));function n(f){h(t).includes(f)?be(t,h(t).filter(p=>p!==f),!0):be(t,[...h(t),f],!0)}function o(f){f.key==="Escape"&&(f.preventDefault(),e.closePreview())}ht(()=>{window.addEventListener("keydown",o)}),aa(()=>{window.removeEventListener("keydown",o)});var i=$r(),r=v(i);r.__click=function(...f){e.closePreview?.apply(this,f)};var s=v(r);er(s,{size:16}),c(r);var x=E(r,2);{var m=f=>{var p=Ir(),N=g(p),D=v(N),d=v(D);{var _=C=>{var T=y(),K=g(T);{var le=M=>{Ka(M,{size:24})},R=M=>{var z=y(),Q=g(z);{var me=Y=>{Rt(Y,{size:24})},ke=Y=>{var G=y(),de=g(G);{var Ve=re=>{Ja(re,{size:24})},Ge=re=>{var q=y(),_e=g(q);{var Ee=X=>{Ba(X,{size:24})},Te=X=>{var ne=y(),ge=g(ne);{var Se=ee=>{ct(ee,{size:24})},De=ee=>{var ie=y(),oe=g(ie);{var te=se=>{Fa(se,{size:24})};w(oe,se=>{e.selected.icon==="Cog"&&se(te)},!0)}l(ee,ie)};w(ge,ee=>{e.selected.icon==="Lock"?ee(Se):ee(De,!1)},!0)}l(X,ne)};w(_e,X=>{e.selected.icon==="BookOpen"?X(Ee):X(Te,!1)},!0)}l(re,q)};w(de,re=>{e.selected.icon==="Cpu"?re(Ve):re(Ge,!1)},!0)}l(Y,G)};w(Q,Y=>{e.selected.icon==="Globe"?Y(me):Y(ke,!1)},!0)}l(M,z)};w(K,M=>{e.selected.icon==="Folder"?M(le):M(R,!1)})}l(C,T)},k=C=>{var T=y(),K=g(T);{var le=M=>{At(M,{size:24})},R=M=>{var z=y(),Q=g(z);{var me=Y=>{Tt(Y,{size:24})},ke=Y=>{var G=y(),de=g(G);{var Ve=re=>{ct(re,{size:24})},Ge=re=>{var q=y(),_e=g(q);{var Ee=X=>{Rt(X,{size:24})},Te=X=>{var ne=y(),ge=g(ne);{var Se=ee=>{St(ee,{size:24})},De=ee=>{var ie=y(),oe=g(ie);{var te=xe=>{Ot(xe,{size:24})},se=xe=>{var Ne=y(),Je=g(Ne);{var tt=je=>{zt(je,{size:24})};w(Je,je=>{e.selected.icon==="Package"&&je(tt)},!0)}l(xe,Ne)};w(oe,xe=>{e.selected.icon==="Server"?xe(te):xe(se,!1)},!0)}l(ee,ie)};w(ge,ee=>{e.selected.icon==="Database"?ee(Se):ee(De,!1)},!0)}l(X,ne)};w(_e,X=>{e.selected.icon==="Globe"?X(Ee):X(Te,!1)},!0)}l(re,q)};w(de,re=>{e.selected.icon==="Lock"?re(Ve):re(Ge,!1)},!0)}l(Y,G)};w(Q,Y=>{e.selected.icon==="Code"?Y(me):Y(ke,!1)},!0)}l(M,z)};w(K,M=>{e.selected.icon==="File"?M(le):M(R,!1)},!0)}l(C,T)};w(d,C=>{"subProjects"in e.selected?C(_):C(k,!1)})}c(D);var P=E(D,2),A=v(P),$=v(A,!0);c(A);var U=E(A,2),V=v(U);{var u=C=>{var T=Me();ce(K=>fe(T,`PROJECT • ${K??""} • Modified: ${e.selected.modified??""}`),[()=>e.selected.type.toUpperCase()]),l(C,T)},b=C=>{var T=Me();ce(()=>fe(T,`MODULE • Modified: ${e.selected.modified??""}`)),l(C,T)};w(V,C=>{"subProjects"in e.selected?C(u):C(b,!1)})}c(U),c(P),c(N);var I=E(N,2),ve=E(v(I),2),Pe=v(ve,!0);c(ve),c(I);var Z=E(I,2);{var H=C=>{var T=Dr(),K=E(v(T),2);ze(K,21,()=>e.selected.subProjects,Re,(le,R)=>{var M=Sr();M.__click=[Nr,n,R];var z=v(M),Q=v(z),me=v(Q);{var ke=q=>{At(q,{size:16,class:"mr-3 text-info/70"})},Y=q=>{var _e=y(),Ee=g(_e);{var Te=ne=>{Tt(ne,{size:16,class:"mr-3 text-info/70"})},X=ne=>{var ge=y(),Se=g(ge);{var De=ie=>{St(ie,{size:16,class:"mr-3 text-info/70"})},ee=ie=>{var oe=y(),te=g(oe);{var se=Ne=>{Ot(Ne,{size:16,class:"mr-3 text-info/70"})},xe=Ne=>{var Je=y(),tt=g(Je);{var je=Ie=>{zt(Ie,{size:16,class:"mr-3 text-info/70"})},Qt=Ie=>{var bt=y(),ea=g(bt);{var ta=at=>{ct(at,{size:16,class:"mr-3 text-info/70"})};w(ea,at=>{h(R).icon==="Lock"&&at(ta)},!0)}l(Ie,bt)};w(tt,Ie=>{h(R).icon==="Package"?Ie(je):Ie(Qt,!1)},!0)}l(Ne,Je)};w(te,Ne=>{h(R).icon==="Server"?Ne(se):Ne(xe,!1)},!0)}l(ie,oe)};w(Se,ie=>{h(R).icon==="Database"?ie(De):ie(ee,!1)},!0)}l(ne,ge)};w(Ee,ne=>{h(R).icon==="Code"?ne(Te):ne(X,!1)},!0)}l(q,_e)};w(me,q=>{h(R).icon==="File"?q(ke):q(Y,!1)})}var G=E(me,2),de=v(G,!0);c(G),c(Q);var Ve=E(Q,2);{let q=Ye(()=>`text-info/60 transition-transform ${h(t).includes(h(R).name)?"rotate-90":""}`);Ze(Ve,{size:14,get class(){return h(q)}})}c(z);var Ge=E(z,2);{var re=q=>{var _e=Tr(),Ee=v(_e),Te=v(Ee,!0);c(Ee);var X=E(Ee,2);ze(X,21,()=>h(R).tech,Re,(oe,te)=>{var se=Pr(),xe=v(se,!0);c(se),ce(()=>fe(xe,h(te))),l(oe,se)}),c(X);var ne=E(X,2),ge=v(ne),Se=v(ge);c(ge);var De=E(ge,2);{var ee=oe=>{var te=Mr(),se=v(te);Dt(se,{size:12,class:"mr-1"}),Be(),c(te),l(oe,te)},ie=oe=>{var te=Cr(),se=v(te);dt(se,{size:12,class:"mr-1"}),Be(),c(te),ce(()=>nt(te,"href",h(R).link)),l(oe,te)};w(De,oe=>{e.selected.state==="ONGOING"?oe(ee):oe(ie,!1)})}c(ne),c(_e),ce(()=>{fe(Te,h(R).description),fe(Se,`Modified: ${h(R).modified??""}`)}),l(q,_e)};w(Ge,q=>{h(t).includes(h(R).name)&&q(re)})}c(M),ce(()=>fe(de,h(R).name)),l(le,M)}),c(K),c(T),l(C,T)};w(Z,C=>{"subProjects"in e.selected&&e.selected.subProjects&&e.selected.subProjects.length>0&&C(H)})}var ue=E(Z,2);{var he=C=>{var T=Rr(),K=E(v(T),2);ze(K,21,()=>e.selected.tech,Re,(le,R)=>{var M=Ar(),z=v(M,!0);c(M),ce(()=>fe(z,h(R))),l(le,M)}),c(K),c(T),l(C,T)};w(ue,C=>{e.selected.tech&&C(he)})}var we=E(ue,2);{var ye=C=>{var T=zr(),K=v(T);dt(K,{size:16,class:"mr-2"});var le=E(K,2);{var R=z=>{var Q=Me("PROJECT");l(z,Q)},M=z=>{var Q=Me("MODULE");l(z,Q)};w(le,z=>{"subProjects"in e.selected?z(R):z(M,!1)})}c(T),ce(()=>nt(T,"href",e.selected.link)),l(C,T)},Le=C=>{var T=y(),K=g(T);{var le=M=>{var z=Or(),Q=v(z);Dt(Q,{size:16,class:"mr-2"});var me=E(Q,2);{var ke=G=>{var de=Me("PROJECT");l(G,de)},Y=G=>{var de=Me("MODULE");l(G,de)};w(me,G=>{"subProjects"in e.selected?G(ke):G(Y,!1)})}c(z),l(M,z)},R=M=>{var z=Lr(),Q=v(z);dt(Q,{size:16,class:"mr-2"});var me=E(Q,2);{var ke=G=>{var de=Me("PROJECT");l(G,de)},Y=G=>{var de=Me("MODULE");l(G,de)};w(me,G=>{"subProjects"in e.selected?G(ke):G(Y,!1)})}c(z),ce(()=>nt(z,"href",e.selected.link)),l(M,z)};w(K,M=>{e.selected.state==="ONGOING"?M(le):M(R,!1)},!0)}l(C,T)};w(we,C=>{e.selected.link==="REDACTED"?C(ye):C(Le,!1)})}ce(()=>{fe($,e.selected.name),fe(Pe,e.selected.description)}),l(f,p)};w(x,f=>{e.selected&&f(m)})}c(i),l(a,i),L()}Fe(["click"]);var Vr=S('<div class="hidden w-96 transition-all duration-300 md:flex md:flex-none"><!></div>'),Gr=S('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:hidden"><div class="w-full max-w-md"><!></div></div>'),jr=S('<div class="min-h-screen w-full overflow-auto bg-background" style="background-image: radial-gradient(circle at center, var(--color-text-5) 1px, transparent 1px); background-size: 24px 24px;"><div class="mx-auto flex min-h-screen w-full flex-col font-mono md:flex-row"><div class="z-60 flex w-full md:hidden"><!></div> <!> <div class="flex w-full flex-1 overflow-auto"><div class="flex flex-1 flex-col transition-all duration-300"><div class="z-60 hidden w-full md:flex"><!></div> <!></div> <!></div> <!></div></div>');function Yr(a,e){O(e,!0);const[t,n]=et(),o=()=>Ae(Zt,"$currentView",t),i=()=>Ae(Xt,"$selected",t),r=()=>Ae(pt,"$showPreview",t);if(typeof window<"u"){const u=()=>{document.documentElement.style.scrollBehavior=window.innerWidth>768?"smooth":"auto"};u(),window.addEventListener("resize",u)}let s=Xe(xt([]));ht(async()=>{be(s,await Ua(),!0)});var x=jr(),m=v(x),f=v(m),p=v(f);Vt(p,{get currentView(){return o()},get changeCurrentView(){return Mt},get projects(){return h(s)},get select(){return lt}}),c(f);var N=E(f,2);pr(N,{get projects(){return h(s)},get select(){return lt}});var D=E(N,2),d=v(D),_=v(d),k=v(_);Vt(k,{get currentView(){return o()},get changeCurrentView(){return Mt},get projects(){return h(s)},get select(){return lt}}),c(_);var P=E(_,2);j(P,()=>e.children),c(d);var A=E(d,2);{var $=u=>{var b=Vr(),I=v(b);Gt(I,{get selected(){return i()},get closePreview(){return Ct}}),c(b),l(u,b)};w(A,u=>{i()&&r()&&u($)})}c(D);var U=E(D,2);{var V=u=>{var b=Gr(),I=v(b),ve=v(I);Gt(ve,{get selected(){return i()},get closePreview(){return Ct}}),c(I),c(b),l(u,b)};w(U,u=>{i()&&r()&&u(V)})}c(m),c(x),l(a,x),L(),n()}export{Ba as B,Ja as C,Ka as F,Rt as G,J as I,ct as L,Yr as M,Fa as a,Zt as b,Mt as c,La as d,ze as e,Re as i,Ua as l,ja as p,lt as s};
