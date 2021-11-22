((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[3],{

/***/ "2b64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LabelKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return SignedMessageKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CBORSpecialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CBORValueKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgorithmId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return KeyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ECKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return CurveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return KeyOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BigNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBORArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CBORObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CBORSpecial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CBORValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COSEEncrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COSEEncrypt0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COSEKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return COSERecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return COSERecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return COSESign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return COSESign1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return COSESign1Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return COSESignBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return COSESignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return COSESignatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return CounterSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return EdDSA25519Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return HeaderMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return PasswordEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ProtectedHeaderMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return PubKeyEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SigStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SignedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return TaggedCBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __wbindgen_rethrow; });
/* harmony import */ var _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52b4");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer) {
        cachegetFloat64Memory0 = new Float64Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "Od"].buffer);
    }
    return cachegetFloat64Memory0;
}
/**
*/
const LabelKind = Object.freeze({ Int:0,"0":"Int",Text:1,"1":"Text", });
/**
*/
const SignedMessageKind = Object.freeze({ COSESIGN:0,"0":"COSESIGN",COSESIGN1:1,"1":"COSESIGN1", });
/**
*/
const SigContext = Object.freeze({ Signature:0,"0":"Signature",Signature1:1,"1":"Signature1",CounterSignature:2,"2":"CounterSignature", });
/**
*/
const CBORSpecialType = Object.freeze({ Bool:0,"0":"Bool",Float:1,"1":"Float",Unassigned:2,"2":"Unassigned",Break:3,"3":"Break",Undefined:4,"4":"Undefined",Null:5,"5":"Null", });
/**
*/
const CBORValueKind = Object.freeze({ Int:0,"0":"Int",Bytes:1,"1":"Bytes",Text:2,"2":"Text",Array:3,"3":"Array",Object:4,"4":"Object",TaggedCBOR:5,"5":"TaggedCBOR",Special:6,"6":"Special", });
/**
*/
const AlgorithmId = Object.freeze({
/**
*r" EdDSA (Pure EdDSA, not HashedEdDSA) - the algorithm used for Cardano addresses
*/
EdDSA:0,"0":"EdDSA",
/**
*r" ChaCha20/Poly1305 w/ 256-bit key, 128-bit tag
*/
ChaCha20Poly1305:1,"1":"ChaCha20Poly1305", });
/**
*/
const KeyType = Object.freeze({
/**
*r" octet key pair
*/
OKP:0,"0":"OKP",
/**
*r" 2-coord EC
*/
EC2:1,"1":"EC2",Symmetric:2,"2":"Symmetric", });
/**
*/
const ECKey = Object.freeze({ CRV:0,"0":"CRV",X:1,"1":"X",Y:2,"2":"Y",D:3,"3":"D", });
/**
*/
const CurveType = Object.freeze({ P256:0,"0":"P256",P384:1,"1":"P384",P521:2,"2":"P521",X25519:3,"3":"X25519",X448:4,"4":"X448",Ed25519:5,"5":"Ed25519",Ed448:6,"6":"Ed448", });
/**
*/
const KeyOperation = Object.freeze({ Sign:0,"0":"Sign",Verify:1,"1":"Verify",Encrypt:2,"2":"Encrypt",Decrypt:3,"3":"Decrypt",WrapKey:4,"4":"WrapKey",UnwrapKey:5,"5":"UnwrapKey",DeriveKey:6,"6":"DeriveKey",DeriveBits:7,"7":"DeriveBits", });
/**
*/
class BigNum {

    static __wrap(ptr) {
        const obj = Object.create(BigNum.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bignum_free */ "a"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_to_bytes */ "M"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BigNum}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_from_bytes */ "K"](ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */
    static from_str(string) {
        var ptr0 = passStringToWasm0(string, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "G"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_from_str */ "L"](ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_str() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_to_str */ "N"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1);
        }
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_mul(other) {
        _assertClass(other, BigNum);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_mul */ "I"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_add(other) {
        _assertClass(other, BigNum);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_add */ "H"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_sub(other) {
        _assertClass(other, BigNum);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_sub */ "J"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
}
/**
*/
class CBORArray {

    static __wrap(ptr) {
        const obj = Object.create(CBORArray.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cborarray_free */ "b"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_to_bytes */ "V"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORArray}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_from_bytes */ "P"](ptr0, len0);
        return CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_new */ "T"]();
        return CBORArray.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_len */ "S"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {CBORValue}
    */
    get(index) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_get */ "Q"](this.ptr, index);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORValue} elem
    */
    add(elem) {
        _assertClass(elem, CBORValue);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_add */ "O"](this.ptr, elem.ptr);
    }
    /**
    * @param {boolean} use_definite
    */
    set_definite_encoding(use_definite) {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_set_definite_encoding */ "U"](this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */
    is_definite() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborarray_is_definite */ "R"](this.ptr);
        return ret !== 0;
    }
}
/**
*/
class CBORObject {

