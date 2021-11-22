((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[2],{

/***/ "3e8f":
/***/ (function(module, exports) {



/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "4a9b":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "4e10":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "4e10";

/***/ }),

/***/ "5640":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fb6a");

__webpack_require__("dca8");

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "57ad":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var _classCallCheck = __webpack_require__("970b").default;

var _createClass = __webpack_require__("5bc3").default;

var _typeof = __webpack_require__("7037").default;

var _taggedTemplateLiteral = __webpack_require__("5640").default;

var _templateObject;

__webpack_require__("d80f");

__webpack_require__("cb29");

__webpack_require__("e260");

__webpack_require__("d3b7");

__webpack_require__("5cc6");

__webpack_require__("9a8c");

__webpack_require__("a975");

__webpack_require__("735e");

__webpack_require__("c1ac");

__webpack_require__("d139");

__webpack_require__("3a7b");

__webpack_require__("d5d6");

__webpack_require__("82f8");

__webpack_require__("e91f");

__webpack_require__("60bd");

__webpack_require__("5f96");

__webpack_require__("3280");

__webpack_require__("3fcc");

__webpack_require__("ca91");

__webpack_require__("25a1");

__webpack_require__("cd26");

__webpack_require__("3c5d");

__webpack_require__("2954");

__webpack_require__("649e");

__webpack_require__("219c");

__webpack_require__("170b");

__webpack_require__("b39a");

__webpack_require__("72f7");

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("b0c0");

__webpack_require__("ac1f");

__webpack_require__("99af");

__webpack_require__("fb6a");

__webpack_require__("143c");

__webpack_require__("4a9b");

__webpack_require__("dca8");

__webpack_require__("a15b");

var imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
var wasm;

var _require = __webpack_require__("4e10")(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["util"])))),
    TextDecoder = _require.TextDecoder,
    TextEncoder = _require.TextEncoder;

var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

var heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  var ret = getObject(idx);
  dropObject(idx);
  return ret;
}

var cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  var idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}

function debugString(val) {
  // primitive types
  var type = _typeof(val);

  if (type == 'number' || type == 'boolean' || val == null) {
    return "".concat(val);
  }

  if (type == 'string') {
    return "\"".concat(val, "\"");
  }

  if (type == 'symbol') {
    var description = val.description;

    if (description == null) {
      return 'Symbol';
    } else {
      return "Symbol(".concat(description, ")");
    }
  }

  if (type == 'function') {
    var name = val.name;

    if (typeof name == 'string' && name.length > 0) {
      return "Function(".concat(name, ")");
    } else {
      return 'Function';
    }
  } // objects


  if (Array.isArray(val)) {
    var length = val.length;
    var debug = '[';

    if (length > 0) {
      debug += debugString(val[0]);
    }

    for (var i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }

    debug += ']';
    return debug;
  } // Test for built-in


  var builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  var className;

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
  } // errors


  if (val instanceof Error) {
    return "".concat(val.name, ": ").concat(val.message, "\n").concat(val.stack);
  } // TODO we could test for more things here, like `Set`s and `Map`s.


  return className;
}

var WASM_VECTOR_LEN = 0;
var cachedTextEncoder = new TextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);

    var _ptr = malloc(buf.length);

    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }

  var len = arg.length;
  var ptr = malloc(len);
  var mem = getUint8Memory0();
  var offset = 0;

  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

var cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function passArray8ToWasm0(arg, malloc) {
  var ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}

function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error("expected instance of ".concat(klass.name));
  }

  return instance.ptr;
}

function isLikeNone(x) {
  return x === undefined || x === null;
}

var cachegetFloat64Memory0 = null;

function getFloat64Memory0() {
  if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
    cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }

  return cachegetFloat64Memory0;
}
/**
*/


module.exports.LabelKind = Object.freeze({
  Int: 0,
  "0": "Int",
  Text: 1,
  "1": "Text"
});
/**
*/

module.exports.SignedMessageKind = Object.freeze({
  COSESIGN: 0,
  "0": "COSESIGN",
  COSESIGN1: 1,
  "1": "COSESIGN1"
});
/**
*/

module.exports.SigContext = Object.freeze({
  Signature: 0,
  "0": "Signature",
  Signature1: 1,
  "1": "Signature1",
  CounterSignature: 2,
  "2": "CounterSignature"
});
/**
*/

module.exports.CBORSpecialType = Object.freeze({
  Bool: 0,
  "0": "Bool",
  Float: 1,
  "1": "Float",
  Unassigned: 2,
  "2": "Unassigned",
  Break: 3,
  "3": "Break",
  Undefined: 4,
  "4": "Undefined",
  Null: 5,
  "5": "Null"
});
/**
*/

module.exports.CBORValueKind = Object.freeze({
  Int: 0,
  "0": "Int",
  Bytes: 1,
  "1": "Bytes",
  Text: 2,
  "2": "Text",
  Array: 3,
  "3": "Array",
  Object: 4,
  "4": "Object",
  TaggedCBOR: 5,
  "5": "TaggedCBOR",
  Special: 6,
  "6": "Special"
});
/**
*/

module.exports.AlgorithmId = Object.freeze({
  /**
  *r" EdDSA (Pure EdDSA, not HashedEdDSA) - the algorithm used for Cardano addresses
  */
  EdDSA: 0,
  "0": "EdDSA",

  /**
  *r" ChaCha20/Poly1305 w/ 256-bit key, 128-bit tag
  */
  ChaCha20Poly1305: 1,
  "1": "ChaCha20Poly1305"
});
/**
*/

module.exports.KeyType = Object.freeze({
  /**
  *r" octet key pair
  */
  OKP: 0,
  "0": "OKP",

  /**
  *r" 2-coord EC
  */
  EC2: 1,
  "1": "EC2",
  Symmetric: 2,
  "2": "Symmetric"
});
/**
*/

module.exports.ECKey = Object.freeze({
  CRV: 0,
  "0": "CRV",
  X: 1,
  "1": "X",
  Y: 2,
  "2": "Y",
  D: 3,
  "3": "D"
});
/**
*/

