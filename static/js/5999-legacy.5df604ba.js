"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[5999],{35999:function(e,t,r){r.r(t),r.d(t,{toBinaryGLTF:function(){return ee}});var i=r(76133),n=r(92751),s=(r(41539),r(74916),r(23123),r(78783),r(33948),r(60285),r(41637),r(38862),r(18264),r(21703),r(24446)),a=r(54787),o=(r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(35425)),u=function(){function e(t,r){if((0,i.Z)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var n=this.textToArrayBuffer(t);if(this.length+=this.alignTo(n.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();var s=this.writeChunk(n,12,1313821514,32);r&&this.writeChunk(r,s,5130562)}return(0,n.Z)(e,[{key:"writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"writeChunk",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,r,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}},{key:"writeArrayBuffer",value:function(e,t,r,i,n){new Uint8Array(e,r,n).set(new Uint8Array(t,i,n),0)}},{key:"textToArrayBuffer",value:function(e){if((0,o.Z)("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;for(var t=new Uint8Array(e.length),r=0;r<t.length;++r)t[r]=e.charCodeAt(r);return t.buffer}},{key:"alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();u.HEADER_SIZE=12,u.CHUNK_HEADER_SIZE=8,u.MAGIC=1179937895,u.VERSION=2;var f,h,c,l,d,p,g,m=r(62032),y=(r(51532),r(68309),r(43713)),v=r(27092),w=r(95046),b=r(45443),A=r(30348),x=r(42325),E=r(31967),T=r(8746);r(87145),r(44197),r(35109),r(29135),r(8255);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(f||(f={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(h||(h={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(c||(c={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(l||(l={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(d||(d={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(p||(p={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(g||(g={}));var R=function(){function e(t,r,n,s,a){(0,i.Z)(this,e),this.buffer=t,this.componentType=n,this.dataType=s,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r.bufferViews||(r.bufferViews=[]),this.index=r.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:a};var o=this.getElementSize();o>=4&&a!==c.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=o),r.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}return(0,n.Z)(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var r=t%this.numComponentsForDataType,i=this.accessorMin[r];this.accessorMin[r]="number"!=typeof i?e:Math.min(i,e);var n=this.accessorMax[r];this.accessorMax[r]="number"!=typeof n?e:Math.max(n,e)}}},{key:"dataSize",get:function(){return this.data.length*this.sizeComponentType()}},{key:"byteSize",get:function(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"createTypedArray",value:function(e,t){switch(this.componentType){case 5120:return new Int8Array(e,t);case 5126:return new Float32Array(e,t);case 5122:return new Int16Array(e,t);case 5121:return new Uint8Array(e,t);case 5125:return new Uint32Array(e,t);case 5123:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this.createTypedArray(e,t).set(this.data)}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((function(e){for(var r=new Uint8Array(e),i=0;i<r.length;++i)t.data.push(r[i]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this.getElementSize(),t=this.numComponentsForDataType,r=(this.data.length-this.accessorIndex)/t;if(r%1)throw new Error("An accessor was ended with missing component values");for(var i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);var n={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:r,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var r=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&r.push(e.asyncWritePromise),t((0,s.as)(r))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"getElementSize",value:function(){return this.sizeComponentType()*this.numComponentsForDataType}},{key:"sizeComponentType",value:function(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}},{key:"calculateNumComponentsForDataType",value:function(){switch(this.dataType){case l.SCALAR:return 1;case l.VEC2:return 2;case l.VEC3:return 3;case l.VEC4:case l.MAT2:return 4;case l.MAT3:return 9;case l.MAT4:return 16}}}]),e}(),C=function(){function e(t){(0,i.Z)(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var r={byteLength:-1};t.buffers.push(r),this.buffer=r}return(0,n.Z)(e,[{key:"addBufferView",value:function(e,t,r){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var i=new R(this,this.gltf,e,t,r);return this.bufferViews.push(i),i}},{key:"getByteOffset",value:function(e){var t,r=0,i=(0,m.Z)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n===e)return r;r+=n.byteSize}}catch(s){i.e(s)}finally{i.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,r=[],i=(0,m.Z)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e&&n===e)return r;r.push(n.finalized)}}catch(s){i.e(s)}finally{i.f()}return r}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this.getTotalSize(),r=new ArrayBuffer(t),i=0,n=(0,m.Z)(this.bufferViews);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.writeOutToBuffer(r,i),i+=s.byteSize}}catch(a){n.e(a)}finally{n.f()}return r}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t((0,s.as)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"getTotalSize",value:function(){var e,t=0,r=(0,m.Z)(this.bufferViews);try{for(r.s();!(e=r.n()).done;){var i=e.value;t+=i.byteSize}}catch(n){r.e(n)}finally{r.f()}return t}}]),e}();r(75065);function k(e,t){if(e.components){var r,i=(0,m.Z)(e.components);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.faces&&"smooth"===n.shading&&B(n,t)}}catch(s){i.e(s)}finally{i.f()}}}function B(e,t){(0,v.Wi)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var r=e.faces,i=t.position,n=t.normal,s=r.length/3,a=0;a<s;++a){var o=3*r[3*a+0],u=3*r[3*a+1],f=3*r[3*a+2],h=(0,A.s)(O,i[o+0],i[o+1],i[o+2]),c=(0,A.s)(L,i[u+0],i[u+1],i[u+2]),l=(0,A.s)(S,i[f+0],i[f+1],i[f+2]),d=(0,A.f)(c,c,h),p=(0,A.f)(l,l,h),g=(0,A.c)(d,d,p);n[o+0]+=g[0],n[o+1]+=g[1],n[o+2]+=g[2],n[u+0]+=g[0],n[u+1]+=g[1],n[u+2]+=g[2],n[f+0]+=g[0],n[f+1]+=g[1],n[f+2]+=g[2]}for(var m=0;m<n.length;m+=3)(0,A.s)(I,n[m],n[m+1],n[m+2]),(0,A.n)(I,I),n[m+0]=I[0],n[m+1]=I[1],n[m+2]=I[2]}function M(e){if((0,v.pC)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new a.Z({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}var O=(0,x.c)(),L=(0,x.c)(),S=(0,x.c)(),I=(0,x.c)(),z=r(16198),N=(r(78975),r(87714),r(82801),r(1174),r(69600),r(77601),r(25585)),V=r(58476);function F(e){var t=D(e);return(0,v.pC)(t)?t.toDataURL():""}function _(e){return U.apply(this,arguments)}function U(){return U=(0,z.Z)(regeneratorRuntime.mark((function e(t){var r,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=D(t),!(0,v.Wi)(r)){e.next=3;break}throw new N.Z("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,Z(t);case 5:return i=e.sent,e.next=8,new Promise((function(e){return r.toBlob(e,i)}));case 8:if(n=e.sent,n){e.next=11;break}throw new N.Z("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,n.arrayBuffer();case 13:return e.t0=e.sent,e.t1=i,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function Z(e){return P.apply(this,arguments)}function P(){return P=(0,z.Z)(regeneratorRuntime.mark((function e(t){var r,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(r=t.src,!(0,V.HK)(r)){e.next=6;break}return i=(0,V.sJ)(r),n=i.mediaType,e.abrupt("return","image/jpeg"===n?n:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(r)?"image/png":/\.(jpg|jpeg)$/i.test(r)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function D(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,e.width,e.height),t}function G(e){for(var t=[],r=new Uint8Array(e),i=0;i<r.length;i++)t.push(String.fromCharCode(r[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function Y(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}var H=function(){function e(t,r,n){(0,i.Z)(this,e),this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:r,binChunkBuffer:null,promises:[]}},n&&(this.params=n),this.addScenes(t)}return(0,n.Z)(e,[{key:"addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var r=this.gltf.extras.options.bufferOutputType===f.GLB||this.gltf.extras.options.imageOutputType===h.GLB;r&&(this.gltf.extras.binChunkBuffer=new C(this.gltf)),e.forEachScene((function(e){t.addScene(e)})),r&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var r={};e.name&&(r.name=e.name),e.forEachNode((function(e){r.nodes||(r.nodes=[]);var i=t.addNode(e);r.nodes.push(i)})),this.gltf.scenes.push(r)}},{key:"addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var r={};e.name&&(r.name=e.name);var i=e.translation;(0,A.k)(i,x.Z)||(r.translation=(0,x.a)(i));var n=e.rotation;(0,w.j)(n,b.I)||(r.rotation=(0,b.b)(n));var s=e.scale;(0,A.k)(s,x.O)||(r.scale=(0,x.a)(s)),e.mesh&&e.mesh.vertexAttributes.position?r.mesh=this.addMesh(e.mesh):e.forEachNode((function(e){r.children||(r.children=[]);var i=t.addNode(e);r.children.push(i)}));var a=this.gltf.nodes.length;return this.gltf.nodes.push(r),a}},{key:"addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,r={primitives:[]},i=this.gltf.extras.options.bufferOutputType===f.GLB;t=i?this.gltf.extras.binChunkBuffer:new C(this.gltf),this.params.origin||(this.params.origin=M(e));var n=(0,T.Yq)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});k(e,n),this.flipYZAxis(n);var s,a,o,u,h=t.addBufferView(5126,l.VEC3,c.ARRAY_BUFFER);n.normal&&(s=t.addBufferView(5126,l.VEC3,c.ARRAY_BUFFER)),e.vertexAttributes.uv&&(a=t.addBufferView(5126,l.VEC2,c.ARRAY_BUFFER)),n.tangent&&(o=t.addBufferView(5126,l.VEC4,c.ARRAY_BUFFER)),e.vertexAttributes.color&&(u=t.addBufferView(5121,l.VEC4,c.ARRAY_BUFFER)),h.startAccessor("POSITION"),s&&s.startAccessor("NORMAL"),a&&a.startAccessor("TEXCOORD_0"),o&&o.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");for(var d=n.position.length/3,p=n.position,g=n.normal,m=n.tangent,y=e.vertexAttributes,w=y.color,b=y.uv,A=0;A<d;++A)h.push(p[3*A+0]),h.push(p[3*A+1]),h.push(p[3*A+2]),s&&(0,v.pC)(g)&&(s.push(g[3*A+0]),s.push(g[3*A+1]),s.push(g[3*A+2])),a&&(0,v.pC)(b)&&(a.push(b[2*A+0]),a.push(b[2*A+1])),o&&(0,v.pC)(m)&&(o.push(m[4*A+0]),o.push(m[4*A+1]),o.push(m[4*A+2]),o.push(m[4*A+3])),u&&(0,v.pC)(w)&&(u.push(w[4*A+0]),u.push(w[4*A+1]),u.push(w[4*A+2]),u.push(w[4*A+3]));var x,E,R,B,O,L=h.endAccessor(),S=this.addAccessor(h.index,L);if(s){var I=s.endAccessor();x=this.addAccessor(s.index,I)}if(a){var z=a.endAccessor();E=this.addAccessor(a.index,z)}if(o){var N=o.endAccessor();R=this.addAccessor(o.index,N)}if(u){var V=u.endAccessor();B=this.addAccessor(u.index,V)}e.components&&e.components.length>0&&e.components[0].faces?(O=t.addBufferView(5125,l.SCALAR,c.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(O,e.components,r,S,x,E,R,B)):this.addMeshVertexNonIndexed(e.components,r,S,x,E,R,B),h.finalize(),s&&s.finalize(),a&&a.finalize(),o&&o.finalize(),O&&O.finalize(),u&&u.finalize(),i||t.finalize();var F=this.gltf.meshes.length;return this.gltf.meshes.push(r),F}},{key:"flipYZAxis",value:function(e){var t=e.position,r=e.normal,i=e.tangent;this.flipYZBuffer(t,3),this.flipYZBuffer(r,3),this.flipYZBuffer(i,4)}},{key:"flipYZBuffer",value:function(e,t){if(!(0,v.Wi)(e))for(var r=1,i=2;r<e.length;r+=t,i+=t){var n=e[r],s=e[i];e[r]=s,e[i]=-n}}},{key:"addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var r={};switch(e.alphaMode){case"mask":r.alphaMode=p.MASK;break;case"auto":case"blend":r.alphaMode=p.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};var i=function(e){return Math.pow(e,2.1)},n=function(e){var t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if((0,v.pC)(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),(0,v.pC)(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),(0,v.pC)(e.normalTexture)&&(r.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof E.Z){if((0,v.pC)(e.emissiveTexture)&&(r.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),(0,v.pC)(e.emissiveColor)){var s=n(e.emissiveColor);r.emissiveFactor=[s[0],s[1],s[2]]}(0,v.pC)(e.occlusionTexture)&&(r.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),(0,v.pC)(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;var a=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),a}}},{key:"addTexture",value:function(e){var t=this;return this.gltf.textures||(this.gltf.textures=[]),(0,y.s1)(this.textureMap,e,(function(){var r={sampler:t.addSampler(e),source:t.addImage(e)},i=t.gltf.textures.length;return t.gltf.textures.push(r),i}))}},{key:"addImage",value:function(e){var t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var r={};if(e.url)r.uri=e.url;else{r.extras=e.data;for(var i=0;i<this.gltf.images.length;++i)if(e.data===this.gltf.images[i].extras)return i;switch(this.gltf.extras.options.imageOutputType){case h.GLB:var n=this.gltf.extras.binChunkBuffer.addBufferView(5121,l.SCALAR),s=_(e.data).then((function(e){var t=e.data,i=e.type;return r.mimeType=i,t}));n.writeAsync(s).then((function(){n.finalize()})),r.bufferView=n.index;break;case h.DataURI:r.uri=F(e.data);break;default:this.gltf.extras.promises.push(_(e.data).then((function(e){var t=e.data,i=e.type;r.uri=t,r.mimeType=i})))}}var a=this.gltf.images.length;return this.gltf.images.push(r),this.imageMap.set(e,a),a}},{key:"addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=10497,r=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,r=33071;break;case"mirror":t=33648,r=33648}else{switch(e.wrap.vertical){case"clamp":r=33071;break;case"mirror":r=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}for(var i={wrapS:t,wrapT:r},n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;var s=this.gltf.samplers.length;return this.gltf.samplers.push(i),s}},{key:"addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);var i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}},{key:"addMeshVertexIndexed",value:function(e,t,r,i,n,s,a,o){var u,f=(0,m.Z)(t);try{for(f.s();!(u=f.n()).done;){var h=u.value;e.startAccessor("INDICES");for(var c=0;c<h.faces.length;++c)e.push(h.faces[c]);var l=e.endAccessor(),d={attributes:{POSITION:i},indices:this.addAccessor(e.index,l),material:this.addMaterial(h.material)};n&&"flat"!==h.shading&&(d.attributes.NORMAL=n),s&&(d.attributes.TEXCOORD_0=s),a&&"flat"!==h.shading&&(d.attributes.TANGENT=a),o&&(d.attributes.COLOR_0=o),r.primitives.push(d)}}catch(p){f.e(p)}finally{f.f()}}},{key:"addMeshVertexNonIndexed",value:function(e,t,r,i,n,s,a){var o={attributes:{POSITION:r}};i&&(o.attributes.NORMAL=i),n&&(o.attributes.TEXCOORD_0=n),s&&(o.attributes.TANGENT=s),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}]),e}(),j=(r(40561),r(54747),function(){function e(){(0,i.Z)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return(0,n.Z)(e,[{key:"addScene",value:function(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){var t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}()),W=function(){function e(){(0,i.Z)(this,e),this.name="",this.nodes=[]}return(0,n.Z)(e,[{key:"addNode",value:function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}},{key:"forEachNode",value:function(e){this.nodes.forEach(e)}}]),e}(),K=function(){function e(t){(0,i.Z)(this,e),this.mesh=t,this.name="",this.translation=(0,x.c)(),this.rotation=(0,b.a)(),this.scale=(0,x.a)(x.O),this.nodes=[]}return(0,n.Z)(e,[{key:"addNode",value:function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}},{key:"forEachNode",value:function(e){this.nodes.forEach(e)}},{key:"rotationAngles",set:function(e){(0,w.k)(this.rotation,e[0],e[1],e[2])}}]),e}(),J="model.gltf",X="model.glb";function q(e,t,r){var i=new H(e,t=t||{},r),n=i.params;n?n.origin||(n.origin=new a.Z({x:-1,y:-1,z:-1})):n={origin:new a.Z({x:-1,y:-1,z:-1})};var o=n.origin,c=i.gltf,l=c.extras.promises,d=1,p=1,g=null;return(0,s.as)(l).then((function(){var e={origin:o};delete c.extras;var r="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(c,(function(r,i){if("extras"!==r){if(i instanceof ArrayBuffer){if(Y(i))switch(t.imageOutputType){case h.DataURI:case h.GLB:break;case h.External:default:var n="img".concat(p,".png");return p++,e[n]=i,n}switch(t.bufferOutputType){case f.DataURI:return G(i);case f.GLB:if(g)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(g=i);case f.External:default:var s="data".concat(d,".bin");return d++,e[s]=i,s}}return i}}),r);return t.bufferOutputType===f.GLB||t.imageOutputType===h.GLB?e[X]=new u(i,g).buffer:e[J]=i,e}))}function Q(e,t){return q(e,{bufferOutputType:f.GLB,imageOutputType:h.GLB,jsonSpacing:0},t)}var $=function(){function e(t,r){(0,i.Z)(this,e),this.file={type:"model/gltf-binary",data:t},this.origin=r}return(0,n.Z)(e,[{key:"buffer",value:function(){return Promise.resolve(this.file)}},{key:"download",value:function(e){var t=this;return new Promise((function(){var r=new Blob([t.file.data],{type:t.file.type}),i=e;if(i||(i="model.glb"),"glb"!==i.split(".").pop()&&(i+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(r,i);else{var n=document.createElement("a"),s=URL.createObjectURL(r);n.href=s,n.download=i,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(s)}),0)}}))}}]),e}();function ee(e,t){var r=new j,i=new W;r.addScene(i);var n=new K(e);return i.addNode(n),Q(r,t).then((function(e){return new $(e[X],e.origin)}))}}}]);