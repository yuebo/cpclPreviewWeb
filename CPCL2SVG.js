/*! JsBarcode v3.11.5 | (c) Johan Lindell | MIT license */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.text=n.text||e,this.options=n}},function(t,e,n){"use strict";var r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var i=e.SET_A=0,a=e.SET_B=1,u=e.SET_C=2,f=(e.SHIFT=98,e.START_A=103),c=e.START_B=104,s=e.START_C=105;e.MODULO=103,e.STOP=106,e.FNC1=207,e.SET_BY_CODE=(o(r={},f,i),o(r,c,a),o(r,s,u),r),e.SWAP={101:i,100:a,99:u},e.A_START_CHAR=String.fromCharCode(208),e.B_START_CHAR=String.fromCharCode(209),e.C_START_CHAR=String.fromCharCode(210),e.A_CHARS="[\0-_È-Ï]",e.B_CHARS="[ -È-Ï]",e.C_CHARS="(Ï*[0-9]{2}Ï*)",e.BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SIDE_BIN="101",e.MIDDLE_BIN="01010",e.BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]},e.EAN2_STRUCTURE=["LL","LG","GL","GG"],e.EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"],e.EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default=function(t,e,n){var o=t.split("").map((function(t,n){return r.BINARIES[e[n]]})).map((function(e,n){return e?e[t[n]]:""}));if(n){var i=t.length-1;o=o.map((function(t,e){return e<i?t+n:t}))}return o.join("")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);var a=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"encode",value:function(){for(var t="110",e=0;e<this.data.length;e++){var n=parseInt(this.data[e]).toString(2);n=u(n,4-n.length);for(var r=0;r<n.length;r++)t+="0"==n[r]?"100":"110"}return{data:t+="1001",text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]+$/)}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default);function u(t,e){for(var n=0;n<e;n++)t="0"+t;return t}e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},u=n(1);var f=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.substring(1),n));return r.bytes=t.split("").map((function(t){return t.charCodeAt(0)})),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var t=this.bytes,n=t.shift()-105,r=u.SET_BY_CODE[n];if(void 0===r)throw new RangeError("The encoding does not start with a start character.");!0===this.shouldEncodeAsEan128()&&t.unshift(u.FNC1);var o=e.next(t,1,r);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:e.getBar(n)+o.result+e.getBar((o.checksum+n)%u.MODULO)+e.getBar(u.STOP)}}},{key:"shouldEncodeAsEan128",value:function(){var t=this.options.ean128||!1;return"string"==typeof t&&(t="true"===t.toLowerCase()),t}}],[{key:"getBar",value:function(t){return u.BARS[t]?u.BARS[t].toString():""}},{key:"correctIndex",value:function(t,e){if(e===u.SET_A){var n=t.shift();return n<32?n+64:n-32}return e===u.SET_B?t.shift()-32:10*(t.shift()-48)+t.shift()-48}},{key:"next",value:function(t,n,r){if(!t.length)return{result:"",checksum:0};var o=void 0,i=void 0;if(t[0]>=200){i=t.shift()-105;var a=u.SWAP[i];void 0!==a?o=e.next(t,n+1,a):(r!==u.SET_A&&r!==u.SET_B||i!==u.SHIFT||(t[0]=r===u.SET_A?t[0]>95?t[0]-96:t[0]:t[0]<32?t[0]+96:t[0]),o=e.next(t,n+1,r))}else i=e.correctIndex(t,r),o=e.next(t,n+1,r);var f=i*n;return{result:e.getBar(i)+o.result,checksum:f+o.checksum}}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mod10=function(t){for(var e=0,n=0;n<t.length;n++){var r=parseInt(t[n]);(n+t.length)%2==0?e+=r:e+=2*r%10+Math.floor(2*r/10)}return(10-e%10)%10},e.mod11=function(t){for(var e=0,n=[2,3,4,5,6,7],r=0;r<t.length;r++){var o=parseInt(t[t.length-1-r]);e+=n[r%n.length]*o}return(11-e%11)%11}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t,e){return r({},t,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),i=a(n(3));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.fontSize=!n.flat&&n.fontSize>10*n.width?10*n.width:n.fontSize,r.guardHeight=n.height+r.fontSize/2+n.textMargin,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"encode",value:function(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function(t,e){return this.text.substr(t,e)}},{key:"leftEncode",value:function(t,e){return(0,i.default)(t,e)}},{key:"rightText",value:function(t,e){return this.text.substr(t,e)}},{key:"rightEncode",value:function(t,e){return(0,i.default)(t,e)}},{key:"encodeGuarded",value:function(){var t={fontSize:this.fontSize},e={height:this.guardHeight};return[{data:o.SIDE_BIN,options:e},{data:this.leftEncode(),text:this.leftText(),options:t},{data:o.MIDDLE_BIN,options:e},{data:this.rightEncode(),text:this.rightText(),options:t},{data:o.SIDE_BIN,options:e}]}},{key:"encodeFlat",value:function(){return{data:[o.SIDE_BIN,this.leftEncode(),o.MIDDLE_BIN,this.rightEncode(),o.SIDE_BIN].join(""),text:this.text}}}]),e}(a(n(0)).default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.checksum=u;var o=i(n(3));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),-1!==t.search(/^[0-9]{11}$/)&&(t+=u(t));var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.displayValue=n.displayValue,n.fontSize>10*n.width?r.fontSize=10*n.width:r.fontSize=n.fontSize,r.guardHeight=n.height+r.fontSize/2+n.textMargin,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{12}$/)&&this.data[11]==u(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t="";return t+="101",t+=(0,o.default)(this.data.substr(0,6),"LLLLLL"),t+="01010",t+=(0,o.default)(this.data.substr(6,6),"RRRRRR"),{data:t+="101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=[];return this.displayValue&&t.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),t.push({data:"101"+(0,o.default)(this.data[0],"L"),options:{height:this.guardHeight}}),t.push({data:(0,o.default)(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),t.push({data:"01010",options:{height:this.guardHeight}}),t.push({data:(0,o.default)(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),t.push({data:(0,o.default)(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&t.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),t}}]),e}(i(n(0)).default);function u(t){var e,n=0;for(e=1;e<11;e+=2)n+=parseInt(t[e]);for(e=0;e<11;e+=2)n+=3*parseInt(t[e]);return(10-n%10)%10}e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(31),a=n(0);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return-1!==this.data.search(/^([0-9]{2})+$/)}},{key:"encode",value:function(){var t=this,e=this.data.match(/.{2}/g).map((function(e){return t.encodePair(e)})).join("");return{data:i.START_BIN+e+i.END_BIN,text:this.text}}},{key:"encodePair",value:function(t){var e=i.BINARIES[t[1]];return i.BINARIES[t[0]].split("").map((function(t,n){return("1"===t?"111":"1")+("1"===e[n]?"000":"0")})).join("")}}]),e}(((r=a)&&r.__esModule?r:{default:r}).default);e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var n in e)e.hasOwnProperty(n)&&(n=e[n],"string"==typeof t[n]&&(t[n]=parseInt(t[n],10)));"string"==typeof t.displayValue&&(t.displayValue="false"!=t.displayValue);return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTotalWidthOfEncodings=e.calculateEncodingAttributes=e.getBarcodePadding=e.getEncodingHeight=e.getMaximumHeightOfEncodings=void 0;var r,o=n(7),i=(r=o)&&r.__esModule?r:{default:r};function a(t,e){return e.height+(e.displayValue&&t.text.length>0?e.fontSize+e.textMargin:0)+e.marginTop+e.marginBottom}function u(t,e,n){if(n.displayValue&&e<t){if("center"==n.textAlign)return Math.floor((t-e)/2);if("left"==n.textAlign)return 0;if("right"==n.textAlign)return Math.floor(t-e)}return 0}function f(t,e,n){var r;if(n)r=n;else{if("undefined"==typeof document)return 0;r=document.createElement("canvas").getContext("2d")}r.font=e.fontOptions+" "+e.fontSize+"px "+e.font;var o=r.measureText(t);return o?o.width:0}e.getMaximumHeightOfEncodings=function(t){for(var e=0,n=0;n<t.length;n++)t[n].height>e&&(e=t[n].height);return e},e.getEncodingHeight=a,e.getBarcodePadding=u,e.calculateEncodingAttributes=function(t,e,n){for(var r=0;r<t.length;r++){var o,c=t[r],s=(0,i.default)(e,c.options);o=s.displayValue?f(c.text,s,n):0;var l=c.data.length*s.width;c.width=Math.ceil(Math.max(o,l)),c.height=a(c,s),c.barcodePadding=u(o,l,s)}},e.getTotalWidthOfEncodings=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].width;return e}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.name="InvalidInputException",i.symbology=t,i.input=n,i.message='"'+i.input+'" is not a valid input for '+i.symbology,i}return i(e,Error),e}(),u=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.name="InvalidElementException",t.message="Not supported type to render on",t}return i(e,Error),e}(),f=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.name="NoElementException",t.message="No element to render on.",t}return i(e,Error),e}();e.InvalidInputException=a,e.InvalidElementException=u,e.NoElementException=f},function(t,e,n){"use strict";var r=p(n(16)),o=p(n(7)),i=p(n(41)),a=p(n(42)),u=p(n(43)),f=p(n(11)),c=p(n(49)),s=n(14),l=p(n(12));function p(t){return t&&t.__esModule?t:{default:t}}var d=function(){},h=function(t,e,n){var r=new d;if(void 0===t)throw Error("No element to render on was provided.");return r._renderProperties=(0,u.default)(t),r._encodings=[],r._options=l.default,r._errorHandler=new c.default(r),void 0!==e&&((n=n||{}).format||(n.format=_()),r.options(n)[n.format](e,n).render()),r};for(var y in h.getModule=function(t){return r.default[t]},r.default)r.default.hasOwnProperty(y)&&b(r.default,y);function b(t,e){d.prototype[e]=d.prototype[e.toUpperCase()]=d.prototype[e.toLowerCase()]=function(n,r){var i=this;return i._errorHandler.wrapBarcodeCall((function(){r.text=void 0===r.text?void 0:""+r.text;var a=(0,o.default)(i._options,r);a=(0,f.default)(a);var u=t[e],c=v(n,u,a);return i._encodings.push(c),i}))}}function v(t,e,n){var r=new e(t=""+t,n);if(!r.valid())throw new s.InvalidInputException(r.constructor.name,t);var a=r.encode();a=(0,i.default)(a);for(var u=0;u<a.length;u++)a[u].options=(0,o.default)(n,a[u].options);return a}function _(){return r.default.CODE128?"CODE128":Object.keys(r.default)[0]}function g(t,e,n){e=(0,i.default)(e);for(var r=0;r<e.length;r++)e[r].options=(0,o.default)(n,e[r].options),(0,a.default)(e[r].options);(0,a.default)(n),new(0,t.renderer)(t.element,e,n).render(),t.afterRender&&t.afterRender()}d.prototype.options=function(t){return this._options=(0,o.default)(this._options,t),this},d.prototype.blank=function(t){var e=new Array(t+1).join("0");return this._encodings.push({data:e}),this},d.prototype.init=function(){var t;if(this._renderProperties)for(var e in Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]),this._renderProperties){t=this._renderProperties[e];var n=(0,o.default)(this._options,t.options);"auto"==n.format&&(n.format=_()),this._errorHandler.wrapBarcodeCall((function(){var e=v(n.value,r.default[n.format.toUpperCase()],n);g(t,e,n)}))}},d.prototype.render=function(){if(!this._renderProperties)throw new s.NoElementException;if(Array.isArray(this._renderProperties))for(var t=0;t<this._renderProperties.length;t++)g(this._renderProperties[t],this._encodings,this._options);else g(this._renderProperties,this._encodings,this._options);return this},d.prototype._defaults=l.default,"undefined"!=typeof window&&(window.JsBarcode=h),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(t,e){var n=[];return jQuery(this).each((function(){n.push(this)})),h(n,t,e)}),t.exports=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n(18),i=n(24),a=n(30),u=n(33),f=n(38),c=n(39),s=n(40);e.default={CODE39:r.CODE39,CODE128:o.CODE128,CODE128A:o.CODE128A,CODE128B:o.CODE128B,CODE128C:o.CODE128C,EAN13:i.EAN13,EAN8:i.EAN8,EAN5:i.EAN5,EAN2:i.EAN2,UPC:i.UPC,UPCE:i.UPCE,ITF14:a.ITF14,ITF:a.ITF,MSI:u.MSI,MSI10:u.MSI10,MSI11:u.MSI11,MSI1010:u.MSI1010,MSI1110:u.MSI1110,pharmacode:f.pharmacode,codabar:c.codabar,GenericBarcode:s.GenericBarcode}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CODE39=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);var a=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=t.toUpperCase(),n.mod43&&(t+=function(t){return u[t]}(function(t){for(var e=0,n=0;n<t.length;n++)e+=s(t[n]);return e%=43}(t))),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"encode",value:function(){for(var t=c("*"),e=0;e<this.data.length;e++)t+=c(this.data[e])+"0";return{data:t+=c("*"),text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default),u=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],f=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function c(t){return function(t){return f[t].toString(2)}(s(t))}function s(t){return u.indexOf(t)}e.CODE39=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CODE128C=e.CODE128B=e.CODE128A=e.CODE128=void 0;var r=u(n(19)),o=u(n(21)),i=u(n(22)),a=u(n(23));function u(t){return t&&t.__esModule?t:{default:t}}e.CODE128=r.default,e.CODE128A=o.default,e.CODE128B=i.default,e.CODE128C=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(5)),o=i(n(20));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=function(t){function e(t,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),/^[\x00-\x7F\xC8-\xD3]+$/.test(t))var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,(0,o.default)(t),n));else r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return a(r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(r.default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(t){return t.match(new RegExp("^"+r.A_CHARS+"*"))[0].length},i=function(t){return t.match(new RegExp("^"+r.B_CHARS+"*"))[0].length},a=function(t){return t.match(new RegExp("^"+r.C_CHARS+"*"))[0]};function u(t,e){var n=e?r.A_CHARS:r.B_CHARS,o=t.match(new RegExp("^("+n+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(o)return o[1]+String.fromCharCode(204)+f(t.substring(o[1].length));var i=t.match(new RegExp("^"+n+"+"))[0];return i.length===t.length?t:i+String.fromCharCode(e?205:206)+u(t.substring(i.length),!e)}function f(t){var e=a(t),n=e.length;if(n===t.length)return t;t=t.substring(n);var r=o(t)>=i(t);return e+String.fromCharCode(r?206:205)+u(t,r)}e.default=function(t){var e=void 0;if(a(t).length>=2)e=r.C_START_CHAR+f(t);else{var n=o(t)>i(t);e=(n?r.A_START_CHAR:r.B_START_CHAR)+u(t,n)}return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,(function(t,e){return String.fromCharCode(203)+e}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(5),a=(r=i)&&r.__esModule?r:{default:r},u=n(1);var f=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,u.A_START_CHAR+t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return new RegExp("^"+u.A_CHARS+"+$").test(this.data)}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(5),a=(r=i)&&r.__esModule?r:{default:r},u=n(1);var f=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,u.B_START_CHAR+t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return new RegExp("^"+u.B_CHARS+"+$").test(this.data)}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(5),a=(r=i)&&r.__esModule?r:{default:r},u=n(1);var f=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,u.C_START_CHAR+t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return new RegExp("^"+u.C_CHARS+"+$").test(this.data)}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UPCE=e.UPC=e.EAN2=e.EAN5=e.EAN8=e.EAN13=void 0;var r=c(n(25)),o=c(n(26)),i=c(n(27)),a=c(n(28)),u=c(n(9)),f=c(n(29));function c(t){return t&&t.__esModule?t:{default:t}}e.EAN13=r.default,e.EAN8=o.default,e.EAN5=i.default,e.EAN2=a.default,e.UPC=u.default,e.UPCE=f.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=n(2),u=n(8),f=(r=u)&&r.__esModule?r:{default:r};var c=function(t){return(10-t.substr(0,12).split("").map((function(t){return+t})).reduce((function(t,e,n){return n%2?t+3*e:t+e}),0)%10)%10},s=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),-1!==t.search(/^[0-9]{12}$/)&&(t+=c(t));var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastChar=n.lastChar,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{13}$/)&&+this.data[12]===c(this.data)}},{key:"leftText",value:function(){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function(){var t=this.data.substr(1,6),n=a.EAN13_STRUCTURE[this.data[0]];return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftEncode",this).call(this,t,n)}},{key:"rightText",value:function(){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function(){var t=this.data.substr(7,6);return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightEncode",this).call(this,t,"RRRRRR")}},{key:"encodeGuarded",value:function(){var t=i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"encodeGuarded",this).call(this);return this.options.displayValue&&(t.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(t.push({data:"00"}),t.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),t}}]),e}(f.default);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=n(8),u=(r=a)&&r.__esModule?r:{default:r};var f=function(t){return(10-t.substr(0,7).split("").map((function(t){return+t})).reduce((function(t,e,n){return n%2?t+e:t+3*e}),0)%10)%10},c=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),-1!==t.search(/^[0-9]{7}$/)&&(t+=f(t)),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{8}$/)&&+this.data[7]===f(this.data)}},{key:"leftText",value:function(){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function(){var t=this.data.substr(0,4);return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftEncode",this).call(this,t,"LLLL")}},{key:"rightText",value:function(){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function(){var t=this.data.substr(4,4);return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightEncode",this).call(this,t,"RRRR")}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),i=u(n(3)),a=u(n(0));function u(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{5}$/)}},{key:"encode",value:function(){var t,e=o.EAN5_STRUCTURE[(t=this.data,t.split("").map((function(t){return+t})).reduce((function(t,e,n){return n%2?t+9*e:t+3*e}),0)%10)];return{data:"1011"+(0,i.default)(this.data,e,"01"),text:this.text}}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),i=a(n(3));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{2}$/)}},{key:"encode",value:function(){var t=o.EAN2_STRUCTURE[parseInt(this.data)%4];return{data:"1011"+(0,i.default)(this.data,t,"01"),text:this.text}}}]),e}(a(n(0)).default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=u(n(3)),i=u(n(0)),a=n(9);function u(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],s=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(r.isValid=!1,-1!==t.search(/^[0-9]{6}$/))r.middleDigits=t,r.upcA=p(t,"0"),r.text=n.text||""+r.upcA[0]+t+r.upcA[r.upcA.length-1],r.isValid=!0;else{if(-1===t.search(/^[01][0-9]{7}$/))return f(r);if(r.middleDigits=t.substring(1,t.length-1),r.upcA=p(r.middleDigits,t[0]),r.upcA[r.upcA.length-1]!==t[t.length-1])return f(r);r.isValid=!0}return r.displayValue=n.displayValue,n.fontSize>10*n.width?r.fontSize=10*n.width:r.fontSize=n.fontSize,r.guardHeight=n.height+r.fontSize/2+n.textMargin,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t="";return t+="101",t+=this.encodeMiddleDigits(),{data:t+="010101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=[];return this.displayValue&&t.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),t.push({data:"101",options:{height:this.guardHeight}}),t.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),t.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&t.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),t}},{key:"encodeMiddleDigits",value:function(){var t=this.upcA[0],e=this.upcA[this.upcA.length-1],n=s[parseInt(e)][parseInt(t)];return(0,o.default)(this.middleDigits,n)}}]),e}(i.default);function p(t,e){for(var n=parseInt(t[t.length-1]),r=c[n],o="",i=0,u=0;u<r.length;u++){var f=r[u];o+="X"===f?t[i++]:f}return""+(o=""+e+o)+(0,a.checksum)(o)}e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ITF14=e.ITF=void 0;var r=i(n(10)),o=i(n(32));function i(t){return t&&t.__esModule?t:{default:t}}e.ITF=r.default,e.ITF14=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.START_BIN="1010",e.END_BIN="11101",e.BINARIES=["00110","10001","01001","11000","00101","10100","01100","00011","10010","01010"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(10),a=(r=i)&&r.__esModule?r:{default:r};var u=function(t){var e=t.substr(0,13).split("").map((function(t){return parseInt(t,10)})).reduce((function(t,e,n){return t+e*(3-n%2*2)}),0);return 10*Math.ceil(e/10)-e},f=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),-1!==t.search(/^[0-9]{13}$/)&&(t+=u(t)),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{14}$/)&&+this.data[13]===u(this.data)}}]),e}(a.default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MSI1110=e.MSI1010=e.MSI11=e.MSI10=e.MSI=void 0;var r=f(n(4)),o=f(n(34)),i=f(n(35)),a=f(n(36)),u=f(n(37));function f(t){return t&&t.__esModule?t:{default:t}}e.MSI=r.default,e.MSI10=o.default,e.MSI11=i.default,e.MSI1010=a.default,e.MSI1110=u.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r},a=n(6);var u=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t+(0,a.mod10)(t),n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r},a=n(6);var u=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t+(0,a.mod11)(t),n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r},a=n(6);var u=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t+=(0,a.mod10)(t),t+=(0,a.mod10)(t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r},a=n(6);var u=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t+=(0,a.mod11)(t),t+=(0,a.mod10)(t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(i.default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pharmacode=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);var a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.number=parseInt(t,10),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"encode",value:function(){for(var t=this.number,e="";!isNaN(t)&&0!=t;)t%2==0?(e="11100"+e,t=(t-2)/2):(e="100"+e,t=(t-1)/2);return{data:e=e.slice(0,-2),text:this.text}}},{key:"valid",value:function(){return this.number>=3&&this.number<=131070}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default);e.pharmacode=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.codabar=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);var a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),0===t.search(/^[0-9\-\$\:\.\+\/]+$/)&&(t="A"+t+"A");var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.toUpperCase(),n));return r.text=r.options.text||r.text.replace(/[A-D]/g,""),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"valid",value:function(){return-1!==this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)}},{key:"encode",value:function(){for(var t=[],e=this.getEncodings(),n=0;n<this.data.length;n++)t.push(e[this.data.charAt(n)]),n!==this.data.length-1&&t.push("0");return{text:this.text,data:t.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"1011011011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default);e.codabar=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GenericBarcode=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);var a=function(t){function e(t,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default);e.GenericBarcode=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=[];return function t(n){if(Array.isArray(n))for(var r=0;r<n.length;r++)t(n[r]);else n.text=n.text||"",n.data=n.data||"",e.push(n)}(t),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.marginTop=t.marginTop||t.margin,t.marginBottom=t.marginBottom||t.margin,t.marginRight=t.marginRight||t.margin,t.marginLeft=t.marginLeft||t.margin,t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=u(n(44)),i=u(n(45)),a=n(14);function u(t){return t&&t.__esModule?t:{default:t}}function f(t){if("string"==typeof t)return function(t){var e=document.querySelectorAll(t);if(0===e.length)return;for(var n=[],r=0;r<e.length;r++)n.push(f(e[r]));return n}(t);if(Array.isArray(t)){for(var e=[],n=0;n<t.length;n++)e.push(f(t[n]));return e}if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLImageElement)return u=t,{element:c=document.createElement("canvas"),options:(0,o.default)(u),renderer:i.default.CanvasRenderer,afterRender:function(){u.setAttribute("src",c.toDataURL())}};if(t&&t.nodeName&&"svg"===t.nodeName.toLowerCase()||"undefined"!=typeof SVGElement&&t instanceof SVGElement)return{element:t,options:(0,o.default)(t),renderer:i.default.SVGRenderer};if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement)return{element:t,options:(0,o.default)(t),renderer:i.default.CanvasRenderer};if(t&&t.getContext)return{element:t,renderer:i.default.CanvasRenderer};if(t&&"object"===(void 0===t?"undefined":r(t))&&!t.nodeName)return{element:t,renderer:i.default.ObjectRenderer};throw new a.InvalidElementException;var u,c}e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(11)),o=i(n(12));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e={};for(var n in o.default)o.default.hasOwnProperty(n)&&(t.hasAttribute("jsbarcode-"+n.toLowerCase())&&(e[n]=t.getAttribute("jsbarcode-"+n.toLowerCase())),t.hasAttribute("data-"+n.toLowerCase())&&(e[n]=t.getAttribute("data-"+n.toLowerCase())));return e.value=t.getAttribute("jsbarcode-value")||t.getAttribute("data-value"),e=(0,r.default)(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(46)),o=a(n(47)),i=a(n(48));function a(t){return t&&t.__esModule?t:{default:t}}e.default={CanvasRenderer:r.default,SVGRenderer:o.default,ObjectRenderer:i.default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),a=(r=i)&&r.__esModule?r:{default:r},u=n(13);var f=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.encodings=n,this.options=r}return o(t,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var t=0;t<this.encodings.length;t++){var e=(0,a.default)(this.options,this.encodings[t].options);this.drawCanvasBarcode(e,this.encodings[t]),this.drawCanvasText(e,this.encodings[t]),this.moveCanvasDrawing(this.encodings[t])}this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var t=this.canvas.getContext("2d");t.save(),(0,u.calculateEncodingAttributes)(this.encodings,this.options,t);var e=(0,u.getTotalWidthOfEncodings)(this.encodings),n=(0,u.getMaximumHeightOfEncodings)(this.encodings);this.canvas.width=e+this.options.marginLeft+this.options.marginRight,this.canvas.height=n,t.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(t.fillStyle=this.options.background,t.fillRect(0,0,this.canvas.width,this.canvas.height)),t.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(t,e){var n,r=this.canvas.getContext("2d"),o=e.data;n="top"==t.textPosition?t.marginTop+t.fontSize+t.textMargin:t.marginTop,r.fillStyle=t.lineColor;for(var i=0;i<o.length;i++){var a=i*t.width+e.barcodePadding;"1"===o[i]?r.fillRect(a,n,t.width,t.height):o[i]&&r.fillRect(a,n,t.width,t.height*o[i])}}},{key:"drawCanvasText",value:function(t,e){var n,r,o=this.canvas.getContext("2d"),i=t.fontOptions+" "+t.fontSize+"px "+t.font;t.displayValue&&(r="top"==t.textPosition?t.marginTop+t.fontSize-t.textMargin:t.height+t.textMargin+t.marginTop+t.fontSize,o.font=i,"left"==t.textAlign||e.barcodePadding>0?(n=0,o.textAlign="left"):"right"==t.textAlign?(n=e.width-1,o.textAlign="right"):(n=e.width/2,o.textAlign="center"),o.fillText(e.text,n,r))}},{key:"moveCanvasDrawing",value:function(t){this.canvas.getContext("2d").translate(t.width,0)}},{key:"restoreCanvas",value:function(){this.canvas.getContext("2d").restore()}}]),t}();e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),a=(r=i)&&r.__esModule?r:{default:r},u=n(13);var f="http://www.w3.org/2000/svg",c=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.svg=e,this.encodings=n,this.options=r,this.document=r.xmlDocument||document}return o(t,[{key:"render",value:function(){var t=this.options.marginLeft;this.prepareSVG();for(var e=0;e<this.encodings.length;e++){var n=this.encodings[e],r=(0,a.default)(this.options,n.options),o=this.createGroup(t,r.marginTop,this.svg);this.setGroupOptions(o,r),this.drawSvgBarcode(o,r,n),this.drawSVGText(o,r,n),t+=n.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);(0,u.calculateEncodingAttributes)(this.encodings,this.options);var t=(0,u.getTotalWidthOfEncodings)(this.encodings),e=(0,u.getMaximumHeightOfEncodings)(this.encodings),n=t+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(n,e),this.options.background&&this.drawRect(0,0,n,e,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function(t,e,n){var r,o=n.data;r="top"==e.textPosition?e.fontSize+e.textMargin:0;for(var i=0,a=0,u=0;u<o.length;u++)a=u*e.width+n.barcodePadding,"1"===o[u]?i++:i>0&&(this.drawRect(a-e.width*i,r,e.width*i,e.height,t),i=0);i>0&&this.drawRect(a-e.width*(i-1),r,e.width*i,e.height,t)}},{key:"drawSVGText",value:function(t,e,n){var r,o,i=this.document.createElementNS(f,"text");e.displayValue&&(i.setAttribute("style","font:"+e.fontOptions+" "+e.fontSize+"px "+e.font),o="top"==e.textPosition?e.fontSize-e.textMargin:e.height+e.textMargin+e.fontSize,"left"==e.textAlign||n.barcodePadding>0?(r=0,i.setAttribute("text-anchor","start")):"right"==e.textAlign?(r=n.width-1,i.setAttribute("text-anchor","end")):(r=n.width/2,i.setAttribute("text-anchor","middle")),i.setAttribute("x",r),i.setAttribute("y",o),i.appendChild(this.document.createTextNode(n.text)),t.appendChild(i))}},{key:"setSvgAttributes",value:function(t,e){var n=this.svg;n.setAttribute("width",t+"px"),n.setAttribute("height",e+"px"),n.setAttribute("x","0px"),n.setAttribute("y","0px"),n.setAttribute("viewBox","0 0 "+t+" "+e),n.setAttribute("xmlns",f),n.setAttribute("version","1.1"),n.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function(t,e,n){var r=this.document.createElementNS(f,"g");return r.setAttribute("transform","translate("+t+", "+e+")"),n.appendChild(r),r}},{key:"setGroupOptions",value:function(t,e){t.setAttribute("style","fill:"+e.lineColor+";")}},{key:"drawRect",value:function(t,e,n,r,o){var i=this.document.createElementNS(f,"rect");return i.setAttribute("x",t),i.setAttribute("y",e),i.setAttribute("width",n),i.setAttribute("height",r),o.appendChild(i),i}}]),t}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.object=e,this.encodings=n,this.options=r}return r(t,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=e}return r(t,[{key:"handleCatch",value:function(t){if("InvalidInputException"!==t.name)throw t;if(this.api._options.valid===this.api._defaults.valid)throw t.message;this.api._options.valid(!1),this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(t){try{var e=t.apply(void 0,arguments);return this.api._options.valid(!0),e}catch(t){return this.handleCatch(t),this.api}}}]),t}();e.default=o}]);


