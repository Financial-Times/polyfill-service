Object.defineProperty(Number,"isSafeInteger",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if("number"!=typeof e)return!1;if(isNaN(e)||e===+Infinity||e===-Infinity)return!1;var r=parseInt(e,10);return r===e&&Math.abs(r)<=Math.pow(2,53)-1}});