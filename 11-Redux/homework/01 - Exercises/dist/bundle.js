(()=>{var r={883:r=>{r.exports={INCREMENTO:"INCREMENTAR_COUNTER",DECREMENTO:"DECREMENTAR_COUNTER"}}},t={};function e(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return r[o](i,i.exports,e),i.exports}(()=>{"use strict";function r(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var t="function"==typeof Symbol&&Symbol.observable||"@@observable",o=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};var i=e(883);const c={contador:0},u={type:i.INCREMENTO},f={type:i.DECREMENTO};console.log(c);var s=function e(o,i,c){var u;if("function"==typeof i&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof i&&void 0===c&&(c=i,i=void 0),void 0!==c){if("function"!=typeof c)throw new Error(r(1));return c(e)(o,i)}if("function"!=typeof o)throw new Error(r(2));var f=o,s=i,E=[],a=E,l=!1;function p(){a===E&&(a=E.slice())}function d(){if(l)throw new Error(r(3));return s}function y(t){if("function"!=typeof t)throw new Error(r(4));if(l)throw new Error(r(5));var e=!0;return p(),a.push(t),function(){if(e){if(l)throw new Error(r(6));e=!1,p();var o=a.indexOf(t);a.splice(o,1),E=null}}}function N(t){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(t))throw new Error(r(7));if(void 0===t.type)throw new Error(r(8));if(l)throw new Error(r(9));try{l=!0,s=f(s,t)}finally{l=!1}for(var e=E=a,o=0;o<e.length;o++)(0,e[o])();return t}return N({type:n.INIT}),(u={dispatch:N,subscribe:y,getState:d,replaceReducer:function(t){if("function"!=typeof t)throw new Error(r(10));f=t,N({type:n.REPLACE})}})[t]=function(){var e,o=y;return(e={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(r(11));function e(){t.next&&t.next(d())}return e(),{unsubscribe:o(e)}}})[t]=function(){return this},e},u}((function(r=c,t){switch(t.type){case i.INCREMENTO:return r.contador+1;case i.DECREMENTO:return r.contador-1;case"INCREMENTAR_N":return r.contador+t.payload}}));console.log(s);const E=document.querySelector("#valor");function a(){const r=s.getState().contador;console.log(r),E.innerHTML=r}a(),s.subscribe(a());var l=document.querySelector("#incremento");console.log(l),l.addEventListener("click",(()=>{s.dispatch(u)})),document.querySelector("#decremento").addEventListener("click",(()=>{s.dispatch(f)}))})()})();