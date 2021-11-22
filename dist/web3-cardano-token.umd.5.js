((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[5],{

/***/ "10dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emurgo_message_signing_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4264");
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

/***/ "4264":
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
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bee2");
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("53ca");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cb29");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5cc6");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("907a");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("9a8c");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("a975");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("735e");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("c1ac");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("d139");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3a7b");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("d5d6");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("82f8");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("e91f");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("60bd");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("5f96");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("3280");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("3fcc");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("ca91");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("25a1");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("cd26");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("3c5d");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("2954");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("649e");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("219c");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("170b");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("b39a");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("72f7");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("e9c4");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("143c");
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("4a9b");
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("dca8");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("ac03");










































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

var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer) {
    cachegetUint8Memory0 = new Uint8Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer);
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
  var type = Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val);

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
var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
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
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer) {
    cachegetInt32Memory0 = new Int32Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer);
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
  if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer) {
    cachegetFloat64Memory0 = new Float64Array(_emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* memory */ "Od"].buffer);
  }

  return cachegetFloat64Memory0;
}
/**
*/


var LabelKind = Object.freeze({
  Int: 0,
  "0": "Int",
  Text: 1,
  "1": "Text"
});
/**
*/

var SignedMessageKind = Object.freeze({
  COSESIGN: 0,
  "0": "COSESIGN",
  COSESIGN1: 1,
  "1": "COSESIGN1"
});
/**
*/

var SigContext = Object.freeze({
  Signature: 0,
  "0": "Signature",
  Signature1: 1,
  "1": "Signature1",
  CounterSignature: 2,
  "2": "CounterSignature"
});
/**
*/

var CBORSpecialType = Object.freeze({
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

var CBORValueKind = Object.freeze({
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

var AlgorithmId = Object.freeze({
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

var KeyType = Object.freeze({
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

var ECKey = Object.freeze({
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

var CurveType = Object.freeze({
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

var KeyOperation = Object.freeze({
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
  function BigNum() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BigNum);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BigNum, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_bignum_free */ "a"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_to_bytes */ "M"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_to_str */ "N"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_checked_mul */ "I"](this.ptr, other.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_checked_add */ "H"](this.ptr, other.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_checked_sub */ "J"](this.ptr, other.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_from_bytes */ "K"](ptr0, len0);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */

  }, {
    key: "from_str",
    value: function from_str(string) {
      var ptr0 = passStringToWasm0(string, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_realloc */ "G"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* bignum_from_str */ "L"](ptr0, len0);
      return BigNum.__wrap(ret);
    }
  }]);

  return BigNum;
}();
/**
*/

var CBORArray = /*#__PURE__*/function () {
  function CBORArray() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CBORArray);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CBORArray, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cborarray_free */ "b"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_to_bytes */ "V"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_len */ "S"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {CBORValue}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_get */ "Q"](this.ptr, index);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {CBORValue} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, CBORValue);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_add */ "O"](this.ptr, elem.ptr);
    }
    /**
    * @param {boolean} use_definite
    */

  }, {
    key: "set_definite_encoding",
    value: function set_definite_encoding(use_definite) {
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_set_definite_encoding */ "U"](this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_definite",
    value: function is_definite() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_is_definite */ "R"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_from_bytes */ "P"](ptr0, len0);
      return CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborarray_new */ "T"]();
      return CBORArray.__wrap(ret);
    }
  }]);

  return CBORArray;
}();
/**
*/

