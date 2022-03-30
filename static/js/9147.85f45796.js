"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9147],{93641:function(e,t,i){i.d(t,{CS:function(){return f},Cw:function(){return g},Yu:function(){return b},j5:function(){return m},lm:function(){return x}});var s=i(54560),r=i(68224),n=i(78136),a=i(35680),o=i(40199),l=i(58476),h=i(7730),d=i(43429),u=i(75012),p=i(15041),c=i(7804);const y={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function g(e){const t=e.folders||[],i=t.slice(),s=new Map,r=new Map,n=new Map,a=new Map,l=new Map,h={esriGeometryPoint:r,esriGeometryPolyline:n,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,o.d9)(e);t.featureSet.features=[];const i=e.featureSet.geometryType;s.set(i,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?_(r,l,e.featureSet.features):"esriGeometryPolyline"===i?_(n,l,e.featureSet.features):"esriGeometryPolygon"===i&&_(a,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const r=v(s,t.id,e.networkLinks);r&&i.push(r)}))})),i.forEach((e=>{if(e.featureInfos){e.points=(0,o.d9)(s.get("esriGeometryPoint")),e.polylines=(0,o.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,o.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=h[t.type].get(t.id);i&&e[y[t.type]].featureSet.features.push(i);break}case"GroundOverlay":{const i=l.get(t.id);i&&e.mapImages.push(i);break}}e.fullExtent=x([e])}}));const d=x(i);return{folders:t,sublayers:i,extent:d}}function f(e,t,i,n){const o=r.id&&r.id.findCredential(e);e=(0,l.fl)(e,{token:o&&o.token});const h=s.Z.kmlServiceUrl;return(0,a["default"])(h,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function m(e,t,i=null,s=[]){const r=[],n={},a=t.sublayers,o=t.folders.map((e=>e.id));return a.forEach((t=>{const a=new e;if(i?a.read(t,i):a.read(t),s.length&&o.indexOf(a.id)>-1&&(a.visible=-1!==s.indexOf(a.id)),n[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=n[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else r.unshift(a)})),r}function _(e,t,i){i.forEach((i=>{e.set(i.attributes[t],i)}))}function w(e,t){let i;return t.some((t=>t.id===e&&(i=t,!0))),i}function v(e,t,i){const s=w(e,i);return s&&(s.parentFolderId=t,s.networkLink=s),s}async function b(e){const t=c["default"].fromJSON(e.featureSet).features,i=e.layerDefinition,s=(0,p.i)(i.drawingInfo.renderer),r=n.Z.fromJSON(e.popupInfo),a=[];for(const n of t){const e=await s.getSymbolAsync(n);n.symbol=e,n.popupTemplate=r,n.visible=!0,a.push(n)}return a}function x(e){const t=(0,d.Ue)(d.Gv),i=(0,d.Ue)(d.Gv);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.mapImages)for(const e of s.mapImages)(0,u.Yg)(t,e.extent),(0,d.TC)(i,t)}return(0,d.fS)(i,d.Gv)?null:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:h.Z.WGS84}}},89748:function(e,t,i){i.d(t,{eY:function(){return y}});var s=i(27092),r=i(68491),n=i(33482),a=i(38683),o=i(80188),l=i(70306),h=i(29168);function d(e){return e&&"render"in e}function u(e){return e&&!("render"in e)}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function c(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new h.Z(e,s)}class y extends o.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,l=n*this.height,h=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,a.f)(i,s)),(0,r.c)(t,t,(0,a.f)(o/2,l/2)),(0,r.r)(t,t,-h),(0,r.c)(t,t,(0,a.f)(-o/2,-l/2)),(0,r.j)(t,t,(0,a.f)(o,l)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(e,this.sourceWidth,this.sourceHeight):this._texture=c(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(i))if(i instanceof l.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(p(i));else u(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},26797:function(e,t,i){i.d(t,{c:function(){return a}});var s=i(94947),r=i(49026),n=i(47303);class a extends n.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},70306:function(e,t,i){i.d(t,{Z:function(){return r}});i(48675),i(3462);var s=i(27092);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},69147:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}});i(21703);var s=i(63825),r=i(68224),n=i(35680),a=i(54643),o=i(36833),l=i(27092),h=i(58476),d=i(2553),u=(i(57787),i(35425),i(90202),i(92236)),p=i(7230),c=i(98267),y=i(7730),g=i(8470),f=i(93641),m=i(19724),_=i(74905),w=i(89748),v=i(26797),b=i(21211),x=i(43162),S=i(41815),C=i(74139);class V{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let I=class extends((0,b.y)(C.Z)){constructor(){super(...arguments),this._handles=new o.Z,this._bitmapIndex=new Map,this._mapImageContainer=new v.c,this._kmlVisualData=new V,this.allVisiblePoints=new _.J,this.allVisiblePolylines=new _.J,this.allVisiblePolygons=new _.J,this.allVisibleMapImages=new a.Z}async hitTest(e,t){var i,s,r;return(await Promise.all([null==(i=this._pointsView)?void 0:i.hitTest(e),null==(s=this._polylinesView)?void 0:s.hitTest(e),null==(r=this._polygonsView)?void 0:r.hitTest(e)])).flat().filter((e=>!!e&&(e.layer=this.layer,e.sourceLayer=this.layer,!0)))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new S.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new S.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new S.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const t of e){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&(0,n["default"])(e.href,{responseType:"image"}).then((({data:t})=>{let i=p.Z.fromJSON(e.extent);(0,g.Q8)(i,this.view.spatialReference)&&(i=(0,g.iV)(i,this.view.spatialReference));const s=new w.eY(t,"standard");s.x=i.xmin,s.y=i.ymax,s.resolution=i.width/t.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s)}))}async _getViewDependentUrl(e,t){const{viewFormat:i,viewBoundScale:s,httpQuery:n}=e;if((0,l.pC)(i)){if((0,l.Wi)(t))throw new Error("Loading this network link requires a view state.");let a;if(await(0,c.zD)(),(0,l.pC)(s)&&1!==s){const e=new p.Z(t.extent);e.expand(s),a=e}else a=t.extent;a=(0,c.iV)(a,y.Z.WGS84);const o=(0,c.iV)(a,y.Z.WebMercator),d=a.xmin,u=a.xmax,g=a.ymin,f=a.ymax,_=t.size[0]*t.pixelRatio,w=t.size[1]*t.pixelRatio,v=Math.max(o.width,o.height),b={"[bboxWest]":d.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":g.toString(),"[bboxNorth]":f.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":v.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":v.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":_.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":r.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const t in e)for(const i in b)e[t]=e[t].replace(i,b[i])},S=(0,h.u0)(i);x(S);let C={};(0,l.pC)(n)&&(C=(0,h.u0)(n),x(C));const V=(0,m.en)(e.href);return V.query={...V.query,...S,...C},`${V.path}?${(0,h.B7)(S)}`}return e.href}async _fetchService(){const e=new V;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t.visibility&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t){return this._fetchParsedKML(e).then((async e=>{for(const i of e.sublayers){t.allSublayers.set(i.id,i);const e=i.points?await(0,f.Yu)(i.points):[],s=i.polylines?await(0,f.Yu)(i.polylines):[],r=i.polygons?await(0,f.Yu)(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...e.map((e=>({item:e,sublayerId:i.id})))),t.allPolylines.push(...s.map((e=>({item:e,sublayerId:i.id})))),t.allPolygons.push(...r.map((e=>({item:e,sublayerId:i.id})))),t.allMapImages.push(...n.map((e=>({item:e,sublayerId:i.id})))),i.networkLink){const e=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(e,t)}}}))}_fetchParsedKML(e){return(0,f.CS)(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>(0,f.Cw)(e.data)))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};(0,s._)([(0,d.Cb)()],I.prototype,"_pointsView",void 0),(0,s._)([(0,d.Cb)()],I.prototype,"_polylinesView",void 0),(0,s._)([(0,d.Cb)()],I.prototype,"_polygonsView",void 0),(0,s._)([(0,d.Cb)()],I.prototype,"_fetchingPromise",void 0),(0,s._)([(0,d.Cb)()],I.prototype,"updating",void 0),I=(0,s._)([(0,u.j)("esri.views.2d.layers.KMLLayerView2D")],I);const P=I},21211:function(e,t,i){i.d(t,{y:function(){return P}});var s=i(63825),r=i(54643),n=i(80218),a=i(44621),o=i(2553),l=(i(57787),i(35425),i(90202),i(92236)),h=i(38430),d=i(71741);i(87441),i(61726);let u=class extends d.wq{};u=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],u);const p=u;var c;let y=c=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"version",null),y=c=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const g=y;i(75065);var f,m=i(22779),_=i(64316),w=i(7230),v=i(72110);const b={base:m.Z,key:"type",typeMap:{extent:w.Z,polygon:v.Z}};let x=f=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new f({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:b,json:{read:_.im,write:!0}})],x.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],x.prototype,"version",null),x=f=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],x);const S=x;let C=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],C.prototype,"version",null),C=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],C);const V=C,I=r.Z.ofType({key:"type",base:p,typeMap:{rect:g,path:V,geometry:S}}),P=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new I,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,a.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,a.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,a.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,a.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&e<=s&&(i=!0),!n&&e>=r&&(n=!0),t=i&&n}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,o.Cb)({type:I,set(e){const t=(0,n.Z)(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},43162:function(e,t,i){i.d(t,{Z:function(){return n}});var s=i(49026),r=i(97700);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},74139:function(e,t,i){i.d(t,{Z:function(){return y}});var s=i(63825),r=i(44171),n=i(78534),a=i(48595),o=i(7054),l=i(87441),h=i(27092),d=i(69324),u=i(2553),p=(i(57787),i(35425),i(90202),i(92236));let c=class extends((0,a.p)((0,o.I)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],c.prototype,"visible",null),c=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],c);const y=c}}]);