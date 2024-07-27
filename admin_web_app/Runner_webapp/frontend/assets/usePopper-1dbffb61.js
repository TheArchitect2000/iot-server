import{r as G,Q as mt,aW as ht}from"./index-f1a5ff0b.js";const Cr=(...t)=>e=>{t.forEach(r=>{typeof r=="function"?r(e):r&&typeof r=="object"&&(r.current=e)})};var Mr=function(e){return Array.isArray(e)?e[0]:e},yt=function(e){if(typeof e=="function"){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return e.apply(void 0,n)}},Tr=function(e,r){if(typeof e=="function")return yt(e,r);e!=null&&(e.current=r)},Ne=function(e){return e.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Ue=typeof window<"u"&&window.document&&window.document.createElement?G.useLayoutEffect:G.useEffect,D="top",T="bottom",L="right",B="left",Re="auto",ue=[D,T,L,B],Z="start",se="end",gt="clippingParents",et="viewport",ae="popper",wt="reference",ze=ue.reduce(function(t,e){return t.concat([e+"-"+Z,e+"-"+se])},[]),tt=[].concat(ue,[Re]).reduce(function(t,e){return t.concat([e,e+"-"+Z,e+"-"+se])},[]),bt="beforeRead",xt="read",Ot="afterRead",Et="beforeMain",At="main",Pt="afterMain",jt="beforeWrite",Rt="write",St="afterWrite",Dt=[bt,xt,Ot,Et,At,Pt,jt,Rt,St];function F(t){return t?(t.nodeName||"").toLowerCase():null}function C(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=C(t).Element;return t instanceof e||t instanceof Element}function M(t){var e=C(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Se(t){if(typeof ShadowRoot>"u")return!1;var e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Bt(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!M(o)||!F(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(u){var i=a[u];i===!1?o.removeAttribute(u):o.setAttribute(u,i===!0?"":i)}))})}function $t(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=u.reduce(function(s,c){return s[c]="",s},{});!M(a)||!F(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const Ct={name:"applyStyles",enabled:!0,phase:"write",fn:Bt,effect:$t,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var Q=Math.max,we=Math.min,_=Math.round;function Pe(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function rt(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function ee(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&M(t)&&(a=t.offsetWidth>0&&_(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&_(n.height)/t.offsetHeight||1);var u=J(t)?C(t):window,i=u.visualViewport,s=!rt()&&r,c=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:f,right:c+l,bottom:f+m,left:c,x:c,y:f}}function De(t){var e=ee(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function nt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Se(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(t){return C(t).getComputedStyle(t)}function Mt(t){return["table","td","th"].indexOf(F(t))>=0}function q(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function be(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Se(t)?t.host:null)||q(t)}function Xe(t){return!M(t)||V(t).position==="fixed"?null:t.offsetParent}function Tt(t){var e=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&M(t)){var n=V(t);if(n.position==="fixed")return null}var a=be(t);for(Se(a)&&(a=a.host);M(a)&&["html","body"].indexOf(F(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(t){for(var e=C(t),r=Xe(t);r&&Mt(r)&&V(r).position==="static";)r=Xe(r);return r&&(F(r)==="html"||F(r)==="body"&&V(r).position==="static")?e:r||Tt(t)||e}function Be(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function oe(t,e,r){return Q(t,we(e,r))}function Lt(t,e,r){var n=oe(t,e,r);return n>r?r:n}function at(){return{top:0,right:0,bottom:0,left:0}}function ot(t){return Object.assign({},at(),t)}function it(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Wt=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ot(typeof e!="number"?e:it(e,ue))};function kt(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,u=r.modifiersData.popperOffsets,i=H(r.placement),s=Be(i),c=[B,L].indexOf(i)>=0,f=c?"height":"width";if(!(!o||!u)){var l=Wt(a.padding,r),m=De(o),p=s==="y"?D:B,y=s==="y"?T:L,h=r.rects.reference[f]+r.rects.reference[s]-u[s]-r.rects.popper[f],v=u[s]-r.rects.reference[s],b=ce(o),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,E=h/2-v/2,d=l[p],g=O-m[f]-l[y],w=O/2-m[f]/2+E,x=oe(d,w,g),j=s;r.modifiersData[n]=(e={},e[j]=x,e.centerOffset=x-w,e)}}function Ht(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||nt(e.elements.popper,a)&&(e.elements.arrow=a))}const Ft={name:"arrow",enabled:!0,phase:"main",fn:kt,effect:Ht,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(t){return t.split("-")[1]}var Vt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function It(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:_(r*a)/a||0,y:_(n*a)/a||0}}function Ye(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,u=t.offsets,i=t.position,s=t.gpuAcceleration,c=t.adaptive,f=t.roundOffsets,l=t.isFixed,m=u.x,p=m===void 0?0:m,y=u.y,h=y===void 0?0:y,v=typeof f=="function"?f({x:p,y:h}):{x:p,y:h};p=v.x,h=v.y;var b=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=B,d=D,g=window;if(c){var w=ce(r),x="clientHeight",j="clientWidth";if(w===C(r)&&(w=q(r),V(w).position!=="static"&&i==="absolute"&&(x="scrollHeight",j="scrollWidth")),w=w,a===D||(a===B||a===L)&&o===se){d=T;var P=l&&w===g&&g.visualViewport?g.visualViewport.height:w[x];h-=P-n.height,h*=s?1:-1}if(a===B||(a===D||a===T)&&o===se){E=L;var A=l&&w===g&&g.visualViewport?g.visualViewport.width:w[j];p-=A-n.width,p*=s?1:-1}}var R=Object.assign({position:i},c&&Vt),W=f===!0?It({x:p,y:h},C(r)):{x:p,y:h};if(p=W.x,h=W.y,s){var S;return Object.assign({},R,(S={},S[d]=O?"0":"",S[E]=b?"0":"",S.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",S))}return Object.assign({},R,(e={},e[d]=O?h+"px":"",e[E]=b?p+"px":"",e.transform="",e))}function qt(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,u=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,c={placement:H(e.placement),variation:te(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ye(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ye(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Nt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qt,data:{}};var he={passive:!0};function Ut(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,u=n.resize,i=u===void 0?!0:u,s=C(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&s.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&s.removeEventListener("resize",r.update,he)}}const zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ut,data:{}};var Xt={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(t){return t.replace(/left|right|bottom|top/g,function(e){return Xt[e]})}var Yt={start:"end",end:"start"};function Ge(t){return t.replace(/start|end/g,function(e){return Yt[e]})}function $e(t){var e=C(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ce(t){return ee(q(t)).left+$e(t).scrollLeft}function Gt(t,e){var r=C(t),n=q(t),a=r.visualViewport,o=n.clientWidth,u=n.clientHeight,i=0,s=0;if(a){o=a.width,u=a.height;var c=rt();(c||!c&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:u,x:i+Ce(t),y:s}}function Qt(t){var e,r=q(t),n=$e(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=Q(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=Q(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Ce(t),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=Q(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:u,x:i,y:s}}function Me(t){var e=V(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function st(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:M(t)&&Me(t)?t:st(be(t))}function ie(t,e){var r;e===void 0&&(e=[]);var n=st(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=C(n),u=a?[o].concat(o.visualViewport||[],Me(n)?n:[]):n,i=e.concat(u);return a?i:i.concat(ie(be(u)))}function je(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Jt(t,e){var r=ee(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Qe(t,e,r){return e===et?je(Gt(t,r)):J(e)?Jt(e,r):je(Qt(q(t)))}function Kt(t){var e=ie(be(t)),r=["absolute","fixed"].indexOf(V(t).position)>=0,n=r&&M(t)?ce(t):t;return J(n)?e.filter(function(a){return J(a)&&nt(a,n)&&F(a)!=="body"}):[]}function Zt(t,e,r,n){var a=e==="clippingParents"?Kt(t):[].concat(e),o=[].concat(a,[r]),u=o[0],i=o.reduce(function(s,c){var f=Qe(t,c,n);return s.top=Q(f.top,s.top),s.right=we(f.right,s.right),s.bottom=we(f.bottom,s.bottom),s.left=Q(f.left,s.left),s},Qe(t,u,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ft(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?te(n):null,u=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case D:s={x:u,y:e.y-r.height};break;case T:s={x:u,y:e.y+e.height};break;case L:s={x:e.x+e.width,y:i};break;case B:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var c=a?Be(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case Z:s[c]=s[c]-(e[f]/2-r[f]/2);break;case se:s[c]=s[c]+(e[f]/2-r[f]/2);break}}return s}function fe(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,u=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?gt:i,c=r.rootBoundary,f=c===void 0?et:c,l=r.elementContext,m=l===void 0?ae:l,p=r.altBoundary,y=p===void 0?!1:p,h=r.padding,v=h===void 0?0:h,b=ot(typeof v!="number"?v:it(v,ue)),O=m===ae?wt:ae,E=t.rects.popper,d=t.elements[y?O:m],g=Zt(J(d)?d:d.contextElement||q(t.elements.popper),s,f,u),w=ee(t.elements.reference),x=ft({reference:w,element:E,strategy:"absolute",placement:a}),j=je(Object.assign({},E,x)),P=m===ae?j:w,A={top:g.top-P.top+b.top,bottom:P.bottom-g.bottom+b.bottom,left:g.left-P.left+b.left,right:P.right-g.right+b.right},R=t.modifiersData.offset;if(m===ae&&R){var W=R[a];Object.keys(A).forEach(function(S){var N=[L,T].indexOf(S)>=0?1:-1,U=[D,T].indexOf(S)>=0?"y":"x";A[S]+=W[U]*N})}return A}function _t(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,u=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?tt:s,f=te(n),l=f?i?ze:ze.filter(function(y){return te(y)===f}):ue,m=l.filter(function(y){return c.indexOf(y)>=0});m.length===0&&(m=l);var p=m.reduce(function(y,h){return y[h]=fe(t,{placement:h,boundary:a,rootBoundary:o,padding:u})[H(h)],y},{});return Object.keys(p).sort(function(y,h){return p[y]-p[h]})}function er(t){if(H(t)===Re)return[];var e=ye(t);return[Ge(t),e,Ge(e)]}function tr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!0:u,s=r.fallbackPlacements,c=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,p=r.flipVariations,y=p===void 0?!0:p,h=r.allowedAutoPlacements,v=e.options.placement,b=H(v),O=b===v,E=s||(O||!y?[ye(v)]:er(v)),d=[v].concat(E).reduce(function(K,I){return K.concat(H(I)===Re?_t(e,{placement:I,boundary:f,rootBoundary:l,padding:c,flipVariations:y,allowedAutoPlacements:h}):I)},[]),g=e.rects.reference,w=e.rects.popper,x=new Map,j=!0,P=d[0],A=0;A<d.length;A++){var R=d[A],W=H(R),S=te(R)===Z,N=[D,T].indexOf(W)>=0,U=N?"width":"height",$=fe(e,{placement:R,boundary:f,rootBoundary:l,altBoundary:m,padding:c}),k=N?S?L:B:S?T:D;g[U]>w[U]&&(k=ye(k));var pe=ye(k),z=[];if(o&&z.push($[W]<=0),i&&z.push($[k]<=0,$[pe]<=0),z.every(function(K){return K})){P=R,j=!1;break}x.set(R,z)}if(j)for(var le=y?3:1,xe=function(I){var ne=d.find(function(de){var X=x.get(de);if(X)return X.slice(0,I).every(function(Oe){return Oe})});if(ne)return P=ne,"break"},re=le;re>0;re--){var ve=xe(re);if(ve==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const rr={name:"flip",enabled:!0,phase:"main",fn:tr,requiresIfExists:["offset"],data:{_skip:!1}};function Je(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Ke(t){return[D,L,T,B].some(function(e){return t[e]>=0})}function nr(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,u=fe(e,{elementContext:"reference"}),i=fe(e,{altBoundary:!0}),s=Je(u,n),c=Je(i,a,o),f=Ke(s),l=Ke(c);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const ar={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nr};function or(t,e,r){var n=H(t),a=[B,D].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,u=o[0],i=o[1];return u=u||0,i=(i||0)*a,[B,L].indexOf(n)>=0?{x:i,y:u}:{x:u,y:i}}function ir(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,u=tt.reduce(function(f,l){return f[l]=or(l,e.rects,o),f},{}),i=u[e.placement],s=i.x,c=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=u}const sr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ir};function fr(t){var e=t.state,r=t.name;e.modifiersData[r]=ft({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const ur={name:"popperOffsets",enabled:!0,phase:"read",fn:fr,data:{}};function cr(t){return t==="x"?"y":"x"}function pr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!1:u,s=r.boundary,c=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,p=m===void 0?!0:m,y=r.tetherOffset,h=y===void 0?0:y,v=fe(e,{boundary:s,rootBoundary:c,padding:l,altBoundary:f}),b=H(e.placement),O=te(e.placement),E=!O,d=Be(b),g=cr(d),w=e.modifiersData.popperOffsets,x=e.rects.reference,j=e.rects.popper,P=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(w){if(o){var S,N=d==="y"?D:B,U=d==="y"?T:L,$=d==="y"?"height":"width",k=w[d],pe=k+v[N],z=k-v[U],le=p?-j[$]/2:0,xe=O===Z?x[$]:j[$],re=O===Z?-j[$]:-x[$],ve=e.elements.arrow,K=p&&ve?De(ve):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:at(),ne=I[N],de=I[U],X=oe(0,x[$],K[$]),Oe=E?x[$]/2-le-X-ne-A.mainAxis:xe-X-ne-A.mainAxis,ut=E?-x[$]/2+le+X+de+A.mainAxis:re+X+de+A.mainAxis,Ee=e.elements.arrow&&ce(e.elements.arrow),ct=Ee?d==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Te=(S=R==null?void 0:R[d])!=null?S:0,pt=k+Oe-Te-ct,lt=k+ut-Te,Le=oe(p?we(pe,pt):pe,k,p?Q(z,lt):z);w[d]=Le,W[d]=Le-k}if(i){var We,vt=d==="x"?D:B,dt=d==="x"?T:L,Y=w[g],me=g==="y"?"height":"width",ke=Y+v[vt],He=Y-v[dt],Ae=[D,B].indexOf(b)!==-1,Fe=(We=R==null?void 0:R[g])!=null?We:0,Ve=Ae?ke:Y-x[me]-j[me]-Fe+A.altAxis,Ie=Ae?Y+x[me]+j[me]-Fe-A.altAxis:He,qe=p&&Ae?Lt(Ve,Y,Ie):oe(p?Ve:ke,Y,p?Ie:He);w[g]=qe,W[g]=qe-Y}e.modifiersData[n]=W}}const lr={name:"preventOverflow",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"]};function vr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function dr(t){return t===C(t)||!M(t)?$e(t):vr(t)}function mr(t){var e=t.getBoundingClientRect(),r=_(e.width)/t.offsetWidth||1,n=_(e.height)/t.offsetHeight||1;return r!==1||n!==1}function hr(t,e,r){r===void 0&&(r=!1);var n=M(e),a=M(e)&&mr(e),o=q(e),u=ee(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(e)!=="body"||Me(o))&&(i=dr(e)),M(e)?(s=ee(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=Ce(o))),{x:u.left+i.scrollLeft-s.x,y:u.top+i.scrollTop-s.y,width:u.width,height:u.height}}function yr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var u=[].concat(o.requires||[],o.requiresIfExists||[]);u.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function gr(t){var e=yr(t);return Dt.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function wr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function br(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Ze={placement:"bottom",modifiers:[],strategy:"absolute"};function _e(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function xr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?Ze:a;return function(i,s,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ze,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},l=[],m=!1,p={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;h(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:J(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(s)};var E=gr(br([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(d){return d.enabled}),y(),p.update()},forceUpdate:function(){if(!m){var b=f.elements,O=b.reference,E=b.popper;if(_e(O,E)){f.rects={reference:hr(O,ce(E),f.options.strategy==="fixed"),popper:De(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var g=f.orderedModifiers[d],w=g.fn,x=g.options,j=x===void 0?{}:x,P=g.name;typeof w=="function"&&(f=w({state:f,options:j,name:P,instance:p})||f)}}}},update:wr(function(){return new Promise(function(v){p.forceUpdate(),v(f)})}),destroy:function(){h(),m=!0}};if(!_e(i,s))return p;p.setOptions(c).then(function(v){!m&&c.onFirstUpdate&&c.onFirstUpdate(v)});function y(){f.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,d=v.effect;if(typeof d=="function"){var g=d({state:f,name:b,instance:p,options:E}),w=function(){};l.push(g||w)}})}function h(){l.forEach(function(v){return v()}),l=[]}return p}}var Or=[zt,ur,Nt,Ct,sr,rr,lr,Ft,ar],Er=xr({defaultModifiers:Or}),Ar=typeof Element<"u",Pr=typeof Map=="function",jr=typeof Set=="function",Rr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ge(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,a;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!ge(t[n],e[n]))return!1;return!0}var o;if(Pr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!ge(n.value[1],e.get(n.value[0])))return!1;return!0}if(jr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(Rr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,a[n]))return!1;if(Ar&&t instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&t.$$typeof)&&!ge(t[a[n]],e[a[n]]))return!1;return!0}return t!==t&&e!==e}var Sr=function(e,r){try{return ge(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Dr=mt(Sr);var Br=[],Lr=function(e,r,n){n===void 0&&(n={});var a=G.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Br},u=G.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=u[0],s=u[1],c=G.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var y=p.state,h=Object.keys(y.elements);ht.flushSync(function(){s({styles:Ne(h.map(function(v){return[v,y.styles[v]||{}]})),attributes:Ne(h.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),f=G.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return Dr(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),l=G.useRef();return Ue(function(){l.current&&l.current.setOptions(f)},[f]),Ue(function(){if(!(e==null||r==null)){var m=n.createPopper||Er,p=m(e,r,f);return l.current=p,function(){p.destroy(),l.current=null}}},[e,r,n.createPopper]),{state:l.current?l.current.state:null,styles:i.styles,attributes:i.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};export{Lr as a,Mr as b,yt as c,Tr as s,Cr as u};