module.exports.CurveType = Object.freeze({
  P256: 0,
  "0": "P256",
  P384: 1,
  "1": "P384",
  P521: 2,
  "2": "P521",
  X25519: 3,
  "3": "X25519",
  X448: 4,
  "4": "X448",
  Ed25519: 5,
  "5": "Ed25519",
  Ed448: 6,
  "6": "Ed448"
});
/**
*/

module.exports.KeyOperation = Object.freeze({
  Sign: 0,
  "0": "Sign",
  Verify: 1,
  "1": "Verify",
  Encrypt: 2,
  "2": "Encrypt",
  Decrypt: 3,
  "3": "Decrypt",
  WrapKey: 4,
  "4": "WrapKey",
  UnwrapKey: 5,
  "5": "UnwrapKey",
  DeriveKey: 6,
  "6": "DeriveKey",
  DeriveBits: 7,
  "7": "DeriveBits"
});
/**
*/

var BigNum = /*#__PURE__*/function () {
  "use strict";

  function BigNum() {
    _classCallCheck(this, BigNum);
  }

  _createClass(BigNum, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_bignum_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bignum_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BigNum}
    */

  }, {
    key: "to_str",
    value:
    /**
    * @returns {string}
    */
    function to_str() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bignum_to_str(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */

  }, {
    key: "checked_mul",
    value: function checked_mul(other) {
      _assertClass(other, BigNum);

      var ret = wasm.bignum_checked_mul(this.ptr, other.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */

  }, {
    key: "checked_add",
    value: function checked_add(other) {
      _assertClass(other, BigNum);

      var ret = wasm.bignum_checked_add(this.ptr, other.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */

  }, {
    key: "checked_sub",
    value: function checked_sub(other) {
      _assertClass(other, BigNum);

      var ret = wasm.bignum_checked_sub(this.ptr, other.ptr);
      return BigNum.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BigNum.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bignum_from_bytes(ptr0, len0);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */

  }, {
    key: "from_str",
    value: function from_str(string) {
      var ptr0 = passStringToWasm0(string, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bignum_from_str(ptr0, len0);
      return BigNum.__wrap(ret);
    }
  }]);

  return BigNum;
}();

module.exports.BigNum = BigNum;
/**
*/

var CBORArray = /*#__PURE__*/function () {
  "use strict";

  function CBORArray() {
    _classCallCheck(this, CBORArray);
  }

  _createClass(CBORArray, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cborarray_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborarray_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORArray}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.cborarray_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {CBORValue}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.cborarray_get(this.ptr, index);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORValue} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, CBORValue);

      wasm.cborarray_add(this.ptr, elem.ptr);
    }
    /**
    * @param {boolean} use_definite
    */

  }, {
    key: "set_definite_encoding",
    value: function set_definite_encoding(use_definite) {
      wasm.cborarray_set_definite_encoding(this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_definite",
    value: function is_definite() {
      var ret = wasm.cborarray_is_definite(this.ptr);
      return ret !== 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CBORArray.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborarray_from_bytes(ptr0, len0);
      return CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.cborarray_new();
      return CBORArray.__wrap(ret);
    }
  }]);

  return CBORArray;
}();

module.exports.CBORArray = CBORArray;
/**
*/

