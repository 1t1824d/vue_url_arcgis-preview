"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9464],{79464:function(n,t,r){r.r(t),r.d(t,{registerFunctions:function(){return y}});r(21703);var e=r(68224),u=r(60460),i=r(9327),o=r(29786),c=r(24446),l=r(7230),a=r(22779),f=r(86255),s=r(7225),g=r(54787),w=r(72110),h=r(12523),d=r(64316),p=r(19509);function A(n){return 0===e.i8.indexOf("4.")?w.Z.fromExtent(n):new w.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function E(n){if((0,i.p)(n,2,2),n[0]instanceof a.Z&&n[1]instanceof a.Z);else if(n[0]instanceof a.Z&&null===n[1]);else if(n[1]instanceof a.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function m(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return(0,c.DB)(0);let r=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(r=(0,o._R)(n.spatialReference)/(0,p.c9)(n.spatialReference));let e=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)e+=(0,o.AW)(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)e+=(0,o.AW)(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(e+=(0,o.AW)(i[0],i[i.length-1],r))}else"extent"===n.type&&(e+=2*(0,o.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),e+=2*(0,o.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),e*=2,e+=4*Math.abs((0,i.E)(n.zmax,0)*r-(0,i.E)(n.zmin,0)*r));const u=new h.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e]]});return(0,f.sz)(u,t)}function y(n){"async"===n.mode&&(n.functions.disjoint=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null===r[0]||null===r[1]||(0,f.ED)(r[0],r[1])}))},n.functions.intersects=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.kK)(r[0],r[1])}))},n.functions.touches=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.W4)(r[0],r[1])}))},n.functions.crosses=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.jU)(r[0],r[1])}))},n.functions.within=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.uh)(r[0],r[1])}))},n.functions.contains=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.r3)(r[0],r[1])}))},n.functions.overlaps=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null!==r[1]&&(0,f.Nm)(r[0],r[1])}))},n.functions.equals=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return(0,i.p)(r,2,2),r[0]===r[1]||(r[0]instanceof a.Z&&r[1]instanceof a.Z?(0,f.fS)(r[0],r[1]):!(!(0,i.n)(r[0])||!(0,i.n)(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.functions.relate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,3,3),r[0]instanceof a.Z&&r[1]instanceof a.Z)return(0,f.LV)(r[0],r[1],(0,i.d)(r[2]));if(r[0]instanceof a.Z&&null===r[1])return!1;if(r[1]instanceof a.Z&&null===r[0])return!1;if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null===r[0]||null===r[1]?null:(0,f.wf)(r[0],r[1])}))},n.functions.union=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){const o=[];if(0===(e=(0,i.K)(e)).length)throw new Error("Function called with wrong number of Parameters");if(1===e.length)if((0,i.a)(e[0])){const n=(0,i.K)(e[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof a.Z))throw new Error("Illegal Argument");o.push(n[t])}}else{if(!(0,i.b)(e[0])){if(e[0]instanceof a.Z)return(0,i.r)((0,u.r1)(e[0]),t.spatialReference);if(null===e[0])return null;throw new Error("Illegal Argument")}{const n=(0,i.K)(e[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof a.Z))throw new Error("Illegal Argument");o.push(n[t])}}}else for(let t=0;t<e.length;t++)if(null!==e[t]){if(!(e[t]instanceof a.Z))throw new Error("Illegal Argument");o.push(e[t])}return 0===o.length?null:(0,f.G0)(o)}))},n.functions.difference=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null!==r[0]&&null===r[1]?(0,u.r1)(r[0]):null===r[0]?null:(0,f.e5)(r[0],r[1])}))},n.functions.symmetricdifference=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return E(r=(0,i.K)(r)),null===r[0]&&null===r[1]?null:null===r[0]?(0,u.r1)(r[1]):null===r[1]?(0,u.r1)(r[0]):(0,f.Sp)(r[0],r[1])}))},n.functions.clip=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,2),!(r[1]instanceof l.Z)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");return null===r[1]?null:(0,f.oq)(r[0],r[1])}))},n.functions.cut=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,2),!(r[1]instanceof h.Z)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return[];if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");return null===r[1]?[(0,u.r1)(r[0])]:(0,f.z7)(r[0],r[1])}))},n.functions.area=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if((0,i.p)(e,1,2),null===(e=(0,i.K)(e))[0])return 0;if((0,i.o)(e[0]))return e[0].sumArea((0,u.EI)((0,i.E)(e[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,i.a)(e[0])||(0,i.b)(e[0])){const n=(0,i.M)(e[0],t.spatialReference);return null===n?0:(0,f.CJ)(n,(0,u.EI)((0,i.E)(e[1],-1)))}if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.CJ)(e[0],(0,u.EI)((0,i.E)(e[1],-1)))}))},n.functions.areageodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if((0,i.p)(e,1,2),null===(e=(0,i.K)(e))[0])return 0;if((0,i.o)(e[0]))return e[0].sumArea((0,u.EI)((0,i.E)(e[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,i.a)(e[0])||(0,i.b)(e[0])){const n=(0,i.M)(e[0],t.spatialReference);return null===n?0:(0,f.Y4)(n,(0,u.EI)((0,i.E)(e[1],-1)))}if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.Y4)(e[0],(0,u.EI)((0,i.E)(e[1],-1)))}))},n.functions.length=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if((0,i.p)(e,1,2),null===(e=(0,i.K)(e))[0])return 0;if((0,i.o)(e[0]))return e[0].sumLength((0,u.Lz)((0,i.E)(e[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,i.a)(e[0])||(0,i.b)(e[0])){const n=(0,i.L)(e[0],t.spatialReference);return null===n?0:(0,f.sz)(n,(0,u.Lz)((0,i.E)(e[1],-1)))}if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.sz)(e[0],(0,u.Lz)((0,i.E)(e[1],-1)))}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if((0,i.p)(e,1,2),null===(e=(0,i.K)(e))[0])return 0;if((0,i.a)(e[0])||(0,i.b)(e[0])){const n=(0,i.L)(e[0],t.spatialReference);return null===n?0:!0===n.hasZ?m(n,(0,u.Lz)((0,i.E)(e[1],-1))):(0,f.sz)(n,(0,u.Lz)((0,i.E)(e[1],-1)))}if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return!0===e[0].hasZ?m(e[0],(0,u.Lz)((0,i.E)(e[1],-1))):(0,f.sz)(e[0],(0,u.Lz)((0,i.E)(e[1],-1)))}))},n.functions.lengthgeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if((0,i.p)(e,1,2),null===(e=(0,i.K)(e))[0])return 0;if((0,i.o)(e[0]))return e[0].sumLength((0,u.Lz)((0,i.E)(e[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,i.a)(e[0])||(0,i.b)(e[0])){const n=(0,i.L)(e[0],t.spatialReference);return null===n?0:(0,f.kQ)(n,(0,u.Lz)((0,i.E)(e[1],-1)))}if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.kQ)(e[0],(0,u.Lz)((0,i.E)(e[1],-1)))}))},n.functions.distance=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){e=(0,i.K)(e),(0,i.p)(e,2,3);let o=e[0];((0,i.a)(e[0])||(0,i.b)(e[0]))&&(o=(0,i.O)(e[0],t.spatialReference));let c=e[1];if(((0,i.a)(e[1])||(0,i.b)(e[1]))&&(c=(0,i.O)(e[1],t.spatialReference)),!(o instanceof a.Z))throw new Error("Illegal Argument");if(!(c instanceof a.Z))throw new Error("Illegal Argument");return(0,f.TE)(o,c,(0,u.Lz)((0,i.E)(e[2],-1)))}))},n.functions.distancegeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=(0,i.K)(r),(0,i.p)(r,2,3);const e=r[0],o=r[1];if(!(e instanceof g.Z))throw new Error("Illegal Argument");if(!(o instanceof g.Z))throw new Error("Illegal Argument");const c=new h.Z({paths:[],spatialReference:e.spatialReference});return c.addPath([e,o]),(0,f.kQ)(c,(0,u.Lz)((0,i.E)(r[2],-1)))}))},n.functions.densify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return r[0]instanceof w.Z||r[0]instanceof h.Z?(0,f.Cz)(r[0],e,(0,u.Lz)((0,i.E)(r[2],-1))):r[0]instanceof l.Z?(0,f.Cz)(A(r[0]),e,(0,u.Lz)((0,i.E)(r[2],-1))):r[0]}))},n.functions.densifygeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return r[0]instanceof w.Z||r[0]instanceof h.Z?(0,f.j2)(r[0],e,(0,u.Lz)((0,i.E)(r[2],-1))):r[0]instanceof l.Z?(0,f.j2)(A(r[0]),e,(0,u.Lz)((0,i.E)(r[2],-1))):r[0]}))},n.functions.generalize=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,4),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");return(0,f.D$)(r[0],e,(0,i.y)((0,i.E)(r[2],!0)),(0,u.Lz)((0,i.E)(r[3],-1)))}))},n.functions.buffer=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");return 0===e?(0,u.r1)(r[0]):(0,f.f3)(r[0],e,(0,u.Lz)((0,i.E)(r[2],-1)))}))},n.functions.buffergeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");return 0===e?(0,u.r1)(r[0]):(0,f.rd)(r[0],e,(0,u.Lz)((0,i.E)(r[2],-1)))}))},n.functions.offset=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,2,6),null===r[0])return null;if(!(r[0]instanceof w.Z||r[0]instanceof h.Z))throw new Error("Illegal Argument");const e=(0,i.t)(r[1]);if(isNaN(e))throw new Error("Illegal Argument");const o=(0,i.t)((0,i.E)(r[4],10));if(isNaN(o))throw new Error("Illegal Argument");const c=(0,i.t)((0,i.E)(r[5],0));if(isNaN(c))throw new Error("Illegal Argument");return(0,f.cv)(r[0],e,(0,u.Lz)((0,i.E)(r[2],-1)),(0,i.d)((0,i.E)(r[3],"round")).toLowerCase(),o,c)}))},n.functions.rotate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=(0,i.K)(r),(0,i.p)(r,2,3);let e=r[0];if(null===e)return null;if(!(e instanceof a.Z))throw new Error("Illegal Argument");e instanceof l.Z&&(e=w.Z.fromExtent(e));const u=(0,i.t)(r[1]);if(isNaN(u))throw new Error("Illegal Argument");const o=(0,i.E)(r[2],null);if(null===o)return(0,f.U1)(e,u);if(o instanceof g.Z)return(0,f.U1)(e,u,o);throw new Error("Illegal Argument")}))},n.functions.centroid=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){if(e=(0,i.K)(e),(0,i.p)(e,1,1),null===e[0])return null;let c=e[0];if(((0,i.a)(e[0])||(0,i.b)(e[0]))&&(c=(0,i.O)(e[0],t.spatialReference)),null===c)return null;if(!(c instanceof a.Z))throw new Error("Illegal Argument");return c instanceof g.Z?(0,i.r)((0,u.r1)(e[0]),t.spatialReference):c instanceof w.Z?c.centroid:c instanceof h.Z?(0,o.s9)(c):c instanceof s.Z?(0,o.Ay)(c):c instanceof l.Z?c.center:null}))},n.functions.multiparttosinglepart=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,e){e=(0,i.K)(e),(0,i.p)(e,1,1);const o=[];if(null===e[0])return null;if(!(e[0]instanceof a.Z))throw new Error("Illegal Argument");return e[0]instanceof g.Z||e[0]instanceof l.Z?[(0,i.r)((0,u.r1)(e[0]),t.spatialReference)]:(0,f.og)(e[0]).then((n=>{if(n instanceof w.Z){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=(0,d.im)({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r)}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof h.Z){const t=[];for(let r=0;r<n.paths.length;r++){const e=(0,d.im)({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e)}return t}if(e[0]instanceof s.Z){const n=(0,i.r)((0,u.r1)(e[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)o.push(n.getPoint(t));return o}return null}))}))},n.functions.issimple=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,1,1),null===r[0])return!0;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.Gg)(r[0])}))},n.functions.simplify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,i.K)(r),(0,i.p)(r,1,1),null===r[0])return null;if(!(r[0]instanceof a.Z))throw new Error("Illegal Argument");return(0,f.og)(r[0])}))})}},86255:function(n,t,r){r.d(t,{CJ:function(){return M},Cz:function(){return W},D$:function(){return C},ED:function(){return Z},G0:function(){return x},Gg:function(){return K},LV:function(){return z},Nm:function(){return I},Sp:function(){return R},TE:function(){return p},U1:function(){return O},W4:function(){return m},Y4:function(){return D},cv:function(){return N},e5:function(){return F},f3:function(){return S},fS:function(){return A},j2:function(){return J},jU:function(){return d},kK:function(){return E},kQ:function(){return G},og:function(){return b},oq:function(){return g},r3:function(){return h},rd:function(){return k},sz:function(){return j},uh:function(){return y},wf:function(){return L},z7:function(){return w}});r(21703),r(75065);var e=r(17044),u=(r(54787),r(64316));function i(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function c(n){return Array.isArray(n)?n.map((n=>(0,u.im)(n))):(0,u.im)(n)}function l(n,t){let r;return Array.isArray(n)?r=n:(r=[],r.push(n),null!=t&&r.push(t)),r}let a;async function f(){return a||(a=(0,e.bA)("geometryEngineWorker",{strategy:"distributed"})),a}async function s(n,t){return(await f()).invoke("executeGEOperation",{operation:n,parameters:o(t)})}async function g(n,t){return c(await s("clip",[i(n),n,t]))}async function w(n,t){return c(await s("cut",[i(n),n,t]))}function h(n,t){return s("contains",[i(n),n,t])}function d(n,t){return s("crosses",[i(n),n,t])}function p(n,t,r){return s("distance",[i(n),n,t,r])}function A(n,t){return s("equals",[i(n),n,t])}function E(n,t){return s("intersects",[i(n),n,t])}function m(n,t){return s("touches",[i(n),n,t])}function y(n,t){return s("within",[i(n),n,t])}function Z(n,t){return s("disjoint",[i(n),n,t])}function I(n,t){return s("overlaps",[i(n),n,t])}function z(n,t,r){return s("relate",[i(n),n,t,r])}function K(n){return s("isSimple",[i(n),n])}async function b(n){return c(await s("simplify",[i(n),n]))}async function F(n,t){return c(await s("difference",[i(n),n,t]))}async function R(n,t){return c(await s("symmetricDifference",[i(n),n,t]))}async function L(n,t){return c(await s("intersect",[i(n),n,t]))}async function x(n,t=null){const r=l(n,t);return c(await s("union",[i(r),r]))}async function N(n,t,r,e,u,o){return c(await s("offset",[i(n),n,t,r,e,u,o]))}async function S(n,t,r,e=!1){const u=[i(n),n,t,r,e];return c(await s("buffer",u))}async function k(n,t,r,e,u,o){const l=[i(n),n,t,r,e,u,o];return c(await s("geodesicBuffer",l))}function v(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}async function O(n,t,r){var e;if(null==n)throw new Error("Illegal Argument Exception");const u=n.spatialReference;r=null!=(e=r)?e:v(n);const i=n.constructor.fromJSON(await s("rotate",[u,n,t,r]));return i.spatialReference=u,i}async function C(n,t,r,e){return c(await s("generalize",[i(n),n,t,r,e]))}async function W(n,t,r){return c(await s("densify",[i(n),n,t,r]))}async function J(n,t,r,e=0){return c(await s("geodesicDensify",[i(n),n,t,r,e]))}function M(n,t){return s("planarArea",[i(n),n,t])}function j(n,t){return s("planarLength",[i(n),n,t])}function D(n,t,r){return s("geodesicArea",[i(n),n,t,r])}function G(n,t,r){return s("geodesicLength",[i(n),n,t,r])}}}]);