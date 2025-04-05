export const __webpack_ids__=["9287"];export const __webpack_modules__={68107:function(t,e,o){var i=o(40810),n=o(73994),r=o(63983),a=o(71998),s=o(4576);i({target:"Iterator",proto:!0,real:!0},{every:function(t){a(this),r(t);var e=s(this),o=0;return!n(e,(function(e,i){if(!t(e,o++))return i()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},38148:function(t,e,o){o.d(e,{oo:()=>J,x7:()=>I,Me:()=>W,RR:()=>U,cv:()=>M,dp:()=>V,Jv:()=>K,uY:()=>H});o(9359),o(56475),o(31526),o(70104);const i=Math.min,n=Math.max,r=Math.round,a=Math.floor,s=t=>({x:t,y:t}),l={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function p(t,e,o){return n(t,i(e,o))}function h(t,e){return"function"==typeof t?t(e):t}function u(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function f(t){return"x"===t?"y":"x"}function y(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(u(t))?"y":"x"}function m(t){return f(g(t))}function b(t){return t.replace(/start|end/g,(t=>c[t]))}function w(t){return t.replace(/left|right|bottom|top/g,(t=>l[t]))}function v(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function x(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}o(92745),o(68107),o(1331),o(48136),o(52924);function P(t,e,o){let{reference:i,floating:n}=t;const r=g(e),a=m(e),s=y(a),l=u(e),c="y"===r,p=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2,f=i[s]/2-n[s]/2;let b;switch(l){case"top":b={x:p,y:i.y-n.height};break;case"bottom":b={x:p,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:h};break;case"left":b={x:i.x-n.width,y:h};break;default:b={x:i.x,y:i.y}}switch(d(e)){case"start":b[a]-=f*(o&&c?-1:1);break;case"end":b[a]+=f*(o&&c?-1:1)}return b}async function C(t,e){var o;void 0===e&&(e={});const{x:i,y:n,platform:r,rects:a,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:d=!1,padding:f=0}=h(e,t),y=v(f),g=s[d?"floating"===u?"reference":"floating":u],m=x(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:p,strategy:l})),b="floating"===u?{x:i,y:n,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),P=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},C=x(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:w,strategy:l}):b);return{top:(m.top-C.top+y.top)/P.y,bottom:(C.bottom-m.bottom+y.bottom)/P.y,left:(m.left-C.left+y.left)/P.x,right:(C.right-m.right+y.right)/P.x}}var k=o(615);function R(t){const e=(0,k.Dx)(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=(0,k.Re)(t),a=n?t.offsetWidth:o,s=n?t.offsetHeight:i,l=r(o)!==a||r(i)!==s;return l&&(o=a,i=s),{width:o,height:i,$:l}}function E(t){return(0,k.kK)(t)?t:t.contextElement}function z(t){const e=E(t);if(!(0,k.Re)(e))return s(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:a}=R(e);let l=(a?r(o.width):o.width)/i,c=(a?r(o.height):o.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const T=s(0);function O(t){const e=(0,k.Jj)(t);return(0,k.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:T}function L(t,e,o,i){void 0===e&&(e=!1),void 0===o&&(o=!1);const n=t.getBoundingClientRect(),r=E(t);let a=s(1);e&&(i?(0,k.kK)(i)&&(a=z(i)):a=z(t));const l=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==(0,k.Jj)(t))&&e}(r,o,i)?O(r):s(0);let c=(n.left+l.x)/a.x,p=(n.top+l.y)/a.y,h=n.width/a.x,u=n.height/a.y;if(r){const t=(0,k.Jj)(r),e=i&&(0,k.kK)(i)?(0,k.Jj)(i):i;let o=t,n=(0,k.wK)(o);for(;n&&i&&e!==o;){const t=z(n),e=n.getBoundingClientRect(),i=(0,k.Dx)(n),r=e.left+(n.clientLeft+parseFloat(i.paddingLeft))*t.x,a=e.top+(n.clientTop+parseFloat(i.paddingTop))*t.y;c*=t.x,p*=t.y,h*=t.x,u*=t.y,c+=r,p+=a,o=(0,k.Jj)(n),n=(0,k.wK)(o)}}return x({width:h,height:u,x:c,y:p})}function D(t,e){const o=(0,k.Lw)(t).scrollLeft;return e?e.left+o:L((0,k.tF)(t)).left+o}function S(t,e,o){void 0===o&&(o=!1);const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-(o?0:D(t,i)),y:i.top+e.scrollTop}}function A(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=(0,k.Jj)(t),i=(0,k.tF)(t),n=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,s=0,l=0;if(n){r=n.width,a=n.height;const t=(0,k.Pf)();(!t||t&&"fixed"===e)&&(s=n.offsetLeft,l=n.offsetTop)}return{width:r,height:a,x:s,y:l}}(t,o);else if("document"===e)i=function(t){const e=(0,k.tF)(t),o=(0,k.Lw)(t),i=t.ownerDocument.body,r=n(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),a=n(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+D(t);const l=-o.scrollTop;return"rtl"===(0,k.Dx)(i).direction&&(s+=n(e.clientWidth,i.clientWidth)-r),{width:r,height:a,x:s,y:l}}((0,k.tF)(t));else if((0,k.kK)(e))i=function(t,e){const o=L(t,!0,"fixed"===e),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=(0,k.Re)(t)?z(t):s(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:n*r.x,y:i*r.y}}(e,o);else{const o=O(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return x(i)}function F(t,e){const o=(0,k.Ow)(t);return!(o===e||!(0,k.kK)(o)||(0,k.Py)(o))&&("fixed"===(0,k.Dx)(o).position||F(o,e))}function B(t,e,o){const i=(0,k.Re)(e),n=(0,k.tF)(e),r="fixed"===o,a=L(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=s(0);if(i||!i&&!r)if(("body"!==(0,k.wk)(e)||(0,k.ao)(n))&&(l=(0,k.Lw)(e)),i){const t=L(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else n&&(c.x=D(n));const p=!n||i||r?s(0):S(n,l);return{x:a.left+l.scrollLeft-c.x-p.x,y:a.top+l.scrollTop-c.y-p.y,width:a.width,height:a.height}}function $(t){return"static"===(0,k.Dx)(t).position}function _(t,e){if(!(0,k.Re)(t)||"fixed"===(0,k.Dx)(t).position)return null;if(e)return e(t);let o=t.offsetParent;return(0,k.tF)(t)===o&&(o=o.ownerDocument.body),o}function j(t,e){const o=(0,k.Jj)(t);if((0,k.tR)(t))return o;if(!(0,k.Re)(t)){let e=(0,k.Ow)(t);for(;e&&!(0,k.Py)(e);){if((0,k.kK)(e)&&!$(e))return e;e=(0,k.Ow)(e)}return o}let i=_(t,e);for(;i&&(0,k.Ze)(i)&&$(i);)i=_(i,e);return i&&(0,k.Py)(i)&&$(i)&&!(0,k.hT)(i)?o:i||(0,k.gQ)(t)||o}const K={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r="fixed"===n,a=(0,k.tF)(i),l=!!e&&(0,k.tR)(e.floating);if(i===a||l&&r)return o;let c={scrollLeft:0,scrollTop:0},p=s(1);const h=s(0),u=(0,k.Re)(i);if((u||!u&&!r)&&(("body"!==(0,k.wk)(i)||(0,k.ao)(a))&&(c=(0,k.Lw)(i)),(0,k.Re)(i))){const t=L(i);p=z(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}const d=!a||u||r?s(0):S(a,c,!0);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-c.scrollLeft*p.x+h.x+d.x,y:o.y*p.y-c.scrollTop*p.y+h.y+d.y}},getDocumentElement:k.tF,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:r,strategy:a}=t;const s=[..."clippingAncestors"===o?(0,k.tR)(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=(0,k.Kx)(t,[],!1).filter((t=>(0,k.kK)(t)&&"body"!==(0,k.wk)(t))),n=null;const r="fixed"===(0,k.Dx)(t).position;let a=r?(0,k.Ow)(t):t;for(;(0,k.kK)(a)&&!(0,k.Py)(a);){const e=(0,k.Dx)(a),o=(0,k.hT)(a);o||"fixed"!==e.position||(n=null),(r?!o&&!n:!o&&"static"===e.position&&n&&["absolute","fixed"].includes(n.position)||(0,k.ao)(a)&&!o&&F(t,a))?i=i.filter((t=>t!==a)):n=e,a=(0,k.Ow)(a)}return e.set(t,i),i}(e,this._c):[].concat(o),r],l=s[0],c=s.reduce(((t,o)=>{const r=A(e,o,a);return t.top=n(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=n(r.left,t.left),t}),A(e,l,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:j,getElementRects:async function(t){const e=this.getOffsetParent||j,o=this.getDimensions,i=await o(t.floating);return{reference:B(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=R(t);return{width:e,height:o}},getScale:z,isElement:k.kK,isRTL:function(t){return"rtl"===(0,k.Dx)(t).direction}};function N(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function W(t,e,o,r){void 0===r&&(r={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:p="function"==typeof IntersectionObserver,animationFrame:h=!1}=r,u=E(t),d=s||l?[...u?(0,k.Kx)(u):[],...(0,k.Kx)(e)]:[];d.forEach((t=>{s&&t.addEventListener("scroll",o,{passive:!0}),l&&t.addEventListener("resize",o)}));const f=u&&p?function(t,e){let o,r=null;const s=(0,k.tF)(t);function l(){var t;clearTimeout(o),null==(t=r)||t.disconnect(),r=null}return function c(p,h){void 0===p&&(p=!1),void 0===h&&(h=1),l();const u=t.getBoundingClientRect(),{left:d,top:f,width:y,height:g}=u;if(p||e(),!y||!g)return;const m={rootMargin:-a(f)+"px "+-a(s.clientWidth-(d+y))+"px "+-a(s.clientHeight-(f+g))+"px "+-a(d)+"px",threshold:n(0,i(1,h))||1};let b=!0;function w(e){const i=e[0].intersectionRatio;if(i!==h){if(!b)return c();i?c(!1,i):o=setTimeout((()=>{c(!1,1e-7)}),1e3)}1!==i||N(u,t.getBoundingClientRect())||c(),b=!1}try{r=new IntersectionObserver(w,{...m,root:s.ownerDocument})}catch(t){r=new IntersectionObserver(w,m)}r.observe(t)}(!0),l}(u,o):null;let y,g=-1,m=null;c&&(m=new ResizeObserver((t=>{let[i]=t;i&&i.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=m)||t.observe(e)}))),o()})),u&&!h&&m.observe(u),m.observe(e));let b=h?L(t):null;return h&&function e(){const i=L(t);b&&!N(b,i)&&o();b=i,y=requestAnimationFrame(e)}(),o(),()=>{var t;d.forEach((t=>{s&&t.removeEventListener("scroll",o),l&&t.removeEventListener("resize",o)})),null==f||f(),null==(t=m)||t.disconnect(),m=null,h&&cancelAnimationFrame(y)}}const M=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:a,middlewareData:s}=e,l=await async function(t,e){const{placement:o,platform:i,elements:n}=t,r=await(null==i.isRTL?void 0:i.isRTL(n.floating)),a=u(o),s=d(o),l="y"===g(o),c=["left","top"].includes(a)?-1:1,p=r&&l?-1:1,f=h(e,t);let{mainAxis:y,crossAxis:m,alignmentAxis:b}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return s&&"number"==typeof b&&(m="end"===s?-1*b:b),l?{x:m*p,y:y*c}:{x:y*c,y:m*p}}(e,t);return a===(null==(o=s.offset)?void 0:o.placement)&&null!=(i=s.arrow)&&i.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:a}}}}},H=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:s={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...l}=h(t,e),c={x:o,y:i},d=await C(e,l),y=g(u(n)),m=f(y);let b=c[m],w=c[y];if(r){const t="y"===m?"bottom":"right";b=p(b+d["y"===m?"top":"left"],b,b-d[t])}if(a){const t="y"===y?"bottom":"right";w=p(w+d["y"===y?"top":"left"],w,w-d[t])}const v=s.fn({...e,[m]:b,[y]:w});return{...v,data:{x:v.x-o,y:v.y-i,enabled:{[m]:r,[y]:a}}}}}},U=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:a,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:v,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:k=!0,...R}=h(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const E=u(n),z=g(s),T=u(s)===s,O=await(null==l.isRTL?void 0:l.isRTL(c.floating)),L=v||(T||!k?[w(s)]:function(t){const e=w(t);return[b(t),e,b(e)]}(s)),D="none"!==P;!v&&D&&L.push(...function(t,e,o,i){const n=d(t);let r=function(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:a;default:return[]}}(u(t),"start"===o,i);return n&&(r=r.map((t=>t+"-"+n)),e&&(r=r.concat(r.map(b)))),r}(s,k,P,O));const S=[s,...L],A=await C(e,R),F=[];let B=(null==(i=r.flip)?void 0:i.overflows)||[];if(p&&F.push(A[E]),f){const t=function(t,e,o){void 0===o&&(o=!1);const i=d(t),n=m(t),r=y(n);let a="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=w(a)),[a,w(a)]}(n,a,O);F.push(A[t[0]],A[t[1]])}if(B=[...B,{placement:n,overflows:F}],!F.every((t=>t<=0))){var $,_;const t=((null==($=r.flip)?void 0:$.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:B},reset:{placement:e}};let o=null==(_=B.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!o)switch(x){case"bestFit":{var j;const t=null==(j=B.filter((t=>{if(D){const e=g(t.placement);return e===z||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:j[0];t&&(o=t);break}case"initialPlacement":o=s}if(n!==o)return{reset:{placement:o}}}return{}}}},V=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,r;const{placement:a,rects:s,platform:l,elements:c}=e,{apply:p=()=>{},...f}=h(t,e),y=await C(e,f),m=u(a),b=d(a),w="y"===g(a),{width:v,height:x}=s.floating;let P,k;"top"===m||"bottom"===m?(P=m,k=b===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(k=m,P="end"===b?"top":"bottom");const R=x-y.top-y.bottom,E=v-y.left-y.right,z=i(x-y[P],R),T=i(v-y[k],E),O=!e.middlewareData.shift;let L=z,D=T;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(D=E),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(L=R),O&&!b){const t=n(y.left,0),e=n(y.right,0),o=n(y.top,0),i=n(y.bottom,0);w?D=v-2*(0!==t||0!==e?t+e:n(y.left,y.right)):L=x-2*(0!==o||0!==i?o+i:n(y.top,y.bottom))}await p({...e,availableWidth:D,availableHeight:L});const S=await l.getDimensions(c.floating);return v!==S.width||x!==S.height?{reset:{rects:!0}}:{}}}},I=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:a,platform:s,elements:l,middlewareData:c}=e,{element:u,padding:f=0}=h(t,e)||{};if(null==u)return{};const g=v(f),b={x:o,y:n},w=m(r),x=y(w),P=await s.getDimensions(u),C="y"===w,k=C?"top":"left",R=C?"bottom":"right",E=C?"clientHeight":"clientWidth",z=a.reference[x]+a.reference[w]-b[w]-a.floating[x],T=b[w]-a.reference[w],O=await(null==s.getOffsetParent?void 0:s.getOffsetParent(u));let L=O?O[E]:0;L&&await(null==s.isElement?void 0:s.isElement(O))||(L=l.floating[E]||a.floating[x]);const D=z/2-T/2,S=L/2-P[x]/2-1,A=i(g[k],S),F=i(g[R],S),B=A,$=L-P[x]-F,_=L/2-P[x]/2+D,j=p(B,_,$),K=!c.arrow&&null!=d(r)&&_!==j&&a.reference[x]/2-(_<B?A:F)-P[x]/2<0,N=K?_<B?_-B:_-$:0;return{[w]:b[w]+N,data:{[w]:j,centerOffset:_-j-N,...K&&{alignmentOffset:N}},reset:K}}}),J=(t,e,o)=>{const i=new Map,n={platform:K,...o},r={...n.platform,_c:i};return(async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,s=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:h}=P(c,i,l),u=i,d={},f=0;for(let o=0;o<s.length;o++){const{name:r,fn:y}=s[o],{x:g,y:m,data:b,reset:w}=await y({x:p,y:h,initialPlacement:i,placement:u,strategy:n,middlewareData:d,rects:c,platform:a,elements:{reference:t,floating:e}});p=null!=g?g:p,h=null!=m?m:h,d={...d,[r]:{...d[r],...b}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(c=!0===w.rects?await a.getElementRects({reference:t,floating:e,strategy:n}):w.rects),({x:p,y:h}=P(c,u,l))),o=-1)}return{x:p,y:h,placement:u,strategy:n,middlewareData:d}})(t,e,{...n,platform:r})}},615:function(t,e,o){o.d(e,{Dx:()=>b,Jj:()=>r,Kx:()=>P,Lw:()=>w,Ow:()=>v,Pf:()=>g,Py:()=>m,Re:()=>c,Ze:()=>u,ao:()=>h,gQ:()=>y,hT:()=>f,kK:()=>l,tF:()=>a,tR:()=>d,wK:()=>C,wk:()=>n});o(9359),o(56475);function i(){return"undefined"!=typeof window}function n(t){return s(t)?(t.nodeName||"").toLowerCase():"#document"}function r(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function a(t){var e;return null==(e=(s(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function s(t){return!!i()&&(t instanceof Node||t instanceof r(t).Node)}function l(t){return!!i()&&(t instanceof Element||t instanceof r(t).Element)}function c(t){return!!i()&&(t instanceof HTMLElement||t instanceof r(t).HTMLElement)}function p(t){return!(!i()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof r(t).ShadowRoot)}function h(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=b(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function u(t){return["table","td","th"].includes(n(t))}function d(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function f(t){const e=g(),o=l(t)?b(t):t;return["transform","translate","scale","rotate","perspective"].some((t=>!!o[t]&&"none"!==o[t]))||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function y(t){let e=v(t);for(;c(e)&&!m(e);){if(f(e))return e;if(d(e))return null;e=v(e)}return null}function g(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(n(t))}function b(t){return r(t).getComputedStyle(t)}function w(t){return l(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function v(t){if("html"===n(t))return t;const e=t.assignedSlot||t.parentNode||p(t)&&t.host||a(t);return p(e)?e.host:e}function x(t){const e=v(t);return m(e)?t.ownerDocument?t.ownerDocument.body:t.body:c(e)&&h(e)?e:x(e)}function P(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=!0);const n=x(t),a=n===(null==(i=t.ownerDocument)?void 0:i.body),s=r(n);if(a){const t=C(s);return e.concat(s,s.visualViewport||[],h(n)?n:[],t&&o?P(t):[])}return e.concat(n,P(n,[],o))}function C(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}},36956:function(t,e,o){o.d(e,{a:()=>i});var i=o(57243).iv`:host{--arrow-color:var(--sl-color-neutral-1000);--arrow-size:6px;--arrow-size-diagonal:calc(var(--arrow-size) * 0.7071);--arrow-padding-offset:calc(var(--arrow-size-diagonal) - var(--arrow-size));display:contents}.popup{position:absolute;isolation:isolate;max-width:var(--auto-size-available-width,none);max-height:var(--auto-size-available-height,none)}.popup--fixed{position:fixed}.popup:not(.popup--active){display:none}.popup__arrow{position:absolute;width:calc(var(--arrow-size-diagonal) * 2);height:calc(var(--arrow-size-diagonal) * 2);rotate:45deg;background:var(--arrow-color);z-index:-1}.popup-hover-bridge:not(.popup-hover-bridge--visible){display:none}.popup-hover-bridge{position:fixed;z-index:calc(var(--sl-z-index-dropdown) - 1);top:0;right:0;bottom:0;left:0;clip-path:polygon(var(--hover-bridge-top-left-x,0) var(--hover-bridge-top-left-y,0),var(--hover-bridge-top-right-x,0) var(--hover-bridge-top-right-y,0),var(--hover-bridge-bottom-right-x,0) var(--hover-bridge-bottom-right-y,0),var(--hover-bridge-bottom-left-x,0) var(--hover-bridge-bottom-left-y,0))}`},22087:function(t,e,o){o.a(t,(async function(t,i){try{o.d(e,{l:()=>y});o(92745),o(9359),o(56475),o(70104);var n=o(36956),r=o(15073),a=o(81048),s=o(31027),l=o(52812),c=o(38148),p=o(35359),h=o(57243),u=o(33202),d=o(50778),f=t([r]);r=(f.then?(await f)():f)[0];var y=class extends s.P{constructor(){super(...arguments),this.localize=new r.V(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,n=0,r=0,a=0,s=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,n=t.right,r=t.bottom,a=e.left,s=e.top,l=e.right,c=e.top):(o=e.left,i=e.bottom,n=e.right,r=e.bottom,a=t.left,s=t.top,l=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,n=e.left,r=e.top,a=t.right,s=t.bottom,l=e.left,c=e.bottom):(o=e.right,i=e.top,n=t.left,r=t.top,a=e.right,s=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');var t;this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=(0,c.Me)(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[(0,c.cv)({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push((0,c.dp)({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push((0,c.RR)({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push((0,c.uY)({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push((0,c.dp)({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((0,c.x7)({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>c.Jv.getOffsetParent(t,u.y8):c.Jv.getOffsetParent;(0,c.oo)(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:(0,l.EZ)((0,l.ih)({},c.Jv),{getOffsetParent:e})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const n="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",a="",s="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?o:"",l=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":o,l=n?o:"",s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:s,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return h.dy` <slot name="anchor" @slotchange="${this.handleAnchorChange}"></slot> <span part="hover-bridge" class="${(0,p.$)({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}"></span> <div part="popup" class="${(0,p.$)({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}"> <slot></slot> ${this.arrow?h.dy`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""} </div> `}};y.styles=[a.N,n.a],(0,l.u2)([(0,d.IO)(".popup")],y.prototype,"popup",2),(0,l.u2)([(0,d.IO)(".popup__arrow")],y.prototype,"arrowEl",2),(0,l.u2)([(0,d.Cb)()],y.prototype,"anchor",2),(0,l.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],y.prototype,"active",2),(0,l.u2)([(0,d.Cb)({reflect:!0})],y.prototype,"placement",2),(0,l.u2)([(0,d.Cb)({reflect:!0})],y.prototype,"strategy",2),(0,l.u2)([(0,d.Cb)({type:Number})],y.prototype,"distance",2),(0,l.u2)([(0,d.Cb)({type:Number})],y.prototype,"skidding",2),(0,l.u2)([(0,d.Cb)({type:Boolean})],y.prototype,"arrow",2),(0,l.u2)([(0,d.Cb)({attribute:"arrow-placement"})],y.prototype,"arrowPlacement",2),(0,l.u2)([(0,d.Cb)({attribute:"arrow-padding",type:Number})],y.prototype,"arrowPadding",2),(0,l.u2)([(0,d.Cb)({type:Boolean})],y.prototype,"flip",2),(0,l.u2)([(0,d.Cb)({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],y.prototype,"flipFallbackPlacements",2),(0,l.u2)([(0,d.Cb)({attribute:"flip-fallback-strategy"})],y.prototype,"flipFallbackStrategy",2),(0,l.u2)([(0,d.Cb)({type:Object})],y.prototype,"flipBoundary",2),(0,l.u2)([(0,d.Cb)({attribute:"flip-padding",type:Number})],y.prototype,"flipPadding",2),(0,l.u2)([(0,d.Cb)({type:Boolean})],y.prototype,"shift",2),(0,l.u2)([(0,d.Cb)({type:Object})],y.prototype,"shiftBoundary",2),(0,l.u2)([(0,d.Cb)({attribute:"shift-padding",type:Number})],y.prototype,"shiftPadding",2),(0,l.u2)([(0,d.Cb)({attribute:"auto-size"})],y.prototype,"autoSize",2),(0,l.u2)([(0,d.Cb)()],y.prototype,"sync",2),(0,l.u2)([(0,d.Cb)({type:Object})],y.prototype,"autoSizeBoundary",2),(0,l.u2)([(0,d.Cb)({attribute:"auto-size-padding",type:Number})],y.prototype,"autoSizePadding",2),(0,l.u2)([(0,d.Cb)({attribute:"hover-bridge",type:Boolean})],y.prototype,"hoverBridge",2),i()}catch(t){i(t)}}))},94026:function(t,e,o){o.d(e,{RA:()=>r,U_:()=>s,nv:()=>n});o(9359),o(70104);var i=o(52812);function n(t,e,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,(0,i.EZ)((0,i.ih)({},o),{duration:a()?0:o.duration}));r.addEventListener("cancel",n,{once:!0}),r.addEventListener("finish",n,{once:!0})}))}function r(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e)})))))}},10528:function(t,e,o){function i(t,e){return new Promise((o=>{t.addEventListener(e,(function i(n){n.target===t&&(t.removeEventListener(e,i),o())}))}))}o.d(e,{m:()=>i})},43638:function(t,e,o){o.d(e,{b:()=>i});var i=o(57243).iv`:host{--max-width:20rem;--hide-delay:0ms;--show-delay:150ms;display:contents}.tooltip{--arrow-size:var(--sl-tooltip-arrow-size);--arrow-color:var(--sl-tooltip-background-color)}.tooltip::part(popup){z-index:var(--sl-z-index-tooltip)}.tooltip[placement^=top]::part(popup){transform-origin:bottom}.tooltip[placement^=bottom]::part(popup){transform-origin:top}.tooltip[placement^=left]::part(popup){transform-origin:right}.tooltip[placement^=right]::part(popup){transform-origin:left}.tooltip__body{display:block;width:max-content;max-width:var(--max-width);border-radius:var(--sl-tooltip-border-radius);background-color:var(--sl-tooltip-background-color);font-family:var(--sl-tooltip-font-family);font-size:var(--sl-tooltip-font-size);font-weight:var(--sl-tooltip-font-weight);line-height:var(--sl-tooltip-line-height);text-align:start;white-space:normal;color:var(--sl-tooltip-color);padding:var(--sl-tooltip-padding);pointer-events:none;user-select:none;-webkit-user-select:none}`},81456:function(t,e,o){o.d(e,{Y:()=>n});o(9359),o(31526);var i=o(52812);function n(t,e){const o=(0,i.ih)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:n}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const n=e;if(t.has(n)){const e=t.get(n),r=this[n];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r))}})),n.call(this,t)}}}},89913:function(t,e,o){o.d(e,{O8:()=>l,jx:()=>s});o(52812);var i=new Map,n=new WeakMap;function r(t){return null!=t?t:{keyframes:[],options:{duration:0}}}function a(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function s(t,e){i.set(t,r(e))}function l(t,e,o){const r=n.get(t);if(null==r?void 0:r[e])return a(r[e],o.dir);const s=i.get(e);return s?a(s,o.dir):{keyframes:[],options:{duration:0}}}},84168:function(t,e,o){o.a(t,(async function(t,i){try{o.d(e,{R:()=>b});var n=o(43638),r=o(22087),a=o(89913),s=o(10528),l=o(94026),c=o(15073),p=o(81456),h=o(81048),u=o(31027),d=o(52812),f=o(35359),y=o(57243),g=o(50778),m=t([c,r]);[c,r]=m.then?(await m)():m;var b=class extends u.P{constructor(){super(),this.localize=new c.V(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=(0,l.RA)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=(0,l.RA)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await(0,l.U_)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:o}=(0,a.O8)(this,"tooltip.show",{dir:this.localize.dir()});await(0,l.nv)(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await(0,l.U_)(this.body);const{keyframes:t,options:o}=(0,a.O8)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,l.nv)(this.popup.popup,t,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,s.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,s.m)(this,"sl-after-hide")}render(){return y.dy` <sl-popup part="base" exportparts="
          popup:base__popup,
          arrow:base__arrow
        " class="${(0,f.$)({tooltip:!0,"tooltip--open":this.open})}" placement="${this.placement}" distance="${this.distance}" skidding="${this.skidding}" strategy="${this.hoist?"fixed":"absolute"}" flip shift arrow hover-bridge> ${""} <slot slot="anchor" aria-describedby="tooltip"></slot> ${""} <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live="${this.open?"polite":"off"}"> <slot name="content">${this.content}</slot> </div> </sl-popup> `}};b.styles=[h.N,n.b],b.dependencies={"sl-popup":r.l},(0,d.u2)([(0,g.IO)("slot:not([name])")],b.prototype,"defaultSlot",2),(0,d.u2)([(0,g.IO)(".tooltip__body")],b.prototype,"body",2),(0,d.u2)([(0,g.IO)("sl-popup")],b.prototype,"popup",2),(0,d.u2)([(0,g.Cb)()],b.prototype,"content",2),(0,d.u2)([(0,g.Cb)()],b.prototype,"placement",2),(0,d.u2)([(0,g.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,d.u2)([(0,g.Cb)({type:Number})],b.prototype,"distance",2),(0,d.u2)([(0,g.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,d.u2)([(0,g.Cb)({type:Number})],b.prototype,"skidding",2),(0,d.u2)([(0,g.Cb)()],b.prototype,"trigger",2),(0,d.u2)([(0,g.Cb)({type:Boolean})],b.prototype,"hoist",2),(0,d.u2)([(0,p.Y)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,d.u2)([(0,p.Y)(["content","distance","hoist","placement","skidding"])],b.prototype,"handleOptionsChange",1),(0,d.u2)([(0,p.Y)("disabled")],b.prototype,"handleDisabledChange",1),(0,a.jx)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,a.jx)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),i()}catch(t){i(t)}}))},80519:function(t,e,o){o.a(t,(async function(t,i){try{o.d(e,{Z:()=>n.R});var n=o(84168),r=(o(43638),o(22087)),a=(o(36956),o(89913),o(94026),o(15073)),s=o(21262),l=(o(81456),o(81048),o(31027),o(52812),t([r,a,s,n]));[r,a,s,n]=l.then?(await l)():l,i()}catch(t){i(t)}}))},1261:function(t,e,o){o.d(e,{Z:()=>i.b});var i=o(43638);o(52812)},85605:function(t,e,o){o.d(e,{jx:()=>i.jx});var i=o(89913);o(52812)},33202:function(t,e,o){o.d(e,{y8:()=>n});o(92519),o(42179),o(89256),o(24931),o(88463),o(57449),o(19814);var i=o(615);function n(t){return a(t)}function r(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function a(t){for(let e=t;e;e=r(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=r(t);e;e=r(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||(0,i.hT)(t))return e;if("BODY"===e.tagName)return e}}return null}}};
//# sourceMappingURL=9287.49262e2159e71bac.js.map