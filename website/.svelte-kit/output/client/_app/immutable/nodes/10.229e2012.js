import{s as qt,a as k,f as c,l as J,e as mt,r as St,d as a,c as y,g as f,h as d,m as K,u as Y,j as s,i as U,w as n,N as qe,I as Qe,B as he,Q as st,n as Te,x as Ve,K as Dt,C as Bt,L as Nt,z as He,M as Ot,A as Le,k as gt,J as It,p as Vt}from"../chunks/scheduler.e544945c.js";import{S as jt,i as Pt,a as Fe,f as Rt}from"../chunks/index.721f4317.js";import{e as ot}from"../chunks/each.2fe1c5ed.js";import{f as zt}from"../chunks/index.078f9b3d.js";import{e as nt}from"../chunks/forms.eea5795d.js";import{n as bt}from"../chunks/stores.6156cb1e.js";import{c as Ut}from"../chunks/copy.65aa4a8b.js";function wt(t,e,l){const o=t.slice();return o[36]=e[l],o[37]=e,o[38]=l,o}function kt(t,e,l){const o=t.slice();return o[39]=e[l],o}function Qt(t){let e,l='To be able to ask a question, you need to be <a href="/auth" class="link">logged-in</a>';return{c(){e=c("h3"),e.innerHTML=l},l(o){e=f(o,"H3",{"data-svelte-h":!0}),Y(e)!=="svelte-hktqv9"&&(e.innerHTML=l)},m(o,u){U(o,e,u)},p:Ve,d(o){o&&a(e)}}}function Ft(t){let e,l="New question",o,u;return{c(){e=c("button"),e.textContent=l,this.h()},l(h){e=f(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1vi8tqu"&&(e.textContent=l),this.h()},h(){s(e,"class","button-primary")},m(h,r){U(h,e,r),o||(u=he(e,"click",t[18]),o=!0)},p:Ve,d(h){h&&a(e),o=!1,u()}}}function yt(t){let e,l="No questions for now";return{c(){e=c("h2"),e.textContent=l},l(o){e=f(o,"H2",{"data-svelte-h":!0}),Y(e)!=="svelte-73zjnf"&&(e.textContent=l)},m(o,u){U(o,e,u)},d(o){o&&a(e)}}}function Ct(t){let e,l='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover/button:text-red-600 transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',o,u;function h(){return t[19](t[36])}return{c(){e=c("button"),e.innerHTML=l,this.h()},l(r){e=f(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-fnded1"&&(e.innerHTML=l),this.h()},h(){s(e,"class","absolute top-1 right-1 transition-all opacity-0 group-hover/question:opacity-100 group/button")},m(r,L){U(r,e,L),o||(u=he(e,"click",h),o=!0)},p(r,L){t=r},d(r){r&&a(e),o=!1,u()}}}function Gt(t){let e,l='To reply, please <a href="/auth" class="link">log-in</a>';return{c(){e=c("p"),e.innerHTML=l},l(o){e=f(o,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-1k8tzno"&&(e.innerHTML=l)},m(o,u){U(o,e,u)},p:Ve,d(o){o&&a(e)}}}function Wt(t){let e,l="Replie",o,u;function h(){return t[20](t[36])}return{c(){e=c("button"),e.textContent=l,this.h()},l(r){e=f(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-afnqyf"&&(e.textContent=l),this.h()},h(){s(e,"class","button-secondary")},m(r,L){U(r,e,L),o||(u=he(e,"click",h),o=!0)},p(r,L){t=r},d(r){r&&a(e),o=!1,u()}}}function Tt(t){let e,l='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover/button:text-red-600 transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',o,u;function h(){return t[22](t[36],t[39])}return{c(){e=c("button"),e.innerHTML=l,this.h()},l(r){e=f(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1xp2esl"&&(e.innerHTML=l),this.h()},h(){s(e,"class","absolute top-1 right-1 transition-all opacity-0 group-hover/replie:opacity-100 group/button")},m(r,L){U(r,e,L),o||(u=he(e,"click",h),o=!0)},p(r,L){t=r},d(r){r&&a(e),o=!1,u()}}}function Et(t){var N;let e,l,o,u=t[39].user.username+"",h,r,L,R=new Date(t[39].at).toLocaleDateString()+"",O,q,D,b,C=t[39].message.replaceAll(`
`,"<br />")+"",z,p=t[39].user.username===((N=t[12])==null?void 0:N.username)&&Tt(t);return{c(){e=c("div"),p&&p.c(),l=k(),o=c("h5"),h=J(u),r=J(" - "),L=c("small"),O=J(R),q=k(),D=c("p"),b=new Nt(!1),z=k(),this.h()},l(v){e=f(v,"DIV",{class:!0});var m=d(e);p&&p.l(m),l=y(m),o=f(m,"H5",{});var Q=d(o);h=K(Q,u),r=K(Q," - "),L=f(Q,"SMALL",{});var T=d(L);O=K(T,R),T.forEach(a),Q.forEach(a),q=y(m),D=f(m,"P",{});var S=d(D);b=Ot(S,!1),S.forEach(a),z=y(m),m.forEach(a),this.h()},h(){b.a=null,s(e,"class","flex flex-col gap-2 border-b border-neutral-200 group/replie relative")},m(v,m){U(v,e,m),p&&p.m(e,null),n(e,l),n(e,o),n(o,h),n(o,r),n(o,L),n(L,O),n(e,q),n(e,D),b.m(C,D),n(e,z)},p(v,m){var Q;v[39].user.username===((Q=v[12])==null?void 0:Q.username)?p?p.p(v,m):(p=Tt(v),p.c(),p.m(e,l)):p&&(p.d(1),p=null),m[0]&4&&u!==(u=v[39].user.username+"")&&Te(h,u),m[0]&4&&R!==(R=new Date(v[39].at).toLocaleDateString()+"")&&Te(O,R),m[0]&4&&C!==(C=v[39].message.replaceAll(`
`,"<br />")+"")&&b.p(C)},d(v){v&&a(e),p&&p.d()}}}function xt(t){var De;let e,l,o,u,h,r=t[36].title+"",L,R,O,q=t[36].description.replaceAll(`
`,"<br />")+"",D,b,C=t[36].postedBy.username+"",z,p,N,v=new Date(t[36].postedAt).toLocaleDateString()+"",m,Q,T,S,F,W,Z,ae=t[36].replies.length+"",le,fe,j,g,V,re,se,E,I,X,ie,w=t[36].postedBy.username===((De=t[12])==null?void 0:De.username)&&Ct(t);function G(A,B){return A[12]?Wt:Gt}let $=G(t)(t);function de(){return t[21](t[36],t[37],t[38])}let ke=ot(t[36].replies),P=[];for(let A=0;A<ke.length;A+=1)P[A]=Et(kt(t,ke,A));return{c(){e=c("div"),l=c("div"),w&&w.c(),o=k(),u=c("div"),h=c("h3"),L=J(r),R=k(),O=new Nt(!1),D=k(),b=c("h6"),z=J(C),p=J(" - "),N=c("small"),m=J(v),Q=k(),T=c("div"),$.c(),S=k(),F=c("div"),W=c("button"),Z=J("Show replies ("),le=J(ae),fe=J(`)\r
                        `),j=He("svg"),g=He("path"),re=k(),se=c("div"),E=c("div");for(let A=0;A<P.length;A+=1)P[A].c();I=k(),this.h()},l(A){e=f(A,"DIV",{class:!0});var B=d(e);l=f(B,"DIV",{class:!0});var H=d(l);w&&w.l(H),o=y(H),u=f(H,"DIV",{class:!0});var M=d(u);h=f(M,"H3",{});var Ee=d(h);L=K(Ee,r),Ee.forEach(a),R=y(M),O=Ot(M,!1),D=y(M),b=f(M,"H6",{});var xe=d(b);z=K(xe,C),p=K(xe," - "),N=f(xe,"SMALL",{});var ye=d(N);m=K(ye,v),ye.forEach(a),xe.forEach(a),Q=y(M),T=f(M,"DIV",{class:!0});var je=d(T);$.l(je),je.forEach(a),M.forEach(a),H.forEach(a),S=y(B),F=f(B,"DIV",{class:!0});var Me=d(F);W=f(Me,"BUTTON",{class:!0,type:!0});var ne=d(W);Z=K(ne,"Show replies ("),le=K(ne,ae),fe=K(ne,`)\r
                        `),j=Le(ne,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Ne=d(j);g=Le(Ne,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),d(g).forEach(a),Ne.forEach(a),ne.forEach(a),re=y(Me),se=f(Me,"DIV",{class:!0,style:!0});var _e=d(se);E=f(_e,"DIV",{class:!0});var ve=d(E);for(let Ce=0;Ce<P.length;Ce+=1)P[Ce].l(ve);ve.forEach(a),_e.forEach(a),Me.forEach(a),I=y(B),B.forEach(a),this.h()},h(){O.a=D,s(T,"class","w-full"),s(u,"class","flex flex-col gap-2"),s(l,"class","group/question flex flex-col gap-2"),s(g,"stroke-linecap","round"),s(g,"stroke-linejoin","round"),s(g,"d","M19.5 8.25l-7.5 7.5-7.5-7.5"),s(j,"xmlns","http://www.w3.org/2000/svg"),s(j,"fill","none"),s(j,"viewBox","0 0 24 24"),s(j,"stroke-width","1.5"),s(j,"stroke","currentColor"),s(j,"class",V="w-6 h-6 transition-all "+(!t[36].hiddenReplies&&"rotate-180")),s(W,"class","w-full flex flex-row gap-4 no-scale underline"),s(W,"type","button"),s(E,"class","w-full flex flex-col gap-4 pl-2"),s(se,"class","w-full overflow-hidden transition-all"),gt(se,"max-height",(t[36].hiddenReplies?0:t[11])+"px"),s(F,"class","flex flex-col gap-2"),s(e,"class","w-full flex flex-col gap-2 px-2 border-x border-neutral-200 relative")},m(A,B){U(A,e,B),n(e,l),w&&w.m(l,null),n(l,o),n(l,u),n(u,h),n(h,L),n(u,R),O.m(q,u),n(u,D),n(u,b),n(b,z),n(b,p),n(b,N),n(N,m),n(u,Q),n(u,T),$.m(T,null),n(e,S),n(e,F),n(F,W),n(W,Z),n(W,le),n(W,fe),n(W,j),n(j,g),n(F,re),n(F,se),n(se,E);for(let H=0;H<P.length;H+=1)P[H]&&P[H].m(E,null);t[23](E),n(e,I),X||(ie=he(W,"click",de),X=!0)},p(A,B){var H;if(t=A,t[36].postedBy.username===((H=t[12])==null?void 0:H.username)?w?w.p(t,B):(w=Ct(t),w.c(),w.m(l,o)):w&&(w.d(1),w=null),B[0]&4&&r!==(r=t[36].title+"")&&Te(L,r),B[0]&4&&q!==(q=t[36].description.replaceAll(`
`,"<br />")+"")&&O.p(q),B[0]&4&&C!==(C=t[36].postedBy.username+"")&&Te(z,C),B[0]&4&&v!==(v=new Date(t[36].postedAt).toLocaleDateString()+"")&&Te(m,v),$.p(t,B),B[0]&4&&ae!==(ae=t[36].replies.length+"")&&Te(le,ae),B[0]&4&&V!==(V="w-6 h-6 transition-all "+(!t[36].hiddenReplies&&"rotate-180"))&&s(j,"class",V),B[0]&5764){ke=ot(t[36].replies);let M;for(M=0;M<ke.length;M+=1){const Ee=kt(t,ke,M);P[M]?P[M].p(Ee,B):(P[M]=Et(Ee),P[M].c(),P[M].m(E,null))}for(;M<P.length;M+=1)P[M].d(1);P.length=ke.length}B[0]&2052&&gt(se,"max-height",(t[36].hiddenReplies?0:t[11])+"px")},d(A){A&&a(e),w&&w.d(),$.d(),Dt(P,A),t[23](null),X=!1,ie()}}}function Mt(t){let e,l,o,u;return{c(){e=He("svg"),l=He("circle"),o=He("path"),this.h()},l(h){e=Le(h,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0});var r=d(e);l=Le(r,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),d(l).forEach(a),o=Le(r,"path",{class:!0,fill:!0,d:!0}),d(o).forEach(a),r.forEach(a),this.h()},h(){s(l,"class","opacity-25"),s(l,"cx","12"),s(l,"cy","12"),s(l,"r","10"),s(l,"stroke","currentColor"),s(l,"stroke-width","4"),s(o,"class","opacity-75"),s(o,"fill","currentColor"),s(o,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),s(e,"class","animate-spin -ml-1 mr-3 h-5 w-5 text-white"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24")},m(h,r){U(h,e,r),n(e,l),n(e,o)},i(h){h&&(u||It(()=>{u=Rt(e,zt,{y:100,duration:400}),u.start()}))},o:Ve,d(h){h&&a(e)}}}function Ht(t){var V,re,se;let e,l,o,u='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all group-hover:rotate-90"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>',h,r,L,R=(t[10]?(re=(V=t[2].filter(t[33])[0])==null?void 0:V.postedBy)==null?void 0:re.username:"")+"",O,q,D,b,C=((se=t[0])==null?void 0:se.length)+"",z,p,N,v,m,Q,T,S,F,W="Reply",Z,ae,le,fe,j,g=t[5]&&Lt();return{c(){e=c("div"),l=c("form"),o=c("button"),o.innerHTML=u,h=k(),r=c("h3"),L=J("Reply to "),O=J(R),q=k(),D=c("div"),b=c("span"),z=J(C),p=J("/"),N=J(Se),v=k(),m=c("textarea"),Q=k(),T=c("button"),g&&g.c(),S=k(),F=c("span"),F.textContent=W,this.h()},l(E){e=f(E,"DIV",{class:!0});var I=d(e);l=f(I,"FORM",{method:!0,action:!0,class:!0});var X=d(l);o=f(X,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-ur3khf"&&(o.innerHTML=u),h=y(X),r=f(X,"H3",{});var ie=d(r);L=K(ie,"Reply to "),O=K(ie,R),ie.forEach(a),q=y(X),D=f(X,"DIV",{class:!0});var w=d(D);b=f(w,"SPAN",{class:!0});var G=d(b);z=K(G,C),p=K(G,"/"),N=K(G,Se),G.forEach(a),v=y(w),m=f(w,"TEXTAREA",{placeholder:!0,name:!0,rows:!0}),d(m).forEach(a),w.forEach(a),Q=y(X),T=f(X,"BUTTON",{type:!0,class:!0});var _=d(T);g&&g.l(_),S=y(_),F=f(_,"SPAN",{class:!0,"data-svelte-h":!0}),Y(F)!=="svelte-1arf78q"&&(F.textContent=W),_.forEach(a),X.forEach(a),I.forEach(a),this.h()},h(){var E;s(o,"type","button"),s(o,"class","group absolute top-2 right-2"),s(b,"class","absolute top-1 right-1 text-xs font-normal"),s(m,"placeholder","Replie content"),s(m,"name","message"),s(m,"rows","6"),s(D,"class","relative"),s(F,"class","transition-all"),s(T,"type","submit"),s(T,"class","button-primary transition-all overflow-hidden"),T.disabled=Z=((E=t[0])==null?void 0:E.length)===0,s(l,"method","POST"),s(l,"action","?/newReplie"),s(l,"class","rounded-lg bg-white p-4 flex flex-col gap-4 max-w-lg w-full relative"),s(e,"class",le="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(t[3]?"opacity-100 z-40":"opacity-0 -z-10"))},m(E,I){U(E,e,I),n(e,l),n(l,o),n(l,h),n(l,r),n(r,L),n(r,O),n(l,q),n(l,D),n(D,b),n(b,z),n(b,p),n(b,N),n(D,v),n(D,m),qe(m,t[0]),n(l,Q),n(l,T),g&&g.m(T,null),n(T,S),n(T,F),fe||(j=[he(o,"click",t[32]),he(m,"input",t[34]),Qe(ae=nt.call(null,l,t[35]))],fe=!0)},p(E,I){var X,ie,w,G;I[0]&1028&&R!==(R=(E[10]?(ie=(X=E[2].filter(E[33])[0])==null?void 0:X.postedBy)==null?void 0:ie.username:"")+"")&&Te(O,R),I[0]&1&&C!==(C=((w=E[0])==null?void 0:w.length)+"")&&Te(z,C),I[0]&1&&qe(m,E[0]),E[5]?g?I[0]&32&&Fe(g,1):(g=Lt(),g.c(),Fe(g,1),g.m(T,S)):g&&(g.d(1),g=null),I[0]&1&&Z!==(Z=((G=E[0])==null?void 0:G.length)===0)&&(T.disabled=Z),ae&&st(ae.update)&&I[0]&1056&&ae.update.call(null,E[35]),I[0]&8&&le!==(le="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(E[3]?"opacity-100 z-40":"opacity-0 -z-10"))&&s(e,"class",le)},d(E){E&&a(e),g&&g.d(),fe=!1,Bt(j)}}}function Lt(t){let e,l,o,u;return{c(){e=He("svg"),l=He("circle"),o=He("path"),this.h()},l(h){e=Le(h,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0});var r=d(e);l=Le(r,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),d(l).forEach(a),o=Le(r,"path",{class:!0,fill:!0,d:!0}),d(o).forEach(a),r.forEach(a),this.h()},h(){s(l,"class","opacity-25"),s(l,"cx","12"),s(l,"cy","12"),s(l,"r","10"),s(l,"stroke","currentColor"),s(l,"stroke-width","4"),s(o,"class","opacity-75"),s(o,"fill","currentColor"),s(o,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),s(e,"class","animate-spin -ml-1 mr-3 h-5 w-5 text-white"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24")},m(h,r){U(h,e,r),n(e,l),n(e,o)},i(h){h&&(u||It(()=>{u=Rt(e,zt,{y:100,duration:400}),u.start()}))},o:Ve,d(h){h&&a(e)}}}function Xt(t){var pt;let e,l,o,u,h,r,L,R,O,q,D,b,C,z,p="Delete replie",N,v,m='<span class="text-red-600 font-semibold">WARNING</span> : This operation is irreversible. Are you sure you want to delete this replie ?',Q,T,S,F="No, cancel",W,Z,ae="Yes, delete",le,fe,j,g,V,re,se="Delete question",E,I,X='<span class="text-red-600 font-semibold">WARNING</span> : This operation is irreversible. Are you sure you want to delete this question ?',ie,w,G,_="No, cancel",$,de,ke="Yes, delete",P,De,A,B,H,M,Ee='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all group-hover:rotate-90"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>',xe,ye,je="New question",Me,ne,Ne,_e,ve,Ce=((pt=t[0])==null?void 0:pt.length)+"",Ge,at,rt,it,ge,ut,pe,We,Be,ht="Post",Xe,Ye,Je,Ke,Oe,ct,dt;function At(i,x){return i[12]?Ft:Qt}let Pe=At(t)(t),ue=t[2].length===0&&yt(),Ie=ot(t[2]),te=[];for(let i=0;i<Ie.length;i+=1)te[i]=xt(wt(t,Ie,i));let ee=t[5]&&Mt(),oe=t[2].length>0&&Ht(t);return{c(){e=k(),l=c("div"),o=c("div"),u=c("h6"),h=J("Support e-mail : "),r=c("button"),L=J(t[13]),R=k(),Pe.c(),O=k(),ue&&ue.c(),q=k();for(let i=0;i<te.length;i+=1)te[i].c();D=k(),b=c("div"),C=c("form"),z=c("h3"),z.textContent=p,N=k(),v=c("p"),v.innerHTML=m,Q=k(),T=c("div"),S=c("button"),S.textContent=F,W=k(),Z=c("button"),Z.textContent=ae,j=k(),g=c("div"),V=c("form"),re=c("h3"),re.textContent=se,E=k(),I=c("p"),I.innerHTML=X,ie=k(),w=c("div"),G=c("button"),G.textContent=_,$=k(),de=c("button"),de.textContent=ke,A=k(),B=c("div"),H=c("form"),M=c("button"),M.innerHTML=Ee,xe=k(),ye=c("h3"),ye.textContent=je,Me=k(),ne=c("input"),Ne=k(),_e=c("div"),ve=c("span"),Ge=J(Ce),at=J("/"),rt=J(Se),it=k(),ge=c("textarea"),ut=k(),pe=c("button"),ee&&ee.c(),We=k(),Be=c("span"),Be.textContent=ht,Ke=k(),oe&&oe.c(),Oe=mt(),this.h()},l(i){St("svelte-by7ird",document.head).forEach(a),e=y(i),l=f(i,"DIV",{class:!0});var be=d(l);o=f(be,"DIV",{class:!0});var me=d(o);u=f(me,"H6",{class:!0});var Re=d(u);h=K(Re,"Support e-mail : "),r=f(Re,"BUTTON",{class:!0});var ce=d(r);L=K(ce,t[13]),ce.forEach(a),Re.forEach(a),R=y(me),Pe.l(me),O=y(me),ue&&ue.l(me),q=y(me);for(let ft=0;ft<te.length;ft+=1)te[ft].l(me);me.forEach(a),be.forEach(a),D=y(i),b=f(i,"DIV",{class:!0});var Ue=d(b);C=f(Ue,"FORM",{method:!0,action:!0,class:!0});var ze=d(C);z=f(ze,"H3",{"data-svelte-h":!0}),Y(z)!=="svelte-tgm5nk"&&(z.textContent=p),N=y(ze),v=f(ze,"P",{"data-svelte-h":!0}),Y(v)!=="svelte-1j6u709"&&(v.innerHTML=m),Q=y(ze),T=f(ze,"DIV",{class:!0});var Ze=d(T);S=f(Ze,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Y(S)!=="svelte-1ks6b4t"&&(S.textContent=F),W=y(Ze),Z=f(Ze,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Y(Z)!=="svelte-bxqqfv"&&(Z.textContent=ae),Ze.forEach(a),ze.forEach(a),Ue.forEach(a),j=y(i),g=f(i,"DIV",{class:!0});var _t=d(g);V=f(_t,"FORM",{method:!0,action:!0,class:!0});var Ae=d(V);re=f(Ae,"H3",{"data-svelte-h":!0}),Y(re)!=="svelte-19vke2t"&&(re.textContent=se),E=y(Ae),I=f(Ae,"P",{"data-svelte-h":!0}),Y(I)!=="svelte-1e9m2jq"&&(I.innerHTML=X),ie=y(Ae),w=f(Ae,"DIV",{class:!0});var $e=d(w);G=f($e,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Y(G)!=="svelte-1ks6b4t"&&(G.textContent=_),$=y($e),de=f($e,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Y(de)!=="svelte-bxqqfv"&&(de.textContent=ke),$e.forEach(a),Ae.forEach(a),_t.forEach(a),A=y(i),B=f(i,"DIV",{class:!0});var vt=d(B);H=f(vt,"FORM",{method:!0,action:!0,class:!0});var we=d(H);M=f(we,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Y(M)!=="svelte-1p1ol4p"&&(M.innerHTML=Ee),xe=y(we),ye=f(we,"H3",{"data-svelte-h":!0}),Y(ye)!=="svelte-17ix9ni"&&(ye.textContent=je),Me=y(we),ne=f(we,"INPUT",{type:!0,name:!0,placeholder:!0}),Ne=y(we),_e=f(we,"DIV",{class:!0});var et=d(_e);ve=f(et,"SPAN",{class:!0});var tt=d(ve);Ge=K(tt,Ce),at=K(tt,"/"),rt=K(tt,Se),tt.forEach(a),it=y(et),ge=f(et,"TEXTAREA",{name:!0,placeholder:!0,rows:!0}),d(ge).forEach(a),et.forEach(a),ut=y(we),pe=f(we,"BUTTON",{type:!0,class:!0});var lt=d(pe);ee&&ee.l(lt),We=y(lt),Be=f(lt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Be)!=="svelte-1pzyyxo"&&(Be.textContent=ht),lt.forEach(a),we.forEach(a),vt.forEach(a),Ke=y(i),oe&&oe.l(i),Oe=mt(),this.h()},h(){var i,x;document.title="PCC - Get Help",s(r,"class","font-semibold"),s(u,"class","font-normal"),s(o,"class","w-full h-full flex flex-col gap-4"),s(l,"class","max-w-screen-lg mx-auto mt-4 grow w-full py-8 px-4 lg:px-6"),s(S,"class","button-secondary"),s(S,"type","button"),s(Z,"class","button-primary"),s(Z,"type","submit"),s(T,"class","grid grid-cols-1 md:grid-cols-2 gap-2"),s(C,"method","POST"),s(C,"action","?/deleteReplie"),s(C,"class","rounded-lg bg-white p-4 flex flex-col gap-4 max-w-lg w-full relative"),s(b,"class",fe="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(t[7]?"opacity-100 z-40":"opacity-0 -z-10")),s(G,"class","button-secondary"),s(G,"type","button"),s(de,"class","button-primary"),s(de,"type","submit"),s(w,"class","grid grid-cols-1 md:grid-cols-2 gap-2"),s(V,"method","POST"),s(V,"action","?/deleteQuestion"),s(V,"class","rounded-lg bg-white p-4 flex flex-col gap-4 max-w-lg w-full relative"),s(g,"class",De="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(t[4]?"opacity-100 z-40":"opacity-0 -z-10")),s(M,"type","button"),s(M,"class","group absolute top-2 right-2"),s(ne,"type","text"),s(ne,"name","title"),s(ne,"placeholder","Question title"),s(ve,"class","absolute top-1 right-1 text-xs font-normal"),s(ge,"name","description"),s(ge,"placeholder","Question content"),s(ge,"rows","6"),s(_e,"class","relative"),s(Be,"class","transition-all"),s(pe,"type","submit"),s(pe,"class","button-primary transition-all overflow-hidden"),pe.disabled=Xe=((i=t[0])==null?void 0:i.length)===0||((x=t[8])==null?void 0:x.length)===0,s(H,"method","POST"),s(H,"action","?/newQuestion"),s(H,"class","rounded-lg bg-white p-4 flex flex-col gap-4 max-w-lg w-full relative"),s(B,"class",Je="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(t[6]?"opacity-100 z-40":"opacity-0 -z-10"))},m(i,x){U(i,e,x),U(i,l,x),n(l,o),n(o,u),n(u,h),n(u,r),n(r,L),n(o,R),Pe.m(o,null),n(o,O),ue&&ue.m(o,null),n(o,q);for(let be=0;be<te.length;be+=1)te[be]&&te[be].m(o,null);U(i,D,x),U(i,b,x),n(b,C),n(C,z),n(C,N),n(C,v),n(C,Q),n(C,T),n(T,S),n(T,W),n(T,Z),U(i,j,x),U(i,g,x),n(g,V),n(V,re),n(V,E),n(V,I),n(V,ie),n(V,w),n(w,G),n(w,$),n(w,de),U(i,A,x),U(i,B,x),n(B,H),n(H,M),n(H,xe),n(H,ye),n(H,Me),n(H,ne),qe(ne,t[8]),n(H,Ne),n(H,_e),n(_e,ve),n(ve,Ge),n(ve,at),n(ve,rt),n(_e,it),n(_e,ge),qe(ge,t[0]),n(H,ut),n(H,pe),ee&&ee.m(pe,null),n(pe,We),n(pe,Be),U(i,Ke,x),oe&&oe.m(i,x),U(i,Oe,x),ct||(dt=[Qe(Ut.call(null,r,t[13])),he(r,"svelte-copy",t[16]),he(r,"svelte-copy:error",t[17]),he(S,"click",t[24]),Qe(le=nt.call(null,C,t[25])),he(G,"click",t[26]),Qe(P=nt.call(null,V,t[27])),he(M,"click",t[28]),he(ne,"input",t[29]),he(ge,"input",t[30]),Qe(Ye=nt.call(null,H,t[31]))],ct=!0)},p(i,x){var be,me,Re;if(Pe.p(i,x),i[2].length===0?ue||(ue=yt(),ue.c(),ue.m(o,q)):ue&&(ue.d(1),ue=null),x[0]&7838){Ie=ot(i[2]);let ce;for(ce=0;ce<Ie.length;ce+=1){const Ue=wt(i,Ie,ce);te[ce]?te[ce].p(Ue,x):(te[ce]=xt(Ue),te[ce].c(),te[ce].m(o,null))}for(;ce<te.length;ce+=1)te[ce].d(1);te.length=Ie.length}le&&st(le.update)&&x[0]&1536&&le.update.call(null,i[25]),x[0]&128&&fe!==(fe="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(i[7]?"opacity-100 z-40":"opacity-0 -z-10"))&&s(b,"class",fe),P&&st(P.update)&&x[0]&1024&&P.update.call(null,i[27]),x[0]&16&&De!==(De="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(i[4]?"opacity-100 z-40":"opacity-0 -z-10"))&&s(g,"class",De),x[0]&256&&ne.value!==i[8]&&qe(ne,i[8]),x[0]&1&&Ce!==(Ce=((be=i[0])==null?void 0:be.length)+"")&&Te(Ge,Ce),x[0]&1&&qe(ge,i[0]),i[5]?ee?x[0]&32&&Fe(ee,1):(ee=Mt(),ee.c(),Fe(ee,1),ee.m(pe,We)):ee&&(ee.d(1),ee=null),x[0]&257&&Xe!==(Xe=((me=i[0])==null?void 0:me.length)===0||((Re=i[8])==null?void 0:Re.length)===0)&&(pe.disabled=Xe),Ye&&st(Ye.update)&&x[0]&32&&Ye.update.call(null,i[31]),x[0]&64&&Je!==(Je="fixed top-O left-0 w-full h-full transition-opacity flex flex-col justify-center items-center bg-neutral-600/50 p-2 "+(i[6]?"opacity-100 z-40":"opacity-0 -z-10"))&&s(B,"class",Je),i[2].length>0?oe?oe.p(i,x):(oe=Ht(i),oe.c(),oe.m(Oe.parentNode,Oe)):oe&&(oe.d(1),oe=null)},i(i){Fe(ee)},o:Ve,d(i){i&&(a(e),a(l),a(D),a(b),a(j),a(g),a(A),a(B),a(Ke),a(Oe)),Pe.d(),ue&&ue.d(),Dt(te,i),ee&&ee.d(),oe&&oe.d(i),ct=!1,Bt(dt)}}}const Se=1e3;function Yt(t,e,l){let{data:o}=e,{form:u}=e,{questions:h,user:r,supportEmail:L}=o;h=h.map(_=>({..._,hiddenReplies:!0}));let R=!1,O=!1,q=!1,D=!1,b=!1,C="",z,p="",N,v,m;const Q=()=>{bt("success","Copied to clipboard successfully!")},T=()=>{bt("error","An error occurred while copying to the clipboard")},S=()=>{l(6,D=!D)},F=_=>{l(10,N=_.id),l(4,O=!O)},W=_=>{l(10,N=_.id),l(3,R=!R)},Z=(_,$,de)=>{l(2,$[de].hiddenReplies=!_.hiddenReplies,h)},ae=(_,$)=>{l(10,N=_.id),l(9,z=$.id),l(7,b=!b)};function le(_){Vt[_?"unshift":"push"](()=>{v=_,l(1,v)})}const fe=()=>{l(4,O=!1)},j=_=>(_.formData.set("questionId",N),_.formData.set("replieId",z),({update:$})=>{$({reset:!1})}),g=()=>{l(4,O=!1)},V=_=>(_.formData.set("questionId",N),({update:$})=>{$({reset:!1})}),re=()=>{l(6,D=!1)};function se(){C=this.value,l(8,C)}function E(){p=this.value,l(0,p)}const I=()=>(l(5,q=!0),({update:_})=>{l(5,q=!1),_({reset:!1})}),X=()=>{l(10,N=void 0),l(3,R=!1)},ie=_=>_.id===N;function w(){p=this.value,l(0,p)}const G=_=>(l(5,q=!0),_.formData.set("postId",N),({update:$})=>{l(5,q=!1),$({reset:!1})});return t.$$set=_=>{"data"in _&&l(14,o=_.data),"form"in _&&l(15,u=_.form)},t.$$.update=()=>{t.$$.dirty[0]&32768&&u!=null&&u.success&&location.reload(),t.$$.dirty[0]&1&&(p==null?void 0:p.length)>Se&&l(0,p=p.slice(0,Se)),t.$$.dirty[0]&2&&v&&l(11,m=v.clientHeight)},[p,v,h,R,O,q,D,b,C,z,N,m,r,L,o,u,Q,T,S,F,W,Z,ae,le,fe,j,g,V,re,se,E,I,X,ie,w,G]}class nl extends jt{constructor(e){super(),Pt(this,e,Yt,Xt,qt,{data:14,form:15},null,[-1,-1])}}export{nl as component};
