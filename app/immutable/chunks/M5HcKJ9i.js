import"./DsnmJJEf.js";import{d as wt,w as Oe,s as fe,o as ht,e as aa}from"./BmlPGHBF.js";import{F as jt,M as He,G as ae,ay as Ut,O as mt,H as vt,j as h,a3 as Ht,J as ra,K as na,L as yt,N as We,V as Ce,ai as oa,aL as sa,P as Ke,R as ia,bj as Xe,bk as Qe,Q as $e,ah as kt,m as la,af as Et,bl as Wt,aD as Bt,aR as da,S as _t,T as Ft,bm as ca,bn as rt,Y as va,aq as gt,bo as fa,av as ua,bp as ha,aC as ma,bq as _a,a5 as Jt,br as ga,I as xa,bs as pa,aK as ba,bt as wa,bu as ya,aZ as ka,w as Ea,X as Na,bv as Pa,o as xt,p as O,D as Ma,s as j,a as l,b as L,e as v,g as E,n as W,r as c,c as w,f as g,a_ as Ye,bw as Ca,k as Fe,d as D,i as Be,t as ce,l as Ze,h as be,a$ as Me}from"./RC4YcE9M.js";import{p as Ue,r as B,s as F,b as Re,i as b,a as et,c as Ta}from"./D59qu3lh.js";import{i as Kt}from"./D3RJN7Gb.js";import{c as Nt,r as Da,a as Sa,s as nt}from"./C_uKCdrk.js";import{g as Ra}from"./D569vx1b.js";function Ae(a,e){return e}function Aa(a,e,t){for(var n=a.items,o=[],i=e.length,r=0;r<i;r++)ha(e[r].e,o,!0);var s=i>0&&o.length===0&&t!==null;if(s){var y=t.parentNode;ma(y),y.append(t),n.clear(),pe(a,e[0].prev,e[i-1].next)}_a(o,()=>{for(var m=0;m<i;m++){var f=e[m];s||(n.delete(f.k),pe(a,f.prev,f.next)),gt(f.e,!s)}})}function ze(a,e,t,n,o,i=null){var r=a,s={flags:e,items:new Map,first:null},y=(e&Wt)!==0;if(y){var m=a;r=ae?He(Ut(m)):m.appendChild(mt())}ae&&vt();var f=null,x=!1,N=new Map,S=Ht(()=>{var P=t();return da(P)?P:P==null?[]:Bt(P)}),d,_;function k(){za(_,d,s,N,r,o,e,n,t),i!==null&&(d.length===0?f?_t(f):f=Ke(()=>i(r)):f!==null&&Ft(f,()=>{f=null}))}jt(()=>{_??=Jt,d=h(S);var P=d.length;if(x&&P===0)return;x=P===0;let R=!1;if(ae){var $=ra(r)===na;$!==(P===0)&&(r=yt(),He(r),We(!1),R=!0)}if(ae){for(var U=null,V,u=0;u<P;u++){if(Ce.nodeType===oa&&Ce.data===sa){r=Ce,R=!0,We(!1);break}var p=d[u],I=n(p,u);V=ft(Ce,s,U,null,p,I,u,o,e,t),s.items.set(I,V),U=V}P>0&&He(yt())}if(ae)P===0&&i&&(f=Ke(()=>i(r)));else if(ia()){var ve=new Set,Pe=$e;for(u=0;u<P;u+=1){p=d[u],I=n(p,u);var q=s.items.get(I)??N.get(I);q?(e&(Xe|Qe))!==0&&Yt(q,p,u,e):(V=ft(null,s,null,null,p,I,u,o,e,t,!0),N.set(I,V)),ve.add(I)}for(const[H,ue]of s.items)ve.has(H)||Pe.skipped_effects.add(ue.e);Pe.add_callback(k)}else k();R&&We(!0),h(S)}),ae&&(r=Ce)}function za(a,e,t,n,o,i,r,s,y){var m=(r&fa)!==0,f=(r&(Xe|Qe))!==0,x=e.length,N=t.items,S=t.first,d=S,_,k=null,P,R=[],$=[],U,V,u,p;if(m)for(p=0;p<x;p+=1)U=e[p],V=s(U,p),u=N.get(V),u!==void 0&&(u.a?.measure(),(P??=new Set).add(u));for(p=0;p<x;p+=1){if(U=e[p],V=s(U,p),u=N.get(V),u===void 0){var I=n.get(V);if(I!==void 0){n.delete(V),N.set(V,I);var ve=k?k.next:d;pe(t,k,I),pe(t,I,ve),ot(I,ve,o),k=I}else{var Pe=d?d.e.nodes_start:o;k=ft(Pe,t,k,k===null?t.first:k.next,U,V,p,i,r,y)}N.set(V,k),R=[],$=[],d=k.next;continue}if(f&&Yt(u,U,p,r),(u.e.f&rt)!==0&&(_t(u.e),m&&(u.a?.unfix(),(P??=new Set).delete(u))),u!==d){if(_!==void 0&&_.has(u)){if(R.length<$.length){var q=$[0],H;k=q.prev;var ue=R[0],he=R[R.length-1];for(H=0;H<R.length;H+=1)ot(R[H],q,o);for(H=0;H<$.length;H+=1)_.delete($[H]);pe(t,ue.prev,he.next),pe(t,k,ue),pe(t,he,q),d=q,k=he,p-=1,R=[],$=[]}else _.delete(u),ot(u,d,o),pe(t,u.prev,u.next),pe(t,u,k===null?t.first:k.next),pe(t,k,u),k=u;continue}for(R=[],$=[];d!==null&&d.k!==V;)(d.e.f&rt)===0&&(_??=new Set).add(d),$.push(d),d=d.next;if(d===null)continue;u=d}R.push(u),k=u,d=u.next}if(d!==null||_!==void 0){for(var we=_===void 0?[]:Bt(_);d!==null;)(d.e.f&rt)===0&&we.push(d),d=d.next;var ye=we.length;if(ye>0){var Le=(r&Wt)!==0&&x===0?o:null;if(m){for(p=0;p<ye;p+=1)we[p].a?.measure();for(p=0;p<ye;p+=1)we[p].a?.fix()}Aa(t,we,Le)}}m&&va(()=>{if(P!==void 0)for(u of P)u.a?.apply()}),a.first=t.first&&t.first.e,a.last=k&&k.e;for(var C of n.values())gt(C.e);n.clear()}function Yt(a,e,t,n){(n&Xe)!==0&&kt(a.v,e),(n&Qe)!==0?kt(a.i,t):a.i=t}function ft(a,e,t,n,o,i,r,s,y,m,f){var x=(y&Xe)!==0,N=(y&ca)===0,S=x?N?la(o,!1,!1):Et(o):o,d=(y&Qe)===0?r:Et(r),_={i:d,v:S,k:i,a:null,e:null,prev:t,next:n};try{if(a===null){var k=document.createDocumentFragment();k.append(a=mt())}return _.e=Ke(()=>s(a,S,d,m),ae),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?f||(e.first=_):(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function ot(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,o=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==null&&i!==n;){var r=ua(i);o.before(i),i=r}}function pe(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Oa(a,e,t,n,o,i){let r=ae;ae&&vt();var s,y,m=null;ae&&Ce.nodeType===ga&&(m=Ce,vt());var f=ae?Ce:a,x;jt(()=>{const N=e()||null;var S=pa;N!==s&&(x&&(N===null?Ft(x,()=>{x=null,y=null}):N===y?_t(x):(gt(x),wt(!1))),N&&N!==y&&(x=Ke(()=>{if(m=ae?m:document.createElementNS(S,N),ba(m,m),n){ae&&wa(N)&&m.append(document.createComment(""));var d=ae?Ut(m):m.appendChild(mt());ae&&(d===null?We(!1):He(d)),n(m,d)}Jt.nodes_end=m,f.before(m)})),s=N,s&&(y=s),wt(!0))},xa),r&&(We(!0),He(f))}function La(a,e,t=e){var n=new WeakSet;ya(a,"input",async o=>{var i=o?a.defaultValue:a.value;if(i=st(a)?it(i):i,t(i),$e!==null&&n.add($e),await ka(),i!==(i=e())){var r=a.selectionStart,s=a.selectionEnd;a.value=i??"",s!==null&&(a.selectionStart=r,a.selectionEnd=Math.min(s,a.value.length))}}),(ae&&a.defaultValue!==a.value||Ea(e)==null&&a.value)&&(t(st(a)?it(a.value):a.value),$e!==null&&n.add($e)),Na(()=>{var o=e();if(a===document.activeElement){var i=Pa??$e;if(n.has(i))return}st(a)&&o===it(a.value)||a.type==="date"&&!o&&!a.value||o!==a.value&&(a.value=o??"")})}function st(a){var e=a.type;return e==="number"||e==="range"}function it(a){return a===""?null:+a}async function Ia(a){const e=await fetch(`https://api.github.com/repos/${a}/commits?per_page=1`);return e.ok?(await e.json())[0]?.commit?.committer?.date??"Unknown":"Unknown"}async function $a(a){const e=await fetch(`https://crates.io/api/v1/crates/${a}`);return e.ok?(await e.json())?.crate?.updated_at??"Unknown":"Unknown"}function Va(a,e){if(!a)return"Unknown";const t=typeof a=="string"?new Date(a):a;if(isNaN(t.getTime()))return"Unknown";const n={year:"numeric",month:"short",day:"2-digit"};return new Intl.DateTimeFormat(navigator.language||"en-US",{...n,...e}).format(t)}const pt=Oe(!0),Zt=Oe(null),qt=Oe("list"),Pt="projects_cache",Ga=1e3*60*60*24;function lt(a){Zt.set(a),pt.set(!0)}function Mt(a){qt.set(a)}function Ct(){pt.set(!1)}let ja=xt([{name:"Torbox SDK",type:"SDK",icon:"Cog",description:"Collection of Rust crates for Torbox integration",tech:["Rust","WASM"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-08-19",expanded:!1,subProjects:[{name:"torbox-core-rs",description:"Core functionality",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-08-15",icon:"Code"},{name:"torbox-user-rs",description:"User management and authentication",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-07-22",icon:"Lock"},{name:"torbox-general-rs",description:"Interaction with the Torbox servers",tech:["Rust","Typescript"],link:"https://github.com/RiadYan/torbox-rs",modified:"2025-06-18",icon:"Database"}],state:"ALPHA"},{name:"Siv Vault",type:"App",icon:"BookOpen",description:"Secure book reading application with plugin system",tech:["Rust","Tauri","Svelte","SQLite"],link:"#",modified:"[REDACTED]",expanded:!1,subProjects:[{name:"siv-core",description:"Core application logic",tech:["Rust","WASM"],link:"#",modified:"[REDACTED]",icon:"Code"},{name:"siv-ui",description:"User interface components",tech:["Svelte","Typescript"],link:"#",modified:"[REDACTED]",icon:"Package"}],state:"ONGOING"},{name:"Portfolio Website",type:"Website",icon:"Globe",description:"The website you're on right now",tech:["Svelte","Tailwind","Rust","Axum"],link:"#",modified:"2025-03-12",state:"PUBLISHED"},{name:"PROJECT - [REDACTED]",type:"App",icon:"BookOpen",expanded:!1,description:"Anonymous app using P2P, DDL, scraping and other methods to satisfy the users need, more than 40k + users.",tech:["Rust","Tauri","SolidJS","Typescript","Tailwind"],link:"REDACTED",modified:"[REDACTED]",state:"PUBLISHED"},{name:"tauri-helper",type:"Crate",icon:"Cog",description:"Rust utility crate for Tauri apps to automate command collection, generation, and registration, reducing boilerplate and improving maintainability.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri-helper",modified:"2025-08-23",subProjects:[{name:"tauri_helper_macros",description:"Macro-based system to collect #[tauri::command] and #[auto_collect_command] functions automatically.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri_helper_macros",modified:"2025-08-23",icon:"Code"},{name:"tauri_helper_core",description:"The core functions of the tauri_helper crate.",tech:["Rust","Tauri"],link:"https://crates.io/crates/tauri_helper_core",modified:"2025-08-23",icon:"Code"}],state:"PUBLISHED"}]);async function Ua(){const a=localStorage.getItem(Pt);if(a){const{timestamp:n,data:o}=JSON.parse(a);if(Date.now()-n<Ga)return o}async function e(n){let o=n.modified;if(o!=="[REDACTED]"){if(n.link?.includes("github.com")){const i=n.link.replace("https://github.com/","");o=await Ia(i)}if(n.link?.includes("crates.io")){const i=n.link.split("/").pop();o=await $a(i)}o=Va(o)}return{...n,modified:o}}const t=await Promise.all(ja.map(async n=>{const o=await e(n);if(n.subProjects){const i=await Promise.all(n.subProjects.map(r=>e(r)));return{...o,subProjects:i}}return o}));return localStorage.setItem(Pt,JSON.stringify({timestamp:Date.now(),data:t})),t}/**
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
 */const Ha={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wa=Ma("<svg><!><!></svg>");function J(a,e){O(e,!0);const t=Ue(e,"color",3,"currentColor"),n=Ue(e,"size",3,24),o=Ue(e,"strokeWidth",3,2),i=Ue(e,"absoluteStrokeWidth",3,!1),r=Ue(e,"iconNode",19,()=>[]),s=B(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var y=Wa();Nt(y,x=>({...Ha,...s,width:n(),height:n(),stroke:t(),"stroke-width":x,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(o())*24/Number(n()):o()]);var m=v(y);ze(m,17,r,Ae,(x,N)=>{var S=Ye(()=>Ca(h(N),2));let d=()=>h(S)[0],_=()=>h(S)[1];var k=w(),P=g(k);Oa(P,d,!0,(R,$)=>{Nt(R,()=>({..._()}))}),l(x,k)});var f=E(m);j(f,()=>e.children??W),c(y),l(a,y),L()}function Ba(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];J(a,F({name:"book-open"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function qe(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m9 18 6-6-6-6"}]];J(a,F({name:"chevron-right"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Tt(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];J(a,F({name:"code"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Fa(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];J(a,F({name:"cog"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ja(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];J(a,F({name:"cpu"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Dt(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];J(a,F({name:"database"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function St(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 12h.01"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h8"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1"}]];J(a,F({name:"door-closed-locked"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function dt(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];J(a,F({name:"external-link"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Rt(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];J(a,F({name:"file"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ka(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];J(a,F({name:"folder"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ya(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];J(a,F({name:"git-graph"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function At(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];J(a,F({name:"globe"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function ct(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];J(a,F({name:"lock"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Za(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];J(a,F({name:"mail"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function qa(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];J(a,F({name:"moon"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function zt(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];J(a,F({name:"package"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Xa(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];J(a,F({name:"search"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Ot(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];J(a,F({name:"server"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function Qa(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];J(a,F({name:"sun"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}function er(a,e){O(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];J(a,F({name:"x"},()=>t,{get iconNode(){return n},children:(o,i)=>{var r=w(),s=g(r);j(s,()=>e.children??W),l(o,r)},$$slots:{default:!0}})),L()}const Xt=typeof window<"u",tr=Xt&&localStorage.getItem("theme")||"dark",ut=Oe(tr);ut.subscribe(a=>{Xt&&(document.documentElement.classList.toggle("light",a==="light"),localStorage.setItem("theme",a))});var ar=D('<button class="rounded-lg border border-info/30 p-2 text-info transition-all hover:bg-info-hover" aria-label="Toggle theme"><!></button>');function rr(a,e){O(e,!1);const t=()=>Re(ut,"$theme",n),[n,o]=et();t();function i(){ut.set(t()==="dark"?"light":"dark")}Kt();var r=ar();r.__click=i;var s=v(r);{var y=f=>{Qa(f,{size:16})},m=f=>{qa(f,{size:16})};b(s,f=>{t()==="dark"?f(y):f(m,!1)})}c(r),l(a,r),L(),o()}Fe(["click"]);const Lt=Oe(!1),It=Oe(!1),$t=Oe({});var nr=D('<div class="space-y-0.5 px-2 py-1"><a href="/techCenter" class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><!> <span class="text-text-muted">Tech Center</span></a> <a href="/contact" class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><!> <span class="text-text-muted">Contact</span></a></div>'),or=D('<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase"><span>INFORMATION</span> <button class="flex w-full flex-row justify-end rounded p-1"><!></button></div> <!>',1);function sr(a,e){O(e,!1);const t=()=>Re(It,"$showInfo",n),[n,o]=et();Kt();var i=or(),r=g(i),s=E(v(r),2);s.__click=()=>It.update(x=>!x);var y=v(s);{let x=Ht(()=>`text-info/80 transition-transform ${t()?"rotate-90":""}`);qe(y,{size:14,get class(){return h(x)}})}c(s),c(r);var m=E(r,2);{var f=x=>{var N=nr(),S=v(N),d=v(S);Ya(d,{size:14,class:"mr-2 text-info/80"}),Be(2),c(S);var _=E(S,2),k=v(_);Za(k,{size:14,class:"mr-2 text-info/80"}),Be(2),c(_),c(N),l(x,N)};b(m,x=>{t()&&x(f)})}l(a,i),L(),o()}Fe(["click"]);var ir=(a,e,t)=>e(h(t)),lr=(a,e,t)=>e(h(t)),dr=D('<button class="flex items-center rounded-r px-4 py-1 hover:bg-info-hover"><!></button>'),cr=D('<div class="absolute top-0 left-0 h-4 w-px bg-info-hover"></div>'),vr=(a,e,t)=>e(h(t)),fr=D('<div class="relative flex items-center"><!> <div class="h-px w-3 bg-info-hover"></div> <button class="flex w-full flex-1 flex-row items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><span class="text-text-muted"> </span></button></div>'),ur=D('<div class="ml-4 border-l-2 border-info-hover pl-3"></div>'),hr=D('<div class="group"><div class="flex items-stretch"><button class="flex flex-1 items-center rounded-l px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"><span class="text-text-muted"> </span></button> <!></div> <!></div>'),mr=D('<div class="space-y-0.5 px-2 py-1"></div>'),_r=D('<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase"><a href="/" class="flex items-center"><span>WORKSPACE</span></a> <button class="flex w-full flex-row justify-end rounded p-1"><!></button></div> <!>',1);function gr(a,e){O(e,!0);const t=()=>Re(Lt,"$showWorkspace",o),n=()=>Re($t,"$expandedProjects",o),[o,i]=et();function r(d){$t.update(_=>({..._,[d.name]:!_[d.name]}))}function s(d){location.pathname!=="/"?Ra("/"):e.select(d)}var y=_r(),m=g(y),f=E(v(m),2);f.__click=()=>Lt.update(d=>!d);var x=v(f);{let d=Ye(()=>`text-info/80 transition-transform ${t()?"rotate-90":""}`);qe(x,{size:14,get class(){return h(d)}})}c(f),c(m);var N=E(m,2);{var S=d=>{var _=mr();ze(_,21,()=>e.projects,Ae,(k,P)=>{var R=hr(),$=v(R),U=v($);U.__click=[ir,s,P];var V=v(U),u=v(V,!0);c(V),c(U);var p=E(U,2);{var I=q=>{var H=dr();H.__click=[lr,r,P];var ue=v(H);{let he=Ye(()=>`ml-auto text-info/80 transition-transform ${n()[h(P).name]?"rotate-90":""}`);qe(ue,{size:14,get class(){return h(he)}})}c(H),l(q,H)};b(p,q=>{h(P).subProjects&&q(I)})}c($);var ve=E($,2);{var Pe=q=>{var H=ur();ze(H,21,()=>h(P).subProjects,Ae,(ue,he,we)=>{var ye=fr(),Le=v(ye);{var C=A=>{var M=cr();l(A,M)};b(Le,A=>{we>0&&A(C)})}var T=E(Le,4);T.__click=[vr,s,he];var K=v(T),le=v(K,!0);c(K),c(T),c(ye),ce(()=>fe(le,h(he).name)),l(ue,ye)}),c(H),l(q,H)};b(ve,q=>{n()[h(P).name]&&q(Pe)})}c(R),ce(()=>fe(u,h(P).name)),l(k,R)}),c(_),l(d,_)};b(N,d=>{t()&&d(S)})}l(a,y),L(),i()}Fe(["click"]);var xr=D('<div class="flex w-full flex-col border-r border-info-hover bg-background/80 p-0 backdrop-blur-lg md:w-64"><div class="flex flex-row items-center justify-between border-b border-info-hover p-4"><h1 class="text-lg font-bold tracking-wider text-info/90">RIAD EXPLORER</h1> <!></div> <div class="flex-1 overflow-y-auto"><div class="divide-y divide-info-hover"><div class="py-2"><!></div> <div class="border-b-1 border-info-hover py-2"><!></div></div></div></div>');function pr(a,e){var t=xr(),n=v(t),o=E(v(n),2);rr(o,{}),c(n);var i=E(n,2),r=v(i),s=v(r),y=v(s);gr(y,{get projects(){return e.projects},get select(){return e.select}}),c(s);var m=E(s,2),f=v(m);sr(f,{}),c(m),c(r),c(i),c(t),l(a,t)}function br(a,e,t,n,o){const i=e();if(i.length!==0){if(a.key==="ArrowDown")a.preventDefault(),be(t,(h(t)+1)%i.length);else if(a.key==="ArrowUp")a.preventDefault(),be(t,(h(t)-1+i.length)%i.length);else if(a.key==="Enter"){a.preventDefault();const r=i[h(t)];r&&(n.select(r),be(o,""),be(t,0))}}}var wr=(a,e,t,n,o)=>{be(e,""),t.select(h(n)),be(o,0)},yr=D("<li> </li>"),kr=D('<ul class="absolute top-full left-0 z-50 mt-1 max-h-64 w-full overflow-auto rounded border border-info/30 bg-background/95 shadow-lg"></ul>'),Er=D('<div class="flex h-12 w-full items-center justify-center border-b border-info-hover bg-background/70 px-4 backdrop-blur-lg md:justify-end"><div class="relative w-72"><div class="relative"><!> <input type="text" placeholder="Search projects..." class="w-full rounded border border-info/30 bg-background/50 py-1.5 pr-12 pl-9 text-sm text-text-disabled focus:ring-1 focus:ring-info/50 focus:outline-none"/> <span class="absolute top-1/2 right-2 hidden -translate-y-1/2 rounded border border-gray-700 bg-background/70 px-1.5 py-0.5 text-[10px] text-text-muted md:flex">Ctrl + K</span></div> <!></div></div>');function Vt(a,e){O(e,!0);let t=Ze(""),n=Ze(0),o;function i(){return h(t)?e.projects.filter(d=>d.name.toLowerCase().includes(h(t).toLowerCase())):[]}function r(d){d.ctrlKey&&d.key.toLowerCase()==="k"&&(d.preventDefault(),o?.focus())}ht(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}));var s=Er(),y=v(s),m=v(y),f=v(m);Xa(f,{size:16,class:"absolute top-1/2 left-3 -translate-y-1/2 text-text-muted"});var x=E(f,2);Da(x),x.__keydown=[br,i,n,e,t],Ta(x,d=>o=d,()=>o),Be(2),c(m);var N=E(m,2);{var S=d=>{var _=kr();ze(_,21,i,Ae,(k,P,R)=>{var $=yr();$.__click=[wr,t,e,P,n];var U=v($,!0);c($),ce(()=>{Sa($,1,`cursor-pointer px-3 py-1 text-sm ${R===h(n)?"bg-info/20 text-info":"text-text-disabled hover:bg-info/10"}`),fe(U,h(P).name)}),l(k,$)}),c(_),l(d,_)};b(N,d=>{h(t)&&i().length>0&&d(S)})}c(y),c(s),La(x,()=>h(t),d=>be(t,d)),l(a,s),L()}Fe(["keydown","click"]);var Nr=(a,e,t)=>e(h(t).name),Pr=D('<span class="rounded bg-info/10 px-2 py-1 text-xs text-info/70"> </span>'),Mr=D('<div class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors" aria-disabled="true"><!> ONGOING</div>'),Cr=D('<a class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors hover:bg-info/30"><!> Open</a>'),Tr=D('<div class="mt-3 space-y-2 border-t border-info/10 pt-3 text-start"><p class="text-xs text-text-muted"> </p> <div class="flex flex-wrap gap-1"></div> <div class="flex items-center justify-between pt-2"><span class="text-xs text-text-muted"> </span> <!></div></div>'),Dr=D('<button class="w-full rounded-lg border border-info/20 bg-background/40 p-3 transition-all duration-150 hover:border-info/40"><div class="flex w-full items-center justify-between rounded text-left transition-all duration-150"><div class="flex items-center px-2 py-1"><!> <span class="text-sm font-medium text-info/90"> </span></div> <!></div> <!></button>'),Sr=D('<div class="mb-6"><h3 class="mb-3 text-sm font-semibold text-text-muted">SUBPROJECTS</h3> <div class="space-y-2"></div></div>'),Rr=D('<span class="rounded-lg border border-info/30 bg-background/60 px-3 py-1 text-xs text-info/90"> </span>'),Ar=D('<div class="mb-6"><h3 class="mb-2 text-sm font-semibold text-text-muted">TECHNOLOGIES</h3> <div class="flex flex-wrap gap-2"></div></div>'),zr=D('<a class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"><!> OPEN <!></a>'),Or=D('<a aria-disabled="true" class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition"><!> ONGOING <!></a>'),Lr=D('<a target="_blank" rel="noopener noreferrer" class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"><!> OPEN <!></a>'),Ir=D('<div class="mb-6 flex items-center"><div class="mr-4 h-12 w-12 rounded bg-info-hover p-3 text-info/80"><!></div> <div><h2 class="text-xl font-bold text-info/90"> </h2> <div class="text-xs text-text-muted"><!></div></div></div> <div class="mb-6"><h3 class="mb-2 text-sm font-semibold text-text-muted">DESCRIPTION</h3> <p class="text-sm text-text-muted"> </p></div> <!> <!> <!>',1),$r=D('<div class="relative flex w-92 flex-col rounded-md border border-info-hover bg-background/80 p-6 backdrop-blur-lg md:w-full md:rounded-none md:border-l"><button class="absolute top-4 right-4 rounded-full p-1 text-text-muted hover:bg-background hover:text-text-disabled" aria-label="close preview"><!></button> <!></div>');function Gt(a,e){O(e,!0);let t=Ze(xt([]));function n(f){h(t).includes(f)?be(t,h(t).filter(x=>x!==f),!0):be(t,[...h(t),f],!0)}function o(f){f.key==="Escape"&&(f.preventDefault(),e.closePreview())}ht(()=>{window.addEventListener("keydown",o)}),aa(()=>{window.removeEventListener("keydown",o)});var i=$r(),r=v(i);r.__click=function(...f){e.closePreview?.apply(this,f)};var s=v(r);er(s,{size:16}),c(r);var y=E(r,2);{var m=f=>{var x=Ir(),N=g(x),S=v(N),d=v(S);{var _=C=>{var T=w(),K=g(T);{var le=M=>{Ka(M,{size:24})},A=M=>{var z=w(),Q=g(z);{var me=Y=>{At(Y,{size:24})},ke=Y=>{var G=w(),de=g(G);{var Ve=re=>{Ja(re,{size:24})},Ge=re=>{var X=w(),_e=g(X);{var Ee=Z=>{Ba(Z,{size:24})},Te=Z=>{var ne=w(),ge=g(ne);{var De=ee=>{ct(ee,{size:24})},Se=ee=>{var ie=w(),oe=g(ie);{var te=se=>{Fa(se,{size:24})};b(oe,se=>{e.selected.icon==="Cog"&&se(te)},!0)}l(ee,ie)};b(ge,ee=>{e.selected.icon==="Lock"?ee(De):ee(Se,!1)},!0)}l(Z,ne)};b(_e,Z=>{e.selected.icon==="BookOpen"?Z(Ee):Z(Te,!1)},!0)}l(re,X)};b(de,re=>{e.selected.icon==="Cpu"?re(Ve):re(Ge,!1)},!0)}l(Y,G)};b(Q,Y=>{e.selected.icon==="Globe"?Y(me):Y(ke,!1)},!0)}l(M,z)};b(K,M=>{e.selected.icon==="Folder"?M(le):M(A,!1)})}l(C,T)},k=C=>{var T=w(),K=g(T);{var le=M=>{Rt(M,{size:24})},A=M=>{var z=w(),Q=g(z);{var me=Y=>{Tt(Y,{size:24})},ke=Y=>{var G=w(),de=g(G);{var Ve=re=>{ct(re,{size:24})},Ge=re=>{var X=w(),_e=g(X);{var Ee=Z=>{At(Z,{size:24})},Te=Z=>{var ne=w(),ge=g(ne);{var De=ee=>{Dt(ee,{size:24})},Se=ee=>{var ie=w(),oe=g(ie);{var te=xe=>{Ot(xe,{size:24})},se=xe=>{var Ne=w(),Je=g(Ne);{var tt=je=>{zt(je,{size:24})};b(Je,je=>{e.selected.icon==="Package"&&je(tt)},!0)}l(xe,Ne)};b(oe,xe=>{e.selected.icon==="Server"?xe(te):xe(se,!1)},!0)}l(ee,ie)};b(ge,ee=>{e.selected.icon==="Database"?ee(De):ee(Se,!1)},!0)}l(Z,ne)};b(_e,Z=>{e.selected.icon==="Globe"?Z(Ee):Z(Te,!1)},!0)}l(re,X)};b(de,re=>{e.selected.icon==="Lock"?re(Ve):re(Ge,!1)},!0)}l(Y,G)};b(Q,Y=>{e.selected.icon==="Code"?Y(me):Y(ke,!1)},!0)}l(M,z)};b(K,M=>{e.selected.icon==="File"?M(le):M(A,!1)},!0)}l(C,T)};b(d,C=>{"subProjects"in e.selected?C(_):C(k,!1)})}c(S);var P=E(S,2),R=v(P),$=v(R,!0);c(R);var U=E(R,2),V=v(U);{var u=C=>{var T=Me();ce(K=>fe(T,`PROJECT • ${K??""} • Modified: ${e.selected.modified??""}`),[()=>e.selected.type.toUpperCase()]),l(C,T)},p=C=>{var T=Me();ce(()=>fe(T,`MODULE • Modified: ${e.selected.modified??""}`)),l(C,T)};b(V,C=>{"subProjects"in e.selected?C(u):C(p,!1)})}c(U),c(P),c(N);var I=E(N,2),ve=E(v(I),2),Pe=v(ve,!0);c(ve),c(I);var q=E(I,2);{var H=C=>{var T=Sr(),K=E(v(T),2);ze(K,21,()=>e.selected.subProjects,Ae,(le,A)=>{var M=Dr();M.__click=[Nr,n,A];var z=v(M),Q=v(z),me=v(Q);{var ke=X=>{Rt(X,{size:16,class:"mr-3 text-info/70"})},Y=X=>{var _e=w(),Ee=g(_e);{var Te=ne=>{Tt(ne,{size:16,class:"mr-3 text-info/70"})},Z=ne=>{var ge=w(),De=g(ge);{var Se=ie=>{Dt(ie,{size:16,class:"mr-3 text-info/70"})},ee=ie=>{var oe=w(),te=g(oe);{var se=Ne=>{Ot(Ne,{size:16,class:"mr-3 text-info/70"})},xe=Ne=>{var Je=w(),tt=g(Je);{var je=Ie=>{zt(Ie,{size:16,class:"mr-3 text-info/70"})},Qt=Ie=>{var bt=w(),ea=g(bt);{var ta=at=>{ct(at,{size:16,class:"mr-3 text-info/70"})};b(ea,at=>{h(A).icon==="Lock"&&at(ta)},!0)}l(Ie,bt)};b(tt,Ie=>{h(A).icon==="Package"?Ie(je):Ie(Qt,!1)},!0)}l(Ne,Je)};b(te,Ne=>{h(A).icon==="Server"?Ne(se):Ne(xe,!1)},!0)}l(ie,oe)};b(De,ie=>{h(A).icon==="Database"?ie(Se):ie(ee,!1)},!0)}l(ne,ge)};b(Ee,ne=>{h(A).icon==="Code"?ne(Te):ne(Z,!1)},!0)}l(X,_e)};b(me,X=>{h(A).icon==="File"?X(ke):X(Y,!1)})}var G=E(me,2),de=v(G,!0);c(G),c(Q);var Ve=E(Q,2);{let X=Ye(()=>`text-info/60 transition-transform ${h(t).includes(h(A).name)?"rotate-90":""}`);qe(Ve,{size:14,get class(){return h(X)}})}c(z);var Ge=E(z,2);{var re=X=>{var _e=Tr(),Ee=v(_e),Te=v(Ee,!0);c(Ee);var Z=E(Ee,2);ze(Z,21,()=>h(A).tech,Ae,(oe,te)=>{var se=Pr(),xe=v(se,!0);c(se),ce(()=>fe(xe,h(te))),l(oe,se)}),c(Z);var ne=E(Z,2),ge=v(ne),De=v(ge);c(ge);var Se=E(ge,2);{var ee=oe=>{var te=Mr(),se=v(te);St(se,{size:12,class:"mr-1"}),Be(),c(te),l(oe,te)},ie=oe=>{var te=Cr(),se=v(te);dt(se,{size:12,class:"mr-1"}),Be(),c(te),ce(()=>nt(te,"href",h(A).link)),l(oe,te)};b(Se,oe=>{e.selected.state==="ONGOING"?oe(ee):oe(ie,!1)})}c(ne),c(_e),ce(()=>{fe(Te,h(A).description),fe(De,`Modified: ${h(A).modified??""}`)}),l(X,_e)};b(Ge,X=>{h(t).includes(h(A).name)&&X(re)})}c(M),ce(()=>fe(de,h(A).name)),l(le,M)}),c(K),c(T),l(C,T)};b(q,C=>{"subProjects"in e.selected&&e.selected.subProjects&&e.selected.subProjects.length>0&&C(H)})}var ue=E(q,2);{var he=C=>{var T=Ar(),K=E(v(T),2);ze(K,21,()=>e.selected.tech,Ae,(le,A)=>{var M=Rr(),z=v(M,!0);c(M),ce(()=>fe(z,h(A))),l(le,M)}),c(K),c(T),l(C,T)};b(ue,C=>{e.selected.tech&&C(he)})}var we=E(ue,2);{var ye=C=>{var T=zr(),K=v(T);dt(K,{size:16,class:"mr-2"});var le=E(K,2);{var A=z=>{var Q=Me("PROJECT");l(z,Q)},M=z=>{var Q=Me("MODULE");l(z,Q)};b(le,z=>{"subProjects"in e.selected?z(A):z(M,!1)})}c(T),ce(()=>nt(T,"href",e.selected.link)),l(C,T)},Le=C=>{var T=w(),K=g(T);{var le=M=>{var z=Or(),Q=v(z);St(Q,{size:16,class:"mr-2"});var me=E(Q,2);{var ke=G=>{var de=Me("PROJECT");l(G,de)},Y=G=>{var de=Me("MODULE");l(G,de)};b(me,G=>{"subProjects"in e.selected?G(ke):G(Y,!1)})}c(z),l(M,z)},A=M=>{var z=Lr(),Q=v(z);dt(Q,{size:16,class:"mr-2"});var me=E(Q,2);{var ke=G=>{var de=Me("PROJECT");l(G,de)},Y=G=>{var de=Me("MODULE");l(G,de)};b(me,G=>{"subProjects"in e.selected?G(ke):G(Y,!1)})}c(z),ce(()=>nt(z,"href",e.selected.link)),l(M,z)};b(K,M=>{e.selected.state==="ONGOING"?M(le):M(A,!1)},!0)}l(C,T)};b(we,C=>{e.selected.link==="REDACTED"?C(ye):C(Le,!1)})}ce(()=>{fe($,e.selected.name),fe(Pe,e.selected.description)}),l(f,x)};b(y,f=>{e.selected&&f(m)})}c(i),l(a,i),L()}Fe(["click"]);var Vr=D('<div class="hidden w-96 transition-all duration-300 md:flex md:flex-none"><!></div>'),Gr=D('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:hidden"><div class="w-full max-w-md"><!></div></div>'),jr=D('<div class="min-h-screen w-full overflow-auto bg-background" style="background-image: radial-gradient(circle at center, var(--color-text-5) 1px, transparent 1px); background-size: 24px 24px;"><div class="mx-auto flex min-h-screen w-full flex-col font-mono md:flex-row"><div class="z-60 flex w-full md:hidden"><!></div> <!> <div class="flex w-full flex-1 overflow-auto"><div class="flex flex-1 flex-col transition-all duration-300"><div class="z-60 hidden w-full md:flex"><!></div> <!></div> <!></div> <!></div></div>');function Yr(a,e){O(e,!0);const t=()=>Re(qt,"$currentView",i),n=()=>Re(Zt,"$selected",i),o=()=>Re(pt,"$showPreview",i),[i,r]=et();if(typeof window<"u"){const u=()=>{document.documentElement.style.scrollBehavior=window.innerWidth>768?"smooth":"auto"};u(),window.addEventListener("resize",u)}let s=Ze(xt([]));ht(async()=>{be(s,await Ua(),!0)});var y=jr(),m=v(y),f=v(m),x=v(f);Vt(x,{get currentView(){return t()},get changeCurrentView(){return Mt},get projects(){return h(s)},get select(){return lt}}),c(f);var N=E(f,2);pr(N,{get projects(){return h(s)},get select(){return lt}});var S=E(N,2),d=v(S),_=v(d),k=v(_);Vt(k,{get currentView(){return t()},get changeCurrentView(){return Mt},get projects(){return h(s)},get select(){return lt}}),c(_);var P=E(_,2);j(P,()=>e.children),c(d);var R=E(d,2);{var $=u=>{var p=Vr(),I=v(p);Gt(I,{get selected(){return n()},get closePreview(){return Ct}}),c(p),l(u,p)};b(R,u=>{n()&&o()&&u($)})}c(S);var U=E(S,2);{var V=u=>{var p=Gr(),I=v(p),ve=v(I);Gt(ve,{get selected(){return n()},get closePreview(){return Ct}}),c(I),c(p),l(u,p)};b(U,u=>{n()&&o()&&u(V)})}c(m),c(y),l(a,y),L(),r()}export{Ba as B,Ja as C,Ka as F,At as G,J as I,ct as L,Yr as M,Fa as a,qt as b,Mt as c,La as d,ze as e,Ae as i,Ua as l,ja as p,lt as s};