    static __wrap(ptr) {
        const obj = Object.create(CBORObject.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cborobject_free */ "c"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_to_bytes */ "eb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORObject}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_from_bytes */ "W"](ptr0, len0);
        return CBORObject.__wrap(ret);
    }
    /**
    * @returns {CBORObject}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_new */ "cb"]();
        return CBORObject.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_len */ "bb"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {CBORValue} key
    * @param {CBORValue} value
    * @returns {CBORValue | undefined}
    */
    insert(key, value) {
        _assertClass(key, CBORValue);
        _assertClass(value, CBORValue);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_insert */ "Y"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORValue} key
    * @returns {CBORValue | undefined}
    */
    get(key) {
        _assertClass(key, CBORValue);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_get */ "X"](this.ptr, key.ptr);
        return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */
    keys() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_keys */ "ab"](this.ptr);
        return CBORArray.__wrap(ret);
    }
    /**
    * @param {boolean} use_definite
    */
    set_definite_encoding(use_definite) {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_set_definite_encoding */ "db"](this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */
    is_definite() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborobject_is_definite */ "Z"](this.ptr);
        return ret !== 0;
    }
}
/**
*/
class CBORSpecial {

    static __wrap(ptr) {
        const obj = Object.create(CBORSpecial.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cborspecial_free */ "d"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_to_bytes */ "pb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORSpecial}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_from_bytes */ "ib"](ptr0, len0);
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {boolean} b
    * @returns {CBORSpecial}
    */
    static new_bool(b) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_new_bool */ "kb"](b);
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {number} u
    * @returns {CBORSpecial}
    */
    static new_unassigned(u) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_new_unassigned */ "nb"](u);
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */
    static new_break() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_new_break */ "lb"]();
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */
    static new_null() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_new_null */ "mb"]();
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */
    static new_undefined() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_new_undefined */ "ob"]();
        return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_kind */ "jb"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean | undefined}
    */
    as_bool() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_as_bool */ "fb"](this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @returns {number | undefined}
    */
    as_float() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_as_float */ "gb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {number | undefined}
    */
    as_unassigned() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborspecial_as_unassigned */ "hb"](this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
}
/**
*/
class CBORValue {

    static __wrap(ptr) {
        const obj = Object.create(CBORValue.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cborvalue_free */ "e"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_to_bytes */ "Gb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORValue}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_from_bytes */ "xb"](ptr0, len0);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {CBORValue}
    */
    static new_int(int) {
        _assertClass(int, Int);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_int */ "Bb"](int.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORValue}
    */
    static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_bytes */ "Ab"](ptr0, len0);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {CBORValue}
    */
    static new_text(text) {
        var ptr0 = passStringToWasm0(text, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "G"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_text */ "Fb"](ptr0, len0);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORArray} arr
    * @returns {CBORValue}
    */
    static new_array(arr) {
        _assertClass(arr, CBORArray);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_array */ "zb"](arr.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORObject} obj
    * @returns {CBORValue}
    */
    static new_object(obj) {
        _assertClass(obj, CBORObject);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_object */ "Cb"](obj.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {TaggedCBOR} tagged
    * @returns {CBORValue}
    */
    static new_tagged(tagged) {
        _assertClass(tagged, TaggedCBOR);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_tagged */ "Eb"](tagged.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORSpecial} special
    * @returns {CBORValue}
    */
    static new_special(special) {
        _assertClass(special, CBORSpecial);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_new_special */ "Db"](special.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_kind */ "yb"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */
    as_int() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_int */ "sb"](this.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    as_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_bytes */ "rb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {string | undefined}
    */
    as_text() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_text */ "wb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getStringFromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {CBORArray | undefined}
    */
    as_array() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_array */ "qb"](this.ptr);
        return ret === 0 ? undefined : CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORObject | undefined}
    */
    as_object() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_object */ "tb"](this.ptr);
        return ret === 0 ? undefined : CBORObject.__wrap(ret);
    }
    /**
    * @returns {TaggedCBOR | undefined}
    */
    as_tagged() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_tagged */ "vb"](this.ptr);
        return ret === 0 ? undefined : TaggedCBOR.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial | undefined}
    */
    as_special() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cborvalue_as_special */ "ub"](this.ptr);
        return ret === 0 ? undefined : CBORSpecial.__wrap(ret);
    }
}
/**
*/
class COSEEncrypt {

