(function(){String.implement({parseQueryStringImproved:function(b){queryString=this.trim();var a=queryString.split(/[&;]/),e={};if(!a.length||!queryString.length)return e;a.each(function(a){var c=a.indexOf("="),d=c<0?!0:a.substr(c+1),i=a.substr(0,c),h=c<0?[a]:i.match(/([^\]\[]+|(\B)(?=\]))/g),g=e;b&&d.length===0&&(d=!1);typeof d!="boolean"&&(d=decodeURIComponent(d));h.each(function(a,b){var a=decodeURIComponent(a),c=g[a];b<h.length-1?g=g[a]=c||{}:typeof c=="object"?c.push(d):g[a]=c!=null?[c,d]:d})});
return e}});Object.extend({parseObjectToQueryString:function(){var b="",a=this;Object.each(a,function(e,f){if(e===!0)b?b=b+"&"+f:b+=f,delete a[f];else if(e===!1){var c=f+"=";b?b=b+"&"+c:b+=c;delete a[f]}});a=Object.toQueryString(a);return b+(a&&b?"&"+a:a)}})})();