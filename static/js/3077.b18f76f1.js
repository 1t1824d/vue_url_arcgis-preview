"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[3077],{73077:function(e,t,n){n.r(t),n.d(t,{previewWebStyleSymbol:function(){return u}});var i=n(35680),h=n(597);function u(e,t,n){const h=e.thumbnail&&e.thumbnail.url;return h?(0,i["default"])(h,{responseType:"image"}).then((e=>{const t=s(e.data,n);return n&&n.node?(n.node.appendChild(t),n.node):t})):e.fetchSymbol().then((e=>t(e,n)))}function s(e,t){const n=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,i=Math.max(e.width,e.height);let u=t&&null!=t.maxSize?(0,h.F2)(t.maxSize):120;n&&(u=Math.min(i,u));const s=Math.min(u,t&&null!=t.size?(0,h.F2)(t.size):i);if(s!==i){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=s,e.height=s/t):(e.width=s*t,e.height=s)}return e}}}]);