var CBORObject = /*#__PURE__*/function () {
  function CBORObject() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CBORObject);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CBORObject, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cborobject_free */ "c"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_to_bytes */ "eb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_len */ "bb"](this.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_insert */ "Y"](this.ptr, key.ptr, value.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_get */ "X"](this.ptr, key.ptr);
      return ret === 0 ? undefined : CBORValue.__wrap(ret);
    }
    /**
    * @returns {CBORArray}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_keys */ "ab"](this.ptr);
      return CBORArray.__wrap(ret);
    }
    /**
    * @param {boolean} use_definite
    */

  }, {
    key: "set_definite_encoding",
    value: function set_definite_encoding(use_definite) {
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_set_definite_encoding */ "db"](this.ptr, use_definite);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_definite",
    value: function is_definite() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_is_definite */ "Z"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_from_bytes */ "W"](ptr0, len0);
      return CBORObject.__wrap(ret);
    }
    /**
    * @returns {CBORObject}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborobject_new */ "cb"]();
      return CBORObject.__wrap(ret);
    }
  }]);

  return CBORObject;
}();
/**
*/

var CBORSpecial = /*#__PURE__*/function () {
  function CBORSpecial() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CBORSpecial);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CBORSpecial, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cborspecial_free */ "d"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_to_bytes */ "pb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_kind */ "jb"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {boolean | undefined}
    */

  }, {
    key: "as_bool",
    value: function as_bool() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_as_bool */ "fb"](this.ptr);
      return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_float",
    value: function as_float() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_as_float */ "gb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r1;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_unassigned",
    value: function as_unassigned() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_as_unassigned */ "hb"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_from_bytes */ "ib"](ptr0, len0);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {boolean} b
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_bool",
    value: function new_bool(b) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_new_bool */ "kb"](b);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @param {number} u
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_unassigned",
    value: function new_unassigned(u) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_new_unassigned */ "nb"](u);
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_break",
    value: function new_break() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_new_break */ "lb"]();
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_null",
    value: function new_null() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_new_null */ "mb"]();
      return CBORSpecial.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial}
    */

  }, {
    key: "new_undefined",
    value: function new_undefined() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborspecial_new_undefined */ "ob"]();
      return CBORSpecial.__wrap(ret);
    }
  }]);

  return CBORSpecial;
}();
/**
*/

var CBORValue = /*#__PURE__*/function () {
  function CBORValue() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CBORValue);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CBORValue, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cborvalue_free */ "e"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_to_bytes */ "Gb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_kind */ "yb"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_int */ "sb"](this.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_bytes */ "rb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {string | undefined}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_text */ "wb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getStringFromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {CBORArray | undefined}
    */

  }, {
    key: "as_array",
    value: function as_array() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_array */ "qb"](this.ptr);
      return ret === 0 ? undefined : CBORArray.__wrap(ret);
    }
    /**
    * @returns {CBORObject | undefined}
    */

  }, {
    key: "as_object",
    value: function as_object() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_object */ "tb"](this.ptr);
      return ret === 0 ? undefined : CBORObject.__wrap(ret);
    }
    /**
    * @returns {TaggedCBOR | undefined}
    */

  }, {
    key: "as_tagged",
    value: function as_tagged() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_tagged */ "vb"](this.ptr);
      return ret === 0 ? undefined : TaggedCBOR.__wrap(ret);
    }
    /**
    * @returns {CBORSpecial | undefined}
    */

  }, {
    key: "as_special",
    value: function as_special() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_as_special */ "ub"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_from_bytes */ "xb"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_int */ "Bb"](int.ptr);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CBORValue}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_bytes */ "Ab"](ptr0, len0);
      return CBORValue.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {CBORValue}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_realloc */ "G"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_text */ "Fb"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_array */ "zb"](arr.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_object */ "Cb"](obj.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_tagged */ "Eb"](tagged.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cborvalue_new_special */ "Db"](special.ptr);
      return CBORValue.__wrap(ret);
    }
  }]);

  return CBORValue;
}();
/**
*/

var COSEEncrypt = /*#__PURE__*/function () {
  function COSEEncrypt() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSEEncrypt);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSEEncrypt, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_coseencrypt_free */ "g"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt_to_bytes */ "Pb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {COSERecipients}
    */

  }, {
    key: "recipients",
    value: function recipients() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt_recipients */ "Ob"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt_from_bytes */ "Mb"](ptr0, len0);
      return COSEEncrypt.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext, recipients) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(recipients, COSERecipients);

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt_new */ "Nb"](headers.ptr, ptr0, len0, recipients.ptr);
      return COSEEncrypt.__wrap(ret);
    }
  }]);

  return COSEEncrypt;
}();
/**
*/

