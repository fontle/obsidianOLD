window.MSA=window.MSA||{};window.MSA.MeControl=window.MSA.MeControl||{};window.MSA.MeControl.Config={"ver":"10.22343.3","mkt":"en-GB","ptn":"exchange","gfx":"https://amcdn.msftauth.net","dbg":false,"aad":true,"int":false,"pxy":true,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","instKey":"b8ffe739c47a401190627519795ca4d2-044a8309-9d4b-430b-9d47-6e87775cbab6-6888","oneDSUrl":"https://js.monitor.azure.com/scripts/c/ms.shared.analytics.mectrl-3.2.6.gbl.min.js","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":30000,"graphv2":true,"graphinfo":{"graphclientid":"7eadcef8-456d-4611-9480-4fff72b8b9e2","graphscope":"user.read","graphcodeurl":"https://login.microsoftonline.com/common/oauth2/v2.0/authorize","graphredirecturi":"https://amcdn.msftauth.net/me/callgraph","graphphotourl":"https://graph.microsoft.com/v1.0/me/photos/96x96/$value"},"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/","authAppUpsellUrl":"","cache":true,"cacheRetention":{"picRetention":604800000,"authAppRetention":94670856000},"enableAADTelemetry":false,"enableTelemetry":true};window.MeControl=window.MeControl||{};window.MeControl.Config={"ver":"10.22343.3","mkt":"en-GB","ptn":"exchange","gfx":"https://amcdn.msftauth.net","dbg":false,"aad":true,"int":false,"pxy":true,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","instKey":"b8ffe739c47a401190627519795ca4d2-044a8309-9d4b-430b-9d47-6e87775cbab6-6888","oneDSUrl":"https://js.monitor.azure.com/scripts/c/ms.shared.analytics.mectrl-3.2.6.gbl.min.js","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":30000,"graphv2":true,"graphinfo":{"graphclientid":"7eadcef8-456d-4611-9480-4fff72b8b9e2","graphscope":"user.read","graphcodeurl":"https://login.microsoftonline.com/common/oauth2/v2.0/authorize","graphredirecturi":"https://amcdn.msftauth.net/me/callgraph","graphphotourl":"https://graph.microsoft.com/v1.0/me/photos/96x96/$value"},"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/","authAppUpsellUrl":"","cache":true,"cacheRetention":{"picRetention":604800000,"authAppRetention":94670856000},"enableAADTelemetry":false,"enableTelemetry":true};this.MeControl=this.MeControl||{},this.MeControl.WebInline=function(t){"use strict";var o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}var n,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=16,c=63,u=f();function s(){return u}function f(e){var n=0,t=e||function(){var e="";for(;e.length<a;)e+=r[Math.floor(Math.random()*r.length)];return e}();return{getValue:function(){var e=t+"."+n;return e.length>c&&(e=e.substring(0,c)+"!"),e},extend:function(){t=this.getValue(),n=0},increment:function(){n++}}}function l(){return n}function d(e){n=e}var p=window,m=p.MeControl=p.MeControl||{},v=Date.now?function(){return Date.now()}:function(){return+new Date},g=function(){return p.performance.now()},h=function(){return p.performance&&p.performance.getEntries?window.performance.getEntries():[]},y=function(){return p.location};var e=p.requestAnimationFrame?function(e){return p.requestAnimationFrame(e)}:function(e){return setTimeout(function(){return e(g())})},C="mectrl",w="_",b=new RegExp("^"+C,"i");function T(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.join(w);return b.test(t)||(t=C+w+t),t}var A="MeControlError::";function E(e,n){void 0===n&&(n=!1);var t=new Error(""+A+e);return t.mcIsTimeout=n,t}var S=(Object.defineProperty(N.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),N.prototype.preventDefault=function(){this._defaultPrevented=!0},N);function N(e,n){this.type=e,this.detail=n,this._defaultPrevented=!1}var I=(M.prototype.addEventListener=function(e,n){e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(n)},M.prototype.removeEventListener=function(e,n){if(e in this._listeners){var t=this._listeners[e],r=t.indexOf(n);-1!==r&&t.splice(r,1)}},M.prototype.dispatchEvent=function(e){if(!(e.type in this._listeners))return!0;for(var n=this._listeners[e.type],t=new S(e.type,e.detail),r=0,o=n.length;r<o;r++)n[r].call(this,t);return!t.defaultPrevented},M);function M(){this._listeners={}}var P="msameid";t.id=U();try{var D=p.sessionStorage;D&&(t.id=D.getItem(P)||U(),D.setItem(P,t.id))}catch(e){}function U(){return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase();function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}}function O(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var x,_,L=Object.assign||o,k={};function R(e,n){e=e.toLowerCase(),k[e]=k[e]||{},L(k[e],n)}var F=null;function j(){var e=m.Config;return null==F&&""!=m.Config.cdnRegex&&(_=new RegExp(m.Config.cdnRegex),F=V(_)),F||e.gfx}function V(e){var n=document.getElementsByTagName("script");if(n)for(var t=Array.prototype.slice.call(n),r=0;r<t.length;r++){var o=e.exec(t[r].src);if(o)return o[0]}}var B,J=[],q=/ContentUpdate|PageAction|TrackedScenario/,G=!0,W=!1,H="complete"===document.readyState,X=[];function z(e){!(G=e)&&0<X.length&&Q()}function K(e,n){var t=e.partA.name.split(".").pop();m.Config.telEvs&&-1!==m.Config.telEvs.indexOf(t)&&(X.push(e),G?(W||(W=!0,window.addEventListener("beforeunload",Q,!0)),H&&!1!==n&&(!0===n||q.test(t))&&setTimeout(Q,0)):Q())}function Q(){if(window.removeEventListener("beforeunload",Q,!0),W=!1,0<X.length){if(!m.Config.isUT)B(X),function(){for(var e=0;e<J.length;e++)if(J[e][1]())return J[e][0];return function(){}}()(X);X=[]}}function Y(e){return e?e.replace(/([^?&]*)=([^&#]*)/g,"$1=**").replace(/#.*/,""):e}H||window.addEventListener("load",function(){H=!0,Q()});var Z=U(),$=[],ee="None",ne={counts:"0-0"};function te(e){var n=s();return n.increment(),"ContentUpdate"===e.eventType&&e.content&&"Application"===e.content.source&&(ee=e.content.id),{cv:n.getValue(),impressionGuid:Z,pageName:ee,date:new Date,timestamp:g(),accounts:ne}}function re(){return ne.current}var oe=g(),ie={};function ae(e,n){var t=Y(y().href);return{metaTags:{authtype:n&&n.toString(),pgpart:m.Config.ptn},config:m.Config,url:t,accts:e}}function ce(e,n,t){return{ver:"2.1",name:e,time:n.toISOString(),appId:"JS:MeControl",cV:t,flags:2097152,ext:{javascript:{ver:"1.1",libVer:"4.2.3",domain:y().hostname,userConsent:!1},app:{env:m.Config.int?"Test":"Prod"}}}}function ue(e,n){ie[e]=n,function(e){for(var n=[],t=[],r=0;r<$.length;r++)$[r][0].eventType===e?t.push($[r]):n.push($[r]);return $=n,t}(e).forEach(function(e){K(n(e[0],e[1]),e[0].isCritical)})}function se(e){var n=function(e){var n=ie[e.eventType];return n?n(e,te(e)):null}(e);n?K(n,e.isCritical):function(e){$.push([e,te(e)])}(e)}var fe="Ms.Webi.ClientError";function le(e,n){var t;return{partA:ce(fe,n.date,n.cv),partB:void 0,partC:{baseType:void 0,errorName:e.name,errorMessage:(t=e.details,t.replace(/\n/g,"\\n")),errorType:e.type,errorInfo:JSON.stringify(ae(n.accounts.counts,n.accounts.current)),severity:e.severity||2,wasDisplayed:e.displayed,pageName:n.pageName,impressionGuid:n.impressionGuid,market:m.Config.mkt}}}var de="Ms.Webi.OutgoingRequest",pe="Ms.Qos.OutgoingServiceRequest";function me(e,n){var t=function(e){for(var n=h(),t=0,r=n;t<r.length;t++){var o=r[t];if(o.name===e||-1!==o.name.indexOf(e))return o}return}(e.url),r=Math.round(ve(t)||e.duration),o=function(e){if(e){var n=document.createElement("a");n.href=e;for(var t=n.pathname.split("/"),r=t.length-1;0<=r;r--)if(t[r])return t[r]}return}(t?t.name:e.url)||e.serviceOperation;return{partA:ce(de,n.date,n.cv),partB:{operationName:o,dependencyOperationName:e.serviceOperation,dependencyName:e.service,latencyMs:r,succeeded:e.success,targetUri:Y(e.url)},partC:{baseType:pe,message:e.message,pageName:n.pageName,impressionGuid:n.impressionGuid,market:m.Config.mkt,customData:JSON.stringify(L({},{computedDuration:e.duration||-1,perfDuration:ve(t)||-1},ae(n.accounts.counts,n.accounts.current)))}}}function ve(e){if(e)switch(e.entryType){case"navigation":return e.responseEnd-e.startTime;case"resource":default:return e.duration}}var ge="Ms.Webi.MeControl.TrackedScenario";function he(e,n){return{partA:ce(ge,n.date,n.cv),partB:void 0,partC:{baseType:void 0,partner:m.Config.ptn,controlVersion:m.Config.ver,market:m.Config.mkt,scenario:e.scenario,action:e.action,previousAction:e.previousAction,success:e.success,durationMs:e.durationMs,details:e.details}}}var ye=setTimeout;function Ce(e){return Boolean(e&&void 0!==e.length)}function we(){}function be(e){if(!(this instanceof be))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Ie(e,this)}function Te(t,r){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,be._immediateFn(function(){var e=1===t._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(t._value)}catch(e){return void Ee(r.promise,e)}Ae(r.promise,n)}else(1===t._state?Ae:Ee)(r.promise,t._value)})):t._deferreds.push(r)}function Ae(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if(e instanceof be)return n._state=3,n._value=e,void Se(n);if("function"==typeof t)return void Ie(function(e,n){return function(){e.apply(n,arguments)}}(t,e),n)}n._state=1,n._value=e,Se(n)}catch(e){Ee(n,e)}}function Ee(e,n){e._state=2,e._value=n,Se(e)}function Se(e){2===e._state&&0===e._deferreds.length&&be._immediateFn(function(){e._handled||be._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)Te(e,e._deferreds[n]);e._deferreds=null}function Ne(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function Ie(e,n){var t=!1;try{e(function(e){t||(t=!0,Ae(n,e))},function(e){t||(t=!0,Ee(n,e))})}catch(e){if(t)return;t=!0,Ee(n,e)}}be.prototype.catch=function(e){return this.then(null,e)},be.prototype.then=function(e,n){var t=new this.constructor(we);return Te(this,new Ne(e,n,t)),t},be.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){return t.reject(e)})})},be.all=function(n){return new be(function(r,o){if(!Ce(n))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(n);if(0===i.length)return r([]);var a=i.length;function c(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){c(n,e)},o)}i[n]=e,0==--a&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)c(e,i[e])})},be.resolve=function(n){return n&&"object"==typeof n&&n.constructor===be?n:new be(function(e){e(n)})},be.reject=function(t){return new be(function(e,n){n(t)})},be.race=function(o){return new be(function(e,n){if(!Ce(o))return n(new TypeError("Promise.race accepts an array"));for(var t=0,r=o.length;t<r;t++)be.resolve(o[t]).then(e,n)})},be._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){ye(e,0)},be._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var Me,Pe=window,De=3;if("performance"in window==0&&(Pe.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var Ue=Date.now();window.performance.timing&&window.performance.timing.navigationStart&&(Ue=window.performance.timing.navigationStart),window.performance.now=function(){return Date.now()-Ue}}var Oe=[];function xe(e){Oe=Oe.concat(e),_e()}function _e(){Me&&(Oe.forEach(function(e){Me.track(function(e){return{name:e.partA.name,data:o(o({},e.partA),{data:o({baseData:e.partB&&o({},e.partB)},e.partC)})}}(e))}),Oe=[])}function Le(){return new be(function(r,n){if(Me)r();else{var o=0,t=m.Config.oneDSUrl,e=document.getElementsByTagName("head")[0],i=document.createElement("script");i.async=!0,i.type="text/javascript",i.charset="UTF-8",i.src=t;var a=setTimeout(function(){c(),n(E("oneDsMeControl download timed out: "+t,!0))},m.Config.timeoutMs);i.onload=u,i.onerror=function(e){c(),n(E("oneDsMeControl failed to download/parse/compile: "+t,!0))},i.crossOrigin="anonymous",e.appendChild(i)}function c(){clearTimeout(a),i&&(i.onerror=i.onload=void 0,i=void 0)}function u(e){o<De?setTimeout(s,0):n("oneDsMeControl did not instantiate")}function s(){o++;try{if(!Pe.oneDsMeControl)throw"oneDsMeControl variable is undefined";var e=new Pe.oneDsMeControl.AppInsightsCore,n=new Pe.oneDsMeControl.PostChannel,t={instrumentationKey:m.Config.instKey,extensions:[n],extensionConfig:[n.identifier={eventsLimitInMem:50}]};e.initialize(t,[]),Me=e,c(),r()}catch(e){u()}}})}function ke(e){var n,t;!function(e){B=e}(xe),z(!1),ue("ClientError",le),ue("OutgoingRequest",me),ue("TrackedScenario",he),(null===(t=null===(n=m)||void 0===n?void 0:n.Config)||void 0===t?void 0:t.enableTelemetry)&&Le().then(function(){_e()}).catch(function(){Le().then(function(){_e()})})}function Re(e){var n,t,r,o;if((null===(t=null===(n=m)||void 0===n?void 0:n.Config)||void 0===t?void 0:t.enableTelemetry)&&((null===(o=null===(r=m)||void 0===r?void 0:r.Config)||void 0===o?void 0:o.enableAADTelemetry)||"aad"!==re()&&void 0!==re())){var i,a;if("ContentUpdate"===(a=e).eventType&&"Application"===a.content.source&&"Initial Collapsed"===a.content.id||"PageAction"===(i=e).eventType&&i.content&&("Sign Out"==i.content.id||"View Account"==i.content.id)){var c=l();if(c){var u=new S("telemetry",{data:{event:e}});c.syntheticEventTarget.dispatchEvent(u)}}se(e)}}function Fe(){var n=g();h().filter(function(e){return function(e){var n=document.createElement("a");n.href=e;var t=n.hostname;return je.test(t)}(e.name)}).forEach(function(e){return Re({eventType:"OutgoingRequest",serviceOperation:"LoadResource",service:"MeControl",url:e.name,success:!0,duration:n-e.startTime})})}ke(m.Config&&m.Config.main);var je=/^(?:mem\.gfx\.ms|controls\.account\.microsoft|amcdn\.ms(?:ft)?auth\.net)/i;function Ve(r,o){return new be(function(e,n){var t=setTimeout(function(){n(E("Promise timed out after "+o+"ms.",!0))},o);r.then(e,n).finally(function(){clearTimeout(t)})})}void 0!==p.Promise&&-1!==p.Promise.toString().indexOf("[native code]")&&(be._immediateFn=function(e){return p.Promise.resolve().then(e)}),be._unhandledRejectionFn=function(e){Re({eventType:"ClientError",isCritical:!0,name:e.message||"(falsey message property on error)",type:"UnhandledPromiseRejection",details:e.stack||"",displayed:!1,severity:e.mcIsTimeout?3:2})};var Be=[];var Je={};function qe(e){return Je[e]}function Ge(e,n,t){Je[e]={id:e,bundlePromise:n,exports:t}}function We(e,n,t){var r,o;o="function"==typeof n?(r=[],n):(r=n,t),function(e,n,t){Be.push({id:e,deps:n,factory:t})}(e,r,o)}var He={"@mecontrol/web-inline":"meInline","@mecontrol/web-boot":"meBoot","@mecontrol/web-core":"meCore"};function Xe(e){try{e in He&&(e=He[e]),ze();var n=qe(e);if(n)return n.bundlePromise;var t=function(s){return new be(function(i,a){var e=g(),c=function(e){var n=m.Config;return j()+"/scripts/me/MeControl/"+n.ver+"/"+n.mkt+"/"+e+(n.dbg?"":".min")+".js"}(s),n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.async=!0,t.type="text/javascript",t.charset="UTF-8",t.src=c;var r=setTimeout(function(){var e=u(),n="Bundle download timed out";Ke(s,e,c,!0,n),a(E(n+": "+s+" ("+c+")",!0))},m.Config.timeoutMs);function u(){return clearTimeout(r),t&&(t.onerror=t.onload=void 0,t=void 0),g()-e}t.onload=function(e){var t=u();ze();var n=qe(s),r=n&&n.exports;if(r)Ve(r,m.Config.timeoutMs).then(function(e){Ke(s,t,c,!1),i(e)}).catch(function(e){var n=e.mcIsTimeout?"Resolving deps and exports timed out":"Resolving deps and exports failed";Ke(s,t,c,!0,n),a(E(n+": "+s+" ("+c+"). Inner error: "+e.message,e.mcIsTimeout))});else{var o=void 0;o=p.MeControlDefine!=We?"window.MeControlDefine does not equal this bundle's meDefine function. Did you load Me Control twice?":"Bundle failed to load exports",Ke(s,t,c,!0,o),a(E(o+": "+s+" ("+c+")",!1))}},t.onerror=function(e){var n=u(),t="Bundle failed to download/parse/compile";Ke(s,n,c,!0,t),a(E(t+": "+s+" ("+c+")",!1))},t.crossOrigin="anonymous",n.appendChild(t)})}(e);return Ge(e,t),t}catch(e){return be.reject(e)}}function ze(){for(var e=function(){var n=Be.pop();if(n){var t={},e=be.all(n.deps.map(function(e){return"exports"===e?t:Xe(e)})).then(function(e){n.factory.apply(n,e)}).then(function(){return t}),r=qe(n.id);r?r.exports=e:Ge(n.id,e,e)}};Be.length;)e()}function Ke(e,n,t,r,o){Re({eventType:"OutgoingRequest",serviceOperation:"DownloadScript",service:"MeControl",url:t,success:!r,duration:n,message:o})}function Qe(){var i,a=[],c=0;function u(e){var n=e.name;i&&O(i,n)&&i[n].apply(i,e.params)}return{setComponent:function(e){i=e;var n=a;a=[];for(var t=0;t<n.length;t++)u(n[t])},handleCall:function(r,o){return void 0===o&&(o=!1),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t={name:r,params:e};i?u(t):a.splice(o?c++:a.length,0,t)}}}}var Ye=Qe(),Ze=Ye.setComponent,$e=function(){return Ze},en={setActiveAccount:nn("setActiveAccount"),setCommands:nn("setCommands"),setAccountPicture:nn("setAccountPicture"),setProfilePicture:nn("setProfilePicture"),refreshProfilePicture:nn("refreshProfilePicture"),refreshAccountPicture:nn("refreshAccountPicture"),setTheme:nn("setTheme"),setHeaderTheme:nn("setHeaderTheme"),setDisplayMode:nn("setDisplayMode"),loadPresenceConfig:nn("loadPresenceConfig"),setPresence:nn("setPresence"),addEventListener:nn("addEventListener"),removeEventListener:nn("removeEventListener")};function nn(t){var r=Ye.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Re({eventType:"PartnerApiCall",method:t,params:i(e)}),r.apply(void 0,e)}}var tn="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: 'Segoe UI'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;",rn=0;function on(n,t){rn=g();function r(e){Re({eventType:"TrackedScenario",scenario:"Load",previousAction:"START",action:"END",success:e,durationMs:an(),details:t})}return Xe(m.Config.main).then(function(e){return e.init(n,$e())}).then(function(){r(!0)},function(e){throw"suiteshell"!==m.Config.wrapperId&&cn(n),r(!1),e})}function an(){return g()-rn}function cn(e){if(!e)throw E("No options object given before showHeaderNoJs was called");var n=function(e){var n,t=e.currentAccount&&"signedIn"==e.currentAccount.authenticatedState,r=t?e.primaryUXConfig.signOutStr:e.primaryUXConfig.signInStr,o=null,i=e.authProviderConfig;switch(i.type){case"partnerManaged":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:i.signInExperienceTypes})};break;case"adalJsWithMsaFed":case"adalJsAadOnly":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"msalJsAadOnly":case"msalJsWithMsa":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"v1BackCompat":var a=i.rpData,c=t?"signOutUrl":"signInUrl",u=a.aadInfo&&a.aadInfo[c],s=a.msaInfo&&a.msaInfo[c];"aad"===a.preferredIdp&&u?n=u:"msa"===a.preferredIdp&&s?n=s:u?n=u:s&&(n=s);break;default:var f=t?i.appSignOutUrl:i.appSignInUrl;n="function"==typeof f?f({currentAccount:e.currentAccount}):f}return{str:r,href:n,onClick:o}}(e),t=document.createTextNode(n.str||""),r=document.createElement("a");r.href=n.href||"#",r.style.cssText=tn,r.onclick=n.onClick,r.appendChild(t);var o=document.createElement("div");o.className="msame_Header",o.appendChild(r);var i=document.createElement("div");i.appendChild(o);var a=e.shadowDOMContainerElement||document.getElementById(e.containerId);a&&(a.innerHTML="",a.appendChild(i))}function un(e){return sn(e.currentPresence)&&function(e){if(e){for(var n=0;n<e.length;n++)if(!sn(e[n]))return!1;return!0}return!1}(e.presenceList)}function sn(e){return!!e&&(0<e.key.length&&null!=e.key&&null!=e.key&&0<e.presenceString.length&&null!=e.presenceString&&null!=e.presenceString&&0<e.imageUrl.length&&null!=e.imageUrl&&null!=e.imageUrl)}function fn(e){if(!e)throw E("Options must be an object. Received "+typeof e+".");if(!(e=o({},e)).authProviderConfig)throw E("options.authProviderConfig not correctly defined. Received "+e.authProviderConfig+".");e.presenceConfig&&un(e.presenceConfig);var n=e.primaryUXConfig=e.primaryUXConfig||{};e.events=e.events||{},e.primaryUXConfig.signInStr=n.signInStr||"Sign in",e.primaryUXConfig.signOutStr=n.signOutStr||"Sign out";var t=["compressed"];e.primaryUXConfig.displayModes=n.displayModes&&n.displayModes.filter(function(e){return-1!=t.indexOf(e.type)})||[],e.appContextConfig&&e.appContextConfig.commands&&(e.appContextConfig.commands=e.appContextConfig.commands.slice(0,5));var r=e;return r.syntheticEventTarget=new I,function(e){var n;if(e&&e.events)for(n in e.events)if(O(e.events,n)){var t=e.events[n];t&&e.syntheticEventTarget.addEventListener(n.toLowerCase(),t)}}(r),d(r),r}function ln(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return L.apply(void 0,i([m],e))}function dn(e){return{apiGeneration:"GEN2",containerId:e.containerId,appContextConfig:{commands:pn(e.extensibleLinks)},currentAccount:e.userData?gn(e.userData):void 0,events:e.events?mn(e.events):void 0,authProviderConfig:function(e){return{type:"v1BackCompat",rpData:e}}(e.rpData)}}function pn(e){return e&&null!=e.map?e.map(function(n,e){return{type:"link",id:n.id?n.id:T("command_id_",e),text:n.label?n.label:n.string?n.string:"Label "+e,ariaLabel:void 0,url:n.url,openInNewTab:!!n.openInNewTab,onClick:n.onClick?function(e){n.onClick()&&e.preventDefault()}:void 0}}):[]}function mn(n){if(n){var e={};return n.onSignIn&&(e.beforeSignIn=function(e){e.preventDefault(),n.onSignIn()}),n.onBeforeSignOut&&(e.beforeSignOutFromApp=function(e){n.onBeforeSignOut(function(e){return{idp:function(e){switch(e){case"msa":return"msa";case"aad":return"aad";case"msaFed":return"msaFed"}}(e.type),authenticatedState:function(e){switch(e){case"notSignedIn":return"3";case"signedIn":return"1";case"signedInIDPOnly":return"2"}}(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,nickName:e.memberName,tileUrl:e.pictureUrl}}(e.detail.currentAccount))}),n.onEventLog&&(e.controlExpanded=function(){n.onEventLog("DropdownOpen",{type:"bici",ts:v(),uaid:t.id})},e.afterSignOutAndForgetFromIdp=function(e){n.onEventLog("RemoveUser",{userCount:0,idp:e.detail.account.type,currentUser:e.detail.account.memberName})},e.beforeSignIn=function(){n.onEventLog("SignIn",{userCount:0,idp:"",currentUser:""})},e.beforeSwitch=function(e){n.onEventLog("SwitchUser",{userCount:1,idp:1===e.detail.signInType?"Converged":4===e.detail.signInType?"Aad":"Msa",currentUser:e.detail.currentAccount.memberName})},e.afterGetRememberedAccounts=function(e){n.onEventLog("AccountListReady",{duration:0,count:e.detail.rememberedAccounts.length})},e.telemetry=function(e){if(e.detail.data&&e.detail.data.event)try{switch(e.detail.data.event.content.id){case"View Account":n.onEventLog("ViewAccount",{userCount:1,currentUser:"",idp:""});break;case"Sign Out":n.onEventLog("SignOutAll",{userCount:0,currentUser:""});break;case"Initial Collapsed":n.onEventLog("HeaderReady",{duration:0}),n.onEventLog("DropdownReady",{duration:0})}}catch(e){}}),e}}function vn(e){if(!e||!e.idp)return!1;switch(e.idp){case"aad":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e);case"msa":case"msaFed":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e)}}function gn(e){if(vn(e))switch(e.idp){case"aad":return function(e){return{type:"aad",authenticatedState:hn(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,profile:yn(e)}}(e);case"msa":return function(e){return{type:"msa",authenticatedState:hn(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,pictureUrl:e.tileUrl,cid:e.cid,profile:yn(e)}}(e);case"msaFed":return function(e){return{type:"msaFed",authenticatedState:hn(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,cid:e.cid,profile:yn(e)}}(e)}}function hn(e){switch(e.toString()){case"3":return"notSignedIn";case"1":return"signedIn";case"2":return"signedInIDPOnly";default:return"notSignedIn"}}function yn(e){return e.nickName&&""!==e.nickName.trim()?{profileName:e.nickName||"",profilePictureUrl:e.tileUrl||""}:void 0}p.MSA=p.MSA||{};var Cn=p.MSA.MeControl=p.MSA.MeControl||{};var wn=Qe(),bn=$e();var Tn,An,En,Sn={setActiveUser:Nn("setActiveUser"),setExtensibleLinks:Nn("setExtensibleLinks"),refreshUserPicture:Nn("refreshUserPicture"),setUserPicture:Nn("setUserPicture"),setMobileState:Nn("setMobileState"),openCloseDropdown:Nn("openCloseDropdown")};function Nn(t){var r=wn.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Re({eventType:"PartnerApiCall",method:"V1:"+t,params:i(e)}),r.apply(void 0,e)}}Ze=function(e){bn(e);var n=function(t){return{setActiveUser:function(e){var n=gn(e);n&&t.setActiveAccount(n)},setExtensibleLinks:function(e){t.setCommands(pn(e))},refreshUserPicture:function(){t.refreshAccountPicture(!0)},setUserPicture:function(e){t.setProfilePicture(e)},setMobileState:function(e){var n;switch(e){case-1:n="auto";break;case 0:case 2:n="standard";break;case 1:n="compressed";break;default:n="auto"}t.setDisplayMode(n)},openCloseDropdown:function(e){}}}(e);wn.setComponent(n)},Tn=en,An=function(e){Fe(),Re({eventType:"PartnerApiCall",method:"load",params:e});try{on(fn(e),"load")}catch(e){return!1}return!0},En=function(t){return new be(function(e,n){Fe(),Re({eventType:"PartnerApiCall",method:"loadAsync",params:t}),e(on(fn(t),"loadAsync"))})},p.MeControlDefine=We,p.MeControlImport=Xe,ln({API:Tn,Loader:{load:An,loadAsync:En},Config:m.Config||{}},{Strings:{addStrings:R}}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];L.apply(void 0,i([Cn],e))}({API:Sn,Loader:{load:function(e){if(Fe(),Re({eventType:"PartnerApiCall",method:"loadV1",params:e}),!e)return!1;if(!e.rpData)return!1;try{on(fn(dn(e)),"loadV1")}catch(e){return!1}return!0}},IDP:{AAD:"aad",MSA:"msa"},AccountType:{AAD:"aad",MSA:"msa",MSA_FED:"msaFed"},AuthState:{SignedIn:1,SignedInIdp:2,NotSignedIn:3},Config:Cn.Config||{}});var In=p.onMeControlReadyToLoad;return setTimeout(function(){return In&&In()},0),t.ME=m,t.MEV1=Cn,t.Promise=be,t.SyntheticEvent=S,t.SyntheticEventTarget=I,t.addEventWriter=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];J.push(e),J.sort(function(e,n){return e[2]-n[2]})},t.addStrings=R,t.assertNever=function(e,n){throw E("Never assertion failed: "+n)},t.assign=L,t.batchEvents=z,t.checkIfCDNDomainExists=V,t.createCV=f,t.createError=E,t.createId=T,t.createPartA=ce,t.extendMe=ln,t.fireEvent=se,t.flushEvents=_e,t.getContentJson=function(e){var n={id:e.id,cT:e.type,sN:e.slot,cS:e.source};return JSON.stringify(n,function(e,n){return null==n?void 0:n})},t.getCurrentAccountType=re,t.getCv=s,t.getOptions=l,t.getPageLocation=y,t.getPageTags=ae,t.getPerfEntries=h,t.getRootDomainUrl=j,t.getStartTime=function(){return rn},t.getString=function(e){var n=(x||m.Config.mkt||"en-US").toLowerCase();return k[n]&&k[n][e]||"ERROR: "+e},t.getTime=v,t.getTimeSince=function(e){return e-oe},t.getTimeSinceStart=an,t.guid=U,t.hasOwn=O,t.initialize1DS=Le,t.loadCss=function(e){var n=document,t=n.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(e));var r=l();r&&r.shadowDOMContainerElement&&r.shadowDOMContainerElement.appendChild?r.shadowDOMContainerElement.appendChild(t):(n.head||n.getElementsByTagName("head")[0]).appendChild(t)},t.logTelemetryEvent=Re,t.mapV1ConfigToV2Config=dn,t.mapV1EventsToV2Events=mn,t.mapV1ExtensibleLinksToV2Commands=pn,t.mapV1UserDataToV2Account=gn,t.meImport=Xe,t.perfNow=g,t.requestAnimationFrame=e,t.scrubUrl=Y,t.setCurrentLang=function(e){x=e.toLowerCase()},t.setCv=function(e){u=f(e)},t.setEventCreator=ue,t.setOptions=d,t.setUpTelemetry=ke,t.showHeaderNoJs=cn,t.timeout=Ve,t.toJsonable=function(e){var n={},t=e;return Object.getOwnPropertyNames(e).forEach(function(e){return n[e]=t[e]}),n},t.updateMoment=function(e,n){var t=e?1:0,r=n-t;ne.counts=t+"-"+r,ne.current=e},t.v1UserDataIsUseable=vn,t.w=p,t.writeEvent=K,t}({}),MeControlDefine("meInline",["exports"],function(e){var n=MeControl.WebInline;n.assign(e,n)});
//# sourceMappingURL=meInlineBackCompat.min.js.map