import{c as S,aM as G,j as e,r as I,aN as q,aO as W,aP as B}from"./index-f1a5ff0b.js";import{m as Q}from"./index-c04c0422.js";import{u as Z,P as J,Q as K}from"./index.esm-699c5401.js";import{u as _,T as E}from"./index-995b9d48.js";import{u as ee}from"./index-e038d582.js";import{u as se}from"./usePopper-1dbffb61.js";import{C as te}from"./CloseButton-4410af22.js";import{I as re}from"./Input-f96f5d40.js";const U=c=>{const{percent:n,size:p,children:m,strokeColor:r}=c,l=S("progress-bg",p===G.SM?"h-1.5":"h-2",`bg-${r}`);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"progress-wrapper",children:e.jsx("div",{className:"progress-inner",children:e.jsx("div",{className:l,style:{width:`${n}%`}})})}),m]})};U.displayName="ProgressLine";const z=c=>{const{strokeWidth:n,percent:p,strokeLinecap:m,gapDegree:r,gapPosition:l,strokeColor:o,width:t,children:j}=c,i=I.useCallback(()=>{const s=50-n/2;let x=0,$=-s,N=0,C=-2*s;switch(l){case"left":x=-s,$=0,N=2*s,C=0;break;case"right":x=s,$=0,N=-2*s,C=0;break;case"bottom":$=s,C=2*s;break}const f=`M 50,50 m ${x},${$} a ${s},${s} 0 1 1 ${N},${-C} a ${s},${s} 0 1 1 ${-N},${C}`,P=Math.PI*2*s,v={strokeDasharray:`${P-r}px ${P}px`,strokeDashoffset:`-${r/2}px`},R={strokeDasharray:`${p/100*(P-r)}px ${P}px`,strokeDashoffset:`-${r/2}px`};return{pathString:f,trailPathStyle:v,strokePathStyle:R}},[r,l,p,n]),{pathString:u,trailPathStyle:g,strokePathStyle:a}=i(),d=`progress-circle-stroke text-${o}`;return e.jsxs("div",{className:"progress-circle",style:{width:t},children:[e.jsx("span",{className:"progress-circle-info",children:j}),e.jsxs("svg",{viewBox:"0 0 100 100",children:[e.jsx("path",{d:u,strokeWidth:n,fillOpacity:"0",style:g,className:"progress-circle-trail"}),e.jsx("path",{d:u,strokeLinecap:m,strokeWidth:p===0?0:n,fillOpacity:"0",style:a,className:d})]})]})};z.displayName="ProgressCircle";const ae=I.forwardRef((c,n)=>{const{className:p,customInfo:m,color:r,gapDegree:l=0,gapPosition:o=q.TOP,percent:t=0,showInfo:j=!0,size:i=G.MD,strokeLinecap:u="round",strokeWidth:g=6,width:a=120,variant:d="line"}=c,{themeColor:s,primaryColorLevel:x}=W(),$=()=>j?e.jsx("span",{className:`progress-info ${d}`,children:m||`${t}%`}):null,N=r||`${s}-${x}`,C=S("progress",p,d==="circle"?"circle":"line"),f=()=>{const P=$();let v;return d==="line"&&(v=e.jsx(U,{percent:t,size:i,strokeColor:N,...c,children:P})),d==="circle"&&(v=e.jsx(z,{gapDegree:l,gapPosition:o,percent:t,strokeColor:N,strokeLinecap:u,strokeWidth:g,width:a,...c,children:P})),v};return e.jsx("div",{ref:n,className:C,children:f()})});ae.displayName="Progress";const{COMPLETE:oe,PENDING:ie,IN_PROGRESS:ne,ERROR:le}=B,F=I.forwardRef((c,n)=>{const{className:p,children:m,vertical:r=!1,current:l=0,status:o=ne,onChange:t,...j}=c,i=I.Children.count(m),u=Q(m,(g,a)=>{const d={flexBasis:a<i-1?`${100/(i-1)}%`:void 0,maxWidth:a===i-1?`${100/i}%`:void 0},s={stepNumber:a+1,status:ie,style:r?void 0:d,isLast:a===i-1,vertical:r,onStepChange:t?()=>t(a):void 0,...g.props};return o===le&&a===l-1&&(s.className=S("steps-item-error")),g.props.status||(a===l?(s.status=o,s.className=S(s.className,"steps-item-active")):a<l&&(s.status=oe)),s});return e.jsx("div",{ref:n,className:S("steps",r&&"steps-vertical",p),...j,children:u})});F.displayName="Steps";const{COMPLETE:b,PENDING:ce,IN_PROGRESS:H,ERROR:T}=B,pe={[b]:e.jsx(Z,{}),[ce]:null,[H]:null,[T]:e.jsx(J,{})},X=I.forwardRef((c,n)=>{const{className:p,customIcon:m,description:r,isLast:l,onStepChange:o,status:t,stepNumber:j,title:i,vertical:u,...g}=c,{themeColor:a,primaryColorLevel:d}=W(),s=`${a}-${d}`;let x=e.jsx("span",{children:pe[t]??j});m&&(x=e.jsx("span",{children:m}));const $=S(`step-item step-item-${t}`,u&&"step-item-vertical",p),N=S("step-item-wrapper",o&&"step-clickable"),C=S(`step-item-icon step-item-icon-${t}`,t===b&&`bg-${s} text-white`,t===T&&"step-item-icon-error",t===H&&`text-${s} dark:text-gray-100 border-${s} step-item-icon-current`),f=S("step-connect",u&&"step-connect-vertical",t===b?`bg-${s}`:"inactive"),P=S("step-item-title",t===T&&"step-item-title-error",o&&t!==T&&`hover:text-${s}`),v=()=>{o==null||o()};return e.jsxs("div",{className:$,...g,ref:n,role:"presentation",onClick:v,children:[e.jsxs("div",{className:N,children:[e.jsx("div",{className:C,children:x}),i&&e.jsxs("div",{className:"step-item-content",children:[i&&e.jsx("span",{className:P,children:i}),r&&u&&e.jsx("span",{className:"step-item-description",children:r})]})]}),!l&&e.jsx("div",{className:f})]})});X.displayName="StepItem";const me=F;me.Item=X;const A=I.forwardRef((c,n)=>{const{amPmPlaceholder:p="am",clearable:m=!1,className:r,defaultValue:l=[null,null],disabled:o=!1,format:t="24",id:j,invalid:i,name:u,onChange:g,prefix:a,seperator:d="~",showSeconds:s=!1,size:x,style:$,suffix:N=e.jsx(K,{className:"text-lg"}),timeFieldPlaceholder:C="--",value:f,...P}=c,v=ee(j),R=I.useRef(),w=I.useRef(),[y,k]=I.useState(f??l);_(()=>{typeof g=="function"&&g(y)},[y]),_(()=>{var h,D,L,M;f&&(((h=f[0])==null?void 0:h.getTime())!==((D=y[0])==null?void 0:D.getTime())||((L=f[1])==null?void 0:L.getTime())!==((M=y[1])==null?void 0:M.getTime()))&&k(f)},[f]);const V=()=>{var h;k([null,null]),(h=R.current)==null||h.focus()},Y=m&&y?e.jsx(te,{onClick:V}):e.jsx(e.Fragment,{children:N}),O={amPmPlaceholder:p,disabled:o,format:t,size:x,timeFieldPlaceholder:C,showSeconds:s};return e.jsx(re,{asElement:"div",invalid:i,size:x,className:r,style:$,disabled:o,suffix:Y,prefix:a,onClick:()=>{var h;(h=R.current)==null||h.focus()},...P,children:e.jsxs("div",{className:"time-input-wrapper",children:[e.jsx(E,{ref:se(R,n),unstyle:!0,value:y[0],name:u,nextRef:w,id:v,clearable:!1,suffix:null,onChange:h=>k([h,y[1]]),...O}),e.jsx("span",{className:"time-input-separator",children:d}),e.jsx(E,{ref:w,unstyle:!0,value:y[1],clearable:!1,suffix:null,onChange:h=>k([y[0],h]),...O})]})})});A.displayName="TimeInputRange";const ue=E;ue.TimeInputRange=A;export{ae as P};
