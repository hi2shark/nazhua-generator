import{i as Se,r as T,t as ke,a as de,c as Ve,o as ne,n as ae,u as K,g as $e,b as Te,d as pe,w as Q,e as L,s as Me,f as Ae,E as J,h as k,j as D,k as l,l as me,m as fe,p as _,q as V,F as B,v as W,x as R,T as Ee,y as M,z as F,A as N,B as Z,C as Oe,D as ve,G as he,H}from"./index-CJoBKFWk.js";function ye(e){return $e()?(Te(e),!0):!1}function X(e){return typeof e=="function"?e():K(e)}const De=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pe=Object.prototype.toString,Le=e=>Pe.call(e)==="[object Object]",ge=()=>{};function Ne(e,a){function n(...u){return new Promise((i,m)=>{Promise.resolve(e(()=>a.apply(this,u),{fn:a,thisArg:this,args:u})).then(i).catch(m)})}return n}const be=e=>e();function ze(e=be){const a=T(!0);function n(){a.value=!1}function u(){a.value=!0}const i=(...m)=>{a.value&&e(...m)};return{isActive:de(a),pause:n,resume:u,eventFilter:i}}function Ue(e){return pe()}function Re(...e){if(e.length!==1)return ke(...e);const a=e[0];return typeof a=="function"?de(Ve(()=>({get:a,set:ge}))):T(a)}function je(e,a,n={}){const{eventFilter:u=be,...i}=n;return Q(e,Ne(u,a),i)}function Be(e,a,n={}){const{eventFilter:u,...i}=n,{eventFilter:m,pause:y,resume:d,isActive:p}=ze(u);return{stop:je(e,a,{...i,eventFilter:m}),pause:y,resume:d,isActive:p}}function _e(e,a=!0,n){Ue()?ne(e,n):a?e():ae(e)}function Fe(e=!1,a={}){const{truthyValue:n=!0,falsyValue:u=!1}=a,i=Se(e),m=T(e);function y(d){if(arguments.length)return m.value=d,m.value;{const p=X(n);return m.value=m.value===p?X(u):p,m.value}}return i?y:[m,y]}const q=De?window:void 0;function xe(e){var a;const n=X(e);return(a=n==null?void 0:n.$el)!=null?a:n}function le(...e){let a,n,u,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,u,i]=e,a=q):[a,n,u,i]=e,!a)return ge;Array.isArray(n)||(n=[n]),Array.isArray(u)||(u=[u]);const m=[],y=()=>{m.forEach(f=>f()),m.length=0},d=(f,S,g,t)=>(f.addEventListener(S,g,t),()=>f.removeEventListener(S,g,t)),p=Q(()=>[xe(a),X(i)],([f,S])=>{if(y(),!f)return;const g=Le(S)?{...S}:S;m.push(...n.flatMap(t=>u.map(s=>d(f,t,s,g))))},{immediate:!0,flush:"post"}),x=()=>{p(),y()};return ye(x),x}function We(){const e=T(!1),a=pe();return a&&ne(()=>{e.value=!0},a),e}function Ge(e){const a=We();return L(()=>(a.value,!!e()))}function Ye(e,a={}){const{window:n=q}=a,u=Ge(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const m=T(!1),y=x=>{m.value=x.matches},d=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",y):i.removeListener(y))},p=Ae(()=>{u.value&&(d(),i=n.matchMedia(X(e)),"addEventListener"in i?i.addEventListener("change",y):i.addListener(y),m.value=i.matches)});return ye(()=>{p(),d(),i=void 0}),m}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee="__vueuse_ssr_handlers__",He=Xe();function Xe(){return ee in I||(I[ee]=I[ee]||{}),I[ee]}function Ce(e,a){return He[e]||a}function Ke(e){return Ye("(prefers-color-scheme: dark)",e)}function Je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},se="vueuse-storage";function Qe(e,a,n,u={}){var i;const{flush:m="pre",deep:y=!0,listenToStorageChanges:d=!0,writeDefaults:p=!0,mergeDefaults:x=!1,shallow:f,window:S=q,eventFilter:g,onError:t=w=>{console.error(w)},initOnMounted:s}=u,r=(f?Me:T)(typeof a=="function"?a():a);if(!n)try{n=Ce("getDefaultStorage",()=>{var w;return(w=q)==null?void 0:w.localStorage})()}catch(w){t(w)}if(!n)return r;const v=X(a),$=Je(v),E=(i=u.serializer)!=null?i:qe[$],{pause:z,resume:A}=Be(r,()=>o(r.value),{flush:m,deep:y,eventFilter:g});S&&d&&_e(()=>{n instanceof Storage?le(S,"storage",C):le(S,se,j),s&&C()}),s||C();function c(w,O){if(S){const P={key:e,oldValue:w,newValue:O,storageArea:n};S.dispatchEvent(n instanceof Storage?new StorageEvent("storage",P):new CustomEvent(se,{detail:P}))}}function o(w){try{const O=n.getItem(e);if(w==null)c(O,null),n.removeItem(e);else{const P=E.write(w);O!==P&&(n.setItem(e,P),c(O,P))}}catch(O){t(O)}}function h(w){const O=w?w.newValue:n.getItem(e);if(O==null)return p&&v!=null&&n.setItem(e,E.write(v)),v;if(!w&&x){const P=E.read(O);return typeof x=="function"?x(P,v):$==="object"&&!Array.isArray(P)?{...v,...P}:P}else return typeof O!="string"?O:E.read(O)}function C(w){if(!(w&&w.storageArea!==n)){if(w&&w.key==null){r.value=v;return}if(!(w&&w.key!==e)){z();try{(w==null?void 0:w.newValue)!==E.write(r.value)&&(r.value=h(w))}catch(O){t(O)}finally{w?ae(A):A()}}}}function j(w){C(w.detail)}return r}const Ze="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ie(e={}){const{selector:a="html",attribute:n="class",initialValue:u="auto",window:i=q,storage:m,storageKey:y="vueuse-color-scheme",listenToStorageChanges:d=!0,storageRef:p,emitAuto:x,disableTransition:f=!0}=e,S={auto:"",light:"light",dark:"dark",...e.modes||{}},g=Ke({window:i}),t=L(()=>g.value?"dark":"light"),s=p||(y==null?Re(u):Qe(y,u,m,{window:i,listenToStorageChanges:d})),r=L(()=>s.value==="auto"?t.value:s.value),v=Ce("updateHTMLAttrs",(A,c,o)=>{const h=typeof A=="string"?i==null?void 0:i.document.querySelector(A):xe(A);if(!h)return;const C=new Set,j=new Set;let w=null;if(c==="class"){const P=o.split(/\s/g);Object.values(S).flatMap(b=>(b||"").split(/\s/g)).filter(Boolean).forEach(b=>{P.includes(b)?C.add(b):j.add(b)})}else w={key:c,value:o};if(C.size===0&&j.size===0&&w===null)return;let O;f&&(O=i.document.createElement("style"),O.appendChild(document.createTextNode(Ze)),i.document.head.appendChild(O));for(const P of C)h.classList.add(P);for(const P of j)h.classList.remove(P);w&&h.setAttribute(w.key,w.value),f&&(i.getComputedStyle(O).opacity,document.head.removeChild(O))});function $(A){var c;v(a,n,(c=S[A])!=null?c:A)}function E(A){e.onChanged?e.onChanged(A,$):$(A)}Q(r,E,{flush:"post",immediate:!0}),_e(()=>E(r.value));const z=L({get(){return x?s.value:r.value},set(A){s.value=A}});return Object.assign(z,{store:s,system:t,state:r})}function we(e={}){const{valueDark:a="dark",valueLight:n=""}=e,u=Ie({...e,onChanged:(y,d)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,y==="dark",d,y):d(y)},modes:{dark:a,light:n}}),i=L(()=>u.system.value);return L({get(){return u.value==="dark"},set(y){const d=y?"dark":"light";i.value===d?u.value="auto":u.value=d}})}const te={PEK:{x:1025,y:178,name:"北京",country:"中国"},PVG:{x:1057,y:225,name:"上海",country:"中国"},CKG:{x:1010,y:235,name:"重庆",country:"中国"},TFU:{x:1e3,y:230,name:"成都",country:"中国"},HKG:{x:1039,y:263,name:"香港",country:"中国"},MFM:{x:1035,y:264,name:"澳门",country:"中国"},TPE:{x:1067,y:253,name:"台北",country:"中国"},OSA:{x:1109,y:207,name:"大阪",country:"日本"},TYO:{x:1124,y:199,name:"东京",country:"日本"},SEL:{x:1077,y:198,name:"首尔",country:"韩国"},SIN:{x:1e3,y:354,name:"新加坡",country:"新加坡"},JHB:{x:997,y:350,name:"新山",country:"马来西亚"},KUL:{x:990,y:345,name:"吉隆坡",country:"马来西亚"},HAN:{x:998,y:274,name:"河内",country:"越南"},SGN:{x:1015,y:314,name:"胡志明市",country:"越南"},LAX:{x:95,y:207,name:"洛杉矶",country:"美国"},LAS:{x:98,y:198,name:"拉斯维加斯",country:"美国"},SLC:{x:111,y:189,name:"盐湖城",country:"美国"},SJC:{x:87,y:193,name:"圣何塞",country:"美国"},SEA:{x:118,y:143,name:"西雅图",country:"美国"},MIA:{x:237,y:249,name:"迈阿密",country:"美国"},ORD:{x:233,y:175,name:"芝加哥",country:"美国"},NYC:{x:280,y:179,name:"纽约",country:"美国"},DFW:{x:172,y:211,name:"达拉斯",country:"美国"},ATL:{x:225,y:205,name:"亚特兰大",country:"美国"},HNL:{x:28,y:270,name:"檀香山",country:"美国"},YYZ:{x:267,y:161,name:"多伦多",country:"加拿大"},MEX:{x:158,y:280,name:"墨西哥城",country:"墨西哥"},SCQ:{x:289,y:513,name:"圣地亚哥",country:"智利"},GRU:{x:370,y:473,name:"圣保罗",country:"巴西"},SYD:{x:1167,y:519,name:"悉尼",country:"澳大利亚"},AMS:{x:595,y:125,name:"阿姆斯特丹",country:"荷兰"},LON:{x:571,y:127,name:"伦敦",country:"英国"},FRA:{x:603,y:137,name:"法兰克福",country:"德国"},BER:{x:620,y:130,name:"柏林",country:"德国"},LUX:{x:591,y:140,name:"卢森堡",country:"卢森堡"},CDG:{x:579,y:145,name:"巴黎",country:"法国"},WAW:{name:"华沙",country:"波兰",x:649,y:123},MAD:{name:"马德里",country:"西班牙",x:554,y:180},MXP:{name:"米兰",country:"意大利",x:604,y:153},SVO:{x:704,y:115,name:"莫斯科",country:"俄罗斯"},OTP:{x:673,y:160,name:"布加勒斯特",country:"罗马尼亚"},IST:{x:676,y:176,name:"伊斯坦布尔",country:"土耳其"}},re={SGP:"SIN",ICN:"SEL",NRT:"TYO",HND:"TYO",KIX:"OSA",PAR:"CDG",MOW:"SVO",CHI:"ORD",SHA:"PVG",CAN:"CKG",CTU:"TFU",BJS:"PEK",HK:"HKG",MO:"MFM",TW:"TPE"},ie={CN:"PEK",JP:"TYO",SG:"SIN",KR:"SEL",MY:"KUL",VN:"HAN",TR:"IST",RO:"OTP",LU:"LUX",FR:"CDG",RU:"SVO",DE:"FRA",NL:"AMS",UK:"LON",GB:"LON",AU:"SYD",US:"LAX",CA:"YYZ",MX:"MEX",CL:"SCQ",BR:"GRU",IT:"MXP",ES:"MAD",PL:"WAW"},et=()=>{var e;if((e=crypto)!==null&&e!==void 0&&e.randomUUID)return crypto.randomUUID();let a=new Date().getTime(),n=typeof performance<"u"&&performance.now&&performance.now()*1e3||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,u=>{let i=Math.random()*16;return a>0?(i=(a+i)%16|0,a=Math.floor(a/16)):(i=(n+i)%16|0,n=Math.floor(n/16)),(u==="x"?i:i&3|8).toString(16)})},oe=e=>{const a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.select(),document.execCommand("Copy"),document.body.removeChild(a),e.length<10?J.success(`复制"${e}"成功`):J.success("复制成功")};function tt(){const e=localStorage.getItem("nazhua-custom-location");if(e)try{return JSON.parse(e)}catch{return localStorage.removeItem("nazhua-custom-location"),[]}return[]}function ue(e){e&&localStorage.setItem("nazhua-custom-location",JSON.stringify(e))}const U={isSet(e){return e!=null},isEmpty(e,a=null){let n=!1,u=!1,i=!1;if(a===!0)n=!0;else{const m=a||{};n=m.allEmpty,u=m.objectEmpty,i=m.arrayEmpty}return!!(e==null||e.constructor.name==="String"&&e===""||(n||u)&&e.constructor.name==="Object"&&Object.getOwnPropertyNames(e).length===0||(n||i)&&Array.isArray(e)&&e.length===0)},isObject(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Object"},isNumber(e,a=!1){return a&&typeof e=="string"?!Number.isNaN(Number(e)):typeof e=="number"},hasOwn(e,a){return Object.prototype.hasOwnProperty.call(e,a)}},G=(e,a)=>{const n=e.__vccOpts||e;for(const[u,i]of a)n[u]=i;return n},ot=["title"],nt={__name:"world-map-point",props:{info:{type:Object,default:()=>({})}},emits:["point-tap"],setup(e,{emit:a}){const n=e,u=a,i=T(),m=L(()=>{var p;const d={};return d["--map-point-left"]=`${n.info.left}px`,d["--map-point-top"]=`${n.info.top}px`,(p=n.info)!=null&&p.size&&(d["--map-point-size"]=`${n.info.size}px`),d});function y(){u("point-tap",n.info)}return(d,p)=>{var x,f;return k(),D("div",{ref_key:"pointRef",ref:i,class:me(["world-map-point","world-map-point--"+(((x=e.info)==null?void 0:x.type)||"default")]),style:fe(m.value),title:((f=e.info)==null?void 0:f.label)||"",onClick:y},p[0]||(p[0]=[l("div",{class:"point-block"},null,-1)]),14,ot)}}},at=G(nt,[["__scopeId","data-v-e834ec66"]]),lt={__name:"world-map",props:{width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},locations:{type:Array,default:()=>[]}},emits:["point-coord","select-coord","mouse-coord"],setup(e,{emit:a}){const n=e,u=a,i=T(null),m=we(),y=L(()=>{if(!U.isEmpty(n.width)&&!U.isEmpty(n.height))return{width:1280,height:621};const t=Number(n.width),s=Number(n.height);return!U.isEmpty(n.width)&&U.isEmpty(n.height)?{width:t,height:Math.ceil(621/1280*t)}:U.isEmpty(n.width)&&!U.isEmpty(n.height)?{width:Math.ceil(1280/621*s),height:s}:t/s>1280/621?{width:Math.ceil(s*(1280/621)),height:s}:{width:t,height:Math.ceil(t*(621/1280))}}),d=L(()=>({width:y.value.width/1280,height:y.value.height/621})),p=L(()=>{const t={};return t["--world-map-width"]=`${y.value.width}px`,t["--world-map-height"]=`${y.value.height}px`,t}),x=L(()=>n.locations.map(t=>({...t,key:t.key,left:y.value.width/1280*t.x,top:y.value.height/621*t.y,size:t.size||4,label:t.label})));function f(t){const s=Math.max(Math.round(t.offsetX/d.value.width),0),r=Math.max(Math.round(t.offsetY/d.value.height),0);u("select-coord",{x:s,y:r})}function S(t){const s=Math.max(Math.round(t.offsetX/d.value.width),0),r=Math.max(Math.round(t.offsetY/d.value.height),0);u("mouse-coord",{x:s,y:r})}function g(t){const s={x:t.left-t.size/2,y:t.top-t.size};console.log(s),u("point-coord",s)}return(t,s)=>(k(),D("div",{ref_key:"worldMapImgRef",ref:i,class:"world-map-group",style:fe(p.value),onClick:f,onMousemove:S},[l("div",{class:me(["world-map-img",{"is-dark":K(m)}])},null,2),_(Ee,{name:"point",tag:"div",class:"world-map-point-container"},{default:V(()=>[(k(!0),D(B,null,W(x.value,r=>(k(),R(at,{key:r.key,info:r,onPointTap:g},null,8,["info"]))),128))]),_:1})],36))}},st=G(lt,[["__scopeId","data-v-33b4faad"]]),rt={class:"el-form-group"},it={class:"dialog-footer"},ut={__name:"custom-point-edit-dialog",emits:["success"],setup(e,{expose:a,emit:n}){const u=n,i=T(!1),m=T(null),y=()=>({code:"",name:"",country:"",x:"",y:""}),d=T(y()),p={name:[{required:!0,message:"请输入名称",trigger:["change","blur"]}],code:[{required:!0,message:"请输入唯一编码",trigger:["change","blur"]}],x:[{required:!0,trigger:["change","blur"],validator:(s,r,v)=>U.isEmpty(r)?v(new Error("请输入X轴坐标")):U.isNumber(r)?r<0||r>1280?v(new Error("X轴坐标范围为0-1280")):v():v(new Error("X轴坐标必须为数字值"))}],y:[{required:!0,trigger:["change","blur"],validator:(s,r,v)=>U.isEmpty(r)?v(new Error("请输入Y轴坐标")):U.isNumber(r)?r<0||r>621?v(new Error("Y轴坐标范围为0-621")):v():v(new Error("Y轴坐标必须为数字值"))}]};let x,f,S;function g(){m.value.validate(s=>{if(s){const r=JSON.parse(JSON.stringify(d.value));if(typeof S=="function"&&!S(r))return;u("success",{data:r,info:f,type:x}),i.value=!1}})}function t(s,r,v){x=s,f=r,S=v,d.value=y(),Object.keys(d.value).forEach($=>{U.hasOwn(r,$)&&(d.value[$]=r[$])}),i.value=!0}return a({active:t}),(s,r)=>{const v=M("el-input"),$=M("el-form-item"),E=M("el-form"),z=M("el-button"),A=M("el-dialog");return k(),R(A,{modelValue:i.value,"onUpdate:modelValue":r[6]||(r[6]=c=>i.value=c),title:"自定义地图点",width:"400px","align-center":"","append-to-body":"","destroy-on-close":"","close-on-click-modal":!1},{footer:V(()=>[l("div",it,[_(z,{onClick:r[5]||(r[5]=c=>i.value=!1)},{default:V(()=>r[7]||(r[7]=[F("取 消")])),_:1}),_(z,{type:"primary",onClick:g},{default:V(()=>r[8]||(r[8]=[F(" 确 定 ")])),_:1})])]),default:V(()=>[_(E,{ref_key:"pointFormRef",ref:m,model:d.value,rules:p,"label-width":"80px"},{default:V(()=>[l("div",rt,[_($,{label:"X轴",prop:"x"},{default:V(()=>[_(v,{modelValue:d.value.x,"onUpdate:modelValue":r[0]||(r[0]=c=>d.value.x=c),modelModifiers:{number:!0},type:"number",placeholder:"请输入X轴坐标"},null,8,["modelValue"])]),_:1}),_($,{label:"Y轴",prop:"y","label-width":"50px"},{default:V(()=>[_(v,{modelValue:d.value.y,"onUpdate:modelValue":r[1]||(r[1]=c=>d.value.y=c),modelModifiers:{number:!0},type:"number",placeholder:"请输入Y轴坐标"},null,8,["modelValue"])]),_:1})]),_($,{label:"唯一编码",prop:"code"},{default:V(()=>[_(v,{modelValue:d.value.code,"onUpdate:modelValue":r[2]||(r[2]=c=>d.value.code=c),placeholder:"请输入唯一编码",clearable:""},null,8,["modelValue"])]),_:1}),_($,{label:"地点名称",prop:"name"},{default:V(()=>[_(v,{modelValue:d.value.name,"onUpdate:modelValue":r[3]||(r[3]=c=>d.value.name=c),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),_($,{label:"国家地区",prop:"country"},{default:V(()=>[_(v,{modelValue:d.value.country,"onUpdate:modelValue":r[4]||(r[4]=c=>d.value.country=c),placeholder:"请输入国家地区, 可选",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}},ct=G(ut,[["__scopeId","data-v-5ee884d2"]]),dt={class:"world-map-box"},pt={class:"world-map-and-coord-group"},mt={class:"map-operate"},ft={class:"coord-box"},vt={class:"el-form-group"},ht={class:"coord-temp-list"},yt=["onClick"],gt={class:"location-info"},bt={class:"location-name"},_t={class:"location-operate"},xt=["onClick"],Ct={class:"default-location-group"},wt={class:"operate-box"},St={class:"right-box"},kt={class:"show-default-location-to-map"},Vt={class:"location-list"},$t={class:"location-name"},Tt=["onClick"],Mt={class:"mapping-list"},At=["onClick"],Et={class:"mapping-code"},Ot={class:"mapping-list"},Dt={class:"mapping-alias"},Pt={class:"mapping-code"},Lt={class:"custom-location-group"},Nt={class:"operate-box"},zt={class:"right-box"},Ut={class:"show-custom-location-to-map"},Rt={class:"location-list"},jt={class:"location-item-info"},Bt={class:"location-name"},Ft=["onClick"],Wt={class:"location-item-operate"},Gt=["onClick"],Yt=["onClick"],Ht={__name:"world-map-box",setup(e,{expose:a}){const n=T(1024);function u(c){let o=n.value;c==="zoomIn"?(o+=128,o=Math.min(o,3072)):c==="zoomOut"?(o-=128,o=Math.max(o,1024)):o=1024,n.value=o}const i=T(!0),m=T(!0),y=T(null),d=L(()=>Object.keys(te).map(c=>({...te[c],type:"default",key:c,code:c,size:4,label:`[${c}] - ${te[c].country}，${te[c].name}`}))),p=L(()=>Object.keys(re).map(c=>({alias:c,code:re[c]}))),x=L(()=>Object.keys(ie).map(c=>({alias:c,code:ie[c]}))),f=T(tt()),S=T([]),g=L(()=>{const c=[];return i.value&&c.push(...d.value),c.push(...f.value),c.push(...S.value),c}),t=T({x:0,y:0});function s(c){t.value={x:c.x,y:c.y}}function r(c){t.value={x:c.x,y:c.y},S.value.push({x:c.x,y:c.y,type:"temp",key:et(),size:4,label:`X:${c.x}，Y${c.y}`})}function v(c){S.value=S.value.filter(o=>o.key!==c)}function $(c){y.value.active("add",c,o=>f.value.some(C=>C.code===o.code)?(J.error("编码已存在"),!1):!0)}function E(c){y.value.active("edit",c,o=>f.value.length>1&&f.value.some(C=>C.code===o.code&&C.code!==c.code)?(J.error("编码重复，需要唯一"),!1):!0)}async function z(c){await ve.confirm("确定删除该自定义地点吗？").then(()=>!0).catch(()=>!1)&&(f.value=f.value.filter(h=>h.key!==c),ue(f.value))}function A(c){const{data:o,type:h,info:C}=c;if(h==="add")f.value.push({key:o.code,type:"custom",code:o.code,name:o.name,country:o.country,x:o.x,y:o.y,size:4,label:`[${o.code}] - ${o.country}，${o.name}`}),v(C.key);else if(h==="edit"){const j=f.value.findIndex(w=>w.code===C.code);f.value.splice(j,1,{key:o.code,type:"custom",code:o.code,name:o.name,country:o.country,x:o.x,y:o.y,size:4,label:`[${o.code}] - ${o.country}，${o.name}`})}ue(f.value)}return a({getData(){const c={};return f.value.forEach(o=>{c[o.code]={name:o.name,country:o.country,x:o.x,y:o.y}}),{customCodeMap:c}}}),(c,o)=>{const h=M("el-button"),C=M("el-scrollbar"),j=M("el-input"),w=M("el-form-item"),O=M("el-form"),P=M("el-switch");return k(),D("div",dt,[l("div",pt,[_(C,{style:{width:"1024px",height:"497px"}},{default:V(()=>[_(st,{width:n.value,locations:g.value,onMouseCoord:s,onSelectCoord:r},null,8,["width","locations"]),l("div",mt,[_(h,{type:"primary",size:"small",link:"",onClick:o[0]||(o[0]=b=>u("zoomIn"))},{default:V(()=>o[7]||(o[7]=[F(" 放大 ")])),_:1}),_(h,{type:"success",size:"small",link:"",onClick:o[1]||(o[1]=b=>u("zoomOut"))},{default:V(()=>o[8]||(o[8]=[F(" 缩小 ")])),_:1}),_(h,{type:"default",size:"small",link:"",onClick:o[2]||(o[2]=b=>u("reset"))},{default:V(()=>o[9]||(o[9]=[F(" 默认 ")])),_:1})])]),_:1}),l("div",ft,[o[12]||(o[12]=l("div",{class:"coord-title"},[l("span",null,"坐标记录")],-1)),_(O,null,{default:V(()=>[l("div",vt,[_(w,{label:"X轴"},{default:V(()=>[_(j,{modelValue:t.value.x,"onUpdate:modelValue":o[3]||(o[3]=b=>t.value.x=b)},null,8,["modelValue"])]),_:1}),_(w,{label:"Y轴"},{default:V(()=>[_(j,{modelValue:t.value.y,"onUpdate:modelValue":o[4]||(o[4]=b=>t.value.y=b)},null,8,["modelValue"])]),_:1})])]),_:1}),o[13]||(o[13]=l("p",{class:"tips"}," 点击左侧地图会记录下坐标，点击记录坐标可以创建自定义地点；*隐藏内置地点后更方便戳点点 ",-1)),_(C,{height:"340px"},{default:V(()=>[l("div",ht,[(k(!0),D(B,null,W(S.value,b=>(k(),D("div",{key:b.key,class:"location-item",onClick:Y=>$(b)},[l("div",gt,[o[10]||(o[10]=l("span",{class:"location-icon"},[l("span",{class:"ri-map-pin-5-line"})],-1)),l("span",bt," X:"+N(b.x)+"，Y:"+N(b.y),1)]),l("div",_t,[l("span",{class:"remove-btn",onClick:Z(Y=>v(b.key),["stop"])},o[11]||(o[11]=[l("span",{class:"ri-close-circle-fill"},null,-1)]),8,xt)])],8,yt))),128))])]),_:1})])]),l("div",Ct,[l("div",wt,[o[14]||(o[14]=Oe('<div class="left-box" data-v-b04b3dea><div class="mode-name" data-v-b04b3dea><span class="name-label" data-v-b04b3dea>内置定位地点</span><span class="name-desc" data-v-b04b3dea>仅内置了几个我常见的城市定位，<span class="code-value" data-v-b04b3dea>此颜色</span>的都是可用代码，点击可自动复制（吧</span></div></div>',1)),l("div",St,[l("div",kt,[_(P,{modelValue:i.value,"onUpdate:modelValue":o[5]||(o[5]=b=>i.value=b),size:"small","inline-prompt":"","active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])])])]),l("div",Vt,[(k(!0),D(B,null,W(d.value,b=>(k(),D("div",{key:b.key,class:"location-item"},[o[15]||(o[15]=l("span",{class:"default-point"},[l("span",{class:"point-dot"})],-1)),l("span",$t,N(b.name),1),l("span",{class:"location-code",onClick:Z(Y=>K(oe)(b.code),["stop"])},N(b.code),9,Tt)]))),128))]),o[18]||(o[18]=l("div",{class:"sub-name"},[l("span",null,"别名映射")],-1)),l("div",Mt,[(k(!0),D(B,null,W(p.value,b=>(k(),D("div",{key:b.alias,class:"mapping-item"},[l("span",{class:"mapping-alias",onClick:Z(Y=>K(oe)(b.alias),["stop"])},N(b.alias),9,At),o[16]||(o[16]=l("span",{class:"ri-arrow-right-line"},null,-1)),l("span",Et,N(b.code),1)]))),128))]),o[19]||(o[19]=l("div",{class:"sub-name"},[l("span",null,"国别码默认映射"),l("span",{class:"sub-desc"},"(*没有指定location的节点以此为映射，没有在下面的国别码不显示)")],-1)),l("div",Ot,[(k(!0),D(B,null,W(x.value,b=>(k(),D("div",{key:b.alias,class:"mapping-item"},[l("span",Dt,N(b.alias),1),o[17]||(o[17]=l("span",{class:"ri-arrow-right-line"},null,-1)),l("span",Pt,N(b.code),1)]))),128))])]),l("div",Lt,[l("div",Nt,[o[20]||(o[20]=l("div",{class:"left-box"},[l("div",{class:"mode-name"},[l("span",{class:"name-label"},"自定义地点")])],-1)),l("div",zt,[l("div",Ut,[_(P,{modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=b=>m.value=b),size:"small","inline-prompt":"","active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])])])]),l("div",Rt,[(k(!0),D(B,null,W(f.value,b=>(k(),D("div",{key:b.key,class:"location-item"},[l("div",jt,[o[21]||(o[21]=l("span",{class:"custom-point"},[l("span",{class:"point-dot"})],-1)),l("span",Bt,N(b.name),1),l("span",{class:"location-code",onClick:Z(Y=>K(oe)(b.code),["stop"])},N(b.code),9,Ft)]),l("div",Wt,[l("span",{class:"edit-btn",onClick:Y=>E(b)},o[22]||(o[22]=[l("span",{class:"ri-edit-2-line"},null,-1)]),8,Gt),l("span",{class:"remove-btn",onClick:Y=>z(b.key)},o[23]||(o[23]=[l("span",{class:"ri-close-circle-fill"},null,-1)]),8,Yt)])]))),128))])]),_(ct,{ref_key:"customPointEditDialogRef",ref:y,onSuccess:A},null,512)])}}},Xt=G(Ht,[["__scopeId","data-v-b04b3dea"]]),ce={title:"哪吒监控",freeAmount:"白嫖",infinityCycle:"长期有效",buyBtnText:"购买",customBackgroundImage:"",lightBackground:!1,listServerItemType:"card",listServerStatusType:"progress",listServerRealTimeShowLoad:!1,detailServerStatusType:"progress",serverStatusLinear:!0,disableSarasaTermSC:!1,hideWorldMap:!1,hideHomeWorldMap:!1,hideDetailWorldMap:!1,hideNavbarServerCount:!1,hideNavbarServerStat:!1,hideListItemStatusDonut:!1,hideListItemStat:!1,hideListItemBill:!1,hideFilter:!1,hideTag:!1,hideDotBG:!1,monitorRefreshTime:10,filterGPUKeywords:["Virtual Display"],nezhaVersion:"v1",apiMonitorPath:"/api/v1/monitor/{id}",wsPath:"/ws",nezhaPath:"/nezha/",nezhaV0ConfigType:"servers",v1ApiMonitorPath:"/api/v1/service/{id}",v1WsPath:"/api/v1/ws/server",v1ApiGroupPath:"/api/v1/server-group",v1ApiSettingPath:"/api/v1/setting",v1ApiProfilePath:"/api/v1/profile",v1DashboardUrl:"/dashboard",v1HideNezhaDashboardBtn:!1,routeMode:"h5"},Kt={title:{label:"网站标题",placeholder:"请输入网站标题",remark:"默认显示为“哪吒探针”",type:"input",v1customCode:!0},freeAmount:{label:"免费的叫啥",placeholder:"请输入免费服务的费用名称",remark:"默认显示为“免费”，万一你想叫它“白嫖”呢？",type:"input",v1customCode:!0},buyBtnText:{label:"购买按钮文案",placeholder:"请输入购买按钮文案",remark:"默认显示为“购买”，万一你想叫它“下单”呢？",type:"input",v1customCode:!0},infinityCycle:{label:"无限周期名称",placeholder:"请输入无限周期名称",remark:"默认显示为“长期有效”，万一你想叫它“永久”呢？",type:"input",v1customCode:!0},customBackgroundImage:{label:"自定义背景图片",placeholder:"请输入自定义背景图片地址",remark:"自定义背景图片地址，注意不要太大",type:"input",v1customCode:!0,version:"0.4.23+"},lightBackground:{label:"启用浅色背景",type:"switch",remark:"启用浅色背景，会强制关闭点点背景，配合自定义背景图片使用",v1customCode:!0,version:"0.4.23+"},listServerItemType:{label:"列表项类型",placeholder:"请选择列表项类型",remark:"列表项的显示类型",type:"select",options:[{label:"卡片(card)",value:"card"},{label:"行(row)",value:"row"}],v1customCode:!0,version:"0.4.21+"},listServerStatusType:{label:"列表状态类型",placeholder:"请选择列表状态类型",remark:"列表项的状态类型",type:"select",options:[{label:"圆环饼图(donut) - 默认",value:"donut"},{label:"进度条(progress)",value:"progress"}],v1customCode:!0},listServerRealTimeShowLoad:{label:"列表显示负载",type:"switch",remark:"列表显示显示服务器的负载，启用后会影响网速的显示模块",v1customCode:!0,version:"0.4.13+"},detailServerStatusType:{label:"详情状态类型",placeholder:"请选择详情状态类型",remark:"详情页的状态类型",type:"select",options:[{label:"圆环饼图(donut) - 默认",value:"donut"},{label:"进度条(progress)",value:"progress"}],v1customCode:!0},serverStatusLinear:{label:"状态渐变显示",type:"switch",remark:"状态线性渐变色显示，不勾选则为单色显示",v1customCode:!0,version:"0.4.19+"},disableSarasaTermSC:{label:"禁用内置字体",type:"switch",remark:"禁用Sarasa Term SC字体",v1customCode:!0},hideWorldMap:{label:"隐藏地图",type:"switch",remark:"隐藏地图后，首页和详情页都不会显示地图",v1customCode:!0},hideHomeWorldMap:{label:"首页隐藏地图",type:"switch",v1customCode:!0},hideDetailWorldMap:{label:"详情页隐藏地图",type:"switch",v1customCode:!0},hideNavbarServerCount:{label:"隐藏服务器数量",type:"switch",remark:"隐藏导航栏的服务器数量统计",v1customCode:!0},hideNavbarServerStat:{label:"隐藏服务器统计",type:"switch",remark:"隐藏导航栏的服务器统计信息",v1customCode:!0},hideListItemStatusDonut:{label:"隐藏列表饼图",remark:"隐藏列表项的状态饼图，不影响详情页的状态饼图",type:"switch",v1customCode:!0},hideListItemStat:{label:"隐藏列表统计",remark:"隐藏列表项的统计信息，不影响详情页的统计信息",type:"switch",v1customCode:!0},hideListItemBill:{label:"隐藏列表账单",remark:"隐藏列表项的账单信息，不影响详情页的账单信息",type:"switch",v1customCode:!0},hideFilter:{label:"隐藏筛选",remark:"隐藏列表页的标签和在线/离线筛选功能",type:"switch",v1customCode:!0},hideTag:{label:"隐藏标签",remark:"隐藏列表项的标签筛选功能",type:"switch",v1customCode:!0},hideDotBG:{label:"隐藏点阵背景",type:"switch",remark:"隐藏盒子里面的点阵背景",v1customCode:!0},monitorRefreshTime:{label:"监控刷新时间",placeholder:"请输入监控刷新时间",remark:"监控刷新时间间隔，单位s（秒）, 0为不刷新，为保证不频繁请求源站，最低生效值为10s",type:"input",v1customCode:!0,version:"0.4.8+"},filterGPUKeywords:{label:"GPU过滤关键字",placeholder:"请输入GPU过滤关键字",remark:"按下Enter建(回车)确定关键词；如果GPU名称中包含这些关键字，则过滤掉",type:"input-tag",v1customCode:!0,version:"0.4.9+"},nezhaVersion:{label:"哪吒版本",placeholder:"请选择哪吒版本",remark:"哪吒探针的版本，目前仅支持v0和v1，0.4.13前默认为v0，0.4.13后默认为自动处理",type:"select",options:[{label:"v0 - 默认",value:"v0"},{label:"v1",value:"v1"}]},apiMonitorPath:{label:"监控API地址",placeholder:"请输入网络服务监控API路径",remark:"主要是网络服务那个监控数据的读取，目前只会替换关键词 {id}",type:"input"},wsPath:{label:"WS服务地址",placeholder:"请输入WebSocket服务的路径",remark:"如果ws不可用，无法实时更新数据",type:"input"},nezhaPath:{label:"哪吒主页地址",placeholder:"请输入哪吒的路径",remark:"v0哪吒探针主页的地址，用于异步读取公开的节点信息，如果不可用无法读取“公开备注”",type:"input"},nezhaV0ConfigType:{label:"数据匹配关键词",placeholder:"请输入哪吒v0数据匹配关键词",remark:"v0哪吒主页上的数据匹配关键词，[ServerStatus、Default]主题是 servers，其它是 initData",type:"input",options:[{label:"servers",value:"servers",remark:"ServerStatus、Default主题"},{label:"initData",value:"initData",remark:"其它主题"}]},v1ApiMonitorPath:{label:"v1监控API地址",placeholder:"请输入v1网络服务监控API路径",remark:"主要是网络服务那个监控数据的读取，目前只会替换关键词 {id}",type:"input"},v1WsPath:{label:"v1WS服务地址",placeholder:"请输入v1WebSocket服务的路径",remark:"如果ws不可用，无法实时更新数据",type:"input"},v1ApiGroupPath:{label:"v1服务器组API地址",placeholder:"请输入v1服务器组API路径",remark:"v1版本的服务器组API",type:"input"},v1ApiSettingPath:{label:"v1设置API地址",placeholder:"请输入v1设置API路径",remark:"v1版本的设置API",type:"input"},v1ApiProfilePath:{label:"v1用户信息地址",placeholder:"请输入v1用户信息API路径",remark:"v1版本的用户信息API",type:"input"},v1DashboardUrl:{label:"v1控制台地址",placeholder:"请输入v1控制台地址",remark:"v1版本的控制台地址，默认为 /dashboard",type:"input",v1customCode:!0},v1HideNezhaDashboardBtn:{label:"隐藏控制台按钮",type:"switch",remark:"隐藏导航栏的控制台入口/登录按钮",v1customCode:!0},routeMode:{label:"路由模式",placeholder:"请选择路由模式",remark:"默认为h5，如果是hash模式，需要后端支持",type:"select",options:[{label:"h5",value:"h5",remark:"H5路由模式"},{label:"hash",value:"hash",remark:"Hash路由模式"}]}};function Jt(){const e=localStorage.getItem("nazhua-custom-config");if(e)try{return JSON.parse(e)}catch{return localStorage.removeItem("nazhua-custom-config"),{}}return{}}function qt(e){e&&localStorage.setItem("nazhua-custom-config",JSON.stringify(e))}const Qt={class:"config-box"},Zt={class:"nezha-v1-dashboard-custom-code-group"},It={class:"label-group"},eo=["title"],to={class:"config-el-form-item-group"},oo={class:"enable-config-switch"},no={class:"config-el-form-item-group--content"},ao={class:"autocomplete-option"},lo={class:"value"},so={class:"desc"},ro={key:0,class:"config-el-form-item--remark"},io={__name:"config-box",setup(e,{expose:a}){const n=he(),u=T({}),i=T([]),m=T({}),y=L({get:()=>n.state.v1CustomCode,set:g=>{n.commit("SET_V1_CUSTOM_CODE",g)}});function d(){const g={},t=[];Object.keys(ce).forEach(s=>{const r=Kt[s];r&&(g[s]=ce[s],m.value[s]=!1,t.push({prop:s,...r}))}),u.value=g,i.value=t}let p=null;function x(){p&&clearTimeout(p);const g={formData:u.value,enable:m.value};p=setTimeout(()=>{qt(g)},1e3)}let f=!1;Q([u,m],()=>{f&&x()},{deep:!0});async function S(){await ve.confirm("确定要还原默认配置吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>!0).catch(()=>!1)&&(f=!1,d(),ae(()=>{f=!0}))}return ne(()=>{d();const g=Jt();g&&(Object.keys((g==null?void 0:g.formData)||{}).forEach(t=>{U.hasOwn(m.value,t)&&(u.value[t]=g.formData[t])}),Object.keys((g==null?void 0:g.enable)||{}).forEach(t=>{U.hasOwn(m.value,t)&&(m.value[t]=g.enable[t])})),f=!0}),a({getData(){const g={};return i.value.forEach(t=>{y.value&&!t.v1customCode||m.value[t.prop]&&(g[t.prop]=u.value[t.prop])}),g}}),(g,t)=>{const s=M("el-switch"),r=M("el-autocomplete"),v=M("el-input"),$=M("el-input-tag"),E=M("el-option"),z=M("el-select"),A=M("el-form-item"),c=M("el-button"),o=M("el-form");return k(),D("div",Qt,[l("span",Zt,[t[1]||(t[1]=l("span",null,"是否用于哪吒V1控制台自定义代码？",-1)),_(s,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=h=>y.value=h),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])]),_(o,{model:u.value,"label-width":"150px"},{default:V(()=>[(k(!0),D(B,null,W(i.value,h=>(k(),D(B,{key:h.prop},[!y.value||h.v1customCode?(k(),R(A,{key:0,label:h.label,prop:h.prop},{label:V(()=>[l("div",It,[l("span",null,N(h.label),1),h.version?(k(),D("span",{key:0,class:"support-version",title:`支持版本：${h.version}`},N(h.version),9,eo)):H("",!0)])]),default:V(()=>[l("div",to,[l("div",oo,[_(s,{modelValue:m.value[h.prop],"onUpdate:modelValue":C=>m.value[h.prop]=C,"inline-prompt":"","active-text":"启用","inactive-text":"禁用"},null,8,["modelValue","onUpdate:modelValue"])]),l("div",no,[h.type==="input"&&h.options?(k(),R(r,{key:0,modelValue:u.value[h.prop],"onUpdate:modelValue":C=>u.value[h.prop]=C,placeholder:h.placeholder,"fetch-suggestions":h.options},{default:V(({item:C})=>[l("div",ao,[l("div",lo,N(C.value),1),l("span",so,N(C.label)+N(C.remark),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","fetch-suggestions"])):h.type==="input"?(k(),R(v,{key:1,modelValue:u.value[h.prop],"onUpdate:modelValue":C=>u.value[h.prop]=C,clearable:"",placeholder:h.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):h.type==="input-tag"?(k(),R($,{key:2,modelValue:u.value[h.prop],"onUpdate:modelValue":C=>u.value[h.prop]=C,clearable:"",placeholder:h.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):h.type==="select"?(k(),R(z,{key:3,modelValue:u.value[h.prop],"onUpdate:modelValue":C=>u.value[h.prop]=C,clearable:"",placeholder:h.placeholder},{default:V(()=>[(k(!0),D(B,null,W(h.options,C=>(k(),R(E,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):h.type==="switch"?(k(),R(s,{key:4,modelValue:u.value[h.prop],"onUpdate:modelValue":C=>u.value[h.prop]=C},null,8,["modelValue","onUpdate:modelValue"])):H("",!0)]),h.remark?(k(),D("div",ro," Tips: "+N(h.remark),1)):H("",!0)])]),_:2},1032,["label","prop"])):H("",!0)],64))),128)),_(A,null,{default:V(()=>[_(c,{type:"warning",onClick:S},{default:V(()=>t[2]||(t[2]=[F(" 还原默认配置 ")])),_:1})]),_:1})]),_:1},8,["model"])])}}},uo=G(io,[["__scopeId","data-v-8de41912"]]),co={class:"export-box"},po={class:"config-box"},mo={class:"config-textarea-box"},fo={class:"config-textarea-operate"},vo={class:"left-box"},ho={class:"right-box"},yo={__name:"export-box",props:{refreshData:{type:Function,default:()=>{}}},setup(e,{expose:a}){const n=e,u=he(),i=L(()=>u.state.v1CustomCode),m=T(!1),y=T(),d=T(""),p={ArrayToString:void 0,ObjectToString:void 0};p.ArrayToString=(t,s="")=>{let r=`[
`;return t.forEach(v=>{var $,E;if(Array.isArray(v)){r+=`${s}  ${($=p==null?void 0:p.ArrayToString)==null?void 0:$.call(p,v,`${s}  `)},
`;return}if(typeof v=="object"){r+=`${s}  ${(E=p==null?void 0:p.ObjectToString)==null?void 0:E.call(p,v,`${s}  `)},
`;return}typeof v=="string"&&(v=`'${v}'`),typeof v=="boolean"&&(v=v?"true":"false"),!(typeof v>"u")&&(r+=`${s}  ${v},
`)}),r+=`${s}]`,r},p.ObjectToString=(t,s="")=>{let r=`{
`;return Object.entries(t).forEach(([v,$])=>{var z,A;let E=$;if(Array.isArray($)){r+=`${s}  ${v}: ${(z=p==null?void 0:p.ArrayToString)==null?void 0:z.call(p,E,`${s}  `)},
`;return}if(typeof $=="object"){r+=`${s}  ${v}: ${(A=p==null?void 0:p.ObjectToString)==null?void 0:A.call(p,E,`${s}  `)},
`;return}typeof $=="string"&&(E=`'${$}'`),typeof $=="boolean"&&(E=$?"true":"false"),!(typeof $>"u")&&(r+=`${s}  ${v}: ${E},
`)}),r+=`${s}}`,r};function x(t){y.value=t;const s=p.ObjectToString(t);i.value?d.value=`<script>
window.$mergeNazhuaConfig && window.$mergeNazhuaConfig(${s});
&lt;/script>`.replace("&lt;/","</"):d.value=`window.$$nazhuaConfig = ${s};`,m.value=!1,setTimeout(()=>{m.value=!0},300)}function f(){const t=document.createElement("textarea");t.value=d.value,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),J.success("复制成功")}function S(){const t=new Blob([d.value],{type:"text/plain"}),s=URL.createObjectURL(t),r=document.createElement("a");r.href=s,r.download="config.js",r.click(),URL.revokeObjectURL(s)}function g(){var s;const t=(s=n==null?void 0:n.refreshData)==null?void 0:s.call(n);t&&x(t)}return Q(()=>i.value,()=>{g()}),a({setData(t){x(t)}}),(t,s)=>{const r=M("highlightjs"),v=M("el-button");return k(),D("div",co,[l("div",po,[l("div",mo,[m.value?(k(),R(r,{key:0,language:"js",code:d.value},null,8,["code"])):H("",!0)]),l("div",fo,[l("div",vo,[_(v,{type:"success",plain:"",onClick:f},{default:V(()=>s[0]||(s[0]=[F(" 复制内容 ")])),_:1}),i.value?H("",!0):(k(),R(v,{key:0,type:"primary",plain:"",onClick:S},{default:V(()=>s[1]||(s[1]=[F(" 下载文件 ")])),_:1}))]),l("div",ho,[_(v,{type:"danger",plain:"",onClick:g},{default:V(()=>s[2]||(s[2]=[F(" 重载配置 ")])),_:1})])])])])}}},go=G(yo,[["__scopeId","data-v-b0e006d3"]]),bo={class:"home-page"},_o={class:"home-header"},xo={class:"home-header-container container"},Co={class:"right-box"},wo={class:"mode-switch"},So={class:"home-container container"},ko={__name:"home",setup(e){const a=T("mapPoint"),n=T(null),u=T(null),i=T(null),m=T(we());function y(){var S,g,t,s;const x=(g=(S=n.value)==null?void 0:S.getData)==null?void 0:g.call(S),f=(s=(t=u.value)==null?void 0:t.getData)==null?void 0:s.call(t);return x!=null&&x.customCodeMap&&Object.keys(x.customCodeMap).length&&(f.customCodeMap=x==null?void 0:x.customCodeMap),f}function d(){var x,f;a.value==="exportConfig"&&((f=(x=i.value)==null?void 0:x.setData)==null||f.call(x,y()))}function p(){Fe()}return(x,f)=>{const S=M("el-switch"),g=M("el-tab-pane"),t=M("el-tabs");return k(),D("div",bo,[l("div",_o,[l("div",xo,[f[3]||(f[3]=l("div",{class:"left-box"},[l("h1",{class:"site-name"},"Nazhua配置生成器")],-1)),l("div",Co,[l("div",wo,[_(S,{modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=s=>m.value=s),"inline-prompt":"","active-text":"Dark","inactive-text":"Light",onChange:p},null,8,["modelValue"])]),f[2]||(f[2]=l("a",{class:"github-link",href:"https://github.com/hi2shark/nazhua",_target:"blank"}," 源代码(Github) ",-1))])])]),l("div",So,[_(t,{modelValue:a.value,"onUpdate:modelValue":f[1]||(f[1]=s=>a.value=s),onTabChange:d},{default:V(()=>[_(g,{label:"地图坐标拾取",name:"mapPoint"},{default:V(()=>[_(Xt,{ref_key:"worldMapBoxRef",ref:n},null,512)]),_:1}),_(g,{label:"自定义配置",name:"customConfig"},{default:V(()=>[_(uo,{ref_key:"configBoxRef",ref:u},null,512)]),_:1}),_(g,{label:"导出配置",name:"exportConfig"},{default:V(()=>[_(go,{ref_key:"exportBoxRef",ref:i,"refresh-data":y},null,512)]),_:1})]),_:1},8,["modelValue"])])])}}},$o=G(ko,[["__scopeId","data-v-1b5e4161"]]);export{$o as default};
