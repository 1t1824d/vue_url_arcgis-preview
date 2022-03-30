"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[7219],{21440:function(e,t,n){n.d(t,{QM:function(){return u},hy:function(){return o},uI:function(){return a}});var i=n(62032),r=(n(35837),n(92222),n(41539),n(76495),n(48675),n(92990),n(18927),n(33105),n(35035),n(74345),n(7174),n(32846),n(44731),n(77209),n(96319),n(58867),n(37789),n(33739),n(29368),n(14483),n(12056),n(3462),n(30678),n(27462),n(33824),n(55021),n(12974),n(15016),n(9653),n(70189),n(78783),n(33948),n(49743),n(29135),n(82472),n(14937)),a=function(){if(!("document"in globalThis))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d"),n=512;return e.height=n,e.width=1,function(n){t.clearRect(0,0,1,e.height);var r,a=t.createLinearGradient(0,0,0,e.height),u=(0,i.Z)(n.colorStops);try{for(u.s();!(r=u.n()).done;){var o=r.value,l=o.ratio,s=o.color;a.addColorStop(Math.max(l,.001),"rgba(".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3],")"))}}catch(c){u.e(c)}finally{u.f()}return t.fillStyle=a,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function u(e,t,n,r){var a,u,o=t.blurRadius,l=t.fieldOffset,f=t.field,h=new Float64Array(n*r),d=s(o),y=Math.round(3*o),v=Number.NEGATIVE_INFINITY,p=c(f,l),g=new Set,m=(0,i.Z)(e);try{for(m.s();!(u=m.n()).done;)for(var x=u.value,I=x.getCursor();I.next();){var k=I.getObjectId();if(!g.has(k)){g.add(k);var w=I.readLegacyPointGeometry(),b=128;if(!(w.x<-b||w.x>=n+b||w.y<-b||w.y>r+b))for(var _=+p(I),P=Math.round(w.x)-y,T=Math.round(w.y)-y,C=Math.max(0,P),M=Math.max(0,T),U=Math.min(r,Math.round(w.y)+y),R=Math.min(n,Math.round(w.x)+y),Z=M;Z<U;Z++)for(var A=d[Z-T],V=C;V<R;V++){var q=d[V-P];a=h[Z*n+V]+=A*q*_,a>v&&(v=a)}}}}catch(E){m.e(E)}finally{m.f()}return{matrix:h.buffer,max:v}}function o(e,t,n,i,r,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var u=e.getImageData(0,0,t,t);n&&i&&u.data.set(new Uint8ClampedArray(l(t,n,i,r,a))),e.putImageData(u,0,0)}function l(e,t,n,i,a){for(var u=new Uint32Array(e*e),o=("buffer"in t?t:new Float64Array(t)),l=("buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer)),s=l.length/(a-i),c=0;c<o.length;c++){var f=o[c],h=Math.floor((f-i)*s);u[c]=l[(0,r.uZ)(h,0,l.length-1)]}return u.buffer}function s(e){for(var t=Math.round(3*e),n=2*e*e,i=new Float64Array(2*t+1),r=0;r<=i.length;r++)i[r]=Math.exp(-Math.pow(r-t,2)/n)/Math.sqrt(2*Math.PI)*(e/2);return i}function c(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(n){return+n.readAttribute(e)+t}:function(e){return 1}}},93743:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(76133),r=n(92751),a=n(99418),u=n(49161),o=(n(51532),n(41539),n(78783),n(33948),n(54747),n(63825)),l=n(48595),s=n(2553),c=(n(57787),n(35425),n(90202),n(92236)),f=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),r.tiles=new Map,r}return(0,r.Z)(n,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,n=this.createTile(e);return n.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,n),n}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),n}(l.r);(0,o._)([(0,s.Cb)()],f.prototype,"layer",void 0),(0,o._)([(0,s.Cb)()],f.prototype,"layerView",void 0),(0,o._)([(0,s.Cb)()],f.prototype,"tileInfoView",void 0),(0,o._)([(0,s.Cb)()],f.prototype,"updating",null),f=(0,o._)([(0,c.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],f);var h=f},77219:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(76133),r=n(92751),a=n(99418),u=n(49161),o=(n(83753),n(41539),n(54747),n(63825)),l=(n(87441),n(90202),n(57787),n(35425),n(61726),n(92236)),s=n(21440),c=n(25997),f=n(93743),h=function(){function e(){(0,i.Z)(this,e),this.gradient=null,this.height=512,this.width=512}return(0,r.Z)(e,[{key:"render",value:function(e){(0,s.hy)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}]),e}(),d=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),r._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new c.s(e.tileInfoView),r}return(0,r.Z)(n,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var n=t.minPixelIntensity,i=t.maxPixelIntensity;this._intensityInfo.minPixelIntensity=n,this._intensityInfo.maxPixelIntensity=i,this._gradient=(0,s.uI)(t.toJSON()),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minPixelIntensity=n,r.maxPixelIntensity=i,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var n=e.intensityInfo,i=this._intensityInfo,r=i.minPixelIntensity,a=i.maxPixelIntensity,u=t.bitmap.source||new h;u.intensities=n&&n.matrix||null,u.minPixelIntensity=r,u.maxPixelIntensity=a,u.gradient=this._gradient,t.bitmap.source=u,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}}},{key:"onTileError",value:function(e){}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}},{key:"fetchResource",value:function(e,t){return Promise.reject()}}]),n}(f.Z);d=(0,o._)([(0,l.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],d);var y=d}}]);