var COSEEncrypt0 = /*#__PURE__*/function () {
  function COSEEncrypt0() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSEEncrypt0);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSEEncrypt0, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_coseencrypt0_free */ "f"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_to_bytes */ "Lb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_from_bytes */ "Ib"](ptr0, len0);
      return COSEEncrypt0.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_new */ "Kb"](headers.ptr, ptr0, len0);
      return COSEEncrypt0.__wrap(ret);
    }
  }]);

  return COSEEncrypt0;
}();
/**
*/

var COSEKey = /*#__PURE__*/function () {
  function COSEKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSEKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSEKey, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosekey_free */ "h"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_to_bytes */ "ec"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_key_type */ "dc"](this.ptr, key_type.ptr);
    }
    /**
    * @returns {Label}
    */

  }, {
    key: "key_type",
    value: function key_type() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_key_type */ "Wb"](this.ptr);
      return Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */

  }, {
    key: "set_key_id",
    value: function set_key_id(key_id) {
      var ptr0 = passArray8ToWasm0(key_id, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_key_id */ "bc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "key_id",
    value: function key_id() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_key_id */ "Ub"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @param {Label} algorithm_id
    */

  }, {
    key: "set_algorithm_id",
    value: function set_algorithm_id(algorithm_id) {
      _assertClass(algorithm_id, Label);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_algorithm_id */ "Yb"](this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "algorithm_id",
    value: function algorithm_id() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_algorithm_id */ "Qb"](this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} key_ops
    */

  }, {
    key: "set_key_ops",
    value: function set_key_ops(key_ops) {
      _assertClass(key_ops, Labels);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_key_ops */ "cc"](this.ptr, key_ops.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */

  }, {
    key: "key_ops",
    value: function key_ops() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_key_ops */ "Vb"](this.ptr);
      return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Uint8Array} base_init_vector
    */

  }, {
    key: "set_base_init_vector",
    value: function set_base_init_vector(base_init_vector) {
      var ptr0 = passArray8ToWasm0(base_init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_base_init_vector */ "Zb"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "base_init_vector",
    value: function base_init_vector() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_base_init_vector */ "Rb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_header */ "Tb"](this.ptr, label.ptr);
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_header */ "ac"](this.ptr, label.ptr, value.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_from_bytes */ "Sb"](ptr0, len0);
      return COSEKey.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(key_type) {
      _assertClass(key_type, Label);

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_new */ "Xb"](key_type.ptr);
      return COSEKey.__wrap(ret);
    }
  }]);

  return COSEKey;
}();
/**
*/

var COSERecipient = /*#__PURE__*/function () {
  function COSERecipient() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSERecipient);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSERecipient, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_coserecipient_free */ "i"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipient_to_bytes */ "gc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "ciphertext",
    value: function ciphertext() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipient_from_bytes */ "fc"](ptr0, len0);
      return COSERecipient.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, ciphertext) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(ciphertext) ? 0 : passArray8ToWasm0(ciphertext, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_new */ "Kb"](headers.ptr, ptr0, len0);
      return COSERecipient.__wrap(ret);
    }
  }]);

  return COSERecipient;
}();
/**
*/

var COSERecipients = /*#__PURE__*/function () {
  function COSERecipients() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSERecipients);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSERecipients, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_coserecipients_free */ "j"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_to_bytes */ "mc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_len */ "kc"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSERecipient}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_get */ "jc"](this.ptr, index);
      return COSERecipient.__wrap(ret);
    }
    /**
    * @param {COSERecipient} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, COSERecipient);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_add */ "hc"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_from_bytes */ "ic"](ptr0, len0);
      return COSERecipients.__wrap(ret);
    }
    /**
    * @returns {COSERecipients}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_new */ "lc"]();
      return COSERecipients.__wrap(ret);
    }
  }]);

  return COSERecipients;
}();
/**
*/

