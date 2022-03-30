"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[4649],{4649:function(e,t,r){r.r(t),r.d(t,{default:function(){return de}});var n=r(62032),i=r(16198),o=r(1936),a=r(4367),l=r(76133),s=r(92751),u=r(99418),d=r(49161),p=(r(78975),r(92222),r(21249),r(68309),r(41539),r(69826),r(9653),r(63825)),c=r(78136),y=r(35680),f=r(25585),v=r(40199),h=r(87441),b=r(27092),g=r(3266),m=r(17533),w=r(24446),C=r(58476),Z=r(2553),_=r(90202),I=r(66667),k=r(92236),x=r(78386),R=r(49471),S=r(77177),P=r(94589),T=r(47359),F=r(61761),j=r(93692),q=r(27343),B=r(31652),N=r(71741),V=(r(57787),r(35425),function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),n.field=null,n.type=null,n}return(0,s.Z)(r,[{key:"clone",value:function(){return null}}]),r}(N.wq));(0,p._)([(0,Z.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"field",void 0),(0,p._)([(0,Z.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],V.prototype,"type",void 0),V=(0,p._)([(0,k.j)("esri.layers.pointCloudFilters.PointCloudFilter")],V);var E,L=V,O=E=function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),n.requiredClearBits=null,n.requiredSetBits=null,n.type="bitfield",n}return(0,s.Z)(r,[{key:"clone",value:function(){return new E({field:this.field,requiredClearBits:(0,v.d9)(this.requiredClearBits),requiredSetBits:(0,v.d9)(this.requiredSetBits)})}}]),r}(L);(0,p._)([(0,Z.Cb)({type:[_.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],O.prototype,"requiredClearBits",void 0),(0,p._)([(0,Z.Cb)({type:[_.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],O.prototype,"requiredSetBits",void 0),(0,p._)([(0,B.J)({pointCloudBitfieldFilter:"bitfield"})],O.prototype,"type",void 0),O=E=(0,p._)([(0,k.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],O);var A,D=O,K=A=function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),n.includedReturns=[],n.type="return",n}return(0,s.Z)(r,[{key:"clone",value:function(){return new A({field:this.field,includedReturns:(0,v.d9)(this.includedReturns)})}}]),r}(L);(0,p._)([(0,Z.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],K.prototype,"includedReturns",void 0),(0,p._)([(0,B.J)({pointCloudReturnFilter:"return"})],K.prototype,"type",void 0),K=A=(0,p._)([(0,k.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],K);var M,G=K,J=(r(33948),M=function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),n.mode="exclude",n.type="value",n.values=[],n}return(0,s.Z)(r,[{key:"clone",value:function(){return new M({field:this.field,mode:this.mode,values:(0,v.d9)(this.values)})}}]),r}(L));(0,p._)([(0,Z.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"mode",void 0),(0,p._)([(0,B.J)({pointCloudValueFilter:"value"})],J.prototype,"type",void 0),(0,p._)([(0,Z.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"values",void 0),J=M=(0,p._)([(0,k.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],J);var z,U=J,$={key:"type",base:L,typeMap:{value:U,bitfield:D,return:G}},Y=r(15387),H=r(46713),Q=r(25399),W=r(1375),X=r(89389),ee=r(30208),te=z=function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),n.type="point-cloud-rgb",n.field=null,n}return(0,s.Z)(r,[{key:"clone",value:function(){return new z((0,a.Z)((0,a.Z)({},this.cloneProperties()),{},{field:(0,v.d9)(this.field)}))}}]),r}(ee.Z);(0,p._)([(0,B.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],te.prototype,"type",void 0),(0,p._)([(0,Z.Cb)({type:String,json:{write:!0}})],te.prototype,"field",void 0),te=z=(0,p._)([(0,k.j)("esri.renderers.PointCloudRGBRenderer")],te);var re=te,ne=r(83317),ie=r(36109),oe={key:"type",base:ee.Z,typeMap:{"point-cloud-class-breaks":X.Z,"point-cloud-rgb":re,"point-cloud-stretch":ne.Z,"point-cloud-unique-value":ie.Z},errorContext:"renderer"},ae=r(38194),le=h.Z.getLogger("esri.layers.PointCloudLayer"),se=(0,Q.v)(),ue=function(e){(0,u.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.operationalLayerType="PointCloudLayer",e.popupEnabled=!0,e.popupTemplate=null,e.opacity=1,e.filters=[],e.fields=null,e.fieldsIndex=null,e.outFields=null,e.path=null,e.legendEnabled=!0,e.renderer=null,e.type="point-cloud",e}return(0,s.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"getFieldDomain",value:function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}},{key:"readServiceFields",value:function(e,t,r){return Array.isArray(e)?e.map((function(e){var t=new H.Z;return"FieldTypeInteger"===e.type&&((e=(0,v.d9)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((function(e){return new H.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})})):null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"writeRenderer",value:function(e,t,r,n){(0,m.RB)("layerDefinition.drawingInfo.renderer",e.write({},n),t)}},{key:"load",value:function(e){var t=this,r=(0,b.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w.r9).then((function(){return t._fetchService(r)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){var t=(0,ae.eZ)(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}},{key:"formatPopupTemplateReturnsField",value:function(e){var t=this.fieldsIndex.get("RETURNS");if(t){var r=e.fieldInfos.find((function(e){return e.fieldName===t.name}));if(r){var n=new W.Z({name:"pcl-returns-decoded",title:t.alias||t.name,expression:"\n        var returnValue = $feature.".concat(t.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[].concat((0,o.Z)(e.expressionInfos||[]),[n]),r.fieldName="expression/pcl-returns-decoded"}}}},{key:"formatPopupTemplateRGBField",value:function(e){var t=this.fieldsIndex.get("RGB");if(t){var r=e.fieldInfos.find((function(e){return e.fieldName===t.name}));if(r){var n=new W.Z({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:"\n        var rgb = $feature.".concat(t.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[].concat((0,o.Z)(e.expressionInfos||[]),[n]),r.fieldName="expression/pcl-rgb-decoded"}}}},{key:"queryCachedStatistics",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(t,r){var i,o,a,l,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.attributeStorageInfo){e.next=4;break}throw new f.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(i=this.fieldsIndex.get(t),i){e.next=7;break}throw new f.Z("pointcloudlayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:o=(0,n.Z)(this.attributeStorageInfo),e.prev=8,o.s();case 10:if((a=o.n()).done){e.next=17;break}if(l=a.value,l.name!==i.name){e.next=15;break}return s=(0,C.v_)(this.parsedUrl.path,"./statistics/".concat(l.key)),e.abrupt("return",(0,y["default"])(s,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](8),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:throw new f.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"saveAs",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(t,r){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,(0,a.Z)((0,a.Z)({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"point-cloud"}),t));case 1:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"point-cloud"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"validateLayer",value:function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new f.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new f.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new f.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}},{key:"hasCachedStatistics",value:function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((function(t){return t.name===e}))}},{key:"_getTypeKeywords",value:function(){return["PointCloud"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&le.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&le.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}}]),r}((0,q.V)((0,P.Y)((0,T.q)((0,F.I)((0,j.M)((0,g.R)((0,S.V)(R.Z))))))));(0,p._)([(0,Z.Cb)({type:["PointCloudLayer"]})],ue.prototype,"operationalLayerType",void 0),(0,p._)([(0,Z.Cb)(Y.C_)],ue.prototype,"popupEnabled",void 0),(0,p._)([(0,Z.Cb)({type:c.Z,json:{name:"popupInfo",write:!0}})],ue.prototype,"popupTemplate",void 0),(0,p._)([(0,Z.Cb)({readOnly:!0,json:{read:!1}})],ue.prototype,"defaultPopupTemplate",null),(0,p._)([(0,Z.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ue.prototype,"opacity",void 0),(0,p._)([(0,Z.Cb)({type:["show","hide"]})],ue.prototype,"listMode",void 0),(0,p._)([(0,Z.Cb)({types:[$],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ue.prototype,"filters",void 0),(0,p._)([(0,Z.Cb)({type:[H.Z]})],ue.prototype,"fields",void 0),(0,p._)([(0,Z.Cb)(se.fieldsIndex)],ue.prototype,"fieldsIndex",void 0),(0,p._)([(0,I.r)("service","fields",["fields","attributeStorageInfo"])],ue.prototype,"readServiceFields",null),(0,p._)([(0,Z.Cb)(se.outFields)],ue.prototype,"outFields",void 0),(0,p._)([(0,Z.Cb)({readOnly:!0})],ue.prototype,"attributeStorageInfo",void 0),(0,p._)([(0,Z.Cb)(Y.PV)],ue.prototype,"elevationInfo",null),(0,p._)([(0,Z.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ue.prototype,"path",void 0),(0,p._)([(0,Z.Cb)(Y.rn)],ue.prototype,"legendEnabled",void 0),(0,p._)([(0,Z.Cb)({types:oe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:oe},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ue.prototype,"renderer",void 0),(0,p._)([(0,x.c)("renderer")],ue.prototype,"writeRenderer",null),(0,p._)([(0,Z.Cb)({json:{read:!1},readOnly:!0})],ue.prototype,"type",void 0),ue=(0,p._)([(0,k.j)("esri.layers.PointCloudLayer")],ue);var de=ue}}]);