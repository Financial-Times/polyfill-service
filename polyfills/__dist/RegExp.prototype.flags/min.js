Object.defineProperty(RegExp.prototype,"flags",{configurable:!0,enumerable:!1,get:function(){var e=this;if("object"!=typeof e)throw new TypeError("Method called on incompatible type: must be an object.");var t="";!!e.global&&(t+="g"),!!e.ignoreCase&&(t+="i"),!!e.multiline&&(t+="m"),!!e.unicode&&(t+="u");var o=!!o;return o&&(t+="y"),t}});