"use strict";var k=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var S=k(function(B,x){
function g(r,a,v,i,q){var s,c,f,o,t,e,n,u,y;if(s=v.data,c=v.accessors[0],r===1||i===0)return n=c(s,q),n===n&&r-a>0?0:NaN;for(o=q,f=0,e=0,u=0,y=0;y<r;y++)n=c(s,o),n===n&&(f+=n*n,e+=n,u+=1),o+=i;return t=u-a,t<=0?NaN:(f-e/u*e)/t}x.exports=g
});var p=k(function(C,l){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=S();function O(r,a,v,i,q){var s,c,f,o,t,e,n,u;if(r<=0)return NaN;if(o=j(v),o.accessorProtocol)return m(r,a,o,i,q);if(r===1||i===0)return e=v[q],e===e&&r-a>0?0:NaN;for(c=q,s=0,t=0,n=0,u=0;u<r;u++)e=v[c],e===e&&(s+=e*e,t+=e,n+=1),c+=i;return f=n-a,f<=0?NaN:(s-t/n*t)/f}l.exports=O
});var b=k(function(D,N){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=p();function h(r,a,v,i){return R(r,a,v,i,P(r,i))}N.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),z=p();w(d,"ndarray",z);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
