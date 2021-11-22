((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[3],{

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

/***/ "467c":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "467c";

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
var uncurryThis = __webpack_require__("e330");
var toIndexedObject = __webpack_require__("fc6a");
var toObject = __webpack_require__("7b0b");
var toString = __webpack_require__("577e");
var lengthOfArrayLike = __webpack_require__("07fa");

var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(toObject(template).raw);
    var literalSegments = lengthOfArrayLike(rawTemplate);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      push(elements, toString(rawTemplate[i++]));
      if (i === literalSegments) return join(elements, '');
      if (i < argumentsLength) push(elements, toString(arguments[i]));
    }
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

/***/ }),

/***/ "eff3":
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

__webpack_require__("907a");

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

__webpack_require__("fb6a");

__webpack_require__("143c");

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("b0c0");

__webpack_require__("ac1f");

__webpack_require__("e9c4");

__webpack_require__("99af");

__webpack_require__("fb2c");

__webpack_require__("dca8");

__webpack_require__("a15b");

var imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
var wasm;

var _require = __webpack_require__("467c")(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["util"])))),
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

function isLikeNone(x) {
  return x === undefined || x === null;
}

var cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachegetInt32Memory0;
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

var cachegetUint32Memory0 = null;

function getUint32Memory0() {
  if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }

  return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArray32ToWasm0(arg, malloc) {
  var ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/


module.exports.encode_arbitrary_bytes_as_metadatum = function (bytes) {
  var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.encode_arbitrary_bytes_as_metadatum(ptr0, len0);
  return TransactionMetadatum.__wrap(ret);
};
/**
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array}
*/


module.exports.decode_arbitrary_bytes_from_metadatum = function (metadata) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    _assertClass(metadata, TransactionMetadatum);

    wasm.decode_arbitrary_bytes_from_metadatum(retptr, metadata.ptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();

    wasm.__wbindgen_free(r0, r1 * 1);

    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
};
/**
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/


module.exports.encode_json_str_to_metadatum = function (json, schema) {
  var ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.encode_json_str_to_metadatum(ptr0, len0, schema);
  return TransactionMetadatum.__wrap(ret);
};
/**
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/


module.exports.decode_metadatum_to_json_str = function (metadatum, schema) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    _assertClass(metadatum, TransactionMetadatum);

    wasm.decode_metadatum_to_json_str(retptr, metadatum.ptr, schema);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);

    wasm.__wbindgen_free(r0, r1);
  }
};
/**
* @param {string} password
* @param {string} salt
* @param {string} nonce
* @param {string} data
* @returns {string}
*/


module.exports.encrypt_with_password = function (password, salt, nonce, data) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(nonce, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    wasm.encrypt_with_password(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);

    wasm.__wbindgen_free(r0, r1);
  }
};
/**
* @param {string} password
* @param {string} data
* @returns {string}
*/


module.exports.decrypt_with_password = function (password, data) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.decrypt_with_password(retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);

    wasm.__wbindgen_free(r0, r1);
  }
};
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/


module.exports.make_daedalus_bootstrap_witness = function (tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(addr, ByronAddress);

  _assertClass(key, LegacyDaedalusPrivateKey);

  var ret = wasm.make_daedalus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
};
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/


module.exports.make_icarus_bootstrap_witness = function (tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(addr, ByronAddress);

  _assertClass(key, Bip32PrivateKey);

  var ret = wasm.make_icarus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
};
/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/


module.exports.make_vkey_witness = function (tx_body_hash, sk) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(sk, PrivateKey);

  var ret = wasm.make_vkey_witness(tx_body_hash.ptr, sk.ptr);
  return Vkeywitness.__wrap(ret);
};
/**
* @param {AuxiliaryData} auxiliary_data
* @returns {AuxiliaryDataHash}
*/


module.exports.hash_auxiliary_data = function (auxiliary_data) {
  _assertClass(auxiliary_data, AuxiliaryData);

  var ret = wasm.hash_auxiliary_data(auxiliary_data.ptr);
  return AuxiliaryDataHash.__wrap(ret);
};
/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/


module.exports.hash_transaction = function (tx_body) {
  _assertClass(tx_body, TransactionBody);

  var ret = wasm.hash_transaction(tx_body.ptr);
  return TransactionHash.__wrap(ret);
};
/**
* @param {PlutusData} plutus_data
* @returns {DataHash}
*/


module.exports.hash_plutus_data = function (plutus_data) {
  _assertClass(plutus_data, PlutusData);

  var ret = wasm.hash_plutus_data(plutus_data.ptr);
  return DataHash.__wrap(ret);
};
/**
* @param {Redeemers} redeemers
* @param {Costmdls} cost_models
* @param {PlutusList | undefined} datums
* @returns {ScriptDataHash}
*/


module.exports.hash_script_data = function (redeemers, cost_models, datums) {
  _assertClass(redeemers, Redeemers);

  _assertClass(cost_models, Costmdls);

  var ptr0 = 0;

  if (!isLikeNone(datums)) {
    _assertClass(datums, PlutusList);

    ptr0 = datums.ptr;
    datums.ptr = 0;
  }

  var ret = wasm.hash_script_data(redeemers.ptr, cost_models.ptr, ptr0);
  return ScriptDataHash.__wrap(ret);
};
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {Value}
*/


module.exports.get_implicit_input = function (txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);

  _assertClass(pool_deposit, BigNum);

  _assertClass(key_deposit, BigNum);

  var ret = wasm.get_implicit_input(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return Value.__wrap(ret);
};
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/


module.exports.get_deposit = function (txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);

  _assertClass(pool_deposit, BigNum);

  _assertClass(key_deposit, BigNum);

  var ret = wasm.get_deposit(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return BigNum.__wrap(ret);
};
/**
* @param {Value} assets
* @param {boolean} has_data_hash
* @param {BigNum} coins_per_utxo_word
* @returns {BigNum}
*/


module.exports.min_ada_required = function (assets, has_data_hash, coins_per_utxo_word) {
  _assertClass(assets, Value);

  _assertClass(coins_per_utxo_word, BigNum);

  var ret = wasm.min_ada_required(assets.ptr, has_data_hash, coins_per_utxo_word.ptr);
  return BigNum.__wrap(ret);
};
/**
* Receives a script JSON string
* and returns a NativeScript.
* Cardano Wallet and Node styles are supported.
*
* * wallet: https://github.com/input-output-hk/cardano-wallet/blob/master/specifications/api/swagger.yaml
* * node: https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/simple-scripts.md
*
* self_xpub is expected to be a Bip32PublicKey as hex-encoded bytes
* @param {string} json
* @param {string} self_xpub
* @param {number} schema
* @returns {NativeScript}
*/


