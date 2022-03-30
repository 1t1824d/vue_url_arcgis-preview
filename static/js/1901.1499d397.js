"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[1901],{37567:function(e,t,r){r.d(t,{R:function(){return f}});var i=r(63825),n=r(44171),s=r(48595),a=r(27092),o=r(2553),l=(r(57787),r(35425),r(90202),r(92236)),u=r(15387),h=r(58694),c=r(69505);const p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let f=class extends((0,s.p)(n.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,c.ff)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null==(e=this.floors)||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,c.ff)(this.floors,t),i=(0,a.pC)(r)?(0,c.Hp)(r,t):t.definitionExpression;return e[t.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,n=0===i,s=0===t.minScale||i<=t.minScale,a=0===t.maxScale||i>=t.maxScale;t.visible&&(n||s&&a)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"dynamicLayers",null),(0,i._)([(0,o.Cb)()],f.prototype,"floors",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"hasDynamicLayers",null),(0,i._)([(0,o.Cb)()],f.prototype,"layer",null),(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"layers",null),(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"layerDefs",null),(0,i._)([(0,o.Cb)({type:Number})],f.prototype,"scale",void 0),(0,i._)([(0,o.Cb)(u.qG)],f.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"version",null),(0,i._)([(0,o.Cb)({readOnly:!0})],f.prototype,"visibleSublayers",null),f=(0,i._)([(0,l.j)("esri.layers.mixins.ExportImageParameters")],f)},58694:function(e,t,r){function i(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!s(e,t))}function n(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!s(e,t)}function s(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const n=r.length;for(const{id:s}of e){for(;i<n&&r[i]!==s;)i++;if(i>=n)return!1}return!0}function a(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}r.d(t,{FN:function(){return n},QV:function(){return i},ac:function(){return a}})},58489:function(e,t,r){function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function n(e){let t=0,r=0;for(let i=0;i<e.length;i++){const n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}function s(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?n(e.stops):t}function a(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(s(r,e)+s(i,e))/2}));let i=0;const n=r.length;if(0===n)return e;for(let s=0;s<n;s++)i+=r[s];const a=Math.floor(i/n);return Math.max(a,e)}function o(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const n="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return i(n,t.symbol);if("unique-value"===t.type){let e=n;return t.uniqueValueInfos.forEach((t=>{e=i(e,t.symbol)})),e}if("class-breaks"===t.type){let e=n;return t.classBreakInfos.forEach((t=>{e=i(e,t.symbol)})),e}return t.type,n}r.d(t,{k:function(){return o}})},51901:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var i=r(63825),n=r(87441),s=r(24446),a=r(2553),o=(r(57787),r(35425),r(90202),r(92236)),l=r(74905),u=r(26797),h=r(21211),c=r(41815),p=(r(61726),r(49026)),f=r(97700);let y=class extends f.Z{renderChildren(e){if(e.drawPhase!==p.jx.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};y=(0,i._)([(0,o.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],y);const d=y;var m=r(33503),g=r(74139),b=r(25585),v=r(27092),x=r(15387),I=r(37567),w=r(58489),C=r(74887),_=r(66541),S=r(69505);const O=e=>{let t=class extends e{initialize(){this.exportImageParameters=new I.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new b.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const i=this.get("view.scale"),n=[],a=async e=>{const r=0===e.minScale||i<=e.minScale,s=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&s)if(e.sublayers)e.sublayers.forEach(a);else if(e.popupEnabled){const r=(0,_.V)(e,{...t,defaultPopupTemplateEnabled:!1});(0,v.pC)(r)&&n.unshift({sublayer:e,popupTemplate:r})}},o=r.sublayers.toArray().reverse().map(a);await Promise.all(o);const l=n.map((async({sublayer:r,popupTemplate:i})=>{await r.load().catch((()=>{}));const n=r.createQuery(),s=(0,v.pC)(t)?t.event:null,a=(0,w.k)({renderer:r.renderer,event:s}),o=this.createFetchPopupFeaturesQueryGeometry(e,a);if(n.geometry=o,n.outFields=await(0,_.e)(r,i),"map-image"===this.layer.type&&"floors"in this.view){var l,u;const e=null==(l=this.view)||null==(u=l.floors)?void 0:u.clone(),t=(0,S.ff)(e,r);(0,v.pC)(t)&&(n.where=n.where?`(${n.where}) AND (${t})`:t)}const h=await this._loadArcadeModules(i);return h&&h.arcadeUtils.hasGeometryOperations(i)||(n.maxAllowableOffset=o.width/a),(await r.queryFeatures(n)).features}));return(await(0,s.as)(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return(0,C.LC)()}};return(0,i._)([(0,a.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,a.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,a.Cb)(x.qG)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,o.j)("esri.views.layers.MapImageLayerView")],t),t};var P=r(68801),E=r(96237);const V=n.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let L=class extends(O((0,P.y)((0,h.y)(g.Z)))){constructor(){super(...arguments),this._highlightGraphics=new l.J}update(e){this.strategy.update(e).catch((e=>{(0,s.D_)(e)||V.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,n=r>=10;this._bitmapContainer=new u.c,this.container.addChild(this._bitmapContainer);const s=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new d(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new m.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:n,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return(0,E.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};(0,i._)([(0,a.Cb)()],L.prototype,"strategy",void 0),(0,i._)([(0,a.Cb)()],L.prototype,"updating",void 0),L=(0,i._)([(0,o.j)("esri.views.2d.layers.MapImageLayerView2D")],L);const D=L},66541:function(e,t,r){r.d(t,{V:function(){return a},e:function(){return s}});var i=r(27092),n=r(63390);async function s(e,t=e.popupTemplate){if(!(0,i.pC)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:a,typeIdField:o,globalIdField:l,relationships:u}=e;if(r.includes("*"))return["*"];const h=s?await(0,n.CH)(e):[],c=(0,n.Q0)(e.fieldsIndex,[...r,...h]);return o&&c.push(o),c&&a&&e.fieldsIndex.has(a)&&-1===c.indexOf(a)&&c.push(a),c&&l&&e.fieldsIndex.has(l)&&-1===c.indexOf(l)&&c.push(l),u&&u.forEach((t=>{const{keyField:r}=t;c&&r&&e.fieldsIndex.has(r)&&-1===c.indexOf(r)&&c.push(r)})),c}function a(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},96237:function(e,t,r){r.d(t,{K:function(){return a}});r(75065);var i=r(27092),n=r(19509),s=r(7230);function a(e,t,r,a=new s.Z){let o;if("2d"===r.type)o=t*r.resolution;else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),a=r.basemapSpatialReference;o=(0,i.pC)(a)&&!a.equals(r.spatialReference)?(0,n.c9)(a)/(0,n.c9)(r.spatialReference):t*s}const l=e.x-o,u=e.y-o,h=e.x+o,c=e.y+o,{spatialReference:p}=r;return a.xmin=Math.min(l,h),a.ymin=Math.min(u,c),a.xmax=Math.max(l,h),a.ymax=Math.max(u,c),a.spatialReference=p,a}new s.Z},69505:function(e,t,r){function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function n(e,t){var r;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField?a(e,t.floorInfo.floorField):null}function s(e,t){const{definitionExpression:r}=t;return e?r?`(${r}) AND (${e})`:e:r}function a(e,t){if(null==e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{Hp:function(){return s},cx:function(){return i},ff:function(){return n}})}}]);