    static __wrap(ptr) {
        const obj = Object.create(COSEEncrypt.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_coseencrypt_free */ "g"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt_to_bytes */ "Pb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEEncrypt}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt_from_bytes */ "Mb"](ptr0, len0);
        return COSEEncrypt.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    ciphertext() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {COSERecipients}
    */
    recipients() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt_recipients */ "Ob"](this.ptr);
        return COSERecipients.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @param {COSERecipients} recipients
    * @returns {COSEEncrypt}
    */
    static new(headers, ciphertext, recipients) {
        _assertClass(headers, Headers);
        var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(recipients, COSERecipients);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt_new */ "Nb"](headers.ptr, ptr0, len0, recipients.ptr);
        return COSEEncrypt.__wrap(ret);
    }
}
/**
*/
class COSEEncrypt0 {

    static __wrap(ptr) {
        const obj = Object.create(COSEEncrypt0.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_coseencrypt0_free */ "f"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_to_bytes */ "Lb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEEncrypt0}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_from_bytes */ "Ib"](ptr0, len0);
        return COSEEncrypt0.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    ciphertext() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @returns {COSEEncrypt0}
    */
    static new(headers, ciphertext) {
        _assertClass(headers, Headers);
        var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_new */ "Kb"](headers.ptr, ptr0, len0);
        return COSEEncrypt0.__wrap(ret);
    }
}
/**
*/
class COSEKey {

    static __wrap(ptr) {
        const obj = Object.create(COSEKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosekey_free */ "h"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_to_bytes */ "ec"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_from_bytes */ "Sb"](ptr0, len0);
        return COSEKey.__wrap(ret);
    }
    /**
    * @param {Label} key_type
    */
    set_key_type(key_type) {
        _assertClass(key_type, Label);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_key_type */ "dc"](this.ptr, key_type.ptr);
    }
    /**
    * @returns {Label}
    */
    key_type() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_key_type */ "Wb"](this.ptr);
        return Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */
    set_key_id(key_id) {
        var ptr0 = passArray8ToWasm0(key_id, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_key_id */ "bc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    key_id() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_key_id */ "Ub"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Label} algorithm_id
    */
    set_algorithm_id(algorithm_id) {
        _assertClass(algorithm_id, Label);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_algorithm_id */ "Yb"](this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */
    algorithm_id() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_algorithm_id */ "Qb"](this.ptr);
        return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} key_ops
    */
    set_key_ops(key_ops) {
        _assertClass(key_ops, Labels);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_key_ops */ "cc"](this.ptr, key_ops.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */
    key_ops() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_key_ops */ "Vb"](this.ptr);
        return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Uint8Array} base_init_vector
    */
    set_base_init_vector(base_init_vector) {
        var ptr0 = passArray8ToWasm0(base_init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_base_init_vector */ "Zb"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    base_init_vector() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_base_init_vector */ "Rb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Label} label
    * @returns {CBORValue | undefined}
    */
    header(label) {
        _assertClass(label, Label);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_header */ "Tb"](this.ptr, label.ptr);
        return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @param {CBORValue} value
    */
    set_header(label, value) {
        _assertClass(label, Label);
        _assertClass(value, CBORValue);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_header */ "ac"](this.ptr, label.ptr, value.ptr);
    }
    /**
    * @param {Label} key_type
    * @returns {COSEKey}
    */
    static new(key_type) {
        _assertClass(key_type, Label);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_new */ "Xb"](key_type.ptr);
        return COSEKey.__wrap(ret);
    }
}
/**
*/
class COSERecipient {

    static __wrap(ptr) {
        const obj = Object.create(COSERecipient.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_coserecipient_free */ "i"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipient_to_bytes */ "gc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSERecipient}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipient_from_bytes */ "fc"](ptr0, len0);
        return COSERecipient.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    ciphertext() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @returns {COSERecipient}
    */
    static new(headers, ciphertext) {
        _assertClass(headers, Headers);
        var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_new */ "Kb"](headers.ptr, ptr0, len0);
        return COSERecipient.__wrap(ret);
    }
}
/**
*/
class COSERecipients {

