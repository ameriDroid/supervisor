/*! For license information please see 622.d1e6ffc5b5dbd68e.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["622"],{42983:function(t,i,e){e.a(t,(async function(t,i){try{var s=e(73577),a=(e(19083),e(71695),e(92745),e(61893),e(40251),e(61006),e(39527),e(99790),e(41360),e(47021),e(87319),e(57243)),n=e(50778),d=e(27486),r=e(95262),l=e(36522),c=e(1416),o=e(17705),u=e(73192),h=e(94279),v=(e(37583),e(5460)),p=e(83377),f=t([h,v]);[h,v]=f.then?(await f)():f;let m,k,y,_,b=t=>t;(0,s.Z)([(0,n.Mo)("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1,type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-statistics"})],key:"excludeStatistics",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"helpMissingEntityUrl",value(){return"/more-info/statistics/"}},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value(){return!1}},{kind:"field",key:"_statistics",value(){return[]}},{kind:"field",decorators:[(0,n.SB)()],key:"_filteredItems",value(){}},{kind:"field",key:"_rowRenderer",value(){return t=>(0,a.dy)(m||(m=b`<mwc-list-item graphic="avatar" twoline> ${0} <span>${0}</span> <span slot="secondary">${0}</span> </mwc-list-item>`),t.state?(0,a.dy)(k||(k=b`<state-badge slot="graphic" .stateObj="${0}" .hass="${0}"></state-badge>`),t.state,this.hass):"",t.name,""===t.id||"__missing"===t.id?(0,a.dy)(y||(y=b`<a target="_blank" rel="noopener noreferrer" href="${0}">${0}</a>`),(0,u.R)(this.hass,this.helpMissingEntityUrl),this.hass.localize("ui.components.statistic-picker.learn_more")):t.id)}},{kind:"field",key:"_getStatistics",value(){return(0,d.Z)(((t,i,e,s,a,n,d)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(i){const e=(0,r.r)(i);t=t.filter((t=>e.includes(t.statistics_unit_of_measurement)))}if(e){const i=(0,r.r)(e);t=t.filter((t=>i.includes(t.unit_class)))}if(s){const i=(0,r.r)(s);t=t.filter((t=>{const e=this.hass.states[t.statistic_id];return!e||i.includes(e.attributes.device_class||"")}))}const l=[];return t.forEach((t=>{if(n&&t.statistic_id!==d&&n.includes(t.statistic_id))return;const i=this.hass.states[t.statistic_id];if(!i){if(!a){const i=t.statistic_id,e=(0,o.Kd)(this.hass,t.statistic_id,t);l.push({id:i,name:e,strings:[i,e]})}return}const e=t.statistic_id,s=(0,o.Kd)(this.hass,t.statistic_id,t);l.push({id:e,name:s,state:i,strings:[e,s]})})),l.length?(l.length>1&&l.sort(((t,i)=>(0,c.$)(t.name||"",i.name||"",this.hass.locale.language))),l.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),l):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.open()}},{kind:"method",key:"focus",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value):this.updateComplete.then((()=>{this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value)})))}},{kind:"method",key:"render",value:function(){var t;return 0===this._statistics.length?a.Ld:(0,a.dy)(_||(_=b` <ha-combo-box .hass="${0}" .label="${0}" .value="${0}" .renderer="${0}" .disabled="${0}" .allowCustomValue="${0}" .items="${0}" .filteredItems="${0}" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="${0}" @value-changed="${0}" @filter-changed="${0}"></ha-combo-box> `),this.hass,void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label,this._value,this._rowRenderer,this.disabled,this.allowCustomEntity,this._statistics,null!==(t=this._filteredItems)&&void 0!==t?t:this._statistics,this._openedChanged,this._statisticChanged,this._filterChanged)}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await(0,o.uR)(this.hass,this.statisticTypes)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_filterChanged",value:function(t){const i=t.detail.value.toLowerCase();this._filteredItems=i.length?(0,p.q)(i,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{(0,l.B)(this,"value-changed",{value:t}),(0,l.B)(this,"change")}),0)}}]}}),a.oi);i()}catch(m){i(m)}}))},52131:function(t,i,e){e.a(t,(async function(t,i){try{var s=e(73577),a=(e(19083),e(71695),e(40251),e(61006),e(39527),e(99790),e(13334),e(47021),e(57243)),n=e(50778),d=e(91583),r=e(36522),l=e(42983),c=t([l]);l=(c.then?(await c)():c)[0];let o,u,h,v=t=>t;(0,s.Z)([(0,n.Mo)("ha-statistics-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1,type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-statistic-label"})],key:"pickedStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-statistic-label"})],key:"pickStatisticLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"ignore-restrictions-on-first-statistic"})],key:"ignoreRestrictionsOnFirstStatistic",value(){return!1}},{kind:"method",key:"render",value:function(){if(!this.hass)return a.Ld;const t=this.ignoreRestrictionsOnFirstStatistic&&this._currentStatistics.length<=1,i=t?void 0:this.includeStatisticsUnitOfMeasurement,e=t?void 0:this.includeUnitClass,s=t?void 0:this.includeDeviceClass,n=t?void 0:this.statisticTypes;return(0,a.dy)(o||(o=v` ${0} <div> <ha-statistic-picker .hass="${0}" .includeStatisticsUnitOfMeasurement="${0}" .includeUnitClass="${0}" .includeDeviceClass="${0}" .statisticTypes="${0}" .statisticIds="${0}" .label="${0}" .excludeStatistics="${0}" .allowCustomEntity="${0}" @value-changed="${0}"></ha-statistic-picker> </div> `),(0,d.r)(this._currentStatistics,(t=>t),(t=>(0,a.dy)(u||(u=v` <div> <ha-statistic-picker .curValue="${0}" .hass="${0}" .includeStatisticsUnitOfMeasurement="${0}" .includeUnitClass="${0}" .includeDeviceClass="${0}" .value="${0}" .statisticTypes="${0}" .statisticIds="${0}" .label="${0}" .excludeStatistics="${0}" .allowCustomEntity="${0}" @value-changed="${0}"></ha-statistic-picker> </div> `),t,this.hass,i,e,s,t,n,this.statisticIds,this.pickedStatisticLabel,this.value,this.allowCustomEntity,this._statisticChanged))),this.hass,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.statisticTypes,this.statisticIds,this.pickStatisticLabel,this.value,this.allowCustomEntity,this._addStatistic)}},{kind:"get",key:"_currentStatistics",value:function(){return this.value||[]}},{kind:"method",key:"_updateStatistics",value:async function(t){this.value=t,(0,r.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();const i=t.currentTarget.curValue,e=t.detail.value;if(e===i)return;const s=this._currentStatistics;e&&!s.includes(e)?this._updateStatistics(s.map((t=>t===i?e:t))):this._updateStatistics(s.filter((t=>t!==i)))}},{kind:"method",key:"_addStatistic",value:async function(t){t.stopPropagation();const i=t.detail.value;if(!i)return;if(t.currentTarget.value="",!i)return;const e=this._currentStatistics;e.includes(i)||this._updateStatistics([...e,i])}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(h||(h=v`:host{width:200px;display:block}ha-statistic-picker{display:block;width:100%;margin-top:8px}`))}}]}}),a.oi);i()}catch(o){i(o)}}))},7285:function(t,i,e){var s=e(73577),a=e(72621),n=(e(71695),e(47021),e(65703)),d=e(46289),r=e(57243),l=e(50778);let c,o,u,h=t=>t;(0,s.Z)([(0,l.Mo)("ha-list-item")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(e,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[d.W,(0,r.iv)(c||(c=h`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,r.iv)(o||(o=h`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,r.iv)(u||(u=h``))]}}]}}),n.K)},30490:function(t,i,e){e.a(t,(async function(t,s){try{e.r(i),e.d(i,{HaStatisticSelector:()=>v});var a=e(73577),n=(e(71695),e(47021),e(57243)),d=e(50778),r=e(52131),l=t([r]);r=(l.then?(await l)():l)[0];let c,o,u,h=t=>t,v=(0,a.Z)([(0,d.Mo)("ha-selector-statistic")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?(0,n.dy)(o||(o=h` ${0} <ha-statistics-picker .hass="${0}" .value="${0}" .helper="${0}" .disabled="${0}" .required="${0}"></ha-statistics-picker> `),this.label?(0,n.dy)(u||(u=h`<label>${0}</label>`),this.label):"",this.hass,this.value,this.helper,this.disabled,this.required):(0,n.dy)(c||(c=h`<ha-statistic-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .disabled="${0}" .required="${0}" allow-custom-entity></ha-statistic-picker>`),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}}]}}),n.oi);s()}catch(c){s(c)}}))},43546:function(t,i,e){e.d(i,{iI:()=>a,oT:()=>s});e(19083),e(77439),e(19423),e(40251),e(97499),e(61006),e(13334);const s=t=>t.map((t=>{if("string"!==t.type)return t;switch(t.name){case"username":return Object.assign(Object.assign({},t),{},{autocomplete:"username",autofocus:!0});case"password":return Object.assign(Object.assign({},t),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},t),{},{autocomplete:"one-time-code",autofocus:!0});default:return t}})),a=(t,i)=>t.callWS({type:"auth/sign_path",path:i})},96194:function(t,i,e){e.d(i,{ON:()=>d,PX:()=>r,V_:()=>l,lz:()=>n,nZ:()=>a,rk:()=>o});var s=e(92636);const a="unavailable",n="unknown",d="on",r="off",l=[a,n],c=[a,n,r],o=(0,s.z)(l);(0,s.z)(c)},17705:function(t,i,e){e.d(i,{Kd:()=>n,uR:()=>a});e(19083),e(71695),e(61006),e(39527),e(36993),e(47021);var s=e(47194);const a=(t,i)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:i}),n=(t,i,e)=>{const a=t.states[i];return a?(0,s.C)(a):(null==e?void 0:e.name)||i}},73192:function(t,i,e){e.d(i,{R:()=>s});e(19083),e(61006);const s=(t,i)=>`https://${t.config.version.includes("b")?"rc":t.config.version.includes("dev")?"next":"www"}.home-assistant.io${i}`},91583:function(t,i,e){e.d(i,{r:()=>r});e(52247),e(71695),e(47021);var s=e(2841),a=e(45779),n=e(53232);const d=(t,i,e)=>{const s=new Map;for(let a=i;a<=e;a++)s.set(t[a],a);return s},r=(0,a.XM)(class extends a.Xe{constructor(t){if(super(t),t.type!==a.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,i,e){let s;void 0===e?e=i:void 0!==i&&(s=i);const a=[],n=[];let d=0;for(const r of t)a[d]=s?s(r,d):d,n[d]=e(r,d),d++;return{values:n,keys:a}}render(t,i,e){return this.ct(t,i,e).values}update(t,[i,e,a]){var r;const l=(0,n.i9)(t),{values:c,keys:o}=this.ct(i,e,a);if(!Array.isArray(l))return this.ut=o,c;const u=null!==(r=this.ut)&&void 0!==r?r:this.ut=[],h=[];let v,p,f=0,m=l.length-1,k=0,y=c.length-1;for(;f<=m&&k<=y;)if(null===l[f])f++;else if(null===l[m])m--;else if(u[f]===o[k])h[k]=(0,n.fk)(l[f],c[k]),f++,k++;else if(u[m]===o[y])h[y]=(0,n.fk)(l[m],c[y]),m--,y--;else if(u[f]===o[y])h[y]=(0,n.fk)(l[f],c[y]),(0,n._Y)(t,h[y+1],l[f]),f++,y--;else if(u[m]===o[k])h[k]=(0,n.fk)(l[m],c[k]),(0,n._Y)(t,l[f],l[m]),m--,k++;else if(void 0===v&&(v=d(o,k,y),p=d(u,f,m)),v.has(u[f]))if(v.has(u[m])){const i=p.get(o[k]),e=void 0!==i?l[i]:null;if(null===e){const i=(0,n._Y)(t,l[f]);(0,n.fk)(i,c[k]),h[k]=i}else h[k]=(0,n.fk)(e,c[k]),(0,n._Y)(t,l[f],e),l[i]=null;k++}else(0,n.ws)(l[m]),m--;else(0,n.ws)(l[f]),f++;for(;k<=y;){const i=(0,n._Y)(t,h[y+1]);(0,n.fk)(i,c[k]),h[k++]=i}for(;f<=m;){const t=l[f++];null!==t&&(0,n.ws)(t)}return this.ut=o,(0,n.hl)(t,h),s.Jb}})},31050:function(t,i,e){e.d(i,{C:()=>h});e(71695),e(40251),e(39527),e(67670),e(47021);var s=e(2841),a=e(53232),n=e(1714);e(63721),e(88230),e(52247);class d{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class r{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}var l=e(45779);const c=t=>!(0,a.pt)(t)&&"function"==typeof t.then,o=1073741823;class u extends n.sR{constructor(){super(...arguments),this._$C_t=o,this._$Cwt=[],this._$Cq=new d(this),this._$CK=new r}render(...t){var i;return null!==(i=t.find((t=>!c(t))))&&void 0!==i?i:s.Jb}update(t,i){const e=this._$Cwt;let a=e.length;this._$Cwt=i;const n=this._$Cq,d=this._$CK;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$C_t);s++){const t=i[s];if(!c(t))return this._$C_t=s,t;s<a&&t===e[s]||(this._$C_t=o,a=0,Promise.resolve(t).then((async i=>{for(;d.get();)await d.get();const e=n.deref();if(void 0!==e){const s=e._$Cwt.indexOf(t);s>-1&&s<e._$C_t&&(e._$C_t=s,e.setValue(i))}})))}return s.Jb}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const h=(0,l.XM)(u)}}]);
//# sourceMappingURL=622.d1e6ffc5b5dbd68e.js.map