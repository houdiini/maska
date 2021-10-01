/*!
 * maska v1.4.6
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Maska={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return s(t).length>1?l(t)(e,t,n,a):c(e,t,n,a)}function s(e){try{return JSON.parse(e)}catch(t){return[e]}}function l(e){var t=s(e).sort((function(e,t){return e.length-t.length}));return function(e,a,r){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=t.map((function(t){return c(e,t,r,!1)})),u=i.pop();for(var s in t)if(n(u,t[s],r))return c(e,t[s],r,o);return""};function n(e,t,n){for(var a in n)n[a].escape&&(t=t.replace(new RegExp(a+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function c(e,t,n){for(var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=0,o=0,i="",u="";r<t.length&&o<e.length;){var s=t[r],l=e[o],c=n[s];if(c&&c.pattern)c.pattern.test(l)&&(i+=p(l,c),r++,a&&t[r]&&(n[t[r]]?n[t[r]]&&n[t[r]].escape&&(i+=t[r+1],r+=2):(i+=t[r],r++))),o++;else if(c&&c.repeat){var f=n[t[r-1]];f&&!f.pattern.test(l)?r++:r--}else c&&c.escape&&(s=t[++r]),a&&(i+=s),l===s&&o++,r++}for(;a&&r<t.length;){var v=t[r];if(n[v]){u="";break}u+=v,r++}return i+u}function p(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function f(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function v(e){return"[object String]"===Object.prototype.toString.call(e)}var d=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,e),!t)throw new Error("Maska: no element for mask");if(r.tokens)for(var o in r.tokens)r.tokens[o]=n({},r.tokens[o]),r.tokens[o].pattern&&v(r.tokens[o].pattern)&&(r.tokens[o].pattern=new RegExp(r.tokens[o].pattern));this._opts={mask:r.mask,tokens:n(n({},i),r.tokens)},this._el=v(t)?document.querySelectorAll(t):t.length?t:[t],this.init()}var t,o,s;return t=e,(o=[{key:"init",value:function(){for(var e=this,t=function(t){var n=f(e._el[t]);!e._opts.mask||n.dataset.mask&&n.dataset.mask===e._opts.mask||(n.dataset.mask=e._opts.mask),setTimeout((function(){return e.updateValue(n)}),0),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.addEventListener("beforeinput",(function(t){return e.beforeInput(t)})))},n=0;n<this._el.length;n++)t(n)}},{key:"destroy",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=f(this._el[t]);n.removeEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.removeEventListener("beforeinput",(function(t){return e.beforeInput(t)})),delete n.dataset.mask,delete n.dataset.maskInited}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var a=e.selectionEnd,r=e.value,o=r[a-1];e.dataset.maskRawValue=u(e.value,e.dataset.mask,this._opts.tokens,!1),e.value=u(e.value,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&a===r.length&&(a=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,a,o),this.dispatch("maska",e,t),e.value!==r&&this.dispatch("input",e,t)}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null))}}])&&r(t.prototype,o),s&&r(t,s),e}();var k,m=(k=new WeakMap,function(e,t){if(t.value)return k.has(e)&&!function(e){return!(v(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)?k.get(e).updateValue(e):void k.set(e,new d(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?n({},e.tokens):{}):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value)))});function h(e){e.directive("maska",m)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(h),e.create=function(e,t){return new d(e,t)},e.default=h,e.install=h,e.mask=u,e.maska=m,e.tokens=i,Object.defineProperty(e,"__esModule",{value:!0})}));
