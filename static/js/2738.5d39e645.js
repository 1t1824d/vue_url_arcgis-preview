"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[2738],{32738:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var r=a(63825),i=a(35680),o=a(25585),l=a(8723),s=a(27092),n=a(3266),u=a(2553),p=(a(57787),a(35425),a(90202),a(92236)),d=a(7730),g=a(7230),y=a(49938),c=a(49471),b=a(63759),h=a(34481),v=a(93692),m=a(96090);const M={id:"0/0/0",level:0,row:0,col:0,extent:null};let f=class extends((0,b.h)((0,v.M)((0,h.Q)(c.Z)))){constructor(){super(...arguments),this.tileInfo=m.Z.create({spatialReference:d.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new g.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.Z.WebMercator),this.spatialReference=d.Z.WebMercator}getTileBounds(e,t,a,r){const i=r||(0,y.Ue)();return M.level=e,M.row=t,M.col=a,M.extent=i,this.tileInfo.updateTileInfo(M),M.extent=null,i}fetchTile(e,t,a,r={}){const{signal:o}=r,l=this.getTileUrl(e,t,a),s={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,i["default"])(l,s).then((e=>e.data))}getTileUrl(){throw new o.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,r._)([(0,u.Cb)({type:m.Z})],f.prototype,"tileInfo",void 0),(0,r._)([(0,u.Cb)({type:["show","hide"]})],f.prototype,"listMode",void 0),(0,r._)([(0,u.Cb)({readOnly:!0,value:"base-tile"})],f.prototype,"type",void 0),(0,r._)([(0,u.Cb)({nonNullable:!0})],f.prototype,"fullExtent",void 0),(0,r._)([(0,u.Cb)()],f.prototype,"spatialReference",void 0),f=(0,r._)([(0,p.j)("esri.layers.BaseTileLayer")],f);const _=f;var w=a(47359);const C=new l.Xn({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),Z="https://dev.virtualearth.net";let S=class extends((0,b.h)((0,w.q)((0,n.R)(_)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:d.Z.WebMercator},spatialReference:d.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,s.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return C.toJSON(this.style)}get bingLogo(){return(0,s.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new o.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||(0,s.Wi)(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],i=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],o=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",i).replace("{quadkey}",o)}async fetchAttributionData(){return this.load().then((()=>(0,s.Wi)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,i["default"])(`${Z}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new o.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new o.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new o.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new o.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,i["default"])(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new o.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new o.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let i=e;i>0;i--){let e=0;const o=1<<i-1;0!=(a&o)&&(e+=1),0!=(t&o)&&(e+=2),r+=e.toString()}return r}};(0,r._)([(0,u.Cb)({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),(0,r._)([(0,u.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),(0,r._)([(0,u.Cb)({type:m.Z})],S.prototype,"tileInfo",void 0),(0,r._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"copyright",null),(0,r._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),(0,r._)([(0,u.Cb)({type:C.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:C.read}}})],S.prototype,"style",void 0),(0,r._)([(0,u.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],S.prototype,"operationalLayerType",null),(0,r._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),(0,r._)([(0,u.Cb)({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),(0,r._)([(0,u.Cb)({type:String,readOnly:!0})],S.prototype,"bingLogo",null),S=(0,r._)([(0,p.j)("esri.layers.BingMapsLayer")],S);const j=S}}]);