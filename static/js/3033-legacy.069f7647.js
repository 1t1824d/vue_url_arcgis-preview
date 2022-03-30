"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[3033],{61433:function(e,n,a){a.d(n,{Z:function(){return g}});var r=a(76133),t=a(92751),i=a(99418),l=a(49161),u=a(63825),o=a(8723),s=a(2553),f=(a(57787),a(35425),a(90202),a(92236)),c=a(71741),v=a(69194),d=a(26141),m=new o.Xn({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),p=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),e=n.apply(this,arguments),e.baseSymbol=null,e.colorRamp=null,e.type=null,e}return(0,t.Z)(a)}(c.wq);(0,u._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],p.prototype,"baseSymbol",void 0),(0,u._)([(0,s.Cb)({types:v.V,json:{read:{reader:v.i},write:!0}})],p.prototype,"colorRamp",void 0),(0,u._)([(0,s.Cb)({json:{read:m.read,write:m.write}})],p.prototype,"type",void 0),p=(0,u._)([(0,f.j)("esri.rest.support.ClassificationDefinition")],p);var h=p,b=new o.Xn({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),y=new o.Xn({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),e=n.apply(this,arguments),e.breakCount=null,e.classificationField=null,e.classificationMethod=null,e.normalizationField=null,e.normalizationType=null,e.type="class-breaks-definition",e}return(0,t.Z)(a,[{key:"standardDeviationInterval",set:function(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}},{key:"definedInterval",set:function(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}}]),a}(h);(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"breakCount",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"classificationField",void 0),(0,u._)([(0,s.Cb)({type:String,json:{read:b.read,write:b.write}})],V.prototype,"classificationMethod",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,u._)([(0,s.Cb)({json:{read:y.read,write:y.write}})],V.prototype,"normalizationType",void 0),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),(0,u._)([(0,s.Cb)()],V.prototype,"type",void 0),V=(0,u._)([(0,f.j)("esri.rest.support.ClassBreaksDefinition")],V);var g=V},35176:function(e,n,a){a.d(n,{k:function(){return t}});a(9653),a(56977),a(41539),a(39714),a(33948),a(2707),a(54747);function r(e,n){return Number(e.toFixed(n))}function t(e){var n=e.normalizationTotal;return{classBreaks:i(e),normalizationTotal:n}}function i(e){var n=e.definition,a=n.classificationMethod,t=n.breakCount,i=n.normalizationType,s=n.definedInterval,f=[],m=e.values;if(0===m.length)return[];m=m.sort((function(e,n){return e-n}));var p=m[0],h=m[m.length-1];if("equal-interval"===a)if(m.length>=t){for(var b=(h-p)/t,y=p,V=1;V<t;V++){var g=r(p+V*b,6);f.push({minValue:y,maxValue:g,label:l(y,g,i)}),y=g}f.push({minValue:y,maxValue:h,label:l(y,h,i)})}else m.forEach((function(e){f.push({minValue:e,maxValue:e,label:l(e,e,i)})}));else if("natural-breaks"===a){for(var x=u(m),T=e.valueFrequency||x.valueFrequency,F=o(x.uniqueValues,T,t),M=p,C=1;C<t;C++)if(x.uniqueValues.length>C){var D=r(x.uniqueValues[F[C]],6);f.push({minValue:M,maxValue:D,label:l(M,D,i)}),M=D}f.push({minValue:M,maxValue:h,label:l(M,h,i)})}else if("quantile"===a)if(m.length>=t&&p!==h){for(var k=p,z=Math.ceil(m.length/t),I=0,S=1;S<t;S++){var w=z+I-1;w>m.length&&(w=m.length-1),w<0&&(w=0),f.push({minValue:k,maxValue:m[w],label:l(k,m[w],i)}),k=m[w],I+=z,z=Math.ceil((m.length-I)/(t-S))}f.push({minValue:k,maxValue:h,label:l(k,h,i)})}else for(var N=-1,q=0;q<m.length;q++){var _=m[q];_!==N&&(N=_,f.push({minValue:N,maxValue:_,label:l(N,_,i)}),N=_)}else if("standard-deviation"===a){var Z=v(m),j=d(m,Z);if(0===j)f.push({minValue:m[0],maxValue:m[0],label:l(m[0],m[0],i)});else{for(var B=c(p,h,t,Z,j)*j,E=0,G=p,L=t;L>=1;L--){var P=r(Z-(L-.5)*B,6);f.push({minValue:G,maxValue:P,label:l(G,P,i)}),G=P,E++}var U=r(Z+.5*B,6);f.push({minValue:G,maxValue:U,label:l(G,U,i)}),G=U,E++;for(var O=1;O<=t;O++)U=E===2*t?h:r(Z+(O+.5)*B,6),f.push({minValue:G,maxValue:U,label:l(G,U,i)}),G=U,E++}}else if("defined-interval"===a){if(!s)return f;for(var X=m[0],A=m[m.length-1],Q=Math.ceil((A-X)/s),R=X,Y=1;Y<Q;Y++){var H=r(X+Y*s,6);f.push({minValue:R,maxValue:H,label:l(R,H,i)}),R=H}f.push({minValue:R,maxValue:A,label:l(R,A,i)})}return f}function l(e,n,a){var r=null;return r=e===n?a&&"percent-of-total"===a?e+"%":e.toString():a&&"percent-of-total"===a?e+"% - "+n+"%":e+" - "+n,r}function u(e){for(var n=[],a=[],r=Number.MIN_VALUE,t=1,i=-1,l=0;l<e.length;l++){var u=e[l];u===r?(t++,a[i]=t):null!==u&&(n.push(u),r=u,t=1,a.push(t),i++)}return{uniqueValues:n,valueFrequency:a}}function o(e,n,a){var r=e.length,t=[];a>r&&(a=r);for(var i=0;i<a;i++)t.push(Math.round(i*r/a-1));t.push(r-1);var l=s(t,e,n,a);return f(l.mean,l.sdcm,t,e,n,a)&&(l=s(t,e,n,a)),t}function s(e,n,a,r){for(var t=[],i=[],l=[],u=0,o=[],s=[],f=0;f<r;f++){var c=m(f,e,n,a);o.push(c.sbMean),s.push(c.sbSdcm),u+=s[f]}for(var v,d=u,p=!0;p||u<d;){p=!1,t=[];for(var h=0;h<r;h++)t.push(e[h]);for(var b=0;b<r;b++)for(var y=e[b]+1;y<=e[b+1];y++)if(v=n[y],b>0&&y!==e[b+1]&&Math.abs(v-o[b])>Math.abs(v-o[b-1]))e[b]=y;else if(b<r-1&&e[b]!==y-1&&Math.abs(v-o[b])>Math.abs(v-o[b+1])){e[b+1]=y-1;break}d=u,u=0,i=[],l=[];for(var V=0;V<r;V++){i.push(o[V]),l.push(s[V]);var g=m(V,e,n,a);o[V]=g.sbMean,s[V]=g.sbSdcm,u+=s[V]}}if(u>d){for(var x=0;x<r;x++)e[x]=t[x],o[x]=i[x],s[x]=l[x];u=d}return{mean:o,sdcm:s}}function f(e,n,a,r,t,i){for(var l=0,u=0,o=0,s=0,f=!0,c=0;c<2&&f;c++){0===c&&(f=!1);for(var v=0;v<i-1;v++)for(;a[v+1]+1!==a[v+2];){a[v+1]=a[v+1]+1;var d=m(v,a,r,t);o=d.sbMean,l=d.sbSdcm;var p=m(v+1,a,r,t);if(s=p.sbMean,u=p.sbSdcm,!(l+u<n[v]+n[v+1])){a[v+1]=a[v+1]-1;break}n[v]=l,n[v+1]=u,e[v]=o,e[v+1]=s,f=!0}for(var h=i-1;h>0;h--)for(;a[h]!==a[h-1]+1;){a[h]=a[h]-1;var b=m(h-1,a,r,t);o=b.sbMean,l=b.sbSdcm;var y=m(h,a,r,t);if(s=y.sbMean,u=y.sbSdcm,!(l+u<n[h-1]+n[h])){a[h]=a[h]+1;break}n[h-1]=l,n[h]=u,e[h-1]=o,e[h]=s,f=!0}}return f}function c(e,n,a,r,t){var i=Math.max(r-e,n-r)/t/a;return i=i>=1?1:i>=.5?.5:.25,i}function v(e){for(var n=0,a=0;a<e.length;a++)n+=e[a];return n/=e.length,n}function d(e,n){for(var a=0,r=0;r<e.length;r++){var t=e[r];a+=(t-n)*(t-n)}return a/=e.length,Math.sqrt(a)}function m(e,n,a,r){for(var t=0,i=0,l=n[e]+1;l<=n[e+1];l++){var u=r[l];t+=a[l]*u,i+=u}for(var o=t/i,s=0,f=n[e]+1;f<=n[e+1];f++)s+=r[f]*Math.pow(a[f]-o,2);return{sbMean:o,sbSdcm:s}}},33033:function(e,n,a){a.d(n,{DL:function(){return I},F_:function(){return T},G2:function(){return D},H0:function(){return p},Lq:function(){return y},Qm:function(){return M},S5:function(){return m},XL:function(){return b},eT:function(){return F},fk:function(){return C},i5:function(){return h},oF:function(){return S}});var r=a(62032),t=a(1936),i=(a(41539),a(70189),a(78783),a(33948),a(57327),a(9653),a(35192),a(2707),a(26699),a(32023),a(92222),a(73210),a(54747),a(21249),a(74916),a(4723),a(56977),a(61433)),l=a(35176),u="equal-interval",o=1,s=5,f=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,v=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),d=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){var n=null!=e.normalizationField||null!=e.normalizationType,a=null!=e.minValue||null!=e.maxValue,r=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!a&&!r}function p(e){var n=e.returnDistinct?(0,t.Z)(new Set(e.values)):e.values,a=n.filter((function(e){return null!=e})).length,r={count:a};return e.supportsNullCount&&(r.nullcount=n.length-a),e.percentileParams&&(r.median=b(n,e.percentileParams)),r}function h(e){var n,a=e.values,t=e.useSampleStdDev,i=e.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,d=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue,p=(0,r.Z)(a);try{for(p.s();!(n=p.n()).done;){var h=n.value;Number.isFinite(h)?h>=d&&h<=m&&(o+=h,l=Math.min(l,h),u=Math.max(u,h),v++):"string"==typeof h&&v++}}catch(F){p.e(F)}finally{p.f()}if(v&&null!=o){s=o/v;var y,V=0,g=(0,r.Z)(a);try{for(g.s();!(y=g.n()).done;){var x=y.value;Number.isFinite(x)&&x>=d&&x<=m&&(V+=Math.pow(x-s,2))}}catch(F){g.e(F)}finally{g.f()}c=t?v>1?V/(v-1):0:v>0?V/v:0,f=Math.sqrt(c)}else l=null,u=null;var T={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(T.nullcount=a.length-v),e.percentileParams&&(T.median=b(a,e.percentileParams)),T}function b(e,n){var a=n.fieldType,r=n.value,i=n.orderBy,l=n.isDiscrete,u=y(a,"desc"===i);if(0===(e=(0,t.Z)(e).filter((function(e){return null!=e})).sort((function(e,n){return u(e,n)}))).length)return null;if(r<=0)return e[0];if(r>=1)return e[e.length-1];var o=(e.length-1)*r,s=Math.floor(o),f=s+1,c=o%1,v=e[s],d=e[f];return f>=e.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function y(e,n){var a=n?1:-1,r=g(n),i=V(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,t.Z)(v)).includes(e))return function(e,n){return"number"==typeof e&&"number"==typeof n?r(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a};if("esriFieldTypeDate"===e)return function(e,n){var t=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(t)||isNaN(i)?a:r(t,i)};if(v.has(e))return function(e,n){return r(e,n)};if("esriFieldTypeString"===e)return function(e,n){return i(e,n)};if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){var l=V(n);return function(e,n){return l(x(e),x(n))}}return n?function(e,n){return 1}:function(e,n){return-1}}function V(e){return e?function(e,n){return(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:function(e,n){return(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}function g(e){return e?function(e,n){return n-e}:function(e,n){return e-n}}function x(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function T(e,n){var a;for(a in e)d.indexOf(a)>-1&&(Number.isFinite(e[a])||(e[a]=null));return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function F(e){var n,a={},t=(0,r.Z)(e);try{for(t.s();!(n=t.n()).done;){var i=n.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){t.e(l)}finally{t.f()}return{count:a}}function M(e,n,a){var r=e.count,t=[];for(var i in a&&n&&"coded-value"===n.type&&n.codedValues.forEach((function(e){var n=e.code;r.hasOwnProperty(n)||(r[n]={data:n,count:0})})),r){var l=r[i];t.push({value:l.data,count:l.count,label:l.label})}return{uniqueValueInfos:t}}function C(e,n,a,r){var t=null;switch(n){case"log":0!==e&&(t=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(t=e/r*100);break;case"field":Number.isFinite(a)&&0!==a&&(t=e/a);break;case"natural-log":e>0&&(t=Math.log(e));break;case"square-root":e>0&&(t=Math.pow(e,.5))}return t}function D(e,n){var a=z({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=k(e,n.minValue,n.maxValue),(0,l.k)({definition:a,values:e,normalizationTotal:n.normalizationTotal})}function k(e,n,a){return n=null==n?-1/0:n,a=null==a?1/0:a,e.filter((function(e){return Number.isFinite(e)&&e>=n&&e<=a}))}function z(e){var n=e.field,a=e.classificationMethod||u,r=e.normalizationType,t=e.normalizationField,l=new i.Z;return l.classificationField=n,l.breakCount=e.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?e.standardDeviationInterval||o:void 0,l.normalizationType=r,l.normalizationField="field"===r?t:void 0,l}function I(e,n){var a=e.classBreaks,r=a.length,t=a[0].minValue,i=a[r-1].maxValue,l="standard-deviation"===n,u=c;return a=a.map((function(e){var n=e.label,a={minValue:e.minValue,maxValue:e.maxValue,label:n};if(l&&n){var r=n.match(u).map((function(e){return+e.trim()}));2===r.length?(a.minStdDev=r[0],a.maxStdDev=r[1],r[0]<0&&r[1]>0&&(a.hasAvg=!0)):1===r.length&&(n.includes("<")?(a.minStdDev=null,a.maxStdDev=r[0]):n.includes(">")&&(a.minStdDev=r[0],a.maxStdDev=null))}return a})),{minValue:t,maxValue:i,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function S(e,n){var a,t=w(e,n),i=t.min,l=t.max,u=t.intervals,o=u.map((function(e,n){return{minValue:u[n][0],maxValue:u[n][1],count:0}})),s=(0,r.Z)(e);try{for(s.s();!(a=s.n()).done;){var f=a.value;if(null!=f&&f>=i&&f<=l){var c=N(u,f);c>-1&&o[c].count++}}}catch(v){s.e(v)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:n.normalizationTotal}}function w(e,n){var a=n.field,r=n.classificationMethod,t=n.standardDeviationInterval,i=n.normalizationType,l=n.normalizationField,u=n.normalizationTotal,o=n.minValue,s=n.maxValue,c=n.numBins||f,v=null,d=null,p=null;if(r&&"equal-interval"!==r||i){var b=D(e,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:r,standardDeviationInterval:t,minValue:o,maxValue:s,numClasses:c}),y=b.classBreaks;v=y[0].minValue,d=y[y.length-1].maxValue,p=y.map((function(e){return[e.minValue,e.maxValue]}))}else{if(null!=o&&null!=s)v=o,d=s;else{var V=h({values:e,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:m({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});v=V.min,d=V.max}p=q(v,d,c)}return{min:v,max:d,intervals:p}}function N(e,n){for(var a=-1,r=e.length-1;r>=0;r--)if(n>=e[r][0]){a=r;break}return a}function q(e,n,a){for(var r,t=(n-e)/a,i=[],l=e,u=1;u<=a;u++)r=l+t,r=Number(r.toFixed(16)),i.push([l,u===a?n:r]),l=r;return i}}}]);