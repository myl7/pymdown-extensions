!function(){"use strict";function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function r(e,t,n){return(r=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function l(e){var n="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return r(e,arguments,c(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),u(t,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function t(i){var e=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,l(HTMLElement));var r=function(r){var o=d();return function(){var e,t=c(r);if(o){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)}}(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=(e=r.call(this)).attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent="\n      div.mermaid {\n        margin: 0;\n        overflow: visible;\n      }",t.appendChild(n),e}return o}();void 0===customElements.get("mermaid-div")&&customElements.define("mermaid-div",e),mermaid.mermaidAPI.globalReset(),document.querySelector("[data-md-color-scheme='dracula']")?mermaid.initialize(mermaidConfig.dracula||{startOnLoad:!1}):document.querySelector("[data-md-color-scheme='slate']")?mermaid.initialize(mermaidConfig.dark||{startOnLoad:!1}):mermaid.initialize(mermaidConfig.light||{startOnLoad:!1});for(var n=document.querySelectorAll("pre.".concat(i,", mermaid-div")),a=document.querySelector("body"),t=function(e){var r=n[e],o="mermaid-div"===r.tagName.toLowerCase()?r.shadowRoot.querySelector("pre.".concat(i)):r,t=document.createElement("div");t.style.visibility="hidden",t.style.display="display",t.style.padding="0",t.style.margin="0",a.appendChild(t),mermaid.mermaidAPI.render("_mermaind_".concat(e),function(e){for(var t="",n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];if("code"===r.tagName.toLowerCase())for(var o=0;o<r.childNodes.length;o++){var i=r.childNodes[o];if("#text"===i.nodeName&&!/^\s*$/.test(i.nodeValue)){t=i.nodeValue;break}}}return t}(o),function(e){var t=document.createElement("div");t.className=i,t.innerHTML=e;var n=document.createElement("mermaid-div");n.shadowRoot.appendChild(t),r.parentNode.insertBefore(n,r),o.style.display="none",n.shadowRoot.appendChild(o),o!==r&&r.parentNode.removeChild(r)},t)},r=0;r<n.length;r++)t(r)}var e,n;n=new MutationObserver(function(e){e.forEach(function(e){"attributes"===e.type&&"data-md-color-scheme"===e.attributeName&&"undefined"!=typeof mermaid&&t("mermaid")})}),e=function(){"undefined"!=typeof mermaid&&t("mermaid")},document.addEventListener("DOMContentLoaded",e),document.addEventListener("DOMContentSwitch",e),n.observe(document.querySelector("body"),{attributes:!0})}();