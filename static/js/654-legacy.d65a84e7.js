"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[654],{10654:function(e,t,r){r.r(t),r.d(t,{default:function(){return Le}});var n,a=r(16198),i=r(23796),l=r(4367),s=r(62032),o=r(76133),u=r(92751),p=r(43263),c=r(99418),f=r(49161),y=(r(78975),r(92222),r(82526),r(41817),r(41539),r(57327),r(51532),r(78783),r(33948),r(54747),r(68309),r(21249),r(83753),r(69826),r(9653),r(63825)),d=r(54560),m=r(7380),h=r(78136),v=r(35680),b=r(54643),g=r(1723),x=r(48595),w=r(8723),_=r(40199),E=r(27092),S=r(3266),C=r(24446),N=r(58476),I=r(2553),O=r(90202),R=r(66667),Z=r(92236),k=r(78386),U=r(90850),F=r(7230),L=r(7730),A=r(84684),P=r(71563),M=r(49471),j=r(63759),T=r(47359),q=r(61761),V=r(34481),W=r(93692),B=r(13163),D=r(46561),G=r(15387),H=r(10030),X=r(36833),J=(r(57787),r(35425),r(43532)),Q=0,$=n=function(e){(0,c.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),n._sublayersHandles=new X.Z,n.dimensions=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.legendUrl=null,n.legendEnabled=!0,n.maxScale=0,n.minScale=0,n.popupEnabled=!1,n.queryable=!1,n.spatialReferences=null,n}return(0,u.Z)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"fullExtent",get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)}},{key:"readExtent",value:function(e,t){return(e=t.extent)?F.Z.fromJSON(e):null}},{key:"id",get:function(){var e=this._get("id");return null==e?Q++:e},set:function(e){this._set("id",e)}},{key:"readLegendUrl",value:function(e,t){return t?t.legendUrl||t.legendURL:null}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"name",get:function(){return this._get("name")},set:function(e){this._set("name",e)}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))])),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,O.se)(b.Z.ofType(n),e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"clone",value:function(){var e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((function(e){return e.clone()}))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((function(e){return e}))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}},{key:"_setAndNotifyLayer",value:function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}}]),r}(S.w);(0,y._)([(0,I.Cb)()],$.prototype,"description",null),(0,y._)([(0,I.Cb)({readOnly:!0})],$.prototype,"dimensions",void 0),(0,y._)([(0,I.Cb)({value:null})],$.prototype,"fullExtent",null),(0,y._)([(0,R.r)("fullExtent",["extent"])],$.prototype,"readExtent",null),(0,y._)([(0,I.Cb)()],$.prototype,"fullExtents",void 0),(0,y._)([(0,I.Cb)()],$.prototype,"featureInfoFormat",void 0),(0,y._)([(0,I.Cb)()],$.prototype,"featureInfoUrl",void 0),(0,y._)([(0,I.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],$.prototype,"id",null),(0,y._)([(0,I.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],$.prototype,"legendUrl",void 0),(0,y._)([(0,R.r)(["web-document"],"legendUrl")],$.prototype,"readLegendUrl",null),(0,y._)([(0,I.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],$.prototype,"legendEnabled",void 0),(0,y._)([(0,I.Cb)({value:null})],$.prototype,"layer",null),(0,y._)([(0,I.Cb)()],$.prototype,"maxScale",void 0),(0,y._)([(0,I.Cb)()],$.prototype,"minScale",void 0),(0,y._)([(0,I.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],$.prototype,"name",null),(0,y._)([(0,I.Cb)()],$.prototype,"parent",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],$.prototype,"popupEnabled",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],$.prototype,"queryable",void 0),(0,y._)([(0,I.Cb)()],$.prototype,"sublayers",null),(0,y._)([(0,J.p)("sublayers")],$.prototype,"castSublayers",null),(0,y._)([(0,I.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],$.prototype,"spatialReferences",void 0),(0,y._)([(0,I.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],$.prototype,"title",null),(0,y._)([(0,I.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],$.prototype,"visible",null),$=n=(0,y._)([(0,Z.j)("esri.layers.support.WMSSublayer")],$);var z=$,Y=r(2394),K=(r(69600),r(47042),r(74916),r(23123),r(26699),r(32023),r(77601),r(4723),r(15306),r(70189),r(25585)),ee=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],te={84:4326,83:4269,27:4267};function re(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){var n=Array.prototype.slice.call(r.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new K.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",n)}var a=ue("Capability",r),i=ue("Service",r),l=ue("Request",a);if(!a||!i||!l)return null;var s=ue("Layer",a);if(!s)return null;var o,u,p,c="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",f=ce("Title",i,"")||ce("Name",i,""),y=ce("AccessConstraints",i,""),d=ce("Abstract",i,""),m=parseInt(ce("MaxWidth",i,"5000"),10),h=parseInt(ce("MaxHeight",i,"5000"),10),v=de(l,"GetMap"),b=ye(l,"GetMap"),g=he(s,c,t),x=0;if(Array.prototype.slice.call(a.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===x?o=e:1===x?(g.name&&(g.name="",g.sublayers.push(he(o,c,t))),g.sublayers.push(he(e,c,t))):g.sublayers.push(he(e,c,t)),x++)})),!g)return null;var w=g.fullExtents;if(u=g.sublayers,u||(u=[]),0===u.length&&u.push(g),p=g.extent,!p){var _=new F.Z(u[0].extent);g.extent=_.toJSON(),p=g.extent}var E,S=g.spatialReferences.length>0?g.spatialReferences:ie(g),C=ye(l,"GetFeatureInfo");if(C){var N=de(l,"GetFeatureInfo");N.indexOf("text/html")>-1?E="text/html":N.indexOf("text/plain")>-1&&(E="text/plain")}if(!E){var I=function e(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((function(t){e(t)})))};I(g)}var O=le(u),R=g.minScale||0,Z=g.maxScale||0,k=g.dimensions,U=O.reduce((function(e,t){return e.concat(t.dimensions)}),[]),L=k.concat(U).filter(ge),A=null;if(L.length>0){var P=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;L.forEach((function(e){var t=e.extent;ve(t)?t.forEach((function(e){P=Math.min(P,e.getTime()),M=Math.max(M,e.getTime())})):t.forEach((function(e){P=Math.min(P,e.min.getTime()),M=Math.max(M,e.max.getTime())}))})),A={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[P,M]}}return{copyright:y,description:d,dimensions:k,extent:p,fullExtents:w,featureInfoFormat:E,featureInfoUrl:C,mapUrl:b,maxWidth:m,maxHeight:h,maxScale:Z,minScale:R,layers:O,spatialReferences:S,supportedImageFormatTypes:v,timeInfo:A,title:f,version:c}}function ne(e){return ee.some((function(t){var r=(0,Y.Z)(t,2),n=r[0],a=r[1];return e>=n&&e<=a}))}function ae(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}function ie(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers){var t,r=(0,s.Z)(e.sublayers);try{for(r.s();!(t=r.n()).done;){var n=t.value,a=ie(n);if(a.length>0)return a}}catch(i){r.e(i)}finally{r.f()}}return[]}function le(e){var t=[];return e.forEach((function(e){t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(le(e.sublayers)),delete e.sublayers)})),t}function se(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function oe(e,t,r,n){var a=ue(e,r);return a?se(t,a,n):n}function ue(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(be(n)&&n.nodeName===e)return n}return null}function pe(e,t){for(var r=[],n=0;n<t.childNodes.length;n++){var a=t.childNodes[n];be(a)&&a.nodeName===e&&r.push(a)}return r}function ce(e,t,r){var n=ue(e,t);return n?n.textContent:r}function fe(e,t,r){if(!e)return null;var n,a,i,l,s=parseFloat(e.getAttribute("minx")),o=parseFloat(e.getAttribute("miny")),u=parseFloat(e.getAttribute("maxx")),p=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(o)?-Number.MAX_VALUE:o,a=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(p)?Number.MAX_VALUE:p,l=isNaN(u)?Number.MAX_VALUE:u):(n=isNaN(s)?-Number.MAX_VALUE:s,a=isNaN(o)?-Number.MAX_VALUE:o,i=isNaN(u)?Number.MAX_VALUE:u,l=isNaN(p)?Number.MAX_VALUE:p);var c=new L.Z({wkid:t});return new F.Z({xmin:n,ymin:a,xmax:i,ymax:l,spatialReference:c})}function ye(e,t){var r=ue(t,e);if(r){var n=ue("DCPType",r);if(n){var a=ue("HTTP",n);if(a){var i=ue("Get",a);if(i){var l=oe("OnlineResource","xlink:href",i,null);if(l)return l.indexOf("&")===l.length-1&&(l=l.substring(0,l.length-1)),xe(l,["service","request"])}}}}return null}function de(e,t){var r=pe("Operation",e);if(0===r.length)return pe("Format",ue(t,e)).map((function(e){return e.textContent}));var n=[];return r.forEach((function(e){e.getAttribute("name")===t&&pe("Format",e).forEach((function(e){n.push(e.textContent)}))})),n}function me(e,t,r){var n=ue(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function he(e,t,r){var n;if(!e)return null;var a={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=ue("LatLonBoundingBox",e),l=ue("EX_GeographicBoundingBox",e),s=null;i&&(s=fe(i,4326)),l&&(s=new F.Z(0,0,0,0,new L.Z({wkid:4326})),s.xmin=parseFloat(ce("westBoundLongitude",l,"0")),s.ymin=parseFloat(ce("southBoundLatitude",l,"0")),s.xmax=parseFloat(ce("eastBoundLongitude",l,"0")),s.ymax=parseFloat(ce("northBoundLatitude",l,"0"))),i||l||(s=new F.Z(-180,-90,180,90,new L.Z({wkid:4326}))),a.minScale=me(e,"MaxScaleDenominator",0),a.maxScale=me(e,"MinScaleDenominator",0);var o=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)a.name=e.textContent||"";else if("Title"===e.nodeName)a.title=e.textContent||"";else if("Abstract"===e.nodeName)a.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(o);if(n&&0===n.indexOf("EPSG:")){var i=parseInt(n.substring(5),10);0===i||isNaN(i)||s||(s="1.3.0"===t?fe(e,i,ne(i)):fe(e,i))}var l=n&&n.indexOf(":");if(l&&l>-1){var u=parseInt(n.substring(l+1,n.length),10);0===u||isNaN(u)||(u=te[u]?te[u]:u);var p="1.3.0"===t?fe(e,u,ne(u)):fe(e,u);a.fullExtents.push(p)}}else if(e.nodeName===o)e.textContent.split(" ").forEach((function(e){var t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r=te[t]?te[t]:t;a.spatialReferences.includes(r)||a.spatialReferences.push(r)}}));else if("Style"!==e.nodeName||a.legendURL){if("Layer"===e.nodeName){var c=he(e,t,r);c&&(c.parentLayerId=a.id,a.sublayers||(a.sublayers=[]),a.sublayers.push(c))}}else{var f=ue("LegendURL",e);if(f){var y=ue("OnlineResource",f);y&&(a.legendURL=y.getAttribute("xlink:href"))}}})),a.extent=null==(n=s)?void 0:n.toJSON(),a.dimensions=pe("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,a=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),l="0"!==se("default",e,"0"),s="0"!==se("nearestValue",e,"0"),o="0"!==se("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:Ee(n),default:Ee(i),multipleValues:l,nearestValue:s,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:we(n),unitSymbol:a,default:we(i),multipleValues:l,nearestValue:s}:{name:t,units:r,extent:_e(n),unitSymbol:a,default:_e(i),multipleValues:l,nearestValue:s}})),a}function ve(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function be(e){return e.nodeType===Node.ELEMENT_NODE}function ge(e){return"time"===e.name}function xe(e,t){var r=[],n=(0,N.mN)(e);for(var a in n.query)n.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+n.query[a]);return n.path+(r.length?"?"+r.join("&"):"")}function we(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return parseFloat(e)}))}function _e(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((function(e){return e})):r}function Ee(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?Se(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return new Date(e)}))}function Se(e){var t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:Ce(r[1]),months:Ce(r[2]),days:Ce(r[3]),hours:Ce(r[4]),minutes:Ce(r[5]),seconds:Ce(r[6])}:null}function Ce(e){if(!e)return 0;var t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;var n=r[0].replace(",",".");return Number(n)}function Ne(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}var Ie=new Set([102100,3857,102113,900913]),Oe=new Set([3395,54004]);function Re(e,t){var r=e.wkid;return(0,E.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),Ie.has(r)?t.find((function(e){return Ie.has(e)}))||t.find((function(e){return Oe.has(e)}))||102100:r)}var Ze=new w.Xn({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1}),ke=function(e){(0,c.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),e.allSublayers=new g.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.customParameters=null,e.customLayerParameters=null,e.copyright=null,e.description=null,e.dimensions=null,e.fullExtent=null,e.fullExtents=null,e.featureInfoFormat=null,e.featureInfoUrl=null,e.imageFormat=null,e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.legendEnabled=!0,e.mapUrl=null,e.isReference=null,e.operationalLayerType="WMS",e.spatialReference=null,e.spatialReferences=null,e.sublayers=null,e.type="wms",e.url=null,e.version=null,e.watch("sublayers",(function(t,r){if(r){var n,a=(0,s.Z)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.layer=null}}catch(c){a.e(c)}finally{a.f()}e.handles.remove("wms-sublayer")}if(t){var l,o=(0,s.Z)(t);try{for(o.s();!(l=o.n()).done;){var u=l.value;u.parent=(0,p.Z)(e),u.layer=(0,p.Z)(e)}}catch(c){o.e(c)}finally{o.f()}e.handles.add([t.on("after-add",(function(t){var r=t.item;r.parent=(0,p.Z)(e),r.layer=(0,p.Z)(e)})),t.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))],"wms-sublayer")}}),!0),e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,l.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=(0,E.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(C.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readFullExtentFromItemOrMap",value:function(e,t){var r=t.extent;return new F.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}},{key:"writeFullExtent",value:function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}},{key:"readSpatialReferenceFromItemOrDocument",value:function(e,t){return new L.Z(t.spatialReferences[0])}},{key:"writeSpatialReferences",value:function(e,t){var r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((function(e){return e!==r})),t.spatialReferences.unshift(r)):t.spatialReferences=e}},{key:"readSublayersFromItemOrMap",value:function(e,t,r){return Fe(t.layers,r,t.visibleLayers)}},{key:"readSublayers",value:function(e,t,r){return Fe(t.layers,r)}},{key:"writeSublayers",value:function(e,t,r,n){t.layers=[];var a=new Map,i=e.flatten((function(e){var t=e.sublayers;return t&&t.toArray()})).toArray();i.forEach((function(e){"number"==typeof e.parent.id&&(a.has(e.parent.id)?a.get(e.parent.id).push(e.id):a.set(e.parent.id,[e.id]))})),i.forEach((function(e){var r=(0,l.Z)({sublayer:e},n),i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(a.has(e.id)&&(i.sublayerIds=a.get(e.id)),!e.sublayers&&e.name){var s=e.write({},r);delete s.id,t.layers.push(s)}})),t.visibleLayers=i.filter((function(e){return e.visible&&!e.sublayers})).map((function(e){return e.name}))}},{key:"createExportImageParameters",value:function(e,t,r,n){var a=n&&n.pixelRatio||1,s=(0,A.yZ)({extent:e,width:t})*a,o=new H.j({layer:this,scale:s}),u=e.xmin,p=e.ymin,c=e.xmax,f=e.ymax,y=e.spatialReference,d=Re(y,this.spatialReferences),m="1.3.0"===this.version&&ne(d)?"".concat(p,",").concat(u,",").concat(f,",").concat(c):"".concat(u,",").concat(p,",").concat(c,",").concat(f),h=o.toJSON();return(0,l.Z)((0,i.Z)({bbox:m},"1.3.0"===this.version?"crs":"srs",isNaN(d)?void 0:"EPSG:"+d),h)}},{key:"fetchImage",value:function(){var e=(0,a.Z)(regeneratorRuntime.mark((function e(t,r,n,a){var i,s,o,u,p,c,f,y,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=this.mapUrl,u=this.createExportImageParameters(t,r,n,a),u.layers){e.next=4;break}return p=document.createElement("canvas"),e.abrupt("return",(p.width=r,p.height=n,p));case 4:return c=null==a||null==(i=a.timeExtent)?void 0:i.start,f=null==a||null==(s=a.timeExtent)?void 0:s.end,y=(0,E.pC)(c)&&(0,E.pC)(f)?c.getTime()===f.getTime()?Ne(c):"".concat(Ne(c),"/").concat(Ne(f)):void 0,d={responseType:"image",query:this._mixCustomParameters((0,l.Z)((0,l.Z)({width:r,height:n},u),{},{time:y},this.refreshParameters)),signal:null==a?void 0:a.signal},e.abrupt("return",(0,v["default"])(o,d).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e,this)})));function t(t,r,n,a){return e.apply(this,arguments)}return t}()},{key:"fetchFeatureInfo",value:function(e,t,r,n,a){var i=(0,A.yZ)({extent:e,width:t}),s=new H.j({layer:this,scale:i}),o=ae(s.visibleSublayers);if(!this.featureInfoUrl||!o)return null;var u="1.3.0"===this.version?{I:n,J:a}:{x:n,y:a},p=(0,l.Z)({query_layers:o,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},u),c=(0,l.Z)((0,l.Z)({},this.createExportImageParameters(e,t,r)),p),f=this._mixCustomParameters(c),y=(0,N.fl)(this.featureInfoUrl,f),d=document.createElement("iframe");d.src=y,d.style.border="none",d.style.margin="0",d.style.width="100%",d.setAttribute("sandbox","");var v=new h.Z({title:this.title,content:d});return new m.Z({sourceLayer:this,popupTemplate:v})}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"findSublayerByName",value:function(e){return this.allSublayers.find((function(t){return t.name===e}))}},{key:"supportsSpatialReference",value:function(e){return(0,D.G)(this.url)||this.spatialReferences.some((function(t){var r=900913===t?L.Z.WebMercator:new L.Z({wkid:t});return(0,P.fS)(r,e)}))}},{key:"_fetchService",value:function(){var e=(0,a.Z)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.resourceInfo){e.next=6;break}return this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request),e.next=4,(0,v["default"])(this.parsedUrl.path,{query:(0,l.Z)((0,l.Z)({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:t});case 4:r=e.sent,this.resourceInfo=re(r.data);case 6:this.parsedUrl&&(n=new N.R9(this.parsedUrl.path),"https"!==n.scheme||n.port&&"443"!==n.port||-1!==d.Z.request.httpsDomains.indexOf(n.host)||d.Z.request.httpsDomains.push(n.host)),this.read(this.resourceInfo,{origin:"service"});case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_mixCustomParameters",value:function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=(0,l.Z)((0,l.Z)({},this.customParameters),this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e}}]),r}((0,x.p)((0,j.h)((0,B.n)((0,V.Q)((0,W.M)((0,T.q)((0,q.I)((0,S.R)(M.Z)))))))));function Ue(e,t){return e.some((function(e){for(var r in e)if((0,U.df)(e,r,null,t))return!0;return!1}))}function Fe(e,t,r){var n=new Map;e.every((function(e){return null==e.id}))&&(e=(0,_.d9)(e)).forEach((function(e,t){return e.id=t}));var a,i=(0,s.Z)(e);try{for(i.s();!(a=i.n()).done;){var l=a.value,o=new z;o.read(l,t),-1===(null==r?void 0:r.indexOf(o.name))&&(o.visible=!1),n.set(o.id,o)}}catch(m){i.e(m)}finally{i.f()}var u,p=[],c=(0,s.Z)(e);try{for(c.s();!(u=c.n()).done;){var f=u.value,y=n.get(f.id);if(null!=f.parentLayerId&&f.parentLayerId>=0){var d=n.get(f.parentLayerId);d.sublayers||(d.sublayers=new l),d.sublayers.unshift(y)}else p.unshift(y)}}catch(m){c.e(m)}finally{c.f()}return p}(0,y._)([(0,I.Cb)({readOnly:!0})],ke.prototype,"allSublayers",void 0),(0,y._)([(0,I.Cb)({json:{type:Object,write:!0}})],ke.prototype,"customParameters",void 0),(0,y._)([(0,I.Cb)({json:{type:Object,write:!0}})],ke.prototype,"customLayerParameters",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:!0}})],ke.prototype,"copyright",void 0),(0,y._)([(0,I.Cb)()],ke.prototype,"description",void 0),(0,y._)([(0,I.Cb)({readOnly:!0})],ke.prototype,"dimensions",void 0),(0,y._)([(0,I.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ke.prototype,"fullExtent",void 0),(0,y._)([(0,R.r)(["web-document","portal-item"],"fullExtent",["extent"])],ke.prototype,"readFullExtentFromItemOrMap",null),(0,y._)([(0,k.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ke.prototype,"writeFullExtent",null),(0,y._)([(0,I.Cb)()],ke.prototype,"fullExtents",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"featureInfoFormat",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"featureInfoUrl",void 0),(0,y._)([(0,I.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:Ze.jsonValues,read:{reader:Ze.read,source:"format"},write:{writer:Ze.write,target:"format"}}}}})],ke.prototype,"imageFormat",void 0),(0,y._)([(0,R.r)("imageFormat",["supportedImageFormatTypes"])],ke.prototype,"readImageFormat",null),(0,y._)([(0,I.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ke.prototype,"imageMaxHeight",void 0),(0,y._)([(0,I.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ke.prototype,"imageMaxWidth",void 0),(0,y._)([(0,I.Cb)()],ke.prototype,"imageTransparency",void 0),(0,y._)([(0,I.Cb)(G.rn)],ke.prototype,"legendEnabled",void 0),(0,y._)([(0,I.Cb)({type:["show","hide","hide-children"]})],ke.prototype,"listMode",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"mapUrl",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],ke.prototype,"isReference",void 0),(0,y._)([(0,I.Cb)({type:["WMS"]})],ke.prototype,"operationalLayerType",void 0),(0,y._)([(0,I.Cb)({type:L.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ke.prototype,"spatialReference",void 0),(0,y._)([(0,R.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ke.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,y._)([(0,I.Cb)({type:[O.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ke.prototype,"spatialReferences",void 0),(0,y._)([(0,k.c)(["web-document","portal-item"],"spatialReferences")],ke.prototype,"writeSpatialReferences",null),(0,y._)([(0,I.Cb)({type:b.Z.ofType(z),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(Ue(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ke.prototype,"sublayers",void 0),(0,y._)([(0,R.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ke.prototype,"readSublayersFromItemOrMap",null),(0,y._)([(0,R.r)("service","sublayers",["layers"])],ke.prototype,"readSublayers",null),(0,y._)([(0,k.c)("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],ke.prototype,"writeSublayers",null),(0,y._)([(0,I.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],ke.prototype,"type",void 0),(0,y._)([(0,I.Cb)(G.HQ)],ke.prototype,"url",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"version",void 0),ke=(0,y._)([(0,Z.j)("esri.layers.WMSLayer")],ke);var Le=ke},10030:function(e,t,r){r.d(t,{j:function(){return y}});var n=r(76133),a=r(92751),i=r(99418),l=r(49161),s=(r(69600),r(21249),r(57327),r(41539),r(68309),r(54747),r(9653),r(63825)),o=r(44171),u=r(48595),p=r(2553),c=(r(57787),r(35425),r(90202),r(92236)),f={visible:"visibleSublayers"},y=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(e){var a;return(0,n.Z)(this,r),a=t.call(this,e),a.scale=0,a}return(0,a.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(f[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null==e?void 0:e.sublayers,n=[],a=function e(r){var a=r.minScale,i=r.maxScale,l=r.sublayers,s=r.visible;s&&(0===t||(0===a||t<=a)&&(0===i||t>=i))&&(l?l.forEach(e):n.unshift(r))};return null==r||r.forEach(a),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers,r=e.imageFormat,n=e.imageTransparency,a=e.version;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n,version:a,layers:t}}}]),r}((0,u.p)(o.Z));(0,s._)([(0,p.Cb)()],y.prototype,"layer",null),(0,s._)([(0,p.Cb)({readOnly:!0})],y.prototype,"layers",null),(0,s._)([(0,p.Cb)({type:Number})],y.prototype,"scale",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],y.prototype,"version",null),(0,s._)([(0,p.Cb)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=(0,s._)([(0,c.j)("esri.layers.support.ExportWMSImageParameters")],y)}}]);