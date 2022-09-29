import e from"eventemitter3";import{useRef as t,useCallback as r,createContext as n,useContext as o}from"react";import{forIn as i}from"lodash";import{useIsomorphicLayoutEffect as a}from"react-use";import{jsx as s}from"react/jsx-runtime";import{nanoid as u}from"nanoid";const c=new e;c.emit=function(...e){const t=String(e[0]),r=e[0].uuid;return r&&m(t,r),this.constructor.prototype.emit.call(this,...e)};const l=new Map,m=(e,t)=>{l.has(e)&&l.get(e)!==t&&console.warn(`Another event named "${e}" already exists. Duplicate events share the same listener. This can lead to unexpected issues if their payload differs. Make sure to call the \`createEvent\` function only once per event and reuse the resulting functions throughout your application.`),l.set(e,t)};var d=c;const p=(e,t=d)=>{a(()=>(i(e,(e,r)=>{t.addListener(r,e)}),()=>{i(e,(e,r)=>{t.removeListener(r,e)})}),[e])},v=(e,t,r=d)=>{a(()=>(r.addListener(e,t),()=>{r.removeListener(e,t)}),[t])},f=e=>{const n=t(()=>{throw new Error("Cannot call an event handler during the first render.")});return a(()=>{n.current=e}),r((...e)=>{var t;return null==(t=n.current)?void 0:t.apply(null,e)},[])},h=/*#__PURE__*/n(),y=({children:e,emitter:t})=>{const r=null!=t?t:d;/*#__PURE__*/return s(h.Provider,{value:{emitter:r,emit:(...e)=>r.emit(...e),useListener:(e,t)=>v(e,t,r),useListeners:e=>p(e,r)},children:e})},w=()=>o(h);var g,E=h;const L=!("undefined"==typeof window||null==(g=window.document)||!g.createElement);var b=(e,t={})=>{var r;const n=null!=(r=t.emitter)?r:d;return[t=>{L?n.emit(e,t):console.warn(`Could not emit "${e}" event. Events cannot be emitted from the server.`)},t=>{const r=f(t);a(()=>(n.addListener(e,r),()=>{n.removeListener(e,r)}),[r])}]};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function x(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error("prepareAction did not return an object");return j({type:e,payload:n.payload},"meta"in n&&{meta:n.meta},"error"in n&&{error:n.error})}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.uuid=u(),r.type=e,r.match=t=>t.type===e,r}function O(){}export{E as EventEmitterContext,y as EventEmitterProvider,O as EventOpen,x as createAction,b as createEvent,d as emitter,f as useEvent,w as useEventEmitter,v as useEventListener,p as useEventListeners};
//# sourceMappingURL=index.modern.mjs.map
