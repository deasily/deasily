
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*! jQuery UI - v1.10.4 - 2014-02-16
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,l=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:l=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}l&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);customForm = {
	baseOptions: {
		useNativeDropOnMobileDevices: false,
		unselectableClass:'customForm-unselectable', 
		labelActiveClass:'customForm-label-active',
		labelDisabledClass:'customForm-label-disabled',
		classPrefix: 'customForm-class-',
		hiddenClass:'customForm-hidden',
		focusClass:'customForm-focus',
		wrapperTag: 'div'
	},
	customForms: {
		setOptions: function(obj) {
			for(var p in obj) {
				if(obj.hasOwnProperty(p) && typeof obj[p] === 'object') {
					customForm.lib.extend(customForm.modules[p].prototype.defaultOptions, obj[p]);
				}
			}
		},
		replaceAll: function() {
			for(var k in customForm.modules) {
				var els = customForm.lib.queryBySelector(customForm.modules[k].prototype.selector);
				for(var i = 0; i<els.length; i++) {
					if(els[i].customForm) {
						// refresh form element state
						els[i].customForm.refreshState();
					} else {
						// replace form element
						if(!customForm.lib.hasClass(els[i], 'default') && customForm.modules[k].prototype.checkElement(els[i])) {
							new customForm.modules[k]({
								replaces:els[i]
							});
						}
					}
				}
			}
		},
		refreshElement: function(obj) {
			if(obj && obj.customForm) {
				obj.customForm.refreshState();
			}
		},
		refreshAll: function() {
			for(var k in customForm.modules) {
				var els = customForm.lib.queryBySelector(customForm.modules[k].prototype.selector);
				for(var i = 0; i<els.length; i++) {
					if(els[i].customForm) {
						// refresh form element state
						els[i].customForm.refreshState();
					}
				}
			}
		},
		destroyAll: function() {
			for(var k in customForm.modules) {
				var els = customForm.lib.queryBySelector(customForm.modules[k].prototype.selector);
				for(var i = 0; i<els.length; i++) {
					if(els[i].customForm) {
						els[i].customForm.destroy();
					}
				}
			}
		}
	},	
	// check device type
	isTouchDevice: (function() {
		try {
			return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
		} catch (e) {
			return false;
		}
	}()),
	// define base module
	setBaseModule: function(obj) {
		customForm.customControl = function(opt){
			this.options = customForm.lib.extend({}, customForm.baseOptions, this.defaultOptions, opt);
			this.init();
		}
		for(var p in obj) {
			customForm.customControl.prototype[p] = obj[p];
		}
	},
	// miscellaneous init
	init: function(){
		this.eventPress = this.isTouchDevice ? 'touchstart' : 'mousedown';
		this.eventMove = this.isTouchDevice ? 'touchmove' : 'mousemove';
		this.eventRelease = this.isTouchDevice ? 'touchend' : 'mouseup';
		return this;
	},
	initStyles: function() {
		var head = document.getElementsByTagName('head')[0],
			rules = document.createTextNode('.'+customForm.baseOptions.unselectableClass+'{'+
				'-moz-user-select:none;'+
				'-webkit-tap-highlight-color:rgba(255,255,255,0);'+
				'-webkit-user-select:none;'+
				'user-select:none;'+
			'}'),
			style = document.createElement('style');
		
		style.type = 'text/css';
		if(style.styleSheet) {
			style.styleSheet.cssText = rules.nodeValue;
		} else {
			style.appendChild(rules);
		}
		head.appendChild(style);
	},
	
	modules: {},
	plugins: {},
	
	// add module to customForm.modules
	addModule: function(obj) {
		if(obj.name){
			// create new module proto class
			customForm.modules[obj.name] = function(){
				customForm.modules[obj.name].superclass.constructor.apply(this, arguments);
			}
			customForm.lib.inherit(customForm.modules[obj.name], customForm.customControl);
			for(var p in obj) {
				customForm.modules[obj.name].prototype[p] = obj[p]
			}
			// on create module
			customForm.modules[obj.name].prototype.onCreateModule();
			// make callback for exciting modules
			for(var mod in customForm.modules) {
				if(customForm.modules[mod] != customForm.modules[obj.name]) {
					customForm.modules[mod].prototype.onModuleAdded(customForm.modules[obj.name]);
				}
			}
		}
	},
	
	// add plugin to customForm.plugins
	addPlugin: function(obj) {
		if(obj && obj.name) {
			customForm.plugins[obj.name] = function() {
				this.init.apply(this, arguments);
			}
			for(var p in obj) {
				customForm.plugins[obj.name].prototype[p] = obj[p];
			}
		}
	}
}.init();

/*
 * Custom Form Control prototype
 */
customForm.setBaseModule({
	init: function(){
		if(this.options.replaces) {
			this.realElement = this.options.replaces;
			this.realElement.customForm = this;
			this.replaceObject();
		}
	},
	defaultOptions: {
		// default module options (will be merged with base options)
	},
	checkElement: function(el){
		return true; // additional check for correct form element
	},
	replaceObject: function(){
		this.createWrapper();
		this.attachEvents();
		this.fixStyles();
		this.setupWrapper();
	},
	createWrapper: function(){
		this.fakeElement = customForm.lib.createElement(this.options.wrapperTag);
		this.labelFor = customForm.lib.getLabelFor(this.realElement);
		customForm.lib.disableTextSelection(this.fakeElement);
		customForm.lib.addClass(this.fakeElement, customForm.lib.getAllClasses(this.realElement.className, this.options.classPrefix));
		customForm.lib.addClass(this.realElement, customForm.baseOptions.hiddenClass);
	},
	attachEvents: function(){
		customForm.lib.event.add(this.realElement, 'focus', this.onFocusHandler, this);
		customForm.lib.event.add(this.realElement, 'blur', this.onBlurHandler, this);
		customForm.lib.event.add(this.fakeElement, 'click', this.onFakeClick, this);
		customForm.lib.event.add(this.fakeElement, customForm.eventPress, this.onFakePressed, this);
		customForm.lib.event.add(this.fakeElement, customForm.eventRelease, this.onFakeReleased, this);

		if(this.labelFor) {
			this.labelFor.customForm = this;
			customForm.lib.event.add(this.labelFor, 'click', this.onFakeClick, this);
			customForm.lib.event.add(this.labelFor, customForm.eventPress, this.onFakePressed, this);
			customForm.lib.event.add(this.labelFor, customForm.eventRelease, this.onFakeReleased, this);
		}
	},
	fixStyles: function() {
		// hide mobile webkit tap effect
		if(customForm.isTouchDevice) {
			var tapStyle = 'rgba(255,255,255,0)';
			this.realElement.style.webkitTapHighlightColor = tapStyle; 
			this.fakeElement.style.webkitTapHighlightColor = tapStyle; 
			if(this.labelFor) {
				this.labelFor.style.webkitTapHighlightColor = tapStyle; 
			}
		}
	},
	setupWrapper: function(){
		// implement in subclass
	},
	refreshState: function(){
		// implement in subclass
	},
	destroy: function() {
		if(this.fakeElement && this.fakeElement.parentNode) {
			this.fakeElement.parentNode.removeChild(this.fakeElement);
		}
		customForm.lib.removeClass(this.realElement, customForm.baseOptions.hiddenClass);
		this.realElement.customForm = null;
	},
	onFocus: function(){
		// emulated focus event
		customForm.lib.addClass(this.fakeElement,this.options.focusClass);
	},
	onBlur: function(cb){
		// emulated blur event
		customForm.lib.removeClass(this.fakeElement,this.options.focusClass);
	},
	onFocusHandler: function() {
		// handle focus loses
		if(this.focused) return;
		this.focused = true;
		
		// handle touch devices also
		if(customForm.isTouchDevice) {
			if(customForm.focusedInstance && customForm.focusedInstance.realElement != this.realElement) {
				customForm.focusedInstance.onBlur();
				customForm.focusedInstance.realElement.blur();
			}
			customForm.focusedInstance = this;
		}
		this.onFocus.apply(this, arguments);
	},
	onBlurHandler: function() {
		// handle focus loses
		if(!this.pressedFlag) {
			this.focused = false;
			this.onBlur.apply(this, arguments);
		}
	},
	onFakeClick: function(){
		if(customForm.isTouchDevice) {
			this.onFocus();
		} else if(!this.realElement.disabled) {
			this.realElement.focus();
		}
	},
	onFakePressed: function(e){
		this.pressedFlag = true;
	},
	onFakeReleased: function(){
		this.pressedFlag = false;
	},
	onCreateModule: function(){
		// implement in subclass
	},
	onModuleAdded: function(module) {
		// implement in subclass
	},
	onControlReady: function() {
		// implement in subclass
	}
});

// customForm lib
customForm.lib = {
	bind: function(func, scope){
		return function() {
			return func.apply(scope, arguments);
		}
	},
	browser: (function() {
		var ua = navigator.userAgent.toLowerCase(), res = {},
		match = /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
				/(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
		res[match[1]] = true;
		res.version = match[2] || "0";
		res.safariMac = ua.indexOf('mac') != -1 && ua.indexOf('safari') != -1;
		return res;
	})(),
	getOffset: function (obj) {
		if (obj.getBoundingClientRect) {
			var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
			var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
			return {
				top:Math.round(obj.getBoundingClientRect().top + scrollTop - clientTop),
				left:Math.round(obj.getBoundingClientRect().left + scrollLeft - clientLeft)
			}
		} else {
			var posLeft = 0, posTop = 0;
			while (obj.offsetParent) {posLeft += obj.offsetLeft; posTop += obj.offsetTop; obj = obj.offsetParent;}
			return {top:posTop,left:posLeft};
		}
	},
	getScrollTop: function() {
		return window.pageYOffset || document.documentElement.scrollTop;
	},
	getScrollLeft: function() {
		return window.pageXOffset || document.documentElement.scrollLeft;
	},
	getWindowWidth: function(){
		return document.compatMode=='CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth;
	},
	getWindowHeight: function(){
		return document.compatMode=='CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
	},
	getStyle: function(el, prop) {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(el, null)[prop];
		} else if (el.currentStyle) {
			return el.currentStyle[prop];
		} else {
			return el.style[prop];
		}
	},
	getParent: function(obj, selector) {
		while(obj.parentNode && obj.parentNode != document.body) {
			if(obj.parentNode.tagName.toLowerCase() == selector.toLowerCase()) {
				return obj.parentNode;
			}
			obj = obj.parentNode;
		}
		return false;
	},
	isParent: function(child, parent) {
		while(child.parentNode) {
			if(child.parentNode === parent) {
				return true;
			}
			child = child.parentNode;
		}
		return false;
	},
	getLabelFor: function(object) {
		if(customForm.lib.getParent(object,'label')) {
			return object.parentNode;
		} else if(object.id) {
			return customForm.lib.queryBySelector('label[for="' + object.id + '"]')[0];
		}
	},
	disableTextSelection: function(el){
		if (typeof el.onselectstart !== 'undefined') {
			el.onselectstart = function() {return false};
		} else if(window.opera) {
			el.setAttribute('unselectable', 'on');
		} else {
			customForm.lib.addClass(el, customForm.baseOptions.unselectableClass);
		}
	},
	enableTextSelection: function(el) {
		if (typeof el.onselectstart !== 'undefined') {
			el.onselectstart = null;
		} else if(window.opera) {
			el.removeAttribute('unselectable');
		} else {
			customForm.lib.removeClass(el, customForm.baseOptions.unselectableClass);
		}
	},
	queryBySelector: function(selector, scope){
		return this.getElementsBySelector(selector, scope);
	},
	prevSibling: function(node) {
		while(node = node.previousSibling) if(node.nodeType == 1) break;
		return node;
	},
	nextSibling: function(node) {
		while(node = node.nextSibling) if(node.nodeType == 1) break;
		return node;
	},
	fireEvent: function(element,event) {
		 if (document.createEvent){
		   var evt = document.createEvent('HTMLEvents');
		   evt.initEvent(event, true, true );
		   return !element.dispatchEvent(evt);
		  }
		  else{
		   var evt = document.createEventObject();
		   return element.fireEvent('on'+event,evt)
		  }  
	},
	isParent: function(p, c) {
		while(c.parentNode) {
			if(p == c) {
				return true;
			}
			c = c.parentNode;
		}
		return false;
	},
	inherit: function(Child, Parent) {
		var F = function() { }
		F.prototype = Parent.prototype
		Child.prototype = new F()
		Child.prototype.constructor = Child
		Child.superclass = Parent.prototype
	},
	extend: function(obj) {
		for(var i = 1; i < arguments.length; i++) {
			for(var p in arguments[i]) {
				if(arguments[i].hasOwnProperty(p)) {
					obj[p] = arguments[i][p];
				}
			}
		}
		return obj;
	},
	hasClass: function (obj,cname) {
		return (obj.className ? obj.className.match(new RegExp('(\\s|^)'+cname+'(\\s|$)')) : false);
	},
	addClass: function (obj,cname) {
		if (!this.hasClass(obj,cname)) obj.className += (!obj.className.length || obj.className.charAt(obj.className.length - 1) === ' ' ? '' : ' ') + cname;
	},
	removeClass: function (obj,cname) {
		if (this.hasClass(obj,cname)) obj.className=obj.className.replace(new RegExp('(\\s|^)'+cname+'(\\s|$)'),' ').replace(/\s+$/, '');
	},
	toggleClass: function(obj, cname, condition) {
		if(condition) this.addClass(obj, cname); else this.removeClass(obj, cname);
	},
	createElement: function(tagName, options) {
		var el = document.createElement(tagName);
		for(var p in options) {
			if(options.hasOwnProperty(p)) {
				switch (p) {
					case 'class': el.className = options[p]; break;
					case 'html': el.innerHTML = options[p]; break;
					case 'style': this.setStyles(el, options[p]); break;
					default: el.setAttribute(p, options[p]);
				}
			}
		}
		return el;
	},
	setStyles: function(el, styles) {
		for(var p in styles) {
			if(styles.hasOwnProperty(p)) {
				switch (p) {
					case 'float': el.style.cssFloat = styles[p]; break;
					case 'opacity': el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity='+styles[p]*100+')'; el.style.opacity = styles[p]; break;
					default: el.style[p] = (typeof styles[p] === 'undefined' ? 0 : styles[p]) + (typeof styles[p] === 'number' ? 'px' : '');
				}
			}
		}
		return el;
	},
	getInnerWidth: function(el) {
		return el.offsetWidth - (parseInt(this.getStyle(el,'paddingLeft')) || 0) - (parseInt(this.getStyle(el,'paddingRight')) || 0);
	},
	getInnerHeight: function(el) {
		return el.offsetHeight - (parseInt(this.getStyle(el,'paddingTop')) || 0) - (parseInt(this.getStyle(el,'paddingBottom')) || 0);
	},
	getAllClasses: function(cname, prefix, skip) {
		if(!skip) skip = '';
		if(!prefix) prefix = '';
		return cname ? cname.replace(new RegExp('(\\s|^)'+skip+'(\\s|$)'),' ').replace(/[\s]*([\S]+)+[\s]*/gi,prefix+"$1 ") : '';
	},
	getElementsBySelector: function(selector, scope) {
		if(typeof document.querySelectorAll === 'function') {
			return (scope || document).querySelectorAll(selector);
		}
		var selectors = selector.split(',');
		var resultList = [];
		for(var s = 0; s < selectors.length; s++) {
			var currentContext = [scope || document];
			var tokens = selectors[s].replace(/^\s+/,'').replace(/\s+$/,'').split(' ');
			for (var i = 0; i < tokens.length; i++) {
				token = tokens[i].replace(/^\s+/,'').replace(/\s+$/,'');
				if (token.indexOf('#') > -1) {
					var bits = token.split('#'), tagName = bits[0], id = bits[1];
					var element = document.getElementById(id);
					if (tagName && element.nodeName.toLowerCase() != tagName) {
						return [];
					}
					currentContext = [element];
					continue;
				}
				if (token.indexOf('.') > -1) {
					var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
					for (var h = 0; h < currentContext.length; h++) {
						var elements;
						if (tagName == '*') {
							elements = currentContext[h].getElementsByTagName('*');
						} else {
							elements = currentContext[h].getElementsByTagName(tagName);
						}
						for (var j = 0; j < elements.length; j++) {
							found[foundCount++] = elements[j];
						}
					}
					currentContext = [];
					var currentContextIndex = 0;
					for (var k = 0; k < found.length; k++) {
						if (found[k].className && found[k].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
							currentContext[currentContextIndex++] = found[k];
						}
					}
					continue;
				}
				if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
					var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
					if(attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
						attrName = 'htmlFor';
					}
					var found = [], foundCount = 0;
					for (var h = 0; h < currentContext.length; h++) {
						var elements;
						if (tagName == '*') {
							elements = currentContext[h].getElementsByTagName('*');
						} else {
							elements = currentContext[h].getElementsByTagName(tagName);
						}
						for (var j = 0; elements[j]; j++) {
							found[foundCount++] = elements[j];
						}
					}
					currentContext = [];
					var currentContextIndex = 0, checkFunction;
					switch (attrOperator) {
						case '=': checkFunction = function(e) { return (e.getAttribute(attrName) == attrValue) }; break;
						case '~': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('(\\s|^)'+attrValue+'(\\s|$)'))) }; break;
						case '|': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('^'+attrValue+'-?'))) }; break;
						case '^': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) == 0) }; break;
						case '$': checkFunction = function(e) { return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length) }; break;
						case '*': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) > -1) }; break;
						default : checkFunction = function(e) { return e.getAttribute(attrName) };
					}
					currentContext = [];
					var currentContextIndex = 0;
					for (var k = 0; k < found.length; k++) {
						if (checkFunction(found[k])) {
							currentContext[currentContextIndex++] = found[k];
						}
					}
					continue;
				}
				tagName = token;
				var found = [], foundCount = 0;
				for (var h = 0; h < currentContext.length; h++) {
					var elements = currentContext[h].getElementsByTagName(tagName);
					for (var j = 0; j < elements.length; j++) {
						found[foundCount++] = elements[j];
					}
				}
				currentContext = found;
			}
			resultList = [].concat(resultList,currentContext);
		}
		return resultList;
	},
	scrollSize: (function(){
		var content, hold, sizeBefore, sizeAfter;
		function buildSizer(){
			if(hold) removeSizer();
			content = document.createElement('div');
			hold = document.createElement('div');
			hold.style.cssText = 'position:absolute;overflow:hidden;width:100px;height:100px';
			hold.appendChild(content);
			document.body.appendChild(hold);
		}
		function removeSizer(){
			document.body.removeChild(hold);
			hold = null;
		}
		function calcSize(vertical) {
			buildSizer();
			content.style.cssText = 'height:'+(vertical ? '100%' : '200px');
			sizeBefore = (vertical ? content.offsetHeight : content.offsetWidth);
			hold.style.overflow = 'scroll'; content.innerHTML = 1;
			sizeAfter = (vertical ? content.offsetHeight : content.offsetWidth);
			if(vertical && hold.clientHeight) sizeAfter = hold.clientHeight;
			removeSizer();
			return sizeBefore - sizeAfter;
		}
		return {
			getWidth:function(){
				return calcSize(false);
			},
			getHeight:function(){
				return calcSize(true)
			}
		}
	}()),
	domReady: function (handler){
		var called = false
		function ready() {
			if (called) return;
			called = true;
			handler();
		}
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", ready, false);
		} else if (document.attachEvent) {
			if (document.documentElement.doScroll && window == window.top) {
				function tryScroll(){
					if (called) return
					if (!document.body) return
					try {
						document.documentElement.doScroll("left")
						ready()
					} catch(e) {
						setTimeout(tryScroll, 0)
					}
				}
				tryScroll()
			}
			document.attachEvent("onreadystatechange", function(){
				if (document.readyState === "complete") {
					ready()
				}
			})
		}
		if (window.addEventListener) window.addEventListener('load', ready, false)
		else if (window.attachEvent) window.attachEvent('onload', ready)
	},
	event: (function(){
		var guid = 0;
		function fixEvent(e) {
			e = e || window.event;
			if (e.isFixed) {
				return e;
			}
			e.isFixed = true; 
			e.preventDefault = e.preventDefault || function(){this.returnValue = false}
			e.stopPropagation = e.stopPropagaton || function(){this.cancelBubble = true}
			if (!e.target) {
				e.target = e.srcElement
			}
			if (!e.relatedTarget && e.fromElement) {
				e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement;
			}
			if (e.pageX == null && e.clientX != null) {
				var html = document.documentElement, body = document.body;
				e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
				e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
			}
			if (!e.which && e.button) {
				e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
			}
			if(e.type === "DOMMouseScroll" || e.type === 'mousewheel') {
				e.mWheelDelta = 0;
				if (e.wheelDelta) {
					e.mWheelDelta = e.wheelDelta/120;
				} else if (e.detail) {
					e.mWheelDelta = -e.detail/3;
				}
			}
			return e;
		}
		function commonHandle(event, customScope) {
			event = fixEvent(event);
			var handlers = this.events[event.type];
			for (var g in handlers) {
				var handler = handlers[g];
				var ret = handler.call(customScope || this, event);
				if (ret === false) {
					event.preventDefault()
					event.stopPropagation()
				}
			}
		}
		var publicAPI = {
			add: function(elem, type, handler, forcedScope) {
				if (elem.setInterval && (elem != window && !elem.frameElement)) {
					elem = window;
				}
				if (!handler.guid) {
					handler.guid = ++guid;
				}
				if (!elem.events) {
					elem.events = {};
					elem.handle = function(event) {
						return commonHandle.call(elem, event);
					}
				}
				if (!elem.events[type]) {
					elem.events[type] = {};
					if (elem.addEventListener) elem.addEventListener(type, elem.handle, false);
					else if (elem.attachEvent) elem.attachEvent("on" + type, elem.handle);
					if(type === 'mousewheel') {
						publicAPI.add(elem, 'DOMMouseScroll', handler, forcedScope);
					}
				}
				var fakeHandler = customForm.lib.bind(handler, forcedScope);
				fakeHandler.guid = handler.guid;
				elem.events[type][handler.guid] = forcedScope ? fakeHandler : handler;
			},
			remove: function(elem, type, handler) {
				var handlers = elem.events && elem.events[type];
				if (!handlers) return;
				delete handlers[handler.guid];
				for(var any in handlers) return;
				if (elem.removeEventListener) elem.removeEventListener(type, elem.handle, false);
				else if (elem.detachEvent) elem.detachEvent("on" + type, elem.handle);
				delete elem.events[type];
				for (var any in elem.events) return;
				try {
					delete elem.handle;
					delete elem.events;
				} catch(e) {
					if(elem.removeAttribute) {
						elem.removeAttribute("handle");
						elem.removeAttribute("events");
					}
				}
				if(type === 'mousewheel') {
					publicAPI.remove(elem, 'DOMMouseScroll', handler);
				}
			}
		}
		return publicAPI;
	}())
}

// init customForm styles
customForm.lib.domReady(function(){
	customForm.initStyles();
});// custom select module
customForm.addModule({
	name:'select',
	selector:'select',
	defaultOptions: {
		showNativeDrop: false,
		handleDropPosition: true,
		selectDropPosition: 'bottom', // or 'top'
		wrapperClass:'select-area',
		focusClass:'select-focus',
		dropActiveClass:'select-active',
		selectedClass:'item-selected',
		currentSelectedClass:'current-selected',
		disabledClass:'select-disabled',
		valueSelector:'span.center',
		optGroupClass:'optgroup',
		openerSelector:'a.select-opener',
		selectStructure:'<span class="left"></span><span class="center"></span><a class="select-opener"></a>',
		classPrefix:'select-',
		dropMaxHeight: 220,
		dropFlippedClass: 'select-options-flipped',
		dropHiddenClass:'options-hidden',
		dropScrollableClass:'options-overflow',
		dropClass:'select-options',
		dropClassPrefix:'drop-',
		dropStructure:'<div class="drop-holder"><div class="drop-list"></div></div>',
		dropSelector:'div.drop-list'
	},
	checkElement: function(el){
		return (!el.size && !el.multiple);
	},
	setupWrapper: function(){
		customForm.lib.addClass(this.fakeElement, this.options.wrapperClass);
		this.realElement.parentNode.insertBefore(this.fakeElement, this.realElement);
		this.fakeElement.innerHTML = this.options.selectStructure;
		this.fakeElement.style.width = (this.realElement.offsetWidth > 0 ? this.realElement.offsetWidth + 'px' : 'auto');

		// show native drop if specified in options
		if(customForm.isTouchDevice && customForm.baseOptions.useNativeDropOnMobileDevices) {
			this.options.showNativeDrop = true;
		}
		if(this.options.showNativeDrop) {
			this.fakeElement.appendChild(this.realElement);
			customForm.lib.removeClass(this.realElement, this.options.hiddenClass);
			customForm.lib.setStyles(this.realElement, {
				top:0,
				left:0,
				margin:0,
				padding:0,
				opacity:0,
				border:'none',
				position:'absolute',
				width: customForm.lib.getInnerWidth(this.fakeElement) - 1,
				height: customForm.lib.getInnerHeight(this.fakeElement) - 1
			});
		}
		
		// create select body
		this.opener = customForm.lib.queryBySelector(this.options.openerSelector, this.fakeElement)[0];
		this.valueText = customForm.lib.queryBySelector(this.options.valueSelector, this.fakeElement)[0];
		customForm.lib.disableTextSelection(this.valueText);
		this.opener.customForm = this;

		if(!this.options.showNativeDrop) {
			this.createDropdown();
			this.refreshState();
			this.onControlReady(this);
			this.hideDropdown(true);
		} else {
			this.refreshState();
		}
		this.addEvents();
	},
	addEvents: function(){
		if(this.options.showNativeDrop) {
			customForm.lib.event.add(this.realElement, 'click', this.onChange, this);
		} else {
			customForm.lib.event.add(this.fakeElement, 'click', this.toggleDropdown, this);
		}
		customForm.lib.event.add(this.realElement, 'change', this.onChange, this);
	},
	onFakeClick: function() {
		// do nothing (drop toggles by toggleDropdown method)
	},
	onFocus: function(){
		customForm.modules[this.name].superclass.onFocus.apply(this, arguments);
		if(!this.options.showNativeDrop) {
			// Mac Safari Fix
			if(customForm.lib.browser.safariMac) {
				this.realElement.setAttribute('size','2');
			}
			customForm.lib.event.add(this.realElement, 'keydown', this.onKeyDown, this);
			if(customForm.activeControl && customForm.activeControl != this) {
				customForm.activeControl.hideDropdown();
				customForm.activeControl = this;
			}
		}
	},
	onBlur: function(){
		if(!this.options.showNativeDrop) {
			// Mac Safari Fix
			if(customForm.lib.browser.safariMac) {
				this.realElement.removeAttribute('size');
			}
			if(!this.isActiveDrop() || !this.isOverDrop()) {
				customForm.modules[this.name].superclass.onBlur.apply(this);
				if(customForm.activeControl === this) customForm.activeControl = null;
				if(!customForm.isTouchDevice) {
					this.hideDropdown();
				}
			}
			customForm.lib.event.remove(this.realElement, 'keydown', this.onKeyDown);
		} else {
			customForm.modules[this.name].superclass.onBlur.apply(this);
		}
	},
	onChange: function() {
		this.refreshState();
	},
	onKeyDown: function(e){
		customForm.tmpFlag = true;
		setTimeout(function(){customForm.tmpFlag = false},100);
		var context = this;
		context.keyboardFix = true;
		setTimeout(function(){
			context.refreshState();
		},10);
		if(e.keyCode == 13) {
			context.toggleDropdown.apply(context);
			return false;
		}
	},
	onResizeWindow: function(e){
		if(this.isActiveDrop()) {
			this.hideDropdown();
		}
	},
	onScrollWindow: function(e){
		if(this.isActiveDrop()) {
			this.positionDropdown();
		}
	},
	onOptionClick: function(e){
		var opener = e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'li' ? e.target : customForm.lib.getParent(e.target, 'li');
		if(opener) {
			this.realElement.selectedIndex = parseInt(opener.getAttribute('rel'));
			if(customForm.isTouchDevice) {
				this.onFocus();
			} else {
				this.realElement.focus();
			}
			this.refreshState();
			this.hideDropdown();
			customForm.lib.fireEvent(this.realElement, 'change');
		}
		return false;
	},
	onClickOutside: function(e){
		if(customForm.tmpFlag) {
			customForm.tmpFlag = false;
			return;
		}
		if(!customForm.lib.isParent(this.fakeElement, e.target) && !customForm.lib.isParent(this.selectDrop, e.target)) {
			this.hideDropdown();
		}
	},
	onDropHover: function(e){
		if(!this.keyboardFix) {
			this.hoverFlag = true;
			var opener = e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'li' ? e.target : customForm.lib.getParent(e.target, 'li');
			if(opener) {
				this.realElement.selectedIndex = parseInt(opener.getAttribute('rel'));
				this.refreshSelectedClass(parseInt(opener.getAttribute('rel')));
			}
		} else {
			this.keyboardFix = false;
		}
	},
	onDropLeave: function(){
		this.hoverFlag = false;
	},
	isActiveDrop: function(){
		return !customForm.lib.hasClass(this.selectDrop, this.options.dropHiddenClass);
	},
	isOverDrop: function(){
		return this.hoverFlag;
	},
	createDropdown: function(){
		// remove old dropdown if exists
		if(this.selectDrop) {
			this.selectDrop.parentNode.removeChild(this.selectDrop);
		}

		// create dropdown holder
		this.selectDrop = document.createElement('div');
		this.selectDrop.className = this.options.dropClass;
		this.selectDrop.innerHTML = this.options.dropStructure;
		customForm.lib.setStyles(this.selectDrop, {position:'absolute'});
		this.selectList = customForm.lib.queryBySelector(this.options.dropSelector,this.selectDrop)[0];
		customForm.lib.addClass(this.selectDrop, this.options.dropHiddenClass);
		document.body.appendChild(this.selectDrop);
		this.selectDrop.customForm = this;
		customForm.lib.event.add(this.selectDrop, 'click', this.onOptionClick, this);
		customForm.lib.event.add(this.selectDrop, 'mouseover', this.onDropHover, this);
		customForm.lib.event.add(this.selectDrop, 'mouseout', this.onDropLeave, this);
		this.buildDropdown();
	},
	buildDropdown: function() {
		// build select options / optgroups
		this.buildDropdownOptions();

		// position and resize dropdown
		this.positionDropdown();

		// cut dropdown if height exceedes
		this.buildDropdownScroll();
	},
	buildDropdownOptions: function() {
		this.resStructure = '';
		this.optNum = 0;
		for(var i = 0; i < this.realElement.children.length; i++) {
			this.resStructure += this.buildElement(this.realElement.children[i]) +'\n';
		}
		this.selectList.innerHTML = this.resStructure;
	},
	buildDropdownScroll: function() {
		if(this.options.dropMaxHeight) {
			if(this.selectDrop.offsetHeight > this.options.dropMaxHeight) {
				this.selectList.style.height = this.options.dropMaxHeight+'px';
				this.selectList.style.overflow = 'auto';
				this.selectList.style.overflowX = 'hidden';
				customForm.lib.addClass(this.selectDrop, this.options.dropScrollableClass);
			}
		}
		customForm.lib.addClass(this.selectDrop, customForm.lib.getAllClasses(this.realElement.className, this.options.dropClassPrefix, customForm.baseOptions.hiddenClass));
	},
	parseOptionTitle: function(optTitle) {
		return (typeof optTitle === 'string' && /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i.test(optTitle)) ? optTitle : '';
	},
	buildElement: function(obj){
		// build option
		var res = '', optImage;
		if(obj.tagName.toLowerCase() == 'option') {
			if(!customForm.lib.prevSibling(obj) || customForm.lib.prevSibling(obj).tagName.toLowerCase() != 'option') {
				res += '<ul>';
			}
			
			optImage = this.parseOptionTitle(obj.title);
			res += '<li rel="'+(this.optNum++)+'" class="'+(obj.className? obj.className + ' ' : '')+'customFormcalc"><a href="#">'+(optImage ? '<img src="'+optImage+'" alt="" />' : '')+'<span>' + obj.innerHTML + '</span></a></li>';
			if(!customForm.lib.nextSibling(obj) || customForm.lib.nextSibling(obj).tagName.toLowerCase() != 'option') {
				res += '</ul>';
			}
			return res;
		}
		// build option group with options
		else if(obj.tagName.toLowerCase() == 'optgroup' && obj.label) {
			res += '<div class="'+this.options.optGroupClass+'">';
			res += '<strong class="customFormcalc"><em>'+(obj.label)+'</em></strong>';
			for(var i = 0; i < obj.children.length; i++) {
				res += this.buildElement(obj.children[i]);
			}
			res += '</div>';
			return res;
		}
	},
	positionDropdown: function(){
		var ofs = customForm.lib.getOffset(this.fakeElement), selectAreaHeight = this.fakeElement.offsetHeight, selectDropHeight = this.selectDrop.offsetHeight;
		var fitInTop = ofs.top - selectDropHeight >= customForm.lib.getScrollTop() && customForm.lib.getScrollTop() + customForm.lib.getWindowHeight() < ofs.top + selectAreaHeight + selectDropHeight;
		
		
		if((this.options.handleDropPosition && fitInTop) || this.options.selectDropPosition === 'top') {
			this.selectDrop.style.top = (ofs.top - selectDropHeight)+'px';
			customForm.lib.addClass(this.selectDrop, this.options.dropFlippedClass);
		} else {
			this.selectDrop.style.top = (ofs.top + selectAreaHeight)+'px';
			customForm.lib.removeClass(this.selectDrop, this.options.dropFlippedClass);
		}
		this.selectDrop.style.left = ofs.left+'px';
		this.selectDrop.style.width = this.fakeElement.offsetWidth+'px';
	},
	showDropdown: function(){
		document.body.appendChild(this.selectDrop);
		customForm.lib.removeClass(this.selectDrop, this.options.dropHiddenClass);
		customForm.lib.addClass(this.fakeElement,this.options.dropActiveClass);
		this.positionDropdown();

		// highlight current active item
		var activeItem = this.getFakeActiveOption();
		this.removeClassFromItems(this.options.currentSelectedClass);
		customForm.lib.addClass(activeItem, this.options.currentSelectedClass);
		
		// show current dropdown
		customForm.lib.event.add(window, 'resize', this.onResizeWindow, this);
		customForm.lib.event.add(window, 'scroll', this.onScrollWindow, this);
		customForm.lib.event.add(document, customForm.eventPress, this.onClickOutside, this);
		this.positionDropdown();
	},
	hideDropdown: function(partial){
		if(this.selectDrop.parentNode) {
			if(this.selectDrop.offsetWidth) {
				this.selectDrop.parentNode.removeChild(this.selectDrop);
			}
			if(partial) {
				return;
			}
		}
		if(typeof this.origSelectedIndex === 'number') {
			this.realElement.selectedIndex = this.origSelectedIndex;
		}
		customForm.lib.removeClass(this.fakeElement,this.options.dropActiveClass);
		customForm.lib.addClass(this.selectDrop, this.options.dropHiddenClass);
		customForm.lib.event.remove(window, 'resize', this.onResizeWindow);
		customForm.lib.event.remove(window, 'scroll', this.onScrollWindow);
		customForm.lib.event.remove(document.documentElement, customForm.eventPress, this.onClickOutside);
		if(customForm.isTouchDevice) {
			this.onBlur();
		}
	},
	toggleDropdown: function(){
		if(!this.realElement.disabled) {
			if(customForm.isTouchDevice) {
				this.onFocus();
			} else {
				this.realElement.focus();
			}
			this.dropOpened = true;
				if(this.isActiveDrop()) {
					this.hideDropdown();
				} else {
					this.showDropdown();
				}
			this.refreshState();
		}
	},
	scrollToItem: function(){
		if(this.isActiveDrop()) {
			var dropHeight = this.selectList.offsetHeight;
			var offsetTop = this.calcOptionOffset(this.getFakeActiveOption());
			var sTop = this.selectList.scrollTop;
			var oHeight = this.getFakeActiveOption().offsetHeight;
			//offsetTop+=sTop;

			if(offsetTop >= sTop + dropHeight) {
				this.selectList.scrollTop = offsetTop - dropHeight + oHeight;
			} else if(offsetTop < sTop) {
				this.selectList.scrollTop = offsetTop;
			}
		}
	},
	getFakeActiveOption: function(c) {
		return customForm.lib.queryBySelector('li[rel="'+(typeof c === 'number' ? c : this.realElement.selectedIndex) +'"]',this.selectList)[0];
	},
	calcOptionOffset: function(fake) {
		var h = 0;
		var els = customForm.lib.queryBySelector('.customFormcalc',this.selectList);
		for(var i = 0; i < els.length; i++) {
			if(els[i] == fake) break;
			h+=els[i].offsetHeight;
		}
		return h;
	},
	childrenHasItem: function(hold,item) {
		var items = hold.getElementsByTagName('*');
		for(i = 0; i < items.length; i++) {
			if(items[i] == item) return true;
		}
		return false;
	},
	removeClassFromItems: function(className){
		var children = customForm.lib.queryBySelector('li',this.selectList);
		for(var i = children.length - 1; i >= 0; i--) {
			customForm.lib.removeClass(children[i], className);
		}
	},
	setSelectedClass: function(c){
		customForm.lib.addClass(this.getFakeActiveOption(c), this.options.selectedClass);
	},
	refreshSelectedClass: function(c){
		if(!this.options.showNativeDrop) {
			this.removeClassFromItems(this.options.selectedClass);
			this.setSelectedClass(c);
		}
		if(this.realElement.disabled) {
			customForm.lib.addClass(this.fakeElement, this.options.disabledClass);
			if(this.labelFor) {
				customForm.lib.addClass(this.labelFor, this.options.labelDisabledClass);
			}
		} else {
			customForm.lib.removeClass(this.fakeElement, this.options.disabledClass);
			if(this.labelFor) {
				customForm.lib.removeClass(this.labelFor, this.options.labelDisabledClass);
			}
		}
	},
	refreshSelectedText: function() {
		if(!this.dropOpened && this.realElement.title) {
			this.valueText.innerHTML = this.realElement.title;
		} else {
			if(this.realElement.options[this.realElement.selectedIndex].title) {
				var optImage = this.parseOptionTitle(this.realElement.options[this.realElement.selectedIndex].title);
				this.valueText.innerHTML = (optImage ? '<img src="'+optImage+'" alt="" />' : '') + this.realElement.options[this.realElement.selectedIndex].innerHTML;
			} else {
				this.valueText.innerHTML = this.realElement.options[this.realElement.selectedIndex].innerHTML;
			}
		}
	},
	refreshState: function(){
		this.origSelectedIndex = this.realElement.selectedIndex;
		this.refreshSelectedClass();
		this.refreshSelectedText();
		if(!this.options.showNativeDrop) {
			this.positionDropdown();
			if(this.selectDrop.offsetWidth) {
				this.scrollToItem();
			}
		}
	}
});// custom checkbox module
customForm.addModule({
	name:'checkbox',
	selector:'input[type="checkbox"]',
	defaultOptions: {
		wrapperClass:'chk-area',
		focusClass:'chk-focus',
		checkedClass:'chk-checked',
		labelActiveClass:'chk-label-active',
		uncheckedClass:'chk-unchecked',
		disabledClass:'chk-disabled',
		chkStructure:'<span></span>'
	},
	setupWrapper: function(){
		customForm.lib.addClass(this.fakeElement, this.options.wrapperClass);
		this.fakeElement.innerHTML = this.options.chkStructure;
		this.realElement.parentNode.insertBefore(this.fakeElement, this.realElement);
		customForm.lib.event.add(this.realElement, 'click', this.onRealClick, this);
		this.refreshState();
	},
	onFakePressed: function() {
		customForm.modules[this.name].superclass.onFakePressed.apply(this, arguments);
		if(!this.realElement.disabled) {
			this.realElement.focus();
		}
	},
	onFakeClick: function(e) {
		customForm.modules[this.name].superclass.onFakeClick.apply(this, arguments);
		this.tmpTimer = setTimeout(customForm.lib.bind(function(){
			this.toggle();
		},this),10);
		return false;
	},
	onRealClick: function(e) {
		setTimeout(customForm.lib.bind(function(){
			this.refreshState();
		},this),10);
		e.stopPropagation();
	},
	toggle: function(e){
		if(!this.realElement.disabled) {
			if(this.realElement.checked) {
				this.realElement.checked = false;
			} else {
				this.realElement.checked = true;
			}
			customForm.lib.fireEvent(this.realElement, 'change');
		}
		this.refreshState();
		return false;
	},
	refreshState: function(){
		if(this.realElement.checked) {
			customForm.lib.addClass(this.fakeElement, this.options.checkedClass);
			customForm.lib.removeClass(this.fakeElement, this.options.uncheckedClass);
			if(this.labelFor) {
				customForm.lib.addClass(this.labelFor, this.options.labelActiveClass);
			}
		} else {
			customForm.lib.removeClass(this.fakeElement, this.options.checkedClass);
			customForm.lib.addClass(this.fakeElement, this.options.uncheckedClass);
			if(this.labelFor) {
				customForm.lib.removeClass(this.labelFor, this.options.labelActiveClass);
			}
		}
		if(this.realElement.disabled) {
			customForm.lib.addClass(this.fakeElement, this.options.disabledClass);
			if(this.labelFor) {
				customForm.lib.addClass(this.labelFor, this.options.labelDisabledClass);
			}
		} else {
			customForm.lib.removeClass(this.fakeElement, this.options.disabledClass);
			if(this.labelFor) {
				customForm.lib.removeClass(this.labelFor, this.options.labelDisabledClass);
			}
		}
	}
});// clear inputs on focus
function initInputs() {
	// replace options
	var opt = {
		clearInputs: true,
		clearTextareas: true,
		clearPasswords: true
	}
	// collect all items
	var inputs = [].concat(
		PlaceholderInput.convertToArray(document.getElementsByTagName('input')),
		PlaceholderInput.convertToArray(document.getElementsByTagName('textarea'))
	);
	// apply placeholder class on inputs
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].className.indexOf('default') < 0) {
			var inputType = PlaceholderInput.getInputType(inputs[i]);
			if((opt.clearInputs && inputType === 'text') ||
				(opt.clearTextareas && inputType === 'textarea') || 
				(opt.clearPasswords && inputType === 'password')
			) {
				new PlaceholderInput({
					element:inputs[i],
					wrapWithElement:false,
					showUntilTyping:false,
					getParentByClass:false,
					placeholderAttr: inputs[i].getAttribute('placeholder') ? 'placeholder' : 'value'
				});
			}
		}
	}
}