module.exports.encode_json_str_to_native_script = function (json, self_xpub, schema) {
  var ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passStringToWasm0(self_xpub, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.encode_json_str_to_native_script(ptr0, len0, ptr1, len1, schema);
  return NativeScript.__wrap(ret);
};
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/


module.exports.min_fee = function (tx, linear_fee) {
  _assertClass(tx, Transaction);

  _assertClass(linear_fee, LinearFee);

  var ret = wasm.min_fee(tx.ptr, linear_fee.ptr);
  return BigNum.__wrap(ret);
};
/**
*/


module.exports.CertificateKind = Object.freeze({
  StakeRegistration: 0,
  "0": "StakeRegistration",
  StakeDeregistration: 1,
  "1": "StakeDeregistration",
  StakeDelegation: 2,
  "2": "StakeDelegation",
  PoolRegistration: 3,
  "3": "PoolRegistration",
  PoolRetirement: 4,
  "4": "PoolRetirement",
  GenesisKeyDelegation: 5,
  "5": "GenesisKeyDelegation",
  MoveInstantaneousRewardsCert: 6,
  "6": "MoveInstantaneousRewardsCert"
});
/**
*/

module.exports.MIRPot = Object.freeze({
  Reserves: 0,
  "0": "Reserves",
  Treasury: 1,
  "1": "Treasury"
});
/**
*/

module.exports.MIRKind = Object.freeze({
  ToOtherPot: 0,
  "0": "ToOtherPot",
  ToStakeCredentials: 1,
  "1": "ToStakeCredentials"
});
/**
*/

module.exports.RelayKind = Object.freeze({
  SingleHostAddr: 0,
  "0": "SingleHostAddr",
  SingleHostName: 1,
  "1": "SingleHostName",
  MultiHostName: 2,
  "2": "MultiHostName"
});
/**
*/

module.exports.NativeScriptKind = Object.freeze({
  ScriptPubkey: 0,
  "0": "ScriptPubkey",
  ScriptAll: 1,
  "1": "ScriptAll",
  ScriptAny: 2,
  "2": "ScriptAny",
  ScriptNOfK: 3,
  "3": "ScriptNOfK",
  TimelockStart: 4,
  "4": "TimelockStart",
  TimelockExpiry: 5,
  "5": "TimelockExpiry"
});
/**
* Each new language uses a different namespace for hashing its script
* This is because you could have a language where the same bytes have different semantics
* So this avoids scripts in different languages mapping to the same hash
* Note that the enum value here is different than the enum value for deciding the cost model of a script
*/

module.exports.ScriptHashNamespace = Object.freeze({
  NativeScript: 0,
  "0": "NativeScript"
});
/**
*/

module.exports.NetworkIdKind = Object.freeze({
  Testnet: 0,
  "0": "Testnet",
  Mainnet: 1,
  "1": "Mainnet"
});
/**
*/

module.exports.TransactionMetadatumKind = Object.freeze({
  MetadataMap: 0,
  "0": "MetadataMap",
  MetadataList: 1,
  "1": "MetadataList",
  Int: 2,
  "2": "Int",
  Bytes: 3,
  "3": "Bytes",
  Text: 4,
  "4": "Text"
});
/**
*/

module.exports.MetadataJsonSchema = Object.freeze({
  NoConversions: 0,
  "0": "NoConversions",
  BasicConversions: 1,
  "1": "BasicConversions",
  DetailedSchema: 2,
  "2": "DetailedSchema"
});
/**
* Used to choosed the schema for a script JSON string
*/

module.exports.ScriptSchema = Object.freeze({
  Wallet: 0,
  "0": "Wallet",
  Node: 1,
  "1": "Node"
});
/**
*/

module.exports.StakeCredKind = Object.freeze({
  Key: 0,
  "0": "Key",
  Script: 1,
  "1": "Script"
});
/**
*/

module.exports.LanguageKind = Object.freeze({
  PlutusV1: 0,
  "0": "PlutusV1"
});
/**
*/

module.exports.PlutusDataKind = Object.freeze({
  ConstrPlutusData: 0,
  "0": "ConstrPlutusData",
  Map: 1,
  "1": "Map",
  List: 2,
  "2": "List",
  Integer: 3,
  "3": "Integer",
  Bytes: 4,
  "4": "Bytes"
});
/**
*/

module.exports.RedeemerTagKind = Object.freeze({
  Spend: 0,
  "0": "Spend",
  Mint: 1,
  "1": "Mint",
  Cert: 2,
  "2": "Cert",
  Reward: 3,
  "3": "Reward"
});
/**
*/

var Address = /*#__PURE__*/function () {
  "use strict";

  function Address() {
    _classCallCheck(this, Address);
  }

  _createClass(Address, [{
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

      wasm.__wbg_address_free(ptr);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Address}
    */

  }, {
    key: "to_bytes",
    value:
    /**
    * @returns {Uint8Array}
    */
    function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.address_to_bytes(retptr, this.ptr);
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
    * @param {string | undefined} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.address_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {Address}
    */

  }, {
    key: "network_id",
    value:
    /**
    * @returns {number}
    */
    function network_id() {
      var ret = wasm.address_network_id(this.ptr);
      return ret;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Address.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(data) {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.address_from_bytes(ptr0, len0);
      return Address.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.address_from_bech32(ptr0, len0);
      return Address.__wrap(ret);
    }
  }]);

  return Address;
}();

module.exports.Address = Address;
/**
*/

var AssetName = /*#__PURE__*/function () {
  "use strict";

  function AssetName() {
    _classCallCheck(this, AssetName);
  }

  _createClass(AssetName, [{
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

      wasm.__wbg_assetname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.assetname_to_bytes(retptr, this.ptr);
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
    * @returns {AssetName}
    */

  }, {
    key: "name",
    value:
    /**
    * @returns {Uint8Array}
    */
    function name() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.assetname_name(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(AssetName.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.assetname_from_bytes(ptr0, len0);
      return AssetName.__wrap(ret);
    }
    /**
    * @param {Uint8Array} name
    * @returns {AssetName}
    */

  }, {
    key: "new",
    value: function _new(name) {
      var ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.assetname_new(ptr0, len0);
      return AssetName.__wrap(ret);
    }
  }]);

  return AssetName;
}();

module.exports.AssetName = AssetName;
/**
*/

var AssetNames = /*#__PURE__*/function () {
  "use strict";

  function AssetNames() {
    _classCallCheck(this, AssetNames);
  }

  _createClass(AssetNames, [{
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

      wasm.__wbg_assetnames_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.assetnames_to_bytes(retptr, this.ptr);
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
    * @returns {AssetNames}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.assetnames_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {AssetName}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.assetnames_get(this.ptr, index);
      return AssetName.__wrap(ret);
    }
    /**
    * @param {AssetName} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, AssetName);

      wasm.assetnames_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(AssetNames.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.assetnames_from_bytes(ptr0, len0);
      return AssetNames.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.assetnames_new();
      return AssetNames.__wrap(ret);
    }
  }]);

  return AssetNames;
}();

module.exports.AssetNames = AssetNames;
/**
*/

var Assets = /*#__PURE__*/function () {
  "use strict";

  function Assets() {
    _classCallCheck(this, Assets);
  }

  _createClass(Assets, [{
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

      wasm.__wbg_assets_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.assets_to_bytes(retptr, this.ptr);
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
    * @returns {Assets}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.assets_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, AssetName);

      _assertClass(value, BigNum);

      var ret = wasm.assets_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {BigNum | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, AssetName);

      var ret = wasm.assets_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.assets_keys(this.ptr);
      return AssetNames.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Assets.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.assets_from_bytes(ptr0, len0);
      return Assets.__wrap(ret);
    }
    /**
    * @returns {Assets}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.assets_new();
      return Assets.__wrap(ret);
    }
  }]);

  return Assets;
}();

module.exports.Assets = Assets;
/**
*/

var AuxiliaryData = /*#__PURE__*/function () {
  "use strict";

  function AuxiliaryData() {
    _classCallCheck(this, AuxiliaryData);
  }

  _createClass(AuxiliaryData, [{
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

      wasm.__wbg_auxiliarydata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.auxiliarydata_to_bytes(retptr, this.ptr);
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
    * @returns {AuxiliaryData}
    */

  }, {
    key: "metadata",
    value:
    /**
    * @returns {GeneralTransactionMetadata | undefined}
    */
    function metadata() {
      var ret = wasm.auxiliarydata_metadata(this.ptr);
      return ret === 0 ? undefined : GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @param {GeneralTransactionMetadata} metadata
    */

  }, {
    key: "set_metadata",
    value: function set_metadata(metadata) {
      _assertClass(metadata, GeneralTransactionMetadata);

      wasm.auxiliarydata_set_metadata(this.ptr, metadata.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = wasm.auxiliarydata_native_scripts(this.ptr);
      return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */

  }, {
    key: "set_native_scripts",
    value: function set_native_scripts(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      wasm.auxiliarydata_set_native_scripts(this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */

  }, {
    key: "plutus_scripts",
    value: function plutus_scripts() {
      var ret = wasm.auxiliarydata_plutus_scripts(this.ptr);
      return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */

  }, {
    key: "set_plutus_scripts",
    value: function set_plutus_scripts(plutus_scripts) {
      _assertClass(plutus_scripts, PlutusScripts);

      wasm.auxiliarydata_set_plutus_scripts(this.ptr, plutus_scripts.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(AuxiliaryData.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.auxiliarydata_from_bytes(ptr0, len0);
      return AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryData}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.auxiliarydata_new();
      return AuxiliaryData.__wrap(ret);
    }
  }]);

  return AuxiliaryData;
}();

module.exports.AuxiliaryData = AuxiliaryData;
/**
*/

var AuxiliaryDataHash = /*#__PURE__*/function () {
  "use strict";

  function AuxiliaryDataHash() {
    _classCallCheck(this, AuxiliaryDataHash);
  }

  _createClass(AuxiliaryDataHash, [{
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

      wasm.__wbg_auxiliarydatahash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.auxiliarydatahash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.auxiliarydatahash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {AuxiliaryDataHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(AuxiliaryDataHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.auxiliarydatahash_from_bech32(ptr0, len0);
      return AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AuxiliaryDataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.auxiliarydatahash_from_bytes(ptr0, len0);
      return AuxiliaryDataHash.__wrap(ret);
    }
  }]);

  return AuxiliaryDataHash;
}();

module.exports.AuxiliaryDataHash = AuxiliaryDataHash;
/**
*/

var AuxiliaryDataSet = /*#__PURE__*/function () {
  "use strict";

  function AuxiliaryDataSet() {
    _classCallCheck(this, AuxiliaryDataSet);
  }

  _createClass(AuxiliaryDataSet, [{
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

      wasm.__wbg_auxiliarydataset_free(ptr);
    }
    /**
    * @returns {AuxiliaryDataSet}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.auxiliarydataset_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} tx_index
    * @param {AuxiliaryData} data
    * @returns {AuxiliaryData | undefined}
    */

  }, {
    key: "insert",
    value: function insert(tx_index, data) {
      _assertClass(data, AuxiliaryData);

      var ret = wasm.auxiliarydataset_insert(this.ptr, tx_index, data.ptr);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {number} tx_index
    * @returns {AuxiliaryData | undefined}
    */

  }, {
    key: "get",
    value: function get(tx_index) {
      var ret = wasm.auxiliarydataset_get(this.ptr, tx_index);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "indices",
    value: function indices() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.auxiliarydataset_indices(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 4);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(AuxiliaryDataSet.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.auxiliarydataset_new();
      return AuxiliaryDataSet.__wrap(ret);
    }
  }]);

  return AuxiliaryDataSet;
}();

module.exports.AuxiliaryDataSet = AuxiliaryDataSet;
/**
*/

var BaseAddress = /*#__PURE__*/function () {
  "use strict";

  function BaseAddress() {
    _classCallCheck(this, BaseAddress);
  }

  _createClass(BaseAddress, [{
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

      wasm.__wbg_baseaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {StakeCredential} stake
    * @returns {BaseAddress}
    */

  }, {
    key: "payment_cred",
    value:
    /**
    * @returns {StakeCredential}
    */
    function payment_cred() {
      var ret = wasm.baseaddress_payment_cred(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */

  }, {
    key: "stake_cred",
    value: function stake_cred() {
      var ret = wasm.baseaddress_stake_cred(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = wasm.baseaddress_to_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {BaseAddress | undefined}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BaseAddress.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(network, payment, stake) {
      _assertClass(payment, StakeCredential);

      _assertClass(stake, StakeCredential);

      var ret = wasm.baseaddress_new(network, payment.ptr, stake.ptr);
      return BaseAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = wasm.baseaddress_from_address(addr.ptr);
      return ret === 0 ? undefined : BaseAddress.__wrap(ret);
    }
  }]);

  return BaseAddress;
}();

module.exports.BaseAddress = BaseAddress;
/**
*/

var BigInt = /*#__PURE__*/function () {
  "use strict";

  function BigInt() {
    _classCallCheck(this, BigInt);
  }

  _createClass(BigInt, [{
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

      wasm.__wbg_bigint_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bigint_to_bytes(retptr, this.ptr);
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
    * @returns {BigInt}
    */

  }, {
    key: "as_u64",
    value:
    /**
    * @returns {BigNum | undefined}
    */
    function as_u64() {
      var ret = wasm.bigint_as_u64(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {BigInt}
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

        wasm.bigint_to_str(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BigInt.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bigint_from_bytes(ptr0, len0);
      return BigInt.__wrap(ret);
    }
  }, {
    key: "from_str",
    value: function from_str(text) {
      var ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bigint_from_str(ptr0, len0);
      return BigInt.__wrap(ret);
    }
  }]);

  return BigInt;
}();

module.exports.BigInt = BigInt;
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
    * @returns {BigNum}
    */

  }, {
    key: "is_zero",
    value:
    /**
    * @returns {boolean}
    */
    function is_zero() {
      var ret = wasm.bignum_is_zero(this.ptr);
      return ret !== 0;
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
    /**
    * returns 0 if it would otherwise underflow
    * @param {BigNum} other
    * @returns {BigNum}
    */

  }, {
    key: "clamped_sub",
    value: function clamped_sub(other) {
      _assertClass(other, BigNum);

      var ret = wasm.bignum_clamped_sub(this.ptr, other.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} rhs_value
    * @returns {number}
    */

  }, {
    key: "compare",
    value: function compare(rhs_value) {
      _assertClass(rhs_value, BigNum);

      var ret = wasm.bignum_compare(this.ptr, rhs_value.ptr);
      return ret;
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
  }, {
    key: "zero",
    value: function zero() {
      var ret = wasm.bignum_zero();
      return BigNum.__wrap(ret);
    }
  }]);

  return BigNum;
}();

module.exports.BigNum = BigNum;
/**
*/

var Bip32PrivateKey = /*#__PURE__*/function () {
  "use strict";

  function Bip32PrivateKey() {
    _classCallCheck(this, Bip32PrivateKey);
  }

  _createClass(Bip32PrivateKey, [{
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

      wasm.__wbg_bip32privatekey_free(ptr);
    }
    /**
    * derive this private key with the given index.
    *
    * # Security considerations
    *
    * * hard derivation index cannot be soft derived with the public key
    *
    * # Hard derivation vs Soft derivation
    *
    * If you pass an index below 0x80000000 then it is a soft derivation.
    * The advantage of soft derivation is that it is possible to derive the
    * public key too. I.e. derivation the private key with a soft derivation
    * index and then retrieving the associated public key is equivalent to
    * deriving the public key associated to the parent private key.
    *
    * Hard derivation index does not allow public key derivation.
    *
    * This is why deriving the private key should not fail while deriving
    * the public key may fail (if the derivation index is invalid).
    * @param {number} index
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "derive",
    value: function derive(index) {
      var ret = wasm.bip32privatekey_derive(this.ptr, index);
      return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * 128-byte xprv a key format in Cardano that some software still uses or requires
    * the traditional 96-byte xprv is simply encoded as
    * prv | chaincode
    * however, because some software may not know how to compute a public key from a private key,
    * the 128-byte inlines the public key in the following format
    * prv | pub | chaincode
    * so be careful if you see the term "xprv" as it could refer to either one
    * our library does not require the pub (instead we compute the pub key when needed)
    * @param {Uint8Array} bytes
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "to_128_xprv",
    value:
    /**
    * see from_128_xprv
    * @returns {Uint8Array}
    */
    function to_128_xprv() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32privatekey_to_128_xprv(retptr, this.ptr);
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
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "to_raw_key",
    value:
    /**
    * @returns {PrivateKey}
    */
    function to_raw_key() {
      var ret = wasm.bip32privatekey_to_raw_key(this.ptr);
      return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Bip32PublicKey}
    */

  }, {
    key: "to_public",
    value: function to_public() {
      var ret = wasm.bip32privatekey_to_public(this.ptr);
      return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "as_bytes",
    value:
    /**
    * @returns {Uint8Array}
    */
    function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32privatekey_as_bytes(retptr, this.ptr);
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
    * @param {string} bech32_str
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "to_bech32",
    value:
    /**
    * @returns {string}
    */
    function to_bech32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32privatekey_to_bech32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {Uint8Array} entropy
    * @param {Uint8Array} password
    * @returns {Bip32PrivateKey}
    */

  }, {
    key: "chaincode",
    value:
    /**
    * @returns {Uint8Array}
    */
    function chaincode() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32privatekey_chaincode(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Bip32PrivateKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_128_xprv",
    value: function from_128_xprv(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bip32privatekey_from_128_xprv(ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "generate_ed25519_bip32",
    value: function generate_ed25519_bip32() {
      var ret = wasm.bip32privatekey_generate_ed25519_bip32();
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bip32privatekey_from_bytes(ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bip32privatekey_from_bech32(ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bip39_entropy",
    value: function from_bip39_entropy(entropy, password) {
      var ptr0 = passArray8ToWasm0(entropy, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.bip32privatekey_from_bip39_entropy(ptr0, len0, ptr1, len1);
      return Bip32PrivateKey.__wrap(ret);
    }
  }]);

  return Bip32PrivateKey;
}();

module.exports.Bip32PrivateKey = Bip32PrivateKey;
/**
*/

var Bip32PublicKey = /*#__PURE__*/function () {
  "use strict";

  function Bip32PublicKey() {
    _classCallCheck(this, Bip32PublicKey);
  }

  _createClass(Bip32PublicKey, [{
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

      wasm.__wbg_bip32publickey_free(ptr);
    }
    /**
    * derive this public key with the given index.
    *
    * # Errors
    *
    * If the index is not a soft derivation index (< 0x80000000) then
    * calling this method will fail.
    *
    * # Security considerations
    *
    * * hard derivation index cannot be soft derived with the public key
    *
    * # Hard derivation vs Soft derivation
    *
    * If you pass an index below 0x80000000 then it is a soft derivation.
    * The advantage of soft derivation is that it is possible to derive the
    * public key too. I.e. derivation the private key with a soft derivation
    * index and then retrieving the associated public key is equivalent to
    * deriving the public key associated to the parent private key.
    *
    * Hard derivation index does not allow public key derivation.
    *
    * This is why deriving the private key should not fail while deriving
    * the public key may fail (if the derivation index is invalid).
    * @param {number} index
    * @returns {Bip32PublicKey}
    */

  }, {
    key: "derive",
    value: function derive(index) {
      var ret = wasm.bip32publickey_derive(this.ptr, index);
      return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */

  }, {
    key: "to_raw_key",
    value: function to_raw_key() {
      var ret = wasm.bip32publickey_to_raw_key(this.ptr);
      return PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PublicKey}
    */

  }, {
    key: "as_bytes",
    value:
    /**
    * @returns {Uint8Array}
    */
    function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32publickey_as_bytes(retptr, this.ptr);
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
    * @param {string} bech32_str
    * @returns {Bip32PublicKey}
    */

  }, {
    key: "to_bech32",
    value:
    /**
    * @returns {string}
    */
    function to_bech32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32publickey_to_bech32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "chaincode",
    value: function chaincode() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bip32publickey_chaincode(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Bip32PublicKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bip32publickey_from_bytes(ptr0, len0);
      return Bip32PublicKey.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bip32publickey_from_bech32(ptr0, len0);
      return Bip32PublicKey.__wrap(ret);
    }
  }]);

  return Bip32PublicKey;
}();

module.exports.Bip32PublicKey = Bip32PublicKey;
/**
*/

var Block = /*#__PURE__*/function () {
  "use strict";

  function Block() {
    _classCallCheck(this, Block);
  }

  _createClass(Block, [{
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

      wasm.__wbg_block_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.block_to_bytes(retptr, this.ptr);
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
    * @returns {Block}
    */

  }, {
    key: "header",
    value:
    /**
    * @returns {Header}
    */
    function header() {
      var ret = wasm.block_header(this.ptr);
      return Header.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */

  }, {
    key: "transaction_bodies",
    value: function transaction_bodies() {
      var ret = wasm.block_transaction_bodies(this.ptr);
      return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */

  }, {
    key: "transaction_witness_sets",
    value: function transaction_witness_sets() {
      var ret = wasm.block_transaction_witness_sets(this.ptr);
      return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryDataSet}
    */

  }, {
    key: "auxiliary_data_set",
    value: function auxiliary_data_set() {
      var ret = wasm.block_auxiliary_data_set(this.ptr);
      return AuxiliaryDataSet.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "invalid_transactions",
    value: function invalid_transactions() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.block_invalid_transactions(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 4);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Header} header
    * @param {TransactionBodies} transaction_bodies
    * @param {TransactionWitnessSets} transaction_witness_sets
    * @param {AuxiliaryDataSet} auxiliary_data_set
    * @param {Uint32Array} invalid_transactions
    * @returns {Block}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Block.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.block_from_bytes(ptr0, len0);
      return Block.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(header, transaction_bodies, transaction_witness_sets, auxiliary_data_set, invalid_transactions) {
      _assertClass(header, Header);

      _assertClass(transaction_bodies, TransactionBodies);

      _assertClass(transaction_witness_sets, TransactionWitnessSets);

      _assertClass(auxiliary_data_set, AuxiliaryDataSet);

      var ptr0 = passArray32ToWasm0(invalid_transactions, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.block_new(header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, auxiliary_data_set.ptr, ptr0, len0);
      return Block.__wrap(ret);
    }
  }]);

  return Block;
}();

module.exports.Block = Block;
/**
*/

var BlockHash = /*#__PURE__*/function () {
  "use strict";

  function BlockHash() {
    _classCallCheck(this, BlockHash);
  }

  _createClass(BlockHash, [{
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

      wasm.__wbg_blockhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.blockhash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.blockhash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {BlockHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BlockHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.blockhash_from_bech32(ptr0, len0);
      return BlockHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BlockHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.blockhash_from_bytes(ptr0, len0);
      return BlockHash.__wrap(ret);
    }
  }]);

  return BlockHash;
}();

module.exports.BlockHash = BlockHash;
/**
*/

var BootstrapWitness = /*#__PURE__*/function () {
  "use strict";

  function BootstrapWitness() {
    _classCallCheck(this, BootstrapWitness);
  }

  _createClass(BootstrapWitness, [{
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

      wasm.__wbg_bootstrapwitness_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bootstrapwitness_to_bytes(retptr, this.ptr);
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
    * @returns {BootstrapWitness}
    */

  }, {
    key: "vkey",
    value:
    /**
    * @returns {Vkey}
    */
    function vkey() {
      var ret = wasm.bootstrapwitness_vkey(this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "signature",
    value: function signature() {
      var ret = wasm.bootstrapwitness_signature(this.ptr);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "chain_code",
    value: function chain_code() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bootstrapwitness_chain_code(retptr, this.ptr);
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
    key: "attributes",
    value: function attributes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.bootstrapwitness_attributes(retptr, this.ptr);
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
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @param {Uint8Array} chain_code
    * @param {Uint8Array} attributes
    * @returns {BootstrapWitness}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BootstrapWitness.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.bootstrapwitness_from_bytes(ptr0, len0);
      return BootstrapWitness.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(vkey, signature, chain_code, attributes) {
      _assertClass(vkey, Vkey);

      _assertClass(signature, Ed25519Signature);

      var ptr0 = passArray8ToWasm0(chain_code, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(attributes, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.bootstrapwitness_new(vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
      return BootstrapWitness.__wrap(ret);
    }
  }]);

  return BootstrapWitness;
}();

module.exports.BootstrapWitness = BootstrapWitness;
/**
*/

var BootstrapWitnesses = /*#__PURE__*/function () {
  "use strict";

  function BootstrapWitnesses() {
    _classCallCheck(this, BootstrapWitnesses);
  }

  _createClass(BootstrapWitnesses, [{
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

      wasm.__wbg_bootstrapwitnesses_free(ptr);
    }
    /**
    * @returns {BootstrapWitnesses}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.bootstrapwitnesses_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BootstrapWitness}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.bootstrapwitnesses_get(this.ptr, index);
      return BootstrapWitness.__wrap(ret);
    }
    /**
    * @param {BootstrapWitness} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, BootstrapWitness);

      wasm.bootstrapwitnesses_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(BootstrapWitnesses.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.bootstrapwitnesses_new();
      return BootstrapWitnesses.__wrap(ret);
    }
  }]);

  return BootstrapWitnesses;
}();

module.exports.BootstrapWitnesses = BootstrapWitnesses;
/**
*/

var ByronAddress = /*#__PURE__*/function () {
  "use strict";

  function ByronAddress() {
    _classCallCheck(this, ByronAddress);
  }

  _createClass(ByronAddress, [{
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

      wasm.__wbg_byronaddress_free(ptr);
    }
    /**
    * @returns {string}
    */

  }, {
    key: "to_base58",
    value: function to_base58() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.byronaddress_to_base58(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.byronaddress_to_bytes(retptr, this.ptr);
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
    * @returns {ByronAddress}
    */

  }, {
    key: "byron_protocol_magic",
    value:
    /**
    * returns the byron protocol magic embedded in the address, or mainnet id if none is present
    * note: for bech32 addresses, you need to use network_id instead
    * @returns {number}
    */
    function byron_protocol_magic() {
      var ret = wasm.byronaddress_byron_protocol_magic(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "attributes",
    value: function attributes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.byronaddress_attributes(retptr, this.ptr);
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
    * @returns {number}
    */

  }, {
    key: "network_id",
    value: function network_id() {
      var ret = wasm.byronaddress_network_id(this.ptr);
      return ret;
    }
    /**
    * @param {string} s
    * @returns {ByronAddress}
    */

  }, {
    key: "to_address",
    value:
    /**
    * @returns {Address}
    */
    function to_address() {
      var ret = wasm.byronaddress_to_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {ByronAddress | undefined}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ByronAddress.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.byronaddress_from_bytes(ptr0, len0);
      return ByronAddress.__wrap(ret);
    }
  }, {
    key: "from_base58",
    value: function from_base58(s) {
      var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.byronaddress_from_base58(ptr0, len0);
      return ByronAddress.__wrap(ret);
    }
    /**
    * @param {Bip32PublicKey} key
    * @param {number} protocol_magic
    * @returns {ByronAddress}
    */

  }, {
    key: "icarus_from_key",
    value: function icarus_from_key(key, protocol_magic) {
      _assertClass(key, Bip32PublicKey);

      var ret = wasm.byronaddress_icarus_from_key(key.ptr, protocol_magic);
      return ByronAddress.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {boolean}
    */

  }, {
    key: "is_valid",
    value: function is_valid(s) {
      var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.byronaddress_is_valid(ptr0, len0);
      return ret !== 0;
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = wasm.byronaddress_from_address(addr.ptr);
      return ret === 0 ? undefined : ByronAddress.__wrap(ret);
    }
  }]);

  return ByronAddress;
}();

module.exports.ByronAddress = ByronAddress;
/**
*/

var Certificate = /*#__PURE__*/function () {
  "use strict";

  function Certificate() {
    _classCallCheck(this, Certificate);
  }

  _createClass(Certificate, [{
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

      wasm.__wbg_certificate_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.certificate_to_bytes(retptr, this.ptr);
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
    * @returns {Certificate}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.certificate_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {StakeRegistration | undefined}
    */

  }, {
    key: "as_stake_registration",
    value: function as_stake_registration() {
      var ret = wasm.certificate_as_stake_registration(this.ptr);
      return ret === 0 ? undefined : StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeDeregistration | undefined}
    */

  }, {
    key: "as_stake_deregistration",
    value: function as_stake_deregistration() {
      var ret = wasm.certificate_as_stake_deregistration(this.ptr);
      return ret === 0 ? undefined : StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeDelegation | undefined}
    */

  }, {
    key: "as_stake_delegation",
    value: function as_stake_delegation() {
      var ret = wasm.certificate_as_stake_delegation(this.ptr);
      return ret === 0 ? undefined : StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {PoolRegistration | undefined}
    */

  }, {
    key: "as_pool_registration",
    value: function as_pool_registration() {
      var ret = wasm.certificate_as_pool_registration(this.ptr);
      return ret === 0 ? undefined : PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolRetirement | undefined}
    */

  }, {
    key: "as_pool_retirement",
    value: function as_pool_retirement() {
      var ret = wasm.certificate_as_pool_retirement(this.ptr);
      return ret === 0 ? undefined : PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {GenesisKeyDelegation | undefined}
    */

  }, {
    key: "as_genesis_key_delegation",
    value: function as_genesis_key_delegation() {
      var ret = wasm.certificate_as_genesis_key_delegation(this.ptr);
      return ret === 0 ? undefined : GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousRewardsCert | undefined}
    */

  }, {
    key: "as_move_instantaneous_rewards_cert",
    value: function as_move_instantaneous_rewards_cert() {
      var ret = wasm.certificate_as_move_instantaneous_rewards_cert(this.ptr);
      return ret === 0 ? undefined : MoveInstantaneousRewardsCert.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Certificate.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.certificate_from_bytes(ptr0, len0);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeRegistration} stake_registration
    * @returns {Certificate}
    */

  }, {
    key: "new_stake_registration",
    value: function new_stake_registration(stake_registration) {
      _assertClass(stake_registration, StakeRegistration);

      var ret = wasm.certificate_new_stake_registration(stake_registration.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDeregistration} stake_deregistration
    * @returns {Certificate}
    */

  }, {
    key: "new_stake_deregistration",
    value: function new_stake_deregistration(stake_deregistration) {
      _assertClass(stake_deregistration, StakeDeregistration);

      var ret = wasm.certificate_new_stake_deregistration(stake_deregistration.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDelegation} stake_delegation
    * @returns {Certificate}
    */

  }, {
    key: "new_stake_delegation",
    value: function new_stake_delegation(stake_delegation) {
      _assertClass(stake_delegation, StakeDelegation);

      var ret = wasm.certificate_new_stake_delegation(stake_delegation.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRegistration} pool_registration
    * @returns {Certificate}
    */

  }, {
    key: "new_pool_registration",
    value: function new_pool_registration(pool_registration) {
      _assertClass(pool_registration, PoolRegistration);

      var ret = wasm.certificate_new_pool_registration(pool_registration.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRetirement} pool_retirement
    * @returns {Certificate}
    */

  }, {
    key: "new_pool_retirement",
    value: function new_pool_retirement(pool_retirement) {
      _assertClass(pool_retirement, PoolRetirement);

      var ret = wasm.certificate_new_pool_retirement(pool_retirement.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {GenesisKeyDelegation} genesis_key_delegation
    * @returns {Certificate}
    */

  }, {
    key: "new_genesis_key_delegation",
    value: function new_genesis_key_delegation(genesis_key_delegation) {
      _assertClass(genesis_key_delegation, GenesisKeyDelegation);

      var ret = wasm.certificate_new_genesis_key_delegation(genesis_key_delegation.ptr);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousRewardsCert} move_instantaneous_rewards_cert
    * @returns {Certificate}
    */

  }, {
    key: "new_move_instantaneous_rewards_cert",
    value: function new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert) {
      _assertClass(move_instantaneous_rewards_cert, MoveInstantaneousRewardsCert);

      var ret = wasm.certificate_new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert.ptr);
      return Certificate.__wrap(ret);
    }
  }]);

  return Certificate;
}();

module.exports.Certificate = Certificate;
/**
*/

var Certificates = /*#__PURE__*/function () {
  "use strict";

  function Certificates() {
    _classCallCheck(this, Certificates);
  }

  _createClass(Certificates, [{
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

      wasm.__wbg_certificates_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.certificates_to_bytes(retptr, this.ptr);
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
    * @returns {Certificates}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.certificates_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Certificate}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.certificates_get(this.ptr, index);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {Certificate} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Certificate);

      wasm.certificates_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Certificates.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.certificates_from_bytes(ptr0, len0);
      return Certificates.__wrap(ret);
    }
    /**
    * @returns {Certificates}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.certificates_new();
      return Certificates.__wrap(ret);
    }
  }]);

  return Certificates;
}();

module.exports.Certificates = Certificates;
/**
*/

var ConstrPlutusData = /*#__PURE__*/function () {
  "use strict";

  function ConstrPlutusData() {
    _classCallCheck(this, ConstrPlutusData);
  }

  _createClass(ConstrPlutusData, [{
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

      wasm.__wbg_constrplutusdata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.constrplutusdata_to_bytes(retptr, this.ptr);
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
    * @returns {ConstrPlutusData}
    */

  }, {
    key: "tag",
    value:
    /**
    * @returns {Int}
    */
    function tag() {
      var ret = wasm.constrplutusdata_tag(this.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "data",
    value: function data() {
      var ret = wasm.constrplutusdata_data(this.ptr);
      return PlutusList.__wrap(ret);
    }
    /**
    * @param {Int} tag
    * @param {PlutusList} data
    * @returns {ConstrPlutusData}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ConstrPlutusData.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.constrplutusdata_from_bytes(ptr0, len0);
      return ConstrPlutusData.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, data) {
      _assertClass(tag, Int);

      var ptr0 = tag.ptr;
      tag.ptr = 0;

      _assertClass(data, PlutusList);

      var ret = wasm.constrplutusdata_new(ptr0, data.ptr);
      return ConstrPlutusData.__wrap(ret);
    }
  }]);

  return ConstrPlutusData;
}();

module.exports.ConstrPlutusData = ConstrPlutusData;
/**
*/

var CostModel = /*#__PURE__*/function () {
  "use strict";

  function CostModel() {
    _classCallCheck(this, CostModel);
  }

  _createClass(CostModel, [{
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

      wasm.__wbg_costmodel_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.costmodel_to_bytes(retptr, this.ptr);
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
    * @returns {CostModel}
    */

  }, {
    key: "set",
    value:
    /**
    * @param {number} operation
    * @param {Int} cost
    * @returns {Int}
    */
    function set(operation, cost) {
      _assertClass(cost, Int);

      var ret = wasm.costmodel_set(this.ptr, operation, cost.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @param {number} operation
    * @returns {Int}
    */

  }, {
    key: "get",
    value: function get(operation) {
      var ret = wasm.costmodel_get(this.ptr, operation);
      return Int.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(CostModel.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.costmodel_from_bytes(ptr0, len0);
      return CostModel.__wrap(ret);
    }
    /**
    * @returns {CostModel}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.costmodel_new();
      return CostModel.__wrap(ret);
    }
  }]);

  return CostModel;
}();

module.exports.CostModel = CostModel;
/**
*/

var Costmdls = /*#__PURE__*/function () {
  "use strict";

  function Costmdls() {
    _classCallCheck(this, Costmdls);
  }

  _createClass(Costmdls, [{
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

      wasm.__wbg_costmdls_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.costmdls_to_bytes(retptr, this.ptr);
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
    * @returns {Costmdls}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.costmdls_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {Language} key
    * @param {CostModel} value
    * @returns {CostModel | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, Language);

      _assertClass(value, CostModel);

      var ret = wasm.costmdls_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : CostModel.__wrap(ret);
    }
    /**
    * @param {Language} key
    * @returns {CostModel | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, Language);

      var ret = wasm.costmdls_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : CostModel.__wrap(ret);
    }
    /**
    * @returns {Languages}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.costmdls_keys(this.ptr);
      return Languages.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Costmdls.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.costmdls_from_bytes(ptr0, len0);
      return Costmdls.__wrap(ret);
    }
    /**
    * @returns {Costmdls}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.costmdls_new();
      return Costmdls.__wrap(ret);
    }
  }]);

  return Costmdls;
}();

module.exports.Costmdls = Costmdls;
/**
*/

var DNSRecordAorAAAA = /*#__PURE__*/function () {
  "use strict";

  function DNSRecordAorAAAA() {
    _classCallCheck(this, DNSRecordAorAAAA);
  }

  _createClass(DNSRecordAorAAAA, [{
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

      wasm.__wbg_dnsrecordaoraaaa_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.dnsrecordaoraaaa_to_bytes(retptr, this.ptr);
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
    * @returns {DNSRecordAorAAAA}
    */

  }, {
    key: "record",
    value:
    /**
    * @returns {string}
    */
    function record() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.dnsrecordaoraaaa_record(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(DNSRecordAorAAAA.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.dnsrecordaoraaaa_from_bytes(ptr0, len0);
      return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordAorAAAA}
    */

  }, {
    key: "new",
    value: function _new(dns_name) {
      var ptr0 = passStringToWasm0(dns_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.dnsrecordaoraaaa_new(ptr0, len0);
      return DNSRecordAorAAAA.__wrap(ret);
    }
  }]);

  return DNSRecordAorAAAA;
}();

module.exports.DNSRecordAorAAAA = DNSRecordAorAAAA;
/**
*/

var DNSRecordSRV = /*#__PURE__*/function () {
  "use strict";

  function DNSRecordSRV() {
    _classCallCheck(this, DNSRecordSRV);
  }

  _createClass(DNSRecordSRV, [{
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

      wasm.__wbg_dnsrecordsrv_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.dnsrecordsrv_to_bytes(retptr, this.ptr);
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
    * @returns {DNSRecordSRV}
    */

  }, {
    key: "record",
    value:
    /**
    * @returns {string}
    */
    function record() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.dnsrecordsrv_record(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(DNSRecordSRV.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.dnsrecordsrv_from_bytes(ptr0, len0);
      return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordSRV}
    */

  }, {
    key: "new",
    value: function _new(dns_name) {
      var ptr0 = passStringToWasm0(dns_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.dnsrecordsrv_new(ptr0, len0);
      return DNSRecordSRV.__wrap(ret);
    }
  }]);

  return DNSRecordSRV;
}();

module.exports.DNSRecordSRV = DNSRecordSRV;
/**
*/

var DataHash = /*#__PURE__*/function () {
  "use strict";

  function DataHash() {
    _classCallCheck(this, DataHash);
  }

  _createClass(DataHash, [{
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

      wasm.__wbg_datahash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.datahash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.datahash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {DataHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(DataHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.datahash_from_bech32(ptr0, len0);
      return DataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.datahash_from_bytes(ptr0, len0);
      return DataHash.__wrap(ret);
    }
  }]);

  return DataHash;
}();

module.exports.DataHash = DataHash;
/**
*/

var Ed25519KeyHash = /*#__PURE__*/function () {
  "use strict";

  function Ed25519KeyHash() {
    _classCallCheck(this, Ed25519KeyHash);
  }

  _createClass(Ed25519KeyHash, [{
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

      wasm.__wbg_ed25519keyhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ed25519keyhash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.ed25519keyhash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {Ed25519KeyHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Ed25519KeyHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519keyhash_from_bech32(ptr0, len0);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519keyhash_from_bytes(ptr0, len0);
      return Ed25519KeyHash.__wrap(ret);
    }
  }]);

  return Ed25519KeyHash;
}();

module.exports.Ed25519KeyHash = Ed25519KeyHash;
/**
*/

var Ed25519KeyHashes = /*#__PURE__*/function () {
  "use strict";

  function Ed25519KeyHashes() {
    _classCallCheck(this, Ed25519KeyHashes);
  }

  _createClass(Ed25519KeyHashes, [{
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

      wasm.__wbg_ed25519keyhashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ed25519keyhashes_to_bytes(retptr, this.ptr);
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
    * @returns {Ed25519KeyHashes}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.ed25519keyhashes_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.ed25519keyhashes_get(this.ptr, index);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Ed25519KeyHash);

      wasm.ed25519keyhashes_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Ed25519KeyHashes.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519keyhashes_from_bytes(ptr0, len0);
      return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.ed25519keyhashes_new();
      return Ed25519KeyHashes.__wrap(ret);
    }
  }]);

  return Ed25519KeyHashes;
}();

module.exports.Ed25519KeyHashes = Ed25519KeyHashes;
/**
*/

var Ed25519Signature = /*#__PURE__*/function () {
  "use strict";

  function Ed25519Signature() {
    _classCallCheck(this, Ed25519Signature);
  }

  _createClass(Ed25519Signature, [{
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

      wasm.__wbg_ed25519signature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ed25519signature_to_bytes(retptr, this.ptr);
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
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ed25519signature_to_bech32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {string}
    */

  }, {
    key: "to_hex",
    value: function to_hex() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ed25519signature_to_hex(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech32_str
    * @returns {Ed25519Signature}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Ed25519Signature.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519signature_from_bech32(ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {string} input
    * @returns {Ed25519Signature}
    */

  }, {
    key: "from_hex",
    value: function from_hex(input) {
      var ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519signature_from_hex(ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519Signature}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ed25519signature_from_bytes(ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
  }]);

  return Ed25519Signature;
}();

module.exports.Ed25519Signature = Ed25519Signature;
/**
*/

var EnterpriseAddress = /*#__PURE__*/function () {
  "use strict";

  function EnterpriseAddress() {
    _classCallCheck(this, EnterpriseAddress);
  }

  _createClass(EnterpriseAddress, [{
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

      wasm.__wbg_enterpriseaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {EnterpriseAddress}
    */

  }, {
    key: "payment_cred",
    value:
    /**
    * @returns {StakeCredential}
    */
    function payment_cred() {
      var ret = wasm.enterpriseaddress_payment_cred(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = wasm.enterpriseaddress_to_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {EnterpriseAddress | undefined}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(EnterpriseAddress.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(network, payment) {
      _assertClass(payment, StakeCredential);

      var ret = wasm.enterpriseaddress_new(network, payment.ptr);
      return EnterpriseAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = wasm.enterpriseaddress_from_address(addr.ptr);
      return ret === 0 ? undefined : EnterpriseAddress.__wrap(ret);
    }
  }]);

  return EnterpriseAddress;
}();

module.exports.EnterpriseAddress = EnterpriseAddress;
/**
*/

var ExUnitPrices = /*#__PURE__*/function () {
  "use strict";

  function ExUnitPrices() {
    _classCallCheck(this, ExUnitPrices);
  }

  _createClass(ExUnitPrices, [{
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

      wasm.__wbg_exunitprices_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.exunitprices_to_bytes(retptr, this.ptr);
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
    * @returns {ExUnitPrices}
    */

  }, {
    key: "mem_price",
    value:
    /**
    * @returns {UnitInterval}
    */
    function mem_price() {
      var ret = wasm.exunitprices_mem_price(this.ptr);
      return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */

  }, {
    key: "step_price",
    value: function step_price() {
      var ret = wasm.exunitprices_step_price(this.ptr);
      return UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} mem_price
    * @param {UnitInterval} step_price
    * @returns {ExUnitPrices}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ExUnitPrices.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.exunitprices_from_bytes(ptr0, len0);
      return ExUnitPrices.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(mem_price, step_price) {
      _assertClass(mem_price, UnitInterval);

      _assertClass(step_price, UnitInterval);

      var ret = wasm.exunitprices_new(mem_price.ptr, step_price.ptr);
      return ExUnitPrices.__wrap(ret);
    }
  }]);

  return ExUnitPrices;
}();

module.exports.ExUnitPrices = ExUnitPrices;
/**
*/

var ExUnits = /*#__PURE__*/function () {
  "use strict";

  function ExUnits() {
    _classCallCheck(this, ExUnits);
  }

  _createClass(ExUnits, [{
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

      wasm.__wbg_exunits_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.exunits_to_bytes(retptr, this.ptr);
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
    * @returns {ExUnits}
    */

  }, {
    key: "mem",
    value:
    /**
    * @returns {BigNum}
    */
    function mem() {
      var ret = wasm.exunits_mem(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "steps",
    value: function steps() {
      var ret = wasm.exunits_steps(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} mem
    * @param {BigNum} steps
    * @returns {ExUnits}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ExUnits.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.exunits_from_bytes(ptr0, len0);
      return ExUnits.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(mem, steps) {
      _assertClass(mem, BigNum);

      _assertClass(steps, BigNum);

      var ret = wasm.exunits_new(mem.ptr, steps.ptr);
      return ExUnits.__wrap(ret);
    }
  }]);

  return ExUnits;
}();

module.exports.ExUnits = ExUnits;
/**
*/

var GeneralTransactionMetadata = /*#__PURE__*/function () {
  "use strict";

  function GeneralTransactionMetadata() {
    _classCallCheck(this, GeneralTransactionMetadata);
  }

  _createClass(GeneralTransactionMetadata, [{
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

      wasm.__wbg_generaltransactionmetadata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.generaltransactionmetadata_to_bytes(retptr, this.ptr);
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
    * @returns {GeneralTransactionMetadata}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.generaltransactionmetadata_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {BigNum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, BigNum);

      _assertClass(value, TransactionMetadatum);

      var ret = wasm.generaltransactionmetadata_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {BigNum} key
    * @returns {TransactionMetadatum | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, BigNum);

      var ret = wasm.generaltransactionmetadata_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.generaltransactionmetadata_keys(this.ptr);
      return TransactionMetadatumLabels.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(GeneralTransactionMetadata.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.generaltransactionmetadata_from_bytes(ptr0, len0);
      return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.generaltransactionmetadata_new();
      return GeneralTransactionMetadata.__wrap(ret);
    }
  }]);

  return GeneralTransactionMetadata;
}();

module.exports.GeneralTransactionMetadata = GeneralTransactionMetadata;
/**
*/

var GenesisDelegateHash = /*#__PURE__*/function () {
  "use strict";

  function GenesisDelegateHash() {
    _classCallCheck(this, GenesisDelegateHash);
  }

  _createClass(GenesisDelegateHash, [{
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

      wasm.__wbg_genesisdelegatehash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.genesisdelegatehash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.genesisdelegatehash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisDelegateHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(GenesisDelegateHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesisdelegatehash_from_bech32(ptr0, len0);
      return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisDelegateHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesisdelegatehash_from_bytes(ptr0, len0);
      return GenesisDelegateHash.__wrap(ret);
    }
  }]);

  return GenesisDelegateHash;
}();

module.exports.GenesisDelegateHash = GenesisDelegateHash;
/**
*/

var GenesisHash = /*#__PURE__*/function () {
  "use strict";

  function GenesisHash() {
    _classCallCheck(this, GenesisHash);
  }

  _createClass(GenesisHash, [{
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

      wasm.__wbg_genesishash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.genesishash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.genesishash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(GenesisHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesishash_from_bech32(ptr0, len0);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesishash_from_bytes(ptr0, len0);
      return GenesisHash.__wrap(ret);
    }
  }]);

  return GenesisHash;
}();

module.exports.GenesisHash = GenesisHash;
/**
*/

var GenesisHashes = /*#__PURE__*/function () {
  "use strict";

  function GenesisHashes() {
    _classCallCheck(this, GenesisHashes);
  }

  _createClass(GenesisHashes, [{
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

      wasm.__wbg_genesishashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.genesishashes_to_bytes(retptr, this.ptr);
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
    * @returns {GenesisHashes}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.genesishashes_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {GenesisHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.genesishashes_get(this.ptr, index);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, GenesisHash);

      wasm.genesishashes_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(GenesisHashes.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesishashes_from_bytes(ptr0, len0);
      return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.genesishashes_new();
      return GenesisHashes.__wrap(ret);
    }
  }]);

  return GenesisHashes;
}();

module.exports.GenesisHashes = GenesisHashes;
/**
*/

var GenesisKeyDelegation = /*#__PURE__*/function () {
  "use strict";

  function GenesisKeyDelegation() {
    _classCallCheck(this, GenesisKeyDelegation);
  }

  _createClass(GenesisKeyDelegation, [{
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

      wasm.__wbg_genesiskeydelegation_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.genesiskeydelegation_to_bytes(retptr, this.ptr);
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
    * @returns {GenesisKeyDelegation}
    */

  }, {
    key: "genesishash",
    value:
    /**
    * @returns {GenesisHash}
    */
    function genesishash() {
      var ret = wasm.genesiskeydelegation_genesishash(this.ptr);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @returns {GenesisDelegateHash}
    */

  }, {
    key: "genesis_delegate_hash",
    value: function genesis_delegate_hash() {
      var ret = wasm.genesiskeydelegation_genesis_delegate_hash(this.ptr);
      return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */

  }, {
    key: "vrf_keyhash",
    value: function vrf_keyhash() {
      var ret = wasm.genesiskeydelegation_vrf_keyhash(this.ptr);
      return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} genesishash
    * @param {GenesisDelegateHash} genesis_delegate_hash
    * @param {VRFKeyHash} vrf_keyhash
    * @returns {GenesisKeyDelegation}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(GenesisKeyDelegation.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.genesiskeydelegation_from_bytes(ptr0, len0);
      return GenesisKeyDelegation.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(genesishash, genesis_delegate_hash, vrf_keyhash) {
      _assertClass(genesishash, GenesisHash);

      _assertClass(genesis_delegate_hash, GenesisDelegateHash);

      _assertClass(vrf_keyhash, VRFKeyHash);

      var ret = wasm.genesiskeydelegation_new(genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
      return GenesisKeyDelegation.__wrap(ret);
    }
  }]);

  return GenesisKeyDelegation;
}();

module.exports.GenesisKeyDelegation = GenesisKeyDelegation;
/**
*/

var Header = /*#__PURE__*/function () {
  "use strict";

  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
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

      wasm.__wbg_header_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.header_to_bytes(retptr, this.ptr);
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
    * @returns {Header}
    */

  }, {
    key: "header_body",
    value:
    /**
    * @returns {HeaderBody}
    */
    function header_body() {
      var ret = wasm.header_header_body(this.ptr);
      return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {KESSignature}
    */

  }, {
    key: "body_signature",
    value: function body_signature() {
      var ret = wasm.header_body_signature(this.ptr);
      return KESSignature.__wrap(ret);
    }
    /**
    * @param {HeaderBody} header_body
    * @param {KESSignature} body_signature
    * @returns {Header}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Header.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.header_from_bytes(ptr0, len0);
      return Header.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(header_body, body_signature) {
      _assertClass(header_body, HeaderBody);

      _assertClass(body_signature, KESSignature);

      var ret = wasm.header_new(header_body.ptr, body_signature.ptr);
      return Header.__wrap(ret);
    }
  }]);

  return Header;
}();

module.exports.Header = Header;
/**
*/

var HeaderBody = /*#__PURE__*/function () {
  "use strict";

  function HeaderBody() {
    _classCallCheck(this, HeaderBody);
  }

  _createClass(HeaderBody, [{
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

      wasm.__wbg_headerbody_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.headerbody_to_bytes(retptr, this.ptr);
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
    * @returns {HeaderBody}
    */

  }, {
    key: "block_number",
    value:
    /**
    * @returns {number}
    */
    function block_number() {
      var ret = wasm.headerbody_block_number(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "slot",
    value: function slot() {
      var ret = wasm.headerbody_slot(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BlockHash | undefined}
    */

  }, {
    key: "prev_hash",
    value: function prev_hash() {
      var ret = wasm.headerbody_prev_hash(this.ptr);
      return ret === 0 ? undefined : BlockHash.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */

  }, {
    key: "issuer_vkey",
    value: function issuer_vkey() {
      var ret = wasm.headerbody_issuer_vkey(this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {VRFVKey}
    */

  }, {
    key: "vrf_vkey",
    value: function vrf_vkey() {
      var ret = wasm.headerbody_vrf_vkey(this.ptr);
      return VRFVKey.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */

  }, {
    key: "nonce_vrf",
    value: function nonce_vrf() {
      var ret = wasm.headerbody_nonce_vrf(this.ptr);
      return VRFCert.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */

  }, {
    key: "leader_vrf",
    value: function leader_vrf() {
      var ret = wasm.headerbody_leader_vrf(this.ptr);
      return VRFCert.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "block_body_size",
    value: function block_body_size() {
      var ret = wasm.headerbody_block_body_size(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BlockHash}
    */

  }, {
    key: "block_body_hash",
    value: function block_body_hash() {
      var ret = wasm.headerbody_block_body_hash(this.ptr);
      return BlockHash.__wrap(ret);
    }
    /**
    * @returns {OperationalCert}
    */

  }, {
    key: "operational_cert",
    value: function operational_cert() {
      var ret = wasm.headerbody_operational_cert(this.ptr);
      return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersion}
    */

  }, {
    key: "protocol_version",
    value: function protocol_version() {
      var ret = wasm.headerbody_protocol_version(this.ptr);
      return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {number} block_number
    * @param {number} slot
    * @param {BlockHash | undefined} prev_hash
    * @param {Vkey} issuer_vkey
    * @param {VRFVKey} vrf_vkey
    * @param {VRFCert} nonce_vrf
    * @param {VRFCert} leader_vrf
    * @param {number} block_body_size
    * @param {BlockHash} block_body_hash
    * @param {OperationalCert} operational_cert
    * @param {ProtocolVersion} protocol_version
    * @returns {HeaderBody}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(HeaderBody.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.headerbody_from_bytes(ptr0, len0);
      return HeaderBody.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(block_number, slot, prev_hash, issuer_vkey, vrf_vkey, nonce_vrf, leader_vrf, block_body_size, block_body_hash, operational_cert, protocol_version) {
      var ptr0 = 0;

      if (!isLikeNone(prev_hash)) {
        _assertClass(prev_hash, BlockHash);

        ptr0 = prev_hash.ptr;
        prev_hash.ptr = 0;
      }

      _assertClass(issuer_vkey, Vkey);

      _assertClass(vrf_vkey, VRFVKey);

      _assertClass(nonce_vrf, VRFCert);

      _assertClass(leader_vrf, VRFCert);

      _assertClass(block_body_hash, BlockHash);

      _assertClass(operational_cert, OperationalCert);

      _assertClass(protocol_version, ProtocolVersion);

      var ret = wasm.headerbody_new(block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
      return HeaderBody.__wrap(ret);
    }
  }]);

  return HeaderBody;
}();

module.exports.HeaderBody = HeaderBody;
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

      var ret = wasm.int_new(x.ptr);
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

      var ret = wasm.int_new_negative(x.ptr);
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

var Ipv4 = /*#__PURE__*/function () {
  "use strict";

  function Ipv4() {
    _classCallCheck(this, Ipv4);
  }

  _createClass(Ipv4, [{
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

      wasm.__wbg_ipv4_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ipv4_to_bytes(retptr, this.ptr);
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
    * @returns {Ipv4}
    */

  }, {
    key: "ip",
    value:
    /**
    * @returns {Uint8Array}
    */
    function ip() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ipv4_ip(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Ipv4.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ipv4_from_bytes(ptr0, len0);
      return Ipv4.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv4}
    */

  }, {
    key: "new",
    value: function _new(data) {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ipv4_new(ptr0, len0);
      return Ipv4.__wrap(ret);
    }
  }]);

  return Ipv4;
}();

module.exports.Ipv4 = Ipv4;
/**
*/

var Ipv6 = /*#__PURE__*/function () {
  "use strict";

  function Ipv6() {
    _classCallCheck(this, Ipv6);
  }

  _createClass(Ipv6, [{
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

      wasm.__wbg_ipv6_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ipv6_to_bytes(retptr, this.ptr);
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
    * @returns {Ipv6}
    */

  }, {
    key: "ip",
    value:
    /**
    * @returns {Uint8Array}
    */
    function ip() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.ipv6_ip(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Ipv6.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ipv6_from_bytes(ptr0, len0);
      return Ipv6.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv6}
    */

  }, {
    key: "new",
    value: function _new(data) {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.ipv6_new(ptr0, len0);
      return Ipv6.__wrap(ret);
    }
  }]);

  return Ipv6;
}();

module.exports.Ipv6 = Ipv6;
/**
*/

var KESSignature = /*#__PURE__*/function () {
  "use strict";

  function KESSignature() {
    _classCallCheck(this, KESSignature);
  }

  _createClass(KESSignature, [{
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

      wasm.__wbg_kessignature_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.kessignature_to_bytes(retptr, this.ptr);
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
    * @returns {KESSignature}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(KESSignature.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.kessignature_from_bytes(ptr0, len0);
      return KESSignature.__wrap(ret);
    }
  }]);

  return KESSignature;
}();

module.exports.KESSignature = KESSignature;
/**
*/

var KESVKey = /*#__PURE__*/function () {
  "use strict";

  function KESVKey() {
    _classCallCheck(this, KESVKey);
  }

  _createClass(KESVKey, [{
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

      wasm.__wbg_kesvkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.kesvkey_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.kesvkey_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {KESVKey}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(KESVKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.kesvkey_from_bech32(ptr0, len0);
      return KESVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESVKey}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.kesvkey_from_bytes(ptr0, len0);
      return KESVKey.__wrap(ret);
    }
  }]);

  return KESVKey;
}();

module.exports.KESVKey = KESVKey;
/**
*/

var Language = /*#__PURE__*/function () {
  "use strict";

  function Language() {
    _classCallCheck(this, Language);
  }

  _createClass(Language, [{
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

      wasm.__wbg_language_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.language_to_bytes(retptr, this.ptr);
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
    * @returns {Language}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.language_kind(this.ptr);
      return ret >>> 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Language.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.language_from_bytes(ptr0, len0);
      return Language.__wrap(ret);
    }
    /**
    * @returns {Language}
    */

  }, {
    key: "new_plutus_v1",
    value: function new_plutus_v1() {
      var ret = wasm.language_new_plutus_v1();
      return Language.__wrap(ret);
    }
  }]);

  return Language;
}();

module.exports.Language = Language;
/**
*/

var Languages = /*#__PURE__*/function () {
  "use strict";

  function Languages() {
    _classCallCheck(this, Languages);
  }

  _createClass(Languages, [{
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

      wasm.__wbg_languages_free(ptr);
    }
    /**
    * @returns {Languages}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.languages_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Language}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.languages_get(this.ptr, index);
      return Language.__wrap(ret);
    }
    /**
    * @param {Language} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Language);

      var ptr0 = elem.ptr;
      elem.ptr = 0;
      wasm.languages_add(this.ptr, ptr0);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Languages.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.languages_new();
      return Languages.__wrap(ret);
    }
  }]);

  return Languages;
}();

module.exports.Languages = Languages;
/**
*/

var LegacyDaedalusPrivateKey = /*#__PURE__*/function () {
  "use strict";

  function LegacyDaedalusPrivateKey() {
    _classCallCheck(this, LegacyDaedalusPrivateKey);
  }

  _createClass(LegacyDaedalusPrivateKey, [{
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

      wasm.__wbg_legacydaedalusprivatekey_free(ptr);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {LegacyDaedalusPrivateKey}
    */

  }, {
    key: "as_bytes",
    value:
    /**
    * @returns {Uint8Array}
    */
    function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.legacydaedalusprivatekey_as_bytes(retptr, this.ptr);
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
    key: "chaincode",
    value: function chaincode() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.legacydaedalusprivatekey_chaincode(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(LegacyDaedalusPrivateKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.legacydaedalusprivatekey_from_bytes(ptr0, len0);
      return LegacyDaedalusPrivateKey.__wrap(ret);
    }
  }]);

  return LegacyDaedalusPrivateKey;
}();

module.exports.LegacyDaedalusPrivateKey = LegacyDaedalusPrivateKey;
/**
*/

var LinearFee = /*#__PURE__*/function () {
  "use strict";

  function LinearFee() {
    _classCallCheck(this, LinearFee);
  }

  _createClass(LinearFee, [{
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

      wasm.__wbg_linearfee_free(ptr);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "constant",
    value: function constant() {
      var ret = wasm.linearfee_constant(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "coefficient",
    value: function coefficient() {
      var ret = wasm.linearfee_coefficient(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coefficient
    * @param {BigNum} constant
    * @returns {LinearFee}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(LinearFee.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(coefficient, constant) {
      _assertClass(coefficient, BigNum);

      _assertClass(constant, BigNum);

      var ret = wasm.linearfee_new(coefficient.ptr, constant.ptr);
      return LinearFee.__wrap(ret);
    }
  }]);

  return LinearFee;
}();

module.exports.LinearFee = LinearFee;
/**
*/

var MIRToStakeCredentials = /*#__PURE__*/function () {
  "use strict";

  function MIRToStakeCredentials() {
    _classCallCheck(this, MIRToStakeCredentials);
  }

  _createClass(MIRToStakeCredentials, [{
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

      wasm.__wbg_mirtostakecredentials_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.mirtostakecredentials_to_bytes(retptr, this.ptr);
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
    * @returns {MIRToStakeCredentials}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.mirtostakecredentials_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {StakeCredential} cred
    * @param {Int} delta
    * @returns {Int | undefined}
    */

  }, {
    key: "insert",
    value: function insert(cred, delta) {
      _assertClass(cred, StakeCredential);

      _assertClass(delta, Int);

      var ret = wasm.mirtostakecredentials_insert(this.ptr, cred.ptr, delta.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @param {StakeCredential} cred
    * @returns {Int | undefined}
    */

  }, {
    key: "get",
    value: function get(cred) {
      _assertClass(cred, StakeCredential);

      var ret = wasm.mirtostakecredentials_get(this.ptr, cred.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.mirtostakecredentials_keys(this.ptr);
      return StakeCredentials.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MIRToStakeCredentials.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.mirtostakecredentials_from_bytes(ptr0, len0);
      return MIRToStakeCredentials.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.mirtostakecredentials_new();
      return MIRToStakeCredentials.__wrap(ret);
    }
  }]);

  return MIRToStakeCredentials;
}();

module.exports.MIRToStakeCredentials = MIRToStakeCredentials;
/**
*/

var MetadataList = /*#__PURE__*/function () {
  "use strict";

  function MetadataList() {
    _classCallCheck(this, MetadataList);
  }

  _createClass(MetadataList, [{
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

      wasm.__wbg_metadatalist_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.metadatalist_to_bytes(retptr, this.ptr);
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
    * @returns {MetadataList}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.metadatalist_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.metadatalist_get(this.ptr, index);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionMetadatum);

      wasm.metadatalist_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MetadataList.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.metadatalist_from_bytes(ptr0, len0);
      return MetadataList.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.metadatalist_new();
      return MetadataList.__wrap(ret);
    }
  }]);

  return MetadataList;
}();

module.exports.MetadataList = MetadataList;
/**
*/

var MetadataMap = /*#__PURE__*/function () {
  "use strict";

  function MetadataMap() {
    _classCallCheck(this, MetadataMap);
  }

  _createClass(MetadataMap, [{
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

      wasm.__wbg_metadatamap_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.metadatamap_to_bytes(retptr, this.ptr);
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
    * @returns {MetadataMap}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.metadatamap_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {TransactionMetadatum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, TransactionMetadatum);

      _assertClass(value, TransactionMetadatum);

      var ret = wasm.metadatamap_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */

  }, {
    key: "insert_str",
    value: function insert_str(key, value) {
      var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(value, TransactionMetadatum);

      var ret = wasm.metadatamap_insert_str(this.ptr, ptr0, len0, value.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */

  }, {
    key: "insert_i32",
    value: function insert_i32(key, value) {
      _assertClass(value, TransactionMetadatum);

      var ret = wasm.metadatamap_insert_i32(this.ptr, key, value.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, TransactionMetadatum);

      var ret = wasm.metadatamap_get(this.ptr, key.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get_str",
    value: function get_str(key) {
      var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.metadatamap_get_str(this.ptr, ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get_i32",
    value: function get_i32(key) {
      var ret = wasm.metadatamap_get_i32(this.ptr, key);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {boolean}
    */

  }, {
    key: "has",
    value: function has(key) {
      _assertClass(key, TransactionMetadatum);

      var ret = wasm.metadatamap_has(this.ptr, key.ptr);
      return ret !== 0;
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.metadatamap_keys(this.ptr);
      return MetadataList.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MetadataMap.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.metadatamap_from_bytes(ptr0, len0);
      return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataMap}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.metadatamap_new();
      return MetadataMap.__wrap(ret);
    }
  }]);

  return MetadataMap;
}();

module.exports.MetadataMap = MetadataMap;
/**
*/

var Mint = /*#__PURE__*/function () {
  "use strict";

  function Mint() {
    _classCallCheck(this, Mint);
  }

  _createClass(Mint, [{
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

      wasm.__wbg_mint_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.mint_to_bytes(retptr, this.ptr);
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
    * @returns {Mint}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.mint_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {MintAssets} value
    * @returns {MintAssets | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, ScriptHash);

      _assertClass(value, MintAssets);

      var ret = wasm.mint_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {MintAssets | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, ScriptHash);

      var ret = wasm.mint_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.mint_keys(this.ptr);
      return ScriptHashes.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Mint.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.mint_from_bytes(ptr0, len0);
      return Mint.__wrap(ret);
    }
    /**
    * @returns {Mint}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.mint_new();
      return Mint.__wrap(ret);
    }
  }]);

  return Mint;
}();

module.exports.Mint = Mint;
/**
*/

var MintAssets = /*#__PURE__*/function () {
  "use strict";

  function MintAssets() {
    _classCallCheck(this, MintAssets);
  }

  _createClass(MintAssets, [{
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

      wasm.__wbg_mintassets_free(ptr);
    }
    /**
    * @returns {MintAssets}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.mintassets_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {Int} value
    * @returns {Int | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, AssetName);

      _assertClass(value, Int);

      var ptr0 = value.ptr;
      value.ptr = 0;
      var ret = wasm.mintassets_insert(this.ptr, key.ptr, ptr0);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {Int | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, AssetName);

      var ret = wasm.mintassets_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.mintassets_keys(this.ptr);
      return AssetNames.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MintAssets.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.mintassets_new();
      return MintAssets.__wrap(ret);
    }
  }]);

  return MintAssets;
}();

module.exports.MintAssets = MintAssets;
/**
*/

var MoveInstantaneousReward = /*#__PURE__*/function () {
  "use strict";

  function MoveInstantaneousReward() {
    _classCallCheck(this, MoveInstantaneousReward);
  }

  _createClass(MoveInstantaneousReward, [{
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

      wasm.__wbg_moveinstantaneousreward_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.moveinstantaneousreward_to_bytes(retptr, this.ptr);
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
    * @returns {MoveInstantaneousReward}
    */

  }, {
    key: "pot",
    value:
    /**
    * @returns {number}
    */
    function pot() {
      var ret = wasm.moveinstantaneousreward_pot(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = wasm.moveinstantaneousreward_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_to_other_pot",
    value: function as_to_other_pot() {
      var ret = wasm.moveinstantaneousreward_as_to_other_pot(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials | undefined}
    */

  }, {
    key: "as_to_stake_creds",
    value: function as_to_stake_creds() {
      var ret = wasm.moveinstantaneousreward_as_to_stake_creds(this.ptr);
      return ret === 0 ? undefined : MIRToStakeCredentials.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MoveInstantaneousReward.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.moveinstantaneousreward_from_bytes(ptr0, len0);
      return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {number} pot
    * @param {BigNum} amount
    * @returns {MoveInstantaneousReward}
    */

  }, {
    key: "new_to_other_pot",
    value: function new_to_other_pot(pot, amount) {
      _assertClass(amount, BigNum);

      var ret = wasm.moveinstantaneousreward_new_to_other_pot(pot, amount.ptr);
      return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {number} pot
    * @param {MIRToStakeCredentials} amounts
    * @returns {MoveInstantaneousReward}
    */

  }, {
    key: "new_to_stake_creds",
    value: function new_to_stake_creds(pot, amounts) {
      _assertClass(amounts, MIRToStakeCredentials);

      var ret = wasm.moveinstantaneousreward_new_to_stake_creds(pot, amounts.ptr);
      return MoveInstantaneousReward.__wrap(ret);
    }
  }]);

  return MoveInstantaneousReward;
}();

module.exports.MoveInstantaneousReward = MoveInstantaneousReward;
/**
*/

var MoveInstantaneousRewardsCert = /*#__PURE__*/function () {
  "use strict";

  function MoveInstantaneousRewardsCert() {
    _classCallCheck(this, MoveInstantaneousRewardsCert);
  }

  _createClass(MoveInstantaneousRewardsCert, [{
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

      wasm.__wbg_moveinstantaneousrewardscert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.moveinstantaneousrewardscert_to_bytes(retptr, this.ptr);
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
    * @returns {MoveInstantaneousRewardsCert}
    */

  }, {
    key: "move_instantaneous_reward",
    value:
    /**
    * @returns {MoveInstantaneousReward}
    */
    function move_instantaneous_reward() {
      var ret = wasm.moveinstantaneousrewardscert_move_instantaneous_reward(this.ptr);
      return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousReward} move_instantaneous_reward
    * @returns {MoveInstantaneousRewardsCert}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MoveInstantaneousRewardsCert.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.moveinstantaneousrewardscert_from_bytes(ptr0, len0);
      return MoveInstantaneousRewardsCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(move_instantaneous_reward) {
      _assertClass(move_instantaneous_reward, MoveInstantaneousReward);

      var ret = wasm.moveinstantaneousrewardscert_new(move_instantaneous_reward.ptr);
      return MoveInstantaneousRewardsCert.__wrap(ret);
    }
  }]);

  return MoveInstantaneousRewardsCert;
}();

module.exports.MoveInstantaneousRewardsCert = MoveInstantaneousRewardsCert;
/**
*/

var MultiAsset = /*#__PURE__*/function () {
  "use strict";

  function MultiAsset() {
    _classCallCheck(this, MultiAsset);
  }

  _createClass(MultiAsset, [{
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

      wasm.__wbg_multiasset_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.multiasset_to_bytes(retptr, this.ptr);
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
    * @returns {MultiAsset}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.multiasset_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {Assets} value
    * @returns {Assets | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, ScriptHash);

      _assertClass(value, Assets);

      var ret = wasm.multiasset_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {Assets | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, ScriptHash);

      var ret = wasm.multiasset_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.multiasset_keys(this.ptr);
      return ScriptHashes.__wrap(ret);
    }
    /**
    * removes an asset from the list if the result is 0 or less
    * @param {MultiAsset} rhs_ma
    * @returns {MultiAsset}
    */

  }, {
    key: "sub",
    value: function sub(rhs_ma) {
      _assertClass(rhs_ma, MultiAsset);

      var ret = wasm.multiasset_sub(this.ptr, rhs_ma.ptr);
      return MultiAsset.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MultiAsset.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.multiasset_from_bytes(ptr0, len0);
      return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {MultiAsset}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.multiasset_new();
      return MultiAsset.__wrap(ret);
    }
  }]);

  return MultiAsset;
}();

module.exports.MultiAsset = MultiAsset;
/**
*/

var MultiHostName = /*#__PURE__*/function () {
  "use strict";

  function MultiHostName() {
    _classCallCheck(this, MultiHostName);
  }

  _createClass(MultiHostName, [{
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

      wasm.__wbg_multihostname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.multihostname_to_bytes(retptr, this.ptr);
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
    * @returns {MultiHostName}
    */

  }, {
    key: "dns_name",
    value:
    /**
    * @returns {DNSRecordSRV}
    */
    function dns_name() {
      var ret = wasm.multihostname_dns_name(this.ptr);
      return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {DNSRecordSRV} dns_name
    * @returns {MultiHostName}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(MultiHostName.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.multihostname_from_bytes(ptr0, len0);
      return MultiHostName.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(dns_name) {
      _assertClass(dns_name, DNSRecordSRV);

      var ret = wasm.multihostname_new(dns_name.ptr);
      return MultiHostName.__wrap(ret);
    }
  }]);

  return MultiHostName;
}();

module.exports.MultiHostName = MultiHostName;
/**
*/

var NativeScript = /*#__PURE__*/function () {
  "use strict";

  function NativeScript() {
    _classCallCheck(this, NativeScript);
  }

  _createClass(NativeScript, [{
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

      wasm.__wbg_nativescript_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.nativescript_to_bytes(retptr, this.ptr);
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
    * @returns {NativeScript}
    */

  }, {
    key: "hash",
    value:
    /**
    * @param {number} namespace
    * @returns {ScriptHash}
    */
    function hash(namespace) {
      var ret = wasm.nativescript_hash(this.ptr, namespace);
      return ScriptHash.__wrap(ret);
    }
    /**
    * @param {ScriptPubkey} script_pubkey
    * @returns {NativeScript}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.nativescript_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ScriptPubkey | undefined}
    */

  }, {
    key: "as_script_pubkey",
    value: function as_script_pubkey() {
      var ret = wasm.nativescript_as_script_pubkey(this.ptr);
      return ret === 0 ? undefined : ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {ScriptAll | undefined}
    */

  }, {
    key: "as_script_all",
    value: function as_script_all() {
      var ret = wasm.nativescript_as_script_all(this.ptr);
      return ret === 0 ? undefined : ScriptAll.__wrap(ret);
    }
    /**
    * @returns {ScriptAny | undefined}
    */

  }, {
    key: "as_script_any",
    value: function as_script_any() {
      var ret = wasm.nativescript_as_script_any(this.ptr);
      return ret === 0 ? undefined : ScriptAny.__wrap(ret);
    }
    /**
    * @returns {ScriptNOfK | undefined}
    */

  }, {
    key: "as_script_n_of_k",
    value: function as_script_n_of_k() {
      var ret = wasm.nativescript_as_script_n_of_k(this.ptr);
      return ret === 0 ? undefined : ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {TimelockStart | undefined}
    */

  }, {
    key: "as_timelock_start",
    value: function as_timelock_start() {
      var ret = wasm.nativescript_as_timelock_start(this.ptr);
      return ret === 0 ? undefined : TimelockStart.__wrap(ret);
    }
    /**
    * @returns {TimelockExpiry | undefined}
    */

  }, {
    key: "as_timelock_expiry",
    value: function as_timelock_expiry() {
      var ret = wasm.nativescript_as_timelock_expiry(this.ptr);
      return ret === 0 ? undefined : TimelockExpiry.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(NativeScript.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.nativescript_from_bytes(ptr0, len0);
      return NativeScript.__wrap(ret);
    }
  }, {
    key: "new_script_pubkey",
    value: function new_script_pubkey(script_pubkey) {
      _assertClass(script_pubkey, ScriptPubkey);

      var ret = wasm.nativescript_new_script_pubkey(script_pubkey.ptr);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAll} script_all
    * @returns {NativeScript}
    */

  }, {
    key: "new_script_all",
    value: function new_script_all(script_all) {
      _assertClass(script_all, ScriptAll);

      var ret = wasm.nativescript_new_script_all(script_all.ptr);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAny} script_any
    * @returns {NativeScript}
    */

  }, {
    key: "new_script_any",
    value: function new_script_any(script_any) {
      _assertClass(script_any, ScriptAny);

      var ret = wasm.nativescript_new_script_any(script_any.ptr);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptNOfK} script_n_of_k
    * @returns {NativeScript}
    */

  }, {
    key: "new_script_n_of_k",
    value: function new_script_n_of_k(script_n_of_k) {
      _assertClass(script_n_of_k, ScriptNOfK);

      var ret = wasm.nativescript_new_script_n_of_k(script_n_of_k.ptr);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockStart} timelock_start
    * @returns {NativeScript}
    */

  }, {
    key: "new_timelock_start",
    value: function new_timelock_start(timelock_start) {
      _assertClass(timelock_start, TimelockStart);

      var ret = wasm.nativescript_new_timelock_start(timelock_start.ptr);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockExpiry} timelock_expiry
    * @returns {NativeScript}
    */

  }, {
    key: "new_timelock_expiry",
    value: function new_timelock_expiry(timelock_expiry) {
      _assertClass(timelock_expiry, TimelockExpiry);

      var ret = wasm.nativescript_new_timelock_expiry(timelock_expiry.ptr);
      return NativeScript.__wrap(ret);
    }
  }]);

  return NativeScript;
}();

module.exports.NativeScript = NativeScript;
/**
*/

var NativeScripts = /*#__PURE__*/function () {
  "use strict";

  function NativeScripts() {
    _classCallCheck(this, NativeScripts);
  }

  _createClass(NativeScripts, [{
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

      wasm.__wbg_nativescripts_free(ptr);
    }
    /**
    * @returns {NativeScripts}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.nativescripts_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {NativeScript}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.nativescripts_get(this.ptr, index);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {NativeScript} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, NativeScript);

      wasm.nativescripts_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(NativeScripts.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.nativescripts_new();
      return NativeScripts.__wrap(ret);
    }
  }]);

  return NativeScripts;
}();

module.exports.NativeScripts = NativeScripts;
/**
*/

var NetworkId = /*#__PURE__*/function () {
  "use strict";

  function NetworkId() {
    _classCallCheck(this, NetworkId);
  }

  _createClass(NetworkId, [{
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

      wasm.__wbg_networkid_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.networkid_to_bytes(retptr, this.ptr);
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
    * @returns {NetworkId}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.networkid_kind(this.ptr);
      return ret >>> 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(NetworkId.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.networkid_from_bytes(ptr0, len0);
      return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */

  }, {
    key: "testnet",
    value: function testnet() {
      var ret = wasm.networkid_testnet();
      return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */

  }, {
    key: "mainnet",
    value: function mainnet() {
      var ret = wasm.networkid_mainnet();
      return NetworkId.__wrap(ret);
    }
  }]);

  return NetworkId;
}();

module.exports.NetworkId = NetworkId;
/**
*/

var NetworkInfo = /*#__PURE__*/function () {
  "use strict";

  function NetworkInfo() {
    _classCallCheck(this, NetworkInfo);
  }

  _createClass(NetworkInfo, [{
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

      wasm.__wbg_networkinfo_free(ptr);
    }
    /**
    * @param {number} network_id
    * @param {number} protocol_magic
    * @returns {NetworkInfo}
    */

  }, {
    key: "network_id",
    value:
    /**
    * @returns {number}
    */
    function network_id() {
      var ret = wasm.networkinfo_network_id(this.ptr);
      return ret;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "protocol_magic",
    value: function protocol_magic() {
      var ret = wasm.networkinfo_protocol_magic(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {NetworkInfo}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(NetworkInfo.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(network_id, protocol_magic) {
      var ret = wasm.networkinfo_new(network_id, protocol_magic);
      return NetworkInfo.__wrap(ret);
    }
  }, {
    key: "testnet",
    value: function testnet() {
      var ret = wasm.networkinfo_testnet();
      return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {NetworkInfo}
    */

  }, {
    key: "mainnet",
    value: function mainnet() {
      var ret = wasm.networkinfo_mainnet();
      return NetworkInfo.__wrap(ret);
    }
  }]);

  return NetworkInfo;
}();

module.exports.NetworkInfo = NetworkInfo;
/**
*/

var Nonce = /*#__PURE__*/function () {
  "use strict";

  function Nonce() {
    _classCallCheck(this, Nonce);
  }

  _createClass(Nonce, [{
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

      wasm.__wbg_nonce_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.nonce_to_bytes(retptr, this.ptr);
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
    * @returns {Nonce}
    */

  }, {
    key: "get_hash",
    value:
    /**
    * @returns {Uint8Array | undefined}
    */
    function get_hash() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.nonce_get_hash(retptr, this.ptr);
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
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Nonce.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.nonce_from_bytes(ptr0, len0);
      return Nonce.__wrap(ret);
    }
    /**
    * @returns {Nonce}
    */

  }, {
    key: "new_identity",
    value: function new_identity() {
      var ret = wasm.nonce_new_identity();
      return Nonce.__wrap(ret);
    }
    /**
    * @param {Uint8Array} hash
    * @returns {Nonce}
    */

  }, {
    key: "new_from_hash",
    value: function new_from_hash(hash) {
      var ptr0 = passArray8ToWasm0(hash, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.nonce_new_from_hash(ptr0, len0);
      return Nonce.__wrap(ret);
    }
  }]);

  return Nonce;
}();

module.exports.Nonce = Nonce;
/**
*/

var OperationalCert = /*#__PURE__*/function () {
  "use strict";

  function OperationalCert() {
    _classCallCheck(this, OperationalCert);
  }

  _createClass(OperationalCert, [{
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

      wasm.__wbg_operationalcert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.operationalcert_to_bytes(retptr, this.ptr);
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
    * @returns {OperationalCert}
    */

  }, {
    key: "hot_vkey",
    value:
    /**
    * @returns {KESVKey}
    */
    function hot_vkey() {
      var ret = wasm.operationalcert_hot_vkey(this.ptr);
      return KESVKey.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "sequence_number",
    value: function sequence_number() {
      var ret = wasm.operationalcert_sequence_number(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kes_period",
    value: function kes_period() {
      var ret = wasm.operationalcert_kes_period(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "sigma",
    value: function sigma() {
      var ret = wasm.operationalcert_sigma(this.ptr);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {KESVKey} hot_vkey
    * @param {number} sequence_number
    * @param {number} kes_period
    * @param {Ed25519Signature} sigma
    * @returns {OperationalCert}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(OperationalCert.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.operationalcert_from_bytes(ptr0, len0);
      return OperationalCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(hot_vkey, sequence_number, kes_period, sigma) {
      _assertClass(hot_vkey, KESVKey);

      _assertClass(sigma, Ed25519Signature);

      var ret = wasm.operationalcert_new(hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
      return OperationalCert.__wrap(ret);
    }
  }]);

  return OperationalCert;
}();

module.exports.OperationalCert = OperationalCert;
/**
*/

var PlutusData = /*#__PURE__*/function () {
  "use strict";

  function PlutusData() {
    _classCallCheck(this, PlutusData);
  }

  _createClass(PlutusData, [{
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

      wasm.__wbg_plutusdata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusdata_to_bytes(retptr, this.ptr);
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
    * @returns {PlutusData}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.plutusdata_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ConstrPlutusData | undefined}
    */

  }, {
    key: "as_constr_plutus_data",
    value: function as_constr_plutus_data() {
      var ret = wasm.plutusdata_as_constr_plutus_data(this.ptr);
      return ret === 0 ? undefined : ConstrPlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusMap | undefined}
    */

  }, {
    key: "as_map",
    value: function as_map() {
      var ret = wasm.plutusdata_as_map(this.ptr);
      return ret === 0 ? undefined : PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusList | undefined}
    */

  }, {
    key: "as_list",
    value: function as_list() {
      var ret = wasm.plutusdata_as_list(this.ptr);
      return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @returns {BigInt | undefined}
    */

  }, {
    key: "as_integer",
    value: function as_integer() {
      var ret = wasm.plutusdata_as_integer(this.ptr);
      return ret === 0 ? undefined : BigInt.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusdata_as_bytes(retptr, this.ptr);
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
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PlutusData.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusdata_from_bytes(ptr0, len0);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {ConstrPlutusData} constr_plutus_data
    * @returns {PlutusData}
    */

  }, {
    key: "new_constr_plutus_data",
    value: function new_constr_plutus_data(constr_plutus_data) {
      _assertClass(constr_plutus_data, ConstrPlutusData);

      var ret = wasm.plutusdata_new_constr_plutus_data(constr_plutus_data.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusMap} map
    * @returns {PlutusData}
    */

  }, {
    key: "new_map",
    value: function new_map(map) {
      _assertClass(map, PlutusMap);

      var ret = wasm.plutusdata_new_map(map.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusList} list
    * @returns {PlutusData}
    */

  }, {
    key: "new_list",
    value: function new_list(list) {
      _assertClass(list, PlutusList);

      var ret = wasm.plutusdata_new_list(list.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {BigInt} integer
    * @returns {PlutusData}
    */

  }, {
    key: "new_integer",
    value: function new_integer(integer) {
      _assertClass(integer, BigInt);

      var ret = wasm.plutusdata_new_integer(integer.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusData}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusdata_new_bytes(ptr0, len0);
      return PlutusData.__wrap(ret);
    }
  }]);

  return PlutusData;
}();

module.exports.PlutusData = PlutusData;
/**
*/

var PlutusList = /*#__PURE__*/function () {
  "use strict";

  function PlutusList() {
    _classCallCheck(this, PlutusList);
  }

  _createClass(PlutusList, [{
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

      wasm.__wbg_plutuslist_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutuslist_to_bytes(retptr, this.ptr);
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
    * @returns {PlutusList}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.plutuslist_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusData}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.plutuslist_get(this.ptr, index);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusData} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, PlutusData);

      wasm.plutuslist_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PlutusList.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutuslist_from_bytes(ptr0, len0);
      return PlutusList.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.plutuslist_new();
      return PlutusList.__wrap(ret);
    }
  }]);

  return PlutusList;
}();

module.exports.PlutusList = PlutusList;
/**
*/

var PlutusMap = /*#__PURE__*/function () {
  "use strict";

  function PlutusMap() {
    _classCallCheck(this, PlutusMap);
  }

  _createClass(PlutusMap, [{
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

      wasm.__wbg_plutusmap_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusmap_to_bytes(retptr, this.ptr);
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
    * @returns {PlutusMap}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.plutusmap_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {PlutusData} key
    * @param {PlutusData} value
    * @returns {PlutusData | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, PlutusData);

      _assertClass(value, PlutusData);

      var ret = wasm.plutusmap_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusData} key
    * @returns {PlutusData | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, PlutusData);

      var ret = wasm.plutusmap_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : PlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.plutusmap_keys(this.ptr);
      return PlutusList.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PlutusMap.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusmap_from_bytes(ptr0, len0);
      return PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusMap}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.plutusmap_new();
      return PlutusMap.__wrap(ret);
    }
  }]);

  return PlutusMap;
}();

module.exports.PlutusMap = PlutusMap;
/**
*/

var PlutusScript = /*#__PURE__*/function () {
  "use strict";

  function PlutusScript() {
    _classCallCheck(this, PlutusScript);
  }

  _createClass(PlutusScript, [{
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

      wasm.__wbg_plutusscript_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusscript_to_bytes(retptr, this.ptr);
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
    * @returns {PlutusScript}
    */

  }, {
    key: "bytes",
    value:
    /**
    * @returns {Uint8Array}
    */
    function bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusscript_bytes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 1);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PlutusScript.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusscript_from_bytes(ptr0, len0);
      return PlutusScript.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusScript}
    */

  }, {
    key: "new",
    value: function _new(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusscript_new(ptr0, len0);
      return PlutusScript.__wrap(ret);
    }
  }]);

  return PlutusScript;
}();

module.exports.PlutusScript = PlutusScript;
/**
*/

var PlutusScripts = /*#__PURE__*/function () {
  "use strict";

  function PlutusScripts() {
    _classCallCheck(this, PlutusScripts);
  }

  _createClass(PlutusScripts, [{
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

      wasm.__wbg_plutusscripts_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.plutusscripts_to_bytes(retptr, this.ptr);
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
    * @returns {PlutusScripts}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.plutusscripts_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusScript}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.plutusscripts_get(this.ptr, index);
      return PlutusScript.__wrap(ret);
    }
    /**
    * @param {PlutusScript} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, PlutusScript);

      wasm.plutusscripts_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PlutusScripts.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.plutusscripts_from_bytes(ptr0, len0);
      return PlutusScripts.__wrap(ret);
    }
    /**
    * @returns {PlutusScripts}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.plutusscripts_new();
      return PlutusScripts.__wrap(ret);
    }
  }]);

  return PlutusScripts;
}();

module.exports.PlutusScripts = PlutusScripts;
/**
*/

var Pointer = /*#__PURE__*/function () {
  "use strict";

  function Pointer() {
    _classCallCheck(this, Pointer);
  }

  _createClass(Pointer, [{
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

      wasm.__wbg_pointer_free(ptr);
    }
    /**
    * @param {number} slot
    * @param {number} tx_index
    * @param {number} cert_index
    * @returns {Pointer}
    */

  }, {
    key: "slot",
    value:
    /**
    * @returns {number}
    */
    function slot() {
      var ret = wasm.pointer_slot(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "tx_index",
    value: function tx_index() {
      var ret = wasm.pointer_tx_index(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "cert_index",
    value: function cert_index() {
      var ret = wasm.pointer_cert_index(this.ptr);
      return ret >>> 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Pointer.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(slot, tx_index, cert_index) {
      var ret = wasm.pointer_new(slot, tx_index, cert_index);
      return Pointer.__wrap(ret);
    }
  }]);

  return Pointer;
}();

module.exports.Pointer = Pointer;
/**
*/

var PointerAddress = /*#__PURE__*/function () {
  "use strict";

  function PointerAddress() {
    _classCallCheck(this, PointerAddress);
  }

  _createClass(PointerAddress, [{
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

      wasm.__wbg_pointeraddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {Pointer} stake
    * @returns {PointerAddress}
    */

  }, {
    key: "payment_cred",
    value:
    /**
    * @returns {StakeCredential}
    */
    function payment_cred() {
      var ret = wasm.pointeraddress_payment_cred(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Pointer}
    */

  }, {
    key: "stake_pointer",
    value: function stake_pointer() {
      var ret = wasm.pointeraddress_stake_pointer(this.ptr);
      return Pointer.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = wasm.pointeraddress_to_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {PointerAddress | undefined}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PointerAddress.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(network, payment, stake) {
      _assertClass(payment, StakeCredential);

      _assertClass(stake, Pointer);

      var ret = wasm.pointeraddress_new(network, payment.ptr, stake.ptr);
      return PointerAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = wasm.pointeraddress_from_address(addr.ptr);
      return ret === 0 ? undefined : PointerAddress.__wrap(ret);
    }
  }]);

  return PointerAddress;
}();

module.exports.PointerAddress = PointerAddress;
/**
*/

var PoolMetadata = /*#__PURE__*/function () {
  "use strict";

  function PoolMetadata() {
    _classCallCheck(this, PoolMetadata);
  }

  _createClass(PoolMetadata, [{
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

      wasm.__wbg_poolmetadata_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.poolmetadata_to_bytes(retptr, this.ptr);
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
    * @returns {PoolMetadata}
    */

  }, {
    key: "url",
    value:
    /**
    * @returns {URL}
    */
    function url() {
      var ret = wasm.poolmetadata_url(this.ptr);
      return URL.__wrap(ret);
    }
    /**
    * @returns {PoolMetadataHash}
    */

  }, {
    key: "pool_metadata_hash",
    value: function pool_metadata_hash() {
      var ret = wasm.poolmetadata_pool_metadata_hash(this.ptr);
      return PoolMetadataHash.__wrap(ret);
    }
    /**
    * @param {URL} url
    * @param {PoolMetadataHash} pool_metadata_hash
    * @returns {PoolMetadata}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PoolMetadata.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolmetadata_from_bytes(ptr0, len0);
      return PoolMetadata.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(url, pool_metadata_hash) {
      _assertClass(url, URL);

      _assertClass(pool_metadata_hash, PoolMetadataHash);

      var ret = wasm.poolmetadata_new(url.ptr, pool_metadata_hash.ptr);
      return PoolMetadata.__wrap(ret);
    }
  }]);

  return PoolMetadata;
}();

module.exports.PoolMetadata = PoolMetadata;
/**
*/

var PoolMetadataHash = /*#__PURE__*/function () {
  "use strict";

  function PoolMetadataHash() {
    _classCallCheck(this, PoolMetadataHash);
  }

  _createClass(PoolMetadataHash, [{
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

      wasm.__wbg_poolmetadatahash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.poolmetadatahash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.poolmetadatahash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {PoolMetadataHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PoolMetadataHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolmetadatahash_from_bech32(ptr0, len0);
      return PoolMetadataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolMetadataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolmetadatahash_from_bytes(ptr0, len0);
      return PoolMetadataHash.__wrap(ret);
    }
  }]);

  return PoolMetadataHash;
}();

module.exports.PoolMetadataHash = PoolMetadataHash;
/**
*/

var PoolParams = /*#__PURE__*/function () {
  "use strict";

  function PoolParams() {
    _classCallCheck(this, PoolParams);
  }

  _createClass(PoolParams, [{
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

      wasm.__wbg_poolparams_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.poolparams_to_bytes(retptr, this.ptr);
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
    * @returns {PoolParams}
    */

  }, {
    key: "operator",
    value:
    /**
    * @returns {Ed25519KeyHash}
    */
    function operator() {
      var ret = wasm.poolparams_operator(this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */

  }, {
    key: "vrf_keyhash",
    value: function vrf_keyhash() {
      var ret = wasm.poolparams_vrf_keyhash(this.ptr);
      return VRFKeyHash.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "pledge",
    value: function pledge() {
      var ret = wasm.poolparams_pledge(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "cost",
    value: function cost() {
      var ret = wasm.poolparams_cost(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */

  }, {
    key: "margin",
    value: function margin() {
      var ret = wasm.poolparams_margin(this.ptr);
      return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {RewardAddress}
    */

  }, {
    key: "reward_account",
    value: function reward_account() {
      var ret = wasm.poolparams_reward_account(this.ptr);
      return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */

  }, {
    key: "pool_owners",
    value: function pool_owners() {
      var ret = wasm.poolparams_pool_owners(this.ptr);
      return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */

  }, {
    key: "relays",
    value: function relays() {
      var ret = wasm.poolparams_relays(this.ptr);
      return Relays.__wrap(ret);
    }
    /**
    * @returns {PoolMetadata | undefined}
    */

  }, {
    key: "pool_metadata",
    value: function pool_metadata() {
      var ret = wasm.poolparams_pool_metadata(this.ptr);
      return ret === 0 ? undefined : PoolMetadata.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} operator
    * @param {VRFKeyHash} vrf_keyhash
    * @param {BigNum} pledge
    * @param {BigNum} cost
    * @param {UnitInterval} margin
    * @param {RewardAddress} reward_account
    * @param {Ed25519KeyHashes} pool_owners
    * @param {Relays} relays
    * @param {PoolMetadata | undefined} pool_metadata
    * @returns {PoolParams}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PoolParams.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolparams_from_bytes(ptr0, len0);
      return PoolParams.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(operator, vrf_keyhash, pledge, cost, margin, reward_account, pool_owners, relays, pool_metadata) {
      _assertClass(operator, Ed25519KeyHash);

      _assertClass(vrf_keyhash, VRFKeyHash);

      _assertClass(pledge, BigNum);

      _assertClass(cost, BigNum);

      _assertClass(margin, UnitInterval);

      _assertClass(reward_account, RewardAddress);

      _assertClass(pool_owners, Ed25519KeyHashes);

      _assertClass(relays, Relays);

      var ptr0 = 0;

      if (!isLikeNone(pool_metadata)) {
        _assertClass(pool_metadata, PoolMetadata);

        ptr0 = pool_metadata.ptr;
        pool_metadata.ptr = 0;
      }

      var ret = wasm.poolparams_new(operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
      return PoolParams.__wrap(ret);
    }
  }]);

  return PoolParams;
}();

module.exports.PoolParams = PoolParams;
/**
*/

var PoolRegistration = /*#__PURE__*/function () {
  "use strict";

  function PoolRegistration() {
    _classCallCheck(this, PoolRegistration);
  }

  _createClass(PoolRegistration, [{
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

      wasm.__wbg_poolregistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.poolregistration_to_bytes(retptr, this.ptr);
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
    * @returns {PoolRegistration}
    */

  }, {
    key: "pool_params",
    value:
    /**
    * @returns {PoolParams}
    */
    function pool_params() {
      var ret = wasm.poolregistration_pool_params(this.ptr);
      return PoolParams.__wrap(ret);
    }
    /**
    * @param {PoolParams} pool_params
    * @returns {PoolRegistration}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PoolRegistration.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolregistration_from_bytes(ptr0, len0);
      return PoolRegistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(pool_params) {
      _assertClass(pool_params, PoolParams);

      var ret = wasm.poolregistration_new(pool_params.ptr);
      return PoolRegistration.__wrap(ret);
    }
  }]);

  return PoolRegistration;
}();

module.exports.PoolRegistration = PoolRegistration;
/**
*/

var PoolRetirement = /*#__PURE__*/function () {
  "use strict";

  function PoolRetirement() {
    _classCallCheck(this, PoolRetirement);
  }

  _createClass(PoolRetirement, [{
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

      wasm.__wbg_poolretirement_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.poolretirement_to_bytes(retptr, this.ptr);
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
    * @returns {PoolRetirement}
    */

  }, {
    key: "pool_keyhash",
    value:
    /**
    * @returns {Ed25519KeyHash}
    */
    function pool_keyhash() {
      var ret = wasm.poolretirement_pool_keyhash(this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "epoch",
    value: function epoch() {
      var ret = wasm.poolretirement_epoch(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {Ed25519KeyHash} pool_keyhash
    * @param {number} epoch
    * @returns {PoolRetirement}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PoolRetirement.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.poolretirement_from_bytes(ptr0, len0);
      return PoolRetirement.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(pool_keyhash, epoch) {
      _assertClass(pool_keyhash, Ed25519KeyHash);

      var ret = wasm.poolretirement_new(pool_keyhash.ptr, epoch);
      return PoolRetirement.__wrap(ret);
    }
  }]);

  return PoolRetirement;
}();

module.exports.PoolRetirement = PoolRetirement;
/**
*/

var PrivateKey = /*#__PURE__*/function () {
  "use strict";

  function PrivateKey() {
    _classCallCheck(this, PrivateKey);
  }

  _createClass(PrivateKey, [{
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

      wasm.__wbg_privatekey_free(ptr);
    }
    /**
    * @returns {PublicKey}
    */

  }, {
    key: "to_public",
    value: function to_public() {
      var ret = wasm.privatekey_to_public(this.ptr);
      return PublicKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */

  }, {
    key: "to_bech32",
    value:
    /**
    * @returns {string}
    */
    function to_bech32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.privatekey_to_bech32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.privatekey_as_bytes(retptr, this.ptr);
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
    * @returns {PrivateKey}
    */

  }, {
    key: "sign",
    value:
    /**
    * @param {Uint8Array} message
    * @returns {Ed25519Signature}
    */
    function sign(message) {
      var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.privatekey_sign(this.ptr, ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PrivateKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "generate_ed25519",
    value: function generate_ed25519() {
      var ret = wasm.privatekey_generate_ed25519();
      return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */

  }, {
    key: "generate_ed25519extended",
    value: function generate_ed25519extended() {
      var ret = wasm.privatekey_generate_ed25519extended();
      return PrivateKey.__wrap(ret);
    }
    /**
    * Get private key from its bech32 representation
    * ```javascript
    * PrivateKey.from_bech32(&#39;ed25519_sk1ahfetf02qwwg4dkq7mgp4a25lx5vh9920cr5wnxmpzz9906qvm8qwvlts0&#39;);
    * ```
    * For an extended 25519 key
    * ```javascript
    * PrivateKey.from_bech32(&#39;ed25519e_sk1gqwl4szuwwh6d0yk3nsqcc6xxc3fpvjlevgwvt60df59v8zd8f8prazt8ln3lmz096ux3xvhhvm3ca9wj2yctdh3pnw0szrma07rt5gl748fp&#39;);
    * ```
    * @param {string} bech32_str
    * @returns {PrivateKey}
    */

  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.privatekey_from_bech32(ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_extended_bytes",
    value: function from_extended_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.privatekey_from_extended_bytes(ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */

  }, {
    key: "from_normal_bytes",
    value: function from_normal_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.privatekey_from_normal_bytes(ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
  }]);

  return PrivateKey;
}();

module.exports.PrivateKey = PrivateKey;
/**
*/

var ProposedProtocolParameterUpdates = /*#__PURE__*/function () {
  "use strict";

  function ProposedProtocolParameterUpdates() {
    _classCallCheck(this, ProposedProtocolParameterUpdates);
  }

  _createClass(ProposedProtocolParameterUpdates, [{
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

      wasm.__wbg_proposedprotocolparameterupdates_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.proposedprotocolparameterupdates_to_bytes(retptr, this.ptr);
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
    * @returns {ProposedProtocolParameterUpdates}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.proposedprotocolparameterupdates_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {GenesisHash} key
    * @param {ProtocolParamUpdate} value
    * @returns {ProtocolParamUpdate | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, GenesisHash);

      _assertClass(value, ProtocolParamUpdate);

      var ret = wasm.proposedprotocolparameterupdates_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @param {GenesisHash} key
    * @returns {ProtocolParamUpdate | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, GenesisHash);

      var ret = wasm.proposedprotocolparameterupdates_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.proposedprotocolparameterupdates_keys(this.ptr);
      return GenesisHashes.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ProposedProtocolParameterUpdates.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.proposedprotocolparameterupdates_from_bytes(ptr0, len0);
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.proposedprotocolparameterupdates_new();
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
  }]);

  return ProposedProtocolParameterUpdates;
}();

module.exports.ProposedProtocolParameterUpdates = ProposedProtocolParameterUpdates;
/**
*/

var ProtocolParamUpdate = /*#__PURE__*/function () {
  "use strict";

  function ProtocolParamUpdate() {
    _classCallCheck(this, ProtocolParamUpdate);
  }

  _createClass(ProtocolParamUpdate, [{
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

      wasm.__wbg_protocolparamupdate_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_to_bytes(retptr, this.ptr);
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
    * @returns {ProtocolParamUpdate}
    */

  }, {
    key: "set_minfee_a",
    value:
    /**
    * @param {BigNum} minfee_a
    */
    function set_minfee_a(minfee_a) {
      _assertClass(minfee_a, BigNum);

      wasm.protocolparamupdate_set_minfee_a(this.ptr, minfee_a.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "minfee_a",
    value: function minfee_a() {
      var ret = wasm.protocolparamupdate_minfee_a(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_b
    */

  }, {
    key: "set_minfee_b",
    value: function set_minfee_b(minfee_b) {
      _assertClass(minfee_b, BigNum);

      wasm.protocolparamupdate_set_minfee_b(this.ptr, minfee_b.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "minfee_b",
    value: function minfee_b() {
      var ret = wasm.protocolparamupdate_minfee_b(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_block_body_size
    */

  }, {
    key: "set_max_block_body_size",
    value: function set_max_block_body_size(max_block_body_size) {
      wasm.protocolparamupdate_set_max_block_body_size(this.ptr, max_block_body_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_block_body_size",
    value: function max_block_body_size() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_max_block_body_size(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {number} max_tx_size
    */

  }, {
    key: "set_max_tx_size",
    value: function set_max_tx_size(max_tx_size) {
      wasm.protocolparamupdate_set_max_tx_size(this.ptr, max_tx_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_tx_size",
    value: function max_tx_size() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_max_tx_size(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {number} max_block_header_size
    */

  }, {
    key: "set_max_block_header_size",
    value: function set_max_block_header_size(max_block_header_size) {
      wasm.protocolparamupdate_set_max_block_header_size(this.ptr, max_block_header_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_block_header_size",
    value: function max_block_header_size() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_max_block_header_size(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {BigNum} key_deposit
    */

  }, {
    key: "set_key_deposit",
    value: function set_key_deposit(key_deposit) {
      _assertClass(key_deposit, BigNum);

      wasm.protocolparamupdate_set_key_deposit(this.ptr, key_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "key_deposit",
    value: function key_deposit() {
      var ret = wasm.protocolparamupdate_key_deposit(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} pool_deposit
    */

  }, {
    key: "set_pool_deposit",
    value: function set_pool_deposit(pool_deposit) {
      _assertClass(pool_deposit, BigNum);

      wasm.protocolparamupdate_set_pool_deposit(this.ptr, pool_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "pool_deposit",
    value: function pool_deposit() {
      var ret = wasm.protocolparamupdate_pool_deposit(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_epoch
    */

  }, {
    key: "set_max_epoch",
    value: function set_max_epoch(max_epoch) {
      wasm.protocolparamupdate_set_max_epoch(this.ptr, max_epoch);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_epoch",
    value: function max_epoch() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_max_epoch(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {number} n_opt
    */

  }, {
    key: "set_n_opt",
    value: function set_n_opt(n_opt) {
      wasm.protocolparamupdate_set_n_opt(this.ptr, n_opt);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "n_opt",
    value: function n_opt() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_n_opt(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {UnitInterval} pool_pledge_influence
    */

  }, {
    key: "set_pool_pledge_influence",
    value: function set_pool_pledge_influence(pool_pledge_influence) {
      _assertClass(pool_pledge_influence, UnitInterval);

      wasm.protocolparamupdate_set_pool_pledge_influence(this.ptr, pool_pledge_influence.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "pool_pledge_influence",
    value: function pool_pledge_influence() {
      var ret = wasm.protocolparamupdate_pool_pledge_influence(this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} expansion_rate
    */

  }, {
    key: "set_expansion_rate",
    value: function set_expansion_rate(expansion_rate) {
      _assertClass(expansion_rate, UnitInterval);

      wasm.protocolparamupdate_set_expansion_rate(this.ptr, expansion_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "expansion_rate",
    value: function expansion_rate() {
      var ret = wasm.protocolparamupdate_expansion_rate(this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} treasury_growth_rate
    */

  }, {
    key: "set_treasury_growth_rate",
    value: function set_treasury_growth_rate(treasury_growth_rate) {
      _assertClass(treasury_growth_rate, UnitInterval);

      wasm.protocolparamupdate_set_treasury_growth_rate(this.ptr, treasury_growth_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "treasury_growth_rate",
    value: function treasury_growth_rate() {
      var ret = wasm.protocolparamupdate_treasury_growth_rate(this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} d
    */

  }, {
    key: "set_d",
    value: function set_d(d) {
      _assertClass(d, UnitInterval);

      wasm.protocolparamupdate_set_d(this.ptr, d.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "d",
    value: function d() {
      var ret = wasm.protocolparamupdate_d(this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {Nonce} extra_entropy
    */

  }, {
    key: "set_extra_entropy",
    value: function set_extra_entropy(extra_entropy) {
      _assertClass(extra_entropy, Nonce);

      wasm.protocolparamupdate_set_extra_entropy(this.ptr, extra_entropy.ptr);
    }
    /**
    * @returns {Nonce | undefined}
    */

  }, {
    key: "extra_entropy",
    value: function extra_entropy() {
      var ret = wasm.protocolparamupdate_extra_entropy(this.ptr);
      return ret === 0 ? undefined : Nonce.__wrap(ret);
    }
    /**
    * @param {ProtocolVersions} protocol_version
    */

  }, {
    key: "set_protocol_version",
    value: function set_protocol_version(protocol_version) {
      _assertClass(protocol_version, ProtocolVersions);

      wasm.protocolparamupdate_set_protocol_version(this.ptr, protocol_version.ptr);
    }
    /**
    * @returns {ProtocolVersions | undefined}
    */

  }, {
    key: "protocol_version",
    value: function protocol_version() {
      var ret = wasm.protocolparamupdate_protocol_version(this.ptr);
      return ret === 0 ? undefined : ProtocolVersions.__wrap(ret);
    }
    /**
    * @param {BigNum} min_pool_cost
    */

  }, {
    key: "set_min_pool_cost",
    value: function set_min_pool_cost(min_pool_cost) {
      _assertClass(min_pool_cost, BigNum);

      wasm.protocolparamupdate_set_min_pool_cost(this.ptr, min_pool_cost.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "min_pool_cost",
    value: function min_pool_cost() {
      var ret = wasm.protocolparamupdate_min_pool_cost(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} ada_per_utxo_byte
    */

  }, {
    key: "set_ada_per_utxo_byte",
    value: function set_ada_per_utxo_byte(ada_per_utxo_byte) {
      _assertClass(ada_per_utxo_byte, BigNum);

      wasm.protocolparamupdate_set_ada_per_utxo_byte(this.ptr, ada_per_utxo_byte.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "ada_per_utxo_byte",
    value: function ada_per_utxo_byte() {
      var ret = wasm.protocolparamupdate_ada_per_utxo_byte(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {Costmdls} cost_models
    */

  }, {
    key: "set_cost_models",
    value: function set_cost_models(cost_models) {
      _assertClass(cost_models, Costmdls);

      wasm.protocolparamupdate_set_cost_models(this.ptr, cost_models.ptr);
    }
    /**
    * @returns {Costmdls | undefined}
    */

  }, {
    key: "cost_models",
    value: function cost_models() {
      var ret = wasm.protocolparamupdate_cost_models(this.ptr);
      return ret === 0 ? undefined : Costmdls.__wrap(ret);
    }
    /**
    * @param {ExUnitPrices} execution_costs
    */

  }, {
    key: "set_execution_costs",
    value: function set_execution_costs(execution_costs) {
      _assertClass(execution_costs, ExUnitPrices);

      wasm.protocolparamupdate_set_execution_costs(this.ptr, execution_costs.ptr);
    }
    /**
    * @returns {ExUnitPrices | undefined}
    */

  }, {
    key: "execution_costs",
    value: function execution_costs() {
      var ret = wasm.protocolparamupdate_execution_costs(this.ptr);
      return ret === 0 ? undefined : ExUnitPrices.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_tx_ex_units
    */

  }, {
    key: "set_max_tx_ex_units",
    value: function set_max_tx_ex_units(max_tx_ex_units) {
      _assertClass(max_tx_ex_units, ExUnits);

      wasm.protocolparamupdate_set_max_tx_ex_units(this.ptr, max_tx_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */

  }, {
    key: "max_tx_ex_units",
    value: function max_tx_ex_units() {
      var ret = wasm.protocolparamupdate_max_tx_ex_units(this.ptr);
      return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_block_ex_units
    */

  }, {
    key: "set_max_block_ex_units",
    value: function set_max_block_ex_units(max_block_ex_units) {
      _assertClass(max_block_ex_units, ExUnits);

      wasm.protocolparamupdate_set_max_block_ex_units(this.ptr, max_block_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */

  }, {
    key: "max_block_ex_units",
    value: function max_block_ex_units() {
      var ret = wasm.protocolparamupdate_max_block_ex_units(this.ptr);
      return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {number} max_value_size
    */

  }, {
    key: "set_max_value_size",
    value: function set_max_value_size(max_value_size) {
      wasm.protocolparamupdate_set_max_value_size(this.ptr, max_value_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_value_size",
    value: function max_value_size() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolparamupdate_max_value_size(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {ProtocolParamUpdate}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ProtocolParamUpdate.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.protocolparamupdate_from_bytes(ptr0, len0);
      return ProtocolParamUpdate.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.protocolparamupdate_new();
      return ProtocolParamUpdate.__wrap(ret);
    }
  }]);

  return ProtocolParamUpdate;
}();

module.exports.ProtocolParamUpdate = ProtocolParamUpdate;
/**
*/

var ProtocolVersion = /*#__PURE__*/function () {
  "use strict";

  function ProtocolVersion() {
    _classCallCheck(this, ProtocolVersion);
  }

  _createClass(ProtocolVersion, [{
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

      wasm.__wbg_protocolversion_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolversion_to_bytes(retptr, this.ptr);
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
    * @returns {ProtocolVersion}
    */

  }, {
    key: "major",
    value:
    /**
    * @returns {number}
    */
    function major() {
      var ret = wasm.protocolversion_major(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "minor",
    value: function minor() {
      var ret = wasm.protocolversion_minor(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} major
    * @param {number} minor
    * @returns {ProtocolVersion}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ProtocolVersion.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.protocolversion_from_bytes(ptr0, len0);
      return ProtocolVersion.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(major, minor) {
      var ret = wasm.protocolversion_new(major, minor);
      return ProtocolVersion.__wrap(ret);
    }
  }]);

  return ProtocolVersion;
}();

module.exports.ProtocolVersion = ProtocolVersion;
/**
*/

var ProtocolVersions = /*#__PURE__*/function () {
  "use strict";

  function ProtocolVersions() {
    _classCallCheck(this, ProtocolVersions);
  }

  _createClass(ProtocolVersions, [{
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

      wasm.__wbg_protocolversions_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.protocolversions_to_bytes(retptr, this.ptr);
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
    * @returns {ProtocolVersions}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.protocolversions_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ProtocolVersion}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.protocolversions_get(this.ptr, index);
      return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {ProtocolVersion} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, ProtocolVersion);

      wasm.protocolversions_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ProtocolVersions.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.protocolversions_from_bytes(ptr0, len0);
      return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersions}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.protocolversions_new();
      return ProtocolVersions.__wrap(ret);
    }
  }]);

  return ProtocolVersions;
}();

module.exports.ProtocolVersions = ProtocolVersions;
/**
* ED25519 key used as public key
*/

var PublicKey = /*#__PURE__*/function () {
  "use strict";

  function PublicKey() {
    _classCallCheck(this, PublicKey);
  }

  _createClass(PublicKey, [{
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

      wasm.__wbg_publickey_free(ptr);
    }
    /**
    * Get public key from its bech32 representation
    * Example:
    * ```javascript
    * const pkey = PublicKey.from_bech32(&#39;ed25519_pk1dgaagyh470y66p899txcl3r0jaeaxu6yd7z2dxyk55qcycdml8gszkxze2&#39;);
    * ```
    * @param {string} bech32_str
    * @returns {PublicKey}
    */

  }, {
    key: "to_bech32",
    value:
    /**
    * @returns {string}
    */
    function to_bech32() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.publickey_to_bech32(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.publickey_as_bytes(retptr, this.ptr);
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
    * @returns {PublicKey}
    */

  }, {
    key: "verify",
    value:
    /**
    * @param {Uint8Array} data
    * @param {Ed25519Signature} signature
    * @returns {boolean}
    */
    function verify(data, signature) {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(signature, Ed25519Signature);

      var ret = wasm.publickey_verify(this.ptr, ptr0, len0, signature.ptr);
      return ret !== 0;
    }
    /**
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "hash",
    value: function hash() {
      var ret = wasm.publickey_hash(this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PublicKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.publickey_from_bech32(ptr0, len0);
      return PublicKey.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.publickey_from_bytes(ptr0, len0);
      return PublicKey.__wrap(ret);
    }
  }]);

  return PublicKey;
}();

module.exports.PublicKey = PublicKey;
/**
*/

var PublicKeys = /*#__PURE__*/function () {
  "use strict";

  /**
  */
  function PublicKeys() {
    _classCallCheck(this, PublicKeys);

    var ret = wasm.publickeys_new();
    return PublicKeys.__wrap(ret);
  }
  /**
  * @returns {number}
  */


  _createClass(PublicKeys, [{
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

      wasm.__wbg_publickeys_free(ptr);
    }
  }, {
    key: "size",
    value: function size() {
      var ret = wasm.publickeys_size(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PublicKey}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.publickeys_get(this.ptr, index);
      return PublicKey.__wrap(ret);
    }
    /**
    * @param {PublicKey} key
    */

  }, {
    key: "add",
    value: function add(key) {
      _assertClass(key, PublicKey);

      wasm.publickeys_add(this.ptr, key.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(PublicKeys.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }]);

  return PublicKeys;
}();

module.exports.PublicKeys = PublicKeys;
/**
*/

var Redeemer = /*#__PURE__*/function () {
  "use strict";

  function Redeemer() {
    _classCallCheck(this, Redeemer);
  }

  _createClass(Redeemer, [{
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

      wasm.__wbg_redeemer_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.redeemer_to_bytes(retptr, this.ptr);
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
    * @returns {Redeemer}
    */

  }, {
    key: "tag",
    value:
    /**
    * @returns {RedeemerTag}
    */
    function tag() {
      var ret = wasm.redeemer_tag(this.ptr);
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "index",
    value: function index() {
      var ret = wasm.redeemer_index(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {PlutusData}
    */

  }, {
    key: "data",
    value: function data() {
      var ret = wasm.redeemer_data(this.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @returns {ExUnits}
    */

  }, {
    key: "ex_units",
    value: function ex_units() {
      var ret = wasm.redeemer_ex_units(this.ptr);
      return ExUnits.__wrap(ret);
    }
    /**
    * @param {RedeemerTag} tag
    * @param {BigNum} index
    * @param {PlutusData} data
    * @param {ExUnits} ex_units
    * @returns {Redeemer}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Redeemer.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.redeemer_from_bytes(ptr0, len0);
      return Redeemer.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, index, data, ex_units) {
      _assertClass(tag, RedeemerTag);

      _assertClass(index, BigNum);

      _assertClass(data, PlutusData);

      _assertClass(ex_units, ExUnits);

      var ret = wasm.redeemer_new(tag.ptr, index.ptr, data.ptr, ex_units.ptr);
      return Redeemer.__wrap(ret);
    }
  }]);

  return Redeemer;
}();

module.exports.Redeemer = Redeemer;
/**
*/

var RedeemerTag = /*#__PURE__*/function () {
  "use strict";

  function RedeemerTag() {
    _classCallCheck(this, RedeemerTag);
  }

  _createClass(RedeemerTag, [{
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

      wasm.__wbg_redeemertag_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.redeemertag_to_bytes(retptr, this.ptr);
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
    * @returns {RedeemerTag}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.redeemertag_kind(this.ptr);
      return ret >>> 0;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(RedeemerTag.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.redeemertag_from_bytes(ptr0, len0);
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_spend",
    value: function new_spend() {
      var ret = wasm.redeemertag_new_spend();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_mint",
    value: function new_mint() {
      var ret = wasm.redeemertag_new_mint();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_cert",
    value: function new_cert() {
      var ret = wasm.redeemertag_new_cert();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_reward",
    value: function new_reward() {
      var ret = wasm.redeemertag_new_reward();
      return RedeemerTag.__wrap(ret);
    }
  }]);

  return RedeemerTag;
}();

module.exports.RedeemerTag = RedeemerTag;
/**
*/

var Redeemers = /*#__PURE__*/function () {
  "use strict";

  function Redeemers() {
    _classCallCheck(this, Redeemers);
  }

  _createClass(Redeemers, [{
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

      wasm.__wbg_redeemers_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.redeemers_to_bytes(retptr, this.ptr);
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
    * @returns {Redeemers}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.redeemers_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Redeemer}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.redeemers_get(this.ptr, index);
      return Redeemer.__wrap(ret);
    }
    /**
    * @param {Redeemer} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Redeemer);

      wasm.redeemers_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Redeemers.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.redeemers_from_bytes(ptr0, len0);
      return Redeemers.__wrap(ret);
    }
    /**
    * @returns {Redeemers}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.redeemers_new();
      return Redeemers.__wrap(ret);
    }
  }]);

  return Redeemers;
}();

module.exports.Redeemers = Redeemers;
/**
*/

var Relay = /*#__PURE__*/function () {
  "use strict";

  function Relay() {
    _classCallCheck(this, Relay);
  }

  _createClass(Relay, [{
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

      wasm.__wbg_relay_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.relay_to_bytes(retptr, this.ptr);
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
    * @returns {Relay}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.relay_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {SingleHostAddr | undefined}
    */

  }, {
    key: "as_single_host_addr",
    value: function as_single_host_addr() {
      var ret = wasm.relay_as_single_host_addr(this.ptr);
      return ret === 0 ? undefined : SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {SingleHostName | undefined}
    */

  }, {
    key: "as_single_host_name",
    value: function as_single_host_name() {
      var ret = wasm.relay_as_single_host_name(this.ptr);
      return ret === 0 ? undefined : SingleHostName.__wrap(ret);
    }
    /**
    * @returns {MultiHostName | undefined}
    */

  }, {
    key: "as_multi_host_name",
    value: function as_multi_host_name() {
      var ret = wasm.relay_as_multi_host_name(this.ptr);
      return ret === 0 ? undefined : MultiHostName.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Relay.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.relay_from_bytes(ptr0, len0);
      return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostAddr} single_host_addr
    * @returns {Relay}
    */

  }, {
    key: "new_single_host_addr",
    value: function new_single_host_addr(single_host_addr) {
      _assertClass(single_host_addr, SingleHostAddr);

      var ret = wasm.relay_new_single_host_addr(single_host_addr.ptr);
      return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostName} single_host_name
    * @returns {Relay}
    */

  }, {
    key: "new_single_host_name",
    value: function new_single_host_name(single_host_name) {
      _assertClass(single_host_name, SingleHostName);

      var ret = wasm.relay_new_single_host_name(single_host_name.ptr);
      return Relay.__wrap(ret);
    }
    /**
    * @param {MultiHostName} multi_host_name
    * @returns {Relay}
    */

  }, {
    key: "new_multi_host_name",
    value: function new_multi_host_name(multi_host_name) {
      _assertClass(multi_host_name, MultiHostName);

      var ret = wasm.relay_new_multi_host_name(multi_host_name.ptr);
      return Relay.__wrap(ret);
    }
  }]);

  return Relay;
}();

module.exports.Relay = Relay;
/**
*/

var Relays = /*#__PURE__*/function () {
  "use strict";

  function Relays() {
    _classCallCheck(this, Relays);
  }

  _createClass(Relays, [{
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

      wasm.__wbg_relays_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.relays_to_bytes(retptr, this.ptr);
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
    * @returns {Relays}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.relays_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Relay}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.relays_get(this.ptr, index);
      return Relay.__wrap(ret);
    }
    /**
    * @param {Relay} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Relay);

      wasm.relays_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Relays.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.relays_from_bytes(ptr0, len0);
      return Relays.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.relays_new();
      return Relays.__wrap(ret);
    }
  }]);

  return Relays;
}();

module.exports.Relays = Relays;
/**
*/

var RewardAddress = /*#__PURE__*/function () {
  "use strict";

  function RewardAddress() {
    _classCallCheck(this, RewardAddress);
  }

  _createClass(RewardAddress, [{
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

      wasm.__wbg_rewardaddress_free(ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {RewardAddress}
    */

  }, {
    key: "payment_cred",
    value:
    /**
    * @returns {StakeCredential}
    */
    function payment_cred() {
      var ret = wasm.rewardaddress_payment_cred(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = wasm.rewardaddress_to_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {RewardAddress | undefined}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(RewardAddress.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(network, payment) {
      _assertClass(payment, StakeCredential);

      var ret = wasm.rewardaddress_new(network, payment.ptr);
      return RewardAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = wasm.rewardaddress_from_address(addr.ptr);
      return ret === 0 ? undefined : RewardAddress.__wrap(ret);
    }
  }]);

  return RewardAddress;
}();

module.exports.RewardAddress = RewardAddress;
/**
*/

var RewardAddresses = /*#__PURE__*/function () {
  "use strict";

  function RewardAddresses() {
    _classCallCheck(this, RewardAddresses);
  }

  _createClass(RewardAddresses, [{
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

      wasm.__wbg_rewardaddresses_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.rewardaddresses_to_bytes(retptr, this.ptr);
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
    * @returns {RewardAddresses}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.rewardaddresses_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {RewardAddress}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.rewardaddresses_get(this.ptr, index);
      return RewardAddress.__wrap(ret);
    }
    /**
    * @param {RewardAddress} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, RewardAddress);

      wasm.rewardaddresses_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(RewardAddresses.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.rewardaddresses_from_bytes(ptr0, len0);
      return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.rewardaddresses_new();
      return RewardAddresses.__wrap(ret);
    }
  }]);

  return RewardAddresses;
}();

module.exports.RewardAddresses = RewardAddresses;
/**
*/

var ScriptAll = /*#__PURE__*/function () {
  "use strict";

  function ScriptAll() {
    _classCallCheck(this, ScriptAll);
  }

  _createClass(ScriptAll, [{
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

      wasm.__wbg_scriptall_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scriptall_to_bytes(retptr, this.ptr);
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
    * @returns {ScriptAll}
    */

  }, {
    key: "native_scripts",
    value:
    /**
    * @returns {NativeScripts}
    */
    function native_scripts() {
      var ret = wasm.scriptall_native_scripts(this.ptr);
      return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAll}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptAll.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptall_from_bytes(ptr0, len0);
      return ScriptAll.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = wasm.scriptall_new(native_scripts.ptr);
      return ScriptAll.__wrap(ret);
    }
  }]);

  return ScriptAll;
}();

module.exports.ScriptAll = ScriptAll;
/**
*/

var ScriptAny = /*#__PURE__*/function () {
  "use strict";

  function ScriptAny() {
    _classCallCheck(this, ScriptAny);
  }

  _createClass(ScriptAny, [{
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

      wasm.__wbg_scriptany_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scriptany_to_bytes(retptr, this.ptr);
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
    * @returns {ScriptAny}
    */

  }, {
    key: "native_scripts",
    value:
    /**
    * @returns {NativeScripts}
    */
    function native_scripts() {
      var ret = wasm.scriptany_native_scripts(this.ptr);
      return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAny}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptAny.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptany_from_bytes(ptr0, len0);
      return ScriptAny.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = wasm.scriptany_new(native_scripts.ptr);
      return ScriptAny.__wrap(ret);
    }
  }]);

  return ScriptAny;
}();

module.exports.ScriptAny = ScriptAny;
/**
*/

var ScriptDataHash = /*#__PURE__*/function () {
  "use strict";

  function ScriptDataHash() {
    _classCallCheck(this, ScriptDataHash);
  }

  _createClass(ScriptDataHash, [{
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

      wasm.__wbg_scriptdatahash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scriptdatahash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.scriptdatahash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {ScriptDataHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptDataHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptdatahash_from_bech32(ptr0, len0);
      return ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptDataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptdatahash_from_bytes(ptr0, len0);
      return ScriptDataHash.__wrap(ret);
    }
  }]);

  return ScriptDataHash;
}();

module.exports.ScriptDataHash = ScriptDataHash;
/**
*/

var ScriptHash = /*#__PURE__*/function () {
  "use strict";

  function ScriptHash() {
    _classCallCheck(this, ScriptHash);
  }

  _createClass(ScriptHash, [{
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

      wasm.__wbg_scripthash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scripthash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.scripthash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {ScriptHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scripthash_from_bech32(ptr0, len0);
      return ScriptHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scripthash_from_bytes(ptr0, len0);
      return ScriptHash.__wrap(ret);
    }
  }]);

  return ScriptHash;
}();

module.exports.ScriptHash = ScriptHash;
/**
*/

var ScriptHashes = /*#__PURE__*/function () {
  "use strict";

  function ScriptHashes() {
    _classCallCheck(this, ScriptHashes);
  }

  _createClass(ScriptHashes, [{
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

      wasm.__wbg_scripthashes_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scripthashes_to_bytes(retptr, this.ptr);
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
    * @returns {ScriptHashes}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.scripthashes_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ScriptHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.scripthashes_get(this.ptr, index);
      return ScriptHash.__wrap(ret);
    }
    /**
    * @param {ScriptHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, ScriptHash);

      wasm.scripthashes_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptHashes.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scripthashes_from_bytes(ptr0, len0);
      return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.scripthashes_new();
      return ScriptHashes.__wrap(ret);
    }
  }]);

  return ScriptHashes;
}();

module.exports.ScriptHashes = ScriptHashes;
/**
*/

var ScriptNOfK = /*#__PURE__*/function () {
  "use strict";

  function ScriptNOfK() {
    _classCallCheck(this, ScriptNOfK);
  }

  _createClass(ScriptNOfK, [{
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

      wasm.__wbg_scriptnofk_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scriptnofk_to_bytes(retptr, this.ptr);
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
    * @returns {ScriptNOfK}
    */

  }, {
    key: "n",
    value:
    /**
    * @returns {number}
    */
    function n() {
      var ret = wasm.scriptnofk_n(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {NativeScripts}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = wasm.scriptnofk_native_scripts(this.ptr);
      return NativeScripts.__wrap(ret);
    }
    /**
    * @param {number} n
    * @param {NativeScripts} native_scripts
    * @returns {ScriptNOfK}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptNOfK.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptnofk_from_bytes(ptr0, len0);
      return ScriptNOfK.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(n, native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = wasm.scriptnofk_new(n, native_scripts.ptr);
      return ScriptNOfK.__wrap(ret);
    }
  }]);

  return ScriptNOfK;
}();

module.exports.ScriptNOfK = ScriptNOfK;
/**
*/

var ScriptPubkey = /*#__PURE__*/function () {
  "use strict";

  function ScriptPubkey() {
    _classCallCheck(this, ScriptPubkey);
  }

  _createClass(ScriptPubkey, [{
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

      wasm.__wbg_scriptpubkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.scriptpubkey_to_bytes(retptr, this.ptr);
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
    * @returns {ScriptPubkey}
    */

  }, {
    key: "addr_keyhash",
    value:
    /**
    * @returns {Ed25519KeyHash}
    */
    function addr_keyhash() {
      var ret = wasm.scriptpubkey_addr_keyhash(this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} addr_keyhash
    * @returns {ScriptPubkey}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(ScriptPubkey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.scriptpubkey_from_bytes(ptr0, len0);
      return ScriptPubkey.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(addr_keyhash) {
      _assertClass(addr_keyhash, Ed25519KeyHash);

      var ret = wasm.scriptpubkey_new(addr_keyhash.ptr);
      return ScriptPubkey.__wrap(ret);
    }
  }]);

  return ScriptPubkey;
}();

module.exports.ScriptPubkey = ScriptPubkey;
/**
*/

var SingleHostAddr = /*#__PURE__*/function () {
  "use strict";

  function SingleHostAddr() {
    _classCallCheck(this, SingleHostAddr);
  }

  _createClass(SingleHostAddr, [{
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

      wasm.__wbg_singlehostaddr_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.singlehostaddr_to_bytes(retptr, this.ptr);
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
    * @returns {SingleHostAddr}
    */

  }, {
    key: "port",
    value:
    /**
    * @returns {number | undefined}
    */
    function port() {
      var ret = wasm.singlehostaddr_port(this.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {Ipv4 | undefined}
    */

  }, {
    key: "ipv4",
    value: function ipv4() {
      var ret = wasm.singlehostaddr_ipv4(this.ptr);
      return ret === 0 ? undefined : Ipv4.__wrap(ret);
    }
    /**
    * @returns {Ipv6 | undefined}
    */

  }, {
    key: "ipv6",
    value: function ipv6() {
      var ret = wasm.singlehostaddr_ipv6(this.ptr);
      return ret === 0 ? undefined : Ipv6.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {Ipv4 | undefined} ipv4
    * @param {Ipv6 | undefined} ipv6
    * @returns {SingleHostAddr}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(SingleHostAddr.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.singlehostaddr_from_bytes(ptr0, len0);
      return SingleHostAddr.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(port, ipv4, ipv6) {
      var ptr0 = 0;

      if (!isLikeNone(ipv4)) {
        _assertClass(ipv4, Ipv4);

        ptr0 = ipv4.ptr;
        ipv4.ptr = 0;
      }

      var ptr1 = 0;

      if (!isLikeNone(ipv6)) {
        _assertClass(ipv6, Ipv6);

        ptr1 = ipv6.ptr;
        ipv6.ptr = 0;
      }

      var ret = wasm.singlehostaddr_new(isLikeNone(port) ? 0xFFFFFF : port, ptr0, ptr1);
      return SingleHostAddr.__wrap(ret);
    }
  }]);

  return SingleHostAddr;
}();

module.exports.SingleHostAddr = SingleHostAddr;
/**
*/

var SingleHostName = /*#__PURE__*/function () {
  "use strict";

  function SingleHostName() {
    _classCallCheck(this, SingleHostName);
  }

  _createClass(SingleHostName, [{
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

      wasm.__wbg_singlehostname_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.singlehostname_to_bytes(retptr, this.ptr);
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
    * @returns {SingleHostName}
    */

  }, {
    key: "port",
    value:
    /**
    * @returns {number | undefined}
    */
    function port() {
      var ret = wasm.singlehostname_port(this.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {DNSRecordAorAAAA}
    */

  }, {
    key: "dns_name",
    value: function dns_name() {
      var ret = wasm.singlehostname_dns_name(this.ptr);
      return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {DNSRecordAorAAAA} dns_name
    * @returns {SingleHostName}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(SingleHostName.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.singlehostname_from_bytes(ptr0, len0);
      return SingleHostName.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(port, dns_name) {
      _assertClass(dns_name, DNSRecordAorAAAA);

      var ret = wasm.singlehostname_new(isLikeNone(port) ? 0xFFFFFF : port, dns_name.ptr);
      return SingleHostName.__wrap(ret);
    }
  }]);

  return SingleHostName;
}();

module.exports.SingleHostName = SingleHostName;
/**
*/

var StakeCredential = /*#__PURE__*/function () {
  "use strict";

  function StakeCredential() {
    _classCallCheck(this, StakeCredential);
  }

  _createClass(StakeCredential, [{
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

      wasm.__wbg_stakecredential_free(ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @returns {StakeCredential}
    */

  }, {
    key: "to_keyhash",
    value:
    /**
    * @returns {Ed25519KeyHash | undefined}
    */
    function to_keyhash() {
      var ret = wasm.stakecredential_to_keyhash(this.ptr);
      return ret === 0 ? undefined : Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {ScriptHash | undefined}
    */

  }, {
    key: "to_scripthash",
    value: function to_scripthash() {
      var ret = wasm.stakecredential_to_scripthash(this.ptr);
      return ret === 0 ? undefined : ScriptHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = wasm.stakecredential_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.stakecredential_to_bytes(retptr, this.ptr);
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
    * @returns {StakeCredential}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(StakeCredential.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_keyhash",
    value: function from_keyhash(hash) {
      _assertClass(hash, Ed25519KeyHash);

      var ret = wasm.stakecredential_from_keyhash(hash.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @param {ScriptHash} hash
    * @returns {StakeCredential}
    */

  }, {
    key: "from_scripthash",
    value: function from_scripthash(hash) {
      _assertClass(hash, ScriptHash);

      var ret = wasm.stakecredential_from_scripthash(hash.ptr);
      return StakeCredential.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.stakecredential_from_bytes(ptr0, len0);
      return StakeCredential.__wrap(ret);
    }
  }]);

  return StakeCredential;
}();

module.exports.StakeCredential = StakeCredential;
/**
*/

var StakeCredentials = /*#__PURE__*/function () {
  "use strict";

  function StakeCredentials() {
    _classCallCheck(this, StakeCredentials);
  }

  _createClass(StakeCredentials, [{
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

      wasm.__wbg_stakecredentials_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.stakecredentials_to_bytes(retptr, this.ptr);
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
    * @returns {StakeCredentials}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.stakecredentials_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {StakeCredential}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.stakecredentials_get(this.ptr, index);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, StakeCredential);

      wasm.stakecredentials_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(StakeCredentials.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.stakecredentials_from_bytes(ptr0, len0);
      return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.stakecredentials_new();
      return StakeCredentials.__wrap(ret);
    }
  }]);

  return StakeCredentials;
}();

module.exports.StakeCredentials = StakeCredentials;
/**
*/

var StakeDelegation = /*#__PURE__*/function () {
  "use strict";

  function StakeDelegation() {
    _classCallCheck(this, StakeDelegation);
  }

  _createClass(StakeDelegation, [{
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

      wasm.__wbg_stakedelegation_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.stakedelegation_to_bytes(retptr, this.ptr);
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
    * @returns {StakeDelegation}
    */

  }, {
    key: "stake_credential",
    value:
    /**
    * @returns {StakeCredential}
    */
    function stake_credential() {
      var ret = wasm.stakedelegation_stake_credential(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "pool_keyhash",
    value: function pool_keyhash() {
      var ret = wasm.stakedelegation_pool_keyhash(this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @param {Ed25519KeyHash} pool_keyhash
    * @returns {StakeDelegation}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(StakeDelegation.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.stakedelegation_from_bytes(ptr0, len0);
      return StakeDelegation.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential, pool_keyhash) {
      _assertClass(stake_credential, StakeCredential);

      _assertClass(pool_keyhash, Ed25519KeyHash);

      var ret = wasm.stakedelegation_new(stake_credential.ptr, pool_keyhash.ptr);
      return StakeDelegation.__wrap(ret);
    }
  }]);

  return StakeDelegation;
}();

module.exports.StakeDelegation = StakeDelegation;
/**
*/

var StakeDeregistration = /*#__PURE__*/function () {
  "use strict";

  function StakeDeregistration() {
    _classCallCheck(this, StakeDeregistration);
  }

  _createClass(StakeDeregistration, [{
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

      wasm.__wbg_stakederegistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.stakederegistration_to_bytes(retptr, this.ptr);
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
    * @returns {StakeDeregistration}
    */

  }, {
    key: "stake_credential",
    value:
    /**
    * @returns {StakeCredential}
    */
    function stake_credential() {
      var ret = wasm.stakederegistration_stake_credential(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeDeregistration}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(StakeDeregistration.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.stakederegistration_from_bytes(ptr0, len0);
      return StakeDeregistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential) {
      _assertClass(stake_credential, StakeCredential);

      var ret = wasm.stakederegistration_new(stake_credential.ptr);
      return StakeDeregistration.__wrap(ret);
    }
  }]);

  return StakeDeregistration;
}();

module.exports.StakeDeregistration = StakeDeregistration;
/**
*/

var StakeRegistration = /*#__PURE__*/function () {
  "use strict";

  function StakeRegistration() {
    _classCallCheck(this, StakeRegistration);
  }

  _createClass(StakeRegistration, [{
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

      wasm.__wbg_stakeregistration_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.stakeregistration_to_bytes(retptr, this.ptr);
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
    * @returns {StakeRegistration}
    */

  }, {
    key: "stake_credential",
    value:
    /**
    * @returns {StakeCredential}
    */
    function stake_credential() {
      var ret = wasm.stakeregistration_stake_credential(this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeRegistration}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(StakeRegistration.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.stakeregistration_from_bytes(ptr0, len0);
      return StakeRegistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential) {
      _assertClass(stake_credential, StakeCredential);

      var ret = wasm.stakeregistration_new(stake_credential.ptr);
      return StakeRegistration.__wrap(ret);
    }
  }]);

  return StakeRegistration;
}();

module.exports.StakeRegistration = StakeRegistration;
/**
*/

var Strings = /*#__PURE__*/function () {
  "use strict";

  function Strings() {
    _classCallCheck(this, Strings);
  }

  _createClass(Strings, [{
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

      wasm.__wbg_strings_free(ptr);
    }
    /**
    * @returns {Strings}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.strings_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {string}
    */

  }, {
    key: "get",
    value: function get(index) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.strings_get(retptr, this.ptr, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      var ptr0 = passStringToWasm0(elem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.strings_add(this.ptr, ptr0, len0);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Strings.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.strings_new();
      return Strings.__wrap(ret);
    }
  }]);

  return Strings;
}();

module.exports.Strings = Strings;
/**
*/

var TimelockExpiry = /*#__PURE__*/function () {
  "use strict";

  function TimelockExpiry() {
    _classCallCheck(this, TimelockExpiry);
  }

  _createClass(TimelockExpiry, [{
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

      wasm.__wbg_timelockexpiry_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.timelockexpiry_to_bytes(retptr, this.ptr);
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
    * @returns {TimelockExpiry}
    */

  }, {
    key: "slot",
    value:
    /**
    * @returns {number}
    */
    function slot() {
      var ret = wasm.timelockexpiry_slot(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockExpiry}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TimelockExpiry.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.timelockexpiry_from_bytes(ptr0, len0);
      return TimelockExpiry.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(slot) {
      var ret = wasm.timelockexpiry_new(slot);
      return TimelockExpiry.__wrap(ret);
    }
  }]);

  return TimelockExpiry;
}();

module.exports.TimelockExpiry = TimelockExpiry;
/**
*/

var TimelockStart = /*#__PURE__*/function () {
  "use strict";

  function TimelockStart() {
    _classCallCheck(this, TimelockStart);
  }

  _createClass(TimelockStart, [{
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

      wasm.__wbg_timelockstart_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.timelockstart_to_bytes(retptr, this.ptr);
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
    * @returns {TimelockStart}
    */

  }, {
    key: "slot",
    value:
    /**
    * @returns {number}
    */
    function slot() {
      var ret = wasm.timelockstart_slot(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockStart}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TimelockStart.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.timelockstart_from_bytes(ptr0, len0);
      return TimelockStart.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(slot) {
      var ret = wasm.timelockstart_new(slot);
      return TimelockStart.__wrap(ret);
    }
  }]);

  return TimelockStart;
}();

module.exports.TimelockStart = TimelockStart;
/**
*/

var Transaction = /*#__PURE__*/function () {
  "use strict";

  function Transaction() {
    _classCallCheck(this, Transaction);
  }

  _createClass(Transaction, [{
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

      wasm.__wbg_transaction_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transaction_to_bytes(retptr, this.ptr);
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
    * @returns {Transaction}
    */

  }, {
    key: "body",
    value:
    /**
    * @returns {TransactionBody}
    */
    function body() {
      var ret = wasm.transaction_body(this.ptr);
      return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */

  }, {
    key: "witness_set",
    value: function witness_set() {
      var ret = wasm.transaction_witness_set(this.ptr);
      return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_valid",
    value: function is_valid() {
      var ret = wasm.transaction_is_valid(this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {AuxiliaryData | undefined}
    */

  }, {
    key: "auxiliary_data",
    value: function auxiliary_data() {
      var ret = wasm.transaction_auxiliary_data(this.ptr);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {boolean} valid
    */

  }, {
    key: "set_is_valid",
    value: function set_is_valid(valid) {
      wasm.transaction_set_is_valid(this.ptr, valid);
    }
    /**
    * @param {TransactionBody} body
    * @param {TransactionWitnessSet} witness_set
    * @param {AuxiliaryData | undefined} auxiliary_data
    * @returns {Transaction}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Transaction.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transaction_from_bytes(ptr0, len0);
      return Transaction.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(body, witness_set, auxiliary_data) {
      _assertClass(body, TransactionBody);

      _assertClass(witness_set, TransactionWitnessSet);

      var ptr0 = 0;

      if (!isLikeNone(auxiliary_data)) {
        _assertClass(auxiliary_data, AuxiliaryData);

        ptr0 = auxiliary_data.ptr;
        auxiliary_data.ptr = 0;
      }

      var ret = wasm.transaction_new(body.ptr, witness_set.ptr, ptr0);
      return Transaction.__wrap(ret);
    }
  }]);

  return Transaction;
}();

module.exports.Transaction = Transaction;
/**
*/

var TransactionBodies = /*#__PURE__*/function () {
  "use strict";

  function TransactionBodies() {
    _classCallCheck(this, TransactionBodies);
  }

  _createClass(TransactionBodies, [{
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

      wasm.__wbg_transactionbodies_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionbodies_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionBodies}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.transactionbodies_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionBody}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.transactionbodies_get(this.ptr, index);
      return TransactionBody.__wrap(ret);
    }
    /**
    * @param {TransactionBody} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionBody);

      wasm.transactionbodies_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionBodies.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionbodies_from_bytes(ptr0, len0);
      return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactionbodies_new();
      return TransactionBodies.__wrap(ret);
    }
  }]);

  return TransactionBodies;
}();

module.exports.TransactionBodies = TransactionBodies;
/**
*/

var TransactionBody = /*#__PURE__*/function () {
  "use strict";

  function TransactionBody() {
    _classCallCheck(this, TransactionBody);
  }

  _createClass(TransactionBody, [{
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

      wasm.__wbg_transactionbody_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionbody_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionBody}
    */

  }, {
    key: "inputs",
    value:
    /**
    * @returns {TransactionInputs}
    */
    function inputs() {
      var ret = wasm.transactionbody_inputs(this.ptr);
      return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */

  }, {
    key: "outputs",
    value: function outputs() {
      var ret = wasm.transactionbody_outputs(this.ptr);
      return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "fee",
    value: function fee() {
      var ret = wasm.transactionbody_fee(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "ttl",
    value: function ttl() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionbody_ttl(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Certificates} certs
    */

  }, {
    key: "set_certs",
    value: function set_certs(certs) {
      _assertClass(certs, Certificates);

      wasm.transactionbody_set_certs(this.ptr, certs.ptr);
    }
    /**
    * @returns {Certificates | undefined}
    */

  }, {
    key: "certs",
    value: function certs() {
      var ret = wasm.transactionbody_certs(this.ptr);
      return ret === 0 ? undefined : Certificates.__wrap(ret);
    }
    /**
    * @param {Withdrawals} withdrawals
    */

  }, {
    key: "set_withdrawals",
    value: function set_withdrawals(withdrawals) {
      _assertClass(withdrawals, Withdrawals);

      wasm.transactionbody_set_withdrawals(this.ptr, withdrawals.ptr);
    }
    /**
    * @returns {Withdrawals | undefined}
    */

  }, {
    key: "withdrawals",
    value: function withdrawals() {
      var ret = wasm.transactionbody_withdrawals(this.ptr);
      return ret === 0 ? undefined : Withdrawals.__wrap(ret);
    }
    /**
    * @param {Update} update
    */

  }, {
    key: "set_update",
    value: function set_update(update) {
      _assertClass(update, Update);

      wasm.transactionbody_set_update(this.ptr, update.ptr);
    }
    /**
    * @returns {Update | undefined}
    */

  }, {
    key: "update",
    value: function update() {
      var ret = wasm.transactionbody_update(this.ptr);
      return ret === 0 ? undefined : Update.__wrap(ret);
    }
    /**
    * @param {AuxiliaryDataHash} auxiliary_data_hash
    */

  }, {
    key: "set_auxiliary_data_hash",
    value: function set_auxiliary_data_hash(auxiliary_data_hash) {
      _assertClass(auxiliary_data_hash, AuxiliaryDataHash);

      wasm.transactionbody_set_auxiliary_data_hash(this.ptr, auxiliary_data_hash.ptr);
    }
    /**
    * @returns {AuxiliaryDataHash | undefined}
    */

  }, {
    key: "auxiliary_data_hash",
    value: function auxiliary_data_hash() {
      var ret = wasm.transactionbody_auxiliary_data_hash(this.ptr);
      return ret === 0 ? undefined : AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {number} validity_start_interval
    */

  }, {
    key: "set_validity_start_interval",
    value: function set_validity_start_interval(validity_start_interval) {
      wasm.transactionbody_set_validity_start_interval(this.ptr, validity_start_interval);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "validity_start_interval",
    value: function validity_start_interval() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionbody_validity_start_interval(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Mint} mint
    */

  }, {
    key: "set_mint",
    value: function set_mint(mint) {
      _assertClass(mint, Mint);

      wasm.transactionbody_set_mint(this.ptr, mint.ptr);
    }
    /**
    * @returns {Mint | undefined}
    */

  }, {
    key: "multiassets",
    value: function multiassets() {
      var ret = wasm.transactionbody_multiassets(this.ptr);
      return ret === 0 ? undefined : Mint.__wrap(ret);
    }
    /**
    * @param {ScriptDataHash} script_data_hash
    */

  }, {
    key: "set_script_data_hash",
    value: function set_script_data_hash(script_data_hash) {
      _assertClass(script_data_hash, ScriptDataHash);

      wasm.transactionbody_set_script_data_hash(this.ptr, script_data_hash.ptr);
    }
    /**
    * @returns {ScriptDataHash | undefined}
    */

  }, {
    key: "script_data_hash",
    value: function script_data_hash() {
      var ret = wasm.transactionbody_script_data_hash(this.ptr);
      return ret === 0 ? undefined : ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} collateral
    */

  }, {
    key: "set_collateral",
    value: function set_collateral(collateral) {
      _assertClass(collateral, TransactionInputs);

      wasm.transactionbody_set_collateral(this.ptr, collateral.ptr);
    }
    /**
    * @returns {TransactionInputs | undefined}
    */

  }, {
    key: "collateral",
    value: function collateral() {
      var ret = wasm.transactionbody_collateral(this.ptr);
      return ret === 0 ? undefined : TransactionInputs.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHashes} required_signers
    */

  }, {
    key: "set_required_signers",
    value: function set_required_signers(required_signers) {
      _assertClass(required_signers, Ed25519KeyHashes);

      wasm.transactionbody_set_required_signers(this.ptr, required_signers.ptr);
    }
    /**
    * @returns {Ed25519KeyHashes | undefined}
    */

  }, {
    key: "required_signers",
    value: function required_signers() {
      var ret = wasm.transactionbody_required_signers(this.ptr);
      return ret === 0 ? undefined : Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @param {NetworkId} network_id
    */

  }, {
    key: "set_network_id",
    value: function set_network_id(network_id) {
      _assertClass(network_id, NetworkId);

      wasm.transactionbody_set_network_id(this.ptr, network_id.ptr);
    }
    /**
    * @returns {NetworkId | undefined}
    */

  }, {
    key: "network_id",
    value: function network_id() {
      var ret = wasm.transactionbody_network_id(this.ptr);
      return ret === 0 ? undefined : NetworkId.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} inputs
    * @param {TransactionOutputs} outputs
    * @param {BigNum} fee
    * @param {number | undefined} ttl
    * @returns {TransactionBody}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionBody.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionbody_from_bytes(ptr0, len0);
      return TransactionBody.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(inputs, outputs, fee, ttl) {
      _assertClass(inputs, TransactionInputs);

      _assertClass(outputs, TransactionOutputs);

      _assertClass(fee, BigNum);

      var ret = wasm.transactionbody_new(inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
      return TransactionBody.__wrap(ret);
    }
  }]);

  return TransactionBody;
}();

module.exports.TransactionBody = TransactionBody;
/**
*/

var TransactionBuilder = /*#__PURE__*/function () {
  "use strict";

  function TransactionBuilder() {
    _classCallCheck(this, TransactionBuilder);
  }

  _createClass(TransactionBuilder, [{
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

      wasm.__wbg_transactionbuilder_free(ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */

  }, {
    key: "add_key_input",
    value: function add_key_input(hash, input, amount) {
      _assertClass(hash, Ed25519KeyHash);

      _assertClass(input, TransactionInput);

      _assertClass(amount, Value);

      wasm.transactionbuilder_add_key_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ScriptHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */

  }, {
    key: "add_script_input",
    value: function add_script_input(hash, input, amount) {
      _assertClass(hash, ScriptHash);

      _assertClass(input, TransactionInput);

      _assertClass(amount, Value);

      wasm.transactionbuilder_add_script_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ByronAddress} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */

  }, {
    key: "add_bootstrap_input",
    value: function add_bootstrap_input(hash, input, amount) {
      _assertClass(hash, ByronAddress);

      _assertClass(input, TransactionInput);

      _assertClass(amount, Value);

      wasm.transactionbuilder_add_bootstrap_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    */

  }, {
    key: "add_input",
    value: function add_input(address, input, amount) {
      _assertClass(address, Address);

      _assertClass(input, TransactionInput);

      _assertClass(amount, Value);

      wasm.transactionbuilder_add_input(this.ptr, address.ptr, input.ptr, amount.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    * @returns {BigNum}
    */

  }, {
    key: "fee_for_input",
    value: function fee_for_input(address, input, amount) {
      _assertClass(address, Address);

      _assertClass(input, TransactionInput);

      _assertClass(amount, Value);

      var ret = wasm.transactionbuilder_fee_for_input(this.ptr, address.ptr, input.ptr, amount.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} output
    */

  }, {
    key: "add_output",
    value: function add_output(output) {
      _assertClass(output, TransactionOutput);

      wasm.transactionbuilder_add_output(this.ptr, output.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {TransactionOutput} output
    * @returns {BigNum}
    */

  }, {
    key: "fee_for_output",
    value: function fee_for_output(output) {
      _assertClass(output, TransactionOutput);

      var ret = wasm.transactionbuilder_fee_for_output(this.ptr, output.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} fee
    */

  }, {
    key: "set_fee",
    value: function set_fee(fee) {
      _assertClass(fee, BigNum);

      wasm.transactionbuilder_set_fee(this.ptr, fee.ptr);
    }
    /**
    * @param {number} ttl
    */

  }, {
    key: "set_ttl",
    value: function set_ttl(ttl) {
      wasm.transactionbuilder_set_ttl(this.ptr, ttl);
    }
    /**
    * @param {number} validity_start_interval
    */

  }, {
    key: "set_validity_start_interval",
    value: function set_validity_start_interval(validity_start_interval) {
      wasm.transactionbuilder_set_validity_start_interval(this.ptr, validity_start_interval);
    }
    /**
    * @param {Certificates} certs
    */

  }, {
    key: "set_certs",
    value: function set_certs(certs) {
      _assertClass(certs, Certificates);

      wasm.transactionbuilder_set_certs(this.ptr, certs.ptr);
    }
    /**
    * @param {Withdrawals} withdrawals
    */

  }, {
    key: "set_withdrawals",
    value: function set_withdrawals(withdrawals) {
      _assertClass(withdrawals, Withdrawals);

      wasm.transactionbuilder_set_withdrawals(this.ptr, withdrawals.ptr);
    }
    /**
    * @param {AuxiliaryData} auxiliary_data
    */

  }, {
    key: "set_auxiliary_data",
    value: function set_auxiliary_data(auxiliary_data) {
      _assertClass(auxiliary_data, AuxiliaryData);

      wasm.transactionbuilder_set_auxiliary_data(this.ptr, auxiliary_data.ptr);
    }
    /**
    * @param {boolean} prefer_pure_change
    */

  }, {
    key: "set_prefer_pure_change",
    value: function set_prefer_pure_change(prefer_pure_change) {
      wasm.transactionbuilder_set_prefer_pure_change(this.ptr, prefer_pure_change);
    }
    /**
    * @param {LinearFee} linear_fee
    * @param {BigNum} pool_deposit
    * @param {BigNum} key_deposit
    * @param {number} max_value_size
    * @param {number} max_tx_size
    * @param {BigNum} coins_per_utxo_word
    * @returns {TransactionBuilder}
    */

  }, {
    key: "get_explicit_input",
    value:
    /**
    * does not include refunds or withdrawals
    * @returns {Value}
    */
    function get_explicit_input() {
      var ret = wasm.transactionbuilder_get_explicit_input(this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * withdrawals and refunds
    * @returns {Value}
    */

  }, {
    key: "get_implicit_input",
    value: function get_implicit_input() {
      var ret = wasm.transactionbuilder_get_implicit_input(this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * does not include fee
    * @returns {Value}
    */

  }, {
    key: "get_explicit_output",
    value: function get_explicit_output() {
      var ret = wasm.transactionbuilder_get_explicit_output(this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "get_deposit",
    value: function get_deposit() {
      var ret = wasm.transactionbuilder_get_deposit(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "get_fee_if_set",
    value: function get_fee_if_set() {
      var ret = wasm.transactionbuilder_get_fee_if_set(this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * Warning: this function will mutate the /fee/ field
    * @param {Address} address
    * @returns {boolean}
    */

  }, {
    key: "add_change_if_needed",
    value: function add_change_if_needed(address) {
      _assertClass(address, Address);

      var ret = wasm.transactionbuilder_add_change_if_needed(this.ptr, address.ptr);
      return ret !== 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "full_size",
    value: function full_size() {
      var ret = wasm.transactionbuilder_full_size(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "output_sizes",
    value: function output_sizes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionbuilder_output_sizes(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        wasm.__wbindgen_free(r0, r1 * 4);

        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {TransactionBody}
    */

  }, {
    key: "build",
    value: function build() {
      var ret = wasm.transactionbuilder_build(this.ptr);
      return TransactionBody.__wrap(ret);
    }
    /**
    * warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
    * warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
    * this is done to simplify the library code, but can be fixed later
    * @returns {BigNum}
    */

  }, {
    key: "min_fee",
    value: function min_fee() {
      var ret = wasm.transactionbuilder_min_fee(this.ptr);
      return BigNum.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionBuilder.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new(linear_fee, pool_deposit, key_deposit, max_value_size, max_tx_size, coins_per_utxo_word) {
      _assertClass(linear_fee, LinearFee);

      _assertClass(pool_deposit, BigNum);

      _assertClass(key_deposit, BigNum);

      _assertClass(coins_per_utxo_word, BigNum);

      var ret = wasm.transactionbuilder_new(linear_fee.ptr, pool_deposit.ptr, key_deposit.ptr, max_value_size, max_tx_size, coins_per_utxo_word.ptr);
      return TransactionBuilder.__wrap(ret);
    }
  }]);

  return TransactionBuilder;
}();

module.exports.TransactionBuilder = TransactionBuilder;
/**
*/

var TransactionHash = /*#__PURE__*/function () {
  "use strict";

  function TransactionHash() {
    _classCallCheck(this, TransactionHash);
  }

  _createClass(TransactionHash, [{
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

      wasm.__wbg_transactionhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionhash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.transactionhash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {TransactionHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionhash_from_bech32(ptr0, len0);
      return TransactionHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionhash_from_bytes(ptr0, len0);
      return TransactionHash.__wrap(ret);
    }
  }]);

  return TransactionHash;
}();

module.exports.TransactionHash = TransactionHash;
/**
*/

var TransactionInput = /*#__PURE__*/function () {
  "use strict";

  function TransactionInput() {
    _classCallCheck(this, TransactionInput);
  }

  _createClass(TransactionInput, [{
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

      wasm.__wbg_transactioninput_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactioninput_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionInput}
    */

  }, {
    key: "transaction_id",
    value:
    /**
    * @returns {TransactionHash}
    */
    function transaction_id() {
      var ret = wasm.transactioninput_transaction_id(this.ptr);
      return TransactionHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "index",
    value: function index() {
      var ret = wasm.transactioninput_index(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {TransactionHash} transaction_id
    * @param {number} index
    * @returns {TransactionInput}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionInput.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactioninput_from_bytes(ptr0, len0);
      return TransactionInput.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(transaction_id, index) {
      _assertClass(transaction_id, TransactionHash);

      var ret = wasm.transactioninput_new(transaction_id.ptr, index);
      return TransactionInput.__wrap(ret);
    }
  }]);

  return TransactionInput;
}();

module.exports.TransactionInput = TransactionInput;
/**
*/

var TransactionInputs = /*#__PURE__*/function () {
  "use strict";

  function TransactionInputs() {
    _classCallCheck(this, TransactionInputs);
  }

  _createClass(TransactionInputs, [{
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

      wasm.__wbg_transactioninputs_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactioninputs_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionInputs}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.transactioninputs_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionInput}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.transactioninputs_get(this.ptr, index);
      return TransactionInput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionInput);

      wasm.transactioninputs_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionInputs.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactioninputs_from_bytes(ptr0, len0);
      return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactioninputs_new();
      return TransactionInputs.__wrap(ret);
    }
  }]);

  return TransactionInputs;
}();

module.exports.TransactionInputs = TransactionInputs;
/**
*/

var TransactionMetadatum = /*#__PURE__*/function () {
  "use strict";

  function TransactionMetadatum() {
    _classCallCheck(this, TransactionMetadatum);
  }

  _createClass(TransactionMetadatum, [{
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

      wasm.__wbg_transactionmetadatum_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionmetadatum_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "kind",
    value:
    /**
    * @returns {number}
    */
    function kind() {
      var ret = wasm.transactionmetadatum_kind(this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {MetadataMap}
    */

  }, {
    key: "as_map",
    value: function as_map() {
      var ret = wasm.transactionmetadatum_as_map(this.ptr);
      return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "as_list",
    value: function as_list() {
      var ret = wasm.transactionmetadatum_as_list(this.ptr);
      return MetadataList.__wrap(ret);
    }
    /**
    * @returns {Int}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = wasm.transactionmetadatum_as_int(this.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionmetadatum_as_bytes(retptr, this.ptr);
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
    * @returns {string}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionmetadatum_as_text(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionMetadatum.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionmetadatum_from_bytes(ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataMap} map
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_map",
    value: function new_map(map) {
      _assertClass(map, MetadataMap);

      var ret = wasm.transactionmetadatum_new_map(map.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataList} list
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_list",
    value: function new_list(list) {
      _assertClass(list, MetadataList);

      var ret = wasm.transactionmetadatum_new_list(list.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_int",
    value: function new_int(int) {
      _assertClass(int, Int);

      var ret = wasm.transactionmetadatum_new_int(int.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionmetadatum_new_bytes(ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionmetadatum_new_text(ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
  }]);

  return TransactionMetadatum;
}();

module.exports.TransactionMetadatum = TransactionMetadatum;
/**
*/

var TransactionMetadatumLabels = /*#__PURE__*/function () {
  "use strict";

  function TransactionMetadatumLabels() {
    _classCallCheck(this, TransactionMetadatumLabels);
  }

  _createClass(TransactionMetadatumLabels, [{
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

      wasm.__wbg_transactionmetadatumlabels_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionmetadatumlabels_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionMetadatumLabels}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.transactionmetadatumlabels_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BigNum}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.transactionmetadatumlabels_get(this.ptr, index);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, BigNum);

      wasm.transactionmetadatumlabels_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionMetadatumLabels.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionmetadatumlabels_from_bytes(ptr0, len0);
      return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactionmetadatumlabels_new();
      return TransactionMetadatumLabels.__wrap(ret);
    }
  }]);

  return TransactionMetadatumLabels;
}();

module.exports.TransactionMetadatumLabels = TransactionMetadatumLabels;
/**
*/

var TransactionOutput = /*#__PURE__*/function () {
  "use strict";

  function TransactionOutput() {
    _classCallCheck(this, TransactionOutput);
  }

  _createClass(TransactionOutput, [{
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

      wasm.__wbg_transactionoutput_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionoutput_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionOutput}
    */

  }, {
    key: "address",
    value:
    /**
    * @returns {Address}
    */
    function address() {
      var ret = wasm.transactionoutput_address(this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @returns {Value}
    */

  }, {
    key: "amount",
    value: function amount() {
      var ret = wasm.transactionoutput_amount(this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {DataHash | undefined}
    */

  }, {
    key: "data_hash",
    value: function data_hash() {
      var ret = wasm.transactionoutput_data_hash(this.ptr);
      return ret === 0 ? undefined : DataHash.__wrap(ret);
    }
    /**
    * @param {DataHash} data_hash
    */

  }, {
    key: "set_data_hash",
    value: function set_data_hash(data_hash) {
      _assertClass(data_hash, DataHash);

      wasm.transactionoutput_set_data_hash(this.ptr, data_hash.ptr);
    }
    /**
    * @param {Address} address
    * @param {Value} amount
    * @returns {TransactionOutput}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionOutput.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionoutput_from_bytes(ptr0, len0);
      return TransactionOutput.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(address, amount) {
      _assertClass(address, Address);

      _assertClass(amount, Value);

      var ret = wasm.transactionoutput_new(address.ptr, amount.ptr);
      return TransactionOutput.__wrap(ret);
    }
  }]);

  return TransactionOutput;
}();

module.exports.TransactionOutput = TransactionOutput;
/**
*/

var TransactionOutputs = /*#__PURE__*/function () {
  "use strict";

  function TransactionOutputs() {
    _classCallCheck(this, TransactionOutputs);
  }

  _createClass(TransactionOutputs, [{
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

      wasm.__wbg_transactionoutputs_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionoutputs_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionOutputs}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.transactionoutputs_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionOutput}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.transactionoutputs_get(this.ptr, index);
      return TransactionOutput.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionOutput);

      wasm.transactionoutputs_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionOutputs.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionoutputs_from_bytes(ptr0, len0);
      return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactionoutputs_new();
      return TransactionOutputs.__wrap(ret);
    }
  }]);

  return TransactionOutputs;
}();

module.exports.TransactionOutputs = TransactionOutputs;
/**
*/

var TransactionUnspentOutput = /*#__PURE__*/function () {
  "use strict";

  function TransactionUnspentOutput() {
    _classCallCheck(this, TransactionUnspentOutput);
  }

  _createClass(TransactionUnspentOutput, [{
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

      wasm.__wbg_transactionunspentoutput_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionunspentoutput_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionUnspentOutput}
    */

  }, {
    key: "input",
    value:
    /**
    * @returns {TransactionInput}
    */
    function input() {
      var ret = wasm.transactionunspentoutput_input(this.ptr);
      return TransactionInput.__wrap(ret);
    }
    /**
    * @returns {TransactionOutput}
    */

  }, {
    key: "output",
    value: function output() {
      var ret = wasm.transactionunspentoutput_output(this.ptr);
      return TransactionOutput.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionUnspentOutput.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionunspentoutput_from_bytes(ptr0, len0);
      return TransactionUnspentOutput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} input
    * @param {TransactionOutput} output
    * @returns {TransactionUnspentOutput}
    */

  }, {
    key: "new",
    value: function _new(input, output) {
      _assertClass(input, TransactionInput);

      _assertClass(output, TransactionOutput);

      var ret = wasm.transactionunspentoutput_new(input.ptr, output.ptr);
      return TransactionUnspentOutput.__wrap(ret);
    }
  }]);

  return TransactionUnspentOutput;
}();

module.exports.TransactionUnspentOutput = TransactionUnspentOutput;
/**
*/

var TransactionWitnessSet = /*#__PURE__*/function () {
  "use strict";

  function TransactionWitnessSet() {
    _classCallCheck(this, TransactionWitnessSet);
  }

  _createClass(TransactionWitnessSet, [{
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

      wasm.__wbg_transactionwitnessset_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionwitnessset_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionWitnessSet}
    */

  }, {
    key: "set_vkeys",
    value:
    /**
    * @param {Vkeywitnesses} vkeys
    */
    function set_vkeys(vkeys) {
      _assertClass(vkeys, Vkeywitnesses);

      wasm.transactionwitnessset_set_vkeys(this.ptr, vkeys.ptr);
    }
    /**
    * @returns {Vkeywitnesses | undefined}
    */

  }, {
    key: "vkeys",
    value: function vkeys() {
      var ret = wasm.transactionwitnessset_vkeys(this.ptr);
      return ret === 0 ? undefined : Vkeywitnesses.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */

  }, {
    key: "set_native_scripts",
    value: function set_native_scripts(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      wasm.transactionwitnessset_set_native_scripts(this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = wasm.transactionwitnessset_native_scripts(this.ptr);
      return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {BootstrapWitnesses} bootstraps
    */

  }, {
    key: "set_bootstraps",
    value: function set_bootstraps(bootstraps) {
      _assertClass(bootstraps, BootstrapWitnesses);

      wasm.transactionwitnessset_set_bootstraps(this.ptr, bootstraps.ptr);
    }
    /**
    * @returns {BootstrapWitnesses | undefined}
    */

  }, {
    key: "bootstraps",
    value: function bootstraps() {
      var ret = wasm.transactionwitnessset_bootstraps(this.ptr);
      return ret === 0 ? undefined : BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */

  }, {
    key: "set_plutus_scripts",
    value: function set_plutus_scripts(plutus_scripts) {
      _assertClass(plutus_scripts, PlutusScripts);

      wasm.transactionwitnessset_set_plutus_scripts(this.ptr, plutus_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */

  }, {
    key: "plutus_scripts",
    value: function plutus_scripts() {
      var ret = wasm.transactionwitnessset_plutus_scripts(this.ptr);
      return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusList} plutus_data
    */

  }, {
    key: "set_plutus_data",
    value: function set_plutus_data(plutus_data) {
      _assertClass(plutus_data, PlutusList);

      wasm.transactionwitnessset_set_plutus_data(this.ptr, plutus_data.ptr);
    }
    /**
    * @returns {PlutusList | undefined}
    */

  }, {
    key: "plutus_data",
    value: function plutus_data() {
      var ret = wasm.transactionwitnessset_plutus_data(this.ptr);
      return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @param {Redeemers} redeemers
    */

  }, {
    key: "set_redeemers",
    value: function set_redeemers(redeemers) {
      _assertClass(redeemers, Redeemers);

      wasm.transactionwitnessset_set_redeemers(this.ptr, redeemers.ptr);
    }
    /**
    * @returns {Redeemers | undefined}
    */

  }, {
    key: "redeemers",
    value: function redeemers() {
      var ret = wasm.transactionwitnessset_redeemers(this.ptr);
      return ret === 0 ? undefined : Redeemers.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionWitnessSet.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionwitnessset_from_bytes(ptr0, len0);
      return TransactionWitnessSet.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactionwitnessset_new();
      return TransactionWitnessSet.__wrap(ret);
    }
  }]);

  return TransactionWitnessSet;
}();

module.exports.TransactionWitnessSet = TransactionWitnessSet;
/**
*/

var TransactionWitnessSets = /*#__PURE__*/function () {
  "use strict";

  function TransactionWitnessSets() {
    _classCallCheck(this, TransactionWitnessSets);
  }

  _createClass(TransactionWitnessSets, [{
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

      wasm.__wbg_transactionwitnesssets_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.transactionwitnesssets_to_bytes(retptr, this.ptr);
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
    * @returns {TransactionWitnessSets}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.transactionwitnesssets_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionWitnessSet}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.transactionwitnesssets_get(this.ptr, index);
      return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {TransactionWitnessSet} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionWitnessSet);

      wasm.transactionwitnesssets_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(TransactionWitnessSets.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.transactionwitnesssets_from_bytes(ptr0, len0);
      return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.transactionwitnesssets_new();
      return TransactionWitnessSets.__wrap(ret);
    }
  }]);

  return TransactionWitnessSets;
}();

module.exports.TransactionWitnessSets = TransactionWitnessSets;
/**
*/

var URL = /*#__PURE__*/function () {
  "use strict";

  function URL() {
    _classCallCheck(this, URL);
  }

  _createClass(URL, [{
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

      wasm.__wbg_url_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.url_to_bytes(retptr, this.ptr);
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
    * @returns {URL}
    */

  }, {
    key: "url",
    value:
    /**
    * @returns {string}
    */
    function url() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.url_url(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(URL.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.url_from_bytes(ptr0, len0);
      return URL.__wrap(ret);
    }
    /**
    * @param {string} url
    * @returns {URL}
    */

  }, {
    key: "new",
    value: function _new(url) {
      var ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.url_new(ptr0, len0);
      return URL.__wrap(ret);
    }
  }]);

  return URL;
}();

module.exports.URL = URL;
/**
*/

var UnitInterval = /*#__PURE__*/function () {
  "use strict";

  function UnitInterval() {
    _classCallCheck(this, UnitInterval);
  }

  _createClass(UnitInterval, [{
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

      wasm.__wbg_unitinterval_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.unitinterval_to_bytes(retptr, this.ptr);
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
    * @returns {UnitInterval}
    */

  }, {
    key: "numerator",
    value:
    /**
    * @returns {BigNum}
    */
    function numerator() {
      var ret = wasm.unitinterval_numerator(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "denominator",
    value: function denominator() {
      var ret = wasm.unitinterval_denominator(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} numerator
    * @param {BigNum} denominator
    * @returns {UnitInterval}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(UnitInterval.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.unitinterval_from_bytes(ptr0, len0);
      return UnitInterval.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(numerator, denominator) {
      _assertClass(numerator, BigNum);

      _assertClass(denominator, BigNum);

      var ret = wasm.unitinterval_new(numerator.ptr, denominator.ptr);
      return UnitInterval.__wrap(ret);
    }
  }]);

  return UnitInterval;
}();

module.exports.UnitInterval = UnitInterval;
/**
*/

var Update = /*#__PURE__*/function () {
  "use strict";

  function Update() {
    _classCallCheck(this, Update);
  }

  _createClass(Update, [{
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

      wasm.__wbg_update_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.update_to_bytes(retptr, this.ptr);
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
    * @returns {Update}
    */

  }, {
    key: "proposed_protocol_parameter_updates",
    value:
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */
    function proposed_protocol_parameter_updates() {
      var ret = wasm.update_proposed_protocol_parameter_updates(this.ptr);
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "epoch",
    value: function epoch() {
      var ret = wasm.update_epoch(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {ProposedProtocolParameterUpdates} proposed_protocol_parameter_updates
    * @param {number} epoch
    * @returns {Update}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Update.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.update_from_bytes(ptr0, len0);
      return Update.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(proposed_protocol_parameter_updates, epoch) {
      _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);

      var ret = wasm.update_new(proposed_protocol_parameter_updates.ptr, epoch);
      return Update.__wrap(ret);
    }
  }]);

  return Update;
}();

module.exports.Update = Update;
/**
*/

var VRFCert = /*#__PURE__*/function () {
  "use strict";

  function VRFCert() {
    _classCallCheck(this, VRFCert);
  }

  _createClass(VRFCert, [{
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

      wasm.__wbg_vrfcert_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vrfcert_to_bytes(retptr, this.ptr);
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
    * @returns {VRFCert}
    */

  }, {
    key: "output",
    value:
    /**
    * @returns {Uint8Array}
    */
    function output() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vrfcert_output(retptr, this.ptr);
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
    key: "proof",
    value: function proof() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vrfcert_proof(retptr, this.ptr);
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
    * @param {Uint8Array} output
    * @param {Uint8Array} proof
    * @returns {VRFCert}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(VRFCert.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vrfcert_from_bytes(ptr0, len0);
      return VRFCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(output, proof) {
      var ptr0 = passArray8ToWasm0(output, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(proof, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      var ret = wasm.vrfcert_new(ptr0, len0, ptr1, len1);
      return VRFCert.__wrap(ret);
    }
  }]);

  return VRFCert;
}();

module.exports.VRFCert = VRFCert;
/**
*/

var VRFKeyHash = /*#__PURE__*/function () {
  "use strict";

  function VRFKeyHash() {
    _classCallCheck(this, VRFKeyHash);
  }

  _createClass(VRFKeyHash, [{
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

      wasm.__wbg_vrfkeyhash_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vrfkeyhash_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.vrfkeyhash_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFKeyHash}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(VRFKeyHash.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vrfkeyhash_from_bech32(ptr0, len0);
      return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFKeyHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vrfkeyhash_from_bytes(ptr0, len0);
      return VRFKeyHash.__wrap(ret);
    }
  }]);

  return VRFKeyHash;
}();

module.exports.VRFKeyHash = VRFKeyHash;
/**
*/

var VRFVKey = /*#__PURE__*/function () {
  "use strict";

  function VRFVKey() {
    _classCallCheck(this, VRFVKey);
  }

  _createClass(VRFVKey, [{
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

      wasm.__wbg_vrfvkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vrfvkey_to_bytes(retptr, this.ptr);
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
    * @param {string} prefix
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32(prefix) {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        var ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.vrfvkey_to_bech32(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);

        wasm.__wbindgen_free(r0, r1);
      }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFVKey}
    */

  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(VRFVKey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vrfvkey_from_bech32(ptr0, len0);
      return VRFVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFVKey}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vrfvkey_from_bytes(ptr0, len0);
      return VRFVKey.__wrap(ret);
    }
  }]);

  return VRFVKey;
}();

module.exports.VRFVKey = VRFVKey;
/**
*/

var Value = /*#__PURE__*/function () {
  "use strict";

  function Value() {
    _classCallCheck(this, Value);
  }

  _createClass(Value, [{
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

      wasm.__wbg_value_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.value_to_bytes(retptr, this.ptr);
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
    * @returns {Value}
    */

  }, {
    key: "is_zero",
    value:
    /**
    * @returns {boolean}
    */
    function is_zero() {
      var ret = wasm.value_is_zero(this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "coin",
    value: function coin() {
      var ret = wasm.value_coin(this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    */

  }, {
    key: "set_coin",
    value: function set_coin(coin) {
      _assertClass(coin, BigNum);

      wasm.value_set_coin(this.ptr, coin.ptr);
    }
    /**
    * @returns {MultiAsset | undefined}
    */

  }, {
    key: "multiasset",
    value: function multiasset() {
      var ret = wasm.value_multiasset(this.ptr);
      return ret === 0 ? undefined : MultiAsset.__wrap(ret);
    }
    /**
    * @param {MultiAsset} multiasset
    */

  }, {
    key: "set_multiasset",
    value: function set_multiasset(multiasset) {
      _assertClass(multiasset, MultiAsset);

      wasm.value_set_multiasset(this.ptr, multiasset.ptr);
    }
    /**
    * @param {Value} rhs
    * @returns {Value}
    */

  }, {
    key: "checked_add",
    value: function checked_add(rhs) {
      _assertClass(rhs, Value);

      var ret = wasm.value_checked_add(this.ptr, rhs.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */

  }, {
    key: "checked_sub",
    value: function checked_sub(rhs_value) {
      _assertClass(rhs_value, Value);

      var ret = wasm.value_checked_sub(this.ptr, rhs_value.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */

  }, {
    key: "clamped_sub",
    value: function clamped_sub(rhs_value) {
      _assertClass(rhs_value, Value);

      var ret = wasm.value_clamped_sub(this.ptr, rhs_value.ptr);
      return Value.__wrap(ret);
    }
    /**
    * note: values are only partially comparable
    * @param {Value} rhs_value
    * @returns {number | undefined}
    */

  }, {
    key: "compare",
    value: function compare(rhs_value) {
      _assertClass(rhs_value, Value);

      var ret = wasm.value_compare(this.ptr, rhs_value.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Value.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.value_from_bytes(ptr0, len0);
      return Value.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    * @returns {Value}
    */

  }, {
    key: "new",
    value: function _new(coin) {
      _assertClass(coin, BigNum);

      var ret = wasm.value_new(coin.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {Value}
    */

  }, {
    key: "zero",
    value: function zero() {
      var ret = wasm.value_zero();
      return Value.__wrap(ret);
    }
  }]);

  return Value;
}();

module.exports.Value = Value;
/**
*/

var Vkey = /*#__PURE__*/function () {
  "use strict";

  function Vkey() {
    _classCallCheck(this, Vkey);
  }

  _createClass(Vkey, [{
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

      wasm.__wbg_vkey_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vkey_to_bytes(retptr, this.ptr);
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
    * @returns {Vkey}
    */

  }, {
    key: "public_key",
    value:
    /**
    * @returns {PublicKey}
    */
    function public_key() {
      var ret = wasm.vkey_public_key(this.ptr);
      return PublicKey.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Vkey.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vkey_from_bytes(ptr0, len0);
      return Vkey.__wrap(ret);
    }
    /**
    * @param {PublicKey} pk
    * @returns {Vkey}
    */

  }, {
    key: "new",
    value: function _new(pk) {
      _assertClass(pk, PublicKey);

      var ret = wasm.vkey_new(pk.ptr);
      return Vkey.__wrap(ret);
    }
  }]);

  return Vkey;
}();

module.exports.Vkey = Vkey;
/**
*/

var Vkeys = /*#__PURE__*/function () {
  "use strict";

  function Vkeys() {
    _classCallCheck(this, Vkeys);
  }

  _createClass(Vkeys, [{
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

      wasm.__wbg_vkeys_free(ptr);
    }
    /**
    * @returns {Vkeys}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.vkeys_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkey}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.vkeys_get(this.ptr, index);
      return Vkey.__wrap(ret);
    }
    /**
    * @param {Vkey} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Vkey);

      wasm.vkeys_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Vkeys.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.vkeys_new();
      return Vkeys.__wrap(ret);
    }
  }]);

  return Vkeys;
}();

module.exports.Vkeys = Vkeys;
/**
*/

var Vkeywitness = /*#__PURE__*/function () {
  "use strict";

  function Vkeywitness() {
    _classCallCheck(this, Vkeywitness);
  }

  _createClass(Vkeywitness, [{
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

      wasm.__wbg_vkeywitness_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.vkeywitness_to_bytes(retptr, this.ptr);
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
    * @returns {Vkeywitness}
    */

  }, {
    key: "vkey",
    value:
    /**
    * @returns {Vkey}
    */
    function vkey() {
      var ret = wasm.vkeywitness_vkey(this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "signature",
    value: function signature() {
      var ret = wasm.vkeywitness_signature(this.ptr);
      return Ed25519Signature.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Vkeywitness.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.vkeywitness_from_bytes(ptr0, len0);
      return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @returns {Vkeywitness}
    */

  }, {
    key: "new",
    value: function _new(vkey, signature) {
      _assertClass(vkey, Vkey);

      _assertClass(signature, Ed25519Signature);

      var ret = wasm.vkeywitness_new(vkey.ptr, signature.ptr);
      return Vkeywitness.__wrap(ret);
    }
  }]);

  return Vkeywitness;
}();

module.exports.Vkeywitness = Vkeywitness;
/**
*/

var Vkeywitnesses = /*#__PURE__*/function () {
  "use strict";

  function Vkeywitnesses() {
    _classCallCheck(this, Vkeywitnesses);
  }

  _createClass(Vkeywitnesses, [{
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

      wasm.__wbg_vkeywitnesses_free(ptr);
    }
    /**
    * @returns {Vkeywitnesses}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.vkeywitnesses_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkeywitness}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = wasm.vkeywitnesses_get(this.ptr, index);
      return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkeywitness} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Vkeywitness);

      wasm.vkeywitnesses_add(this.ptr, elem.ptr);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Vkeywitnesses.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.vkeywitnesses_new();
      return Vkeywitnesses.__wrap(ret);
    }
  }]);

  return Vkeywitnesses;
}();

module.exports.Vkeywitnesses = Vkeywitnesses;
/**
*/

var Withdrawals = /*#__PURE__*/function () {
  "use strict";

  function Withdrawals() {
    _classCallCheck(this, Withdrawals);
  }

  _createClass(Withdrawals, [{
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

      wasm.__wbg_withdrawals_free(ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

        wasm.withdrawals_to_bytes(retptr, this.ptr);
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
    * @returns {Withdrawals}
    */

  }, {
    key: "len",
    value:
    /**
    * @returns {number}
    */
    function len() {
      var ret = wasm.withdrawals_len(this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {RewardAddress} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */

  }, {
    key: "insert",
    value: function insert(key, value) {
      _assertClass(key, RewardAddress);

      _assertClass(value, BigNum);

      var ret = wasm.withdrawals_insert(this.ptr, key.ptr, value.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {RewardAddress} key
    * @returns {BigNum | undefined}
    */

  }, {
    key: "get",
    value: function get(key) {
      _assertClass(key, RewardAddress);

      var ret = wasm.withdrawals_get(this.ptr, key.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = wasm.withdrawals_keys(this.ptr);
      return RewardAddresses.__wrap(ret);
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(Withdrawals.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm.withdrawals_from_bytes(ptr0, len0);
      return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {Withdrawals}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = wasm.withdrawals_new();
      return Withdrawals.__wrap(ret);
    }
  }]);

  return Withdrawals;
}();

module.exports.Withdrawals = Withdrawals;

module.exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

module.exports.__wbindgen_string_new = function (arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};

module.exports.__wbg_new_3a746f2619705add = function (arg0, arg1) {
  var ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};

module.exports.__wbg_call_f54d3a6dadb199ca = function (arg0, arg1) {
  var ret = getObject(arg0).call(getObject(arg1));
  return addHeapObject(ret);
};

module.exports.__wbindgen_jsval_eq = function (arg0, arg1) {
  var ret = getObject(arg0) === getObject(arg1);
  return ret;
};

module.exports.__wbg_self_ac379e780a0d8b94 = function (arg0) {
  var ret = getObject(arg0).self;
  return addHeapObject(ret);
};

module.exports.__wbg_crypto_1e4302b85d4f64a2 = function (arg0) {
  var ret = getObject(arg0).crypto;
  return addHeapObject(ret);
};

module.exports.__wbindgen_is_undefined = function (arg0) {
  var ret = getObject(arg0) === undefined;
  return ret;
};

module.exports.__wbg_getRandomValues_1b4ba144162a5c9e = function (arg0) {
  var ret = getObject(arg0).getRandomValues;
  return addHeapObject(ret);
};

module.exports.__wbg_require_6461b1e9a0d7c34a = function (arg0, arg1) {
  var ret = __webpack_require__("467c")(getStringFromWasm0(arg0, arg1));

  return addHeapObject(ret);
};

module.exports.__wbg_getRandomValues_1ef11e888e5228e9 = function (arg0, arg1, arg2) {
  getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbg_randomFillSync_1b52c8482374c55b = function (arg0, arg1, arg2) {
  getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbindgen_string_get = function (arg0, arg1) {
  var obj = getObject(arg1);
  var ret = typeof obj === 'string' ? obj : undefined;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
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

var path = __webpack_require__("df7c").join(__dirname, 'cardano_serialization_lib_bg.wasm');

var bytes = __webpack_require__("3e8f").readFileSync(path);

var wasmModule = new WebAssembly.Module(bytes);
var wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "fb2c":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ })

}]);
//# sourceMappingURL=web3-cardano-token.common.3.js.map