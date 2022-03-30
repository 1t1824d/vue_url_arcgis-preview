"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[547],{90547:function(e,t,r){r.r(t),r.d(t,{destroyContext:function(){return P},dracoDecompressPointCloudData:function(){return y},filterObbsForModifications:function(){return d},filterObbsForModificationsSync:function(){return R},initialize:function(){return I},interpretObbModificationResults:function(){return L},process:function(){return p},setLegacySchema:function(){return w},setModifications:function(){return g},setModificationsSync:function(){return _},test:function(){return F}});var n,o,i,u=r(16198),a=(r(78975),r(41539),r(76495),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(82472),r(68309),r(8255),r(29135),r(27092)),s=r(17914),f=(r(78783),r(33948),r(22434));function c(){return n||(n=new Promise((function(e){return r.e(1667).then(r.bind(r,61667)).then((function(e){return e.i})).then((function(t){var r=t.default,n=r({locateFile:l,onRuntimeInitialized:function(){return e(n)}});delete n.then}))})).catch((function(e){return Promise.reject(e)}))),n}function l(e){return(0,f.V)("esri/libs/i3s/".concat(e))}function p(e){return h.apply(this,arguments)}function h(){return h=(0,u.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return r=[t.geometryBuffer],e.abrupt("return",{result:A(t,r),transferList:r});case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return b=(0,u.Z)(regeneratorRuntime.mark((function e(t){var r,n,o,u,a,f,c,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:if(n=[t.geometryBuffer],o=t.geometryBuffer,u=o.byteLength,a=i._malloc(u),f=new Uint8Array(i.HEAPU8.buffer,a,u),f.set(new Uint8Array(o)),c=i.dracoDecompressPointCloudData(a,f.byteLength),i._free(a),!(c.error.length>0)){e.next=7;break}throw"i3s.wasm: ".concat(c.error);case 7:return l=(null==(r=c.featureIds)?void 0:r.length)>0?(0,s.tP)(c.featureIds):null,p=(0,s.tP)(c.positions),l&&n.push(l.buffer),n.push(p.buffer),e.abrupt("return",{result:{positions:p,featureIds:l},transferList:n});case 10:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return m=(0,u.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return R(t),r={buffer:t.buffer},e.abrupt("return",{result:r,transferList:[r.buffer]});case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(e){return E.apply(this,arguments)}function E(){return E=(0,u.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:_(t);case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function w(e){return v.apply(this,arguments)}function v(){return v=(0,u.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:i.setLegacySchema(t.context,t.jsonSchema);case 3:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function P(e){x(e)}function _(e){for(var t=e.modifications,r=i._malloc(8*t.length),n=new Float64Array(i.HEAPU8.buffer,r,t.length),o=0;o<t.length;++o)n[o]=t[o];i.setModifications(e.context,r,t.length,e.isGeodetic),i._free(r)}function A(e,t){if(!i)return null;var r=e.context,n=e.localOrigin,o=e.globalTrafo,u=e.mbs,f=e.obb,c=e.elevationOffset,l=e.geometryBuffer,p=e.geometryDescriptor,h=e.indexToVertexProjector,y=e.vertexToRenderProjector,b=i._malloc(l.byteLength),d=33,m=i._malloc(d*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(i.HEAPU8.buffer,b,l.byteLength);g.set(new Uint8Array(l));var E=new Float64Array(i.HEAPU8.buffer,m,d);T(E,n);var w=E.byteOffset+3*E.BYTES_PER_ELEMENT,v=new Float64Array(E.buffer,w);T(v,o),w+=16*E.BYTES_PER_ELEMENT,v=new Float64Array(E.buffer,w),T(v,u),w+=4*E.BYTES_PER_ELEMENT,(0,a.pC)(f)&&(v=new Float64Array(E.buffer,w),T(v,f.center),w+=3*E.BYTES_PER_ELEMENT,v=new Float64Array(E.buffer,w),T(v,f.halfSize),w+=3*E.BYTES_PER_ELEMENT,v=new Float64Array(E.buffer,w),T(v,f.quaternion));var P=p,_={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:P.featureIndex},A=i.process(r,!!e.obb,b,g.byteLength,P,_,m,c,h,y,e.normalReferenceFrame);if(i._free(m),i._free(b),A.error.length>0)throw"i3s.wasm: ".concat(A.error);if(A.discarded)return null;var L=A.componentOffsets.length>0?(0,s.tP)(A.componentOffsets):null,R=A.featureIds.length>0?(0,s.tP)(A.featureIds):null,x=(0,s.tP)(A.interleavedVertedData).buffer,I=1===A.indicesType?(0,s.tP)(new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2)):(0,s.tP)(new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4)),F=(0,s.tP)(A.positions),M=1===A.positionIndicesType?(0,s.tP)(new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2)):(0,s.tP)(new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4)),O={layout:e.layouts[0],interleavedVertexData:x,indices:I,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:F,indices:M}};return R&&t.push(R.buffer),L&&t.push(L.buffer),t.push(x),t.push(I.buffer),t.push(F.buffer),t.push(M.buffer),{componentOffsets:L,featureIds:R,transformedGeometry:O,obb:A.obb}}function L(e){return 0===e?0:1===e?1:2===e?2:3}function R(e){var t=e.context,r=e.buffer,n=i._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(i.HEAPU8.buffer,n,o),a=new Float64Array(r);u.set(a),i.filterOBBs(t,n,o),a.set(u),i._free(n)}function x(e){i&&i.destroy(e)}function T(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}function I(){return i?Promise.resolve():(o||(o=c().then((function(e){i=e,o=null}))),o)}var F={transform:A,destroy:x}}}]);