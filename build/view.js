(()=>{"use strict";var t={338:(t,e,r)=>{var n=r(795);e.H=n.createRoot,n.hydrateRoot},795:t=>{t.exports=window.ReactDOM}},e={},r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(338);const n=window.wp.domReady,o=window.wp.element;function a(t){var e=t.getPosts;if(e.length>1)return React.createElement("p",{className:"alert-success"},"Showing All 10 Posts");var r=e[0].id;return React.createElement("p",{className:"alert-success"},"Showing Post with ID: ",r)}function i(t){var e=t.resetBtnHandler;return React.createElement("p",null,React.createElement("button",{type:"button",onClick:e},"Reset"))}function c(){var t="".concat(window.location.origin,"/wp-admin/options-general.php?page=json-placeholder-block");return React.createElement("div",{className:"settings-page-link"},React.createElement("p",null,React.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},"JSONPlaceholder.org Posts Block Settings Page Link")))}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function s(t){var e=t.jsonData,r=t.isEditPage,n=e.slice(0,10),u=l((0,o.useState)(n),2),s=u[0],f=u[1],h=l((0,o.useState)(!1),2),p=h[0],y=h[1],v=l((0,o.useState)(""),2),m=v[0],d=v[1];return React.createElement("div",null,r&&React.createElement(c,null),React.createElement("h2",null,"JSONPlaceholder.org Posts (10 or Less)"),n.length>1&&React.createElement(React.Fragment,null,React.createElement("h3",null,"Select Post By ID"),React.createElement("p",null,React.createElement("select",{name:"selectPostById",onChange:function(t){var e=t.target.value;if(d(e),e){var r=Number(e),o=n.find((function(t){return t.id===r})),a=[].concat([],[o]);f(a),y(!0)}else f(n)},value:m},React.createElement("option",{value:""},"Show All Posts"),n.map((function(t){return React.createElement("option",{key:t.id,value:t.id},"Post ID: ",t.id)})))),p&&React.createElement(i,{resetBtnHandler:function(){d(""),f(n)}}),React.createElement("div",{role:"alert","aria-live":"polite"},p&&React.createElement(a,{getPosts:s}))),React.createElement("h3",null,"Posts"),s.map((function(t){return React.createElement("div",{key:t.id},React.createElement("h4",null,"Post ID: ",t.id),React.createElement("h5",null,"Post Title: ",t.title),React.createElement("p",null,"Post URL: ",React.createElement("br",null),React.createElement("a",{href:t.url,target:"_blank",rel:"noreferrer"},t.url)),React.createElement("p",null,"Post Thumbnail:",React.createElement("br",null),React.createElement("img",{src:t.thumbnail,alt:t.title})))})))}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof w?e:w,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var y="suspendedStart",v="suspendedYield",m="executing",d="completed",g={};function w(){}function b(){}function E(){}var R={};u(R,i,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(I([])));S&&S!==r&&n.call(S,i)&&(R=S);var j=E.prototype=w.prototype=Object.create(R);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==f(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=y;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=k(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(f(e)+" is not iterable")}return b.prototype=E,o(j,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=u(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(P.prototype),u(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(j),u(j,l,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function p(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function v(t){var e,r,n=t.isEditPage,a=(e=(0,o.useState)("Data loading..."),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],l="".concat(window.location.origin,"/wp-json/jsonplaceholder/v1/jsonplaceholder-option");return(0,o.useEffect)((function(){function t(){var e;return e=h().mark((function t(){var e,r,n,o,a,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(l);case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,n=r.jsonplaceholder_url,t.next=10,fetch(n);case 10:return o=t.sent,t.next=13,o.json();case 13:a=t.sent,Array.isArray(a)?c(a):(i=[].concat([],[a]),c(i)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),c("No data found!");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})),t=function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){p(a,n,o,i,c,"next",t)}function c(t){p(a,n,o,i,c,"throw",t)}i(void 0)}))},t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),React.createElement("div",null,Array.isArray(i)?React.createElement(s,{jsonData:i,isEditPage:n}):React.createElement("h2",null,i))}n((function(){var t=(0,r.H)(document.getElementsByClassName("wp-block-create-block-jsonplaceholder-posts")[0]);t.render(React.createElement(v,{isEditPage:!1}),t)}))})();