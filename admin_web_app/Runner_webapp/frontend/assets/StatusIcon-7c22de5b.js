import{r,j as n}from"./index-f1a5ff0b.js";import{t as l,j as x,V as m,L as f}from"./index.esm-699c5401.js";function E(o,c=0,s=!0){const t=r.useRef(),e=r.useRef(o),i=r.useCallback(()=>{t.current&&clearTimeout(t.current)},[]),u=r.useCallback(()=>{t.current&&clearTimeout(t.current),s&&(t.current=setTimeout(()=>{var a;(a=e.current)==null||a.call(e)},c))},[c,s]);return r.useEffect(()=>{e.current=o},[o]),r.useEffect(()=>(u(),i),[c,s,u,i]),{clear:i,reset:u}}const j={success:{color:"text-emerald-400",icon:n.jsx(l,{})},info:{color:"text-blue-400",icon:n.jsx(x,{})},warning:{color:"text-yellow-400",icon:n.jsx(m,{})},danger:{color:"text-red-400",icon:n.jsx(f,{})}},H=o=>{const{type:c="info",custom:s,iconColor:t}=o,e=j[c];return n.jsx("span",{className:`text-2xl ${t||e.color}`,children:s||e.icon})};export{H as S,E as u};