// input type placeholder class
;(function(){
	var placeholderCollection = [];
	PlaceholderInput = function() {
		this.options = {
			element:null,
			showUntilTyping:false,
			wrapWithElement:false,
			getParentByClass:false,
			placeholderAttr:'value',
			inputFocusClass:'focus',
			inputActiveClass:'text-active',
			parentFocusClass:'parent-focus',
			parentActiveClass:'parent-active',
			labelFocusClass:'label-focus',
			labelActiveClass:'label-active',
			fakeElementClass:'input-placeholder-text'
		}
		placeholderCollection.push(this);
		this.init.apply(this,arguments);
	}
	PlaceholderInput.convertToArray = function(collection) {
		var arr = [];
		for (var i = 0, ref = arr.length = collection.length; i < ref; i++) {
			arr[i] = collection[i];
		}
		return arr;
	}
	PlaceholderInput.getInputType = function(input) {
		return (input.type ? input.type : input.tagName).toLowerCase();
	}
	PlaceholderInput.refreshAllInputs = function(except) {
		for(var i = 0; i < placeholderCollection.length; i++) {
			if(except !== placeholderCollection[i]) {
				placeholderCollection[i].refreshState();
			}
		}
	}
	PlaceholderInput.prototype = {
		init: function(opt) {
			this.setOptions(opt);
			if(this.element && this.element.PlaceholderInst) {
				this.element.PlaceholderInst.refreshClasses();
			} else {
				this.element.PlaceholderInst = this;
				if(this.elementType == 'text' || this.elementType == 'password' || this.elementType == 'textarea') {
					this.initElements();
					this.attachEvents();
					this.refreshClasses();
				}
			}
		},
		setOptions: function(opt) {
			for(var p in opt) {
				if(opt.hasOwnProperty(p)) {
					this.options[p] = opt[p];
				}
			}
			if(this.options.element) {
				this.element = this.options.element;
				this.elementType = PlaceholderInput.getInputType(this.element);
				this.wrapWithElement = (this.elementType === 'password' || this.options.showUntilTyping ? true : this.options.wrapWithElement || this.options.placeholderAttr === 'placeholder');
				this.setOrigValue( this.options.placeholderAttr == 'value' ? this.element.defaultValue : this.element.getAttribute(this.options.placeholderAttr) );
			}
		},
		setOrigValue: function(value) {
			this.origValue = value;
		},
		initElements: function() {
			// create fake element if needed
			if(this.wrapWithElement) {
				this.element.value = '';
				this.element.removeAttribute(this.options.placeholderAttr);
				this.fakeElement = document.createElement('span');
				this.fakeElement.className = this.options.fakeElementClass;
				this.fakeElement.innerHTML += this.origValue;
				this.fakeElement.style.color = getStyle(this.element, 'color');
				this.fakeElement.style.position = 'absolute';
				this.element.parentNode.insertBefore(this.fakeElement, this.element);
			}
			// get input label
			if(this.element.id) {
				this.labels = document.getElementsByTagName('label');
				for(var i = 0; i < this.labels.length; i++) {
					if(this.labels[i].htmlFor === this.element.id) {
						this.labelFor = this.labels[i];
						break;
					}
				}
			}
			// get parent node (or parentNode by className)
			this.elementParent = this.element.parentNode;
			if(typeof this.options.getParentByClass === 'string') {
				var el = this.element;
				while(el.parentNode) {
					if(hasClass(el.parentNode, this.options.getParentByClass)) {
						this.elementParent = el.parentNode;
						break;
					} else {
						el = el.parentNode;
					}
				}
			}
		},
		attachEvents: function() {
			this.element.onfocus = bindScope(this.focusHandler, this);
			this.element.onblur = bindScope(this.blurHandler, this);
			if(this.options.showUntilTyping) {
				this.element.onkeydown = bindScope(this.typingHandler, this);
				this.element.onpaste = bindScope(this.typingHandler, this);
			}
			if(this.wrapWithElement) this.fakeElement.onclick = bindScope(this.focusSetter, this);
		},
		togglePlaceholderText: function(state) {
			if(this.wrapWithElement) {
				this.fakeElement.style.display = state ? '' : 'none';
			} else {
				this.element.value = state ? this.origValue : '';
			}
		},
		focusSetter: function() {
			this.element.focus();
		},
		focusHandler: function() {
			clearInterval(this.checkerInterval);
			this.checkerInterval = setInterval(bindScope(this.intervalHandler,this), 1);
			this.focused = true;
			if(!this.element.value.length || this.element.value === this.origValue) {
				if(!this.options.showUntilTyping) {
					this.togglePlaceholderText(false);
				}
			}
			this.refreshClasses();
		},
		blurHandler: function() {
			clearInterval(this.checkerInterval);
			this.focused = false;
			if(!this.element.value.length || this.element.value === this.origValue) {
				this.togglePlaceholderText(true);
			}
			this.refreshClasses();
			PlaceholderInput.refreshAllInputs(this);
		},
		typingHandler: function() {
			setTimeout(bindScope(function(){
				if(this.element.value.length) {
					this.togglePlaceholderText(false);
					this.refreshClasses();
				}
			},this), 10);
		},
		intervalHandler: function() {
			if(typeof this.tmpValue === 'undefined') {
				this.tmpValue = this.element.value;
			}
			if(this.tmpValue != this.element.value) {
				PlaceholderInput.refreshAllInputs(this);
			}
		},
		refreshState: function() {
			if(this.wrapWithElement) {
				if(this.element.value.length && this.element.value !== this.origValue) {
					this.togglePlaceholderText(false);
				} else if(!this.element.value.length) {
					this.togglePlaceholderText(true);
				}
			}
			this.refreshClasses();
		},
		refreshClasses: function() {
			this.textActive = this.focused || (this.element.value.length && this.element.value !== this.origValue);
			this.setStateClass(this.element, this.options.inputFocusClass,this.focused);
			this.setStateClass(this.elementParent, this.options.parentFocusClass,this.focused);
			this.setStateClass(this.labelFor, this.options.labelFocusClass,this.focused);
			this.setStateClass(this.element, this.options.inputActiveClass, this.textActive);
			this.setStateClass(this.elementParent, this.options.parentActiveClass, this.textActive);
			this.setStateClass(this.labelFor, this.options.labelActiveClass, this.textActive);
		},
		setStateClass: function(el,cls,state) {
			if(!el) return; else if(state) addClass(el,cls); else removeClass(el,cls);
		}
	}
	
	// utility functions
	function hasClass(el,cls) {
		return el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
	}
	function addClass(el,cls) {
		if (!hasClass(el,cls)) el.className += " "+cls;
	}
	function removeClass(el,cls) {
		if (hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
	}
	function bindScope(f, scope) {
		return function() {return f.apply(scope, arguments)}
	}
	function getStyle(el, prop) {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(el, null)[prop];
		} else if (el.currentStyle) {
			return el.currentStyle[prop];
		} else {
			return el.style[prop];
		}
	}
}());

if (window.addEventListener) window.addEventListener("load", initInputs, false);
else if (window.attachEvent) window.attachEvent("onload", initInputs);
/*	
 * jQuery mmenu v4.1.9
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ ) {

	var _PLUGIN_	= 'mmenu',
		_VERSION_	= '4.1.9';


	//	Plugin already excists
	if ( $[ _PLUGIN_ ] )
	{
		return;
	}

	//	Global variables
	var glbl = {
		$wndw: null,
		$html: null,
		$body: null,
		$page: null,
		$blck: null,

		$allMenus: null,
		$scrollTopNode: null
	};

	var _c = {}, _e = {}, _d = {},
		_serialnr = 0;


	$[ _PLUGIN_ ] = function( $menu, opts, conf )
	{
		glbl.$allMenus = glbl.$allMenus.add( $menu );

		this.$menu = $menu;
		this.opts  = opts
		this.conf  = conf;

		this.serialnr = _serialnr++;

		this._init();

		return this;
	};

	$[ _PLUGIN_ ].prototype = {

		open: function()
		{
			this._openSetup();
			this._openFinish();
			return 'open';
		},
		_openSetup: function()
		{
			//	Find scrolltop
			var _scrollTop = findScrollTop();

			//	Set opened
			this.$menu.addClass( _c.current );

			//	Close others
			glbl.$allMenus.not( this.$menu ).trigger( _e.close );

			//	Store style and position
			glbl.$page
				.data( _d.style, glbl.$page.attr( 'style' ) || '' )
				.data( _d.scrollTop, _scrollTop )
				.data( _d.offetLeft, glbl.$page.offset().left );

			//	Resize page to window width
			var _w = 0;
			glbl.$wndw
				.off( _e.resize )
				.on( _e.resize,
					function( e, force )
					{
						if ( force || glbl.$html.hasClass( _c.opened ) )
						{
							var nw = glbl.$wndw.width();
							if ( nw != _w )
							{
								_w = nw;
								glbl.$page.width( nw - glbl.$page.data( _d.offetLeft ) );
							}
						}
					}
				)
				.trigger( _e.resize, [ true ] );

			//	Prevent tabbing out of the menu
			if ( this.conf.preventTabbing )
			{
				glbl.$wndw
					.off( _e.keydown )
					.on( _e.keydown,
						function( e )
						{
							if ( e.keyCode == 9 )
							{
								e.preventDefault();
								return false;
							}
						}
					);
			}

			//	Add options
			if ( this.opts.modal )
			{
				glbl.$html.addClass( _c.modal );
			}
			if ( this.opts.moveBackground )
			{
				glbl.$html.addClass( _c.background );
			}
			if ( this.opts.position != 'left' )
			{
				glbl.$html.addClass( _c.mm( this.opts.position ) );
			}
			if ( this.opts.zposition != 'back' )
			{
				glbl.$html.addClass( _c.mm( this.opts.zposition ) );
			}
			if ( this.opts.classes )
			{
				glbl.$html.addClass( this.opts.classes );
			}

			//	Open
			glbl.$html.addClass( _c.opened );
			this.$menu.addClass( _c.opened );

			//	Scroll page to scrolltop
			glbl.$page.scrollTop( _scrollTop );

			//	Scroll menu to top
			this.$menu.scrollTop( 0 );
		},
		_openFinish: function()
		{
			var that = this;

			//	Callback
			transitionend( glbl.$page,
				function()
				{
					that.$menu.trigger( _e.opened );
				}, this.conf.transitionDuration
			);

			//	Opening
			glbl.$html.addClass( _c.opening );
			this.$menu.trigger( _e.opening );

			//	Scroll window to top
			window.scrollTo( 0, 1 );
		},
		close: function()
		{
			var that = this;

			//	Callback
			transitionend( glbl.$page,
				function()
				{
					that.$menu
						.removeClass( _c.current )
						.removeClass( _c.opened );

					glbl.$html
						.removeClass( _c.opened )
						.removeClass( _c.modal )
						.removeClass( _c.background )
						.removeClass( _c.mm( that.opts.position ) )
						.removeClass( _c.mm( that.opts.zposition ) );

					if ( that.opts.classes )
					{
						glbl.$html.removeClass( that.opts.classes );
					}

					glbl.$wndw
						.off( _e.resize )
						.off( _e.keydown );

					//	Restore style and position
					glbl.$page.attr( 'style', glbl.$page.data( _d.style ) );

					if ( glbl.$scrollTopNode )
					{
						glbl.$scrollTopNode.scrollTop( glbl.$page.data( _d.scrollTop ) );
					}

					//	Closed
					that.$menu.trigger( _e.closed );
	
				}, this.conf.transitionDuration
			);

			//	Closing
			glbl.$html.removeClass( _c.opening );
			this.$menu.trigger( _e.closing );
	
			return 'close';
		},
	
		_init: function()
		{
			this.opts = extendOptions( this.opts, this.conf, this.$menu );
			this.direction = ( this.opts.slidingSubmenus ) ? 'horizontal' : 'vertical';
	
			//	INIT PAGE & MENU
			this._initPage( glbl.$page );
			this._initMenu();
			this._initBlocker();
			this._initPanles();
			this._initLinks();
			this._initOpenClose();
			this._bindCustomEvents();

			if ( $[ _PLUGIN_ ].addons )
			{
				for ( var a = 0; a < $[ _PLUGIN_ ].addons.length; a++ )
				{
					if ( typeof this[ '_addon_' + $[ _PLUGIN_ ].addons[ a ] ] == 'function' )
					{
						this[ '_addon_' + $[ _PLUGIN_ ].addons[ a ] ]();
					}
				}
			}
		},

		_bindCustomEvents: function()
		{
			var that = this;

			this.$menu
				.off( _e.open + ' ' + _e.close + ' ' + _e.setPage+ ' ' + _e.update )
				.on( _e.open + ' ' + _e.close + ' ' + _e.setPage+ ' ' + _e.update,
					function( e )
					{
						e.stopPropagation();
					}
				);

			//	Menu-events
			this.$menu
				.on( _e.open,
					function( e )
					{
						if ( $(this).hasClass( _c.current ) )
						{
							e.stopImmediatePropagation();
							return false;
						}
						return that.open();
					}
				)
				.on( _e.close,
					function( e )
					{
						if ( !$(this).hasClass( _c.current ) )
						{
							e.stopImmediatePropagation();
							return false;
						}
						return that.close();
					}
				)
				.on( _e.setPage,
					function( e, $p )
					{
						that._initPage( $p );
						that._initOpenClose();
					}
				);

			//	Panel-events
			var $panels = this.$menu.find( this.opts.isMenu && this.direction != 'horizontal' ? 'ul, ol' : '.' + _c.panel );
			$panels
				.off( _e.toggle + ' ' + _e.open + ' ' + _e.close )
				.on( _e.toggle + ' ' + _e.open + ' ' + _e.close,
					function( e )
					{
						e.stopPropagation();
					}
				);

			if ( this.direction == 'horizontal' )
			{
				$panels
					.on( _e.open,
						function( e )
						{
							return openSubmenuHorizontal( $(this), that.$menu );
						}
					);
			}
			else
			{
				$panels
					.on( _e.toggle,
						function( e )
						{
							var $t = $(this);
							return $t.triggerHandler( $t.parent().hasClass( _c.opened ) ? _e.close : _e.open );
						}
					)
					.on( _e.open,
						function( e )
						{
							$(this).parent().addClass( _c.opened );
							return 'open';
						}
					)
					.on( _e.close,
						function( e )
						{
							$(this).parent().removeClass( _c.opened );
							return 'close';
						}
					);
			}
		},
		
		_initBlocker: function()
		{
			var that = this;

			if ( !glbl.$blck )
			{
				glbl.$blck = $( '<div id="' + _c.blocker + '" />' )
					.css( 'opacity', 0 )
					.appendTo( glbl.$body );
			}

			glbl.$blck
				.off( _e.touchstart )
				.on( _e.touchstart,
					function( e )
					{
						e.preventDefault();
						e.stopPropagation();
						glbl.$blck.trigger( _e.mousedown );
					}
				)
				.on( _e.mousedown,
					function( e )
					{
						e.preventDefault();
						if ( !glbl.$html.hasClass( _c.modal ) )
						{
							that.$menu.trigger( _e.close );
						}
					}
				);
		},
		_initPage: function( $p )
		{
			if ( !$p )
			{
				$p = $(this.conf.pageSelector, glbl.$body);
				if ( $p.length > 1 )
				{
					$[ _PLUGIN_ ].debug( 'Multiple nodes found for the page-node, all nodes are wrapped in one <' + this.conf.pageNodetype + '>.' );
					$p = $p.wrapAll( '<' + this.conf.pageNodetype + ' />' ).parent();
				}
			}
	
			$p.addClass( _c.page );
			glbl.$page = $p;
		},
		_initMenu: function()
		{
			var that = this;

			//	Clone if needed
			if ( this.conf.clone )
			{
				this.$menu.add( this.$menu.find( '*' ) ).filter( '[id]' ).each(
					function()
					{
						$(this).attr( 'id', _c.mm( $(this).attr( 'id' ) ) );
					}
				);
			}
			this.$menu = this.$menu.clone( true );
			//	Strip whitespace
			this.$menu.contents().each(
				function()
				{
					if ( $(this)[ 0 ].nodeType == 3 )
					{
						//$(this).remove();
					}
				}
			);

			//	Prepend to body
			this.$menu
				.prependTo( 'body' )
				.addClass( _c.menu );

			//	Add direction class
			this.$menu.addClass( _c.mm( this.direction ) );

			//	Add options classes
			if ( this.opts.classes )
			{
				this.$menu.addClass( this.opts.classes );
			}
			if ( this.opts.isMenu )
			{
				this.$menu.addClass( _c.ismenu );
			}
			if ( this.opts.position != 'left' )
			{
				this.$menu.addClass( _c.mm( this.opts.position ) );
			}
			if ( this.opts.zposition != 'back' )
			{
				this.$menu.addClass( _c.mm( this.opts.zposition ) );
			}
		},
		_initPanles: function()
		{
			var that = this;


			//	Refactor List class
			this.__refactorClass( $('.' + this.conf.listClass, this.$menu), 'list' );

			//	Add List class
			if ( this.opts.isMenu )
			{
				$('ul, ol', this.$menu)
					.not( '.mm-nolist' )
					.addClass( _c.list );
			}

			var $lis = $('.' + _c.list + ' > li', this.$menu);

			//	Refactor Selected class
			this.__refactorClass( $lis.filter( '.' + this.conf.selectedClass ), 'selected' );

			//	Refactor Label class
			this.__refactorClass( $lis.filter( '.' + this.conf.labelClass ), 'label' );

			//	Refactor Spacer class
			this.__refactorClass( $lis.filter( '.' + this.conf.spacerClass ), 'spacer' );

			//	setSelected-event
			$lis
				.off( _e.setSelected )
				.on( _e.setSelected,
					function( e, selected )
					{
						e.stopPropagation();
	
						$lis.removeClass( _c.selected );
						if ( typeof selected != 'boolean' )
						{
							selected = true;
						}
						if ( selected )
						{
							$(this).addClass( _c.selected );
						}
					}
				);

			//	Refactor Panel class
			this.__refactorClass( $('.' + this.conf.panelClass, this.$menu), 'panel' );

			//	Add Panel class
			this.$menu
				.children()
				.filter( this.conf.panelNodetype )
				.add( this.$menu.find( '.' + _c.list ).children().children().filter( this.conf.panelNodetype ) )
				.addClass( _c.panel );

			var $panels = $('.' + _c.panel, this.$menu);

			//	Add an ID to all panels
			$panels
				.each(
					function( i )
					{
						var $t = $(this),
							id = $t.attr( 'id' ) || _c.mm( 'm' + that.serialnr + '-p' + i );

						$t.attr( 'id', id );
					}
			);

			//	Add open and close links to menu items
			$panels
				.find( '.' + _c.panel )
				.each(
					function( i )
					{
						var $t = $(this),
							$u = $t.is( 'ul, ol' ) ? $t : $t.find( 'ul ,ol' ).first(),
							$l = $t.parent(),
							$a = $l.find( '> a, > span' ),
							$p = $l.closest( '.' + _c.panel );

						$t.data( _d.parent, $l );

						if ( $l.parent().is( '.' + _c.list ) )
						{
							var $btn = $( '<a class="' + _c.subopen + '" href="#' + $t.attr( 'id' ) + '" />' ).insertBefore( $a );
							if ( !$a.is( 'a' ) )
							{
								$btn.addClass( _c.fullsubopen );
							}
							if ( that.direction == 'horizontal' )
							{
								$u.prepend( '<li class="' + _c.subtitle + '"><a class="' + _c.subclose + '" href="#' + $p.attr( 'id' ) + '">' + $a.text() + '</a></li>' );
							}
						}
					}
				);

			//	Link anchors to panels
			var evt = this.direction == 'horizontal' ? _e.open : _e.toggle;
			$panels
				.each(
					function( i )
					{
						var $opening = $(this),
							id = $opening.attr( 'id' );

						$('a[href="#' + id + '"]', that.$menu)
							.off( _e.click )
							.on( _e.click,
								function( e )
								{
									e.preventDefault();
									$opening.trigger( evt );
								}
							);
					}
			);

			if ( this.direction == 'horizontal' )
			{
				//	Add opened-classes
				var $selected = $('.' + _c.list + ' > li.' + _c.selected, this.$menu);
				$selected
					.add( $selected.parents( 'li' ) )
					.parents( 'li' ).removeClass( _c.selected )
					.end().each(
						function()
						{
							var $t = $(this),
								$u = $t.find( '> .' + _c.panel );

							if ( $u.length )
							{
								$t.parents( '.' + _c.panel ).addClass( _c.subopened );
								$u.addClass( _c.opened );
							}
						}
					)
					.closest( '.' + _c.panel ).addClass( _c.opened )
					.parents( '.' + _c.panel ).addClass( _c.subopened );
			}
			else
			{
				//	Replace Selected-class with opened-class in parents from .Selected
				$('li.' + _c.selected, this.$menu)
					.addClass( _c.opened )
					.parents( '.' + _c.selected ).removeClass( _c.selected );
			}

			//	Set current opened
			var $current = $panels.filter( '.' + _c.opened );
			if ( !$current.length )
			{
				$current = $panels.first();
			}
			$current
				.addClass( _c.opened )
				.last()
				.addClass( _c.current );

			//	Rearrange markup
			if ( this.direction == 'horizontal' )
			{
				$panels.find( '.' + _c.panel ).appendTo( this.$menu );
			}
		},
		_initLinks: function()
		{
			var that = this;
	
			$('.' + _c.list + ' > li > a', this.$menu)
				.not( '.' + _c.subopen )
				.not( '.' + _c.subclose )
				.not( '[rel="external"]' )
				.not( '[target="_blank"]' )
				.off( _e.click )
				.on( _e.click,
					function( e )
					{
						var $t = $(this),
							href = $t.attr( 'href' );

						//	Set selected item
						if ( that.__valueOrFn( that.opts.onClick.setSelected, $t ) )
						{
							$t.parent().trigger( _e.setSelected );
						}

						//	Prevent default / don't follow link. Default: false
						var preventDefault = that.__valueOrFn( that.opts.onClick.preventDefault, $t, href.slice( 0, 1 ) == '#' );
						if ( preventDefault )
						{
							e.preventDefault();
						}

						//	Block UI. Default: false if preventDefault, true otherwise
						if ( that.__valueOrFn( that.opts.onClick.blockUI, $t, !preventDefault ) )
						{
							glbl.$html.addClass( _c.blocking );
						}

						//	Close menu. Default: true if preventDefault, false otherwise
						if ( that.__valueOrFn( that.opts.onClick.close, $t, preventDefault ) )
						{
							that.$menu.triggerHandler( _e.close );
						}
					}
				);
		},
		_initOpenClose: function()
		{
			var that = this;

			//	Open menu
			var id = this.$menu.attr( 'id' );
			if ( id && id.length )
			{
				if ( this.conf.clone )
				{
					id = _c.umm( id );
				}

				$('a[href="#' + id + '"]')
					.off( _e.click )
					.on( _e.click,
						function( e )
						{
							e.preventDefault();
							that.$menu.trigger( _e.open );
						}
					);
			}

			//	Close menu
			var id = glbl.$page.attr( 'id' );
			if ( id && id.length )
			{
				$('a[href="#' + id + '"]')
					.off( _e.click )
					.on( _e.click,
						function( e )
						{
							e.preventDefault();
							that.$menu.trigger( _e.close );
						}
					);
			}
		},
		
		__valueOrFn: function( o, $e, d )
		{
			if ( typeof o == 'function' )
			{
				return o.call( $e[ 0 ] );
			}
			if ( typeof o == 'undefined' && typeof d != 'undefined' )
			{
				return d;
			}
			return o;
		},
		
		__refactorClass: function( $e, c )
		{
			$e.removeClass( this.conf[ c + 'Class' ] ).addClass( _c[ c ] );
		}
	};


	$.fn[ _PLUGIN_ ] = function( opts, conf )
	{
		//	First time plugin is fired
		if ( !glbl.$wndw )
		{
			_initPlugin();
		}

		//	Extend options
		opts = extendOptions( opts, conf );
		conf = extendConfiguration( conf );

		return this.each(
			function()
			{
				var $menu = $(this);
				if ( $menu.data( _PLUGIN_ ) )
				{
					return;
				}
				$menu.data( _PLUGIN_, new $[ _PLUGIN_ ]( $menu, opts, conf ) );
			}
		);
	};

	$[ _PLUGIN_ ].version = _VERSION_;
	
	$[ _PLUGIN_ ].defaults = {
		position		: 'left',
		zposition		: 'back',
		moveBackground	: true,
		slidingSubmenus	: true,
		modal			: false,
		classes			: '',
		onClick			: {
//			close				: true,
//			blockUI				: null,
//			preventDefault		: null,
			setSelected			: true
		}
	};
	$[ _PLUGIN_ ].configuration = {
		preventTabbing		: true,
		panelClass			: 'Panel',
		listClass			: 'List',
		selectedClass		: 'Selected',
		labelClass			: 'Label',
		spacerClass			: 'Spacer',
		pageNodetype		: 'div',
		panelNodetype		: 'ul, ol, div',
		transitionDuration	: 400
	};



	/*
		SUPPORT
	*/
	(function() {

		var wd = window.document,
			ua = window.navigator.userAgent,
			ds = document.createElement( 'div' ).style;

		var _touch 				= 'ontouchstart' in wd,
			_overflowscrolling	= 'WebkitOverflowScrolling' in wd.documentElement.style,
			_oldAndroidBrowser	= (function() {
				if ( ua.indexOf( 'Android' ) >= 0 )
				{
					return 2.4 > parseFloat( ua.slice( ua.indexOf( 'Android' ) +8 ) );
				}
				return false;
			})();

		$[ _PLUGIN_ ].support = {

			touch: _touch,
			oldAndroidBrowser: _oldAndroidBrowser,
			overflowscrolling: (function() {
				if ( !_touch )
				{
					return true;
				}
				if ( _overflowscrolling )
				{
					return true;
				}
				if ( _oldAndroidBrowser )
				{
					return false;
				}
				return true;
			})()
		};
	})();


	/*
		BROWSER SPECIFIC FIXES
	*/
	$[ _PLUGIN_ ].useOverflowScrollingFallback = function( use )
	{
		if ( glbl.$html )
		{
			if ( typeof use == 'boolean' )
			{
				glbl.$html[ use ? 'addClass' : 'removeClass' ]( _c.nooverflowscrolling );
			}
			return glbl.$html.hasClass( _c.nooverflowscrolling );
		}
		else
		{
			_useOverflowScrollingFallback = use;
			return use;
		}
	};


	/*
		DEBUG
	*/
	$[ _PLUGIN_ ].debug = function( msg ) {};
	$[ _PLUGIN_ ].deprecated = function( depr, repl )
	{
		if ( typeof console != 'undefined' && typeof console.warn != 'undefined' )
		{
			console.warn( 'MMENU: ' + depr + ' is deprecated, use ' + repl + ' instead.' );
		}
	};


	//	Global vars
	var _useOverflowScrollingFallback = !$[ _PLUGIN_ ].support.overflowscrolling;


	function extendOptions( o, c, $m )
	{
		if ( typeof o != 'object' )
		{
			o = {};
		}

		if ( $m )
		{
			if ( typeof o.isMenu != 'boolean' )
			{
				var $c = $m.children();
				o.isMenu = ( $c.length == 1 && $c.is( c.panelNodetype ) );
			}
			return o;
		}


		//	Extend onClick
		if ( typeof o.onClick != 'object' )
		{
			o.onClick = {};
		}


		//	DEPRECATED
		if ( typeof o.onClick.setLocationHref != 'undefined' )
		{
			$[ _PLUGIN_ ].deprecated( 'onClick.setLocationHref option', '!onClick.preventDefault' );
			if ( typeof o.onClick.setLocationHref == 'boolean' )
			{
				o.onClick.preventDefault = !o.onClick.setLocationHref;
			}
		}
		//	/DEPRECATED


		//	Extend from defaults
		o = $.extend( true, {}, $[ _PLUGIN_ ].defaults, o );


		//	Degration
		if ( $[ _PLUGIN_ ].useOverflowScrollingFallback() )
		{
			switch( o.position )
			{
				case 'top':
				case 'right':
				case 'bottom':
					$[ _PLUGIN_ ].debug( 'position: "' + o.position + '" not supported when using the overflowScrolling-fallback.' );
					o.position = 'left';
					break;
			}
			switch( o.zposition )
			{
				case 'front':
				case 'next':
					$[ _PLUGIN_ ].debug( 'z-position: "' + o.zposition + '" not supported when using the overflowScrolling-fallback.' );
					o.zposition = 'back';
					break;
			}
		}

		return o;
	}
	function extendConfiguration( c )
	{
		if ( typeof c != 'object' )
		{
			c = {};
		}


		//	DEPRECATED
		if ( typeof c.panelNodeType != 'undefined' )
		{
			$[ _PLUGIN_ ].deprecated( 'panelNodeType configuration option', 'panelNodetype' );
			c.panelNodetype = c.panelNodeType;
		}
		//	/DEPRECATED


		c = $.extend( true, {}, $[ _PLUGIN_ ].configuration, c )

		//	Set pageSelector
		if ( typeof c.pageSelector != 'string' )
		{
			c.pageSelector = '> ' + c.pageNodetype;
		}

		return c;
	}

	function _initPlugin()
	{
		glbl.$wndw = $(window);
		glbl.$html = $('html');
		glbl.$body = $('body');
		
		glbl.$allMenus = $();


		//	Classnames, Datanames, Eventnames
		$.each( [ _c, _d, _e ],
			function( i, o )
			{
				o.add = function( c )
				{
					c = c.split( ' ' );
					for ( var d in c )
					{
						o[ c[ d ] ] = o.mm( c[ d ] );
					}
				};
			}
		);

		//	Classnames
		_c.mm = function( c ) { return 'mm-' + c; };
		_c.add( 'menu ismenu panel list subtitle selected label spacer current highest hidden page blocker modal background opened opening subopened subopen fullsubopen subclose nooverflowscrolling' );
		_c.umm = function( c )
		{
			if ( c.slice( 0, 3 ) == 'mm-' )
			{
				c = c.slice( 3 );
			}
			return c;
		};

		//	Datanames
		_d.mm = function( d ) { return 'mm-' + d; };
		_d.add( 'parent style scrollTop offetLeft' );

		//	Eventnames
		_e.mm = function( e ) { return e + '.mm'; };
		_e.add( 'toggle open opening opened close closing closed update setPage setSelected transitionend webkitTransitionEnd touchstart touchend mousedown mouseup click keydown keyup resize' );


		$[ _PLUGIN_ ]._c = _c;
		$[ _PLUGIN_ ]._d = _d;
		$[ _PLUGIN_ ]._e = _e;

		$[ _PLUGIN_ ].glbl = glbl;

		$[ _PLUGIN_ ].useOverflowScrollingFallback( _useOverflowScrollingFallback );
	}

	function openSubmenuHorizontal( $opening, $m )
	{
		if ( $opening.hasClass( _c.current ) )
		{
			return false;
		} 

		var $panels = $('.' + _c.panel, $m),
			$current = $panels.filter( '.' + _c.current );
		
		$panels
			.removeClass( _c.highest )
			.removeClass( _c.current )
			.not( $opening )
			.not( $current )
			.addClass( _c.hidden );

		if ( $opening.hasClass( _c.opened ) )
		{
			$current
				.addClass( _c.highest )
				.removeClass( _c.opened )
				.removeClass( _c.subopened );
		}
		else
		{
			$opening
				.addClass( _c.highest );

			$current
				.addClass( _c.subopened );
		}

		$opening
			.removeClass( _c.hidden )
			.removeClass( _c.subopened )
			.addClass( _c.current )
			.addClass( _c.opened );

		return 'open';
	}

	function findScrollTop()
	{
		if ( !glbl.$scrollTopNode )
		{
			if ( glbl.$html.scrollTop() != 0 )
			{
				glbl.$scrollTopNode = glbl.$html;
			}
			else if ( glbl.$body.scrollTop() != 0 )
			{
				glbl.$scrollTopNode = glbl.$body;
			}
		}
		return ( glbl.$scrollTopNode ) ? glbl.$scrollTopNode.scrollTop() : 0;
	}

	function transitionend( $e, fn, duration )
	{
		var _ended = false,
			_fn = function()
			{
				if ( !_ended )
				{
					fn.call( $e[ 0 ] );
				}
				_ended = true;
			};

		$e.one( _e.transitionend, _fn );
		$e.one( _e.webkitTransitionEnd, _fn );
		setTimeout( _fn, duration * 1.1 );
	}

})( jQuery );$(document).ready(function(){

	$('.more-info-text').hide();
	
	$.fn.exists = function(){return this.length>0;}
	
	if (window.PIE) {
		$('.ie-fix, .select-area .center').each(function() {
			PIE.attach(this);
		});
	};
	
	if ($('form').exists()) {
		customForm.lib.domReady(function(){
			customForm.customForms.replaceAll();
		});
	}
	
	$(".main-nav li").has("ul").addClass("has-child");
	
	$('.show-more-info').click (function() {
		//$('div.visual').remove();
		$('.show-more-info').hide();
		$('.more-info-text').show();
	});

	
	
	if ($('.btn-mobile').exists()) {
		$('#menu').mmenu({
			slidingSubmenus: false
		});
	}
	
	if ( $('.advanced-area').exists()) {
		//$('.advanced-area').hide();
		$('.advanced-area').css({'position':'absolute','left':'-50000px'})
		$('.advanced-btn').click (function(){

			//$('.advanced-btn').hide();
			//$('.advanced-area').slideToggle();
			if ($('.advanced-btn').hasClass('opened')) $('.advanced-area').css({'position':'absolute','left':'-50000px'})
			else  $('.advanced-area').css({'position':'inherit','left':'0'})

			$('.advanced-btn').toggleClass('opened');
			
			return false
		});
	}
	 $.widget( "custom.catcomplete", $.ui.autocomplete, {
_create: function() {
this._super();
this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
},
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
var li;
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
li = that._renderItemData( ul, item );
if ( item.category ) {
li.attr( "aria-label", item.category + " : " + item.label );
}
});
}
});
	if ($('.search-form .input .text.search').exists()) {
		/*$(".search-form .input .text").autocomplete({
			source:'/search.php',
			minLength:2,
			select: function(event, ui) {window.location = ui.item.url;return false;}
		});*/
		$(".search-form .input .text.search").catcomplete({
			source:'/search.php',
			minLength:2,
			select: function(event, ui) {window.location = ui.item.url;return false;}
		});
		
	}
});function formURL2() //Upon form submission, go to full URL
{

url = '/search/';
url = url + escape(document.search2.autocomplete.value.split(' ').join('_'));

location.href=url;

}

