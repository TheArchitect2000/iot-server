import{r as M,j as e,S as H,g as b,N as K,e as L,f as T,c as w,H as V,D as C,h as D,u as c,i as E,k as $}from"./index-f1a5ff0b.js";import{n as _,a as O,A as P,b as g,c as F,u as B,H as U,M as G,U as W}from"./navigation-icon.config-1deae4e8.js";import{S as Y}from"./SidePanel-d0c0d508.js";import{L as z}from"./Logo-68b6abb6.js";import{M as k}from"./index-a40ab2e0.js";import{S as I}from"./ScrollBar-f45e915f.js";import{u as q,V as J}from"./VerticalMenuContent-f65ec8bf.js";import{i as A,V as Q}from"./Views-545588fb.js";import{B as X}from"./Button-afcfcbb1.js";import{H as Z,a as ee}from"./index.esm-699c5401.js";import"./Select-894eed33.js";import"./get-9c300d8d.js";import"./_MapCache-be4b2d97.js";import"./motion-bbaf39fb.js";import"./context-07f85daf.js";import"./index-443dcd01.js";import"./index-3bc265bb.js";import"./warning-31bbcec2.js";import"./CloseButton-4410af22.js";import"./index-87490377.js";import"./usePopper-1dbffb61.js";import"./index-fd7e9c30.js";import"./index-54792e3d.js";import"./isNil-439bb3ad.js";import"./index-e038d582.js";import"./chainedFunction-070f832c.js";import"./useRootClose-02fb158e.js";import"./UserApi-23221c36.js";import"./index-3e2b7b09.js";import"./useControllableState-404b8b27.js";import"./SegmentItemOption-eeadaa43.js";import"./useThemeClass-a2b8f01d.js";import"./DoubleSidedImage-f458c64c.js";import"./Badge-93ce6042.js";import"./isPlainObject-1121af84.js";import"./_getPrototype-4a7ee280.js";const te=h=>{const{navMode:r,onChange:i,routeKey:p,activeKeys:m,onSetActiveKey:d,userAuthority:n,mode:l,direction:u,...o}=h,{includedRouteTree:a}=q(_,p),y=()=>r===K?L:r===T?l:r,S=({key:s,title:j,menu:N,translateKey:v})=>{i({title:j,menu:N,translateKey:v}),d([s])},f=({key:s})=>{i({}),d([s])};return M.useEffect(()=>{a.type!==O&&!A(a)&&i({key:a.key,title:a.title,menu:a.subMenu,translateKey:a.translateKey})},[a.key]),e.jsxs("div",{...o,children:[e.jsx(z,{mode:y(),type:"streamline",className:H}),e.jsx(I,{autoHide:!0,direction:u,children:e.jsx(k,{className:"px-4 pb-4",variant:r,defaultActiveKeys:m||[a.key],children:_.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:g[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:g[s.icon]})})})},s.key))})})]})},se=h=>{const{className:r,title:i,menu:p,routeKey:m,onCollapse:d,direction:n,userAuthority:l,navMode:u,...o}=h,a=()=>{d()};return e.jsxs("div",{className:w("h-full",r),...o,children:[e.jsxs("div",{className:`${V} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:i}),e.jsx(X,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(Z,{}),n===D&&e.jsx(ee,{})]}),onClick:a})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(J,{routeKey:m,navigationTree:p,userAuthority:l,navMode:u})})]})},ae={width:$},re=()=>{const{t:h}=F(),[r,i]=M.useState({}),[p,m]=M.useState([]),d=c(t=>t.theme.themeColor),n=c(t=>t.theme.primaryColorLevel),l=c(t=>t.theme.navMode),u=c(t=>t.theme.mode),o=c(t=>t.theme.direction),a=c(t=>t.base.common.currentRouteKey),y=c(t=>t.auth.user.authority),{larger:S}=B(),f=(t,x,R=!0)=>l===K&&R?`bg-${d}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{i(t)},j=()=>{i({}),m([])},N=t=>{m(t)},v=()=>{let t={};const x=`${-E}px`;return o===C&&(t={marginLeft:x}),o===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(te,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:a,activeKeys:p,navMode:l,userAuthority:y,mode:u,direction:o,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",u,!1)}`,style:{width:E,...A(r)?v():{}},children:!A(r)&&e.jsx(se,{title:h(r.translateKey,r.title),menu:r.menu,routeKey:a,navMode:T,direction:o,userAuthority:y,onCollapse:j})})]})})},ie=()=>e.jsx(e.Fragment,{children:e.jsx(G,{})}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(W,{hoverable:!1})]}),Be=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(re,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(U,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(ie,{}),headerEnd:e.jsx(oe,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Q,{})})]})]})});export{Be as default};
