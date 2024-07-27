import{r as y,aO as ge,c as T,j as O,aC as Ce,R as ye,V as Ae,W as $e,U as D,aw as be,aG as Pe,T as xe,P as Oe,Q as Y}from"./index-f1a5ff0b.js";import{d as me,e as Ee,f as Z,k as Te,b as W,g as we}from"./cloneDeep-8806e7e3.js";import{_ as Se,e as Ie}from"./_MapCache-be4b2d97.js";import{a as z,b as S,c as Re,d as V,_ as j}from"./get-9c300d8d.js";const ee=y.createContext({}),Le=ee.Provider,re=y.forwardRef((e,r)=>{const{name:n,value:a,onChange:t,color:s}=y.useContext(ee),{color:l,className:i,onChange:f,children:v,disabled:u,readOnly:o,name:c=n,defaultChecked:d,value:p,checked:_,labelRef:g,field:h,...C}=e,{themeColor:$,primaryColorLevel:b}=ge(),x=y.useCallback(()=>typeof a<"u"&&typeof p<"u"?a.some(A=>A===p):_||d,[_,a,p,d]),[I,M]=y.useState(x()),ue=(()=>{let A=I,P={checked:A},m={value:A};return typeof _<"u"&&(m.checked=_),h&&(A=typeof h.value=="boolean"?h.value:d,m={value:A,checked:A}),typeof a<"u"&&(P={checked:a.includes(p)}),d&&(m.defaultChecked=d),typeof a<"u"?P:m})(),ce=y.useCallback(A=>{let P=!I;typeof a<"u"&&(P=!a.includes(p)),!(u||o)&&(M(P),f==null||f(P,A),t==null||t(p,P,A))},[I,u,o,M,f,p,t,a]),oe=`checkbox text-${l||s||`${$}-${b}`}`,ve=u&&"disabled",pe="checkbox-label",_e=u&&"disabled",de=T(oe,ve),he=T(pe,_e,i);return O.jsxs("label",{ref:g,className:he,children:[O.jsx("input",{ref:r,className:de,type:"checkbox",disabled:u,readOnly:o,name:c,onChange:ce,...ue,...h,...C}),v?O.jsx("span",{className:T("ltr:ml-2 rtl:mr-2",u?"opacity-50":""),children:v}):null]})});re.displayName="Checkbox";var De="__lodash_hash_undefined__";function Me(e){return this.__data__.set(e,De),this}var Ge=Me;function Ne(e){return this.__data__.has(e)}var qe=Ne,He=Se,Ue=Ge,Ke=qe;function w(e){var r=-1,n=e==null?0:e.length;for(this.__data__=new He;++r<n;)this.add(e[r])}w.prototype.add=w.prototype.push=Ue;w.prototype.has=Ke;var ke=w;function Fe(e,r){for(var n=-1,a=e==null?0:e.length;++n<a;)if(r(e[n],n,e))return!0;return!1}var Be=Fe;function Qe(e,r){return e.has(r)}var Je=Qe,Xe=ke,Ye=Be,Ze=Je,We=1,ze=2;function Ve(e,r,n,a,t,s){var l=n&We,i=e.length,f=r.length;if(i!=f&&!(l&&f>i))return!1;var v=s.get(e),u=s.get(r);if(v&&u)return v==r&&u==e;var o=-1,c=!0,d=n&ze?new Xe:void 0;for(s.set(e,r),s.set(r,e);++o<i;){var p=e[o],_=r[o];if(a)var g=l?a(_,p,o,r,e,s):a(p,_,o,e,r,s);if(g!==void 0){if(g)continue;c=!1;break}if(d){if(!Ye(r,function(h,C){if(!Ze(d,C)&&(p===h||t(p,h,n,a,s)))return d.push(C)})){c=!1;break}}else if(!(p===_||t(p,_,n,a,s))){c=!1;break}}return s.delete(e),s.delete(r),c}var ne=Ve;function je(e){var r=-1,n=Array(e.size);return e.forEach(function(a,t){n[++r]=[t,a]}),n}var er=je;function rr(e){var r=-1,n=Array(e.size);return e.forEach(function(a){n[++r]=a}),n}var nr=rr,G=Ce,N=me,ar=Ie,tr=ne,sr=er,lr=nr,ir=1,fr=2,ur="[object Boolean]",cr="[object Date]",or="[object Error]",vr="[object Map]",pr="[object Number]",_r="[object RegExp]",dr="[object Set]",hr="[object String]",gr="[object Symbol]",Cr="[object ArrayBuffer]",yr="[object DataView]",q=G?G.prototype:void 0,R=q?q.valueOf:void 0;function Ar(e,r,n,a,t,s,l){switch(n){case yr:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Cr:return!(e.byteLength!=r.byteLength||!s(new N(e),new N(r)));case ur:case cr:case pr:return ar(+e,+r);case or:return e.name==r.name&&e.message==r.message;case _r:case hr:return e==r+"";case vr:var i=sr;case dr:var f=a&ir;if(i||(i=lr),e.size!=r.size&&!f)return!1;var v=l.get(e);if(v)return v==r;a|=fr,l.set(e,r);var u=tr(i(e),i(r),a,t,s,l);return l.delete(e),u;case gr:if(R)return R.call(e)==R.call(r)}return!1}var $r=Ar,H=Ee,br=1,Pr=Object.prototype,xr=Pr.hasOwnProperty;function Or(e,r,n,a,t,s){var l=n&br,i=H(e),f=i.length,v=H(r),u=v.length;if(f!=u&&!l)return!1;for(var o=f;o--;){var c=i[o];if(!(l?c in r:xr.call(r,c)))return!1}var d=s.get(e),p=s.get(r);if(d&&p)return d==r&&p==e;var _=!0;s.set(e,r),s.set(r,e);for(var g=l;++o<f;){c=i[o];var h=e[c],C=r[c];if(a)var $=l?a(C,h,c,r,e,s):a(h,C,c,e,r,s);if(!($===void 0?h===C||t(h,C,n,a,s):$)){_=!1;break}g||(g=c=="constructor")}if(_&&!g){var b=e.constructor,x=r.constructor;b!=x&&"constructor"in e&&"constructor"in r&&!(typeof b=="function"&&b instanceof b&&typeof x=="function"&&x instanceof x)&&(_=!1)}return s.delete(e),s.delete(r),_}var mr=Or,L=Z,Er=ne,Tr=$r,wr=mr,U=ye,K=D,k=Ae,Sr=$e,Ir=1,F="[object Arguments]",B="[object Array]",E="[object Object]",Rr=Object.prototype,Q=Rr.hasOwnProperty;function Lr(e,r,n,a,t,s){var l=K(e),i=K(r),f=l?B:U(e),v=i?B:U(r);f=f==F?E:f,v=v==F?E:v;var u=f==E,o=v==E,c=f==v;if(c&&k(e)){if(!k(r))return!1;l=!0,u=!1}if(c&&!u)return s||(s=new L),l||Sr(e)?Er(e,r,n,a,t,s):Tr(e,r,f,n,a,t,s);if(!(n&Ir)){var d=u&&Q.call(e,"__wrapped__"),p=o&&Q.call(r,"__wrapped__");if(d||p){var _=d?e.value():e,g=p?r.value():r;return s||(s=new L),t(_,g,n,a,s)}}return c?(s||(s=new L),wr(e,r,n,a,t,s)):!1}var Dr=Lr,Mr=Dr,J=be;function ae(e,r,n,a,t){return e===r?!0:e==null||r==null||!J(e)&&!J(r)?e!==e&&r!==r:Mr(e,r,n,a,ae,t)}var te=ae,Gr=Z,Nr=te,qr=1,Hr=2;function Ur(e,r,n,a){var t=n.length,s=t,l=!a;if(e==null)return!s;for(e=Object(e);t--;){var i=n[t];if(l&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++t<s;){i=n[t];var f=i[0],v=e[f],u=i[1];if(l&&i[2]){if(v===void 0&&!(f in e))return!1}else{var o=new Gr;if(a)var c=a(v,u,f,e,r,o);if(!(c===void 0?Nr(u,v,qr|Hr,a,o):c))return!1}}return!0}var Kr=Ur,kr=Pe;function Fr(e){return e===e&&!kr(e)}var se=Fr,Br=se,Qr=Te;function Jr(e){for(var r=Qr(e),n=r.length;n--;){var a=r[n],t=e[a];r[n]=[a,t,Br(t)]}return r}var Xr=Jr;function Yr(e,r){return function(n){return n==null?!1:n[e]===r&&(r!==void 0||e in Object(n))}}var le=Yr,Zr=Kr,Wr=Xr,zr=le;function Vr(e){var r=Wr(e);return r.length==1&&r[0][2]?zr(r[0][0],r[0][1]):function(n){return n===e||Zr(n,e,r)}}var jr=Vr;function en(e,r){return e!=null&&r in Object(e)}var rn=en,nn=z,an=xe,tn=D,sn=W,ln=Oe,fn=S;function un(e,r,n){r=nn(r,e);for(var a=-1,t=r.length,s=!1;++a<t;){var l=fn(r[a]);if(!(s=e!=null&&n(e,l)))break;e=e[l]}return s||++a!=t?s:(t=e==null?0:e.length,!!t&&ln(t)&&sn(l,t)&&(tn(e)||an(e)))}var cn=un,on=rn,vn=cn;function pn(e,r){return e!=null&&vn(e,r,on)}var _n=pn,dn=te,hn=Re,gn=_n,Cn=V,yn=se,An=le,$n=S,bn=1,Pn=2;function xn(e,r){return Cn(e)&&yn(r)?An($n(e),r):function(n){var a=hn(n,e);return a===void 0&&a===r?gn(n,e):dn(r,a,bn|Pn)}}var On=xn;function mn(e){return e}var En=mn;function Tn(e){return function(r){return r==null?void 0:r[e]}}var wn=Tn,Sn=j;function In(e){return function(r){return Sn(r,e)}}var Rn=In,Ln=wn,Dn=Rn,Mn=V,Gn=S;function Nn(e){return Mn(e)?Ln(Gn(e)):Dn(e)}var qn=Nn,Hn=jr,Un=On,Kn=En,kn=D,Fn=qn;function Bn(e){return typeof e=="function"?e:e==null?Kn:typeof e=="object"?kn(e)?Un(e[0],e[1]):Hn(e):Fn(e)}var Qn=Bn;function Jn(e){var r=e==null?0:e.length;return r?e[r-1]:void 0}var ie=Jn;const Oa=Y(ie);function Xn(e,r,n){var a=-1,t=e.length;r<0&&(r=-r>t?0:t+r),n=n>t?t:n,n<0&&(n+=t),t=r>n?0:n-r>>>0,r>>>=0;for(var s=Array(t);++a<t;)s[a]=e[a+r];return s}var Yn=Xn,Zn=j,Wn=Yn;function zn(e,r){return r.length<2?e:Zn(e,Wn(r,0,-1))}var Vn=zn,jn=z,ea=ie,ra=Vn,na=S;function aa(e,r){return r=jn(r,e),e=ra(e,r),e==null||delete e[na(ea(r))]}var ta=aa,sa=ta,la=W,ia=Array.prototype,fa=ia.splice;function ua(e,r){for(var n=e?r.length:0,a=n-1;n--;){var t=r[n];if(n==a||t!==s){var s=t;la(t)?fa.call(e,t,1):sa(e,t)}}return e}var ca=ua,oa=Qn,va=ca;function pa(e,r){var n=[];if(!(e&&e.length))return n;var a=-1,t=[],s=e.length;for(r=oa(r);++a<s;){var l=e[a];r(l,a,e)&&(n.push(l),t.push(a))}return va(e,t),n}var _a=pa;const da=Y(_a),ha=Object.prototype.hasOwnProperty;function X(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function ga(e,r){if(X(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(let t=0;t<n.length;t+=1)if(!ha.call(r,n[t])||!X(e[n[t]],r[n[t]]))return!1;return!0}const fe=y.forwardRef((e,r)=>{const{children:n,className:a,color:t,name:s,onChange:l,value:i,vertical:f,...v}=e,[u,o]=y.useState(i),c=y.useCallback((g,h,C)=>{const $=we(u)||[];h?$.push(g):da($,b=>ga(b,g)),o($),l==null||l($,C)},[l,o,u]);y.useEffect(()=>{o(i)},[i]);const p=T(`inline-flex ${f?"flex-col gap-y-2":""}`,a),_=y.useMemo(()=>({vertical:f,name:s,value:u,color:t,onChange:c}),[f,c,s,t,u]);return O.jsx(Le,{value:_,children:O.jsx("div",{ref:r,className:p,...v,children:n})})});fe.displayName="CheckboxGroup";const Ca=re;Ca.Group=fe;export{Ca as C,Yn as _,nr as a,ke as b,Je as c,Qn as d,Be as e,te as f,En as i,Oa as l};
