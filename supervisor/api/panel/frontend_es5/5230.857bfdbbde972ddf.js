"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["5230"],{49976:function(e,t,i){i.d(t,{U:()=>a});const a=e=>e.stopPropagation()},26709:function(e,t,i){i.r(t),i.d(t,{HaFormOptionalActions:()=>v});var a=i(73577),o=i(72621),s=(i(19083),i(71695),i(9359),i(56475),i(70104),i(40251),i(61006),i(47021),i(57243)),d=i(50778),n=i(27486),l=i(49976);i(29073);let c,h,u,r,m,p=e=>e;const f=[];let v=(0,a.Z)([(0,d.Mo)("ha-form-optional_actions")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"localizeValue",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_displayActions",value:void 0},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,null===(e=this.renderRoot.querySelector("ha-form"))||void 0===e||e.focus()}},{kind:"method",key:"updated",value:function(e){if((0,o.Z)(i,"updated",this,3)([e]),e.has("data")){var t;const e=null!==(t=this._displayActions)&&void 0!==t?t:f,i=this._hiddenActions(this.schema.schema,e);this._displayActions=[...e,...i.filter((e=>e in this.data))]}}},{kind:"field",key:"_hiddenActions",value(){return(0,n.Z)(((e,t)=>e.map((e=>e.name)).filter((e=>!t.includes(e)))))}},{kind:"field",key:"_displaySchema",value(){return(0,n.Z)(((e,t)=>e.filter((e=>t.includes(e.name)))))}},{kind:"method",key:"render",value:function(){var e,t,i;const a=null!==(e=this._displayActions)&&void 0!==e?e:f,o=this._displaySchema(this.schema.schema,null!==(t=this._displayActions)&&void 0!==t?t:[]),d=this._hiddenActions(this.schema.schema,a),n=new Map(this.computeLabel?this.schema.schema.map((e=>[e.name,e])):[]);return(0,s.dy)(c||(c=p` ${0} ${0} `),o.length>0?(0,s.dy)(h||(h=p` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .disabled="${0}" .computeLabel="${0}" .computeHelper="${0}" .localizeValue="${0}"></ha-form> `),this.hass,this.data,o,this.disabled,this.computeLabel,this.computeHelper,this.localizeValue):s.Ld,d.length>0?(0,s.dy)(u||(u=p` <ha-button-menu @action="${0}" fixed @closed="${0}"> <ha-button slot="trigger"> ${0} </ha-button> ${0} </ha-button-menu> `),this._handleAddAction,l.U,(null===(i=this.localize)||void 0===i?void 0:i.call(this,"ui.components.form-optional-actions.add"))||"Add interaction",d.map((e=>{const t=n.get(e);return(0,s.dy)(r||(r=p` <ha-list-item> ${0} </ha-list-item> `),this.computeLabel&&t?this.computeLabel(t):e)}))):s.Ld)}},{kind:"method",key:"_handleAddAction",value:function(e){var t,i;const a=this._hiddenActions(this.schema.schema,null!==(t=this._displayActions)&&void 0!==t?t:f)[e.detail.index];this._displayActions=[...null!==(i=this._displayActions)&&void 0!==i?i:[],a]}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(m||(m=p`:host{display:flex!important;flex-direction:column;gap:24px}:host ha-form{display:block}`))}}]}}),s.oi)}}]);
//# sourceMappingURL=5230.857bfdbbde972ddf.js.map