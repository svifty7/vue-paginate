import{d as L,r as N,c as T,o as R,a as e,n as p,b as r,e as d,w as u,f,F as w,g as V,u as S,h as o,i as F,t as y,_ as P,j as M,k as $,l as K,m as j}from"./app.5104b53d.js";const H=["tabindex"],z=["tabindex"],I=["onClick","onKeyup"],U=["tabindex"],Y=["tabindex"],J=["onClick","onKeyup"],O=L({__name:"VuePaginate",props:{modelValue:null,forcePage:null,containerClass:null,pageClass:null,pageLinkClass:null,prevClass:null,prevLinkClass:null,nextClass:null,nextLinkClass:null,breakViewClass:null,breakViewLinkClass:null,pageCount:null,clickHandler:{type:Function,default:()=>{}},pageRange:{default:3},marginPages:{default:1},prevText:{default:"Prev"},nextText:{default:"Next"},breakViewText:{default:"…"},activeClass:{default:"active"},disabledClass:{default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{default:"First"},lastButtonText:{default:"Last"},hidePrevNext:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:b}){const l=n,h=N(1),D=T({get:()=>l.modelValue||h.value,set:t=>{h.value=t}}),k=T(()=>{const t=[];if(l.pageCount<=l.pageRange)for(let a=0;a<l.pageCount;a++)t[a]={index:a,content:a+1,selected:a===D.value-1};if(l.pageCount>l.pageRange){const a=Math.floor(l.pageRange/2),s=c=>{t[c]={index:c,content:c+1,selected:c===D.value-1}},m=c=>{t[c]={index:c,disabled:!0,breakView:!0}};for(let c=0;c<l.marginPages;c++)s(c);let C=0;D.value-a>0&&(C=D.value-1-a);let x=C+l.pageRange-1;x>=l.pageCount&&(x=l.pageCount-1,C=x-l.pageRange+1);for(let c=C;c<=x&&c<=l.pageCount-1;c++)s(c);C>l.marginPages&&m(C-1),x+1<l.pageCount-l.marginPages&&m(x+1);for(let c=l.pageCount-1;c>=l.pageCount-l.marginPages;c--)s(c)}return t.filter(a=>!!a)}),i=t=>{D.value!==t&&(h.value=t,b("update:modelValue",t),l.clickHandler(t))},v=()=>{D.value<=1||i(D.value-1)},q=()=>{D.value>=l.pageCount||i(D.value+1)},A=()=>D.value===1,g=()=>D.value===l.pageCount||l.pageCount===0,E=()=>{D.value<=1||i(1)},B=()=>{D.value>=l.pageCount||i(l.pageCount)};return R(()=>{l.forcePage!==void 0&&l.forcePage!==D.value&&(D.value=l.forcePage)}),(t,a)=>n.noLiSurround?(o(),e("div",{key:1,class:p(n.containerClass)},[n.firstLastButton?(o(),e("a",{key:0,class:p([n.pageLinkClass,A()?n.disabledClass:""]),tabindex:"0",onClick:a[8]||(a[8]=s=>E()),onKeyup:a[9]||(a[9]=u(s=>E(),["enter"]))},[d(t.$slots,"firstBtnText",{},()=>[F(y(n.firstButtonText),1)],!0)],34)):f("",!0),A()&&n.hidePrevNext?f("",!0):(o(),e("a",{key:1,class:p([n.prevLinkClass,A()?n.disabledClass:""]),tabindex:"0",onClick:a[10]||(a[10]=s=>v()),onKeyup:a[11]||(a[11]=u(s=>v(),["enter"]))},[d(t.$slots,"prevBtnText",{},()=>[F(y(n.prevText),1)],!0)],34)),(o(!0),e(w,null,V(S(k),(s,m)=>(o(),e(w,{key:m},[s!=null&&s.breakView?(o(),e("a",{key:0,class:p([n.pageLinkClass,n.breakViewLinkClass,s!=null&&s.disabled?n.disabledClass:""]),tabindex:"0"},[d(t.$slots,"breakViewContent",{},()=>[F(y(n.breakViewText),1)],!0)],2)):s!=null&&s.disabled?(o(),e("a",{key:1,class:p([n.pageLinkClass,s!=null&&s.selected?n.activeClass:"",n.disabledClass]),tabindex:"0"},y(s==null?void 0:s.content),3)):(o(),e("a",{key:2,class:p([n.pageLinkClass,s!=null&&s.selected?n.activeClass:""]),tabindex:"0",onClick:C=>i(s.index+1),onKeyup:u(C=>i(s.index+1),["enter"])},y(s==null?void 0:s.content),43,J))],64))),128)),g()&&n.hidePrevNext?f("",!0):(o(),e("a",{key:2,class:p([n.nextLinkClass,g()?n.disabledClass:""]),tabindex:"0",onClick:a[12]||(a[12]=s=>q()),onKeyup:a[13]||(a[13]=u(s=>q(),["enter"]))},[d(t.$slots,"nextBtnText",{},()=>[F(y(n.nextText),1)],!0)],34)),n.firstLastButton?(o(),e("a",{key:3,class:p([n.pageLinkClass,g()?n.disabledClass:""]),tabindex:"0",onClick:a[14]||(a[14]=s=>B()),onKeyup:a[15]||(a[15]=u(s=>B(),["enter"]))},[d(t.$slots,"lastBtnText",{},()=>[F(y(n.lastButtonText),1)],!0)],34)):f("",!0)],2)):(o(),e("ul",{key:0,class:p(n.containerClass)},[n.firstLastButton?(o(),e("li",{key:0,class:p([n.pageClass,A()?n.disabledClass:""])},[r("a",{class:p(n.pageLinkClass),tabindex:A()?-1:0,onClick:a[0]||(a[0]=s=>E()),onKeyup:a[1]||(a[1]=u(s=>E(),["enter"]))},[d(t.$slots,"firstBtnText",{},()=>[F(y(n.firstButtonText),1)],!0)],42,H)],2)):f("",!0),A()&&n.hidePrevNext?f("",!0):(o(),e("li",{key:1,class:p([n.prevClass,A()?n.disabledClass:""])},[r("a",{class:p(n.prevLinkClass),tabindex:A()?-1:0,onClick:a[2]||(a[2]=s=>v()),onKeyup:a[3]||(a[3]=u(s=>v(),["enter"]))},[d(t.$slots,"prevBtnText",{},()=>[F(y(n.prevText),1)],!0)],42,z)],2)),(o(!0),e(w,null,V(S(k),(s,m)=>(o(),e("li",{key:m,class:p([n.pageClass,s!=null&&s.selected?n.activeClass:"",s!=null&&s.disabled?n.disabledClass:"",s!=null&&s.breakView?n.breakViewClass:""])},[s!=null&&s.breakView?(o(),e("a",{key:0,class:p([n.pageLinkClass,n.breakViewLinkClass]),tabindex:"0"},[d(t.$slots,"breakViewContent",{},()=>[F(y(n.breakViewText),1)],!0)],2)):s!=null&&s.disabled?(o(),e("a",{key:1,class:p(n.pageLinkClass),tabindex:"0"},y(s==null?void 0:s.content),3)):(o(),e("a",{key:2,class:p(n.pageLinkClass),tabindex:"0",onClick:C=>i(s.index+1),onKeyup:u(C=>i(s.index+1),["enter"])},y(s==null?void 0:s.content),43,I))],2))),128)),g()&&n.hidePrevNext?f("",!0):(o(),e("li",{key:2,class:p([n.nextClass,g()?n.disabledClass:""])},[r("a",{class:p(n.nextLinkClass),tabindex:g()?-1:0,onClick:a[4]||(a[4]=s=>q()),onKeyup:a[5]||(a[5]=u(s=>q(),["enter"]))},[d(t.$slots,"nextBtnText",{},()=>[F(y(n.nextText),1)],!0)],42,U)],2)),n.firstLastButton?(o(),e("li",{key:3,class:p([n.pageClass,g()?n.disabledClass:""])},[r("a",{class:p(n.pageLinkClass),tabindex:g()?-1:0,onClick:a[6]||(a[6]=s=>B()),onKeyup:a[7]||(a[7]=u(s=>B(),["enter"]))},[d(t.$slots,"lastBtnText",{},()=>[F(y(n.lastButtonText),1)],!0)],42,Y)],2)):f("",!0)],2))}});const G=P(O,[["__scopeId","data-v-72a1eb73"]]),Q=L({components:{VuePaginate:G},setup(){return{page:N(10)}}});const W=r("div",{style:{"-webkit-transform":"rotate(90deg)",transform:"rotate(90deg)"}},[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M5 9L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L19 9",stroke:"var(--vp-c-bg)","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),X=r("div",{style:{"-webkit-transform":"rotate(-90deg)",transform:"rotate(-90deg)"}},[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M5 9L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L19 9",stroke:"var(--vp-c-bg)","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Z=r("br",null,null,-1);function _(n,b,l,h,D,k){const i=K("vue-paginate");return o(),e(w,null,[r("div",null,[M(i,{modelValue:n.page,"onUpdate:modelValue":b[0]||(b[0]=v=>n.page=v),"page-count":20,"margin-pages":2,"page-range":5,"container-class":"ui pagination menu","page-link-class":"item","prev-link-class":"item","next-link-class":"item","break-view-link-class":"break-view-link","no-li-surround":!0},{prevBtnText:$(()=>[W]),nextBtnText:$(()=>[X]),_:1},8,["modelValue"])]),Z,r("div",null,[F("Current page: "),r("b",null,y(n.page),1)])],64)}const ss=P(Q,[["render",_]]),ns={components:{VuePaginatePreview:ss}},cs=JSON.parse('{"title":"vue-paginate","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"NPM","slug":"npm","link":"#npm","children":[]}]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Value Binding","slug":"value-binding","link":"#value-binding","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Customize inner HTML (experimental)","slug":"customize-inner-html-experimental","link":"#customize-inner-html-experimental","children":[]}],"relativePath":"index.md","lastUpdated":1674746725000}'),as=r("h1",{id:"vue-paginate",tabindex:"-1"},[F("vue-paginate "),r("a",{class:"header-anchor",href:"#vue-paginate","aria-hidden":"true"},"#")],-1),ls=r("p",null,[F("Vue 3 component to make pagination. Fork of "),r("a",{href:"https://github.com/lokyoung/vuejs-paginate",target:"_blank",rel:"noreferrer"},"vuejs-paginate"),F(".")],-1),ts=r("p",null,"Easy to use by providing simple api, and you can customize the style of this component by CSS.",-1),es=j("",23);function os(n,b,l,h,D,k){const i=K("VuePaginatePreview");return o(),e("div",null,[as,ls,ts,M(i),es])}const rs=P(ns,[["render",os]]);export{cs as __pageData,rs as default};