/**
 * PDF417 - 2D Barcode generator (LGPLv3)
 *
 * Ported from PHP - PDF417 class, version 1.0.005, from TCPDF library (http://www.tcpdf.org/)
 */
var PDF417={ROWHEIGHT:4,QUIETH:2,QUIETV:2,barcode_array:{},start_pattern:"11111111010101000",stop_pattern:"111111101000101001",textsubmodes:[[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,32,253,254,255],[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,253,254,255],[48,49,50,51,52,53,54,55,56,57,38,13,9,44,58,35,45,46,36,47,43,37,42,61,94,251,32,253,254,255],[59,60,62,64,91,92,93,95,96,126,33,13,9,44,58,10,45,46,36,47,34,124,42,40,41,63,123,125,39,255]],textlatch:{"01":[27],"02":[28],"03":[28,25],10:[28,28],12:[28],13:[28,25],20:[28],21:[27],23:[25],30:[29],31:[29,27],32:[29,28]},clusters:[[120256,125680,128380,120032,125560,128318,108736,119920,108640,86080,108592,86048,110016,120560,125820,109792,120440,125758,88256,109680,88160,89536,110320,120700,89312,110200,120638,89200,110140,89840,110460,89720,110398,89980,128506,119520,125304,128190,107712,119408,125244,107616,119352,84032,107568,119324,84e3,107544,83984,108256,119672,125374,85184,108144,119612,85088,108088,119582,85040,108060,85728,108408,119742,85616,108348,85560,108318,85880,108478,85820,85790,107200,119152,125116,107104,119096,125086,83008,107056,119068,82976,107032,82960,82952,83648,107376,119228,83552,107320,119198,83504,107292,83480,83468,83824,107452,83768,107422,83740,83900,106848,118968,125022,82496,106800,118940,82464,106776,118926,82448,106764,82440,106758,82784,106936,119006,82736,106908,82712,106894,82700,82694,106974,82830,82240,106672,118876,82208,106648,118862,82192,106636,82184,106630,82180,82352,82328,82316,82080,118830,106572,106566,82050,117472,124280,127678,103616,117360,124220,103520,117304,124190,75840,103472,75808,104160,117624,124350,76992,104048,117564,76896,103992,76848,76824,77536,104312,117694,77424,104252,77368,77340,77688,104382,77628,77758,121536,126320,128700,121440,126264,128670,111680,121392,126236,111648,121368,126222,111632,121356,103104,117104,124092,112320,103008,117048,124062,112224,121656,126366,93248,74784,102936,117006,93216,112152,93200,75456,103280,117180,93888,75360,103224,117150,93792,112440,121758,93744,75288,93720,75632,103356,94064,75576,103326,94008,112542,93980,75708,94140,75678,94110,121184,126136,128606,111168,121136,126108,111136,121112,126094,111120,121100,111112,111108,102752,116920,123998,111456,102704,116892,91712,74272,121244,116878,91680,74256,102668,91664,111372,102662,74244,74592,102840,116958,92e3,74544,102812,91952,111516,102798,91928,74508,74502,74680,102878,92088,74652,92060,74638,92046,92126,110912,121008,126044,110880,120984,126030,110864,120972,110856,120966,110852,110850,74048,102576,116828,90944,74016,102552,116814,90912,111e3,121038,90896,73992,102534,90888,110982,90884,74160,102620,91056,74136,102606,91032,111054,91020,74118,91014,91100,91086,110752,120920,125998,110736,120908,110728,120902,110724,110722,73888,102488,116782,90528,73872,102476,90512,110796,102470,90504,73860,90500,73858,73944,90584,90572,90566,120876,120870,110658,102444,73800,90312,90308,90306,101056,116080,123580,100960,116024,70720,100912,115996,70688,100888,70672,70664,71360,101232,116156,71264,101176,116126,71216,101148,71192,71180,71536,101308,71480,101278,71452,71612,71582,118112,124600,127838,105024,118064,124572,104992,118040,124558,104976,118028,104968,118022,100704,115896,123486,105312,100656,115868,79424,70176,118172,115854,79392,105240,100620,79376,70152,79368,70496,100792,115934,79712,70448,118238,79664,105372,100750,79640,70412,79628,70584,100830,79800,70556,79772,70542,70622,79838,122176,126640,128860,122144,126616,128846,122128,126604,122120,126598,122116,104768,117936,124508,113472,104736,126684,124494,113440,122264,126670,113424,104712,117894,113416,122246,104706,69952,100528,115804,78656,69920,100504,115790,96064,78624,104856,117966,96032,113560,122318,100486,96016,78600,104838,96008,69890,70064,100572,78768,70040,100558,96176,78744,104910,96152,113614,70022,78726,70108,78812,70094,96220,78798,122016,126552,128814,122e3,126540,121992,126534,121988,121986,104608,117848,124462,113056,104592,126574,113040,122060,117830,113032,104580,113028,104578,113026,69792,100440,115758,78240,69776,100428,95136,78224,104652,100422,95120,113100,69764,95112,78212,69762,78210,69848,100462,78296,69836,95192,78284,69830,95180,78278,69870,95214,121936,126508,121928,126502,121924,121922,104528,117804,112848,104520,117798,112840,121958,112836,104514,112834,69712,100396,78032,69704,100390,94672,78024,104550,94664,112870,69698,94660,78018,94658,78060,94700,94694,126486,121890,117782,104484,104482,69672,77928,94440,69666,77922,99680,68160,99632,68128,99608,115342,68112,99596,68104,99590,68448,99768,115422,68400,99740,68376,99726,68364,68358,68536,99806,68508,68494,68574,101696,116400,123740,101664,116376,101648,116364,101640,116358,101636,67904,99504,115292,72512,67872,116444,115278,72480,101784,116430,72464,67848,99462,72456,101766,67842,68016,99548,72624,67992,99534,72600,101838,72588,67974,68060,72668,68046,72654,118432,124760,127918,118416,124748,118408,124742,118404,118402,101536,116312,105888,101520,116300,105872,118476,116294,105864,101508,105860,101506,105858,67744,99416,72096,67728,116334,80800,72080,101580,99398,80784,105932,67716,80776,72068,67714,72066,67800,99438,72152,67788,80856,72140,67782,80844,72134,67822,72174,80878,126800,128940,126792,128934,126788,126786,118352,124716,122576,126828,124710,122568,126822,122564,118338,122562,101456,116268,105680,101448,116262,114128,105672,118374,114120,122598,101442,114116,105666,114114,67664,99372,71888,67656,99366,80336,71880,101478,97232,80328,105702,67650,97224,114150,71874,97220,67692,71916,67686,80364,71910,97260,80358,97254,126760,128918,126756,126754,118312,124694,122472,126774,122468,118306,122466,101416,116246,105576,101412,113896,105572,101410,113892,105570,113890,67624,99350,71784,101430,80104,71780,67618,96744,80100,71778,96740,80098,96738,71798,96758,126738,122420,122418,105524,113780,113778,71732,79988,96500,96498,66880,66848,98968,66832,66824,66820,66992,66968,66956,66950,67036,67022,1e5,99984,115532,99976,115526,99972,99970,66720,98904,69024,100056,98892,69008,100044,69e3,100038,68996,66690,68994,66776,98926,69080,100078,69068,66758,69062,66798,69102,116560,116552,116548,116546,99920,102096,116588,115494,102088,116582,102084,99906,102082,66640,68816,66632,98854,73168,68808,66628,73160,68804,66626,73156,68802,66668,68844,66662,73196,68838,73190,124840,124836,124834,116520,118632,124854,118628,116514,118626,99880,115478,101992,116534,106216,101988,99874,106212,101986,106210,66600,98838,68712,99894,72936,68708,66594,81384,72932,68706,81380,72930,66614,68726,72950,81398,128980,128978,124820,126900,124818,126898,116500,118580,116498,122740,118578,122738,99860,101940,99858,106100,101938,114420],[128352,129720,125504,128304,129692,125472,128280,129678,125456,128268,125448,128262,125444,125792,128440,129758,120384,125744,128412,120352,125720,128398,120336,125708,120328,125702,120324,120672,125880,128478,110144,120624,125852,110112,120600,125838,110096,120588,110088,120582,110084,110432,120760,125918,89664,110384,120732,89632,110360,120718,89616,110348,89608,110342,89952,110520,120798,89904,110492,89880,110478,89868,90040,110558,90012,89998,125248,128176,129628,125216,128152,129614,125200,128140,125192,128134,125188,125186,119616,125360,128220,119584,125336,128206,119568,125324,119560,125318,119556,119554,108352,119728,125404,108320,119704,125390,108304,119692,108296,119686,108292,108290,85824,108464,119772,85792,108440,119758,85776,108428,85768,108422,85764,85936,108508,85912,108494,85900,85894,85980,85966,125088,128088,129582,125072,128076,125064,128070,125060,125058,119200,125144,128110,119184,125132,119176,125126,119172,119170,107424,119256,125166,107408,119244,107400,119238,107396,107394,83872,107480,119278,83856,107468,83848,107462,83844,83842,83928,107502,83916,83910,83950,125008,128044,125e3,128038,124996,124994,118992,125036,118984,125030,118980,118978,106960,119020,106952,119014,106948,106946,82896,106988,82888,106982,82884,82882,82924,82918,124968,128022,124964,124962,118888,124982,118884,118882,106728,118902,106724,106722,82408,106742,82404,82402,124948,124946,118836,118834,106612,106610,124224,127664,129372,124192,127640,129358,124176,127628,124168,127622,124164,124162,117568,124336,127708,117536,124312,127694,117520,124300,117512,124294,117508,117506,104256,117680,124380,104224,117656,124366,104208,117644,104200,117638,104196,104194,77632,104368,117724,77600,104344,117710,77584,104332,77576,104326,77572,77744,104412,77720,104398,77708,77702,77788,77774,128672,129880,93168,128656,129868,92664,128648,129862,92412,128644,128642,124064,127576,129326,126368,124048,129902,126352,128716,127558,126344,124036,126340,124034,126338,117152,124120,127598,121760,117136,124108,121744,126412,124102,121736,117124,121732,117122,121730,103328,117208,124142,112544,103312,117196,112528,121804,117190,112520,103300,112516,103298,112514,75680,103384,117230,94112,75664,103372,94096,112588,103366,94088,75652,94084,75650,75736,103406,94168,75724,94156,75718,94150,75758,128592,129836,91640,128584,129830,91388,128580,91262,128578,123984,127532,126160,123976,127526,126152,128614,126148,123970,126146,116944,124012,121296,116936,124006,121288,126182,121284,116930,121282,102864,116972,111568,102856,116966,111560,121318,111556,102850,111554,74704,102892,92112,74696,102886,92104,111590,92100,74690,92098,74732,92140,74726,92134,128552,129814,90876,128548,90750,128546,123944,127510,126056,128566,126052,123938,126050,116840,123958,121064,116836,121060,116834,121058,102632,116854,111080,121078,111076,102626,111074,74216,102646,91112,74212,91108,74210,91106,74230,91126,128532,90494,128530,123924,126004,123922,126002,116788,120948,116786,120946,102516,110836,102514,110834,73972,90612,73970,90610,128522,123914,125978,116762,120890,102458,110714,123552,127320,129198,123536,127308,123528,127302,123524,123522,116128,123608,127342,116112,123596,116104,123590,116100,116098,101280,116184,123630,101264,116172,101256,116166,101252,101250,71584,101336,116206,71568,101324,71560,101318,71556,71554,71640,101358,71628,71622,71662,127824,129452,79352,127816,129446,79100,127812,78974,127810,123472,127276,124624,123464,127270,124616,127846,124612,123458,124610,115920,123500,118224,115912,123494,118216,124646,118212,115906,118210,100816,115948,105424,100808,115942,105416,118246,105412,100802,105410,70608,100844,79824,70600,100838,79816,105446,79812,70594,79810,70636,79852,70630,79846,129960,95728,113404,129956,95480,113278,129954,95356,95294,127784,129430,78588,128872,129974,95996,78462,128868,127778,95870,128866,123432,127254,124520,123428,126696,128886,123426,126692,124514,126690,115816,123446,117992,115812,122344,117988,115810,122340,117986,122338,100584,115830,104936,100580,113640,104932,100578,113636,104930,113634,70120,100598,78824,70116,96232,78820,70114,96228,78818,96226,70134,78838,129940,94968,113022,129938,94844,94782,127764,78206,128820,127762,95102,128818,123412,124468,123410,126580,124466,126578,115764,117876,115762,122100,117874,122098,100468,104692,100466,113140,104690,113138,69876,78324,69874,95220,78322,95218,129930,94588,94526,127754,128794,123402,124442,126522,115738,117818,121978,100410,104570,112890,69754,78074,94714,94398,123216,127148,123208,127142,123204,123202,115408,123244,115400,123238,115396,115394,99792,115436,99784,115430,99780,99778,68560,99820,68552,99814,68548,68546,68588,68582,127400,129238,72444,127396,72318,127394,123176,127126,123752,123172,123748,123170,123746,115304,123190,116456,115300,116452,115298,116450,99560,115318,101864,99556,101860,99554,101858,68072,99574,72680,68068,72676,68066,72674,68086,72694,129492,80632,105854,129490,80508,80446,127380,72062,127924,127378,80766,127922,123156,123700,123154,124788,123698,124786,115252,116340,115250,118516,116338,118514,99444,101620,99442,105972,101618,105970,67828,72180,67826,80884,72178,80882,97008,114044,96888,113982,96828,96798,129482,80252,130010,97148,80190,97086,127370,127898,128954,123146,123674,124730,126842,115226,116282,118394,122618,99386,101498,105722,114170,67706,71930,80378,96632,113854,96572,96542,80062,96702,96444,96414,96350,123048,123044,123042,115048,123062,115044,115042,99048,115062,99044,99042,67048,99062,67044,67042,67062,127188,68990,127186,123028,123316,123026,123314,114996,115572,114994,115570,98932,100084,98930,100082,66804,69108,66802,69106,129258,73084,73022,127178,127450,123018,123290,123834,114970,115514,116602,98874,99962,102138,66682,68858,73210,81272,106174,81212,81182,72894,81342,97648,114364,97592,114334,97564,97550,81084,97724,81054,97694,97464,114270,97436,97422,80990,97502,97372,97358,97326,114868,114866,98676,98674,66292,66290,123098,114842,115130,98618,99194,66170,67322,69310,73404,73374,81592,106334,81564,81550,73310,81630,97968,114524,97944,114510,97932,97926,81500,98012,81486,97998,97880,114478,97868,97862,81454,97902,97836,97830,69470,73564,73550,81752,106414,81740,81734,73518,81774,81708,81702],[109536,120312,86976,109040,120060,86496,108792,119934,86256,108668,86136,129744,89056,110072,129736,88560,109820,129732,88312,109694,129730,88188,128464,129772,89592,128456,129766,89340,128452,89214,128450,125904,128492,125896,128486,125892,125890,120784,125932,120776,125926,120772,120770,110544,120812,110536,120806,110532,84928,108016,119548,84448,107768,119422,84208,107644,84088,107582,84028,129640,85488,108284,129636,85240,108158,129634,85116,85054,128232,129654,85756,128228,85630,128226,125416,128246,125412,125410,119784,125430,119780,119778,108520,119798,108516,108514,83424,107256,119166,83184,107132,83064,107070,83004,82974,129588,83704,107390,129586,83580,83518,128116,83838,128114,125172,125170,119284,119282,107508,107506,82672,106876,82552,106814,82492,82462,129562,82812,82750,128058,125050,119034,82296,106686,82236,82206,82366,82108,82078,76736,103920,117500,76256,103672,117374,76016,103548,75896,103486,75836,129384,77296,104188,129380,77048,104062,129378,76924,76862,127720,129398,77564,127716,77438,127714,124392,127734,124388,124386,117736,124406,117732,117730,104424,117750,104420,104418,112096,121592,126334,92608,111856,121468,92384,111736,121406,92272,111676,92216,111646,92188,75232,103160,117118,93664,74992,103036,93424,112252,102974,93304,74812,93244,74782,93214,129332,75512,103294,129908,129330,93944,75388,129906,93820,75326,93758,127604,75646,128756,127602,94078,128754,124148,126452,124146,126450,117236,121844,117234,121842,103412,103410,91584,111344,121212,91360,111224,121150,91248,111164,91192,111134,91164,91150,74480,102780,91888,74360,102718,91768,111422,91708,74270,91678,129306,74620,129850,92028,74558,91966,127546,128634,124026,126202,116986,121338,102906,90848,110968,121022,90736,110908,90680,110878,90652,90638,74104,102590,91e3,74044,90940,74014,90910,74174,91070,90480,110780,90424,110750,90396,90382,73916,90556,73886,90526,90296,110686,90268,90254,73822,90334,90204,90190,71136,101112,116094,70896,100988,70776,100926,70716,70686,129204,71416,101246,129202,71292,71230,127348,71550,127346,123636,123634,116212,116210,101364,101362,79296,105200,118140,79072,105080,118078,78960,105020,78904,104990,78876,78862,70384,100732,79600,70264,100670,79480,105278,79420,70174,79390,129178,70524,129466,79740,70462,79678,127290,127866,123514,124666,115962,118266,100858,113376,122232,126654,95424,113264,122172,95328,113208,122142,95280,113180,95256,113166,95244,78560,104824,117950,95968,78448,104764,95856,113468,104734,95800,78364,95772,78350,95758,70008,100542,78712,69948,96120,78652,69918,96060,78622,96030,70078,78782,96190,94912,113008,122044,94816,112952,122014,94768,112924,94744,112910,94732,94726,78192,104636,95088,78136,104606,95032,113054,95004,78094,94990,69820,78268,69790,95164,78238,95134,94560,112824,121950,94512,112796,94488,112782,94476,94470,78008,104542,94648,77980,94620,77966,94606,69726,78046,94686,94384,112732,94360,112718,94348,94342,77916,94428,77902,94414,94296,112686,94284,94278,77870,94318,94252,94246,68336,99708,68216,99646,68156,68126,68476,68414,127162,123258,115450,99834,72416,101752,116414,72304,101692,72248,101662,72220,72206,67960,99518,72568,67900,72508,67870,72478,68030,72638,80576,105840,118460,80480,105784,118430,80432,105756,80408,105742,80396,80390,72048,101564,80752,71992,101534,80696,71964,80668,71950,80654,67772,72124,67742,80828,72094,80798,114016,122552,126814,96832,113968,122524,96800,113944,122510,96784,113932,96776,113926,96772,80224,105656,118366,97120,80176,105628,97072,114076,105614,97048,80140,97036,80134,97030,71864,101470,80312,71836,97208,80284,71822,97180,80270,97166,67678,71902,80350,97246,96576,113840,122460,96544,113816,122446,96528,113804,96520,113798,96516,96514,80048,105564,96688,80024,105550,96664,113870,96652,80006,96646,71772,80092,71758,96732,80078,96718,96416,113752,122414,96400,113740,96392,113734,96388,96386,79960,105518,96472,79948,96460,79942,96454,71726,79982,96494,96336,113708,96328,113702,96324,96322,79916,96364,79910,96358,96296,113686,96292,96290,79894,96310,66936,99006,66876,66846,67006,68976,100028,68920,99998,68892,68878,66748,69052,66718,69022,73056,102072,116574,73008,102044,72984,102030,72972,72966,68792,99934,73144,68764,73116,68750,73102,66654,68830,73182,81216,106160,118620,81184,106136,118606,81168,106124,81160,106118,81156,81154,72880,101980,81328,72856,101966,81304,106190,81292,72838,81286,68700,72924,68686,81372,72910,81358,114336,122712,126894,114320,122700,114312,122694,114308,114306,81056,106072,118574,97696,81040,106060,97680,114380,106054,97672,81028,97668,81026,97666,72792,101934,81112,72780,97752,81100,72774,97740,81094,97734,68654,72814,81134,97774,114256,122668,114248,122662,114244,114242,80976,106028,97488,80968,106022,97480,114278,97476,80962,97474,72748,81004,72742,97516,80998,97510,114216,122646,114212,114210,80936,106006,97384,80932,97380,80930,97378,72726,80950,97398,114196,114194,80916,97332,80914,97330,66236,66206,67256,99166,67228,67214,66142,67294,69296,100188,69272,100174,69260,69254,67164,69340,67150,69326,73376,102232,116654,73360,102220,73352,102214,73348,73346,69208,100142,73432,102254,73420,69190,73414,67118,69230,73454,106320,118700,106312,118694,106308,106306,73296,102188,81616,106348,102182,81608,73284,81604,73282,81602,69164,73324,69158,81644,73318,81638,122792,126934,122788,122786,106280,118678,114536,106276,114532,106274,114530,73256,102166,81512,73252,98024,81508,73250,98020,81506,98018,69142,73270,81526,98038,122772,122770,106260,114484,106258,114482,73236,81460,73234,97908,81458,97906,122762,106250,114458,73226,81434,97850,66396,66382,67416,99246,67404,67398,66350,67438,69456,100268,69448,100262,69444,69442,67372,69484,67366,69478,102312,116694,102308,102306,69416,100246,73576,102326,73572,69410,73570,67350,69430,73590,118740,118738,102292,106420,102290,106418,69396,73524,69394,81780,73522,81778,118730,102282,106394,69386,73498,81722,66476,66470,67496,99286,67492,67490,66454,67510,100308,100306,67476,69556,67474,69554,116714]],rsfactors:[[27,917],[522,568,723,809],[237,308,436,284,646,653,428,379],[274,562,232,755,599,524,801,132,295,116,442,428,295,42,176,65],[361,575,922,525,176,586,640,321,536,742,677,742,687,284,193,517,273,494,263,147,593,800,571,320,803,133,231,390,685,330,63,410],[539,422,6,93,862,771,453,106,610,287,107,505,733,877,381,612,723,476,462,172,430,609,858,822,543,376,511,400,672,762,283,184,440,35,519,31,460,594,225,535,517,352,605,158,651,201,488,502,648,733,717,83,404,97,280,771,840,629,4,381,843,623,264,543],[521,310,864,547,858,580,296,379,53,779,897,444,400,925,749,415,822,93,217,208,928,244,583,620,246,148,447,631,292,908,490,704,516,258,457,907,594,723,674,292,272,96,684,432,686,606,860,569,193,219,129,186,236,287,192,775,278,173,40,379,712,463,646,776,171,491,297,763,156,732,95,270,447,90,507,48,228,821,808,898,784,663,627,378,382,262,380,602,754,336,89,614,87,432,670,616,157,374,242,726,600,269,375,898,845,454,354,130,814,587,804,34,211,330,539,297,827,865,37,517,834,315,550,86,801,4,108,539],[524,894,75,766,882,857,74,204,82,586,708,250,905,786,138,720,858,194,311,913,275,190,375,850,438,733,194,280,201,280,828,757,710,814,919,89,68,569,11,204,796,605,540,913,801,700,799,137,439,418,592,668,353,859,370,694,325,240,216,257,284,549,209,884,315,70,329,793,490,274,877,162,749,812,684,461,334,376,849,521,307,291,803,712,19,358,399,908,103,511,51,8,517,225,289,470,637,731,66,255,917,269,463,830,730,433,848,585,136,538,906,90,2,290,743,199,655,903,329,49,802,580,355,588,188,462,10,134,628,320,479,130,739,71,263,318,374,601,192,605,142,673,687,234,722,384,177,752,607,640,455,193,689,707,805,641,48,60,732,621,895,544,261,852,655,309,697,755,756,60,231,773,434,421,726,528,503,118,49,795,32,144,500,238,836,394,280,566,319,9,647,550,73,914,342,126,32,681,331,792,620,60,609,441,180,791,893,754,605,383,228,749,760,213,54,297,134,54,834,299,922,191,910,532,609,829,189,20,167,29,872,449,83,402,41,656,505,579,481,173,404,251,688,95,497,555,642,543,307,159,924,558,648,55,497,10],[352,77,373,504,35,599,428,207,409,574,118,498,285,380,350,492,197,265,920,155,914,299,229,643,294,871,306,88,87,193,352,781,846,75,327,520,435,543,203,666,249,346,781,621,640,268,794,534,539,781,408,390,644,102,476,499,290,632,545,37,858,916,552,41,542,289,122,272,383,800,485,98,752,472,761,107,784,860,658,741,290,204,681,407,855,85,99,62,482,180,20,297,451,593,913,142,808,684,287,536,561,76,653,899,729,567,744,390,513,192,516,258,240,518,794,395,768,848,51,610,384,168,190,826,328,596,786,303,570,381,415,641,156,237,151,429,531,207,676,710,89,168,304,402,40,708,575,162,864,229,65,861,841,512,164,477,221,92,358,785,288,357,850,836,827,736,707,94,8,494,114,521,2,499,851,543,152,729,771,95,248,361,578,323,856,797,289,51,684,466,533,820,669,45,902,452,167,342,244,173,35,463,651,51,699,591,452,578,37,124,298,332,552,43,427,119,662,777,475,850,764,364,578,911,283,711,472,420,245,288,594,394,511,327,589,777,699,688,43,408,842,383,721,521,560,644,714,559,62,145,873,663,713,159,672,729,624,59,193,417,158,209,563,564,343,693,109,608,563,365,181,772,677,310,248,353,708,410,579,870,617,841,632,860,289,536,35,777,618,586,424,833,77,597,346,269,757,632,695,751,331,247,184,45,787,680,18,66,407,369,54,492,228,613,830,922,437,519,644,905,789,420,305,441,207,300,892,827,141,537,381,662,513,56,252,341,242,797,838,837,720,224,307,631,61,87,560,310,756,665,397,808,851,309,473,795,378,31,647,915,459,806,590,731,425,216,548,249,321,881,699,535,673,782,210,815,905,303,843,922,281,73,469,791,660,162,498,308,155,422,907,817,187,62,16,425,535,336,286,437,375,273,610,296,183,923,116,667,751,353,62,366,691,379,687,842,37,357,720,742,330,5,39,923,311,424,242,749,321,54,669,316,342,299,534,105,667,488,640,672,576,540,316,486,721,610,46,656,447,171,616,464,190,531,297,321,762,752,533,175,134,14,381,433,717,45,111,20,596,284,736,138,646,411,877,669,141,919,45,780,407,164,332,899,165,726,600,325,498,655,357,752,768,223,849,647,63,310,863,251,366,304,282,738,675,410,389,244,31,121,303,263]],init:function(r,t,e){if(r=unescape(encodeURIComponent(r)),t=t||-1,e=e||2,this.barcode_array={},""===r)return!1;sequence=this.getInputSequences(r),codewords=[];for(var a=0;a<sequence.length;a++){var s=this.getCompaction(sequence[a][0],sequence[a][1],!0);codewords=codewords.concat(s)}900==codewords[0]&&codewords.shift();var i=codewords.length;if(i>925)return!1;t=this.getErrorCorrectionLevel(t,i);var n=2<<t,c=i+n+1,o=Math.round((Math.sqrt(4761+68*e*this.ROWHEIGHT*c)-69)/34);1>o?o=1:o>30&&(o=30);var h=Math.ceil(c/o),u=o*h;(3>h||h>90)&&(3>h?h=3:h>90&&(h=90),o=Math.ceil(u/h),u=o*h),u>928&&(Math.abs(e-493/32)<Math.abs(e-272/58)?(o=29,h=32):(o=16,h=58),u=928);var f=u-c;f>0&&(u-h==c?(--h,u-=h):codewords=codewords.concat(this._array_fill(0,f,900)));var l=u-n;codewords.unshift(l);var d=this.getErrorCorrection(codewords,t);codewords=codewords.concat(d);var _=this._str_repeat("0",this.QUIETH)+this.start_pattern,v=this.stop_pattern+""+this._str_repeat("0",this.QUIETH);this.barcode_array.num_rows=h*this.ROWHEIGHT+2*this.QUIETV,this.barcode_array.num_cols=17*(o+2)+35+2*this.QUIETH,this.barcode_array.bcode=[];var g;if(this.QUIETV>0){g=this._array_fill(0,this.barcode_array.num_cols,0);for(var a=0;a<this.QUIETV;++a)this.barcode_array.bcode.push(g)}for(var b,p=0,E=0,m=0;h>m;++m){var y=_;switch(E){case 0:b=30*this._intval(m/3)+this._intval((h-1)/3);break;case 1:b=30*this._intval(m/3)+3*t+(h-1)%3;break;case 2:b=30*this._intval(m/3)+(o-1)}y+=this._sprintf("%17b",this.clusters[E][b]);for(var x=0;o>x;++x)y+=this._sprintf("%17b",this.clusters[E][codewords[p]]),++p;switch(E){case 0:b=30*this._intval(m/3)+(o-1);break;case 1:b=30*this._intval(m/3)+this._intval((h-1)/3);break;case 2:b=30*this._intval(m/3)+3*t+(h-1)%3}y+=this._sprintf("%17b",this.clusters[E][b]),y+=v;for(var I=this._preg_split("//",y,-1,"PREG_SPLIT_NO_EMPTY"),w=0;w<this.ROWHEIGHT;++w)this.barcode_array.bcode.push(I);++E,E>2&&(E=0)}if(this.QUIETV>0)for(var a=0;a<this.QUIETV;++a)this.barcode_array.bcode.push(g)},getInputSequences:function(r){var t=[],e=[];if(e=r.match(/([0-9]{13,44})/g),null==e)e=[];else for(var a=0,s=0;a<e.length;a++)s=r.indexOf(e[a],s),e[a]=[e[a],s],s+=e[a][0].length;e.push(["",r.length]);for(var s=0,i=0;i<e.length;i++){var n=e[i],c=n[0].length;if(n[1]>0){var o=r.substr(s,n[1]-s),h=[];if(h=o.match(/([\x09\x0a\x0d\x20-\x7e]{5,})/g),null==h)h=[];else for(var a=0;a<h.length;a++){var s=o.indexOf(h[a]);h[a]=[h[a],s]}h.push(["",o.length]);for(var u=0,f=0;f<h.length;f++){var l=h[f],d=l[0].length;if(l[1]>0){var _=o.substr(u,l[1]-u);_.length>0&&(1==_.length&&t.length>0&&900==t[t.length-1][0]?t.push([913,_]):_.length%6==0?t.push([924,_]):t.push([901,_]))}d>0&&t.push([900,l[0]]),u=l[1]+d}}c>0&&t.push([902,n[0]]),s=n[1]+c}return t},getCompaction:function(r,t,e){e=e||!0;var a=[];switch(r){case 900:for(var s=0,i=[],n=t.length,c=0;n>c;++c){var o,h=this._ord(t.charAt(c));if((o=this._array_search(h,this.textsubmodes[s]))!==!1)i.push(o);else for(var u=0;4>u;++u)if(u!=s&&(o=this._array_search(h,this.textsubmodes[u]))!==!1){(c+1==n||n>c+1&&this._array_search(this._ord(t.charAt(c+1)),this.textsubmodes[s])!==!1)&&(3==u||0==u&&1==s)?3==u?i.push(29):i.push(27):(i=i.concat(this.textlatch[""+s+u]),s=u),i.push(o);break}}var f=i.length;f%2!=0&&(i.push(29),++f);for(var c=0;f>c;c+=2)a.push(30*parseInt(i[c])+parseInt(i[c+1]));break;case 901:case 924:for(var l,d,n;(n=t.length)>0;){if(n>6?(l=t.substring(6),t=t.substring(0,6),d=6):(l="",d=t.length),6==d){var _=bcmul(""+this._ord(t.charAt(0)),"1099511627776");_=bcadd(_,bcmul(""+this._ord(t.charAt(1)),"4294967296")),_=bcadd(_,bcmul(""+this._ord(t.charAt(2)),"16777216")),_=bcadd(_,bcmul(""+this._ord(t.charAt(3)),"65536")),_=bcadd(_,bcmul(""+this._ord(t.charAt(4)),"256")),_=bcadd(_,""+this._ord(t.charAt(5)));var v=[];do{var g=this._my_bcmod(_,"900");_=bcdiv(_,"900"),v.unshift(g)}while("0"!=_);a=a.concat(v)}else for(var c=0;d>c;++c)a.push(this._ord(t.charAt(c)));t=l}break;case 902:for(var l,n;(n=t.length)>0;){n>44?(l=t.substring(44),t=t.substring(0,44)):l="";var _="1"+t;do{var g=this._my_bcmod(_,"900");_=bcdiv(_,"900"),a.unshift(g)}while("0"!=_);t=l}break;case 913:a.push(this._ord(t))}return e&&a.unshift(r),a},getErrorCorrectionLevel:function(r,t){for(var e=8,a=928-t;e>0;){var s=2<<r;if(a>=s)break;--e}return(0>r||r>8)&&(r=41>t?2:161>t?3:321>t?4:864>t?5:e),r>e&&(r=e),r},getErrorCorrection:function(r,t){for(var e=this.rsfactors[t],a=2<<t,s=a-1,i=this._array_fill(0,a,0),n=0;n<r.length;n++){for(var c=(r[n]+i[s])%929,o=s;o>0;--o){var h=c*e[o]%929,u=929-h;i[o]=(i[o-1]+u)%929}h=c*e[0]%929,u=929-h,i[0]=u%929}for(var o=0;o<i.length;o++)0!=i[o]&&(i[o]=929-i[o]);return i=i.reverse()},getBarcodeArray:function(){return this.barcode_array},_array_fill:function(r,t,e){var a,s={};if(0==r){for(var i=[],n=0;t>n;n++)i.push(e);return i}if(!isNaN(r)&&!isNaN(t))for(a=0;t>a;a++)s[a+r]=e;return s},_str_repeat:function(r,t){for(var e="";;){if(1&t&&(e+=r),t>>=1,!t)break;r+=r}return e},_intval:function(r,t){var e,a=typeof r;return"boolean"===a?+r:"string"===a?(e=parseInt(r,t||10),isNaN(e)||!isFinite(e)?0:e):"number"===a&&isFinite(r)?0|r:0},_sprintf:function(){var r=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,t=arguments,e=0,a=t[e++],s=function(r,t,e,a){e||(e=" ");var s=r.length>=t?"":Array(1+t-r.length>>>0).join(e);return a?r+s:s+r},i=function(r,t,e,a,i,n){var c=a-r.length;return c>0&&(r=e||!i?s(r,a,n,e):r.slice(0,t.length)+s("",c,"0",!0)+r.slice(t.length)),r},n=function(r,t,e,a,n,c,o){var h=r>>>0;return e=e&&h&&{2:"0b",8:"0",16:"0x"}[t]||"",r=e+s(h.toString(t),c||0,"0",!1),i(r,e,a,n,o)},c=function(r,t,e,a,s,n){return null!=a&&(r=r.slice(0,a)),i(r,"",t,e,s,n)},o=function(r,a,o,h,u,f,l){var d,_,v,g,b;if("%%"==r)return"%";for(var p=!1,E="",m=!1,y=!1,x=" ",I=o.length,w=0;o&&I>w;w++)switch(o.charAt(w)){case" ":E=" ";break;case"+":E="+";break;case"-":p=!0;break;case"'":x=o.charAt(w+1);break;case"0":m=!0;break;case"#":y=!0}if(h=h?"*"==h?+t[e++]:"*"==h.charAt(0)?+t[h.slice(1,-1)]:+h:0,0>h&&(h=-h,p=!0),!isFinite(h))throw new Error("sprintf: (minimum-)width must be finite");switch(f=f?"*"==f?+t[e++]:"*"==f.charAt(0)?+t[f.slice(1,-1)]:+f:"fFeE".indexOf(l)>-1?6:"d"==l?0:void 0,b=a?t[a.slice(0,-1)]:t[e++],l){case"s":return c(String(b),p,h,f,m,x);case"c":return c(String.fromCharCode(+b),p,h,f,m);case"b":return n(b,2,y,p,h,f,m);case"o":return n(b,8,y,p,h,f,m);case"x":return n(b,16,y,p,h,f,m);case"X":return n(b,16,y,p,h,f,m).toUpperCase();case"u":return n(b,10,y,p,h,f,m);case"i":case"d":return d=+b||0,d=Math.round(d-d%1),_=0>d?"-":E,b=_+s(String(Math.abs(d)),f,"0",!1),i(b,_,p,h,m);case"e":case"E":case"f":case"F":case"g":case"G":return d=+b,_=0>d?"-":E,v=["toExponential","toFixed","toPrecision"]["efg".indexOf(l.toLowerCase())],g=["toString","toUpperCase"]["eEfFgG".indexOf(l)%2],b=_+Math.abs(d)[v](f),i(b,_,p,h,m)[g]();default:return r}};return a.replace(r,o)},_preg_split:function(r,t,e,a){e=e||0,a=a||"";var s,i=[],n=0,c=0,o=!1,h=!1,u=!1,f={},l=0,d=/^\/(.*)\/\w*$/.exec(r.toString())[1],_=/^\/.*\/(\w*)$/.exec(r.toString())[1];if(r=r.global&&"string"!=typeof r?r:new RegExp(d,_+(-1!==_.indexOf("g")?"":"g")),f={PREG_SPLIT_NO_EMPTY:1,PREG_SPLIT_DELIM_CAPTURE:2,PREG_SPLIT_OFFSET_CAPTURE:4},"number"!=typeof a){for(a=[].concat(a),c=0;c<a.length;c++)f[a[c]]&&(l|=f[a[c]]);a=l}o=a&f.PREG_SPLIT_NO_EMPTY,h=a&f.PREG_SPLIT_DELIM_CAPTURE,u=a&f.PREG_SPLIT_OFFSET_CAPTURE;var v=function(r,t){(!o||r.length)&&(u&&(r=[r,t]),i.push(r))};if(!d){for(s=t.split(""),c=0;c<s.length;c++)v(s[c],c);return i}for(;(s=r.exec(t))&&1!==e;){if(v(t.slice(n,s.index),n),n=s.index+s[0].length,h){var g=Array.prototype.slice.call(s);for(c=1;c<g.length;c++)void 0!==s[c]&&v(s[c],s.index+s[0].indexOf(s[c]))}e--}return v(t.slice(n,t.length),n),i},_ord:function(r){return r.charCodeAt(0)},_array_search:function(r,t,e){var a=!!e,s="";if(t&&"object"==typeof t&&t.change_key_case)return t.search(r,e);if("object"==typeof r&&r.exec){if(!a){var i="i"+(r.global?"g":"")+(r.multiline?"m":"")+(r.sticky?"y":"");r=new RegExp(r.source,i)}for(s in t)if(r.test(t[s]))return s;return!1}for(s in t)if(a&&t[s]===r||!a&&t[s]==r)return s;return!1},_my_bcmod:function(r,t){var e=5,a="";do{var s=parseInt(a+""+r.substring(0,e));r=r.substring(e),a=s%t}while(r.length);return parseInt(a)}};


