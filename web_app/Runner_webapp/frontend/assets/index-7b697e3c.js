import{u as d,r as e,j as i,a9 as f}from"./index-bf8a941f.js";import{S as u}from"./Card-82839b3d.js";import{S as h}from"./Statistic-5f1ff676.js";import{c as x}from"./ServiceAPI-25e2710b.js";import"./Card-24bc2910.js";import"./Badge-b1f0ab32.js";import"./RichTextEditor-3ec4d100.js";import"./Tag-338a2893.js";import"./Button-0f33c8fd.js";import"./Skeleton-67f3ebea.js";import"./Views-4bab5f03.js";import"./Input-9402e44f.js";import"./SegmentItemOption-48394355.js";import"./SvgIcon-51ef36c9.js";import"./Alert-1d842e79.js";import"./StatusIcon-0225b6e9.js";import"./index.esm-4fe97196.js";import"./CloseButton-d50c43fd.js";import"./motion-23928477.js";import"./index-6975cd84.js";import"./useControllableState-1a7323ea.js";import"./usePopper-113fdeb0.js";import"./index-754123b4.js";import"./context-3c7bf7d8.js";import"./index-9cb1fb6e.js";import"./cloneDeep-93156ba4.js";import"./_MapCache-72043566.js";import"./get-9e555ae1.js";import"./Switcher-2f2e5a73.js";import"./index-13a8329a.js";import"./index-a2b882c4.js";import"./index-8128ce47.js";import"./index-2e58d6d9.js";import"./toast-c77230e6.js";import"./index-0a71f11b.js";import"./FormContainer-7c6e47ec.js";import"./index-6728dd01.js";import"./Select-d53c46ac.js";import"./index-de79736a.js";import"./index-18669cea.js";import"./Upload-cf8abc1c.js";import"./ImageWithFallBack-a6a1ee24.js";import"./index-346a9733.js";import"./useThemeClass-81aec1c2.js";function at(){const{_id:o}=d(t=>t.auth.user),[r,a]=e.useState([]),[m,p]=e.useState(!0),[s,n]=e.useState(0);function c(){n(s+1)}return e.useEffect(()=>{async function t(){const l=await x((o==null?void 0:o.toString())||"");a(l.data.data),p(!1)}t()},[s]),i.jsxs("div",{children:[i.jsx("h3",{className:"mb-4",children:"My Services"}),i.jsx(h,{}),i.jsx("div",{className:"grid xl:grid-cols-3",children:r&&(r==null?void 0:r.map(t=>i.jsx(u,{refresh:c,serviceId:t._id,className:"mt-8 mx-auto",name:t.serviceName,description:t.description,serviceImage:t.serviceImage,type:t.serviceType,installationPrice:t.installationPrice,serviceData:t},t._id)))}),m===!0&&i.jsx("div",{className:"w-full h-[80vh] flex justify-center items-center",children:i.jsx(f,{loading:!0})}),m===!1&&r.length===0&&i.jsx("div",{className:"w-full h-[65vh] flex justify-center items-center",children:i.jsx("h1",{children:"Data not found !"})})]})}export{at as default};
