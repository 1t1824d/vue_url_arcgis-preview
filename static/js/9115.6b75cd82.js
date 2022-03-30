"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[9115],{7051:function(e,t,r){r.d(t,{D:function(){return H},b:function(){return I}});var i=r(86799),n=r(61606),o=r(114),a=r(36103),s=r(35549),l=r(18635),c=r(31801),u=r(43485),d=r(10110),h=r(6903),f=r(71717),p=r(82944),m=r(9103),v=r(65096),g=r(20409),x=r(80580),b=r(7424),_=r(90325),T=r(10283),y=r(45932),M=r(61659),S=r(89370),w=r(47259),C=r(97506),A=r(1162),P=r(94779),O=r(29337),F=r(36656);function I(e){const t=new F.kG,r=t.vertex.code,I=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(w.kl,e),t.include(s.f,e),t.include(p.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(a.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(n.w),t.include(g.Q,e),t.include(f.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(d.D,e),t.include(i.q,e),t.include(u.R,e),t.include(h.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(O.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${O.H.float(C.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?O.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(o.p2,e),t.include(C.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(v.S),t.include(_.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P.y),I.add(O.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?O.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:O.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?O.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o.p2,e),t.include(b.X,e),t.include(x.K,e),t.include(C.sj,e),e.receiveShadows&&t.include(S.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(v.S),t.include(_.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(M.jV,e),t.include(y.T,e),t.fragment.include(P.y),t.include(T.k,e),I.add(O.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?O.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:O.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?O.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:O.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?O.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?O.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?O.H`vec3 normalGround = normalize(vpos + localOrigin);`:O.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:O.H``}
        ${1===e.pbrMode||2===e.pbrMode?O.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(m.s,e),t}const H=Object.freeze({__proto__:null,build:I})},36935:function(e,t,r){r.d(t,{R:function(){return P},b:function(){return A}});var i=r(86799),n=r(61606),o=r(114),a=r(36103),s=r(35549),l=r(18635),c=r(31801),u=r(43485),d=r(10110),h=r(6903),f=r(82944),p=r(9103),m=r(65096),v=r(80580),g=r(7424),x=r(90325),b=r(45932),_=r(61659),T=r(89370),y=r(47259),M=r(97506),S=r(94779),w=r(29337),C=r(36656);function A(e){const t=new C.kG,r=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(y.kl,e),t.include(s.f,e),t.include(f.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(a.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(n.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(d.D,e),t.include(i.q,e),t.include(u.R,e),t.include(h.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(w.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${w.H.float(M.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?w.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(o.p2,e),t.include(M.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(m.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S.y),A.add(w.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?w.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o.p2,e),t.include(g.X,e),t.include(v.K,e),t.include(M.sj,e),e.receiveShadows&&t.include(T.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(m.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(_.jV,e),t.include(b.T,e),t.fragment.include(S.y),A.add(w.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?w.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${w.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?w.H`vec3 normalGround = normalize(vpos + localOrigin);`:w.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:w.H``}
        ${1===e.pbrMode||2===e.pbrMode?w.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.s,e),t}const P=Object.freeze({__proto__:null,build:A})},88250:function(e,t,r){r.d(t,{a:function(){return a},c:function(){return i}});r(48675),r(3462);function i(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function o(e,t,r,i,n,o,a,s,l){return[e,t,r,i,n,o,a,s,l]}function a(e,t){return new Float64Array(e,t,9)}Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a})},44858:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return a},b:function(){return n},c:function(){return i}});r(48675),r(3462);function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t,r,i,n,o,a,s,l,c,u,d,h,f,p,m){return[e,t,r,i,n,o,a,s,l,c,u,d,h,f,p,m]}function a(e,t){return new Float64Array(e,t,16)}const s=i();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,IDENTITY:s})},95046:function(e,t,r){r.d(t,{c:function(){return _},g:function(){return d},j:function(){return L},k:function(){return y},m:function(){return h},s:function(){return u}});var i=r(88250),n=r(45443),o=r(42325),a=r(61318),s=r(30348),l=r(53440);function c(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function u(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>a.E?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function h(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=r[0],l=r[1],c=r[2],u=r[3];return e[0]=i*u+a*s+n*c-o*l,e[1]=n*u+a*l+o*s-i*c,e[2]=o*u+a*c+i*l-n*s,e[3]=a*u-i*s-n*l-o*c,e}function f(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=o*l-n*s,e[3]=a*l-i*s,e}function p(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-o*s,e[1]=n*l+a*s,e[2]=o*l+i*s,e[3]=a*l-n*s,e}function m(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=o*l+a*s,e[3]=a*l-o*s,e}function v(e,t){const r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e}function g(e,t,r,i){const n=t[0],o=t[1],s=t[2],l=t[3];let c,u,d,h,f,p=r[0],m=r[1],v=r[2],g=r[3];return u=n*p+o*m+s*v+l*g,u<0&&(u=-u,p=-p,m=-m,v=-v,g=-g),1-u>a.E?(c=Math.acos(u),d=Math.sin(c),h=Math.sin((1-i)*c)/d,f=Math.sin(i*c)/d):(h=1-i,f=i),e[0]=h*n+f*p,e[1]=h*o+f*m,e[2]=h*s+f*v,e[3]=h*l+f*g,e}function x(e){const t=(0,a.R)(),r=(0,a.R)(),i=(0,a.R)(),n=Math.sqrt(1-t),o=Math.sqrt(t);return e[0]=n*Math.sin(2*Math.PI*r),e[1]=n*Math.cos(2*Math.PI*r),e[2]=o*Math.sin(2*Math.PI*i),e[3]=o*Math.cos(2*Math.PI*i),e}function b(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r*r+i*i+n*n+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=o*s,e}function _(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function T(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,o=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*o+o]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*n+o]-t[3*o+n])*i,e[n]=(t[3*n+r]+t[3*r+n])*i,e[o]=(t[3*o+r]+t[3*r+o])*i}return e}function y(e,t,r,i){const n=.5*Math.PI/180;t*=n,r*=n,i*=n;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),u=Math.cos(i);return e[0]=o*l*u-a*s*c,e[1]=a*s*u+o*l*c,e[2]=a*l*c-o*s*u,e[3]=a*l*u+o*s*c,e}function M(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const S=l.c,w=l.s,C=l.a,A=h,P=l.b,O=l.d,F=l.l,I=l.e,H=I,D=l.f,z=D,E=l.n,L=l.g,R=l.h;function N(e,t,r){const i=(0,s.d)(t,r);return i<-.999999?((0,s.c)(B,V,t),(0,s.u)(B)<1e-6&&(0,s.c)(B,W,t),(0,s.n)(B,B),u(e,B,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.c)(B,t,r),e[0]=B[0],e[1]=B[1],e[2]=B[2],e[3]=1+i,E(e,e))}const B=(0,o.c)(),V=(0,o.f)(1,0,0),W=(0,o.f)(0,1,0);function U(e,t,r,i,n,o){return g(G,t,n,o),g(k,r,i,o),g(e,G,k,2*o*(1-o)),e}const G=(0,n.a)(),k=(0,n.a)();function q(e,t,r,i){const n=$;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=i[0],n[4]=i[1],n[7]=i[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],E(e,T(e,n))}const $=(0,i.c)();Object.freeze({__proto__:null,identity:c,setAxisAngle:u,getAxisAngle:d,multiply:h,rotateX:f,rotateY:p,rotateZ:m,calculateW:v,slerp:g,random:x,invert:b,conjugate:_,fromMat3:T,fromEuler:y,str:M,copy:S,set:w,add:C,mul:A,scale:P,dot:O,lerp:F,length:I,len:H,squaredLength:D,sqrLen:z,normalize:E,exactEquals:L,equals:R,rotationTo:N,sqlerp:U,setAxes:q})},45443:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return i},b:function(){return n},c:function(){return a}});r(48675),r(3462);function i(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,i){return[e,t,r,i]}function a(e,t){return new Float64Array(e,t,4)}const s=i();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,IDENTITY:s})},37589:function(e,t,r){r.d(t,{a:function(){return o},b:function(){return l},n:function(){return s},s:function(){return a},t:function(){return n}});var i=r(33249);function n(e,t,r){if(e.count!==t.count)return void i.k.error("source and destination buffers need to have the same number of elements");const n=e.count,o=r[0],a=r[1],s=r[2],l=r[4],c=r[5],u=r[6],d=r[8],h=r[9],f=r[10],p=r[12],m=r[13],v=r[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,_=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*x,t=i*_,r=b[t],n=b[t+1],T=b[t+2];g[e]=o*r+l*n+d*T+p,g[e+1]=a*r+c*n+h*T+m,g[e+2]=s*r+u*n+f*T+v}}function o(e,t,r){if(e.count!==t.count)return void i.k.error("source and destination buffers need to have the same number of elements");const n=e.count,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],p=e.typedBuffer,m=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*m,t=i*g,r=v[t],n=v[t+1],x=v[t+2];p[e]=o*r+l*n+d*x,p[e+1]=a*r+c*n+h*x,p[e+2]=s*r+u*n+f*x}}function a(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*o,t=l*s;n[e]=r*a[t],n[e+1]=r*a[t+1],n[e+2]=r*a[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*a,r=o[t],l=o[t+1],c=o[t+2],u=Math.sqrt(r*r+l*l+c*c);if(u>0){const t=1/u;i[e]=t*r,i[e+1]=t*l,i[e+2]=t*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*o,t=l*s;n[e]=a[t]>>r,n[e+1]=a[t+1]>>r,n[e+2]=a[t+2]>>r}}Object.freeze({__proto__:null,transformMat4:n,transformMat3:o,scale:a,normalize:s,shiftRight:l})},45267:function(e,t,r){function i(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[l]=o[c],i[l+1]=o[c+1],i[l+2]=o[c+2],l+=n,c+=a}function n(e,t,r,i,n){var o,a;const s=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==n?void 0:n.count)?o:e.count;let u=(null!=(a=null==n?void 0:n.dstIndex)?a:0)*l;for(let d=0;d<c;++d)s[u]=t,s[u+1]=r,s[u+2]=i,u+=l}r.d(t,{c:function(){return i},f:function(){return n}});Object.freeze({__proto__:null,copy:i,fill:n})},98586:function(e,t,r){r.d(t,{c:function(){return i},f:function(){return o}});r(48675),r(3462);function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function a(e,t){return new Float32Array(e,t,3)}function s(){return i()}function l(){return o(1,1,1)}function c(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}const h=s(),f=l(),p=c(),m=u(),v=d();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,zeros:s,ones:l,unitX:c,unitY:u,unitZ:d,ZEROS:h,ONES:f,UNIT_X:p,UNIT_Y:m,UNIT_Z:v})},5246:function(e,t,r){function i(e){return e=e||globalThis.location.hostname,c.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:function(){return i},pJ:function(){return n}});const o=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,a,/^jsapps.esri.com$/,s,l]},33249:function(e,t,r){r.d(t,{k:function(){return n}});var i=r(87441);const n=i.Z.getLogger("esri.views.3d.support.buffer.math")},12835:function(e,t,r){r.d(t,{t:function(){return n}});var i=r(35680);async function n(e,t){const{data:r}=await(0,i["default"])(e,{responseType:"image",...t});return r}},69115:function(e,t,r){r.r(t),r.d(t,{fetch:function(){return qr},gltfToEngineResources:function(){return jr},parseUrl:function(){return $r}});var i=r(5246),n=r(27092),o=r(68491),a=r(88250),s=r(11197),l=r(44858),c=r(30348),u=r(42325),d=r(43429),h=r(16886),f=r(37589),p=r(90314),m=r(40748),v=r(83394),g=r(64798),x=r(86114),b=(r(48675),r(3462),r(35680)),_=r(53855),T=r(25585),y=r(87441),M=r(24446),S=r(15685),w=r(12835),C=r(40920),A=r(59778);class P{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,u.c)(),(0,A.hu)(e.length>=1),(0,A.hu)(r.length%this._numIndexPerPrimitive==0),(0,A.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,A.hu)(3===i.size||4===i.size);const{data:n,size:o}=i,a=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];O.clear(),O.push(s),this.bbMin=(0,u.f)(n[s],n[s+1],n[s+2]),this.bbMax=(0,u.a)(this.bbMin);for(let c=0;c<a;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],O.push(s);let i=n[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,c.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<O.length;++c){s=O.getItemAt(c);const e=n[s]-this.center[0],t=n[s+1]-this.center[1],r=n[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=l)continue;const o=Math.sqrt(i),a=.5*(o-this.radius);this.radius=this.radius+a,l=this.radius*this.radius;const u=a/o;this.center[0]+=e*u,this.center[1]+=t*u,this.center[2]+=r*u}O.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.h)(this.bbMin,this.bbMax)>1){const e=(0,c.e)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:n,size:o}=this.position;for(let l=0;l<t;++l){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=o*this.indices[a],c=n[s],u=n[s+1],d=n[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[a+e];const t=n[s],r=n[s+1],i=n[s+2];t<c&&(c=t),r<u&&(u=r),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[l]=t,++i[t]}let a=0;for(let l=0;l<8;++l)i[l]>0&&++a;if(a<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new P(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){O.prune()}}const O=new C.Z({deallocator:null});var F=r(68763);class I{constructor(){this.id=(0,F.D)()}unload(){}}var H=r(52421);class D extends I{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,{...o});if(null==t||0===t.length){const e=z(this._vertexAttributes),t=(0,H.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,o]of t)o&&(this._indices.set(n,E(o)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,n.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,H.cM)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,H.NO)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;(0,A.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,H.p)(e.length/t),i=this.vertexAttributes.get("position");return new P(r,t,e,i)}}function z(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function E(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var L=r(21677),R=r(78534),N=r(14937),B=r(17914),V=r(58476),W=r(76109),U=r(22434);function G(){if((0,n.Wi)(k)){const e=e=>(0,U.V)(`esri/libs/basisu/${e}`);k=r.e(6482).then(r.bind(r,16482)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return k}let k;var q=r(29168),$=r(33470);let j=null,X=null;async function Z(){return(0,n.Wi)(X)&&(X=G(),j=await X),X}function K(e,t){if((0,n.Wi)(j))return e.byteLength;const r=new j.BasisFile(new Uint8Array(e)),i=J(r)?Q(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function Y(e,t){if((0,n.Wi)(j))return e.byteLength;const r=new j.KTX2File(new Uint8Array(e)),i=ee(r)?Q(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function Q(e,t,r,i,n){const o=(0,$.RG)(t?37496:37492),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function J(e){return e.getNumImages()>=1&&!e.isUASTC()}function ee(e){return e.getFaces()>=1&&e.isETC1S()}async function te(e,t,r){(0,n.Wi)(j)&&(j=await Z());const i=new j.BasisFile(new Uint8Array(r));if(!J(i))return null;i.startTranscoding();const o=ie(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}async function re(e,t,r){(0,n.Wi)(j)&&(j=await Z());const i=new j.KTX2File(new Uint8Array(r));if(!ee(i))return null;i.startTranscoding();const o=ie(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function ie(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[1,37496]:[0,37492]:c?i?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,u))),s(g,u,f[g]);const p=f.length>1,m=p?9987:9729,v={...t,samplingMode:m,hasMipmap:p,internalFormat:d,width:n,height:o};return new q.Z(e,v,{type:"compressed",levels:f})}const ne=y.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),oe=542327876,ae=131072,se=4;function le(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function ce(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const ue=le("DXT1"),de=le("DXT3"),he=le("DXT5"),fe=31,pe=0,me=1,ve=2,ge=3,xe=4,be=7,_e=20,Te=21;function ye(e,t,r){const{textureData:i,internalFormat:n,width:o,height:a}=Me(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=o,t.height=a,new q.Z(e,t,i)}function Me(e,t){const r=new Int32Array(e,0,fe);if(r[pe]!==oe)return ne.error("Invalid magic number in DDS header"),null;if(!(r[_e]&se))return ne.error("Unsupported format, must contain a FourCC code"),null;const i=r[Te];let n,o;switch(i){case ue:n=8,o=33776;break;case de:n=16,o=33778;break;case he:n=16,o=33779;break;default:return ne.error("Unsupported FourCC code:",ce(i)),null}let a=1,s=r[xe],l=r[ge];0==(3&s)&&0==(3&l)||(ne.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;r[ve]&ae&&!1!==t&&(a=Math.max(1,r[be])),1===a||(0,N.wt)(s)&&(0,N.wt)(l)||(ne.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[me]+4;const p=[];for(let m=0;m<a;++m)h=(s+3>>2)*(l+3>>2)*n,d=new Uint8Array(e,f,h),p.push(d),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:c,height:u}}const Se=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),we=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Ce=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Ae=r(12794),Pe=r(82595);function Oe(e,t=we,r=Se,i=-1,n=1){let o=null;return o=t===Ce?new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]):new Float32Array([i,i,n,i,i,n,n,n]),new Pe.Z(e,r,{geometry:t},{geometry:Ae.Z.createVertex(e,35044,o)})}var Fe=r(17115),Ie=r(68412);class He extends I{constructor(e,t){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new R.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=He.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,n.Wi)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,V.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,V.HK)(e.src)||(0,V.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,n.Wi)(e))return 0;if((0,B.eP)(e)||(0,B.lq)(e))return t.encoding===He.KTX2_ENCODING?Y(e,t.mipmap):t.encoding===He.BASIS_ENCODING?K(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?He.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if((0,n.pC)(this._glTexture))return this._glTexture;if((0,n.pC)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,n.Wi)(r)?(this._glTexture=new q.Z(e,this.createDescriptor(e),null),this._glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===He.DDS_ENCODING?this.loadFromDDSData(e,r):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===He.KTX2_ENCODING?this.loadFromKTX2(e,r):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===He.BASIS_ENCODING?this.loadFromBasis(e,r):(0,B.lq)(r)?this.loadFromPixelData(e,r):(0,B.eP)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,n.Wi)(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this._glTexture=ye(e,this.createDescriptor(e),t),this._glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>re(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>te(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromPixelData(e,t){(0,A.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new q.Z(e,r,t),this._glTexture}loadFromURL(e,t,r){return this.loadAsync((async i=>{const n=await(0,w.t)(r,{signal:i});return this.loadFromImage(e,n,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const n=await(0,W.f)(r,r.src,!1,i);return this.loadFromImage(e,n,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,n.hw)(u)},l=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},c=e=>{s(),a(e||new T.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=(0,M.fu)(i,(()=>c((0,M.zE)())))}))))}loadFromImage(e,t,r){const i=He.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||(0,N.wt)(i.width)&&(0,N.wt)(i.height)?(n.width=i.width,n.height=i.height,this._glTexture=new q.Z(e,n,t),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),this._glTexture)}loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,Ie.Z)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=(0,N.Sf)(o),l=(0,N.Sf)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,a/l],c=new q.Z(e,i),c.updateData(0,0,0,o,a,t);break;case 1:case null:case void 0:c=this.stretchToPowerOfTwo(e,t,i,n());break;default:(0,L.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}stretchToPowerOfTwo(e,t,r,i){const n=new q.Z(e,r),o=new Fe.Z(e,{colorTarget:0,depthStencilTarget:0},n),a=new q.Z(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=Oe(e),l=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),n}drawStretchedTexture(e,t,r,i,n,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(n,"tex"),e.bindVAO(i),t.bindPipelineState(e),e.drawArrays(5,0,(0,$._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,n.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,n.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}He.DDS_ENCODING="image/vnd-ms.dds",He.KTX2_ENCODING="image/ktx2",He.BASIS_ENCODING="image/x.basis";var De=r(80543),ze=r(97506);class Ee{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return 2}}class Le extends Ee{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,n.RY)(this._texture),this._textureNormal=(0,n.RY)(this._textureNormal),this._textureEmissive=(0,n.RY)(this._textureEmissive),this._textureOcclusion=(0,n.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,n.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(e){((0,n.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,n.RY)(this._texture),this._textureId=e,this._acquire(this._textureId).then((e=>this._texture=e)))}bindTextures(e){(0,n.pC)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,n.pC)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,n.pC)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,n.pC)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,n.pC)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,n.pC)(this._texture)?this._texture.glTexture:null;(0,n.pC)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return(0,n.Wi)(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then((e=>this._disposed?((0,n.RY)(e),null):e)).finally((()=>--this._numLoading)))}}var Re=r(79429);class Ne extends I{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Se,this._parameters=(0,Re.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(0,Re.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}}const Be={renderOccluded:1};var Ve=r(20482),We=r(95046),Ue=r(45443),Ge=r(98586),ke=r(56144),qe=(r(35425),r(53440)),$e=(r(57787),r(52111)),je=r(79039);function Xe(e,t,r){const i=(0,c.d)(e.direction,(0,c.f)(r,t,e.origin));return(0,c.b)(r,e.origin,(0,c.a)(r,e.direction,i)),r}function Ze(){return{origin:null,direction:null}}new $e.x(Ze);function Ke(e,t){const r=(0,c.d)(e,t)/((0,c.l)(e)*(0,c.l)(t));return-(0,N.ZF)(r)}(0,u.c)(),(0,u.c)();const Ye=y.Z.getLogger("esri.geometry.support.sphere");function Qe(){return(0,ke.c)()}function Je(e,t=Qe()){return(0,qe.c)(t,e)}function et(e,t){return(0,ke.f)(e[0],e[1],e[2],t)}function tt(e){return e}function rt(e){e[0]=e[1]=e[2]=e[3]=0}function it(e){return e}function nt(e){return Array.isArray(e)?e[3]:e}function ot(e){return Array.isArray(e)?e:yt}function at(e,t,r,i){return(0,ke.f)(e,t,r,i)}function st(e,t,r){return e!==r&&(0,c.g)(r,e),r[3]=e[3]+t,r}function lt(e,t,r){return Ye.error("sphere.setExtent is not yet supported"),e===r?r:Je(e,r)}function ct(e,t,r){if((0,n.Wi)(t))return!1;const{origin:i,direction:o}=t,a=ut;a[0]=i[0]-e[0],a[1]=i[1]-e[1],a[2]=i[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],l=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=l*l-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(c<0)return!1;const u=Math.sqrt(c);let d=(-l-u)/(2*s);const h=(-l+u)/(2*s);return(d<0||h<d&&h>0)&&(d=h),!(d<0)&&(r&&(r[0]=i[0]+o[0]*d,r[1]=i[1]+o[1]*d,r[2]=i[2]+o[2]*d),!0)}const ut=(0,u.c)();function dt(e,t){return ct(e,t,null)}function ht(e,t,r){if(ct(e,t,r))return r;const i=ft(e,t,je.WM.get());return(0,c.b)(r,t.origin,(0,c.a)(je.WM.get(),t.direction,(0,c.i)(t.origin,i)/(0,c.l)(t.direction))),r}function ft(e,t,r){const i=je.WM.get(),n=je.MP.get();(0,c.c)(i,t.origin,t.direction);const o=nt(e);(0,c.c)(r,i,t.origin),(0,c.a)(r,r,1/(0,c.l)(r)*o);const a=gt(e,t.origin),l=Ke(t.origin,r);return(0,s.i)(n),(0,s.e)(n,n,l+a,i),(0,c.m)(r,r,n),r}function pt(e,t,r){return ct(e,t,r)?r:(Xe(t,ot(e),r),mt(e,r,r))}function mt(e,t,r){const i=(0,c.f)(je.WM.get(),t,ot(e)),n=(0,c.a)(je.WM.get(),i,e[3]/(0,c.l)(i));return(0,c.b)(r,n,ot(e))}function vt(e,t){const r=(0,c.f)(je.WM.get(),t,ot(e)),i=(0,c.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))}function gt(e,t){const r=(0,c.f)(je.WM.get(),t,ot(e)),i=(0,c.l)(r),n=nt(e),o=n+Math.abs(n-i);return(0,N.ZF)(n/o)}const xt=(0,u.c)();function bt(e,t,r,i){const n=(0,c.f)(xt,t,ot(e));switch(r){case 0:{const e=(0,N.jE)(n,xt)[2];return(0,c.s)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=(0,N.jE)(n,xt),t=e[1],r=e[2],o=Math.sin(t);return(0,c.s)(i,-o*Math.cos(r),-o*Math.sin(r),Math.cos(t))}case 2:return(0,c.n)(i,n);default:return}}function _t(e,t){const r=(0,c.f)(Mt,t,ot(e));return(0,c.l)(r)-e[3]}function Tt(e,t,r,i){const n=_t(e,t),o=bt(e,t,2,Mt),a=(0,c.a)(Mt,o,r-n);return(0,c.b)(i,t,a)}const yt=(0,u.c)(),Mt=(0,u.c)();Object.freeze({__proto__:null,create:Qe,copy:Je,fromCenterAndRadius:et,wrap:tt,clear:rt,fromRadius:it,getRadius:nt,getCenter:ot,fromValues:at,elevate:st,setExtent:lt,intersectRay:ct,intersectsRay:dt,intersectRayClosestSilhouette:ht,closestPointOnSilhouette:ft,closestPoint:pt,projectPoint:mt,distanceToSilhouette:vt,angleToSilhouette:gt,axisAt:bt,altitudeAt:_t,setAltitudeAt:Tt});class St{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*l,e[4]+=o*l,e[5]+=a*l,e}}class wt{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,u.c)(),this.mbs=(0,ke.c)(),this.obb={center:(0,u.c)(),halfSize:(0,Ge.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*l,e[4]+=o*l,e[5]+=a*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,c.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,c.b)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,c.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,We.c)(Ot,e.quaternion),(0,c.q)(this.obb.halfSize,this.obb.halfSize,Ot),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}}class Ct{constructor(e=0){this.offset=e,this.sphere=Qe(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*o+l[8]*a+l[12],this.tmpVertex[1]=l[1]*n+l[5]*o+l[9]*a+l[13],this.tmpVertex[2]=l[2]*n+l[6]*o+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const At=new Ct;function Pt(e){return(0,n.pC)(e)?(At.offset=e,At):null}new wt;new St;const Ot=(0,Ue.a)();function Ft(e,t,r,i){const n=r.typedBuffer,o=r.typedBufferStride,a=e.length;i*=o;for(let s=0;s<a;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=o}}function It(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let l=0;l<s;++l){const r=3*e[l];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}}function Ht(e,t,r,i,n=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===n)for(let l=0;l<s;++l){const r=4*e[l];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}}function Dt(e,t,r,i,n,o=1){if(!r)return void It(e,t,i,n,o);const a=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],u=r[1],d=r[2],h=r[4],f=r[5],p=r[6],m=r[8],v=r[9],g=r[10],x=r[12],b=r[13],_=r[14];if(n*=s,1===o)for(let T=0;T<l;++T){const r=3*e[T],i=t[r],o=t[r+1],l=t[r+2];a[n]=c*i+h*o+m*l+x,a[n+1]=u*i+f*o+v*l+b,a[n+2]=d*i+p*o+g*l+_,n+=s}else for(let T=0;T<l;++T){const r=3*e[T],i=t[r],l=t[r+1],y=t[r+2],M=c*i+h*l+m*y+x,S=u*i+f*l+v*y+b,w=d*i+p*l+g*y+_;for(let e=0;e<o;++e)a[n]=M,a[n+1]=S,a[n+2]=w,n+=s}}function zt(e,t,r,i,n,o=1){if(!r)return void It(e,t,i,n,o);const a=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],p=a[4],m=a[5],v=a[6],g=a[8],x=a[9],b=a[10],_=!(0,s.k)(a),T=1e-6,y=1-T;if(n*=c,1===o)for(let s=0;s<u;++s){const r=3*e[s],i=t[r],o=t[r+1],a=t[r+2];let u=d*i+p*o+g*a,M=h*i+m*o+x*a,S=f*i+v*o+b*a;if(_){const e=u*u+M*M+S*S;if(e<y&&e>T){const t=1/Math.sqrt(e);u*=t,M*=t,S*=t}}l[n+0]=u,l[n+1]=M,l[n+2]=S,n+=c}else for(let s=0;s<u;++s){const r=3*e[s],i=t[r],a=t[r+1],u=t[r+2];let M=d*i+p*a+g*u,S=h*i+m*a+x*u,w=f*i+v*a+b*u;if(_){const e=M*M+S*S+w*w;if(e<y&&e>T){const t=1/Math.sqrt(e);M*=t,S*=t,w*=t}}for(let e=0;e<o;++e)l[n+0]=M,l[n+1]=S,l[n+2]=w,n+=c}}function Et(e,t,r,i,n,o=1){if(!r)return void Ht(e,t,i,n,o);const a=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],p=a[4],m=a[5],v=a[6],g=a[8],x=a[9],b=a[10],_=!(0,s.k)(a),T=1e-6,y=1-T;if(n*=c,1===o)for(let s=0;s<u;++s){const r=4*e[s],i=t[r],o=t[r+1],a=t[r+2],u=t[r+3];let M=d*i+p*o+g*a,S=h*i+m*o+x*a,w=f*i+v*o+b*a;if(_){const e=M*M+S*S+w*w;if(e<y&&e>T){const t=1/Math.sqrt(e);M*=t,S*=t,w*=t}}l[n+0]=M,l[n+1]=S,l[n+2]=w,l[n+3]=u,n+=c}else for(let s=0;s<u;++s){const r=4*e[s],i=t[r],a=t[r+1],u=t[r+2],M=t[r+3];let S=d*i+p*a+g*u,w=h*i+m*a+x*u,C=f*i+v*a+b*u;if(_){const e=S*S+w*w+C*C;if(e<y&&e>T){const t=1/Math.sqrt(e);S*=t,w*=t,C*=t}}for(let e=0;e<o;++e)l[n+0]=S,l[n+1]=w,l[n+2]=C,l[n+3]=M,n+=c}}function Lt(e,t,r,i,n,o=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(n*=s,1===o){if(4===r)for(let c=0;c<l;++c){const r=4*e[c];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}else if(4===r)for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}function Rt(e,t,r,i,n,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{(0,A.hu)(3===t.size);const e=n.getField(a,h.ct);e&&Dt(s,t.data,r,e,o);break}case"normal":{(0,A.hu)(3===t.size);const e=n.getField(a,h.ct);e&&zt(s,t.data,i,e,o);break}case"uv0":{(0,A.hu)(2===t.size);const e=n.getField(a,h.Eu);e&&Ft(s,t.data,e,o);break}case"color":{(0,A.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&Lt(s,t.data,t.size,e,o);break}case"symbolColor":{(0,A.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&Lt(s,t.data,t.size,e,o);break}case"tangent":{(0,A.hu)(4===t.size);const e=n.getField(a,h.ek);e&&Et(s,t.data,i,e,o);break}}}}var Nt=r(63825),Bt=r(114),Vt=r(35549),Wt=r(82944),Ut=r(21186),Gt=r(90325),kt=r(61659),qt=r(89370),$t=r(47259),jt=r(88454),Xt=r(85894);function Zt(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}function Kt(e,t){e.setUniformMatrix4fv("proj",t)}function Yt(e,t,r){(0,s.a)(Qt,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Qt)}const Qt=(0,Xt.c)();class Jt{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class er{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=(0,n.O3)(this._program),this._pipeline=this._config=null}reload(e){(0,n.O3)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,t){return this._pipeline}}class tr{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function rr(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Math.log2(a)),l=null!=(n=t._parameterBits)?n:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const u=l[c],d=(1<<s)-1<<u;l[c]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}r(21703);var ir=r(56770),nr=r(76633);class or extends nr.${constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new C.Z({deallocator:null}),this._fragmentUniforms=(0,ir.hZ)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,n.Wi)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,n.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const ar={mask:255},sr={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},lr={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var cr=r(7051),ur=r(46982);class dr extends er{initializeProgram(e){const t=dr.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,jt.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new or(e.rctx,i,Se)}bindPass(e,t){var r,i;Kt(this.program,t.camera.projectionMatrix);const n=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===n)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,Gt.p)(this.program,t)),7===n&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Re.FZ[e.colorMixMode])),0===n?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Re.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,kt.nW)(this.program,e,this.configuration.isSchematic)):4===n&&(0,Ut.wW)(this.program,t),(0,$t.uj)(this.program,e),(0,Wt.Mo)(this.program,e,t),(0,Re.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,u.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Yt(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Zt(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Vt.f.bindCustomOrigin(this.program,t),(0,Bt.Vv)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&(0,qt.vL)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return(0,ur.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Ve.wu:(0,Ve.$L)(e),culling:hr(r)&&(0,ur.zp)(r.cullFace),depthTest:{func:(0,Ve.$x)(e)},depthWrite:i||n?r.writeDepth&&ur.LZ:null,colorWrite:ur.BK,stencilWrite:r.sceneHasOcludees?ar:null,stencilTest:r.sceneHasOcludees?t?lr:sr:null,polygonOffset:i||n?null:(0,Ve.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function hr(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}dr.shader=new Jt(cr.D,(()=>r.e(9445).then(r.bind(r,89445))));class fr extends tr{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,Nt._)([rr({count:8})],fr.prototype,"output",void 0),(0,Nt._)([rr({count:4})],fr.prototype,"alphaDiscardMode",void 0),(0,Nt._)([rr({count:3})],fr.prototype,"doubleSidedMode",void 0),(0,Nt._)([rr()],fr.prototype,"isSchematic",void 0),(0,Nt._)([rr()],fr.prototype,"vertexColors",void 0),(0,Nt._)([rr()],fr.prototype,"offsetBackfaces",void 0),(0,Nt._)([rr()],fr.prototype,"symbolColors",void 0),(0,Nt._)([rr()],fr.prototype,"vvSize",void 0),(0,Nt._)([rr()],fr.prototype,"vvColor",void 0),(0,Nt._)([rr()],fr.prototype,"verticalOffset",void 0),(0,Nt._)([rr()],fr.prototype,"receiveShadows",void 0),(0,Nt._)([rr()],fr.prototype,"slicePlaneEnabled",void 0),(0,Nt._)([rr()],fr.prototype,"sliceHighlightDisabled",void 0),(0,Nt._)([rr()],fr.prototype,"receiveAmbientOcclusion",void 0),(0,Nt._)([rr()],fr.prototype,"screenSizePerspective",void 0),(0,Nt._)([rr()],fr.prototype,"textureAlphaPremultiplied",void 0),(0,Nt._)([rr()],fr.prototype,"hasColorTexture",void 0),(0,Nt._)([rr()],fr.prototype,"usePBR",void 0),(0,Nt._)([rr()],fr.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Nt._)([rr()],fr.prototype,"hasEmissionTexture",void 0),(0,Nt._)([rr()],fr.prototype,"hasOcclusionTexture",void 0),(0,Nt._)([rr()],fr.prototype,"hasNormalTexture",void 0),(0,Nt._)([rr()],fr.prototype,"instanced",void 0),(0,Nt._)([rr()],fr.prototype,"instancedColor",void 0),(0,Nt._)([rr()],fr.prototype,"instancedDoublePrecision",void 0),(0,Nt._)([rr()],fr.prototype,"vertexTangents",void 0),(0,Nt._)([rr()],fr.prototype,"normalsTypeDerivate",void 0),(0,Nt._)([rr()],fr.prototype,"writeDepth",void 0),(0,Nt._)([rr()],fr.prototype,"sceneHasOcludees",void 0),(0,Nt._)([rr()],fr.prototype,"transparent",void 0),(0,Nt._)([rr()],fr.prototype,"enableOffset",void 0),(0,Nt._)([rr({count:3})],fr.prototype,"cullFace",void 0),(0,Nt._)([rr({count:4})],fr.prototype,"transparencyPassType",void 0),(0,Nt._)([rr()],fr.prototype,"multipassTerrainEnabled",void 0),(0,Nt._)([rr()],fr.prototype,"cullAboveGround",void 0);var pr=r(36935);class mr extends dr{initializeProgram(e){const t=mr.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,jt.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new or(e.rctx,i,Se)}}mr.shader=new Jt(pr.R,(()=>r.e(8907).then(r.bind(r,78907))));class vr extends Ne{constructor(e){super(e,xr),this.supportsEdges=!0,this.techniqueConfig=new fr,this.vertexBufferLayout=_r(this.parameters),this.instanceBufferLayout=e.instanced?Tr(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||i)?!!a||s:r?a?l:s:n||o||i?!!a||s:a?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Ve.ve),this.techniqueConfig}intersect(e,t,r,i,n,o,a){if(null!==this.parameters.verticalOffset){const e=i.camera;(0,c.s)(Ar,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=(0,c.n)(wr,Ar);break;case 2:t=(0,c.g)(wr,Sr)}let a=0;if(null!==this.parameters.verticalOffset){const r=(0,c.f)(Pr,Ar,e.eye),i=(0,c.l)(r),n=(0,c.a)(r,r,1/i);let o=null;this.parameters.screenSizePerspective&&(o=(0,c.d)(t,n)),a+=(0,Re.Hx)(e,i,this.parameters.verticalOffset,o,this.parameters.screenSizePerspective)}(0,c.a)(t,t,a),(0,c.t)(Cr,t,i.transform.inverseRotation),n=(0,c.f)(yr,n,Cr),o=(0,c.f)(Mr,o,Cr)}(0,Re.Bw)(e,t,i,n,o,Pt(i.verticalOffset),a)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new gr(e):null}createBufferWriter(){return new br(this.vertexBufferLayout,this.instanceBufferLayout)}}class gr extends Le{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?mr:dr,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const xr={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,a.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:ze.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Be};class br{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){Rt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function _r(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,De.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}function Tr(e){let t=(0,De.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const yr=(0,u.c)(),Mr=(0,u.c)(),Sr=(0,u.f)(0,0,1),wr=(0,u.c)(),Cr=(0,u.c)(),Ar=(0,u.c)(),Pr=(0,u.c)(),Or=y.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Fr(e,t){const r=await Ir(e,t);return{resource:r,textures:await Rr(r.textureDefinitions,t)}}async function Ir(e,t){const r=(0,n.pC)(t)&&t.streamDataRequester;if(r)return Hr(e,r,t);const i=await(0,_.q6)((0,b["default"])(e,(0,n.Wg)(t)));if(!0===i.ok)return i.value.data;(0,M.r9)(i.error),Dr(i.error)}async function Hr(e,t,r){const i=await(0,_.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,M.r9)(i.error),Dr(i.error.details.url)}function Dr(e){throw new T.Z("",`Request for object resource failed: ${e}`)}function zr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Or.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Or.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Or.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Or.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Or.warn("Indexed geometries must specify faces"),i=!1;break}default:Or.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Or.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(Or.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Er(e,t){const r=[],i=[],o=[],a=[],s=e.resource,l=S.G.parse(s.version||"1.0","wosr");Vr.validate(l);const c=s.model.name,d=s.model.geometries,h=s.materialDefinitions,f=e.textures;let p=0;const m=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!zr(e))continue;const s=Br(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],r=e.values;c.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=f&&f[s.texture];if(x&&!m.has(s.texture)){const{image:e,params:t}=x,r=new He(e,t);a.push(r),m.set(s.texture,r)}const b=m.get(s.texture),_=b?b.id:void 0;let T=o[s.material]?o[s.material][s.texture]:null;if(!T){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?Nr(x.alphaChannelUsage):void 0,l={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,n.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),T=new vr(l),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=T}i.push(T);const y=new D(c,g);p+=g.position?g.position.length:0,r.push(y)}return{name:c,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:Lr(r),numberOfVertices:p,lodThreshold:null}}function Lr(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,n.pC)(r)&&((0,d.pp)(t,r.getBBMin()),(0,d.pp)(t,r.getBBMax()))})),t}async function Rr(e,t){const r=[];for(const a in e){const i=e[a],o=i.images[0].data;if(!o){Or.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,l="/textureDefinitions/"+a,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Nr(c)},d=(0,n.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,w.t)(s,t);r.push(d.then((e=>({refId:l,image:e,params:u,alphaChannelUsage:c}))))}const i=await Promise.all(r),o={};for(const n of i)o[n.refId]=n;return o}function Nr(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Br(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Vr=new S.G(1,2,"wosr");var Wr=r(96773),Ur=r(81032),Gr=r(58691),kr=r(45267);async function qr(e,t){const r=$r((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Fr(r.url,t)),i=Er(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,n.U2)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&(0,n.pC)(a)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&Kr(o,a);const s=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=jr(o,s,l,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=jr(o,s,l,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const c=jr(o,s,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function $r(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function jr(e,t,r,i){const s=e.model,l=(0,a.c)(),c=new Array,u=new Map,v=new Map;return s.lods.forEach(((e,a)=>{if(void 0!==i&&a!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,n.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,d.cS)()};c.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=s.materials.get(e.material),c=(0,n.pC)(e.attributes.texCoord0),x=(0,n.pC)(e.attributes.normal),b=Xr(a.alphaMode);if(!u.has(i)){if(c){if((0,n.pC)(a.textureColor)&&!v.has(a.textureColor)){const e=s.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==b};v.set(a.textureColor,new He(e.data,t))}if((0,n.pC)(a.textureNormal)&&!v.has(a.textureNormal)){const e=s.textures.get(a.textureNormal);v.set(a.textureNormal,new He(e.data,e.parameters))}if((0,n.pC)(a.textureOcclusion)&&!v.has(a.textureOcclusion)){const e=s.textures.get(a.textureOcclusion);v.set(a.textureOcclusion,new He(e.data,e.parameters))}if((0,n.pC)(a.textureEmissive)&&!v.has(a.textureEmissive)){const e=s.textures.get(a.textureEmissive);v.set(a.textureEmissive,new He(e.data,e.parameters))}if((0,n.pC)(a.textureMetallicRoughness)&&!v.has(a.textureMetallicRoughness)){const e=s.textures.get(a.textureMetallicRoughness);v.set(a.textureMetallicRoughness,new He(e.data,e.parameters))}}const o=a.color[0]**(1/Wr.K),l=a.color[1]**(1/Wr.K),d=a.color[2]**(1/Wr.K),h=a.emissiveFactor[0]**(1/Wr.K),f=a.emissiveFactor[1]**(1/Wr.K),p=a.emissiveFactor[2]**(1/Wr.K),m=(0,n.pC)(a.textureColor)&&c?v.get(a.textureColor):null;u.set(i,new vr({...t,transparent:0===b,textureAlphaMode:b,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,l,d],ambient:[o,l,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,n.pC)(m)?m.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,n.pC)(a.textureNormal)&&c?v.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,n.pC)(m)&&!!m.params.preMultiplyAlpha,occlusionTextureId:(0,n.pC)(a.textureOcclusion)&&c?v.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,n.pC)(a.textureEmissive)&&c?v.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,n.pC)(a.textureMetallicRoughness)&&c?v.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[h,f,p],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const _=Zr(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,y=(0,m.gS)(h.ct,T);(0,f.t)(y,e.attributes.position,e.transform);const M=[["position",{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],S=[["position",_]];if((0,n.pC)(e.attributes.normal)){const t=(0,m.gS)(h.ct,T);(0,o.a)(l,e.transform),(0,f.a)(t,e.attributes.normal,l),M.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["normal",_])}if((0,n.pC)(e.attributes.tangent)){const t=(0,m.gS)(h.ek,T);(0,o.a)(l,e.transform),(0,p.t)(t,e.attributes.tangent,l),M.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["tangent",_])}if((0,n.pC)(e.attributes.texCoord0)){const t=(0,m.gS)(h.Eu,T);(0,Ur.n)(t,e.attributes.texCoord0),M.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["uv0",_])}if((0,n.pC)(e.attributes.color)){const t=(0,m.gS)(h.mc,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,Gr.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,p.s)(t,e.attributes.color,1/256);else{(0,Gr.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,kr.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(r,e.attributes.color,1/256)}M.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["color",_])}const w=new D(M,S);g.stageResources.geometries.push(w),g.stageResources.materials.push(u.get(i)),c&&((0,n.pC)(a.textureColor)&&g.stageResources.textures.push(v.get(a.textureColor)),(0,n.pC)(a.textureNormal)&&g.stageResources.textures.push(v.get(a.textureNormal)),(0,n.pC)(a.textureOcclusion)&&g.stageResources.textures.push(v.get(a.textureOcclusion)),(0,n.pC)(a.textureEmissive)&&g.stageResources.textures.push(v.get(a.textureEmissive)),(0,n.pC)(a.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(a.textureMetallicRoughness))),g.numberOfVertices+=T;const C=w.boundingInfo;(0,n.pC)(C)&&((0,d.pp)(g.boundingBox,C.getBBMin()),(0,d.pp)(g.boundingBox,C.getBBMax()))}))})),c}function Xr(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function Zr(e,t){switch(t){case 4:return(0,x.nh)(e);case 5:return(0,x.DA)(e);case 6:return(0,x.jX)(e)}}function Kr(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if((0,n.Wi)(i))return;const a=o.attributes.position,d=a.count,f=(0,u.c)(),p=(0,u.c)(),v=(0,u.c)(),g=(0,m.gS)(h.mc,d),x=(0,m.gS)(h.ct,d),b=(0,s.b)((0,l.c)(),o.transform);for(let n=0;n<d;n++){a.getVec(n,p),i.getVec(n,f),(0,c.m)(p,p,o.transform),(0,c.f)(v,p,t.center),(0,c.E)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),u=Math.min(.45+.55*l*l,1);(0,c.E)(v,v,t.radius),(0,c.m)(v,v,b),(0,c.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.e)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(n,v),g.set(n,0,255*u),g.set(n,1,255*u),g.set(n,2,255*u),g.set(n,3,255)}o.attributes.normal=x,o.attributes.color=g}}}},80543:function(e,t,r){r.d(t,{U$:function(){return s}});r(48675),r(3462);var i=r(16886),n=r(43206);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.Eu,t),this}vec2f64(e,t){return this.appendField(e,i.q6,t),this}vec3f(e,t){return this.appendField(e,i.ct,t),this}vec3f64(e,t){return this.appendField(e,i.fP,t),this}vec4f(e,t){return this.appendField(e,i.ek,t),this}vec4f64(e,t){return this.appendField(e,i.Cd,t),this}mat3f(e,t){return this.appendField(e,i.gK,t),this}mat3f64(e,t){return this.appendField(e,i.ey,t),this}mat4f(e,t){return this.appendField(e,i.bj,t),this}mat4f64(e,t){return this.appendField(e,i.O1,t),this}vec4u8(e,t){return this.appendField(e,i.mc,t),this}f32(e,t){return this.appendField(e,i.ly,t),this}f64(e,t){return this.appendField(e,i.oS,t),this}u8(e,t){return this.appendField(e,i.D_,t),this}u16(e,t){return this.appendField(e,i.av,t),this}i8(e,t){return this.appendField(e,i.Hz,t),this}vec2i8(e,t){return this.appendField(e,i.Vs,t),this}vec2i16(e,t){return this.appendField(e,i.or,t),this}vec2u8(e,t){return this.appendField(e,i.xA,t),this}vec4u16(e,t){return this.appendField(e,i.v6,t),this}u32(e,t){return this.appendField(e,i.Nu,t),this}appendField(e,t,r){const i=t.ElementCount*(0,n.n1)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},86799:function(e,t,r){r.d(t,{q:function(){return n}});var i=r(29337);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i.H`void forwardLinearDepth() {}`)}},61606:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(29337);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},114:function(e,t,r){r.d(t,{Vv:function(){return l},p2:function(){return s}});var i=r(27092),n=r(30348),o=r(42325),a=r(29337);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=a.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=a.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.sliceHighlightDisabled?a.H`#define highlightSlice(_color_, _pos_) (_color_)`:a.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=a.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function l(e,t,r,a){t.slicePlaneEnabled&&((0,i.pC)(r)?(a?((0,n.f)(c,r.origin,a),e.setUniform3fv("slicePlaneOrigin",c)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.Z),e.setUniform3fv("slicePlaneBasis2",o.Z),e.setUniform3fv("slicePlaneOrigin",o.Z)))}const c=(0,o.c)()},36103:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(29337);function n(e,t){t.linearDepth?e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},35549:function(e,t,r){r.d(t,{f:function(){return s}});var i=r(42325),n=r(88454),o=r(29337),a=r(27201);function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(n.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?o.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){class t{}function r(e,t){(0,a.po)(t,l,c,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",c)}e.Uniforms=t,e.bindCustomOrigin=r}(s||(s={}));const l=(0,i.c)(),c=(0,i.c)()},18635:function(e,t,r){r.d(t,{O:function(){return o}});var i=r(29337);function n(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},31801:function(e,t,r){r.d(t,{f:function(){return n}});var i=r(29337);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},43485:function(e,t,r){r.d(t,{R:function(){return o}});var i=r(29337);function n(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},10110:function(e,t,r){r.d(t,{D:function(){return n}});var i=r(29337);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.H`void forwardTextureCoordinates() {}`)}},6903:function(e,t,r){r.d(t,{c:function(){return n}});var i=r(29337);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},71717:function(e,t,r){r.d(t,{B:function(){return d}});var i=r(18635),n=r(88250),o=r(44858),a=r(42325),s=r(31801),l=r(88454),c=r(29337);function u(e,t){e.include(s.f),e.vertex.include(l.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(c.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(c.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(i.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(c.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(c.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?c.H`normalize(vPositionWorldCameraRelative);`:c.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(c.H`void forwardNormal() {}`)}!function(e){class t{constructor(){this.worldFromModel_RS=(0,n.c)(),this.worldFromModel_TH=(0,a.c)(),this.worldFromModel_TL=(0,a.c)()}}e.ModelTransform=t;class r{constructor(){this.worldFromView_TH=(0,a.c)(),this.worldFromView_TL=(0,a.c)(),this.viewFromCameraRelative_RS=(0,n.c)(),this.projFromView=(0,o.c)()}}function i(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)}function s(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}e.ViewProjectionTransform=r,e.bindModelTransform=i,e.bindViewProjTransform=s}(u||(u={})),function(e){function t(e,t){e.setUniformMatrix4fv("viewNormal",t)}e.bindUniforms=t}(d||(d={}))},37391:function(e,t,r){r.d(t,{i:function(){return a}});var i=r(10110),n=r(29337);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function a(e,t){e.include(i.D,t),e.fragment.code.add(n.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},82944:function(e,t,r){r.d(t,{LC:function(){return o},Mo:function(){return a}});var i=r(29337);r(79429);function n(e){e.vertex.code.add(i.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(i.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(i.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(i.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(i.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function o(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function a(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}function s(e,t,r,i=l){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const l={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},9103:function(e,t,r){r.d(t,{s:function(){return p}});var i=r(114),n=r(36103),o=r(18635),a=r(10110),s=r(71717),l=r(49206),c=r(29337);function u(e,t){e.fragment.include(l.n),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(c.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(c.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var d=r(21186),h=r(47259),f=r(97506);function p(e,t){const r=e.vertex.code,l=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.w,{linearDepth:!0}),e.include(a.D,t),e.include(h.kl,t),e.include(u,t),e.include(i.p2,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(c.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(f.sj,t),l.add(c.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.w,{linearDepth:!1}),e.include(o.O,t),e.include(s.B,t),e.include(a.D,t),e.include(h.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(c.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?c.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.p2,t),e.include(f.sj,t),l.add(c.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?c.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.w,{linearDepth:!1}),e.include(a.D,t),e.include(h.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(c.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.p2,t),e.include(f.sj,t),e.include(d.bA),l.add(c.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},21186:function(e,t,r){r.d(t,{bA:function(){return s},wW:function(){return l}});var i=r(56144),n=r(29337);const o=(0,i.f)(1,1,0,1),a=(0,i.f)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",a),e.fragment.code.add(n.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function l(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},65096:function(e,t,r){r.d(t,{S:function(){return o}});var i=r(49206),n=r(29337);function o(e){e.include(i.n),e.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},20409:function(e,t,r){r.d(t,{Q:function(){return o}});var i=r(37391),n=r(29337);function o(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(i.i,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(n.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},80580:function(e,t,r){r.d(t,{K:function(){return n}});var i=r(29337);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},7424:function(e,t,r){r.d(t,{X:function(){return u}});var i=r(29337);function n(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var o=r(80580);function a(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(45932),l=r(84563),c=r(89370);function u(e,t){const r=e.fragment;e.include(a),e.include(o.K,t),0!==t.pbrMode&&e.include(s.T,t),e.include(n,t),t.receiveShadows&&e.include(c.hX,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(l.e),r.code.add(i.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(i.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?i.H`normalize(vPosWorld)`:i.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(i.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(i.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(i.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(i.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(i.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(i.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},90325:function(e,t,r){r.d(t,{l:function(){return n},p:function(){return o}});var i=r(29337);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},10283:function(e,t,r){r.d(t,{k:function(){return n}});var i=r(29337);function n(e,t){const r=e.fragment;r.code.add(i.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},45932:function(e,t,r){r.d(t,{T:function(){return a}});var i=r(29337);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(84563);function a(e,t){const r=e.fragment.code;e.include(o.e),3===t.pbrMode||4===t.pbrMode?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},61659:function(e,t,r){r.d(t,{jV:function(){return a},nW:function(){return s}});var i=r(98586),n=r(37391),o=r(29337);(0,i.f)(0,.6,.2);function a(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(n.i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o.H`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o.H`float getBakedOcclusion() { return 1.0; }`),r.code.add(o.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},84563:function(e,t,r){r.d(t,{e:function(){return n}});var i=r(29337);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},89370:function(e,t,r){r.d(t,{hX:function(){return o},vL:function(){return a}});var i=r(49206),n=r(29337);function o(e){e.fragment.include(i.n),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function a(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},47259:function(e,t,r){r.d(t,{kl:function(){return n},uj:function(){return a}});var i=r(29337);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 vvColor() { return vec4(1.0); }`)}function o(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function a(e,t){o(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},97506:function(e,t,r){r.d(t,{F:function(){return n},bf:function(){return o},sj:function(){return a}});var i=r(29337);const n=.1,o=.001;function a(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(o)}) { discard; } }
      `);break;case 1:r.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},88454:function(e,t,r){r.d(t,{$:function(){return o},I:function(){return a}});var i=r(35425),n=r(29337);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function a(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},1162:function(e,t,r){r.d(t,{a:function(){return o}});var i=r(29337),n=r(56770);function o(e,t){const r=i.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;(0,n.CG)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},94779:function(e,t,r){r.d(t,{y:function(){return o}});var i=r(29337);function n(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function o(e){e.include(n),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},49206:function(e,t,r){r.d(t,{n:function(){return n}});var i=r(29337);function n(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},36656:function(e,t,r){r.d(t,{kG:function(){return a}});var i=r(87441);const n=i.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&n.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends o{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new u,this.varyings=new d,this.extensions=new h,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?m:p,l=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class l{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends o{constructor(){super(...arguments),this.uniforms=new s,this.code=new l,this.constants=new f}get builder(){return this}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f.numberToFloatStr(r);break;case"int":i=f.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])},                            ${f.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])},                             ${f.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>f.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const p="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},29337:function(e,t,r){function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,{H:function(){return i}}),function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r}(i||(i={}))},20482:function(e,t,r){r.d(t,{$L:function(){return s},$x:function(){return d},IB:function(){return a},je:function(){return u},ve:function(){return l},wu:function(){return n}});var i=r(46982);const n=(0,i.wK)(770,1,771,771),o=(0,i["if"])(1,1),a=(0,i["if"])(0,771);function s(e){return 2===e?null:1===e?a:o}const l=5e5,c={factor:-1,units:-2};function u(e){return e?c:null}function d(e){return 3===e||2===e?513:515}},59778:function(e,t,r){r.d(t,{hu:function(){return o}});r(21703),r(14937),r(11197),r(41666),r(36122),r(42325),r(53440);var i=r(56144);(0,i.c)();class n{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack,new n(t)}}},79429:function(e,t,r){r.d(t,{bj:function(){return I},FZ:function(){return E},Uf:function(){return H},Bw:function(){return x},LO:function(){return D},Hx:function(){return F}});var i=r(14937),n=r(27092),o=r(30348),a=r(42325),s=r(43429);function l(e){return Math.abs(e*e*e)}function c(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return f.scale=Math.min(i.divisor/(t-i.offset),1),f.factor=l(e),f.minPixelSize=i.minPixelSize,f.paddingPixels=n,f}function u(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function d(e,t){return Math.max((0,i.t7)(e*t.scale,e,t.factor),u(e,t))}function h(e,t,r,i){return d(e,c(t,r,i))}(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const f={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var p=r(59778),m=(r(48675),r(3462),r(11197),r(44858));r(27201);function v(e){return!!(0,n.pC)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),(0,m.c)();const g=(0,s.Ue)();function x(e,t,r,i,n,o,a){if(!v(t))if(e.boundingInfo){(0,p.hu)(0===e.primitiveType);const t=r.tolerance;_(e.boundingInfo,i,n,t,o,a)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");y(i,n,0,t.length/3,t,r,void 0,o,a)}}const b=(0,a.c)();function _(e,t,r,i,o,a){if((0,n.Wi)(e))return;const l=A(t,r,b);if((0,s.op)(g,e.getBBMin()),(0,s.Tn)(g,e.getBBMax()),(0,n.pC)(o)&&o.applyToAabb(g),P(g,t,l,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>L){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&_(n[e],t,r,i,o,a);return}}y(t,r,0,c,s,l,n,o,a)}}const T=(0,a.c)();function y(e,t,r,i,o,a,s,l,c){if(s)return M(e,t,r,i,o,a,s,l,c);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],p=e[2],m=t[0]-h,v=t[1]-f,g=t[2]-p;for(let x=r,b=3*r;x<i;++x){let e=d*o[b++],t=u[e++],r=u[e++],i=u[e];e=d*o[b++];let a=u[e++],s=u[e++],_=u[e];e=d*o[b++];let y=u[e++],M=u[e++],S=u[e];(0,n.pC)(l)&&([t,r,i]=l.applyToVertex(t,r,i,x),[a,s,_]=l.applyToVertex(a,s,_,x),[y,M,S]=l.applyToVertex(y,M,S,x));const w=a-t,A=s-r,P=_-i,O=y-t,F=M-r,I=S-i,H=v*I-F*g,D=g*O-I*m,z=m*F-O*v,E=w*H+A*D+P*z;if(Math.abs(E)<=Number.EPSILON)continue;const L=h-t,R=f-r,N=p-i,B=L*H+R*D+N*z;if(E>0){if(B<0||B>E)continue}else if(B>0||B<E)continue;const V=R*P-A*N,W=N*w-P*L,U=L*A-w*R,G=m*V+v*W+g*U;if(E>0){if(G<0||B+G>E)continue}else if(G>0||B+G<E)continue;const k=(O*V+F*W+I*U)/E;k>=0&&c(k,C(w,A,P,O,F,I,T),x,!1)}}function M(e,t,r,i,o,a,s,l,c){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],p=e[2],m=t[0]-h,v=t[1]-f,g=t[2]-p;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=d*o[t++],i=u[r++],a=u[r++],b=u[r];r=d*o[t++];let _=u[r++],y=u[r++],M=u[r];r=d*o[t];let S=u[r++],w=u[r++],A=u[r];(0,n.pC)(l)&&([i,a,b]=l.applyToVertex(i,a,b,x),[_,y,M]=l.applyToVertex(_,y,M,x),[S,w,A]=l.applyToVertex(S,w,A,x));const P=_-i,O=y-a,F=M-b,I=S-i,H=w-a,D=A-b,z=v*D-H*g,E=g*I-D*m,L=m*H-I*v,R=P*z+O*E+F*L;if(Math.abs(R)<=Number.EPSILON)continue;const N=h-i,B=f-a,V=p-b,W=N*z+B*E+V*L;if(R>0){if(W<0||W>R)continue}else if(W>0||W<R)continue;const U=B*F-O*V,G=V*P-F*N,k=N*O-P*B,q=m*U+v*G+g*k;if(R>0){if(q<0||W+q>R)continue}else if(q>0||W+q<R)continue;const $=(I*U+H*G+D*k)/R;$>=0&&c($,C(P,O,F,I,H,D,T),e,!1)}}const S=(0,a.c)(),w=(0,a.c)();function C(e,t,r,i,n,a,s){return(0,o.s)(S,e,t,r),(0,o.s)(w,i,n,a),(0,o.c)(s,S,w),(0,o.n)(s,s),s}function A(e,t,r){return(0,o.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function P(e,t,r,i){return O(e,t,r,i,1/0)}function O(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<n)}function F(e,t,r,n,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=h(a,n,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function I(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function H(e,t){const r=t?H(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=z(t)),null==t&&i in r||(r[i]=t)}return r}function D(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function z(e){const t=[];return e.forEach((e=>t.push(e))),t}const E={multiply:1,ignore:2,replace:3,tint:4},L=1e3},29168:function(e,t,r){r.d(t,{Z:function(){return c}});r(21703);var i=r(14937),n=r(27092),o=r(56770),a=r(28383),s=r(68412);const l=4;class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(a._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||l,this._descriptor.height=this._descriptor.height||l);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;c._validateTexture(this._context,a),r.pixelStorei(r.UNPACK_ALIGNMENT,a.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);const s=a.pixelFormat;let d=a.internalFormat?a.internalFormat:this._deriveInternalFormat(s,a.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,n=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,n=e.videoHeight),a.width&&a.height,r.texImage2D(t,0,d,s,a.dataType,e),(0,o.zu)(r),a.hasMipmap&&this.generateMipmap(),void 0===a.width&&(a.width=i),void 0===a.height&&(a.height=n)}else{null!=a.width&&a.height,r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8);let i=a.width,l=a.height;if(u(e)){const n=Math.round(Math.log(Math.max(i,l))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&n===e.levels.length;for(let o=0;;++o){const n=e.levels[Math.min(o,e.levels.length-1)];if(r.compressedTexImage2D(t,o,d,i,l,0,n),1===i&&1===l||!a.hasMipmap)break;i=Math.max(1,i>>1),l=Math.max(1,l>>1)}}else if((0,n.pC)(e))r.texImage2D(t,0,d,i,l,0,s,a.dataType,e),(0,o.zu)(r),a.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,d,i,l,0,s,a.dataType,null),(0,o.zu)(r),(1!==i||1!==l)&&a.hasMipmap;++e)i=Math.max(1,i>>1),l=Math.max(1,l>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,o.zu)(r),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,n,o,a=3553){this._glName;const s=this._context.gl,l=this._descriptor,u=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);t<0||r<0||i>l.width||n>l.height||t+i>l.width||l.height,s.pixelStorei(s.UNPACK_ALIGNMENT,l.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?s.texSubImage2D(a,e,t,r,l.pixelFormat,l.dataType,o):s.texSubImage2D(a,e,t,r,i,n,l.pixelFormat,l.dataType,o),this._context.bindTexture(u,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){t.width<0||t.height;const r=(0,i.wt)(t.width)&&(0,i.wt)(t.height);(0,s.Z)(e.gl)||r||("number"==typeof t.wrapMode?t.wrapMode:33071===t.wrapMode.s&&t.wrapMode.t,t.hasMipmap)}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}function u(e){return(0,n.pC)(e)&&"type"in e&&"compressed"===e.type}c.TEXTURE_UNIT_FOR_UPDATES=0},68412:function(e,t,r){function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,{Z:function(){return i}})},56770:function(e,t,r){r.d(t,{CG:function(){return u},hZ:function(){return c},zu:function(){return d}});r(21703);var i=r(25585),n=r(35425),o=r(87441);const a=o.Z.getLogger("esri/views/webgl");function s(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const l=!!(0,n.Z)("enable-feature:webgl-debug");function c(){return l}function u(){return l}function d(e){if(c()){const t=e.getError();if(t){const r=s(e,t),n=(new Error).stack;a.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:n}))}}}},27201:function(e,t,r){r.d(t,{LF:function(){return i},po:function(){return n}});r(48675),r(3462);function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)o[0]=e[s],i(o,a,1),t[s]=a[0],r[s]=a[1]}const o=new Float64Array(1),a=new Float32Array(2)},28383:function(e,t,r){r.d(t,{Ld:function(){return i},Lu:function(){return o},_g:function(){return n}});const i=33984;var n;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(n||(n={}));const o=33306},46982:function(e,t,r){function i(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function n(e,t,r,i,n=32774,o=32774,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:o,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}r.d(t,{BK:function(){return c},LZ:function(){return l},if:function(){return i},jp:function(){return B},sm:function(){return x},wK:function(){return n},zp:function(){return s}});const o={face:1029,mode:2305},a={face:1028,mode:2305},s=e=>2===e?o:1===e?a:null,l={zNear:0,zFar:1},c={r:!0,g:!0,b:!0,a:!0};function u(e){return T.intern(e)}function d(e){return M.intern(e)}function h(e){return w.intern(e)}function f(e){return A.intern(e)}function p(e){return O.intern(e)}function m(e){return I.intern(e)}function v(e){return D.intern(e)}function g(e){return E.intern(e)}function x(e){return R.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function _(e){return"["+e.join(",")+"]"}const T=new b(y,(e=>({__tag:"Blending",...e})));function y(e){return e?_([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new b(S,(e=>({__tag:"Culling",...e})));function S(e){return e?_([e.face,e.mode]):null}const w=new b(C,(e=>({__tag:"PolygonOffset",...e})));function C(e){return e?_([e.factor,e.units]):null}const A=new b(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?_([e.func]):null}const O=new b(F,(e=>({__tag:"StencilTest",...e})));function F(e){return e?_([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const I=new b(H,(e=>({__tag:"DepthWrite",...e})));function H(e){return e?_([e.zNear,e.zFar]):null}const D=new b(z,(e=>({__tag:"ColorWrite",...e})));function z(e){return e?_([e.r,e.g,e.b,e.a]):null}const E=new b(L,(e=>({__tag:"StencilWrite",...e})));function L(e){return e?_([e.mask]):null}const R=new b(N,(e=>({blending:u(e.blending),culling:d(e.culling),polygonOffset:h(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:m(e.depthWrite),colorWrite:v(e.colorWrite),stencilWrite:g(e.stencilWrite)})));function N(e){return e?_([y(e.blending),S(e.culling),C(e.polygonOffset),P(e.depthTest),F(e.stencilTest),H(e.depthWrite),z(e.colorWrite),L(e.stencilWrite)]):null}class B{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this.setBlending(e.blending),this.setCulling(e.culling),this.setPolygonOffset(e.polygonOffset),this.setDepthTest(e.depthTest),this.setStencilTest(e.stencilTest),this.setDepthWrite(e.depthWrite),this.setColorWrite(e.colorWrite),this.setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(e){this._blending=this.setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(e){this._culling=this.setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(e){this._polygonOffset=this.setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(e){this._depthTest=this.setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(e){this._stencilTest=this.setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(e){this._depthWrite=this.setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(e){this._colorWrite=this.setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(e){this._stencilWrite=this.setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);