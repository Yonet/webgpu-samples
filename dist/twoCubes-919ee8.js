(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,n,r){"use strict";var e=function(t,n,r,e){return new(r||(r=Promise))((function(a,u){function o(t){try{c(e.next(t))}catch(t){u(t)}}function i(t){try{c(e.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,i)}c((e=e.apply(t,n||[])).next())}))};let a=void 0;n.a=function(){return e(this,void 0,void 0,(function*(){if(void 0!==a)return a;const t=yield import("https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js");return a=yield t.default(),a}))}},1:function(t,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return i}));var e=function(t,n,r,e){return new(r||(r=Promise))((function(a,u){function o(t){try{c(e.next(t))}catch(t){u(t)}}function i(t){try{c(e.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,i)}c((e=e.apply(t,n||[])).next())}))};let a=!1;function u(){return navigator.gpu||(document.getElementById("not-supported").style.display="block",a||alert("WebGPU not supported! Please visit webgpu.io to see the current implementation status."),a=!0),!!navigator.gpu}function o(t,n,r){return e(this,void 0,void 0,(function*(){const e=document.createElement("img");e.src=n,yield e.decode();const a=document.createElement("canvas");a.width=e.width,a.height=e.height;const u=a.getContext("2d");u.translate(0,e.height),u.scale(1,-1),u.drawImage(e,0,0,e.width,e.height);const o=u.getImageData(0,0,e.width,e.height);let i=null;const c=256*Math.ceil(4*e.width/256);if(c==4*e.width)i=o.data;else{i=new Uint8Array(c*e.height);let t=0;for(let n=0;n<e.height;++n)for(let r=0;r<e.width;++r){let e=4*r+n*c;i[e]=o.data[t],i[e+1]=o.data[t+1],i[e+2]=o.data[t+2],i[e+3]=o.data[t+3],t+=4}}const f=t.createTexture({size:{width:e.width,height:e.height,depth:1},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|r}),[s,h]=t.createBufferMapped({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});new Uint8Array(h).set(i),s.unmap();const d=t.createCommandEncoder({});return d.copyBufferToTexture({buffer:s,bytesPerRow:c},{texture:f},{width:e.width,height:e.height,depth:1}),t.defaultQueue.submit([d.finish()]),s.destroy(),f}))}function i(t,n,r,e,a){const[u,o]=t.createBufferMapped({size:e.byteLength,usage:GPUBufferUsage.COPY_SRC});return new e.constructor(o).set(e),u.unmap(),(a=a||t.createCommandEncoder()).copyBufferToBuffer(u,0,n,r,e.byteLength),{commandEncoder:a,uploadBuffer:u}}},12:function(t,n,r){"use strict";r.d(n,"e",(function(){return e})),r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return i}));const e=40,a=0,u=16,o=32,i=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},13:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return a}));var e={};r.r(e),r.d(e,"create",(function(){return c})),r.d(e,"clone",(function(){return f})),r.d(e,"copy",(function(){return s})),r.d(e,"fromValues",(function(){return h})),r.d(e,"set",(function(){return d})),r.d(e,"identity",(function(){return l})),r.d(e,"transpose",(function(){return M})),r.d(e,"invert",(function(){return m})),r.d(e,"adjoint",(function(){return v})),r.d(e,"determinant",(function(){return b})),r.d(e,"multiply",(function(){return p})),r.d(e,"translate",(function(){return g})),r.d(e,"scale",(function(){return y})),r.d(e,"rotate",(function(){return w})),r.d(e,"rotateX",(function(){return x})),r.d(e,"rotateY",(function(){return P})),r.d(e,"rotateZ",(function(){return S})),r.d(e,"fromTranslation",(function(){return T})),r.d(e,"fromScaling",(function(){return B})),r.d(e,"fromRotation",(function(){return C})),r.d(e,"fromXRotation",(function(){return U})),r.d(e,"fromYRotation",(function(){return q})),r.d(e,"fromZRotation",(function(){return L})),r.d(e,"fromRotationTranslation",(function(){return A})),r.d(e,"fromQuat2",(function(){return G})),r.d(e,"getTranslation",(function(){return V})),r.d(e,"getScaling",(function(){return R})),r.d(e,"getRotation",(function(){return E})),r.d(e,"fromRotationTranslationScale",(function(){return O})),r.d(e,"fromRotationTranslationScaleOrigin",(function(){return z})),r.d(e,"fromQuat",(function(){return D})),r.d(e,"frustum",(function(){return I})),r.d(e,"perspective",(function(){return F})),r.d(e,"perspectiveFromFieldOfView",(function(){return Y})),r.d(e,"ortho",(function(){return j})),r.d(e,"lookAt",(function(){return _})),r.d(e,"targetTo",(function(){return k})),r.d(e,"str",(function(){return Q})),r.d(e,"frob",(function(){return X})),r.d(e,"add",(function(){return Z})),r.d(e,"subtract",(function(){return J})),r.d(e,"multiplyScalar",(function(){return N})),r.d(e,"multiplyScalarAndAdd",(function(){return W})),r.d(e,"exactEquals",(function(){return H})),r.d(e,"equals",(function(){return K})),r.d(e,"mul",(function(){return $})),r.d(e,"sub",(function(){return tt}));var a={};r.r(a),r.d(a,"create",(function(){return nt})),r.d(a,"clone",(function(){return rt})),r.d(a,"length",(function(){return et})),r.d(a,"fromValues",(function(){return at})),r.d(a,"copy",(function(){return ut})),r.d(a,"set",(function(){return ot})),r.d(a,"add",(function(){return it})),r.d(a,"subtract",(function(){return ct})),r.d(a,"multiply",(function(){return ft})),r.d(a,"divide",(function(){return st})),r.d(a,"ceil",(function(){return ht})),r.d(a,"floor",(function(){return dt})),r.d(a,"min",(function(){return lt})),r.d(a,"max",(function(){return Mt})),r.d(a,"round",(function(){return mt})),r.d(a,"scale",(function(){return vt})),r.d(a,"scaleAndAdd",(function(){return bt})),r.d(a,"distance",(function(){return pt})),r.d(a,"squaredDistance",(function(){return gt})),r.d(a,"squaredLength",(function(){return yt})),r.d(a,"negate",(function(){return wt})),r.d(a,"inverse",(function(){return xt})),r.d(a,"normalize",(function(){return Pt})),r.d(a,"dot",(function(){return St})),r.d(a,"cross",(function(){return Tt})),r.d(a,"lerp",(function(){return Bt})),r.d(a,"hermite",(function(){return Ct})),r.d(a,"bezier",(function(){return Ut})),r.d(a,"random",(function(){return qt})),r.d(a,"transformMat4",(function(){return Lt})),r.d(a,"transformMat3",(function(){return At})),r.d(a,"transformQuat",(function(){return Gt})),r.d(a,"rotateX",(function(){return Vt})),r.d(a,"rotateY",(function(){return Rt})),r.d(a,"rotateZ",(function(){return Et})),r.d(a,"angle",(function(){return Ot})),r.d(a,"zero",(function(){return zt})),r.d(a,"str",(function(){return Dt})),r.d(a,"exactEquals",(function(){return It})),r.d(a,"equals",(function(){return Ft})),r.d(a,"sub",(function(){return jt})),r.d(a,"mul",(function(){return _t})),r.d(a,"div",(function(){return kt})),r.d(a,"dist",(function(){return Qt})),r.d(a,"sqrDist",(function(){return Xt})),r.d(a,"len",(function(){return Zt})),r.d(a,"sqrLen",(function(){return Jt})),r.d(a,"forEach",(function(){return Nt}));var u=1e-6,o="undefined"!=typeof Float32Array?Float32Array:Array,i=Math.random;Math.PI;function c(){var t=new o(16);return o!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function f(t){var n=new o(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function h(t,n,r,e,a,u,i,c,f,s,h,d,l,M,m,v){var b=new o(16);return b[0]=t,b[1]=n,b[2]=r,b[3]=e,b[4]=a,b[5]=u,b[6]=i,b[7]=c,b[8]=f,b[9]=s,b[10]=h,b[11]=d,b[12]=l,b[13]=M,b[14]=m,b[15]=v,b}function d(t,n,r,e,a,u,o,i,c,f,s,h,d,l,M,m,v){return t[0]=n,t[1]=r,t[2]=e,t[3]=a,t[4]=u,t[5]=o,t[6]=i,t[7]=c,t[8]=f,t[9]=s,t[10]=h,t[11]=d,t[12]=l,t[13]=M,t[14]=m,t[15]=v,t}function l(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function M(t,n){if(t===n){var r=n[1],e=n[2],a=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=u,t[11]=n[14],t[12]=a,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function m(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],d=n[10],l=n[11],M=n[12],m=n[13],v=n[14],b=n[15],p=r*i-e*o,g=r*c-a*o,y=r*f-u*o,w=e*c-a*i,x=e*f-u*i,P=a*f-u*c,S=s*m-h*M,T=s*v-d*M,B=s*b-l*M,C=h*v-d*m,U=h*b-l*m,q=d*b-l*v,L=p*q-g*U+y*C+w*B-x*T+P*S;return L?(L=1/L,t[0]=(i*q-c*U+f*C)*L,t[1]=(a*U-e*q-u*C)*L,t[2]=(m*P-v*x+b*w)*L,t[3]=(d*x-h*P-l*w)*L,t[4]=(c*B-o*q-f*T)*L,t[5]=(r*q-a*B+u*T)*L,t[6]=(v*y-M*P-b*g)*L,t[7]=(s*P-d*y+l*g)*L,t[8]=(o*U-i*B+f*S)*L,t[9]=(e*B-r*U-u*S)*L,t[10]=(M*x-m*y+b*p)*L,t[11]=(h*y-s*x-l*p)*L,t[12]=(i*T-o*C-c*S)*L,t[13]=(r*C-e*T+a*S)*L,t[14]=(m*g-M*w-v*p)*L,t[15]=(s*w-h*g+d*p)*L,t):null}function v(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],d=n[10],l=n[11],M=n[12],m=n[13],v=n[14],b=n[15];return t[0]=i*(d*b-l*v)-h*(c*b-f*v)+m*(c*l-f*d),t[1]=-(e*(d*b-l*v)-h*(a*b-u*v)+m*(a*l-u*d)),t[2]=e*(c*b-f*v)-i*(a*b-u*v)+m*(a*f-u*c),t[3]=-(e*(c*l-f*d)-i*(a*l-u*d)+h*(a*f-u*c)),t[4]=-(o*(d*b-l*v)-s*(c*b-f*v)+M*(c*l-f*d)),t[5]=r*(d*b-l*v)-s*(a*b-u*v)+M*(a*l-u*d),t[6]=-(r*(c*b-f*v)-o*(a*b-u*v)+M*(a*f-u*c)),t[7]=r*(c*l-f*d)-o*(a*l-u*d)+s*(a*f-u*c),t[8]=o*(h*b-l*m)-s*(i*b-f*m)+M*(i*l-f*h),t[9]=-(r*(h*b-l*m)-s*(e*b-u*m)+M*(e*l-u*h)),t[10]=r*(i*b-f*m)-o*(e*b-u*m)+M*(e*f-u*i),t[11]=-(r*(i*l-f*h)-o*(e*l-u*h)+s*(e*f-u*i)),t[12]=-(o*(h*v-d*m)-s*(i*v-c*m)+M*(i*d-c*h)),t[13]=r*(h*v-d*m)-s*(e*v-a*m)+M*(e*d-a*h),t[14]=-(r*(i*v-c*m)-o*(e*v-a*m)+M*(e*c-a*i)),t[15]=r*(i*d-c*h)-o*(e*d-a*h)+s*(e*c-a*i),t}function b(t){var n=t[0],r=t[1],e=t[2],a=t[3],u=t[4],o=t[5],i=t[6],c=t[7],f=t[8],s=t[9],h=t[10],d=t[11],l=t[12],M=t[13],m=t[14],v=t[15];return(n*o-r*u)*(h*v-d*m)-(n*i-e*u)*(s*v-d*M)+(n*c-a*u)*(s*m-h*M)+(r*i-e*o)*(f*v-d*l)-(r*c-a*o)*(f*m-h*l)+(e*c-a*i)*(f*M-s*l)}function p(t,n,r){var e=n[0],a=n[1],u=n[2],o=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],d=n[9],l=n[10],M=n[11],m=n[12],v=n[13],b=n[14],p=n[15],g=r[0],y=r[1],w=r[2],x=r[3];return t[0]=g*e+y*i+w*h+x*m,t[1]=g*a+y*c+w*d+x*v,t[2]=g*u+y*f+w*l+x*b,t[3]=g*o+y*s+w*M+x*p,g=r[4],y=r[5],w=r[6],x=r[7],t[4]=g*e+y*i+w*h+x*m,t[5]=g*a+y*c+w*d+x*v,t[6]=g*u+y*f+w*l+x*b,t[7]=g*o+y*s+w*M+x*p,g=r[8],y=r[9],w=r[10],x=r[11],t[8]=g*e+y*i+w*h+x*m,t[9]=g*a+y*c+w*d+x*v,t[10]=g*u+y*f+w*l+x*b,t[11]=g*o+y*s+w*M+x*p,g=r[12],y=r[13],w=r[14],x=r[15],t[12]=g*e+y*i+w*h+x*m,t[13]=g*a+y*c+w*d+x*v,t[14]=g*u+y*f+w*l+x*b,t[15]=g*o+y*s+w*M+x*p,t}function g(t,n,r){var e,a,u,o,i,c,f,s,h,d,l,M,m=r[0],v=r[1],b=r[2];return n===t?(t[12]=n[0]*m+n[4]*v+n[8]*b+n[12],t[13]=n[1]*m+n[5]*v+n[9]*b+n[13],t[14]=n[2]*m+n[6]*v+n[10]*b+n[14],t[15]=n[3]*m+n[7]*v+n[11]*b+n[15]):(e=n[0],a=n[1],u=n[2],o=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],d=n[9],l=n[10],M=n[11],t[0]=e,t[1]=a,t[2]=u,t[3]=o,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=h,t[9]=d,t[10]=l,t[11]=M,t[12]=e*m+i*v+h*b+n[12],t[13]=a*m+c*v+d*b+n[13],t[14]=u*m+f*v+l*b+n[14],t[15]=o*m+s*v+M*b+n[15]),t}function y(t,n,r){var e=r[0],a=r[1],u=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function w(t,n,r,e){var a,o,i,c,f,s,h,d,l,M,m,v,b,p,g,y,w,x,P,S,T,B,C,U,q=e[0],L=e[1],A=e[2],G=Math.hypot(q,L,A);return G<u?null:(q*=G=1/G,L*=G,A*=G,a=Math.sin(r),i=1-(o=Math.cos(r)),c=n[0],f=n[1],s=n[2],h=n[3],d=n[4],l=n[5],M=n[6],m=n[7],v=n[8],b=n[9],p=n[10],g=n[11],y=q*q*i+o,w=L*q*i+A*a,x=A*q*i-L*a,P=q*L*i-A*a,S=L*L*i+o,T=A*L*i+q*a,B=q*A*i+L*a,C=L*A*i-q*a,U=A*A*i+o,t[0]=c*y+d*w+v*x,t[1]=f*y+l*w+b*x,t[2]=s*y+M*w+p*x,t[3]=h*y+m*w+g*x,t[4]=c*P+d*S+v*T,t[5]=f*P+l*S+b*T,t[6]=s*P+M*S+p*T,t[7]=h*P+m*S+g*T,t[8]=c*B+d*C+v*U,t[9]=f*B+l*C+b*U,t[10]=s*B+M*C+p*U,t[11]=h*B+m*C+g*U,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function x(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[4],o=n[5],i=n[6],c=n[7],f=n[8],s=n[9],h=n[10],d=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*a+f*e,t[5]=o*a+s*e,t[6]=i*a+h*e,t[7]=c*a+d*e,t[8]=f*a-u*e,t[9]=s*a-o*e,t[10]=h*a-i*e,t[11]=d*a-c*e,t}function P(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[0],o=n[1],i=n[2],c=n[3],f=n[8],s=n[9],h=n[10],d=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*a-f*e,t[1]=o*a-s*e,t[2]=i*a-h*e,t[3]=c*a-d*e,t[8]=u*e+f*a,t[9]=o*e+s*a,t[10]=i*e+h*a,t[11]=c*e+d*a,t}function S(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[0],o=n[1],i=n[2],c=n[3],f=n[4],s=n[5],h=n[6],d=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*a+f*e,t[1]=o*a+s*e,t[2]=i*a+h*e,t[3]=c*a+d*e,t[4]=f*a-u*e,t[5]=s*a-o*e,t[6]=h*a-i*e,t[7]=d*a-c*e,t}function T(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function B(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function C(t,n,r){var e,a,o,i=r[0],c=r[1],f=r[2],s=Math.hypot(i,c,f);return s<u?null:(i*=s=1/s,c*=s,f*=s,e=Math.sin(n),o=1-(a=Math.cos(n)),t[0]=i*i*o+a,t[1]=c*i*o+f*e,t[2]=f*i*o-c*e,t[3]=0,t[4]=i*c*o-f*e,t[5]=c*c*o+a,t[6]=f*c*o+i*e,t[7]=0,t[8]=i*f*o+c*e,t[9]=c*f*o-i*e,t[10]=f*f*o+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function U(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function q(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(t,n,r){var e=n[0],a=n[1],u=n[2],o=n[3],i=e+e,c=a+a,f=u+u,s=e*i,h=e*c,d=e*f,l=a*c,M=a*f,m=u*f,v=o*i,b=o*c,p=o*f;return t[0]=1-(l+m),t[1]=h+p,t[2]=d-b,t[3]=0,t[4]=h-p,t[5]=1-(s+m),t[6]=M+v,t[7]=0,t[8]=d+b,t[9]=M-v,t[10]=1-(s+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function G(t,n){var r=new o(3),e=-n[0],a=-n[1],u=-n[2],i=n[3],c=n[4],f=n[5],s=n[6],h=n[7],d=e*e+a*a+u*u+i*i;return d>0?(r[0]=2*(c*i+h*e+f*u-s*a)/d,r[1]=2*(f*i+h*a+s*e-c*u)/d,r[2]=2*(s*i+h*u+c*a-f*e)/d):(r[0]=2*(c*i+h*e+f*u-s*a),r[1]=2*(f*i+h*a+s*e-c*u),r[2]=2*(s*i+h*u+c*a-f*e)),A(t,n,r),t}function V(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function R(t,n){var r=n[0],e=n[1],a=n[2],u=n[4],o=n[5],i=n[6],c=n[8],f=n[9],s=n[10];return t[0]=Math.hypot(r,e,a),t[1]=Math.hypot(u,o,i),t[2]=Math.hypot(c,f,s),t}function E(t,n){var r=new o(3);R(r,n);var e=1/r[0],a=1/r[1],u=1/r[2],i=n[0]*e,c=n[1]*a,f=n[2]*u,s=n[4]*e,h=n[5]*a,d=n[6]*u,l=n[8]*e,M=n[9]*a,m=n[10]*u,v=i+h+m,b=0;return v>0?(b=2*Math.sqrt(v+1),t[3]=.25*b,t[0]=(d-M)/b,t[1]=(l-f)/b,t[2]=(c-s)/b):i>h&&i>m?(b=2*Math.sqrt(1+i-h-m),t[3]=(d-M)/b,t[0]=.25*b,t[1]=(c+s)/b,t[2]=(l+f)/b):h>m?(b=2*Math.sqrt(1+h-i-m),t[3]=(l-f)/b,t[0]=(c+s)/b,t[1]=.25*b,t[2]=(d+M)/b):(b=2*Math.sqrt(1+m-i-h),t[3]=(c-s)/b,t[0]=(l+f)/b,t[1]=(d+M)/b,t[2]=.25*b),t}function O(t,n,r,e){var a=n[0],u=n[1],o=n[2],i=n[3],c=a+a,f=u+u,s=o+o,h=a*c,d=a*f,l=a*s,M=u*f,m=u*s,v=o*s,b=i*c,p=i*f,g=i*s,y=e[0],w=e[1],x=e[2];return t[0]=(1-(M+v))*y,t[1]=(d+g)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(d-g)*w,t[5]=(1-(h+v))*w,t[6]=(m+b)*w,t[7]=0,t[8]=(l+p)*x,t[9]=(m-b)*x,t[10]=(1-(h+M))*x,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function z(t,n,r,e,a){var u=n[0],o=n[1],i=n[2],c=n[3],f=u+u,s=o+o,h=i+i,d=u*f,l=u*s,M=u*h,m=o*s,v=o*h,b=i*h,p=c*f,g=c*s,y=c*h,w=e[0],x=e[1],P=e[2],S=a[0],T=a[1],B=a[2],C=(1-(m+b))*w,U=(l+y)*w,q=(M-g)*w,L=(l-y)*x,A=(1-(d+b))*x,G=(v+p)*x,V=(M+g)*P,R=(v-p)*P,E=(1-(d+m))*P;return t[0]=C,t[1]=U,t[2]=q,t[3]=0,t[4]=L,t[5]=A,t[6]=G,t[7]=0,t[8]=V,t[9]=R,t[10]=E,t[11]=0,t[12]=r[0]+S-(C*S+L*T+V*B),t[13]=r[1]+T-(U*S+A*T+R*B),t[14]=r[2]+B-(q*S+G*T+E*B),t[15]=1,t}function D(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=r+r,i=e+e,c=a+a,f=r*o,s=e*o,h=e*i,d=a*o,l=a*i,M=a*c,m=u*o,v=u*i,b=u*c;return t[0]=1-h-M,t[1]=s+b,t[2]=d-v,t[3]=0,t[4]=s-b,t[5]=1-f-M,t[6]=l+m,t[7]=0,t[8]=d+v,t[9]=l-m,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function I(t,n,r,e,a,u,o){var i=1/(r-n),c=1/(a-e),f=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(a+e)*c,t[10]=(o+u)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*f,t[15]=0,t}function F(t,n,r,e,a){var u,o=1/Math.tan(n/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(u=1/(e-a),t[10]=(a+e)*u,t[14]=2*a*e*u):(t[10]=-1,t[14]=-2*e),t}function Y(t,n,r,e){var a=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(a+u);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(o-i)*c*.5,t[9]=(a-u)*f*.5,t[10]=e/(r-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*r/(r-e),t[15]=0,t}function j(t,n,r,e,a,u,o){var i=1/(n-r),c=1/(e-a),f=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+e)*c,t[14]=(o+u)*f,t[15]=1,t}function _(t,n,r,e){var a,o,i,c,f,s,h,d,M,m,v=n[0],b=n[1],p=n[2],g=e[0],y=e[1],w=e[2],x=r[0],P=r[1],S=r[2];return Math.abs(v-x)<u&&Math.abs(b-P)<u&&Math.abs(p-S)<u?l(t):(h=v-x,d=b-P,M=p-S,a=y*(M*=m=1/Math.hypot(h,d,M))-w*(d*=m),o=w*(h*=m)-g*M,i=g*d-y*h,(m=Math.hypot(a,o,i))?(a*=m=1/m,o*=m,i*=m):(a=0,o=0,i=0),c=d*i-M*o,f=M*a-h*i,s=h*o-d*a,(m=Math.hypot(c,f,s))?(c*=m=1/m,f*=m,s*=m):(c=0,f=0,s=0),t[0]=a,t[1]=c,t[2]=h,t[3]=0,t[4]=o,t[5]=f,t[6]=d,t[7]=0,t[8]=i,t[9]=s,t[10]=M,t[11]=0,t[12]=-(a*v+o*b+i*p),t[13]=-(c*v+f*b+s*p),t[14]=-(h*v+d*b+M*p),t[15]=1,t)}function k(t,n,r,e){var a=n[0],u=n[1],o=n[2],i=e[0],c=e[1],f=e[2],s=a-r[0],h=u-r[1],d=o-r[2],l=s*s+h*h+d*d;l>0&&(s*=l=1/Math.sqrt(l),h*=l,d*=l);var M=c*d-f*h,m=f*s-i*d,v=i*h-c*s;return(l=M*M+m*m+v*v)>0&&(M*=l=1/Math.sqrt(l),m*=l,v*=l),t[0]=M,t[1]=m,t[2]=v,t[3]=0,t[4]=h*v-d*m,t[5]=d*M-s*v,t[6]=s*m-h*M,t[7]=0,t[8]=s,t[9]=h,t[10]=d,t[11]=0,t[12]=a,t[13]=u,t[14]=o,t[15]=1,t}function Q(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function X(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Z(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function J(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function N(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function W(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t[3]=n[3]+r[3]*e,t[4]=n[4]+r[4]*e,t[5]=n[5]+r[5]*e,t[6]=n[6]+r[6]*e,t[7]=n[7]+r[7]*e,t[8]=n[8]+r[8]*e,t[9]=n[9]+r[9]*e,t[10]=n[10]+r[10]*e,t[11]=n[11]+r[11]*e,t[12]=n[12]+r[12]*e,t[13]=n[13]+r[13]*e,t[14]=n[14]+r[14]*e,t[15]=n[15]+r[15]*e,t}function H(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function K(t,n){var r=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],s=t[7],h=t[8],d=t[9],l=t[10],M=t[11],m=t[12],v=t[13],b=t[14],p=t[15],g=n[0],y=n[1],w=n[2],x=n[3],P=n[4],S=n[5],T=n[6],B=n[7],C=n[8],U=n[9],q=n[10],L=n[11],A=n[12],G=n[13],V=n[14],R=n[15];return Math.abs(r-g)<=u*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(e-y)<=u*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(a-w)<=u*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(o-x)<=u*Math.max(1,Math.abs(o),Math.abs(x))&&Math.abs(i-P)<=u*Math.max(1,Math.abs(i),Math.abs(P))&&Math.abs(c-S)<=u*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(f-T)<=u*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(s-B)<=u*Math.max(1,Math.abs(s),Math.abs(B))&&Math.abs(h-C)<=u*Math.max(1,Math.abs(h),Math.abs(C))&&Math.abs(d-U)<=u*Math.max(1,Math.abs(d),Math.abs(U))&&Math.abs(l-q)<=u*Math.max(1,Math.abs(l),Math.abs(q))&&Math.abs(M-L)<=u*Math.max(1,Math.abs(M),Math.abs(L))&&Math.abs(m-A)<=u*Math.max(1,Math.abs(m),Math.abs(A))&&Math.abs(v-G)<=u*Math.max(1,Math.abs(v),Math.abs(G))&&Math.abs(b-V)<=u*Math.max(1,Math.abs(b),Math.abs(V))&&Math.abs(p-R)<=u*Math.max(1,Math.abs(p),Math.abs(R))}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var $=p,tt=J;function nt(){var t=new o(3);return o!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function rt(t){var n=new o(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function et(t){var n=t[0],r=t[1],e=t[2];return Math.hypot(n,r,e)}function at(t,n,r){var e=new o(3);return e[0]=t,e[1]=n,e[2]=r,e}function ut(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function ot(t,n,r,e){return t[0]=n,t[1]=r,t[2]=e,t}function it(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function ct(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function ft(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function st(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function ht(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function dt(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function lt(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function Mt(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function mt(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function vt(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function bt(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t}function pt(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return Math.hypot(r,e,a)}function gt(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return r*r+e*e+a*a}function yt(t){var n=t[0],r=t[1],e=t[2];return n*n+r*r+e*e}function wt(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function xt(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function Pt(t,n){var r=n[0],e=n[1],a=n[2],u=r*r+e*e+a*a;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t}function St(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Tt(t,n,r){var e=n[0],a=n[1],u=n[2],o=r[0],i=r[1],c=r[2];return t[0]=a*c-u*i,t[1]=u*o-e*c,t[2]=e*i-a*o,t}function Bt(t,n,r,e){var a=n[0],u=n[1],o=n[2];return t[0]=a+e*(r[0]-a),t[1]=u+e*(r[1]-u),t[2]=o+e*(r[2]-o),t}function Ct(t,n,r,e,a,u){var o=u*u,i=o*(2*u-3)+1,c=o*(u-2)+u,f=o*(u-1),s=o*(3-2*u);return t[0]=n[0]*i+r[0]*c+e[0]*f+a[0]*s,t[1]=n[1]*i+r[1]*c+e[1]*f+a[1]*s,t[2]=n[2]*i+r[2]*c+e[2]*f+a[2]*s,t}function Ut(t,n,r,e,a,u){var o=1-u,i=o*o,c=u*u,f=i*o,s=3*u*i,h=3*c*o,d=c*u;return t[0]=n[0]*f+r[0]*s+e[0]*h+a[0]*d,t[1]=n[1]*f+r[1]*s+e[1]*h+a[1]*d,t[2]=n[2]*f+r[2]*s+e[2]*h+a[2]*d,t}function qt(t,n){n=n||1;var r=2*i()*Math.PI,e=2*i()-1,a=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t[2]=e*n,t}function Lt(t,n,r){var e=n[0],a=n[1],u=n[2],o=r[3]*e+r[7]*a+r[11]*u+r[15];return o=o||1,t[0]=(r[0]*e+r[4]*a+r[8]*u+r[12])/o,t[1]=(r[1]*e+r[5]*a+r[9]*u+r[13])/o,t[2]=(r[2]*e+r[6]*a+r[10]*u+r[14])/o,t}function At(t,n,r){var e=n[0],a=n[1],u=n[2];return t[0]=e*r[0]+a*r[3]+u*r[6],t[1]=e*r[1]+a*r[4]+u*r[7],t[2]=e*r[2]+a*r[5]+u*r[8],t}function Gt(t,n,r){var e=r[0],a=r[1],u=r[2],o=r[3],i=n[0],c=n[1],f=n[2],s=a*f-u*c,h=u*i-e*f,d=e*c-a*i,l=a*d-u*h,M=u*s-e*d,m=e*h-a*s,v=2*o;return s*=v,h*=v,d*=v,l*=2,M*=2,m*=2,t[0]=i+s+l,t[1]=c+h+M,t[2]=f+d+m,t}function Vt(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[0],u[1]=a[1]*Math.cos(e)-a[2]*Math.sin(e),u[2]=a[1]*Math.sin(e)+a[2]*Math.cos(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function Rt(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[2]*Math.sin(e)+a[0]*Math.cos(e),u[1]=a[1],u[2]=a[2]*Math.cos(e)-a[0]*Math.sin(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function Et(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[0]*Math.cos(e)-a[1]*Math.sin(e),u[1]=a[0]*Math.sin(e)+a[1]*Math.cos(e),u[2]=a[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function Ot(t,n){var r=t[0],e=t[1],a=t[2],u=n[0],o=n[1],i=n[2],c=Math.sqrt(r*r+e*e+a*a)*Math.sqrt(u*u+o*o+i*i),f=c&&St(t,n)/c;return Math.acos(Math.min(Math.max(f,-1),1))}function zt(t){return t[0]=0,t[1]=0,t[2]=0,t}function Dt(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function It(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Ft(t,n){var r=t[0],e=t[1],a=t[2],o=n[0],i=n[1],c=n[2];return Math.abs(r-o)<=u*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-i)<=u*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(a-c)<=u*Math.max(1,Math.abs(a),Math.abs(c))}var Yt,jt=ct,_t=ft,kt=st,Qt=pt,Xt=gt,Zt=et,Jt=yt,Nt=(Yt=nt(),function(t,n,r,e,a,u){var o,i;for(n||(n=3),r||(r=0),i=e?Math.min(e*n+r,t.length):t.length,o=r;o<i;o+=n)Yt[0]=t[o],Yt[1]=t[o+1],Yt[2]=t[o+2],a(Yt,Yt,u),t[o]=Yt[0],t[o+1]=Yt[1],t[o+2]=Yt[2];return t})},17:function(t,n,r){"use strict";r.r(n),r.d(n,"title",(function(){return c})),r.d(n,"description",(function(){return f})),r.d(n,"init",(function(){return s}));var e=r(13),a=r(12),u=r(0),o=r(1),i=function(t,n,r,e){return new(r||(r=Promise))((function(a,u){function o(t){try{c(e.next(t))}catch(t){u(t)}}function i(t){try{c(e.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,i)}c((e=e.apply(t,n||[])).next())}))};const c="Two Cubes",f="This example shows some of the alignment requirements                             involved when updating and binding multiple slices of a                             uniform buffer.";function s(t){return i(this,void 0,void 0,(function*(){const n="#version 450\n  layout(set = 0, binding = 0) uniform Uniforms {\n    mat4 modelViewProjectionMatrix;\n  } uniforms;\n\n  layout(location = 0) in vec4 position;\n  layout(location = 1) in vec4 color;\n\n  layout(location = 0) out vec4 fragColor;\n\n  void main() {\n    gl_Position = uniforms.modelViewProjectionMatrix * position;\n    fragColor = color;\n  }",r="#version 450\n  layout(location = 0) in vec4 fragColor;\n  layout(location = 0) out vec4 outColor;\n\n  void main() {\n    outColor = fragColor;\n  }",i=yield navigator.gpu.requestAdapter(),c=yield i.requestDevice(),f=yield Object(u.a)(),s=Math.abs(t.width/t.height);let h=e.a.create();e.a.perspective(h,2*Math.PI/5,s,1,100);const d=t.getContext("gpupresent").configureSwapChain({device:c,format:"bgra8unorm"}),[l,M]=c.createBufferMapped({size:a.d.byteLength,usage:GPUBufferUsage.VERTEX});new Float32Array(M).set(a.d),l.unmap();const m=c.createBindGroupLayout({entries:[{binding:0,visibility:1,type:"uniform-buffer"}]}),v=c.createPipelineLayout({bindGroupLayouts:[m]}),b=c.createRenderPipeline({layout:v,vertexStage:{module:c.createShaderModule({code:f.compileGLSL(n,"vertex"),source:n,transform:t=>f.compileGLSL(t,"vertex")}),entryPoint:"main"},fragmentStage:{module:c.createShaderModule({code:f.compileGLSL(r,"fragment"),source:r,transform:t=>f.compileGLSL(t,"fragment")}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:a.e,attributes:[{shaderLocation:0,offset:a.b,format:"float4"},{shaderLocation:1,offset:a.a,format:"float4"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),p={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:c.createTexture({size:{width:t.width,height:t.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}).createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},g=c.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),y=c.createBindGroup({layout:m,entries:[{binding:0,resource:{buffer:g,offset:0,size:64}}]}),w=c.createBindGroup({layout:m,entries:[{binding:0,resource:{buffer:g,offset:256,size:64}}]});let x=e.a.create();e.a.translate(x,x,e.b.fromValues(-2,0,0));let P=e.a.create();e.a.translate(P,P,e.b.fromValues(2,0,0));let S=e.a.create(),T=e.a.create(),B=e.a.create();e.a.translate(B,B,e.b.fromValues(0,0,-7));let C=e.a.create(),U=e.a.create();return function(){!function(){let t=Date.now()/1e3;e.a.rotate(C,x,1,e.b.fromValues(Math.sin(t),Math.cos(t),0)),e.a.rotate(U,P,1,e.b.fromValues(Math.cos(t),Math.sin(t),0)),e.a.multiply(S,B,C),e.a.multiply(S,h,S),e.a.multiply(T,B,U),e.a.multiply(T,h,T)}(),p.colorAttachments[0].attachment=d.getCurrentTexture().createView();const t=c.createCommandEncoder(),{uploadBuffer:n}=Object(o.c)(c,g,0,S,t),{uploadBuffer:r}=Object(o.c)(c,g,256,T,t),a=t.beginRenderPass(p);a.setPipeline(b),a.setVertexBuffer(0,l),a.setBindGroup(0,y),a.draw(36,1,0,0),a.setBindGroup(0,w),a.draw(36,1,0,0),a.endPass(),c.defaultQueue.submit([t.finish()]),n.destroy(),r.destroy()}}))}}}]);
//# sourceMappingURL=twoCubes-919ee8.js.map