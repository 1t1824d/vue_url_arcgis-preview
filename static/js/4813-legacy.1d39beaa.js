"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[4813],{24813:function(e,r,t){t.r(r),t.d(r,{default:function(){return A}});var i=t(16198),a=t(4367),n=t(76133),s=t(92751),o=t(99418),l=t(49161),u=(t(78975),t(92222),t(41539),t(47042),t(54747),t(47941),t(21249),t(57327),t(83753),t(38862),t(74916),t(15306),t(63825)),y=t(35680),p=t(68955),c=t(25585),h=t(48595),m=t(68450),d=t(27092),f=t(3266),v=t(24446),b=t(2553),g=(t(57787),t(35425),t(90202)),S=t(66667),x=t(92236),_=t(78386),Z=t(84943),k=t(7230),C=t(84684),w=t(49471),O=t(77177),L=t(61389),E=t(94589),I=t(63759),P=t(54638),N=t(47359),D=t(61761),R=t(34481),M=t(93692),J=t(61562),j=t(13163),F=t(15387),T=t(37567),q=t(10255),V=t(58694),U=function(e){(0,o.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return e=r.call.apply(r,[this].concat(a)),e.datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,a.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(v.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,i){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var o=(0,Z.M9)(i.origin);if(3===o){var l=this.createSublayersForOrigin("service").sublayers;s=(0,V.QV)(n,l,2)}else if(o>3){var u=this.createSublayersForOrigin("portal-item");s=(0,V.QV)(n,u.sublayers,(0,Z.M9)(u.origin))}}var y=[],p=(0,a.Z)({writeSublayerStructure:s},i),c=s;n.forEach((function(e){var r=e.write({},p);y.push(r),c=c||"user"===e.originOf("visible")})),y.some((function(e){return Object.keys(e).length>1}))&&(r.layers=y),c&&(r.visibleLayers=n.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,i){var n=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var s=new T.R({layer:this,floors:null==i?void 0:i.floors,scale:(0,C.yZ)({extent:e,width:r})*n}),o=s.toJSON();s.destroy();var l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},u=e&&e.spatialReference,y=u.wkid||JSON.stringify(u.toJSON());o.dpi*=n;var p={};if(null!=i&&i.timeExtent){var c=i.timeExtent.toJSON(),h=c.start,m=c.end;p.time=h&&m&&h===m?""+h:"".concat(null==h?"null":h,",").concat(null==m?"null":m)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return(0,a.Z)((0,a.Z)((0,a.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t},o),l),p)}},{key:"fetchImage",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(r,t,i,n){var s,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o={responseType:"image",signal:null!=(s=null==n?void 0:n.signal)?s:null,query:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),this.createExportImageParameters(r,t,i,n)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},l=this.parsedUrl.path+"/export",null==o.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}return e.abrupt("return",Promise.reject(new c.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:o.query})));case 3:return e.abrupt("return",(0,y["default"])(l,o).then((function(e){return e.data})).catch((function(e){if((0,v.D_)(e))throw e;throw new c.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(l),{error:e})})));case 4:case"end":return e.stop()}}),e,this)})));function r(r,t,i,a){return e.apply(this,arguments)}return r}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(){var r,t,i,n,s,o,l,u,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:{},t=(0,a.Z)((0,a.Z)({},r),{},{query:(0,a.Z)((0,a.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,y["default"])(this.url,t);case 4:return i=e.sent,n=i.data,s=n.extent,o=n.fullExtent,l=n.timeExtent,u=s||o,e.abrupt("return",{fullExtent:u&&k.Z.fromJSON(u),timeExtent:l&&p.Z.fromJSON({start:l[0],end:l[1]})});case 11:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"loadAll",value:function(){var e=this;return(0,m.GZ)(this,(function(r){r(e.allSublayers)}))}},{key:"_fetchService",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(r){var t,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,y["default"])(this.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,i=t.data,n=t.ssl,n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}()}]),t}((0,I.h)((0,j.n)((0,M.M)((0,J.x)((0,L.O)((0,E.Y)((0,N.q)((0,D.I)((0,f.R)((0,R.Q)((0,O.V)((0,P.N)((0,h.p)(w.Z))))))))))))));(0,u._)([(0,b.Cb)({type:Boolean})],U.prototype,"datesInUnknownTimezone",void 0),(0,u._)([(0,b.Cb)()],U.prototype,"dpi",void 0),(0,u._)([(0,b.Cb)()],U.prototype,"gdbVersion",void 0),(0,u._)([(0,b.Cb)()],U.prototype,"imageFormat",void 0),(0,u._)([(0,S.r)("imageFormat",["supportedImageFormatTypes"])],U.prototype,"readImageFormat",null),(0,u._)([(0,b.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],U.prototype,"imageMaxHeight",void 0),(0,u._)([(0,b.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],U.prototype,"imageMaxWidth",void 0),(0,u._)([(0,b.Cb)()],U.prototype,"imageTransparency",void 0),(0,u._)([(0,b.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],U.prototype,"isReference",void 0),(0,u._)([(0,b.Cb)({json:{read:!1,write:!1}})],U.prototype,"labelsVisible",void 0),(0,u._)([(0,b.Cb)({type:["ArcGISMapServiceLayer"]})],U.prototype,"operationalLayerType",void 0),(0,u._)([(0,b.Cb)({json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),(0,u._)([(0,b.Cb)()],U.prototype,"sourceJSON",void 0),(0,u._)([(0,b.Cb)({json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),(0,u._)([(0,_.c)("sublayers",{layers:{type:[q.Z]},visibleLayers:{type:[g.z8]}})],U.prototype,"writeSublayers",null),(0,u._)([(0,b.Cb)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),(0,u._)([(0,b.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],U.prototype,"type",void 0),(0,u._)([(0,b.Cb)(F.HQ)],U.prototype,"url",void 0),U=(0,u._)([(0,x.j)("esri.layers.MapImageLayer")],U);var A=U},37567:function(e,r,t){t.d(r,{R:function(){return b}});var i=t(4367),a=t(76133),n=t(92751),s=t(99418),o=t(49161),l=(t(21249),t(38862),t(69600),t(57327),t(41539),t(54747),t(9653),t(63825)),u=t(44171),y=t(48595),p=t(27092),c=t(2553),h=(t(57787),t(35425),t(90202),t(92236)),m=t(15387),d=t(58694),f=t(69505),v={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},b=function(e){(0,s.Z)(t,e);var r=(0,o.Z)(t);function t(e){var i;return(0,a.Z)(this,t),i=r.call(this,e),i.floors=null,i.scale=0,i}return(0,n.Z)(t,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var r=this.visibleSublayers.map((function(r){var t=(0,f.ff)(e.floors,r);return r.toExportImageJSON(t)}));return r.length?JSON.stringify(r):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,d.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}},{key:"layer",set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return r.notifyChange(v[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,r=this,t=!(null==(e=this.floors)||!e.length),i=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||t&&null!=e.floorInfo}));return i.length?JSON.stringify(i.reduce((function(e,t){var i=(0,f.ff)(r.floors,t),a=(0,p.pC)(i)?(0,f.Hp)(i,t):t.definitionExpression;return e[t.id]=a,e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,r=[];if(!this.layer)return r;var t=this.layer.sublayers,i=function t(i){var a=e.scale,n=0===a,s=0===i.minScale||a<=i.minScale,o=0===i.maxScale||a>=i.maxScale;i.visible&&(n||s&&o)&&(i.sublayers?i.sublayers.forEach(t):r.unshift(i))};t&&t.forEach(i);var a=this._get("visibleSublayers");return!a||a.length!==r.length||a.some((function(e,t){return r[t]!==e}))?r:a}},{key:"toJSON",value:function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=(0,i.Z)((0,i.Z)({},r),{},{layers:this.layers,layerDefs:this.layerDefs}),r}}]),t}((0,y.p)(u.Z));(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"dynamicLayers",null),(0,l._)([(0,c.Cb)()],b.prototype,"floors",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"hasDynamicLayers",null),(0,l._)([(0,c.Cb)()],b.prototype,"layer",null),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"layers",null),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"layerDefs",null),(0,l._)([(0,c.Cb)({type:Number})],b.prototype,"scale",void 0),(0,l._)([(0,c.Cb)(m.qG)],b.prototype,"timeExtent",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"version",null),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"visibleSublayers",null),b=(0,l._)([(0,h.j)("esri.layers.mixins.ExportImageParameters")],b)}}]);