var COSESign = /*#__PURE__*/function () {
  function COSESign() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESign);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESign, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesign_free */ "m"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign_to_bytes */ "Ac"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {COSESignatures}
    */

  }, {
    key: "signatures",
    value: function signatures() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign_signatures */ "zc"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign_from_bytes */ "xc"](ptr0, len0);
      return COSESign.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, payload, signatures) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(signatures, COSESignatures);

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign_new */ "yc"](headers.ptr, ptr0, len0, signatures.ptr);
      return COSESign.__wrap(ret);
    }
  }]);

  return COSESign;
}();
/**
*/

var COSESign1 = /*#__PURE__*/function () {
  function COSESign1() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESign1);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESign1, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesign1_free */ "k"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1_to_bytes */ "rc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_ciphertext */ "Hb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "signature",
    value: function signature() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1_signature */ "pc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = isLikeNone(external_aad) ? 0 : passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = isLikeNone(external_payload) ? 0 : passArray8ToWasm0(external_payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1_signed_data */ "qc"](this.ptr, ptr0, len0, ptr1, len1);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1_from_bytes */ "nc"](ptr0, len0);
      return COSESign1.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, payload, signature) {
      _assertClass(headers, Headers);

      var ptr0 = isLikeNone(payload) ? 0 : passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(signature, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1_new */ "oc"](headers.ptr, ptr0, len0, ptr1, len1);
      return COSESign1.__wrap(ret);
    }
  }]);

  return COSESign1;
}();
/**
*/

var COSESign1Builder = /*#__PURE__*/function () {
  function COSESign1Builder() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESign1Builder);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESign1Builder, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesign1builder_free */ "l"](ptr);
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
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_hash_payload */ "tc"](this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */

  }, {
    key: "set_external_aad",
    value: function set_external_aad(external_aad) {
      var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_set_external_aad */ "wc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */

  }, {
    key: "make_data_to_sign",
    value: function make_data_to_sign() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_make_data_to_sign */ "uc"](this.ptr);
      return SigStructure.__wrap(ret);
    }
    /**
    * @param {Uint8Array} signed_sig_structure
    * @returns {COSESign1}
    */

  }, {
    key: "build",
    value: function build(signed_sig_structure) {
      var ptr0 = passArray8ToWasm0(signed_sig_structure, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_build */ "sc"](this.ptr, ptr0, len0);
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

      var ptr0 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_new */ "vc"](headers.ptr, ptr0, len0, is_payload_external);
      return COSESign1Builder.__wrap(ret);
    }
  }]);

  return COSESign1Builder;
}();
/**
*/

var COSESignBuilder = /*#__PURE__*/function () {
  function COSESignBuilder() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESignBuilder);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESignBuilder, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesignbuilder_free */ "p"](ptr);
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
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_hash_payload */ "tc"](this.ptr);
    }
    /**
    * @param {Uint8Array} external_aad
    */

  }, {
    key: "set_external_aad",
    value: function set_external_aad(external_aad) {
      var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesign1builder_set_external_aad */ "wc"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {SigStructure}
    */

  }, {
    key: "make_data_to_sign",
    value: function make_data_to_sign() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignbuilder_make_data_to_sign */ "Kc"](this.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignbuilder_build */ "Jc"](this.ptr, signed_sig_structure.ptr);
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

      var ptr0 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignbuilder_new */ "Lc"](headers.ptr, ptr0, len0, is_payload_external);
      return COSESignBuilder.__wrap(ret);
    }
  }]);

  return COSESignBuilder;
}();
/**
*/

