"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[5113],{13596:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],u+=o,c+=i}function o(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:function(){return o}});Object.freeze({__proto__:null,copy:n,makeDense:o})},81032:function(e,t,r){r.d(t,{f:function(){return i},n:function(){return s}});var n=r(43206);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],u+=o,c+=i}function s(e,t,r){const s=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)s[f]=Math.max(a[l]/e,-1),s[f+1]=Math.max(a[l+1]/e,-1),f+=i,l+=u;else for(let t=0;t<c;++t)s[f]=a[l]/e,s[f+1]=a[l+1]/e,f+=i,l+=u}else o(e,t,r);return e}function i(e,t,r,n){var o,s;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(o=null==n?void 0:n.count)?o:e.count;let c=(null!=(s=null==n?void 0:n.dstIndex)?s:0)*a;for(let f=0;f<u;++f)i[c]=t,i[c+1]=r,c+=a}Object.freeze({__proto__:null,copy:o,normalizeIntegerBuffer:s,fill:i})},90314:function(e,t,r){r.d(t,{a:function(){return a},s:function(){return i},t:function(){return s}});var n=r(33249);function o(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],w=r[12],b=r[13],x=r[14],g=r[15],T=e.typedBuffer,_=e.typedBufferStride,S=t.typedBuffer,I=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*_,t=n*I,r=S[t],o=S[t+1],v=S[t+2],O=S[t+3];T[e]=s*r+c*o+p*v+w*O,T[e+1]=i*r+f*o+h*v+b*O,T[e+2]=a*r+l*o+m*v+x*O,T[e+3]=u*r+d*o+y*v+g*O}}function s(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,w=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*m,t=n*w,r=y[t],o=y[t+1],b=y[t+2],x=y[t+3];h[e]=s*r+u*o+l*b,h[e+1]=i*r+c*o+d*b,h[e+2]=a*r+f*o+p*b,h[e+3]=x}}function i(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=r*i[t],o[e+1]=r*i[t+1],o[e+2]=r*i[t+2],o[e+3]=r*i[t+3]}}function a(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=i[t]>>r,o[e+1]=i[t+1]>>r,o[e+2]=i[t+2]>>r,o[e+3]=i[t+3]>>r}}Object.freeze({__proto__:null,transformMat4:o,transformMat3:s,scale:i,shiftRight:a})},58691:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],n[u+2]=s[c+2],n[u+3]=s[c+3],u+=o,c+=i}function o(e,t,r,n,o,s){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==s?void 0:s.count)?i:e.count;let l=(null!=(a=null==s?void 0:s.dstIndex)?a:0)*c;for(let d=0;d<f;++d)u[l]=t,u[l+1]=r,u[l+2]=n,u[l+3]=o,l+=c}r.d(t,{c:function(){return n},f:function(){return o}});Object.freeze({__proto__:null,copy:n,fill:o})},56144:function(e,t,r){r.d(t,{a:function(){return a},c:function(){return n},f:function(){return s}});r(48675),r(3462);function n(){return[0,0,0,0]}function o(e){return[e[0],e[1],e[2],e[3]]}function s(e,t,r,n){return[e,t,r,n]}function i(e){const t=n(),r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t}function a(e,t){return new Float64Array(e,t,4)}function u(){return n()}function c(){return s(1,1,1,1)}function f(){return s(1,0,0,0)}function l(){return s(0,1,0,0)}function d(){return s(0,0,1,0)}function p(){return s(0,0,0,1)}const h=u(),m=c(),y=f(),w=l(),b=d(),x=p();Object.freeze({__proto__:null,create:n,clone:o,fromValues:s,fromArray:i,createView:a,zeros:u,ones:c,unitX:f,unitY:l,unitZ:d,unitW:p,ZEROS:h,ONES:m,UNIT_X:y,UNIT_Y:w,UNIT_Z:b,UNIT_W:x})},52111:function(e,t,r){r.d(t,{x:function(){return o}});var n=r(6451);class o{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&(0,n.Y)((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,s));e++)this._items.push(this.allocator())}}const s=1024},15685:function(e,t,r){r.d(t,{G:function(){return o}});var n=r(25585);class o{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new o(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(s,10);return new o(a,u,t)}}},43206:function(e,t,r){r.d(t,{B3:function(){return o},Op:function(){return i},U:function(){return s},n1:function(){return n}});r(35425);function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},40748:function(e,t,r){r.d(t,{gS:function(){return i}});var n=r(43206);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<9;++e)n[u+e]=s[c+e];u+=o,c+=i}}Object.freeze({__proto__:null,copy:o});function s(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<16;++e)n[u+e]=s[c+e];u+=o,c+=i}}Object.freeze({__proto__:null,copy:s});r(13596),r(81032),r(45267),r(58691);function i(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}},79039:function(e,t,r){r.d(t,{MP:function(){return p},WM:function(){return d}});var n=r(6451),o=r(88250),s=r(44858),i=r(45443),a=r(36122),u=r(42325),c=r(56144);class f{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this.itemByteSize)}get(){0===this._itemsPtr&&(0,n.Y)((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this.itemCreate(e,t*this.itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=l){return new f(16,a.c,e)}static createVec3f64(e=l){return new f(24,u.b,e)}static createVec4f64(e=l){return new f(32,c.a,e)}static createMat3f64(e=l){return new f(72,o.a,e)}static createMat4f64(e=l){return new f(128,s.a,e)}static createQuatf64(e=l){return new f(32,i.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const l=4096,d=(f.createVec2f64(),f.createVec3f64()),p=(f.createVec4f64(),f.createMat3f64(),f.createMat4f64());f.createQuatf64()},83394:function(e,t,r){r.d(t,{C:function(){return c}});var n=r(35680),o=r(53855),s=r(25585),i=r(27092),a=r(24446),u=r(58476);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,a.k_)(t),(0,u.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,i.Wi)(this.streamDataRequester))return(await(0,n["default"])(t,{responseType:f[e]})).data;const u=await(0,o.q6)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,a.r9)(u.error),new s.Z("",`Request for resource failed: ${u.error}`)}}const f={image:"image",binary:"array-buffer",json:"json"}},86114:function(e,t,r){r.d(t,{DA:function(){return i},jX:function(){return a},nh:function(){return s}});r(48675),r(3462);var n=r(17914),o=r(52421);function s(e,t=o.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],s=e[o+1],i=e[o+2];n[t++]=r,n[t++]=s,n[t++]=i}else{const r=e[o+1],s=e[o],i=e[o+2];n[t++]=r,n[t++]=s,n[t++]=i}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let i=0;i<r;++i){const r=e[i+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},64798:function(e,t,r){r.d(t,{z:function(){return k}});var n=r(27092),o=r(44858),s=r(25585),i=r(87441);const a=i.Z.getLogger("esri.views.3d.glTF");class u{error(e){throw new s.Z("gltf-loader-error",e)}errorUnsupported(e){throw new s.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){a.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function c(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function f(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}r(82801),r(48675),r(3462);var l=r(21677),d=r(43713),p=r(58476),h=r(15685),m=r(11197),y=r(95046),w=r(45443),b=r(16886),x=r(13596);class g{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const T={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},_={pbrMetallicRoughness:T,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},S={ESRI_externalColorMixMode:"tint"},I=(e={})=>{const t={...T,...e.pbrMetallicRoughness},r=v({...S,...e.extras});return{..._,...e,pbrMetallicRoughness:t,extras:r}};function v(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,l.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const O={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},C=e=>({...O,...e});function B(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}const U={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class A{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=B(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if((0,p.HK)(r)){const n=(0,p.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new A(e,t,r,o)}catch{}const o=(0,p.AH)(r);if(A.isGLBData(o))return this.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,n);return new A(e,t,r,o)}const o=await e.loadBinary(r,n);if(A.isGLBData(o))return this.fromGLBData(e,t,r,o);const s=await e.loadJSON(r,n);return new A(e,t,r,s)}static isGLBData(e){const t=new g(e);return t.remainingBytes()>=4&&t.readUint32()===U.MAGIC}static async fromGLBData(e,t,r,n){const o=await A.parseGLBData(t,n);return new A(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new g(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===U.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===U.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await F(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==U.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const o=await this.getBufferLoader(e,t);return n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match."),o}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],o=this.context.loadBinary(this.resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,o),o}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t),i=E[n.type],a=L[n.componentType],u=i*a,c=o.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return(0,x.m)(this.wrapAccessor(b.D_,r));case 5123:return(0,x.m)(this.wrapAccessor(b.av,r));case 5125:return(0,x.m)(this.wrapAccessor(b.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(b.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(b.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new b.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(b.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),P(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(b.ek,n);if(5121===n.componentType)return this.wrapAccessor(b.mc,n);if(5123===n.componentType)return this.wrapAccessor(b.v6,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(b.ct,n);if(5121===n.componentType)return this.wrapAccessor(b.ne,n);if(5123===n.componentType)return this.wrapAccessor(b.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+D[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?I(this.json.materials[e.material]):I(),s=o.pbrMetallicRoughness,i=this.hasVertexColors(e),a=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),c=r?this.getTexture(o.occlusionTexture,t):null,f=r?this.getTexture(o.emissiveTexture,t):null,l=r?this.getTexture(s.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await a,normalTexture:await u,name:o.name,id:d,occlusionTexture:await c,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await l,vertexColors:i,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.errorContext,o=this.json.textures[r],s=C(null!=o.sampler?this.json.samplers[o.sampler]:{});n.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],a=await this.loadTextureImageData(r,o,t);return(0,d.s1)(this.textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(n.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:a,wrapS:e(s.wrapS)?s.wrapS:t(s.wrapS),wrapT:e(s.wrapT)?s.wrapT:t(s.wrapT),minFilter:s.minFilter,name:i.name,id:r}}))}getNodeTransform(e){if(void 0===e)return N;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,m.m)((0,o.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,o.b)(r),n.translation&&(0,m.a)(t,t,n.translation),n.rotation&&(R[3]=(0,y.g)(R,n.rotation),(0,m.e)(t,t,R[3],R)),n.scale&&(0,m.f)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,p.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=h.G.parse(this.json.asset.version,"glTF");M.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const o=this.createTextureLoader(t,r);return this.textureLoaders.set(e,o),o}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t);return n.errorUnsupportedIf(null!=o.byteStride,"byteStride not supported for image buffer"),j(new Uint8Array(s.buffer,s.byteOffset+(o.byteOffset||0),o.byteLength),r.mimeType)}}const M=new h.G(2,0,"glTF"),N=(0,m.u)((0,o.c)(),Math.PI/2),R=(0,w.a)(),E={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},L={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function P(e){switch(e.componentType){case 5120:return new b.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new b.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new b.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new b.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new b.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new b.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,l.Bg)(e.componentType)}}async function F(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}async function j(e,t){return new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e)})),i.src=s}))}const D={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let G=0;async function k(e,t,r={},s=!0){const i=await A.load(e,H,t,r),a="gltf_"+G++,u={lods:[],materials:new Map,textures:new Map,meta:V(i)},c=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type),f=new Map;await z(i,(async(e,t,c,l)=>{var d;const p=null!=(d=f.get(c))?d:0;f.set(c,p+1);const h=void 0!==e.mode?e.mode:4,m=4===h||5===h||6===h?h:null;if((0,n.Wi)(m))return void H.warnUnsupported("Unsupported primitive mode ("+X[h]+"). Skipping primitive.");if(!i.hasPositions(e))return void H.warn("Skipping primitive without POSITION vertex attribute.");const y=i.getPositionData(e,r),w=i.getMaterial(e,r,s),b=i.hasNormals(e)?i.getNormalData(e,r):null,x=i.hasTangents(e)?i.getTangentData(e,r):null,g=i.hasTextureCoordinates(e)?i.getTextureCoordinates(e,r):null,T=i.hasVertexColors(e)?i.getVertexColors(e,r):null,_=i.getIndexData(e,r),S={transform:(0,o.b)(t),attributes:{position:await y,normal:b?await b:null,texCoord0:g?await g:null,color:T?await T:null,tangent:x?await x:null},indices:await _,primitiveType:m,material:q(u,await w,a)};let I=null;(0,n.pC)(u.meta)&&(0,n.pC)(u.meta.ESRI_lod)&&"screenSpaceRadius"===u.meta.ESRI_lod.metric&&(I=u.meta.ESRI_lod.thresholds[c]),u.lods[c]=u.lods[c]||{parts:[],name:l,lodThreshold:I},u.lods[c].parts[p]=S}));for(const n of u.lods)n.parts=n.parts.filter((e=>!!e));return{model:u,meta:{isEsriSymbolResource:c,uri:i.uri},customMeta:{}}}function V(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function z(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const a of n){const e=r.nodes[a];s.push(i(a,0)),$(e)&&!o&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(n,o){const a=r.nodes[n],u=e.getNodeTransform(n);if(H.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)s.push(t(r,u,o,e.name))}for(const e of a.children||[])s.push(i(e,o))}await Promise.all(s)}function $(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function q(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=f(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:J.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=c({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const H=new u,J=[9987,9985],X=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},52421:function(e,t,r){r.d(t,{NO:function(){return y},cM:function(){return m},p:function(){return p},DX:function(){return h}});r(48675),r(3462);var n=r(30348),o=r(42325),s=r(52111);r(41666),r(14937),r(79039);function i(e){return e?{origin:(0,o.a)(e.origin),vector:(0,o.a)(e.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}(0,o.c)(),(0,o.c)(),new s.x((()=>({origin:null,vector:null})));function a(e,t,r){return(0,n.f)(u,t,e),(0,n.f)(c,r,e),(0,n.l)((0,n.c)(u,u,c))/2}new s.x(i),new s.x((()=>({p0:null,p1:null,p2:null})));const u=(0,o.c)(),c=(0,o.c)();let f=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const l=new Uint16Array([0]),d=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function p(e){if(1===e)return l;if(e<d.length)return new Uint16Array(d.buffer,0,e);if(e>f.length){const t=Math.max(2*f.length,e);f=new Uint32Array(t);for(let e=0;e<f.length;e++)f[e]=e}return new Uint32Array(f.buffer,0,e)}function h(e){if(1===e)return new Uint16Array(l);if(e<d.length)return new Uint16Array(d.slice(0,e));if(e>f.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(f.slice(0,e))}function m(e,t,r){if(!e)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0),(0,n.s)(g,0,0,0);let i=0,u=0;for(let c=0;c<t.length-2;c+=3){const e=t[c+0]*o,f=t[c+1]*o,l=t[c+2]*o;(0,n.s)(w,s[e+0],s[e+1],s[e+2]),(0,n.s)(b,s[f+0],s[f+1],s[f+2]),(0,n.s)(x,s[l+0],s[l+1],s[l+2]);const d=a(w,b,x);d?((0,n.b)(w,w,b),(0,n.b)(w,w,x),(0,n.a)(w,w,1/3*d),(0,n.b)(r,r,w),i+=d):((0,n.b)(g,g,w),(0,n.b)(g,g,b),(0,n.b)(g,g,x),u+=3)}return(0!==u||0!==i)&&(0!==i?((0,n.a)(r,r,1/i),!0):0!==u&&((0,n.a)(r,g,1/u),!0))}function y(e,t,r){if(!e||!t)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0);let i=-1,a=0;for(let n=0;n<t.length;n++){const e=t[n]*o;i!==e&&(r[0]+=s[e+0],r[1]+=s[e+1],r[2]+=s[e+2],a++),i=e}return a>1&&(0,n.a)(r,r,1/a),a>0}const w=(0,o.c)(),b=(0,o.c)(),x=(0,o.c)(),g=(0,o.c)()},96773:function(e,t,r){r.d(t,{K:function(){return n}});const n=2.1}}]);