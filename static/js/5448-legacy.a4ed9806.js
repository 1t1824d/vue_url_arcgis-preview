"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[5448],{5448:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var n=r(16198),i=r(62032),o=r(76133),s=r(92751),a=r(43263),u=r(99418),p=r(49161),l=(r(78975),r(68309),r(41539),r(57327),r(21249),r(83753),r(63825)),c=(r(75065),r(78136)),d=(r(99761),r(76143),r(96003),r(15945),r(45293),r(23867),r(71656),r(15041),r(18716)),y=r(27092),f=r(3266),m=r(17533),v=r(58476),h=r(2553),g=(r(57787),r(35425)),b=r(90202),w=r(92236),C=r(78386),x=r(75734),F=r(49471),_=r(2394),R=r(4367),k=r(25585),O=r(48595),S=r(31073),Z=r(24446),I=r(17044),q=r(94288),P=r(70930),T=r(7804),j=r(7230),U=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,o.Z)(this,r),e=t.apply(this,arguments),e.capabilities=(0,q.MS)(!1,!1),e.type="wfs",e.refresh=(0,Z.Ds)(function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(r){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e._connection.invoke("refresh",r);case 4:return n=t.sent,i=n.extent,t.abrupt("return",(e.sourceJSON.extent=i,{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return(0,s.Z)(r,[{key:"load",value:function(e){var t,r=null!=(t=(0,y.pC)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"queryFeatures",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",T["default"].fromJSON(n));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"queryFeaturesJSON",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"queryFeatureCount",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"queryObjectIds",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"queryExtent",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:j.Z.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"querySnapping",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_createLoadOptions",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n,i,o,s,a,u,p,l,c,d,f,m,v=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.layer,n=r.url,i=r.customParameters,o=r.name,s=r.namespaceUri,a=r.spatialReference,u=r.fields,p=r.geometryType,l=r.swapXY,n){e.next=3;break}throw new k.Z("wfs-layer:missing-url","WFSLayer must be created with a url");case 3:if(e.t0=this.wfsCapabilities,e.t0){e.next=8;break}return e.next=7,(0,P.FU)(n,(0,R.Z)({customParameters:i},t));case 7:this.wfsCapabilities=e.sent;case 8:if(c=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((function(e){return null==v.layer[e]})),!c){e.next=15;break}return e.next=12,(0,P.be)(this.wfsCapabilities,o,s,{spatialReference:a,customParameters:i,signal:null==t?void 0:t.signal});case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=(0,R.Z)((0,R.Z)({},(0,P.eB)(u)),{},{geometryType:p,name:o,namespaceUri:s,spatialReference:a,swapXY:l});case 16:return d=e.t1,f=(0,y.Wg)((0,P.ft)(this.wfsCapabilities.readFeatureTypes(),d.name,d.namespaceUri)),m=x.Mk.toJSON(d.geometryType),e.abrupt("return",{customParameters:i,featureType:f,fields:d.fields.map((function(e){return e.toJSON()})),geometryField:d.geometryField,geometryType:m,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:d.objectIdField,spatialReference:d.spatialReference.toJSON(),swapXY:d.swapXY});case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_startWorker",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n,i,o,s,a,u,p,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.as)([this._createLoadOptions(t),(0,I.bA)("WFSSourceWorker",(0,R.Z)((0,R.Z)({},t),{},{strategy:(0,g.Z)("feature-layers-workers")?"dedicated":"local"}))]);case 2:if(r=e.sent,n=(0,_.Z)(r,2),i=n[0],o=n[1],s=i.error||o.error||null,a=o.value||null,!s){e.next=10;break}throw a&&a.close(),s;case 10:return u=i.value,this._connection=o.value,e.next=14,this._connection.invoke("load",u,t);case 14:p=e.sent,l=p.extent,this.sourceJSON={extent:l,fields:u.fields,geometryType:u.geometryType,objectIdField:u.objectIdField,geometryField:u.geometryField,drawingInfo:(0,q.bU)(u.geometryType),name:u.featureType.title,wfsInfo:{name:u.featureType.name,featureUrl:u.getFeatureUrl,maxFeatures:3e3,swapXY:u.swapXY,supportedSpatialReferences:u.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:u.featureType.namespaceUri}};case 17:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}((0,O.p)(S.Z));(0,l._)([(0,h.Cb)()],U.prototype,"capabilities",void 0),(0,l._)([(0,h.Cb)({constructOnly:!0})],U.prototype,"layer",void 0),(0,l._)([(0,h.Cb)()],U.prototype,"sourceJSON",void 0),(0,l._)([(0,h.Cb)()],U.prototype,"type",void 0),(0,l._)([(0,h.Cb)()],U.prototype,"wfsCapabilities",void 0),U=(0,l._)([(0,w.j)("esri.layers.graphics.sources.WFSSource")],U);var E,N=U,D=r(63759),J=r(54638),Q=r(76923),M=r(47359),W=r(99284),Y=r(61761),X=r(34481),B=r(93692),G=r(13163),A=r(15387),L=r(96852),z=r(46713),V=r(25399),H=r(63390),K=r(17230),$=r(97695),ee=r(17562),te=r(38194),re=r(7730),ne=(0,V.v)(),ie=E=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),n.capabilities=null,n.copyright=null,n.customParameters=null,n.definitionExpression=null,n.displayField=null,n.elevationInfo=null,n.featureReduction=null,n.featureUrl=void 0,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.labelsVisible=!0,n.labelingInfo=null,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="WFS",n.maxFeatures=3e3,n.mode=0,n.name=null,n.namespaceUri=null,n.outFields=null,n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new N({layer:(0,a.Z)(n)}),n.spatialReference=re.Z.WGS84,n.spatialReferences=[4326],n.swapXY=void 0,n.title="WFS",n.type="wfs",n.url=null,n.version=void 0,n}return(0,s.Z)(r,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,H.YN)(t.renderer,t.fieldsIndex),(0,H.UF)(t.timeInfo,t.fieldsIndex)}))),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"writeFields",value:function(e,t,r){var n=e.filter((function(e){return e.name!==P.M8}));this.geometryField&&n.unshift(new z.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,m.RB)(r,n.map((function(e){return e.toJSON()})),t)}},{key:"parsedUrl",get:function(){return this.url?(0,v.mN)(this.url):null}},{key:"renderer",set:function(e){(0,H.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"createPopupTemplate",value:function(e){return(0,te.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new ee.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";var t=this.timeOffset,r=this.timeExtent;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}},{key:"getFieldDomain",value:function(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(ee.Z.from(e)||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,n=(0,i.Z)(e.features);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.layer=o.sourceLayer=r}}catch(s){n.e(s)}finally{n.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"hasDataChanged",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",((0,y.pC)(n)&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e["catch"](0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"fromWFSLayerInfo",value:function(e){var t=e.customParameters,r=e.fields,n=e.geometryField,i=e.geometryType,o=e.name,s=e.namespaceUri,a=e.objectIdField,u=e.spatialReference,p=e.swapXY,l=e.url,c=e.wfsCapabilities;return new E({customParameters:t,fields:r,geometryField:n,geometryType:i,name:o,namespaceUri:s,objectIdField:a,spatialReference:u,swapXY:p,url:l,wfsCapabilities:c})}}]),r}((0,W.c)((0,J.N)((0,Q.b)((0,D.h)((0,G.n)((0,X.Q)((0,B.M)((0,M.q)((0,Y.I)((0,f.R)(F.Z)))))))))));(0,l._)([(0,h.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],ie.prototype,"capabilities",void 0),(0,l._)([(0,h.Cb)({type:String})],ie.prototype,"copyright",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"createQueryVersion",null),(0,l._)([(0,h.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],ie.prototype,"customParameters",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"defaultPopupTemplate",null),(0,l._)([(0,h.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ie.prototype,"definitionExpression",void 0),(0,l._)([(0,h.Cb)({type:String})],ie.prototype,"displayField",void 0),(0,l._)([(0,h.Cb)(A.PV)],ie.prototype,"elevationInfo",void 0),(0,l._)([(0,h.Cb)(L.d)],ie.prototype,"featureReduction",void 0),(0,l._)([(0,h.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"featureUrl",void 0),(0,l._)([(0,h.Cb)({type:[z.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],ie.prototype,"fields",void 0),(0,l._)([(0,C.c)("fields")],ie.prototype,"writeFields",null),(0,l._)([(0,h.Cb)(ne.fieldsIndex)],ie.prototype,"fieldsIndex",void 0),(0,l._)([(0,h.Cb)({type:j.Z,json:{name:"extent"}})],ie.prototype,"fullExtent",void 0),(0,l._)([(0,h.Cb)()],ie.prototype,"geometryField",void 0),(0,l._)([(0,h.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:x.Mk.read},write:{target:"layerDefinition.geometryType",writer:x.Mk.write,ignoreOrigin:!0},origins:{service:{read:x.Mk.read}}}})],ie.prototype,"geometryType",void 0),(0,l._)([(0,h.Cb)({type:String})],ie.prototype,"id",void 0),(0,l._)([(0,h.Cb)(A.iR)],ie.prototype,"labelsVisible",void 0),(0,l._)([(0,h.Cb)({type:[K.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:$.r},write:!0}})],ie.prototype,"labelingInfo",void 0),(0,l._)([(0,h.Cb)(A.rn)],ie.prototype,"legendEnabled",void 0),(0,l._)([(0,h.Cb)({type:["show","hide"]})],ie.prototype,"listMode",void 0),(0,l._)([(0,h.Cb)({type:String})],ie.prototype,"objectIdField",void 0),(0,l._)([(0,h.Cb)({type:["WFS"]})],ie.prototype,"operationalLayerType",void 0),(0,l._)([(0,h.Cb)({type:b.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"maxFeatures",void 0),(0,l._)([(0,h.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ie.prototype,"mode",void 0),(0,l._)([(0,h.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"name",void 0),(0,l._)([(0,h.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"namespaceUri",void 0),(0,l._)([(0,h.Cb)(A.bT)],ie.prototype,"opacity",void 0),(0,l._)([(0,h.Cb)(ne.outFields)],ie.prototype,"outFields",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"parsedUrl",null),(0,l._)([(0,h.Cb)(A.C_)],ie.prototype,"popupEnabled",void 0),(0,l._)([(0,h.Cb)({type:c.Z,json:{name:"popupInfo",write:!0}})],ie.prototype,"popupTemplate",void 0),(0,l._)([(0,h.Cb)({types:d.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:d.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],ie.prototype,"renderer",null),(0,l._)([(0,h.Cb)(A.YI)],ie.prototype,"screenSizePerspectiveEnabled",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"source",void 0),(0,l._)([(0,h.Cb)({type:re.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],ie.prototype,"spatialReference",void 0),(0,l._)([(0,h.Cb)({readOnly:!0,type:[b.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"spatialReferences",void 0),(0,l._)([(0,h.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"swapXY",void 0),(0,l._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],ie.prototype,"title",void 0),(0,l._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],ie.prototype,"type",void 0),(0,l._)([(0,h.Cb)(A.HQ)],ie.prototype,"url",void 0),(0,l._)([(0,h.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"version",void 0),(0,l._)([(0,h.Cb)({aliasOf:"source.wfsCapabilities"})],ie.prototype,"wfsCapabilities",void 0),ie=E=(0,l._)([(0,w.j)("esri.layers.WFSLayer")],ie);var oe=ie},24305:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},94288:function(e,t,r){r.d(t,{Dm:function(){return l},Hq:function(){return c},MS:function(){return d},bU:function(){return p}});var n=r(23796),i=r(4367),o=(r(92222),r(26699),r(32023),r(38862),r(35425)),s=r(40199),a=r(24305),u=r(12190);function p(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.I4:"esriGeometryPolyline"===e?u.ET:u.lF}}}function l(e,t){if((0,o.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(s.includes(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var a=new Function(r);return function(){return new a}}catch(u){return function(){return(0,i.Z)((0,n.Z)({},t,null),e)}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);