/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
"undefined"==typeof document||"classList"in document.createElement("a")||!function(t){var e="classList",i="prototype",n=(t.HTMLElement||t.Element)[i],s=Object,a=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array[i].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},l=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return r.call(t,e)},c=function(t){for(var e=a.call(t.className),i=e?e.split(/\s+/):[],n=0,s=i.length;s>n;n++)this.push(i[n]);this._updateClassName=function(){t.className=this.toString()}},d=c[i]=[],u=function(){return new c(this)};if(o[i]=Error[i],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==l(this,t)},d.add=function(t){t+="",-1===l(this,t)&&(this.push(t),this._updateClassName())},d.remove=function(t){t+="";var e=l(this,t);-1!==e&&(this.splice(e,1),this._updateClassName())},d.toggle=function(t){t+="",-1===l(this,t)?this.add(t):this.remove(t)},d.toString=function(){return this.join(" ")},s.defineProperty){var h={get:u,enumerable:!0,configurable:!0};try{s.defineProperty(n,e,h)}catch(p){-2146823252===p.number&&(h.enumerable=!1,s.defineProperty(n,e,h))}}else s[i].__defineGetter__&&n.__defineGetter__(e,u)}(self);