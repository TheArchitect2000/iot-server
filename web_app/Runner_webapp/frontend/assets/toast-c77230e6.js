import{r as o,c as y,j as c,aV as R,b3 as S}from"./index-bf8a941f.js";import{u as W,S as D}from"./StatusIcon-0225b6e9.js";import{C as B}from"./CloseButton-d50c43fd.js";import{m as _}from"./motion-23928477.js";function F(...e){return e.filter(t=>t!==null&&typeof t<"u").reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===void 0?n:function(...i){t.apply(this,i),n.apply(this,i)}},void 0)}const O=o.forwardRef((e,t)=>{const{className:n,children:a,closable:i=!1,customIcon:l,duration:m=3e3,onClose:r,style:s,title:p,triggerByToast:d,type:f,width:j=350,...N}=e,[C,v]=o.useState("show"),{clear:x}=W(r,m,m>0),k=o.useCallback(T=>{v("hiding"),r==null||r(T),x(),d||setTimeout(()=>{v("hide")},400)},[r,x,d]),u=y("notification",n);return C==="hide"?null:c.jsxs("div",{ref:t,...N,className:u,style:{width:j,...s},children:[c.jsxs("div",{className:y("notification-content",!a&&"no-child"),children:[f&&!l?c.jsx("div",{className:"mr-3",children:c.jsx(D,{type:f})}):null,l&&c.jsx("div",{className:"mr-3",children:l}),c.jsxs("div",{className:"mr-4",children:[p&&c.jsx("div",{className:y("notification-title",a&&"mb-1"),children:p}),c.jsx("div",{className:"notification-description",children:a})]})]}),i&&c.jsx(B,{className:"notification-close",defaultStyle:!1,absolute:!0,onClick:k})]})});O.displayName="Notification";const z=({offsetX:e,offsetY:t,placement:n,transitionType:a})=>a==="fade"?K(e,t)[n]:H(e,t)[n],h={initial:{opacity:0,transform:"scale(0.75)"},animate:{transform:"scale(1)",opacity:1},exit:{opacity:0,transform:"scale(0.75)"}},b={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},H=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...h}},"top-start":{default:{top:t,left:e},variants:{...h}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}},"bottom-end":{default:{bottom:t,right:e},variants:{...h}},"bottom-start":{default:{bottom:t,left:e},variants:{...h}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}}}),K=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...b}},"top-start":{default:{top:t,left:e},variants:{...b}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}},"bottom-end":{default:{bottom:t,right:e},variants:{...b}},"bottom-start":{default:{bottom:t,left:e},variants:{...b}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}}}),L=e=>{const[t,n]=o.useState([]),a=o.useCallback(r=>(typeof r>"u"&&t.length&&(r=t[t.length-1].key),r),[t]),i=o.useCallback(r=>{const s=e||"_"+Math.random().toString(36).substr(2,12);return n([...t,{key:s,visible:!0,node:r}]),s},[t,e]),l=o.useCallback(()=>{n(t.map(r=>({...r,visible:!1}))),setTimeout(()=>{n([])},50)},[t]),m=o.useCallback(r=>{n(t.map(s=>(s.key===a(r)&&(s.visible=!1),s))),setTimeout(()=>{n(t.filter(s=>s.visible))},50)},[t,a]);return{messages:t,push:i,removeAll:l,remove:m}},w=o.forwardRef((e,t)=>{const n=o.useRef(null),{transitionType:a="scale",placement:i=R.TOP_END,offsetX:l=30,offsetY:m=30,messageKey:r,block:s=!1,callback:p,...d}=e,{push:f,removeAll:j,remove:N,messages:C}=L(r);o.useImperativeHandle(t,()=>({root:n.current,push:f,removeAll:j,remove:N}));const v=z({offsetX:l,offsetY:m,placement:i,transitionType:a}),x={triggerByToast:!0,...d},k=C.map(u=>{var T,P,I,M;return c.jsx(_.div,{className:"toast-wrapper",initial:v.variants.initial,variants:v.variants,animate:u.visible?"animate":"exit",transition:{duration:.15,type:"tween"},children:o.cloneElement(u.node,{...x,ref:t,onClose:F((P=(T=u.node)==null?void 0:T.props)==null?void 0:P.onClose,()=>N(u.key)),className:y((M=(I=u.node)==null?void 0:I.props)==null?void 0:M.className)})},u.key)});return c.jsx("div",{style:v.default,...d,ref:u=>{n.current=u,p==null||p(u)},className:y("toast",s&&"w-full"),children:k})});w.getInstance=e=>{const{wrapper:t,...n}=e,a=o.createRef(),i=(typeof t=="function"?t():t)||document.body;return new Promise(l=>{const m=()=>{l([a,s])};function r(p){const d=document.createElement("div");i.appendChild(d);const f=S(d);return f.render(p),f}const{unmount:s}=r(c.jsx(w,{...n,ref:a,callback:m}))})};w.displayName="ToastWrapper";const V={placement:R.TOP_END,offsetX:30,offsetY:30,transitionType:"scale",block:!1},A="default",g=new Map;function q(e){if(/\top\b/.test(e))return"top-full";if(/\bottom\b/.test(e))return"bottom-full"}async function G(e,t){const[n]=await w.getInstance(t);return g.set(e||A,n),n}function J(e){return g.size===0?null:g.get(e||A)}const E=e=>E.push(e);E.push=(e,t=V)=>{let n=t.placement;t.block&&(n=q(t.placement));const a=J(n);return a!=null&&a.current?a.current.push(e):G(n??"",t).then(i=>{var l;return(l=i.current)==null?void 0:l.push(e)})};E.remove=e=>{g.forEach(t=>t.current.remove(e))};E.removeAll=()=>{g.forEach(e=>e.current.removeAll())};export{O as N,F as c,E as t};
