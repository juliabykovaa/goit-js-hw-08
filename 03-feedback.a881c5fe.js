function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t,e,n){var i,o,r,f,u,a,c=0,l=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(w,e),l?m(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=v();if(h(t))return O(t);u=setTimeout(w,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function O(t){return u=void 0,y&&i?m(t):(i=o=void 0,f)}function T(){var t=v(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,e),m(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},T.flush=function(){return void 0===u?f:O(v())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(t,e,{leading:i,maxWait:e,trailing:o})};const m=document.querySelector(".feedback-form"),j={};!function(t){const e=JSON.parse(localStorage.getItem("feedback-form-state"));for(key in e)e&&(m[key].value=e[key])}(),m.addEventListener("submit",(function(t){t.preventDefault(),console.log(j),t.target.reset()})),m.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,function(){const t=JSON.stringify(j);localStorage.setItem("feedback-form-state",t)}()})),500);
//# sourceMappingURL=03-feedback.a881c5fe.js.map