    static __wrap(ptr) {
        const obj = Object.create(COSERecipients.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_coserecipients_free */ "j"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_to_bytes */ "mc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSERecipients}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_from_bytes */ "ic"](ptr0, len0);
        return COSERecipients.__wrap(ret);
    }
    /**
    * @returns {COSERecipients}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_new */ "lc"]();
        return COSERecipients.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_len */ "kc"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSERecipient}
    */
    get(index) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_get */ "jc"](this.ptr, index);
        return COSERecipient.__wrap(ret);
    }
    /**
    * @param {COSERecipient} elem
    */
    add(elem) {
        _assertClass(elem, COSERecipient);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_add */ "hc"](this.ptr, elem.ptr);
    }
}
/**
*/
class COSESign {

    static __wrap(ptr) {
        const obj = Object.create(COSESign.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesign_free */ "m"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign_to_bytes */ "Ac"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESign}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign_from_bytes */ "xc"](ptr0, len0);
        return COSESign.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    payload() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {COSESignatures}
    */
    signatures() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign_signatures */ "zc"](this.ptr);
        return COSESignatures.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} payload
    * @param {COSESignatures} signatures
    * @returns {COSESign}
    */
    static new(headers, payload, signatures) {
        _assertClass(headers, Headers);
        var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(signatures, COSESignatures);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign_new */ "yc"](headers.ptr, ptr0, len0, signatures.ptr);
        return COSESign.__wrap(ret);
    }
}
/**
*/
class COSESign1 {

    static __wrap(ptr) {
        const obj = Object.create(COSESign1.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesign1_free */ "k"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1_to_bytes */ "rc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESign1}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1_from_bytes */ "nc"](ptr0, len0);
        return COSESign1.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    payload() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    signature() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1_signature */ "pc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * For verifying, we will want to reverse-construct this SigStructure to check the signature against
    * # Arguments
    * * `external_aad` - External application data - see RFC 8152 section 4.3. Set to None if not using this.
    * @param {Uint8Array | undefined} external_aad
    * @param {Uint8Array | undefined} external_payload
    * @returns {SigStructure}
    */
    signed_data(external_aad, external_payload) {
        var ptr0 = isLikeNone(external_aad) ? 0 : passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(external_payload) ? 0 : passArray8ToWasm0(external_payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1_signed_data */ "qc"](this.ptr, ptr0, len0, ptr1, len1);
        return SigStructure.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} payload
    * @param {Uint8Array} signature
    * @returns {COSESign1}
    */
    static new(headers, payload, signature) {
        _assertClass(headers, Headers);
        var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(signature, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1_new */ "oc"](headers.ptr, ptr0, len0, ptr1, len1);
        return COSESign1.__wrap(ret);
    }
}
/**
*/
class COSESign1Builder {

    static __wrap(ptr) {
        const obj = Object.create(COSESign1Builder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesign1builder_free */ "l"](ptr);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} payload
    * @param {boolean} is_payload_external
    * @returns {COSESign1Builder}
    */
    static new(headers, payload, is_payload_external) {
        _assertClass(headers, Headers);
        var ptr0 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_new */ "vc"](headers.ptr, ptr0, len0, is_payload_external);
        return COSESign1Builder.__wrap(ret);
    }
    /**
    */
    hash_payload() {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_hash_payload */ "tc"](this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */
    set_external_aad(external_aad) {
        var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_set_external_aad */ "wc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */
    make_data_to_sign() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_make_data_to_sign */ "uc"](this.ptr);
        return SigStructure.__wrap(ret);
    }
    /**
    * @param {Uint8Array} signed_sig_structure
    * @returns {COSESign1}
    */
    build(signed_sig_structure) {
        var ptr0 = passArray8ToWasm0(signed_sig_structure, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_build */ "sc"](this.ptr, ptr0, len0);
        return COSESign1.__wrap(ret);
    }
}
/**
*/
class COSESignBuilder {

    static __wrap(ptr) {
        const obj = Object.create(COSESignBuilder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesignbuilder_free */ "p"](ptr);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} payload
    * @param {boolean} is_payload_external
    * @returns {COSESignBuilder}
    */
    static new(headers, payload, is_payload_external) {
        _assertClass(headers, Headers);
        var ptr0 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignbuilder_new */ "Lc"](headers.ptr, ptr0, len0, is_payload_external);
        return COSESignBuilder.__wrap(ret);
    }
    /**
    */
    hash_payload() {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_hash_payload */ "tc"](this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */
    set_external_aad(external_aad) {
        var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesign1builder_set_external_aad */ "wc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */
    make_data_to_sign() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignbuilder_make_data_to_sign */ "Kc"](this.ptr);
        return SigStructure.__wrap(ret);
    }
    /**
    * @param {COSESignatures} signed_sig_structure
    * @returns {COSESign}
    */
    build(signed_sig_structure) {
        _assertClass(signed_sig_structure, COSESignatures);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignbuilder_build */ "Jc"](this.ptr, signed_sig_structure.ptr);
        return COSESign.__wrap(ret);
    }
}
/**
*/
class COSESignature {