function notTheSame(one, two) {
	
	if (two=="The People's Operator") two="tpo"
	if (two=="Utility Warehouse") two="UW"

	if(one.toLowerCase()==two.toLowerCase()) return false
	else return true
	
	
	
	
}

function getHandsetURL() {

//url = '/';
//url = url + escape(document.search2.autocomplete.value.split(' ').join('_'));


  	var handset = "";
  	handset = document.searchform.handset.options[document.searchform.handset.selectedIndex].getAttribute("data-url");

	if (handset) {
	
		location.href=handset;

	}
	else updateOffers();

}

function freeText(text) {

if (text=='£0.00') text2 = document.createTextNode('FREE');
else text2 = document.createTextNode(text);

return text2;

}

function createMobileText(text) {

if (text=='Unlimited') {

span1 = document.createElement('span');
span1.className='txt';
span1.appendChild(document.createTextNode('Unlimited'));

span2 = document.createElement('span');
span2.className='mobile-txt';
span2.appendChild(document.createTextNode('Ultd'));

text2 = document.createElement('span');
text2.appendChild(span1);
text2.appendChild(span2);



} else {

text2 = document.createTextNode(text);

}

return text2;

}

if(typeof(XMLHttpRequest)!='undefined'){
	var getXMLHttpObj = function(){ return new XMLHttpRequest(); }
} else {
	var getXMLHttpObj = function(){
		var activeXObjects = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0',
		'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP'];
		for(var i=0; i<activeXObjects.length; i++){
			try{
				return new ActiveXObject(activeXObjects[i]);
			}catch(err){}
		}
	}
}

var oXML = getXMLHttpObj();
var oXMLTariff = getXMLHttpObj();
var oXMLBroadband = getXMLHttpObj();
var oXMLSimCard = getXMLHttpObj();
var oXMLPayg = getXMLHttpObj();
var oXMLSimfree = getXMLHttpObj();
var oXMLSmartwatch = getXMLHttpObj();
var oXMLUpgrade = getXMLHttpObj();

function updateOffers(pageselected){

oXML.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();


	networks_counter=0;
	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
			networks_counter++;
		      }

	   }
	   
	 if (networks_counter==document.searchform.network.length) networks_counter='Any';
	 else networks_counter=networks_counter+" selected";
	 
	 $( "#networknumber2" ).html(networks_counter);

	 
	 
	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 if (retailers_counter==document.searchform.retailername.length) retailers_counter='Any';
	 else retailers_counter=retailers_counter+" selected";
	 
	 $( "#retailersnumber2" ).html(retailers_counter);	 
	 
	 
	contract_counter=0;
	   
	var lengthofcontract = "";
	if (document.searchform.contractlength.value && document.searchform.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength.value + "',";
	   for (var i=0; i < document.searchform.contractlength.length; i++)
		 {
		   if (document.searchform.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength[i].value + "',";
			contract_counter++;
			  }

  	 }

	 
	 if (contract_counter==document.searchform.contractlength.length) contract_counter='Any';
	 else contract_counter=contract_counter+" selected";
	 
	 $( "#contractnumber2" ).html(contract_counter);


  	var minutes = "";
	minutes = document.searchform.minutes.options[document.searchform.minutes.selectedIndex].value;	

  	var texts = "";
	texts = document.searchform.texts.options[document.searchform.texts.selectedIndex].value;	

  	var data = "";
	data = document.searchform.data.options[document.searchform.data.selectedIndex].value;	
	
	var phoneprice = "";
	phoneprice = document.searchform.handsetcost.options[document.searchform.handsetcost.selectedIndex].value;	
	
	var monthlyprice = "";
	monthlyprice = document.searchform.monthlycost.options[document.searchform.monthlycost.selectedIndex].value;	

  	var handset = "";
  	handset = encodeURIComponent(document.searchform.handset.options[document.searchform.handset.selectedIndex].value);

  	var orderby = "totalcost asc";
	var orderby = " monthcost asc";
	
	orderby = document.searchform.orderby.options[document.searchform.orderby.selectedIndex].value;

	var gift = "0";
	gift = document.searchform.freegift.options[document.searchform.freegift.selectedIndex].value;

	var cashback = "";
	cashback = document.searchform.cashback.options[document.searchform.cashback.selectedIndex].value;
	
	var fourg = 0;
    if (document.searchform.fourg.checked) fourg=1;
	
	var refurb = 0;
    if (document.searchform.refurb.checked) refurb=1;
	
	var virgincustomers = 0;
	if (document.searchform.virgincustomer.checked) virgincustomers=1;
	
	var btbroadbandcustomers = 0;
	if (document.searchform.btcustomer.checked) btbroadbandcustomers=1;	
	
 	var talktalkcustomers = 0;
	if (document.searchform.talktalkcustomer.checked) talktalkcustomers=1; 
	
	
	url = '/engine.php?networks='+networks+'&retailers='+retailers+'&lengthofcontract='+lengthofcontract+'&minutes='+minutes+'&orderby='+orderby+'&texts='+texts+'&data='+data+'&handset='+handset+'&gift='+gift+'&cashback='+cashback+'&phoneprice='+phoneprice+'&cost='+monthlyprice+'&btbroadbandcustomers='+btbroadbandcustomers+'&virgincustomers='+virgincustomers+'&talktalkcustomers='+talktalkcustomers+'&4g='+fourg+'&refurb='+refurb+'&page='+page;  	

	
	if (orderby==" firstyearcost asc") $('#sortcolumn').text('First Year Cost');
	else if (orderby==" totalcost asc") $('#sortcolumn').text('Total Cost');
	else $('#sortcolumn').text('Avg Monthly Cost');	

	try {
		oXML.open('GET', url, true);
		oXML.onreadystatechange = processingFunction;
		oXML.send('');
	}
	catch (e) {
	alert(e);
		p1 =1;
		removePleaseWait();
	}
}


function processingFunction(){

	try {

		if(oXML.readyState!=4) return;

		if(oXML.status == 200) {

			orderby = document.searchform.orderby.options[document.searchform.orderby.selectedIndex].value;
		
			var xmlDoc = oXML.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXML.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'row-03';


				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '11';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
				var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';
				
				
				donutmins=10;
				if (contacts[i].getAttribute('minutes')<=10000) donutmins=9;
				if (contacts[i].getAttribute('minutes')<=5000) donutmins=8;
				if (contacts[i].getAttribute('minutes')<=3000) donutmins=7;
				if (contacts[i].getAttribute('minutes')<=2000) donutmins=6;
				if (contacts[i].getAttribute('minutes')<=1200) donutmins=5;
				if (contacts[i].getAttribute('minutes')<=1000) donutmins=4;
				if (contacts[i].getAttribute('minutes')<800) donutmins=3;
				if (contacts[i].getAttribute('minutes')<600) donutmins=2;
				if (contacts[i].getAttribute('minutes')<200) donutmins=1;
				if (contacts[i].getAttribute('minutes')<100) donutmins=0;

				donuttexts=10;
				if (contacts[i].getAttribute('texts')<=10000) donuttexts=9;
				if (contacts[i].getAttribute('texts')<=5000) donuttexts=8;
				if (contacts[i].getAttribute('texts')<=3000) donuttexts=7;
				if (contacts[i].getAttribute('texts')<=2000) donuttexts=6;
				if (contacts[i].getAttribute('texts')<=1200) donuttexts=5;
				if (contacts[i].getAttribute('texts')<=1000) donuttexts=4;
				if (contacts[i].getAttribute('texts')<800) donuttexts=3;
				if (contacts[i].getAttribute('texts')<600) donuttexts=2;
				if (contacts[i].getAttribute('texts')<200) donuttexts=1;
				if (contacts[i].getAttribute('texts')<100) donuttexts=0;


				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;

				var td1 = document.createElement('TD');
				td1.className = 'cell-01 hidemobile';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02 donut donut'+donutmins;
				var td3 = document.createElement('TD');
				td3.className = 'cell-03 donut donut'+donuttexts;
				var td4 = document.createElement('TD');
				td4.className = 'cell-04 donut donut'+donutdata;
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('affiliate_url');

				
				mobileName = document.createElement('span');
				mobileName.setAttribute('class', 'phonename');
				mobileName.setAttribute('className', 'phonename');
				mobileName.appendChild(document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model').replace(' - Clearance', '')));
				if (contacts[i].getAttribute('exact')==0)	td0.appendChild(mobileName);
				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);		

				if (contacts[i].getAttribute('clearance')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'clearance');
					clearanceText.setAttribute('className', 'clearance');
					clearanceText.appendChild(document.createTextNode('Clearance'));
					/*if (contacts[i].getAttribute('exact')==0)*/	td0.appendChild(clearanceText);
				
				}

				/*if (contacts[i].getAttribute('exact')==0)*/	td0.appendChild(mobileLink);
				

				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('network'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td1.appendChild(networkLink);
				
				
				if (contacts[i].getAttribute('existingcustomerdeal')==1) {
					
					existing = document.createElement('span');
					existing.setAttribute('class', 'fourg2');
					existing.setAttribute('className', 'fourg2');
					existing.appendChild(document.createTextNode('Existing customers'));
				
					td1.appendChild(existing);
					
					
				}			
				
				
				if (contacts[i].getAttribute('gift')) {
				
						giftImage = document.createElement('img');
						giftImage.setAttribute('src', '/'+contacts[i].getAttribute('gift'));
						giftImage.setAttribute('style','padding-top:3px;width:50px;height:50px');
						
						giftLink = document.createElement('a');
						giftLink.setAttribute('href', link);
						giftLink.setAttribute('target','_blank');
						
						giftLink.appendChild(giftImage);
						
						td1.appendChild(giftLink);			
				
				}
				
				
				
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('minutes')));
				
				
					networkImage2 = document.createElement('img');
					networkImage2.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
					networkImage2.setAttribute('alt', contacts[i].getAttribute('network'));
					
					networkspan = document.createElement('span');
					networkspan.className='mobile-txt';
					
					networkspan.appendChild(networkImage2);
					
				td2.appendChild(networkspan);

				td3.appendChild(document.createTextNode(contacts[i].getAttribute('texts')));
				
				
				
				



				if (contacts[i].getAttribute('data')!="0MB" && contacts[i].getAttribute('data')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('data'));
					datalink.setAttribute('title', contacts[i].getAttribute('data'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
					td4.appendChild(datalink);
				}
				else td4.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
				
				fourg = document.createElement('span');
				fourg.setAttribute('class', 'fourg2 fourgnew');
				fourg.setAttribute('className', 'fourg2 fourgnew');
				fourg.appendChild(document.createTextNode('4G'));
				if(contacts[i].getAttribute('fourg')==1) td4.appendChild(fourg);

				
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				months.appendChild(document.createTextNode('months'));
				td5.appendChild(months);
				
				viaText = document.createElement('span');
				viaText.setAttribute('style', 'margin-top:10px;');
	
				
				viaTextImage = document.createElement('img');
				viaTextImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				viaTextImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				viaTextImage.className='retailer-txt';
				//viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailername')));

			
				viaTexta = document.createElement('a');
				viaTexta.setAttribute('href', link);
				viaTexta.setAttribute('target', '_blank');
				viaTexta.appendChild(viaTextImage);
				
				
				viaText.appendChild(viaTexta);
				//td5.appendChild(viaText);				

				
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Handset'));		

				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('Monthly'));
				
				cashBack = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					cashBack.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					cashBack.appendChild(document.createTextNode('Cashback by Redemption'));
				}
				
				td6.appendChild(phonePrice);
				td6.appendChild(freeText('£'+contacts[i].getAttribute('phoneprice')));
				
				td6.appendChild(monthlyCost);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(cashBack);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				
				//monthlyCost = document.createElement('span');
				//monthlyCost.appendChild(document.createTextNode('avg. monthly'));
				avgMonthlyCost = document.createElement('strong');
				
				
				if (orderby==" firstyearcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('firstyearcost')));
				else if (orderby==" totalcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				else  avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avg_monthly_cost')));


				td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td7.appendChild(viaText);
				td7.appendChild(getDeal);
				
				/*if (contacts[i].getAttribute('number')) {

					contact = document.createElement('span');
					contact.appendChild(document.createTextNode('or call: '+contacts[i].getAttribute('number')));
					td7.appendChild(contact);
				
				}*/

					
				if (notTheSame(contacts[i].getAttribute('network'), contacts[i].getAttribute('retailername'))) {
					/*viaText = document.createElement('span');
					viaText.setAttribute('style', 'margin-top:0');
					viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailername')))
					td7.appendChild(viaText);*/
				}
				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().addClass("green-bottom");$(this).parent().parent().next("tr").show();$(this).parent().parent().next("tr").children().children().children().show();$(this).hide();return false;');
				moreInfo.appendChild(document.createTextNode('more info'));
				
				td1.appendChild(moreInfo);
				

				var tablenew = document.createElement('table');
				tablenew.setAttribute('style', 'font-size:0.41em;width: 100%;');
				
				
				
				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-05';
				
				tr.appendChild(td0);

				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td7);
				tr.appendChild(td6);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);


				td0.appendChild(document.createTextNode('Contract\u00a0costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Avg Monthly Cost'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avg_monthly_cost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('First Year Cost'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode('£'+contacts[i].getAttribute('firstyearcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Total Cost'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Handset Cost'));
				td4.appendChild(spanText);
				td4.appendChild(freeText('£'+contacts[i].getAttribute('phoneprice')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Line Rental'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Contract Length'));
				td6.appendChild(spanText);
				td6.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')+' mths'));

				
				
				cashBack = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					cashBack.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					cashBack.appendChild(document.createTextNode('Cashback by Redemption'));
				}
				
				
				if (contacts[i].getAttribute('cashback')>0) {
					td7.appendChild(cashBack);
					td7.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				else {
					cashBack = document.createElement('span');
					cashBack.appendChild(document.createTextNode('Cashback'));
					td7.appendChild(cashBack);
					td7.appendChild(document.createTextNode('None'));
				}
				
				tablenew.appendChild(tr);



				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				
				
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');
				td0.appendChild(document.createTextNode('Data limits:'));
				
				

				var td1 = document.createElement('TD');
				
				td1.colSpan="7";
				
				var dataallowance = document.createElement('SPAN');
				dataallowance.innerHTML = contacts[i].childNodes[0].nodeValue;
				
				td1.appendChild(dataallowance);
				
				if (contacts[i].getAttribute('data')!='Ultd') {
					tr.appendChild(td0);
					tr.appendChild(td1);
				}
				
				tablenew.appendChild(tr);



				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td5a = document.createElement('TD');
				td5a.className = 'cell-05';
				td5a.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				td6.colSpan="1";
				td6.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td7 = document.createElement('TH');
				td7.className = 'cell-07';
				
				tr.appendChild(td0);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td5a);
				tr.appendChild(td6);

				td0.appendChild(document.createTextNode('Out of bundle costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Minutes'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode(contacts[i].getAttribute('mincost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Texts'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('textcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Pictures'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('picturecost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Voicemail'));
				td4.appendChild(spanText);
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('voicemailcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Freephone'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('freephonecost')));

				
				/*
				td2.appendChild(document.createTextNode('monthly cost'));
				td3.appendChild(document.createTextNode('cashback'));
				td4.appendChild(document.createTextNode('total cost'));
				td5.appendChild(document.createTextNode('retailer'));
				if (contacts[i].getAttribute('gift')) {
					td6.appendChild(document.createTextNode('free gift'));
				}*/
				//td7.appendChild(document.createTextNode(''));

				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().parent().parent().parent().prev("tr").removeClass("green-bottom");$(this).parent().parent().parent().parent().parent().hide();$(this).parent().parent().hide();$(this).parent().parent().parent().parent().parent().prev("tr").children("td").eq(1).children("a").eq(1).show();return false;');
				moreInfo.appendChild(document.createTextNode('hide info'));
				
				td6.appendChild(moreInfo);
				
				tablenew.appendChild(tr);















				
				
				
				
				
				//more info
				var tr = document.createElement('TR');
				tr.className='row-01 more-info';
				var td0 = document.createElement('TD');
				td0.colSpan="8";
				td0.setAttribute('style', 'background:none;border-bottom:0;padding:0;text-align:left;font-size:1.4em;color:#444;padding-top: 15px;');				
						
				td0.appendChild(document.createTextNode('You are viewing a deal for the ' +contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model') + ' on ' + contacts[i].getAttribute('network') + '.'));
				//
				td0.appendChild(document.createTextNode(' Before purchasing this phone we advise you to check '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', contacts[i].getAttribute('coverage'));
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('' + contacts[i].getAttribute('network') + '\'s coverage'));
				
				td0.appendChild(coverageLink);
				td0.appendChild(document.createTextNode('.'));
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('We also advise you to become familiar with ' + contacts[i].getAttribute('network') + '\'s '));
				
				fup = document.createElement('a');
				fup.setAttribute('href', contacts[i].getAttribute('fup'));
				fup.setAttribute('target', '_blank');
				fup.appendChild(document.createTextNode('fair use or traffic management policy'));

				td0.appendChild(fup);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				table.appendChild(tr);
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('Please research costs before taking your phone abroad and read Ofcom\'s guide on how to prevent '));
				
				billShock = document.createElement('a');
				billShock.setAttribute('href', 'http://consumers.ofcom.org.uk/phone/mobile-phones/problems-and-complaints/mobile-phone-bill-shock/');
				billShock.setAttribute('target', '_blank');
				billShock.appendChild(document.createTextNode('Bill Shock'));

				td0.appendChild(billShock);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				

				var tr = document.createElement('TR');
				tr.className='row-01 more-info white-bottom more-info-bottom';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none');
				td0.appendChild(document.createTextNode('Customer service:'));
				
				

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				td1.setAttribute('style', 'background:none;border-bottom:0;padding:0;padding-top:23px;text-align:left;font-size:1.4em;color:#444;padding-bottom: 35px;');
				td1.colSpan="8";
				if (contacts[i].getAttribute('complaints')>0) {		
					td1.appendChild(document.createTextNode('Ofcom reports that they have received '+contacts[i].getAttribute('complaints')+' complaints per 100,000 customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				} else {
					td1.appendChild(document.createTextNode('Ofcom reports that they have received a negligible amount of complaints for customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				}
				td1.appendChild(document.createElement('BR'));
				td1.appendChild(document.createTextNode('You can find more information via Ofcom\'s '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', 'http://media.ofcom.org.uk/news/2014/latest-phone-broadband-and-pay-tv-complaints-revealed-2/');
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('customer service and complaints handling'));
				
				td1.appendChild(coverageLink);
				
				td1.appendChild(document.createTextNode(' guide.'));
				
				//tr.appendChild(td0);
				tr.appendChild(td1);
				
				tablenew.appendChild(tr);


				var trnew = document.createElement('tr');
				var tdnew = document.createElement('td');
				tdnew.colSpan=8;
				tdnew.appendChild(tablenew);
				trnew.className='row-01'
				trnew.appendChild(tdnew);
				
				table.appendChild(trnew)



				//compare to simfree
				
				if (false && contacts[i].getAttribute('simfreehandsetprice')>0 && contacts[i].getAttribute('simonlycontractprice')>0 && contacts[i].getAttribute('simfreesaving')>0 && contacts[i].getAttribute('simfreesaving')>=50) {
					
					var tr = document.createElement('TR');
					tr.className='row-03';
					//tr.setAttribute('style', 'display:table-row');
					var td0 = document.createElement('TD');
					td0.colSpan="8";
					td0.setAttribute('style', 'background:none;padding:6px 27px;text-align:left;font-size:1.2em;color:#444;');				
							
					td0.appendChild(document.createTextNode('Alternatively you can buy the phone '));
					
					simfreelink = document.createElement('a');
					simfreelink.setAttribute('href', contacts[i].getAttribute('simfreelink'));
					simfreelink.setAttribute('target', '_blank');
					simfreelink.setAttribute('style', 'text-decoration:underline');
					simfreelink.appendChild(document.createTextNode('SIM Free'));
					
					td0.appendChild(simfreelink);

					td0.appendChild(document.createTextNode(' for £'+contacts[i].getAttribute('simfreehandsetprice')+' and grab a '));

					simonlylink = document.createElement('a');
					simonlylink.setAttribute('href', contacts[i].getAttribute('simonlylink'));
					simonlylink.setAttribute('target', '_blank');
					simonlylink.setAttribute('style', 'text-decoration:underline');
					simonlylink.appendChild(document.createTextNode('SIM Only contract'));
					
					td0.appendChild(simonlylink);
					
					td0.appendChild(document.createTextNode(' for £'+contacts[i].getAttribute('simonlycontractprice')+' a month for the equivalent of £'+contacts[i].getAttribute('simfreeaverage')+' a month (saving £'+contacts[i].getAttribute('simfreesaving')+' across the contract term).'));
					tr.appendChild(td0);
					table.appendChild(tr);
					
				}


				/*
				var tr = document.createElement('TR');
				tr.className='row-02';

				var td1 = document.createElement('TD');
				td1.className = 'cell-01';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-06';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				if (contacts[i].getAttribute('gift')) {
					tr.appendChild(td6);
				}
				//tr.appendChild(td7);

																
				td1.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));				
				td2.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));
				td3.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				td4.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				
				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				
				td5.appendChild(retailerImage);
				
				if (contacts[i].getAttribute('gift')) {
					giftImage = document.createElement('img');
					giftImage.setAttribute('src', '/'+contacts[i].getAttribute('gift').toLowerCase());
					giftImage.setAttribute('alt', contacts[i].getAttribute('gift'));
					
					td6.appendChild(giftImage);
				}	
									
				
				
				table.appendChild(tr);*/

			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateOffers');

		}
		p1 =1;
		removePleaseWait();
		
		


	}
	catch (e) { p1 =1;removePleaseWait();
	}


}


function updateSIMFREEOffers(pageselected){


oXMLSimfree.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();
p5 = 0;


	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 if (retailers_counter==document.searchform.retailername.length) retailers_counter='Any';
	 else retailers_counter=retailers_counter+" selected";
	 
	 $( "#retailersnumber2" ).html(retailers_counter);	 
	 

	   
  	var handset = "";
  	handset = encodeURIComponent(document.searchform.handset.options[document.searchform.handset.selectedIndex].value);


	 
	 
	 

	url = '/engine-simfree.php?retailers='+retailers+'&handset='+handset+'&page='+page;  	

			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLSimfree.open('GET', url, true);
		oXMLSimfree.onreadystatechange = processingSIMFREEFunction;
		oXMLSimfree.send('');
	}
	catch (e) {
		p5 =1;
		removePleaseWait();
	}
}





function processingSIMFREEFunction(){

	try {

		if(oXMLSimfree.readyState!=4) return;

		if(oXMLSimfree.status == 200) {

			var xmlDoc = oXMLSimfree.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLSimfree.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'tr-product'


				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '5';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
			
				var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';

				var td1 = document.createElement('TD');
				td1.className = 'cell-02';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02 cell-01';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';

				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
	
				

				link = contacts[i].getAttribute('affiliate_url');

				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);	
				
				if (contacts[i].getAttribute('clearance')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'clearance');
					clearanceText.setAttribute('className', 'clearance');
					clearanceText.appendChild(document.createTextNode('Clearance'));
					td0.appendChild(clearanceText);
				
				}
				
				td0.appendChild(mobileLink);
				

				
mobileName = document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model').replace(' - Clearance', ''));
				td1.appendChild(mobileName);
				
				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				
				retailerLink = document.createElement('a');
				retailerLink.setAttribute('href', link);
				retailerLink.setAttribute('target','_blank');
				retailerLink.appendChild(retailerImage);
				
				td2.appendChild(retailerLink);
				
				
				
				
				avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));
				td3.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td4.appendChild(getDeal);		
				
								
			
/*			
				var tr = document.createElement('TR');
				var td0a = document.createElement('TD');
				var td0 = document.createElement('TD');
				var td1 = document.createElement('TD');
				var td2 = document.createElement('TD');
				var td4 = document.createElement('TD');
				var td5 = document.createElement('TD');
				
				td2.className = 'center';
				td4.className = 'center cost emph';
				td5.className = 'center buy';
	

				tr.className = 'tr-product'


				table.appendChild(tr);
				tr.appendChild(td0a);				
				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);		
				tr.appendChild(td4);
				tr.appendChild(td5);
				
								
				td0a.setAttribute('style', 'height:98px');		
				td0.setAttribute('style', 'height:98px');				
				td1.setAttribute('style', 'height:98px');
				td2.setAttribute('style', 'height:98px');

				td4.setAttribute('style', 'height:98px');
				td5.setAttribute('style', 'height:98px');

				
				link = contacts[i].getAttribute('affiliate_url');
				

				td0.className = 'center';
				mobileimage = contacts[i].getAttribute('mobileimage');
				addLinkMobileImage(td0, mobileimage, link);
				
				addLink(td1, contacts[i].getAttribute('make')+' '+contacts[i].getAttribute('model'), link, i);
				addLinkImage(td2, contacts[i].getAttribute('retailername'), link);	
				addLinkPhoneCost(td4, '£' + contacts[i].getAttribute('phoneprice'), link, i);
				addLinkBuy(td5,link,i)

				var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(("\u00a0")));
				trgrey.appendChild(tdgrey1);
				trgrey.className='empty';
				table.appendChild(trgrey);

*/
			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateSIMFREEOffers');

		}
		p5 =1;
		removePleaseWait();


	}
	catch (e) { p5 =1;removePleaseWait();
	}


}


function updateSmartWatchOffers(pageselected){


oXMLSimfree.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();
p5 = 0;


	
	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 if (retailers_counter==document.searchform.retailername.length) retailers_counter='Any';
	 else retailers_counter=retailers_counter+" selected";
	 
	 $( "#retailersnumber2" ).html(retailers_counter);	 
	 

	   
  	var handset = "";
  	handset = encodeURIComponent(document.searchform.handset.options[document.searchform.handset.selectedIndex].value);



	url = '/engine-smartwatches.php?retailers='+retailers+'&handset='+handset+'&page='+page;  	

			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLSimfree.open('GET', url, true);
		oXMLSimfree.onreadystatechange = processingSmartWatchFunction;
		oXMLSimfree.send('');
	}
	catch (e) {
		p5 =1;
		removePleaseWait();
	}
}





function processingSmartWatchFunction(){

	try {

		if(oXMLSimfree.readyState!=4) return;

		if(oXMLSimfree.status == 200) {

			var xmlDoc = oXMLSimfree.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLSimfree.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'tr-product'


				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '5';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
			
				var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';

				var td1 = document.createElement('TD');
				td1.className = 'cell-02';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02 cell-01';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';

				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
	
				

				link = contacts[i].getAttribute('affiliate_url');

				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				
				
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);			
				if (contacts[i].getAttribute('clearance')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'clearance');
					clearanceText.setAttribute('className', 'clearance');
					clearanceText.appendChild(document.createTextNode('Clearance'));
					td0.appendChild(clearanceText);
				
				}				
								
				td0.appendChild(mobileLink);

				
mobileName = document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				td1.appendChild(mobileName);
				
				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				
				retailerLink = document.createElement('a');
				retailerLink.setAttribute('href', link);
				retailerLink.setAttribute('target','_blank');
				retailerLink.appendChild(retailerImage);
				
				td2.appendChild(retailerLink);
				
				
				
				
				avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('price')));
				td3.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td4.appendChild(getDeal);		
				
								

			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateSmartWatchOffers');

		}
		p5 =1;
		removePleaseWait();


	}
	catch (e) { p5 =1;removePleaseWait();
	}


}


function updatePAYGOffers(pageselected){


oXMLPayg.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();
p5 = 0;

	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
		      }

	   }
	   

	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 if (retailers_counter==document.searchform.retailername.length) retailers_counter='Any';
	 else retailers_counter=retailers_counter+" selected";
	 
	 $( "#retailersnumber2" ).html(retailers_counter);	 
	 
	   
  	var handset = "";
  	handset = encodeURIComponent(document.searchform.handset.options[document.searchform.handset.selectedIndex].value);



	url = '/engine-payg.php?networks='+networks+'&retailers='+retailers+'&handset='+handset+'&page='+page;  	

			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLPayg.open('GET', url, true);
		oXMLPayg.onreadystatechange = processingPAYGFunction;
		oXMLPayg.send('');
	}
	catch (e) {
		p5 =1;
		removePleaseWait();
	}
}





function processingPAYGFunction(){

	try {

		if(oXMLPayg.readyState!=4) return;

		if(oXMLPayg.status == 200) {

			var xmlDoc = oXMLPayg.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLPayg.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = i%2?'tr_on':'tr_off';
				tr.onmouseover = function(e) {
					this.className='tr_highlight';
					};
				if (i%2) {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_on';
					};
				}
				else {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_off';
					};
				}

				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '5';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
			
			
			
			var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-02';
				var td0a = document.createElement('TD');
				td0a.className = 'cell-02';
				var td1 = document.createElement('TD');
				td1.className = 'cell-01';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02';
				var td3 = document.createElement('TD');
				td3.className = 'cell-02';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';
			/*	var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';*/




				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				tr.appendChild(td0a);				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			/*s	tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);*/
				

				link = contacts[i].getAttribute('affiliate_url');

				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);			
				
				td0.appendChild(mobileLink);
				
				mobileName = document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				td0a.appendChild(mobileName);
				
				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				
				retailerLink = document.createElement('a');
				retailerLink.setAttribute('href', link);
				retailerLink.setAttribute('target','_blank');
				retailerLink.appendChild(retailerImage);
				
				td1.appendChild(retailerLink);
				
				
				
				

				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('network'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td2.appendChild(networkLink);
				
				
				avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));
				td3.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td4.appendChild(getDeal);		
				
				
				
				
				
				
				
				/*
				
			
				
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('texts')));
				
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
				
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				months.appendChild(document.createTextNode('months'));
				td5.appendChild(months);

				
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Handset'));		

				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('Monthly'));
				
				cashBack = document.createElement('span');
				cashBack.appendChild(document.createTextNode('Cashback'));

				td6.appendChild(phonePrice);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));
				
				td6.appendChild(monthlyCost);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(cashBack);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				*/


	
				
				
				//monthlyCost = document.createElement('span');
				//monthlyCost.appendChild(document.createTextNode('avg. monthly'));
			/*	avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));
				td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('get deal'));
				
				td7.appendChild(getDeal);*/

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			/*
				var tr = document.createElement('TR');
				var tda = document.createElement('TD');			
				var td0 = document.createElement('TD');				
				var td1 = document.createElement('TD');
				var td2 = document.createElement('TD');
				var td3 = document.createElement('TD');
				var td4 = document.createElement('TD');
				var td5 = document.createElement('TD');
				
				td2.className = 'center';
				td3.className = 'center';
				td4.className = 'center cost emph';
				td5.className = 'center buy';
	

				tr.className = 'tr-product';


				table.appendChild(tr);
				tr.appendChild(tda);
				tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);		
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				
				
				tda.setAttribute('style', 'height:98px');
				td0.setAttribute('style', 'height:98px');				
				td1.setAttribute('style', 'height:98px');
				td2.setAttribute('style', 'height:98px');
				td3.setAttribute('style', 'height:98px');
				td4.setAttribute('style', 'height:98px');
				td5.setAttribute('style', 'height:98px');


				
				link = contacts[i].getAttribute('affiliate_url');
				
				td0.className = 'center';
				mobileimage = contacts[i].getAttribute('mobileimage');
				addLinkMobileImage(td0, mobileimage, link);				
				
				addLink(td1, contacts[i].getAttribute('make')+' '+contacts[i].getAttribute('model'), link, i);
				addLinkImage(td2, contacts[i].getAttribute('retailername'), link);	
				addLinkImage(td3, contacts[i].getAttribute('network'), link);
				addLinkPhoneCost(td4, '£' + contacts[i].getAttribute('phoneprice'), link, i);
				
				addLinkBuy(td5,link,i)

				var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(("\u00a0")));
				trgrey.appendChild(tdgrey1);
				trgrey.className='empty';
				table.appendChild(trgrey);

*/
			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updatePAYGOffers');

		}
		p5 =1;
		removePleaseWait();


	}
	catch (e) { p5 =1;removePleaseWait();
	}


}







function updateSimCardOffers2(pageselected){


oXMLSimCard.abort();

page = (pageselected) ? pageselected : 1;

//addPleaseWait();
p4 = 0;



  	var minutes = "";
	minutes = document.searchform.minutes.options[document.searchform.minutes.selectedIndex].value;	

  	var texts = "";
	texts = document.searchform.texts.options[document.searchform.texts.selectedIndex].value;	

  	var data = "";
	data = document.searchform.data.options[document.searchform.data.selectedIndex].value;	
	
	var fourg = 0;
	if (document.searchform.fourg.checked) fourg=1;
	
	
	networks_counter=0;
	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
			networks_counter++;
		      }

	   }
	   
	 if (networks_counter==document.searchform.network.length) networks_counter='Any';
	 else networks_counter=networks_counter+" selected";
	 
	 $( "#networknumber2" ).html(networks_counter);

	 
	 
	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	   
	   var network = document.searchform.networkpick.options[document.searchform.networkpick.selectedIndex].value;
	   

	url = '/paygtariffs.php?minutes='+minutes+'&texts='+texts+'&data='+data+'&networks='+networks+'&retailers='+retailers+'&4g='+fourg+'&network='+network+'&page='+page;  	


			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLSimCard.open('GET', url, true);
		oXMLSimCard.onreadystatechange = processingSimCardFunction2;
		oXMLSimCard.send('');
	}
	catch (e) {
		p4 =1;
		//removePleaseWait();
	}
}






