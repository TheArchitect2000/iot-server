import{j as t,c as i,r as x,aA as b,aj as N,aO as I}from"./index-f1a5ff0b.js";import{A as z,B as M}from"./index.esm-699c5401.js";const $=({totalItems:r,itemsPerPage:c,currentPage:e,onPageChange:l})=>{const s=Math.ceil(r/c),o=n=>{n>=1&&n<=s&&l(n)};return(()=>{const n=[];if(s<=5)for(let a=1;a<=s;a++)n.push(t.jsx("button",{className:i("px-2 py-1 mx-1 border text-white rounded",{"bg-gray-300 text-black":a===e}),onClick:()=>o(a),children:a},a));else if(e<=3){for(let a=1;a<=3;a++)n.push(t.jsx("button",{className:i("px-2 py-1 mx-1 border text-white rounded",{"bg-gray-300 text-black":a===e}),onClick:()=>o(a),children:a},a));n.push(t.jsx("span",{className:"px-2 py-1 mx-1",children:"..."},"ellipsis1")),n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(s-1),children:s-1},s-1)),n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(s),children:s},s))}else if(e>=s-2){n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(1),children:"1"},1)),n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(2),children:"2"},2)),n.push(t.jsx("span",{className:"px-2 py-1 mx-1",children:"..."},"ellipsis2"));for(let a=s-2;a<=s;a++)n.push(t.jsx("button",{className:i("px-2 py-1 mx-1 border text-white rounded",{"bg-gray-300 text-black":a===e}),onClick:()=>o(a),children:a},a))}else{n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(1),children:"1"},1)),n.push(t.jsx("span",{className:"px-2 py-1 mx-1",children:"..."},"ellipsis1"));for(let a=e-1;a<=e+1;a++)n.push(t.jsx("button",{className:i("px-2 py-1 mx-1 border text-white rounded",{"bg-gray-300 text-black":a===e}),onClick:()=>o(a),children:a},a));n.push(t.jsx("span",{className:"px-2 py-1 mx-1",children:"..."},"ellipsis2")),n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(s-1),children:s-1},s-1)),n.push(t.jsx("button",{className:"px-2 py-1 mx-1 border text-white rounded",onClick:()=>o(s),children:s},s))}return t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>o(e-1),disabled:e===1,className:"px-2 py-1 mx-1 border rounded",children:t.jsx(z,{})}),n,t.jsx("button",{onClick:()=>o(e+1),disabled:e===s,className:"px-2 py-1 mx-1 border rounded",children:t.jsx(M,{})})]})})()},C=x.forwardRef((r,c)=>{var j;const{asElement:e="table",borderlessRow:l,children:s,className:o,compact:d=!1,hoverable:n=!0,overflow:a=!0,rowsPerPage:m,...E}=r,[f,B]=x.useState(1),p=b.Children.toArray(s),u=b.Children.toArray((j=p[1])==null?void 0:j.props.children)||[],L=u.length,y=m&&(f-1)*m||0,A=m&&y+m,H=m&&u.slice(y,A)||u,S=[p[0],b.cloneElement(p[1],{},H)],F=i(e==="table"?"table-default":"table-flex",n&&"table-hover",d&&"table-compact",l&&"borderless-row",o);return t.jsxs("div",{className:i(a&&"overflow-x-auto"),children:[t.jsx(e,{className:F,...E,ref:c,children:S}),m&&t.jsx($,{totalItems:L,itemsPerPage:m,currentPage:f,onPageChange:B})]})});C.displayName="Table";const w=x.forwardRef((r,c)=>{const{asElement:e="thead",children:l,className:s,...o}=r,d=i(e!=="thead"&&"thead",s);return t.jsx(e,{className:d,...o,ref:c,children:l})});w.displayName="THead";const T=x.forwardRef((r,c)=>{const{asElement:e="tbody",children:l,className:s,...o}=r,d=i(e!=="tbody"&&"tbody",s);return t.jsx(e,{className:d,...o,ref:c,children:l})});T.displayName="TBody";const g=x.forwardRef((r,c)=>{const{asElement:e="tfoot",children:l,className:s,...o}=r,d=i(e!=="tfoot"&&"tfoot",s);return t.jsx(e,{className:d,...o,ref:c,children:l})});g.displayName="TFoot";const k=x.forwardRef((r,c)=>{const{asElement:e="tr",children:l,className:s,...o}=r,d=i(e!=="tr"&&"tr",s);return t.jsx(e,{ref:c,className:d,...o,children:l})});k.displayName="Tr";const v=x.forwardRef((r,c)=>{const{asElement:e="th",children:l,className:s,...o}=r,d=i(e!=="th"&&"th",s);return t.jsx(e,{className:d,...o,ref:c,children:l})});v.displayName="Th";const R=x.forwardRef((r,c)=>{const{asElement:e="td",children:l,className:s,...o}=r,d=i(e!=="td"&&"td",s);return t.jsx(e,{ref:c,className:d,...o,children:l})});R.displayName="Td";function D(r){return N({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(r)}function G(r){return N({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(r)}function O(r){return N({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(r)}const P=({sort:r})=>{const{themeColor:c,primaryColorLevel:e}=I(),l=`text-${c}-${e}`,s=()=>typeof r=="boolean"?t.jsx(O,{}):r==="asc"?t.jsx(G,{className:l}):r==="desc"?t.jsx(D,{className:l}):null;return t.jsx("div",{className:"inline-flex",children:s()})},h=C;h.THead=w;h.TBody=T;h.TFoot=g;h.Th=v;h.Tr=k;h.Td=R;h.Sorter=P;export{h as T};