var CBORObject = /*#__PURE__*/function () {
  "use strict";

  function CBORObject() {
    _classCallCheck(this, CBORObject);
  }

  _createClass(CBORObject, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cborobject_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborobject_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORObject}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.cborobject_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {CBORValue} key
    * @param {CBORValue} value
    * @returns {CBORValue | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, CBORValue);

      _assertClass(value, CBORValue);

      var ret = wasm.cborobject_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORValue} key
    * @returns {CBORValue | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, CBORValue);

      var ret = wasm.cborobject_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.cborobject_keys(this.ptr);
      return CBORArray.__wrap(ret);
    }
    /**
    * @param {boolean} use_definite
    */

  }, {
    key: "set_definite_encoding",
    value: function set_definite_encoding(use_definite) {
      wasm.cborobject_set_definite_encoding(this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_definite",
    value: function is_definite() {
      var ret = wasm.cborobject_is_definite(this.ptr);
      return ret !== 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CBORObject.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborobject_from_bytes(ptr0, len0);
      return CBORObject.__wrap(ret);
    }
    /**
    * @returns {CBORObject}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.cborobject_new();
      return CBORObject.__wrap(ret);
    }
  }]);

  return CBORObject;
}();

module.exports.CBORObject = CBORObject;
/**
*/

var CBORSpecial = /*#__PURE__*/function () {
  "use strict";

  function CBORSpecial() {
    _classCallCheck(this, CBORSpecial);
  }

  _createClass(CBORSpecial, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cborspecial_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborspecial_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORSpecial}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.cborspecial_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {boolean | undefined}
    */

  }, {
    key: "as_bool",
    value: function as_bool() {
      var ret = wasm.cborspecial_as_bool(this.ptr);
      return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_float",
    value: function as_float() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborspecial_as_float(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_unassigned",
    value: function as_unassigned() {
      var ret = wasm.cborspecial_as_unassigned(this.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CBORSpecial.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborspecial_from_bytes(ptr0, len0);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {boolean} b
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_bool",
    value: function new_bool(b) {
      var ret = wasm.cborspecial_new_bool(b);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {number} u
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_unassigned",
    value: function new_unassigned(u) {
      var ret = wasm.cborspecial_new_unassigned(u);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_break",
    value: function new_break() {
      var ret = wasm.cborspecial_new_break();
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_null",
    value: function new_null() {
      var ret = wasm.cborspecial_new_null();
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_undefined",
    value: function new_undefined() {
      var ret = wasm.cborspecial_new_undefined();
      return CBORSpecial.__wrap(ret);
    }
  }]);

  return CBORSpecial;
}();

module.exports.CBORSpecial = CBORSpecial;
/**
*/

var CBORValue = /*#__PURE__*/function () {
  "use strict";

  function CBORValue() {
    _classCallCheck(this, CBORValue);
  }

  _createClass(CBORValue, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cborvalue_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborvalue_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORValue}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.cborvalue_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = wasm.cborvalue_as_int(this.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborvalue_as_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {string | undefined}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cborvalue_as_text(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getStringFromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {CBORArray | undefined}
    */

  }, {
    key: "as_array",
    value: function as_array() {
      var ret = wasm.cborvalue_as_array(this.ptr);
      return ret === 0 ? undefined : CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORObject | undefined}
    */

  }, {
    key: "as_object",
    value: function as_object() {
      var ret = wasm.cborvalue_as_object(this.ptr);
      return ret === 0 ? undefined : CBORObject.__wrap(ret);
    }
    /**
    * @returns {TaggedCBOR | undefined}
    */

  }, {
    key: "as_tagged",
    value: function as_tagged() {
      var ret = wasm.cborvalue_as_tagged(this.ptr);
      return ret === 0 ? undefined : TaggedCBOR.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial | undefined}
    */

  }, {
    key: "as_special",
    value: function as_special() {
      var ret = wasm.cborvalue_as_special(this.ptr);
      return ret === 0 ? undefined : CBORSpecial.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CBORValue.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborvalue_from_bytes(ptr0, len0);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {CBORValue}
    */

  }, {
    key: "new_int",
    value: function new_int(int) {
      _assertClass(int, Int);

      var ret = wasm.cborvalue_new_int(int.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORValue}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborvalue_new_bytes(ptr0, len0);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {CBORValue}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cborvalue_new_text(ptr0, len0);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORArray} arr
    * @returns {CBORValue}
    */

  }, {
    key: "new_array",
    value: function new_array(arr) {
      _assertClass(arr, CBORArray);

      var ret = wasm.cborvalue_new_array(arr.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORObject} obj
    * @returns {CBORValue}
    */

  }, {
    key: "new_object",
    value: function new_object(obj) {
      _assertClass(obj, CBORObject);

      var ret = wasm.cborvalue_new_object(obj.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {TaggedCBOR} tagged
    * @returns {CBORValue}
    */

  }, {
    key: "new_tagged",
    value: function new_tagged(tagged) {
      _assertClass(tagged, TaggedCBOR);

      var ret = wasm.cborvalue_new_tagged(tagged.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORSpecial} special
    * @returns {CBORValue}
    */

  }, {
    key: "new_special",
    value: function new_special(special) {
      _assertClass(special, CBORSpecial);

      var ret = wasm.cborvalue_new_special(special.ptr);
      return CBORValue.__wrap(ret);
    }
  }]);

  return CBORValue;
}();

module.exports.CBORValue = CBORValue;
/**
*/

var COSEEncrypt = /*#__PURE__*/function () {
  "use strict";

  function COSEEncrypt() {
    _classCallCheck(this, COSEEncrypt);
  }

  _createClass(COSEEncrypt, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_coseencrypt_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEEncrypt}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_ciphertext(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {COSERecipients}
    */

  }, {
    key: "recipients",
    value: function recipients() {
      var ret = wasm.coseencrypt_recipients(this.ptr);
      return COSERecipients.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @param {COSERecipients} recipients
    * @returns {COSEEncrypt}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSEEncrypt.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coseencrypt_from_bytes(ptr0, len0);
      return COSEEncrypt.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext, recipients) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(recipients, COSERecipients);

      var ret = wasm.coseencrypt_new(headers.ptr, ptr0, len0, recipients.ptr);
      return COSEEncrypt.__wrap(ret);
    }
  }]);

  return COSEEncrypt;
}();

module.exports.COSEEncrypt = COSEEncrypt;
/**
*/

var COSEEncrypt0 = /*#__PURE__*/function () {
  "use strict";

  function COSEEncrypt0() {
    _classCallCheck(this, COSEEncrypt0);
  }

  _createClass(COSEEncrypt0, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_coseencrypt0_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEEncrypt0}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_ciphertext(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @returns {COSEEncrypt0}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSEEncrypt0.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coseencrypt0_from_bytes(ptr0, len0);
      return COSEEncrypt0.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coseencrypt0_new(headers.ptr, ptr0, len0);
      return COSEEncrypt0.__wrap(ret);
    }
  }]);

  return COSEEncrypt0;
}();

module.exports.COSEEncrypt0 = COSEEncrypt0;
/**
*/

var COSEKey = /*#__PURE__*/function () {
  "use strict";

  function COSEKey() {
    _classCallCheck(this, COSEKey);
  }

  _createClass(COSEKey, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosekey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosekey_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSEKey}
    */

  }, {
    key: "set_key_type",
    value:
    /**
    * @param {Label} key_type
    */
    function set_key_type(key_type) {
      _assertClass(key_type, Label);

      wasm.cosekey_set_key_type(this.ptr, key_type.ptr);
    }
    /**
    * @returns {Label}
    */

  }, {
    key: "key_type",
    value: function key_type() {
      var ret = wasm.cosekey_key_type(this.ptr);
      return Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */

  }, {
    key: "set_key_id",
    value: function set_key_id(key_id) {
      var ptr0 = passArray8ToWasm0(key_id, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.cosekey_set_key_id(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "key_id",
    value: function key_id() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosekey_key_id(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Label} algorithm_id
    */

  }, {
    key: "set_algorithm_id",
    value: function set_algorithm_id(algorithm_id) {
      _assertClass(algorithm_id, Label);

      wasm.cosekey_set_algorithm_id(this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "algorithm_id",
    value: function algorithm_id() {
      var ret = wasm.cosekey_algorithm_id(this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} key_ops
    */

  }, {
    key: "set_key_ops",
    value: function set_key_ops(key_ops) {
      _assertClass(key_ops, Labels);

      wasm.cosekey_set_key_ops(this.ptr, key_ops.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */

  }, {
    key: "key_ops",
    value: function key_ops() {
      var ret = wasm.cosekey_key_ops(this.ptr);
      return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Uint8Array} base_init_vector
    */

  }, {
    key: "set_base_init_vector",
    value: function set_base_init_vector(base_init_vector) {
      var ptr0 = passArray8ToWasm0(base_init_vector, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.cosekey_set_base_init_vector(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "base_init_vector",
    value: function base_init_vector() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosekey_base_init_vector(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Label} label
    * @returns {CBORValue | undefined}
    */

  }, {
    key: "header",
    value: function header(label) {
      _assertClass(label, Label);

      var ret = wasm.cosekey_header(this.ptr, label.ptr);
      return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @param {CBORValue} value
    */

  }, {
    key: "set_header",
    value: function set_header(label, value) {
      _assertClass(label, Label);

      _assertClass(value, CBORValue);

      wasm.cosekey_set_header(this.ptr, label.ptr, value.ptr);
    }
    /**
    * @param {Label} key_type
    * @returns {COSEKey}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSEKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosekey_from_bytes(ptr0, len0);
      return COSEKey.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(key_type) {
      _assertClass(key_type, Label);

      var ret = wasm.cosekey_new(key_type.ptr);
      return COSEKey.__wrap(ret);
    }
  }]);

  return COSEKey;
}();

module.exports.COSEKey = COSEKey;
/**
*/

var COSERecipient = /*#__PURE__*/function () {
  "use strict";

  function COSERecipient() {
    _classCallCheck(this, COSERecipient);
  }

  _createClass(COSERecipient, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_coserecipient_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coserecipient_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSERecipient}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_ciphertext(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} ciphertext
    * @returns {COSERecipient}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSERecipient.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coserecipient_from_bytes(ptr0, len0);
      return COSERecipient.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coseencrypt0_new(headers.ptr, ptr0, len0);
      return COSERecipient.__wrap(ret);
    }
  }]);

  return COSERecipient;
}();

module.exports.COSERecipient = COSERecipient;
/**
*/

var COSERecipients = /*#__PURE__*/function () {
  "use strict";

  function COSERecipients() {
    _classCallCheck(this, COSERecipients);
  }

  _createClass(COSERecipients, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_coserecipients_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coserecipients_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSERecipients}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.coserecipients_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSERecipient}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.coserecipients_get(this.ptr, index);
      return COSERecipient.__wrap(ret);
    }
    /**
    * @param {COSERecipient} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, COSERecipient);

      wasm.coserecipients_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSERecipients.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.coserecipients_from_bytes(ptr0, len0);
      return COSERecipients.__wrap(ret);
    }
    /**
    * @returns {COSERecipients}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.coserecipients_new();
      return COSERecipients.__wrap(ret);
    }
  }]);

  return COSERecipients;
}();

module.exports.COSERecipients = COSERecipients;
/**
*/

var COSESign = /*#__PURE__*/function () {
  "use strict";

  function COSESign() {
    _classCallCheck(this, COSESign);
  }

  _createClass(COSESign, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesign_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesign_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESign}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_ciphertext(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {COSESignatures}
    */

  }, {
    key: "signatures",
    value: function signatures() {
      var ret = wasm.cosesign_signatures(this.ptr);
      return COSESignatures.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} payload
    * @param {COSESignatures} signatures
    * @returns {COSESign}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESign.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign_from_bytes(ptr0, len0);
      return COSESign.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, payload, signatures) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(signatures, COSESignatures);

      var ret = wasm.cosesign_new(headers.ptr, ptr0, len0, signatures.ptr);
      return COSESign.__wrap(ret);
    }
  }]);

  return COSESign;
}();

module.exports.COSESign = COSESign;
/**
*/

var COSESign1 = /*#__PURE__*/function () {
  "use strict";

  function COSESign1() {
    _classCallCheck(this, COSESign1);
  }

  _createClass(COSESign1, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesign1_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesign1_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESign1}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.coseencrypt0_ciphertext(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "signature",
    value: function signature() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesign1_signature(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
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

  }, {
    key: "signed_data",
    value: function signed_data(external_aad, external_payload) {
      var ptr0 = isLikeNone(external_aad) ? 0 : passArray8ToWasm0(external_aad, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = isLikeNone(external_payload) ? 0 : passArray8ToWasm0(external_payload, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign1_signed_data(this.ptr, ptr0, len0, ptr1, len1);
      return SigStructure.__wrap(ret);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array | undefined} payload
    * @param {Uint8Array} signature
    * @returns {COSESign1}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESign1.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign1_from_bytes(ptr0, len0);
      return COSESign1.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, payload, signature) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign1_new(headers.ptr, ptr0, len0, ptr1, len1);
      return COSESign1.__wrap(ret);
    }
  }]);

  return COSESign1;
}();

module.exports.COSESign1 = COSESign1;
/**
*/

var COSESign1Builder = /*#__PURE__*/function () {
  "use strict";

  function COSESign1Builder() {
    _classCallCheck(this, COSESign1Builder);
  }

  _createClass(COSESign1Builder, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesign1builder_free(ptr);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} payload
    * @param {boolean} is_payload_external
    * @returns {COSESign1Builder}
    */

  }, {
    key: "hash_payload",
    value:
    /**
    */
    function hash_payload() {
      wasm.cosesign1builder_hash_payload(this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */

  }, {
    key: "set_external_aad",
    value: function set_external_aad(external_aad) {
      var ptr0 = passArray8ToWasm0(external_aad, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.cosesign1builder_set_external_aad(this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */

  }, {
    key: "make_data_to_sign",
    value: function make_data_to_sign() {
      var ret = wasm.cosesign1builder_make_data_to_sign(this.ptr);
      return SigStructure.__wrap(ret);
    }
    /**
    * @param {Uint8Array} signed_sig_structure
    * @returns {COSESign1}
    */

  }, {
    key: "build",
    value: function build(signed_sig_structure) {
      var ptr0 = passArray8ToWasm0(signed_sig_structure, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign1builder_build(this.ptr, ptr0, len0);
      return COSESign1.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESign1Builder.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(headers, payload, is_payload_external) {
      _assertClass(headers, Headers);

      var ptr0 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesign1builder_new(headers.ptr, ptr0, len0, is_payload_external);
      return COSESign1Builder.__wrap(ret);
    }
  }]);

  return COSESign1Builder;
}();

module.exports.COSESign1Builder = COSESign1Builder;
/**
*/

var COSESignBuilder = /*#__PURE__*/function () {
  "use strict";

  function COSESignBuilder() {
    _classCallCheck(this, COSESignBuilder);
  }

  _createClass(COSESignBuilder, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesignbuilder_free(ptr);
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} payload
    * @param {boolean} is_payload_external
    * @returns {COSESignBuilder}
    */

  }, {
    key: "hash_payload",
    value:
    /**
    */
    function hash_payload() {
      wasm.cosesign1builder_hash_payload(this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */

  }, {
    key: "set_external_aad",
    value: function set_external_aad(external_aad) {
      var ptr0 = passArray8ToWasm0(external_aad, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.cosesign1builder_set_external_aad(this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */

  }, {
    key: "make_data_to_sign",
    value: function make_data_to_sign() {
      var ret = wasm.cosesignbuilder_make_data_to_sign(this.ptr);
      return SigStructure.__wrap(ret);
    }
    /**
    * @param {COSESignatures} signed_sig_structure
    * @returns {COSESign}
    */

  }, {
    key: "build",
    value: function build(signed_sig_structure) {
      _assertClass(signed_sig_structure, COSESignatures);

      var ret = wasm.cosesignbuilder_build(this.ptr, signed_sig_structure.ptr);
      return COSESign.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESignBuilder.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(headers, payload, is_payload_external) {
      _assertClass(headers, Headers);

      var ptr0 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesignbuilder_new(headers.ptr, ptr0, len0, is_payload_external);
      return COSESignBuilder.__wrap(ret);
    }
  }]);

  return COSESignBuilder;
}();

module.exports.COSESignBuilder = COSESignBuilder;
/**
*/

var COSESignature = /*#__PURE__*/function () {
  "use strict";

  function COSESignature() {
    _classCallCheck(this, COSESignature);
  }

  _createClass(COSESignature, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesignature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesignature_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESignature}
    */

  }, {
    key: "headers",
    value:
    /**
    * @returns {Headers}
    */
    function headers() {
      var ret = wasm.coseencrypt0_headers(this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "signature",
    value: function signature() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesignature_signature(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Headers} headers
    * @param {Uint8Array} signature
    * @returns {COSESignature}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESignature.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesignature_from_bytes(ptr0, len0);
      return COSESignature.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, signature) {
      _assertClass(headers, Headers);

      var ptr0 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesignature_new(headers.ptr, ptr0, len0);
      return COSESignature.__wrap(ret);
    }
  }]);

  return COSESignature;
}();

module.exports.COSESignature = COSESignature;
/**
*/

var COSESignatures = /*#__PURE__*/function () {
  "use strict";

  function COSESignatures() {
    _classCallCheck(this, COSESignatures);
  }

  _createClass(COSESignatures, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_cosesignatures_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosesignatures_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {COSESignatures}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.coserecipients_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSESignature}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.cosesignatures_get(this.ptr, index);
      return COSESignature.__wrap(ret);
    }
    /**
    * @param {COSESignature} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, COSESignature);

      wasm.cosesignatures_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(COSESignatures.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.cosesignatures_from_bytes(ptr0, len0);
      return COSESignatures.__wrap(ret);
    }
    /**
    * @returns {COSESignatures}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.coserecipients_new();
      return COSESignatures.__wrap(ret);
    }
  }]);

  return COSESignatures;
}();

module.exports.COSESignatures = COSESignatures;
/**
*/

var CounterSignature = /*#__PURE__*/function () {
  "use strict";

  function CounterSignature() {
    _classCallCheck(this, CounterSignature);
  }

  _createClass(CounterSignature, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_countersignature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.countersignature_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CounterSignature}
    */

  }, {
    key: "signatures",
    value:
    /**
    * @returns {COSESignatures}
    */
    function signatures() {
      var ret = wasm.countersignature_signatures(this.ptr);
      return COSESignatures.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CounterSignature.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.countersignature_from_bytes(ptr0, len0);
      return CounterSignature.__wrap(ret);
    }
    /**
    * @param {COSESignature} cose_signature
    * @returns {CounterSignature}
    */

  }, {
    key: "new_single",
    value: function new_single(cose_signature) {
      _assertClass(cose_signature, COSESignature);

      var ret = wasm.countersignature_new_single(cose_signature.ptr);
      return CounterSignature.__wrap(ret);
    }
    /**
    * @param {COSESignatures} cose_signatures
    * @returns {CounterSignature}
    */

  }, {
    key: "new_multi",
    value: function new_multi(cose_signatures) {
      _assertClass(cose_signatures, COSESignatures);

      var ret = wasm.countersignature_new_multi(cose_signatures.ptr);
      return CounterSignature.__wrap(ret);
    }
  }]);

  return CounterSignature;
}();

module.exports.CounterSignature = CounterSignature;
/**
*/

var EdDSA25519Key = /*#__PURE__*/function () {
  "use strict";

  function EdDSA25519Key() {
    _classCallCheck(this, EdDSA25519Key);
  }

  _createClass(EdDSA25519Key, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_eddsa25519key_free(ptr);
    }
    /**
    * @param {Uint8Array} pubkey_bytes
    * @returns {EdDSA25519Key}
    */

  }, {
    key: "set_private_key",
    value:
    /**
    * @param {Uint8Array} private_key_bytes
    */
    function set_private_key(private_key_bytes) {
      var ptr0 = passArray8ToWasm0(private_key_bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.eddsa25519key_set_private_key(this.ptr, ptr0, len0);
    }
    /**
    */

  }, {
    key: "is_for_signing",
    value: function is_for_signing() {
      wasm.eddsa25519key_is_for_signing(this.ptr);
    }
    /**
    */

  }, {
    key: "is_for_verifying",
    value: function is_for_verifying() {
      wasm.eddsa25519key_is_for_verifying(this.ptr);
    }
    /**
    * @returns {COSEKey}
    */

  }, {
    key: "build",
    value: function build() {
      var ret = wasm.eddsa25519key_build(this.ptr);
      return COSEKey.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(EdDSA25519Key.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(pubkey_bytes) {
      var ptr0 = passArray8ToWasm0(pubkey_bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.eddsa25519key_new(ptr0, len0);
      return EdDSA25519Key.__wrap(ret);
    }
  }]);

  return EdDSA25519Key;
}();

module.exports.EdDSA25519Key = EdDSA25519Key;
/**
*/

var HeaderMap = /*#__PURE__*/function () {
  "use strict";

  function HeaderMap() {
    _classCallCheck(this, HeaderMap);
  }

  _createClass(HeaderMap, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_headermap_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.headermap_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {HeaderMap}
    */

  }, {
    key: "set_algorithm_id",
    value:
    /**
    * @param {Label} algorithm_id
    */
    function set_algorithm_id(algorithm_id) {
      _assertClass(algorithm_id, Label);

      wasm.headermap_set_algorithm_id(this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "algorithm_id",
    value: function algorithm_id() {
      var ret = wasm.headermap_algorithm_id(this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} criticality
    */

  }, {
    key: "set_criticality",
    value: function set_criticality(criticality) {
      _assertClass(criticality, Labels);

      wasm.headermap_set_criticality(this.ptr, criticality.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */

  }, {
    key: "criticality",
    value: function criticality() {
      var ret = wasm.headermap_criticality(this.ptr);
      return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Label} content_type
    */

  }, {
    key: "set_content_type",
    value: function set_content_type(content_type) {
      _assertClass(content_type, Label);

      wasm.cosekey_set_algorithm_id(this.ptr, content_type.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "content_type",
    value: function content_type() {
      var ret = wasm.cosekey_algorithm_id(this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */

  }, {
    key: "set_key_id",
    value: function set_key_id(key_id) {
      var ptr0 = passArray8ToWasm0(key_id, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.headermap_set_key_id(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "key_id",
    value: function key_id() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.headermap_key_id(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} init_vector
    */

  }, {
    key: "set_init_vector",
    value: function set_init_vector(init_vector) {
      var ptr0 = passArray8ToWasm0(init_vector, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.cosekey_set_base_init_vector(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "init_vector",
    value: function init_vector() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.cosekey_base_init_vector(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} partial_init_vector
    */

  }, {
    key: "set_partial_init_vector",
    value: function set_partial_init_vector(partial_init_vector) {
      var ptr0 = passArray8ToWasm0(partial_init_vector, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.headermap_set_partial_init_vector(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "partial_init_vector",
    value: function partial_init_vector() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.headermap_partial_init_vector(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {CounterSignature} counter_signature
    */

  }, {
    key: "set_counter_signature",
    value: function set_counter_signature(counter_signature) {
      _assertClass(counter_signature, CounterSignature);

      wasm.headermap_set_counter_signature(this.ptr, counter_signature.ptr);
    }
    /**
    * @returns {CounterSignature | undefined}
    */

  }, {
    key: "counter_signature",
    value: function counter_signature() {
      var ret = wasm.headermap_counter_signature(this.ptr);
      return ret === 0 ? undefined : CounterSignature.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @returns {CBORValue | undefined}
    */

  }, {
    key: "header",
    value: function header(label) {
      _assertClass(label, Label);

      var ret = wasm.headermap_header(this.ptr, label.ptr);
      return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @param {Label} label
    * @param {CBORValue} value
    */

  }, {
    key: "set_header",
    value: function set_header(label, value) {
      _assertClass(label, Label);

      _assertClass(value, CBORValue);

      wasm.headermap_set_header(this.ptr, label.ptr, value.ptr);
    }
    /**
    * @returns {Labels}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.headermap_keys(this.ptr);
      return Labels.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(HeaderMap.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.headermap_from_bytes(ptr0, len0);
      return HeaderMap.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.headermap_new();
      return HeaderMap.__wrap(ret);
    }
  }]);

  return HeaderMap;
}();

module.exports.HeaderMap = HeaderMap;
/**
*/

var Headers = /*#__PURE__*/function () {
  "use strict";

  function Headers() {
    _classCallCheck(this, Headers);
  }

  _createClass(Headers, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_headers_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.headers_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Headers}
    */

  }, {
    key: "protected",
    value:
    /**
    * @returns {ProtectedHeaderMap}
    */
    function _protected() {
      var ret = wasm.headers_protected(this.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */

  }, {
    key: "unprotected",
    value: function unprotected() {
      var ret = wasm.headers_unprotected(this.ptr);
      return HeaderMap.__wrap(ret);
    }
    /**
    * @param {ProtectedHeaderMap} protected_
    * @param {HeaderMap} unprotected_
    * @returns {Headers}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Headers.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.headers_from_bytes(ptr0, len0);
      return Headers.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(protected_, unprotected_) {
      _assertClass(protected_, ProtectedHeaderMap);

      _assertClass(unprotected_, HeaderMap);

      var ret = wasm.headers_new(protected_.ptr, unprotected_.ptr);
      return Headers.__wrap(ret);
    }
  }]);

  return Headers;
}();

module.exports.Headers = Headers;
/**
*/

var Int = /*#__PURE__*/function () {
  "use strict";

  function Int() {
    _classCallCheck(this, Int);
  }

  _createClass(Int, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_int_free(ptr);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */

  }, {
    key: "is_positive",
    value:
    /**
    * @returns {boolean}
    */
    function is_positive() {
      var ret = wasm.int_is_positive(this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_positive",
    value: function as_positive() {
      var ret = wasm.int_as_positive(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_negative",
    value: function as_negative() {
      var ret = wasm.int_as_negative(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_i32",
    value: function as_i32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.int_as_i32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Int.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(x) {
      _assertClass(x, BigNum);

      var ptr0 = x.ptr;
      x.ptr = 0;
      var ret = wasm.int_new(ptr0);
      return Int.__wrap(ret);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */

  }, {
    key: "new_negative",
    value: function new_negative(x) {
      _assertClass(x, BigNum);

      var ptr0 = x.ptr;
      x.ptr = 0;
      var ret = wasm.int_new_negative(ptr0);
      return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */

  }, {
    key: "new_i32",
    value: function new_i32(x) {
      var ret = wasm.int_new_i32(x);
      return Int.__wrap(ret);
    }
  }]);

  return Int;
}();

module.exports.Int = Int;
/**
*/

var Label = /*#__PURE__*/function () {
  "use strict";

  function Label() {
    _classCallCheck(this, Label);
  }

  _createClass(Label, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_label_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.label_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Label}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.label_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = wasm.label_as_int(this.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.label_as_text(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getStringFromWasm0(r0, r1).slice();

          wasm.__wbindgen_free(r0, r1 * 1);
        }

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {number} id
    * @returns {Label}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Label.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.label_from_bytes(ptr0, len0);
      return Label.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {Label}
    */

  }, {
    key: "new_int",
    value: function new_int(int) {
      _assertClass(int, Int);

      var ret = wasm.label_new_int(int.ptr);
      return Label.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {Label}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.label_new_text(ptr0, len0);
      return Label.__wrap(ret);
    }
  }, {
    key: "from_algorithm_id",
    value: function from_algorithm_id(id) {
      var ret = wasm.label_from_algorithm_id(id);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} key_type
    * @returns {Label}
    */

  }, {
    key: "from_key_type",
    value: function from_key_type(key_type) {
      var ret = wasm.label_from_key_type(key_type);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} ec_key
    * @returns {Label}
    */

  }, {
    key: "from_ec_key",
    value: function from_ec_key(ec_key) {
      var ret = wasm.label_from_ec_key(ec_key);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} curve_type
    * @returns {Label}
    */

  }, {
    key: "from_curve_type",
    value: function from_curve_type(curve_type) {
      var ret = wasm.label_from_curve_type(curve_type);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} key_op
    * @returns {Label}
    */

  }, {
    key: "from_key_operation",
    value: function from_key_operation(key_op) {
      var ret = wasm.label_from_key_operation(key_op);
      return Label.__wrap(ret);
    }
  }]);

  return Label;
}();

module.exports.Label = Label;
/**
*/

var Labels = /*#__PURE__*/function () {
  "use strict";

  function Labels() {
    _classCallCheck(this, Labels);
  }

  _createClass(Labels, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_labels_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.labels_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Labels}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.coserecipients_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Label}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.labels_get(this.ptr, index);
      return Label.__wrap(ret);
    }
    /**
    * @param {Label} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Label);

      wasm.labels_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Labels.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.labels_from_bytes(ptr0, len0);
      return Labels.__wrap(ret);
    }
    /**
    * @returns {Labels}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.coserecipients_new();
      return Labels.__wrap(ret);
    }
  }]);

  return Labels;
}();

module.exports.Labels = Labels;
/**
*/

var PasswordEncryption = /*#__PURE__*/function () {
  "use strict";

  function PasswordEncryption() {
    _classCallCheck(this, PasswordEncryption);
  }

  _createClass(PasswordEncryption, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_passwordencryption_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.passwordencryption_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PasswordEncryption}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PasswordEncryption.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.passwordencryption_from_bytes(ptr0, len0);
      return PasswordEncryption.__wrap(ret);
    }
    /**
    * @param {COSEEncrypt0} data
    * @returns {PasswordEncryption}
    */

  }, {
    key: "new",
    value: function _new(data) {
      _assertClass(data, COSEEncrypt0);

      var ret = wasm.passwordencryption_new(data.ptr);
      return PasswordEncryption.__wrap(ret);
    }
  }]);

  return PasswordEncryption;
}();

module.exports.PasswordEncryption = PasswordEncryption;
/**
*/

var ProtectedHeaderMap = /*#__PURE__*/function () {
  "use strict";

  function ProtectedHeaderMap() {
    _classCallCheck(this, ProtectedHeaderMap);
  }

  _createClass(ProtectedHeaderMap, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_protectedheadermap_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protectedheadermap_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "deserialized_headers",
    value:
    /**
    * @returns {HeaderMap}
    */
    function deserialized_headers() {
      var ret = wasm.protectedheadermap_deserialized_headers(this.ptr);
      return HeaderMap.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ProtectedHeaderMap.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.protectedheadermap_from_bytes(ptr0, len0);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "new_empty",
    value: function new_empty() {
      var ret = wasm.protectedheadermap_new_empty();
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @param {HeaderMap} header_map
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "new",
    value: function _new(header_map) {
      _assertClass(header_map, HeaderMap);

      var ret = wasm.protectedheadermap_new(header_map.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
  }]);

  return ProtectedHeaderMap;
}();

module.exports.ProtectedHeaderMap = ProtectedHeaderMap;
/**
*/

var PubKeyEncryption = /*#__PURE__*/function () {
  "use strict";

  function PubKeyEncryption() {
    _classCallCheck(this, PubKeyEncryption);
  }

  _createClass(PubKeyEncryption, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_pubkeyencryption_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.pubkeyencryption_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PubKeyEncryption}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PubKeyEncryption.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.pubkeyencryption_from_bytes(ptr0, len0);
      return PubKeyEncryption.__wrap(ret);
    }
    /**
    * @param {COSEEncrypt} data
    * @returns {PubKeyEncryption}
    */

  }, {
    key: "new",
    value: function _new(data) {
      _assertClass(data, COSEEncrypt);

      var ret = wasm.pubkeyencryption_new(data.ptr);
      return PubKeyEncryption.__wrap(ret);
    }
  }]);

  return PubKeyEncryption;
}();

module.exports.PubKeyEncryption = PubKeyEncryption;
/**
*/

var SigStructure = /*#__PURE__*/function () {
  "use strict";

  function SigStructure() {
    _classCallCheck(this, SigStructure);
  }

  _createClass(SigStructure, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_sigstructure_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.sigstructure_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SigStructure}
    */

  }, {
    key: "context",
    value:
    /**
    * @returns {number}
    */
    function context() {
      var ret = wasm.sigstructure_context(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "body_protected",
    value: function body_protected() {
      var ret = wasm.sigstructure_body_protected(this.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap | undefined}
    */

  }, {
    key: "sign_protected",
    value: function sign_protected() {
      var ret = wasm.sigstructure_sign_protected(this.ptr);
      return ret === 0 ? undefined : ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "external_aad",
    value: function external_aad() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.sigstructure_external_aad(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.sigstructure_payload(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {ProtectedHeaderMap} sign_protected
    */

  }, {
    key: "set_sign_protected",
    value: function set_sign_protected(sign_protected) {
      _assertClass(sign_protected, ProtectedHeaderMap);

      wasm.sigstructure_set_sign_protected(this.ptr, sign_protected.ptr);
    }
    /**
    * @param {number} context
    * @param {ProtectedHeaderMap} body_protected
    * @param {Uint8Array} external_aad
    * @param {Uint8Array} payload
    * @returns {SigStructure}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(SigStructure.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.sigstructure_from_bytes(ptr0, len0);
      return SigStructure.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(context, body_protected, external_aad, payload) {
      _assertClass(body_protected, ProtectedHeaderMap);

      var ptr0 = passArray8ToWasm0(external_aad, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(payload, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.sigstructure_new(context, body_protected.ptr, ptr0, len0, ptr1, len1);
      return SigStructure.__wrap(ret);
    }
  }]);

  return SigStructure;
}();

module.exports.SigStructure = SigStructure;
/**
*/

var SignedMessage = /*#__PURE__*/function () {
  "use strict";

  function SignedMessage() {
    _classCallCheck(this, SignedMessage);
  }

  _createClass(SignedMessage, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_signedmessage_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.signedmessage_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SignedMessage}
    */

  }, {
    key: "to_user_facing_encoding",
    value:
    /**
    * @returns {string}
    */
    function to_user_facing_encoding() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.signedmessage_to_user_facing_encoding(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = wasm.signedmessage_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {COSESign | undefined}
    */

  }, {
    key: "as_cose_sign",
    value: function as_cose_sign() {
      var ret = wasm.signedmessage_as_cose_sign(this.ptr);
      return ret === 0 ? undefined : COSESign.__wrap(ret);
    }
    /**
    * @returns {COSESign1 | undefined}
    */

  }, {
    key: "as_cose_sign1",
    value: function as_cose_sign1() {
      var ret = wasm.signedmessage_as_cose_sign1(this.ptr);
      return ret === 0 ? undefined : COSESign1.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(SignedMessage.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.signedmessage_from_bytes(ptr0, len0);
      return SignedMessage.__wrap(ret);
    }
    /**
    * @param {COSESign} cose_sign
    * @returns {SignedMessage}
    */

  }, {
    key: "new_cose_sign",
    value: function new_cose_sign(cose_sign) {
      _assertClass(cose_sign, COSESign);

      var ret = wasm.signedmessage_new_cose_sign(cose_sign.ptr);
      return SignedMessage.__wrap(ret);
    }
    /**
    * @param {COSESign1} cose_sign1
    * @returns {SignedMessage}
    */

  }, {
    key: "new_cose_sign1",
    value: function new_cose_sign1(cose_sign1) {
      _assertClass(cose_sign1, COSESign1);

      var ret = wasm.signedmessage_new_cose_sign1(cose_sign1.ptr);
      return SignedMessage.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {SignedMessage}
    */

  }, {
    key: "from_user_facing_encoding",
    value: function from_user_facing_encoding(s) {
      var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.signedmessage_from_user_facing_encoding(ptr0, len0);
      return SignedMessage.__wrap(ret);
    }
  }]);

  return SignedMessage;
}();

module.exports.SignedMessage = SignedMessage;
/**
*/

var TaggedCBOR = /*#__PURE__*/function () {
  "use strict";

  function TaggedCBOR() {
    _classCallCheck(this, TaggedCBOR);
  }

  _createClass(TaggedCBOR, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      wasm.__wbg_taggedcbor_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.taggedcbor_to_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TaggedCBOR}
    */

  }, {
    key: "tag",
    value:
    /**
    * @returns {BigNum}
    */
    function tag() {
      var ret = wasm.taggedcbor_tag(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {CBORValue}
    */

  }, {
    key: "value",
    value: function value() {
      var ret = wasm.taggedcbor_value(this.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {BigNum} tag
    * @param {CBORValue} value
    * @returns {TaggedCBOR}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TaggedCBOR.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.taggedcbor_from_bytes(ptr0, len0);
      return TaggedCBOR.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, value) {
      _assertClass(tag, BigNum);

      var ptr0 = tag.ptr;
      tag.ptr = 0;

      _assertClass(value, CBORValue);

      var ret = wasm.taggedcbor_new(ptr0, value.ptr);
      return TaggedCBOR.__wrap(ret);
    }
  }]);

  return TaggedCBOR;
}();

module.exports.TaggedCBOR = TaggedCBOR;

module.exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

module.exports.__wbindgen_string_new = function (arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};

module.exports.__wbindgen_debug_string = function (arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_rethrow = function (arg0) {
  throw takeObject(arg0);
};

var path = __webpack_require__("df7c").join(__dirname, 'emurgo_message_signing_bg.wasm');

var bytes = __webpack_require__("3e8f").readFileSync(path);

var wasmModule = new WebAssembly.Module(bytes);
var wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "5bc3":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "7037":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d3b7");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "970b":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "d80f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(template.raw);
    var literalSegments = toLength(rawTemplate.length);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      elements.push(String(rawTemplate[i++]));
      if (i < argumentsLength) elements.push(String(arguments[i]));
    } return elements.join('');
  }
});


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ })

}]);
//# sourceMappingURL=web3-cardano-token.common.2.js.map