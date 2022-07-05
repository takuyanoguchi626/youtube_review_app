(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00911116"],{"0433":function(e,t,n){"use strict";n("4b7f")},"04d1":function(e,t,n){var i=n("342f"),r=i.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},"11d3":function(e,t,n){},"4b7f":function(e,t,n){},"4e82":function(e,t,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),d=n("a640"),h=n("04d1"),p=n("d998"),f=n("2d00"),m=n("512c"),v=[],g=r(v.sort),_=r(v.push),w=u((function(){v.sort(void 0)})),I=u((function(){v.sort(null)})),y=d("sort"),b=!u((function(){if(f)return f<70;if(!(h&&h>3)){if(p)return!0;if(m)return m<603;var e,t,n,i,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)v.push({k:t+i,v:n})}for(v.sort((function(e,t){return t.v-e.v})),i=0;i<v.length;i++)t=v[i].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),k=w||!I||!y||!b,T=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:c(t)>c(n)?1:-1}};i({target:"Array",proto:!0,forced:k},{sort:function(e){void 0!==e&&s(e);var t=o(this);if(b)return void 0===e?g(t):g(t,e);var n,i,r=[],c=a(t);for(i=0;i<c;i++)i in t&&_(r,t[i]);l(r,T(e)),n=r.length,i=0;while(i<n)t[i]=r[i++];while(i<c)delete t[i++];return t}})},"512c":function(e,t,n){var i=n("342f"),r=i.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},"53c8":function(e,t,n){"use strict";n("11d3")},5504:function(e,t,n){},"7db0":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},addb:function(e,t,n){var i=n("4dae"),r=Math.floor,s=function(e,t){var n=e.length,c=r(n/2);return n<8?o(e,t):a(e,s(i(e,0,c),t),s(i(e,c),t),t)},o=function(e,t){var n,i,r=e.length,s=1;while(s<r){i=s,n=e[s];while(i&&t(e[i-1],n)>0)e[i]=e[--i];i!==s++&&(e[i]=n)}return e},a=function(e,t,n,i){var r=t.length,s=n.length,o=0,a=0;while(o<r||a<s)e[o+a]=o<r&&a<s?i(t[o],n[a])<=0?t[o++]:n[a++]:o<r?t[o++]:n[a++];return e};e.exports=s},d998:function(e,t,n){var i=n("342f");e.exports=/MSIE|Trident/.test(i)},ec27:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contain"},[e.flag?n("div",[n("img",{staticClass:"gif",attrs:{src:"/img/18905401_MotionElements_transition-10_converted_481357-640x360-3s-q2.gif"}})]):e._e(),e.flag?e._e():n("div",[n("div",{staticClass:"top"},[n("img",{staticClass:"top-image",attrs:{src:"/img/topImage.gif"}}),e._m(0),n("span",{staticClass:"review-counts"},[e._v(e._s(e.reviewCounts.toLocaleString())),n("span",{staticClass:"span1"},[e._v(" 件レビューが投稿されています！")])]),n("div",{staticClass:"register-user"},[n("p",{staticClass:"p1"},[e._v("会員登録はこちらから！")]),n("button",{staticClass:"button1",attrs:{type:"button"},on:{click:e.moveToRegister}},[e._m(1)]),n("p",{staticClass:"p2"},[e._v("外部サービスで登録する")]),n("Google"),e._m(2),n("Twitter")],1)]),n("h4",{staticClass:"subtitle"},[e._v("急上昇動画")]),n("div",{staticClass:"sample"},[n("div",{staticClass:"soaring-videos"},e._l(e.top5Videos,(function(t){return n("div",{key:t.id},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.id,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("router-link",{attrs:{to:"/videoDetail/"+t.id}},[n("div",{staticClass:"video-title"},[e._v(e._s(t.title))])]),n("div",{staticClass:"channel-title1"},[e._v(e._s(t.channelTitle))]),n("div",[e._v("投稿日："+e._s(t.formatPublishedAt))])],1)})),0)]),n("div",{staticClass:"background"},[n("h4",{staticClass:"subtitle"},[e._v("人気のアカウント")]),n("div",{staticClass:"item-area"},e._l(e.recommendationAccountList,(function(t,i){return n("div",{key:i,staticClass:"item col card white popular-account"},[n("div",{staticClass:"account-top"},[n("router-link",{attrs:{to:"/myProfile/"+t.id}},[n("img",{staticClass:"account-img circle responsive-img",attrs:{src:t.img}})]),n("div",{staticClass:"account-right"},[n("div",{staticClass:"account-name"},[e._v(e._s(t.name))]),n("div",[e._v("レビュー数："+e._s(t.reviewList.length)+"件")])])],1),n("div",{staticClass:"account-bottom"},e._l(e.videoThumnails[i],(function(e,t){return n("div",{key:t},[n("img",{staticClass:"review",attrs:{src:e.videos.thumbnailsUrl}})])})),0)])})),0)]),n("h4",{staticClass:"subtitle"},[e._v("おすすめYoutuber")]),n("div",{staticClass:"item-area"},e._l(e.recommendationYoutuberList,(function(t,i){return n("div",{key:i,staticClass:"popular-youtuber"},[n("router-link",{attrs:{to:"/channelDetail/"+t.id}},[n("div",[n("img",{staticClass:"img_wrap",attrs:{src:t.thumbnailsUrl}})])]),n("div",{staticClass:"channel-title2"},[e._v(e._s(t.title))])],1)})),0)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"count"},[n("img",{staticClass:"number-box",attrs:{src:"/img/numberBox.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"small material-icons"},[e._v("ondemand_video")]),e._v(" 今すぐ登録する    >>")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button3 btn",attrs:{type:"button"}},[n("img",{staticClass:"button-icon",attrs:{src:"/img/f_logo_RGB-White_58.png"}}),n("span",[e._v(" Facebookで登録")])])}],s=n("b85c"),o=n("5530"),a=n("1da1"),c=n("d4ec"),u=n("bee2"),l=n("262e"),d=n("2caf"),h=(n("96cf"),n("7db0"),n("d3b7"),n("d81d"),n("4e82"),n("b0c0"),n("a4d3"),n("e01a"),n("9ab4")),p=n("1b40"),f=n("1519"),m=n("155d"),v=n("a88f"),g=n("1c8c"),_=n("dc59"),w=n("0829"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/top"}},[n("button",{staticClass:"button4 btn",attrs:{type:"button"},on:{click:e.onClick}},[n("img",{staticClass:"button-icon",attrs:{src:"/img/2021 Twitter logo - white.png"}}),n("span",[e._v(" Twitterでログイン")])])])],1)},y=[],b=(n("a9e3"),n("1fd5")),k=n("589b");function T(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var O=n("e691"),R=n("22e5");function E(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C=E,A=new b["b"]("auth","Firebase",E()),S=new O["b"]("@firebase/auth");function N(e,...t){S.logLevel<=O["a"].ERROR&&S.error(`Auth (${k["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,...t){throw D(e,...t)}function P(e,...t){return D(e,...t)}function U(e,t,n){const i=Object.assign(Object.assign({},C()),{[t]:n}),r=new b["b"]("auth","Firebase",i);return r.create(t,{appName:e.name})}function j(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&L(e,"argument-error"),U(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function D(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return A.create(e,...t)}function M(e,t,...n){if(!e)throw D(t,...n)}function x(e){const t="INTERNAL ASSERTION FAILED: "+e;throw N(t),new Error(t)}function F(e,t){e||x(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=new Map;function W(e){F(e instanceof Function,"Expected a class definition");let t=V.get(e);return t?(F(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,V.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){const n=Object(k["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(b["h"])(i,null!==t&&void 0!==t?t:{}))return e;L(e,"already-initialized")}const i=n.initialize({options:t});return i}function z(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(W);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function q(){return"http:"===K()||"https:"===K()}function K(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(q()||Object(b["l"])()||"connection"in navigator))||navigator.onLine}function J(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.shortDelay=e,this.longDelay=t,F(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(b["q"])()||Object(b["r"])()}get(){return G()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){F(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Q=new B(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function te(e,t,n,i,r={}){return ne(e,r,async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Object(b["v"])(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),X.fetch()(re(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function ne(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Z),t);try{const t=new se(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw oe(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw oe(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw oe(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw U(e,a,o);L(e,a)}}catch(r){if(r instanceof b["c"])throw r;L(e,"network-request-failed")}}async function ie(e,t,n,i,r={}){const s=await te(e,t,n,i,r);return"mfaPendingCredential"in s&&L(e,"multi-factor-auth-required",{_serverResponse:s}),s}function re(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Y(e.config,r):`${e.config.apiScheme}://${r}`}class se{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(P(this.auth,"network-request-failed")),Q.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oe(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=P(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){return te(e,"POST","/v1/accounts:delete",t)}async function ce(e,t){return te(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e,t=!1){const n=Object(b["j"])(e),i=await n.getIdToken(t),r=he(i);M(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"===typeof r.firebase?r.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:r,token:i,authTime:ue(de(r.auth_time)),issuedAtTime:ue(de(r.iat)),expirationTime:ue(de(r.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function de(e){return 1e3*Number(e)}function he(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return N("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(b["d"])(n);return e?JSON.parse(e):(N("Failed to decode base64 JWT payload"),null)}catch(r){return N("Caught error parsing JWT payload as JSON",r),null}}function pe(e){const t=he(e);return M(t,"internal-error"),M("undefined"!==typeof t.exp,"internal-error"),M("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof b["c"]&&me(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function me({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ue(this.lastLoginAt),this.creationTime=ue(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e){var t;const n=e.auth,i=await e.getIdToken(),r=await fe(e,ce(n,{idToken:i}));M(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ye(s.providerUserInfo):[],a=Ie(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ge(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function we(e){const t=Object(b["j"])(e);await _e(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ie(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ye(e){return e.map(e=>{var{providerId:t}=e,n=T(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(e,t){const n=await ne(e,{},async()=>{const n=Object(b["v"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=re(e,i,"/v1/token","key="+r),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",X.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M("undefined"!==typeof e.idToken,"internal-error"),M("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):pe(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await be(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ke;return n&&(M("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(M("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(M("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ke,this.toJSON())}_performRefresh(){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){M("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Oe{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=T(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ve(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ge(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await fe(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return le(this,e)}reload(){return we(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await _e(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fe(this,ae(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:w,isAnonymous:I,providerData:y,stsTokenManager:b}=t;M(_&&b,e,"internal-error");const k=ke.fromJSON(this.name,b);M("string"===typeof _,e,"internal-error"),Te(l,e.name),Te(d,e.name),M("boolean"===typeof w,e,"internal-error"),M("boolean"===typeof I,e,"internal-error"),Te(h,e.name),Te(p,e.name),Te(f,e.name),Te(m,e.name),Te(v,e.name),Te(g,e.name);const T=new Oe({uid:_,auth:e,email:d,emailVerified:w,displayName:l,isAnonymous:I,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:k,createdAt:v,lastLoginAt:g});return y&&Array.isArray(y)&&(T.providerData=y.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ke;i.updateFromServerResponse(t);const r=new Oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await _e(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Re.type="NONE";const Ee=Re;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t,n){return`firebase:${e}:${t}:${n}`}class Ae{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ce(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ce("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ae(W(Ee),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||W(Ee);const s=Ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=Oe._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(c){}})),new Ae(r,e,n)):new Ae(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ue(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(Me(t))return"Webos";if(Le(t))return"Safari";if((t.includes("chrome/")||Pe(t))&&!t.includes("edge/"))return"Chrome";if(je(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Ne(e=Object(b["k"])()){return/firefox\//i.test(e)}function Le(e=Object(b["k"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pe(e=Object(b["k"])()){return/crios\//i.test(e)}function Ue(e=Object(b["k"])()){return/iemobile/i.test(e)}function je(e=Object(b["k"])()){return/android/i.test(e)}function De(e=Object(b["k"])()){return/blackberry/i.test(e)}function Me(e=Object(b["k"])()){return/webos/i.test(e)}function xe(e=Object(b["k"])()){return/iphone|ipad|ipod/i.test(e)}function Fe(e=Object(b["k"])()){var t;return xe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ve(){return Object(b["o"])()&&10===document.documentMode}function We(e=Object(b["k"])()){return xe(e)||je(e)||Me(e)||De(e)||/windows phone/i.test(e)||Ue(e)}function He(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t=[]){let n;switch(e){case"Browser":n=Se(Object(b["k"])());break;case"Worker":n=`${Se(Object(b["k"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${k["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ke(this),this.idTokenSubscription=new Ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=W(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ae.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _e(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(b["j"])(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(W(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new b["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&W(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Ae.create(this,[W(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return M(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ze(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function qe(e){return Object(b["j"])(e)}class Ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(b["g"])(e=>this.observer=e)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return x("not implemented")}_getIdTokenResponse(e){return x("not implemented")}_linkToIdToken(e,t){return x("not implemented")}_getReauthenticationResolver(e){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return te(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Be(e,t){return ie(e,"POST","/v1/accounts:signInWithPassword",ee(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ye(e,t){return ie(e,"POST","/v1/accounts:signInWithEmailLink",ee(e,t))}async function Xe(e,t){return ie(e,"POST","/v1/accounts:signInWithEmailLink",ee(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ge{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Be(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:L(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{idToken:t,email:this._email,oobCode:this._password});default:L(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return ie(e,"POST","/v1/accounts:signInWithIdp",ee(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Ge{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):L("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=T(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new tt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(b["v"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return te(e,"POST","/v1/accounts:sendVerificationCode",ee(e,t))}async function it(e,t){return ie(e,"POST","/v1/accounts:signInWithPhoneNumber",ee(e,t))}async function rt(e,t){const n=await ie(e,"POST","/v1/accounts:signInWithPhoneNumber",ee(e,t));if(n.temporaryProof)throw oe(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return ie(e,"POST","/v1/accounts:signInWithPhoneNumber",ee(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Ge{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return it(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new at({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=Object(b["w"])(Object(b["i"])(e))["link"],n=t?Object(b["w"])(Object(b["i"])(t))["deep_link_id"]:null,i=Object(b["w"])(Object(b["i"])(e))["deep_link_id"],r=i?Object(b["w"])(Object(b["i"])(i))["link"]:null;return r||i||n||t||e}class lt{constructor(e){var t,n,i,r,s,o;const a=Object(b["w"])(Object(b["i"])(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=ct(null!==(i=a["mode"])&&void 0!==i?i:null);M(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return M(n,"argument-error"),Ze._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends pt{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(i){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends pt{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends pt{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return gt.credential(t,n)}catch(i){return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com",gt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Oe._fromIdTokenResponse(e,n,i),s=wt(n),o=new _t({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=wt(n);return new _t({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function wt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends b["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new It(e,t,n,i)}}function yt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw It._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(e,t,n=!1){const i=await fe(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await fe(e,yt(i,r,t,e),n);M(s.idToken,i,"internal-error");const o=he(s.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(e.uid===a,i,"user-mismatch"),_t._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&L(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(e,t,n=!1){const i="signIn",r=await yt(e,i,t),s=await _t._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e,t){return te(e,"POST","/v2/accounts/mfaEnrollment:start",ee(e,t))}function Rt(e,t){return te(e,"POST","/v2/accounts/mfaEnrollment:finalize",ee(e,t))}new WeakMap;const Et="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){const e=Object(b["k"])();return Le(e)||xe(e)}const St=1e3,Nt=10;class Lt extends Ct{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=At()&&He(),this.fallbackToPolling=We(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ve()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},St)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lt.type="LOCAL";const Pt=Lt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ct{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ut.type="SESSION";const jt=Ut;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Mt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await Dt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.receivers=[];class Ft{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=xt("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function Wt(e){Vt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return"undefined"!==typeof Vt()["WorkerGlobalScope"]&&"function"===typeof Vt()["importScripts"]}async function zt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function qt(){return Ht()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="firebaseLocalStorageDb",Gt=1,Jt="firebaseLocalStorage",Bt="fbase_key";class Yt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xt(e,t){return e.transaction([Jt],t?"readwrite":"readonly").objectStore(Jt)}function Zt(){const e=indexedDB.deleteDatabase(Kt);return new Yt(e).toPromise()}function Qt(){const e=indexedDB.open(Kt,Gt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Jt,{keyPath:Bt})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Jt)?t(n):(n.close(),await Zt(),t(await Qt()))})})}async function en(e,t,n){const i=Xt(e,!0).put({[Bt]:t,value:n});return new Yt(i).toPromise()}async function tn(e,t){const n=Xt(e,!1).get(t),i=await new Yt(n).toPromise();return void 0===i?null:i.value}function nn(e,t){const n=Xt(e,!0).delete(t);return new Yt(n).toPromise()}const rn=800,sn=3;class on{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>sn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ht()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mt._getInstance(qt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zt(),!this.activeServiceWorker)return;this.sender=new Ft(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qt();return await en(e,Et,"1"),await nn(e,Et),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>en(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>tn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Xt(e,!1).getAll();return new Yt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}on.type="LOCAL";const an=on;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){return te(e,"POST","/v2/accounts/mfaSignIn:start",ee(e,t))}function un(e,t){return te(e,"POST","/v2/accounts/mfaSignIn:finalize",ee(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function dn(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=P("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ln().appendChild(i)})}function hn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
hn("rcb"),new B(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="recaptcha";async function fn(e,t,n){var i;const r=await n.verify();try{let s;if(M("string"===typeof r,e,"argument-error"),M(n.type===pn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){M("enroll"===t.type,e,"internal-error");const n=await Ot(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{M("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;M(n,e,"missing-multi-factor-info");const o=await cn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.providerId=mn.PROVIDER_ID,this.auth=qe(e)}verifyPhoneNumber(e,t){return fn(this.auth,e,Object(b["j"])(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mn.credentialFromTaggedObject(t)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e,t){return t?W(t):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.PROVIDER_ID="phone",mn.PHONE_SIGN_IN_METHOD="phone";class gn extends Ge{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _n(e){return Tt(e.auth,new gn(e),e.bypassAuthState)}function wn(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),kt(n,new gn(e),e.bypassAuthState)}async function In(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),bt(n,new gn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _n;case"linkViaPopup":case"linkViaRedirect":return In;case"reauthViaPopup":case"reauthViaRedirect":return wn;default:L(this.auth,"internal-error")}}resolve(e){F(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){F(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new B(2e3,1e4);async function kn(e,t,n){const i=qe(e);j(e,t,ht);const r=vn(i,n),s=new Tn(i,"signInViaPopup",t,r);return s.executeNotNull()}class Tn extends yn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){F(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(P(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(P(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(P(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,bn.get())};e()}}Tn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On="pendingRedirect",Rn=new Map;class En extends yn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Rn.get(this.auth._key());if(!e){try{const t=await Cn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Rn.set(this.auth._key(),e)}return this.bypassAuthState||Rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Cn(e,t){const n=Sn(t),i=An(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function An(e){return W(e._redirectPersistence)}function Sn(e){return Ce(On,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t,n=!1){const i=qe(e),r=vn(i,t),s=new En(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln=6e5;class Pn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!jn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(P(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ln&&this.cachedEventUids.clear(),this.cachedEventUids.has(Un(e))}saveEventToCache(e){this.cachedEventUids.add(Un(e)),this.lastProcessedEventTime=Date.now()}}function Un(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function jn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Dn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t={}){return te(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fn=/^https?/;async function Vn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Mn(e);for(const i of t)try{if(Wn(i))return}catch(n){}L(e,"unauthorized-domain")}function Wn(e){const t=$(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Fn.test(n))return!1;if(xn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new B(3e4,6e4);function zn(){const e=Vt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise((t,n)=>{var i,r,s;function o(){zn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zn(),n(P(e,"network-request-failed"))},timeout:Hn.get()})}if(null===(r=null===(i=Vt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vt().gapi)||void 0===s?void 0:s.load)){const t=hn("iframefcb");return Vt()[t]=()=>{gapi.load?o():n(P(e,"network-request-failed"))},dn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw qn=null,e})}let qn=null;function Kn(e){return qn=qn||$n(e),qn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new B(5e3,15e3),Jn="__/auth/iframe",Bn="emulator/auth/iframe",Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zn(e){const t=e.config;M(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Y(t,Bn):`https://${e.config.authDomain}/${Jn}`,i={apiKey:t.apiKey,appName:e.name,v:k["a"]},r=Xn.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Object(b["v"])(i).slice(1)}`}async function Qn(e){const t=await Kn(e),n=Vt().gapi;return M(n,e,"internal-error"),t.open({where:document.body,url:Zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=P(e,"network-request-failed"),s=Vt().setTimeout(()=>{i(r)},Gn.get());function o(){Vt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ti=500,ni=600,ii="_blank",ri="http://localhost";class si{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function oi(e,t,n,i=ti,r=ni){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ei),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Object(b["k"])().toLowerCase();n&&(a=Pe(u)?ii:n),Ne(u)&&(t=t||ri,c.scrollbars="yes");const l=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Fe(u)&&"_self"!==a)return ai(t||"",a),new si(null);const d=window.open(t||"",a,l);M(d,e,"popup-blocked");try{d.focus()}catch(h){}return new si(d)}function ai(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="__/auth/handler",ui="emulator/auth/handler";function li(e,t,n,i,r,s){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:k["a"],eventId:r};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Object(b["n"])(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof pt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${di(e)}?${Object(b["v"])(a).slice(1)}`}function di({config:e}){return e.emulator?Y(e,ui):`https://${e.authDomain}/${ci}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="webStorageSupport";class pi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jt,this._completeRedirectFn=Nn}async _openPopup(e,t,n,i){var r;F(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=li(e,t,n,$(),i);return oi(e,s,xt())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Wt(li(e,t,n,$(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(F(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Qn(e),n=new Pn(e);return t.register("authEvent",t=>{M(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(hi,{type:hi},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[hi];void 0!==r&&t(!!r),L(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return We()||Le()||xe()}}const fi=pi;class mi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return x("unexpected MultiFactorSessionType")}}}class vi extends mi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new vi(e)}_finalizeEnroll(e,t,n){return Rt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return un(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gi{constructor(){}static assertion(e){return vi._fromCredential(e)}}gi.FACTOR_ID="phone";var _i="@firebase/auth",wi="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bi(e){Object(k["c"])(new R["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),M(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ze(e)},a=new $e(t,i,r);return z(a,n),a})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(k["c"])(new R["a"]("auth-internal",e=>{const t=qe(e.getProvider("auth").getImmediate());return(e=>new Ii(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(k["g"])(_i,wi,yi(e)),Object(k["g"])(_i,wi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e=Object(k["e"])()){const t=Object(k["b"])(e,"auth");return t.isInitialized()?t.getImmediate():H(e,{popupRedirectResolver:fi,persistence:[an,Pt,jt]})}bi("Browser");var Ti=n("e71f"),Oi={name:"Signin",data:function(){return{userName:"",photoURL:"",newAccount:[],accountList:[],accountLastId:0,createdAt:"",currentUserId:0}},methods:{onClick:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,i,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.currentUserId=this.$store.getters.getCurrentUserId,0===this.currentUserId){e.next=4;break}return alert("ログアウトしてください"),e.abrupt("return");case 4:return t=new gt,n=ki(),e.next=8,kn(n,t).then((function(e){var t=gt.credentialFromResult(e),n=(t.accessToken,t.secret,e.user);n?(console.log(e.user),s.userName=e.user.displayName,s.photoURL=e.user.photoURL,s.createdAt=e.user.metadata.createdAt):alert("有効なアカウントではありません")})).catch((function(e){alert("error")}));case 8:i=0,console.log(this.createdAt),r=0;case 11:if(!(r<this.accountList.length)){e.next=21;break}if(this.accountList[r].mailaddless!==this.createdAt){e.next=18;break}return i=this.accountList[r].id,console.log(i),this.$store.commit("addCurrentUserId",this.accountList[r]),this.$router.push("/myProfile/".concat(i)),e.abrupt("return");case 18:r++,e.next=11;break;case 21:0===this.accountLastId?(this.newAccount=new v["a"](1,this.userName,"",this.photoURL,this.createdAt,"","passwordpeirghowfowdkfmowdifowkfowdifhs",[],[]),i=this.newAccount.id,this.$store.commit("addCurrentUserId",this.newAccount)):(this.newAccount=new v["a"](this.accountLastId+1,this.userName,"",this.photoURL,this.createdAt,"","passwordpeirghowfowdkfmowdifowkfowdifhs",[],[]),i=this.newAccount.id,this.$store.commit("addCurrentUserId",this.newAccount));try{Object(Ti["e"])(Object(Ti["b"])(_["a"],"アカウントラストID","アカウントラストID"),{accountLastId:Number(i)})}catch(o){console.error("Error adding document: ",o)}try{Object(Ti["e"])(Object(Ti["b"])(_["a"],"アカウント一覧",String(i)),{id:this.newAccount.id,name:this.newAccount.name,introduction:this.newAccount.introduction,img:this.newAccount.img,mailaddless:this.newAccount.mailaddless,telephone:this.newAccount.telephone,password:this.newAccount.password,favoriteChannelList:[],reviewList:[]})}catch(o){console.error("Error adding document: ",o)}case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this,t=Object(Ti["a"])(_["a"],"アカウント一覧");Object(Ti["d"])(t,(function(t){var n,i=t.docs.map((function(e){return Object(o["a"])({},e.data())})),r=Object(s["a"])(i);try{for(r.s();!(n=r.n()).done;){var a,c=n.value,u=[],l=Object(s["a"])(c.favoriteChannelList);try{for(l.s();!(a=l.n()).done;){var d=a.value;u.push(new m["a"](d.id,d.title,d.description,d.publishedAt,d.thumbnailsUrl,d.viewCount,d.subscriberCount,d.videoCount))}}catch(I){l.e(I)}finally{l.f()}var h,p=[],_=Object(s["a"])(c.reviewList);try{for(_.s();!(h=_.n()).done;){var w=h.value;p.push(new g["a"](w.reviewDate,w.reviewId,w.accountId,new f["a"](w.videos.id,w.videos.publishedAt,w.videos.title,w.videos.description,w.videos.thumbnailsUrl,w.videos.channelTitle,w.videos.viewCount),w.evaluation,w.review,w.favoriteCount))}}catch(I){_.e(I)}finally{_.f()}e.accountList.push(new v["a"](c.id,c.name,c.introduction,c.img,c.mailaddless,c.telephone,c.password,u,p))}}catch(I){r.e(I)}finally{r.f()}})),Object(Ti["d"])(Object(Ti["b"])(_["a"],"アカウントラストID","アカウントラストID"),(function(t){e.accountLastId=Object(o["a"])({},t.data()).accountLastId}))}},Ri=Oi,Ei=(n("0433"),n("2877")),Ci=Object(Ei["a"])(Ri,I,y,!1,null,"c882245c",null),Ai=Ci.exports,Si=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/top"}},[n("button",{staticClass:"button2 btn",attrs:{type:"button"},on:{click:e.onClick}},[n("img",{staticClass:"button-icon",attrs:{src:"/img/google.png"}}),n("span",[e._v(" Googleでログイン")])])])],1)},Ni=[],Li={name:"Google",data:function(){return{userName:"",email:"",photoURL:"",newAccount:[],accountList:[],accountLastId:0,currentUserId:0}},methods:{onClick:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,i,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.currentUserId=this.$store.getters.getCurrentUserId,0===this.currentUserId){e.next=4;break}return alert("ログアウトしてください"),e.abrupt("return");case 4:return t=new mt,n=ki(),e.next=8,kn(n,t).then((function(e){console.log(e),s.userName=e.user.displayName,s.email=e.user.email,s.photoURL=e.user.photoURL}),(function(e){alert("ログインに失敗しました")}));case 8:console.log(this.userName+"/"+this.email+"/"+this.photoURL),console.log(this.accountList),i=0,r=0;case 12:if(!(r<this.accountList.length)){e.next=22;break}if(this.accountList[r].mailaddless!==this.email){e.next=19;break}return i=this.accountList[r].id,console.log(i),this.$store.commit("addCurrentUserId",this.accountList[r]),this.$router.push("/myProfile/".concat(i)),e.abrupt("return");case 19:r++,e.next=12;break;case 22:0===this.accountLastId?(this.newAccount=new v["a"](1,this.userName,"",this.photoURL,this.email,"","passwordpeirghowfowdkfmowdifowkfowdifhs",[],[]),i=this.newAccount.id,this.$store.commit("addCurrentUserId",this.newAccount)):(this.newAccount=new v["a"](this.accountLastId+1,this.userName,"",this.photoURL,this.email,"","passwordpeirghowfowdkfmowdifowkfowdifhs",[],[]),i=this.newAccount.id,this.$store.commit("addCurrentUserId",this.newAccount));try{Object(Ti["e"])(Object(Ti["b"])(_["a"],"アカウントラストID","アカウントラストID"),{accountLastId:Number(i)})}catch(o){console.error("Error adding document: ",o)}try{Object(Ti["e"])(Object(Ti["b"])(_["a"],"アカウント一覧",String(i)),{id:this.newAccount.id,name:this.newAccount.name,introduction:this.newAccount.introduction,img:this.newAccount.img,mailaddless:this.newAccount.mailaddless,telephone:this.newAccount.telephone,password:this.newAccount.password,favoriteChannelList:[],reviewList:[]})}catch(o){console.error("Error adding document: ",o)}case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this,t=Object(Ti["a"])(_["a"],"アカウント一覧");Object(Ti["d"])(t,(function(t){var n,i=t.docs.map((function(e){return Object(o["a"])({},e.data())})),r=Object(s["a"])(i);try{for(r.s();!(n=r.n()).done;){var a,c=n.value,u=[],l=Object(s["a"])(c.favoriteChannelList);try{for(l.s();!(a=l.n()).done;){var d=a.value;u.push(new m["a"](d.id,d.title,d.description,d.publishedAt,d.thumbnailsUrl,d.viewCount,d.subscriberCount,d.videoCount))}}catch(I){l.e(I)}finally{l.f()}var h,p=[],_=Object(s["a"])(c.reviewList);try{for(_.s();!(h=_.n()).done;){var w=h.value;p.push(new g["a"](w.reviewDate,w.reviewId,w.accountId,new f["a"](w.videos.id,w.videos.publishedAt,w.videos.title,w.videos.description,w.videos.thumbnailsUrl,w.videos.channelTitle,w.videos.viewCount),w.evaluation,w.review,w.favoriteCount))}}catch(I){_.e(I)}finally{_.f()}e.accountList.push(new v["a"](c.id,c.name,c.introduction,c.img,c.mailaddless,c.telephone,c.password,u,p))}}catch(I){r.e(I)}finally{r.f()}})),Object(Ti["d"])(Object(Ti["b"])(_["a"],"アカウントラストID","アカウントラストID"),(function(t){e.accountLastId=Object(o["a"])({},t.data()).accountLastId}))}},Pi=Li,Ui=(n("f81b"),Object(Ei["a"])(Pi,Si,Ni,!1,null,"512b9216",null)),ji=Ui.exports,Di=function(e){Object(l["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.soaringVideos=[],e.top5Videos=[],e.youtubersInfo=[],e.recommendationYoutuberList=Array(),e.recommendationAccountList=Array(),e.flag=!0,e.reviewCounts=0,e.videoThumnails=Array(),e.accountList=Array(),e}return Object(u["a"])(n,[{key:"created",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,i,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=function(e){var t=window.pageYOffset,n=e/t>1?10:100,i=e/t*n,r=setInterval(s,i);function s(){t=window.pageYOffset,0===t?clearInterval(r):scrollBy(0,-n)}},t(1),e.next=4,this.$store.dispatch("getSoaringVideos");case 4:if(!e.sent){e.next=8;break}this.flag=!0,e.next=14;break;case 8:for(this.flag=!1,this.soaringVideos=this.$store.getters.getSoaringVideosInfo,this.top5Videos.push(this.soaringVideos[0],this.soaringVideos[1],this.soaringVideos[2],this.soaringVideos[3],this.soaringVideos[4]),this.youtubersInfo=this.$store.getters.getYoutubersInfo,n=function(e){var t=a.youtubersInfo[Math.floor(Math.random()*a.youtubersInfo.length)];void 0===a.recommendationYoutuberList.find((function(e){return e.id===t.id}))&&a.recommendationYoutuberList.push(t)},i=1;this.recommendationYoutuberList.length<5;i++)n(i);case 14:r=Object(w["a"])(_["a"],"アカウント一覧"),Object(w["d"])(r,(function(e){var t,n=e.docs.map((function(e){return Object(o["a"])({},e.data())})),i=Object(s["a"])(n);try{for(i.s();!(t=i.n()).done;){var r,c=t.value,u=Array(),l=Object(s["a"])(c.favoriteChannelList);try{for(l.s();!(r=l.n()).done;){var d=r.value;u.push(new m["a"](d.id,d.title,d.description,d.publishedAt,d.thumbnailsUrl,d.viewCount,d.subscriberCount,d.videoCount))}}catch(T){l.e(T)}finally{l.f()}var h,p=Array(),_=Object(s["a"])(c.reviewList);try{for(_.s();!(h=_.n()).done;){var w=h.value;p.push(new g["a"](w.reviewDate,w.reviewId,w.accountId,new f["a"](w.videos.id,w.videos.publishedAt,w.videos.title,w.videos.description,w.videos.thumbnailsUrl,w.videos.channelTitle,w.videos.viewCount),w.evaluation,w.review,w.favoriteCount))}}catch(T){_.e(T)}finally{_.f()}a.accountList.push(new v["a"](c.id,c.name,c.introduction,c.img,c.mailaddless,c.telephone,c.password,u,p))}}catch(T){i.e(T)}finally{i.f()}for(var I=0,y=0;y<a.accountList.length;y++)I+=a.accountList[y].reviewList.length;a.reviewCounts=I,a.accountList.sort((function(e,t){return t.reviewList.length<e.reviewList.length?-1:t.reviewList.length>e.reviewList.length?1:0})),a.recommendationAccountList[0]=a.accountList[0],a.recommendationAccountList[1]=a.accountList[1],a.recommendationAccountList[2]=a.accountList[2];for(var b=0;b<=2;b++)for(var k=0;k<=2;k++)void 0!==a.recommendationAccountList[b]&&void 0!==a.recommendationAccountList[b].reviewList[k]&&(void 0===a.videoThumnails[b]?a.videoThumnails.push([a.recommendationAccountList[b].reviewList[k]]):a.videoThumnails[b].push(a.recommendationAccountList[b].reviewList[k]))}));case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"moveToRegister",value:function(){this.$router.push("/registerUser")}}]),n}(p["b"]);Di=Object(h["a"])([Object(p["a"])({components:{Twitter:Ai,Google:ji}})],Di);var Mi=Di,xi=Mi,Fi=(n("53c8"),Object(Ei["a"])(xi,i,r,!1,null,"33bcc371",null));t["default"]=Fi.exports},f81b:function(e,t,n){"use strict";n("5504")}}]);
//# sourceMappingURL=chunk-00911116.e3a0910d.js.map