var COSESignature = /*#__PURE__*/function () {
  function COSESignature() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESignature);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESignature, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesignature_free */ "n"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignature_to_bytes */ "Ec"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coseencrypt0_headers */ "Jb"](this.ptr);
      return Headers.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "signature",
    value: function signature() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignature_signature */ "Dc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignature_from_bytes */ "Bc"](ptr0, len0);
      return COSESignature.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(headers, signature) {
      _assertClass(headers, Headers);

      var ptr0 = passArray8ToWasm0(signature, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignature_new */ "Cc"](headers.ptr, ptr0, len0);
      return COSESignature.__wrap(ret);
    }
  }]);

  return COSESignature;
}();
/**
*/

var COSESignatures = /*#__PURE__*/function () {
  function COSESignatures() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, COSESignatures);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(COSESignatures, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_cosesignatures_free */ "o"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignatures_to_bytes */ "Ic"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_len */ "kc"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {COSESignature}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignatures_get */ "Hc"](this.ptr, index);
      return COSESignature.__wrap(ret);
    }
    /**
    * @param {COSESignature} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, COSESignature);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignatures_add */ "Fc"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosesignatures_from_bytes */ "Gc"](ptr0, len0);
      return COSESignatures.__wrap(ret);
    }
    /**
    * @returns {COSESignatures}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_new */ "lc"]();
      return COSESignatures.__wrap(ret);
    }
  }]);

  return COSESignatures;
}();
/**
*/

var CounterSignature = /*#__PURE__*/function () {
  function CounterSignature() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CounterSignature);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CounterSignature, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_countersignature_free */ "q"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* countersignature_to_bytes */ "Qc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* countersignature_signatures */ "Pc"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* countersignature_from_bytes */ "Mc"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* countersignature_new_single */ "Oc"](cose_signature.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* countersignature_new_multi */ "Nc"](cose_signatures.ptr);
      return CounterSignature.__wrap(ret);
    }
  }]);

  return CounterSignature;
}();
/**
*/

var EdDSA25519Key = /*#__PURE__*/function () {
  function EdDSA25519Key() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, EdDSA25519Key);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(EdDSA25519Key, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_eddsa25519key_free */ "r"](ptr);
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
      var ptr0 = passArray8ToWasm0(private_key_bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* eddsa25519key_set_private_key */ "Vc"](this.ptr, ptr0, len0);
    }
    /**
    */

  }, {
    key: "is_for_signing",
    value: function is_for_signing() {
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* eddsa25519key_is_for_signing */ "Sc"](this.ptr);
    }
    /**
    */

  }, {
    key: "is_for_verifying",
    value: function is_for_verifying() {
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* eddsa25519key_is_for_verifying */ "Tc"](this.ptr);
    }
    /**
    * @returns {COSEKey}
    */

  }, {
    key: "build",
    value: function build() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* eddsa25519key_build */ "Rc"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(pubkey_bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* eddsa25519key_new */ "Uc"](ptr0, len0);
      return EdDSA25519Key.__wrap(ret);
    }
  }]);

  return EdDSA25519Key;
}();
/**
*/