function processingSimCardFunction2(){

	try {

		if(oXMLSimCard.readyState!=4) return;

		if(oXMLSimCard.status == 200) {

			var xmlDoc = oXMLSimCard.responseXML;

			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLSimCard.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }

			
			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className ='tr-product';
							
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '11';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
			
			
					var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';
				
				
				donutmins=10;
				if (contacts[i].getAttribute('inclmins')<=10000) donutmins=9;
				if (contacts[i].getAttribute('inclmins')<=5000) donutmins=8;
				if (contacts[i].getAttribute('inclmins')<=3000) donutmins=7;
				if (contacts[i].getAttribute('inclmins')<=2000) donutmins=6;
				if (contacts[i].getAttribute('inclmins')<=1200) donutmins=5;
				if (contacts[i].getAttribute('inclmins')<=1000) donutmins=4;
				if (contacts[i].getAttribute('inclmins')<800) donutmins=3;
				if (contacts[i].getAttribute('inclmins')<600) donutmins=2;
				if (contacts[i].getAttribute('inclmins')<200) donutmins=1;
				if (contacts[i].getAttribute('inclmins')<100) donutmins=0;

				donuttexts=10;
				if (contacts[i].getAttribute('incltexts')<=10000) donuttexts=9;
				if (contacts[i].getAttribute('incltexts')<=5000) donuttexts=8;
				if (contacts[i].getAttribute('incltexts')<=3000) donuttexts=7;
				if (contacts[i].getAttribute('incltexts')<=2000) donuttexts=6;
				if (contacts[i].getAttribute('incltexts')<=1200) donuttexts=5;
				if (contacts[i].getAttribute('incltexts')<=1000) donuttexts=4;
				if (contacts[i].getAttribute('incltexts')<800) donuttexts=3;
				if (contacts[i].getAttribute('incltexts')<600) donuttexts=2;
				if (contacts[i].getAttribute('incltexts')<200) donuttexts=1;
				if (contacts[i].getAttribute('incltexts')<100) donuttexts=0;


				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;

				var td1 = document.createElement('TD');
				td1.className = 'cell-01 hidemobile';
				var td2 = document.createElement('TD');
				
				if (contacts[i].getAttribute('minstopay')>0) td2.className = 'cell-05';
				else td2.className = 'cell-05 donut donut'+donutmins;
				
				var td3 = document.createElement('TD');
				
				if (contacts[i].getAttribute('textstopay')>0) td3.className = 'cell-05';
				else td3.className = 'cell-05 donut donut'+donuttexts;
				
				var td4 = document.createElement('TD');
				
				if (contacts[i].getAttribute('datatopay')>0) td4.className = 'cell-05';
				else td4.className = 'cell-05 donut donut'+donutdata;
				
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-01';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				//tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('url');


				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailer').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailer'));
				
				retailerLink = document.createElement('a');
				retailerLink.setAttribute('href', link);
				retailerLink.setAttribute('target','_blank');
				retailerLink.appendChild(retailerImage);
				
				//td0.appendChild(retailerLink);

				viaText = document.createElement('span');
				viaText.appendChild(document.createTextNode(contacts[i].getAttribute('tariff')));
				td0.appendChild(viaText);		

				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('retailer').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('retailer'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				viaText2 = document.createElement('span');
				viaText2.appendChild(document.createTextNode('\u00A0'));
				
				td1.appendChild(networkLink);
				td1.appendChild(viaText2);
				
				bundle = document.createElement('span');
				bundle.appendChild(document.createTextNode('In Bundle'));
				td2.appendChild(bundle);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('inclmins')));
				
				if (contacts[i].getAttribute('minstopay')>0) {
				bundle = document.createElement('span');
				bundle.setAttribute('style', 'color:#d93232');
				bundle.appendChild(document.createTextNode('Out of Bundle'));
				bundletext = document.createElement('font');
				bundletext.appendChild(document.createTextNode(contacts[i].getAttribute('minstopay')));
				bundletext.setAttribute('style', 'color:#d93232');					
				
				td2.appendChild(bundle);
				td2.appendChild(bundletext);	
				}
				
				networkspan = document.createElement('span');
				networkspan.className='mobile-txt';
				networkImage2 = document.createElement('img');
				networkImage2.setAttribute('src', '/'+contacts[i].getAttribute('retailer').toLowerCase()+'.jpg');
				networkImage2.setAttribute('alt', contacts[i].getAttribute('retailer'));
				
				networkspan.appendChild(networkImage2);
				
				td2.appendChild(networkspan);

				
				bundle = document.createElement('span');
				bundle.appendChild(document.createTextNode('In Bundle'));
				td3.appendChild(bundle);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('incltexts')));
				
				if (contacts[i].getAttribute('textstopay')>0) {
				bundle = document.createElement('span');
				bundle.setAttribute('style', 'color:#d93232');				
				bundle.appendChild(document.createTextNode('Out of Bundle'));
				bundletext = document.createElement('font');
				bundletext.appendChild(document.createTextNode(contacts[i].getAttribute('textstopay')));
				bundletext.setAttribute('style', 'color:#d93232');	
				
				td3.appendChild(bundle);
				td3.appendChild(bundletext);

				}
				

				bundle = document.createElement('span');
				bundle.appendChild(document.createTextNode('In Bundle'));
				td4.appendChild(bundle);
				
				

				
				if (contacts[i].getAttribute('incldata')!="0MB" && contacts[i].getAttribute('incldata')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('title', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(contacts[i].getAttribute('incldata')));
					td4.appendChild(datalink);
				}
				else td4.appendChild(document.createTextNode(contacts[i].getAttribute('incldata')));
				
				
				if (contacts[i].getAttribute('datatopay')>0) {
				bundle = document.createElement('span');
				bundle.setAttribute('style', 'color:#d93232');				
				bundle.appendChild(document.createTextNode('Out of Bundle'));
				td4.appendChild(bundle);
				bundletext = document.createElement('font');
				
				bundletext.appendChild(document.createTextNode(contacts[i].getAttribute('datatopaymb')));
				bundletext.setAttribute('style', 'color:#d93232');	
				td4.appendChild(bundletext);	
				}
								
				fourg = document.createElement('span');
				fourg.setAttribute('class', 'fourg fourgnew');
				fourg.setAttribute('className', 'fourg fourgnew');
				fourg.appendChild(document.createTextNode('4G'));
				if(contacts[i].getAttribute('fourg')==1) td4.appendChild(fourg);
						
				bundle = document.createElement('span');
				bundle.appendChild(document.createTextNode('Bundle Cost'));
				
				credit = document.createElement('span');
				credit.setAttribute('style', 'color:#d93232');
				credit.appendChild(document.createTextNode('Usage Costs'));
				
				freecredit = document.createElement('span');
				freecredit.setAttribute('style', 'color:#74cb45');
				freecredit.appendChild(document.createTextNode('Free Credit'));
				
				if (contacts[i].getAttribute('bundlecost')>0) {
					td5.appendChild(bundle);
					td5.appendChild(document.createTextNode('£'+contacts[i].getAttribute('bundlecost')));
				}
					
				if (contacts[i].getAttribute('credit')>0) {
					td5.appendChild(freecredit);
					bundletext = document.createElement('font');
					bundletext.setAttribute('style', 'color:#74cb45');
					bundletext.appendChild(document.createTextNode('£'+contacts[i].getAttribute('credit')));
					td5.appendChild(bundletext);
				}
							
				if (contacts[i].getAttribute('extra')>0) {
				
					td5.appendChild(credit);
					bundletext = document.createElement('font');
					bundletext.setAttribute('style', 'color:#d93232');	
					bundletext.appendChild(document.createTextNode('£'+contacts[i].getAttribute('extra')));
					
					td5.appendChild(bundletext)
					
				}


				
				monthPrice = document.createElement('strong');
				monthPrice.appendChild(document.createTextNode('£'+contacts[i].getAttribute('price')))
				
				td6.appendChild(monthPrice);

	

				
				//monthlyCost = document.createElement('strong');
				//monthlyCost.appendChild(document.createTextNode(contacts[i].getAttribute('simcost')));
				//avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost=document.createTextNode(contacts[i].getAttribute('simcost'));
				td7.appendChild(avgMonthlyCost);
				if (contacts[i].getAttribute('simcostfree')) {
				br = document.createElement('br');
				td7.appendChild(br);
				b = document.createElement('b');
				freebie=document.createTextNode(contacts[i].getAttribute('simcostfree'));
				b.appendChild(freebie);
				td7.appendChild(b);
					
					
				}
				
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td7.appendChild(getDeal);
				
				if (notTheSame(contacts[i].getAttribute('network'), contacts[i].getAttribute('retailer'))) {
					viaText = document.createElement('span');
					viaText.setAttribute('style', 'margin-top:0');
					viaText.appendChild(document.createTextNode('using the '+contacts[i].getAttribute('network')+' network'))
					td7.appendChild(viaText);
				}
				

				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().addClass("green-bottom");$(this).parent().parent().next("tr").show();$(this).parent().parent().next("tr").children().children().children().show();$(this).hide();return false;');
				moreInfo.appendChild(document.createTextNode('more info'));
				
				td1.appendChild(moreInfo);
			
			
			
			
			
			
			
			
			
				var tablenew = document.createElement('table');
				tablenew.setAttribute('style', 'font-size:0.41em;width: 100%;');
				
				

				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				
				
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');
				td0.appendChild(document.createTextNode('Data limits:'));
				
				

				var td1 = document.createElement('TD');
				
				td1.colSpan="7";
				
				var dataallowance = document.createElement('SPAN');
				dataallowance.innerHTML = contacts[i].childNodes[0].nodeValue;
				
				td1.appendChild(dataallowance);
				
				if (contacts[i].getAttribute('data')!='Ultd') {
					tr.appendChild(td0);
					tr.appendChild(td1);
				}
				
				tablenew.appendChild(tr);



				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td5a = document.createElement('TD');
				td5a.className = 'cell-05';
				td5a.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				td6.colSpan="1";
				td6.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td7 = document.createElement('TH');
				td7.className = 'cell-07';
				
				tr.appendChild(td0);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td5a);
				tr.appendChild(td6);

				td0.appendChild(document.createTextNode('Out of bundle costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Minutes'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode(contacts[i].getAttribute('mincost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Texts'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('textcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Pictures'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('picturecost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Voicemail'));
				td4.appendChild(spanText);
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('voicemailcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Freephone'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('freephonecost')));

				
				/*
				td2.appendChild(document.createTextNode('monthly cost'));
				td3.appendChild(document.createTextNode('cashback'));
				td4.appendChild(document.createTextNode('total cost'));
				td5.appendChild(document.createTextNode('retailer'));
				if (contacts[i].getAttribute('gift')) {
					td6.appendChild(document.createTextNode('free gift'));
				}*/
				//td7.appendChild(document.createTextNode(''));

				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().parent().parent().parent().prev("tr").removeClass("green-bottom");$(this).parent().parent().parent().parent().parent().hide();$(this).parent().parent().hide();$(this).parent().parent().parent().parent().parent().prev("tr").children("td").eq(0).children("a").eq(1).show();return false;');
				moreInfo.appendChild(document.createTextNode('hide info'));
				
				td6.appendChild(moreInfo);
				
				tablenew.appendChild(tr);


				//more info
				var tr = document.createElement('TR');
				tr.className='row-01 more-info';
				var td0 = document.createElement('TD');
				td0.colSpan="8";
				td0.setAttribute('style', 'background:none;border-bottom:0;padding:0;text-align:left;font-size:1.4em;color:#444;padding-top: 15px;');				

				td0.appendChild(document.createTextNode(' Before purchasing this SIM we advise you to check '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', contacts[i].getAttribute('coverage'));
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('' + contacts[i].getAttribute('network') + '\'s coverage'));
				
				td0.appendChild(coverageLink);
				td0.appendChild(document.createTextNode('.'));
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('We also advise you to become familiar with ' + contacts[i].getAttribute('retailer') + '\'s '));
				
				fup = document.createElement('a');
				fup.setAttribute('href', contacts[i].getAttribute('fup'));
				fup.setAttribute('target', '_blank');
				fup.appendChild(document.createTextNode('fair use or traffic management policy'));

				td0.appendChild(fup);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('Please research costs before taking your phone abroad and read Ofcom\'s guide on how to prevent '));
				
				billShock = document.createElement('a');
				billShock.setAttribute('href', 'http://consumers.ofcom.org.uk/phone/mobile-phones/problems-and-complaints/mobile-phone-bill-shock/');
				billShock.setAttribute('target', '_blank');
				billShock.appendChild(document.createTextNode('Bill Shock'));

				td0.appendChild(billShock);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				
				
				var trnew = document.createElement('tr');
				var tdnew = document.createElement('td');
				tdnew.colSpan=8;
				tdnew.appendChild(tablenew);
				trnew.className='row-01'
				trnew.appendChild(tdnew);
				
				table.appendChild(trnew)
						
			
			
			
			
			
			/*
			
			
			
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');
				var td2 = document.createElement('TD');
				var td2a = document.createElement('TD');
				var td3 = document.createElement('TD');
				var td4 = document.createElement('TD');
				var td5 = document.createElement('TD');
				var td6 = document.createElement('TD');				
				var td7 = document.createElement('TD');
				var td8 = document.createElement('TD');
				var td9 = document.createElement('TD');
				var td10 = document.createElement('TD');			
				

				tr.className = 'tr-product';


				table.appendChild(tr);

				tr.appendChild(td1);
				tr.appendChild(td2);		
				//tr.appendChild(td2a);
				tr.appendChild(td3);
				//tr.appendChild(td4);
				//tr.appendChild(td5);
				tr.appendChild(td6);
				//tr.appendChild(td7);
				tr.appendChild(td8);
				tr.appendChild(td9);
				tr.appendChild(td10);
				
				td1.className = 'center';
				td2.className = 'center';
				td3.className = 'center';
				td4.className = 'center';
				td5.className = 'center';
				td6.className = 'center';
				td7.className = 'center';
				td8.className = 'center cost emph';
				td9.className = 'center';
				td10.className = 'center buy';
			

				
				td1.setAttribute('style', 'height:98px');
				td2.setAttribute('style', 'height:98px');
				td3.setAttribute('style', 'height:98px');
				td4.setAttribute('style', 'height:98px');
				td5.setAttribute('style', 'height:98px');
				td6.setAttribute('style', 'height:98px');
				td7.setAttribute('style', 'height:98px');
	
			
				link = contacts[i].getAttribute('url');
				addLinkImage(td1, contacts[i].getAttribute('retailer'), link);	
				//addLinkImage(td2, contacts[i].getAttribute('network'), link);
				addLinkImageText(td2, contacts[i].getAttribute('network'),  link, contacts[i].getAttribute('tariff'));
				//addLink(td2a, contacts[i].getAttribute('tariff'), link);
				
				
				addLinkMinsTextsData(td3, contacts[i].getAttribute('inclmins'), 'peak', contacts[i].getAttribute('incltexts'), contacts[i].getAttribute('incldata'), link, i);


				addLinkBundleCredit(td6, contacts[i].getAttribute('bundlecost'),contacts[i].getAttribute('credit'), link, i);
				//addLink(td7, '£' + contacts[i].getAttribute('credit'), link, i);
				addLinkMonthlyCost(td8, '£' + contacts[i].getAttribute('price'), link, i);
				addLinkSimCost(td9, contacts[i].getAttribute('simcost'), link, i);
				addLinkBuySimCard(td10,link,i)

				var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(("\u00a0")));
				trgrey.appendChild(tdgrey1);
				trgrey.className='empty';
				table.appendChild(trgrey);
*/

			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateSimCardOffers2');
			 

	 

		}
		p4 =1;

	}
	catch (e) { p4 =1;
	}


}



function pageSimCardNumbers(current_page, max_pages) {

	var pages = "";
	
	if (parseInt(max_pages)>1) {

	if (parseInt(current_page)>1) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimCardOffers2(' + (parseInt(current_page) - 1) + ');">&lt; Prev</a> ';
		

	for (var i=1; i<=max_pages; i++) {
	
		if (current_page == i) pages = pages + "";
		else pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimCardOffers2(' + i + ');">';

		pages = pages + i;

		if (current_page==i) pages = pages + "";
		else pages = pages + '</a> ';


		pages = pages + " ";

	
	}

	if (parseInt(current_page)<parseInt(max_pages)) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimCardOffers2(' + (parseInt(current_page) + 1) + ');">Next &gt;</a>';

	}
	var pagenumber = document.getElementById('pageSimCardNumbers');
	pagenumber.innerHTML = pages;

	var pagenumber = document.getElementById('pageSimCardNumbers1');
	pagenumber.innerHTML = pages;
}



				
				
				
				
				
				
				
function addPleaseWait() {

try {
	var table = document.getElementById('contactListTable');

	for(var i=table.rows.length; i>1; i--){
		table.deleteRow(1);
	}
	
	var tr = document.createElement('TR');
	var td1 = document.createElement('TD');	

	td1.colSpan = '10';
	td1.className = 'center loadingtext';

	td1.appendChild(document.createTextNode('We\'re just trying to find the best deal for you. This may take a little while. Please wait.'));
	
	tr.className = 'tr-product';
		
	table.appendChild(tr);

	tr.appendChild(td1);	

		
	}
	catch (e) {}
	
try {	
	var table = document.getElementById('contactListTabletariff');

	for(var i=table.rows.length; i>1; i--){
		table.deleteRow(1);
	}
	
	var tr = document.createElement('TR');
	var td1 = document.createElement('TD');	

	td1.colSpan = '10';
	td1.className = 'center loadingtext';

	td1.appendChild(document.createTextNode('We\'re just trying to find the best deal for you. This may take a little while. Please wait.'));
	
	tr.className = 'tr_off';
		
	table.appendChild(tr);

	tr.appendChild(td1);	

	
	}
	catch (e) {}
}

function removePleaseWait() {

}
				
				
				
				
				
				
				

function getObjInnerText (obj) { 
return (obj.text) ? obj.text 
: (obj.textContent) ? obj.textContent 
: ""; 
} 

function addItem(td, value, link) {
try {
		if (value!=null) td.appendChild(document.createTextNode(value));
			}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLink(td, name, url, clas, name2) {
try {

    pickLink=document.createElement('a');
    pickText=document.createTextNode(name);

    pickLink.appendChild(pickText);

    if (name2) {
	pickText2=document.createTextNode(' ' + name2);
	pickLink.appendChild(pickText2);
    }

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLink2(td, name, url, clas, name2) {
try {

    pickLink=document.createElement('a');
    pickText=document.createTextNode(name);

		
	pickText3=document.createElement('span');
	pickText3.setAttribute('class', 'average-cost');
	pickText3.setAttribute('className', 'average-cost');
	pickText3.appendChild(document.createTextNode('Average cost:'));
	pickLink.appendChild(pickText3);
	
	
    pickLink.appendChild(pickText);

    if (name2) {

	pickText2=document.createTextNode(' ' + name2);
	pickLink.appendChild(pickText2);
    }

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkMonthlyCost(td, name, url, clas, name2) {
try {

    pickLink=document.createElement('a');
    pickText=document.createTextNode(name);

		
	pickText3=document.createElement('span');
	pickText3.setAttribute('class', 'average-cost');
	pickText3.setAttribute('className', 'average-cost');
	pickText3.setAttribute('style', 'margin-bottom:0');
	
	pickText3.appendChild(document.createTextNode('Monthly cost:'));
	pickLink.appendChild(pickText3);
	
	
    pickLink.appendChild(pickText);

    if (name2) {

	pickText2=document.createTextNode(' ' + name2);
	pickLink.appendChild(pickText2);
    }

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);


    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkPhoneCost(td, name, url, clas, name2) {
try {

    pickLink=document.createElement('a');
    pickText=document.createTextNode(name);

		
	pickText3=document.createElement('span');
	pickText3.setAttribute('class', 'average-cost');
	pickText3.setAttribute('className', 'average-cost');
	
	pickText3.appendChild(document.createTextNode('Phone cost:'));
	pickLink.appendChild(pickText3);
	
	
    pickLink.appendChild(pickText);

    if (name2) {

	pickText2=document.createTextNode(' ' + name2);
	pickLink.appendChild(pickText2);
    }

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);


    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkSimCost(td, name, url, clas, name2) {
try {

    pickLink=document.createElement('a');
    pickText=document.createTextNode(name);

		
	pickText3=document.createElement('span');
	pickText3.setAttribute('class', 'average-cost');
	pickText3.setAttribute('className', 'average-cost');
	pickText3.setAttribute('style', 'margin-bottom:0');	
	pickText3.appendChild(document.createTextNode('Sim cost:'));
	pickLink.appendChild(pickText3);
	
	
    pickLink.appendChild(pickText);

    if (name2) {

	pickText2=document.createTextNode(' ' + name2);
	pickLink.appendChild(pickText2);
    }

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);


    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}



function addLinkMinsTexts(td, mins, minstype, texts, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    amins.setAttribute('style', 'color:#c70000');
    amins.appendChild(document.createTextNode(mins + ' mins'));

    aminstype=document.createElement('span');
    aminstype.setAttribute('style', 'color:#c70000');
    aminstype.appendChild(document.createTextNode('' + minstype + ''));

    atexts=document.createElement('span');
    atexts.setAttribute('style', 'color:#095997');
    atexts.appendChild(document.createTextNode(texts + ' texts' ));

    pickLink.appendChild(amins);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(aminstype);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);
    pickLink.appendChild(document.createElement('br'));

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


 function rzCC(s){
   // thanks http://www.ruzee.com/blog/2006/07/\
   // retrieving-css-styles-via-javascript/
   for(var exp=/-([a-z])/; 
       exp.test(s); 
       s=s.replace(exp,RegExp.$1.toUpperCase()));
   return s;
 }

 function _setStyle(element, declaration) {
   if (declaration.charAt(declaration.length-1)==';')
     declaration = declaration.slice(0, -1);
   var k, v;
   var splitted = declaration.split(';');
   for (var i=0, len=splitted.length; i<len; i++) {
      k = rzCC(splitted[i].split(':')[0]);
      v = splitted[i].split(':')[1];
      eval("element.style."+k+"='"+v+"'");

   }
 }



function addLinkMinsTextsData(td, mins, minstype, texts, data, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    _setStyle(amins, 'color:#c70000');
    amins.appendChild(document.createTextNode(mins + ' mins'));

    aminstype=document.createElement('span');
    _setStyle(aminstype, 'color:#c70000');
    aminstype.appendChild(document.createTextNode('' + minstype + ''));

    atexts=document.createElement('span');
    _setStyle(atexts, 'color:#095997');
    atexts.appendChild(document.createTextNode(texts + ' texts' ));

    adata=document.createElement('span');
    _setStyle(adata, 'color:#30bc4a');
	if (data>0) adata.appendChild(document.createTextNode(data + ' data' ));
	else adata.appendChild(document.createTextNode(data + ' data' ));

    pickLink.appendChild(amins);
   // pickLink.appendChild(document.createElement('br'));
    //pickLink.appendChild(aminstype);
  ///  pickLink.appendChild(document.createElement('br'));
  ///  pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);
   /// pickLink.appendChild(document.createElement('br'));
if (data!='0MB') {
   /// pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(adata);
  ///  pickLink.appendChild(document.createElement('br'));
}

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkPhoneMonthlyCashback(td, price, monthly, cashback, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    //_setStyle(amins, 'color:#c70000');
    amins.appendChild(document.createTextNode('Handset: £'+price));



    atexts=document.createElement('span');
    //_setStyle(atexts, 'color:#095997');
    atexts.appendChild(document.createTextNode('Monthly: £'+monthly));
	
    adata=document.createElement('span');
    //_setStyle(adata, 'color:#30bc4a');
    adata.appendChild(document.createTextNode('Cashback: £'+cashback));

    pickLink.appendChild(amins);

  ///  pickLink.appendChild(document.createElement('br'));
  ///  pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);
  ///  pickLink.appendChild(document.createElement('br'));

	if (document.searchform.cashback.options[document.searchform.cashback.selectedIndex].value==1) {
	///	pickLink.appendChild(document.createElement('br'));

		pickLink.appendChild(adata);
	///	pickLink.appendChild(document.createElement('br'));
	}


    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}



function addLinkBundleCredit(td, price, monthly, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    //_setStyle(amins, 'color:#c70000');
    amins.appendChild(document.createTextNode('Bundle: £'+price));



    atexts=document.createElement('span');
    //_setStyle(atexts, 'color:#095997');
    atexts.appendChild(document.createTextNode('Credit: £'+monthly));
	
    pickLink.appendChild(amins);

  ///  pickLink.appendChild(document.createElement('br'));
  ///  pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);
  ///  pickLink.appendChild(document.createElement('br'));

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}




function addSpace(td) {

pickLink=document.createElement('br');
td.appendChild(pickLink)
}

function addLinkBold(td, name1, name2, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLink.appendChild(pickText1);
    pickLink.appendChild(pickText2);

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);
	pickLink.setAttribute('className',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkBoldImage(td, name1, name2, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(pickText2);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImg);	

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkBoldImage2(td, name1, name2, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);
    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImg);	
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickText2);

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkBoldGiftImage(td, name1, name2, giftimage, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLinkImgFree=document.createElement('img');

    pickLinkImgGift=document.createElement('img');
    pickLinkImgGift.setAttribute('src','/'+giftimage.toLowerCase());
    pickLinkImgGift.setAttribute('alt', name);


    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(pickText2);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImg);	
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImgGift);	

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkBoldGiftImage2(td, name1, name2, giftimage, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLinkImgFree=document.createElement('img');
    pickLinkImgFree.setAttribute('src','/free.png');
    pickLinkImgFree.setAttribute('alt', name);

    pickLinkImgGift=document.createElement('img');
    pickLinkImgGift.setAttribute('src','/'+giftimage.toLowerCase());
    pickLinkImgGift.setAttribute('alt', name);


    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImg);	
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickText2);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImgGift);	


    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkBoldImageNoBreak(td, name1, name2, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickText2);

    pickLink.appendChild(pickLinkImg);	

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}

function addLinkBoldImageBreak(td, name1, name2, image, url, clas) {
try {

    pickLink=document.createElement('a');

    pickText1=document.createTextNode(name1);
    pickText2=document.createTextNode(name2);

    pickLinkImg=document.createElement('img');
	


    pickLinkImg.setAttribute('src','/'+image.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLink.appendChild(pickText1);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickText2);
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImg);	

    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}

function addLinkMobileImage(td, name, url) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src', name);
    pickLinkImg.setAttribute('alt', '');

    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    pickLink.appendChild(pickLinkImg);	
	


    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkMobileText(td, name, url) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src', name);
    pickLinkImg.setAttribute('alt', '');

    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

    pickLink.appendChild(pickLinkImg);	
	


    td.appendChild(document)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}


function addLinkImage(td, name, url) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+name.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);

    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');
    pickLink.appendChild(pickLinkImg);	
	


    td.appendChild(pickLink)
}
		catch (e) {
alert(e);
			td.appendChild(document.createTextNode(''));
		}
}


function addImage(td, name, url) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+name.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);

    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');
    pickLink.appendChild(pickLinkImg);	
	


    td.appendChild(pickLinkImg)
}
		catch (e) {
alert(e);
			td.appendChild(document.createTextNode(''));
		}
}




function addLinkImageText(td, name, url, text) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/'+name.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);

    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');
    pickLink.appendChild(pickLinkImg);	

    textbreak=document.createElement('br');
    pickLink.appendChild(textbreak);

	    textbreak=document.createElement('br');
    pickLink.appendChild(textbreak);
	
    textdata=document.createTextNode(text);
    pickLink.appendChild(textdata);



    td.appendChild(pickLink)
}
		catch (e) {
alert(e);
			td.appendChild(document.createTextNode(''));
		}
}

function addLinkBuy(D,A,C){try
{


pickLink=document.createElement('a');
pickLink.setAttribute('href',A);
pickLink.setAttribute('target',"_blank");

textdata=document.createTextNode('grab\u00a0deal');
pickLink.appendChild(textdata);

/*pickLinkImg=document.createElement("img");
pickLinkImg.setAttribute("src","/link.gif");
pickLinkImg.setAttribute("alt",name);
pickLink=document.createElement("a");
pickLink.setAttribute("href",A);
pickLink.setAttribute("target","_blank");
pickLink.appendChild(pickLinkImg);*/


D.appendChild(pickLink);
}
catch(B){alert(B);D.appendChild(document.createTextNode(""))
}}				


function addLinkBuySimCard(D,A,C){try
{


pickLink=document.createElement('a');
pickLink.setAttribute('href',A);
pickLink.setAttribute('target',"_blank");

textdata=document.createTextNode('Grab SIM');
pickLink.appendChild(textdata);

/*pickLinkImg=document.createElement("img");
pickLinkImg.setAttribute("src","/link.gif");
pickLinkImg.setAttribute("alt",name);
pickLink=document.createElement("a");
pickLink.setAttribute("href",A);
pickLink.setAttribute("target","_blank");
pickLink.appendChild(pickLinkImg);*/


D.appendChild(pickLink);
}
catch(B){alert(B);D.appendChild(document.createTextNode(""))
}}				



function addLinkBuy2(D,B,A,C){try
{


pickLink=document.createElement('a');
pickLink.setAttribute('href',A);
pickLink.setAttribute('target',"_blank");

textdata=document.createTextNode('grab\u00a0deal');
pickLink.appendChild(textdata);

number=document.createTextNode(B);
number2=document.createElement('span');
number2.setAttribute('style', 'color:#1C6580;padding:7px 0 0;');
number2.setAttribute('class', 'telephonenumber');
number2.appendChild(number);

/*pickLinkImg=document.createElement("img");
pickLinkImg.setAttribute("src","/link.gif");
pickLinkImg.setAttribute("alt",name);
pickLink=document.createElement("a");
pickLink.setAttribute("href",A);
pickLink.setAttribute("target","_blank");
pickLink.appendChild(pickLinkImg);*/

D.appendChild(pickLink);

if (B) {
	D.appendChild(number2);
}

}
catch(B){alert(B);D.appendChild(document.createTextNode(""))
}}				



function pageNumbers(current_page, max_pages, functionname) {

	var pages = "";
	
	if (parseInt(max_pages)>1) {

	if (parseInt(current_page)>1) pages = pages + '<li class="prev"><a href="#searchform" class="pages previouspage" onClick="' + functionname + '(' + (parseInt(current_page) - 1) + ');"><span class="txt">Previous</span><span class="mobile">back</span></a></li>';

	
	max_pages_show = 10;
	if ((max_pages-current_page)<10) max_pages_show = (max_pages-current_page);
	
	offset = 0;
	if (current_page>3) offset=3;
	else offset=current_page-1;
	
	offset2 = offset;
	if (max_pages-current_page-offset2<4) offset2 = 0;
	
	
	
	for (var i=current_page-+offset; i<=(+max_pages_show + +current_page - +offset2); i++) {
	
		if (current_page == i) pages = pages + '<li class="active"><span>';
		else pages = pages + '<li><a href="#searchform" class="pages" onClick="' + functionname + '(' + i + ');">';

		pages = pages + i;

		if (current_page == i) pages = pages + '</span></li>';
		else pages = pages + '</a></li>';


		pages = pages + " ";

	
	}

	if (parseInt(current_page)<parseInt(max_pages)) pages = pages + '<li class="next"><a href="#searchform" class="pages nextpage" onClick="' + functionname + '(' + (parseInt(current_page) + 1) + ');">Next</a></li>';

	}
	var pagenumber = document.getElementById('pageNumbers');
	pagenumber.innerHTML = pages;

	var pagenumber = document.getElementById('pageNumbers1');
	pagenumber.innerHTML = pages;
}










function updateSimOffers(pageselected){


oXMLSimCard.abort();

page = (pageselected) ? pageselected : 1;

//addPleaseWait();
p4 = 0;

networks_counter=0;
	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
			networks_counter++;
		      }

	   }
	   
	 if (networks_counter==document.searchform.network.length) networks_counter='Any';
	 else networks_counter=networks_counter+" selected";
	 
	 $( "#networknumber2" ).html(networks_counter);



	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 
	contract_counter=0;
	   
	var lengthofcontract = "";
	if (document.searchform.contractlength.value && document.searchform.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength.value + "',";
	   for (var i=0; i < document.searchform.contractlength.length; i++)
		 {
		   if (document.searchform.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength[i].value + "',";
			contract_counter++;
			  }

  	 }

	 
	 if (contract_counter==document.searchform.contractlength.length) contract_counter='Any';
	 else contract_counter=contract_counter+" selected";


  	var minutes = "";
	minutes = document.searchform.minutes.options[document.searchform.minutes.selectedIndex].value;	

  	var texts = "";
	texts = document.searchform.texts.options[document.searchform.texts.selectedIndex].value;	

  	var data = "";
	data = document.searchform.data.options[document.searchform.data.selectedIndex].value;	

	var cashback = "";
	cashback = document.searchform.cashback.options[document.searchform.cashback.selectedIndex].value;
	
	var fourg = 0;
	if (document.searchform.fourg.checked) fourg=1;
	
	var virgincustomers = 0;
	if (document.searchform.virgincustomer.checked) virgincustomers=1;
	
	var btbroadbandcustomers = 0;
	if (document.searchform.btcustomer.checked) btbroadbandcustomers=1;	
	
 	var talktalkcustomers = 0;
	if (document.searchform.talktalkcustomer.checked) talktalkcustomers=1; 
	
 	var eecustomers = 0;
	if (document.searchform.eecustomer.checked) eecustomers=1; 
	
	var network = document.searchform.networkpick.options[document.searchform.networkpick.selectedIndex].value;
		
	url = '/simonlytariffs.php?minutes='+minutes+'&texts='+texts+'&data='+data+'&networks='+networks+'&retailers='+retailers+'&length='+lengthofcontract+'&cashback='+cashback+'&btbroadbandcustomers='+btbroadbandcustomers+'&virgincustomers='+virgincustomers+'&talktalkcustomers='+talktalkcustomers+'&eecustomers='+eecustomers+'&4g='+fourg+'&network='+network+'&page='+page;  	


			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLSimCard.open('GET', url, true);
		oXMLSimCard.onreadystatechange = processingSimOffers;
		oXMLSimCard.send('');
	}
	catch (e) {
		p4 =1;
		//removePleaseWait();
	}
}

function addLinkImageGift(td, name, giftimage, url) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','https://images.mobilephonechecker.co.uk/'+name.toLowerCase()+'.jpg');
    pickLinkImg.setAttribute('alt', name);


    pickLinkImgGift=document.createElement('img');
    pickLinkImgGift.setAttribute('src','https://images.mobilephonechecker.co.uk/'+giftimage.toLowerCase());
    pickLinkImgGift.setAttribute('alt', name);


    pickLink=document.createElement('a');
    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');
    pickLink.appendChild(pickLinkImg);	
    pickLink.appendChild(document.createElement('br'));
    pickLink.appendChild(pickLinkImgGift);		


    td.appendChild(pickLink)
}
		catch (e) {
alert(e);
			td.appendChild(document.createTextNode(''));
		}
}





