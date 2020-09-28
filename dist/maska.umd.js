/*!
 * maska v1.2.0
 * (c) 2019-2020 Alexander Shabunevich
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Maska={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return u(t).length>1?s(t)(e,t,n,r):l(e,t,n,r)}function u(e){try{return JSON.parse(e)}catch(t){return[e]}}function s(e){var t=u(e).sort((function(e,t){return e.length-t.length}));return function(e,n,r){for(var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=0;o<t.length;){var i=t[o];o++;var u=t[o];if(!(u&&l(e,u,r,!0).length>i.length))return l(e,i,r,a)}return""}}function l(e,t,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0,o=0,i="",u="";a<t.length&&o<e.length;){var s=t[a],l=e[o],f=n[s];if(f&&f.pattern)f.pattern.test(l)&&(i+=c(l,f),a++,r&&t[a]&&!n[t[a]]&&(i+=t[a],a++)),o++;else if(f&&f.repeat){var p=n[t[a-1]];p&&!p.pattern.test(l)?a++:a--}else f&&f.escape&&(s=t[++a]),r&&(i+=s),l===s&&o++,a++}for(;r&&a<t.length;){var v=t[a];if(n[v]){u="";break}u+=v,a++}return i+u}function c(e,t){return t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}var f={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function p(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function v(e){return"[object String]"===Object.prototype.toString.call(e)}var d=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!n)throw new Error("Maska: no element for mask");if(r.tokens)for(var a in r.tokens)r.tokens[a]=o({},r.tokens[a]),r.tokens[a].pattern&&v(r.tokens[a].pattern)&&(r.tokens[a].pattern=new RegExp(r.tokens[a].pattern));this._opts={mask:r.mask,tokens:o(o({},f),r.tokens)},this._el=v(n)?document.querySelectorAll(n):n.length?n:[n],this.init()}var r,a,u;return r=e,(a=[{key:"init",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=p(this._el[t]);!this._opts.mask||n.dataset.mask&&n.dataset.mask===this._opts.mask||(n.dataset.mask=this._opts.mask),this.updateValue(n),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.addEventListener("beforeinput",(function(t){return e.beforeInput(t)})))}}},{key:"destroy",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=p(this._el[t]);n.removeEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.removeEventListener("beforeinput",(function(t){return e.beforeInput(t)})),delete n.dataset.mask,delete n.dataset.maskInited}}},{key:"updateValue",value:function(e,t){var n=e.type.match(/^number$/i)&&e.validity.badInput;if((e.value||n)&&e.dataset.mask){var r=e.selectionEnd,a=e.value,o=a[r-1];e.value=i(e.value,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&r===a.length&&(r=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type&&e.type.match(/^(text|search|password|tel|url)$/i)||!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,r,o),e.value!==a&&e.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}("input",t&&t.inputType||null))}}},{key:"beforeInput",value:function(e){e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}}])&&n(r.prototype,a),u&&n(r,u),e}();function k(e,t){if(t.value)return t.value&&function(e){return!(v(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)?new d(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?o({},e.tokens):{}):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value)):void 0}function h(e){e.directive("maska",k)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(h),e.create=function(e,t){return new d(e,t)},e.default=h,e.mask=i,e.maska=k,e.tokens=f,Object.defineProperty(e,"__esModule",{value:!0})}));