var HeaderMap = /*#__PURE__*/function () {
  function HeaderMap() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HeaderMap);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HeaderMap, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_headermap_free */ "s"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_to_bytes */ "ld"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_algorithm_id */ "fd"](this.ptr, algorithm_id.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "algorithm_id",
    value: function algorithm_id() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_algorithm_id */ "Wc"](this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Labels} criticality
    */

  }, {
    key: "set_criticality",
    value: function set_criticality(criticality) {
      _assertClass(criticality, Labels);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_criticality */ "hd"](this.ptr, criticality.ptr);
    }
    /**
    * @returns {Labels | undefined}
    */

  }, {
    key: "criticality",
    value: function criticality() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_criticality */ "Yc"](this.ptr);
      return ret === 0 ? undefined : Labels.__wrap(ret);
    }
    /**
    * @param {Label} content_type
    */

  }, {
    key: "set_content_type",
    value: function set_content_type(content_type) {
      _assertClass(content_type, Label);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_algorithm_id */ "Yb"](this.ptr, content_type.ptr);
    }
    /**
    * @returns {Label | undefined}
    */

  }, {
    key: "content_type",
    value: function content_type() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_algorithm_id */ "Qb"](this.ptr);
      return ret === 0 ? undefined : Label.__wrap(ret);
    }
    /**
    * @param {Uint8Array} key_id
    */

  }, {
    key: "set_key_id",
    value: function set_key_id(key_id) {
      var ptr0 = passArray8ToWasm0(key_id, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_key_id */ "jd"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "key_id",
    value: function key_id() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_key_id */ "bd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @param {Uint8Array} init_vector
    */

  }, {
    key: "set_init_vector",
    value: function set_init_vector(init_vector) {
      var ptr0 = passArray8ToWasm0(init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_set_base_init_vector */ "Zb"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "init_vector",
    value: function init_vector() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* cosekey_base_init_vector */ "Rb"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @param {Uint8Array} partial_init_vector
    */

  }, {
    key: "set_partial_init_vector",
    value: function set_partial_init_vector(partial_init_vector) {
      var ptr0 = passArray8ToWasm0(partial_init_vector, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_partial_init_vector */ "kd"](this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "partial_init_vector",
    value: function partial_init_vector() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_partial_init_vector */ "ed"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @param {CounterSignature} counter_signature
    */

  }, {
    key: "set_counter_signature",
    value: function set_counter_signature(counter_signature) {
      _assertClass(counter_signature, CounterSignature);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_counter_signature */ "gd"](this.ptr, counter_signature.ptr);
    }
    /**
    * @returns {CounterSignature | undefined}
    */

  }, {
    key: "counter_signature",
    value: function counter_signature() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_counter_signature */ "Xc"](this.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_header */ "ad"](this.ptr, label.ptr);
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_set_header */ "id"](this.ptr, label.ptr, value.ptr);
    }
    /**
    * @returns {Labels}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_keys */ "cd"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_from_bytes */ "Zc"](ptr0, len0);
      return HeaderMap.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headermap_new */ "dd"]();
      return HeaderMap.__wrap(ret);
    }
  }]);

  return HeaderMap;
}();
/**
*/

var Headers = /*#__PURE__*/function () {
  function Headers() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Headers);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Headers, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_headers_free */ "t"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headers_to_bytes */ "pd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headers_protected */ "od"](this.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {HeaderMap}
    */

  }, {
    key: "unprotected",
    value: function unprotected() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headers_unprotected */ "qd"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headers_from_bytes */ "md"](ptr0, len0);
      return Headers.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(protected_, unprotected_) {
      _assertClass(protected_, ProtectedHeaderMap);

      _assertClass(unprotected_, HeaderMap);

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* headers_new */ "nd"](protected_.ptr, unprotected_.ptr);
      return Headers.__wrap(ret);
    }
  }]);

  return Headers;
}();
/**
*/

var Int = /*#__PURE__*/function () {
  function Int() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Int);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Int, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_int_free */ "u"](ptr);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_is_positive */ "ud"](this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_positive",
    value: function as_positive() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_as_positive */ "td"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_negative",
    value: function as_negative() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_as_negative */ "sd"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_i32",
    value: function as_i32() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_as_i32 */ "rd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_new */ "vd"](ptr0);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_new_negative */ "xd"](ptr0);
      return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */

  }, {
    key: "new_i32",
    value: function new_i32(x) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* int_new_i32 */ "wd"](x);
      return Int.__wrap(ret);
    }
  }]);

  return Int;
}();
/**
*/

