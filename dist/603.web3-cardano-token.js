"use strict";(self.webpackChunkweb3_cardano_token=self.webpackChunkweb3_cardano_token||[]).push([[603],{603:function(t,r,e){e.r(r),e.d(r,{AlgorithmId:function(){return _.f3},BigNum:function(){return _.Wb},CBORArray:function(){return _.lz},CBORObject:function(){return _.Vd},CBORSpecial:function(){return _.Bk},CBORSpecialType:function(){return _.H0},CBORValue:function(){return _.Jz},CBORValueKind:function(){return _.T8},COSEEncrypt:function(){return _.dc},COSEEncrypt0:function(){return _.rK},COSEKey:function(){return _.VU},COSERecipient:function(){return _.XO},COSERecipients:function(){return _.Od},COSESign:function(){return _.eA},COSESign1:function(){return _.Ej},COSESign1Builder:function(){return _.DZ},COSESignBuilder:function(){return _.Yk},COSESignature:function(){return _.Rm},COSESignatures:function(){return _.Ts},CounterSignature:function(){return _.Fb},CurveType:function(){return _.v7},ECKey:function(){return _.dY},EdDSA25519Key:function(){return _.V3},HeaderMap:function(){return _.BF},Headers:function(){return _.PM},Int:function(){return _.J7},KeyOperation:function(){return _.b1},KeyType:function(){return _.Yh},Label:function(){return _.__},LabelKind:function(){return _.$E},Labels:function(){return _.Rz},PasswordEncryption:function(){return _.q$},ProtectedHeaderMap:function(){return _.UP},PubKeyEncryption:function(){return _.zS},SigContext:function(){return _.UA},SigStructure:function(){return _.ek},SignedMessage:function(){return _.uk},SignedMessageKind:function(){return _.Ww},TaggedCBOR:function(){return _.t1},__wbindgen_debug_string:function(){return _.fY},__wbindgen_object_drop_ref:function(){return _.ug},__wbindgen_rethrow:function(){return _.nD},__wbindgen_string_new:function(){return _.h4},__wbindgen_throw:function(){return _.Or}});var _=e(420)},420:function(t,r,e){e.d(r,{$E:function(){return j},Ww:function(){return S},UA:function(){return C},H0:function(){return E},T8:function(){return x},f3:function(){return B},Yh:function(){return z},dY:function(){return T},v7:function(){return K},b1:function(){return A},Wb:function(){return D},lz:function(){return P},Vd:function(){return R},Bk:function(){return I},Jz:function(){return U},dc:function(){return V},rK:function(){return $},VU:function(){return Y},XO:function(){return F},Od:function(){return N},eA:function(){return X},Ej:function(){return M},DZ:function(){return W},Yk:function(){return H},Rm:function(){return J},Ts:function(){return q},Fb:function(){return G},V3:function(){return L},BF:function(){return Z},PM:function(){return Q},J7:function(){return tt},__:function(){return rt},Rz:function(){return et},q$:function(){return _t},UP:function(){return nt},zS:function(){return it},ek:function(){return st},uk:function(){return at},t1:function(){return ot},ug:function(){return ct},h4:function(){return pt},fY:function(){return dt},Or:function(){return ut},nD:function(){return wt}});var _=e(587);t=e.hmd(t);const n=new Array(32).fill(void 0);function i(t){return n[t]}n.push(void 0,null,!0,!1);let s=n.length;function a(t){const r=i(t);return function(t){t<36||(n[t]=s,s=t)}(t),r}let o=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let c=null;function p(){return null!==c&&c.buffer===_.memory.buffer||(c=new Uint8Array(_.memory.buffer)),c}function d(t,r){return o.decode(p().subarray(t,t+r))}function u(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return`${t}`;if("string"==r)return`"${t}"`;if("symbol"==r){const r=t.description;return null==r?"Symbol":`Symbol(${r})`}if("function"==r){const r=t.name;return"string"==typeof r&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=u(t[0]));for(let _=1;_<r;_++)e+=", "+u(t[_]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let _;if(!(e.length>1))return toString.call(t);if(_=e[1],"Object"==_)try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:_}let w=0,b=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof b.encodeInto?function(t,r){return b.encodeInto(t,r)}:function(t,r){const e=b.encode(t);return r.set(e),{read:t.length,written:e.length}};function y(t,r,e){if(void 0===e){const e=b.encode(t),_=r(e.length);return p().subarray(_,_+e.length).set(e),w=e.length,_}let _=t.length,n=r(_);const i=p();let s=0;for(;s<_;s++){const r=t.charCodeAt(s);if(r>127)break;i[n+s]=r}if(s!==_){0!==s&&(t=t.slice(s)),n=e(n,_,_=s+3*t.length);const r=p().subarray(n+s,n+_);s+=l(t,r).written}return w=s,n}let g=null;function f(){return null!==g&&g.buffer===_.memory.buffer||(g=new Int32Array(_.memory.buffer)),g}function h(t,r){return p().subarray(t/1,t/1+r)}function v(t,r){const e=r(1*t.length);return p().set(t,e/1),w=t.length,e}function m(t,r){if(!(t instanceof r))throw new Error(`expected instance of ${r.name}`);return t.ptr}function k(t){return null==t}let O=null;const j=Object.freeze({Int:0,0:"Int",Text:1,1:"Text"}),S=Object.freeze({COSESIGN:0,0:"COSESIGN",COSESIGN1:1,1:"COSESIGN1"}),C=Object.freeze({Signature:0,0:"Signature",Signature1:1,1:"Signature1",CounterSignature:2,2:"CounterSignature"}),E=Object.freeze({Bool:0,0:"Bool",Float:1,1:"Float",Unassigned:2,2:"Unassigned",Break:3,3:"Break",Undefined:4,4:"Undefined",Null:5,5:"Null"}),x=Object.freeze({Int:0,0:"Int",Bytes:1,1:"Bytes",Text:2,2:"Text",Array:3,3:"Array",Object:4,4:"Object",TaggedCBOR:5,5:"TaggedCBOR",Special:6,6:"Special"}),B=Object.freeze({EdDSA:0,0:"EdDSA",ChaCha20Poly1305:1,1:"ChaCha20Poly1305"}),z=Object.freeze({OKP:0,0:"OKP",EC2:1,1:"EC2",Symmetric:2,2:"Symmetric"}),T=Object.freeze({CRV:0,0:"CRV",X:1,1:"X",Y:2,2:"Y",D:3,3:"D"}),K=Object.freeze({P256:0,0:"P256",P384:1,1:"P384",P521:2,2:"P521",X25519:3,3:"X25519",X448:4,4:"X448",Ed25519:5,5:"Ed25519",Ed448:6,6:"Ed448"}),A=Object.freeze({Sign:0,0:"Sign",Verify:1,1:"Verify",Encrypt:2,2:"Encrypt",Decrypt:3,3:"Decrypt",WrapKey:4,4:"WrapKey",UnwrapKey:5,5:"UnwrapKey",DeriveKey:6,6:"DeriveKey",DeriveBits:7,7:"DeriveBits"});class D{static __wrap(t){const r=Object.create(D.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_bignum_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.bignum_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.bignum_from_bytes(r,e);return D.__wrap(n)}static from_str(t){var r=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),e=w,n=_.bignum_from_str(r,e);return D.__wrap(n)}to_str(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.bignum_to_str(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];return d(t,r)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,r)}}checked_mul(t){m(t,D);var r=_.bignum_checked_mul(this.ptr,t.ptr);return D.__wrap(r)}checked_add(t){m(t,D);var r=_.bignum_checked_add(this.ptr,t.ptr);return D.__wrap(r)}checked_sub(t){m(t,D);var r=_.bignum_checked_sub(this.ptr,t.ptr);return D.__wrap(r)}}class P{static __wrap(t){const r=Object.create(P.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborarray_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborarray_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cborarray_from_bytes(r,e);return P.__wrap(n)}static new(){var t=_.cborarray_new();return P.__wrap(t)}len(){return _.cborarray_len(this.ptr)>>>0}get(t){var r=_.cborarray_get(this.ptr,t);return U.__wrap(r)}add(t){m(t,U),_.cborarray_add(this.ptr,t.ptr)}set_definite_encoding(t){_.cborarray_set_definite_encoding(this.ptr,t)}is_definite(){return 0!==_.cborarray_is_definite(this.ptr)}}class R{static __wrap(t){const r=Object.create(R.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborobject_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborobject_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cborobject_from_bytes(r,e);return R.__wrap(n)}static new(){var t=_.cborobject_new();return R.__wrap(t)}len(){return _.cborobject_len(this.ptr)>>>0}insert(t,r){m(t,U),m(r,U);var e=_.cborobject_insert(this.ptr,t.ptr,r.ptr);return 0===e?void 0:U.__wrap(e)}get(t){m(t,U);var r=_.cborobject_get(this.ptr,t.ptr);return 0===r?void 0:U.__wrap(r)}keys(){var t=_.cborobject_keys(this.ptr);return P.__wrap(t)}set_definite_encoding(t){_.cborobject_set_definite_encoding(this.ptr,t)}is_definite(){return 0!==_.cborobject_is_definite(this.ptr)}}class I{static __wrap(t){const r=Object.create(I.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborspecial_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborspecial_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cborspecial_from_bytes(r,e);return I.__wrap(n)}static new_bool(t){var r=_.cborspecial_new_bool(t);return I.__wrap(r)}static new_unassigned(t){var r=_.cborspecial_new_unassigned(t);return I.__wrap(r)}static new_break(){var t=_.cborspecial_new_break();return I.__wrap(t)}static new_null(){var t=_.cborspecial_new_null();return I.__wrap(t)}static new_undefined(){var t=_.cborspecial_new_undefined();return I.__wrap(t)}kind(){return _.cborspecial_kind(this.ptr)>>>0}as_bool(){var t=_.cborspecial_as_bool(this.ptr);return 16777215===t?void 0:0!==t}as_float(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cborspecial_as_float(e,this.ptr);var t=f()[e/4+0],r=(null!==O&&O.buffer===_.memory.buffer||(O=new Float64Array(_.memory.buffer)),O)[e/8+1];return 0===t?void 0:r}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_unassigned(){var t=_.cborspecial_as_unassigned(this.ptr);return 16777215===t?void 0:t}}class U{static __wrap(t){const r=Object.create(U.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborvalue_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cborvalue_from_bytes(r,e);return U.__wrap(n)}static new_int(t){m(t,tt);var r=_.cborvalue_new_int(t.ptr);return U.__wrap(r)}static new_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cborvalue_new_bytes(r,e);return U.__wrap(n)}static new_text(t){var r=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),e=w,n=_.cborvalue_new_text(r,e);return U.__wrap(n)}static new_array(t){m(t,P);var r=_.cborvalue_new_array(t.ptr);return U.__wrap(r)}static new_object(t){m(t,R);var r=_.cborvalue_new_object(t.ptr);return U.__wrap(r)}static new_tagged(t){m(t,ot);var r=_.cborvalue_new_tagged(t.ptr);return U.__wrap(r)}static new_special(t){m(t,I);var r=_.cborvalue_new_special(t.ptr);return U.__wrap(r)}kind(){return _.cborvalue_kind(this.ptr)>>>0}as_int(){var t=_.cborvalue_as_int(this.ptr);return 0===t?void 0:tt.__wrap(t)}as_bytes(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_as_bytes(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_text(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_as_text(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=d(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_array(){var t=_.cborvalue_as_array(this.ptr);return 0===t?void 0:P.__wrap(t)}as_object(){var t=_.cborvalue_as_object(this.ptr);return 0===t?void 0:R.__wrap(t)}as_tagged(){var t=_.cborvalue_as_tagged(this.ptr);return 0===t?void 0:ot.__wrap(t)}as_special(){var t=_.cborvalue_as_special(this.ptr);return 0===t?void 0:I.__wrap(t)}}class V{static __wrap(t){const r=Object.create(V.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coseencrypt_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.coseencrypt_from_bytes(r,e);return V.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}recipients(){var t=_.coseencrypt_recipients(this.ptr);return N.__wrap(t)}static new(t,r,e){m(t,Q);var n=k(r)?0:v(r,_.__wbindgen_malloc),i=w;m(e,N);var s=_.coseencrypt_new(t.ptr,n,i,e.ptr);return V.__wrap(s)}}class ${static __wrap(t){const r=Object.create($.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coseencrypt0_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.coseencrypt0_from_bytes(r,e);return $.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,r){m(t,Q);var e=k(r)?0:v(r,_.__wbindgen_malloc),n=w,i=_.coseencrypt0_new(t.ptr,e,n);return $.__wrap(i)}}class Y{static __wrap(t){const r=Object.create(Y.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosekey_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosekey_from_bytes(r,e);return Y.__wrap(n)}set_key_type(t){m(t,rt),_.cosekey_set_key_type(this.ptr,t.ptr)}key_type(){var t=_.cosekey_key_type(this.ptr);return rt.__wrap(t)}set_key_id(t){var r=v(t,_.__wbindgen_malloc),e=w;_.cosekey_set_key_id(this.ptr,r,e)}key_id(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_key_id(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_algorithm_id(t){m(t,rt),_.cosekey_set_algorithm_id(this.ptr,t.ptr)}algorithm_id(){var t=_.cosekey_algorithm_id(this.ptr);return 0===t?void 0:rt.__wrap(t)}set_key_ops(t){m(t,et),_.cosekey_set_key_ops(this.ptr,t.ptr)}key_ops(){var t=_.cosekey_key_ops(this.ptr);return 0===t?void 0:et.__wrap(t)}set_base_init_vector(t){var r=v(t,_.__wbindgen_malloc),e=w;_.cosekey_set_base_init_vector(this.ptr,r,e)}base_init_vector(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_base_init_vector(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}header(t){m(t,rt);var r=_.cosekey_header(this.ptr,t.ptr);return 0===r?void 0:U.__wrap(r)}set_header(t,r){m(t,rt),m(r,U),_.cosekey_set_header(this.ptr,t.ptr,r.ptr)}static new(t){m(t,rt);var r=_.cosekey_new(t.ptr);return Y.__wrap(r)}}class F{static __wrap(t){const r=Object.create(F.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coserecipient_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coserecipient_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.coserecipient_from_bytes(r,e);return F.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,r){m(t,Q);var e=k(r)?0:v(r,_.__wbindgen_malloc),n=w,i=_.coseencrypt0_new(t.ptr,e,n);return F.__wrap(i)}}class N{static __wrap(t){const r=Object.create(N.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coserecipients_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coserecipients_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.coserecipients_from_bytes(r,e);return N.__wrap(n)}static new(){var t=_.coserecipients_new();return N.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var r=_.coserecipients_get(this.ptr,t);return F.__wrap(r)}add(t){m(t,F),_.coserecipients_add(this.ptr,t.ptr)}}class X{static __wrap(t){const r=Object.create(X.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosesign_from_bytes(r,e);return X.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}payload(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}signatures(){var t=_.cosesign_signatures(this.ptr);return q.__wrap(t)}static new(t,r,e){m(t,Q);var n=k(r)?0:v(r,_.__wbindgen_malloc),i=w;m(e,q);var s=_.cosesign_new(t.ptr,n,i,e.ptr);return X.__wrap(s)}}class M{static __wrap(t){const r=Object.create(M.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign1_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign1_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosesign1_from_bytes(r,e);return M.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}payload(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}signature(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign1_signature(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}signed_data(t,r){var e=k(t)?0:v(t,_.__wbindgen_malloc),n=w,i=k(r)?0:v(r,_.__wbindgen_malloc),s=w,a=_.cosesign1_signed_data(this.ptr,e,n,i,s);return st.__wrap(a)}static new(t,r,e){m(t,Q);var n=k(r)?0:v(r,_.__wbindgen_malloc),i=w,s=v(e,_.__wbindgen_malloc),a=w,o=_.cosesign1_new(t.ptr,n,i,s,a);return M.__wrap(o)}}class W{static __wrap(t){const r=Object.create(W.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign1builder_free(t)}static new(t,r,e){m(t,Q);var n=v(r,_.__wbindgen_malloc),i=w,s=_.cosesign1builder_new(t.ptr,n,i,e);return W.__wrap(s)}hash_payload(){_.cosesign1builder_hash_payload(this.ptr)}set_external_aad(t){var r=v(t,_.__wbindgen_malloc),e=w;_.cosesign1builder_set_external_aad(this.ptr,r,e)}make_data_to_sign(){var t=_.cosesign1builder_make_data_to_sign(this.ptr);return st.__wrap(t)}build(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosesign1builder_build(this.ptr,r,e);return M.__wrap(n)}}class H{static __wrap(t){const r=Object.create(H.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignbuilder_free(t)}static new(t,r,e){m(t,Q);var n=v(r,_.__wbindgen_malloc),i=w,s=_.cosesignbuilder_new(t.ptr,n,i,e);return H.__wrap(s)}hash_payload(){_.cosesign1builder_hash_payload(this.ptr)}set_external_aad(t){var r=v(t,_.__wbindgen_malloc),e=w;_.cosesign1builder_set_external_aad(this.ptr,r,e)}make_data_to_sign(){var t=_.cosesignbuilder_make_data_to_sign(this.ptr);return st.__wrap(t)}build(t){m(t,q);var r=_.cosesignbuilder_build(this.ptr,t.ptr);return X.__wrap(r)}}class J{static __wrap(t){const r=Object.create(J.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignature_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignature_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosesignature_from_bytes(r,e);return J.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}signature(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignature_signature(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,r){m(t,Q);var e=v(r,_.__wbindgen_malloc),n=w,i=_.cosesignature_new(t.ptr,e,n);return J.__wrap(i)}}class q{static __wrap(t){const r=Object.create(q.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignatures_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignatures_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.cosesignatures_from_bytes(r,e);return q.__wrap(n)}static new(){var t=_.coserecipients_new();return q.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var r=_.cosesignatures_get(this.ptr,t);return J.__wrap(r)}add(t){m(t,J),_.cosesignatures_add(this.ptr,t.ptr)}}class G{static __wrap(t){const r=Object.create(G.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_countersignature_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.countersignature_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.countersignature_from_bytes(r,e);return G.__wrap(n)}static new_single(t){m(t,J);var r=_.countersignature_new_single(t.ptr);return G.__wrap(r)}static new_multi(t){m(t,q);var r=_.countersignature_new_multi(t.ptr);return G.__wrap(r)}signatures(){var t=_.countersignature_signatures(this.ptr);return q.__wrap(t)}}class L{static __wrap(t){const r=Object.create(L.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_eddsa25519key_free(t)}static new(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.eddsa25519key_new(r,e);return L.__wrap(n)}set_private_key(t){var r=v(t,_.__wbindgen_malloc),e=w;_.eddsa25519key_set_private_key(this.ptr,r,e)}is_for_signing(){_.eddsa25519key_is_for_signing(this.ptr)}is_for_verifying(){_.eddsa25519key_is_for_verifying(this.ptr)}build(){var t=_.eddsa25519key_build(this.ptr);return Y.__wrap(t)}}class Z{static __wrap(t){const r=Object.create(Z.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_headermap_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.headermap_from_bytes(r,e);return Z.__wrap(n)}set_algorithm_id(t){m(t,rt),_.headermap_set_algorithm_id(this.ptr,t.ptr)}algorithm_id(){var t=_.headermap_algorithm_id(this.ptr);return 0===t?void 0:rt.__wrap(t)}set_criticality(t){m(t,et),_.headermap_set_criticality(this.ptr,t.ptr)}criticality(){var t=_.headermap_criticality(this.ptr);return 0===t?void 0:et.__wrap(t)}set_content_type(t){m(t,rt),_.cosekey_set_algorithm_id(this.ptr,t.ptr)}content_type(){var t=_.cosekey_algorithm_id(this.ptr);return 0===t?void 0:rt.__wrap(t)}set_key_id(t){var r=v(t,_.__wbindgen_malloc),e=w;_.headermap_set_key_id(this.ptr,r,e)}key_id(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_key_id(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_init_vector(t){var r=v(t,_.__wbindgen_malloc),e=w;_.cosekey_set_base_init_vector(this.ptr,r,e)}init_vector(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_base_init_vector(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_partial_init_vector(t){var r=v(t,_.__wbindgen_malloc),e=w;_.headermap_set_partial_init_vector(this.ptr,r,e)}partial_init_vector(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_partial_init_vector(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=h(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_counter_signature(t){m(t,G),_.headermap_set_counter_signature(this.ptr,t.ptr)}counter_signature(){var t=_.headermap_counter_signature(this.ptr);return 0===t?void 0:G.__wrap(t)}header(t){m(t,rt);var r=_.headermap_header(this.ptr,t.ptr);return 0===r?void 0:U.__wrap(r)}set_header(t,r){m(t,rt),m(r,U),_.headermap_set_header(this.ptr,t.ptr,r.ptr)}keys(){var t=_.headermap_keys(this.ptr);return et.__wrap(t)}static new(){var t=_.headermap_new();return Z.__wrap(t)}}class Q{static __wrap(t){const r=Object.create(Q.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_headers_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.headers_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.headers_from_bytes(r,e);return Q.__wrap(n)}protected(){var t=_.headers_protected(this.ptr);return nt.__wrap(t)}unprotected(){var t=_.headers_unprotected(this.ptr);return Z.__wrap(t)}static new(t,r){m(t,nt),m(r,Z);var e=_.headers_new(t.ptr,r.ptr);return Q.__wrap(e)}}class tt{static __wrap(t){const r=Object.create(tt.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_int_free(t)}static new(t){m(t,D);var r=t.ptr;t.ptr=0;var e=_.int_new(r);return tt.__wrap(e)}static new_negative(t){m(t,D);var r=t.ptr;t.ptr=0;var e=_.int_new_negative(r);return tt.__wrap(e)}static new_i32(t){var r=_.int_new_i32(t);return tt.__wrap(r)}is_positive(){return 0!==_.int_is_positive(this.ptr)}as_positive(){var t=_.int_as_positive(this.ptr);return 0===t?void 0:D.__wrap(t)}as_negative(){var t=_.int_as_negative(this.ptr);return 0===t?void 0:D.__wrap(t)}as_i32(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.int_as_i32(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];return 0===t?void 0:r}finally{_.__wbindgen_add_to_stack_pointer(16)}}}class rt{static __wrap(t){const r=Object.create(rt.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_label_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.label_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.label_from_bytes(r,e);return rt.__wrap(n)}static new_int(t){m(t,tt);var r=_.label_new_int(t.ptr);return rt.__wrap(r)}static new_text(t){var r=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),e=w,n=_.label_new_text(r,e);return rt.__wrap(n)}kind(){return _.label_kind(this.ptr)>>>0}as_int(){var t=_.label_as_int(this.ptr);return 0===t?void 0:tt.__wrap(t)}as_text(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.label_as_text(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];let n;return 0!==t&&(n=d(t,r).slice(),_.__wbindgen_free(t,1*r)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_algorithm_id(t){var r=_.label_from_algorithm_id(t);return rt.__wrap(r)}static from_key_type(t){var r=_.label_from_key_type(t);return rt.__wrap(r)}static from_ec_key(t){var r=_.label_from_ec_key(t);return rt.__wrap(r)}static from_curve_type(t){var r=_.label_from_curve_type(t);return rt.__wrap(r)}static from_key_operation(t){var r=_.label_from_key_operation(t);return rt.__wrap(r)}}class et{static __wrap(t){const r=Object.create(et.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_labels_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.labels_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.labels_from_bytes(r,e);return et.__wrap(n)}static new(){var t=_.coserecipients_new();return et.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var r=_.labels_get(this.ptr,t);return rt.__wrap(r)}add(t){m(t,rt),_.labels_add(this.ptr,t.ptr)}}class _t{static __wrap(t){const r=Object.create(_t.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_passwordencryption_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.passwordencryption_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.passwordencryption_from_bytes(r,e);return _t.__wrap(n)}static new(t){m(t,$);var r=_.passwordencryption_new(t.ptr);return _t.__wrap(r)}}class nt{static __wrap(t){const r=Object.create(nt.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_protectedheadermap_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.protectedheadermap_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.protectedheadermap_from_bytes(r,e);return nt.__wrap(n)}static new_empty(){var t=_.protectedheadermap_new_empty();return nt.__wrap(t)}static new(t){m(t,Z);var r=_.protectedheadermap_new(t.ptr);return nt.__wrap(r)}deserialized_headers(){var t=_.protectedheadermap_deserialized_headers(this.ptr);return Z.__wrap(t)}}class it{static __wrap(t){const r=Object.create(it.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_pubkeyencryption_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.pubkeyencryption_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.pubkeyencryption_from_bytes(r,e);return it.__wrap(n)}static new(t){m(t,V);var r=_.pubkeyencryption_new(t.ptr);return it.__wrap(r)}}class st{static __wrap(t){const r=Object.create(st.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_sigstructure_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.sigstructure_from_bytes(r,e);return st.__wrap(n)}context(){return _.sigstructure_context(this.ptr)>>>0}body_protected(){var t=_.sigstructure_body_protected(this.ptr);return nt.__wrap(t)}sign_protected(){var t=_.sigstructure_sign_protected(this.ptr);return 0===t?void 0:nt.__wrap(t)}external_aad(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_external_aad(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}payload(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_payload(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_sign_protected(t){m(t,nt),_.sigstructure_set_sign_protected(this.ptr,t.ptr)}static new(t,r,e,n){m(r,nt);var i=v(e,_.__wbindgen_malloc),s=w,a=v(n,_.__wbindgen_malloc),o=w,c=_.sigstructure_new(t,r.ptr,i,s,a,o);return st.__wrap(c)}}class at{static __wrap(t){const r=Object.create(at.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_signedmessage_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.signedmessage_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.signedmessage_from_bytes(r,e);return at.__wrap(n)}static new_cose_sign(t){m(t,X);var r=_.signedmessage_new_cose_sign(t.ptr);return at.__wrap(r)}static new_cose_sign1(t){m(t,M);var r=_.signedmessage_new_cose_sign1(t.ptr);return at.__wrap(r)}static from_user_facing_encoding(t){var r=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),e=w,n=_.signedmessage_from_user_facing_encoding(r,e);return at.__wrap(n)}to_user_facing_encoding(){try{const e=_.__wbindgen_add_to_stack_pointer(-16);_.signedmessage_to_user_facing_encoding(e,this.ptr);var t=f()[e/4+0],r=f()[e/4+1];return d(t,r)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,r)}}kind(){return _.signedmessage_kind(this.ptr)>>>0}as_cose_sign(){var t=_.signedmessage_as_cose_sign(this.ptr);return 0===t?void 0:X.__wrap(t)}as_cose_sign1(){var t=_.signedmessage_as_cose_sign1(this.ptr);return 0===t?void 0:M.__wrap(t)}}class ot{static __wrap(t){const r=Object.create(ot.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_taggedcbor_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.taggedcbor_to_bytes(n,this.ptr);var t=f()[n/4+0],r=f()[n/4+1],e=h(t,r).slice();return _.__wbindgen_free(t,1*r),e}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var r=v(t,_.__wbindgen_malloc),e=w,n=_.taggedcbor_from_bytes(r,e);return ot.__wrap(n)}tag(){var t=_.taggedcbor_tag(this.ptr);return D.__wrap(t)}value(){var t=_.taggedcbor_value(this.ptr);return U.__wrap(t)}static new(t,r){m(t,D);var e=t.ptr;t.ptr=0,m(r,U);var n=_.taggedcbor_new(e,r.ptr);return ot.__wrap(n)}}function ct(t){a(t)}function pt(t,r){return function(t){s===n.length&&n.push(n.length+1);const r=s;return s=n[r],n[r]=t,r}(d(t,r))}function dt(t,r){var e=y(u(i(r)),_.__wbindgen_malloc,_.__wbindgen_realloc),n=w;f()[t/4+1]=n,f()[t/4+0]=e}function ut(t,r){throw new Error(d(t,r))}function wt(t){throw a(t)}},587:function(t,r,e){var _=e.w[t.id];t.exports=_,e(420),_[""]()}}]);