    static __wrap(ptr) {
        const obj = Object.create(COSESignature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesignature_free */ "n"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignature_to_bytes */ "Ec"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESignature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignature_from_bytes */ "Bc"](ptr0, len0);
        return COSESignature.__wrap(ret);
    }
    /**
    * @returns {Headers}
    */
    headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coseencrypt0_headers */ "Jb"](this.ptr);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    signature() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignature_signature */ "Dc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} signature
    * @returns {COSESignature}
    */
    static new(headers, signature) {
        _assertClass(headers, Headers);
        var ptr0 = passArray8ToWasm0(signature, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignature_new */ "Cc"](headers.ptr, ptr0, len0);
        return COSESignature.__wrap(ret);
    }
}
/**
*/
class COSESignatures {

    static __wrap(ptr) {
        const obj = Object.create(COSESignatures.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_cosesignatures_free */ "o"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignatures_to_bytes */ "Ic"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESignatures}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignatures_from_bytes */ "Gc"](ptr0, len0);
        return COSESignatures.__wrap(ret);
    }
    /**
    * @returns {COSESignatures}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_new */ "lc"]();
        return COSESignatures.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_len */ "kc"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSESignature}
    */
    get(index) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignatures_get */ "Hc"](this.ptr, index);
        return COSESignature.__wrap(ret);
    }
    /**
    * @param {COSESignature} elem
    */
    add(elem) {
        _assertClass(elem, COSESignature);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosesignatures_add */ "Fc"](this.ptr, elem.ptr);
    }
}
/**
*/
class CounterSignature {

    static __wrap(ptr) {
        const obj = Object.create(CounterSignature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_countersignature_free */ "q"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* countersignature_to_bytes */ "Qc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CounterSignature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* countersignature_from_bytes */ "Mc"](ptr0, len0);
        return CounterSignature.__wrap(ret);
    }
    /**
    * @param {COSESignature} cose_signature
    * @returns {CounterSignature}
    */
    static new_single(cose_signature) {
        _assertClass(cose_signature, COSESignature);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* countersignature_new_single */ "Oc"](cose_signature.ptr);
        return CounterSignature.__wrap(ret);
    }
    /**
    * @param {COSESignatures} cose_signatures
    * @returns {CounterSignature}
    */
    static new_multi(cose_signatures) {
        _assertClass(cose_signatures, COSESignatures);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* countersignature_new_multi */ "Nc"](cose_signatures.ptr);
        return CounterSignature.__wrap(ret);
    }
    /**
    * @returns {COSESignatures}
    */
    signatures() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* countersignature_signatures */ "Pc"](this.ptr);
        return COSESignatures.__wrap(ret);
    }
}
/**
*/
class EdDSA25519Key {

    static __wrap(ptr) {
        const obj = Object.create(EdDSA25519Key.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_eddsa25519key_free */ "r"](ptr);
    }
    /**
    * @param {Uint8Array} pubkey_bytes
    * @returns {EdDSA25519Key}
    */
    static new(pubkey_bytes) {
        var ptr0 = passArray8ToWasm0(pubkey_bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* eddsa25519key_new */ "Uc"](ptr0, len0);
        return EdDSA25519Key.__wrap(ret);
    }
    /**
    * @param {Uint8Array} private_key_bytes
    */
    set_private_key(private_key_bytes) {
        var ptr0 = passArray8ToWasm0(private_key_bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* eddsa25519key_set_private_key */ "Vc"](this.ptr, ptr0, len0);
    }
    /**
    */
    is_for_signing() {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* eddsa25519key_is_for_signing */ "Sc"](this.ptr);
    }
    /**
    */
    is_for_verifying() {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* eddsa25519key_is_for_verifying */ "Tc"](this.ptr);
    }
    /**
    * @returns {COSEKey}
    */
    build() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* eddsa25519key_build */ "Rc"](this.ptr);
        return COSEKey.__wrap(ret);
    }
}
/**
*/
class HeaderMap {

