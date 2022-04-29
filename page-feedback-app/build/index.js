/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={967:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))r.call(i,c)&&(u[c]=i[c]);if(t){l=t(i);for(var f=0;f<l.length;f++)n.call(i,l[f])&&(u[l[f]]=i[l[f]])}}return u}},112:(e,t,r)=>{"use strict";var n=r(73);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},691:(e,t,r)=>{e.exports=r(112)()},73:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},592:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(967),a=r(745);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=60106,u=60107,s=60108,c=60114,f=60109,p=60110,d=60112,h=60113,m=60120,y=60115,v=60116,g=60121,b=60117,w=60119,x=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var S=Symbol.for;l=S("react.portal"),u=S("react.fragment"),s=S("react.strict_mode"),c=S("react.profiler"),f=S("react.provider"),p=S("react.context"),d=S("react.forward_ref"),h=S("react.suspense"),m=S("react.suspense_list"),y=S("react.memo"),v=S("react.lazy"),g=S("react.block"),b=S("react.fundamental"),w=S("react.scope"),x=S("react.debug_trace_mode"),k=S("react.legacy_hidden")}function E(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case u:return"Fragment";case l:return"Portal";case c:return"Profiler";case s:return"StrictMode";case h:return"Suspense";case m:return"SuspenseList"}if("object"===n(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case y:return E(e.type);case g:return E(e._render);case v:t=e._payload,e=e._init;try{return E(e(t))}catch(e){}}return null}var _=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function O(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var F=new Uint16Array(16),P=0;15>P;P++)F[P]=P+1;F[15]=0;var I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N=Object.prototype.hasOwnProperty,D={},R={};function j(e){return!!N.call(R,e)||!N.call(D,e)&&(I.test(e)?R[e]=!0:(D[e]=!0,!1))}function M(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){A[e]=new M(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];A[t]=new M(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){A[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){A[e]=new M(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){A[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){A[e]=new M(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){A[e]=new M(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){A[e]=new M(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){A[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)}));var q=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(q,U);A[t]=new M(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(q,U);A[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(q,U);A[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)})),A.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)}));var T=/["'&<>]/;function L(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=T.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function z(e,t){var r,o=A.hasOwnProperty(e)?A[e]:null;return(r="style"!==e)&&(r=null!==o?0===o.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||function(e,t,r,o){if(null==t||function(e,t,r,o){if(null!==r&&0===r.type)return!1;switch(n(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,o))return!0;if(o)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,o,!1)?"":null!==o?(e=o.attributeName,3===(r=o.type)||4===r&&!0===t?e+'=""':(o.sanitizeURL&&(t=""+t),e+'="'+L(t)+'"')):j(e)?e+'="'+L(t)+'"':""}var V="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},$=null,H=null,W=null,B=!1,Z=!1,Y=null,G=0;function J(){if(null===$)throw Error(i(321));return $}function K(){if(0<G)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Q(){return null===W?null===H?(B=!1,H=W=K()):(B=!0,W=H):null===W.next?(B=!1,W=W.next=K()):(B=!0,W=W.next),W}function X(e,t,r,n){for(;Z;)Z=!1,G+=1,W=null,r=e(t,n);return ee(),r}function ee(){$=null,Z=!1,H=null,G=0,W=Y=null}function te(e,t){return"function"==typeof t?t(e):t}function re(e,t,r){if($=J(),W=Q(),B){var n=W.queue;if(t=n.dispatch,null!==Y&&void 0!==(r=Y.get(n))){Y.delete(n),n=W.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return W.memoizedState=n,[n,t]}return[W.memoizedState,t]}return e=e===te?"function"==typeof t?t():t:void 0!==r?r(t):t,W.memoizedState=e,e=(e=W.queue={last:null,dispatch:null}).dispatch=oe.bind(null,$,e),[W.memoizedState,e]}function ne(e,t){if($=J(),t=void 0===t?null:t,null!==(W=Q())){var r=W.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!V(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),W.memoizedState=[e,t],e}function oe(e,t,r){if(!(25>G))throw Error(i(301));if(e===$)if(Z=!0,e={action:r,next:null},null===Y&&(Y=new Map),void 0===(r=Y.get(t)))Y.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ae(){}var ie=null,le={readContext:function(e){var t=ie.threadID;return O(e,t),e[t]},useContext:function(e){J();var t=ie.threadID;return O(e,t),e[t]},useMemo:ne,useReducer:re,useRef:function(e){$=J();var t=(W=Q()).memoizedState;return null===t?(e={current:e},W.memoizedState=e):t},useState:function(e){return re(te,e)},useLayoutEffect:function(){},useCallback:function(e,t){return ne((function(){return e}),t)},useImperativeHandle:ae,useEffect:ae,useDebugValue:ae,useDeferredValue:function(e){return J(),e},useTransition:function(){return J(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ie.identifierPrefix||"")+"R:"+(ie.uniqueID++).toString(36)},useMutableSource:function(e,t){return J(),t(e._source)}},ue="http://www.w3.org/1999/xhtml";function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ce={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},fe=o({menuitem:!0},ce),pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},de=["Webkit","ms","Moz","O"];Object.keys(pe).forEach((function(e){de.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var he=/([A-Z])/g,me=/^ms-/,ye=a.Children.toArray,ve=_.ReactCurrentDispatcher,ge={listing:!0,pre:!0,textarea:!0},be=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,we={},xe={},ke=Object.prototype.hasOwnProperty,Se={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ee(e,t){if(void 0===e)throw Error(i(152,E(t)||"Component"))}var _e=function(){function e(e,t,r){a.isValidElement(e)?e.type!==u?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ye(e)):e=ye(e),e={type:null,domNamespace:ue,children:e,childIndex:0,context:C,footer:""};var n=F[0];if(0===n){var o=F,l=2*(n=o.length);if(!(65536>=l))throw Error(i(304));var s=new Uint16Array(l);for(s.set(o),(F=s)[0]=n+1,o=n;o<l-1;o++)F[o]=o+1;F[l-1]=0}else F[0]=F[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;F[e]=F[0],F[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;O(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ie;ie=this;var r=ve.current;ve.current=le;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;F[a]=F[0],F[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var u=l.footer;if(""!==u&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===f)this.popProvider(l.type);else if(l.type===h){this.suspenseDepth--;var s=n.pop();if(o){o=!1;var c=l.fallbackFrame;if(!c)throw Error(i(303));this.stack.push(c),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=s}n[this.suspenseDepth]+=u}else{var p=l.children[l.childIndex++],d="";try{d+=this.render(p,l.context,l.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{ve.current=r,ie=t,ee()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""==(r=""+e)?"":this.makeStaticMarkup?L(r):this.previousWasTextNode?"\x3c!-- --\x3e"+L(r):(this.previousWasTextNode=!0,L(r));if(e=(t=function(e,t,r){function l(a,l){var u=l.prototype&&l.prototype.isReactComponent,s=function(e,t,r,o){if(o&&"object"===n(o=e.contextType)&&null!==o)return O(o,r),o[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=C;return t}(l,t,r,u),c=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){f=!0,c=[t]},enqueueSetState:function(e,t){if(null===c)return null;c.push(t)}};if(u){if(u=new l(a.props,s,p),"function"==typeof l.getDerivedStateFromProps){var d=l.getDerivedStateFromProps.call(null,a.props,u.state);null!=d&&(u.state=o({},u.state,d))}}else if($={},u=l(a.props,s,p),null==(u=X(l,a.props,u,s))||null==u.render)return void Ee(e=u,l);if(u.props=a.props,u.context=s,u.updater=p,void 0===(p=u.state)&&(u.state=p=null),"function"==typeof u.UNSAFE_componentWillMount||"function"==typeof u.componentWillMount)if("function"==typeof u.componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&u.UNSAFE_componentWillMount(),c.length){p=c;var h=f;if(c=null,f=!1,h&&1===p.length)u.state=p[0];else{d=h?p[0]:u.state;var m=!0;for(h=h?1:0;h<p.length;h++){var y=p[h];null!=(y="function"==typeof y?y.call(u,d,a.props,s):y)&&(m?(m=!1,d=o({},d,y)):o(d,y))}u.state=d}}else c=null;if(Ee(e=u.render(),l),"function"==typeof u.getChildContext&&"object"===n(a=l.childContextTypes)){var v=u.getChildContext();for(var g in v)if(!(g in a))throw Error(i(108,E(l)||"Unknown",g))}v&&(t=o({},t,v))}for(;a.isValidElement(e);){var u=e,s=u.type;if("function"!=typeof s)break;l(u,s)}return{child:e,context:t}}(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===l)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ye(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var g=e.type;if("string"==typeof g)return this.renderDOM(e,t,r);switch(g){case k:case x:case s:case c:case m:case u:return e=ye(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case w:throw Error(i(343))}if("object"===n(g)&&null!==g)switch(g.$$typeof){case d:$={};var S=g.render(e.props,e.ref);return S=X(g.render,e.props,S,e.ref),S=ye(S),this.stack.push({type:null,domNamespace:r,children:S,childIndex:0,context:t,footer:""}),"";case y:return e=[a.createElement(g.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:g=ye(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:g=e.type,S=e.props;var _=this.threadID;return O(g,_),g=ye(S.children(g[_])),this.stack.push({type:e,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case b:throw Error(i(338));case v:return g=(S=(g=e.type)._init)(g._payload),e=[a.createElement(g,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==g?g:n(g),""))},t.renderDOM=function(e,t,r){var l=e.type.toLowerCase();if(r===ue&&se(l),!we.hasOwnProperty(l)){if(!be.test(l))throw Error(i(65,l));we[l]=!0}var u=e.props;if("input"===l)u=o({type:void 0},u,{defaultChecked:void 0,defaultValue:void 0,value:null!=u.value?u.value:u.defaultValue,checked:null!=u.checked?u.checked:u.defaultChecked});else if("textarea"===l){var s=u.value;if(null==s){s=u.defaultValue;var c=u.children;if(null!=c){if(null!=s)throw Error(i(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(i(93));c=c[0]}s=""+c}null==s&&(s="")}u=o({},u,{value:void 0,children:""+s})}else if("select"===l)this.currentSelectValue=null!=u.value?u.value:u.defaultValue,u=o({},u,{value:void 0});else if("option"===l){c=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(u.children);if(null!=c){var p=null!=u.value?u.value+"":f;if(s=!1,Array.isArray(c)){for(var d=0;d<c.length;d++)if(""+c[d]===p){s=!0;break}}else s=""+c===p;u=o({selected:void 0,children:void 0},u,{selected:s,children:f})}}if(s=u){if(fe[l]&&(null!=s.children||null!=s.dangerouslySetInnerHTML))throw Error(i(137,l));if(null!=s.dangerouslySetInnerHTML){if(null!=s.children)throw Error(i(60));if("object"!==n(s.dangerouslySetInnerHTML)||!("__html"in s.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=s.style&&"object"!==n(s.style))throw Error(i(62))}s=u,c=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===l.indexOf("-"))d="string"==typeof s.is;else switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(k in s)if(ke.call(s,k)){var h=s[k];if(null!=h){if("style"===k){var m=void 0,y="",v="";for(m in h)if(h.hasOwnProperty(m)){var g=0===m.indexOf("--"),b=h[m];if(null!=b){if(g)var w=m;else if(w=m,xe.hasOwnProperty(w))w=xe[w];else{var x=w.replace(he,"-$1").toLowerCase().replace(me,"-ms-");w=xe[w]=x}y+=v+w+":",v=m,y+=g=null==b||"boolean"==typeof b||""===b?"":g||"number"!=typeof b||0===b||pe.hasOwnProperty(v)&&pe[v]?(""+b).trim():b+"px",v=";"}}h=y||null}m=null,d?Se.hasOwnProperty(k)||(m=j(m=k)&&null!=h?m+'="'+L(h)+'"':""):m=z(k,h),m&&(p+=" "+m)}}c||f&&(p+=' data-reactroot=""');var k=p;s="",ce.hasOwnProperty(l)?k+="/>":(k+=">",s="</"+e.type+">");e:{if(null!=(c=u.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=u.children)||"number"==typeof c){c=L(c);break e}c=null}return null!=c?(u=[],ge.hasOwnProperty(l)&&"\n"===c.charAt(0)&&(k+="\n"),k+=c):u=ye(u.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?se(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:l,children:u,childIndex:0,context:t,footer:s}),this.previousWasTextNode=!1,k},e}();t.renderToString=function(e,t){e=new _e(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},929:(e,t,r)=>{"use strict";e.exports=r(592)},165:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(967),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,u=60110,s=60112;t.Suspense=60113;var c=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),l=p("react.provider"),u=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),c=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var w=b.prototype=new g;w.constructor=b,o(w,v.prototype),w.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:x.current}}function _(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function O(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,r,o,l){var u=n(e);"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case i:s=!0}}if(s)return l=l(s=e),e=""===o?"."+O(s,0):o,Array.isArray(l)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),F(l,t,r,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=o+O(u=e[c],c);s+=F(u,t,r,f,l)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(u=e.next()).done;)s+=F(u=u.value,t,r,f=o+O(u,c++),l);else if("object"===u)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,r){if(null==e)return e;var n=[],o=0;return F(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function D(){var e=N.current;if(null===e)throw Error(h(321));return e}var R={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=o({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:a,type:e.type,key:i,ref:l,props:n,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.2"},745:(e,t,r)=>{"use strict";e.exports=r(165)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(745),t=r(929);const n=require("router");var o=r.n(n),a=r(691),i=r.n(a);const l=require("toasts");var u=r.n(l);const s=require("requester");var c=r.n(s);const f=require("i18n");var p=r.n(f);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(){var t,r,n=(t=e.useState(""),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],i=n[1];return e.createElement("div",{className:"mQGzwZOtY0MvauxYSAJu"},e.createElement("label",{htmlFor:"text-1",className:"S6cMps0bDFgTJrVmqZ2r env-form-element__label"},p().get("sendFeedbackHeading")),e.createElement("div",{className:"env-form-element__control"},e.createElement("textarea",{type:"text",name:"feedback",className:"env-form-input",placeholder:p().get("sendFeedbackPlaceHolder"),id:"text-1",rows:"4",onChange:function(e){return function(e){i(e.target.value)}(e)}})),e.createElement("p",null,e.createElement("button",{type:"button",className:"env-button env-button--primary env-button--block",onClick:function(){c().doPost({url:o().getStandaloneUrl("/addFeedback"),data:{feedback:a}}).then((function(e){u().publish({message:e.message,type:"primary"})})).catch((function(e){alert(e.responseJSON.errorMsg)}))}},p().get("sendFeedbackButton"))))};h.propTypes={message:i().string,name:i().string};const m=h;var y=function(t){var r=t.feedback;return e.createElement("div",{className:"ViNZ3hpeBN900hK7s4q0"},e.createElement("article",{className:"env-comment env-media "+(r.isOutdated&&"eXDBR9AGVy1Vlz_HmTD_")},e.createElement("div",{className:"env-media__body"},r.isOutdated&&e.createElement("p",{className:"env-text btO3HFKPRx_mqBgNfYHw"}," * ",p().get("outDatedFeedback")," * "),e.createElement("p",{className:"env-text btO3HFKPRx_mqBgNfYHw"},r.message),e.createElement("footer",{className:"env-comment__footer"},e.createElement("ul",{className:"env-list env-list--horizontal env-list-dividers--left"},e.createElement("li",{className:"env-list__item  DKcLEimag22jF1u8rOQh"},e.createElement("small",null,e.createElement("b",null,p().get("feedbackRecivedBy")),r.name,e.createElement("br",null),e.createElement("time",null,e.createElement("b",null,p().get("feedbackPageDate")),r.date))))))))};y.propTypes={feedback:i().object};const v=y;var g=function(t){var r=t.isInEditor,n=t.isAdmin,o=t.feedback;return e.createElement("div",{className:"cyi6JjV3Uz46qsh2Owxu"},r?e.createElement("p",{className:"lkBeDeJyaHiVdQ43aBjz"},p().get("editorMode")):e.createElement(m,null),n&&o&&o.length>0&&e.createElement("h3",{className:"Lcq4jvMd_TnE5MhGU5A0"},p().get("recivedFeedback")),n&&o.map((function(t){return e.createElement(v,{key:t.dsid,feedback:t})})))};g.propTypes={isInEditor:i().bool,isAdmin:i().bool,feedback:i().array};const b=g,w=require("VersionUtil");var x=r.n(w);const k=require("SystemUserUtil");var S=r.n(k);const E=require("PortletContextUtil");var _=r.n(E);const C=require("RoleUtil");var O=r.n(C);const F=require("PermissionUtil");var P=r.n(F);const I=require("PermissionUtil.Permission.DEVELOPER");var N=r.n(I);const D=require("PropertyUtil");var R=r.n(D);const j=require("DateUtil");var M=r.n(j);const A=require("appData");var q=r.n(A);const U=require("MailBuilder");var T=r.n(U);const L=require("storage");var z=r.n(L);const V=require("LogUtil");var $=r.n(V),H=z().getCollectionDataStore("feedbackStore"),W=_().getCurrentUser(),B=_().getCurrentPage(),Z=P().hasPermission(B,W,N());o().use((function(e,t,r){if(S().isAnonymous()){if(e.xhr)return t.status(401).json({errorMsg:p().get("signedOut")})}else O().getRoleByName("sv:role"),r(),e.data={currentUser:_().getCurrentUser()}})),o().get("/",(function(r,n){var o,a=x().getCurrentVersion()!=x().ONLINE_VERSION,i=!!Z,l=[],u=(o=_().getCurrentPage().getIdentifier(),H.find("ds.analyzed.feedbackPageId:".concat(o,"*")).toArray());u&&u.forEach((function(e){l.push({name:e.user,message:e.message,date:M().getDateAsString("yyyy-MM-dd HH:mm",new Date(e.dstimestamp)),page:e.feedbackPage,isOutdated:e.isOutdated})})),n.agnosticRender((0,t.renderToString)(e.createElement(b,{isInEditor:a,isAdmin:i,feedback:l})),{isInEditor:a,isAdmin:i,feedback:l})})),o().post("/addFeedback",(function(e,t){var r=function(e){var t;try{t=H.add(e),H.instantIndex(t.dsid)}catch(e){$().info("Could not write to DataStore")}return t}({message:e.params.feedback,feedbackPageId:_().getCurrentPage().getIdentifier(),feedbackPage:R().getString(_().getCurrentPage(),"displayName"),feedbackPageURL:R().getString(_().getCurrentPage(),"URL"),user:R().getString(_().getCurrentUser(),"displayName"),isOutdated:!1});r&&(Y(r),t.json({message:p().get("feedbackToast")}))}));var Y=function(e){var t;e&&T().setSubject(p().get("emailSubject",e.feedbackPage)).setHtmlMessage((t=e,'<div style=" background-color: #80c5ff; height:100%; margin: 10px; border-radius: 5px; padding: 20px;"><h2 style="text-align: center; font-size:30px; color: white;">'+p().get("emailMessageFrom")+' </h2><div style="color: white; text-align: center; font-size:14px; height: 200px; background-color:#004a90; padding: 20px; border: 1px solid white;"><p style="color: white;">'+p().get("emailHeading",t.feedbackPage)+'</p><p style="color: white;">'+p().get("emailMessage",t.message)+'</p> <a style="color: white;" href="'+t.feedbackPageURL+'" >'+p().get("emailLink")+"</p> </a></div></div>")).addRecipient(q().get("email")).build().send()}})()})();