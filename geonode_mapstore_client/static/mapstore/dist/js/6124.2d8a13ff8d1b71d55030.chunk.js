(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6124],{48384:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(67294),r=o.n(n),i=o(45697),a=o.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function s(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d,y,b,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&u(e,t)}(c,e);var t,o,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(i){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return s(this,e)});function c(){return l(this,c),a.apply(this,arguments)}return t=c,(o=[{key:"render",value:function(){var e=this.props.item;return e.pagination?r().createElement("span",null,e[this.props.textField]," ",e.pagination," "):r().createElement("span",null,e[this.props.textField])}}])&&p(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(r().Component);d=g,y="propTypes",b={item:a().object,textField:a().string,valueField:a().string},y in d?Object.defineProperty(d,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[y]=b;const m=g},65539:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(67294),r=o.n(n);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const l=function(e){var t=e.id,o=e.children,n=e.header,i=e.footer,c=e.columns,l=e.height,p=e.style,u=void 0===p?{}:p,s=e.className,f=e.bodyClassName,d=void 0===f?"ms2-border-layout-body":f;return r().createElement("div",{id:t,className:s,style:a({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},u)},n,r().createElement("div",{className:d,style:{display:"flex",flex:1,overflowY:"auto"}},r().createElement("main",{className:"ms2-border-layout-content",style:{flex:1}},l?r().createElement("div",{style:{height:l}},o):o),l?r().createElement("div",{style:{height:l}},c):c),i)}},49902:(e,t,o)=>{"use strict";o.d(t,{Z:()=>P});var n=o(45697),r=o.n(n),i=o(67294),a=o.n(i),c=o(20),l=o(57588),p=o(86638),u=o(50966),s=o(48384);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d.apply(this,arguments)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function O(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&g(e,t)}(s,e);var t,o,n,r,i=(n=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(r){var o=h(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m(this,e)});function s(){var e;y(this,s);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return O(v(e=i.call.apply(i,[this].concat(o))),"renderWithTooltip",(function(t){if(e.props.tooltip.customizedTooltip){var o=e.props.tooltip.customizedTooltip;return a().createElement(o,null,t)}var n=a().createElement(l.Tooltip,{id:e.props.tooltip.id},e.props.tooltip.message);return a().createElement(u.Z,{key:e.props.tooltip.overlayTriggerKey,placement:e.props.tooltip.placement,overlay:n},t)})),O(v(e),"renderPagination",(function(){var t=e.props.pagination.firstPage,o=e.props.pagination.lastPage;return a().createElement("div",{className:"autocomplete-toolbar"},!t&&a().createElement(l.Glyphicon,{className:e.props.prevPageIcon,glyph:e.props.prevPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadPrevPage()}}),!o&&a().createElement(l.Glyphicon,{className:e.props.nextPageIcon,glyph:e.props.nextPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadNextPage()}}))})),O(v(e),"renderField",(function(){var t,o={emptyList:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyList"),open:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.open"),emptyFilter:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyFilter")},n=[];e.props.data&&e.props.data.length>0&&(n=e.props.data.map((function(e){return e}))),e.props.pagination&&e.props.pagination.paginated&&n.length>0&&n.push((O(t={},e.props.textField,""),O(t,e.props.valueField,""),O(t,"disabled",!0),O(t,"pagination",e.renderPagination()),t));var r=e.props.loading?[]:n,i=e.props.itemComponent,l=a().createElement(c.Combobox,{placeholder:e.props.placeholder,dropUp:e.props.dropUp,busy:e.props.busy,data:r,disabled:e.props.disabled,itemComponent:function(t){return a().createElement(i,d({textField:e.props.textField,valueField:e.props.valueField},t))},messages:e.props.messages||o,open:e.props.open,filter:e.props.filter,onChange:function(t){return e.props.onChange(t)},onFocus:function(){return e.props.onFocus(e.props.data)},onSelect:function(t){return e.props.onSelect(t)},onToggle:function(t){return e.props.onToggle(t)},textField:e.props.textField,valueField:e.props.valueField,value:e.props.selectedValue});return e.props.tooltip&&e.props.tooltip.enabled?e.renderWithTooltip(l):l})),e}return t=s,(o=[{key:"render",value:function(){var e=this.props,t=e.selectedValue,o=e.disabled,n=e.onReset,r=e.label,i=e.clearable,c=r?a().createElement("label",null,r):a().createElement("span",null);return a().createElement("div",{className:"autocompleteField"},c,i?a().createElement("div",{className:"rw-combo-clearable ".concat(o?"disabled":"")},this.renderField(),a().createElement("span",{className:"rw-combo-clear ".concat(t?"":"hidden"),onClick:n},"x")):this.renderField())}}])&&b(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(a().Component);O(w,"propTypes",{busy:r().bool,data:r().array,disabled:r().bool,dropUp:r().bool,itemComponent:r().oneOfType([r().object,r().func]),label:r().string,loading:r().bool,filter:r().oneOfType([r().string,r().bool]),messages:r().object,onChange:r().func,onFocus:r().func,onSelect:r().func,onToggle:r().func,open:r().bool,pagination:r().object,nextPageIcon:r().string,prevPageIcon:r().string,selectedValue:r().string,textField:r().string,tooltip:r().object,valueField:r().string,placeholder:r().string,stopPropagation:r().bool,clearable:r().bool,onReset:r().func}),O(w,"contextTypes",{messages:r().object}),O(w,"defaultProps",{stopPropagation:!1,dropUp:!1,itemComponent:s.Z,loading:!1,label:null,filter:"",pagination:{paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:function(){},loadNextPage:function(){}},nextPageIcon:"chevron-right",prevPageIcon:"chevron-left",onFocus:function(){},onToggle:function(){},onChange:function(){},onSelect:function(){},onReset:function(){},textField:"label",tooltip:{customizedTooltip:void 0,enabled:!1,id:"",message:void 0,overlayTriggerKey:"",placement:"top"},valueField:"value",clearable:!1});const P=w},43146:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(2479),r=o(47037),i=o.n(r),a=o(47960),c=o.n(a),l=o(30381),p=o.n(l),u=o(55237);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dateTypeProp,o=void 0===t?"type":t,r=e.dateProp,a=void 0===r?"date":r,l=e.setDateProp,f=void 0===l?"onSetDate":l;return(0,n.compose)((0,n.withPropsOnChange)([a],(function(e){var t,n=e[a],r=e[o],l=e.useUTCOffset,f=void 0===l||l,d=n,y="1970-01-01",b="00:00:00";!c()(n)&&i()(n)&&("time"===r&&(d=new Date("".concat(y,"T").concat(n))),"date"===r&&(-1!==n.indexOf("Z")&&(d=n.substr(0,n.length-1)),d=new Date("".concat(d,"T").concat(b,"Z"))),"date-time"===r&&(d=new Date(n)));var g=d;if(d){switch(r){case"time":b=(0,u.kN)(d);break;case"date":y=(0,u.oD)(d);break;default:b=(0,u.kN)(d),y=(0,u.oD)(d)}(g=new Date("".concat(y,"T").concat(b,"Z"))).setUTCMilliseconds(d.getUTCMilliseconds());var m=f?(0,u.$4)(g):0;g=new Date(g.getTime()+m)}return s(t={},a,g),s(t,"defaultCurrentDate","date-time"===r?p()().startOf("day").toDate():void 0),t})),(0,n.withHandlers)(s({},f,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e[f],n=e[o],r=e.useUTCOffset,i=void 0===r||r;return function(e,o){if(e){var r=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())),a=i?(0,u.$4)(e):0,c=new Date(r.getTime()-a);switch(n){case"time":c="".concat((0,u.kN)(c),"Z");break;case"date":c="".concat((0,u.oD)(c),"Z")}t(c,o)}else t(null)}}))))}},10284:(e,t,o)=>{"use strict";o.d(t,{sw:()=>g,oB:()=>m});var n=o(89255),r=o(27361),i=o.n(r),a=o(5055),c=o(7526);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return s(e,arguments,y(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)},u(e)}function s(e,t,o){return s=f()?Reflect.construct:function(e,t,o){var n=[null];n.push.apply(n,t);var r=new(Function.bind.apply(e,n));return o&&d(r,o.prototype),r},s.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}o(24384);var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(i,e);var t,o,n,r=(t=i,o=f(),function(){var e,n=y(t);if(o){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function i(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(o=r.call(this,e)).name="OGCError",o.code=t,o}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(u(Error)),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return n.Observable.bindNodeCallback((function(e,o){return(0,a.parseString)(e,t,o)}))(e)},m=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?n.Observable.bindNodeCallback((function(e,t){return(0,a.parseString)(e,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=i()(e,"ExceptionReport.Exception.ExceptionText");throw new b(t||"Undefined OGC Service Error",i()(e,"ExceptionReport.Exception.exceptionCode"))})):n.Observable.of(e)}))}}}]);