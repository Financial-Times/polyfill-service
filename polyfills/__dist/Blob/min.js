!function(t){"use strict";t.URL=t.URL||t.webkitURL;var e=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},o=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},r=n.prototype,i=o.prototype,a=t.FileReaderSync,c=function(t){this.code=this[this.name=t]},l="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),s=l.length,d=t.URL||t.webkitURL||t,u=d.createObjectURL,f=d.revokeObjectURL,p=d,b=t.btoa,h=t.atob,R=t.ArrayBuffer,w=t.Uint8Array,g=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(o.fake=i.fake=!0;s--;)c.prototype[l[s]]=s+1;return d.createObjectURL||(p=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(g),n.origin=e&&e[1])),n}),p.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof o?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):b?e+";base64,"+b(t.data):e+","+encodeURIComponent(t.data)):u?u.call(d,t):void 0},p.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(d,t)},r.append=function(t){var n=this.data;if(w&&(t instanceof R||t instanceof w)){for(var r="",i=new w(t),l=0,s=i.length;l<s;l++)r+=String.fromCharCode(i[l]);n.push(r)}else if("Blob"===e(t)||"File"===e(t)){if(!a)throw new c("NOT_READABLE_ERR");var d=new a;n.push(d.readAsBinaryString(t))}else t instanceof o?"base64"===t.encoding&&h?n.push(h(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},r.getBlob=function(t){return arguments.length||(t=null),new o(this.data.join(""),t,"raw")},r.toString=function(){return"[object BlobBuilder]"},i.slice=function(){var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments.length;return r<3&&(n=""),new o(this.data.slice(t,r>1?e:this.data.length),n,this.encoding)},i.toString=function(){return"[object Blob]"},i.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(){var t=arguments[0],n=arguments[1];try{var o=this instanceof Blob}catch(s){}if(!1===o)throw new TypeError("Failed to construct 'Blob': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");if(t!==undefined&&"number"!=typeof t.length)throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");if(void 0!==t&&"object"!=typeof t)throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");if(void 0!==n&&"object"!=typeof n)throw new TypeError("Failed to construct 'Blob': parameter 2 ('options') is not an object.");var r=n?n.type||"":"",i=new e;if(t)for(var a=0,c=t.length;a<c;a++)"undefined"!=typeof Uint8Array&&t[a]instanceof Uint8Array?i.append(t[a].buffer):i.append(t[a]);var l=i.getBlob(r);return!l.slice&&l.webkitSlice&&(l.slice=l.webkitSlice),l};var n=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=n(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);