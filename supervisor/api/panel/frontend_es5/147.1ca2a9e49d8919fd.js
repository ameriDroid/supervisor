"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["147"],{87865:function(e,t,o){o.d(t,{v:()=>i});o(40251);const i=async(e,t)=>{if(navigator.clipboard)try{return void(await navigator.clipboard.writeText(e))}catch(r){}const o=null!=t?t:document.body,i=document.createElement("textarea");i.value=e,o.appendChild(i),i.select(),document.execCommand("copy"),o.removeChild(i)}},68325:function(e,t,o){var i=o(73577),r=o(72621),a=(o(52247),o(71695),o(92745),o(9359),o(70104),o(40251),o(11740),o(47021),o(57243)),d=o(50778),n=o(27486),s=o(36522),l=o(49976);let h,c=e=>e;const u={key:"Mod-s",run:e=>((0,s.B)(e.dom,"editor-save"),!0)},m=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.Z)([(0,d.Mo)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"mode",value(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"autofocus",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({attribute:"read-only",type:Boolean})],key:"readOnly",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"linewrap",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"error",value(){return!1}},{kind:"field",decorators:[(0,d.SB)()],key:"_value",value(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)(i,"connectedCallback",this,3)([]),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",l.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.Z)(i,"disconnectedCallback",this,3)([]),this.removeEventListener("keydown",l.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){var e;null!==(e=this._loadedCodeMirror)&&void 0!==e||(this._loadedCodeMirror=await Promise.all([o.e("9525"),o.e("2439"),o.e("6153")]).then(o.bind(o,2765))),(0,r.Z)(i,"scheduleUpdate",this,3)([])}},{kind:"method",key:"update",value:function(e){if((0,r.Z)(i,"update",this,3)([e]),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:[this._loadedCodeMirror.langCompartment.reconfigure(this._mode),this._loadedCodeMirror.foldingCompartment.reconfigure(this._getFoldingExtensions())]}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&t.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.indentationMarkers({thickness:0,activeThickness:1,colors:{activeLight:"var(--secondary-text-color)",activeDark:"var(--secondary-text-color)"}}),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,u]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate),this._loadedCodeMirror.foldingCompartment.of(this._getFoldingExtensions())];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value(){return(0,n.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))}},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:m})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,s.B)(this,"value-changed",{value:this._value}))}}},{kind:"field",key:"_getFoldingExtensions",value(){return()=>"yaml"===this.mode?[this._loadedCodeMirror.foldGutter(),this._loadedCodeMirror.foldingOnIndent]:[]}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(h||(h=c`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`))}}]}}),a.fl)},64889:function(e,t,o){var i=o(73577),r=o(72621),a=(o(71695),o(40251),o(47021),o(76848)),d=o(57243),n=o(50778),s=o(36522),l=o(28008),h=(o(68325),o(72473)),c=o(87865);o(59826);let u,m,y,p,v,f=e=>e;(0,i.Z)([(0,n.Mo)("ha-yaml-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"yamlSchema",value(){return a.oW}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"is-valid",type:Boolean})],key:"isValid",value(){return!0}},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"auto-update",type:Boolean})],key:"autoUpdate",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:"read-only",type:Boolean})],key:"readOnly",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:"copy-clipboard",type:Boolean})],key:"copyClipboard",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({attribute:"has-extra-actions",type:Boolean})],key:"hasExtraActions",value(){return!1}},{kind:"field",decorators:[(0,n.SB)()],key:"_yaml",value(){return""}},{kind:"field",decorators:[(0,n.IO)("ha-code-editor")],key:"_codeEditor",value:void 0},{kind:"method",key:"setValue",value:function(e){try{this._yaml=(e=>{if("object"!=typeof e||null===e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?"":(0,a.$w)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0})}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){void 0!==this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,r.Z)(o,"willUpdate",this,3)([e]),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._codeEditor)&&void 0!==e&&e.codemirror&&(null===(t=this._codeEditor)||void 0===t||t.codemirror.focus())}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?d.Ld:(0,d.dy)(u||(u=f` ${0} <ha-code-editor .hass="${0}" .value="${0}" .readOnly="${0}" mode="yaml" autocomplete-entities autocomplete-icons .error="${0}" @value-changed="${0}" dir="ltr"></ha-code-editor> ${0} `),this.label?(0,d.dy)(m||(m=f`<p>${0}${0}</p>`),this.label,this.required?" *":""):d.Ld,this.hass,this._yaml,this.readOnly,!1===this.isValid,this._onChange,this.copyClipboard||this.hasExtraActions?(0,d.dy)(y||(y=f` <div class="card-actions"> ${0} <slot name="extra-actions"></slot> </div> `),this.copyClipboard?(0,d.dy)(p||(p=f` <ha-button @click="${0}"> ${0} </ha-button> `),this._copyYaml,this.hass.localize("ui.components.yaml-editor.copy_to_clipboard")):d.Ld):d.Ld)}},{kind:"method",key:"_onChange",value:function(e){let t;e.stopPropagation(),this._yaml=e.detail.value;let o,i=!0;if(this._yaml)try{t=(0,a.zD)(this._yaml,{schema:this.yamlSchema})}catch(r){i=!1,o=`${this.hass.localize("ui.components.yaml-editor.error",{reason:r.reason})}${r.mark?` (${this.hass.localize("ui.components.yaml-editor.error_location",{line:r.mark.line+1,column:r.mark.column+1})})`:""}`}else t={};this.value=t,this.isValid=i,(0,s.B)(this,"value-changed",{value:t,isValid:i,errorMsg:o})}},{kind:"get",key:"yaml",value:function(){return this._yaml}},{kind:"method",key:"_copyYaml",value:async function(){this.yaml&&(await(0,c.v)(this.yaml),(0,h.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,(0,d.iv)(v||(v=f`.card-actions{border-radius:var(--actions-border-radius,0px 0px var(--ha-card-border-radius,12px) var(--ha-card-border-radius,12px));border:1px solid var(--divider-color);padding:5px 16px}ha-code-editor{flex-grow:1}`))]}}]}}),d.oi)}}]);
//# sourceMappingURL=147.1ca2a9e49d8919fd.js.map