function processingSimOffers(){

	try {

		if(oXMLSimCard.readyState!=4) return;

		if(oXMLSimCard.status == 200) {

			var xmlDoc = oXMLSimCard.responseXML;

			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLSimCard.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }

			
			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'tr-product';

				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '11';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){




			var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';

				var td1 = document.createElement('TD');
				td1.className = 'cell-00';

				donutmins=10;
				if (contacts[i].getAttribute('inclmins')<=10000) donutmins=9;
				if (contacts[i].getAttribute('inclmins')<=5000) donutmins=8;
				if (contacts[i].getAttribute('inclmins')<=3000) donutmins=7;
				if (contacts[i].getAttribute('inclmins')<=2000) donutmins=6;
				if (contacts[i].getAttribute('inclmins')<=1200) donutmins=5;
				if (contacts[i].getAttribute('inclmins')<=1000) donutmins=4;
				if (contacts[i].getAttribute('inclmins')<800) donutmins=3;
				if (contacts[i].getAttribute('inclmins')<600) donutmins=2;
				if (contacts[i].getAttribute('inclmins')<200) donutmins=1;
				if (contacts[i].getAttribute('inclmins')<100) donutmins=0;
				
				var td2 = document.createElement('TD');
				td2.className = 'cell-02 donut donut'+donutmins;
				
				donuttexts=10;
				if (contacts[i].getAttribute('incltexts')<=10000) donuttexts=9;
				if (contacts[i].getAttribute('incltexts')<=5000) donuttexts=8;
				if (contacts[i].getAttribute('incltexts')<=3000) donuttexts=7;
				if (contacts[i].getAttribute('incltexts')<=2000) donuttexts=6;
				if (contacts[i].getAttribute('incltexts')<=1200) donuttexts=5;
				if (contacts[i].getAttribute('incltexts')<=1000) donuttexts=4;
				if (contacts[i].getAttribute('incltexts')<800) donuttexts=3;
				if (contacts[i].getAttribute('incltexts')<600) donuttexts=2;
				if (contacts[i].getAttribute('incltexts')<200) donuttexts=1;
				if (contacts[i].getAttribute('incltexts')<100) donuttexts=0;
				
				
				
				
				
				var td3 = document.createElement('TD');
				td3.className = 'cell-03 donut donut'+donuttexts;
				

				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;
				
				
				
				
				var td4 = document.createElement('TD');
				td4.className = 'cell-05 donut donut'+donutdata;
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				//tr.appendChild(td0);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('url');

	


				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('retailer').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('retailer'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td1.appendChild(networkLink);

				tariff = document.createElement('span');
				tariff.appendChild(document.createTextNode(contacts[i].getAttribute('tariff')));
				
				//td1.appendChild(tariff);
				
				if (contacts[i].getAttribute('existingcustomerdeal')==1) {
					
					existing = document.createElement('span');
					existing.setAttribute('class', 'fourg');
					existing.setAttribute('className', 'fourg');
					existing.appendChild(document.createTextNode('Existing customers'));
				
					td1.appendChild(existing);
					
					
				}
					
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().addClass("green-bottom");$(this).parent().parent().next("tr").show();$(this).parent().parent().next("tr").children().children().children().show();$(this).hide();return false;');
				moreInfo.appendChild(document.createTextNode('more info'));
				
				td1.appendChild(moreInfo);
							
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('inclmins')));
				
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('incltexts')));

				
				
	
				if (contacts[i].getAttribute('incldata')!="0MB" && contacts[i].getAttribute('incldata')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('title', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(" "+contacts[i].getAttribute('incldata')));
					td4.appendChild(datalink);
				}
				else td4.appendChild(document.createTextNode(" "+contacts[i].getAttribute('incldata')));
	
							
				
				fourg = document.createElement('span');
				fourg.setAttribute('class', 'fourg fourgnew');
				fourg.setAttribute('className', 'fourg fourgnew');
				fourg.appendChild(document.createTextNode('4G'));
				if(contacts[i].getAttribute('fourg')==1) td4.appendChild(fourg);

				
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				if (contacts[i].getAttribute('lengthofcontract')>1)	months.appendChild(document.createTextNode('months'));
				else months.appendChild(document.createTextNode('month'));
				td5.appendChild(months);

				
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Monthly'));		

								
				monthlyCost = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					monthlyCost.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					monthlyCost.appendChild(document.createTextNode('Cashback by Redemption'));
				}

				td6.appendChild(phonePrice);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('price')));
				
				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(monthlyCost);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				
				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('avg. monthly'));
				avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avgprice')));
				td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);
				
				viaText = document.createElement('span');
				viaText.setAttribute('style', 'margin-top:10px');
	
				
				viaTextImage = document.createElement('img');
				viaTextImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				viaTextImage.setAttribute('alt', contacts[i].getAttribute('network'));
				//viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailer')));

			
				viaTexta = document.createElement('a');
				viaTexta.setAttribute('href', link);
				viaTexta.setAttribute('target', '_blank');
				viaTexta.appendChild(viaTextImage);
				
				
				viaText.appendChild(viaTexta);
				//td5.appendChild(viaText);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td7.appendChild(viaText);
				td7.appendChild(getDeal);
				
				if (notTheSame(contacts[i].getAttribute('network'), contacts[i].getAttribute('retailer'))) {
					/*viaText = document.createElement('span');
					viaText.setAttribute('style', 'margin-top:0');
					viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailer')))
					td7.appendChild(viaText);*/
				}
				
				
				
				
				

				
				var tablenew = document.createElement('table');
				tablenew.setAttribute('style', 'font-size:0.41em;width: 100%;');

				

				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				
				
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');
				td0.appendChild(document.createTextNode('Data limits:'));
				
				

				var td1 = document.createElement('TD');
				
				td1.colSpan="6";
				
				var dataallowance = document.createElement('SPAN');
				dataallowance.innerHTML = contacts[i].childNodes[0].nodeValue;
				
				td1.appendChild(dataallowance);
				
				if (contacts[i].getAttribute('data')!='Ultd') {
					tr.appendChild(td0);
					tr.appendChild(td1);
				}
				
				tablenew.appendChild(tr);



				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td5a = document.createElement('TD');
				td5a.className = 'cell-05';
				td5a.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				td6.colSpan="1";
				td6.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td7 = document.createElement('TH');
				td7.className = 'cell-07';
				
				tr.appendChild(td0);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				//tr.appendChild(td5a);
				tr.appendChild(td6);

				td0.appendChild(document.createTextNode('Out of bundle costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Minutes'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode(contacts[i].getAttribute('mincost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Texts'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('textcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Pictures'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('picturecost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Voicemail'));
				td4.appendChild(spanText);
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('voicemailcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Freephone'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('freephonecost')));

				
				/*
				td2.appendChild(document.createTextNode('monthly cost'));
				td3.appendChild(document.createTextNode('cashback'));
				td4.appendChild(document.createTextNode('total cost'));
				td5.appendChild(document.createTextNode('retailer'));
				if (contacts[i].getAttribute('gift')) {
					td6.appendChild(document.createTextNode('free gift'));
				}*/
				//td7.appendChild(document.createTextNode(''));

				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().parent().parent().parent().prev("tr").removeClass("green-bottom");$(this).parent().parent().parent().parent().parent().hide();$(this).parent().parent().hide();$(this).parent().parent().parent().parent().parent().prev("tr").children("td").eq(0).children("a").eq(1).show();return false;');
				moreInfo.appendChild(document.createTextNode('hide info'));
				
				td6.appendChild(moreInfo);
				
				tablenew.appendChild(tr);

				
				//more info
				var tr = document.createElement('TR');
				tr.className='row-01 more-info';
				var td0 = document.createElement('TD');
				td0.colSpan="8";
				td0.setAttribute('style', 'background:none;border-bottom:0;padding:0;text-align:left;font-size:1.4em;color:#444;padding-top: 15px;');				

				td0.appendChild(document.createTextNode(' Before purchasing this SIM we advise you to check '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', contacts[i].getAttribute('coverage'));
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('' + contacts[i].getAttribute('network') + '\'s coverage'));
				
				td0.appendChild(coverageLink);
				td0.appendChild(document.createTextNode('.'));
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('We also advise you to become familiar with ' + contacts[i].getAttribute('retailer') + '\'s '));
				
				fup = document.createElement('a');
				fup.setAttribute('href', contacts[i].getAttribute('fup'));
				fup.setAttribute('target', '_blank');
				fup.appendChild(document.createTextNode('fair use or traffic management policy'));

				td0.appendChild(fup);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('Please research costs before taking your phone abroad and read Ofcom\'s guide on how to prevent '));
				
				billShock = document.createElement('a');
				billShock.setAttribute('href', 'http://consumers.ofcom.org.uk/phone/mobile-phones/problems-and-complaints/mobile-phone-bill-shock/');
				billShock.setAttribute('target', '_blank');
				billShock.appendChild(document.createTextNode('Bill Shock'));

				td0.appendChild(billShock);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				
				
				
				
				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info white-bottom more-info-bottom';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none');
				td0.appendChild(document.createTextNode('Customer service:'));
				
							
	
				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				td1.setAttribute('style', 'background:none;border-bottom:0;padding:0;padding-top:23px;text-align:left;font-size:1.4em;color:#444;padding-bottom: 35px;');
				td1.colSpan="8";
				if (contacts[i].getAttribute('complaints')>0) {		
					td1.appendChild(document.createTextNode('Ofcom reports that they have received '+contacts[i].getAttribute('complaints')+' complaints per 100,000 customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				} else {
					td1.appendChild(document.createTextNode('Ofcom reports that they have received a negligible amount of complaints for customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				}
				td1.appendChild(document.createElement('BR'));
				td1.appendChild(document.createTextNode('You can find more information via Ofcom\'s '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', 'http://media.ofcom.org.uk/news/2014/latest-phone-broadband-and-pay-tv-complaints-revealed-2/');
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('customer service and complaints handling'));
				
				td1.appendChild(coverageLink);
				
				td1.appendChild(document.createTextNode(' guide.'));
				
				//tr.appendChild(td0);
				tr.appendChild(td1);
				
				tablenew.appendChild(tr);			
				
				
				
				var trnew = document.createElement('tr');
				var tdnew = document.createElement('td');
				tdnew.colSpan=8;
				tdnew.appendChild(tablenew);
				trnew.className='row-01'
				trnew.appendChild(tdnew);
				
				table.appendChild(trnew)
				
				
				
				
				
				
				
				
				//viaText = document.createElement('span');
				//viaText.appendChild(document.createTextNode('via '+contacts[i].getAttribute('retailer')));
				//td7.appendChild(viaText);
				
								
					
				
				
				/*


			var tr = document.createElement('TR');
				var td1 = document.createElement('TD');
				var td2 = document.createElement('TD');
				var td2a = document.createElement('TD');
				var td3 = document.createElement('TD');
				var td4 = document.createElement('TD');
				var td5 = document.createElement('TD');
				var td6 = document.createElement('TD');				
				var td7 = document.createElement('TD');
				var td8 = document.createElement('TD');
				var td9 = document.createElement('TD');
				var td10 = document.createElement('TD');			
				

				tr.className =  'tr-product';


				table.appendChild(tr);


				tr.appendChild(td2);		
				tr.appendChild(td2a);
				tr.appendChild(td1);
				tr.appendChild(td3);
				//tr.appendChild(td4);
				//tr.appendChild(td5);
				tr.appendChild(td6);
				//tr.appendChild(td7);
				tr.appendChild(td8);
				//tr.appendChild(td9);
				tr.appendChild(td10);

				td1.className = 'center';
				td2.className = 'center';
				td3.className = 'center';
				//td4.className = 'center emph';
				//td5.className = 'center emph';
				td6.className = 'center';
				td7.className = 'center emph';
				td8.className = 'center cost emph';
				td10.className = 'center buy';
				
				
				
								
				td1.setAttribute('style', 'height:98px');
				td2.setAttribute('style', 'height:98px');
				td2a.setAttribute('style', 'height:98px');
				td3.setAttribute('style', 'height:98px');
				td6.setAttribute('style', 'height:98px');
				td8.setAttribute('style', 'height:98px');
				td10.setAttribute('style', 'height:98px');
				
				link = contacts[i].getAttribute('url');

				if (contacts[i].getAttribute('lengthofcontract')>1) addLinkBoldImageNoBreak(td1, contacts[i].getAttribute('lengthofcontract')+' months', '', contacts[i].getAttribute('retailer'), link, i);
				else addLinkBoldImageNoBreak(td1, contacts[i].getAttribute('lengthofcontract')+' month', '', contacts[i].getAttribute('retailer'), link, i);

				

				if (contacts[i].getAttribute('gift')) addLinkImageGift(td2, contacts[i].getAttribute('network'), contacts[i].getAttribute('gift'), link);
				else addLinkImage(td2, contacts[i].getAttribute('network'), link);


				addLink(td2a, contacts[i].getAttribute('tariff'), link);
				addLinkMinsTextsData2(td3, contacts[i].getAttribute('inclmins'), contacts[i].getAttribute('minutes_type'), contacts[i].getAttribute('incltexts'), contacts[i].getAttribute('incldata'), link, i);
				//addLink(td3, contacts[i].getAttribute('inclmins'), link, i);
				//addLink(td4, contacts[i].getAttribute('incltexts'), link, i);
				//addLink(td5, contacts[i].getAttribute('incldata'), link, i);
				addLinkSimMonthlyCashback(td6, '0.00', contacts[i].getAttribute('price'), contacts[i].getAttribute('cashback'), link, i);

				//addLink(td7, '£' + contacts[i].getAttribute('credit'), link, i);
				if (contacts[i].getAttribute('cashback')==0) {
					addLink2(td8, '£' + contacts[i].getAttribute('price'), link, i);
				} else {
					addLink2(td8, '£' + contacts[i].getAttribute('avgprice'), link, i);
				}
				//addLink(td9, contacts[i].getAttribute('simcost'), link, i);
				addLinkBuySimCard(td10,link,i)

				var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(("\u00a0")));
				trgrey.appendChild(tdgrey1);
				trgrey.className='empty';
				table.appendChild(trgrey);

*/
			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateSimOffers');

		}
		p4 =1;
		//removePleaseWait();


	}
	catch (e) { p4 =1;
	}


}


function addLinkMinsTextsData2(td, mins, minstype, texts, data, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    _setStyle(amins, 'color:#c70000');
    amins.appendChild(document.createTextNode(mins + ' mins'));

    aminstype=document.createElement('span');
    _setStyle(aminstype, 'color:#c70000');
    aminstype.appendChild(document.createTextNode('' + minstype + ''));

    atexts=document.createElement('span');
    _setStyle(atexts, 'color:#095997');
    atexts.appendChild(document.createTextNode(texts + ' texts' ));

    adata=document.createElement('span');
    _setStyle(adata, 'color:#30bc4a');
    adata.appendChild(document.createTextNode(data + ' data' ));

    pickLink.appendChild(amins);
   // pickLink.appendChild(document.createElement('br'));
    //pickLink.appendChild(aminstype);
   // pickLink.appendChild(document.createElement('br'));
  //  pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);
  //  pickLink.appendChild(document.createElement('br'));

 //   pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(adata);
 //   pickLink.appendChild(document.createElement('br'));


    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}

function addLinkSimMonthlyCashback(td, price, monthly, cashback, url, clas) {
try {

    pickLink=document.createElement('a');


    amins=document.createElement('span');
    //_setStyle(amins, 'color:#c70000');
    amins.appendChild(document.createTextNode('Sim Card: £'+price));



    atexts=document.createElement('span');
    //_setStyle(atexts, 'color:#095997');
    atexts.appendChild(document.createTextNode('Monthly: £'+monthly));
	
    adata=document.createElement('span');
    //_setStyle(adata, 'color:#30bc4a');
    adata.appendChild(document.createTextNode('Cashback: £'+cashback));

    pickLink.appendChild(amins);

    pickLink.appendChild(document.createElement('br'));

    pickLink.appendChild(atexts);


	if (document.searchform.cashback.options[document.searchform.cashback.selectedIndex].value==1) {
		pickLink.appendChild(document.createElement('br'));

		pickLink.appendChild(adata);
		pickLink.appendChild(document.createElement('br'));
	}


    pickLink.setAttribute('href',url);
    pickLink.setAttribute('target','_blank');

	thisclass = clas%2?'':'alt';

    pickLink.setAttribute('class',thisclass);

    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}



function pageSimOffersNumbers(current_page, max_pages) {

	var pages = "";
	
	if (parseInt(max_pages)>1) {

	if (parseInt(current_page)>1) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimOffers(' + (parseInt(current_page) - 1) + ');">&lt; Prev</a> ';
		

	for (var i=1; i<=max_pages; i++) {
	
		if (current_page == i) pages = pages + "";
		else pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimOffers(' + i + ');">';

		pages = pages + i;

		if (current_page==i) pages = pages + "";
		else pages = pages + '</a> ';


		pages = pages + " ";

	
	}

	if (parseInt(current_page)<parseInt(max_pages)) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateSimOffers(' + (parseInt(current_page) + 1) + ');">Next &gt;</a>';

	}
	var pagenumber = document.getElementById('pageSimCardNumbers');
	pagenumber.innerHTML = pages;

	var pagenumber = document.getElementById('pageSimCardNumbers1');
	pagenumber.innerHTML = pages;
}





















 $(document).keydown(function(event) {
                if(event.keyCode==39) $('.nextpage')[0].click();
                if(event.keyCode==37) $('.previouspage')[0].click();
        });





(function($){
    $.fn.fixedMenu=function(){
        return this.each(function(){
			var linkClicked= false;
            var menu= $(this);
			$('body').bind('click',function(){
			
					if(menu.find('.activemenu').size()>0 && !linkClicked)
					{
						menu.find('.activemenu').removeClass('activemenu');
					}
					else
					{
						linkClicked = false; 
					}
			});
			
            menu.find('ul li > a').bind('click',function(){
				linkClicked = true;
				if ($(this).parent().hasClass('activemenu')){
					$(this).parent().removeClass('activemenu');
				}
				else{
					$(this).parent().parent().find('.activemenu').removeClass('activemenu');
					$(this).parent().addClass('activemenu');
				}
            })
        });
    }
})(jQuery);

        $('document').ready(function(){
            $('.menu').fixedMenu();
        });

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

function updateTariffs(pageselected){

oXMLTariff.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();
p3 = 0;

	var networks = "";
	if (document.searchformtariff.network.value && document.searchformtariff.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchformtariff.network.value + "',";
	   for (var i=0; i < document.searchformtariff.network.length; i++)
		 {
		   if (document.searchformtariff.network[i].checked)
		      {
		    networks = networks + "'" + document.searchformtariff.network[i].value + "',";
		      }

	   }


	var lengthofcontract = "";
	if (document.searchformtariff.contractlength.value && document.searchformtariff.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchformtariff.contractlength.value + "',";
	   for (var i=0; i < document.searchformtariff.contractlength.length; i++)
		 {
		   if (document.searchformtariff.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchformtariff.contractlength[i].value + "',";
			  }

  	 }


	var retailers = "";
    if (document.searchformtariff.retailername.value && document.searchformtariff.retailername.checked) retailers = retailers + "'" + document.searchformtariff.retailername.value + "',";

 for (var i=0; i < document.searchformtariff.retailername.length; i++)
		 {
		   if (document.searchformtariff.retailername[i].checked)
			  {
			retailers = retailers + "'" + document.searchformtariff.retailername[i].value + "',";
			  }

  	 }

  	var minutes = "";
  	minutes = document.searchformtariff.minutes.options[document.searchformtariff.minutes.selectedIndex].value;

  	var texts = "";
  	texts = document.searchformtariff.texts.options[document.searchformtariff.texts.selectedIndex].value;

  	var handset = "";
  	handset = encodeURIComponent(document.searchformtariff.handset.options[document.searchformtariff.handset.selectedIndex].value);

  	var cost = "";
  	cost = encodeURIComponent(document.searchformtariff.monthlycost.options[document.searchformtariff.monthlycost.selectedIndex].value);
	
	var data = "";
  	data = document.searchformtariff.data.options[document.searchformtariff.data.selectedIndex].value;
	
	var gift = "0";
	gift = document.searchformtariff.freegift.options[document.searchformtariff.freegift.selectedIndex].value;
	
	var phoneprice = "";
	phoneprice = document.searchformtariff.handsetcost.options[document.searchformtariff.handsetcost.selectedIndex].value;	

	var virgincustomers = 0;
	if (document.searchformtariff.virgincustomer.checked) virgincustomers=1;
	
	var btbroadbandcustomers = 0;
	if (document.searchformtariff.btcustomer.checked) btbroadbandcustomers=1;	
	
 	var talktalkcustomers = 0;
	if (document.searchformtariff.talktalkcustomer.checked) talktalkcustomers=1; 
	
	var fourg = 0;
    if (document.searchformtariff.fourg.checked) fourg=1;




  	var orderby = "totalcost asc";

	var cashback = "yes";
	cashback = document.searchformtariff.cashback.options[document.searchformtariff.cashback.selectedIndex].value;

	url = '/engine-tariff.php?networks='+networks+'&phoneprice='+phoneprice+'&lengthofcontract='+lengthofcontract+'&retailers='+retailers+'&minutes='+minutes+'&orderby='+orderby+'&texts='+texts+'&handset='+handset+'&cashback='+cashback+'&cost='+cost+'&data='+data+'&gift='+gift+'&btbroadbandcustomers='+btbroadbandcustomers+'&virgincustomers='+virgincustomers+'&talktalkcustomers='+talktalkcustomers+'&fourg='+fourg+'&page='+page;  	


	
	try {
		oXMLTariff.open('GET', url, true);
		oXMLTariff.onreadystatechange = processingTariffFunction;
		oXMLTariff.send('');
	}
	catch (e) {
		p3 = 1;
		removePleaseWait();
	}
}


function processingTariffFunction(){

	try {

		if(oXMLTariff.readyState!=4) return;

		if(oXMLTariff.status == 200) {

			var xmlDoc = oXMLTariff.responseXML;

			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLTariff.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }

			
			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTabletariff');
			
	var fourg = 0;
    if (document.searchformtariff.fourg.checked) fourg=1;
	
	var retailers = "";
    if (document.searchformtariff.retailername.value && document.searchformtariff.retailername.checked) retailers = retailers + "'" + document.searchformtariff.retailername.value + "',";

 for (var i=0; i < document.searchformtariff.retailername.length; i++)
		 {
		   if (document.searchformtariff.retailername[i].checked)
			  {
			retailers = retailers + "'" + document.searchformtariff.retailername[i].value + "',";
			  }

  	 }

  	var handset = "";
  	handset = encodeURIComponent(document.searchformtariff.handset.options[document.searchformtariff.handset.selectedIndex].value);

	var phoneprice = "";
	phoneprice = document.searchformtariff.handsetcost.options[document.searchformtariff.handsetcost.selectedIndex].value;	
	
	var virgincustomers = 0;
	if (document.searchformtariff.virgincustomer.checked) virgincustomers=1;
	
	var btbroadbandcustomers = 0;
	if (document.searchformtariff.btcustomer.checked) btbroadbandcustomers=1;	
	
 	var talktalkcustomers = 0;
	if (document.searchformtariff.talktalkcustomer.checked) talktalkcustomers=1; 
	
			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = i%2?'tr_on':'tr_off';
				/*tr.onmouseover = function(e) {
					this.className='tr_highlight';
					};
				if (i%2) {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_on';
					};
				}
				else {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_off';
					};
				}*/

				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '7';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
				
				donutmins=10;
				if (contacts[i].getAttribute('minutes')<=10000) donutmins=9;
				if (contacts[i].getAttribute('minutes')<=5000) donutmins=8;
				if (contacts[i].getAttribute('minutes')<=3000) donutmins=7;
				if (contacts[i].getAttribute('minutes')<=2000) donutmins=6;
				if (contacts[i].getAttribute('minutes')<=1200) donutmins=5;
				if (contacts[i].getAttribute('minutes')<=1000) donutmins=4;
				if (contacts[i].getAttribute('minutes')<800) donutmins=3;
				if (contacts[i].getAttribute('minutes')<600) donutmins=2;
				if (contacts[i].getAttribute('minutes')<200) donutmins=1;
				if (contacts[i].getAttribute('minutes')<100) donutmins=0;

				donuttexts=10;
				if (contacts[i].getAttribute('texts')<=10000) donuttexts=9;
				if (contacts[i].getAttribute('texts')<=5000) donuttexts=8;
				if (contacts[i].getAttribute('texts')<=3000) donuttexts=7;
				if (contacts[i].getAttribute('texts')<=2000) donuttexts=6;
				if (contacts[i].getAttribute('texts')<=1200) donuttexts=5;
				if (contacts[i].getAttribute('texts')<=1000) donuttexts=4;
				if (contacts[i].getAttribute('texts')<800) donuttexts=3;
				if (contacts[i].getAttribute('texts')<600) donuttexts=2;
				if (contacts[i].getAttribute('texts')<200) donuttexts=1;
				if (contacts[i].getAttribute('texts')<100) donuttexts=0;


				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;
				
				
				
				
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');
				td1.className = 'center';

				var td2 = document.createElement('TD');
				td2.className = 'center donut donut'+donutdata;
				
				var td3 = document.createElement('TD');

				var td4 = document.createElement('TD');

				var td5 = document.createElement('TD');

				var td6 = document.createElement('TD');

				td5.className = 'nowrap';

				var td7 = document.createElement('TD');
	
				td7.className = 'center';

				td3.className = 'center donut donut'+donutmins;
				td4.className = 'center donut donut'+donuttexts;
				td5.className = 'center';
				td6.className = 'center';

				tr.className = i%2?'tr_on':'tr_off';
				/*tr.onmouseover = function(e) {
					this.className='tr_highlight';
					};
				if (i%2) {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_on';
					};
				}
				else {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_off';
					};
				}*/

				table.appendChild(tr);

				tr.appendChild(td1);

				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td2);
				tr.appendChild(td5);
				
				tr.appendChild(td6);
				
				tr.appendChild(td7);


				link = '/tariff-mobiles.php?networks=\''+contacts[i].getAttribute('network')+'\',&minutes='+contacts[i].getAttribute('minutes')+'&minutes_type='+contacts[i].getAttribute('minutes_type2')+'&texts='+contacts[i].getAttribute('texts')+'&term='+contacts[i].getAttribute('lengthofcontract')+'&cost='+contacts[i].getAttribute('monthlycost')+'&retailers='+retailers+'&handset='+handset+'&data='+contacts[i].getAttribute('data')+'&gift='+contacts[i].getAttribute('gift')+'&cashback='+contacts[i].getAttribute('cashback')+'&phoneprice='+phoneprice+'&btbroadbandcustomers='+btbroadbandcustomers+'&virgincustomers='+virgincustomers+'&talktalkcustomers='+talktalkcustomers+'&fourg='+contacts[i].getAttribute('fourg');

				/*addLinkBold(td1, contacts[i].getAttribute('make') + " " + contacts[i].getAttribute('model'), " on " + contacts[i].getAttribute('priceplan'), link, i);
				addLinkImage(td3, contacts[i].getAttribute('network'), link);
				//addLinkImage(td4, contacts[i].getAttribute('retailername'), link);
				addLink(td6, contacts[i].getAttribute('minutes'), link, i, contacts[i].getAttribute('minutes_type'));
				addLink(td7, contacts[i].getAttribute('texts'), link, i);
				addLink(td8, '£' + contacts[i].getAttribute('phoneprice'), link, i);
				addLink(td9, '£' + contacts[i].getAttribute('monthlycost'), link, i);
				addLink(td10, '£' + contacts[i].getAttribute('cashback'), link, i);
				addLink(td11, contacts[i].getAttribute('lengthofcontract'), link, i);
				addLink(td12, '£' + contacts[i].getAttribute('totalcost'), link, i);*/

				addImage(td1, contacts[i].getAttribute('network'), link, i);
				
								
				if (contacts[i].getAttribute('existingcustomerdeal')==1) {
					
					existing = document.createElement('span');
					existing.setAttribute('class', 'fourg');
					existing.setAttribute('className', 'fourg');
					existing.setAttribute('style', 'font-size: 11px;');
					existing.appendChild(document.createTextNode('Existing customers'));
				
					td1.appendChild(existing);
					
					
				}		
				
				addItem(td3, contacts[i].getAttribute('minutes'), link, i, contacts[i].getAttribute('minutes_type'));
				addItem(td4, contacts[i].getAttribute('texts'), link, i);
				//addItem(td2, contacts[i].getAttribute('data'), link, i);
				
	
				if (contacts[i].getAttribute('data')!="0MB" && contacts[i].getAttribute('data')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('data'));
					datalink.setAttribute('title', contacts[i].getAttribute('data'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
					td2.appendChild(datalink);
				}
				else addItem(td2, contacts[i].getAttribute('data'), link, i);
							
				
								
				fourg = document.createElement('span');
				fourg.setAttribute('class', 'fourg2 fourgnew');
				fourg.setAttribute('className', 'fourg2 fourgnew');
				fourg.appendChild(document.createTextNode('4G'));
				if(contacts[i].getAttribute('fourg')==1) td2.appendChild(fourg);
				
				addItem(td5, '£' + contacts[i].getAttribute('monthlycost'), link, i);
				addItem(td6, contacts[i].getAttribute('lengthofcontract'), link, i);
				addLinkArrow(td7, '', link, i);

				var tr2 = document.createElement('TR');
				var td21 = document.createElement('TD');
				var iframe = document.createElement('IFRAME');


				tr2.setAttribute('id', 'row'+i);
				tr2.style.display='none';
				tr2.style.height='0px';
				td21.colSpan = '7';
				td21.setAttribute('style', 'padding:5px;');
				
				iframe.setAttribute('id', 'iframe'+i);
				iframe.setAttribute('width', '100%');
				iframe.setAttribute('frameborder', 'no');
				iframe.setAttribute('border', '0');

				td21.appendChild(iframe);
				tr2.appendChild(td21);
				table.appendChild(tr2);

				/*var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(("\u00a0")));
				trgrey.appendChild(tdgrey1);
				trgrey.className='empty';
				table.appendChild(trgrey);*/


			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateTariffs');

		}
		p3 = 1;
		removePleaseWait();

//if (firsttime==0) window.location.hash="results"; 
//firsttime=0;

		//pageTracker._trackPageview("/ajaxcall/"+url);  removed 21 08 09 AC, can't see any point to it!


	}
	catch (e) { p3 = 1;removePleaseWait();
	}


}



function enlargeRow(id, fromHeight, toHeight) {

	row = document.getElementById('row'+id);
	iframe = document.getElementById('iframe'+id);

	row.style.display='';

	if (fromHeight<toHeight) {

		newHeight = fromHeight+45;

		row.style.height=newHeight+"px";
		iframe.style.height=newHeight+"px";

		window.setTimeout("enlargeRow('"+id+"', "+newHeight+", "+toHeight+")", 45);

	}

}

function shrinkRow(id, fromHeight, toHeight) {

	row = document.getElementById('row'+id);
	iframe = document.getElementById('iframe'+id);

	row.style.display='';

	if (fromHeight>toHeight) {

		newHeight = fromHeight-45;

		if(newHeight<1) newHeight=0;

		row.style.height=newHeight+"px";
		iframe.style.height=newHeight+"px";

		window.setTimeout("shrinkRow('"+id+"', "+newHeight+", "+toHeight+")", 45);

	}
	else row.style.display="none";

}

function getBigger(id, url) {

	if (checkUp(id)==1) getSmaller(id);
	else {

	iframe = document.getElementById('iframe'+id);

	if (url) iframe.src=url;

	replaceImage(id, 1);

	//link = document.getElementById('link'+id);
	//link.href = "javascript:getSmaller('"+id+"');";

	enlargeRow(id, 0, 460);

	}
}


function getSmaller(id) {


	replaceImage(id, 0);

	link = document.getElementById('link'+id);
	link.href = "javascript:getBigger('"+id+"');";

	shrinkRow(id, 460, 0);

}


function checkUp(id) {

	image = document.getElementById('image'+id);

	if (image.src.indexOf("up.gif")>-1) return 1;
	else return 0;


}



function replaceImage(id, imageswitch) {

	image = document.getElementById('image'+id);

	if (imageswitch==0) image.src="/down.gif";
	else image.src="/up.gif";


}

function addLinkArrow(td, name, url, id) {
try {

    pickLinkImg=document.createElement('img');

    pickLinkImg.setAttribute('src','/down.gif');
    pickLinkImg.setAttribute('alt', name);
    pickLinkImg.setAttribute('id', 'image'+id);


    pickLink=document.createElement('a');
    pickLink.setAttribute('href',"javascript:getBigger('"+id+"', \""+url+"\");");
    pickLink.setAttribute('id', 'link'+id);
    pickLink.appendChild(pickLinkImg);	




    td.appendChild(pickLink)
}
		catch (e) {
			td.appendChild(document.createTextNode(''));
		}
}
		
function toggleRetailersOn() {

$('input[name="retailername"]').each(function(){
  if($(this).attr('checked')=='checked') {}
  else $(this).trigger('click');
});


}	
function toggleRetailersOff() {

$('input[name="retailername"]').each(function(){
  if($(this).attr('checked')=='checked') $(this).trigger('click');
});


}	



function toggleRetailersNetworkOnly() {

$('input[name="retailername"]').each(function(){
  if($(this).attr('checked')=='checked') $(this).trigger('click');
});

$('input[name="retailername"]').each(function(){
  if($(this).attr('value').toLowerCase()=='btmobile' || $(this).attr('value').toLowerCase()=='ee' || $(this).attr('value').toLowerCase()=='giffgaff' || $(this).attr('value').toLowerCase()=='o2' || $(this).attr('value').toLowerCase()=='shebang' || $(this).attr('value').toLowerCase()=='talkmobile' || $(this).attr('value').toLowerCase()=='talktalk' || $(this).attr('value').toLowerCase()=='tesco' || $(this).attr('value').toLowerCase()=='three' || $(this).attr('value').toLowerCase()=='virgin' || $(this).attr('value').toLowerCase()=='vodafone' || $(this).attr('value').toLowerCase()=='id' || $(this).attr('value').toLowerCase()=='idmobile' || $(this).attr('value').toLowerCase()=='id mobile') $(this).trigger('click');
});

}	




function toggleNetworksOn() {

$('input[name="network"]').each(function(){
  if($(this).attr('checked')=='checked') {}
  else $(this).trigger('click');
});


}	
function toggleNetworksOff() {

$('input[name="network"]').each(function(){
  if($(this).attr('checked')=='checked') $(this).trigger('click');
});


}	
	
		/*
jQuery(document).on('copy', function(e)
{
  var sel = window.getSelection();
  var copyFooter = 
        "<br /><br /> Source: <a href='" + document.location.href + "'>" + document.location.href + "#clip</a><br />© MobilePhoneChecker.co.uk";
  var copyHolder = $('<div>', {html: sel+copyFooter, style: {position: 'absolute', left: '-99999px'}});
  $('body').append(copyHolder);
  sel.selectAllChildren( copyHolder[0] );
  window.setTimeout(function() {
      copyHolder.remove();
  },0);
});		
*/




var oXMLBroadband = getXMLHttpObj();





function updateMobileBroadbandOffers(pageselected){

oXMLBroadband.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();
p2 = 0;

	var networks = "";
	if (document.searchformbroadband.network.value && document.searchformbroadband.network.checked) networks = networks + "'" + document.searchformbroadband.network.value + "',";
	   for (var i=0; i < document.searchformbroadband.network.length; i++)
		 {
		   if (document.searchformbroadband.network[i].checked)
		      {
		    networks = networks + "'" + document.searchformbroadband.network[i].value + "',";
		      }

	   }










	var lengthofcontract = "";
	if (document.searchformbroadband.contractlength.value && document.searchformbroadband.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchformbroadband.contractlength.value + "',";
	   for (var i=0; i < document.searchformbroadband.contractlength.length; i++)
		 {
		   if (document.searchformbroadband.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchformbroadband.contractlength[i].value + "',";
			  }

  	 }


	var retailers = "";
    if (document.searchformbroadband.retailername.value && document.searchformbroadband.retailername.checked) retailers = retailers + "'" + document.searchformbroadband.retailername.value + "',";

 for (var i=0; i < document.searchformbroadband.retailername.length; i++)
		 {
		   if (document.searchformbroadband.retailername[i].checked)
			  {
			retailers = retailers + "'" + document.searchformbroadband.retailername[i].value + "',";
			  }

  	 }
  	var handset = "";
  	handset = encodeURIComponent(document.searchformbroadband.handset.options[document.searchformbroadband.handset.selectedIndex].value);

  	var data = "";
  	data = encodeURIComponent(document.searchformbroadband.data.options[document.searchformbroadband.data.selectedIndex].value);


  	var cost = "";
  	cost = encodeURIComponent(document.searchformbroadband.monthly.options[document.searchformbroadband.monthly.selectedIndex].value);


	var orderby = "totalcost asc";
	var orderby = " monthcost asc";
	
	orderby = document.searchformbroadband.orderby.options[document.searchformbroadband.orderby.selectedIndex].value;

	var cashback = "yes";
	//cashback = document.searchformbroadband.cashback.options[document.searchformbroadband.cashback.selectedIndex].value;


	url = '/mobilebroadbandengine.php?networks='+networks+'&lengthofcontract='+lengthofcontract+'&retailers='+retailers+'&orderby='+orderby+'&handset='+handset+'&cashback='+cashback+'&cost='+cost+'&data='+data+'&page='+page;  	


			var table = document.getElementById('contactListBroadbandTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

			
	
	if (orderby==" firstyearcost asc") $('#sortcolumn').text('First Year Cost');
	else if (orderby==" totalcost asc") $('#sortcolumn').text('Total Cost');
	else $('#sortcolumn').text('Avg Monthly Cost');	
			
			
	try {processingFunction;
		oXMLBroadband.open('GET', url, true);
		oXMLBroadband.onreadystatechange = processingMobileBroadbandFunction;
		oXMLBroadband.send('');
	}
	catch (e) {
		p2 = 1;
		removePleaseWait();
	}
}




function processingMobileBroadbandFunction(){

	try {

		if(oXMLBroadband.readyState!=4) return;

		if(oXMLBroadband.status == 200) {

		
			orderby = document.searchformbroadband.orderby.options[document.searchformbroadband.orderby.selectedIndex].value;
		
			var xmlDoc = oXMLBroadband.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXML.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListBroadbandTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = i%2?'tr_on':'tr_off';
				/*tr.onmouseover = function(e) {
					this.className='tr_highlight';
					};
				if (i%2) {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_on';
					};
				}
				else {
				tr.onmouseout= function(e) {
					javascript:this.className='tr_off';
					};
				}*/

				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '10';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
				var tr = document.createElement('TR');

				
				var td0 = document.createElement('TD');
				td0.className = 'cell-00';

				var td1 = document.createElement('TD');
				td1.className = 'cell-01';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				tr.appendChild(td1);

				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('affiliate_url');


				
				link = contacts[i].getAttribute('affiliate_url');

				
				mobileName = document.createElement('span');
				mobileName.setAttribute('class', 'phonename');
				mobileName.setAttribute('className', 'phonename');
				mobileName.appendChild(document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model').replace(' - Clearance', '')));
				td0.appendChild(mobileName);
				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);		

				if (contacts[i].getAttribute('clearance')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'clearance');
					clearanceText.setAttribute('className', 'clearance');
					clearanceText.appendChild(document.createTextNode('Clearance'));
					td0.appendChild(clearanceText);
				
				}
				
				if (contacts[i].getAttribute('type')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'dongle');
					clearanceText.setAttribute('className', 'dongle');
					clearanceText.appendChild(document.createTextNode('Dongle'));
					td0.appendChild(clearanceText);
				
				}			
				
				if (contacts[i].getAttribute('type')==2) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'hotspot');
					clearanceText.setAttribute('className', 'hotspot');
					clearanceText.appendChild(document.createTextNode('Hotspot'));
					td0.appendChild(clearanceText);
				
				}						
				td0.appendChild(mobileLink);
				
				
				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('network'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td1.appendChild(networkLink);
				
				if (contacts[i].getAttribute('gift')) {
				
						giftImage = document.createElement('img');
						giftImage.setAttribute('src', '/'+contacts[i].getAttribute('gift'));
						giftImage.setAttribute('style','padding-top:3px;width:50px;height:50px');
						
						giftLink = document.createElement('a');
						giftLink.setAttribute('href', link);
						giftLink.setAttribute('target','_blank');
						
						giftLink.appendChild(giftImage);
						
						td1.appendChild(giftLink);			
				
				}
				

				td4.appendChild(createMobileText(contacts[i].getAttribute('data')));


				if (contacts[i].getAttribute('data')!="0MB" && contacts[i].getAttribute('data')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('data'));
					datalink.setAttribute('title', contacts[i].getAttribute('data'));
					datalink.setAttribute('class', 'tooltip');

					datalink.appendChild(document.createTextNode("?"));
					td4.appendChild(datalink);
				}
				

				
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				if (contacts[i].getAttribute('lengthofcontract')>1) months.appendChild(document.createTextNode('months'));
				else months.appendChild(document.createTextNode('month'));
				td5.appendChild(months);
				
				viaText = document.createElement('span');
				viaText.setAttribute('style', 'margin-top:0');
	
				
				viaTextImage = document.createElement('img');
				viaTextImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				viaTextImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				//viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailername')));

			
				viaTexta = document.createElement('a');
				viaTexta.setAttribute('href', link);
				viaTexta.setAttribute('target', '_blank');
				viaTexta.appendChild(viaTextImage);
				
				
				viaText.appendChild(viaTexta);
				td5.appendChild(viaText);			
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Device'));		

				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('Monthly'));
				
				cashBack = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					cashBack.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					cashBack.appendChild(document.createTextNode('Cashback by Redemption'));
				}
				
				td6.appendChild(phonePrice);
				td6.appendChild(freeText('£'+contacts[i].getAttribute('phoneprice')));
				
				td6.appendChild(monthlyCost);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(cashBack);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				
				//monthlyCost = document.createElement('span');
				//monthlyCost.appendChild(document.createTextNode('avg. monthly'));
				avgMonthlyCost = document.createElement('strong');
				
				
				if (orderby==" firstyearcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('firstyearcost')));
				else if (orderby==" totalcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				else  avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avg_monthly_cost')));


				td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td7.appendChild(getDeal);
				
				/*if (contacts[i].getAttribute('number')) {

					contact = document.createElement('span');
					contact.appendChild(document.createTextNode('or call: '+contacts[i].getAttribute('number')));
					td7.appendChild(contact);
				
				}				
				*/
				
				
				
				/*
				
				if (contacts[i].getAttribute('gift')) addLinkBold(td1, contacts[i].getAttribute('make') + " " + contacts[i].getAttribute('model'), " + " + contacts[i].getAttribute('gift'), link, i);
				else addLinkBold(td1, contacts[i].getAttribute('make') + " " + contacts[i].getAttribute('model'), "", link, i);

				addLinkImageText(td3, contacts[i].getAttribute('network'), link, contacts[i].getAttribute('priceplan'));
				addLinkImage(td4, contacts[i].getAttribute('retailername'), link);



				addLink(td6, contacts[i].getAttribute('allowance'), link, i);
				//addLink(td7, contacts[i].getAttribute('texts'), link, i);
				addLink(td8, '£' + contacts[i].getAttribute('phoneprice'), link, i);
				addLink(td9, '£' + contacts[i].getAttribute('monthlycost'), link, i);
				addLink(td10, '£' + contacts[i].getAttribute('cashback'), link, i);
				addLink(td11, contacts[i].getAttribute('lengthofcontract'), link, i);
				//addLink(td12, '£' + contacts[i].getAttribute('totalcost'), link, i);
				addLink(td12, '£' + contacts[i].getAttribute('avg_monthly_cost'), link, i);

				addLinkBuy(td13,link,i)

				var trgrey = document.createElement('TR');
				var tdgrey1 = document.createElement('TD');
				tdgrey1.appendChild(document.createTextNode(' '));
				trgrey.appendChild(tdgrey1);

				table.appendChild(trgrey);
*/

			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateMobileBroadbandOffers');

		}
		p2 = 1;
		removePleaseWait();


	}
	catch (e) { p2 = 1;removePleaseWait();console.log(e);
	}


}





function pageMobileBroadbandNumbers(current_page, max_pages) {

	var pages = "";
	
	if (parseInt(max_pages)>1) {

	if (parseInt(current_page)>1) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateMobileBroadbandOffers(' + (parseInt(current_page) - 1) + ');">&lt; Prev</a> ';
		

	for (var i=1; i<=max_pages; i++) {
	
		if (current_page == i) pages = pages + "";
		else pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateMobileBroadbandOffers(' + i + ');">';

		pages = pages + i;

		if (current_page==i) pages = pages + "";
		else pages = pages + '</a> ';


		pages = pages + " ";

	
	}

	if (parseInt(current_page)<parseInt(max_pages)) pages = pages + '<a href="javascript:void(0)" class="pages" onClick="updateMobileBroadbandOffers(' + (parseInt(current_page) + 1) + ');">Next &gt;</a>';

	}
	var pagenumber = document.getElementById('pageBroadbandNumbers');
	pagenumber.innerHTML = pages;

	var pagenumber = document.getElementById('pageBroadbandNumbers1');
	pagenumber.innerHTML = pages;
}





var oXMLDataSimCard = getXMLHttpObj();



function updateDataSimOffers(pageselected){


oXMLDataSimCard.abort();

page = (pageselected) ? pageselected : 1;

//addPleaseWait();
p4 = 0;

networks_counter=0;
	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
			networks_counter++;
		      }

	   }
	   
	 if (networks_counter==document.searchform.network.length) networks_counter='Any';
	 else networks_counter=networks_counter+" selected";
	 
	 $( "#networknumber2" ).html(networks_counter);



	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 
	contract_counter=0;
	   
	var lengthofcontract = "";
	if (document.searchform.contractlength.value && document.searchform.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength.value + "',";
	   for (var i=0; i < document.searchform.contractlength.length; i++)
		 {
		   if (document.searchform.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength[i].value + "',";
			contract_counter++;
			  }

  	 }

	 
	 if (contract_counter==document.searchform.contractlength.length) contract_counter='Any';
	 else contract_counter=contract_counter+" selected";


  	var data = "";
	data = document.searchform.data.options[document.searchform.data.selectedIndex].value;	


  	
	url = '/datasimonlytariffs.php?data='+data+'&networks='+networks+'&retailers='+retailers+'&length='+lengthofcontract+'&page='+page;  	


			var table = document.getElementById('contactListTable');

			var i = 0;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}

	try {
		oXMLDataSimCard.open('GET', url, true);
		oXMLDataSimCard.onreadystatechange = processingDataSimOffers;
		oXMLDataSimCard.send('');
	}
	catch (e) {
		p4 =1;
		//removePleaseWait();
	}
}




function processingDataSimOffers(){

	try {

		if(oXMLDataSimCard.readyState!=4) return;

		if(oXMLDataSimCard.status == 200) {

			var xmlDoc = oXMLDataSimCard.responseXML;

			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLDataSimCard.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }

			
			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'tr-product';

				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '11';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){

				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;


			var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';

				var td1 = document.createElement('TD');
				td1.className = 'cell-00';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04 donut donut'+donutdata; 
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				//tr.appendChild(td0);
				tr.appendChild(td1);
				//tr.appendChild(td2);
				//tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('url');

	


				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('network'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td1.appendChild(networkLink);
				
				tariff = document.createElement('span');
				tariff.appendChild(document.createTextNode(contacts[i].getAttribute('tariff')));
				
				td1.appendChild(tariff);
				
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('inclmins')));
				
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('incltexts')));
				
				
	
	
				if (contacts[i].getAttribute('incldata')!="0MB" && contacts[i].getAttribute('incldata')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('title', contacts[i].getAttribute('incldata'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(contacts[i].getAttribute('incldata')));
					td4.appendChild(datalink);
				}
				else td4.appendChild(document.createTextNode(contacts[i].getAttribute('incldata')));
							
							
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				if (contacts[i].getAttribute('lengthofcontract')>1)	months.appendChild(document.createTextNode('months'));
				else months.appendChild(document.createTextNode('month'));
				td5.appendChild(months);

				
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Monthly'));		

								
				monthlyCost = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					monthlyCost.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					monthlyCost.appendChild(document.createTextNode('Cashback by Redemption'));
				}

				td6.appendChild(phonePrice);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('price')));
				
				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(monthlyCost);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				
				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('avg. monthly'));
				avgMonthlyCost = document.createElement('strong');
				avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avgprice')));
			//	td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);
				
				viaText = document.createElement('span');
				viaText.setAttribute('style', 'margin-top:0');
	
				
				viaTextImage = document.createElement('img');
				viaTextImage.setAttribute('src', '/'+contacts[i].getAttribute('retailer').toLowerCase()+'.jpg');
				viaTextImage.setAttribute('alt', contacts[i].getAttribute('retailer'));
				//viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailer')));

			
				viaTexta = document.createElement('a');
				viaTexta.setAttribute('href', link);
				viaTexta.setAttribute('target', '_blank');
				viaTexta.appendChild(viaTextImage);
				
				
				viaText.appendChild(viaTexta);
				//td5.appendChild(viaText);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab\u00a0deal'));
				
				td7.appendChild(getDeal);
				
				
				if (notTheSame(contacts[i].getAttribute('network'), contacts[i].getAttribute('retailer'))) {
					viaText = document.createElement('span');
					viaText.setAttribute('style', 'margin-top:0');
					viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailer')))
					td7.appendChild(viaText);
				}
				
				
				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().addClass("green-bottom");$(this).parent().parent().next("tr").show();$(this).parent().parent().next("tr").next("tr").show();$(this).parent().parent().next("tr").next("tr").next("tr").show();$(this).parent().parent().next("tr").next("tr").next("tr").next("tr").show();$(this).hide();return false;');
				moreInfo.appendChild(document.createTextNode('more info'));
				
				//td7.appendChild(moreInfo);
				



				

				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				
				
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');
				td0.appendChild(document.createTextNode('Data limits:'));
				
				

				var td1 = document.createElement('TD');
				
				td1.colSpan="6";
				
				var dataallowance = document.createElement('SPAN');
				dataallowance.innerHTML = contacts[i].childNodes[0].nodeValue;
				
				td1.appendChild(dataallowance);
				
				if (contacts[i].getAttribute('data')!='Ultd') {
					tr.appendChild(td0);
					tr.appendChild(td1);
				}
				
				table.appendChild(tr);



				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td5a = document.createElement('TD');
				td5a.className = 'cell-05';
				td5a.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				td6.colSpan="1";
				td6.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td7 = document.createElement('TH');
				td7.className = 'cell-07';
				
				tr.appendChild(td0);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				//tr.appendChild(td5a);
				tr.appendChild(td6);

				td0.appendChild(document.createTextNode('Out of bundle costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Minutes'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode(contacts[i].getAttribute('mincost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Texts'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('textcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Pictures'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('picturecost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Voicemail'));
				td4.appendChild(spanText);
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('voicemailcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Freephone'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('freephonecost')));

				
				/*
				td2.appendChild(document.createTextNode('monthly cost'));
				td3.appendChild(document.createTextNode('cashback'));
				td4.appendChild(document.createTextNode('total cost'));
				td5.appendChild(document.createTextNode('retailer'));
				if (contacts[i].getAttribute('gift')) {
					td6.appendChild(document.createTextNode('free gift'));
				}*/
				//td7.appendChild(document.createTextNode(''));

				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().prev("tr").prev("tr").removeClass("green-bottom");$(this).parent().parent().next("tr").next("tr").hide();$(this).parent().parent().next("tr").hide();$(this).parent().parent().hide();$(this).parent().parent().prev("tr").hide();$(this).parent().parent().prev("tr").prev("tr").children("td").eq(6).children("a").eq(1).show();return false;');
				moreInfo.appendChild(document.createTextNode('hide info'));
				
				td6.appendChild(moreInfo);
				
				table.appendChild(tr);
				
				
				//more info
				var tr = document.createElement('TR');
				tr.className='row-01 more-info';
				var td0 = document.createElement('TD');
				td0.colSpan="8";
				td0.setAttribute('style', 'background:none;border-bottom:0;padding:0;text-align:left;font-size:1.4em;color:#444;padding-top: 15px;');				

				td0.appendChild(document.createTextNode(' Before purchasing this SIM we advise you to check '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', contacts[i].getAttribute('coverage'));
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('' + contacts[i].getAttribute('network') + '\'s coverage'));
				
				td0.appendChild(coverageLink);
				td0.appendChild(document.createTextNode('.'));
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('We also advise you to become familiar with ' + contacts[i].getAttribute('retailer') + '\'s '));
				
				fup = document.createElement('a');
				fup.setAttribute('href', contacts[i].getAttribute('fup'));
				fup.setAttribute('target', '_blank');
				fup.appendChild(document.createTextNode('fair use or traffic management policy'));

				td0.appendChild(fup);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				table.appendChild(tr);
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('Please research costs before taking your phone abroad and read Ofcom\'s guide on how to prevent '));
				
				billShock = document.createElement('a');
				billShock.setAttribute('href', 'http://consumers.ofcom.org.uk/phone/mobile-phones/problems-and-complaints/mobile-phone-bill-shock/');
				billShock.setAttribute('target', '_blank');
				billShock.appendChild(document.createTextNode('Bill Shock'));

				td0.appendChild(billShock);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				table.appendChild(tr);
				
				
				
				
				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info white-bottom more-info-bottom';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none');
				td0.appendChild(document.createTextNode('Customer service:'));
				
							
	
				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				td1.setAttribute('style', 'background:none;border-bottom:0;padding:0;padding-top:23px;text-align:left;font-size:1.4em;color:#444;padding-bottom: 35px;');
				td1.colSpan="8";
				if (contacts[i].getAttribute('complaints')>0) {		
					td1.appendChild(document.createTextNode('Ofcom reports that they have received '+contacts[i].getAttribute('complaints')+' complaints per 100,000 customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				} else {
					td1.appendChild(document.createTextNode('Ofcom reports that they have received a negligible amount of complaints for customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				}
				td1.appendChild(document.createElement('BR'));
				td1.appendChild(document.createTextNode('You can find more information via Ofcom\'s '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', 'http://media.ofcom.org.uk/news/2014/latest-phone-broadband-and-pay-tv-complaints-revealed-2/');
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('customer service and complaints handling'));
				
				td1.appendChild(coverageLink);
				
				td1.appendChild(document.createTextNode(' guide.'));
				
				//tr.appendChild(td0);
				tr.appendChild(td1);
				
				table.appendChild(tr);			
				
				
				
				
				
				
				
				
				
			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateDataSimOffers');

		}
		p4 =1;
		//removePleaseWait();


	}
	catch (e) { p4 =1;
	}


}





function updateUpgradeOffers(pageselected){

oXMLUpgrade.abort();

page = (pageselected) ? pageselected : 1;

addPleaseWait();


	networks_counter=0;
	var networks = "";
	if (document.searchform.network.value && document.searchform.network.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.network.value + "',";
	   for (var i=0; i < document.searchform.network.length; i++)
		 {
		   if (document.searchform.network[i].checked)
		      {
		    networks = networks + "'" + document.searchform.network[i].value + "',";
			networks_counter++;
		      }

	   }
	   
	 if (networks_counter==document.searchform.network.length) networks_counter='Any';
	 else networks_counter=networks_counter+" selected";
	 
	 $( "#networknumber2" ).html(networks_counter);

	 
	 
	 
	retailers_counter=0;
	var retailers = "";
	if (document.searchform.retailername.value && document.searchform.retailers.checked) retailers = retailers + "'" + document.searchform.retailername.value + "',";
	   for (var i=0; i < document.searchform.retailername.length; i++)
		 {
		   if (document.searchform.retailername[i].checked)
		      {
		    retailers = retailers + "'" + document.searchform.retailername[i].value + "',";
			retailers_counter++;
		      }

	   }
	   
	 if (retailers_counter==document.searchform.retailername.length) retailers_counter='Any';
	 else retailers_counter=retailers_counter+" selected";
	 
	 $( "#retailersnumber2" ).html(retailers_counter);	 
	 
	 
	contract_counter=0;
	   
	var lengthofcontract = "";
	if (document.searchform.contractlength.value && document.searchform.contractlength.checked) lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength.value + "',";
	   for (var i=0; i < document.searchform.contractlength.length; i++)
		 {
		   if (document.searchform.contractlength[i].checked)
			  {
			lengthofcontract = lengthofcontract + "'" + document.searchform.contractlength[i].value + "',";
			contract_counter++;
			  }

  	 }

	 
	 if (contract_counter==document.searchform.contractlength.length) contract_counter='Any';
	 else contract_counter=contract_counter+" selected";
	 
	 $( "#contractnumber2" ).html(contract_counter);


  	var minutes = "";
	minutes = document.searchform.minutes.options[document.searchform.minutes.selectedIndex].value;	

  	var texts = "";
	texts = document.searchform.texts.options[document.searchform.texts.selectedIndex].value;	

  	var data = "";
	data = document.searchform.data.options[document.searchform.data.selectedIndex].value;	
	
	var phoneprice = "";
	phoneprice = document.searchform.handsetcost.options[document.searchform.handsetcost.selectedIndex].value;	
	
	var monthlyprice = "";
	monthlyprice = document.searchform.monthlycost.options[document.searchform.monthlycost.selectedIndex].value;	

  	var handset = "";
  	handset = encodeURIComponent(document.searchform.handset.options[document.searchform.handset.selectedIndex].value);

  	var orderby = "totalcost asc";
	var orderby = " monthcost asc";
	
	orderby = document.searchform.orderby.options[document.searchform.orderby.selectedIndex].value;

	var gift = "0";
	gift = document.searchform.freegift.options[document.searchform.freegift.selectedIndex].value;

	var cashback = "";
	cashback = document.searchform.cashback.options[document.searchform.cashback.selectedIndex].value;
	
	var fourg = 0;
    if (document.searchform.fourg.checked) fourg=1;
	
	var refurb = 0;
    if (document.searchform.refurb.checked) refurb=1;
	
	var virgincustomers = 0;
	if (document.searchform.virgincustomer.checked) virgincustomers=1;
	
	var btbroadbandcustomers = 0;
	if (document.searchform.btcustomer.checked) btbroadbandcustomers=1;	
	
 	var talktalkcustomers = 0;
	if (document.searchform.talktalkcustomer.checked) talktalkcustomers=1; 
	
	
	url = '/engine-upgrade.php?networks='+networks+'&retailers='+retailers+'&lengthofcontract='+lengthofcontract+'&minutes='+minutes+'&orderby='+orderby+'&texts='+texts+'&data='+data+'&handset='+handset+'&gift='+gift+'&cashback='+cashback+'&phoneprice='+phoneprice+'&cost='+monthlyprice+'&btbroadbandcustomers='+btbroadbandcustomers+'&virgincustomers='+virgincustomers+'&talktalkcustomers='+talktalkcustomers+'&4g='+fourg+'&refurb='+refurb+'&page='+page;  	

	
	if (orderby==" firstyearcost asc") $('#sortcolumn').text('First Year Cost');
	else if (orderby==" totalcost asc") $('#sortcolumn').text('Total Cost');
	else $('#sortcolumn').text('Avg Monthly Cost');	

	try {
		oXMLUpgrade.open('GET', url, true);
		oXMLUpgrade.onreadystatechange = processingFunctionUpgrade;
		oXMLUpgrade.send('');
	}
	catch (e) {
	alert(e);
		p1 =1;
		removePleaseWait();
	}
}


function processingFunctionUpgrade(){

	try {

		if(oXMLUpgrade.readyState!=4) return;

		if(oXMLUpgrade.status == 200) {

			orderby = document.searchform.orderby.options[document.searchform.orderby.selectedIndex].value;
		
			var xmlDoc = oXMLUpgrade.responseXML;
			
			if( ! xmlDoc || xmlDoc.childNodes.length === 0 ) {
						responseText=oXMLUpgrade.responseText;
						var re = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
						responseText=responseText.replace(re, '');
                        xmlDoc = (new DOMParser()).parseFromString( responseText,
"application/xml" ); }


			var contacts = xmlDoc.getElementsByTagName('mobile');
			
			var current_page = xmlDoc.getElementsByTagName('current_page');
			
			var max_pages = xmlDoc.getElementsByTagName('max_pages');

			var table = document.getElementById('contactListTable');

			var i = 0;
			var j = contacts.length-1;

			for(var i=table.rows.length; i>1; i--){
				table.deleteRow(1);
			}


			if(contacts.length<1){
				var tr = document.createElement('TR');
				var td1 = document.createElement('TD');

				tr.className = 'row-03';


				
				table.appendChild(tr);

				tr.appendChild(td1);
				td1.colSpan = '11';
				td1.className = 'center';
				td1.appendChild(document.createTextNode('Shame, no matches found. Please amend your criteria.'));

			}

			for(var i=0; i<=j; i++){
				var tr = document.createElement('TR');

				var td0 = document.createElement('TD');
				td0.className = 'cell-00';
				
				
				donutmins=10;
				if (contacts[i].getAttribute('minutes')<=10000) donutmins=9;
				if (contacts[i].getAttribute('minutes')<=5000) donutmins=8;
				if (contacts[i].getAttribute('minutes')<=3000) donutmins=7;
				if (contacts[i].getAttribute('minutes')<=2000) donutmins=6;
				if (contacts[i].getAttribute('minutes')<=1200) donutmins=5;
				if (contacts[i].getAttribute('minutes')<=1000) donutmins=4;
				if (contacts[i].getAttribute('minutes')<800) donutmins=3;
				if (contacts[i].getAttribute('minutes')<600) donutmins=2;
				if (contacts[i].getAttribute('minutes')<200) donutmins=1;
				if (contacts[i].getAttribute('minutes')<100) donutmins=0;

				donuttexts=10;
				if (contacts[i].getAttribute('texts')<=10000) donuttexts=9;
				if (contacts[i].getAttribute('texts')<=5000) donuttexts=8;
				if (contacts[i].getAttribute('texts')<=3000) donuttexts=7;
				if (contacts[i].getAttribute('texts')<=2000) donuttexts=6;
				if (contacts[i].getAttribute('texts')<=1200) donuttexts=5;
				if (contacts[i].getAttribute('texts')<=1000) donuttexts=4;
				if (contacts[i].getAttribute('texts')<800) donuttexts=3;
				if (contacts[i].getAttribute('texts')<600) donuttexts=2;
				if (contacts[i].getAttribute('texts')<200) donuttexts=1;
				if (contacts[i].getAttribute('texts')<100) donuttexts=0;


				donutdata=10;
				if (contacts[i].getAttribute('inclrawdata')<=10000) donutdata=9;
				if (contacts[i].getAttribute('inclrawdata')<=5000) donutdata=8;
				if (contacts[i].getAttribute('inclrawdata')<=3000) donutdata=7;
				if (contacts[i].getAttribute('inclrawdata')<=2000) donutdata=6;
				if (contacts[i].getAttribute('inclrawdata')<=1200) donutdata=5;
				if (contacts[i].getAttribute('inclrawdata')<=1000) donutdata=4;
				if (contacts[i].getAttribute('inclrawdata')<800) donutdata=3;
				if (contacts[i].getAttribute('inclrawdata')<600) donutdata=2;
				if (contacts[i].getAttribute('inclrawdata')<200) donutdata=1;
				if (contacts[i].getAttribute('inclrawdata')<100) donutdata=0;

				var td1 = document.createElement('TD');
				td1.className = 'cell-01';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02 donut donut'+donutmins;
				var td3 = document.createElement('TD');
				td3.className = 'cell-03 donut donut'+donuttexts;
				var td4 = document.createElement('TD');
				td4.className = 'cell-04 donut donut'+donutdata;
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';




				tr.className = 'row-03';
				table.appendChild(tr);

				tr.appendChild(td0);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
				tr.appendChild(td7);
				

				link = contacts[i].getAttribute('affiliate_url');

				
				mobileName = document.createElement('span');
				mobileName.setAttribute('class', 'phonename');
				mobileName.setAttribute('className', 'phonename');
				mobileName.appendChild(document.createTextNode(contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model').replace(' - Clearance', '')));
				if (contacts[i].getAttribute('exact')==0)	td0.appendChild(mobileName);
				
				mobileImage = document.createElement('img');
				mobileImage.setAttribute('src', contacts[i].getAttribute('mobileimage'));
				mobileImage.setAttribute('alt', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
				mobileImage.setAttribute('title', contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model'));
					
				mobileLink = document.createElement('a');
				mobileLink.setAttribute('href', link);
				mobileLink.setAttribute('target','_blank');
				mobileLink.appendChild(mobileImage);		

				if (contacts[i].getAttribute('clearance')==1) {
				
					clearanceText = document.createElement('span');
					clearanceText.setAttribute('class', 'clearance');
					clearanceText.setAttribute('className', 'clearance');
					clearanceText.appendChild(document.createTextNode('Clearance'));
					/*if (contacts[i].getAttribute('exact')==0)*/	td0.appendChild(clearanceText);
				
				}

				/*if (contacts[i].getAttribute('exact')==0)*/	td0.appendChild(mobileLink);
				

				networkImage = document.createElement('img');
				networkImage.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
				networkImage.setAttribute('alt', contacts[i].getAttribute('network'));
				
				networkLink = document.createElement('a');
				networkLink.setAttribute('href', link);
				networkLink.setAttribute('target','_blank');
				networkLink.appendChild(networkImage);
				
				td1.appendChild(networkLink);
				
				
				if (contacts[i].getAttribute('existingcustomerdeal')==1) {
					
					existing = document.createElement('span');
					existing.setAttribute('class', 'fourg2');
					existing.setAttribute('className', 'fourg2');
					existing.appendChild(document.createTextNode('Existing customers'));
				
					td1.appendChild(existing);
					
					
				}			
				
				
				if (contacts[i].getAttribute('gift')) {
				
						giftImage = document.createElement('img');
						giftImage.setAttribute('src', '/'+contacts[i].getAttribute('gift'));
						giftImage.setAttribute('style','padding-top:3px;width:50px;height:50px');
						
						giftLink = document.createElement('a');
						giftLink.setAttribute('href', link);
						giftLink.setAttribute('target','_blank');
						
						giftLink.appendChild(giftImage);
						
						td1.appendChild(giftLink);			
				
				}
				
				
				
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('minutes')));
				
				
					networkImage2 = document.createElement('img');
					networkImage2.setAttribute('src', '/'+contacts[i].getAttribute('network').toLowerCase()+'.jpg');
					networkImage2.setAttribute('alt', contacts[i].getAttribute('network'));
					
					networkspan = document.createElement('span');
					networkspan.className='mobile-txt';
					
					networkspan.appendChild(networkImage2);
					
				td2.appendChild(networkspan);

				td3.appendChild(document.createTextNode(contacts[i].getAttribute('texts')));
				
				
				
				



				if (contacts[i].getAttribute('data')!="0MB" && contacts[i].getAttribute('data')!="Ultd") {
					datalink=document.createElement('a');
					datalink.setAttribute('data-size', contacts[i].getAttribute('data'));
					datalink.setAttribute('title', contacts[i].getAttribute('data'));
					datalink.setAttribute('class', 'tooltip tooltipreset');

					datalink.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
					td4.appendChild(datalink);
				}
				else td4.appendChild(document.createTextNode(contacts[i].getAttribute('data')));
				
				fourg = document.createElement('span');
				fourg.setAttribute('class', 'fourg2 fourgnew');
				fourg.setAttribute('className', 'fourg2 fourgnew');
				fourg.appendChild(document.createTextNode('4G'));
				if(contacts[i].getAttribute('fourg')==1) td4.appendChild(fourg);

				
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')));

				months = document.createElement('span');
				months.appendChild(document.createTextNode('months'));
				td5.appendChild(months);
				
				viaText = document.createElement('span');
				viaText.setAttribute('style', 'margin-top:0;');
	
				
				viaTextImage = document.createElement('img');
				viaTextImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				viaTextImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				viaTextImage.className='retailer-txt';
				//viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailername')));

			
				viaTexta = document.createElement('a');
				viaTexta.setAttribute('href', link);
				viaTexta.setAttribute('target', '_blank');
				viaTexta.appendChild(viaTextImage);
				
				
				viaText.appendChild(viaTexta);
				//td5.appendChild(viaText);				

				
				
				phonePrice = document.createElement('span');
				phonePrice.appendChild(document.createTextNode('Handset'));		

				monthlyCost = document.createElement('span');
				monthlyCost.appendChild(document.createTextNode('Monthly'));
				
				cashBack = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					cashBack.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					cashBack.appendChild(document.createTextNode('Cashback by Redemption'));
				}
				
				td6.appendChild(phonePrice);
				td6.appendChild(freeText('£'+contacts[i].getAttribute('phoneprice')));
				
				td6.appendChild(monthlyCost);
				td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				if (contacts[i].getAttribute('cashback')>0) {
					td6.appendChild(cashBack);
					td6.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				
				//monthlyCost = document.createElement('span');
				//monthlyCost.appendChild(document.createTextNode('avg. monthly'));
				avgMonthlyCost = document.createElement('strong');
				
				
				if (orderby==" firstyearcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('firstyearcost')));
				else if (orderby==" totalcost asc") avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				else  avgMonthlyCost.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avg_monthly_cost')));


				td7.appendChild(avgMonthlyCost);
				//td7.appendChild(monthlyCost);

				getDeal = document.createElement('a');
				getDeal.setAttribute('class', 'btn ie-fix');
				getDeal.setAttribute('className', 'btn ie-fix');
				getDeal.setAttribute('href', link);
				getDeal.setAttribute('target', '_blank');
				getDeal.appendChild(document.createTextNode('grab upgrade'));
				
				td7.appendChild(getDeal);
				
				/*if (contacts[i].getAttribute('number')) {

					contact = document.createElement('span');
					contact.appendChild(document.createTextNode('or call: '+contacts[i].getAttribute('number')));
					td7.appendChild(contact);
				
				}*/

					
				if (notTheSame(contacts[i].getAttribute('network'), contacts[i].getAttribute('retailername'))) {
					viaText = document.createElement('span');
					viaText.setAttribute('style', 'margin-top:0');
					viaText.appendChild(document.createTextNode('from '+contacts[i].getAttribute('retailername')))
					td7.appendChild(viaText);
				}
				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().addClass("green-bottom");$(this).parent().parent().next("tr").show();$(this).parent().parent().next("tr").children().children().children().show();$(this).hide();return false;');
				moreInfo.appendChild(document.createTextNode('more info'));
				
				td1.appendChild(moreInfo);
				

				var tablenew = document.createElement('table');
				tablenew.setAttribute('style', 'font-size:0.41em;width: 100%;');
				
				
				
				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				var td7 = document.createElement('TD');
				td7.className = 'cell-05';
				
				tr.appendChild(td0);

				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td7);
				tr.appendChild(td6);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);


				td0.appendChild(document.createTextNode('Contract\u00a0costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Avg Monthly Cost'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode('£'+contacts[i].getAttribute('avg_monthly_cost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('First Year Cost'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode('£'+contacts[i].getAttribute('firstyearcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Total Cost'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Handset Cost'));
				td4.appendChild(spanText);
				td4.appendChild(freeText('£'+contacts[i].getAttribute('phoneprice')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Line Rental'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));

				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Contract Length'));
				td6.appendChild(spanText);
				td6.appendChild(document.createTextNode(contacts[i].getAttribute('lengthofcontract')+' mths'));

				
				
				cashBack = document.createElement('span');
				if (contacts[i].getAttribute('cashbacktype')==2) {
					cashBack.appendChild(document.createTextNode('Auto Cashback'));
				}
				else {
					cashBack.appendChild(document.createTextNode('Cashback by Redemption'));
				}
				
				
				if (contacts[i].getAttribute('cashback')>0) {
					td7.appendChild(cashBack);
					td7.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				}
				else {
					cashBack = document.createElement('span');
					cashBack.appendChild(document.createTextNode('Cashback'));
					td7.appendChild(cashBack);
					td7.appendChild(document.createTextNode('None'));
				}
				
				tablenew.appendChild(tr);



				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				
				
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');
				td0.appendChild(document.createTextNode('Data limits:'));
				
				

				var td1 = document.createElement('TD');
				
				td1.colSpan="7";
				
				var dataallowance = document.createElement('SPAN');
				dataallowance.innerHTML = contacts[i].childNodes[0].nodeValue;
				
				td1.appendChild(dataallowance);
				
				if (contacts[i].getAttribute('data')!='Ultd') {
					tr.appendChild(td0);
					tr.appendChild(td1);
				}
				
				tablenew.appendChild(tr);



				
				var tr = document.createElement('TR');
				tr.className='row-01 more-info tablegreen';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none;white-space:nowrap;');

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				var td2 = document.createElement('TD');
				td2.className = 'cell-05';
				var td3 = document.createElement('TD');
				td3.className = 'cell-05';
				var td4 = document.createElement('TD');
				td4.className = 'cell-05';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td5a = document.createElement('TD');
				td5a.className = 'cell-05';
				td5a.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td6 = document.createElement('TD');
				td6.className = 'cell-05';
				td6.colSpan="1";
				td6.setAttribute('style', 'text-align:center;border-bottom:1px solid white !important; border-right:1px solid white !important;');
				var td7 = document.createElement('TH');
				td7.className = 'cell-07';
				
				tr.appendChild(td0);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td5a);
				tr.appendChild(td6);

				td0.appendChild(document.createTextNode('Out of bundle costs:'));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Minutes'));
				td1.appendChild(spanText);
				td1.appendChild(document.createTextNode(contacts[i].getAttribute('mincost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Texts'));
				td2.appendChild(spanText);
				td2.appendChild(document.createTextNode(contacts[i].getAttribute('textcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Pictures'));
				td3.appendChild(spanText);
				td3.appendChild(document.createTextNode(contacts[i].getAttribute('picturecost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Voicemail'));
				td4.appendChild(spanText);
				td4.appendChild(document.createTextNode(contacts[i].getAttribute('voicemailcost')));
				
				var spanText = document.createElement('span');
				spanText.appendChild(document.createTextNode('Freephone'));
				td5.appendChild(spanText);
				td5.appendChild(document.createTextNode(contacts[i].getAttribute('freephonecost')));

				
				/*
				td2.appendChild(document.createTextNode('monthly cost'));
				td3.appendChild(document.createTextNode('cashback'));
				td4.appendChild(document.createTextNode('total cost'));
				td5.appendChild(document.createTextNode('retailer'));
				if (contacts[i].getAttribute('gift')) {
					td6.appendChild(document.createTextNode('free gift'));
				}*/
				//td7.appendChild(document.createTextNode(''));

				
				moreInfo = document.createElement('a');
				moreInfo.setAttribute('class', 'btn-info ie-fix');
				moreInfo.setAttribute('className', 'btn-info ie-fix');
				moreInfo.setAttribute('href', 'javascript:void(0);');
				moreInfo.setAttribute('onclick', 'javascript:$(this).parent().parent().parent().parent().parent().prev("tr").removeClass("green-bottom");$(this).parent().parent().parent().parent().parent().hide();$(this).parent().parent().hide();$(this).parent().parent().parent().parent().parent().prev("tr").children("td").eq(1).children("a").eq(1).show();return false;');
				moreInfo.appendChild(document.createTextNode('hide info'));
				
				td6.appendChild(moreInfo);
				
				tablenew.appendChild(tr);















				
				
				
				
				
				//more info
				var tr = document.createElement('TR');
				tr.className='row-01 more-info';
				var td0 = document.createElement('TD');
				td0.colSpan="8";
				td0.setAttribute('style', 'background:none;border-bottom:0;padding:0;text-align:left;font-size:1.4em;color:#444;padding-top: 15px;');				
						
				td0.appendChild(document.createTextNode('You are viewing a deal for the ' +contacts[i].getAttribute('make') + ' ' + contacts[i].getAttribute('model') + ' on ' + contacts[i].getAttribute('network') + '.'));
				//
				td0.appendChild(document.createTextNode(' Before purchasing this phone we advise you to check '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', contacts[i].getAttribute('coverage'));
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('' + contacts[i].getAttribute('network') + '\'s coverage'));
				
				td0.appendChild(coverageLink);
				td0.appendChild(document.createTextNode('.'));
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('We also advise you to become familiar with ' + contacts[i].getAttribute('network') + '\'s '));
				
				fup = document.createElement('a');
				fup.setAttribute('href', contacts[i].getAttribute('fup'));
				fup.setAttribute('target', '_blank');
				fup.appendChild(document.createTextNode('fair use or traffic management policy'));

				td0.appendChild(fup);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				table.appendChild(tr);
				
				td0.appendChild(document.createElement('br'));
				
				td0.appendChild(document.createTextNode('Please research costs before taking your phone abroad and read Ofcom\'s guide on how to prevent '));
				
				billShock = document.createElement('a');
				billShock.setAttribute('href', 'http://consumers.ofcom.org.uk/phone/mobile-phones/problems-and-complaints/mobile-phone-bill-shock/');
				billShock.setAttribute('target', '_blank');
				billShock.appendChild(document.createTextNode('Bill Shock'));

				td0.appendChild(billShock);
				td0.appendChild(document.createTextNode('.'));
				tr.appendChild(td0);
				tablenew.appendChild(tr);
				

				var tr = document.createElement('TR');
				tr.className='row-01 more-info white-bottom more-info-bottom';
				var td0 = document.createElement('TD');
				td0.colSpan="1";
				td0.setAttribute('style', 'background:none');
				td0.appendChild(document.createTextNode('Customer service:'));
				
				

				var td1 = document.createElement('TD');
				td1.className = 'cell-05';
				td1.setAttribute('style', 'background:none;border-bottom:0;padding:0;padding-top:23px;text-align:left;font-size:1.4em;color:#444;padding-bottom: 35px;');
				td1.colSpan="8";
				if (contacts[i].getAttribute('complaints')>0) {		
					td1.appendChild(document.createTextNode('Ofcom reports that they have received '+contacts[i].getAttribute('complaints')+' complaints per 100,000 customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				} else {
					td1.appendChild(document.createTextNode('Ofcom reports that they have received a negligible amount of complaints for customers on '+contacts[i].getAttribute('network')+' over the past 3 months.'));
				}
				td1.appendChild(document.createElement('BR'));
				td1.appendChild(document.createTextNode('You can find more information via Ofcom\'s '));
				
				coverageLink = document.createElement('a');
				coverageLink.setAttribute('href', 'http://media.ofcom.org.uk/news/2014/latest-phone-broadband-and-pay-tv-complaints-revealed-2/');
				coverageLink.setAttribute('target', '_blank');
				coverageLink.appendChild(document.createTextNode('customer service and complaints handling'));
				
				td1.appendChild(coverageLink);
				
				td1.appendChild(document.createTextNode(' guide.'));
				
				//tr.appendChild(td0);
				tr.appendChild(td1);
				
				tablenew.appendChild(tr);


				var trnew = document.createElement('tr');
				var tdnew = document.createElement('td');
				tdnew.colSpan=8;
				tdnew.appendChild(tablenew);
				trnew.className='row-01'
				trnew.appendChild(tdnew);
				
				table.appendChild(trnew)








				/*
				var tr = document.createElement('TR');
				tr.className='row-02';

				var td1 = document.createElement('TD');
				td1.className = 'cell-01';
				var td2 = document.createElement('TD');
				td2.className = 'cell-02';
				var td3 = document.createElement('TD');
				td3.className = 'cell-03';
				var td4 = document.createElement('TD');
				td4.className = 'cell-04';
				var td5 = document.createElement('TD');
				td5.className = 'cell-05';
				var td6 = document.createElement('TD');
				td6.className = 'cell-06';
				var td7 = document.createElement('TD');
				td7.className = 'cell-07';
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				if (contacts[i].getAttribute('gift')) {
					tr.appendChild(td6);
				}
				//tr.appendChild(td7);

																
				td1.appendChild(document.createTextNode('£'+contacts[i].getAttribute('phoneprice')));				
				td2.appendChild(document.createTextNode('£'+contacts[i].getAttribute('monthlycost')));
				td3.appendChild(document.createTextNode('£'+contacts[i].getAttribute('cashback')));
				td4.appendChild(document.createTextNode('£'+contacts[i].getAttribute('totalcost')));
				
				retailerImage = document.createElement('img');
				retailerImage.setAttribute('src', '/'+contacts[i].getAttribute('retailername').toLowerCase()+'.jpg');
				retailerImage.setAttribute('alt', contacts[i].getAttribute('retailername'));
				
				td5.appendChild(retailerImage);
				
				if (contacts[i].getAttribute('gift')) {
					giftImage = document.createElement('img');
					giftImage.setAttribute('src', '/'+contacts[i].getAttribute('gift').toLowerCase());
					giftImage.setAttribute('alt', contacts[i].getAttribute('gift'));
					
					td6.appendChild(giftImage);
				}	
									
				
				
				table.appendChild(tr);*/

			}

			 pageNumbers(getObjInnerText(current_page[0]), getObjInnerText(max_pages[0]), 'updateUpgradeOffers');

		}
		p1 =1;
		removePleaseWait();
		
		


	}
	catch (e) { p1 =1;removePleaseWait();
	}


}



/* qTip2 v2.2.0 tips modal viewport svg imagemap ie6 | qtip2.com | Licensed MIT, GPL | Thu Nov 21 2013 20:34:59 */
(function(t,e,i){(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)})(function(s){"use strict";function o(t,e,i,o){this.id=i,this.target=t,this.tooltip=E,this.elements={target:t},this._id=X+"-"+i,this.timers={img:{}},this.options=e,this.plugins={},this.cache={event:{},target:s(),disabled:k,attr:o,onTooltip:k,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=k}function n(t){return t===E||"object"!==s.type(t)}function r(t){return!(s.isFunction(t)||t&&t.attr||t.length||"object"===s.type(t)&&(t.jquery||t.then))}function a(t){var e,i,o,a;return n(t)?k:(n(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&(e=t.content,n(e)||e.jquery||e.done?e=t.content={text:i=r(e)?k:e}:i=e.text,"ajax"in e&&(o=e.ajax,a=o&&o.once!==k,delete e.ajax,e.text=function(t,e){var n=i||s(this).attr(e.options.content.attr)||"Loading...",r=s.ajax(s.extend({},o,{context:e})).then(o.success,E,o.error).then(function(t){return t&&a&&e.set("content.text",t),t},function(t,i,s){e.destroyed||0===t.status||e.set("content.text",i+": "+s)});return a?n:(e.set("content.text",n),r)}),"title"in e&&(n(e.title)||(e.button=e.title.button,e.title=e.title.text),r(e.title||k)&&(e.title=k))),"position"in t&&n(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&n(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===W?{ready:W}:{event:t.show}),"hide"in t&&n(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&n(t.style)&&(t.style={classes:t.style}),s.each(R,function(){this.sanitize&&this.sanitize(t)}),t)}function h(t,e){for(var i,s=0,o=t,n=e.split(".");o=o[n[s++]];)n.length>s&&(i=o);return[i||t,n.pop()]}function l(t,e){var i,s,o;for(i in this.checks)for(s in this.checks[i])(o=RegExp(s,"i").exec(t))&&(e.push(o),("builtin"===i||this.plugins[i])&&this.checks[i][s].apply(this.plugins[i]||this,e))}function c(t){return G.concat("").join(t?"-"+t+" ":" ")}function d(i){return i&&{type:i.type,pageX:i.pageX,pageY:i.pageY,target:i.target,relatedTarget:i.relatedTarget,scrollX:i.scrollX||t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:i.scrollY||t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}||{}}function p(t,e){return e>0?setTimeout(s.proxy(t,this),e):(t.call(this),i)}function u(t){return this.tooltip.hasClass(ee)?k:(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=p.call(this,function(){this.toggle(W,t)},this.options.show.delay),i)}function f(t){if(this.tooltip.hasClass(ee))return k;var e=s(t.relatedTarget),i=e.closest(U)[0]===this.tooltip[0],o=e[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==e[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||o))try{t.preventDefault(),t.stopImmediatePropagation()}catch(n){}else this.timers.hide=p.call(this,function(){this.toggle(k,t)},this.options.hide.delay,this)}function g(t){return this.tooltip.hasClass(ee)||!this.options.hide.inactive?k:(clearTimeout(this.timers.inactive),this.timers.inactive=p.call(this,function(){this.hide(t)},this.options.hide.inactive),i)}function m(t){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(t)}function v(t,i,o){s(e.body).delegate(t,(i.split?i:i.join(he+" "))+he,function(){var t=T.api[s.attr(this,H)];t&&!t.disabled&&o.apply(t,arguments)})}function y(t,i,n){var r,h,l,c,d,p=s(e.body),u=t[0]===e?p:t,f=t.metadata?t.metadata(n.metadata):E,g="html5"===n.metadata.type&&f?f[n.metadata.name]:E,m=t.data(n.metadata.name||"qtipopts");try{m="string"==typeof m?s.parseJSON(m):m}catch(v){}if(c=s.extend(W,{},T.defaults,n,"object"==typeof m?a(m):E,a(g||f)),h=c.position,c.id=i,"boolean"==typeof c.content.text){if(l=t.attr(c.content.attr),c.content.attr===k||!l)return k;c.content.text=l}if(h.container.length||(h.container=p),h.target===k&&(h.target=u),c.show.target===k&&(c.show.target=u),c.show.solo===W&&(c.show.solo=h.container.closest("body")),c.hide.target===k&&(c.hide.target=u),c.position.viewport===W&&(c.position.viewport=h.container),h.container=h.container.eq(0),h.at=new z(h.at,W),h.my=new z(h.my),t.data(X))if(c.overwrite)t.qtip("destroy",!0);else if(c.overwrite===k)return k;return t.attr(Y,i),c.suppress&&(d=t.attr("title"))&&t.removeAttr("title").attr(se,d).attr("title",""),r=new o(t,c,i,!!l),t.data(X,r),t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t;(t=s(this).data(X))&&t.destroy(!0)}),r}function b(t){return t.charAt(0).toUpperCase()+t.slice(1)}function w(t,e){var s,o,n=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+be.join(n+" ")+n).split(" "),a=0;if(ye[e])return t.css(ye[e]);for(;s=r[a++];)if((o=t.css(s))!==i)return ye[e]=s,o}function _(t,e){return Math.ceil(parseFloat(w(t,e)))}function x(t,e){this._ns="tip",this.options=e,this.offset=e.offset,this.size=[e.width,e.height],this.init(this.qtip=t)}function q(t,e){this.options=e,this._ns="-modal",this.init(this.qtip=t)}function C(t){this._ns="ie6",this.init(this.qtip=t)}var T,j,z,M,I,W=!0,k=!1,E=null,S="x",L="y",A="width",B="height",D="top",F="left",O="bottom",P="right",N="center",$="flipinvert",V="shift",R={},X="qtip",Y="data-hasqtip",H="data-qtip-id",G=["ui-widget","ui-tooltip"],U="."+X,Q="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),J=X+"-fixed",K=X+"-default",Z=X+"-focus",te=X+"-hover",ee=X+"-disabled",ie="_replacedByqTip",se="oldtitle",oe={ie:function(){for(var t=3,i=e.createElement("div");(i.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->")&&i.getElementsByTagName("i")[0];);return t>4?t:0/0}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||k};j=o.prototype,j._when=function(t){return s.when.apply(s,t)},j.render=function(t){if(this.rendered||this.destroyed)return this;var e,i=this,o=this.options,n=this.cache,r=this.elements,a=o.content.text,h=o.content.title,l=o.content.button,c=o.position,d=("."+this._id+" ",[]);return s.attr(this.target[0],"aria-describedby",this._id),this.tooltip=r.tooltip=e=s("<div/>",{id:this._id,"class":[X,K,o.style.classes,X+"-pos-"+o.position.my.abbrev()].join(" "),width:o.style.width||"",height:o.style.height||"",tracking:"mouse"===c.target&&c.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":k,"aria-describedby":this._id+"-content","aria-hidden":W}).toggleClass(ee,this.disabled).attr(H,this.id).data(X,this).appendTo(c.container).append(r.content=s("<div />",{"class":X+"-content",id:this._id+"-content","aria-atomic":W})),this.rendered=-1,this.positioning=W,h&&(this._createTitle(),s.isFunction(h)||d.push(this._updateTitle(h,k))),l&&this._createButton(),s.isFunction(a)||d.push(this._updateContent(a,k)),this.rendered=W,this._setWidget(),s.each(R,function(t){var e;"render"===this.initialize&&(e=this(i))&&(i.plugins[t]=e)}),this._unassignEvents(),this._assignEvents(),this._when(d).then(function(){i._trigger("render"),i.positioning=k,i.hiddenDuringWait||!o.show.ready&&!t||i.toggle(W,n.event,k),i.hiddenDuringWait=k}),T.api[this.id]=this,this},j.destroy=function(t){function e(){if(!this.destroyed){this.destroyed=W;var t=this.target,e=t.attr(se);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),s.each(this.plugins,function(){this.destroy&&this.destroy()}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),t.removeData(X).removeAttr(H).removeAttr(Y).removeAttr("aria-describedby"),this.options.suppress&&e&&t.attr("title",e).removeAttr(se),this._unbind(t),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=E,delete T.api[this.id]}}return this.destroyed?this.target:(t===W&&"hide"!==this.triggering||!this.rendered?e.call(this):(this.tooltip.one("tooltiphidden",s.proxy(e,this)),!this.triggering&&this.hide()),this.target)},M=j.checks={builtin:{"^id$":function(t,e,i,o){var n=i===W?T.nextid:i,r=X+"-"+n;n!==k&&n.length>0&&!s("#"+r).length?(this._id=r,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):t[e]=o},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,s){this.options.content.text===this.target.attr(s)&&this._updateContent(this.target.attr(i))},"^content.title$":function(t,e,s){return s?(s&&!this.elements.title&&this._createTitle(),this._updateTitle(s),i):this._removeTitle()},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"==typeof i&&(t[e]=new z(i,"at"===e))},"^position.container$":function(t,e,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(W)||this.toggle(W))},"^style.classes$":function(t,e,i,s){this.rendered&&this.tooltip.removeClass(s).addClass(i)},"^style.(width|height)":function(t,e,i){this.rendered&&this.tooltip.css(e,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(t,e,i){this.rendered&&this.tooltip.toggleClass(K,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){this.rendered&&this.tooltip[(s.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var t=this.options.position;this.tooltip.attr("tracking","mouse"===t.target&&t.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},j.get=function(t){if(this.destroyed)return this;var e=h(this.options,t.toLowerCase()),i=e[0][e[1]];return i.precedance?i.string():i};var ne=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,re=/^prerender|show\.ready/i;j.set=function(t,e){if(this.destroyed)return this;var o,n=this.rendered,r=k,c=this.options;return this.checks,"string"==typeof t?(o=t,t={},t[o]=e):t=s.extend({},t),s.each(t,function(e,o){if(n&&re.test(e))return delete t[e],i;var a,l=h(c,e.toLowerCase());a=l[0][l[1]],l[0][l[1]]=o&&o.nodeType?s(o):o,r=ne.test(e)||r,t[e]=[l[0],l[1],o,a]}),a(c),this.positioning=W,s.each(t,s.proxy(l,this)),this.positioning=k,this.rendered&&this.tooltip[0].offsetWidth>0&&r&&this.reposition("mouse"===c.position.target?E:this.cache.event),this},j._update=function(t,e){var i=this,o=this.cache;return this.rendered&&t?(s.isFunction(t)&&(t=t.call(this.elements.target,o.event,this)||""),s.isFunction(t.then)?(o.waiting=W,t.then(function(t){return o.waiting=k,i._update(t,e)},E,function(t){return i._update(t,e)})):t===k||!t&&""!==t?k:(t.jquery&&t.length>0?e.empty().append(t.css({display:"block",visibility:"visible"})):e.html(t),this._waitForContent(e).then(function(t){t.images&&t.images.length&&i.rendered&&i.tooltip[0].offsetWidth>0&&i.reposition(o.event,!t.length)}))):k},j._waitForContent=function(t){var e=this.cache;return e.waiting=W,(s.fn.imagesLoaded?t.imagesLoaded():s.Deferred().resolve([])).done(function(){e.waiting=k}).promise()},j._updateContent=function(t,e){this._update(t,this.elements.content,e)},j._updateTitle=function(t,e){this._update(t,this.elements.title,e)===k&&this._removeTitle(k)},j._createTitle=function(){var t=this.elements,e=this._id+"-title";t.titlebar&&this._removeTitle(),t.titlebar=s("<div />",{"class":X+"-titlebar "+(this.options.style.widget?c("header"):"")}).append(t.title=s("<div />",{id:e,"class":X+"-title","aria-atomic":W})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){s(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){s(this).toggleClass("ui-state-hover","mouseover"===t.type)}),this.options.content.button&&this._createButton()},j._removeTitle=function(t){var e=this.elements;e.title&&(e.titlebar.remove(),e.titlebar=e.title=e.button=E,t!==k&&this.reposition())},j.reposition=function(i,o){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=W;var n,r,a=this.cache,h=this.tooltip,l=this.options.position,c=l.target,d=l.my,p=l.at,u=l.viewport,f=l.container,g=l.adjust,m=g.method.split(" "),v=h.outerWidth(k),y=h.outerHeight(k),b=0,w=0,_=h.css("position"),x={left:0,top:0},q=h[0].offsetWidth>0,C=i&&"scroll"===i.type,T=s(t),j=f[0].ownerDocument,z=this.mouse;if(s.isArray(c)&&2===c.length)p={x:F,y:D},x={left:c[0],top:c[1]};else if("mouse"===c)p={x:F,y:D},!z||!z.pageX||!g.mouse&&i&&i.pageX?i&&i.pageX||((!g.mouse||this.options.show.distance)&&a.origin&&a.origin.pageX?i=a.origin:(!i||i&&("resize"===i.type||"scroll"===i.type))&&(i=a.event)):i=z,"static"!==_&&(x=f.offset()),j.body.offsetWidth!==(t.innerWidth||j.documentElement.clientWidth)&&(r=s(e.body).offset()),x={left:i.pageX-x.left+(r&&r.left||0),top:i.pageY-x.top+(r&&r.top||0)},g.mouse&&C&&z&&(x.left-=(z.scrollX||0)-T.scrollLeft(),x.top-=(z.scrollY||0)-T.scrollTop());else{if("event"===c?i&&i.target&&"scroll"!==i.type&&"resize"!==i.type?a.target=s(i.target):i.target||(a.target=this.elements.target):"event"!==c&&(a.target=s(c.jquery?c:this.elements.target)),c=a.target,c=s(c).eq(0),0===c.length)return this;c[0]===e||c[0]===t?(b=oe.iOS?t.innerWidth:c.width(),w=oe.iOS?t.innerHeight:c.height(),c[0]===t&&(x={top:(u||c).scrollTop(),left:(u||c).scrollLeft()})):R.imagemap&&c.is("area")?n=R.imagemap(this,c,p,R.viewport?m:k):R.svg&&c&&c[0].ownerSVGElement?n=R.svg(this,c,p,R.viewport?m:k):(b=c.outerWidth(k),w=c.outerHeight(k),x=c.offset()),n&&(b=n.width,w=n.height,r=n.offset,x=n.position),x=this.reposition.offset(c,x,f),(oe.iOS>3.1&&4.1>oe.iOS||oe.iOS>=4.3&&4.33>oe.iOS||!oe.iOS&&"fixed"===_)&&(x.left-=T.scrollLeft(),x.top-=T.scrollTop()),(!n||n&&n.adjustable!==k)&&(x.left+=p.x===P?b:p.x===N?b/2:0,x.top+=p.y===O?w:p.y===N?w/2:0)}return x.left+=g.x+(d.x===P?-v:d.x===N?-v/2:0),x.top+=g.y+(d.y===O?-y:d.y===N?-y/2:0),R.viewport?(x.adjusted=R.viewport(this,x,l,b,w,v,y),r&&x.adjusted.left&&(x.left+=r.left),r&&x.adjusted.top&&(x.top+=r.top)):x.adjusted={left:0,top:0},this._trigger("move",[x,u.elem||u],i)?(delete x.adjusted,o===k||!q||isNaN(x.left)||isNaN(x.top)||"mouse"===c||!s.isFunction(l.effect)?h.css(x):s.isFunction(l.effect)&&(l.effect.call(h,this,s.extend({},x)),h.queue(function(t){s(this).css({opacity:"",height:""}),oe.ie&&this.style.removeAttribute("filter"),t()})),this.positioning=k,this):this},j.reposition.offset=function(t,i,o){function n(t,e){i.left+=e*t.scrollLeft(),i.top+=e*t.scrollTop()}if(!o[0])return i;var r,a,h,l,c=s(t[0].ownerDocument),d=!!oe.ie&&"CSS1Compat"!==e.compatMode,p=o[0];do"static"!==(a=s.css(p,"position"))&&("fixed"===a?(h=p.getBoundingClientRect(),n(c,-1)):(h=s(p).position(),h.left+=parseFloat(s.css(p,"borderLeftWidth"))||0,h.top+=parseFloat(s.css(p,"borderTopWidth"))||0),i.left-=h.left+(parseFloat(s.css(p,"marginLeft"))||0),i.top-=h.top+(parseFloat(s.css(p,"marginTop"))||0),r||"hidden"===(l=s.css(p,"overflow"))||"visible"===l||(r=s(p)));while(p=p.offsetParent);return r&&(r[0]!==c[0]||d)&&n(r,1),i};var ae=(z=j.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,N).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!e;var i=t.charAt(0);this.precedance="t"===i||"b"===i?L:S}).prototype;ae.invert=function(t,e){this[t]=this[t]===F?P:this[t]===P?F:e||this[t]},ae.string=function(){var t=this.x,e=this.y;return t===e?t:this.precedance===L||this.forceY&&"center"!==e?e+" "+t:t+" "+e},ae.abbrev=function(){var t=this.string().split(" ");return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")},ae.clone=function(){return new z(this.string(),this.forceY)},j.toggle=function(t,i){var o=this.cache,n=this.options,r=this.tooltip;if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(o.event.type)&&n.show.target.add(i.target).length===n.show.target.length&&r.has(i.relatedTarget).length)return this;o.event=d(i)}if(this.waiting&&!t&&(this.hiddenDuringWait=W),!this.rendered)return t?this.render(1):this;if(this.destroyed||this.disabled)return this;var a,h,l,c=t?"show":"hide",p=this.options[c],u=(this.options[t?"hide":"show"],this.options.position),f=this.options.content,g=this.tooltip.css("width"),m=this.tooltip.is(":visible"),v=t||1===p.target.length,y=!i||2>p.target.length||o.target[0]===i.target;return(typeof t).search("boolean|number")&&(t=!m),a=!r.is(":animated")&&m===t&&y,h=a?E:!!this._trigger(c,[90]),this.destroyed?this:(h!==k&&t&&this.focus(i),!h||a?this:(s.attr(r[0],"aria-hidden",!t),t?(o.origin=d(this.mouse),s.isFunction(f.text)&&this._updateContent(f.text,k),s.isFunction(f.title)&&this._updateTitle(f.title,k),!I&&"mouse"===u.target&&u.adjust.mouse&&(s(e).bind("mousemove."+X,this._storeMouse),I=W),g||r.css("width",r.outerWidth(k)),this.reposition(i,arguments[2]),g||r.css("width",""),p.solo&&("string"==typeof p.solo?s(p.solo):s(U,p.solo)).not(r).not(p.target).qtip("hide",s.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete o.origin,I&&!s(U+'[tracking="true"]:visible',p.solo).not(r).length&&(s(e).unbind("mousemove."+X),I=k),this.blur(i)),l=s.proxy(function(){t?(oe.ie&&r[0].style.removeAttribute("filter"),r.css("overflow",""),"string"==typeof p.autofocus&&s(this.options.show.autofocus,r).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):r.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(t?"visible":"hidden")},this),p.effect===k||v===k?(r[c](),l()):s.isFunction(p.effect)?(r.stop(1,1),p.effect.call(r,this),r.queue("fx",function(t){l(),t()})):r.fadeTo(90,t?1:0,l),t&&p.target.trigger("qtip-"+this.id+"-inactive"),this))},j.show=function(t){return this.toggle(W,t)},j.hide=function(t){return this.toggle(k,t)},j.focus=function(t){if(!this.rendered||this.destroyed)return this;var e=s(U),i=this.tooltip,o=parseInt(i[0].style.zIndex,10),n=T.zindex+e.length;return i.hasClass(Z)||this._trigger("focus",[n],t)&&(o!==n&&(e.each(function(){this.style.zIndex>o&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+Z).qtip("blur",t)),i.addClass(Z)[0].style.zIndex=n),this},j.blur=function(t){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(Z),this._trigger("blur",[this.tooltip.css("zIndex")],t),this)},j.disable=function(t){return this.destroyed?this:("toggle"===t?t=!(this.rendered?this.tooltip.hasClass(ee):this.disabled):"boolean"!=typeof t&&(t=W),this.rendered&&this.tooltip.toggleClass(ee,t).attr("aria-disabled",t),this.disabled=!!t,this)},j.enable=function(){return this.disable(k)},j._createButton=function(){var t=this,e=this.elements,i=e.tooltip,o=this.options.content.button,n="string"==typeof o,r=n?o:"Close tooltip";e.button&&e.button.remove(),e.button=o.jquery?o:s("<a />",{"class":"qtip-close "+(this.options.style.widget?"":X+"-icon"),title:r,"aria-label":r}).prepend(s("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){return i.hasClass(ee)||t.hide(e),k})},j._updateButton=function(t){if(!this.rendered)return k;var e=this.elements.button;t?this._createButton():e.remove()},j._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,s=i.hasClass(ee);i.removeClass(ee),ee=t?"ui-state-disabled":"qtip-disabled",i.toggleClass(ee,s),i.toggleClass("ui-helper-reset "+c(),t).toggleClass(K,this.options.style.def&&!t),e.content&&e.content.toggleClass(c("content"),t),e.titlebar&&e.titlebar.toggleClass(c("header"),t),e.button&&e.button.toggleClass(X+"-icon",!t)},j._storeMouse=function(t){(this.mouse=d(t)).type="mousemove"},j._bind=function(t,e,i,o,n){var r="."+this._id+(o?"-"+o:"");e.length&&s(t).bind((e.split?e:e.join(r+" "))+r,s.proxy(i,n||this))},j._unbind=function(t,e){s(t).unbind("."+this._id+(e?"-"+e:""))};var he="."+X;s(function(){v(U,["mouseenter","mouseleave"],function(t){var e="mouseenter"===t.type,i=s(t.currentTarget),o=s(t.relatedTarget||t.target),n=this.options;e?(this.focus(t),i.hasClass(J)&&!i.hasClass(ee)&&clearTimeout(this.timers.hide)):"mouse"===n.position.target&&n.hide.event&&n.show.target&&!o.closest(n.show.target[0]).length&&this.hide(t),i.toggleClass(te,e)}),v("["+H+"]",Q,g)}),j._trigger=function(t,e,i){var o=s.Event("tooltip"+t);return o.originalEvent=i&&s.extend({},i)||this.cache.event||E,this.triggering=t,this.tooltip.trigger(o,[this].concat(e||[])),this.triggering=k,!o.isDefaultPrevented()},j._bindEvents=function(t,e,o,n,r,a){if(n.add(o).length===n.length){var h=[];e=s.map(e,function(e){var o=s.inArray(e,t);return o>-1?(h.push(t.splice(o,1)[0]),i):e}),h.length&&this._bind(o,h,function(t){var e=this.rendered?this.tooltip[0].offsetWidth>0:!1;(e?a:r).call(this,t)})}this._bind(o,t,r),this._bind(n,e,a)},j._assignInitialEvents=function(t){function e(t){return this.disabled||this.destroyed?k:(this.cache.event=d(t),this.cache.target=t?s(t.target):[i],clearTimeout(this.timers.show),this.timers.show=p.call(this,function(){this.render("object"==typeof t||o.show.ready)},o.show.delay),i)}var o=this.options,n=o.show.target,r=o.hide.target,a=o.show.event?s.trim(""+o.show.event).split(" "):[],h=o.hide.event?s.trim(""+o.hide.event).split(" "):[];/mouse(over|enter)/i.test(o.show.event)&&!/mouse(out|leave)/i.test(o.hide.event)&&h.push("mouseleave"),this._bind(n,"mousemove",function(t){this._storeMouse(t),this.cache.onTarget=W}),this._bindEvents(a,h,n,r,e,function(){clearTimeout(this.timers.show)}),(o.show.ready||o.prerender)&&e.call(this,t)},j._assignEvents=function(){var i=this,o=this.options,n=o.position,r=this.tooltip,a=o.show.target,h=o.hide.target,l=n.container,c=n.viewport,d=s(e),p=(s(e.body),s(t)),v=o.show.event?s.trim(""+o.show.event).split(" "):[],y=o.hide.event?s.trim(""+o.hide.event).split(" "):[];s.each(o.events,function(t,e){i._bind(r,"toggle"===t?["tooltipshow","tooltiphide"]:["tooltip"+t],e,null,r)}),/mouse(out|leave)/i.test(o.hide.event)&&"window"===o.hide.leave&&this._bind(d,["mouseout","blur"],function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||this.hide(t)}),o.hide.fixed?h=h.add(r.addClass(J)):/mouse(over|enter)/i.test(o.show.event)&&this._bind(h,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+o.hide.event).indexOf("unfocus")>-1&&this._bind(l.closest("html"),["mousedown","touchstart"],function(t){var e=s(t.target),i=this.rendered&&!this.tooltip.hasClass(ee)&&this.tooltip[0].offsetWidth>0,o=e.parents(U).filter(this.tooltip[0]).length>0;e[0]===this.target[0]||e[0]===this.tooltip[0]||o||this.target.has(e[0]).length||!i||this.hide(t)}),"number"==typeof o.hide.inactive&&(this._bind(a,"qtip-"+this.id+"-inactive",g),this._bind(h.add(r),T.inactiveEvents,g,"-inactive")),this._bindEvents(v,y,a,h,u,f),this._bind(a.add(r),"mousemove",function(t){if("number"==typeof o.hide.distance){var e=this.cache.origin||{},i=this.options.hide.distance,s=Math.abs;(s(t.pageX-e.pageX)>=i||s(t.pageY-e.pageY)>=i)&&this.hide(t)}this._storeMouse(t)}),"mouse"===n.target&&n.adjust.mouse&&(o.hide.event&&this._bind(a,["mouseenter","mouseleave"],function(t){this.cache.onTarget="mouseenter"===t.type}),this._bind(d,"mousemove",function(t){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(ee)&&this.tooltip[0].offsetWidth>0&&this.reposition(t)})),(n.adjust.resize||c.length)&&this._bind(s.event.special.resize?c:p,"resize",m),n.adjust.scroll&&this._bind(p.add(n.container),"scroll",m)},j._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e];this._unbind(s([]).pushStack(s.grep(i,function(t){return"object"==typeof t})))},T=s.fn.qtip=function(t,e,o){var n=(""+t).toLowerCase(),r=E,h=s.makeArray(arguments).slice(1),l=h[h.length-1],c=this[0]?s.data(this[0],X):E;return!arguments.length&&c||"api"===n?c:"string"==typeof t?(this.each(function(){var t=s.data(this,X);if(!t)return W;if(l&&l.timeStamp&&(t.cache.event=l),!e||"option"!==n&&"options"!==n)t[n]&&t[n].apply(t,h);else{if(o===i&&!s.isPlainObject(e))return r=t.get(e),k;t.set(e,o)}}),r!==E?r:this):"object"!=typeof t&&arguments.length?i:(c=a(s.extend(W,{},t)),this.each(function(t){var e,o;return o=s.isArray(c.id)?c.id[t]:c.id,o=!o||o===k||1>o.length||T.api[o]?T.nextid++:o,e=y(s(this),o,c),e===k?W:(T.api[o]=e,s.each(R,function(){"initialize"===this.initialize&&this(e)}),e._assignInitialEvents(l),i)}))},s.qtip=o,T.api={},s.each({attr:function(t,e){if(this.length){var i=this[0],o="title",n=s.data(i,"qtip");if(t===o&&n&&"object"==typeof n&&n.options.suppress)return 2>arguments.length?s.attr(i,se):(n&&n.options.content.attr===o&&n.cache.attr&&n.set("content.text",e),this.attr(se,e))}return s.fn["attr"+ie].apply(this,arguments)},clone:function(t){var e=(s([]),s.fn["clone"+ie].apply(this,arguments));return t||e.filter("["+se+"]").attr("title",function(){return s.attr(this,se)}).removeAttr(se),e}},function(t,e){if(!e||s.fn[t+ie])return W;var i=s.fn[t+ie]=s.fn[t];s.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}}),s.ui||(s["cleanData"+ie]=s.cleanData,s.cleanData=function(t){for(var e,i=0;(e=s(t[i])).length;i++)if(e.attr(Y))try{e.triggerHandler("removeqtip")}catch(o){}s["cleanData"+ie].apply(this,arguments)}),T.version="2.2.0",T.nextid=0,T.inactiveEvents=Q,T.zindex=15e3,T.defaults={prerender:k,id:k,overwrite:W,suppress:W,content:{text:W,attr:"title",title:k,button:k},position:{my:"top left",at:"bottom right",target:k,container:k,viewport:k,adjust:{x:0,y:0,mouse:W,scroll:W,resize:W,method:"flipinvert flipinvert"},effect:function(t,e){s(this).animate(e,{duration:200,queue:k})}},show:{target:k,event:"mouseenter",effect:W,delay:90,solo:k,ready:k,autofocus:k},hide:{target:k,event:"mouseleave",effect:W,delay:0,fixed:k,inactive:k,leave:"window",distance:k},style:{classes:"",widget:k,width:k,height:k,def:W},events:{render:E,move:E,show:E,hide:E,toggle:E,visible:E,hidden:E,focus:E,blur:E}};var le,ce="margin",de="border",pe="color",ue="background-color",fe="transparent",ge=" !important",me=!!e.createElement("canvas").getContext,ve=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,ye={},be=["Webkit","O","Moz","ms"];if(me)var we=t.devicePixelRatio||1,_e=function(){var t=e.createElement("canvas").getContext("2d");return t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1}(),xe=we/_e;else var qe=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'};s.extend(x.prototype,{init:function(t){var e,i;i=this.element=t.elements.tip=s("<div />",{"class":X+"-tip"}).prependTo(t.tooltip),me?(e=s("<canvas />").appendTo(this.element)[0].getContext("2d"),e.lineJoin="miter",e.miterLimit=1e5,e.save()):(e=qe("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(e+e),t._bind(s("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)),t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar;return e&&(t.y===D||t.y===N&&this.element.position().top+this.size[1]/2+this.options.offset<e.outerHeight(W))},_parseCorner:function(t){var e=this.qtip.options.position.my;return t===k||e===k?t=k:t===W?t=new z(e.string()):t.string||(t=new z(t),t.fixed=W),t},_parseWidth:function(t,e,i){var s=this.qtip.elements,o=de+b(e)+"Width";return(i?_(i,o):_(s.content,o)||_(this._useTitle(t)&&s.titlebar||s.content,o)||_(s.tooltip,o))||0},_parseRadius:function(t){var e=this.qtip.elements,i=de+b(t.y)+b(t.x)+"Radius";return 9>oe.ie?0:_(this._useTitle(t)&&e.titlebar||e.content,i)||_(e.tooltip,i)||0},_invalidColour:function(t,e,i){var s=t.css(e);return!s||i&&s===t.css(i)||ve.test(s)?k:s},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),o=de+b(t[t.precedance])+b(pe),n=this._useTitle(t)&&e.titlebar||e.content,r=this._invalidColour,a=[];return a[0]=r(i,ue)||r(n,ue)||r(e.content,ue)||r(e.tooltip,ue)||i.css(ue),a[1]=r(i,o,pe)||r(n,o,pe)||r(e.content,o,pe)||r(e.tooltip,o,pe)||e.tooltip.css(o),s("*",i).add(i).css("cssText",ue+":"+fe+ge+";"+de+":0"+ge+";"),a},_calculateSize:function(t){var e,i,s,o=t.precedance===L,n=this.options.width,r=this.options.height,a="c"===t.abbrev(),h=(o?n:r)*(a?.5:1),l=Math.pow,c=Math.round,d=Math.sqrt(l(h,2)+l(r,2)),p=[this.border/h*d,this.border/r*d];return p[2]=Math.sqrt(l(p[0],2)-l(this.border,2)),p[3]=Math.sqrt(l(p[1],2)-l(this.border,2)),e=d+p[2]+p[3]+(a?0:p[0]),i=e/d,s=[c(i*n),c(i*r)],o?s:s.reverse()},_calculateTip:function(t,e,i){i=i||1,e=e||this.size;var s=e[0]*i,o=e[1]*i,n=Math.ceil(s/2),r=Math.ceil(o/2),a={br:[0,0,s,o,s,0],bl:[0,0,s,0,0,o],tr:[0,o,s,0,s,o],tl:[0,0,0,o,s,o],tc:[0,o,n,0,s,o],bc:[0,0,s,0,n,o],rc:[0,0,s,r,0,o],lc:[s,0,s,o,0,r]};return a.lt=a.br,a.rt=a.bl,a.lb=a.tr,a.rb=a.tl,a[t.abbrev()]},_drawCoords:function(t,e){t.beginPath(),t.moveTo(e[0],e[1]),t.lineTo(e[2],e[3]),t.lineTo(e[4],e[5]),t.closePath()},create:function(){var t=this.corner=(me||oe.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=t.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(e,i){if(!this.enabled)return this;var o,n,r,a,h,l,c,d,p=this.qtip.elements,u=this.element,f=u.children(),g=this.options,m=this.size,v=g.mimic,y=Math.round;e||(e=this.qtip.cache.corner||this.corner),v===k?v=e:(v=new z(v),v.precedance=e.precedance,"inherit"===v.x?v.x=e.x:"inherit"===v.y?v.y=e.y:v.x===v.y&&(v[e.precedance]=e[e.precedance])),n=v.precedance,e.precedance===S?this._swapDimensions():this._resetDimensions(),o=this.color=this._parseColours(e),o[1]!==fe?(d=this.border=this._parseWidth(e,e[e.precedance]),g.border&&1>d&&!ve.test(o[1])&&(o[0]=o[1]),this.border=d=g.border!==W?g.border:d):this.border=d=0,c=this.size=this._calculateSize(e),u.css({width:c[0],height:c[1],lineHeight:c[1]+"px"}),l=e.precedance===L?[y(v.x===F?d:v.x===P?c[0]-m[0]-d:(c[0]-m[0])/2),y(v.y===D?c[1]-m[1]:0)]:[y(v.x===F?c[0]-m[0]:0),y(v.y===D?d:v.y===O?c[1]-m[1]-d:(c[1]-m[1])/2)],me?(r=f[0].getContext("2d"),r.restore(),r.save(),r.clearRect(0,0,6e3,6e3),a=this._calculateTip(v,m,xe),h=this._calculateTip(v,this.size,xe),f.attr(A,c[0]*xe).attr(B,c[1]*xe),f.css(A,c[0]).css(B,c[1]),this._drawCoords(r,h),r.fillStyle=o[1],r.fill(),r.translate(l[0]*xe,l[1]*xe),this._drawCoords(r,a),r.fillStyle=o[0],r.fill()):(a=this._calculateTip(v),a="m"+a[0]+","+a[1]+" l"+a[2]+","+a[3]+" "+a[4]+","+a[5]+" xe",l[2]=d&&/^(r|b)/i.test(e.string())?8===oe.ie?2:1:0,f.css({coordsize:c[0]+d+" "+(c[1]+d),antialias:""+(v.string().indexOf(N)>-1),left:l[0]-l[2]*Number(n===S),top:l[1]-l[2]*Number(n===L),width:c[0]+d,height:c[1]+d}).each(function(t){var e=s(this);e[e.prop?"prop":"attr"]({coordsize:c[0]+d+" "+(c[1]+d),path:a,fillcolor:o[0],filled:!!t,stroked:!t}).toggle(!(!d&&!t)),!t&&e.html(qe("stroke",'weight="'+2*d+'px" color="'+o[1]+'" miterlimit="1000" joinstyle="miter"'))})),t.opera&&setTimeout(function(){p.tip.css({display:"inline-block",visibility:"visible"})},1),i!==k&&this.calculate(e,c)},calculate:function(t,e){if(!this.enabled)return k;var i,o,n=this,r=this.qtip.elements,a=this.element,h=this.options.offset,l=(r.tooltip.hasClass("ui-widget"),{});return t=t||this.corner,i=t.precedance,e=e||this._calculateSize(t),o=[t.x,t.y],i===S&&o.reverse(),s.each(o,function(s,o){var a,c,d;o===N?(a=i===L?F:D,l[a]="50%",l[ce+"-"+a]=-Math.round(e[i===L?0:1]/2)+h):(a=n._parseWidth(t,o,r.tooltip),c=n._parseWidth(t,o,r.content),d=n._parseRadius(t),l[o]=Math.max(-n.border,s?c:h+(d>a?d:-a)))
}),l[t[i]]-=e[i===S?0:1],a.css({margin:"",top:"",bottom:"",left:"",right:""}).css(l),l},reposition:function(t,e,s){function o(t,e,i,s,o){t===V&&l.precedance===e&&c[s]&&l[i]!==N?l.precedance=l.precedance===S?L:S:t!==V&&c[s]&&(l[e]=l[e]===N?c[s]>0?s:o:l[e]===s?o:s)}function n(t,e,o){l[t]===N?g[ce+"-"+e]=f[t]=r[ce+"-"+e]-c[e]:(a=r[o]!==i?[c[e],-r[e]]:[-c[e],r[e]],(f[t]=Math.max(a[0],a[1]))>a[0]&&(s[e]-=c[e],f[e]=k),g[r[o]!==i?o:e]=f[t])}if(this.enabled){var r,a,h=e.cache,l=this.corner.clone(),c=s.adjusted,d=e.options.position.adjust.method.split(" "),p=d[0],u=d[1]||d[0],f={left:k,top:k,x:0,y:0},g={};this.corner.fixed!==W&&(o(p,S,L,F,P),o(u,L,S,D,O),l.string()===h.corner.string()||h.cornerTop===c.top&&h.cornerLeft===c.left||this.update(l,k)),r=this.calculate(l),r.right!==i&&(r.left=-r.right),r.bottom!==i&&(r.top=-r.bottom),r.user=this.offset,(f.left=p===V&&!!c.left)&&n(S,F,P),(f.top=u===V&&!!c.top)&&n(L,D,O),this.element.css(g).toggle(!(f.x&&f.y||l.x===N&&f.y||l.y===N&&f.x)),s.left-=r.left.charAt?r.user:p!==V||f.top||!f.left&&!f.top?r.left+this.border:0,s.top-=r.top.charAt?r.user:u!==V||f.left||!f.left&&!f.top?r.top+this.border:0,h.cornerLeft=c.left,h.cornerTop=c.top,h.corner=l.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),le=R.tip=function(t){return new x(t,t.options.style.tip)},le.initialize="render",le.sanitize=function(t){if(t.style&&"tip"in t.style){var e=t.style.tip;"object"!=typeof e&&(e=t.style.tip={corner:e}),/string|boolean/i.test(typeof e.corner)||(e.corner=W)}},M.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=[t.width,t.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},s.extend(W,T.defaults,{style:{tip:{corner:W,mimic:k,width:6,height:6,border:W,offset:0}}});var Ce,Te,je="qtip-modal",ze="."+je;Te=function(){function t(t){if(s.expr[":"].focusable)return s.expr[":"].focusable;var e,i,o,n=!isNaN(s.attr(t,"tabindex")),r=t.nodeName&&t.nodeName.toLowerCase();return"area"===r?(e=t.parentNode,i=e.name,t.href&&i&&"map"===e.nodeName.toLowerCase()?(o=s("img[usemap=#"+i+"]")[0],!!o&&o.is(":visible")):!1):/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||n:n}function i(t){1>c.length&&t.length?t.not("body").blur():c.first().focus()}function o(t){if(h.is(":visible")){var e,o=s(t.target),a=n.tooltip,l=o.closest(U);e=1>l.length?k:parseInt(l[0].style.zIndex,10)>parseInt(a[0].style.zIndex,10),e||o.closest(U)[0]===a[0]||i(o),r=t.target===c[c.length-1]}}var n,r,a,h,l=this,c={};s.extend(l,{init:function(){return h=l.elem=s("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return k}}).hide(),s(e.body).bind("focusin"+ze,o),s(e).bind("keydown"+ze,function(t){n&&n.options.show.modal.escape&&27===t.keyCode&&n.hide(t)}),h.bind("click"+ze,function(t){n&&n.options.show.modal.blur&&n.hide(t)}),l},update:function(e){n=e,c=e.options.show.modal.stealfocus!==k?e.tooltip.find("*").filter(function(){return t(this)}):[]},toggle:function(t,o,r){var c=(s(e.body),t.tooltip),d=t.options.show.modal,p=d.effect,u=o?"show":"hide",f=h.is(":visible"),g=s(ze).filter(":visible:not(:animated)").not(c);return l.update(t),o&&d.stealfocus!==k&&i(s(":focus")),h.toggleClass("blurs",d.blur),o&&h.appendTo(e.body),h.is(":animated")&&f===o&&a!==k||!o&&g.length?l:(h.stop(W,k),s.isFunction(p)?p.call(h,o):p===k?h[u]():h.fadeTo(parseInt(r,10)||90,o?1:0,function(){o||h.hide()}),o||h.queue(function(t){h.css({left:"",top:""}),s(ze).length||h.detach(),t()}),a=o,n.destroyed&&(n=E),l)}}),l.init()},Te=new Te,s.extend(q.prototype,{init:function(t){var e=t.tooltip;return this.options.on?(t.elements.overlay=Te.elem,e.addClass(je).css("z-index",T.modal_zindex+s(ze).length),t._bind(e,["tooltipshow","tooltiphide"],function(t,i,o){var n=t.originalEvent;if(t.target===e[0])if(n&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(n.type)&&s(n.relatedTarget).closest(Te.elem[0]).length)try{t.preventDefault()}catch(r){}else(!n||n&&"tooltipsolo"!==n.type)&&this.toggle(t,"tooltipshow"===t.type,o)},this._ns,this),t._bind(e,"tooltipfocus",function(t,i){if(!t.isDefaultPrevented()&&t.target===e[0]){var o=s(ze),n=T.modal_zindex+o.length,r=parseInt(e[0].style.zIndex,10);Te.elem[0].style.zIndex=n-1,o.each(function(){this.style.zIndex>r&&(this.style.zIndex-=1)}),o.filter("."+Z).qtip("blur",t.originalEvent),e.addClass(Z)[0].style.zIndex=n,Te.update(i);try{t.preventDefault()}catch(a){}}},this._ns,this),t._bind(e,"tooltiphide",function(t){t.target===e[0]&&s(ze).filter(":visible").not(e).last().qtip("focus",t)},this._ns,this),i):this},toggle:function(t,e,s){return t&&t.isDefaultPrevented()?this:(Te.toggle(this.qtip,!!e,s),i)},destroy:function(){this.qtip.tooltip.removeClass(je),this.qtip._unbind(this.qtip.tooltip,this._ns),Te.toggle(this.qtip,k),delete this.qtip.elements.overlay}}),Ce=R.modal=function(t){return new q(t,t.options.show.modal)},Ce.sanitize=function(t){t.show&&("object"!=typeof t.show.modal?t.show.modal={on:!!t.show.modal}:t.show.modal.on===i&&(t.show.modal.on=W))},T.modal_zindex=T.zindex-200,Ce.initialize="render",M.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},s.extend(W,T.defaults,{show:{modal:{on:k,effect:W,blur:W,stealfocus:W,escape:W}}}),R.viewport=function(i,s,o,n,r,a,h){function l(t,e,i,o,n,r,a,h,l){var c=s[n],p=_[t],b=x[t],w=i===V,q=p===n?l:p===r?-l:-l/2,C=b===n?h:b===r?-h:-h/2,T=v[n]+y[n]-(f?0:u[n]),j=T-c,z=c+l-(a===A?g:m)-T,M=q-(_.precedance===t||p===_[e]?C:0)-(b===N?h/2:0);return w?(M=(p===n?1:-1)*q,s[n]+=j>0?j:z>0?-z:0,s[n]=Math.max(-u[n]+y[n],c-M,Math.min(Math.max(-u[n]+y[n]+(a===A?g:m),c+M),s[n],"center"===p?c-q:1e9))):(o*=i===$?2:0,j>0&&(p!==n||z>0)?(s[n]-=M+o,d.invert(t,n)):z>0&&(p!==r||j>0)&&(s[n]-=(p===N?-M:M)+o,d.invert(t,r)),v>s[n]&&-s[n]>z&&(s[n]=c,d=_.clone())),s[n]-c}var c,d,p,u,f,g,m,v,y,b=o.target,w=i.elements.tooltip,_=o.my,x=o.at,q=o.adjust,C=q.method.split(" "),T=C[0],j=C[1]||C[0],z=o.viewport,M=o.container,I=i.cache,W={left:0,top:0};return z.jquery&&b[0]!==t&&b[0]!==e.body&&"none"!==q.method?(u=M.offset()||W,f="static"===M.css("position"),c="fixed"===w.css("position"),g=z[0]===t?z.width():z.outerWidth(k),m=z[0]===t?z.height():z.outerHeight(k),v={left:c?0:z.scrollLeft(),top:c?0:z.scrollTop()},y=z.offset()||W,("shift"!==T||"shift"!==j)&&(d=_.clone()),W={left:"none"!==T?l(S,L,T,q.x,F,P,A,n,a):0,top:"none"!==j?l(L,S,j,q.y,D,O,B,r,h):0},d&&I.lastClass!==(p=X+"-pos-"+d.abbrev())&&w.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=p),W):W},R.polys={polygon:function(t,e){var i,s,o,n={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:k},r=0,a=[],h=1,l=1,c=0,d=0;for(r=t.length;r--;)i=[parseInt(t[--r],10),parseInt(t[r+1],10)],i[0]>n.position.right&&(n.position.right=i[0]),i[0]<n.position.left&&(n.position.left=i[0]),i[1]>n.position.bottom&&(n.position.bottom=i[1]),i[1]<n.position.top&&(n.position.top=i[1]),a.push(i);if(s=n.width=Math.abs(n.position.right-n.position.left),o=n.height=Math.abs(n.position.bottom-n.position.top),"c"===e.abbrev())n.position={left:n.position.left+n.width/2,top:n.position.top+n.height/2};else{for(;s>0&&o>0&&h>0&&l>0;)for(s=Math.floor(s/2),o=Math.floor(o/2),e.x===F?h=s:e.x===P?h=n.width-s:h+=Math.floor(s/2),e.y===D?l=o:e.y===O?l=n.height-o:l+=Math.floor(o/2),r=a.length;r--&&!(2>a.length);)c=a[r][0]-n.position.left,d=a[r][1]-n.position.top,(e.x===F&&c>=h||e.x===P&&h>=c||e.x===N&&(h>c||c>n.width-h)||e.y===D&&d>=l||e.y===O&&l>=d||e.y===N&&(l>d||d>n.height-l))&&a.splice(r,1);n.position={left:a[0][0],top:a[0][1]}}return n},rect:function(t,e,i,s){return{width:Math.abs(i-t),height:Math.abs(s-e),position:{left:Math.min(t,i),top:Math.min(e,s)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(t,e,i,s,o){var n=R.polys._angles[o.abbrev()],r=0===n?0:i*Math.cos(n*Math.PI),a=s*Math.sin(n*Math.PI);return{width:2*i-Math.abs(r),height:2*s-Math.abs(a),position:{left:t+r,top:e+a},adjustable:k}},circle:function(t,e,i,s){return R.polys.ellipse(t,e,i,i,s)}},R.svg=function(t,i,o){for(var n,r,a,h,l,c,d,p,u,f,g,m=s(e),v=i[0],y=s(v.ownerSVGElement),b=1,w=1,_=!0;!v.getBBox;)v=v.parentNode;if(!v.getBBox||!v.parentNode)return k;n=y.attr("width")||y.width()||parseInt(y.css("width"),10),r=y.attr("height")||y.height()||parseInt(y.css("height"),10);var x=(parseInt(i.css("stroke-width"),10)||0)/2;switch(x&&(b+=x/n,w+=x/r),v.nodeName){case"ellipse":case"circle":f=R.polys.ellipse(v.cx.baseVal.value,v.cy.baseVal.value,(v.rx||v.r).baseVal.value+x,(v.ry||v.r).baseVal.value+x,o);break;case"line":case"polygon":case"polyline":for(u=v.points||[{x:v.x1.baseVal.value,y:v.y1.baseVal.value},{x:v.x2.baseVal.value,y:v.y2.baseVal.value}],f=[],p=-1,c=u.numberOfItems||u.length;c>++p;)d=u.getItem?u.getItem(p):u[p],f.push.apply(f,[d.x,d.y]);f=R.polys.polygon(f,o);break;default:f=v.getBoundingClientRect(),f={width:f.width,height:f.height,position:{left:f.left,top:f.top}},_=!1}return g=f.position,y=y[0],_&&(y.createSVGPoint&&(a=v.getScreenCTM(),u=y.createSVGPoint(),u.x=g.left,u.y=g.top,h=u.matrixTransform(a),g.left=h.x,g.top=h.y),y.viewBox&&(l=y.viewBox.baseVal)&&l.width&&l.height&&(b*=n/l.width,w*=r/l.height)),g.left+=m.scrollLeft(),g.top+=m.scrollTop(),f},R.imagemap=function(t,e,i){e.jquery||(e=s(e));var o,n,r,a,h,l=e.attr("shape").toLowerCase().replace("poly","polygon"),c=s('img[usemap="#'+e.parent("map").attr("name")+'"]'),d=s.trim(e.attr("coords")),p=d.replace(/,$/,"").split(",");if(!c.length)return k;if("polygon"===l)a=R.polys.polygon(p,i);else{if(!R.polys[l])return k;for(r=-1,h=p.length,n=[];h>++r;)n.push(parseInt(p[r],10));a=R.polys[l].apply(this,n.concat(i))}return o=c.offset(),o.left+=Math.ceil((c.outerWidth(k)-c.width())/2),o.top+=Math.ceil((c.outerHeight(k)-c.height())/2),a.position.left+=o.left,a.position.top+=o.top,a};var Me,Ie='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';s.extend(C.prototype,{_scroll:function(){var e=this.qtip.elements.overlay;e&&(e[0].style.top=s(t).scrollTop()+"px")},init:function(i){var o=i.tooltip;1>s("select, object").length&&(this.bgiframe=i.elements.bgiframe=s(Ie).appendTo(o),i._bind(o,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=s("<div/>",{id:X+"-rcontainer"}).appendTo(e.body),i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")&&(i._bind(t,["scroll","resize"],this._scroll,this._ns,this),i._bind(o,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var t,e,i=this.qtip.tooltip,s={height:i.outerHeight(k),width:i.outerWidth(k)},o=this.qtip.plugins.tip,n=this.qtip.elements.tip;e=parseInt(i.css("borderLeftWidth"),10)||0,e={left:-e,top:-e},o&&n&&(t="x"===o.corner.precedance?[A,F]:[B,D],e[t[1]]-=n[t[0]]()),this.bgiframe.css(e).css(s)},redraw:function(){if(1>this.qtip.rendered||this.drawing)return this;var t,e,i,s,o=this.qtip.tooltip,n=this.qtip.options.style,r=this.qtip.options.position.container;return this.qtip.drawing=1,n.height&&o.css(B,n.height),n.width?o.css(A,n.width):(o.css(A,"").appendTo(this.redrawContainer),e=o.width(),1>e%2&&(e+=1),i=o.css("maxWidth")||"",s=o.css("minWidth")||"",t=(i+s).indexOf("%")>-1?r.width()/100:0,i=(i.indexOf("%")>-1?t:1)*parseInt(i,10)||e,s=(s.indexOf("%")>-1?t:1)*parseInt(s,10)||0,e=i+s?Math.min(Math.max(e,s),i):e,o.css(A,Math.round(e)).appendTo(r)),this.drawing=0,this},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([t,this.qtip.tooltip],this._ns)}}),Me=R.ie6=function(t){return 6===oe.ie?new C(t):k},Me.initialize="render",M.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);
//@ sourceMappingURL=http://cdnjs.cloudflare.com/ajax/libs/qtip2/2.2.0/jquery.qtip.min.map

/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.0.3 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2014, NoÃ«l Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
(function($) {
	"use strict";

	if('undefined' === typeof $) {
		if('console' in window){ window.console.info('Too much lightness, Featherlight needs jQuery.'); }
		return;
	}

	/* Featherlight is exported as $.featherlight.
	   It is a function used to open a featherlight lightbox.

	   [tech]
	   Featherlight uses prototype inheritance.
	   Each opened lightbox will have a corresponding object.
	   That object may have some attributes that override the
	   prototype's.
	   Extensions created with Featherlight.extend will have their
	   own prototype that inherits from Featherlight's prototype,
	   thus attributes can be overriden either at the object level,
	   or at the extension level.
	   To create callbacks that chain themselves instead of overriding,
	   use chainCallbacks.
	   For those familiar with CoffeeScript, this correspond to
	   Featherlight being a class and the Gallery being a class
	   extending Featherlight.
	   The chainCallbacks is used since we don't have access to
	   CoffeeScript's `super`.
	*/

	function Featherlight($content, config) {
		if(this instanceof Featherlight) {  /* called with new */
			this.id = Featherlight.id++;
			this.setup($content, config);
			this.chainCallbacks(Featherlight._callbackChain);
		} else {
			var fl = new Featherlight($content, config);
			fl.open();
			return fl;
		}
	}

	/* document wide key handler */
	var keyHelper = function(event) {
		if (!event.isDefaultPrevented()) { // esc keycode
			var self = Featherlight.current();
			if (self) {
				self.onKeyDown(event);
			}
		}
	};

	Featherlight.prototype = {
		constructor: Featherlight,
		/*** defaults ***/
		/* extend featherlight with defaults and methods */
		namespace:    'featherlight',         /* Name of the events and css class prefix */
		targetAttr:   'data-featherlight',    /* Attribute of the triggered element that contains the selector to the lightbox content */
		variant:      null,                   /* Class that will be added to change look of the lightbox */
		resetCss:     false,                  /* Reset all css */
		background:   null,                   /* Custom DOM for the background, wrapper and the closebutton */
		openTrigger:  'click',                /* Event that triggers the lightbox */
		closeTrigger: 'click',                /* Event that triggers the closing of the lightbox */
		filter:       null,                   /* Selector to filter events. Think $(...).on('click', filter, eventHandler) */
		root:         'body',                 /* Where to append featherlights */
		openSpeed:    250,                    /* Duration of opening animation */
		closeSpeed:   250,                    /* Duration of closing animation */
		closeOnClick: 'background',           /* Close lightbox on click ('background', 'anywhere' or false) */
		closeOnEsc:   true,                   /* Close lightbox when pressing esc */
		closeIcon:    '&#10005;',             /* Close icon */
		otherClose:   null,                   /* Selector for alternate close buttons (e.g. "a.close") */
		beforeOpen:   $.noop,                 /* Called before open. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
		beforeContent: $.noop,                /* Called when content is loaded. Gets event as parameter, this contains all data */
		beforeClose:  $.noop,                 /* Called before close. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
		afterOpen:    $.noop,                 /* Called after open. Gets event as parameter, this contains all data */
		afterContent: $.noop,                 /* Called after content is ready and has been set. Gets event as parameter, this contains all data */
		afterClose:   $.noop,                 /* Called after close. Gets event as parameter, this contains all data */
		onKeyDown:    $.noop,									/* Called on key down for the frontmost featherlight */
		type:         null,                   /* Specify type of lightbox. If unset, it will check for the targetAttrs value. */
		contentFilters: ['jquery', 'image', 'html', 'ajax', 'text'], /* List of content filters to use to determine the content */

		/*** methods ***/
		/* setup iterates over a single instance of featherlight and prepares the background and binds the events */
		setup: function(target, config){
			/* all arguments are optional */
			if (typeof target === 'object' && target instanceof $ === false && !config) {
				config = target;
				target = undefined;
			}

			var self = $.extend(this, config, {target: target}),
				css = !self.resetCss ? self.namespace : self.namespace+'-reset', /* by adding -reset to the classname, we reset all the default css */
				$background = $(self.background || [
					'<div class="'+css+'">',
						'<div class="'+css+'-content">',
							'<span class="'+css+'-close-icon '+ self.namespace + '-close">',
								self.closeIcon,
							'</span>',
							'<div class="'+self.namespace+'-inner"></div>',
						'</div>',
					'</div>'].join('')),
				closeButtonSelector = '.'+self.namespace+'-close' + (self.otherClose ? ',' + self.otherClose : '');

			self.$instance = $background.clone().addClass(self.variant); /* clone DOM for the background, wrapper and the close button */

			/* close when click on background/anywhere/null or closebox */
			self.$instance.on(self.closeTrigger+'.'+self.namespace, function(event) {
				var $target = $(event.target);
				if( ('background' === self.closeOnClick  && $target.is('.'+self.namespace))
					|| 'anywhere' === self.closeOnClick
					|| $target.is(closeButtonSelector) ){
					event.preventDefault();
					self.close();
				}
			});

			return this;
		},

		/* this method prepares the content and converts it into a jQuery object or a promise */
		getContent: function(){
			var self = this,
				filters = this.constructor.contentFilters,
				readTargetAttr = function(name){ return self.$currentTarget && self.$currentTarget.attr(name); },
				targetValue = readTargetAttr(self.targetAttr),
				data = self.target || targetValue || '';

			/* Find which filter applies */
			var filter = filters[self.type]; /* check explicit type like {type: 'image'} */

			/* check explicit type like data-featherlight="image" */
			if(!filter && data in filters) {
				filter = filters[data];
				data = self.target && targetValue;
			}
			data = data || readTargetAttr('href') || '';

			/* check explicity type & content like {image: 'photo.jpg'} */
			if(!filter) {
				for(var filterName in filters) {
					if(self[filterName]) {
						filter = filters[filterName];
						data = self[filterName];
					}
				}
			}

			/* otherwise it's implicit, run checks */
			if(!filter) {
				var target = data;
				data = null;
				$.each(self.contentFilters, function() {
					filter = filters[this];
					if(filter.test)  {
						data = filter.test(target);
					}
					if(!data && filter.regex && target.match && target.match(filter.regex)) {
						data = target;
					}
					return !data;
				});
				if(!data) {
					if('console' in window){ window.console.error('Featherlight: no content filter found ' + (target ? ' for "' + target + '"' : ' (no target specified)')); }
					return false;
				}
			}
			/* Process it */
			return filter.process.call(self, data);
		},

		/* sets the content of $instance to $content */
		setContent: function($content){
			var self = this;
			/* we need a special class for the iframe */
			if($content.is('iframe') || $('iframe', $content).length > 0){
				self.$instance.addClass(self.namespace+'-iframe');
			}

			self.$content = $content.addClass(self.namespace+'-inner');

			/* replace content by appending to existing one before it is removed
			   this insures that featherlight-inner remain at the same relative
				 position to any other items added to featherlight-content */
			self.$instance.find('.'+self.namespace+'-inner')
				.slice(1).remove().end()			/* In the unexpected event where there are many inner elements, remove all but the first one */
				.replaceWith(self.$content);

			return self;
		},

		/* opens the lightbox. "this" contains $instance with the lightbox, and with the config */
		open: function(event){
			var self = this;
			if((!event || !event.isDefaultPrevented())
				&& self.beforeOpen(event) !== false) {

				if(event){
					event.preventDefault();
				}
				var $content = self.getContent();

				if($content){
					/* Add to opened registry */
					self.constructor._opened.add(self._openedCallback = function(klass, response){
						if ((self instanceof klass) &&
								(self.$instance.closest('body').length > 0)) {
							response.currentFeatherlight = self;
						}
					});

					/* attach key handler to document if needed */
					if(!Featherlight._keyHandlerInstalled) {
						$(document).on('keyup.'+Featherlight.prototype.namespace, keyHelper);
						Featherlight._keyHandlerInstalled = true;
					}

					self.$instance.appendTo(self.root).fadeIn(self.openSpeed);
					self.beforeContent(event);

					/* Set content and show */
					$.when($content).done(function($content){
						self.setContent($content);
						self.afterContent(event);
						/* Call afterOpen after fadeIn is done */
						$.when(self.$instance.promise()).done(function(){
							self.afterOpen(event);
						});
					});
					return self;
				}
			}
			return false;
		},

		/* closes the lightbox. "this" contains $instance with the lightbox, and with the config */
		close: function(event){
			var self = this;
			if(self.beforeClose(event) === false) {
				return false;
			}
			self.constructor._opened.remove(self._openedCallback);

			/* attach key handler to document if no opened Featherlight */
			if(!Featherlight.current()) {
				$(document).off('keyup.'+Featherlight.namespace, keyHelper);
				self.constructor._keyHandlerInstalled = false;
			}

			self.$instance.fadeOut(self.closeSpeed,function(){
				self.$instance.detach();
				self.afterClose(event);
			});
		},

		/* Utility function to chain callbacks
		   [Warning: guru-level]
		   Used be extensions that want to let users specify callbacks but
		   also need themselves to use the callbacks.
		   The argument 'chain' has callback names as keys and function(super, event)
		   as values. That function is meant to call `super` at some point.
		*/
		chainCallbacks: function(chain) {
			for (var name in chain) {
				this[name] = $.proxy(chain[name], this, $.proxy(this[name], this));
			}
		}
	};

	$.extend(Featherlight, {
		id: 0,                                    /* Used to id single featherlight instances */
		autoBind:       '[data-featherlight]',    /* Will automatically bind elements matching this selector. Clear or set before onReady */
		defaults:       Featherlight.prototype,   /* You can access and override all defaults using $.featherlight.defaults, which is just a synonym for $.featherlight.prototype */
		/* Contains the logic to determine content */
		contentFilters: {
			jquery: {
				regex: /^[#.]\w/,         /* Anything that starts with a class name or identifiers */
				test: function(elem)    { return elem instanceof $ && elem; },
				process: function(elem) { return $(elem).clone(true); }
			},
			image: {
				regex: /\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,
				process: function(url)  {
					var self = this,
						deferred = $.Deferred(),
						img = new Image();
					img.onload  = function() { deferred.resolve(
						$('<img src="'+url+'" alt="" class="'+self.namespace+'-image" />')
					); };
					img.onerror = function() { deferred.reject(); };
					img.src = url;
					return deferred.promise();
				}
			},
			html: {
				regex: /^\s*<[\w!][^<]*>/, /* Anything that starts with some kind of valid tag */
				process: function(html) { return $(html); }
			},
			ajax: {
				regex: /./,            /* At this point, any content is assumed to be an URL */
				process: function(url)  {
					var self = this,
						deferred = $.Deferred();
					/* we are using load so one can specify a target with: url.html #targetelement */
					var $container = $('<div></div>').load(url, function(response, status){
						if ( status !== "error" ) {
							deferred.resolve($container.contents());
						}
						deferred.fail();
					});
					return deferred.promise();
				}
			},
			text: {
				process: function(text) { return $('<div>', {text: text}); }
			}
		},

		functionAttributes: ['beforeOpen', 'afterOpen', 'beforeContent', 'afterContent', 'beforeClose', 'afterClose'],

		/*** class methods ***/
		/* read element's attributes starting with data-featherlight- */
		readElementConfig: function(element) {
			var Klass = this,
				config = {};
			if (element && element.attributes) {
					$.each(element.attributes, function(){
					var match = this.name.match(/^data-featherlight-(.*)/);
					if (match) {
						var val = this.value,
							name = $.camelCase(match[1]);
						if ($.inArray(name, Klass.functionAttributes) >= 0) {  /* jshint -W054 */
							val = new Function(val);                           /* jshint +W054 */
						} else {
							try { val = $.parseJSON(val); }
							catch(e) {}
						}
						config[name] = val;
					}
				});
			}
			return config;
		},

		/* Used to create a Featherlight extension
		   [Warning: guru-level]
		   Creates the extension's prototype that in turn
		   inherits Featherlight's prototype.
		   Could be used to extend an extension too...
		   This is pretty high level wizardy, it comes pretty much straight
		   from CoffeeScript and won't teach you anything about Featherlight
		   as it's not really specific to this library.
		   My suggestion: move along and keep your sanity.
		*/
		extend: function(child, defaults) {
			/* Setup class hierarchy, adapted from CoffeeScript */
			var Ctor = function(){ this.constructor = child; };
			Ctor.prototype = this.prototype;
			child.prototype = new Ctor();
			child.__super__ = this.prototype;
			/* Copy class methods & attributes */
			$.extend(child, this, defaults);
			child.defaults = child.prototype;
			return child;
		},

		attach: function($source, $content, config) {
			var Klass = this;
			if (typeof $content === 'object' && $content instanceof $ === false && !config) {
				config = $content;
				$content = undefined;
			}
			/* make a copy */
			config = $.extend({}, config);

			/* Only for openTrigger and namespace... */
			var tempConfig = $.extend({}, Klass.defaults, Klass.readElementConfig($source[0]), config);

			$source.on(tempConfig.openTrigger+'.'+tempConfig.namespace, tempConfig.filter, function(event) {
				/* ... since we might as well compute the config on the actual target */
				var elemConfig = $.extend({$source: $source, $currentTarget: $(this)}, Klass.readElementConfig($source[0]), Klass.readElementConfig(this), config);
				new Klass($content, elemConfig).open(event);
			});
			return $source;
		},

		current: function() {
			var response = {};
			this._opened.fire(this, response);
			return response.currentFeatherlight;
		},

		close: function() {
			var cur = this.current();
			if(cur) { cur.close(); }
		},

		/* Does the auto binding on startup.
		   Meant only to be used by Featherlight and its extensions
		*/
		_onReady: function() {
			var Klass = this;
			if(Klass.autoBind){
				/* First, bind click on document, so it will work for items added dynamically */
				Klass.attach($(document), {filter: Klass.autoBind});
				/* Auto bound elements with attr-featherlight-filter won't work
				   (since we already used it to bind on document), so bind these
				   directly. We can't easily support dynamically added element with filters */
				$(Klass.autoBind).filter('[data-featherlight-filter]').each(function(){
					Klass.attach($(this));
				});
			}
		},

		/* Featherlight uses the onKeyDown callback to intercept the escape key.
		   Private to Featherlight.
		*/
		_callbackChain: {
			onKeyDown: function(_super, event){
				if(27 === event.keyCode && this.closeOnEsc) {
					this.$instance.find('.'+this.namespace+'-close:first').click();
					event.preventDefault();
				} else {
					return _super(event);
				}
			}
		},

		_opened: $.Callbacks()
	});

	$.featherlight = Featherlight;

	/* bind jQuery elements to trigger featherlight */
	$.fn.featherlight = function($content, config) {
		return Featherlight.attach(this, $content, config);
	};

	/* bind featherlight on ready if config autoBind is set */
	$(document).ready(function(){ Featherlight._onReady(); });
}(jQuery));


/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * Licensed under The MIT License
 *
 * @version        2.5.2
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/raty
 *
 */

;(function(b){var a={init:function(c){return this.each(function(){a.destroy.call(this);this.opt=b.extend(true,{},b.fn.raty.defaults,c);var e=b(this),g=["number","readOnly","score","scoreName"];a._callback.call(this,g);if(this.opt.precision){a._adjustPrecision.call(this);}this.opt.number=a._between(this.opt.number,0,this.opt.numberMax);this.opt.path=this.opt.path||"";if(this.opt.path&&this.opt.path.slice(this.opt.path.length-1,this.opt.path.length)!=="/"){this.opt.path+="/";}this.stars=a._createStars.call(this);this.score=a._createScore.call(this);a._apply.call(this,this.opt.score);var f=this.opt.space?4:0,d=this.opt.width||(this.opt.number*this.opt.size+this.opt.number*f);if(this.opt.cancel){this.cancel=a._createCancel.call(this);d+=(this.opt.size+f);}if(this.opt.readOnly){a._lock.call(this);}else{e.css("cursor","pointer");a._binds.call(this);}if(this.opt.width!==false){e.css("width",d);}a._target.call(this,this.opt.score);e.data({settings:this.opt,raty:true});});},_adjustPrecision:function(){this.opt.targetType="score";this.opt.half=true;},_apply:function(c){if(c&&c>0){c=a._between(c,0,this.opt.number);this.score.val(c);}a._fill.call(this,c);if(c){a._roundStars.call(this,c);}},_between:function(e,d,c){return Math.min(Math.max(parseFloat(e),d),c);},_binds:function(){if(this.cancel){a._bindCancel.call(this);}a._bindClick.call(this);a._bindOut.call(this);a._bindOver.call(this);},_bindCancel:function(){a._bindClickCancel.call(this);a._bindOutCancel.call(this);a._bindOverCancel.call(this);},_bindClick:function(){var c=this,d=b(c);c.stars.on("click.raty",function(e){c.score.val((c.opt.half||c.opt.precision)?d.data("score"):this.alt);if(c.opt.click){c.opt.click.call(c,parseFloat(c.score.val()),e);}});},_bindClickCancel:function(){var c=this;c.cancel.on("click.raty",function(d){c.score.removeAttr("value");if(c.opt.click){c.opt.click.call(c,null,d);}});},_bindOut:function(){var c=this;b(this).on("mouseleave.raty",function(d){var e=parseFloat(c.score.val())||undefined;a._apply.call(c,e);a._target.call(c,e,d);if(c.opt.mouseout){c.opt.mouseout.call(c,e,d);}});},_bindOutCancel:function(){var c=this;c.cancel.on("mouseleave.raty",function(d){b(this).attr("src",c.opt.path+c.opt.cancelOff);if(c.opt.mouseout){c.opt.mouseout.call(c,c.score.val()||null,d);}});},_bindOverCancel:function(){var c=this;c.cancel.on("mouseover.raty",function(d){b(this).attr("src",c.opt.path+c.opt.cancelOn);c.stars.attr("src",c.opt.path+c.opt.starOff);a._target.call(c,null,d);if(c.opt.mouseover){c.opt.mouseover.call(c,null);}});},_bindOver:function(){var c=this,d=b(c),e=c.opt.half?"mousemove.raty":"mouseover.raty";c.stars.on(e,function(g){var h=parseInt(this.alt,10);if(c.opt.half){var f=parseFloat((g.pageX-b(this).offset().left)/c.opt.size),j=(f>0.5)?1:0.5;h=h-1+j;a._fill.call(c,h);if(c.opt.precision){h=h-j+f;}a._roundStars.call(c,h);d.data("score",h);}else{a._fill.call(c,h);}a._target.call(c,h,g);if(c.opt.mouseover){c.opt.mouseover.call(c,h,g);}});},_callback:function(c){for(i in c){if(typeof this.opt[c[i]]==="function"){this.opt[c[i]]=this.opt[c[i]].call(this);}}},_createCancel:function(){var e=b(this),c=this.opt.path+this.opt.cancelOff,d=b("<img />",{src:c,alt:"x",title:this.opt.cancelHint,"class":"raty-cancel"});if(this.opt.cancelPlace=="left"){e.prepend("&#160;").prepend(d);}else{e.append("&#160;").append(d);}return d;},_createScore:function(){return b("<input />",{type:"hidden",name:this.opt.scoreName}).appendTo(this);},_createStars:function(){var e=b(this);for(var c=1;c<=this.opt.number;c++){var f=a._getHint.call(this,c),d=(this.opt.score&&this.opt.score>=c)?"starOn":"starOff";d=this.opt.path+this.opt[d];b("<img />",{src:d,alt:c,title:f}).appendTo(this);if(this.opt.space){e.append((c<this.opt.number)?"&#160;":"");}}return e.children("img");},_error:function(c){b(this).html(c);b.error(c);},_fill:function(d){var m=this,e=0;for(var f=1;f<=m.stars.length;f++){var g=m.stars.eq(f-1),l=m.opt.single?(f==d):(f<=d);if(m.opt.iconRange&&m.opt.iconRange.length>e){var j=m.opt.iconRange[e],h=j.on||m.opt.starOn,c=j.off||m.opt.starOff,k=l?h:c;if(f<=j.range){g.attr("src",m.opt.path+k);}if(f==j.range){e++;}}else{var k=l?"starOn":"starOff";g.attr("src",this.opt.path+this.opt[k]);}}},_getHint:function(d){var c=this.opt.hints[d-1];return(c==="")?"":(c||d);},_lock:function(){var d=parseInt(this.score.val(),10),c=d?a._getHint.call(this,d):this.opt.noRatedMsg;b(this).data("readonly",true).css("cursor","").attr("title",c);this.score.attr("readonly","readonly");this.stars.attr("title",c);if(this.cancel){this.cancel.hide();}},_roundStars:function(e){var d=(e-Math.floor(e)).toFixed(2);if(d>this.opt.round.down){var c="starOn";if(this.opt.halfShow&&d<this.opt.round.up){c="starHalf";}else{if(d<this.opt.round.full){c="starOff";}}this.stars.eq(Math.ceil(e)-1).attr("src",this.opt.path+this.opt[c]);}},_target:function(f,d){if(this.opt.target){var e=b(this.opt.target);if(e.length===0){a._error.call(this,"Target selector invalid or missing!");}if(this.opt.targetFormat.indexOf("{score}")<0){a._error.call(this,'Template "{score}" missing!');}var c=d&&d.type=="mouseover";if(f===undefined){f=this.opt.targetText;}else{if(f===null){f=c?this.opt.cancelHint:this.opt.targetText;}else{if(this.opt.targetType=="hint"){f=a._getHint.call(this,Math.ceil(f));}else{if(this.opt.precision){f=parseFloat(f).toFixed(1);}}if(!c&&!this.opt.targetKeep){f=this.opt.targetText;}}}if(f){f=this.opt.targetFormat.toString().replace("{score}",f);}if(e.is(":input")){e.val(f);}else{e.html(f);}}},_unlock:function(){b(this).data("readonly",false).css("cursor","pointer").removeAttr("title");this.score.removeAttr("readonly","readonly");for(var c=0;c<this.opt.number;c++){this.stars.eq(c).attr("title",a._getHint.call(this,c+1));}if(this.cancel){this.cancel.css("display","");}},cancel:function(c){return this.each(function(){if(b(this).data("readonly")!==true){a[c?"click":"score"].call(this,null);this.score.removeAttr("value");}});},click:function(c){return b(this).each(function(){if(b(this).data("readonly")!==true){a._apply.call(this,c);if(!this.opt.click){a._error.call(this,'You must add the "click: function(score, evt) { }" callback.');}this.opt.click.call(this,c,{type:"click"});a._target.call(this,c);}});},destroy:function(){return b(this).each(function(){var d=b(this),c=d.data("raw");if(c){d.off(".raty").empty().css({cursor:c.style.cursor,width:c.style.width}).removeData("readonly");}else{d.data("raw",d.clone()[0]);}});},getScore:function(){var d=[],c;b(this).each(function(){c=this.score.val();d.push(c?parseFloat(c):undefined);});return(d.length>1)?d:d[0];},readOnly:function(c){return this.each(function(){var d=b(this);if(d.data("readonly")!==c){if(c){d.off(".raty").children("img").off(".raty");a._lock.call(this);}else{a._binds.call(this);a._unlock.call(this);}d.data("readonly",c);}});},reload:function(){return a.set.call(this,{});},score:function(){return arguments.length?a.setScore.apply(this,arguments):a.getScore.call(this);},set:function(c){return this.each(function(){var e=b(this),f=e.data("settings"),d=b.extend({},f,c);e.raty(d);});},setScore:function(c){return b(this).each(function(){if(b(this).data("readonly")!==true){a._apply.call(this,c);a._target.call(this,c);}});}};b.fn.raty=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments);}else{b.error("Method "+c+" does not exist!");}}};b.fn.raty.defaults={cancel:false,cancelHint:"Cancel this rating!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:undefined,half:false,halfShow:true,hints:["bad","poor","regular","good","gorgeous"],iconRange:undefined,mouseout:undefined,mouseover:undefined,noRatedMsg:"Not rated yet!",number:5,numberMax:20,path:"",precision:false,readOnly:false,round:{down:0.25,full:0.6,up:0.76},score:undefined,scoreName:"score",single:false,size:16,space:true,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",target:undefined,targetFormat:"{score}",targetKeep:false,targetText:"",targetType:"hint",width:undefined};})(jQuery);

$( document ).ready(function() {
 $('#star').raty({
  score: function() {
    return $(this).attr('data-score');
  },
  path: '/',
  click: function(score, evt) {
	$.post("/ratephone.php", { reviewid: $(this).attr('reviewid'), score: score});
	$('#ratingText').show("slow");
	 $(this).find('img').unbind('click');
    //console.log('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt);
  },
  hints: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars']
});

});
