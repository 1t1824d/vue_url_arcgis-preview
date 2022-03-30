"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[4618],{24305:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},54618:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n=r(4367),a=r(62032),u=r(1936),s=r(76133),i=r(92751),o=r(99418),c=r(49161),l=r(16198),p=(r(78975),r(41539),r(70189),r(78783),r(33948),r(21249),r(38862),r(83753),r(69600),r(92222),r(68309),r(82526),r(41817),r(63825)),d=(r(75065),r(7380)),h=r(35680),y=r(68955),f=r(25585),m=r(35425),v=r(8723),g=r(31073),R=r(27092),b=r(17533),x=r(24446),k=r(58476),F=r(2553),w=(r(57787),r(90202),r(92236)),Z=r(7230),q=r(64316),_=r(94288),I=r(30718),O=r(73109),S=r(63133),E=r(7730),A=new v.Xn({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function T(e){return C.apply(this,arguments)}function C(){return C=(0,l.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=3;break}return r=(0,k.sJ)(t),e.abrupt("return",r||{data:t});case 3:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e((0,k.sJ)(n.result))},n.onerror=function(e){return r(e)}})));case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}var Q=new Set(["Feature Layer","Table"]),U=function(e){(0,o.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,s.Z)(this,r),e=t.apply(this,arguments),e.type="feature-layer",e.refresh=(0,x.Ds)((0,l.Z)(regeneratorRuntime.mark((function t(){var r,n,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:if(a=null==(r=e.sourceJSON.editingInfo)?void 0:r.lastEditDate,null!=a){t.next=5;break}return t.abrupt("return",{dataChanged:!0,updates:{}});case 5:return t.prev=5,t.next=8,e._fetchService(null);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t["catch"](5),t.abrupt("return",{dataChanged:!0,updates:{}});case 13:return u=a!==(null==(n=e.sourceJSON.editingInfo)?void 0:n.lastEditDate),t.abrupt("return",{dataChanged:u,updates:u?{editingInfo:e.sourceJSON.editingInfo,extent:e.sourceJSON.extent}:null});case 15:case"end":return t.stop()}}),t,null,[[5,10]])})))),e}return(0,i.Z)(r,[{key:"load",value:function(e){var t=(0,R.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e=this.layer,t=e.capabilities.query.supportsFormatPBF,r=e.parsedUrl,n=e.dynamicDataSource,a=e.infoFor3D,u=e.gdbVersion,s=e.spatialReference,i=e.fieldsIndex,o=(0,m.Z)("featurelayer-pbf")&&t&&(0,R.Wi)(a)?"pbf":"json";return new S.Z({url:r.path,format:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:n,gdbVersion:u,sourceSpatialReference:s})}},{key:"addAttachment",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/addAttachment",u=this._getLayerRequestOptions(),s=this._getFormDataForAttachment(r,u.query),e.prev=3,e.next=6,(0,h["default"])(a,{body:s});case 6:return i=e.sent,e.abrupt("return",this._createFeatureEditResult(i.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e["catch"](3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateAttachment",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r,n){var a,u,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],u=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",s=this._getLayerRequestOptions({query:{attachmentId:r}}),i=this._getFormDataForAttachment(n,s.query),e.prev=3,e.next=6,(0,h["default"])(u,{body:i});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e["catch"](3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"applyEdits",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){var n,s,i,o,c,l,p,d,y,f,m,v,g,R,b,x,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:n=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(t.deleteFeatures,null==r?void 0:r.globalIdUsed),(0,I.P)(n,s,this.layer.spatialReference),o=[],c=[],l=(0,u.Z)(t.deleteAttachments),p=(0,a.Z)(t.addAttachments),e.prev=6,p.s();case 8:if((d=p.n()).done){e.next=17;break}return y=d.value,e.t0=o,e.next=13,this._serializeAttachment(y);case 13:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e["catch"](6),p.e(e.t2);case 22:return e.prev=22,p.f(),e.finish(22);case 25:f=(0,a.Z)(t.updateAttachments),e.prev=26,f.s();case 28:if((m=f.n()).done){e.next=37;break}return v=m.value,e.t3=c,e.next=33,this._serializeAttachment(v);case 33:e.t4=e.sent,e.t3.push.call(e.t3,e.t4);case 35:e.next=28;break;case 37:e.next=42;break;case 39:e.prev=39,e.t5=e["catch"](26),f.e(e.t5);case 42:return e.prev=42,f.f(),e.finish(42);case 45:return g=o.length||c.length||l.length?{adds:o,updates:c,deletes:l}:null,R={gdbVersion:(null==r?void 0:r.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:null==r?void 0:r.globalIdUsed,returnEditMoment:null==r?void 0:r.returnEditMoment,usePreviousEditMoment:null==r?void 0:r.usePreviousEditMoment,sessionId:null==r?void 0:r.sessionId},null!=r&&r.returnServiceEditsOption?(R.edits=JSON.stringify([{id:this.layer.layerId,adds:n,updates:s,deletes:i,attachments:g}]),R.returnServiceEditsOption=A.toJSON(null==r?void 0:r.returnServiceEditsOption),R.returnServiceEditsInSourceSR=null==r?void 0:r.returnServiceEditsInSourceSR):(R.adds=n.length?JSON.stringify(n):null,R.updates=s.length?JSON.stringify(s):null,R.deletes=i.length?null!=r&&r.globalIdUsed?JSON.stringify(i):i.join(","):null,R.attachments=g&&JSON.stringify(g)),b=this._getLayerRequestOptions({method:"post",query:R}),x=null!=r&&r.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,e.next=51,(0,h["default"])(x+"/applyEdits",b);case 51:return k=e.sent,e.abrupt("return",this._createEditsResult(k));case 53:case"end":return e.stop()}}),e,this,[[6,19,22,25],[26,39,42,45]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteAttachments",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/deleteAttachments",e.prev=3,e.next=6,(0,h["default"])(a,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e["catch"](3),this._createAttachmentErrorResult(n,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then((0,l.Z)(regeneratorRuntime.mark((function r(){var a,u,s,i,o,c,l,p,d,f,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e._getLayerRequestOptions((0,n.Z)((0,n.Z)({},t),{},{query:{returnUpdates:!0}})),u=e.layer,s=u.layerId,i=u.url,r.next=6,(0,h["default"])("".concat(i,"/").concat(s),a);case 6:return o=r.sent,c=o.data,l=c.id,p=c.extent,d=c.fullExtent,f=c.timeExtent,m=p||d,r.abrupt("return",{id:l,fullExtent:m&&Z.Z.fromJSON(m),timeExtent:f&&y.Z.fromJSON({start:f[0],end:f[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t){var r,n,u,s,i,o,c,l,p,d,y=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},n=this.layer.parsedUrl,u=n.path,e.next=4,this.load();case 4:if(s=this._getLayerRequestOptions(r),this.layer.get("capabilities.operations.supportsQueryAttachments")){e.next=10;break}i=t.objectIds,o=[],c=(0,a.Z)(i);try{for(c.s();!(l=c.n()).done;)p=l.value,d=u+"/"+p+"/attachments",o.push((0,h["default"])(d,s))}catch(f){c.e(f)}finally{c.f()}return e.abrupt("return",Promise.all(o).then((function(e){return i.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return(0,O.O)(e,u)})));case 10:return e.abrupt("return",this.queryTask.executeAttachmentQuery(t,s));case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"queryFeatures",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryFeaturesJSON",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryObjectIds",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryFeatureCount",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryExtent",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryRelatedFeatures",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryRelatedFeaturesCount",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryTopFeatures",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeTopFeaturesQuery(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryTopObjectIds",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopIds(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryTopExtents",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopExtents(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"queryTopCount",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_createRequestQueryOptions",value:function(e){var t=(0,n.Z)((0,n.Z)({},this.layer.customParameters),{},{token:this.layer.apiKey},null==e?void 0:e.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}},{key:"_fetchService",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t,r){var n,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,(0,h["default"])(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,m.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:r}));case 3:n=e.sent,a=n.data,t=a;case 6:if(this.sourceJSON=this._patchServiceJSON(t),u=t.type,Q.has(u)){e.next=10;break}throw new f.Z("feature-layer-source:unsupported-type",'Source type "'.concat(u,'" is not supported'));case 10:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"_patchServiceJSON",value:function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){var r=(0,_.bU)(e.geometryType).renderer;(0,b.RB)("drawingInfo.renderer",r,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}},{key:"_serializeFeature",value:function(e){var t=e.geometry,r=e.attributes;return(0,R.Wi)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}},{key:"_serializeAttachment",value:function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(t){var r,n,a,u,s,i,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.feature,n=t.attachment,a=n.globalId,u=n.name,s=n.contentType,i=n.data,o=n.uploadId,c={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(c.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!o){e.next=5;break}c.uploadId=o,e.next=10;break;case 5:if(!i){e.next=10;break}return e.next=8,T(i);case 8:l=e.sent,c.contentType=l.mediaType,c.data=l.data,i instanceof File&&(c.name=i.name);case 10:return e.abrupt("return",(u&&(c.name=u),s&&(c.contentType=s),c));case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_getFeatureIds",value:function(e,t){var r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}},{key:"_getIdsFromFeatures",value:function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))}},{key:"_canUseGlobalIds",value:function(e,t){return e&&"globalId"in t[0]}},{key:"_getObjectIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.objectId}))}},{key:"_getGlobalIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.globalId}))}},{key:"_createEditsResult",value:function(e){var t,r=this,n=e.data,u=this.layer.layerId,s=[],i=null;if(Array.isArray(n)){var o,c=(0,a.Z)(n);try{for(c.s();!(o=c.n()).done;){var l=o.value;s.push({id:l.id,editedFeatures:l.editedFeatures}),l.id===u&&(i={addResults:l.addResults,updateResults:l.updateResults,deleteResults:l.deleteResults,attachments:l.attachments,editMoment:l.editMoment})}}catch(m){c.e(m)}finally{c.f()}}else i=n;var p=null==(t=i)?void 0:t.attachments,d={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:p&&p.addResults?p.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:p&&p.updateResults?p.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:p&&p.deleteResults?p.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(d.editMoment=i.editMoment),s.length>0){d.editedFeatureResults=[];var h,y=(0,a.Z)(s);try{var f=function(){var e=h.value,t=e.editedFeatures,n=t.adds,a=t.updates,u=t.deletes,s=t.spatialReference,i=s?new E.Z(s):null;d.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==n?void 0:n.map((function(e){return r._createEditedFeature(e,i)})))||[],updates:(null==a?void 0:a.map((function(e){return{original:r._createEditedFeature(e[0],i),current:r._createEditedFeature(e[1],i)}})))||[],deletes:(null==u?void 0:u.map((function(e){return r._createEditedFeature(e,i)})))||[],spatialReference:i}})};for(y.s();!(h=y.n()).done;)f()}catch(m){y.e(m)}finally{y.f()}}return d}},{key:"_createEditedFeature",value:function(e,t){return new d.Z({attributes:e.attributes,geometry:(0,q.im)((0,n.Z)((0,n.Z)({},e.geometry),{},{spatialReference:t}))})}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new f.Z("feature-layer-source:attachment-failure",r,{code:n})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var n in t){var a=t[n];null!=a&&(r.set?r.set(n,a):r.append(n,a))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,a=t.gdbVersion,u=t.dynamicDataSource;return(0,n.Z)((0,n.Z)({},e),{},{query:(0,n.Z)((0,n.Z)({gdbVersion:a,layer:u?JSON.stringify({source:u}):void 0},r.query),{},{f:"json"},this._createRequestQueryOptions(e)),responseType:"json"})}}]),r}(g.Z);(0,p._)([(0,F.Cb)()],U.prototype,"type",void 0),(0,p._)([(0,F.Cb)({constructOnly:!0})],U.prototype,"layer",void 0),(0,p._)([(0,F.Cb)({readOnly:!0})],U.prototype,"queryTask",null),U=(0,p._)([(0,w.j)("esri.layers.graphics.sources.FeatureLayerSource")],U);var J=U},94288:function(e,t,r){r.d(t,{Dm:function(){return l},Hq:function(){return p},MS:function(){return d},bU:function(){return c}});var n=r(23796),a=r(4367),u=(r(92222),r(26699),r(32023),r(38862),r(35425)),s=r(40199),i=r(24305),o=r(12190);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}function l(e,t){if((0,u.Z)("esri-csp-restrictions"))return function(){return(0,a.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(s.includes(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var i=new Function(r);return function(){return new i}}catch(o){return function(){return(0,a.Z)((0,n.Z)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);