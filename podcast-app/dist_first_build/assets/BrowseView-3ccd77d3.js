import{_ as z,r as T,v as Pe,K as De,w as L,x as O,y as w,u as v,Y as te,Z as we,A as b,L as N,C as P,z as ue,N as Q,$ as Fe,M as ie,a0 as $e,p as se,m as rt,n as ne,q as ot,Q as it,a1 as Be,c as k,s as de,F as H,e as at,a2 as lt,a3 as ct,G as ut,o as dt,I as Z,b as he,i as ht,S as ft,B as X,a as Ie,O as mt,P as gt}from"./index-60f7ff30.js";import{u as Ne,a as vt}from"./VMenu-ec599dc0.js";import{V as q,q as Y,s as Oe,y as _t,t as pt,r as je,a as Ge,g as yt,w as wt,p as re,x as xt,z as Mt,A as St,B as It,M as Et,C as Ct}from"./VCard-ba4fbd38.js";import{V as fe,a as Ee,L as At}from"./LoadingIndicator-b03dcd89.js";import{V as bt}from"./VForm-6f524c26.js";import{V as Tt,c as kt,d as Vt}from"./VTextField-bcce73b8.js";import{V as Lt}from"./VToolbar-d540fa48.js";import{V as Ce}from"./VContainer-f69f8121.js";const Rt={__name:"PreviewCard",props:["id","title","description","seasons","image","genres","updated"],emits:["genreSelected"],setup(e,{emit:t}){const s=e,n={1:"Personal Growth",2:"True Crime and Investigative Journalism",3:"History",4:"Comedy",5:"Entertainment",6:"Business",7:"Fiction",8:"News",9:"Kids and Family"},r=d=>{const f=d.target.innerText,_=Object.keys(n).find(p=>n[p]===f);t("genreSelected",_)},i=new Date(s.updated),o=i.getDate().toString().padStart(2,"0"),a=(i.getMonth()+1).toString().padStart(2,"0"),l=i.getFullYear();let c=T(!1);const u=()=>{c.value=!c.value},{currentShowId:h}=Pe(Ne()),m=()=>{h.value=s.id};return(d,f)=>{const _=De("router-link");return L(),O(je,{width:"300",height:"600",onClick:m,onMouseenter:u,onMouseleave:u},{default:w(()=>[v(q,{src:e.image,height:"50%",cover:""},{default:w(()=>[v(_,{to:"/show"},{default:w(()=>[te(v(Y,{class:"playButton",density:"default",icon:"mdi-play",size:"x-large"},null,512),[[we,b(c)]])]),_:1})]),_:1},8,["src"]),v(Oe,null,{default:w(()=>[N(P(e.title),1)]),_:1}),v(_t,null,{default:w(()=>[v(fe,null,{default:w(()=>[N(P(e.seasons)+" SEASONS",1)]),_:1}),N(" UPDATED "+P(b(o))+"/"+P(b(a))+"/"+P(b(l)),1)]),_:1}),v(pt,{class:"line-clamp"},{default:w(()=>[N(P(e.description),1)]),_:1}),(L(!0),ue(Q,null,Fe(s.genres,(p,y)=>(L(),O(fe,{onClick:r,key:y},{default:w(()=>[N(P(n[p]),1)]),_:2},1024))),128))]),_:1})}}},Pt=z(Rt,[["__scopeId","data-v-a9607d8f"]]);const Dt={__name:"FilterToolbar",emits:["filtersApplied"],setup(e,{emit:t}){let s=["All Genres","Personal Growth","True Crime and Investigative Journalism","History","Comedy","Entertainment","Business","Fiction","News","Kids and Family"],n=["Unsorted","Alphabetical (A to Z)","Alphabetical (Z to A)","Date updated (earliest first)","Date updated (latest first)"],r=T("Unsorted"),i=T(""),o=T("All Genres");const a=l=>{l.preventDefault();const c={sortType:r.value,filterString:i.value,selectedGenre:o.value};t("filtersApplied",c)};return(l,c)=>(L(),O(Lt,null,{default:w(()=>[v(bt,{onSubmit:a},{default:w(()=>[v(Ee,{class:"formItem",modelValue:b(r),"onUpdate:modelValue":c[0]||(c[0]=u=>ie(r)?r.value=u:r=u),label:"Sort By",items:b(n)},null,8,["modelValue","items"]),v(Ee,{class:"formItem",modelValue:b(o),"onUpdate:modelValue":c[1]||(c[1]=u=>ie(o)?o.value=u:o=u),label:`Select
      Genre`,items:b(s)},null,8,["modelValue","items"]),v(Tt,{class:"formItem",modelValue:b(i),"onUpdate:modelValue":c[2]||(c[2]=u=>ie(i)?i.value=u:i=u),label:"Filter By Show Title"},null,8,["modelValue"]),v(Y,{class:"formItem",type:"submit",variant:"outlined"},{default:w(()=>[N("Apply Filters")]),_:1})]),_:1})]),_:1}))}},Ft=z(Dt,[["__scopeId","data-v-6bdadde7"]]);const $t={__name:"RecommendedCard",props:["showData"],setup(e){const t=e;let s=T(!1);const n=()=>{s.value=!s.value},{currentShowId:r}=Pe(Ne()),i=()=>{r.value=t.showData.id};return(o,a)=>{const l=De("router-link");return L(),O(je,{width:"400",height:"500",onClick:i,onEnter:n,onMouseleave:n},{default:w(()=>[v(Oe,null,{default:w(()=>[N(P(t.showData.title),1)]),_:1}),v(fe,null,{default:w(()=>[N(P(t.showData.seasons)+" SEASONS",1)]),_:1}),v(q,{src:t.showData.image,width:"100%",cover:""},{default:w(()=>[v(l,{to:"/show"},{default:w(()=>[te(v(Y,{class:"playButton",density:"default",icon:"mdi-play",size:"x-large"},null,512),[[we,b(s)]])]),_:1})]),_:1},8,["src"])]),_:1})}}},ae=z($t,[["__scopeId","data-v-2d22859f"]]);const Bt=e=>{const{touchstartX:t,touchendX:s,touchstartY:n,touchendY:r}=e,i=.5,o=16;e.offsetX=s-t,e.offsetY=r-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&s<t-o&&e.left(e),e.right&&s>t+o&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&r<n-o&&e.up(e),e.down&&r>n+o&&e.down(e))};function Nt(e,t){var n;const s=e.changedTouches[0];t.touchstartX=s.clientX,t.touchstartY=s.clientY,(n=t.start)==null||n.call(t,{originalEvent:e,...t})}function Ot(e,t){var n;const s=e.changedTouches[0];t.touchendX=s.clientX,t.touchendY=s.clientY,(n=t.end)==null||n.call(t,{originalEvent:e,...t}),Bt(t)}function jt(e,t){var n;const s=e.changedTouches[0];t.touchmoveX=s.clientX,t.touchmoveY=s.clientY,(n=t.move)==null||n.call(t,{originalEvent:e,...t})}function Gt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:s=>Nt(s,t),touchend:s=>Ot(s,t),touchmove:s=>jt(s,t)}}function Wt(e,t){var a;const s=t.value,n=s!=null&&s.parent?e.parentElement:e,r=(s==null?void 0:s.options)??{passive:!0},i=(a=t.instance)==null?void 0:a.$.uid;if(!n||!i)return;const o=Gt(t.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=o,$e(o).forEach(l=>{n.addEventListener(l,o[l],r)})}function Ht(e,t){var i,o;const s=(i=t.value)!=null&&i.parent?e.parentElement:e,n=(o=t.instance)==null?void 0:o.$.uid;if(!(s!=null&&s._touchHandlers)||!n)return;const r=s._touchHandlers[n];$e(r).forEach(a=>{s.removeEventListener(a,r[a])}),delete s._touchHandlers[n]}const We={mounted:Wt,unmounted:Ht},Yt=We,He=Symbol.for("vuetify:v-window"),Ye=Symbol.for("vuetify:v-window-group"),Ke=se({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...Ge(),...yt(),...rt()},"VWindow"),Ae=ne()({name:"VWindow",directives:{Touch:We},props:Ke(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{themeClasses:n}=ot(e),{isRtl:r}=it(),{t:i}=Be(),o=wt(e,Ye),a=T(),l=k(()=>r.value?!e.reverse:e.reverse),c=de(!1),u=k(()=>{const x=e.direction==="vertical"?"y":"x",C=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${x}${C}-transition`}),h=de(0),m=T(void 0),d=k(()=>o.items.value.findIndex(x=>o.selected.value.includes(x.id)));H(d,(x,I)=>{const C=o.items.value.length,E=C-1;C<=2?c.value=x<I:x===E&&I===0?c.value=!0:x===0&&I===E?c.value=!1:c.value=x<I}),at(He,{transition:u,isReversed:c,transitionCount:h,transitionHeight:m,rootRef:a});const f=k(()=>e.continuous||d.value!==0),_=k(()=>e.continuous||d.value!==o.items.value.length-1);function p(){f.value&&o.prev()}function y(){_.value&&o.next()}const M=k(()=>{const x=[],I={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,ariaLabel:i("$vuetify.carousel.prev")};x.push(f.value?s.prev?s.prev({props:I}):v(Y,I,null):v("div",null,null));const C={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,ariaLabel:i("$vuetify.carousel.next")};return x.push(_.value?s.next?s.next({props:C}):v(Y,C,null):v("div",null,null)),x}),S=k(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?p():y()},right:()=>{l.value?y():p()},start:I=>{let{originalEvent:C}=I;C.stopPropagation()}},...e.touch===!0?{}:e.touch});return re(()=>te(v(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var x,I;return[v("div",{class:"v-window__container",style:{height:m.value}},[(x=s.default)==null?void 0:x.call(s,{group:o}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[M.value])]),(I=s.additional)==null?void 0:I.call(s,{group:o})]}}),[[lt("touch"),S.value]])),{group:o}}}),Kt=se({color:String,cycle:Boolean,delimiterIcon:{type:ct,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Ke({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Xt=ne()({name:"VCarousel",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const n=ut(e,"modelValue"),{t:r}=Be(),i=T();let o=-1;H(n,l),H(()=>e.interval,l),H(()=>e.cycle,c=>{c?l():window.clearTimeout(o)}),dt(a);function a(){!e.cycle||!i.value||(o=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function l(){window.clearTimeout(o),window.requestAnimationFrame(a)}return re(()=>{const[c]=Ae.filterProps(e);return v(Ae,Z({ref:i},c,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:he(e.height)},e.style]}),{default:s.default,additional:u=>{let{group:h}=u;return v(Q,null,[!e.hideDelimiters&&v("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&v(xt,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((m,d)=>{const f={id:`carousel-item-${m.id}`,"aria-label":r("$vuetify.carousel.ariaLabel.delimiter",d+1,h.items.value.length),class:[h.isSelected(m.id)&&"v-btn--active"],onClick:()=>h.select(m.id,!0)};return s.item?s.item({props:f,item:m}):v(Y,Z(m,f),null)})]})]),e.progress&&v(Mt,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(n.value)+1)/h.items.value.length*100},null)])},prev:s.prev,next:s.next})}),{}}}),Xe=se({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Ge(),...St(),...kt()},"VWindowItem"),be=ne()({name:"VWindowItem",directives:{Touch:Yt},props:Xe(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:s}=t;const n=ht(He),r=It(e,Ye),{isBooted:i}=vt();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=de(!1),a=k(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var f;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=he((f=n.rootRef.value)==null?void 0:f.clientHeight)),n.transitionCount.value+=1)}function u(){l()}function h(f){o.value&&ft(()=>{!a.value||!o.value||!n||(n.transitionHeight.value=he(f.clientHeight))})}const m=k(()=>{const f=n.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof f!="string"?n.transition.value:f,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:u,onEnter:h}:!1}),{hasContent:d}=Vt(e,r.isSelected);return re(()=>v(Et,{transition:m.value,disabled:!i.value},{default:()=>{var f;return[te(v("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[d.value&&((f=s.default)==null?void 0:f.call(s))]),[[we,r.isSelected.value]])]}})),{}}}),zt=se({...Ct(),...Xe()},"VCarouselItem"),le=ne()({name:"VCarouselItem",inheritAttrs:!1,props:zt(),setup(e,t){let{slots:s,attrs:n}=t;re(()=>{const[r]=q.filterProps(e),[i]=be.filterProps(e);return v(be,Z({class:"v-carousel-item"},i),{default:()=>[v(q,Z(n,r),s)]})})}}),Ut={className:"cardContainer"},Jt={className:"cardContainer"},Qt={className:"cardContainer"},Zt={__name:"RecommendedCarousel",props:["recommended"],setup(e){const t=e;return(s,n)=>(L(),O(Xt,{height:"600"},{default:w(()=>[v(le,null,{default:w(()=>[X("div",Ut,[v(ae,{showData:t.recommended[0]},null,8,["showData"])])]),_:1}),v(le,null,{default:w(()=>[X("div",Jt,[v(ae,{showData:t.recommended[1]},null,8,["showData"])])]),_:1}),v(le,null,{default:w(()=>[X("div",Qt,[v(ae,{showData:t.recommended[2]},null,8,["showData"])])]),_:1})]),_:1}))}},qt=z(Zt,[["__scopeId","data-v-84a150ae"]]);function D(e){return Array.isArray?Array.isArray(e):Je(e)==="[object Array]"}const es=1/0;function ts(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-es?"-0":t}function ss(e){return e==null?"":ts(e)}function R(e){return typeof e=="string"}function ze(e){return typeof e=="number"}function ns(e){return e===!0||e===!1||rs(e)&&Je(e)=="[object Boolean]"}function Ue(e){return typeof e=="object"}function rs(e){return Ue(e)&&e!==null}function A(e){return e!=null}function ce(e){return!e.trim().length}function Je(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const os="Incorrect 'index' type",is=e=>`Invalid value for key ${e}`,as=e=>`Pattern length exceeds max of ${e}.`,ls=e=>`Missing ${e} property in key`,cs=e=>`Property 'weight' in key '${e}' must be a positive integer`,Te=Object.prototype.hasOwnProperty;class us{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=Qe(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Qe(e){let t=null,s=null,n=null,r=1,i=null;if(R(e)||D(e))n=e,t=ke(e),s=me(e);else{if(!Te.call(e,"name"))throw new Error(ls("name"));const o=e.name;if(n=o,Te.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(cs(o));t=ke(o),s=me(o),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function ke(e){return D(e)?e:e.split(".")}function me(e){return D(e)?e.join("."):e}function ds(e,t){let s=[],n=!1;const r=(i,o,a)=>{if(A(i))if(!o[a])s.push(i);else{let l=o[a];const c=i[l];if(!A(c))return;if(a===o.length-1&&(R(c)||ze(c)||ns(c)))s.push(ss(c));else if(D(c)){n=!0;for(let u=0,h=c.length;u<h;u+=1)r(c[u],o,a+1)}else o.length&&r(c,o,a+1)}};return r(e,R(t)?t.split("."):t,0),n?s:s[0]}const hs={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},fs={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ms={location:0,threshold:.6,distance:100},gs={useExtendedSearch:!1,getFn:ds,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...fs,...hs,...ms,...gs};const vs=/[^ ]+/g;function _s(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(vs).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*e),a=parseFloat(Math.round(o*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class xe{constructor({getFn:t=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=_s(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,R(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();R(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!A(t)||ce(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(t):this.getFn(t,r.path);if(A(o)){if(D(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(A(u))if(R(u)&&!ce(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else D(u)&&u.forEach((h,m)=>{l.push({nestedArrIndex:m,value:h})})}n.$[i]=a}else if(R(o)&&!ce(o)){let a={v:o,n:this.norm.get(o)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Ze(e,t,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const r=new xe({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(Qe)),r.setSources(t),r.create(),r}function ps(e,{getFn:t=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new xe({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function J(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const o=t/e.length;if(i)return o;const a=Math.abs(n-s);return r?o+a/r:a?1:o}function ys(e=[],t=g.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=e.length;i<o;i+=1){let a=e[i];a&&n===-1?n=i:!a&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const G=32;function ws(e,t,s,{location:n=g.location,distance:r=g.distance,threshold:i=g.threshold,findAllMatches:o=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:c=g.ignoreLocation}={}){if(t.length>G)throw new Error(as(G));const u=t.length,h=e.length,m=Math.max(0,Math.min(n,h));let d=i,f=m;const _=a>1||l,p=_?Array(h):[];let y;for(;(y=e.indexOf(t,f))>-1;){let E=J(t,{currentLocation:y,expectedLocation:m,distance:r,ignoreLocation:c});if(d=Math.min(E,d),f=y+u,_){let F=0;for(;F<u;)p[y+F]=1,F+=1}}f=-1;let M=[],S=1,x=u+h;const I=1<<u-1;for(let E=0;E<u;E+=1){let F=0,$=x;for(;F<$;)J(t,{errors:E,currentLocation:m+$,expectedLocation:m,distance:r,ignoreLocation:c})<=d?F=$:x=$,$=Math.floor((x-F)/2+F);x=$;let Me=Math.max(1,m-$+1),oe=o?h:Math.min(m+$,h)+u,W=Array(oe+2);W[oe+1]=(1<<E)-1;for(let V=oe;V>=Me;V-=1){let U=V-1,Se=s[e.charAt(U)];if(_&&(p[U]=+!!Se),W[V]=(W[V+1]<<1|1)&Se,E&&(W[V]|=(M[V+1]|M[V])<<1|1|M[V+1]),W[V]&I&&(S=J(t,{errors:E,currentLocation:U,expectedLocation:m,distance:r,ignoreLocation:c}),S<=d)){if(d=S,f=U,f<=m)break;Me=Math.max(1,2*m-f)}}if(J(t,{errors:E+1,currentLocation:m,expectedLocation:m,distance:r,ignoreLocation:c})>d)break;M=W}const C={isMatch:f>=0,score:Math.max(.001,S)};if(_){const E=ys(p,a);E.length?l&&(C.indices=E):C.isMatch=!1}return C}function xs(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class qe{constructor(t,{location:s=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(m,d)=>{this.chunks.push({pattern:m,alphabet:xs(m),startIndex:d})},h=this.pattern.length;if(h>G){let m=0;const d=h%G,f=h-d;for(;m<f;)u(this.pattern.substr(m,G),m),m+=G;if(d){const _=h-G;u(this.pattern.substr(_),_)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let f={isMatch:!0,score:0};return n&&(f.indices=[[0,t.length-1]]),f}const{location:r,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,m=!1;this.chunks.forEach(({pattern:f,alphabet:_,startIndex:p})=>{const{isMatch:y,score:M,indices:S}=ws(t,f,_,{location:r+p,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});y&&(m=!0),h+=M,y&&S&&(u=[...u,...S])});let d={isMatch:m,score:m?h/this.chunks.length:1};return m&&n&&(d.indices=u),d}}class j{constructor(t){this.pattern=t}static isMultiMatch(t){return Ve(t,this.multiRegex)}static isSingleMatch(t){return Ve(t,this.singleRegex)}search(){}}function Ve(e,t){const s=e.match(t);return s?s[1]:null}class Ms extends j{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ss extends j{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Is extends j{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Es extends j{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Cs extends j{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class As extends j{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class et extends j{constructor(t,{location:s=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){super(t),this._bitapSearch=new qe(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class tt extends j{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const ge=[Ms,tt,Is,Es,As,Cs,Ss,et],Le=ge.length,bs=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ts="|";function ks(e,t={}){return e.split(Ts).map(s=>{let n=s.trim().split(bs).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const a=n[i];let l=!1,c=-1;for(;!l&&++c<Le;){const u=ge[c];let h=u.isMultiMatch(a);h&&(r.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<Le;){const u=ge[c];let h=u.isSingleMatch(a);if(h){r.push(new u(h,t));break}}}return r})}const Vs=new Set([et.type,tt.type]);class Ls{constructor(t,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:r=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:o=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:c=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:a,threshold:l,distance:c},this.pattern=s?t:t.toLowerCase(),this.query=ks(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,o=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const u=s[l];o.length=0,i=0;for(let h=0,m=u.length;h<m;h+=1){const d=u[h],{isMatch:f,indices:_,score:p}=d.search(t);if(f){if(i+=1,a+=p,n){const y=d.constructor.type;Vs.has(y)?o=[...o,..._]:o.push(_)}}else{a=0,i=0,o.length=0;break}}if(i){let h={isMatch:!0,score:a/i};return n&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const ve=[];function Rs(...e){ve.push(...e)}function _e(e,t){for(let s=0,n=ve.length;s<n;s+=1){let r=ve[s];if(r.condition(e,t))return new r(e,t)}return new qe(e,t)}const ee={AND:"$and",OR:"$or"},pe={PATH:"$path",PATTERN:"$val"},ye=e=>!!(e[ee.AND]||e[ee.OR]),Ps=e=>!!e[pe.PATH],Ds=e=>!D(e)&&Ue(e)&&!ye(e),Re=e=>({[ee.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function st(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=Ps(r);if(!o&&i.length>1&&!ye(r))return n(Re(r));if(Ds(r)){const l=o?r[pe.PATH]:i[0],c=o?r[pe.PATTERN]:r[l];if(!R(c))throw new Error(is(l));const u={keyId:me(l),pattern:c};return s&&(u.searcher=_e(c,t)),u}let a={children:[],operator:i[0]};return i.forEach(l=>{const c=r[l];D(c)&&c.forEach(u=>{a.children.push(n(u))})}),a};return ye(e)||(e=Re(e)),n(e)}function Fs(e,{ignoreFieldNorm:t=g.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const a=r?r.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:i))}),s.score=n})}function $s(e,t){const s=e.matches;t.matches=[],A(s)&&s.forEach(n=>{if(!A(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),t.matches.push(o)})}function Bs(e,t){t.score=e.score}function Ns(e,t,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const r=[];return s&&r.push($s),n&&r.push(Bs),e.map(i=>{const{idx:o}=i,a={item:t[o],refIndex:o};return r.length&&r.forEach(l=>{l(i,a)}),a})}class K{constructor(t,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new us(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof xe))throw new Error(os);this._myIndex=s||Ze(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){A(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:a}=this.options;let l=R(t)?R(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Fs(l,{ignoreFieldNorm:a}),i&&l.sort(o),ze(s)&&s>-1&&(l=l.slice(0,s)),Ns(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=_e(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:a})=>{if(!A(i))return;const{isMatch:l,score:c,indices:u}=s.searchIn(i);l&&r.push({item:i,idx:o,matches:[{score:c,value:i,norm:a,indices:u}]})}),r}_searchLogical(t){const s=st(t,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:m}=a,d=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:m});return d&&d.length?[{idx:c,item:l,matches:d}]:[]}const u=[];for(let h=0,m=a.children.length;h<m;h+=1){const d=a.children[h],f=n(d,l,c);if(f.length)u.push(...f);else if(a.operator===ee.AND)return[]}return u},r=this._myIndex.records,i={},o=[];return r.forEach(({$:a,i:l})=>{if(A(a)){let c=n(s,a,l);c.length&&(i[l]||(i[l]={idx:l,item:a,matches:[]},o.push(i[l])),c.forEach(({matches:u})=>{i[l].matches.push(...u)}))}}),o}_searchObjectList(t){const s=_e(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:a})=>{if(!A(o))return;let l=[];n.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:o[u],searcher:s}))}),l.length&&i.push({idx:a,item:o,matches:l})}),i}_findMatches({key:t,value:s,searcher:n}){if(!A(s))return[];let r=[];if(D(s))s.forEach(({v:i,i:o,n:a})=>{if(!A(i))return;const{isMatch:l,score:c,indices:u}=n.searchIn(i);l&&r.push({score:c,key:t,value:i,idx:o,norm:a,indices:u})});else{const{v:i,n:o}=s,{isMatch:a,score:l,indices:c}=n.searchIn(i);a&&r.push({score:l,key:t,value:i,norm:o,indices:c})}return r}}K.version="6.6.2";K.createIndex=Ze;K.parseIndex=ps;K.config=g;K.parseQuery=st;Rs(Ls);function B(e){return typeof e=="function"?e():b(e)}function Os(e,t,s){const n=()=>{var o,a;return new K((o=B(t))!=null?o:[],(a=B(s))==null?void 0:a.fuseOptions)},r=T(n());H(()=>{var o;return(o=B(s))==null?void 0:o.fuseOptions},()=>{r.value=n()},{deep:!0}),H(()=>B(t),o=>{r.value.setCollection(o)},{deep:!0});const i=k(()=>{const o=B(s);if(o!=null&&o.matchAllWhenSearchEmpty&&!B(e))return B(t).map((l,c)=>({item:l,refIndex:c}));const a=o==null?void 0:o.resultLimit;return r.value.search(B(e),a?{limit:a}:void 0)});return{fuse:r,results:i}}const nt=e=>(mt("data-v-68d3bad8"),e=e(),gt(),e),js=nt(()=>X("h2",{style:{"text-align":"center"}},"You may be interested in...",-1)),Gs=nt(()=>X("div",{class:"bottomSpacer"},null,-1)),Ws={__name:"BrowseView",setup(e){const t={1:"Personal Growth",2:"True Crime and Investigative Journalism",3:"History",4:"Comedy",5:"Entertainment",6:"Business",7:"Fiction",8:"News",9:"Kids and Family"},s=d=>{const f=[];return f.push(d[Math.floor(Math.random()*d.length)]),f.push(d[Math.floor(Math.random()*d.length)]),f.push(d[Math.floor(Math.random()*d.length)]),f};let n=T(!1),r=Ie([]),i=Ie([]);(async()=>{try{return r=await(await fetch("https://podcast-api.netlify.app/shows")).json(),i=s(r),n.value=!0,{previewData:r,recommendedArray:i}}catch(d){console.error(d)}})();let a=T("Unsorted"),l=T(""),c=T(null);const u=d=>{const{sortType:f,filterString:_,selectedGenre:p}=d;if(p==="All Genres"){c.value=null,a.value=f,l.value=_;return}else{const y=Object.keys(t).find(M=>t[M]===p);c.value=parseInt(y),a.value=f,l.value=_}},h=d=>{c.value=parseInt(d)},m=k(()=>{let d=[...r];a.value==="Alphabetical (A to Z)"?d.sort((p,y)=>{let M=p.title.toLowerCase(),S=y.title.toLowerCase();return M<S?-1:M>S?1:0}):a.value==="Alphabetical (Z to A)"?d.sort((p,y)=>{let M=p.title.toLowerCase(),S=y.title.toLowerCase();return M>S?-1:M<S?1:0}):a.value==="Date updated (latest first)"?d.sort((p,y)=>new Date(y.updated).getTime()-new Date(p.updated).getTime()):a.value==="Date updated (earliest first)"&&d.sort((p,y)=>new Date(p.updated).getTime()-new Date(y.updated).getTime()),c.value!==null&&(d=d.filter(y=>y.genres.includes(c.value)));const f=k(()=>({fuseOptions:{keys:["title"],isCaseSensitive:!1,threshold:.4},matchAllWhenSearchEmpty:!0})),{results:_}=Os(l,d,f);return _&&_.value&&_.value.length>0&&(d=_.value),d});return(d,f)=>(L(),ue(Q,null,[b(n)?(L(),O(Ce,{key:0,fluid:"",class:"fill-height"},{default:w(()=>[js,v(qt,{recommended:b(i)},null,8,["recommended"]),v(Ft,{onFiltersApplied:u}),(L(!0),ue(Q,null,Fe(m.value,_=>(L(),O(Pt,{onGenreSelected:h,key:_.item.id,id:_.item.id,title:_.item.title,seasons:_.item.seasons,description:_.item.description,image:_.item.image,genres:_.item.genres,updated:_.item.updated},null,8,["id","title","seasons","description","image","genres","updated"]))),128))]),_:1})):(L(),O(Ce,{key:1,class:"loadingContainer"},{default:w(()=>[v(At)]),_:1})),Gs],64))}},qs=z(Ws,[["__scopeId","data-v-68d3bad8"]]);export{qs as default};
