!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("eventemitter3"),require("react"),require("lodash"),require("react-use"),require("react/jsx-runtime"),require("nanoid")):"function"==typeof define&&define.amd?define(["exports","eventemitter3","react","lodash","react-use","react/jsx-runtime","nanoid"],t):t((e||self).ReactEventEmitter={},e.eventemitter3,e.react,e.lodash,e.reactUse,e.jsxRuntime,e.nanoid)}(this,function(e,t,n,r,i,o,u){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=new(/*#__PURE__*/a(t).default);c.emit=function(){var e,t=[].slice.call(arguments),n=String(t[0]),r=t[0].uuid;return r&&l(n,r),(e=this.constructor.prototype.emit).call.apply(e,[this].concat(t))};var s,f=new Map,l=function(e,t){f.has(e)&&f.get(e)!==t&&console.warn('Another event named "'+e+'" already exists. Duplicate events share the same listener. This can lead to unexpected issues if their payload differs. Make sure to call the `createEvent` function only once per event and reuse the resulting functions throughout your application.'),f.set(e,t)},d=c,p=function(e,t){void 0===t&&(t=d),i.useIsomorphicLayoutEffect(function(){return r.forIn(e,function(e,n){t.addListener(n,e)}),function(){r.forIn(e,function(e,n){t.removeListener(n,e)})}},[e])},v=function(e,t,n){void 0===n&&(n=d),i.useIsomorphicLayoutEffect(function(){return n.addListener(e,t),function(){n.removeListener(e,t)}},[t])},m=function(e){var t=n.useRef(function(){throw new Error("Cannot call an event handler during the first render.")});return i.useIsomorphicLayoutEffect(function(){t.current=e}),n.useCallback(function(){var e;return null==(e=t.current)?void 0:e.apply(null,[].slice.call(arguments))},[])},h=/*#__PURE__*/n.createContext(),y=!("undefined"==typeof window||null==(s=window.document)||!s.createElement);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}e.EventEmitterContext=h,e.EventEmitterProvider=function(e){var t=e.emitter,n=null!=t?t:d,r={emitter:n,emit:function(){return n.emit.apply(n,[].slice.call(arguments))},useListener:function(e,t){return v(e,t,n)},useListeners:function(e){return p(e,n)}};/*#__PURE__*/return o.jsx(h.Provider,{value:r,children:e.children})},e.EventOpen=function(){},e.createAction=function(e,t){function n(){var n=[].slice.call(arguments);if(t){var r=t.apply(void 0,n);if(!r)throw new Error("prepareAction did not return an object");return E({type:e,payload:r.payload},"meta"in r&&{meta:r.meta},"error"in r&&{error:r.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.uuid=u.nanoid(),n.type=e,n.match=function(t){return t.type===e},n},e.createEvent=function(e,t){var n;void 0===t&&(t={});var r=null!=(n=t.emitter)?n:d;return[function(t){y?r.emit(e,t):console.warn('Could not emit "'+e+'" event. Events cannot be emitted from the server.')},function(t){var n=m(t);i.useIsomorphicLayoutEffect(function(){return r.addListener(e,n),function(){r.removeListener(e,n)}},[n])}]},e.emitter=d,e.useEvent=m,e.useEventEmitter=function(){return n.useContext(h)},e.useEventListener=v,e.useEventListeners=p});
//# sourceMappingURL=index.umd.js.map