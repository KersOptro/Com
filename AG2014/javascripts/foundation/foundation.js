/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,n,i){"use strict";function s(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var r=function(e){for(var n=e.length,i=t("head");n--;)0===i.has("."+e[n]).length&&i.append('<meta class="'+e[n]+'" />')};r(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var a=function(e,i){if("string"==typeof e){if(i){var s;if(i.jquery){if(s=i[0],!s)return i}else s=i;return t(s.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},o=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},l=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},c=function(e,n){var i=this,s=!a(this).data(this.attr_name(!0));return a(this.scope).is("["+this.attr_name()+"]")?(a(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,n||e,this.data_options(a(this.scope)))),s&&this.events(this.scope)):a("["+this.attr_name()+"]",this.scope).each(function(){var s=!a(this).data(i.attr_name(!0)+"-init");a(this).data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(a(this)))),s&&i.events(this)}),"string"==typeof e?this[e].call(this,n):void 0},d=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?n():i.call(t)):void n()};e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,s=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,i),e=42===r.offsetWidth,n.removeChild(s),{matches:e,media:t}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(){function t(){n&&(r(t),o&&jQuery.fx.tick())}for(var n,i=0,s=["webkit","moz"],r=e.requestAnimationFrame,a=e.cancelAnimationFrame,o="undefined"!=typeof jQuery.fx;i<s.length&&!r;i++)r=e[s[i]+"RequestAnimationFrame"],a=a||e[s[i]+"CancelAnimationFrame"]||e[s[i]+"CancelRequestAnimationFrame"];r?(e.requestAnimationFrame=r,e.cancelAnimationFrame=a,o&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,t())},jQuery.fx.stop=function(){n=!1})):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),s=Math.max(0,16-(n-i)),r=e.setTimeout(function(){t(n+s)},s);return i=n+s,r},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"5.3.3",media_queries:{small:a(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:a(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:a(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:a(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:a(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(t,n,i,s,r){var o=[t,i,s,r],l=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&l.push(this.init_lib(n,o));else for(var c in this.libs)l.push(this.init_lib(c,n));return a(e).load(function(){a(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,n){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),n&&n.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,n[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,n[e]),this.libs[e].init.apply(this.libs[e],[this.scope,n[e]])):(n=n instanceof Array?n:new Array(n),this.libs[e].init.apply(this.libs[e],n))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=o,t.add_namespace=l,t.bindings=c,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=this.global.namespace===i?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===i||/false/i.test(e)?"":e},libs:{},utils:{S:a,throttle:function(t,e){var n=null;return function(){var i=this,s=arguments;null==n&&(n=setTimeout(function(){t.apply(i,s),n=null},e))}},debounce:function(t,e,n){var i,s;return function(){var r=this,a=arguments,o=function(){i=null,n||(s=t.apply(r,a))},l=n&&!i;return clearTimeout(i),i=setTimeout(o,e),l&&(s=t.apply(r,a)),s}},data_options:function(e,n){function i(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function s(e){return"string"==typeof e?t.trim(e):e}n=n||"options";var r,a,o,l={},c=function(t){var e=Foundation.global.namespace;return t.data(e.length>0?e+"-"+n:n)},d=c(e);if("object"==typeof d)return d;for(o=(d||":").split(";"),r=o.length;r--;)a=o[r].split(":"),a=[a[0],a.slice(1).join(":")],/true/i.test(a[1])&&(a[1]=!0),/false/i.test(a[1])&&(a[1]=!1),i(a[1])&&(a[1]=-1===a[1].indexOf(".")?parseInt(a[1],10):parseFloat(a[1])),2===a.length&&a[0].length>0&&(l[s(a[0])]=s(a[1]));return l},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[e]=s(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;0===i&&e(t),t.each(function(){d(n.S(this),function(){i-=1,0===i&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document);