    static __wrap(ptr) {
        const obj = Object.create(HeaderMap.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_headermap_free */ "s"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_to_bytes */ "ld"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {HeaderMap}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_from_bytes */ "Zc"](ptr0, len0);
        return HeaderMap.__wrap(ret);
    }
    /**
    * @param {Label} algorithm_id
    */
    set_algorithm_id(algorithm_id) {
        _assertClass(algorithm_id, Label);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_algorithm_id */ "fd"](this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */
    algorithm_id() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_algorithm_id */ "Wc"](this.ptr);
        return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} criticality
    */
    set_criticality(criticality) {
        _assertClass(criticality, Labels);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_criticality */ "hd"](this.ptr, criticality.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */
    criticality() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_criticality */ "Yc"](this.ptr);
        return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Label} content_type
    */
    set_content_type(content_type) {
        _assertClass(content_type, Label);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_algorithm_id */ "Yb"](this.ptr, content_type.ptr);
    }
    /**
    * @returns {Label | undefined}
    */
    content_type() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_algorithm_id */ "Qb"](this.ptr);
        return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */
    set_key_id(key_id) {
        var ptr0 = passArray8ToWasm0(key_id, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_key_id */ "jd"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    key_id() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_key_id */ "bd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} init_vector
    */
    set_init_vector(init_vector) {
        var ptr0 = passArray8ToWasm0(init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_set_base_init_vector */ "Zb"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    init_vector() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* cosekey_base_init_vector */ "Rb"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} partial_init_vector
    */
    set_partial_init_vector(partial_init_vector) {
        var ptr0 = passArray8ToWasm0(partial_init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_partial_init_vector */ "kd"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    partial_init_vector() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_partial_init_vector */ "ed"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {CounterSignature} counter_signature
    */
    set_counter_signature(counter_signature) {
        _assertClass(counter_signature, CounterSignature);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_counter_signature */ "gd"](this.ptr, counter_signature.ptr);
    }
    /**
    * @returns {CounterSignature | undefined}
    */
    counter_signature() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_counter_signature */ "Xc"](this.ptr);
        return ret === 0 ? undefined : CounterSignature.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @returns {CBORValue | undefined}
    */
    header(label) {
        _assertClass(label, Label);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_header */ "ad"](this.ptr, label.ptr);
        return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @param {CBORValue} value
    */
    set_header(label, value) {
        _assertClass(label, Label);
        _assertClass(value, CBORValue);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_set_header */ "id"](this.ptr, label.ptr, value.ptr);
    }
    /**
    * @returns {Labels}
    */
    keys() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_keys */ "cd"](this.ptr);
        return Labels.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headermap_new */ "dd"]();
        return HeaderMap.__wrap(ret);
    }
}
/**
*/
class Headers {

    static __wrap(ptr) {
        const obj = Object.create(Headers.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_headers_free */ "t"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headers_to_bytes */ "pd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Headers}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headers_from_bytes */ "md"](ptr0, len0);
        return Headers.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap}
    */
    protected() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headers_protected */ "od"](this.ptr);
        return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */
    unprotected() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headers_unprotected */ "qd"](this.ptr);
        return HeaderMap.__wrap(ret);
    }
    /**
    * @param {ProtectedHeaderMap} protected_
    * @param {HeaderMap} unprotected_
    * @returns {Headers}
    */
    static new(protected_, unprotected_) {
        _assertClass(protected_, ProtectedHeaderMap);
        _assertClass(unprotected_, HeaderMap);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headers_new */ "nd"](protected_.ptr, unprotected_.ptr);
        return Headers.__wrap(ret);
    }
}
/**
*/
class Int {

    static __wrap(ptr) {
        const obj = Object.create(Int.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_int_free */ "u"](ptr);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new(x) {
        _assertClass(x, BigNum);
        var ptr0 = x.ptr;
        x.ptr = 0;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new */ "vd"](ptr0);
        return Int.__wrap(ret);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new_negative(x) {
        _assertClass(x, BigNum);
        var ptr0 = x.ptr;
        x.ptr = 0;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new_negative */ "xd"](ptr0);
        return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */
    static new_i32(x) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new_i32 */ "wd"](x);
        return Int.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    is_positive() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_is_positive */ "ud"](this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_positive() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_positive */ "td"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_negative() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_negative */ "sd"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    as_i32() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_i32 */ "rd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
}
/**
*/
class Label {

