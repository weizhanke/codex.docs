var Docs=function(t){function e(e){for(var n,r,i=e[0],a=e[1],u=0,c=[];u<i.length;u++)r=i[u],o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(s&&s(e);c.length;)c.shift()()}var n={},r={2:0},o={2:0};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{0:1}[t]&&e.push(r[t]=new Promise(function(e,n){for(var o=({0:"code-styling",1:"editor"}[t]||t)+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===o||s===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var f;if((s=(f=l[c]).getAttribute("data-href"))===o||s===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.request=o,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=a,document.getElementsByTagName("head")[0].appendChild(h)}).then(function(){r[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+({0:"code-styling",1:"editor"}[t]||t)+".bundle.js"}(t),u=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[t]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var s=u;return i(i.s=58)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(32)("wks"),o=n(21),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(2),o=n(39),i=n(40),a=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(8);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(6),o=n(30);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(5),i=n(9),a=n(12),u=n(7),c=function(t,e,n){var s,l,f,h,p=t&c.F,d=t&c.G,v=t&c.S,y=t&c.P,g=t&c.B,m=d?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,x=d?o:o[e]||(o[e]={}),w=x.prototype||(x.prototype={});for(s in d&&(n=e),n)f=((l=!p&&m&&void 0!==m[s])?m:n)[s],h=g&&l?u(f,r):y&&"function"==typeof f?u(Function.call,f):f,m&&a(m,s,f,t&c.U),x[s]!=f&&i(x,s,h),y&&w[s]!=f&&(w[s]=f)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(10);r(r.S+r.F*!n(4),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(0),o=n(9),i=n(18),a=n(21)("src"),u=Function.toString,c=(""+u).split("toString");n(5).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,a)||o(n,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||u.call(this)})},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(13),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e){t.exports={}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(3),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=!1},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r,o,i,a,u=n(22),c=n(0),s=n(7),l=n(15),f=n(10),h=n(3),p=n(8),d=n(42),v=n(43),y=n(44),g=n(25).set,m=n(46)(),x=n(26),w=n(47),b=n(48),_=n(49),E=c.TypeError,S=c.process,j=S&&S.versions,k=j&&j.v8||"",P=c.Promise,O="process"==l(S),L=function(){},C=o=x.f,T=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(L,L)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==k.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,u=o?e.ok:e.fail,c=e.resolve,s=e.reject,l=e.domain;try{u?(o||(2==t._h&&F(t),t._h=1),!0===u?n=r:(l&&l.enter(),n=u(r),l&&(l.exit(),a=!0)),n===e.promise?s(E("Promise-chain cycle")):(i=M(n))?i.call(n,c,s):c(n)):s(r)}catch(t){l&&!a&&l.exit(),s(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){g.call(c,function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=w(function(){O?S.emit("unhandledRejection",o,t):(n=c.onunhandledrejection)?n({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=O||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){g.call(c,function(){var e;O?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},B=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},N=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw E("Promise can't be resolved itself");(e=M(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,s(N,r,1),s(B,r,1))}catch(t){B.call(r,t)}}):(n._v=t,n._s=1,A(n,!1))}catch(t){B.call({_w:n,_d:!1},t)}}};T||(P=function(t){d(this,P,"Promise","_h"),p(t),r.call(this);try{t(s(N,this,1),s(B,this,1))}catch(t){B.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(50)(P.prototype,{then:function(t,e){var n=C(y(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=O?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(N,t,1),this.reject=s(B,t,1)},x.f=C=function(t){return t===P||t===a?new i(t):o(t)}),f(f.G+f.W+f.F*!T,{Promise:P}),n(31)(P,"Promise"),n(51)("Promise"),a=n(5).Promise,f(f.S+f.F*!T,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!T),"Promise",{resolve:function(t){return _(u&&this===a?P:this,t)}}),f(f.S+f.F*!(T&&n(37)(function(t){P.all(t).catch(L)})),"Promise",{all:function(t){var e=this,n=C(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,a=1;v(t,!1,function(t){var u=i++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[u]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e,n){var r,o,i,a=n(7),u=n(45),c=n(36),s=n(20),l=n(0),f=l.process,h=l.setImmediate,p=l.clearImmediate,d=l.MessageChannel,v=l.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},x=function(t){m.call(t.data)};h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){u("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete g[t]},"process"==n(13)(f)?r=function(t){f.nextTick(a(m,t,1))}:v&&v.now?r=function(t){v.now(a(m,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=x,r=a(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",x,!1)):r="onreadystatechange"in s("script")?function(t){c.appendChild(s("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:h,clear:p}},function(t,e,n){"use strict";var r=n(8);function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r,o,i=n(57),a=RegExp.prototype.exec,u=String.prototype.replace,c=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(c=function(t){var e,n,r,o,c=this;return l&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),s&&(e=c.lastIndex),r=a.call(c,t),s&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),l&&r&&r.length>1&&u.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=c},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(T([])));m&&m!==r&&o.call(m,a)&&(y=m);var x=S.prototype=_.prototype=Object.create(y);E.prototype=x.constructor=S,S.constructor=E,S[c]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[u]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var o=new k(w(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=P(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function E(){}function S(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var u=b(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,n){
/*!
 * CodeX Module Dispatcher — Initialize frontend Modules from the DOM without inline scripts
 * 
 * @copyright CodeX Team <team@ifmo.su>
 * @license MIT https://github.com/codex-team/dispatcher/LICENSE
 * @author @polinashneider https://github.com/polinashneider
 * @version 0.0.1
 */
"undefined"!=typeof self&&self,t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e){var n=e.name,r=e.element,i=e.settings,a=e.moduleClass;o(this,t),this.name=n,this.element=r,this.settings=i,this.moduleClass=a}return i(t,[{key:"init",value:function(){try{console.assert(this.moduleClass.init instanceof Function,"Module «"+this.name+"» should implement init method"),this.moduleClass.init instanceof Function&&(this.moduleClass.init(this.settings,this.element),console.log("Module «"+this.name+"» initialized"))}catch(t){console.warn("Module «"+this.name+"» was not initialized because of ",t)}}},{key:"destroy",value:function(){this.moduleClass.destroy instanceof Function&&(this.moduleClass.destroy(),console.log("Module «"+this.name+"» destroyed."))}}]),t}(),u=function(){function t(e){o(this,t),this.Library=e.Library||window,this.modules=this.findModules(document),this.initModules()}return i(t,[{key:"findModules",value:function(t){for(var e=[],n=t.querySelectorAll("[data-module]"),o=n.length-1;o>=0;o--)e.push.apply(e,r(this.extractModulesData(n[o])));return e}},{key:"extractModulesData",value:function(t){var e=this,n=[],r=t.dataset.module;return(r=r.replace(/\s+/," ")).split(" ").forEach(function(r,o){var i=new a({name:r,element:t,settings:e.getModuleSettings(t,o,r),moduleClass:e.Library[r]});n.push(i)}),n}},{key:"getModuleSettings",value:function(t,e,n){var r=t.querySelector("module-settings"),o=void 0;if(!r)return null;try{o=r.textContent.trim(),o=JSON.parse(o)}catch(t){return console.warn("Can not parse Module «"+n+"» settings bacause of: "+t),console.groupCollapsed(n+" settings"),console.log(o),console.groupEnd(),null}return Array.isArray(o)?o[e]?o[e]:null:0===e?o:(console.warn("Wrong settings format. For several Modules use an array instead of object."),null)}},{key:"initModules",value:function(){console.groupCollapsed("ModuleDispatcher"),this.modules.forEach(function(t){t.init()}),console.groupEnd()}}]),t}();e.default=u}])},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(6).f,o=n(18),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(22)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(2);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(16),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(15),o=n(1)("iterator"),i=n(16);t.exports=n(5).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){var r=n(23),o=n(19);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=!n(4)&&!n(14)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(7),o=n(33),i=n(34),a=n(2),u=n(17),c=n(35),s={},l={};(e=t.exports=function(t,e,n,f,h){var p,d,v,y,g=h?function(){return t}:c(t),m=r(n,f,e?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=u(t.length);p>x;x++)if((y=e?m(a(d=t[x])[0],d[1]):m(t[x]))===s||y===l)return y}else for(v=g.call(t);!(d=v.next()).done;)if((y=o(v,m,d.value,e))===s||y===l)return y}).BREAK=s,e.RETURN=l},function(t,e,n){var r=n(2),o=n(8),i=n(1)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[i])?e:o(n)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(25).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,u=r.Promise,c="process"==n(13)(a);t.exports=function(){var t,e,n,s=function(){var r,o;for(c&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var l=u.resolve(void 0);n=function(){l.then(s)}}else n=function(){o.call(r,s)};else{var f=!0,h=document.createTextNode("");new i(s).observe(h,{characterData:!0}),n=function(){h.data=f=!f}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(2),o=n(3),i=n(26);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(0),o=n(6),i=n(4),a=n(1)("species");t.exports=function(t){var e=r[t];i&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(2),o=n(17),i=n(53),a=n(54);n(55)("match",1,function(t,e,n,u){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=u(n,t,this);if(e.done)return e.value;var c=r(t),s=String(this);if(!c.global)return a(c,s);var l=c.unicode;c.lastIndex=0;for(var f,h=[],p=0;null!==(f=a(c,s));){var d=String(f[0]);h[p]=d,""===d&&(c.lastIndex=i(s,o(c.lastIndex),l)),p++}return 0===p?null:h}]})},function(t,e,n){"use strict";var r=n(38)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(15),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";n(56);var r=n(12),o=n(9),i=n(14),a=n(19),u=n(1),c=n(27),s=u("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=u(t),p=!i(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=p?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[h](""),!e}):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],y=n(a,h,""[t],function(t,e,n,r,o){return e.exec===c?p&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=y[0],m=y[1];r(String.prototype,t,g),o(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},function(t,e,n){"use strict";var r=n(27);n(10)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){"use strict";var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";n.r(e);n(11),n(41);var r=n(29),o=n.n(r);n(24),n(52),n(28);function i(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.editor=null,this.page=null,this.nodes={editorWrapper:null,saveButton:null,removeButton:null,parentIdSelector:null,putAboveIdSelector:null,uriInput:null}}var e,r,o;return e=t,(r=[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.nodes.editorWrapper=document.getElementById("codex-editor"),e.page&&(this.page=e.page),this.loadEditor().then(function(e){t.editor=e}),this.nodes.saveButton=n.querySelector('[name="js-submit-save"]'),this.nodes.saveButton.addEventListener("click",function(){t.saveButtonClicked()}),this.nodes.removeButton=n.querySelector('[name="js-submit-remove"]'),this.nodes.removeButton&&this.nodes.removeButton.addEventListener("click",function(){confirm("Are you sure?")&&t.removeButtonClicked()}),this.nodes.parentIdSelector=n.querySelector('[name="parent"]'),this.nodes.putAboveIdSelector=n.querySelector('[name="above"]'),this.nodes.uriInput=n.querySelector('[name="uri-input"]')}},{key:"loadEditor",value:function(){var t=a(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(1).then(n.bind(null,95));case 2:return e=t.sent,r=e.default,t.abrupt("return",new r({initialData:this.page?this.page.body:null}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){var t=a(regeneratorRuntime.mark(function t(){var e,n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.editor.save();case 2:if(e=t.sent,n=e.blocks.length?e.blocks[0]:null,r=n&&"header"===n.type?n.data.text:null,o="",!this.nodes.uriInput||!this.nodes.uriInput.value){t.next=12;break}if(!this.nodes.uriInput.value.match(/^[a-z0-9'-]+$/i)){t.next=11;break}o=this.nodes.uriInput.value,t.next=12;break;case 11:throw new Error("Uri has unexpected characters");case 12:if(r){t.next=14;break}throw new Error("Entry should start with Header");case 14:return i=null,this.nodes.putAboveIdSelector&&(i=this.nodes.putAboveIdSelector.value),t.abrupt("return",{parent:this.nodes.parentIdSelector.value,putAbovePageId:i,uri:o,body:e});case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"saveButtonClicked",value:function(){var t=a(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getData();case 3:return e=t.sent,n=this.page?"/api/page/"+this.page._id:"/api/page",t.prev=5,t.next=8,fetch(n,{method:this.page?"POST":"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)});case 8:return r=t.sent,t.next=11,r.json();case 11:(r=t.sent).success?window.location.pathname=r.result.uri?r.result.uri:"/page/"+r.result._id:(alert(r.error),console.log("Validation failed:",r.error)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("Saving request failed:",t.t0);case 18:t.next=24;break;case 20:t.prev=20,t.t1=t.catch(0),alert(t.t1),console.log("Saving error: ",t.t1);case 24:case"end":return t.stop()}},t,this,[[0,20],[5,15]])}));return function(){return t.apply(this,arguments)}}()},{key:"removeButtonClicked",value:function(){var t=a(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.page?"/api/page/"+this.page._id:"",t.next=4,fetch(e,{method:"DELETE"});case 4:return n=t.sent,t.next=7,n.json();case 7:(n=t.sent).success?n.result&&n.result._id?document.location="/page/"+n.result._id:document.location="/":(alert(n.error),console.log("Server fetch failed:",n.error)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Server fetch failed due to the:",t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}])&&u(e.prototype,r),o&&u(e,o),t}();function s(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.codeStyler=null}var e,r,o;return e=t,(r=[{key:"init",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1];this.codeStyler=this.createCodeStyling()}},{key:"createCodeStyling",value:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(0).then(n.bind(null,96));case 2:return e=t.sent,r=e.default,t.abrupt("return",new r({selector:".block-code"}));case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,u,"next",t)}function u(t){s(i,r,o,a,u,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}()}])&&l(e.prototype,r),o&&l(e,o),t}();function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("CodeX Docs initialized"),this.writing=new c,this.page=new f,document.addEventListener("DOMContentLoaded",function(t){e.docReady()})}var e,n,r;return e=t,(n=[{key:"docReady",value:function(){this.moduleDispatcher=new o.a({Library:window.Docs})}}])&&h(e.prototype,n),r&&h(e,r),t}();e.default=new p}]).default;