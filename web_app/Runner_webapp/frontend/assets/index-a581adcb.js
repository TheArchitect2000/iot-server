import{r as a,t as r,q as x,y as _,j as s}from"./index-bf8a941f.js";import{T as l}from"./index-18669cea.js";import{A as h}from"./AdaptableCard-05107d22.js";import{i as b,C as j}from"./Views-4bab5f03.js";import{a as g}from"./AccountServices-593bd49d.js";import"./useControllableState-1a7323ea.js";import"./Card-24bc2910.js";const E=a.lazy(()=>r(()=>import("./Profile-e1c389ca.js"),["assets/Profile-e1c389ca.js","assets/index-bf8a941f.js","assets/index-4cfd9622.css","assets/Input-9402e44f.js","assets/context-3c7bf7d8.js","assets/Views-4bab5f03.js","assets/get-9e555ae1.js","assets/_MapCache-72043566.js","assets/motion-23928477.js","assets/Tag-338a2893.js","assets/usePopper-113fdeb0.js","assets/index-a2b882c4.js","assets/index-2e58d6d9.js","assets/Upload-cf8abc1c.js","assets/cloneDeep-93156ba4.js","assets/Button-0f33c8fd.js","assets/CloseButton-d50c43fd.js","assets/index.esm-4fe97196.js","assets/toast-c77230e6.js","assets/StatusIcon-0225b6e9.js","assets/FormContainer-7c6e47ec.js","assets/FormDesription-3c4296f2.js","assets/FormRow-31162199.js","assets/index.esm-510ed08c.js","assets/UserApi-a54a968c.js","assets/MediaAPI-e2a7ad99.js","assets/Card-24bc2910.js","assets/Badge-b1f0ab32.js","assets/RichTextEditor-3ec4d100.js","assets/index-de79736a.js","assets/Skeleton-67f3ebea.js","assets/index-13a8329a.js","assets/Select-d53c46ac.js","assets/index-9cb1fb6e.js","assets/index-346a9733.js","assets/RichTextEditor-8e59e50e.css","assets/ServiceAPI-25e2710b.js","assets/SegmentItemOption-48394355.js","assets/useThemeClass-81aec1c2.js","assets/SvgIcon-51ef36c9.js","assets/Alert-1d842e79.js","assets/index-6975cd84.js","assets/useControllableState-1a7323ea.js","assets/index-754123b4.js","assets/Switcher-2f2e5a73.js","assets/index-8128ce47.js","assets/index-0a71f11b.js","assets/index-6728dd01.js","assets/index-18669cea.js","assets/TimezoneSelector-d7a3257f.js","assets/countrys-06199e16.js"])),T=a.lazy(()=>r(()=>import("./Address-97ab9cc8.js"),["assets/Address-97ab9cc8.js","assets/index-bf8a941f.js","assets/index-4cfd9622.css","assets/Input-9402e44f.js","assets/context-3c7bf7d8.js","assets/Views-4bab5f03.js","assets/get-9e555ae1.js","assets/_MapCache-72043566.js","assets/motion-23928477.js","assets/toast-c77230e6.js","assets/StatusIcon-0225b6e9.js","assets/index.esm-4fe97196.js","assets/CloseButton-d50c43fd.js","assets/FormContainer-7c6e47ec.js","assets/index-2e58d6d9.js","assets/FormDesription-3c4296f2.js","assets/FormRow-31162199.js","assets/index.esm-510ed08c.js","assets/UserApi-a54a968c.js","assets/countrys-06199e16.js","assets/Alert-1d842e79.js","assets/Tag-338a2893.js","assets/usePopper-113fdeb0.js","assets/index-a2b882c4.js","assets/Badge-b1f0ab32.js","assets/Button-0f33c8fd.js","assets/index-6975cd84.js","assets/useControllableState-1a7323ea.js","assets/index-754123b4.js","assets/Card-24bc2910.js","assets/index-9cb1fb6e.js","assets/cloneDeep-93156ba4.js","assets/Skeleton-67f3ebea.js","assets/index-13a8329a.js","assets/Switcher-2f2e5a73.js","assets/index-8128ce47.js","assets/index-0a71f11b.js","assets/index-6728dd01.js","assets/Select-d53c46ac.js","assets/index-de79736a.js","assets/index-18669cea.js","assets/Upload-cf8abc1c.js","assets/RichTextEditor-3ec4d100.js","assets/index-346a9733.js","assets/RichTextEditor-8e59e50e.css","assets/ServiceAPI-25e2710b.js","assets/SegmentItemOption-48394355.js","assets/useThemeClass-81aec1c2.js","assets/SvgIcon-51ef36c9.js"])),v=a.lazy(()=>r(()=>import("./Password-77dfec9d.js"),["assets/Password-77dfec9d.js","assets/index-bf8a941f.js","assets/index-4cfd9622.css","assets/Input-9402e44f.js","assets/context-3c7bf7d8.js","assets/Views-4bab5f03.js","assets/get-9e555ae1.js","assets/_MapCache-72043566.js","assets/motion-23928477.js","assets/Button-0f33c8fd.js","assets/toast-c77230e6.js","assets/StatusIcon-0225b6e9.js","assets/index.esm-4fe97196.js","assets/CloseButton-d50c43fd.js","assets/FormContainer-7c6e47ec.js","assets/index-2e58d6d9.js","assets/FormDesription-3c4296f2.js","assets/FormRow-31162199.js","assets/index.esm-510ed08c.js","assets/UserApi-a54a968c.js"])),{TabNav:A,TabList:P}=l,c={profile:{label:"Profile",path:"profile"},address:{label:"Address",path:"address"},password:{label:"Password",path:"password"}},w=()=>{const[e,n]=a.useState("profile"),[o,p]=a.useState({}),d=x(),i=_(),m=i.pathname.substring(i.pathname.lastIndexOf("/")+1),f=t=>{console.log(t),n(t),d(`/account/settings/${t}`)},u=async()=>{const t=await g();p(t.data)};return a.useEffect(()=>{n(m),b(o)&&u()},[]),s.jsx(j,{children:s.jsxs(h,{children:[s.jsx(l,{value:e,onChange:t=>f(t),children:s.jsx(P,{children:Object.keys(c).map(t=>s.jsx(A,{value:t,children:c[t].label},t))})}),s.jsx("div",{className:"px-4 py-6",children:s.jsxs(a.Suspense,{fallback:s.jsx(s.Fragment,{}),children:[e==="profile"&&s.jsx(E,{data:o.profile}),e==="password"&&s.jsx(v,{data:o.profile}),e==="address"&&s.jsx(T,{})]})})]})})},R=w;export{R as default};
