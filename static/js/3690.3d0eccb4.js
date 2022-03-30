"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[3690],{73690:function(e,t,n){n.r(t),n.d(t,{registerFunctions:function(){return P}});n(21703);var r=n(85251),a=n(60390),i=n(6133),l=n(63377),s=n(7353),o=n(21735),u=n(16647),f=n(9327),c=n(39589),d=n(40618),p=n(63497),m=n(92630),y=n(88913),h=n(68603),g=n(91662),F=n(75461),E=n(85788),I=n(13122),D=n(24446),w=n(77263),b=n(42995),N=n(46713);function x(e,t,n,r){if(1===r.length){if((0,f.a)(r[0]))return(0,I.t)(e,r[0],-1);if((0,f.b)(r[0]))return(0,I.t)(e,r[0].toArray(),-1)}return(0,I.t)(e,r,-1)}function A(e,t,n){const r=e.getVariables();if(r.length>0){const a=[];for(let e=0;e<r.length;e++){const i={name:r[e]};a.push(t.evaluateIdentifier(n,i))}return(0,D.$6)(a).then((t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e}))}return(0,D.DB)(e)}function S(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function $(e){if(null===e)return null;const t={type:S(e,"type",""),name:S(e,"name","")};if("range"===t.type)t.range=S(e,"range",[]);else{t.codedValues=[];for(const n of S(e,"codedValues",[]))t.codedValues.push({name:S(n,"name",""),code:S(n,"code",null)})}return t}function C(e){if(null===e)return null;const t={},n=S(e,"wkt",null);null!==n&&(t.wkt=n);const r=S(e,"wkid",null);return null!==r&&(t.wkid=r),t}function T(e){if(null===e)return null;const t={hasZ:S(e,"hasz",!1),hasM:S(e,"hasm",!1)},n=S(e,"spatialreference",null);n&&(t.spatialReference=C(n));const r=S(e,"x",null);if(null!==r)return t.x=r,t.y=S(e,"y",null),t;const a=S(e,"rings",null);if(null!==a)return t.rings=a,t;const i=S(e,"paths",null);if(null!==i)return t.paths=i,t;const l=S(e,"points",null);if(null!==l)return t.points=l,t;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=S(e,s,null);null!==n&&(t[s]=n)}return t}function v(e,t){for(const n of t)if(n===e)return!0;return!1}function L(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==v(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,f.a)(e.layerDefinition.fields)&&!1!==(0,f.a)(e.featureSet.features)}function P(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,((e,n,i)=>{(0,f.p)(i,1,2);let l=(0,f.E)(i[1],""),o=!0===l;if(l=!0===l||!1===l?"":(0,f.d)(l),i[0]instanceof r.Z){let e=null;return t.services&&t.services.portal&&(e=t.services.portal),e=(0,s.getPortal)(i[0],e),(0,s.lookupUser)(e,l,o).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.Z.convertObjectToArcadeDictionary(t)}return null}))}let u=null;if((0,f.o)(i[0])&&(u=i[0]),u)return o=!1,l?null:u.load().then((()=>u.getOwningSystemUrl())).then((e=>{if(!e)return l?null:u.getIdentityUser().then((e=>e?a.Z.convertObjectToArcadeDictionary({username:e}):null));let n=null;return t.services&&t.services.portal&&(n=t.services.portal),n=(0,s.getPortal)(new r.Z(e),n),(0,s.lookupUser)(n,l,o).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.Z.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,f.p)(n,2,4),n[0]instanceof l.Z){const e=(0,f.d)(n[1]);let t=(0,f.E)(n[2],null);const r=(0,f.y)((0,f.E)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,f.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{if((0,f.p)(r,1,2),r[0]instanceof i.Z){let e=(0,f.E)(r[1],"datasource");return null===e&&(e="datasource"),e=(0,f.d)(e).toLowerCase(),(0,s.convertToFeatureSet)(r[0]._layer,e,t.lrucache,t.interceptor,t.spatialReference)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,n,a)=>{if((0,f.p)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof r.Z){const e=(0,f.d)(a[1]),n=(0,f.d)(a[2]);let r=(0,f.E)(a[3],null);const i=(0,f.y)((0,f.E)(a[4],!0));if(null===r&&(r=["*"]),!1===(0,f.a)(r))throw new Error("Invalid Parameter");let l=null;return t.services&&t.services.portal&&(l=t.services.portal),l=(0,s.getPortal)(a[0],l),(0,s.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,r,i,l,t.lrucache,t.interceptor)}if(!1===(0,f.f)(a[0]))throw new Error("Portal is required");const i=(0,f.d)(a[0]),l=(0,f.d)(a[1]);let o=(0,f.E)(a[2],null);const u=(0,f.y)((0,f.E)(a[3],!0));if(null===o&&(o=["*"]),!1===(0,f.a)(o))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return(0,s.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,o,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,f.p)(n,2,4),n[0]instanceof l.Z){const e=(0,f.d)(n[1]);let t=(0,f.E)(n[2],null);const r=(0,f.y)((0,f.E)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,f.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,n,r)=>{(0,f.p)(r,1,1);let i=r[0];const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,f.f)(i))i=JSON.parse(i),void 0!==i.layerDefinition?(l.layerDefinition=i.layerDefinition,l.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(l.featureSet.features=i.features,l.featureSet.geometryType=i.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=i.objectIdFieldName,l.layerDefinition.typeIdField=i.typeIdFieldName,l.layerDefinition.globalIdField=i.globalIdFieldName,l.layerDefinition.fields=i.fields,i.spatialReference&&(l.layerDefinition.spatialReference=i.spatialReference));else{if(!(r[0]instanceof a.Z))throw new Error("Invalid Parameter");{i=JSON.parse(r[0].castToText());const e=S(i,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=S(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=S(e,"globalidfield",""),l.layerDefinition.objectIdField=S(e,"objectidfield",""),l.layerDefinition.typeIdField=S(e,"typeidfield","");const t=S(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=C(t));for(const r of S(e,"fields",[])){const e={name:S(r,"name",""),alias:S(r,"alias",""),type:S(r,"type",""),nullable:S(r,"nullable",!0),editable:S(r,"editable",!0),length:S(r,"length",null),domain:$(S(r,"domain"))};l.layerDefinition.fields.push(e)}const n=S(i,"featureset",null);if(n){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of S(n,"features",[])){const n={},r=S(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];l.featureSet.features.push({attributes:n,geometry:T(S(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=S(i,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=S(i,"objectidfieldname",""),l.layerDefinition.typeIdField=S(i,"typeidfieldname","");const e=S(i,"spatialreference",null);e&&(l.layerDefinition.spatialReference=C(e));for(const n of S(i,"fields",[])){const e={name:S(n,"name",""),alias:S(n,"alias",""),type:S(n,"type",""),nullable:S(n,"nullable",!0),editable:S(n,"editable",!0),length:S(n,"length",null),domain:$(S(n,"domain"))};l.layerDefinition.fields.push(e)}const t={};for(const n of l.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of S(i,"features",[])){const e={},r=S(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];l.featureSet.features.push({attributes:e,geometry:T(S(n,"geometry",null))})}}}}if(!1===L(l))throw new Error("Invalid Parameter");return h.Z.create(l,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,((n,r,a)=>{if((0,f.p)(a,2,2),(0,f.a)(a[0])||(0,f.b)(a[0])){const n=[];let r=a[0];r instanceof u.Z&&(r=r.toArray());let i=null;if(a[1]instanceof o.Z)i=e.arcadeCustomFunctionHandler(a[1]);else if(a[1]instanceof f.N)i=(...e)=>a[1].fn(t,{preparsed:!0,arguments:e});else{if(!(a[1]instanceof f.S))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==a[1].paramCount)throw new Error("Invalid parameters");return a[1].fn(...e)}}return r.reduce(((e,t,a)=>e.then((e=>{a>0&&!0===e&&n.push(r[a-1]);const l=i(t);return(0,D.y8)(l)?l:(0,D.DB)(l)}))),Promise.resolve(!1)).then((e=>(!0===e&&r.length>0&&n.push(r[r.length-1]),n)))}return(0,f.o)(a[0])?a[0].load().then((n=>{const r=w.WhereClause.create(a[1],n.getFieldsIndex()),i=r.getVariables();if(i.length>0){const n=[];for(let r=0;r<i.length;r++){const a={name:i[r]};n.push(e.evaluateIdentifier(t,a))}return(0,D.$6)(n).then((e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return r.parameters=t,new d.Z({parentfeatureset:a[0],whereclause:r})}))}return(0,D.DB)(new d.Z({parentfeatureset:a[0],whereclause:r}))})):e.failDefferred("Filter cannot accept this parameter type")}))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,((t,n,r)=>{if((0,f.p)(r,2,2),(0,f.o)(r[0])){const e=new g.Z(r[1]);return(0,D.DB)(new p.Z({parentfeatureset:r[0],orderbyclause:e}))}return e.failDefferred("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,((t,n,r)=>((0,f.p)(r,2,2),(0,f.o)(r[0])?(0,D.DB)(new m.Z({parentfeatureset:r[0],topnum:r[1]})):(0,f.a)(r[0])?(0,f.t)(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,(0,f.t)(r[1])):(0,f.b)(r[0])?(0,f.t)(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,(0,f.t)(r[1])):e.failDefferred("Top cannot accept this parameter type"))))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>((0,f.p)(n,1,1),(0,f.o)(n[0])?n[0].first(e.abortSignal).then((e=>{if(null!==e){const t=i.Z.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e})):(0,f.a)(n[0])?0===n[0].length?(0,D.DB)(null):(0,D.DB)(n[0][0]):(0,f.b)(n[0])?0===n[0].length()?(0,D.DB)(null):(0,D.DB)(n[0].get(0)):null)))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,f.p)(r,1,2);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(r.length>1)if(r[1]instanceof a.Z){if(r[1].hasField("minsize")&&(l.minsize=(0,f.t)(r[1].field("minsize"))),r[1].hasField("metadata")&&(l.returnMetadata=(0,f.y)(r[1].field("metadata"))),r[1].hasField("maxsize")&&(l.maxsize=(0,f.t)(r[1].field("maxsize"))),r[1].hasField("types")){const e=(0,f.V)(r[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==r[1])throw new Error("Invalid Parameter");if(r[0]instanceof i.Z){let e=r[0]._layer;return e instanceof b["default"]&&(e=(0,s.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,f.o)(e)?[]:e.load().then((()=>e.queryAttachments(r[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata)))}if(null===r[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,f.p)(r,2,4);const a=r[0],l=(0,f.d)(r[1]);let o=(0,f.E)(r[2],null);const u=(0,f.y)((0,f.E)(r[3],!0));if(null===o&&(o=["*"]),!1===(0,f.a)(o))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(r[0]instanceof i.Z))throw new Error("Invalid Parameter");let c=a._layer;return c instanceof b["default"]&&(c=(0,s.constructFeatureSet)(c,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===c||!1===(0,f.o)(c)?null:c.load().then((e=>{const n=e.relationshipMetaData().filter((e=>e.name===l));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return(0,s.constructFeatureSetFromRelationship)(e,n[0],a.field(e.objectIdField),e.spatialReference,o,u,t.lrucache,t.interceptor);let r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),(0,s.constructFeatureSetFromUrl)(r,e.spatialReference,o,u,t.lrucache,t.interceptor).then((t=>t.load().then((()=>t.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n[0].id)),!1===a.hasField(n[0].keyField)||null===a.field(n[0].keyField))return e.getFeatureByObjectId(a.field(e.objectIdField),[n[0].keyField]).then((e=>{if(e){const a=w.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:e.attributes[n[0].keyField]},t.filter(a)}return new y.Z({parentfeatureset:t})}));const i=w.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:a.field(n[0].keyField)},t.filter(i)}))))):null}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,f.p)(r,2,3);const a=r[0],l=(0,f.d)((0,f.E)(r[1],"")).toLowerCase(),o=(0,f.f)(r[2])?(0,f.d)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof i.Z))throw new Error("Invalid Parameter");let u=a._layer;return u instanceof b["default"]&&(u=(0,s.constructFeatureSet)(u,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===u||!1===(0,f.o)(u)?null:u.load().then((()=>{const e=u.serviceUrl();return(0,s.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)})).then((e=>{let t=null,n=null,r=!1;if(null!==o&&""!==o&&void 0!==o){for(const t of e.terminals)t.terminalName===o&&(n=t.terminalId);null===n&&(r=!0)}const i=e.associations.getFieldsIndex(),s=i.get("TOGLOBALID").name,d=i.get("FROMGLOBALID").name,p=i.get("TOTERMINALID").name,m=i.get("FROMTERMINALID").name,y=i.get("FROMNETWORKSOURCEID").name,h=i.get("TONETWORKSOURCEID").name,g=i.get("ASSOCIATIONTYPE").name,E=i.get("ISCONTENTVISIBLE").name,I=i.get("OBJECTID").name;for(const l of u.fields)if("global-id"===l.type){t=a.field(l.name);break}let D=null,b=new c.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),w.WhereClause.create("0",e.associations.getFieldsIndex())),x=new c.yN(new N.Z({name:"side",alias:"side",type:"string"}),w.WhereClause.create("''",e.associations.getFieldsIndex()));const A="globalid",S="globalId",$={};for(const a in e.lkp)$[a]=e.lkp[a].sourceId;const C=new c.TO(new N.Z({name:"classname",alias:"classname",type:"string"}),null,$);let T="";switch(l){case"midspan":{T=`((${s}='${t}') OR ( ${d}='${t}')) AND (${g} IN (5))`,C.codefield=w.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const n=(0,F.JW)(c.Xx.findField(e.associations.fields,d));n.name=A,n.alias=A,D=new c.yN(n,w.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),b=e.unVersion>=4?new c.$X(c.Xx.findField(e.associations.fields,i.get("PERCENTALONG").name)):new c.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),w.WhereClause.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{T=`((${s}='${t}') OR ( ${d}='${t}')) AND (${g} IN (4,6))`,C.codefield=w.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const n=(0,F.JW)(c.Xx.findField(e.associations.fields,d));n.name=A,n.alias=A,D=new c.yN(n,w.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),x=new c.yN(new N.Z({name:"side",alias:"side",type:"string"}),w.WhereClause.create(`CASE WHEN (${g}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${s}='@T'`,a=`${d}='@T'`;null!==n&&(r+=` AND ${p}=@A`,a+=` AND ${m}=@A`),T="(("+r+") OR ("+a+"))",T=(0,f.P)(T,"@T",t),r=(0,f.P)(r,"@T",t),null!==n&&(r=(0,f.P)(r,"@A",n.toString()),T=(0,f.P)(T,"@A",n.toString())),C.codefield=w.WhereClause.create("CASE WHEN "+r+` THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const i=(0,F.JW)(c.Xx.findField(e.associations.fields,d));i.name=A,i.alias=A,D=new c.yN(i,w.WhereClause.create("CASE WHEN "+r+` THEN ${d} ELSE ${s} END`,e.associations.getFieldsIndex()));break}case"container":T=`${s}='${t}' AND ${g} = 2`,null!==n&&(T+=` AND ${p} = `+n.toString()),C.codefield=y,T="( "+T+" )",D=new c.QP(c.Xx.findField(e.associations.fields,d),A,A);case"content":T=`(${d}='${t}' AND ${g} = 2)`,null!==n&&(T+=` AND ${m} = `+n.toString()),C.codefield=h,T="( "+T+" )",D=new c.QP(c.Xx.findField(e.associations.fields,s),A,A);break;case"structure":T=`(${s}='${t}' AND ${g} = 3)`,null!==n&&(T+=` AND ${p} = `+n.toString()),C.codefield=y,T="( "+T+" )",D=new c.QP(c.Xx.findField(e.associations.fields,d),A,S);break;case"attached":T=`(${d}='${t}' AND ${g} = 3)`,null!==n&&(T+=` AND ${m} = `+n.toString()),C.codefield=h,T="( "+T+" )",D=new c.QP(c.Xx.findField(e.associations.fields,s),A,S);break;default:throw new Error("Invalid Parameter")}return r&&(T="1 <> 1"),new c.Xx({parentfeatureset:e.associations,adaptedFields:[new c.$X(c.Xx.findField(e.associations.fields,I)),new c.$X(c.Xx.findField(e.associations.fields,E)),D,x,C,b],extraFilter:T?w.WhereClause.create(T,e.associations.getFieldsIndex()):null})}))}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,((n,r,i)=>((0,f.p)(i,3,3),(0,f.o)(i[0])?i[0].load().then((n=>{const r=[],l=[];let s=!1,o=[];if((0,f.f)(i[1]))o.push(i[1]);else if(i[1]instanceof a.Z)o.push(i[1]);else if((0,f.a)(i[1]))o=i[1];else{if(!(0,f.b)(i[1]))return e.failDefferred("Illegal Value: GroupBy");o=i[1].toArray()}for(const t of o)if((0,f.f)(t)){const e=w.WhereClause.create((0,f.d)(t),n.getFieldsIndex()),a=!0===(0,E.y5)(e)?(0,f.d)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:w.WhereClause.create(i||a,n.getFieldsIndex())})}}if(o=[],(0,f.f)(i[2]))o.push(i[2]);else if((0,f.a)(i[2]))o=i[2];else if((0,f.b)(i[2]))o=i[2].toArray();else{if(!(i[2]instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");o.push(i[2])}for(const t of o){if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"",a=t.hasField("statistic")?t.field("statistic"):"",i=t.hasField("expression")?t.field("expression"):"";if(!r||!a||!i)return e.failDefferred("Illegal Value: GroupBy");l.push({name:r,statistic:a.toLowerCase(),expression:w.WhereClause.create(i,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of l)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const u=[];for(const a of r)u.push(A(a.expression,e,t));for(const a of l)u.push(A(a.expression,e,t));return u.length>0?(0,D.$6)(u).then((()=>(0,D.DB)(i[0].groupby(r,l)))):(0,D.DB)(i[0].groupby(r,l))})):e.failDefferred("Illegal Value: GroupBy"))))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,((n,r,i)=>(0,f.o)(i[0])?((0,f.p)(i,2,2),i[0].load().then((n=>{const r=[];let l=[];if((0,f.f)(i[1]))l.push(i[1]);else if(i[1]instanceof a.Z)l.push(i[1]);else if((0,f.a)(i[1]))l=i[1];else{if(!(0,f.b)(i[1]))return e.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}let s=!1;for(const t of l)if((0,f.f)(t)){const e=w.WhereClause.create((0,f.d)(t),n.getFieldsIndex()),a=!0===(0,E.y5)(e)?(0,f.d)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:w.WhereClause.create(i||a,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const o=[];for(const a of r)o.push(A(a.expression,e,t));return o.length>0?(0,D.$6)(o).then((()=>(0,D.DB)(i[0].groupby(r,[])))):(0,D.DB)(i[0].groupby(r,[]))}))):x("distinct",n,r,i)))})}}}]);