var Label = /*#__PURE__*/function () {
  function Label() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Label);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Label, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_label_free */ "v"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_to_bytes */ "Jd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_kind */ "Gd"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Int | undefined}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_as_int */ "yd"](this.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_as_text */ "zd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getStringFromWasm0(r0, r1).slice();

          _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_bytes */ "Bd"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_new_int */ "Hd"](int.ptr);
      return Label.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {Label}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_realloc */ "G"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_new_text */ "Id"](ptr0, len0);
      return Label.__wrap(ret);
    }
  }, {
    key: "from_algorithm_id",
    value: function from_algorithm_id(id) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_algorithm_id */ "Ad"](id);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} key_type
    * @returns {Label}
    */

  }, {
    key: "from_key_type",
    value: function from_key_type(key_type) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_key_type */ "Fd"](key_type);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} ec_key
    * @returns {Label}
    */

  }, {
    key: "from_ec_key",
    value: function from_ec_key(ec_key) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_ec_key */ "Dd"](ec_key);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} curve_type
    * @returns {Label}
    */

  }, {
    key: "from_curve_type",
    value: function from_curve_type(curve_type) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_curve_type */ "Cd"](curve_type);
      return Label.__wrap(ret);
    }
    /**
    * @param {number} key_op
    * @returns {Label}
    */

  }, {
    key: "from_key_operation",
    value: function from_key_operation(key_op) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* label_from_key_operation */ "Ed"](key_op);
      return Label.__wrap(ret);
    }
  }]);

  return Label;
}();
/**
*/

var Labels = /*#__PURE__*/function () {
  function Labels() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Labels);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Labels, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_labels_free */ "w"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* labels_to_bytes */ "Nd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_len */ "kc"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Label}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* labels_get */ "Md"](this.ptr, index);
      return Label.__wrap(ret);
    }
    /**
    * @param {Label} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Label);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* labels_add */ "Kd"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* labels_from_bytes */ "Ld"](ptr0, len0);
      return Labels.__wrap(ret);
    }
    /**
    * @returns {Labels}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* coserecipients_new */ "lc"]();
      return Labels.__wrap(ret);
    }
  }]);

  return Labels;
}();
/**
*/

var PasswordEncryption = /*#__PURE__*/function () {
  function PasswordEncryption() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PasswordEncryption);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PasswordEncryption, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_passwordencryption_free */ "x"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* passwordencryption_to_bytes */ "Rd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* passwordencryption_from_bytes */ "Pd"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* passwordencryption_new */ "Qd"](data.ptr);
      return PasswordEncryption.__wrap(ret);
    }
  }]);

  return PasswordEncryption;
}();
/**
*/

var ProtectedHeaderMap = /*#__PURE__*/function () {
  function ProtectedHeaderMap() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProtectedHeaderMap);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProtectedHeaderMap, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_protectedheadermap_free */ "y"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* protectedheadermap_to_bytes */ "Wd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* protectedheadermap_deserialized_headers */ "Sd"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* protectedheadermap_from_bytes */ "Td"](ptr0, len0);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "new_empty",
    value: function new_empty() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* protectedheadermap_new_empty */ "Vd"]();
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* protectedheadermap_new */ "Ud"](header_map.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
  }]);

  return ProtectedHeaderMap;
}();
/**
*/

var PubKeyEncryption = /*#__PURE__*/function () {
  function PubKeyEncryption() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PubKeyEncryption);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PubKeyEncryption, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_pubkeyencryption_free */ "z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* pubkeyencryption_to_bytes */ "Zd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* pubkeyencryption_from_bytes */ "Xd"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* pubkeyencryption_new */ "Yd"](data.ptr);
      return PubKeyEncryption.__wrap(ret);
    }
  }]);

  return PubKeyEncryption;
}();
/**
*/

