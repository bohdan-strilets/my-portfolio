parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"eYiS":[function(require,module,exports) {
const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});
},{}],"yruE":[function(require,module,exports) {
const e=document.querySelector(".buton-up");function t(){const t=window.pageYOffset,n=document.documentElement.clientHeight;t>n&&e.classList.add("is-show"),t<n&&e.classList.remove("is-show")}function n(){window.pageYOffset>0&&(window.scrollBy(0,-30),setTimeout(n,0))}window.addEventListener("scroll",t),e.addEventListener("click",n);
},{}],"NRIG":[function(require,module,exports) {
const e={openMenuBtn:document.querySelector("[data-menu]"),backdrop:document.querySelector(".backdrop"),links:document.querySelectorAll(".m-navigations a")};function n(n){e.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",d)}function t(){e.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",d)}function c(e){e.target===e.currentTarget&&t()}function d(e){"Escape"===e.code&&t()}e.openMenuBtn.addEventListener("click",n),e.backdrop.addEventListener("click",c),e.links.forEach(e=>e.addEventListener("click",t));
},{}],"sofq":[function(require,module,exports) {
const e={openMenuBtn:document.querySelector("[data-profile]"),backdrop:document.querySelector(".backdrop-2")};function n(n){e.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",o)}function t(){e.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",o)}function d(e){e.target===e.currentTarget&&t()}function o(e){"Escape"===e.code&&t()}e.openMenuBtn.addEventListener("click",n),e.backdrop.addEventListener("click",d);
},{}],"L1HH":[function(require,module,exports) {
const e={changeThemeBtn:document.querySelector("[data-theme]"),changeThemeMobileBtn:document.querySelector("[data-mTheme]"),html:document.querySelector("html")};function t(){e.html.classList.toggle("dark-mode")}e.changeThemeBtn.addEventListener("click",t),e.changeThemeMobileBtn.addEventListener("click",t);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/smoth-scroll/index"),require("./js/scroll-up/index"),require("./js/modal/menu"),require("./js/modal/profile"),require("./js/change-themes/index");
},{"./sass/main.scss":"clu1","./js/smoth-scroll/index":"eYiS","./js/scroll-up/index":"yruE","./js/modal/menu":"NRIG","./js/modal/profile":"sofq","./js/change-themes/index":"L1HH"}]},{},["Focm"], null)
//# sourceMappingURL=/my-portfolio/src.c3f2e583.js.map