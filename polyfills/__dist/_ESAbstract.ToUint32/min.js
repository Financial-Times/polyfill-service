function ToUint32(n){var i=Number(n);return isNaN(i)||0===i||-0===i||i===Infinity||i===-Infinity?0:(i<0?-1:1)*Math.floor(Math.abs(i))>>>0}