!function(t,e){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.3.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(e,i,n){if(/IMG/.test(e[0].nodeName)){var s=e[0].src;if(new RegExp(i,"i").test(s))return;return e[0].src=i,n(e[0].src)}var a=e.data(this.data_attr+"-last-path"),o=this;if(a!=i)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(t(e).css("background-image","url("+i+")"),e.data("interchange-last-path",i),n(i)):t.get(i,function(t){e.html(t),e.data(o.data_attr+"-last-path",i),n()})}}},init:function(e,i,n){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),t.extend(!0,this.settings,i,n),this.bindings(i,n),this.load("images"),this.load("nodes")},get_media_hash:function(){var t="";for(var e in this.settings.named_queries)t+=matchMedia(this.settings.named_queries[e]).matches.toString();return t},events:function(){var i,n=this;return t(e).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){var t=n.get_media_hash();t!==i&&n.resize(),i=t},50)),this},resize:function(){var e=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(t.proxy(this.resize,this),50);for(var i in e)if(e.hasOwnProperty(i)){var n=this.results(i,e[i]);n&&this.settings.directives[n.scenario[1]].call(this,n.el,n.scenario[0],function(){if(arguments[0]instanceof Array)var t=arguments[0];else var t=Array.prototype.slice.call(arguments,0);n.el.trigger(n.scenario[1],t)})}},results:function(t,e){var i=e.length;if(i>0)for(var n=this.S("["+this.add_namespace("data-uuid")+'="'+t+'"]');i--;){var s,a=e[i][2];if(s=matchMedia(this.settings.named_queries.hasOwnProperty(a)?this.settings.named_queries[a]:a),s.matches)return{el:n,scenario:e[i]}}return!1},load:function(t,e){return("undefined"==typeof this["cached_"+t]||e)&&this["update_"+t](),this["cached_"+t]},update_images:function(){var t=this.S("img["+this.data_attr+"]"),e=t.length,i=e,n=0,s=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===e;i--;){if(n++,t[i]){var a=t[i].getAttribute(s)||"";a.length>0&&this.cached_images.push(t[i])}n===e&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var t=this.S("["+this.data_attr+"]").not("img"),e=t.length,i=e,n=0,s=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===e;i--;){n++;var a=t[i].getAttribute(s)||"";a.length>0&&this.cached_nodes.push(t[i]),n===e&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(i){for(var n=this["cached_"+i].length;n--;)this.object(t(this["cached_"+i][n]));return t(e).trigger("resize").trigger("resize.fndtn.interchange")},convert_directive:function(t){var e=this.trim(t);return e.length>0?e:"replace"},parse_scenario:function(t){var e=t[0].match(/(.+),\s*(\w+)\s*$/),i=t[1];if(e)var n=e[1],s=e[2];else var a=t[0].split(/,\s*$/),n=a[0],s="";return[this.trim(n),this.convert_directive(s),this.trim(i)]},object:function(t){var e=this.parse_data_attr(t),i=[],n=e.length;if(n>0)for(;n--;){var s=e[n].split(/\((.*?)(\))$/);if(s.length>1){var a=this.parse_scenario(s);i.push(a)}}return this.store(t,i)},store:function(t,e){var i=this.random_str(),n=t.data(this.add_namespace("uuid",!0));return this.cache[n]?this.cache[n]:(t.attr(this.add_namespace("data-uuid"),i),this.cache[i]=e)},trim:function(e){return"string"==typeof e?t.trim(e):e},set_data_attr:function(t){return t?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(t){for(var e=t.attr(this.attr_name()).split(/\[(.*?)\]/),i=e.length,n=[];i--;)e[i].replace(/[\W\d]+/,"").length>4&&n.push(e[i]);return n},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document);