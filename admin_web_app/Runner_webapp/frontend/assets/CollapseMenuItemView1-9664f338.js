import{j as r,r as m,u as p}from"./index-f1a5ff0b.js";import"./Alert-3f64b1b7.js";import"./index-87490377.js";import"./Badge-93ce6042.js";import{B as c}from"./Button-afcfcbb1.js";import"./index-995b9d48.js";import{C as h}from"./Card-d39e23a6.js";import"./index-56c156a2.js";import"./Skeleton-f6c4cf8c.js";import"./index-443dcd01.js";import"./index-54792e3d.js";import"./FormItem-abebf158.js";import"./Input-f96f5d40.js";import"./index-a40ab2e0.js";import"./index-e038d582.js";import"./toast-a2d3b2a8.js";import"./index-8424e2af.js";import"./ScrollBar-f45e915f.js";import"./index-3e2b7b09.js";import"./Select-894eed33.js";import"./index-28f98aac.js";import"./index-5a7a16fd.js";import"./Tag-85d8db80.js";import"./index-c04c0422.js";import"./Upload-c97b599f.js";import{j as f,k as u}from"./ServiceAPI-60d60c3c.js";import{I as x}from"./ImageWithFallBack-e0abed2e.js";import"./StatusIcon-7c22de5b.js";import"./index.esm-699c5401.js";import"./CloseButton-4410af22.js";import"./motion-bbaf39fb.js";import"./usePopper-1dbffb61.js";import"./warning-31bbcec2.js";import"./index-fd7e9c30.js";import"./context-07f85daf.js";import"./useControllableState-404b8b27.js";import"./useRootClose-02fb158e.js";import"./cloneDeep-8806e7e3.js";import"./_MapCache-be4b2d97.js";import"./Views-545588fb.js";import"./_getPrototype-4a7ee280.js";import"./get-9c300d8d.js";import"./index-3bc265bb.js";import"./isNil-439bb3ad.js";import"./chainedFunction-070f832c.js";import"./RichTextEditor-84be8b19.js";import"./index-ff5affb8.js";import"./react-tooltip.min-0e1c37db.js";import"./SegmentItemOption-eeadaa43.js";import"./useThemeClass-a2b8f01d.js";import"./SvgIcon-82ce3cf9.js";const j=({serviceId:t,className:a,name:i,type:e,description:o,serviceImage:s})=>{const l=()=>{window.confirm(`Are you sure you want to delete the ${i} Service ?`)&&(f(t),setTimeout(()=>{window.location.reload()},1e3))},d=r.jsx("div",{className:"flex items-center gap-2 justify-center",children:r.jsx(c,{variant:"solid",size:"sm",onClick:l,children:"Uninstall"})}),n=r.jsx("div",{className:"flex card-header-svg items-center justify-center rounded-tl-lg rounded-tr-lg overflow-hidden",children:r.jsx(x,{src:s&&s||"/img/others/img-1.jpg",alt:"card header"})});return r.jsx("div",{className:`max-w-xs ${a}`,children:r.jsxs(h,{clickable:!0,className:"w-[300px] hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid",header:n,footer:d,headerClass:"p-0",footerBorder:!1,headerBorder:!1,children:[r.jsx("span",{className:"text-emerald-600 font-semibold",children:e}),r.jsx("h4",{className:"font-bold my-3",children:i}),r.jsx("div",{className:"h-16 line-clamp-4",children:o})]})})},xr=()=>{const[t,a]=m.useState([]),{_id:i}=p(e=>e.auth.user);return m.useEffect(()=>{(async()=>{try{const s=(await u(i)).data;a(s.data)}catch(o){console.error("Error fetching installed services:",o)}})()},[]),r.jsxs("div",{children:[r.jsx("h3",{className:"pb-4",children:"Installed Services"}),r.jsx("div",{className:"grid xl:grid-cols-3",children:t==null?void 0:t.map(e=>r.jsx(j,{serviceId:e._id,className:"mt-8 mx-auto",name:e.installedServiceName,description:e.description,type:e.activationStatus,installationPrice:e.installationPrice,serviceImage:e.installedServiceImage}))})]})};export{xr as default};
