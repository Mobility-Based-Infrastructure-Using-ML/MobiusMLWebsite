webpackJsonp([0x67ef26645b2a,60335399758886],{103:function(e,t){e.exports={data:{site:{siteMetadata:{title:"David's Site"}}},layoutContext:{}}},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(4),i=r(a),u=n(202),c=r(u),f=n(103),l=r(f);t.default=function(e){return i.default.createElement(c.default,o({},e,l.default))},e.exports=t.default},284:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),f(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var s=u(e),T=u(t)}catch(e){return!1}if(s.length!=T.length)return!1;for(s.sort(),T.sort(),a=s.length-1;a>=0;a--)if(s[a]!=T[a])return!1;for(a=s.length-1;a>=0;a--)if(l=s[a],!f(e[l],t[l],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(286),c=n(285),f=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},285:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},286:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},293:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},396:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),s=r(l),T=n(7),A=r(T),d=n(415),p=r(d),E=n(284),y=r(E),h=n(397),S=n(181),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case S.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case S.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case S.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case S.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case S.TAG_NAMES.LINK:case S.TAG_NAMES.META:case S.TAG_NAMES.NOSCRIPT:case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(e,a)},f(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:A.default.object,bodyAttributes:A.default.object,children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]),defaultTitle:A.default.string,defer:A.default.bool,encodeSpecialCharacters:A.default.bool,htmlAttributes:A.default.object,link:A.default.arrayOf(A.default.object),meta:A.default.arrayOf(A.default.object),noscript:A.default.arrayOf(A.default.object),onChangeClientState:A.default.func,script:A.default.arrayOf(A.default.object),style:A.default.arrayOf(A.default.object),title:A.default.string,titleAttributes:A.default.object,titleTemplate:A.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},m=function(){return null},g=(0,p.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(m),O=b(g);O.renderStatic=O.rewind,t.Helmet=O,t.default=O},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},397:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(4),u=r(i),c=n(5),f=r(c),l=n(181),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=y(e,l.TAG_NAMES.TITLE),n=y(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},A=function(e){return y(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},p=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&O("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,f.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:y(e,l.HELMET_PROPS.DEFER),encode:y(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:A(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},S=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){S(t)},0)}}(),b=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:e.requestAnimationFrame||S,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,O=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},C=null,v=function(e){C&&g(C),e.defer?C=m(function(){P(e,function(){C=null})}):(P(e),C=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,s=e.styleTags,T=e.title,A=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,o),M(T,A);var d={baseTag:I(l.TAG_NAMES.BASE,n),linkTags:I(l.TAG_NAMES.LINK,a),metaTags:I(l.TAG_NAMES.META,i),noscriptTags:I(l.TAG_NAMES.NOSCRIPT,u),scriptTags:I(l.TAG_NAMES.SCRIPT,f),styleTags:I(l.TAG_NAMES.STYLE,s)},p={},E={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(E[e]=d[e].oldTags)}),t&&t(),c(e,p,E)},w=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],f=t[c]||"";n.getAttribute(c)!==f&&n.setAttribute(c,f),o.indexOf(c)===-1&&o.push(c);var s=a.indexOf(c);s!==-1&&a.splice(s,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},I=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},L=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=L(n),a=w(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"},G=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},Q=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),a=_(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,a,t)]},j=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return Q(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return _(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return j(e,t)},toString:function(){return G(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,f=e.styleTags,s=e.title,T=void 0===s?"":s,A=e.titleAttributes;return{base:k(l.TAG_NAMES.BASE,t,r),bodyAttributes:k(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(l.ATTRIBUTE_NAMES.HTML,o,r),link:k(l.TAG_NAMES.LINK,a,r),meta:k(l.TAG_NAMES.META,i,r),noscript:k(l.TAG_NAMES.NOSCRIPT,u,r),script:k(l.TAG_NAMES.SCRIPT,c,r),style:k(l.TAG_NAMES.STYLE,f,r),title:k(l.TAG_NAMES.TITLE,{title:T,titleAttributes:A},r)}};t.convertReactPropstoHtmlAttributes=H,t.handleClientStateChange=v,t.mapStateOnServer=B,t.reducePropsToState=h,t.requestAnimationFrame=m,t.warn=O}).call(t,function(){return this}())},415:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(4),c=r(u),f=n(293),l=r(f),s=n(432),T=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(f){function s(){d=e(A.map(function(e){return e.props})),p.canUseDOM?t(d):n&&(d=n(d))}if("function"!=typeof f)throw new Error("Expected WrappedComponent to be a React component.");var A=[],d=void 0,p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,A=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,T.default)(e,this.props)},t.prototype.componentWillMount=function(){A.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=A.indexOf(this);A.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(f,this.props)},t}(u.Component);return p.displayName="SideEffect("+r(f)+")",p.canUseDOM=l.default.canUseDOM,p}}},432:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var f=a[c];if(!u(f))return!1;var l=e[f],s=t[f];if(o=n?n.call(r,l,s,f):void 0,o===!1||void 0===o&&l!==s)return!1}return!0}},295:function(e,t){},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(4),c=r(u),f=n(98),l=r(f);n(295);var s=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.handleScroll=function(e){var t=window.pageYOffset;t>50?r.setState({hasScrolled:!0}):r.setState({hasScrolled:!1})},r.state={hasScrolled:!1},r}return i(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.prototype.render=function(){return c.default.createElement("div",{className:this.state.hasScrolled?"Header Header-Scroll":"Header"},c.default.createElement("div",{className:"HeaderGroup"},c.default.createElement(l.default,{to:"/"},c.default.createElement("img",{src:n(433),className:"headerLogo"})),c.default.createElement(l.default,{to:"/courses"},"FAQ"),c.default.createElement(l.default,{to:"/buyNow"},c.default.createElement("button",null,"Login")),c.default.createElement(l.default,{to:"/workshops"},"Contact")))},t}(c.default.Component);t.default=s,e.exports=t.default},433:function(e,t){e.exports="data:image/png;base64,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"},296:function(e,t){},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(4),a=r(o),i=n(7),u=r(i),c=n(396),f=r(c),l=n(201),s=r(l);n(296);var T=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(f.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.default.createElement(s.default,null),t())};T.propTypes={children:u.default.func},t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-2eb7206d289788905187.js.map