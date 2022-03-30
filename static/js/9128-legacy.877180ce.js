"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9128],{94212:function(e,t,i){i.d(t,{T:function(){return O}});var r=i(62032),n=i(16198),s=i(76133),a=i(92751),u=i(50460),o=i(87349),h=i(99418),l=i(49161),d=(i(78975),i(41539),i(54747),i(21249),i(78783),i(33948),i(24446)),c=i(4396),f=(i(18264),i(92222),i(82472),i(48675),i(92990),i(18927),i(33105),i(35035),i(74345),i(7174),i(32846),i(44731),i(77209),i(96319),i(58867),i(37789),i(33739),i(29368),i(14483),i(12056),i(3462),i(30678),i(27462),i(33824),i(55021),i(12974),i(15016),i(25585)),_=i(35425),v=i(87441),y=i(27092),p=(i(12794),i(17115)),k=(i(56770),i(28383),i(15401),i(29168)),E=(i(82595),i(92963)),x=i(63235),R=i(11047),g=i(46238),m=v.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),b=(0,g.g)(g.J,m),T=function(){function e(t,i,r){(0,s.Z)(this,e),this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;var n=t.buffer,a=t.pixelType,u=t.textureOnly,o=(0,R.UK)(a);this.shared=r,this.pixelType=a,this.size=i,this.textureOnly=u,u||(this.data=new o((0,y.Wg)(n))),this._resetRange()}return(0,a.Z)(e,[{key:"destroy",value:function(){var e=this;(0,y.Po)(this._texture,(function(e){return e.dispose()}));var t=function(t){(0,y.Po)(e._fbos[t],(function(e){"0"===t&&e.detachColorTexture(),e.dispose()})),e._fbos[t]=null};for(var i in this._fbos)t(i);this._texture=null}},{key:"_textureDesc",get:function(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}},{key:"setData",value:function(e,t,i){var r=(0,x.jL)(e),n=(0,y.Wg)(this.data),s=r*this.texelSize+t;!n||s>=n.length||(n[s]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}},{key:"getData",value:function(e,t){if((0,y.Wi)(this.data))return null;var i=(0,x.jL)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}},{key:"getTexture",value:function(e){var t=this;return(0,y.Pt)(this._texture,(function(){return t._initTexture(e)}))}},{key:"getFBO",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if((0,y.Wi)(this._fbos[t])){var i={colorTarget:0,depthStencilTarget:0},r=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new p.Z(e,i,r)}return this._fbos[t]}},{key:"locked",get:function(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!(0,_.Z)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}},{key:"hasDirty",get:function(){var e=this.dirtyStart;return this.dirtyEnd>=e}},{key:"updateTexture",value:function(e,t){if(!this.locked){try{var i=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();var n=(0,y.Wg)(this.data).buffer,s=this.getTexture(e),a=4,u=(i-i%this.size)/this.size,o=(r-r%this.size)/this.size,h=u,l=this.size,d=o,c=u*this.size*a,_=(l+d*this.size)*a-c,v=(0,R.UK)(this.pixelType),p=new v(n,c*v.BYTES_PER_ELEMENT,_),k=this.size,E=d-h+1;if(E>this.size)return void m.error(new f.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));s.updateData(0,0,h,k,E,p)}catch(x){}t()}}},{key:"update",value:function(e){var t=e.data,i=e.start,r=e.end;if((0,y.pC)(t))for(var n=this.data,s=i*this.texelSize,a=0;a<t.length;a++){var u=1<<a%this.texelSize;e.layout&u&&(n[s+a]=t[a])}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"resize",value:function(e,t){var i=this.size;if(this.size=t,this.textureOnly)i!==this.size&&(this._lastTexture=this._texture,this._texture=null);else{var r=(0,R.UK)(this.pixelType);this.destroy(),this.data=new r((0,y.Wg)(e.buffer))}}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}},{key:"_initTexture",value:function(e){var t=new k.Z(e,this._textureDesc,(0,y.Pt)(this.data,void 0));if((0,y.pC)(this._lastTexture)&&this._fbos[0]){var i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),u=(0,R.Yw)(n),o=new((0,R.UK)(n))(new ArrayBuffer(i*r*u*this.texelSize)),h=e.getBoundFramebufferObject(),l=e.getViewport(),d=l.x,c=l.y,f=l.width,_=l.height;e.bindFramebuffer(a),a.readPixels(0,0,i,r,s,n,o),t.updateData(0,0,0,2*i,r/2,o),e.setViewport(d,c,f,_),e.bindFramebuffer(h)}return this.destroy(),this._texture=t,this._texture}}]),e}(),S=function(){function e(t){(0,s.Z)(this,e),this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}return(0,a.Z)(e,[{key:"initialize",value:function(e){var t=e.blocks,i=e.shared,r=e.size;if(this.shared=i,this.size=r,b("Initializing AttributeStoreView",e),(0,y.Wi)(this._data))this._data=(0,y.Fd)(t,(function(e){return new T(e,r,i)}));else for(var n=0;n<this._data.length;n++){var s=this._data[n],a=t[n];(0,y.pC)(a)&&((0,y.Wi)(s)?this._data[n]=new T(a,r,i):s.resize(a,r))}this._initialized=!0}},{key:"destroy",value:function(){(0,y.Po)(this._data,(function(e){return(0,y.Fd)(e,(function(e){return e.destroy()}))})),(0,y.Po)(this._defaultTexture,(function(e){return e.dispose()}))}},{key:"isEmpty",value:function(){var e=this._data;return(0,y.Wi)(e)}},{key:"isUpdating",value:function(){var e=(0,y.pC)(this._pendingAttributeUpdate),t=e;return(0,_.Z)("esri-2d-log-updating"),t}},{key:"getBlock",value:function(e){return(0,y.Wi)(this._data)?null:this._data[e]}},{key:"setLabelMinZoom",value:function(e,t){this.setData(e,0,1,t)}},{key:"getLabelMinZoom",value:function(e){return this.getData(e,0,1,255)}},{key:"getFilterFlags",value:function(e){return this.getData(e,0,0,0)}},{key:"getVVSize",value:function(e){return this.getData(e,E.aK,0,0)}},{key:"getData",value:function(e,t,i,r){if(!this._data)return 0;var n=(0,y.Wg)(this._data)[t];if((0,y.Wi)(n))return 0;var s=n.getData(e,i);return(0,y.pC)(s)?s:r}},{key:"setData",value:function(e,t,i,r){var n=(0,y.Wg)(this._data)[t];(0,y.Wg)(n).setData(e,i,r)}},{key:"lockTextureUpload",value:function(){this._locked=!0}},{key:"unlockTextureUpload",value:function(){this._locked=!1}},{key:"forceTextureUpload",value:function(){this._forceNextUpload=!0}},{key:"requestUpdate",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this._pendingAttributeUpdate){e.next=2;break}return e.abrupt("return",void m.error(new f.Z("mapview-webgl","Tried to update attribute data with a pending update")));case 2:return i=(0,d.hh)(),e.abrupt("return",(b("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:i},i.promise));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){if(this._initialized&&(0,y.pC)(this._pendingAttributeUpdate)){for(var e=this._pendingAttributeUpdate,t=e.data,i=e.resolver,r=(0,y.Wg)(this._data),n=function(e){var i=t.blocks[e],n=r[e];(0,y.Po)(n,(function(t){return(0,y.Po)(i,(function(i){b("Updating block ".concat(e),i),t.update(i)}))}))},s=0;s<t.blocks.length;s++)n(s);this._pendingAttributeUpdate=null,i(),this._onUpdate()}}},{key:"bindTextures",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.update();var r=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(r,E.iJ),void(i&&(e.bindTexture(r,E.nM),e.bindTexture(r,E.Ij),e.bindTexture(r,E.f2)));var n=(0,y.Wg)(this._data);this._locked&&!this._forceNextUpload||((0,y.JR)(n,(function(i){return i.updateTexture(e,(function(){return t._onUpdate()}))})),this._forceNextUpload=!1),e.bindTexture((0,y.R2)(n[0],r,(function(t){return t.getTexture(e)})),E.iJ),i&&(e.bindTexture((0,y.R2)(n[1],r,(function(t){return t.getTexture(e)})),E.nM),e.bindTexture((0,y.R2)(n[2],r,(function(t){return t.getTexture(e)})),E.Ij),e.bindTexture((0,y.R2)(n[3],r,(function(t){return t.getTexture(e)})),E.f2))}},{key:"_getDefaultTexture",value:function(e){if((0,y.Wi)(this._defaultTexture)){var t={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new k.Z(e,t,new Uint8Array(4))}return this._defaultTexture}}]),e}(),w=i(28082),C=(i(44197),i(47038)),z=i(597),Z=i(19509),D=i(61471),M=i(11277);function P(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var r=1;r<i;r++)if(e<t[r].value){var n=(e-t[r-1].value)/(t[r].value-t[r-1].value);return t[r-1].size+n*(t[r].size-t[r-1].size)}return t[i-1].size}function F(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,y.Wi)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);var r=t.r,n=t.g,s=t.b,a=t.a;e[i+0]=r*a/255,e[i+1]=n*a/255,e[i+2]=s*a/255,e[i+3]=a}var I=function(){function e(){(0,s.Z)(this,e),this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}return(0,a.Z)(e,[{key:"getSizeVVFieldStops",value:function(e){var t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return(0,y.Pt)(t.levels[e],(function(){var i=1/0,r=0;for(var n in t.levels){var s=parseFloat(n),a=Math.abs(e-s);a<i&&(i=a,r=s)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};var u=Math.pow(2,(e-r)/2),o=(0,y.Wg)(t.levels[r]),h=new Float32Array(o.values);return h[2]*=u,h[3]*=u,{sizes:(0,y.Wg)(o.sizes),values:h}}))}}},{key:"vvMaterialParameters",get:function(){return this._vvMaterialParameters}},{key:"update",value:function(e){(0,y.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}},{key:"setInfo",value:function(e,t,i){this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type&&this._updateDotDensityInfo(e)}},{key:"getVariation",value:function(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:(0,M.Z)().supportsTextureFloat}}},{key:"getVariationHash",value:function(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}},{key:"_updateEffects",value:function(e){(0,y.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}},{key:"_updateVisualVariables",value:function(e,t){var i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,e){var r=e.size;if(r){if(i.vvSizeEnabled=!0,r.minMaxValue){var n,s,a=r.minMaxValue;if((0,R.$K)(a.minSize)&&(0,R.$K)(a.maxSize))if((0,R.hj)(a.minSize)&&(0,R.hj)(a.maxSize))n=(0,z.F2)(a.minSize),s=(0,z.F2)(a.maxSize);else{var u=t.scale;n=(0,z.F2)(P(u,a.minSize.stops)),s=(0,z.F2)(P(u,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,n,s])}if(r.scaleStops&&(this.vvSizeScaleStopsValue=(0,z.F2)(P(t.scale,r.scaleStops.stops))),r.unitValue){var o=(0,Z.c9)(t.spatialReference)/D.a[r.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/t.resolution}r.fieldStops&&(this._vvSizeFieldStops=r.fieldStops)}var h=e.color;h&&(i.vvColorEnabled=!0,this.vvColorValues.set(h.values),this.vvColors.set(h.colors));var l=e.opacity;l&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(l.values),this.vvOpacities.set(l.opacities));var d=e.rotation;d&&(i.vvRotationEnabled=!0,i.vvRotationType=d.type)}}},{key:"_updateDotDensityInfo",value:function(e){var t=e.attributes;this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed;for(var i=0;i<E.$0;i++){var r=i>=t.length?new C.Z([0,0,0,0]):t[i].color;F(this.ddColors,r,4*i)}for(var n=0;n<8;n++)this.ddActiveDots[n]=n<e.attributes.length?1:0;F(this.ddBackgroundColor,e.backgroundColor)}}]),e}(),O=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,s.Z)(this,i),r=t.call(this,e),r._rendererInfo=new I,r._materialItemsRequestQueue=new c.Z,r.attributeView=new S((function(){return r.onAttributeStoreUpdate()})),r}return(0,a.Z)(i,[{key:"destroy",value:function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}},{key:"setRendererInfo",value:function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}},{key:"getMaterialItems",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t,i){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return",null);case 2:return r=(0,d.hh)(),e.abrupt("return",(this._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:r}),this.requestRender(),r.promise));case 4:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}()},{key:"doRender",value:function(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0)for(var t=this._materialItemsRequestQueue.pop();t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();(0,u.Z)((0,o.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){var t,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.commit(e)}}catch(a){n.e(a)}finally{n.f()}this._rendererInfo.update(e.state),(0,u.Z)((0,o.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=(0,u.Z)((0,o.Z)(i.prototype),"createRenderParams",this).call(this,e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}},{key:"onAttributeStoreUpdate",value:function(){}},{key:"_processMaterialItemRequest",value:function(e,t){var i=this,r=t.items,n=t.abortOptions,s=t.resolver,a=e.painter,u=e.pixelRatio,o=r.map((function(e){return a.textureManager.rasterizeItem(e.symbol,u,e.glyphIds,n)}));Promise.all(o).then((function(e){if(i.stage){var t=e.map((function(e,t){return{id:r[t].id,mosaicItem:e}}));s.resolve(t)}else s.reject()}),s.reject)}}]),i}(w.Z)},28082:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(62032),n=i(76133),s=i(92751),a=i(50460),u=i(87349),o=i(99418),h=i(49161),l=i(35425),d=i(49026),c=i(47303),f=i(51847),_=i(70466),v=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,o.Z)(i,e);var t=(0,h.Z)(i);function i(e){var r;return(0,n.Z)(this,i),r=t.call(this),r._tileInfoView=e,r}return(0,s.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(v),this.setStencilReference(),(0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,r=(0,a.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}},{key:"prepareRenderPasses",value:function(e){var t=this,r=(0,a.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[_.Z],drawPhase:d.jx.DEBUG|d.jx.MAP|d.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,l.Z)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:d.jx.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=(0,r.Z)(this.children);try{for(i.s();!(t=i.n()).done;){var n=t.value,s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}}catch(a){i.e(a)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=(0,r.Z)(this.children);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.stencilRef=t++}}catch(s){i.e(s)}finally{i.f()}}}]),i}(c.Z)},35819:function(e,t,i){i.d(t,{I:function(){return d}});var r=i(2394),n=i(76133),s=i(92751),a=i(99418),u=i(49161),o=i(68491),h=i(80188),l=i(12744),d=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,s,a,u){var o,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u;return(0,n.Z)(this,i),o=t.call(this),o.triangleCountReportedInDebug=0,o.triangleCount=0,o.texture=null,o.key=new l.Z(e),o.x=r,o.y=s,o.width=a,o.height=u,o.rangeX=h,o.rangeY=d,o}return(0,s.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,s=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(s,2),u=a[0],h=a[1],l=this.width/this.rangeX*i,d=this.height/this.rangeY*i;(0,o.s)(n,l,0,0,0,d,0,u,h,1),(0,o.m)(this.transforms.dvs,e.displayViewMat3,n)}}]),i}(h.s)},65007:function(e,t,i){i.d(t,{o:function(){return k}});var r=i(2394),n=i(50460),s=i(87349),a=i(99418),u=i(49161),o=i(76133),h=i(92751),l=i(55630),d=i(68491),c=i(33482),f=i(41666),_=i(38683),v=i(92963),y=i(35819),p=function(){function e(){(0,o.Z)(this,e)}return(0,h.Z)(e,[{key:"acquire",value:function(e){return{refCount:1,version:-1,labelMat2d:(0,c.c)(),tileMat3:(0,c.c)(),dvs:(0,c.c)()}}},{key:"release",value:function(e){}}]),e}(),k=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,n){return(0,o.Z)(this,i),t.call(this,e,r,n,v.I_,v.I_)}return(0,h.Z)(i,[{key:"destroy",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"destroy",this).call(this),this._transforms&&i.TransformCache.release(this.key.hash)}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,s=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(s,2),u=a[0],o=a[1],h=this.width/this.rangeX*i,c=this.height/this.rangeY*i;(0,d.s)(n,h,0,0,0,c,0,u,o,1),(0,d.m)(this.transforms.dvs,e.displayViewMat3,n);var v=this.transforms.labelMat2d,y=e.getScreenTransform(v,t),p=(0,_.c)();(0,f.t)(p,[this.x,this.y],y),(0,l.i)(v),(0,l.t)(v,v,p),(0,l.m)(v,e.viewMat2d,v)}},{key:"_createTransforms",value:function(){return i.TransformCache.acquire(this.key.hash)}}]),i}(y.I);k.TransformCache=new p},34229:function(e,t,i){i.d(t,{$:function(){return o}});var r=i(76133),n=i(92751),s=(i(41539),i(65125),i(48675),i(92990),i(18927),i(33105),i(35035),i(74345),i(7174),i(32846),i(44731),i(77209),i(96319),i(58867),i(37789),i(33739),i(29368),i(14483),i(12056),i(3462),i(30678),i(27462),i(33824),i(55021),i(12974),i(15016),i(29254),i(51532),i(78783),i(33948),i(44197),i(27092)),a=i(92963),u=2147483647,o=function(){function e(t){(0,r.Z)(this,e),this._head=t,this._cursor=t}return(0,n.Z)(e,[{key:"size",value:function(){for(var e=this._cursor,t=0;e;)t+=e.size(),e=e._link;return t}},{key:"id",get:function(){return this._cursor.id},set:function(e){this._cursor.id=e}},{key:"materialKey",get:function(){return this._cursor.materialKey},set:function(e){this._cursor.materialKey=e}},{key:"insertAfter",get:function(){return this._cursor.insertAfter}},{key:"indexFrom",get:function(){return this._cursor.indexFrom},set:function(e){this._cursor.indexFrom=e}},{key:"indexCount",get:function(){return this._cursor.indexCount},set:function(e){this._cursor.indexCount=e}},{key:"vertexFrom",get:function(){return this._cursor.vertexFrom},set:function(e){this._cursor.vertexFrom=e}},{key:"vertexCount",get:function(){return this._cursor.vertexCount},set:function(e){this._cursor.vertexCount=e}},{key:"sortKey",get:function(){return this._cursor.sortKey},set:function(e){this._cursor.sortKey=e}},{key:"index",get:function(){return this._cursor._indexStart+this._cursor._index}},{key:"seekIndex",value:function(e){var t=e;for(this._cursor=this._head;this._cursor;){var i=this._cursor.size();if(t<i)return this._cursor._index=t,!0;t-=i,this._cursor=this._cursor._link}return!1}},{key:"forEach",value:function(e){for(var t=this.getCursor();t.next();)e(t)}},{key:"link",value:function(e){if(this._head){for(var t=this._head;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}else this._head=e._head}},{key:"getCursor",value:function(){return this.copy()}},{key:"lookup",value:function(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}},{key:"copy",value:function(){var t,i=new e(null==(t=this._head)?void 0:t.copy());if(!i._head)return i;for(var r=i._head,n=i._head._link;n;)r._link=n.copy(),r=n,n=r._link;return i}},{key:"next",value:function(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}},{key:"peekId",value:function(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}},{key:"delete",value:function(e){for(var t=this._head,i=null;t;){if(t.delete(e))return t.isEmpty()&&((0,s.pC)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;i=t,t=t._link}return!1}}],[{key:"from",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength/h.BYTES_PER_RECORD-i,n=new h(new Int32Array(t,i*h.BYTES_PER_RECORD,r*h.ELEMENTS_PER_RECORD));return new e(n)}}]),e}();o.ELEMENTS_PER_RECORD=a.XJ,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;var h=function(){function e(t){(0,r.Z)(this,e),this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}return(0,n.Z)(e,[{key:"delete",value:function(e){var t=this._index,i=this.lookup(e);if(i)for(this.id=u,++this._deletedCount;this.next()&&this.id===e;)this.id=u,++this._deletedCount;return this._index=t,i}},{key:"isEmpty",value:function(){return this._deletedCount===this.size()}},{key:"link",value:function(e){this._link?this._link.link(e):this._link=e}},{key:"lookup",value:function(e){if((0,s.Wi)(this._offsets.instance)){this._offsets.instance=new Map;var t=this.copy();t._index=-1;for(var i=0;t.next();)t.id!==i&&(this._offsets.instance.set(t.id,t._index),i=t.id)}if(!this._offsets.instance.has(e))return!1;var r=this._index;return this._index=this._offsets.instance.get(e),this.id!==u||(this._index=r,!1)}},{key:"id",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD]=t}},{key:"materialKey",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+1]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+1]=t}},{key:"insertAfter",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+2]}},{key:"indexFrom",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+3]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+3]=t}},{key:"indexCount",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+4]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+4]=t}},{key:"vertexFrom",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+5]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+5]=t}},{key:"vertexCount",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+6]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+6]=t}},{key:"sortKey",get:function(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*e.ELEMENTS_PER_RECORD+7]},set:function(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*e.ELEMENTS_PER_RECORD+7]=t}},{key:"index",get:function(){return this._index}},{key:"size",value:function(){return this._packedRecords.length/e.ELEMENTS_PER_RECORD}},{key:"next",value:function(){for(;++this._index<this.size()&&this.id===u;);return this._index<this.size()}},{key:"peekId",value:function(){var t=(this._index+1)*e.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t=new e(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}],[{key:"from",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength/this.BYTES_PER_RECORD-i;return new e(new Int32Array(t,i*this.BYTES_PER_RECORD,r*this.ELEMENTS_PER_RECORD))}}]),e}();h.ELEMENTS_PER_RECORD=a.XJ,h.BYTES_PER_RECORD=h.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT}}]);