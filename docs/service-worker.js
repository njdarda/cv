(function(){"use strict";var e={636:function(){try{self["workbox:core:6.2.4"]&&_()}catch(e){}},802:function(){try{self["workbox:expiration:6.2.4"]&&_()}catch(e){}},85:function(){try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},795:function(){try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},749:function(){try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(636);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s},t=e;class n extends Error{constructor(e,s){const n=t(e,s);super(n),this.name=e,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>{for(const t of Object.keys(a))e(t)},c={updateDetails:e=>{i((t=>{"string"===typeof e[t]&&(a[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(a.googleAnalytics),getPrecacheName:e=>e||r(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||r(a.runtime),getSuffix:()=>a.suffix};function o(e,t){const s=t();return e.waitUntil(s),s}s(85);const h="__WB_REVISION__";function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set(h,t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class d{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;function p(){if(void 0===f){const t=new Response("");if("body"in t)try{new Response(t.body),f=!0}catch(e){f=!1}f=!1}return f}async function g(e,t){let s=null;if(e.url){const t=new URL(e.url);s=t.origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=p()?a.body:await a.blob();return new Response(c,i)}const m=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function w(e,t){const s=new URL(e);for(const n of t)s.searchParams.delete(n);return s.href}async function y(e,t,s,n){const a=w(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i){const t=w(c.url,s);if(a===t)return e.match(c,n)}}class _{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const b=new Set;async function v(){for(const e of b)await e()}function R(e){return new Promise((t=>setTimeout(t,e)))}s(749);function x(e){return"string"===typeof e?new Request(e):e}class C{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new _,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=x(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(i){if(i instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:a.clone(),request:r.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=x(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=x(e);await R(0);const a=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:m(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),l=h?await y(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?r.clone():r)}catch(u){if(u instanceof Error)throw"QuotaExceededError"===u.name&&await v(),u}for(const n of this.iterateCallbacks("cacheDidUpdate"))await n({cacheName:i,oldResponse:l,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=x(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class L{constructor(e={}){this.cacheName=c.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"===typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new C(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:r,event:s,request:t}),a)break;if(!a)throw r}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class E extends L{constructor(e={}){e.cacheName=c.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,r=e.integrity,i=!r||r===n;if(s=await t.fetch(new Request(e,{integrity:r||n})),n&&i){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e),a=await t.cachePut(e,s.clone());if(!a)throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==E.copyRedirectedCacheableResponsesPlugin&&(n===E.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},E.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await g(e):e}};class q{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:c.getPrecacheName(e),plugins:[...t,new d({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"===typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),r="string"!==typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!==typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return o(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return o(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){const e=await self.caches.open(this.strategy.cacheName);return e.match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let D;const N=()=>(D||(D=new q),D);s(795);const U="GET",k=e=>e&&"object"===typeof e?e:{handle:e};class T{constructor(e,t,s=U){this.handler=k(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=k(e)}}class I extends T{constructor(e,t,s){const n=({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)};super(n,t,s)}}class K{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(r){r instanceof Error&&(n=r)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"===typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t=U){this._defaultHandlerMap.set(t,k(e))}setCatchHandler(e){this._catchHandler=k(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let P;const M=()=>(P||(P=new K,P.addFetchListener(),P.addCacheListener()),P);function A(e,t,s){let a;if("string"===typeof e){const n=new URL(e,location.href);0;const r=({url:e})=>e.href===n.href;a=new T(r,t,s)}else if(e instanceof RegExp)a=new I(e,t,s);else if("function"===typeof e)a=new T(e,t,s);else{if(!(e instanceof T))throw new n("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}const r=M();return r.registerRoute(a),a}function S(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}function*O(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=S(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}class B extends T{constructor(e,t){const s=({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of O(s.url,t)){const t=n.get(a);if(t){const s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}};super(s,e.strategy)}}function W(e){const t=N(),s=new B(t,e);A(s)}function j(e){const t=N();t.precache(e)}function F(e,t){j(e),W(t)}class H extends L{async _handle(e,t){let s,a=await t.cacheMatch(e);if(a)0;else{0;try{a=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(s=r)}0}if(!a)throw new n("no-response",{url:e.url,error:s});return a}}function $(e){e.then((()=>{}))}const V=(e,t)=>t.some((t=>e instanceof t));let G,Q;function J(){return G||(G=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z(){return Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X=new WeakMap,Y=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap;function se(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(oe(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&X.set(t,e)})).catch((()=>{})),te.set(t,e),t}function ne(e){if(Y.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));Y.set(e,t)}let ae={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return Y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Z.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return oe(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function re(e){ae=e(ae)}function ie(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?z().includes(e)?function(...t){return e.apply(he(this),t),oe(X.get(this))}:function(...t){return oe(e.apply(he(this),t))}:function(t,...s){const n=e.call(he(this),t,...s);return Z.set(n,t.sort?t.sort():[t]),oe(n)}}function ce(e){return"function"===typeof e?ie(e):(e instanceof IDBTransaction&&ne(e),V(e,J())?new Proxy(e,ae):e)}function oe(e){if(e instanceof IDBRequest)return se(e);if(ee.has(e))return ee.get(e);const t=ce(e);return t!==e&&(ee.set(e,t),te.set(t,e)),t}const he=e=>te.get(e);function le(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=oe(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(oe(i.result),e.oldVersion,e.newVersion,oe(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),c}function ue(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);return t&&s.addEventListener("blocked",(()=>t())),oe(s).then((()=>{}))}const de=["get","getKey","getAll","getAllKeys","count"],fe=["put","add","delete","clear"],pe=new Map;function ge(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(pe.get(t))return pe.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=fe.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!de.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return pe.set(t,r),r}re((e=>({...e,get:(t,s,n)=>ge(t,s)||e.get(t,s,n),has:(t,s)=>!!ge(t,s)||e.has(t,s)})));s(802);const me="workbox-expiration",we="cache-entries",ye=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class _e{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(we,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&ue(this._cacheName)}async setTimestamp(e,t){e=ye(e);const s={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=await this.getDb(),a=n.transaction(we,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(we,this._getId(e));return null===s||void 0===s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(we).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;while(n){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const c of a)await s.delete(we,c.id),i.push(c.url);return i}_getId(e){return this._cacheName+"|"+ye(e)}async getDb(){return this._db||(this._db=await le(me,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class be{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new _e(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,$(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}function ve(e){b.add(e)}class Re{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);$(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&ve((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===c.getRuntimeName())throw new n("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new be(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;const s=Date.now();return t>=s-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t),n=s.getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}F([{'revision':null,'url':'/cv/css/app.3faca534.css'},{'revision':'1ba2ae710d927f13d483fd5d1e548c9b','url':'/cv/favicon.ico'},{'revision':'f130a0b70e386170cf6f011c0ca8c4f4','url':'/cv/img/icons/android-chrome-192x192.png'},{'revision':'0ff1bc4d14e5c9abcacba7c600d97814','url':'/cv/img/icons/android-chrome-512x512.png'},{'revision':'845a39478d0e2d4d5d32a092de2de250','url':'/cv/img/icons/android-chrome-maskable-192x192.png'},{'revision':'2695f5feb66cdb0c6f09d0e415824cf9','url':'/cv/img/icons/android-chrome-maskable-512x512.png'},{'revision':'936d6e411cabd71f0e627011c3f18fe2','url':'/cv/img/icons/apple-touch-icon-120x120.png'},{'revision':'1a034e64d80905128113e5272a5ab95e','url':'/cv/img/icons/apple-touch-icon-152x152.png'},{'revision':'c43cd371a49ee4ca17ab3a60e72bdd51','url':'/cv/img/icons/apple-touch-icon-180x180.png'},{'revision':'9a2b5c0f19de617685b7b5b42464e7db','url':'/cv/img/icons/apple-touch-icon-60x60.png'},{'revision':'af28d69d59284dd202aa55e57227b11b','url':'/cv/img/icons/apple-touch-icon-76x76.png'},{'revision':'66830ea6be8e7e94fb55df9f7b778f2e','url':'/cv/img/icons/apple-touch-icon.png'},{'revision':'4bb1a55479d61843b89a2fdafa7849b3','url':'/cv/img/icons/favicon-16x16.png'},{'revision':'98b614336d9a12cb3f7bedb001da6fca','url':'/cv/img/icons/favicon-32x32.png'},{'revision':'b89032a4a5a1879f30ba05a13947f26f','url':'/cv/img/icons/msapplication-icon-144x144.png'},{'revision':'058a3335d15a3eb84e7ae3707ba09620','url':'/cv/img/icons/mstile-150x150.png'},{'revision':'4e857233cbd3bb2d2db4f78bed62a52f','url':'/cv/img/icons/safari-pinned-tab.svg'},{'revision':null,'url':'/cv/img/njd.26bd867d.png'},{'revision':'526a180da311045595a5317327bfb7f3','url':'/cv/index.html'},{'revision':null,'url':'/cv/js/about.e9a6b82a.js'},{'revision':null,'url':'/cv/js/app.1a865846.js'},{'revision':null,'url':'/cv/js/chunk-vendors.7b720243.js'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/cv/robots.txt'}]),A((({request:e})=>"font"===e.destination),new H({cacheName:"fonts",plugins:[new Re({maxEntries:60,maxAgeSeconds:2592e3})]}))}()})();