    static __wrap(ptr) {
        const obj = Object.create(Label.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_label_free */ "v"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_to_bytes */ "Jd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Label}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_bytes */ "Bd"](ptr0, len0);
        return Label.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {Label}
    */
    static new_int(int) {
        _assertClass(int, Int);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_new_int */ "Hd"](int.ptr);
        return Label.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {Label}
    */
    static new_text(text) {
        var ptr0 = passStringToWasm0(text, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "G"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_new_text */ "Id"](ptr0, len0);
        return Label.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_kind */ "Gd"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */
    as_int() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_as_int */ "yd"](this.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    as_text() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_as_text */ "zd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getStringFromWasm0(r0, r1).slice();
                _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {number} id
    * @returns {Label}
    */
    static from_algorithm_id(id) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_algorithm_id */ "Ad"](id);
        return Label.__wrap(ret);
    }
    /**
    * @param {number} key_type
    * @returns {Label}
    */
    static from_key_type(key_type) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_key_type */ "Fd"](key_type);
        return Label.__wrap(ret);
    }
    /**
    * @param {number} ec_key
    * @returns {Label}
    */
    static from_ec_key(ec_key) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_ec_key */ "Dd"](ec_key);
        return Label.__wrap(ret);
    }
    /**
    * @param {number} curve_type
    * @returns {Label}
    */
    static from_curve_type(curve_type) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_curve_type */ "Cd"](curve_type);
        return Label.__wrap(ret);
    }
    /**
    * @param {number} key_op
    * @returns {Label}
    */
    static from_key_operation(key_op) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* label_from_key_operation */ "Ed"](key_op);
        return Label.__wrap(ret);
    }
}
/**
*/
class Labels {

    static __wrap(ptr) {
        const obj = Object.create(Labels.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_labels_free */ "w"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* labels_to_bytes */ "Nd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Labels}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* labels_from_bytes */ "Ld"](ptr0, len0);
        return Labels.__wrap(ret);
    }
    /**
    * @returns {Labels}
    */
    static new() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_new */ "lc"]();
        return Labels.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* coserecipients_len */ "kc"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Label}
    */
    get(index) {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* labels_get */ "Md"](this.ptr, index);
        return Label.__wrap(ret);
    }
    /**
    * @param {Label} elem
    */
    add(elem) {
        _assertClass(elem, Label);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* labels_add */ "Kd"](this.ptr, elem.ptr);
    }
}
/**
*/
class PasswordEncryption {

    static __wrap(ptr) {
        const obj = Object.create(PasswordEncryption.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_passwordencryption_free */ "x"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* passwordencryption_to_bytes */ "Rd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PasswordEncryption}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* passwordencryption_from_bytes */ "Pd"](ptr0, len0);
        return PasswordEncryption.__wrap(ret);
    }
    /**
    * @param {COSEEncrypt0} data
    * @returns {PasswordEncryption}
    */
    static new(data) {
        _assertClass(data, COSEEncrypt0);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* passwordencryption_new */ "Qd"](data.ptr);
        return PasswordEncryption.__wrap(ret);
    }
}
/**
*/
class ProtectedHeaderMap {

    static __wrap(ptr) {
        const obj = Object.create(ProtectedHeaderMap.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_protectedheadermap_free */ "y"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protectedheadermap_to_bytes */ "Wd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtectedHeaderMap}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protectedheadermap_from_bytes */ "Td"](ptr0, len0);
        return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap}
    */
    static new_empty() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protectedheadermap_new_empty */ "Vd"]();
        return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @param {HeaderMap} header_map
    * @returns {ProtectedHeaderMap}
    */
    static new(header_map) {
        _assertClass(header_map, HeaderMap);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protectedheadermap_new */ "Ud"](header_map.ptr);
        return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */
    deserialized_headers() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protectedheadermap_deserialized_headers */ "Sd"](this.ptr);
        return HeaderMap.__wrap(ret);
    }
}
/**
*/
class PubKeyEncryption {

    static __wrap(ptr) {
        const obj = Object.create(PubKeyEncryption.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_pubkeyencryption_free */ "z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pubkeyencryption_to_bytes */ "Zd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PubKeyEncryption}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pubkeyencryption_from_bytes */ "Xd"](ptr0, len0);
        return PubKeyEncryption.__wrap(ret);
    }
    /**
    * @param {COSEEncrypt} data
    * @returns {PubKeyEncryption}
    */
    static new(data) {
        _assertClass(data, COSEEncrypt);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pubkeyencryption_new */ "Yd"](data.ptr);
        return PubKeyEncryption.__wrap(ret);
    }
}
/**
*/
class SigStructure {

