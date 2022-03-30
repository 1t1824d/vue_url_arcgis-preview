"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[8946],{5006:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(27092);class s{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if((0,i.pC)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;(0,i.pC)(t);)e&&e(t),t=this.dequeue()}}},57446:function(e,t,r){r.d(t,{hN:function(){return R},P0:function(){return A},cW:function(){return F}});var i=r(25585),s=r(77494),n=r(80630);function a(e){return"mesh"===e?n.h_:(0,n.IY)(e)}var o=r(64316),u=r(71563);function d(e,t){return e?t?4:3:t?3:2}function l(e,t,r,i){return h(e,t,r,i.coords[0],i.coords[1])}function c(e,t,r,i,s,n){const a=d(s,n),{coords:o,lengths:u}=i;if(!u)return!1;for(let d=0,l=0;d<u.length;d++,l+=a)if(!h(e,t,r,o[l],o[l+1]))return!1;return!0}function h(e,t,r,i,s){if(!e)return!1;const n=d(t,r),{coords:a,lengths:o}=e;let u=!1,l=0;for(const d of o)u=_(u,a,n,l,d,i,s),l+=d*n;return u}function _(e,t,r,i,s,n,a){let o=e,u=i;for(let d=i,l=i+s*r;d<l;d+=r){u=d+r,u===l&&(u=i);const e=t[d],s=t[d+1],c=t[u],h=t[u+1];(s<a&&h>=a||h<a&&s>=a)&&e+(a-s)/(h-s)*(c-e)<n&&(o=!o)}return o}var f=r(1156),p=r(82409),g=r(76400),y=r(63608);const I="feature-store:unsupported-query",m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},b={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function x(e){return!0===b.spatialRelationship[e]}function S(e){return!0===b.queryGeometry[(0,o.Ji)(e)]}function w(e){return!0===b.layerGeometry[e]}function v(){return Promise.all([r.e(7419),r.e(5070)]).then(r.bind(r,45070))}function F(e,t,r,i,n){if((0,o.oU)(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,f.Uy)(new p.Z,t,!1,!1);return Promise.resolve((t=>l(e,!1,!1,t)))}if((0,o.oU)(t)&&"esriGeometryMultipoint"===r){const r=(0,f.Uy)(new p.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>c(r,!1,!1,e,i,n)))}if((0,o.YX)(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,s.aV)(t,(0,y.Op)(r,i,n,e))));if((0,o.YX)(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,s.lQ)(t,(0,y.Op)(r,i,n,e))));if((0,o.YX)(t)&&"esriSpatialRelIntersects"===e){const e=a(r);return Promise.resolve((s=>e(t,(0,y.Op)(r,i,n,s))))}return v().then((s=>{const a=s[m[e]].bind(null,t.spatialReference,t);return e=>a((0,y.Op)(r,i,n,e))}))}async function A(e,t,r){const{spatialRel:s,geometry:n}=e;if(n){if(!x(s))throw new i.Z(I,"Unsupported query spatial relationship",{query:e});if((0,u.JY)(n.spatialReference)&&(0,u.JY)(r)){if(!S(n))throw new i.Z(I,"Unsupported query geometry type",{query:e});if(!w(t))throw new i.Z(I,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,g._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function R(e){if((0,o.YX)(e))return!0;if((0,o.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},70805:function(e,t,r){function i(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&s)t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,s);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=i||s;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(n=Math.min(n,i),a=Math.max(a,i))}))}return{start:n,end:a}}function s(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:u,end:d}=t;return null===u&&null===d?null:void 0===u&&void 0===d?o():i&&s?n(r,i,s,u,d):a(r,i||s,u,d)}function n(e,t,r,i,s){return null!=i&&null!=s?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,r);return(null==a||a<=s)&&(null==o||o>=i)}:null!=i?t=>{const s=e.getAttribute(t,r);return null==s||s>=i}:null!=s?r=>{const i=e.getAttribute(r,t);return null==i||i<=s}:void 0}function a(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?s=>{const n=e.getAttribute(s,t);return n>=r&&n<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}function o(){return()=>!1}r.d(t,{R:function(){return i},y:function(){return s}})},63608:function(e,t,r){r.d(t,{EG:function(){return m},Op:function(){return b},S2:function(){return F},Up:function(){return x},j6:function(){return S},vF:function(){return f}});var i=r(8723),s=r(27092),n=r(19509),a=r(66347),o=r(64316),u=r(61859),d=r(71563),l=(r(61816),r(1156)),c=r(82409),h=r(76400);const _=new i.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=Object.freeze({}),p=new c.Z,g=new c.Z,y=new c.Z,I={esriGeometryPoint:l.fQ,esriGeometryPolyline:l.J6,esriGeometryPolygon:l.eG,esriGeometryMultipoint:l.Iv};function m(e,t,r,i=e.hasZ,n=e.hasM){if((0,s.Wi)(t))return null;const a=e.hasZ&&i,o=e.hasM&&n;if(r){const s=(0,l.Nh)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return(0,l.fQ)(s,a,o)}return(0,l.fQ)(t,a,o)}function b(e,t,r,i,n,a,o=t,u=r){const d=t&&o,c=r&&u,h=(0,s.pC)(i)?"coords"in i?i:i.geometry:null;if((0,s.Wi)(h))return null;if(n){let i=(0,l.zj)(g,h,t,r,e,n,o,u);return a&&(i=(0,l.Nh)(y,i,d,c,e,a)),I[e](i,d,c)}if(a){const i=(0,l.Nh)(y,h,t,r,e,a,o,u);return I[e](i,d,c)}return(0,l.hY)(p,h,t,r,o,u),I[e](p,d,c)}async function x(e,t,r){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),S(e,t,r)}async function S(e,t,r){if(!e)return null;let{where:i}=e;if(e.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let n=await w(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;n=(0,a.aO)(n),n.spatialReference=t}e.geometry=n,await(0,h._W)(n.spatialReference,r);const d=(await(0,u.aX)((0,o.im)(n)))[0];if((0,s.Wi)(d))throw f;const l=d.toJSON(),c=await(0,h.iV)(l,l.spatialReference,r);if(!c)throw f;return c.spatialReference=r,e.geometry=c,e}async function w(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const s=t.spatialReference,a=i?_.fromJSON(i):(0,n.qE)(s),o=s&&((0,d.sT)(s)||(0,d.sS)(s))?t:await(0,h._W)(s,d.Zn).then((()=>(0,h.iV)(t,d.Zn)));return(await v())(o.spatialReference,o,r,a)}async function v(){return(await Promise.all([r.e(7419),r.e(5070)]).then(r.bind(r,45070))).geodesicBuffer}function F(e){return e&&A in e?JSON.parse(JSON.stringify(e,R)):e}const A="_geVersion",R=(e,t)=>e!==A?t:void 0},31023:function(e,t,r){r.d(t,{k:function(){return _},p:function(){return f}});var i=r(5006),s=r(78534),n=(r(35425),r(27092)),a=r(90407),o=r(43429),u=r(79672),d=r(6706);function l(e,t){return e<<16|t}function c(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const _={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class f extends u.J{constructor(e,t,r){super(e,t),this.featureAdapter=_,this.events=new s.Z,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new i.Z(50),this._index=(0,a.r)(9,(e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))),this._storage=t,this.mode=r}get storage(){return this._storage}get storeStatistics(){let e=0,t=0,r=0;return this.forEach((i=>{const s=i.readGeometry();s&&(t+=s.isPoint?1:s.lengths.reduce(((e,t)=>e+t),0),r+=s.isPoint?1:s.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if((0,n.Wi)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find((e=>e.tileId===t));if((0,n.pC)(r))return r.readers;const i=new Map,s=this._searchIndex(e.bounds),a=[];for(const n of s){const e=this._storage.getInstanceId(n),t=c(e),r=h(e);i.has(t)||i.set(t,[]),i.get(t).push(r)}return i.forEach(((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(d.t.from(r,e))})),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var i;const e=l(t.instance,t.getIndex()),s=t.getObjectId(),n=null!=(i=this._objectIdToDisplayId.get(s))?i:this._storage.createDisplayId();t.setDisplayId(n),r.setInstanceId(n,e),this._objectIdToDisplayId.set(s,n)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),i=h(r),s=c(r),n=this._featureSetsByInstance.get(s);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),n.removeAtIndex(i),n.isEmpty&&this._featureSetsByInstance.delete(s),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=this._lookupFeature(r);e(i)}))}forEachUnsafe(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=c(r),s=h(r),n=this._getFeatureSet(i);n.setIndex(s),e(n)}))}forEachInBounds(e,t){const r=this._searchIndex(e);for(const i of r){const e=this.lookupFeatureByDisplayId(i,this._storage);t((0,n.Wg)(e))}}forEachBounds(e,t,r){this._rebuildIndex();const i=[0,0,0,0];for(const s of e){if(!s.readGeometry())continue;const e=s.getDisplayId();i[0]=this._storage.getXMin(e),i[1]=this._storage.getYMin(e),i[2]=this._storage.getXMax(e),i[3]=this._storage.getYMax(e),t((0,o.JR)(r,i))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((i,s)=>{e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),this._objectIdToDisplayId.delete(s))})),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)}))}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return(0,n.Wi)(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=c(t),i=h(t),s=this._getFeatureSet(r);return s?(s.setIndex(i),s):null}_insertFeature(e,t){const r=this._storage,i=e.getObjectId(),s=l(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let n=this._objectIdToDisplayId.get(i);n||(n=r.createDisplayId(),this._objectIdToDisplayId.set(i,n),this._spatialIndexInvalid=!0),e.setDisplayId(n),r.setInstanceId(n,s),this.setComputedAttributes(r,e,n,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}})):this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)})),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=c(e),r=h(e),i=this._getFeatureSet(t);if(!i)return null;const s=i.getCursor();return s.setIndex(r),s}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},79672:function(e,t,r){r.d(t,{J:function(){return l}});var i=r(35425),s=r(27092),n=r(93400),a=r(74887),o=r(87441);function u(e,t,r){e.referencesGeometry();const i=t.readArcadeFeature();try{return e.evaluate({...r,$feature:i})}catch(l){return o.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const d=r.e(4980).then(r.bind(r,4980));class l{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=(0,n.Hg)(this._schema,t);if(this._schema=t,!t||(0,s.Wi)(r)||!(0,n.uD)(r,"attributes"))return;(0,i.Z)("esri-2d-update-debug"),this._bitsets.computed.clear(),e.targets[t.name]=!0;const a=t.attributes,o=[],u=[];for(const i in a){const e=a[i];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=u}setComputedAttributes(e,t,r,i){const s=this._bitsets.computed;if(!this._canCacheExpressionValue||!s.has(r)){s.set(r);for(const s of this._computedFields){const n=this._evaluateField(t,s,i);switch(s.resultType){case"numeric":e.setComputedNumericAtIndex(r,s.fieldIndex,n);break;case"string":e.setComputedStringAtIndex(r,s.fieldIndex,n)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await(0,a.Yi)(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await d,s=await i(e.label,r,t);return{...e,builder:s}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:i}=t;return u(i,e,{$view:{scale:r}})}}}}},48946:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r(25585),s=r(87441),n=r(27092),a=r(49938),o=r(75012),u=r(57446),d=r(70805),l=r(63608),c=r(17562),h=r(31023);const _=s.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),f={getAttribute:(e,t)=>e.field(t)};async function p(e,t){const s=await r.e(7263).then(r.bind(r,77263));try{const r=s.WhereClause.create(e,t);if(!r.isStandardized){const e=new i.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);_.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,f)}}catch(n){return _.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const g=s.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),y=1,I=2;class m{constructor(e){this._geometryBounds=(0,a.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,y)}setTrue(e){const t=[],r=[],i=new Set(e);return this._idToVisibility.forEach(((e,s)=>{const n=!!(this._idToVisibility.get(s)&y),a=i.has(s);!n&&a?t.push(s):n&&!a&&r.push(s),this._idToVisibility.set(s,a?y|I:0)})),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s}=this;return c.Z.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s})}async update(e,t){this._hash=JSON.stringify(e);const r=await(0,l.j6)(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await p(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",i=await(0,u.cW)(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,o.$P)(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,d.y)(this._serviceInfo.timeInfo,e.timeExtent,h.k);else{const t=new i.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);g.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!(0,n.pC)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,r)=>{t&y||(this._idToVisibility.set(r,y),e.push(r))})),e}}},6706:function(e,t,r){r.d(t,{t:function(){return s}});r(21703);var i=r(20477);class s extends i.s{constructor(e,t){super(i.s.createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new s(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new s(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,i){const s=this.copy();return s._reader=this._reader.transform(e,t,r,i),s}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}}}]);