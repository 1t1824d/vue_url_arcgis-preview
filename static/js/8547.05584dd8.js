"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[8547],{40463:function(t,e,i){i.d(e,{Z:function(){return m}});i(48675),i(3462);var n,s=i(63825),l=(i(35425),i(25585)),r=i(71741),o=i(40199),a=i(87441),h=i(27092),f=i(2553),u=i(43532),c=i(92236);const p=a.Z.getLogger("esri.layers.support.PixelBlock");let x=n=class extends r.wq{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(n.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new l.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,s]=e,l=this.pixels,r=this.width*this.height,o=l.length;let a,h,f;const u=[];for(let c=0;c<o;c++){f=n.createEmptyBand(t,r),a=l[c];for(let t=0;t<r;t++)h=a[t],f[t]=h>s?s:h<i?i:h;u.push(f)}this.pixels=u,this.pixelType=t}extractBands(t){if((0,h.Wi)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),s=e===t.length&&!t.some(((t,e)=>t!==e));return i||s?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const n=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=n?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=(0,o.d9)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:n}=this;if(!t||!n||!n.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let s,l,r,o;s=l=r=n[0],n.length>=3?(l=n[1],r=n[2]):2===n.length&&(l=n[1]);const a=new Uint32Array(t),h=this.width*this.height;if(s.length===h)if(e&&e.length===h)if(i)for(o=0;o<h;o++)e[o]&&(a[o]=e[o]<<24|r[o]<<16|l[o]<<8|s[o]);else for(o=0;o<h;o++)e[o]&&(a[o]=255<<24|r[o]<<16|l[o]<<8|s[o]);else for(o=0;o<h;o++)a[o]=255<<24|r[o]<<16|l[o]<<8|s[o];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:n}=this;if(!t||!e||!e.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const s=this.pixelType;let l=1,r=0,o=1;if(n&&n.length>0)r=n.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=n.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/o;else{let t=255;"s8"===s?(r=-128,t=127):"u16"===s?t=65535:"s16"===s?(r=-32768,t=32767):"u32"===s?t=4294967295:"s32"===s?(r=-2147483648,t=2147483647):"f32"===s?(r=-34e38,t=34e38):"f64"===s&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-r)}const a=new Uint32Array(t),h=this.width*this.height;let f,u,c,x,m;if(f=u=c=e[0],f.length!==h)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(c=e[2]),i&&i.length===h)for(x=0;x<h;x++)i[x]&&(a[x]=255<<24|(c[x]-r)*l<<16|(u[x]-r)*l<<8|(f[x]-r)*l);else for(x=0;x<h;x++)a[x]=255<<24|(c[x]-r)*l<<16|(u[x]-r)*l<<8|(f[x]-r)*l;else if(i&&i.length===h)for(x=0;x<h;x++)m=(f[x]-r)*l,i[x]&&(a[x]=255<<24|m<<16|m<<8|m);else for(x=0;x<h;x++)m=(f[x]-r)*l,a[x]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let n,s,l,r;n=s=l=e[0],e.length>=3?(s=e[1],l=e[2]):2===e.length&&(s=e[1]);const o=this.width*this.height;if(n.length!==o)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===o)for(r=0;r<o;r++)t[a++]=n[r],t[a++]=s[r],t[a++]=l[r],t[a++]=1&i[r];else for(r=0;r<o;r++)t[a++]=n[r],t[a++]=s[r],t[a++]=l[r],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,n=-1/0;const s=t.length;let l,r=0;if(e)for(l=0;l<s;l++)e[l]&&(r=t[l],i=r<i?r:i,n=r>n?r:n);else for(l=0;l<s;l++)r=t[l],i=r<i?r:i,n=r>n?r:n;return{minValue:i,maxValue:n}}};(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"width",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"height",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"pixelType",void 0),(0,s._)([(0,u.p)("pixelType")],x.prototype,"castPixelType",null),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"validPixelCount",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"mask",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"maskIsAlpha",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"pixels",void 0),(0,s._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"statistics",void 0),x=n=(0,s._)([(0,c.j)("esri.layers.support.PixelBlock")],x);const m=x},28547:function(t,e,i){i.d(e,{Hv:function(){return h},Kh:function(){return y},Oh:function(){return f},Pz:function(){return o},SJ:function(){return a},Uk:function(){return _},Vl:function(){return P},XV:function(){return m},dy:function(){return x},hE:function(){return u},nk:function(){return l},oc:function(){return p},pW:function(){return M},qF:function(){return r},us:function(){return k},zp:function(){return d}});i(48675),i(3462);var n=i(27092),s=i(40463);function l(t){return(0,n.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function r(t,e){if(null==e||!e.length||!l(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new s.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function o(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let n=0;i[0][0]<0&&(n=i[0][0]);const s=Math.max(256,i[i.length-1][0]-n+1),l=new Uint8Array(4*s),r=[];let o,a=0,h=0;const f=5===i[0].length;if(s>65536)return i.forEach((t=>{r[t[0]-n]=f?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:n,alphaSpecified:f};if(t.fillUnspecified)for(o=i[h],a=o[0]-n;a<s;a++)l[4*a]=o[1],l[4*a+1]=o[2],l[4*a+2]=o[3],l[4*a+3]=f?o[4]:255,a===o[0]-n&&(o=h===i.length-1?o:i[++h]);else for(a=0;a<i.length;a++)o=i[a],h=4*(o[0]-n),l[h]=o[1],l[h+1]=o[2],l[h+2]=o[3],l[h+3]=f?o[4]:255;return{indexedColormap:l,offset:n,alphaSpecified:f}}function a(t,e){if(!l(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),n=i.pixels;let s=i.mask;const r=i.width*i.height;if(1!==n.length)return t;const{indexedColormap:o,indexed2DColormap:a,offset:h,alphaSpecified:f}=e,u=o.length-1;let c=0;const p=n[0],x=new Uint8Array(p.length),m=new Uint8Array(p.length),d=new Uint8Array(p.length);let g,y=0;if(o)if(s)for(c=0;c<r;c++)s[c]&&(y=4*(p[c]-h),y<h||y>u?s[c]=0:(x[c]=o[y],m[c]=o[y+1],d[c]=o[y+2],s[c]=o[y+3]));else{for(s=new Uint8Array(r),c=0;c<r;c++)y=4*(p[c]-h),y<h||y>u?s[c]=0:(x[c]=o[y],m[c]=o[y+1],d[c]=o[y+2],s[c]=o[y+3]);i.mask=s}else if(s)for(c=0;c<r;c++)s[c]&&(g=a[p[c]],x[c]=g[0],m[c]=g[1],d[c]=g[2],s[c]=g[3]);else{for(s=new Uint8Array(r),c=0;c<r;c++)g=a[p[c]],x[c]=g[0],m[c]=g[1],d[c]=g[2],s[c]=g[3];i.mask=s}return i.pixels=[x,m,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function h(t){if(!l(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:i,pixelType:n,statistics:s}=t,r=t.width*t.height,o=e.length;let a,h,f,u,c;const p=[],x=[];let m,d,g,y,w,k,A,M,b,C;const v=256;for(u=0;u<o;u++){if(m=new Uint32Array(v),g=e[u],"u8"===n)if(a=-.5,h=255.5,i)for(c=0;c<r;c++)i[c]&&m[g[c]]++;else for(c=0;c<r;c++)m[g[c]]++;else{if(a=s[u].minValue,h=s[u].maxValue,f=(h-a)/v,d=new Uint32Array(v+1),i)for(c=0;c<r;c++)i[c]&&d[Math.floor((g[c]-a)/f)]++;else for(c=0;c<r;c++)d[Math.floor((g[c]-a)/f)]++;for(c=0;c<255;c++)m[c]=d[c];m[255]=d[255]+d[256]}for(p.push({min:a,max:h,size:v,counts:m}),y=0,w=0,M=0,c=0;c<v;c++)y+=m[c],w+=c*m[c];for(b=w/y,c=0;c<v;c++)M+=m[c]*(c-b)**2;C=Math.sqrt(M/(y-1)),f=(h-a)/v,k=(b+.5)*f+a,A=C*f,x.push({min:a,max:h,avg:k,stddev:A})}return{statistics:x,histograms:p}}function f(t){const e=[];for(let i=0;i<t.length;i++){const{min:n,max:s,size:l,counts:r}=t[i];let o=0,a=0;for(let t=0;t<l;t++)o+=r[t],a+=t*r[t];const h=a/o;let f=0;for(let t=0;t<l;t++)f+=r[t]*(t-h)**2;const u=(s-n)/l,c=(h+.5)*u+n,p=Math.sqrt(f/(o-1))*u;e.push({min:n,max:s,avg:c,stddev:p})}return e}function u(t){const{minCutOff:e,maxCutOff:i,gamma:n,pixelType:s}=t,l=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(s))return null;const o=e.length;let a,h,f=0;"s8"===s?f=-127:"s16"===s&&(f=-32767);let u=256;["u16","s16"].indexOf(s)>-1&&(u=65536);const p=[],x=[],m=r-l;for(a=0;a<o;a++)x[a]=i[a]-e[a],p[a]=m/(i[a]-e[a]);const d=n&&n.length>=o,g=[];if(d)for(a=0;a<o;a++)n[a]>1?n[a]>2?g[a]=6.5+(n[a]-2)**2.5:g[a]=6.5+100*(2-n[a])**4:g[a]=1;let y;const w=[];let k,A,M;if(d)for(a=0;a<o;a++){for(M=[],h=0;h<u;h++)k=h+f,y=(k-e[a])/x[a],A=1,n[a]>1&&(A-=(1/m)**(y*g[a])),k<i[a]&&k>e[a]?M[h]=Math.floor(A*m*y**(1/n[a]))+l:k>=i[a]?M[h]=r:M[h]=l;w[a]=M}else for(a=0;a<o;a++){for(M=[],h=0;h<u;h++)k=h+f,k<=e[a]?M[h]=l:k>=i[a]?M[h]=r:M[h]=Math.floor((k-e[a])/x[a]*m)+l;w[a]=M}if(null!=t.contrastOffset){const e=c(t.contrastOffset,t.brightnessOffset);for(a=0;a<o;a++)for(M=w[a],h=0;h<u;h++)M[h]=e[M[h]]}return{lut:w,offset:f}}function c(t,e){const i=Math.min(Math.max(t,-100),100),n=Math.min(Math.max(e,-100),100),s=255,l=128;let r,o;const a=new Uint8Array(256);for(r=0;r<256;r++)i>0&&i<100?o=(200*r-100*s+2*s*n)/(2*(100-i))+l:i<=0&&i>-100?o=(200*r-100*s+2*s*n)*(100+i)/2e4+l:100===i?(o=200*r-100*s+(s+1)*(100-i)+2*s*n,o=o>0?s:0):-100===i&&(o=l),a[r]=o>s?s:o<0?0:o;return a}function p(t,e=256){e=Math.min(e,256);const{size:i,counts:n}=t,s=new Uint8Array(i),l=n.reduce(((t,i)=>t+i/e),0);let r=0,o=0,a=0,h=l;for(let f=0;f<i;f++)if(a+=n[f],!(f<i-1&&a+n[f+1]<h)){for(;r<e-1&&h<a;)r++,h+=l;for(let t=o;t<=f;t++)s[t]=r;o=f+1}for(let f=o;f<i;f++)s[f]=e-1;return s}function x(t,e){if(!l(t))return null;const i=t.clone(),{pixels:n,mask:s}=i,{minCutOff:r,maxCutOff:o,gamma:a}=e,h=e.outMin||0,f=e.outMax||255,u=i.width*i.height,c=n.length;let p,x,m,d,g;const y=f-h,w=[],k=[];for(p=0;p<c;p++)k[p]=o[p]-r[p],w[p]=y/(o[p]-r[p]);const A=a&&a.length>=c,M=[];if(A)for(p=0;p<c;p++)a[p]>1?a[p]>2?M[p]=6.5+(a[p]-2)**2.5:M[p]=6.5+100*(2-a[p])**4:M[p]=1;if(A)if(null!=s){for(x=0;x<u;x++)if(s[x])for(p=0;p<c;p++)m=n[p][x],g=(m-r[p])/k[p],d=1,a[p]>1&&(d-=(1/y)**(g*M[p])),m<o[p]&&m>r[p]?n[p][x]=Math.floor(d*y*g**(1/a[p]))+h:m>=o[p]?n[p][x]=f:n[p][x]=h}else for(x=0;x<u;x++)for(p=0;p<c;p++)m=n[p][x],g=(m-r[p])/k[p],d=1,a[p]>1&&(d-=(1/y)**(g*M[p])),m<o[p]&&m>r[p]?n[p][x]=Math.floor(d*y*g**(1/a[p]))+h:m>=o[p]?n[p][x]=f:n[p][x]=h;else if(null!=s){for(x=0;x<u;x++)if(s[x])for(p=0;p<c;p++)m=n[p][x],m<o[p]&&m>r[p]?n[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=o[p]?n[p][x]=f:n[p][x]=h}else for(x=0;x<u;x++)for(p=0;p<c;p++)m=n[p][x],m<o[p]&&m>r[p]?n[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=o[p]?n[p][x]=f:n[p][x]=h;return i.pixelType="u8",i.updateStatistics(),i}function m(t,e){if(!l(t))return null;const{pixels:i,mask:n}=t,r=t.width*t.height,o=i.length;let a=e.lut;const{offset:h}=e;let f,u;a&&1===a[0].length&&(a=i.map((()=>a)));const c=[];let p,x,m;if(h)if(null==n)for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),u=0;u<r;u++)m[u]=x[p[u]-h];c.push(m)}else for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),u=0;u<r;u++)n[u]&&(m[u]=x[p[u]-h]);c.push(m)}else if(null==n)for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),u=0;u<r;u++)m[u]=x[p[u]];c.push(m)}else for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),u=0;u<r;u++)n[u]&&(m[u]=x[p[u]]);c.push(m)}const d=new s.Z({width:t.width,height:t.height,pixels:c,mask:n,pixelType:"u8"});return d.updateStatistics(),d}function d(t,e){if(!l(t))return null;const i=t.clone(),{pixels:n}=i,s=i.width*i.height,r=e.length,o=Math.floor(r/2),a=e[Math.floor(o)],h=n[0];let f,u,c,p,x,m,d=!1;const g=new Uint8Array(s),y=new Uint8Array(s),w=new Uint8Array(s);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(s),k.fill(A?255:1),i.mask=k),x=0;x<s;x++)if(k[x]){for(f=h[x],d=!1,m=o,u=a,c=0,p=r-1;p-c>1;){if(f===u.value){d=!0;break}f>u.value?c=m:p=m,m=Math.floor((c+p)/2),u=e[Math.floor(m)]}d||(f===e[c].value?(u=e[c],d=!0):f===e[p].value?(u=e[p],d=!0):f<e[c].value?(d=!1,u=null):f>e[c].value&&(f<e[p].value?(u=e[c],d=!0):p===r-1?(d=!1,u=null):(u=e[p],d=!0))),d?(g[x]=u.mappedColor[0],y[x]=u.mappedColor[1],w[x]=u.mappedColor[2],k[x]=u.mappedColor[3]):g[x]=y[x]=w[x]=k[x]=0}return i.pixels=[g,y,w],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function g(t,e,i,n,s,l,r,o){return{xmin:s<=i*t?0:s<i*t+t?s-i*t:t,ymin:l<=n*e?0:l<n*e+e?l-n*e:e,xmax:s+r<=i*t?0:s+r<i*t+t?s+r-i*t:t,ymax:l+o<=n*e?0:l+o<n*e+e?l+o-n*e:e}}function y(t,e){if(!t||0===t.length)return null;const i=t.filter((t=>t.pixelBlock))[0];if(!i||(0,n.Wi)(i.pixelBlock))return null;const s=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,l=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,r=.01*Math.min(s,l),o=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>r?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>r?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,o.map((t=>t.extent.xmin))),h=Math.min.apply(null,o.map((t=>t.extent.ymin))),f=Math.max.apply(null,o.map((t=>t.extent.xmax))),u=Math.max.apply(null,o.map((t=>t.extent.ymax))),c={x:Math.round((e.xmin-a)/s),y:Math.round((u-e.ymax)/l)},p={width:Math.round((f-a)/s),height:Math.round((u-h)/l)},x={width:Math.round((e.xmax-e.xmin)/s),height:Math.round((e.ymax-e.ymin)/l)};return Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==o.length||c.x<0||c.y<0||p.width<x.width||p.height<x.height?null:{extent:e,pixelBlock:k(o.map((t=>t.pixelBlock)),p,{clipOffset:c,clipSize:x})}}function w(t,e,i,n,s,l){const{width:r,height:o}=i.block,{x:a,y:h}=i.offset,{width:f,height:u}=i.mosaic,c=g(r,o,n,s,a,h,f,u);let p=0,x=0;if(l){const t=l.hasGCSSShiftTransform?360:l.halfWorldWidth,e=r*l.resolutionX,i=l.startX+n*e,s=i+e;i<t&&s>t?x=l.rightPadding:i>=t&&(p=l.leftMargin-l.rightPadding,x=0)}if(c.xmax-=x,"number"!=typeof e)for(let m=c.ymin;m<c.ymax;m++){const i=(s*o+m-h)*f+(n*r-a)+p,l=m*r;for(let n=c.xmin;n<c.xmax;n++)t[i+n]=e[l+n]}else for(let m=c.ymin;m<c.ymax;m++){const i=(s*o+m-h)*f+(n*r-a)+p;for(let n=c.xmin;n<c.xmax;n++)t[i+n]=e}}function k(t,e,i={}){const{clipOffset:r,clipSize:o,alignmentInfo:a,blockWidths:h}=i;if(h)return A(t,e,{blockWidths:h});const f=t.filter((t=>l(t)))[0];if((0,n.Wi)(f))return null;const u=o?o.width:e.width,c=o?o.height:e.height,p=f.width,x=f.height,m=e.width/p,d=e.height/x,g={offset:r||{x:0,y:0},mosaic:o||e,block:{width:p,height:x}},y=f.pixelType,k=s.Z.getPixelArrayConstructor(y),M=f.pixels.length,b=[];let C,v,U;for(let n=0;n<M;n++){v=new k(u*c);for(let e=0;e<d;e++)for(let i=0;i<m;i++){const s=t[e*m+i];l(s)&&(C=s.pixels[n],w(v,C,g,i,e,a))}b.push(v)}if(t.some((t=>(0,n.Wi)(t)||t.mask&&t.mask.length>0))){U=new Uint8Array(u*c);for(let e=0;e<d;e++)for(let i=0;i<m;i++){const s=t[e*m+i],l=(0,n.pC)(s)?s.mask:null;w(U,l||(s?1:0),g,i,e,a)}}const T=new s.Z({width:u,height:c,pixels:b,pixelType:y,mask:U});return T.updateStatistics(),T}function A(t,e,i){const r=t.find((t=>(0,n.pC)(t)));if(!(0,n.pC)(r))return null;const o=t.some((t=>!(0,n.pC)(t)||!!t.mask)),{width:a,height:h}=e,f=o?new Uint8Array(a*h):null,{blockWidths:u}=i,c=[],p=r.getPlaneCount(),x=s.Z.getPixelArrayConstructor(r.pixelType);if(o)for(let n=0,s=0;n<t.length;s+=u[n],n++){const e=t[n];if(!l(e))continue;const i=e.mask;for(let t=0;t<h;t++)for(let l=0;l<u[n];l++)f[t*a+l+s]=null==i?255:i[t*e.width+l]}for(let n=0;n<p;n++){const e=new x(a*h);for(let i=0,s=0;i<t.length;s+=u[i],i++){const r=t[i];if(!l(r))continue;const o=r.pixels[n];if(null!=o)for(let t=0;t<h;t++)for(let n=0;n<u[i];n++)e[t*a+n+s]=o[t*r.width+n]}c.push(e)}const m=new s.Z({width:a,height:h,mask:f,pixels:c,pixelType:r.pixelType});return m.updateStatistics(),m}function M(t,e,i){if(!l(t))return null;const{width:n,height:s}=t,r=e.x,o=e.y,a=i.width+r,h=i.height+o;if(r<0||o<0||a>n||h>s)return t;if(0===r&&0===o&&a===n&&h===s)return t;t.mask||(t.mask=new Uint8Array(n*s));const f=t.mask;for(let l=0;l<s;l++){const t=l*n;for(let e=0;e<n;e++)f[t+e]=l<o||l>=h||e<r||e>=a?0:1}return t.updateStatistics(),t}function b(t){if(!l(t))return null;const e=t.clone(),{width:i,height:n,pixels:s,mask:r}=t,o=s[0],a=e.pixels[0];for(let l=2;l<n-1;l++){const t=new Map;for(let n=l-2;n<l+2;n++)for(let e=0;e<4;e++){const s=n*i+e;U(t,o[s],r?r[s]:1)}a[l*i]=C(t),a[l*i+1]=a[l*i+2]=a[l*i];let e=3;for(;e<i-1;e++){let n=(l-2)*i+e+1;U(t,o[n],r?r[n]:1),n=(l-1)*i+e+1,U(t,o[n],r?r[n]:1),n=l*i+e+1,U(t,o[n],r?r[n]:1),n=(l+1)*i+e+1,U(t,o[n],r?r[n]:1),n=(l-2)*i+e-3,v(t,o[n],r?r[n]:1),n=(l-1)*i+e-3,v(t,o[n],r?r[n]:1),n=l*i+e-3,v(t,o[n],r?r[n]:1),n=(l+1)*i+e-3,v(t,o[n],r?r[n]:1),a[l*i+e]=C(t)}a[l*i+e+1]=a[l*i+e]}for(let l=0;l<i;l++)a[l]=a[i+l]=a[2*i+l],a[(n-1)*i+l]=a[(n-2)*i+l];return e.updateStatistics(),e}function C(t){if(0===t.size)return 0;let e=0,i=-1,n=0;const s=t.keys();let l=s.next();for(;!l.done;)n=t.get(l.value),n>e&&(i=l.value,e=n),l=s.next();return i}function v(t,e,i){if(0===i)return;const n=t.get(e);1===n?t.delete(e):t.set(e,n-1)}function U(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function T(t,e,i){let{x:n,y:r}=e;const{width:o,height:a}=i;if(0===n&&0===r&&a===t.height&&o===t.width)return t;const{width:h,height:f}=t,u=Math.max(0,r),c=Math.max(0,n),p=Math.min(n+o,h),x=Math.min(r+a,f);if(p<0||x<0||!l(t))return null;n=Math.max(0,-n),r=Math.max(0,-r);const{pixels:m,mask:d}=t,g=o*a,y=m.length,w=[];for(let l=0;l<y;l++){const e=m[l],i=s.Z.createEmptyBand(t.pixelType,g);for(let t=u;t<x;t++){const s=t*h;let l=(t+r-u)*o+n;for(let t=c;t<p;t++)i[l++]=e[s+t]}w.push(i)}const k=new Uint8Array(g);for(let s=u;s<x;s++){const t=s*h;let e=(s+r-u)*o+n;for(let i=c;i<p;i++)k[e++]=d?d[t+i]:1}const A=new s.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:w,mask:k});return A.updateStatistics(),A}function B(t,e=!0){if(!l(t))return null;const{pixels:i,width:n,height:r,mask:o,pixelType:a}=t,h=[],f=Math.round(n/2),u=Math.round(r/2),c=r-1,p=n-1;for(let l=0;l<i.length;l++){const t=i[l],o=s.Z.createEmptyBand(a,f*u);let x=0;for(let i=0;i<r;i+=2)for(let s=0;s<n;s+=2){const l=t[i*n+s];if(e){const e=s===p?l:t[i*n+s+1],r=i===c?l:t[i*n+s+n],a=s===p?r:i===c?e:t[i*n+s+n+1];o[x++]=(l+e+r+a)/4}else o[x++]=l}h.push(o)}let x=null;if(o){x=new Uint8Array(f*u);let t=0;for(let i=0;i<r;i+=2)for(let s=0;s<n;s+=2){const l=o[i*n+s];if(e){const e=s===p?l:o[i*n+s+1],r=i===c?l:o[i*n+s+n],a=s===p?r:i===c?e:o[i*n+s+n+1];x[t++]=l*e*r*a?1:0}else x[t++]=l}}return new s.Z({width:f,height:u,pixelType:a,pixels:h,mask:x})}function P(t,e,i){if(!l(t))return null;const{width:n,height:s}=e;let{width:r,height:o}=t;const a=new Map,h={x:0,y:0},f=null==i?1:1+i;let u=t;for(let l=0;l<f;l++){const t=Math.ceil(r/n),i=Math.ceil(o/s);for(let r=0;r<i;r++){h.y=r*s;for(let i=0;i<t;i++){h.x=i*n;const t=T(u,h,e);a.set(`${l}/${r}/${i}`,t)}}l<f-1&&(u=B(u)),r=Math.round(r/2),o=Math.round(o/2)}return a}function _(t,e,i,n,r="nearest"){if(!l(t))return null;"majority"===r&&(t=b(t));const{pixels:o,mask:a,pixelType:h}=t,f=t.width,u=t.height,c=s.Z.getPixelArrayConstructor(h),p=o.length,{width:x,height:m}=e,d=n.cols,g=n.rows,y=Math.ceil(x/d-.1/d),w=Math.ceil(m/g-.1/g);let k,A,M,C,v,U,T,B=!1;for(let s=0;s<i.length;s+=3)-1===i[s]&&-1===i[s+1]&&-1===i[s+2]&&(B=!0);const P=y*d,_=P*w*g,S=new Float32Array(_),F=new Float32Array(_);let G,I,Z=0;const O="majority"===r?0:.5;for(let s=0;s<w;s++)for(let t=0;t<y;t++){k=12*(s*y+t),A=i[k],M=i[k+1],C=i[k+2],v=i[k+3],U=i[k+4],T=i[k+5];for(let e=0;e<g;e++){Z=(s*g+e)*P+t*d,I=(e+.5)/g;for(let t=0;t<e;t++)G=(t+.5)/d,S[Z+t]=Math.round((A*G+M*I+C)*f-O),F[Z+t]=Math.round((v*G+U*I+T)*u-O)}k+=6,A=i[k],M=i[k+1],C=i[k+2],v=i[k+3],U=i[k+4],T=i[k+5];for(let e=0;e<g;e++){Z=(s*g+e)*P+t*d,I=(e+.5)/g;for(let t=e;t<d;t++)G=(t+.5)/d,S[Z+t]=Math.round((A*G+M*I+C)*f-O),F[Z+t]=Math.round((v*G+U*I+T)*u-O)}}const R=(t,e)=>{for(let i=0;i<m;i++){k=i*P;for(let n=0;n<x;n++)S[k]<0||F[k]<0?t[i*x+n]=0:t[i*x+n]=e[S[k]+F[k]*f],k++}},V=[];let j;for(let s=0;s<p;s++)j=new c(x*m),R(j,o[s]),V.push(j);const W=new s.Z({width:x,height:m,pixelType:h,pixels:V});if(a)W.mask=new Uint8Array(x*m),R(W.mask,a);else if(B){W.mask=new Uint8Array(x*m);for(let t=0;t<x*m;t++)W.mask[t]=S[t]<0||F[t]<0?0:1}return W.updateStatistics(),W}}}]);