"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9505],{89748:function(t,e,i){i.d(e,{eY:function(){return g}});var s=i(27092),r=i(68491),n=i(33482),o=i(38683),a=i(80188),h=i(70306),l=i(29168);function d(t){return t&&"render"in t}function u(t){return t&&!("render"in t)}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function c(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new l.Z(t,s)}class g extends a.s{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(t){const e=(0,r.b)(this.transforms.dvs),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/t.resolution,a=n*this.width,h=n*this.height,l=Math.PI*this.rotation/180;(0,r.c)(e,e,(0,o.f)(i,s)),(0,r.c)(e,e,(0,o.f)(a/2,h/2)),(0,r.r)(e,e,-l),(0,r.c)(e,e,(0,o.f)(-a/2,-h/2)),(0,r.j)(e,e,(0,o.f)(a,h)),(0,r.m)(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(t){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(t,this.sourceWidth,this.sourceHeight):this._texture=c(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(i))if(i instanceof h.Z){const t=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(t)?t.renderedRasterPixels:null)}else this._texture.setData(p(i));else u(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},26797:function(t,e,i){i.d(e,{c:function(){return o}});var s=i(94947),r=i(49026),n=i(47303);class o extends n.Z{get requiresDedicatedFBO(){return this.children.some((t=>"additive"===t.blendFunction))}prepareRenderPasses(t){const e=t.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(t),e]}}},70306:function(t,e,i){i.d(e,{Z:function(){return r}});i(48675),i(3462);var s=i(27092);class r{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if((0,s.Wi)(e))return;const i=this.filter({pixelBlock:e});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),t.putImageData(n,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(t.pixelBlock)?null:{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}},21211:function(t,e,i){i.d(e,{y:function(){return P}});var s=i(63825),r=i(54643),n=i(80218),o=i(44621),a=i(2553),h=(i(57787),i(35425),i(90202),i(92236)),l=i(38430),d=i(71741);i(87441),i(61726);let u=class extends d.wq{};u=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],u);const p=u;var c;let g=c=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],g.prototype,"version",null),g=c=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],g);const y=g;i(75065);var v,_=i(22779),m=i(64316),x=i(7230),f=i(72110);const b={base:_.Z,key:"type",typeMap:{extent:x.Z,polygon:f.Z}};let w=v=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new v({geometry:this.geometry.clone()})}};(0,s._)([(0,a.Cb)({types:b,json:{read:m.im,write:!0}})],w.prototype,"geometry",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],w.prototype,"version",null),w=v=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],w);const R=w;let C=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],C.prototype,"version",null),C=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],C);const S=C,M=r.Z.ofType({key:"type",base:p,typeMap:{rect:y,path:S,geometry:R}}),P=t=>{let e=class extends t{constructor(){super(...arguments),this.clips=new M,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var t;this.container||(this.container=new l.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,o.S1)(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,o.S1)(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1)}),!0),(0,o.S1)(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t)}),!0),(0,o.S1)(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(t){let e=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&t<=s&&(i=!0),!n&&t>=r&&(n=!0),e=i&&n}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,a.Cb)({type:M,set(t){const e=(0,n.Z)(t,this._get("clips"),M);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"moving",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"attached",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"suspended",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"updating",null),(0,s._)([(0,a.Cb)()],e.prototype,"view",void 0),e=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],e),e}},33503:function(t,e,i){i.d(e,{Z:function(){return C}});var s=i(63825),r=i(44171),n=i(24446),o=i(2553),a=(i(57787),i(35425),i(90202),i(92236)),h=i(7230),l=i(49938),d=i(71563),u=i(96090);const p=Math.PI/180;function c(t){return t*p}function g(t,e){const i=c(e.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[n,o]=e.size;return t[0]=Math.round(o*r+n*s),t[1]=Math.round(o*s+n*r),t}function y(t,e,i,s){const[r,n]=e,[o,a]=s,h=.5*i;return t[0]=r-h*o,t[1]=n-h*a,t[2]=r+h*o,t[3]=n+h*a,t}var v=i(89748),_=i(7014),m=i(12744);const x=(0,l.Ue)(),f=[0,0],b=new m.Z(0,0,0,0),w={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let R=class extends r.Z{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=w.hidpi,this.imageMaxWidth=w.imageMaxWidth,this.imageMaxHeight=w.imageMaxHeight,this.imageRotationSupported=w.imageRotationSupported,this.imageNormalizationSupported=w.imageNormalizationSupported,this.update=(0,n.Ds)((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,s=(0,d.C5)(i.spatialReference),r=this.hidpi?t.pixelRatio:1,n=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];n?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):g(f,i);const o=Math.floor(f[0]*r)>this.imageMaxWidth||Math.floor(f[1]*r)>this.imageMaxHeight,a=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),h=!this.imageNormalizationSupported&&a,l=!o&&!h,u=this.imageRotationSupported?i.rotation:0;if(l){const t=n?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,f,t,i.resolution,u,r,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,u,r,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,s,r,n){const o=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n}),a=new v.eY(o,"additive");return a.x=t.xmin,a.y=t.ymax,a.resolution=t.width/e,a.rotation=s,a.pixelRatio=r,a}async _singleExport(t,e,i,s,r,n,o){y(x,i,s,e);const a=new h.Z(x[0],x[1],x[2],x[3],t.spatialReference);return[await this._export(a,e[0],e[1],r,n,o)]}_tiledExport(t,e,i,s,r){const n=u.Z.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),o=new _.Z(n),a=o.getTileCoverage(t);if(!a)return null;const l=[];return a.forEach(((n,a,d,u)=>{b.set(n,a,d,u),o.getTileBounds(x,b);const p=new h.Z(x[0],x[1],x[2],x[3],t.spatialReference);l.push(this._export(p,e,e,i,s,r))})),Promise.all(l)}};(0,s._)([(0,o.Cb)()],R.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"updating",null),R=(0,s._)([(0,a.j)("esri.views.2d.layers.support.ExportStrategy")],R);const C=R},74139:function(t,e,i){i.d(e,{Z:function(){return g}});var s=i(63825),r=i(44171),n=i(78534),o=i(48595),a=i(7054),h=i(87441),l=i(27092),d=i(69324),u=i(2553),p=(i(57787),i(35425),i(90202),i(92236));let c=class extends((0,o.p)((0,a.I)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t),t}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var t;return!0===(null==(t=this.layer)?void 0:t.visible)}set visible(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},e=this;return e.view&&e.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],c.prototype,"visible",null),c=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],c);const g=c},68801:function(t,e,i){i.d(e,{y:function(){return l}});var s=i(63825),r=i(87441),n=i(24446),o=i(44621),a=i(2553),h=(i(57787),i(35425),i(90202),i(92236));const l=t=>{let e=class extends t{initialize(){this.handles.add((0,o.on)(this,"layer","refresh",(t=>{this.doRefresh(t.dataChanged).catch((t=>{(0,n.D_)(t)||r.Z.getLogger(this.declaredClass).error(t)}))})),"RefreshableLayerView")}};return(0,s._)([(0,a.Cb)()],e.prototype,"layer",void 0),e=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],e),e}}}]);