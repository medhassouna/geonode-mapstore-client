(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3264],{9192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(45697),r=n.n(o),i=n(67294),s=n.n(i),c=n(82467),a=n(57588),l=n(50966);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&m(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(r){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(){var e;p(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return b(h(e=i.call.apply(i,[this].concat(n))),"addTooltip",(function(t){if(!e.props.tooltip)return t;var n=s().createElement(a.Tooltip,{id:"locate-tooltip"},e.props.tooltip);return s().createElement(l.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:n},t)})),e}return t=u,(n=[{key:"render",value:function(){var e=this;return this.addTooltip(s().createElement(c.Z,{id:this.props.id,style:this.props.style,onClick:function(){return e.props.onZoom(e.props.currentZoom+e.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?s().createElement(a.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s().Component);b(v,"propTypes",{id:r().string,style:r().object,glyphicon:r().string,text:r().string,btnSize:r().oneOf(["large","small","xsmall"]),className:r().string,help:r().oneOfType([r().string,r().element]),step:r().number,currentZoom:r().number,minZoom:r().number,maxZoom:r().number,onZoom:r().func,tooltip:r().element,tooltipPlace:r().string,bsStyle:r().string}),b(v,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const g=v},68783:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h}),n(75898);var o=n(27418),r=n.n(o),i=n(67294),s=n.n(i),c=n(33664),a=n(22222),l=n(1550),u=n(9192),p=n(5346),f=n(827),m=(0,a.P1)([f.Od],(function(e){return{currentZoom:e&&e.zoom,id:"zoomin-btn",step:1,glyphicon:"plus"}})),d=(0,c.connect)(m,{onZoom:l.sO})(u.Z);const h={ZoomInPlugin:r()(d,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomIn",position:3,tooltip:"zoombuttons.zoomInTooltip",help:s().createElement(p.Z,{msgId:"helptexts.zoomIn"}),tool:!0,priority:1}}),reducers:{}}},70757:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(23645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=r},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},75898:(e,t,n)=>{"use strict";var o=n(93379),r=n.n(o),i=n(70757);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},93379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],a=t.base?c[0]+t.base:c[0],l=n[a]||0,u="".concat(a," ").concat(l);n[a]=l+1;var p=s(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:u,updater:h(f,t),references:1}),o.push(u)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,d=0;function h(e,t){var n,o,r;if(t.singleton){var i=d++;n=m||(m=a(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=a(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);i[r].references--}for(var a=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}}}]);