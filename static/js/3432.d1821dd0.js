"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[3432,4813],{24813:function(e,r,t){t.r(r),t.d(r,{default:function(){return T}});var i=t(63825),s=t(35680),a=t(68955),o=t(25585),n=t(48595),l=t(68450),y=t(27092),p=t(3266),u=t(24446),c=t(2553),h=(t(57787),t(35425),t(90202)),m=t(66667),d=t(92236),f=t(78386),b=t(84943),g=t(7230),v=t(84684),S=t(49471),x=t(77177),_=t(61389),C=t(94589),O=t(63759),I=t(54638),L=t(47359),w=t(61761),N=t(34481),E=t(93692),P=t(61562),D=t(13163),F=t(15387),M=t(37567),j=t(10255),J=t(58694);let R=class extends((0,O.h)((0,D.n)((0,E.M)((0,P.x)((0,_.O)((0,C.Y)((0,L.q)((0,w.I)((0,p.R)((0,N.Q)((0,x.V)((0,I.N)((0,n.p)(S.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,b.M9)(i.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;a=(0,J.QV)(s,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");a=(0,J.QV)(s,e.sublayers,(0,b.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;s.forEach((e=>{const r=e.write({},n);o.push(r),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(r.layers=o),l&&(r.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new M.R({layer:this,floors:null==i?void 0:i.floors,scale:(0,v.yZ)({extent:e,width:r})*s}),o=a.toJSON();a.destroy();const n=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());o.dpi*=s;const p={};if(null!=i&&i.timeExtent){const{start:e,end:r}=i.timeExtent.toJSON();p.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t,...o,...n,...p}}async fetchImage(e,r,t,i){var a;const n={responseType:"image",signal:null!=(a=null==i?void 0:i.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,r,t,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";return null==n.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,s["default"])(l,n).then((e=>e.data)).catch((e=>{if((0,u.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})})):Promise.reject(new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query}))}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,s["default"])(this.url,r),{extent:i,fullExtent:o,timeExtent:n}=t,l=i||o;return{fullExtent:l&&g.Z.fromJSON(l),timeExtent:n&&a.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.GZ)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,s["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,c.Cb)({type:Boolean})],R.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,c.Cb)()],R.prototype,"dpi",void 0),(0,i._)([(0,c.Cb)()],R.prototype,"gdbVersion",void 0),(0,i._)([(0,c.Cb)()],R.prototype,"imageFormat",void 0),(0,i._)([(0,m.r)("imageFormat",["supportedImageFormatTypes"])],R.prototype,"readImageFormat",null),(0,i._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],R.prototype,"imageMaxHeight",void 0),(0,i._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],R.prototype,"imageMaxWidth",void 0),(0,i._)([(0,c.Cb)()],R.prototype,"imageTransparency",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],R.prototype,"labelsVisible",void 0),(0,i._)([(0,c.Cb)({type:["ArcGISMapServiceLayer"]})],R.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)()],R.prototype,"sourceJSON",void 0),(0,i._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],R.prototype,"sublayers",void 0),(0,i._)([(0,f.c)("sublayers",{layers:{type:[j.Z]},visibleLayers:{type:[h.z8]}})],R.prototype,"writeSublayers",null),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],R.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],R.prototype,"type",void 0),(0,i._)([(0,c.Cb)(F.HQ)],R.prototype,"url",void 0),R=(0,i._)([(0,d.j)("esri.layers.MapImageLayer")],R);const T=R},37567:function(e,r,t){t.d(r,{R:function(){return h}});var i=t(63825),s=t(44171),a=t(48595),o=t(27092),n=t(2553),l=(t(57787),t(35425),t(90202),t(92236)),y=t(15387),p=t(58694),u=t(69505);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends((0,a.p)(s.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,u.ff)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,p.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),t=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return t.length?JSON.stringify(t.reduce(((e,r)=>{const t=(0,u.ff)(this.floors,r),i=(0,o.pC)(t)?(0,u.Hp)(t,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=r=>{const i=this.scale,s=0===i,a=0===r.minScale||i<=r.minScale,o=0===r.maxScale||i>=r.maxScale;r.visible&&(s||a&&o)&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((r,t)=>e[t]!==r))?e:i}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"dynamicLayers",null),(0,i._)([(0,n.Cb)()],h.prototype,"floors",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"hasDynamicLayers",null),(0,i._)([(0,n.Cb)()],h.prototype,"layer",null),(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"layerDefs",null),(0,i._)([(0,n.Cb)({type:Number})],h.prototype,"scale",void 0),(0,i._)([(0,n.Cb)(y.qG)],h.prototype,"timeExtent",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"version",null),(0,i._)([(0,n.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,i._)([(0,l.j)("esri.layers.mixins.ExportImageParameters")],h)},69505:function(e,r,t){function i(e){var r;const t=e.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function s(e,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?o(e,r.floorInfo.floorField):null}function a(e,r){const{definitionExpression:t}=r;return e?t?`(${t}) AND (${e})`:e:t}function o(e,r){if(null==e||!e.length)return null;const t=e.filter((e=>""!==e)).map((e=>`'${e}'`));return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}t.d(r,{Hp:function(){return a},cx:function(){return i},ff:function(){return s}})}}]);