var SigStructure = /*#__PURE__*/function () {
  function SigStructure() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SigStructure);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SigStructure, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_sigstructure_free */ "B"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_to_bytes */ "re"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_context */ "ke"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ProtectedHeaderMap}
    */

  }, {
    key: "body_protected",
    value: function body_protected() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_body_protected */ "je"](this.ptr);
      return ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {ProtectedHeaderMap | undefined}
    */

  }, {
    key: "sign_protected",
    value: function sign_protected() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_sign_protected */ "qe"](this.ptr);
      return ret === 0 ? undefined : ProtectedHeaderMap.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "external_aad",
    value: function external_aad() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_external_aad */ "le"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "payload",
    value: function payload() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_payload */ "oe"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
      }
    }
    /**
    * @param {ProtectedHeaderMap} sign_protected
    */

  }, {
    key: "set_sign_protected",
    value: function set_sign_protected(sign_protected) {
      _assertClass(sign_protected, ProtectedHeaderMap);

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_set_sign_protected */ "pe"](this.ptr, sign_protected.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_from_bytes */ "me"](ptr0, len0);
      return SigStructure.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(context, body_protected, external_aad, payload) {
      _assertClass(body_protected, ProtectedHeaderMap);

      var ptr0 = passArray8ToWasm0(external_aad, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(payload, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* sigstructure_new */ "ne"](context, body_protected.ptr, ptr0, len0, ptr1, len1);
      return SigStructure.__wrap(ret);
    }
  }]);

  return SigStructure;
}();
/**
*/

var SignedMessage = /*#__PURE__*/function () {
  function SignedMessage() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SignedMessage);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SignedMessage, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_signedmessage_free */ "A"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_to_bytes */ "he"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_to_user_facing_encoding */ "ie"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1);
      }
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_kind */ "ee"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {COSESign | undefined}
    */

  }, {
    key: "as_cose_sign",
    value: function as_cose_sign() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_as_cose_sign */ "ae"](this.ptr);
      return ret === 0 ? undefined : COSESign.__wrap(ret);
    }
    /**
    * @returns {COSESign1 | undefined}
    */

  }, {
    key: "as_cose_sign1",
    value: function as_cose_sign1() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_as_cose_sign1 */ "be"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_from_bytes */ "ce"](ptr0, len0);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_new_cose_sign */ "fe"](cose_sign.ptr);
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

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_new_cose_sign1 */ "ge"](cose_sign1.ptr);
      return SignedMessage.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {SignedMessage}
    */

  }, {
    key: "from_user_facing_encoding",
    value: function from_user_facing_encoding(s) {
      var ptr0 = passStringToWasm0(s, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_realloc */ "G"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* signedmessage_from_user_facing_encoding */ "de"](ptr0, len0);
      return SignedMessage.__wrap(ret);
    }
  }]);

  return SignedMessage;
}();
/**
*/

var TaggedCBOR = /*#__PURE__*/function () {
  function TaggedCBOR() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TaggedCBOR);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TaggedCBOR, [{
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

      _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbg_taggedcbor_free */ "C"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](-16);

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* taggedcbor_to_bytes */ "ve"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_free */ "E"](r0, r1 * 1);

        return v0;
      } finally {
        _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_add_to_stack_pointer */ "D"](16);
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
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* taggedcbor_tag */ "ue"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {CBORValue}
    */

  }, {
    key: "value",
    value: function value() {
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* taggedcbor_value */ "we"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* taggedcbor_from_bytes */ "se"](ptr0, len0);
      return TaggedCBOR.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, value) {
      _assertClass(tag, BigNum);

      var ptr0 = tag.ptr;
      tag.ptr = 0;

      _assertClass(value, CBORValue);

      var ret = _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* taggedcbor_new */ "te"](ptr0, value.ptr);
      return TaggedCBOR.__wrap(ret);
    }
  }]);

  return TaggedCBOR;
}();
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
;
function __wbindgen_string_new(arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
}
;
function __wbindgen_debug_string(arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_malloc */ "F"], _emurgo_message_signing_bg_wasm__WEBPACK_IMPORTED_MODULE_41__[/* __wbindgen_realloc */ "G"]);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_rethrow(arg0) {
  throw takeObject(arg0);
}
;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module)))

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

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "ac03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__("4264");


// exec wasm module
wasmExports["xe"]()

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
//# sourceMappingURL=web3-cardano-token.umd.5.js.map