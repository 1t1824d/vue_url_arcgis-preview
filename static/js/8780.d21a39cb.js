"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[8780],{98780:function(e,t,s){s.r(t),s.d(t,{execute:function(){return i}});var r=s(25585),a=s(27092);let n;function i(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const i=(0,a.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:i}).then((async a=>{let o,u,l,c,f;if(a.data)if(a.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([a.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),c=n.readAsText(o),"json"!==s)))){try{u=JSON.parse(c||null)}catch(b){const s={...b,url:e,requestOptions:t};throw new r.Z("request:server",b.message,s)}if(u.error){const s={...u.error,url:e,requestOptions:t};throw new r.Z("request:server",u.error.message,s)}}}else"native"===s&&(a.data.signal=i,l=await fetch(a.data.url,a.data));switch(s){case"blob":f=o;break;case"json":f=u;break;case"native":f=l;break;case"text":f=c;break;default:f=a.data}return{data:f,requestOptions:t,ssl:a.ssl,url:e}}))}}}]);