    static __wrap(ptr) {
        const obj = Object.create(SigStructure.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_sigstructure_free */ "B"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_to_bytes */ "re"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SigStructure}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_from_bytes */ "me"](ptr0, len0);
        return SigStructure.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    context() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_context */ "ke"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {ProtectedHeaderMap}
    */
    body_protected() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_body_protected */ "je"](this.ptr);
        return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap | undefined}
    */
    sign_protected() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_sign_protected */ "qe"](this.ptr);
        return ret === 0 ? undefined : ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    external_aad() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_external_aad */ "le"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    payload() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_payload */ "oe"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {ProtectedHeaderMap} sign_protected
    */
    set_sign_protected(sign_protected) {
        _assertClass(sign_protected, ProtectedHeaderMap);
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_set_sign_protected */ "pe"](this.ptr, sign_protected.ptr);
    }
    /**
    * @param {number} context
    * @param {ProtectedHeaderMap} body_protected
    * @param {Uint8Array} external_aad
    * @param {Uint8Array} payload
    * @returns {SigStructure}
    */
    static new(context, body_protected, external_aad, payload) {
        _assertClass(body_protected, ProtectedHeaderMap);
        var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* sigstructure_new */ "ne"](context, body_protected.ptr, ptr0, len0, ptr1, len1);
        return SigStructure.__wrap(ret);
    }
}
/**
*/
class SignedMessage {

    static __wrap(ptr) {
        const obj = Object.create(SignedMessage.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_signedmessage_free */ "A"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_to_bytes */ "he"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SignedMessage}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_from_bytes */ "ce"](ptr0, len0);
        return SignedMessage.__wrap(ret);
    }
    /**
    * @param {COSESign} cose_sign
    * @returns {SignedMessage}
    */
    static new_cose_sign(cose_sign) {
        _assertClass(cose_sign, COSESign);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_new_cose_sign */ "fe"](cose_sign.ptr);
        return SignedMessage.__wrap(ret);
    }
    /**
    * @param {COSESign1} cose_sign1
    * @returns {SignedMessage}
    */
    static new_cose_sign1(cose_sign1) {
        _assertClass(cose_sign1, COSESign1);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_new_cose_sign1 */ "ge"](cose_sign1.ptr);
        return SignedMessage.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {SignedMessage}
    */
    static from_user_facing_encoding(s) {
        var ptr0 = passStringToWasm0(s, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "G"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_from_user_facing_encoding */ "de"](ptr0, len0);
        return SignedMessage.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_user_facing_encoding() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_to_user_facing_encoding */ "ie"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1);
        }
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_kind */ "ee"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {COSESign | undefined}
    */
    as_cose_sign() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_as_cose_sign */ "ae"](this.ptr);
        return ret === 0 ? undefined : COSESign.__wrap(ret);
    }
    /**
    * @returns {COSESign1 | undefined}
    */
    as_cose_sign1() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* signedmessage_as_cose_sign1 */ "be"](this.ptr);
        return ret === 0 ? undefined : COSESign1.__wrap(ret);
    }
}
/**
*/
class TaggedCBOR {

    static __wrap(ptr) {
        const obj = Object.create(TaggedCBOR.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_taggedcbor_free */ "C"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* taggedcbor_to_bytes */ "ve"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "E"](r0, r1 * 1);
            return v0;
        } finally {
            _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TaggedCBOR}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* taggedcbor_from_bytes */ "se"](ptr0, len0);
        return TaggedCBOR.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    tag() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* taggedcbor_tag */ "ue"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {CBORValue}
    */
    value() {
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* taggedcbor_value */ "we"](this.ptr);
        return CBORValue.__wrap(ret);
    }
    /**
    * @param {BigNum} tag
    * @param {CBORValue} value
    * @returns {TaggedCBOR}
    */
    static new(tag, value) {
        _assertClass(tag, BigNum);
        var ptr0 = tag.ptr;
        tag.ptr = 0;
        _assertClass(value, CBORValue);
        var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* taggedcbor_new */ "te"](ptr0, value.ptr);
        return TaggedCBOR.__wrap(ret);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbindgen_debug_string(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "G"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_rethrow(arg0) {
    throw takeObject(arg0);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module)))

/***/ }),

/***/ "52b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__("2b64");


// exec wasm module
wasmExports["xe"]()

/***/ }),

/***/ "c9b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b64");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelKind", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignedMessageKind", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigContext", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORSpecialType", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORValueKind", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgorithmId", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyType", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ECKey", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurveType", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyOperation", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BigNum", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORArray", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORObject", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORSpecial", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBORValue", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSEEncrypt", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSEEncrypt0", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSEKey", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSERecipient", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSERecipients", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESign", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESign1", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESign1Builder", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESignBuilder", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESignature", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSESignatures", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CounterSignature", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdDSA25519Key", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderMap", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Labels", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordEncryption", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProtectedHeaderMap", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PubKeyEncryption", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigStructure", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignedMessage", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaggedCBOR", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__["P"]; });




/***/ }),

/***/ "dd40":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=web3-cardano-token.umd.3.js.map