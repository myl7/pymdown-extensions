function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(){"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}function r(t,e,r){return e=o(e),function(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,a()?Reflect.construct(e,[],o(t).constructor):e.apply(t,r))}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function a(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(a=function(){return!!t})()}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",y="executing",m="completed",v={};function g(){}function b(){}function w(){}var x={};f(x,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(C([])));L&&L!==r&&n.call(L,a)&&(x=L);var O=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==_typeof(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?m:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return b.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},_(j.prototype),f(j.prototype,u,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),f(O,l,"Generator"),f(O,a,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t){var e="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(a())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&u(o,r.prototype),o}(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)},l(t)}var f,s,h,d,p=function(){var t=e(c().mark((function t(e){var o,a,u,f,s,h,d,p,y,m,v,g,b,w,x,E;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=function(t){function e(){var t;n(this,e);var o=(t=r(this,e)).attachShadow({mode:"open"}),i=document.createElement("style");return i.textContent="\n      :host {\n        display: block;\n        line-height: initial;\n        font-size: 16px;\n      }\n      div.diagram {\n        margin: 0;\n        overflow: visible;\n      }",o.appendChild(i),t}return i(e,t),o=e,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}(l(HTMLElement)),void 0===customElements.get("diagram-div")&&customElements.define("diagram-div",o),a=function(t){for(var e="",r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if("code"===n.tagName.toLowerCase())for(var o=0;o<n.childNodes.length;o++){var i=n.childNodes[o];if("#text"===i.nodeName&&!/^\s*$/.test(i.nodeValue)){e=i.nodeValue;break}}}return e},u={startOnLoad:!1,theme:"default",flowchart:{htmlLabels:!1},er:{useMaxWidth:!1},sequence:{useMaxWidth:!1,noteFontWeight:"14px",actorFontSize:"14px",messageFontSize:"16px"}},mermaid.mermaidAPI.globalReset(),f=null;try{f=document.querySelector("[data-md-color-scheme]").getAttribute("data-md-color-scheme")}catch(t){f="default"}s="undefined"==typeof mermaidConfig?u:mermaidConfig[f]||mermaidConfig.default||u,mermaid.initialize(s),h=document.querySelectorAll("pre.".concat(e,", diagram-div")),d=document.querySelector("html body"),p=0;case 12:if(!(p<h.length)){t.next=47;break}return y=h[p],m="diagram-div"===y.tagName.toLowerCase()?y.shadowRoot.querySelector("pre.".concat(e)):y,(v=document.createElement("div")).style.visibility="hidden",v.style.display="display",v.style.padding="0",v.style.margin="0",v.style.lineHeight="initial",v.style.fontSize="16px",d.appendChild(v),t.prev=23,t.next=26,mermaid.render("_diagram_".concat(p),a(m),v);case 26:g=t.sent,b=g.svg,w=g.bindFunctions,(x=document.createElement("div")).className=e,x.innerHTML=b,w&&w(x),(E=document.createElement("diagram-div")).shadowRoot.appendChild(x),y.parentNode.insertBefore(E,y),m.style.display="none",E.shadowRoot.appendChild(m),m!==y&&y.parentNode.removeChild(y),t.next=43;break;case 41:t.prev=41,t.t0=t.catch(23);case 43:d.contains(v)&&d.removeChild(v);case 44:p++,t.next=12;break;case 47:case"end":return t.stop()}}),t,null,[[23,41]])})));return function(e){return t.apply(this,arguments)}}(),y=function(t,r){if("katex"===r)for(var n=document.querySelectorAll(".".concat(t)),o=0;o<n.length;o++){var i=n[o].textContent||n[o].innerText;i.startsWith("\\(")&&i.endsWith("\\)")?katex.render(i.slice(2,-2),n[o],{displayMode:!1}):i.startsWith("\\[")&&i.endsWith("\\]")&&katex.render(i.slice(2,-2),n[o],{displayMode:!0})}else"mathjax"===r&&(MathJax.startup.output.clearCache(),MathJax.typesetClear(),MathJax.texReset(),setTimeout(e(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,MathJax.typesetPromise();case 2:case"end":return t.stop()}}),t)})))))};f=Promise.resolve(),s=Promise.resolve(),h=new MutationObserver((function(t){t.forEach((function(t){if("attributes"===t.type){var e=t.target.getAttribute("data-md-color-scheme");e||(e="default"),localStorage.setItem("data-md-color-scheme",e),"undefined"!=typeof mermaid&&p("diagram")}}))})),d=function(){h.observe(document.querySelector("body"),{attributeFilter:["data-md-color-scheme"]}),"undefined"!=typeof mermaid&&(f=f.then((function(){p("diagram")})).catch((function(t){console.log("UML loading failed...".concat(t))}))),"undefined"!=typeof katex?s=s.then((function(){y("arithmatex","katex")})).catch((function(t){console.log("Math loading failed...".concat(t))})):"undefined"!=typeof MathJax&&"typesetPromise"in MathJax&&(s=s.then((function(){y("arithmatex","mathjax")})).catch((function(t){console.log("Math loading failed...".concat(t))})))},window.document$?window.document$.subscribe(d):document.addEventListener("DOMContentLoaded",d)}();
//# sourceMappingURL=extra-loader-DSguOvJQ.js.map
