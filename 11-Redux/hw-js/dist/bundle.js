(()=>{var r={857:(r,t,e)=>{"use strict";function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>b,bindActionCreators:()=>O,combineReducers:()=>l,compose:()=>v,createStore:()=>y,legacy_createStore:()=>d});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function y(r,t,e){var n;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(i(1));return e(y)(r,t)}if("function"!=typeof r)throw new Error(i(2));var o=r,c=t,f=[],d=f,l=!1;function s(){d===f&&(d=f.slice())}function O(){if(l)throw new Error(i(3));return c}function v(r){if("function"!=typeof r)throw new Error(i(4));if(l)throw new Error(i(5));var t=!0;return s(),d.push(r),function(){if(t){if(l)throw new Error(i(6));t=!1,s();var e=d.indexOf(r);d.splice(e,1),f=null}}}function b(r){if(!p(r))throw new Error(i(7));if(void 0===r.type)throw new Error(i(8));if(l)throw new Error(i(9));try{l=!0,c=o(c,r)}finally{l=!1}for(var t=f=d,e=0;e<t.length;e++)(0,t[e])();return r}function E(r){if("function"!=typeof r)throw new Error(i(10));o=r,b({type:a.REPLACE})}function h(){var r,t=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(i(11));function e(){r.next&&r.next(O())}return e(),{unsubscribe:t(e)}}})[u]=function(){return this},r}return b({type:a.INIT}),(n={dispatch:b,subscribe:v,getState:O,replaceReducer:E})[u]=h,n}var d=y;function l(r){for(var t=Object.keys(r),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof r[o]&&(e[o]=r[o])}var c,u=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:a.INIT}))throw new Error(i(12));if(void 0===e(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(i(13))}))}(e)}catch(r){c=r}return function(r,t){if(void 0===r&&(r={}),c)throw c;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=e[a],y=r[a],d=p(y,t);if(void 0===d)throw t&&t.type,new Error(i(14));o[a]=d,n=n||d!==y}return(n=n||u.length!==Object.keys(r).length)?o:r}}function s(r,t){return function(){return t(r.apply(this,arguments))}}function O(r,t){if("function"==typeof r)return s(r,t);if("object"!=typeof r||null===r)throw new Error(i(16));var e={};for(var n in r){var o=r[n];"function"==typeof o&&(e[n]=s(o,t))}return e}function v(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function b(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),n=function(){throw new Error(i(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(r){return r(o)}));return n=v.apply(void 0,u)(e.dispatch),c(c({},e),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",IMPAR:"IMPAR",ASINCRONO:"ASINCRONO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o,IMPAR:c,ASINCRONO:i}=e(883);r.exports={incremento:()=>({type:n,payload:""}),decremento:()=>({type:o,payload:""}),impar:()=>({type:c,payload:""}),asincrono:()=>({type:i,payload:""})}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o,IMPAR:c,ASINCRONO:i}=e(883),u={contador:0};r.exports=function(r=u,t){switch(t.type){case n:return{...r,contador:r.contador+1};case o:return{...r,contador:r.contador-1};case c:return r.contador%2!=0?{...r,contador:r.contador+2}:{...r,contador:r.contador+1};case i:return{...r,contador:r.contador-1};default:return r}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return r[n](c,c.exports,e),c.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=e(857),t=e(616),{incremento:n,decremento:o,impar:c,asincrono:i}=e(518);var u=r(t),f=document.querySelector("#valor");function a(){var r=u.getState().contador;f.innerText=r}a(),u.suscribe((()=>a())),document.querySelector("#incremento").onclick=function(){return u.dispatch(n())},document.querySelector("#decremento").onclick=function(){return u.dispatch(o())},document.querySelector("#incrementoImpar").onclick=()=>u.dispatch(c()),document.querySelector("#incrementoAsync").onclick=()=>setTimeout(u.dispatch(i()),2e3)})()})();