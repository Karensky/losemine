/*! For license information please see 865.js.LICENSE.txt */
(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[865],{4865:function(n,t,e){var r,i;void 0===(i="function"==typeof(r=function(){var n,t,e={version:"0.2.0"},r=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(n,t,e){return n<t?t:n>e?e:n}function s(n){return 100*(-1+n)}function o(n,t,e){var i;return(i="translate3d"===r.positionUsing?{transform:"translate3d("+s(n)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(n)+"%,0)"}:{"margin-left":s(n)+"%"}).transition="all "+t+"ms "+e,i}e.configure=function(n){var t,e;for(t in n)void 0!==(e=n[t])&&n.hasOwnProperty(t)&&(r[t]=e);return this},e.status=null,e.set=function(n){var t=e.isStarted();n=i(n,r.minimum,1),e.status=1===n?null:n;var s=e.render(!t),c=s.querySelector(r.barSelector),l=r.speed,f=r.easing;return s.offsetWidth,a((function(t){""===r.positionUsing&&(r.positionUsing=e.getPositioningCSS()),u(c,o(n,l,f)),1===n?(u(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout((function(){u(s,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){e.remove(),t()}),l)}),l)):setTimeout(t,l)})),this},e.isStarted=function(){return"number"==typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),r.trickleSpeed)};return r.trickle&&n(),this},e.done=function(n){return n||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(n){var t=e.status;return t?("number"!=typeof n&&(n=(1-t)*i(Math.random()*t,.1,.95)),t=i(t+n,0,.994),e.set(t)):e.start()},e.trickle=function(){return e.inc(Math.random()*r.trickleRate)},n=0,t=0,e.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&e.start(),n++,t++,r.always((function(){0==--t?(n=0,e.done()):e.set((n-t)/n)})),this):this},e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var i,o=t.querySelector(r.barSelector),a=n?"-100":s(e.status||0),c=document.querySelector(r.parent);return u(o,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),r.showSpinner||(i=t.querySelector(r.spinnerSelector))&&m(i),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(t),t},e.remove=function(){f(document.documentElement,"nprogress-busy"),f(document.querySelector(r.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&m(n)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var n=document.body.style,t="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return t+"Perspective"in n?"translate3d":t+"Transform"in n?"translate":"margin"};var a=function(){var n=[];function t(){var e=n.shift();e&&e(t)}return function(e){n.push(e),1==n.length&&t()}}(),u=function(){var n=["Webkit","O","Moz","ms"],t={};function e(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(n,t){return t.toUpperCase()}))}function r(t){var e=document.body.style;if(t in e)return t;for(var r,i=n.length,s=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=n[i]+s)in e)return r;return t}function i(n){return n=e(n),t[n]||(t[n]=r(n))}function s(n,t,e){t=i(t),n.style[t]=e}return function(n,t){var e,r,i=arguments;if(2==i.length)for(e in t)void 0!==(r=t[e])&&t.hasOwnProperty(e)&&s(n,e,r);else s(n,i[1],i[2])}}();function c(n,t){return("string"==typeof n?n:d(n)).indexOf(" "+t+" ")>=0}function l(n,t){var e=d(n),r=e+t;c(e,t)||(n.className=r.substring(1))}function f(n,t){var e,r=d(n);c(n,t)&&(e=r.replace(" "+t+" "," "),n.className=e.substring(1,e.length-1))}function d(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function m(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return e})?r.call(t,e,t,n):r)||(n.exports=i)}}]);
//# sourceMappingURL=865.js.map