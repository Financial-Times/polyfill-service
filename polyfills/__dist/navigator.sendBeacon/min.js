"navigator"in this||(this.navigator={}),this.navigator.sendBeacon=function(e,t){var n="XMLHttpRequest"in window?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return n.open("POST",e,!1),n.setRequestHeader("Accept","*/*"),"string"==typeof t?n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"):"[object Blob]"===Object.prototype.toString.call(t)&&t.type&&n.setRequestHeader("Content-Type",t.type),n.send(t),!0};