!function(e){function t(t){return t=(t||"true").replace(/^only\s+/,"").replace(/(device)-([\w.]+)/g,"$1.$2").replace(/([\w.]+)\s*:/g,"media.$1 ===").replace(/min-([\w.]+)\s*===/g,"$1 >=").replace(/max-([\w.]+)\s*===/g,"$1 <=").replace(/all|screen/g,"1").replace(/print/g,"0").replace(/,/g,"||").replace(/\band\b/g,"&&").replace(/dpi/g,"").replace(/(\d+)(cm|em|in|dppx|mm|pc|pt|px|rem)/g,function(e,t,i){return t*("cm"===i?37.7952:"em"===i||"rem"===i?16:"in"===i||"dppx"===i?96:"mm"===i?3.77952:"pc"===i?16:"pt"===i?96/72:1)}),new Function("media","try{ return !!(%s) }catch(e){ return false }".replace("%s",t))({width:e.innerWidth,height:e.innerHeight,orientation:e.orientation||"landscape",device:{width:e.screen.width,height:e.screen.height,orientation:e.screen.orientation||e.orientation||"landscape"}})}function i(){this.matches=!1,this.media="invalid"}i.prototype.addListener=function(e){-1===this.addListener.listeners.indexOf(e)&&this.addListener.listeners.push(e)},i.prototype.removeListener=function(e){var t=this.addListener.listeners.indexOf(e);t>=0&&this.addListener.listeners.splice(t,1)},e.MediaQueryList=i,e.matchMedia=function(n){var r=new i;if(0===arguments.length)throw new TypeError("Not enough arguments to matchMedia");return r.media=String(n),r.matches=t(r.media),r.addListener.listeners=[],e.addEventListener("resize",function(){var i=[].concat(r.addListener.listeners),n=t(r.media);if(n!=r.matches){r.matches=n;for(var a=0,s=i.length;a<s;++a)i[a].call(e,r)}}),r}}(this);