/**
 * QRCode JS
 */
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

CPCL2SVG = {

	state: {},
	elements: [],
	svgNS: null,

	/**
	 * Renders an SVG from CPCL data
	 */
	render: function render(data) {

		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		CPCL2SVG.svgNS = svg.namespaceURI;

		CPCL2SVG.rx = Math.random();
		CPCL2SVG.ry = Math.random();

		// Reset everything before trying to render the data.
		CPCL2SVG.reset();

		// split CPCL instructions into individual line instructions
		var instructions = data.split("\n");

		// Iterate over each instruction
		for(var i=0; i<instructions.length; i++) {

			instructionComponents = instructions[i].split(" ");
			var instructionPrefix = instructionComponents[0];
			var instructionPayload = instructions[i].slice(instructionPrefix.length+1);
			var command = CPCL2SVG.getCommand(instructionPrefix);

			if(command){

				command(instructionPayload);

			} else if(CPCL2SVG.state["barcode"]){
				CPCL2SVG.state["barcodeData"] += "\n"+instructions[i];
			} else {

				// Could be in line print mode and could possibly contain a utility function within 
				// this function. But by default, we are printing pure text. So what we are
				// essentially building is a group of tspan block.

				// First check for any utility functions embedded in this message
				var linePrintModeInstruction = instructions[i];
				var linePrintModeFlush = true;
				var utilityInstructionIndex = linePrintModeInstruction.indexOf("! U1 ");
				var utilityInstructionPayload = null;
				var utilityInstructionCommand = null;
				if(utilityInstructionIndex != -1)
				{
					var utilityInstruction = linePrintModeInstruction.slice(utilityInstructionIndex+5);
					var utilityInstructionComponents = utilityInstruction.split(" ");
					var utilityInstructionPrefix = utilityInstructionComponents[0];
					var utilityInstructionPayload = utilityInstruction.slice(utilityInstructionPrefix.length+1);
					var utilityInstructionCommand = CPCL2SVG.getUtilitiesCommand(utilityInstructionPrefix);
					if(utilityInstructionCommand)
					{
						linePrintModeInstruction = linePrintModeInstruction.slice(0,utilityInstructionIndex);
						linePrintModeFlush = false;
					}
				}

				// Create necessary text nodes
				var textNode = document.createTextNode(linePrintModeInstruction.replace(/\s/g, '\u00A0')+"\n");
				var tspan = document.createElementNS(CPCL2SVG.svgNS,'tspan');
				tspan.style.display = 'none'
				var text = document.createElementNS(CPCL2SVG.svgNS,'text');

				tspan.setAttribute('alignment-baseline',"hanging");

				switch(CPCL2SVG.state["linePrinter"]["font"]){
			    	case "0":
			    	case "2":
			    	case "6":
			    		tspan.setAttribute('font-family',"monospace");
			    		break;
			    	case "1":
			    		tspan.setAttribute('font-style',"italic");
			    		break;
			    	case "2":
			    	case "4":
			    		tspan.setAttribute('font-family',"Arial");
			    		break;
			    	case "7":
			    		tspan.setAttribute('font-family',"Andale Mono");
			    		break;
			    }
		
				switch(CPCL2SVG.state["bold"]){
			    	case "0":
						text.setAttribute('font-weight',"normal");
			    		break;
			    	case "1":
						text.setAttribute('font-weight',"bold");
			    		break;
			    	case "2":
						text.setAttribute('font-weight',"bold");
			    		break;
			    }

			    // Apply size
			    var xScale = 1;
			    var yScale = 1;

			    switch(CPCL2SVG.state["linePrinter"]["font"]){
			    	case "0":
			    		switch(CPCL2SVG.state["linePrinter"]["size"])
			    		{
			    			case "0":
			    			case "1":
			    			case "2":
					    		tspan.setAttribute('font-size',"9px");
					    		break;
					    	case "3":
					    	case "4":
					    	case "5":
					    		tspan.setAttribute('font-size',"18px");
					    		break;
					    	case "6":
					    		tspan.setAttribute('font-size',"36px");
					    		break;
			    		}
			    		switch(CPCL2SVG.state["linePrinter"]["size"]){
					    	case "0":
					    	case "3":
					    	case "6":
					    		break;
					    	case "1":
					    	case "4":
					    		xScale = 2;
					    		break;
					    	case "2":
					    	case "5":
					    		yScale = 2;
					    		break;
				    	}
			    		break;
		    		case "4":
			    		switch(CPCL2SVG.state["linePrinter"]["size"]){
			    			case "0":
					    		xScale=2;
					    		yScale=2;
					    		break;
					    	case "1":
					    		yScale=4;
					    		break;
				    	}
			    		break;
			    	case "7":
			    		switch(CPCL2SVG.state["linePrinter"]["size"]){
			    			case "0":
					    		xScale=0.9;
					    		yScale=0.9;
					    		break;
					    	case "1":
					    		yScale=2;
					    		break;
				    	}
			    		break;
			    }

			    transform = "matrix("+xScale+" 0 0 "+yScale+" "+(CPCL2SVG.state["linePrinter"]["x"]+CPCL2SVG.state["linePrinter"]["lmargin"])+" "+CPCL2SVG.state["linePrinter"]["y"]+")";
			    text.setAttribute('transform',transform);

				tspan.appendChild(textNode);
				text.appendChild(tspan);
				text = svg.appendChild(text);

				if(utilityInstructionCommand){
					utilityInstructionCommand(utilityInstructionPayload);					
				}

				if(linePrintModeFlush)
				{
					CPCL2SVG.state["linePrinter"]["x"] = 0;
					CPCL2SVG.state["linePrinter"]["y"] += parseInt(CPCL2SVG.state["linePrinter"]["unitHeight"]);
				}
				else
				{
					// Unfortunately, in order to get the length of the generated text, we would need to
					// render the svg first, then get the width of the element before continuing. This
					// can be done with requestAnimationFrame and callbacks for this class, but since
					// we ideally want everything to be rendered immedietly, this hasn't been implemented.
					// To remedy this, one CAN predictably adjust the X cursor using either X or RX or RXY
					// but it is a hacky work around.
					// CPCL2SVG.state["linePrinter"]["x"] += text.getBoundingClientRect().width;
				}

			}

			//document.body.appendChild(
			//	document.createElement("a").appendChild(
			//		document.createTextNode(instructions[i].replace(/\s/g, '\u0020'))
			//		)
			//	);
			//document.body.appendChild(document.createElement("br"));
		}

	    for(var i in CPCL2SVG.elements){
	    	svg.appendChild(CPCL2SVG.elements[i]);
	    }

	    if(this.state["!"]["Height"]!=null)
	    {
	    	svg.setAttribute("height",this.state["!"]["Height"]+"px");
	    }
	    else if(CPCL2SVG.state["linePrinter"]["y"]!=0){
	    	svg.setAttribute("height",CPCL2SVG.state["linePrinter"]["y"]+"px");
	    } else {
	    	// Todo: Get bounding boxes of all elements in svg that will set an attribute
	    	svg.setAttribute("height","200px");
	    }
	    if(CPCL2SVG.state["pageWidth"]!= null)
	    {
	    	svg.setAttribute("width",this.state["pageWidth"]+"px");
	    }
	    svg.setAttribute("style","border:2px solid #CCC;border-bottom: 2px dashed #CCC;border-top: 2px dashed #CCC;");
	    return svg;

	},

	reset: function reset() {
		CPCL2SVG.state = {
			"!": {
				"HorizontalOffset": null,
				"HorizontalResolution": 200,
				"VerticalResolution": 200,
				"Height": null,
				"Quantity": null
			},
			"bold": "0",
			"barcode": false,
			"units": "dots",
			"contrast": "0",
			"tone": "0",
			"pageWidth": 2000,
			"speed": 3,
			"linePrinter":{
				"font": 0,
				"size": 0,
				"unitHeight": 0,
				"lmargin": 0,
				"y": 0,
				"x": 0
			}
		};
		CPCL2SVG.elements = [];
	},

	getCommand: function getCommand(cmd){
		if(CPCL2SVG.commands[cmd] == undefined){
			return undefined;
		}
		var unavailableCommands = [
			"X",
			"Y",
			"XY",
			"RX",
			"RY",
			"RXY",
			"SETLP",
			"SETLF",
			"SETSP",
			//"SETBOLD",
			"LMARGIN",
			"PAGE-HEIGHT",
			"PH",
		];
		if(unavailableCommands.indexOf(cmd)!=-1){
			return undefined;
		}
		return CPCL2SVG.commands[cmd];
	},

	getUtilitiesCommand: function getUtilitiesCommand(cmd){
		if(CPCL2SVG.commands[cmd] == undefined){
			return undefined;
		}
		return CPCL2SVG.commands[cmd];
	},

	argsToArray: function argsToArray(args) {
	    return Array.prototype.slice.call(args);
	},

	commands: {
		";": function semiColonSymbol(){
			
		},
		"!": function exclamationSymbol(params){

			var parameters = params.split(" ");

			if(!isNaN(parseFloat(parameters[0]))) {

				// Label File
				CPCL2SVG.state["!"]["HorizontalOffset"] = parameters[0];
				CPCL2SVG.state["!"]["HorizontalResolution"] = parameters[1];
				CPCL2SVG.state["!"]["VerticalResolution"] = parameters[2];
				CPCL2SVG.state["!"]["Height"] = parameters[3];
				CPCL2SVG.state["!"]["Quantity"] = parameters[4];

			} else if(parameters[0] == "UTILITIES") {

				// utilities command session

			} else if(parameters[0] == "U1") {

				// utilities command session
				CPCL2SVG.tools.singleUtilityInstruction(params.slice(3));

			}
		},
		SETBOLD: function(data) {
			CPCL2SVG.state["bold"] = data;
		},
		PRINT: function print(){
			// CPCL2SVG.reset();
		},
		END: function end(){
			CPCL2SVG.reset();
		},
		ABORT: function abort(){
			CPCL2SVG.reset();
		},
		ENCODING: function encoding(){
			
		},
		FORM: function form(){
			
		},
		JOURNAL: function journal(){
			
		},
		"IN-INCHES": function inInches(){
			CPCL2SVG.state["units"] = "inches";
		},
		"IN-CENTIMETERS": function inCentimeters(){
			CPCL2SVG.state["units"] = "centimeters";
		},
		"IN-MILLIMETERS": function inMillimeters(){
			CPCL2SVG.state["units"] = "millimeters";
		},
		"IN-DOTS": function inDots(){
			CPCL2SVG.state["units"] = "dots";
		},
		T: function t(){
			CPCL2SVG.getCommand("TEXT").apply(this,arguments);
		},
		VT: function vt(){
			CPCL2SVG.getCommand("TEXT90").apply(this,arguments);
		},
		VTEXT: function vtext(){
			CPCL2SVG.getCommand("TEXT90").apply(this,arguments);
		},
		T90: function t90(){
			CPCL2SVG.getCommand("TEXT90").apply(this,arguments);
		},
		T180: function t180(){
			CPCL2SVG.getCommand("TEXT180").apply(this,arguments);
		},
		T270: function t270(){
			CPCL2SVG.getCommand("TEXT270").apply(this,arguments);
		},
		TEXT: function text(params){
			CPCL2SVG.tools.genericText(0,params);
		},
		TEXT90: function text90(params){
			CPCL2SVG.tools.genericText(90,params);
		},
		TEXT180: function text180(params){
			CPCL2SVG.tools.genericText(180,params);
		},
		TEXT270: function text270(params){
			CPCL2SVG.tools.genericText(270,params);
		},
		L: function l(){
			CPCL2SVG.getCommand("LINE").apply(this,arguments);
		},
		/**
		 * @param x0 X-coordinate of the top left corner.
		 * @param y0 Y-coordinate of the top left corner.
		 * @param x1 X-coordinate of:
		 *  - top right corner for horizontal.
		 *  - bottom left corner for vertical.
		 * @param y1 Y-coordinate of the bottom right corner.
		 *  - top right corner for horizontal.
		 *  - bottom left corner for vertical.
		 * @param width Unit-width (or thickness) of the lines forming the box.
		 */
		LINE: function line(params){

			var parameters = params.split(" ");

			var x0 = parameters[0];
			var y0 = parameters[1];
			var x1 = parameters[2];
			var y1 = parameters[3];
			var width = parameters[4];

			var line = document.createElementNS(CPCL2SVG.svgNS,'line');
		    line.setAttribute('x1',x0);
		    line.setAttribute('y1',y0);
		    line.setAttribute('x2',x1);
		    line.setAttribute('y2',y1);
		    line.setAttribute('stroke','#000000');
		    line.setAttribute('stroke-width',width);

		    CPCL2SVG.elements.push(line);
		},
		IL: function l(){
			CPCL2SVG.getCommand("INVERSE-LINE").apply(this,arguments);
		},
		/**
		 * @param x0 X-coordinate of the top left corner.
		 * @param y0 Y-coordinate of the top left corner.
		 * @param x1 X-coordinate of:
		 *  - top right corner for horizontal.
		 *  - bottom left corner for vertical.
		 * @param y1 Y-coordinate of the bottom right corner.
		 *  - top right corner for horizontal.
		 *  - bottom left corner for vertical.
		 * @param width Unit-width (or thickness) of the lines forming the box.
		 */
		"INVERSE-LINE": function inverseLine(x0,y0,x1,y1,width){
			// Could be implemnted using background-filter, but this would only be supported on safari for max os x
		},
		/**
		 * @param x0 X-coordinate of the top left corner.
		 * @param y0 Y-coordinate of the top left corner.
		 * @param x1 X-coordinate of the bottom right corner.
		 * @param y1 Y-coordinate of the bottom right corner.
		 * @param width Unit-width (or thickness) of the lines forming the box.
		 */
		BOX: function box(params){

			var parameters = params.split(" ");

			var x0 = parameters[0];
			var y0 = parameters[1];
			var x1 = parameters[2];
			var y1 = parameters[3];
			var width = parameters[4];

			var rect = document.createElementNS(CPCL2SVG.svgNS,'rect');
		    rect.setAttribute('x',x0);
		    rect.setAttribute('y',y0);
		    rect.setAttribute('width',x1-x0);
		    rect.setAttribute('height',y1-y0);
		    rect.setAttribute('stroke','#000000');
		    rect.setAttribute('stroke-width',width);
		    rect.setAttribute('fill','none');

		    CPCL2SVG.elements.push(rect);
		},
		B: function b(){
			CPCL2SVG.getCommand("BARCODE").apply(this,arguments);
		},
		BARCODE: function barcode(args){
			CPCL2SVG.tools.genericBarcode(0,args);
			CPCL2SVG.tools.printBarcode(true);
		},
		VB: function vb(){
			CPCL2SVG.getCommand("VBARCODE").apply(this,arguments);
		},
		VBARCODE: function vbarcode(args){
			CPCL2SVG.tools.genericBarcode(90,args);
			CPCL2SVG.tools.printBarcode(true);
		},
		ENDPDF: function endPDF(){
			CPCL2SVG.tools.printBarcode();
			CPCL2SVG.state["barcode"] = false;
			CPCL2SVG.state["barcodeMode"] = false;
			CPCL2SVG.state["barcodeData"] = false;
		},
		/**
		 * @param contrast Contrast Level (0 = Default, 1 = Medium, 2 = Dark, 3 = Very Dark)
		 */
		CONTRAST: function contrast(contrast){
			CPCL2SVG.state["contrast"] = contrast;
		},
		/**
		 * @param tone Contrast Level (0 = Default, 1 = Medium, 2 = Dark, 3 = Very Dark)
		 */
		TONE: function tone(tone){
			CPCL2SVG.state["tone"] = tone;
		},
		/**
		 * @param speed A number between 0 and 5, 0 being the slowest speed.
		 */
		SPEED: function speed(speedLevel){
			CPCL2SVG.state["speed"] = speed;
		},
		"BAR-SENSE": function barSense(){
		},
		PW: function pw(){
			CPCL2SVG.getCommand("PAGE-WIDTH").apply(this,arguments);
		},
		"PAGE-WIDTH": function pageWidth(width){
			CPCL2SVG.state["pageWidth"] = width;
		},
		PH: function ph(){
			CPCL2SVG.getCommand("PAGE-WIDTH").apply(this,arguments);
		},
		"PAGE-HEIGHT": function pageHeight(width){
			CPCL2SVG.state["!"]["Height"] = width;
		},
		LEFT: function left(end){
		},
		CENTER: function center(end){
		},
		RIGHT: function right(end){
		},

		SETLP: function setLinePrinterFont(params)
		{
			var parameters = params.split(" ");

			CPCL2SVG.state["linePrinter"]["font"] = parameters[0];
			CPCL2SVG.state["linePrinter"]["size"] = parameters[1];
			CPCL2SVG.state["linePrinter"]["unitHeight"] = parseFloat(parameters[2]);
		},
		SETLF: function setLineUnitHeight(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["unitHeight"] = parseFloat(parameters[0]);
		},
		X: function setLinePrinterX(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["x"] = parseFloat(parameters[0]);
		},
		Y: function setLinePrinterY(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["y"] = parseFloat(parameters[0]);
		},
		XY: function setLinePrinterXY(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["x"] = parseFloat(parameters[0]);
			CPCL2SVG.state["linePrinter"]["y"] = parseFloat(parameters[1]);
		},
		RX: function setLinePrinterRX(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["x"] += parseFloat(parameters[0]);
		},
		RY: function setLinePrinterRY(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["y"] += parseFloat(parameters[0]);
		},
		RXY: function setLinePrinterRXY(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["x"] += parseFloat(parameters[0]);
			CPCL2SVG.state["linePrinter"]["y"] += parseFloat(parameters[1]);
		},
		LMARGIN: function setLinePrinterLeftMargin(params)
		{
			var parameters = params.split(" ");
			CPCL2SVG.state["linePrinter"]["lmargin"] = parseFloat(parameters[0]);
		}

	},

	tools: {
		/**
		 * @param orientation The rotation in degrees around the coordinate (x,y)
		 * @param font Name/number of the font.
		 * @param size Size identifier for the font.
		 * @param x Horizontal starting position.
		 * @param y Vertical starting position.
		 * @param ... The text to be printed (each subsequent argument is printed with a space in between)
		 */
		genericText: function genericText(orientation,params){

			var parameters = params.split(" ");

			var font = parameters[0];
			var size = parameters[1];
			var x = parameters[2];
			var y = parameters[3];

			var data = params.slice( font.length +
				size.length +
				x.length +
				y.length +
				4 ).replace(/\s/g, '\u00A0');

			// Create necessary text nodes
			var textNode = document.createTextNode(data);

			var tspan = document.createElementNS(CPCL2SVG.svgNS,'tspan');
			tspan.setAttribute('alignment-baseline',"hanging");

			var text = document.createElementNS(CPCL2SVG.svgNS,'text');

			// Apply translation
		    // text.setAttribute('x',x);
		    // text.setAttribute('y',y);

		    // Apply orientation changes
		    transform = "rotate("+orientation+" "+x+","+y+") ";

		    // Apply font
		    switch(font){
		    	case "0":
		    	case "2":
		    	case "6":
		    		text.setAttribute('font-family',"monospace");
		    		break;
		    	case "1":
		    		text.setAttribute('font-style',"italic");
		    		break;
		    	case "2":
		    		text.setAttribute('font-family',"Arial");
		    		break;
		    	case "7":
		    		text.setAttribute('font-family',"Andale Mono");
		    		break;
		    }

		    // Apply size
		    var xScale = 1;
		    var yScale = 1;
			
			switch(CPCL2SVG.state["bold"]){
				case "0":
					text.setAttribute('font-weight',"normal");
					break;
				case "1":
					text.setAttribute('font-weight',"bold");
					break;
				case "2":
					text.setAttribute('font-weight',"bolder");
					break;
			}

		    switch(font){
		    	case "0":
		    		text.setAttribute('font-size',"7pt");
		    		switch(size){
				    	case "0":
				    		
				    		break;
				    	case "1":
				    		xScale = 2;
				    		break;
				    	case "2":
				    		yScale = 2;
				    		break;
				    	case "3":
				    		xScale = 2;
				    		yScale = 2;
				    		break;
				    	case "4":
				    		xScale = 4;
				    		yScale = 2;
				    		break;
				    	case "5":
				    		xScale = 2;
				    		yScale = 4;
				    		break;
				    	case "6":
				    		xScale = 4;
				    		yScale = 4;
				    		break;
			    	}
		    		break;
		    	case "7":
		    		switch(size){
				    	case "1":
				    		yScale=2;
				    		break;
			    	}
		    		break;
		    }

		    transform += "matrix("+xScale+" 0 0 "+yScale+" "+x+" "+y+")";

		    text.setAttribute('transform',transform);

		    tspan.appendChild(textNode);
		    text.appendChild(tspan);

		    CPCL2SVG.elements.push(text);
		},
		genericBarcode: function genericBarcode(orientation, params){

			// hardcoded for now to only support PDF415 and all the arguments must be passed in.

			var parameters = params.split(" ");
			var type = parameters[0];
			if(type === 'PDF-417'){
				var x = parameters[1];
				var y = parameters[2];
				var xd = parameters[4];
				var yd = parameters[6];
				var c = parameters[8];
				var s = parameters[10];

				CPCL2SVG.state["barcode"] = true;
				CPCL2SVG.state["barcodeMode"] = {};
				CPCL2SVG.state["barcodeMode"]["orientation"] = orientation;
				CPCL2SVG.state["barcodeMode"]["type"] = type;
				CPCL2SVG.state["barcodeMode"]["x"] = parseFloat(x);
				CPCL2SVG.state["barcodeMode"]["y"] = parseFloat(y);
				CPCL2SVG.state["barcodeMode"]["xd"] = parseFloat(xd);
				CPCL2SVG.state["barcodeMode"]["yd"] = parseFloat(yd);
				CPCL2SVG.state["barcodeMode"]["c"] = parseInt(c);
				CPCL2SVG.state["barcodeMode"]["s"] = parseInt(s);
				CPCL2SVG.state["barcodeData"] = "";
							/*{command} {type} {x} {y} [XD n] [YD n] [C n] [S n] {data}
										<ENDPDF>
										where:
										{command}: Choose from the following:
										BARCODE (or B): Prints bar code horizontally.
										VBARCODE (or VB): Prints bar code vertically. {type}: PDF-417
										{x}: Horizontal starting position.
										{y}: Vertical starting position.
										[XD n]: Unit-width of the narrowest element. Range is 1 to 32, default is 2.
										[YD n]: Unit-height of the narrowest element. Range is 1 to 32, default is 6.
										[C n]: Number of columns to use. Data columns do not include start/stop characters and left/right indicators. Range is 1 to 30; default is 3.
										[S n]: Security level indicates maximum amount of errors to be detected and/or corrected. Range is 0 to 8; default is 1.
										{data} Bar code data.
										<ENDPDF>: Terminates PDF-417.*/
			}
			if(type == "128"){
				var width = parameters[1];
				var radio = parameters[2];
				var height = parameters[3];
				var x = parameters[4];
				var y = parameters[5];
				var value = parameters[6];

				CPCL2SVG.state["barcode"] = true;
				CPCL2SVG.state["barcodeMode"] = {};
				CPCL2SVG.state["barcodeMode"]["orientation"] = orientation;
				CPCL2SVG.state["barcodeMode"]["type"] = type;
				CPCL2SVG.state["barcodeMode"]["x"] = parseFloat(x);
				CPCL2SVG.state["barcodeMode"]["y"] = parseFloat(y);
				CPCL2SVG.state["barcodeMode"]["radio"] = parseFloat(radio);
				CPCL2SVG.state["barcodeMode"]["width"] = parseFloat(width);
				CPCL2SVG.state["barcodeMode"]["height"] = parseInt(height);
				CPCL2SVG.state["barcodeData"] = value;
			}

			


		},
		printBarcode: function printBarcode(flag){
			
			if(flag && CPCL2SVG.state["barcodeMode"]["type"] == "128"){
				var x,y,r,h;
	            if(CPCL2SVG.state["barcodeMode"]["orientation"] == 0)
                {
                	y = CPCL2SVG.state["barcodeMode"]["y"];
                	x = CPCL2SVG.state["barcodeMode"]["x"];
					r = 0;
					h = 0;
                }
                else if(CPCL2SVG.state["barcodeMode"]["orientation"] == 90)
                {
                	y = CPCL2SVG.state["barcodeMode"]["x"];
                	x = CPCL2SVG.state["barcodeMode"]["y"];
					r = 90;
                }
				var bar = document.createElementNS(CPCL2SVG.svgNS,'svg');
				JsBarcode(bar, CPCL2SVG.state["barcodeData"], {
					height: CPCL2SVG.state["barcodeMode"]["height"],
					displayValue: false,
				});
				var element = bar.querySelector("g")
				element.setAttribute("transform","translate (xx,yy) rotate (rr 0,0)".replaceAll("rr", r).replaceAll("xx", x).replaceAll("yy", y))
				CPCL2SVG.elements.push(element);
			}
			if(CPCL2SVG.state["barcodeMode"]["type"] == "PDF-417"){

	            PDF417.init(CPCL2SVG.state["barcodeData"],CPCL2SVG.state["barcodeMode"]["s"],CPCL2SVG.state["barcodeMode"]["c"]/2*0 + 2);             
	            var barcode = PDF417.getBarcodeArray();
	            // block sizes (width and height) in pixels
            	var bw = CPCL2SVG.state["barcodeMode"]["xd"];
            	var bh = CPCL2SVG.state["barcodeMode"]["yd"];
	            // create canvas element based on number of columns and rows in barcode
	            
	            // graph barcode elements
	            var x,y;
	            if(CPCL2SVG.state["barcodeMode"]["orientation"] == 0)
                {
                	y = CPCL2SVG.state["barcodeMode"]["y"];
                }
                else if(CPCL2SVG.state["barcodeMode"]["orientation"] == 90)
                {
                	x = CPCL2SVG.state["barcodeMode"]["x"];
                }
	            // for each row
	            for (var r = 0; r < barcode['num_rows']; r+=4) {
	                if(CPCL2SVG.state["barcodeMode"]["orientation"] == 0)
	                {
	                	x = CPCL2SVG.state["barcodeMode"]["x"];
	                }
	                else if(CPCL2SVG.state["barcodeMode"]["orientation"] == 90)
	                {
	                	y = CPCL2SVG.state["barcodeMode"]["y"];
	                }
	                // for each column
	                for (var c = 0; c < barcode['num_cols']; c++) {
	                    if (barcode['bcode'][r][c] == 1) {
	                    	var rect = document.createElementNS(CPCL2SVG.svgNS,'rect');
						    rect.setAttribute('x',x);
						    rect.setAttribute('y',y);
						    rect.setAttribute('width',bw);
						    rect.setAttribute('height',bh);
						    rect.setAttribute('fill','#000000');

						    CPCL2SVG.elements.push(rect);
	                    }
	                    if(CPCL2SVG.state["barcodeMode"]["orientation"] == 0)
	                    {
	                    	x += bw;
	                    }
	                    else if(CPCL2SVG.state["barcodeMode"]["orientation"] == 90)
	                    {
	                    	y += bh;
	                    }
	                }
	                if(CPCL2SVG.state["barcodeMode"]["orientation"] == 0)
                    {
                    	y += bh;
                    }
                    else if(CPCL2SVG.state["barcodeMode"]["orientation"] == 90)
                    {
                    	x += bw;
                    }
	            }
			}
		},
		singleUtilityInstruction: function singleUtilityInstruction(instruction){
			instructionComponents = instruction.split(" ");
			var instructionPrefix = instructionComponents[0];
			var instructionPayload = instruction.slice(instructionPrefix.length+1);
			var command = CPCL2SVG.getUtilitiesCommand(instructionPrefix);

			if(command){
				command(instructionPayload);
			}
		}
	}

};