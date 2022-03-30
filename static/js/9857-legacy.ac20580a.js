"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9857],{89748:function(e,t,i){i.d(t,{eY:function(){return w}});var r=i(2394),n=i(76133),a=i(92751),o=i(43263),u=i(50460),s=i(87349),h=i(99418),l=i(49161),c=i(27092),d=i(68491),p=i(33482),f=i(38683),g=i(80188),v=i(70306),x=i(29168);function m(e){return e&&"render"in e}function _(e){return e&&!("render"in e)}function y(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function k(e,t,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(r.width=t,r.height=i),new x.Z(e,r)}var w=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,n.Z)(this,i),e=t.call(this),e.requestRenderOnSourceChangedEnabled=u,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=a,e.source=r,e.requestRender=e.requestRender.bind((0,o.Z)(e)),e}return(0,a.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,u.Z)((0,s.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,p.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,r.Z)(i,2),a=n[0],o=n[1],u=this.resolution/this.pixelRatio/e.resolution,s=u*this.width,h=u*this.height,l=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,f.f)(a,o)),(0,d.c)(t,t,(0,f.f)(s/2,h/2)),(0,d.r)(t,t,-l),(0,d.c)(t,t,(0,f.f)(-s/2,-h/2)),(0,d.j)(t,t,(0,f.f)(s,h)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=k(e,this.sourceWidth,this.sourceHeight):this._texture=k(e));var i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),m(i))if(i instanceof v.Z){var r=i.getRenderedRasterPixels();this._texture.setData((0,c.pC)(r)?r.renderedRasterPixels:null)}else this._texture.setData(y(i));else _(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(g.s)},26797:function(e,t,i){i.d(t,{c:function(){return p}});var r=i(1936),n=i(76133),a=i(92751),o=i(50460),u=i(87349),s=i(99418),h=i(49161),l=(i(41539),i(92222),i(94947)),c=i(49026),d=i(47303),p=function(e){(0,s.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[l.U.bitmap],target:function(){return t.children},drawPhase:c.jx.MAP});return[].concat((0,r.Z)((0,o.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}}]),i}(d.Z)},70306:function(e,t,i){i.d(t,{Z:function(){return o}});var r=i(76133),n=i(92751),a=(i(57327),i(41539),i(82472),i(48675),i(92990),i(18927),i(33105),i(35035),i(74345),i(7174),i(32846),i(44731),i(77209),i(96319),i(58867),i(37789),i(33739),i(29368),i(14483),i(12056),i(3462),i(30678),i(27462),i(33824),i(55021),i(12974),i(15016),i(27092)),o=function(){function e(t,i,n){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,a.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,a.Wi)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},33503:function(e,t,i){i.d(t,{Z:function(){return W}});var r=i(62032),n=i(16198),a=i(76133),o=i(92751),u=i(99418),s=i(49161),h=(i(78975),i(26699),i(32023),i(41539),i(54747),i(78783),i(33948),i(63825)),l=i(44171),c=i(24446),d=i(2553),p=(i(57787),i(35425),i(90202),i(92236)),f=i(7230),g=i(49938),v=i(71563),x=i(96090),m=i(2394),_=Math.PI/180;function y(e){return e*_}function k(e,t){var i=y(t.rotation),r=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),a=(0,m.Z)(t.size,2),o=a[0],u=a[1];return e[0]=Math.round(u*n+o*r),e[1]=Math.round(u*r+o*n),e}function w(e,t,i,r){var n=(0,m.Z)(t,2),a=n[0],o=n[1],u=(0,m.Z)(r,2),s=u[0],h=u[1],l=.5*i;return e[0]=a-l*s,e[1]=o-l*h,e[2]=a+l*s,e[3]=o+l*h,e}var R=i(89748),Z=i(7014),b=i(12744),M=(0,g.Ue)(),S=[0,0],B=new b.Z(0,0,0,0),C={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1},P=function(e){(0,u.Z)(i,e);var t=(0,s.Z)(i);function i(e){var o;return(0,a.Z)(this,i),o=t.call(this,e),o._imagePromise=null,o.bitmaps=[],o.hidpi=C.hidpi,o.imageMaxWidth=C.imageMaxWidth,o.imageMaxHeight=C.imageMaxHeight,o.imageRotationSupported=C.imageRotationSupported,o.imageNormalizationSupported=C.imageNormalizationSupported,o.update=(0,c.Ds)(function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,i){var a,u,s,h,l,c,d,p,f,g,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.stationary&&!o.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return a=t.state,u=(0,v.C5)(a.spatialReference),s=o.hidpi?t.pixelRatio:1,h=o.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0],h?(S[0]=a.worldScreenWidth,S[1]=a.size[1]):o.imageRotationSupported?(S[0]=a.size[0],S[1]=a.size[1]):k(S,a),l=Math.floor(S[0]*s)>o.imageMaxWidth||Math.floor(S[1]*s)>o.imageMaxHeight,c=u&&(a.extent.xmin<u.valid[0]||a.extent.xmax>u.valid[1]),d=!o.imageNormalizationSupported&&c,p=!l&&!d,f=o.imageRotationSupported?a.rotation:0,p?(g=h?a.paddedViewState.center:a.center,o._imagePromise=o._singleExport(a,S,g,a.resolution,f,s,i)):(x=Math.min(o.imageMaxWidth,o.imageMaxHeight),d&&(x=Math.min(a.worldScreenWidth,x)),o._imagePromise=o._tiledExport(a,x,f,s,i)),e.abrupt("return",o._imagePromise.then(function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var i,n,a,u,s,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o._imagePromise=null,!o.destroyed){o.bitmaps=null!=t?t:[],i=(0,r.Z)(o.container.children);try{for(a=function(){var e=n.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},i.s();!(n=i.n()).done;)a()}catch(l){i.e(l)}finally{i.f()}u=(0,r.Z)(t);try{for(u.s();!(s=u.n()).done;)h=s.value,o.container.addChild(h),h.fadeIn()}catch(l){u.e(l)}finally{u.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw o._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),5e3),o}return(0,o.Z)(i,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,i=(0,r.Z)(this.container.children);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(!n.visible||!n.stage)return;e(n),n.invalidateTexture(),n.requestRender()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_export",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,i,r,n,a,o){var u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(i*a),Math.floor(r*a),{rotation:n,pixelRatio:a,signal:o});case 2:return u=e.sent,s=new R.eY(u,"additive"),e.abrupt("return",(s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i,s.rotation=n,s.pixelRatio=a,s));case 5:case"end":return e.stop()}}),e,this)})));function t(t,i,r,n,a,o){return e.apply(this,arguments)}return t}()},{key:"_singleExport",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,i,r,n,a,o,u){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return w(M,r,n,i),s=new f.Z(M[0],M[1],M[2],M[3],t.spatialReference),e.next=4,this._export(s,i[0],i[1],a,o,u);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));function t(t,i,r,n,a,o,u){return e.apply(this,arguments)}return t}()},{key:"_tiledExport",value:function(e,t,i,r,n){var a=this,o=x.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),u=new Z.Z(o),s=u.getTileCoverage(e);if(!s)return null;var h=[];return s.forEach((function(o,s,l,c){B.set(o,s,l,c),u.getTileBounds(M,B);var d=new f.Z(M[0],M[1],M[2],M[3],e.spatialReference);h.push(a._export(d,t,t,i,r,n))})),Promise.all(h)}}]),i}(l.Z);(0,h._)([(0,d.Cb)()],P.prototype,"_imagePromise",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"bitmaps",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"container",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"fetchSource",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"hidpi",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"imageMaxWidth",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"imageMaxHeight",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"imageRotationSupported",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"imageNormalizationSupported",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"requestUpdate",void 0),(0,h._)([(0,d.Cb)()],P.prototype,"updating",null),P=(0,h._)([(0,p.j)("esri.views.2d.layers.support.ExportStrategy")],P);var W=P}}]);