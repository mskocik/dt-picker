import{_ as zs}from"../chunks/preload-helper-b22d3b18.js";import{S as ws,i as $s,s as Ts,l as i,m as c,n as r,h as t,p as a,b as k,E as K,r as o,a as h,V as vs,w as Ms,u as l,c as g,x as Os,N as n,y as Vs,f as Hs,t as Ls,B as Ns,o as qs}from"../chunks/index-28983a80.js";function Rs(L){let e,H=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> registerElement <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelty-picker'</span><span class="token punctuation">;</span>

  <span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">'el-picker'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- somewhere in HTML --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>el-picker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code>`;return{c(){e=i("pre"),this.h()},l(_){e=c(_,"PRE",{class:!0});var m=r(e);m.forEach(t),this.h()},h(){a(e,"class","language-svelte")},m(_,m){k(_,e,m),e.innerHTML=H},p:K,i:K,o:K,d(_){_&&t(e)}}}class Us extends ws{constructor(e){super(),$s(this,e,null,Rs,Ts,{})}}function As(L){let e,H,_,m,Q,w,W,X,N,E,Y,b,Z,ss,q,$,as,R,C,x,U,D,A,u,ts,T,ns,es,I,ps,os,S,ls,cs,z,us,is,M,rs,ks,B,f,v,ms,O,ds,fs,y,F,P,Is=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>el-picker<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>picker-from<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>picker-to<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-date[from]<span class="token punctuation">"</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyyy-mm-dd<span class="token punctuation">"</span></span><span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>From<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>delimiter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&mdash;">&amp;mdash;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>el-picker<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>picker-to<span class="token punctuation">"</span></span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>picker-from<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-date[to]<span class="token punctuation">"</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyyy-mm-dd<span class="token punctuation">"</span></span><span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>To<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,j;return D=new Us({}),{c(){e=i("h2"),H=o("Custom Element"),_=h(),m=i("p"),Q=o("Custom element is defined as extension to native "),w=i("code"),W=o("input"),X=o(` tag. Custom element
supports all options that can be passed as string (So all except initialDate). The input itself should always be placed
inside relative positioned container.`),N=h(),E=i("div"),Y=o("Please not that for cross-browser support (Safari), this "),b=i("a"),Z=o("ungap/custom-element"),ss=o(" polyfill is required."),q=h(),$=i("p"),as=o("Picker initialized as custom element:"),R=h(),C=i("div"),x=vs("input","el-picker"),U=h(),Ms(D.$$.fragment),A=h(),u=i("p"),ts=o("Custom element supports 2 custom "),T=i("code"),ns=o("from"),es=o(" and "),I=i("code"),ps=o("to"),os=o(` properties, which should
  specify `),S=i("b"),ls=o("id"),cs=o(" of different datetime picker for limiting "),z=i("code"),us=o("startDate"),is=o(" or "),M=i("code"),rs=o("endDate"),ks=o(`.
  Check source how it is defined.`),B=h(),f=i("div"),v=vs("input","el-picker"),ms=h(),O=i("div"),ds=o("\u2014"),fs=h(),y=vs("input","el-picker"),F=h(),P=i("pre"),this.h()},l(s){e=c(s,"H2",{class:!0});var p=r(e);H=l(p,"Custom Element"),p.forEach(t),_=g(s),m=c(s,"P",{class:!0});var G=r(m);Q=l(G,"Custom element is defined as extension to native "),w=c(G,"CODE",{class:!0});var ys=r(w);W=l(ys,"input"),ys.forEach(t),X=l(G,` tag. Custom element
supports all options that can be passed as string (So all except initialDate). The input itself should always be placed
inside relative positioned container.`),G.forEach(t),N=g(s),E=c(s,"DIV",{class:!0});var J=r(E);Y=l(J,"Please not that for cross-browser support (Safari), this "),b=c(J,"A",{href:!0,target:!0});var _s=r(b);Z=l(_s,"ungap/custom-element"),_s.forEach(t),ss=l(J," polyfill is required."),J.forEach(t),q=g(s),$=c(s,"P",{});var hs=r($);as=l(hs,"Picker initialized as custom element:"),hs.forEach(t),R=g(s),C=c(s,"DIV",{class:!0});var gs=r(C);x=c(gs,"INPUT",{type:!0,name:!0,is:!0,format:!0,class:!0,placeholder:!0}),gs.forEach(t),U=g(s),Os(D.$$.fragment,s),A=g(s),u=c(s,"P",{class:!0});var d=r(u);ts=l(d,"Custom element supports 2 custom "),T=c(d,"CODE",{class:!0});var Es=r(T);ns=l(Es,"from"),Es.forEach(t),es=l(d," and "),I=c(d,"CODE",{class:!0});var xs=r(I);ps=l(xs,"to"),xs.forEach(t),os=l(d,` properties, which should
  specify `),S=c(d,"B",{class:!0});var bs=r(S);ls=l(bs,"id"),bs.forEach(t),cs=l(d," of different datetime picker for limiting "),z=c(d,"CODE",{class:!0});var Cs=r(z);us=l(Cs,"startDate"),Cs.forEach(t),is=l(d," or "),M=c(d,"CODE",{class:!0});var Ds=r(M);rs=l(Ds,"endDate"),Ds.forEach(t),ks=l(d,`.
  Check source how it is defined.`),d.forEach(t),B=g(s),f=c(s,"DIV",{class:!0});var V=r(f);v=c(V,"INPUT",{type:!0,id:!0,to:!0,name:!0,format:!0,is:!0,placeholder:!0,class:!0}),ms=g(V),O=c(V,"DIV",{class:!0});var Ps=r(O);ds=l(Ps,"\u2014"),Ps.forEach(t),fs=g(V),y=c(V,"INPUT",{type:!0,id:!0,from:!0,name:!0,format:!0,is:!0,placeholder:!0,class:!0}),V.forEach(t),F=g(s),P=c(s,"PRE",{class:!0});var Ss=r(P);Ss.forEach(t),this.h()},h(){a(e,"class","header"),a(w,"class","code"),a(m,"class","my-4"),a(b,"href","https://github.com/ungap/custom-elements#readme"),a(b,"target","_blank"),a(E,"class","my-4 p-2 bg-red-300 dark:bg-red-500"),a(x,"type","text"),a(x,"name","my-date"),a(x,"is","el-picker"),a(x,"format","dS MM"),a(x,"class","border-1 rounded-md border-gray-300 p-1"),a(x,"placeholder","Pick your birthdate"),a(C,"class","relative"),a(T,"class","code"),a(I,"class","code"),a(S,"class","font-bold"),a(z,"class","code"),a(M,"class","code"),a(u,"class","my-4"),a(v,"type","text"),a(v,"id","picker-from"),a(v,"to","picker-to"),a(v,"name","my-date[from]"),a(v,"format","yyyy-mm-dd"),a(v,"is","el-picker"),a(v,"placeholder","From"),a(v,"class","svelte-zgg3t3"),a(O,"class","delimiter svelte-zgg3t3"),a(y,"type","text"),a(y,"id","picker-to"),a(y,"from","picker-from"),a(y,"name","my-date[to]"),a(y,"format","yyyy-mm-dd"),a(y,"is","el-picker"),a(y,"placeholder","To"),a(y,"class","svelte-zgg3t3"),a(f,"class","group svelte-zgg3t3"),a(P,"class","language-svelte")},m(s,p){k(s,e,p),n(e,H),k(s,_,p),k(s,m,p),n(m,Q),n(m,w),n(w,W),n(m,X),k(s,N,p),k(s,E,p),n(E,Y),n(E,b),n(b,Z),n(E,ss),k(s,q,p),k(s,$,p),n($,as),k(s,R,p),k(s,C,p),n(C,x),k(s,U,p),Vs(D,s,p),k(s,A,p),k(s,u,p),n(u,ts),n(u,T),n(T,ns),n(u,es),n(u,I),n(I,ps),n(u,os),n(u,S),n(S,ls),n(u,cs),n(u,z),n(z,us),n(u,is),n(u,M),n(M,rs),n(u,ks),k(s,B,p),k(s,f,p),n(f,v),n(f,ms),n(f,O),n(O,ds),n(f,fs),n(f,y),k(s,F,p),k(s,P,p),P.innerHTML=Is,j=!0},p:K,i(s){j||(Hs(D.$$.fragment,s),j=!0)},o(s){Ls(D.$$.fragment,s),j=!1},d(s){s&&t(e),s&&t(_),s&&t(m),s&&t(N),s&&t(E),s&&t(q),s&&t($),s&&t(R),s&&t(C),s&&t(U),Ns(D,s),s&&t(A),s&&t(u),s&&t(B),s&&t(f),s&&t(F),s&&t(P)}}}function Bs(L){return qs(()=>{zs(()=>import("../chunks/custom-element-e2f63f08.js"),["immutable/chunks/custom-element-e2f63f08.js","immutable/chunks/SveltyPicker-eda5fbc6.js","immutable/assets/SveltyPicker-a3464f28.css","immutable/chunks/index-28983a80.js"]).then(e=>{console.log("\u{1F973} registering SveltyPicker as <el-picker> element"),e.registerElement&&e.registerElement("el-picker")}).catch(e=>console.log("error",e))}),[]}class Gs extends ws{constructor(e){super(),$s(this,e,Bs,As,Ts,{})}}export{Gs as default};