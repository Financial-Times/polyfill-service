Array.prototype.reduceRight=function(t){if(this===undefined||null===this)throw new TypeError(this+" is not an object");if("function"!=typeof t)throw new TypeError(t+" is not a function");var i,n=Object(this),r=n instanceof String?n.split(""):n,e=Math.max(Math.min(r.length,9007199254740991),0)||0;if(1 in arguments)i=arguments[1];else{for(;--e>-1&&!(e in r););if(e<=-1)throw new TypeError("Reduce of empty array with no initial value");i=r[e]}for(;--e>-1;)e in r&&(i=t(i,r[e],e,n));return i};