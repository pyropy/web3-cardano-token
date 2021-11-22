((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[4],{

/***/ "0329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return encode_arbitrary_bytes_as_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fd", function() { return decode_arbitrary_bytes_from_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jd", function() { return encode_json_str_to_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gd", function() { return decode_metadatum_to_json_str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ld", function() { return encrypt_with_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hd", function() { return decrypt_with_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sd", function() { return make_daedalus_bootstrap_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "td", function() { return make_icarus_bootstrap_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ud", function() { return make_vkey_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "od", function() { return hash_auxiliary_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rd", function() { return hash_transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pd", function() { return hash_plutus_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qd", function() { return hash_script_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nd", function() { return get_implicit_input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md", function() { return get_deposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vd", function() { return min_ada_required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kd", function() { return encode_json_str_to_native_script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wd", function() { return min_fee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CertificateKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return MIRPot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return MIRKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return RelayKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return NativeScriptKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return ScriptHashNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return NetworkIdKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wc", function() { return TransactionMetadatumKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return MetadataJsonSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return ScriptSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return StakeCredKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return LanguageKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return PlutusDataKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return RedeemerTagKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AssetName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AssetNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Assets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AuxiliaryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AuxiliaryDataHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AuxiliaryDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return BaseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return BigInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BigNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Bip32PrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Bip32PublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return BlockHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return BootstrapWitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return BootstrapWitnesses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ByronAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Certificates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ConstrPlutusData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return CostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return Costmdls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return DNSRecordAorAAAA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return DNSRecordSRV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return DataHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return Ed25519KeyHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Ed25519KeyHashes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Ed25519Signature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return EnterpriseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ExUnitPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ExUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GeneralTransactionMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GenesisDelegateHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GenesisHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GenesisHashes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return GenesisKeyDelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return HeaderBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return Int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return Ipv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Ipv6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return KESSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return KESVKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return LegacyDaedalusPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return LinearFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return MIRToStakeCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return MetadataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return MetadataMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return Mint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return MintAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return MoveInstantaneousReward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return MoveInstantaneousRewardsCert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return MultiAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return MultiHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return NativeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return NativeScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return NetworkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return NetworkInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return Nonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return OperationalCert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return PlutusData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return PlutusList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return PlutusMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return PlutusScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return PlutusScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return Pointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return PointerAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return PoolMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return PoolMetadataHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return PoolParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return PoolRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return PoolRetirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return PrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return ProposedProtocolParameterUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return ProtocolParamUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return ProtocolVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return ProtocolVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return PublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return PublicKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return Redeemer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return RedeemerTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return Redeemers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return Relay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return Relays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return RewardAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return RewardAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return ScriptAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return ScriptAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return ScriptDataHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return ScriptHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zb", function() { return ScriptHashes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return ScriptNOfK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bc", function() { return ScriptPubkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return SingleHostAddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return SingleHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return StakeCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return StakeCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return StakeDelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return StakeDeregistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return StakeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return Strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return TimelockExpiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return TimelockStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return TransactionBodies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return TransactionBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return TransactionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return TransactionHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return TransactionInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uc", function() { return TransactionInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc", function() { return TransactionMetadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xc", function() { return TransactionMetadatumLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yc", function() { return TransactionOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zc", function() { return TransactionOutputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ac", function() { return TransactionUnspentOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bc", function() { return TransactionWitnessSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cc", function() { return TransactionWitnessSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dc", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ec", function() { return UnitInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fc", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gc", function() { return VRFCert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hc", function() { return VRFKeyHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ic", function() { return VRFVKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jc", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kc", function() { return Vkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lc", function() { return Vkeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mc", function() { return Vkeywitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nc", function() { return Vkeywitnesses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oc", function() { return Withdrawals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tc", function() { return __wbg_new_3a746f2619705add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pc", function() { return __wbg_call_f54d3a6dadb199ca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zc", function() { return __wbindgen_jsval_eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wc", function() { return __wbg_self_ac379e780a0d8b94; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qc", function() { return __wbg_crypto_1e4302b85d4f64a2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yc", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rc", function() { return __wbg_getRandomValues_1b4ba144162a5c9e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vc", function() { return __wbg_require_6461b1e9a0d7c34a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sc", function() { return __wbg_getRandomValues_1ef11e888e5228e9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uc", function() { return __wbg_randomFillSync_1b52c8482374c55b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cd", function() { return __wbindgen_string_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xc", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ed", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bd", function() { return __wbindgen_rethrow; });
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bee2");
/* harmony import */ var _Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("53ca");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cb29");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5cc6");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9a8c");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a975");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("735e");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("c1ac");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("d139");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3a7b");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("d5d6");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("82f8");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("e91f");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("60bd");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("5f96");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("3280");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("3fcc");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("ca91");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("25a1");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("cd26");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("3c5d");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("2954");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("649e");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("219c");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("170b");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("b39a");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("72f7");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("143c");
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("fb2c");
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("dca8");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("ad3a");








































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
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer) {
    cachegetUint8Memory0 = new Uint8Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer);
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

function isLikeNone(x) {
  return x === undefined || x === null;
}

var cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer) {
    cachegetInt32Memory0 = new Int32Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer);
  }

  return cachegetInt32Memory0;
}

function debugString(val) {
  // primitive types
  var type = Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val);

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
  if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer) {
    cachegetUint32Memory0 = new Uint32Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* memory */ "mi"].buffer);
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


function encode_arbitrary_bytes_as_metadatum(bytes) {
  var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
  var len0 = WASM_VECTOR_LEN;
  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* encode_arbitrary_bytes_as_metadatum */ "ig"](ptr0, len0);
  return TransactionMetadatum.__wrap(ret);
}
/**
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array}
*/

function decode_arbitrary_bytes_from_metadatum(metadata) {
  try {
    var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

    _assertClass(metadata, TransactionMetadatum);

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* decode_arbitrary_bytes_from_metadatum */ "Hf"](retptr, metadata.ptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

    return v0;
  } finally {
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
  }
}
/**
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/

function encode_json_str_to_metadatum(json, schema) {
  var ptr0 = passStringToWasm0(json, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
  var len0 = WASM_VECTOR_LEN;
  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* encode_json_str_to_metadatum */ "jg"](ptr0, len0, schema);
  return TransactionMetadatum.__wrap(ret);
}
/**
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/

function decode_metadatum_to_json_str(metadatum, schema) {
  try {
    var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

    _assertClass(metadatum, TransactionMetadatum);

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* decode_metadatum_to_json_str */ "If"](retptr, metadatum.ptr, schema);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
  }
}
/**
* @param {string} password
* @param {string} salt
* @param {string} nonce
* @param {string} data
* @returns {string}
*/

function encrypt_with_password(password, salt, nonce, data) {
  try {
    var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

    var ptr0 = passStringToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(salt, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(nonce, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len3 = WASM_VECTOR_LEN;
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* encrypt_with_password */ "lg"](retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
  }
}
/**
* @param {string} password
* @param {string} data
* @returns {string}
*/

function decrypt_with_password(password, data) {
  try {
    var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

    var ptr0 = passStringToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
    var len1 = WASM_VECTOR_LEN;
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* decrypt_with_password */ "Jf"](retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

    _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
  }
}
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/

function make_daedalus_bootstrap_witness(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(addr, ByronAddress);

  _assertClass(key, LegacyDaedalusPrivateKey);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* make_daedalus_bootstrap_witness */ "ji"](tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/

function make_icarus_bootstrap_witness(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(addr, ByronAddress);

  _assertClass(key, Bip32PrivateKey);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* make_icarus_bootstrap_witness */ "ki"](tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/

function make_vkey_witness(tx_body_hash, sk) {
  _assertClass(tx_body_hash, TransactionHash);

  _assertClass(sk, PrivateKey);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* make_vkey_witness */ "li"](tx_body_hash.ptr, sk.ptr);
  return Vkeywitness.__wrap(ret);
}
/**
* @param {AuxiliaryData} auxiliary_data
* @returns {AuxiliaryDataHash}
*/

function hash_auxiliary_data(auxiliary_data) {
  _assertClass(auxiliary_data, AuxiliaryData);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* hash_auxiliary_data */ "dh"](auxiliary_data.ptr);
  return AuxiliaryDataHash.__wrap(ret);
}
/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/

function hash_transaction(tx_body) {
  _assertClass(tx_body, TransactionBody);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* hash_transaction */ "gh"](tx_body.ptr);
  return TransactionHash.__wrap(ret);
}
/**
* @param {PlutusData} plutus_data
* @returns {DataHash}
*/

function hash_plutus_data(plutus_data) {
  _assertClass(plutus_data, PlutusData);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* hash_plutus_data */ "eh"](plutus_data.ptr);
  return DataHash.__wrap(ret);
}
/**
* @param {Redeemers} redeemers
* @param {Costmdls} cost_models
* @param {PlutusList | undefined} datums
* @returns {ScriptDataHash}
*/

function hash_script_data(redeemers, cost_models, datums) {
  _assertClass(redeemers, Redeemers);

  _assertClass(cost_models, Costmdls);

  var ptr0 = 0;

  if (!isLikeNone(datums)) {
    _assertClass(datums, PlutusList);

    ptr0 = datums.ptr;
    datums.ptr = 0;
  }

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* hash_script_data */ "fh"](redeemers.ptr, cost_models.ptr, ptr0);
  return ScriptDataHash.__wrap(ret);
}
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {Value}
*/

function get_implicit_input(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);

  _assertClass(pool_deposit, BigNum);

  _assertClass(key_deposit, BigNum);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* get_implicit_input */ "ch"](txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return Value.__wrap(ret);
}
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/

function get_deposit(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);

  _assertClass(pool_deposit, BigNum);

  _assertClass(key_deposit, BigNum);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* get_deposit */ "bh"](txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return BigNum.__wrap(ret);
}
/**
* @param {Value} assets
* @param {boolean} has_data_hash
* @param {BigNum} coins_per_utxo_word
* @returns {BigNum}
*/

function min_ada_required(assets, has_data_hash, coins_per_utxo_word) {
  _assertClass(assets, Value);

  _assertClass(coins_per_utxo_word, BigNum);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* min_ada_required */ "Fi"](assets.ptr, has_data_hash, coins_per_utxo_word.ptr);
  return BigNum.__wrap(ret);
}
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

function encode_json_str_to_native_script(json, self_xpub, schema) {
  var ptr0 = passStringToWasm0(json, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passStringToWasm0(self_xpub, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
  var len1 = WASM_VECTOR_LEN;
  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* encode_json_str_to_native_script */ "kg"](ptr0, len0, ptr1, len1, schema);
  return NativeScript.__wrap(ret);
}
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/

function min_fee(tx, linear_fee) {
  _assertClass(tx, Transaction);

  _assertClass(linear_fee, LinearFee);

  var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* min_fee */ "Gi"](tx.ptr, linear_fee.ptr);
  return BigNum.__wrap(ret);
}
/**
*/

var CertificateKind = Object.freeze({
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

var MIRPot = Object.freeze({
  Reserves: 0,
  "0": "Reserves",
  Treasury: 1,
  "1": "Treasury"
});
/**
*/

var MIRKind = Object.freeze({
  ToOtherPot: 0,
  "0": "ToOtherPot",
  ToStakeCredentials: 1,
  "1": "ToStakeCredentials"
});
/**
*/

var RelayKind = Object.freeze({
  SingleHostAddr: 0,
  "0": "SingleHostAddr",
  SingleHostName: 1,
  "1": "SingleHostName",
  MultiHostName: 2,
  "2": "MultiHostName"
});
/**
*/

var NativeScriptKind = Object.freeze({
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

var ScriptHashNamespace = Object.freeze({
  NativeScript: 0,
  "0": "NativeScript"
});
/**
*/

var NetworkIdKind = Object.freeze({
  Testnet: 0,
  "0": "Testnet",
  Mainnet: 1,
  "1": "Mainnet"
});
/**
*/

var TransactionMetadatumKind = Object.freeze({
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

var MetadataJsonSchema = Object.freeze({
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

var ScriptSchema = Object.freeze({
  Wallet: 0,
  "0": "Wallet",
  Node: 1,
  "1": "Node"
});
/**
*/

var StakeCredKind = Object.freeze({
  Key: 0,
  "0": "Key",
  Script: 1,
  "1": "Script"
});
/**
*/

var LanguageKind = Object.freeze({
  PlutusV1: 0,
  "0": "PlutusV1"
});
/**
*/

var PlutusDataKind = Object.freeze({
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

var RedeemerTagKind = Object.freeze({
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
  function Address() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Address);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Address, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_address_free */ "a"](ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* address_to_bytes */ "Jc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* address_to_bech32 */ "Ic"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* address_network_id */ "Hc"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* address_from_bytes */ "Gc"](ptr0, len0);
      return Address.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech_str) {
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* address_from_bech32 */ "Fc"](ptr0, len0);
      return Address.__wrap(ret);
    }
  }]);

  return Address;
}();
/**
*/

var AssetName = /*#__PURE__*/function () {
  function AssetName() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AssetName);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AssetName, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_assetname_free */ "b"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetname_to_bytes */ "Nc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetname_name */ "Lc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetname_from_bytes */ "Kc"](ptr0, len0);
      return AssetName.__wrap(ret);
    }
    /**
    * @param {Uint8Array} name
    * @returns {AssetName}
    */

  }, {
    key: "new",
    value: function _new(name) {
      var ptr0 = passArray8ToWasm0(name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetname_new */ "Mc"](ptr0, len0);
      return AssetName.__wrap(ret);
    }
  }]);

  return AssetName;
}();
/**
*/

var AssetNames = /*#__PURE__*/function () {
  function AssetNames() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AssetNames);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AssetNames, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_assetnames_free */ "c"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_to_bytes */ "Tc"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_len */ "Rc"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {AssetName}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_get */ "Qc"](this.ptr, index);
      return AssetName.__wrap(ret);
    }
    /**
    * @param {AssetName} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, AssetName);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_add */ "Oc"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_from_bytes */ "Pc"](ptr0, len0);
      return AssetNames.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assetnames_new */ "Sc"]();
      return AssetNames.__wrap(ret);
    }
  }]);

  return AssetNames;
}();
/**
*/

var Assets = /*#__PURE__*/function () {
  function Assets() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Assets);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Assets, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_assets_free */ "d"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_to_bytes */ "ad"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_len */ "Yc"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_insert */ "Wc"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_get */ "Vc"](this.ptr, key.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_keys */ "Xc"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_from_bytes */ "Uc"](ptr0, len0);
      return Assets.__wrap(ret);
    }
    /**
    * @returns {Assets}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* assets_new */ "Zc"]();
      return Assets.__wrap(ret);
    }
  }]);

  return Assets;
}();
/**
*/

var AuxiliaryData = /*#__PURE__*/function () {
  function AuxiliaryData() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AuxiliaryData);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AuxiliaryData, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_auxiliarydata_free */ "e"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_to_bytes */ "jd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_metadata */ "cd"](this.ptr);
      return ret === 0 ? undefined : GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @param {GeneralTransactionMetadata} metadata
    */

  }, {
    key: "set_metadata",
    value: function set_metadata(metadata) {
      _assertClass(metadata, GeneralTransactionMetadata);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_set_metadata */ "gd"](this.ptr, metadata.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_native_scripts */ "dd"](this.ptr);
      return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */

  }, {
    key: "set_native_scripts",
    value: function set_native_scripts(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_set_native_scripts */ "hd"](this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */

  }, {
    key: "plutus_scripts",
    value: function plutus_scripts() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_plutus_scripts */ "fd"](this.ptr);
      return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */

  }, {
    key: "set_plutus_scripts",
    value: function set_plutus_scripts(plutus_scripts) {
      _assertClass(plutus_scripts, PlutusScripts);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_set_plutus_scripts */ "id"](this.ptr, plutus_scripts.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_from_bytes */ "bd"](ptr0, len0);
      return AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryData}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydata_new */ "ed"]();
      return AuxiliaryData.__wrap(ret);
    }
  }]);

  return AuxiliaryData;
}();
/**
*/

var AuxiliaryDataHash = /*#__PURE__*/function () {
  function AuxiliaryDataHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AuxiliaryDataHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AuxiliaryDataHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_auxiliarydatahash_free */ "f"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydatahash_to_bytes */ "nd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydatahash_to_bech32 */ "md"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydatahash_from_bech32 */ "kd"](ptr0, len0);
      return AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AuxiliaryDataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydatahash_from_bytes */ "ld"](ptr0, len0);
      return AuxiliaryDataHash.__wrap(ret);
    }
  }]);

  return AuxiliaryDataHash;
}();
/**
*/

var AuxiliaryDataSet = /*#__PURE__*/function () {
  function AuxiliaryDataSet() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AuxiliaryDataSet);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AuxiliaryDataSet, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_auxiliarydataset_free */ "g"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydataset_len */ "rd"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydataset_insert */ "qd"](this.ptr, tx_index, data.ptr);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {number} tx_index
    * @returns {AuxiliaryData | undefined}
    */

  }, {
    key: "get",
    value: function get(tx_index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydataset_get */ "od"](this.ptr, tx_index);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "indices",
    value: function indices() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydataset_indices */ "pd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* auxiliarydataset_new */ "sd"]();
      return AuxiliaryDataSet.__wrap(ret);
    }
  }]);

  return AuxiliaryDataSet;
}();
/**
*/

var BaseAddress = /*#__PURE__*/function () {
  function BaseAddress() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BaseAddress);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BaseAddress, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_baseaddress_free */ "h"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* baseaddress_payment_cred */ "vd"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */

  }, {
    key: "stake_cred",
    value: function stake_cred() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* baseaddress_stake_cred */ "wd"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* baseaddress_to_address */ "xd"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* baseaddress_new */ "ud"](network, payment.ptr, stake.ptr);
      return BaseAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* baseaddress_from_address */ "td"](addr.ptr);
      return ret === 0 ? undefined : BaseAddress.__wrap(ret);
    }
  }]);

  return BaseAddress;
}();
/**
*/

var BigInt = /*#__PURE__*/function () {
  function BigInt() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BigInt);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BigInt, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bigint_free */ "i"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bigint_to_bytes */ "Bd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bigint_as_u64 */ "yd"](this.ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bigint_to_str */ "Cd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bigint_from_bytes */ "zd"](ptr0, len0);
      return BigInt.__wrap(ret);
    }
  }, {
    key: "from_str",
    value: function from_str(text) {
      var ptr0 = passStringToWasm0(text, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bigint_from_str */ "Ad"](ptr0, len0);
      return BigInt.__wrap(ret);
    }
  }]);

  return BigInt;
}();
/**
*/

var BigNum = /*#__PURE__*/function () {
  function BigNum() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BigNum);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BigNum, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bignum_free */ "j"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_to_bytes */ "Ld"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_to_str */ "Md"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_is_zero */ "Kd"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_checked_mul */ "Ed"](this.ptr, other.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_checked_add */ "Dd"](this.ptr, other.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_checked_sub */ "Fd"](this.ptr, other.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_clamped_sub */ "Gd"](this.ptr, other.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_compare */ "Hd"](this.ptr, rhs_value.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_from_bytes */ "Id"](ptr0, len0);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */

  }, {
    key: "from_str",
    value: function from_str(string) {
      var ptr0 = passStringToWasm0(string, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_from_str */ "Jd"](ptr0, len0);
      return BigNum.__wrap(ret);
    }
  }, {
    key: "zero",
    value: function zero() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bignum_zero */ "Nd"]();
      return BigNum.__wrap(ret);
    }
  }]);

  return BigNum;
}();
/**
*/

var Bip32PrivateKey = /*#__PURE__*/function () {
  function Bip32PrivateKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Bip32PrivateKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Bip32PrivateKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bip32privatekey_free */ "k"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_derive */ "Qd"](this.ptr, index);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_to_128_xprv */ "Wd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_to_raw_key */ "Zd"](this.ptr);
      return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Bip32PublicKey}
    */

  }, {
    key: "to_public",
    value: function to_public() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_to_public */ "Yd"](this.ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_as_bytes */ "Od"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_to_bech32 */ "Xd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_chaincode */ "Pd"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_from_128_xprv */ "Rd"](ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "generate_ed25519_bip32",
    value: function generate_ed25519_bip32() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_generate_ed25519_bip32 */ "Vd"]();
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_from_bytes */ "Ud"](ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_from_bech32 */ "Sd"](ptr0, len0);
      return Bip32PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_bip39_entropy",
    value: function from_bip39_entropy(entropy, password) {
      var ptr0 = passArray8ToWasm0(entropy, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32privatekey_from_bip39_entropy */ "Td"](ptr0, len0, ptr1, len1);
      return Bip32PrivateKey.__wrap(ret);
    }
  }]);

  return Bip32PrivateKey;
}();
/**
*/

var Bip32PublicKey = /*#__PURE__*/function () {
  function Bip32PublicKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Bip32PublicKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Bip32PublicKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bip32publickey_free */ "l"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_derive */ "ce"](this.ptr, index);
      return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */

  }, {
    key: "to_raw_key",
    value: function to_raw_key() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_to_raw_key */ "ge"](this.ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_as_bytes */ "ae"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_to_bech32 */ "fe"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "chaincode",
    value: function chaincode() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_chaincode */ "be"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_from_bytes */ "ee"](ptr0, len0);
      return Bip32PublicKey.__wrap(ret);
    }
  }, {
    key: "from_bech32",
    value: function from_bech32(bech32_str) {
      var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bip32publickey_from_bech32 */ "de"](ptr0, len0);
      return Bip32PublicKey.__wrap(ret);
    }
  }]);

  return Bip32PublicKey;
}();
/**
*/

var Block = /*#__PURE__*/function () {
  function Block() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Block);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Block, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_block_free */ "m"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_to_bytes */ "me"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_header */ "je"](this.ptr);
      return Header.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */

  }, {
    key: "transaction_bodies",
    value: function transaction_bodies() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_transaction_bodies */ "ne"](this.ptr);
      return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */

  }, {
    key: "transaction_witness_sets",
    value: function transaction_witness_sets() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_transaction_witness_sets */ "oe"](this.ptr);
      return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryDataSet}
    */

  }, {
    key: "auxiliary_data_set",
    value: function auxiliary_data_set() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_auxiliary_data_set */ "he"](this.ptr);
      return AuxiliaryDataSet.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "invalid_transactions",
    value: function invalid_transactions() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_invalid_transactions */ "ke"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_from_bytes */ "ie"](ptr0, len0);
      return Block.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(header, transaction_bodies, transaction_witness_sets, auxiliary_data_set, invalid_transactions) {
      _assertClass(header, Header);

      _assertClass(transaction_bodies, TransactionBodies);

      _assertClass(transaction_witness_sets, TransactionWitnessSets);

      _assertClass(auxiliary_data_set, AuxiliaryDataSet);

      var ptr0 = passArray32ToWasm0(invalid_transactions, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* block_new */ "le"](header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, auxiliary_data_set.ptr, ptr0, len0);
      return Block.__wrap(ret);
    }
  }]);

  return Block;
}();
/**
*/

var BlockHash = /*#__PURE__*/function () {
  function BlockHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BlockHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BlockHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_blockhash_free */ "n"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* blockhash_to_bytes */ "se"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* blockhash_to_bech32 */ "re"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* blockhash_from_bech32 */ "pe"](ptr0, len0);
      return BlockHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BlockHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* blockhash_from_bytes */ "qe"](ptr0, len0);
      return BlockHash.__wrap(ret);
    }
  }]);

  return BlockHash;
}();
/**
*/

var BootstrapWitness = /*#__PURE__*/function () {
  function BootstrapWitness() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BootstrapWitness);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BootstrapWitness, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bootstrapwitness_free */ "o"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_to_bytes */ "ye"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_vkey */ "ze"](this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "signature",
    value: function signature() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_signature */ "xe"](this.ptr);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "chain_code",
    value: function chain_code() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_chain_code */ "ue"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "attributes",
    value: function attributes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_attributes */ "te"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_from_bytes */ "ve"](ptr0, len0);
      return BootstrapWitness.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(vkey, signature, chain_code, attributes) {
      _assertClass(vkey, Vkey);

      _assertClass(signature, Ed25519Signature);

      var ptr0 = passArray8ToWasm0(chain_code, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(attributes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitness_new */ "we"](vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
      return BootstrapWitness.__wrap(ret);
    }
  }]);

  return BootstrapWitness;
}();
/**
*/

var BootstrapWitnesses = /*#__PURE__*/function () {
  function BootstrapWitnesses() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BootstrapWitnesses);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BootstrapWitnesses, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_bootstrapwitnesses_free */ "p"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitnesses_len */ "Ce"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BootstrapWitness}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitnesses_get */ "Be"](this.ptr, index);
      return BootstrapWitness.__wrap(ret);
    }
    /**
    * @param {BootstrapWitness} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, BootstrapWitness);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitnesses_add */ "Ae"](this.ptr, elem.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* bootstrapwitnesses_new */ "De"]();
      return BootstrapWitnesses.__wrap(ret);
    }
  }]);

  return BootstrapWitnesses;
}();
/**
*/

var ByronAddress = /*#__PURE__*/function () {
  function ByronAddress() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ByronAddress);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ByronAddress, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_byronaddress_free */ "q"](ptr);
    }
    /**
    * @returns {string}
    */

  }, {
    key: "to_base58",
    value: function to_base58() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_to_base58 */ "Ne"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_to_bytes */ "Oe"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_byron_protocol_magic */ "Fe"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "attributes",
    value: function attributes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_attributes */ "Ee"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {number}
    */

  }, {
    key: "network_id",
    value: function network_id() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_network_id */ "Le"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_to_address */ "Me"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_from_bytes */ "Ie"](ptr0, len0);
      return ByronAddress.__wrap(ret);
    }
  }, {
    key: "from_base58",
    value: function from_base58(s) {
      var ptr0 = passStringToWasm0(s, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_from_base58 */ "He"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_icarus_from_key */ "Je"](key.ptr, protocol_magic);
      return ByronAddress.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {boolean}
    */

  }, {
    key: "is_valid",
    value: function is_valid(s) {
      var ptr0 = passStringToWasm0(s, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_is_valid */ "Ke"](ptr0, len0);
      return ret !== 0;
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* byronaddress_from_address */ "Ge"](addr.ptr);
      return ret === 0 ? undefined : ByronAddress.__wrap(ret);
    }
  }]);

  return ByronAddress;
}();
/**
*/

var Certificate = /*#__PURE__*/function () {
  function Certificate() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Certificate);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Certificate, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_certificate_free */ "r"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_to_bytes */ "ff"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_kind */ "Xe"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {StakeRegistration | undefined}
    */

  }, {
    key: "as_stake_registration",
    value: function as_stake_registration() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_stake_registration */ "Ve"](this.ptr);
      return ret === 0 ? undefined : StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeDeregistration | undefined}
    */

  }, {
    key: "as_stake_deregistration",
    value: function as_stake_deregistration() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_stake_deregistration */ "Ue"](this.ptr);
      return ret === 0 ? undefined : StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeDelegation | undefined}
    */

  }, {
    key: "as_stake_delegation",
    value: function as_stake_delegation() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_stake_delegation */ "Te"](this.ptr);
      return ret === 0 ? undefined : StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {PoolRegistration | undefined}
    */

  }, {
    key: "as_pool_registration",
    value: function as_pool_registration() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_pool_registration */ "Re"](this.ptr);
      return ret === 0 ? undefined : PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolRetirement | undefined}
    */

  }, {
    key: "as_pool_retirement",
    value: function as_pool_retirement() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_pool_retirement */ "Se"](this.ptr);
      return ret === 0 ? undefined : PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {GenesisKeyDelegation | undefined}
    */

  }, {
    key: "as_genesis_key_delegation",
    value: function as_genesis_key_delegation() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_genesis_key_delegation */ "Pe"](this.ptr);
      return ret === 0 ? undefined : GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousRewardsCert | undefined}
    */

  }, {
    key: "as_move_instantaneous_rewards_cert",
    value: function as_move_instantaneous_rewards_cert() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_as_move_instantaneous_rewards_cert */ "Qe"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_from_bytes */ "We"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_stake_registration */ "ef"](stake_registration.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_stake_deregistration */ "df"](stake_deregistration.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_stake_delegation */ "cf"](stake_delegation.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_pool_registration */ "af"](pool_registration.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_pool_retirement */ "bf"](pool_retirement.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_genesis_key_delegation */ "Ye"](genesis_key_delegation.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificate_new_move_instantaneous_rewards_cert */ "Ze"](move_instantaneous_rewards_cert.ptr);
      return Certificate.__wrap(ret);
    }
  }]);

  return Certificate;
}();
/**
*/

var Certificates = /*#__PURE__*/function () {
  function Certificates() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Certificates);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Certificates, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_certificates_free */ "s"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_to_bytes */ "lf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_len */ "jf"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Certificate}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_get */ "if"](this.ptr, index);
      return Certificate.__wrap(ret);
    }
    /**
    * @param {Certificate} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Certificate);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_add */ "gf"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_from_bytes */ "hf"](ptr0, len0);
      return Certificates.__wrap(ret);
    }
    /**
    * @returns {Certificates}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* certificates_new */ "kf"]();
      return Certificates.__wrap(ret);
    }
  }]);

  return Certificates;
}();
/**
*/

var ConstrPlutusData = /*#__PURE__*/function () {
  function ConstrPlutusData() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ConstrPlutusData);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ConstrPlutusData, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_constrplutusdata_free */ "t"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* constrplutusdata_to_bytes */ "qf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* constrplutusdata_tag */ "pf"](this.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "data",
    value: function data() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* constrplutusdata_data */ "mf"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* constrplutusdata_from_bytes */ "nf"](ptr0, len0);
      return ConstrPlutusData.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, data) {
      _assertClass(tag, Int);

      var ptr0 = tag.ptr;
      tag.ptr = 0;

      _assertClass(data, PlutusList);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* constrplutusdata_new */ "of"](ptr0, data.ptr);
      return ConstrPlutusData.__wrap(ret);
    }
  }]);

  return ConstrPlutusData;
}();
/**
*/

var CostModel = /*#__PURE__*/function () {
  function CostModel() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CostModel);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CostModel, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_costmodel_free */ "v"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmodel_to_bytes */ "Cf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmodel_set */ "Bf"](this.ptr, operation, cost.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @param {number} operation
    * @returns {Int}
    */

  }, {
    key: "get",
    value: function get(operation) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmodel_get */ "zf"](this.ptr, operation);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmodel_from_bytes */ "yf"](ptr0, len0);
      return CostModel.__wrap(ret);
    }
    /**
    * @returns {CostModel}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmodel_new */ "Af"]();
      return CostModel.__wrap(ret);
    }
  }]);

  return CostModel;
}();
/**
*/

var Costmdls = /*#__PURE__*/function () {
  function Costmdls() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Costmdls);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Costmdls, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_costmdls_free */ "u"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_to_bytes */ "xf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_len */ "vf"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_insert */ "tf"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_get */ "sf"](this.ptr, key.ptr);
      return ret === 0 ? undefined : CostModel.__wrap(ret);
    }
    /**
    * @returns {Languages}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_keys */ "uf"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_from_bytes */ "rf"](ptr0, len0);
      return Costmdls.__wrap(ret);
    }
    /**
    * @returns {Costmdls}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* costmdls_new */ "wf"]();
      return Costmdls.__wrap(ret);
    }
  }]);

  return Costmdls;
}();
/**
*/

var DNSRecordAorAAAA = /*#__PURE__*/function () {
  function DNSRecordAorAAAA() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DNSRecordAorAAAA);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DNSRecordAorAAAA, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_dnsrecordaoraaaa_free */ "x"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordaoraaaa_to_bytes */ "Nf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordaoraaaa_record */ "Mf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordaoraaaa_from_bytes */ "Kf"](ptr0, len0);
      return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordAorAAAA}
    */

  }, {
    key: "new",
    value: function _new(dns_name) {
      var ptr0 = passStringToWasm0(dns_name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordaoraaaa_new */ "Lf"](ptr0, len0);
      return DNSRecordAorAAAA.__wrap(ret);
    }
  }]);

  return DNSRecordAorAAAA;
}();
/**
*/

var DNSRecordSRV = /*#__PURE__*/function () {
  function DNSRecordSRV() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DNSRecordSRV);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DNSRecordSRV, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_dnsrecordsrv_free */ "y"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordsrv_to_bytes */ "Rf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordsrv_record */ "Qf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordsrv_from_bytes */ "Of"](ptr0, len0);
      return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordSRV}
    */

  }, {
    key: "new",
    value: function _new(dns_name) {
      var ptr0 = passStringToWasm0(dns_name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* dnsrecordsrv_new */ "Pf"](ptr0, len0);
      return DNSRecordSRV.__wrap(ret);
    }
  }]);

  return DNSRecordSRV;
}();
/**
*/

var DataHash = /*#__PURE__*/function () {
  function DataHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DataHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DataHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_datahash_free */ "w"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* datahash_to_bytes */ "Gf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* datahash_to_bech32 */ "Ff"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* datahash_from_bech32 */ "Df"](ptr0, len0);
      return DataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* datahash_from_bytes */ "Ef"](ptr0, len0);
      return DataHash.__wrap(ret);
    }
  }]);

  return DataHash;
}();
/**
*/

var Ed25519KeyHash = /*#__PURE__*/function () {
  function Ed25519KeyHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Ed25519KeyHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Ed25519KeyHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_ed25519keyhash_free */ "z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhash_to_bytes */ "Vf"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhash_to_bech32 */ "Uf"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhash_from_bech32 */ "Sf"](ptr0, len0);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhash_from_bytes */ "Tf"](ptr0, len0);
      return Ed25519KeyHash.__wrap(ret);
    }
  }]);

  return Ed25519KeyHash;
}();
/**
*/

var Ed25519KeyHashes = /*#__PURE__*/function () {
  function Ed25519KeyHashes() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Ed25519KeyHashes);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Ed25519KeyHashes, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_ed25519keyhashes_free */ "A"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_to_bytes */ "bg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_len */ "Zf"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_get */ "Yf"](this.ptr, index);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Ed25519KeyHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_add */ "Wf"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_from_bytes */ "Xf"](ptr0, len0);
      return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519keyhashes_new */ "ag"]();
      return Ed25519KeyHashes.__wrap(ret);
    }
  }]);

  return Ed25519KeyHashes;
}();
/**
*/

var Ed25519Signature = /*#__PURE__*/function () {
  function Ed25519Signature() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Ed25519Signature);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Ed25519Signature, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_ed25519signature_free */ "B"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_to_bytes */ "gg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {string}
    */

  }, {
    key: "to_bech32",
    value: function to_bech32() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_to_bech32 */ "fg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @returns {string}
    */

  }, {
    key: "to_hex",
    value: function to_hex() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_to_hex */ "hg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_from_bech32 */ "cg"](ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {string} input
    * @returns {Ed25519Signature}
    */

  }, {
    key: "from_hex",
    value: function from_hex(input) {
      var ptr0 = passStringToWasm0(input, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_from_hex */ "eg"](ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519Signature}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ed25519signature_from_bytes */ "dg"](ptr0, len0);
      return Ed25519Signature.__wrap(ret);
    }
  }]);

  return Ed25519Signature;
}();
/**
*/

var EnterpriseAddress = /*#__PURE__*/function () {
  function EnterpriseAddress() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, EnterpriseAddress);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(EnterpriseAddress, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_enterpriseaddress_free */ "C"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* enterpriseaddress_payment_cred */ "og"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* enterpriseaddress_to_address */ "pg"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* enterpriseaddress_new */ "ng"](network, payment.ptr);
      return EnterpriseAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* enterpriseaddress_from_address */ "mg"](addr.ptr);
      return ret === 0 ? undefined : EnterpriseAddress.__wrap(ret);
    }
  }]);

  return EnterpriseAddress;
}();
/**
*/

var ExUnitPrices = /*#__PURE__*/function () {
  function ExUnitPrices() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ExUnitPrices);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ExUnitPrices, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_exunitprices_free */ "D"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunitprices_to_bytes */ "ug"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunitprices_mem_price */ "rg"](this.ptr);
      return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */

  }, {
    key: "step_price",
    value: function step_price() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunitprices_step_price */ "tg"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunitprices_from_bytes */ "qg"](ptr0, len0);
      return ExUnitPrices.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(mem_price, step_price) {
      _assertClass(mem_price, UnitInterval);

      _assertClass(step_price, UnitInterval);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunitprices_new */ "sg"](mem_price.ptr, step_price.ptr);
      return ExUnitPrices.__wrap(ret);
    }
  }]);

  return ExUnitPrices;
}();
/**
*/

var ExUnits = /*#__PURE__*/function () {
  function ExUnits() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ExUnits);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ExUnits, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_exunits_free */ "E"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunits_to_bytes */ "zg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunits_mem */ "wg"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "steps",
    value: function steps() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunits_steps */ "yg"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunits_from_bytes */ "vg"](ptr0, len0);
      return ExUnits.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(mem, steps) {
      _assertClass(mem, BigNum);

      _assertClass(steps, BigNum);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* exunits_new */ "xg"](mem.ptr, steps.ptr);
      return ExUnits.__wrap(ret);
    }
  }]);

  return ExUnits;
}();
/**
*/

var GeneralTransactionMetadata = /*#__PURE__*/function () {
  function GeneralTransactionMetadata() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GeneralTransactionMetadata);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GeneralTransactionMetadata, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_generaltransactionmetadata_free */ "F"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_to_bytes */ "Gg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_len */ "Eg"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_insert */ "Cg"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_get */ "Bg"](this.ptr, key.ptr);
      return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_keys */ "Dg"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_from_bytes */ "Ag"](ptr0, len0);
      return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* generaltransactionmetadata_new */ "Fg"]();
      return GeneralTransactionMetadata.__wrap(ret);
    }
  }]);

  return GeneralTransactionMetadata;
}();
/**
*/

var GenesisDelegateHash = /*#__PURE__*/function () {
  function GenesisDelegateHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenesisDelegateHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenesisDelegateHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_genesisdelegatehash_free */ "G"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesisdelegatehash_to_bytes */ "Kg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesisdelegatehash_to_bech32 */ "Jg"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesisdelegatehash_from_bech32 */ "Hg"](ptr0, len0);
      return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisDelegateHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesisdelegatehash_from_bytes */ "Ig"](ptr0, len0);
      return GenesisDelegateHash.__wrap(ret);
    }
  }]);

  return GenesisDelegateHash;
}();
/**
*/

var GenesisHash = /*#__PURE__*/function () {
  function GenesisHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenesisHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenesisHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_genesishash_free */ "H"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishash_to_bytes */ "Og"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishash_to_bech32 */ "Ng"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishash_from_bech32 */ "Lg"](ptr0, len0);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishash_from_bytes */ "Mg"](ptr0, len0);
      return GenesisHash.__wrap(ret);
    }
  }]);

  return GenesisHash;
}();
/**
*/

var GenesisHashes = /*#__PURE__*/function () {
  function GenesisHashes() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenesisHashes);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenesisHashes, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_genesishashes_free */ "I"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_to_bytes */ "Ug"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_len */ "Sg"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {GenesisHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_get */ "Rg"](this.ptr, index);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, GenesisHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_add */ "Pg"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_from_bytes */ "Qg"](ptr0, len0);
      return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesishashes_new */ "Tg"]();
      return GenesisHashes.__wrap(ret);
    }
  }]);

  return GenesisHashes;
}();
/**
*/

var GenesisKeyDelegation = /*#__PURE__*/function () {
  function GenesisKeyDelegation() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenesisKeyDelegation);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenesisKeyDelegation, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_genesiskeydelegation_free */ "J"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_to_bytes */ "Zg"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_genesishash */ "Xg"](this.ptr);
      return GenesisHash.__wrap(ret);
    }
    /**
    * @returns {GenesisDelegateHash}
    */

  }, {
    key: "genesis_delegate_hash",
    value: function genesis_delegate_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_genesis_delegate_hash */ "Wg"](this.ptr);
      return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */

  }, {
    key: "vrf_keyhash",
    value: function vrf_keyhash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_vrf_keyhash */ "ah"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_from_bytes */ "Vg"](ptr0, len0);
      return GenesisKeyDelegation.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(genesishash, genesis_delegate_hash, vrf_keyhash) {
      _assertClass(genesishash, GenesisHash);

      _assertClass(genesis_delegate_hash, GenesisDelegateHash);

      _assertClass(vrf_keyhash, VRFKeyHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* genesiskeydelegation_new */ "Yg"](genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
      return GenesisKeyDelegation.__wrap(ret);
    }
  }]);

  return GenesisKeyDelegation;
}();
/**
*/

var Header = /*#__PURE__*/function () {
  function Header() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Header);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Header, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_header_free */ "K"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* header_to_bytes */ "lh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* header_header_body */ "jh"](this.ptr);
      return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {KESSignature}
    */

  }, {
    key: "body_signature",
    value: function body_signature() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* header_body_signature */ "hh"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* header_from_bytes */ "ih"](ptr0, len0);
      return Header.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(header_body, body_signature) {
      _assertClass(header_body, HeaderBody);

      _assertClass(body_signature, KESSignature);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* header_new */ "kh"](header_body.ptr, body_signature.ptr);
      return Header.__wrap(ret);
    }
  }]);

  return Header;
}();
/**
*/

var HeaderBody = /*#__PURE__*/function () {
  function HeaderBody() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HeaderBody);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HeaderBody, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_headerbody_free */ "L"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_to_bytes */ "yh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_block_number */ "oh"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "slot",
    value: function slot() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_slot */ "xh"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BlockHash | undefined}
    */

  }, {
    key: "prev_hash",
    value: function prev_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_prev_hash */ "vh"](this.ptr);
      return ret === 0 ? undefined : BlockHash.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */

  }, {
    key: "issuer_vkey",
    value: function issuer_vkey() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_issuer_vkey */ "qh"](this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {VRFVKey}
    */

  }, {
    key: "vrf_vkey",
    value: function vrf_vkey() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_vrf_vkey */ "zh"](this.ptr);
      return VRFVKey.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */

  }, {
    key: "nonce_vrf",
    value: function nonce_vrf() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_nonce_vrf */ "th"](this.ptr);
      return VRFCert.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */

  }, {
    key: "leader_vrf",
    value: function leader_vrf() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_leader_vrf */ "rh"](this.ptr);
      return VRFCert.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "block_body_size",
    value: function block_body_size() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_block_body_size */ "nh"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BlockHash}
    */

  }, {
    key: "block_body_hash",
    value: function block_body_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_block_body_hash */ "mh"](this.ptr);
      return BlockHash.__wrap(ret);
    }
    /**
    * @returns {OperationalCert}
    */

  }, {
    key: "operational_cert",
    value: function operational_cert() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_operational_cert */ "uh"](this.ptr);
      return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersion}
    */

  }, {
    key: "protocol_version",
    value: function protocol_version() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_protocol_version */ "wh"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_from_bytes */ "ph"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* headerbody_new */ "sh"](block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
      return HeaderBody.__wrap(ret);
    }
  }]);

  return HeaderBody;
}();
/**
*/

var Int = /*#__PURE__*/function () {
  function Int() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Int);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Int, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_int_free */ "M"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_is_positive */ "Dh"](this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_positive",
    value: function as_positive() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_as_positive */ "Ch"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_negative",
    value: function as_negative() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_as_negative */ "Bh"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "as_i32",
    value: function as_i32() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_as_i32 */ "Ah"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_new */ "Eh"](x.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_new_negative */ "Gh"](x.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */

  }, {
    key: "new_i32",
    value: function new_i32(x) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* int_new_i32 */ "Fh"](x);
      return Int.__wrap(ret);
    }
  }]);

  return Int;
}();
/**
*/

var Ipv4 = /*#__PURE__*/function () {
  function Ipv4() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Ipv4);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Ipv4, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_ipv4_free */ "N"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv4_to_bytes */ "Kh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv4_ip */ "Ih"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv4_from_bytes */ "Hh"](ptr0, len0);
      return Ipv4.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv4}
    */

  }, {
    key: "new",
    value: function _new(data) {
      var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv4_new */ "Jh"](ptr0, len0);
      return Ipv4.__wrap(ret);
    }
  }]);

  return Ipv4;
}();
/**
*/

var Ipv6 = /*#__PURE__*/function () {
  function Ipv6() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Ipv6);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Ipv6, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_ipv6_free */ "O"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv6_to_bytes */ "Oh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv6_ip */ "Mh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv6_from_bytes */ "Lh"](ptr0, len0);
      return Ipv6.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv6}
    */

  }, {
    key: "new",
    value: function _new(data) {
      var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* ipv6_new */ "Nh"](ptr0, len0);
      return Ipv6.__wrap(ret);
    }
  }]);

  return Ipv6;
}();
/**
*/

var KESSignature = /*#__PURE__*/function () {
  function KESSignature() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, KESSignature);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(KESSignature, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_kessignature_free */ "P"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kessignature_to_bytes */ "Qh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kessignature_from_bytes */ "Ph"](ptr0, len0);
      return KESSignature.__wrap(ret);
    }
  }]);

  return KESSignature;
}();
/**
*/

var KESVKey = /*#__PURE__*/function () {
  function KESVKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, KESVKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(KESVKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_kesvkey_free */ "Q"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kesvkey_to_bytes */ "Uh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kesvkey_to_bech32 */ "Th"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kesvkey_from_bech32 */ "Rh"](ptr0, len0);
      return KESVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESVKey}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* kesvkey_from_bytes */ "Sh"](ptr0, len0);
      return KESVKey.__wrap(ret);
    }
  }]);

  return KESVKey;
}();
/**
*/

var Language = /*#__PURE__*/function () {
  function Language() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Language);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Language, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_language_free */ "R"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* language_to_bytes */ "Yh"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* language_kind */ "Wh"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* language_from_bytes */ "Vh"](ptr0, len0);
      return Language.__wrap(ret);
    }
    /**
    * @returns {Language}
    */

  }, {
    key: "new_plutus_v1",
    value: function new_plutus_v1() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* language_new_plutus_v1 */ "Xh"]();
      return Language.__wrap(ret);
    }
  }]);

  return Language;
}();
/**
*/

var Languages = /*#__PURE__*/function () {
  function Languages() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Languages);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Languages, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_languages_free */ "S"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* languages_len */ "bi"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Language}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* languages_get */ "ai"](this.ptr, index);
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
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* languages_add */ "Zh"](this.ptr, ptr0);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* languages_new */ "ci"]();
      return Languages.__wrap(ret);
    }
  }]);

  return Languages;
}();
/**
*/

var LegacyDaedalusPrivateKey = /*#__PURE__*/function () {
  function LegacyDaedalusPrivateKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LegacyDaedalusPrivateKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LegacyDaedalusPrivateKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_legacydaedalusprivatekey_free */ "T"](ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* legacydaedalusprivatekey_as_bytes */ "di"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "chaincode",
    value: function chaincode() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* legacydaedalusprivatekey_chaincode */ "ei"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* legacydaedalusprivatekey_from_bytes */ "fi"](ptr0, len0);
      return LegacyDaedalusPrivateKey.__wrap(ret);
    }
  }]);

  return LegacyDaedalusPrivateKey;
}();
/**
*/

var LinearFee = /*#__PURE__*/function () {
  function LinearFee() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LinearFee);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LinearFee, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_linearfee_free */ "U"](ptr);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "constant",
    value: function constant() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* linearfee_constant */ "hi"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "coefficient",
    value: function coefficient() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* linearfee_coefficient */ "gi"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* linearfee_new */ "ii"](coefficient.ptr, constant.ptr);
      return LinearFee.__wrap(ret);
    }
  }]);

  return LinearFee;
}();
/**
*/

var MIRToStakeCredentials = /*#__PURE__*/function () {
  function MIRToStakeCredentials() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MIRToStakeCredentials);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MIRToStakeCredentials, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_mirtostakecredentials_free */ "Z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_to_bytes */ "Zi"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_len */ "Xi"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_insert */ "Vi"](this.ptr, cred.ptr, delta.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_get */ "Ui"](this.ptr, cred.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_keys */ "Wi"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_from_bytes */ "Ti"](ptr0, len0);
      return MIRToStakeCredentials.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mirtostakecredentials_new */ "Yi"]();
      return MIRToStakeCredentials.__wrap(ret);
    }
  }]);

  return MIRToStakeCredentials;
}();
/**
*/

var MetadataList = /*#__PURE__*/function () {
  function MetadataList() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MetadataList);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MetadataList, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_metadatalist_free */ "V"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_to_bytes */ "si"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_len */ "qi"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_get */ "pi"](this.ptr, index);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionMetadatum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_add */ "ni"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_from_bytes */ "oi"](ptr0, len0);
      return MetadataList.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatalist_new */ "ri"]();
      return MetadataList.__wrap(ret);
    }
  }]);

  return MetadataList;
}();
/**
*/

var MetadataMap = /*#__PURE__*/function () {
  function MetadataMap() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MetadataMap);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MetadataMap, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_metadatamap_free */ "W"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_to_bytes */ "Ei"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_len */ "Ci"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_insert */ "yi"](this.ptr, key.ptr, value.ptr);
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
      var ptr0 = passStringToWasm0(key, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(value, TransactionMetadatum);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_insert_str */ "Ai"](this.ptr, ptr0, len0, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_insert_i32 */ "zi"](this.ptr, key, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_get */ "ui"](this.ptr, key.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get_str",
    value: function get_str(key) {
      var ptr0 = passStringToWasm0(key, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_get_str */ "wi"](this.ptr, ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "get_i32",
    value: function get_i32(key) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_get_i32 */ "vi"](this.ptr, key);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_has */ "xi"](this.ptr, key.ptr);
      return ret !== 0;
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_keys */ "Bi"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_from_bytes */ "ti"](ptr0, len0);
      return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataMap}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* metadatamap_new */ "Di"]();
      return MetadataMap.__wrap(ret);
    }
  }]);

  return MetadataMap;
}();
/**
*/

var Mint = /*#__PURE__*/function () {
  function Mint() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Mint);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Mint, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_mint_free */ "X"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_to_bytes */ "Ni"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_len */ "Li"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_insert */ "Ji"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_get */ "Ii"](this.ptr, key.ptr);
      return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_keys */ "Ki"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_from_bytes */ "Hi"](ptr0, len0);
      return Mint.__wrap(ret);
    }
    /**
    * @returns {Mint}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mint_new */ "Mi"]();
      return Mint.__wrap(ret);
    }
  }]);

  return Mint;
}();
/**
*/

var MintAssets = /*#__PURE__*/function () {
  function MintAssets() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MintAssets);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MintAssets, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_mintassets_free */ "Y"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mintassets_len */ "Ri"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mintassets_insert */ "Pi"](this.ptr, key.ptr, ptr0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mintassets_get */ "Oi"](this.ptr, key.ptr);
      return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mintassets_keys */ "Qi"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* mintassets_new */ "Si"]();
      return MintAssets.__wrap(ret);
    }
  }]);

  return MintAssets;
}();
/**
*/

var MoveInstantaneousReward = /*#__PURE__*/function () {
  function MoveInstantaneousReward() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MoveInstantaneousReward);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MoveInstantaneousReward, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_moveinstantaneousreward_free */ "ab"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_to_bytes */ "hj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_pot */ "gj"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_kind */ "dj"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "as_to_other_pot",
    value: function as_to_other_pot() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_as_to_other_pot */ "aj"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials | undefined}
    */

  }, {
    key: "as_to_stake_creds",
    value: function as_to_stake_creds() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_as_to_stake_creds */ "bj"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_from_bytes */ "cj"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_new_to_other_pot */ "ej"](pot, amount.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousreward_new_to_stake_creds */ "fj"](pot, amounts.ptr);
      return MoveInstantaneousReward.__wrap(ret);
    }
  }]);

  return MoveInstantaneousReward;
}();
/**
*/

var MoveInstantaneousRewardsCert = /*#__PURE__*/function () {
  function MoveInstantaneousRewardsCert() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MoveInstantaneousRewardsCert);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MoveInstantaneousRewardsCert, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_moveinstantaneousrewardscert_free */ "bb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousrewardscert_to_bytes */ "lj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousrewardscert_move_instantaneous_reward */ "jj"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousrewardscert_from_bytes */ "ij"](ptr0, len0);
      return MoveInstantaneousRewardsCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(move_instantaneous_reward) {
      _assertClass(move_instantaneous_reward, MoveInstantaneousReward);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* moveinstantaneousrewardscert_new */ "kj"](move_instantaneous_reward.ptr);
      return MoveInstantaneousRewardsCert.__wrap(ret);
    }
  }]);

  return MoveInstantaneousRewardsCert;
}();
/**
*/

var MultiAsset = /*#__PURE__*/function () {
  function MultiAsset() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MultiAsset);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MultiAsset, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_multiasset_free */ "cb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_to_bytes */ "tj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_len */ "qj"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_insert */ "oj"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_get */ "nj"](this.ptr, key.ptr);
      return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_keys */ "pj"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_sub */ "sj"](this.ptr, rhs_ma.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_from_bytes */ "mj"](ptr0, len0);
      return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {MultiAsset}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multiasset_new */ "rj"]();
      return MultiAsset.__wrap(ret);
    }
  }]);

  return MultiAsset;
}();
/**
*/

var MultiHostName = /*#__PURE__*/function () {
  function MultiHostName() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MultiHostName);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MultiHostName, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_multihostname_free */ "db"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multihostname_to_bytes */ "xj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multihostname_dns_name */ "uj"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multihostname_from_bytes */ "vj"](ptr0, len0);
      return MultiHostName.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(dns_name) {
      _assertClass(dns_name, DNSRecordSRV);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* multihostname_new */ "wj"](dns_name.ptr);
      return MultiHostName.__wrap(ret);
    }
  }]);

  return MultiHostName;
}();
/**
*/

var NativeScript = /*#__PURE__*/function () {
  function NativeScript() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NativeScript);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NativeScript, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_nativescript_free */ "eb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_to_bytes */ "Nj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_hash */ "Fj"](this.ptr, namespace);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_kind */ "Gj"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ScriptPubkey | undefined}
    */

  }, {
    key: "as_script_pubkey",
    value: function as_script_pubkey() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_script_pubkey */ "Bj"](this.ptr);
      return ret === 0 ? undefined : ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {ScriptAll | undefined}
    */

  }, {
    key: "as_script_all",
    value: function as_script_all() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_script_all */ "yj"](this.ptr);
      return ret === 0 ? undefined : ScriptAll.__wrap(ret);
    }
    /**
    * @returns {ScriptAny | undefined}
    */

  }, {
    key: "as_script_any",
    value: function as_script_any() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_script_any */ "zj"](this.ptr);
      return ret === 0 ? undefined : ScriptAny.__wrap(ret);
    }
    /**
    * @returns {ScriptNOfK | undefined}
    */

  }, {
    key: "as_script_n_of_k",
    value: function as_script_n_of_k() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_script_n_of_k */ "Aj"](this.ptr);
      return ret === 0 ? undefined : ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {TimelockStart | undefined}
    */

  }, {
    key: "as_timelock_start",
    value: function as_timelock_start() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_timelock_start */ "Dj"](this.ptr);
      return ret === 0 ? undefined : TimelockStart.__wrap(ret);
    }
    /**
    * @returns {TimelockExpiry | undefined}
    */

  }, {
    key: "as_timelock_expiry",
    value: function as_timelock_expiry() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_as_timelock_expiry */ "Cj"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_from_bytes */ "Ej"](ptr0, len0);
      return NativeScript.__wrap(ret);
    }
  }, {
    key: "new_script_pubkey",
    value: function new_script_pubkey(script_pubkey) {
      _assertClass(script_pubkey, ScriptPubkey);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_script_pubkey */ "Kj"](script_pubkey.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_script_all */ "Hj"](script_all.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_script_any */ "Ij"](script_any.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_script_n_of_k */ "Jj"](script_n_of_k.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_timelock_start */ "Mj"](timelock_start.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescript_new_timelock_expiry */ "Lj"](timelock_expiry.ptr);
      return NativeScript.__wrap(ret);
    }
  }]);

  return NativeScript;
}();
/**
*/

var NativeScripts = /*#__PURE__*/function () {
  function NativeScripts() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NativeScripts);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NativeScripts, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_nativescripts_free */ "fb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescripts_len */ "Qj"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {NativeScript}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescripts_get */ "Pj"](this.ptr, index);
      return NativeScript.__wrap(ret);
    }
    /**
    * @param {NativeScript} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, NativeScript);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescripts_add */ "Oj"](this.ptr, elem.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nativescripts_new */ "Rj"]();
      return NativeScripts.__wrap(ret);
    }
  }]);

  return NativeScripts;
}();
/**
*/

var NetworkId = /*#__PURE__*/function () {
  function NetworkId() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NetworkId);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NetworkId, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_networkid_free */ "gb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkid_to_bytes */ "Wj"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkid_kind */ "Tj"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkid_from_bytes */ "Sj"](ptr0, len0);
      return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */

  }, {
    key: "testnet",
    value: function testnet() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkid_testnet */ "Vj"]();
      return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */

  }, {
    key: "mainnet",
    value: function mainnet() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkid_mainnet */ "Uj"]();
      return NetworkId.__wrap(ret);
    }
  }]);

  return NetworkId;
}();
/**
*/

var NetworkInfo = /*#__PURE__*/function () {
  function NetworkInfo() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NetworkInfo);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NetworkInfo, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_networkinfo_free */ "hb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkinfo_network_id */ "Yj"](this.ptr);
      return ret;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "protocol_magic",
    value: function protocol_magic() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkinfo_protocol_magic */ "ak"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkinfo_new */ "Zj"](network_id, protocol_magic);
      return NetworkInfo.__wrap(ret);
    }
  }, {
    key: "testnet",
    value: function testnet() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkinfo_testnet */ "bk"]();
      return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {NetworkInfo}
    */

  }, {
    key: "mainnet",
    value: function mainnet() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* networkinfo_mainnet */ "Xj"]();
      return NetworkInfo.__wrap(ret);
    }
  }]);

  return NetworkInfo;
}();
/**
*/

var Nonce = /*#__PURE__*/function () {
  function Nonce() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Nonce);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Nonce, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_nonce_free */ "ib"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nonce_to_bytes */ "gk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nonce_get_hash */ "dk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nonce_from_bytes */ "ck"](ptr0, len0);
      return Nonce.__wrap(ret);
    }
    /**
    * @returns {Nonce}
    */

  }, {
    key: "new_identity",
    value: function new_identity() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nonce_new_identity */ "fk"]();
      return Nonce.__wrap(ret);
    }
    /**
    * @param {Uint8Array} hash
    * @returns {Nonce}
    */

  }, {
    key: "new_from_hash",
    value: function new_from_hash(hash) {
      var ptr0 = passArray8ToWasm0(hash, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* nonce_new_from_hash */ "ek"](ptr0, len0);
      return Nonce.__wrap(ret);
    }
  }]);

  return Nonce;
}();
/**
*/

var OperationalCert = /*#__PURE__*/function () {
  function OperationalCert() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, OperationalCert);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(OperationalCert, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_operationalcert_free */ "jb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_to_bytes */ "nk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_hot_vkey */ "ik"](this.ptr);
      return KESVKey.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "sequence_number",
    value: function sequence_number() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_sequence_number */ "lk"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kes_period",
    value: function kes_period() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_kes_period */ "jk"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "sigma",
    value: function sigma() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_sigma */ "mk"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_from_bytes */ "hk"](ptr0, len0);
      return OperationalCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(hot_vkey, sequence_number, kes_period, sigma) {
      _assertClass(hot_vkey, KESVKey);

      _assertClass(sigma, Ed25519Signature);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* operationalcert_new */ "kk"](hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
      return OperationalCert.__wrap(ret);
    }
  }]);

  return OperationalCert;
}();
/**
*/

var PlutusData = /*#__PURE__*/function () {
  function PlutusData() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PlutusData);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PlutusData, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_plutusdata_free */ "kb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_to_bytes */ "Ak"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_kind */ "uk"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {ConstrPlutusData | undefined}
    */

  }, {
    key: "as_constr_plutus_data",
    value: function as_constr_plutus_data() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_as_constr_plutus_data */ "pk"](this.ptr);
      return ret === 0 ? undefined : ConstrPlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusMap | undefined}
    */

  }, {
    key: "as_map",
    value: function as_map() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_as_map */ "sk"](this.ptr);
      return ret === 0 ? undefined : PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusList | undefined}
    */

  }, {
    key: "as_list",
    value: function as_list() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_as_list */ "rk"](this.ptr);
      return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @returns {BigInt | undefined}
    */

  }, {
    key: "as_integer",
    value: function as_integer() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_as_integer */ "qk"](this.ptr);
      return ret === 0 ? undefined : BigInt.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_as_bytes */ "ok"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0;

        if (r0 !== 0) {
          v0 = getArrayU8FromWasm0(r0, r1).slice();

          _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
        }

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_from_bytes */ "tk"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_new_constr_plutus_data */ "wk"](constr_plutus_data.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_new_map */ "zk"](map.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_new_list */ "yk"](list.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_new_integer */ "xk"](integer.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusData}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusdata_new_bytes */ "vk"](ptr0, len0);
      return PlutusData.__wrap(ret);
    }
  }]);

  return PlutusData;
}();
/**
*/

var PlutusList = /*#__PURE__*/function () {
  function PlutusList() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PlutusList);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PlutusList, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_plutuslist_free */ "lb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_to_bytes */ "Gk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_len */ "Ek"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusData}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_get */ "Dk"](this.ptr, index);
      return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusData} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, PlutusData);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_add */ "Bk"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_from_bytes */ "Ck"](ptr0, len0);
      return PlutusList.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutuslist_new */ "Fk"]();
      return PlutusList.__wrap(ret);
    }
  }]);

  return PlutusList;
}();
/**
*/

var PlutusMap = /*#__PURE__*/function () {
  function PlutusMap() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PlutusMap);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PlutusMap, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_plutusmap_free */ "mb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_to_bytes */ "Nk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_len */ "Lk"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_insert */ "Jk"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_get */ "Ik"](this.ptr, key.ptr);
      return ret === 0 ? undefined : PlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_keys */ "Kk"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_from_bytes */ "Hk"](ptr0, len0);
      return PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusMap}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusmap_new */ "Mk"]();
      return PlutusMap.__wrap(ret);
    }
  }]);

  return PlutusMap;
}();
/**
*/

var PlutusScript = /*#__PURE__*/function () {
  function PlutusScript() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PlutusScript);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PlutusScript, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_plutusscript_free */ "nb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscript_to_bytes */ "Rk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscript_bytes */ "Ok"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscript_from_bytes */ "Pk"](ptr0, len0);
      return PlutusScript.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusScript}
    */

  }, {
    key: "new",
    value: function _new(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscript_new */ "Qk"](ptr0, len0);
      return PlutusScript.__wrap(ret);
    }
  }]);

  return PlutusScript;
}();
/**
*/

var PlutusScripts = /*#__PURE__*/function () {
  function PlutusScripts() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PlutusScripts);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PlutusScripts, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_plutusscripts_free */ "ob"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_to_bytes */ "Xk"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_len */ "Vk"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusScript}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_get */ "Uk"](this.ptr, index);
      return PlutusScript.__wrap(ret);
    }
    /**
    * @param {PlutusScript} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, PlutusScript);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_add */ "Sk"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_from_bytes */ "Tk"](ptr0, len0);
      return PlutusScripts.__wrap(ret);
    }
    /**
    * @returns {PlutusScripts}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* plutusscripts_new */ "Wk"]();
      return PlutusScripts.__wrap(ret);
    }
  }]);

  return PlutusScripts;
}();
/**
*/

var Pointer = /*#__PURE__*/function () {
  function Pointer() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Pointer);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Pointer, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_pointer_free */ "pb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointer_slot */ "al"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "tx_index",
    value: function tx_index() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointer_tx_index */ "bl"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "cert_index",
    value: function cert_index() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointer_cert_index */ "Yk"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointer_new */ "Zk"](slot, tx_index, cert_index);
      return Pointer.__wrap(ret);
    }
  }]);

  return Pointer;
}();
/**
*/

var PointerAddress = /*#__PURE__*/function () {
  function PointerAddress() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PointerAddress);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PointerAddress, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_pointeraddress_free */ "qb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointeraddress_payment_cred */ "el"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Pointer}
    */

  }, {
    key: "stake_pointer",
    value: function stake_pointer() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointeraddress_stake_pointer */ "fl"](this.ptr);
      return Pointer.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointeraddress_to_address */ "gl"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointeraddress_new */ "dl"](network, payment.ptr, stake.ptr);
      return PointerAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* pointeraddress_from_address */ "cl"](addr.ptr);
      return ret === 0 ? undefined : PointerAddress.__wrap(ret);
    }
  }]);

  return PointerAddress;
}();
/**
*/

var PoolMetadata = /*#__PURE__*/function () {
  function PoolMetadata() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PoolMetadata);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PoolMetadata, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_poolmetadata_free */ "rb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadata_to_bytes */ "kl"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadata_url */ "ll"](this.ptr);
      return URL.__wrap(ret);
    }
    /**
    * @returns {PoolMetadataHash}
    */

  }, {
    key: "pool_metadata_hash",
    value: function pool_metadata_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadata_pool_metadata_hash */ "jl"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadata_from_bytes */ "hl"](ptr0, len0);
      return PoolMetadata.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(url, pool_metadata_hash) {
      _assertClass(url, URL);

      _assertClass(pool_metadata_hash, PoolMetadataHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadata_new */ "il"](url.ptr, pool_metadata_hash.ptr);
      return PoolMetadata.__wrap(ret);
    }
  }]);

  return PoolMetadata;
}();
/**
*/

var PoolMetadataHash = /*#__PURE__*/function () {
  function PoolMetadataHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PoolMetadataHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PoolMetadataHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_poolmetadatahash_free */ "sb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadatahash_to_bytes */ "pl"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadatahash_to_bech32 */ "ol"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadatahash_from_bech32 */ "ml"](ptr0, len0);
      return PoolMetadataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolMetadataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolmetadatahash_from_bytes */ "nl"](ptr0, len0);
      return PoolMetadataHash.__wrap(ret);
    }
  }]);

  return PoolMetadataHash;
}();
/**
*/

var PoolParams = /*#__PURE__*/function () {
  function PoolParams() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PoolParams);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PoolParams, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_poolparams_free */ "tb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_to_bytes */ "Al"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_operator */ "ul"](this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */

  }, {
    key: "vrf_keyhash",
    value: function vrf_keyhash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_vrf_keyhash */ "Bl"](this.ptr);
      return VRFKeyHash.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "pledge",
    value: function pledge() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_pledge */ "vl"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "cost",
    value: function cost() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_cost */ "ql"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */

  }, {
    key: "margin",
    value: function margin() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_margin */ "sl"](this.ptr);
      return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {RewardAddress}
    */

  }, {
    key: "reward_account",
    value: function reward_account() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_reward_account */ "zl"](this.ptr);
      return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */

  }, {
    key: "pool_owners",
    value: function pool_owners() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_pool_owners */ "xl"](this.ptr);
      return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */

  }, {
    key: "relays",
    value: function relays() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_relays */ "yl"](this.ptr);
      return Relays.__wrap(ret);
    }
    /**
    * @returns {PoolMetadata | undefined}
    */

  }, {
    key: "pool_metadata",
    value: function pool_metadata() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_pool_metadata */ "wl"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_from_bytes */ "rl"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolparams_new */ "tl"](operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
      return PoolParams.__wrap(ret);
    }
  }]);

  return PoolParams;
}();
/**
*/

var PoolRegistration = /*#__PURE__*/function () {
  function PoolRegistration() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PoolRegistration);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PoolRegistration, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_poolregistration_free */ "ub"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolregistration_to_bytes */ "Fl"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolregistration_pool_params */ "El"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolregistration_from_bytes */ "Cl"](ptr0, len0);
      return PoolRegistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(pool_params) {
      _assertClass(pool_params, PoolParams);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolregistration_new */ "Dl"](pool_params.ptr);
      return PoolRegistration.__wrap(ret);
    }
  }]);

  return PoolRegistration;
}();
/**
*/

var PoolRetirement = /*#__PURE__*/function () {
  function PoolRetirement() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PoolRetirement);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PoolRetirement, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_poolretirement_free */ "vb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolretirement_to_bytes */ "Kl"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolretirement_pool_keyhash */ "Jl"](this.ptr);
      return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "epoch",
    value: function epoch() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolretirement_epoch */ "Gl"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolretirement_from_bytes */ "Hl"](ptr0, len0);
      return PoolRetirement.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(pool_keyhash, epoch) {
      _assertClass(pool_keyhash, Ed25519KeyHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* poolretirement_new */ "Il"](pool_keyhash.ptr, epoch);
      return PoolRetirement.__wrap(ret);
    }
  }]);

  return PoolRetirement;
}();
/**
*/

var PrivateKey = /*#__PURE__*/function () {
  function PrivateKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PrivateKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PrivateKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_privatekey_free */ "wb"](ptr);
    }
    /**
    * @returns {PublicKey}
    */

  }, {
    key: "to_public",
    value: function to_public() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_to_public */ "Tl"](this.ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_to_bech32 */ "Sl"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_as_bytes */ "Ll"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(message, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_sign */ "Rl"](this.ptr, ptr0, len0);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_generate_ed25519 */ "Pl"]();
      return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */

  }, {
    key: "generate_ed25519extended",
    value: function generate_ed25519extended() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_generate_ed25519extended */ "Ql"]();
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
      var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_from_bech32 */ "Ml"](ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
  }, {
    key: "from_extended_bytes",
    value: function from_extended_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_from_extended_bytes */ "Nl"](ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */

  }, {
    key: "from_normal_bytes",
    value: function from_normal_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* privatekey_from_normal_bytes */ "Ol"](ptr0, len0);
      return PrivateKey.__wrap(ret);
    }
  }]);

  return PrivateKey;
}();
/**
*/

var ProposedProtocolParameterUpdates = /*#__PURE__*/function () {
  function ProposedProtocolParameterUpdates() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProposedProtocolParameterUpdates);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProposedProtocolParameterUpdates, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_proposedprotocolparameterupdates_free */ "xb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_to_bytes */ "am"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_len */ "Yl"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_insert */ "Wl"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_get */ "Vl"](this.ptr, key.ptr);
      return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_keys */ "Xl"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_from_bytes */ "Ul"](ptr0, len0);
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* proposedprotocolparameterupdates_new */ "Zl"]();
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
  }]);

  return ProposedProtocolParameterUpdates;
}();
/**
*/

var ProtocolParamUpdate = /*#__PURE__*/function () {
  function ProtocolParamUpdate() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProtocolParamUpdate);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProtocolParamUpdate, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_protocolparamupdate_free */ "yb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_to_bytes */ "Um"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_minfee_a */ "Nm"](this.ptr, minfee_a.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "minfee_a",
    value: function minfee_a() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_minfee_a */ "rm"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_b
    */

  }, {
    key: "set_minfee_b",
    value: function set_minfee_b(minfee_b) {
      _assertClass(minfee_b, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_minfee_b */ "Om"](this.ptr, minfee_b.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "minfee_b",
    value: function minfee_b() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_minfee_b */ "sm"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_block_body_size
    */

  }, {
    key: "set_max_block_body_size",
    value: function set_max_block_body_size(max_block_body_size) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_block_body_size */ "Fm"](this.ptr, max_block_body_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_block_body_size",
    value: function max_block_body_size() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_block_body_size */ "jm"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {number} max_tx_size
    */

  }, {
    key: "set_max_tx_size",
    value: function set_max_tx_size(max_tx_size) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_tx_size */ "Km"](this.ptr, max_tx_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_tx_size",
    value: function max_tx_size() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_tx_size */ "om"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {number} max_block_header_size
    */

  }, {
    key: "set_max_block_header_size",
    value: function set_max_block_header_size(max_block_header_size) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_block_header_size */ "Hm"](this.ptr, max_block_header_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_block_header_size",
    value: function max_block_header_size() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_block_header_size */ "lm"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {BigNum} key_deposit
    */

  }, {
    key: "set_key_deposit",
    value: function set_key_deposit(key_deposit) {
      _assertClass(key_deposit, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_key_deposit */ "Em"](this.ptr, key_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "key_deposit",
    value: function key_deposit() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_key_deposit */ "im"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} pool_deposit
    */

  }, {
    key: "set_pool_deposit",
    value: function set_pool_deposit(pool_deposit) {
      _assertClass(pool_deposit, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_pool_deposit */ "Qm"](this.ptr, pool_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "pool_deposit",
    value: function pool_deposit() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_pool_deposit */ "vm"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_epoch
    */

  }, {
    key: "set_max_epoch",
    value: function set_max_epoch(max_epoch) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_epoch */ "Im"](this.ptr, max_epoch);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_epoch",
    value: function max_epoch() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_epoch */ "mm"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {number} n_opt
    */

  }, {
    key: "set_n_opt",
    value: function set_n_opt(n_opt) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_n_opt */ "Pm"](this.ptr, n_opt);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "n_opt",
    value: function n_opt() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_n_opt */ "tm"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {UnitInterval} pool_pledge_influence
    */

  }, {
    key: "set_pool_pledge_influence",
    value: function set_pool_pledge_influence(pool_pledge_influence) {
      _assertClass(pool_pledge_influence, UnitInterval);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_pool_pledge_influence */ "Rm"](this.ptr, pool_pledge_influence.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "pool_pledge_influence",
    value: function pool_pledge_influence() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_pool_pledge_influence */ "wm"](this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} expansion_rate
    */

  }, {
    key: "set_expansion_rate",
    value: function set_expansion_rate(expansion_rate) {
      _assertClass(expansion_rate, UnitInterval);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_expansion_rate */ "Cm"](this.ptr, expansion_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "expansion_rate",
    value: function expansion_rate() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_expansion_rate */ "fm"](this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} treasury_growth_rate
    */

  }, {
    key: "set_treasury_growth_rate",
    value: function set_treasury_growth_rate(treasury_growth_rate) {
      _assertClass(treasury_growth_rate, UnitInterval);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_treasury_growth_rate */ "Tm"](this.ptr, treasury_growth_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "treasury_growth_rate",
    value: function treasury_growth_rate() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_treasury_growth_rate */ "Vm"](this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} d
    */

  }, {
    key: "set_d",
    value: function set_d(d) {
      _assertClass(d, UnitInterval);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_d */ "Am"](this.ptr, d.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */

  }, {
    key: "d",
    value: function d() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_d */ "dm"](this.ptr);
      return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {Nonce} extra_entropy
    */

  }, {
    key: "set_extra_entropy",
    value: function set_extra_entropy(extra_entropy) {
      _assertClass(extra_entropy, Nonce);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_extra_entropy */ "Dm"](this.ptr, extra_entropy.ptr);
    }
    /**
    * @returns {Nonce | undefined}
    */

  }, {
    key: "extra_entropy",
    value: function extra_entropy() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_extra_entropy */ "gm"](this.ptr);
      return ret === 0 ? undefined : Nonce.__wrap(ret);
    }
    /**
    * @param {ProtocolVersions} protocol_version
    */

  }, {
    key: "set_protocol_version",
    value: function set_protocol_version(protocol_version) {
      _assertClass(protocol_version, ProtocolVersions);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_protocol_version */ "Sm"](this.ptr, protocol_version.ptr);
    }
    /**
    * @returns {ProtocolVersions | undefined}
    */

  }, {
    key: "protocol_version",
    value: function protocol_version() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_protocol_version */ "xm"](this.ptr);
      return ret === 0 ? undefined : ProtocolVersions.__wrap(ret);
    }
    /**
    * @param {BigNum} min_pool_cost
    */

  }, {
    key: "set_min_pool_cost",
    value: function set_min_pool_cost(min_pool_cost) {
      _assertClass(min_pool_cost, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_min_pool_cost */ "Mm"](this.ptr, min_pool_cost.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "min_pool_cost",
    value: function min_pool_cost() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_min_pool_cost */ "qm"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} ada_per_utxo_byte
    */

  }, {
    key: "set_ada_per_utxo_byte",
    value: function set_ada_per_utxo_byte(ada_per_utxo_byte) {
      _assertClass(ada_per_utxo_byte, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_ada_per_utxo_byte */ "ym"](this.ptr, ada_per_utxo_byte.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "ada_per_utxo_byte",
    value: function ada_per_utxo_byte() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_ada_per_utxo_byte */ "bm"](this.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {Costmdls} cost_models
    */

  }, {
    key: "set_cost_models",
    value: function set_cost_models(cost_models) {
      _assertClass(cost_models, Costmdls);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_cost_models */ "zm"](this.ptr, cost_models.ptr);
    }
    /**
    * @returns {Costmdls | undefined}
    */

  }, {
    key: "cost_models",
    value: function cost_models() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_cost_models */ "cm"](this.ptr);
      return ret === 0 ? undefined : Costmdls.__wrap(ret);
    }
    /**
    * @param {ExUnitPrices} execution_costs
    */

  }, {
    key: "set_execution_costs",
    value: function set_execution_costs(execution_costs) {
      _assertClass(execution_costs, ExUnitPrices);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_execution_costs */ "Bm"](this.ptr, execution_costs.ptr);
    }
    /**
    * @returns {ExUnitPrices | undefined}
    */

  }, {
    key: "execution_costs",
    value: function execution_costs() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_execution_costs */ "em"](this.ptr);
      return ret === 0 ? undefined : ExUnitPrices.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_tx_ex_units
    */

  }, {
    key: "set_max_tx_ex_units",
    value: function set_max_tx_ex_units(max_tx_ex_units) {
      _assertClass(max_tx_ex_units, ExUnits);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_tx_ex_units */ "Jm"](this.ptr, max_tx_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */

  }, {
    key: "max_tx_ex_units",
    value: function max_tx_ex_units() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_tx_ex_units */ "nm"](this.ptr);
      return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_block_ex_units
    */

  }, {
    key: "set_max_block_ex_units",
    value: function set_max_block_ex_units(max_block_ex_units) {
      _assertClass(max_block_ex_units, ExUnits);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_block_ex_units */ "Gm"](this.ptr, max_block_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */

  }, {
    key: "max_block_ex_units",
    value: function max_block_ex_units() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_block_ex_units */ "km"](this.ptr);
      return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {number} max_value_size
    */

  }, {
    key: "set_max_value_size",
    value: function set_max_value_size(max_value_size) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_set_max_value_size */ "Lm"](this.ptr, max_value_size);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "max_value_size",
    value: function max_value_size() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_max_value_size */ "pm"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_from_bytes */ "hm"](ptr0, len0);
      return ProtocolParamUpdate.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolparamupdate_new */ "um"]();
      return ProtocolParamUpdate.__wrap(ret);
    }
  }]);

  return ProtocolParamUpdate;
}();
/**
*/

var ProtocolVersion = /*#__PURE__*/function () {
  function ProtocolVersion() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProtocolVersion);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProtocolVersion, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_protocolversion_free */ "zb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversion_to_bytes */ "an"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversion_major */ "Xm"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "minor",
    value: function minor() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversion_minor */ "Ym"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversion_from_bytes */ "Wm"](ptr0, len0);
      return ProtocolVersion.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(major, minor) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversion_new */ "Zm"](major, minor);
      return ProtocolVersion.__wrap(ret);
    }
  }]);

  return ProtocolVersion;
}();
/**
*/

var ProtocolVersions = /*#__PURE__*/function () {
  function ProtocolVersions() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ProtocolVersions);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ProtocolVersions, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_protocolversions_free */ "Ab"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_to_bytes */ "gn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_len */ "en"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ProtocolVersion}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_get */ "dn"](this.ptr, index);
      return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {ProtocolVersion} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, ProtocolVersion);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_add */ "bn"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_from_bytes */ "cn"](ptr0, len0);
      return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersions}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* protocolversions_new */ "fn"]();
      return ProtocolVersions.__wrap(ret);
    }
  }]);

  return ProtocolVersions;
}();
/**
* ED25519 key used as public key
*/

var PublicKey = /*#__PURE__*/function () {
  function PublicKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PublicKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PublicKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_publickey_free */ "Bb"](ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_to_bech32 */ "ln"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_as_bytes */ "hn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;

      _assertClass(signature, Ed25519Signature);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_verify */ "mn"](this.ptr, ptr0, len0, signature.ptr);
      return ret !== 0;
    }
    /**
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "hash",
    value: function hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_hash */ "kn"](this.ptr);
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
      var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_from_bech32 */ "in"](ptr0, len0);
      return PublicKey.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickey_from_bytes */ "jn"](ptr0, len0);
      return PublicKey.__wrap(ret);
    }
  }]);

  return PublicKey;
}();
/**
*/

var PublicKeys = /*#__PURE__*/function () {
  /**
  */
  function PublicKeys() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PublicKeys);

    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickeys_new */ "pn"]();
    return PublicKeys.__wrap(ret);
  }
  /**
  * @returns {number}
  */


  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PublicKeys, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_publickeys_free */ "Cb"](ptr);
    }
  }, {
    key: "size",
    value: function size() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickeys_size */ "qn"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PublicKey}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickeys_get */ "on"](this.ptr, index);
      return PublicKey.__wrap(ret);
    }
    /**
    * @param {PublicKey} key
    */

  }, {
    key: "add",
    value: function add(key) {
      _assertClass(key, PublicKey);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* publickeys_add */ "nn"](this.ptr, key.ptr);
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
/**
*/

var Redeemer = /*#__PURE__*/function () {
  function Redeemer() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Redeemer);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Redeemer, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_redeemer_free */ "Db"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_to_bytes */ "xn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_tag */ "wn"](this.ptr);
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "index",
    value: function index() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_index */ "un"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {PlutusData}
    */

  }, {
    key: "data",
    value: function data() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_data */ "rn"](this.ptr);
      return PlutusData.__wrap(ret);
    }
    /**
    * @returns {ExUnits}
    */

  }, {
    key: "ex_units",
    value: function ex_units() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_ex_units */ "sn"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_from_bytes */ "tn"](ptr0, len0);
      return Redeemer.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(tag, index, data, ex_units) {
      _assertClass(tag, RedeemerTag);

      _assertClass(index, BigNum);

      _assertClass(data, PlutusData);

      _assertClass(ex_units, ExUnits);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemer_new */ "vn"](tag.ptr, index.ptr, data.ptr, ex_units.ptr);
      return Redeemer.__wrap(ret);
    }
  }]);

  return Redeemer;
}();
/**
*/

var RedeemerTag = /*#__PURE__*/function () {
  function RedeemerTag() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RedeemerTag);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RedeemerTag, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_redeemertag_free */ "Fb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_to_bytes */ "Kn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_kind */ "Fn"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_from_bytes */ "En"](ptr0, len0);
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_spend",
    value: function new_spend() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_new_spend */ "Jn"]();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_mint",
    value: function new_mint() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_new_mint */ "Hn"]();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_cert",
    value: function new_cert() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_new_cert */ "Gn"]();
      return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */

  }, {
    key: "new_reward",
    value: function new_reward() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemertag_new_reward */ "In"]();
      return RedeemerTag.__wrap(ret);
    }
  }]);

  return RedeemerTag;
}();
/**
*/

var Redeemers = /*#__PURE__*/function () {
  function Redeemers() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Redeemers);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Redeemers, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_redeemers_free */ "Eb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_to_bytes */ "Dn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_len */ "Bn"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Redeemer}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_get */ "An"](this.ptr, index);
      return Redeemer.__wrap(ret);
    }
    /**
    * @param {Redeemer} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Redeemer);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_add */ "yn"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_from_bytes */ "zn"](ptr0, len0);
      return Redeemers.__wrap(ret);
    }
    /**
    * @returns {Redeemers}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* redeemers_new */ "Cn"]();
      return Redeemers.__wrap(ret);
    }
  }]);

  return Redeemers;
}();
/**
*/

var Relay = /*#__PURE__*/function () {
  function Relay() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Relay);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Relay, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_relay_free */ "Gb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_to_bytes */ "Tn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_kind */ "Pn"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {SingleHostAddr | undefined}
    */

  }, {
    key: "as_single_host_addr",
    value: function as_single_host_addr() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_as_single_host_addr */ "Mn"](this.ptr);
      return ret === 0 ? undefined : SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {SingleHostName | undefined}
    */

  }, {
    key: "as_single_host_name",
    value: function as_single_host_name() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_as_single_host_name */ "Nn"](this.ptr);
      return ret === 0 ? undefined : SingleHostName.__wrap(ret);
    }
    /**
    * @returns {MultiHostName | undefined}
    */

  }, {
    key: "as_multi_host_name",
    value: function as_multi_host_name() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_as_multi_host_name */ "Ln"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_from_bytes */ "On"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_new_single_host_addr */ "Rn"](single_host_addr.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_new_single_host_name */ "Sn"](single_host_name.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relay_new_multi_host_name */ "Qn"](multi_host_name.ptr);
      return Relay.__wrap(ret);
    }
  }]);

  return Relay;
}();
/**
*/

var Relays = /*#__PURE__*/function () {
  function Relays() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Relays);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Relays, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_relays_free */ "Hb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_to_bytes */ "Zn"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_len */ "Xn"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Relay}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_get */ "Wn"](this.ptr, index);
      return Relay.__wrap(ret);
    }
    /**
    * @param {Relay} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Relay);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_add */ "Un"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_from_bytes */ "Vn"](ptr0, len0);
      return Relays.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* relays_new */ "Yn"]();
      return Relays.__wrap(ret);
    }
  }]);

  return Relays;
}();
/**
*/

var RewardAddress = /*#__PURE__*/function () {
  function RewardAddress() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RewardAddress);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RewardAddress, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_rewardaddress_free */ "Ib"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddress_payment_cred */ "co"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */

  }, {
    key: "to_address",
    value: function to_address() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddress_to_address */ "do"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddress_new */ "bo"](network, payment.ptr);
      return RewardAddress.__wrap(ret);
    }
  }, {
    key: "from_address",
    value: function from_address(addr) {
      _assertClass(addr, Address);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddress_from_address */ "ao"](addr.ptr);
      return ret === 0 ? undefined : RewardAddress.__wrap(ret);
    }
  }]);

  return RewardAddress;
}();
/**
*/

var RewardAddresses = /*#__PURE__*/function () {
  function RewardAddresses() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RewardAddresses);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RewardAddresses, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_rewardaddresses_free */ "Jb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_to_bytes */ "jo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_len */ "ho"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {RewardAddress}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_get */ "go"](this.ptr, index);
      return RewardAddress.__wrap(ret);
    }
    /**
    * @param {RewardAddress} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, RewardAddress);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_add */ "eo"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_from_bytes */ "fo"](ptr0, len0);
      return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* rewardaddresses_new */ "io"]();
      return RewardAddresses.__wrap(ret);
    }
  }]);

  return RewardAddresses;
}();
/**
*/

var ScriptAll = /*#__PURE__*/function () {
  function ScriptAll() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptAll);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptAll, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scriptall_free */ "Kb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptall_to_bytes */ "no"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptall_native_scripts */ "lo"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptall_from_bytes */ "ko"](ptr0, len0);
      return ScriptAll.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptall_new */ "mo"](native_scripts.ptr);
      return ScriptAll.__wrap(ret);
    }
  }]);

  return ScriptAll;
}();
/**
*/

var ScriptAny = /*#__PURE__*/function () {
  function ScriptAny() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptAny);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptAny, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scriptany_free */ "Lb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptany_to_bytes */ "ro"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptany_native_scripts */ "po"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptany_from_bytes */ "oo"](ptr0, len0);
      return ScriptAny.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptany_new */ "qo"](native_scripts.ptr);
      return ScriptAny.__wrap(ret);
    }
  }]);

  return ScriptAny;
}();
/**
*/

var ScriptDataHash = /*#__PURE__*/function () {
  function ScriptDataHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptDataHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptDataHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scriptdatahash_free */ "Mb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptdatahash_to_bytes */ "vo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptdatahash_to_bech32 */ "uo"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptdatahash_from_bech32 */ "so"](ptr0, len0);
      return ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptDataHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptdatahash_from_bytes */ "to"](ptr0, len0);
      return ScriptDataHash.__wrap(ret);
    }
  }]);

  return ScriptDataHash;
}();
/**
*/

var ScriptHash = /*#__PURE__*/function () {
  function ScriptHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scripthash_free */ "Nb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthash_to_bytes */ "zo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthash_to_bech32 */ "yo"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthash_from_bech32 */ "wo"](ptr0, len0);
      return ScriptHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthash_from_bytes */ "xo"](ptr0, len0);
      return ScriptHash.__wrap(ret);
    }
  }]);

  return ScriptHash;
}();
/**
*/

var ScriptHashes = /*#__PURE__*/function () {
  function ScriptHashes() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptHashes);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptHashes, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scripthashes_free */ "Ob"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_to_bytes */ "Fo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_len */ "Do"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ScriptHash}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_get */ "Co"](this.ptr, index);
      return ScriptHash.__wrap(ret);
    }
    /**
    * @param {ScriptHash} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, ScriptHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_add */ "Ao"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_from_bytes */ "Bo"](ptr0, len0);
      return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scripthashes_new */ "Eo"]();
      return ScriptHashes.__wrap(ret);
    }
  }]);

  return ScriptHashes;
}();
/**
*/

var ScriptNOfK = /*#__PURE__*/function () {
  function ScriptNOfK() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptNOfK);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptNOfK, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scriptnofk_free */ "Pb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptnofk_to_bytes */ "Ko"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptnofk_n */ "Ho"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {NativeScripts}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptnofk_native_scripts */ "Io"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptnofk_from_bytes */ "Go"](ptr0, len0);
      return ScriptNOfK.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(n, native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptnofk_new */ "Jo"](n, native_scripts.ptr);
      return ScriptNOfK.__wrap(ret);
    }
  }]);

  return ScriptNOfK;
}();
/**
*/

var ScriptPubkey = /*#__PURE__*/function () {
  function ScriptPubkey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ScriptPubkey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ScriptPubkey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_scriptpubkey_free */ "Qb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptpubkey_to_bytes */ "Oo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptpubkey_addr_keyhash */ "Lo"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptpubkey_from_bytes */ "Mo"](ptr0, len0);
      return ScriptPubkey.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(addr_keyhash) {
      _assertClass(addr_keyhash, Ed25519KeyHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* scriptpubkey_new */ "No"](addr_keyhash.ptr);
      return ScriptPubkey.__wrap(ret);
    }
  }]);

  return ScriptPubkey;
}();
/**
*/

var SingleHostAddr = /*#__PURE__*/function () {
  function SingleHostAddr() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SingleHostAddr);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SingleHostAddr, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_singlehostaddr_free */ "Rb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_to_bytes */ "Uo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_port */ "To"](this.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {Ipv4 | undefined}
    */

  }, {
    key: "ipv4",
    value: function ipv4() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_ipv4 */ "Qo"](this.ptr);
      return ret === 0 ? undefined : Ipv4.__wrap(ret);
    }
    /**
    * @returns {Ipv6 | undefined}
    */

  }, {
    key: "ipv6",
    value: function ipv6() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_ipv6 */ "Ro"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_from_bytes */ "Po"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostaddr_new */ "So"](isLikeNone(port) ? 0xFFFFFF : port, ptr0, ptr1);
      return SingleHostAddr.__wrap(ret);
    }
  }]);

  return SingleHostAddr;
}();
/**
*/

var SingleHostName = /*#__PURE__*/function () {
  function SingleHostName() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SingleHostName);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SingleHostName, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_singlehostname_free */ "Sb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostname_to_bytes */ "Zo"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostname_port */ "Yo"](this.ptr);
      return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {DNSRecordAorAAAA}
    */

  }, {
    key: "dns_name",
    value: function dns_name() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostname_dns_name */ "Vo"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostname_from_bytes */ "Wo"](ptr0, len0);
      return SingleHostName.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(port, dns_name) {
      _assertClass(dns_name, DNSRecordAorAAAA);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* singlehostname_new */ "Xo"](isLikeNone(port) ? 0xFFFFFF : port, dns_name.ptr);
      return SingleHostName.__wrap(ret);
    }
  }]);

  return SingleHostName;
}();
/**
*/

var StakeCredential = /*#__PURE__*/function () {
  function StakeCredential() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StakeCredential);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StakeCredential, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_stakecredential_free */ "Tb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_to_keyhash */ "fp"](this.ptr);
      return ret === 0 ? undefined : Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {ScriptHash | undefined}
    */

  }, {
    key: "to_scripthash",
    value: function to_scripthash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_to_scripthash */ "gp"](this.ptr);
      return ret === 0 ? undefined : ScriptHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "kind",
    value: function kind() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_kind */ "dp"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_to_bytes */ "ep"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_from_keyhash */ "bp"](hash.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_from_scripthash */ "cp"](hash.ptr);
      return StakeCredential.__wrap(ret);
    }
  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredential_from_bytes */ "ap"](ptr0, len0);
      return StakeCredential.__wrap(ret);
    }
  }]);

  return StakeCredential;
}();
/**
*/

var StakeCredentials = /*#__PURE__*/function () {
  function StakeCredentials() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StakeCredentials);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StakeCredentials, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_stakecredentials_free */ "Ub"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_to_bytes */ "mp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_len */ "kp"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {StakeCredential}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_get */ "jp"](this.ptr, index);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, StakeCredential);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_add */ "hp"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_from_bytes */ "ip"](ptr0, len0);
      return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakecredentials_new */ "lp"]();
      return StakeCredentials.__wrap(ret);
    }
  }]);

  return StakeCredentials;
}();
/**
*/

var StakeDelegation = /*#__PURE__*/function () {
  function StakeDelegation() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StakeDelegation);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StakeDelegation, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_stakedelegation_free */ "Vb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakedelegation_to_bytes */ "rp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakedelegation_stake_credential */ "qp"](this.ptr);
      return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */

  }, {
    key: "pool_keyhash",
    value: function pool_keyhash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakedelegation_pool_keyhash */ "pp"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakedelegation_from_bytes */ "np"](ptr0, len0);
      return StakeDelegation.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential, pool_keyhash) {
      _assertClass(stake_credential, StakeCredential);

      _assertClass(pool_keyhash, Ed25519KeyHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakedelegation_new */ "op"](stake_credential.ptr, pool_keyhash.ptr);
      return StakeDelegation.__wrap(ret);
    }
  }]);

  return StakeDelegation;
}();
/**
*/

var StakeDeregistration = /*#__PURE__*/function () {
  function StakeDeregistration() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StakeDeregistration);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StakeDeregistration, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_stakederegistration_free */ "Wb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakederegistration_to_bytes */ "vp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakederegistration_stake_credential */ "up"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakederegistration_from_bytes */ "sp"](ptr0, len0);
      return StakeDeregistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential) {
      _assertClass(stake_credential, StakeCredential);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakederegistration_new */ "tp"](stake_credential.ptr);
      return StakeDeregistration.__wrap(ret);
    }
  }]);

  return StakeDeregistration;
}();
/**
*/

var StakeRegistration = /*#__PURE__*/function () {
  function StakeRegistration() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, StakeRegistration);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(StakeRegistration, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_stakeregistration_free */ "Xb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakeregistration_to_bytes */ "zp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakeregistration_stake_credential */ "yp"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakeregistration_from_bytes */ "wp"](ptr0, len0);
      return StakeRegistration.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(stake_credential) {
      _assertClass(stake_credential, StakeCredential);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* stakeregistration_new */ "xp"](stake_credential.ptr);
      return StakeRegistration.__wrap(ret);
    }
  }]);

  return StakeRegistration;
}();
/**
*/

var Strings = /*#__PURE__*/function () {
  function Strings() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Strings);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Strings, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_strings_free */ "Yb"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* strings_len */ "Cp"](this.ptr);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* strings_get */ "Bp"](retptr, this.ptr, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
      }
    }
    /**
    * @param {string} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      var ptr0 = passStringToWasm0(elem, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* strings_add */ "Ap"](this.ptr, ptr0, len0);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* strings_new */ "Dp"]();
      return Strings.__wrap(ret);
    }
  }]);

  return Strings;
}();
/**
*/

var TimelockExpiry = /*#__PURE__*/function () {
  function TimelockExpiry() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TimelockExpiry);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TimelockExpiry, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_timelockexpiry_free */ "Zb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockexpiry_to_bytes */ "Hp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockexpiry_slot */ "Gp"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockexpiry_from_bytes */ "Ep"](ptr0, len0);
      return TimelockExpiry.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(slot) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockexpiry_new */ "Fp"](slot);
      return TimelockExpiry.__wrap(ret);
    }
  }]);

  return TimelockExpiry;
}();
/**
*/

var TimelockStart = /*#__PURE__*/function () {
  function TimelockStart() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TimelockStart);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TimelockStart, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_timelockstart_free */ "ac"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockstart_to_bytes */ "Lp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockstart_slot */ "Kp"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockstart_from_bytes */ "Ip"](ptr0, len0);
      return TimelockStart.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(slot) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* timelockstart_new */ "Jp"](slot);
      return TimelockStart.__wrap(ret);
    }
  }]);

  return TimelockStart;
}();
/**
*/

var Transaction = /*#__PURE__*/function () {
  function Transaction() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Transaction);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Transaction, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transaction_free */ "bc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_to_bytes */ "Sp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_body */ "Np"](this.ptr);
      return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */

  }, {
    key: "witness_set",
    value: function witness_set() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_witness_set */ "Tp"](this.ptr);
      return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */

  }, {
    key: "is_valid",
    value: function is_valid() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_is_valid */ "Pp"](this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {AuxiliaryData | undefined}
    */

  }, {
    key: "auxiliary_data",
    value: function auxiliary_data() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_auxiliary_data */ "Mp"](this.ptr);
      return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {boolean} valid
    */

  }, {
    key: "set_is_valid",
    value: function set_is_valid(valid) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_set_is_valid */ "Rp"](this.ptr, valid);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_from_bytes */ "Op"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transaction_new */ "Qp"](body.ptr, witness_set.ptr, ptr0);
      return Transaction.__wrap(ret);
    }
  }]);

  return Transaction;
}();
/**
*/

var TransactionBodies = /*#__PURE__*/function () {
  function TransactionBodies() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionBodies);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionBodies, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionbodies_free */ "cc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_to_bytes */ "Zp"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_len */ "Xp"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionBody}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_get */ "Wp"](this.ptr, index);
      return TransactionBody.__wrap(ret);
    }
    /**
    * @param {TransactionBody} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionBody);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_add */ "Up"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_from_bytes */ "Vp"](ptr0, len0);
      return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbodies_new */ "Yp"]();
      return TransactionBodies.__wrap(ret);
    }
  }]);

  return TransactionBodies;
}();
/**
*/

var TransactionBody = /*#__PURE__*/function () {
  function TransactionBody() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionBody);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionBody, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionbody_free */ "dc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_to_bytes */ "wq"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_inputs */ "fq"](this.ptr);
      return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */

  }, {
    key: "outputs",
    value: function outputs() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_outputs */ "jq"](this.ptr);
      return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "fee",
    value: function fee() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_fee */ "dq"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "ttl",
    value: function ttl() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_ttl */ "xq"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {Certificates} certs
    */

  }, {
    key: "set_certs",
    value: function set_certs(certs) {
      _assertClass(certs, Certificates);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_certs */ "nq"](this.ptr, certs.ptr);
    }
    /**
    * @returns {Certificates | undefined}
    */

  }, {
    key: "certs",
    value: function certs() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_certs */ "bq"](this.ptr);
      return ret === 0 ? undefined : Certificates.__wrap(ret);
    }
    /**
    * @param {Withdrawals} withdrawals
    */

  }, {
    key: "set_withdrawals",
    value: function set_withdrawals(withdrawals) {
      _assertClass(withdrawals, Withdrawals);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_withdrawals */ "vq"](this.ptr, withdrawals.ptr);
    }
    /**
    * @returns {Withdrawals | undefined}
    */

  }, {
    key: "withdrawals",
    value: function withdrawals() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_withdrawals */ "Aq"](this.ptr);
      return ret === 0 ? undefined : Withdrawals.__wrap(ret);
    }
    /**
    * @param {Update} update
    */

  }, {
    key: "set_update",
    value: function set_update(update) {
      _assertClass(update, Update);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_update */ "tq"](this.ptr, update.ptr);
    }
    /**
    * @returns {Update | undefined}
    */

  }, {
    key: "update",
    value: function update() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_update */ "yq"](this.ptr);
      return ret === 0 ? undefined : Update.__wrap(ret);
    }
    /**
    * @param {AuxiliaryDataHash} auxiliary_data_hash
    */

  }, {
    key: "set_auxiliary_data_hash",
    value: function set_auxiliary_data_hash(auxiliary_data_hash) {
      _assertClass(auxiliary_data_hash, AuxiliaryDataHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_auxiliary_data_hash */ "mq"](this.ptr, auxiliary_data_hash.ptr);
    }
    /**
    * @returns {AuxiliaryDataHash | undefined}
    */

  }, {
    key: "auxiliary_data_hash",
    value: function auxiliary_data_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_auxiliary_data_hash */ "aq"](this.ptr);
      return ret === 0 ? undefined : AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {number} validity_start_interval
    */

  }, {
    key: "set_validity_start_interval",
    value: function set_validity_start_interval(validity_start_interval) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_validity_start_interval */ "uq"](this.ptr, validity_start_interval);
    }
    /**
    * @returns {number | undefined}
    */

  }, {
    key: "validity_start_interval",
    value: function validity_start_interval() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_validity_start_interval */ "zq"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @param {Mint} mint
    */

  }, {
    key: "set_mint",
    value: function set_mint(mint) {
      _assertClass(mint, Mint);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_mint */ "pq"](this.ptr, mint.ptr);
    }
    /**
    * @returns {Mint | undefined}
    */

  }, {
    key: "multiassets",
    value: function multiassets() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_multiassets */ "gq"](this.ptr);
      return ret === 0 ? undefined : Mint.__wrap(ret);
    }
    /**
    * @param {ScriptDataHash} script_data_hash
    */

  }, {
    key: "set_script_data_hash",
    value: function set_script_data_hash(script_data_hash) {
      _assertClass(script_data_hash, ScriptDataHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_script_data_hash */ "sq"](this.ptr, script_data_hash.ptr);
    }
    /**
    * @returns {ScriptDataHash | undefined}
    */

  }, {
    key: "script_data_hash",
    value: function script_data_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_script_data_hash */ "lq"](this.ptr);
      return ret === 0 ? undefined : ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} collateral
    */

  }, {
    key: "set_collateral",
    value: function set_collateral(collateral) {
      _assertClass(collateral, TransactionInputs);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_collateral */ "oq"](this.ptr, collateral.ptr);
    }
    /**
    * @returns {TransactionInputs | undefined}
    */

  }, {
    key: "collateral",
    value: function collateral() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_collateral */ "cq"](this.ptr);
      return ret === 0 ? undefined : TransactionInputs.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHashes} required_signers
    */

  }, {
    key: "set_required_signers",
    value: function set_required_signers(required_signers) {
      _assertClass(required_signers, Ed25519KeyHashes);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_required_signers */ "rq"](this.ptr, required_signers.ptr);
    }
    /**
    * @returns {Ed25519KeyHashes | undefined}
    */

  }, {
    key: "required_signers",
    value: function required_signers() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_required_signers */ "kq"](this.ptr);
      return ret === 0 ? undefined : Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @param {NetworkId} network_id
    */

  }, {
    key: "set_network_id",
    value: function set_network_id(network_id) {
      _assertClass(network_id, NetworkId);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_set_network_id */ "qq"](this.ptr, network_id.ptr);
    }
    /**
    * @returns {NetworkId | undefined}
    */

  }, {
    key: "network_id",
    value: function network_id() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_network_id */ "hq"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_from_bytes */ "eq"](ptr0, len0);
      return TransactionBody.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(inputs, outputs, fee, ttl) {
      _assertClass(inputs, TransactionInputs);

      _assertClass(outputs, TransactionOutputs);

      _assertClass(fee, BigNum);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbody_new */ "iq"](inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
      return TransactionBody.__wrap(ret);
    }
  }]);

  return TransactionBody;
}();
/**
*/

var TransactionBuilder = /*#__PURE__*/function () {
  function TransactionBuilder() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionBuilder);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionBuilder, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionbuilder_free */ "ec"](ptr);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_key_input */ "Eq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_script_input */ "Gq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_bootstrap_input */ "Bq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_input */ "Dq"](this.ptr, address.ptr, input.ptr, amount.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_fee_for_input */ "Iq"](this.ptr, address.ptr, input.ptr, amount.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} output
    */

  }, {
    key: "add_output",
    value: function add_output(output) {
      _assertClass(output, TransactionOutput);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_output */ "Fq"](this.ptr, output.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_fee_for_output */ "Jq"](this.ptr, output.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} fee
    */

  }, {
    key: "set_fee",
    value: function set_fee(fee) {
      _assertClass(fee, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_fee */ "Vq"](this.ptr, fee.ptr);
    }
    /**
    * @param {number} ttl
    */

  }, {
    key: "set_ttl",
    value: function set_ttl(ttl) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_ttl */ "Xq"](this.ptr, ttl);
    }
    /**
    * @param {number} validity_start_interval
    */

  }, {
    key: "set_validity_start_interval",
    value: function set_validity_start_interval(validity_start_interval) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_validity_start_interval */ "Yq"](this.ptr, validity_start_interval);
    }
    /**
    * @param {Certificates} certs
    */

  }, {
    key: "set_certs",
    value: function set_certs(certs) {
      _assertClass(certs, Certificates);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_certs */ "Uq"](this.ptr, certs.ptr);
    }
    /**
    * @param {Withdrawals} withdrawals
    */

  }, {
    key: "set_withdrawals",
    value: function set_withdrawals(withdrawals) {
      _assertClass(withdrawals, Withdrawals);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_withdrawals */ "Zq"](this.ptr, withdrawals.ptr);
    }
    /**
    * @param {AuxiliaryData} auxiliary_data
    */

  }, {
    key: "set_auxiliary_data",
    value: function set_auxiliary_data(auxiliary_data) {
      _assertClass(auxiliary_data, AuxiliaryData);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_auxiliary_data */ "Tq"](this.ptr, auxiliary_data.ptr);
    }
    /**
    * @param {boolean} prefer_pure_change
    */

  }, {
    key: "set_prefer_pure_change",
    value: function set_prefer_pure_change(prefer_pure_change) {
      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_set_prefer_pure_change */ "Wq"](this.ptr, prefer_pure_change);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_get_explicit_input */ "Mq"](this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * withdrawals and refunds
    * @returns {Value}
    */

  }, {
    key: "get_implicit_input",
    value: function get_implicit_input() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_get_implicit_input */ "Pq"](this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * does not include fee
    * @returns {Value}
    */

  }, {
    key: "get_explicit_output",
    value: function get_explicit_output() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_get_explicit_output */ "Nq"](this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "get_deposit",
    value: function get_deposit() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_get_deposit */ "Lq"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */

  }, {
    key: "get_fee_if_set",
    value: function get_fee_if_set() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_get_fee_if_set */ "Oq"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_add_change_if_needed */ "Cq"](this.ptr, address.ptr);
      return ret !== 0;
    }
    /**
    * @returns {number}
    */

  }, {
    key: "full_size",
    value: function full_size() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_full_size */ "Kq"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {Uint32Array}
    */

  }, {
    key: "output_sizes",
    value: function output_sizes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_output_sizes */ "Sq"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {TransactionBody}
    */

  }, {
    key: "build",
    value: function build() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_build */ "Hq"](this.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_min_fee */ "Qq"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionbuilder_new */ "Rq"](linear_fee.ptr, pool_deposit.ptr, key_deposit.ptr, max_value_size, max_tx_size, coins_per_utxo_word.ptr);
      return TransactionBuilder.__wrap(ret);
    }
  }]);

  return TransactionBuilder;
}();
/**
*/

var TransactionHash = /*#__PURE__*/function () {
  function TransactionHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionhash_free */ "fc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionhash_to_bytes */ "dr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionhash_to_bech32 */ "cr"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionhash_from_bech32 */ "ar"](ptr0, len0);
      return TransactionHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionhash_from_bytes */ "br"](ptr0, len0);
      return TransactionHash.__wrap(ret);
    }
  }]);

  return TransactionHash;
}();
/**
*/

var TransactionInput = /*#__PURE__*/function () {
  function TransactionInput() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionInput);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionInput, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactioninput_free */ "gc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninput_to_bytes */ "hr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninput_transaction_id */ "ir"](this.ptr);
      return TransactionHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "index",
    value: function index() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninput_index */ "fr"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninput_from_bytes */ "er"](ptr0, len0);
      return TransactionInput.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(transaction_id, index) {
      _assertClass(transaction_id, TransactionHash);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninput_new */ "gr"](transaction_id.ptr, index);
      return TransactionInput.__wrap(ret);
    }
  }]);

  return TransactionInput;
}();
/**
*/

var TransactionInputs = /*#__PURE__*/function () {
  function TransactionInputs() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionInputs);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionInputs, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactioninputs_free */ "hc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_to_bytes */ "or"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_len */ "mr"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionInput}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_get */ "lr"](this.ptr, index);
      return TransactionInput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionInput);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_add */ "jr"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_from_bytes */ "kr"](ptr0, len0);
      return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactioninputs_new */ "nr"]();
      return TransactionInputs.__wrap(ret);
    }
  }]);

  return TransactionInputs;
}();
/**
*/

var TransactionMetadatum = /*#__PURE__*/function () {
  function TransactionMetadatum() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionMetadatum);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionMetadatum, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionmetadatum_free */ "ic"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_to_bytes */ "Br"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_kind */ "vr"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @returns {MetadataMap}
    */

  }, {
    key: "as_map",
    value: function as_map() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_as_map */ "sr"](this.ptr);
      return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */

  }, {
    key: "as_list",
    value: function as_list() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_as_list */ "rr"](this.ptr);
      return MetadataList.__wrap(ret);
    }
    /**
    * @returns {Int}
    */

  }, {
    key: "as_int",
    value: function as_int() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_as_int */ "qr"](this.ptr);
      return Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "as_bytes",
    value: function as_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_as_bytes */ "pr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {string}
    */

  }, {
    key: "as_text",
    value: function as_text() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_as_text */ "tr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_from_bytes */ "ur"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_new_map */ "zr"](map.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_new_list */ "yr"](list.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_new_int */ "xr"](int.ptr);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_bytes",
    value: function new_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_new_bytes */ "wr"](ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {TransactionMetadatum}
    */

  }, {
    key: "new_text",
    value: function new_text(text) {
      var ptr0 = passStringToWasm0(text, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatum_new_text */ "Ar"](ptr0, len0);
      return TransactionMetadatum.__wrap(ret);
    }
  }]);

  return TransactionMetadatum;
}();
/**
*/

var TransactionMetadatumLabels = /*#__PURE__*/function () {
  function TransactionMetadatumLabels() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionMetadatumLabels);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionMetadatumLabels, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionmetadatumlabels_free */ "jc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_to_bytes */ "Hr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_len */ "Fr"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BigNum}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_get */ "Er"](this.ptr, index);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_add */ "Cr"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_from_bytes */ "Dr"](ptr0, len0);
      return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionmetadatumlabels_new */ "Gr"]();
      return TransactionMetadatumLabels.__wrap(ret);
    }
  }]);

  return TransactionMetadatumLabels;
}();
/**
*/

var TransactionOutput = /*#__PURE__*/function () {
  function TransactionOutput() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionOutput);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionOutput, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionoutput_free */ "kc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_to_bytes */ "Or"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_address */ "Ir"](this.ptr);
      return Address.__wrap(ret);
    }
    /**
    * @returns {Value}
    */

  }, {
    key: "amount",
    value: function amount() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_amount */ "Jr"](this.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {DataHash | undefined}
    */

  }, {
    key: "data_hash",
    value: function data_hash() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_data_hash */ "Kr"](this.ptr);
      return ret === 0 ? undefined : DataHash.__wrap(ret);
    }
    /**
    * @param {DataHash} data_hash
    */

  }, {
    key: "set_data_hash",
    value: function set_data_hash(data_hash) {
      _assertClass(data_hash, DataHash);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_set_data_hash */ "Nr"](this.ptr, data_hash.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_from_bytes */ "Lr"](ptr0, len0);
      return TransactionOutput.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(address, amount) {
      _assertClass(address, Address);

      _assertClass(amount, Value);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutput_new */ "Mr"](address.ptr, amount.ptr);
      return TransactionOutput.__wrap(ret);
    }
  }]);

  return TransactionOutput;
}();
/**
*/

var TransactionOutputs = /*#__PURE__*/function () {
  function TransactionOutputs() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionOutputs);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionOutputs, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionoutputs_free */ "lc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_to_bytes */ "Ur"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_len */ "Sr"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionOutput}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_get */ "Rr"](this.ptr, index);
      return TransactionOutput.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionOutput);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_add */ "Pr"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_from_bytes */ "Qr"](ptr0, len0);
      return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionoutputs_new */ "Tr"]();
      return TransactionOutputs.__wrap(ret);
    }
  }]);

  return TransactionOutputs;
}();
/**
*/

var TransactionUnspentOutput = /*#__PURE__*/function () {
  function TransactionUnspentOutput() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionUnspentOutput);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionUnspentOutput, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionunspentoutput_free */ "mc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionunspentoutput_to_bytes */ "Zr"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionunspentoutput_input */ "Wr"](this.ptr);
      return TransactionInput.__wrap(ret);
    }
    /**
    * @returns {TransactionOutput}
    */

  }, {
    key: "output",
    value: function output() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionunspentoutput_output */ "Yr"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionunspentoutput_from_bytes */ "Vr"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionunspentoutput_new */ "Xr"](input.ptr, output.ptr);
      return TransactionUnspentOutput.__wrap(ret);
    }
  }]);

  return TransactionUnspentOutput;
}();
/**
*/

var TransactionWitnessSet = /*#__PURE__*/function () {
  function TransactionWitnessSet() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionWitnessSet);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionWitnessSet, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionwitnessset_free */ "nc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_to_bytes */ "ns"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_vkeys */ "ms"](this.ptr, vkeys.ptr);
    }
    /**
    * @returns {Vkeywitnesses | undefined}
    */

  }, {
    key: "vkeys",
    value: function vkeys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_vkeys */ "os"](this.ptr);
      return ret === 0 ? undefined : Vkeywitnesses.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */

  }, {
    key: "set_native_scripts",
    value: function set_native_scripts(native_scripts) {
      _assertClass(native_scripts, NativeScripts);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_native_scripts */ "is"](this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */

  }, {
    key: "native_scripts",
    value: function native_scripts() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_native_scripts */ "cs"](this.ptr);
      return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {BootstrapWitnesses} bootstraps
    */

  }, {
    key: "set_bootstraps",
    value: function set_bootstraps(bootstraps) {
      _assertClass(bootstraps, BootstrapWitnesses);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_bootstraps */ "hs"](this.ptr, bootstraps.ptr);
    }
    /**
    * @returns {BootstrapWitnesses | undefined}
    */

  }, {
    key: "bootstraps",
    value: function bootstraps() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_bootstraps */ "as"](this.ptr);
      return ret === 0 ? undefined : BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */

  }, {
    key: "set_plutus_scripts",
    value: function set_plutus_scripts(plutus_scripts) {
      _assertClass(plutus_scripts, PlutusScripts);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_plutus_scripts */ "ks"](this.ptr, plutus_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */

  }, {
    key: "plutus_scripts",
    value: function plutus_scripts() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_plutus_scripts */ "fs"](this.ptr);
      return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusList} plutus_data
    */

  }, {
    key: "set_plutus_data",
    value: function set_plutus_data(plutus_data) {
      _assertClass(plutus_data, PlutusList);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_plutus_data */ "js"](this.ptr, plutus_data.ptr);
    }
    /**
    * @returns {PlutusList | undefined}
    */

  }, {
    key: "plutus_data",
    value: function plutus_data() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_plutus_data */ "es"](this.ptr);
      return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @param {Redeemers} redeemers
    */

  }, {
    key: "set_redeemers",
    value: function set_redeemers(redeemers) {
      _assertClass(redeemers, Redeemers);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_set_redeemers */ "ls"](this.ptr, redeemers.ptr);
    }
    /**
    * @returns {Redeemers | undefined}
    */

  }, {
    key: "redeemers",
    value: function redeemers() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_redeemers */ "gs"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_from_bytes */ "bs"](ptr0, len0);
      return TransactionWitnessSet.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnessset_new */ "ds"]();
      return TransactionWitnessSet.__wrap(ret);
    }
  }]);

  return TransactionWitnessSet;
}();
/**
*/

var TransactionWitnessSets = /*#__PURE__*/function () {
  function TransactionWitnessSets() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TransactionWitnessSets);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TransactionWitnessSets, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_transactionwitnesssets_free */ "oc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_to_bytes */ "us"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_len */ "ss"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionWitnessSet}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_get */ "rs"](this.ptr, index);
      return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {TransactionWitnessSet} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, TransactionWitnessSet);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_add */ "ps"](this.ptr, elem.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_from_bytes */ "qs"](ptr0, len0);
      return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* transactionwitnesssets_new */ "ts"]();
      return TransactionWitnessSets.__wrap(ret);
    }
  }]);

  return TransactionWitnessSets;
}();
/**
*/

var URL = /*#__PURE__*/function () {
  function URL() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, URL);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(URL, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_url_free */ "rc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* url_to_bytes */ "Hs"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* url_url */ "Is"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* url_from_bytes */ "Fs"](ptr0, len0);
      return URL.__wrap(ret);
    }
    /**
    * @param {string} url
    * @returns {URL}
    */

  }, {
    key: "new",
    value: function _new(url) {
      var ptr0 = passStringToWasm0(url, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* url_new */ "Gs"](ptr0, len0);
      return URL.__wrap(ret);
    }
  }]);

  return URL;
}();
/**
*/

var UnitInterval = /*#__PURE__*/function () {
  function UnitInterval() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UnitInterval);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UnitInterval, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_unitinterval_free */ "pc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* unitinterval_to_bytes */ "zs"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* unitinterval_numerator */ "ys"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "denominator",
    value: function denominator() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* unitinterval_denominator */ "vs"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* unitinterval_from_bytes */ "ws"](ptr0, len0);
      return UnitInterval.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(numerator, denominator) {
      _assertClass(numerator, BigNum);

      _assertClass(denominator, BigNum);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* unitinterval_new */ "xs"](numerator.ptr, denominator.ptr);
      return UnitInterval.__wrap(ret);
    }
  }]);

  return UnitInterval;
}();
/**
*/

var Update = /*#__PURE__*/function () {
  function Update() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Update);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Update, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_update_free */ "qc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* update_to_bytes */ "Es"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* update_proposed_protocol_parameter_updates */ "Ds"](this.ptr);
      return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */

  }, {
    key: "epoch",
    value: function epoch() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* update_epoch */ "As"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* update_from_bytes */ "Bs"](ptr0, len0);
      return Update.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(proposed_protocol_parameter_updates, epoch) {
      _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* update_new */ "Cs"](proposed_protocol_parameter_updates.ptr, epoch);
      return Update.__wrap(ret);
    }
  }]);

  return Update;
}();
/**
*/

var VRFCert = /*#__PURE__*/function () {
  function VRFCert() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, VRFCert);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VRFCert, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vrfcert_free */ "xc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfcert_to_bytes */ "rt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfcert_output */ "pt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
      }
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "proof",
    value: function proof() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfcert_proof */ "qt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfcert_from_bytes */ "nt"](ptr0, len0);
      return VRFCert.__wrap(ret);
    }
  }, {
    key: "new",
    value: function _new(output, proof) {
      var ptr0 = passArray8ToWasm0(output, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(proof, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len1 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfcert_new */ "ot"](ptr0, len0, ptr1, len1);
      return VRFCert.__wrap(ret);
    }
  }]);

  return VRFCert;
}();
/**
*/

var VRFKeyHash = /*#__PURE__*/function () {
  function VRFKeyHash() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, VRFKeyHash);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VRFKeyHash, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vrfkeyhash_free */ "yc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfkeyhash_to_bytes */ "vt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfkeyhash_to_bech32 */ "ut"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfkeyhash_from_bech32 */ "st"](ptr0, len0);
      return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFKeyHash}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfkeyhash_from_bytes */ "tt"](ptr0, len0);
      return VRFKeyHash.__wrap(ret);
    }
  }]);

  return VRFKeyHash;
}();
/**
*/

var VRFVKey = /*#__PURE__*/function () {
  function VRFVKey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, VRFVKey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VRFVKey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vrfvkey_free */ "zc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfvkey_to_bytes */ "zt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfvkey_to_bech32 */ "yt"](retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1);
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
      var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfvkey_from_bech32 */ "wt"](ptr0, len0);
      return VRFVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFVKey}
    */

  }, {
    key: "from_bytes",
    value: function from_bytes(bytes) {
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vrfvkey_from_bytes */ "xt"](ptr0, len0);
      return VRFVKey.__wrap(ret);
    }
  }]);

  return VRFVKey;
}();
/**
*/

var Value = /*#__PURE__*/function () {
  function Value() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Value);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Value, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_value_free */ "sc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_to_bytes */ "Us"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_is_zero */ "Ps"](this.ptr);
      return ret !== 0;
    }
    /**
    * @returns {BigNum}
    */

  }, {
    key: "coin",
    value: function coin() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_coin */ "Ms"](this.ptr);
      return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    */

  }, {
    key: "set_coin",
    value: function set_coin(coin) {
      _assertClass(coin, BigNum);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_set_coin */ "Ss"](this.ptr, coin.ptr);
    }
    /**
    * @returns {MultiAsset | undefined}
    */

  }, {
    key: "multiasset",
    value: function multiasset() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_multiasset */ "Qs"](this.ptr);
      return ret === 0 ? undefined : MultiAsset.__wrap(ret);
    }
    /**
    * @param {MultiAsset} multiasset
    */

  }, {
    key: "set_multiasset",
    value: function set_multiasset(multiasset) {
      _assertClass(multiasset, MultiAsset);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_set_multiasset */ "Ts"](this.ptr, multiasset.ptr);
    }
    /**
    * @param {Value} rhs
    * @returns {Value}
    */

  }, {
    key: "checked_add",
    value: function checked_add(rhs) {
      _assertClass(rhs, Value);

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_checked_add */ "Js"](this.ptr, rhs.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_checked_sub */ "Ks"](this.ptr, rhs_value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_clamped_sub */ "Ls"](this.ptr, rhs_value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_compare */ "Ns"](this.ptr, rhs_value.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_from_bytes */ "Os"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_new */ "Rs"](coin.ptr);
      return Value.__wrap(ret);
    }
    /**
    * @returns {Value}
    */

  }, {
    key: "zero",
    value: function zero() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* value_zero */ "Vs"]();
      return Value.__wrap(ret);
    }
  }]);

  return Value;
}();
/**
*/

var Vkey = /*#__PURE__*/function () {
  function Vkey() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Vkey);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Vkey, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vkey_free */ "tc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkey_to_bytes */ "Zs"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkey_public_key */ "Ys"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkey_from_bytes */ "Ws"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkey_new */ "Xs"](pk.ptr);
      return Vkey.__wrap(ret);
    }
  }]);

  return Vkey;
}();
/**
*/

var Vkeys = /*#__PURE__*/function () {
  function Vkeys() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Vkeys);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Vkeys, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vkeys_free */ "uc"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeys_len */ "ct"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkey}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeys_get */ "bt"](this.ptr, index);
      return Vkey.__wrap(ret);
    }
    /**
    * @param {Vkey} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Vkey);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeys_add */ "at"](this.ptr, elem.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeys_new */ "dt"]();
      return Vkeys.__wrap(ret);
    }
  }]);

  return Vkeys;
}();
/**
*/

var Vkeywitness = /*#__PURE__*/function () {
  function Vkeywitness() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Vkeywitness);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Vkeywitness, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vkeywitness_free */ "vc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitness_to_bytes */ "ht"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitness_vkey */ "it"](this.ptr);
      return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */

  }, {
    key: "signature",
    value: function signature() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitness_signature */ "gt"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitness_from_bytes */ "et"](ptr0, len0);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitness_new */ "ft"](vkey.ptr, signature.ptr);
      return Vkeywitness.__wrap(ret);
    }
  }]);

  return Vkeywitness;
}();
/**
*/

var Vkeywitnesses = /*#__PURE__*/function () {
  function Vkeywitnesses() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Vkeywitnesses);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Vkeywitnesses, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_vkeywitnesses_free */ "wc"](ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitnesses_len */ "lt"](this.ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkeywitness}
    */

  }, {
    key: "get",
    value: function get(index) {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitnesses_get */ "kt"](this.ptr, index);
      return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkeywitness} elem
    */

  }, {
    key: "add",
    value: function add(elem) {
      _assertClass(elem, Vkeywitness);

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitnesses_add */ "jt"](this.ptr, elem.ptr);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* vkeywitnesses_new */ "mt"]();
      return Vkeywitnesses.__wrap(ret);
    }
  }]);

  return Vkeywitnesses;
}();
/**
*/

var Withdrawals = /*#__PURE__*/function () {
  function Withdrawals() {
    Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Withdrawals);
  }

  Object(_Users_srdjan_Development_personal_cardano_web3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Withdrawals, [{
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

      _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbg_withdrawals_free */ "Ac"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */

  }, {
    key: "to_bytes",
    value: function to_bytes() {
      try {
        var retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_to_bytes */ "Gt"](retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();

        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);

        return v0;
      } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_len */ "Et"](this.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_insert */ "Ct"](this.ptr, key.ptr, value.ptr);
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

      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_get */ "Bt"](this.ptr, key.ptr);
      return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */

  }, {
    key: "keys",
    value: function keys() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_keys */ "Dt"](this.ptr);
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
      var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"]);
      var len0 = WASM_VECTOR_LEN;
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_from_bytes */ "At"](ptr0, len0);
      return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {Withdrawals}
    */

  }, {
    key: "new",
    value: function _new() {
      var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* withdrawals_new */ "Ft"]();
      return Withdrawals.__wrap(ret);
    }
  }]);

  return Withdrawals;
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
function __wbg_new_3a746f2619705add(arg0, arg1) {
  var ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
;
function __wbg_call_f54d3a6dadb199ca(arg0, arg1) {
  var ret = getObject(arg0).call(getObject(arg1));
  return addHeapObject(ret);
}
;
function __wbindgen_jsval_eq(arg0, arg1) {
  var ret = getObject(arg0) === getObject(arg1);
  return ret;
}
;
function __wbg_self_ac379e780a0d8b94(arg0) {
  var ret = getObject(arg0).self;
  return addHeapObject(ret);
}
;
function __wbg_crypto_1e4302b85d4f64a2(arg0) {
  var ret = getObject(arg0).crypto;
  return addHeapObject(ret);
}
;
function __wbindgen_is_undefined(arg0) {
  var ret = getObject(arg0) === undefined;
  return ret;
}
;
function __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {
  var ret = getObject(arg0).getRandomValues;
  return addHeapObject(ret);
}
;
function __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {
  var ret = __webpack_require__("1d18")(getStringFromWasm0(arg0, arg1));

  return addHeapObject(ret);
}
;
function __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {
  getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
}
;
function __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {
  getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}
;
function __wbindgen_string_get(arg0, arg1) {
  var obj = getObject(arg1);
  var ret = typeof obj === 'string' ? obj : undefined;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
;
function __wbindgen_debug_string(arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_39__[/* __wbindgen_realloc */ "Ec"]);
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

/***/ "1d18":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "1d18";

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

/***/ "560c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0329");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode_arbitrary_bytes_as_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["id"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decode_arbitrary_bytes_from_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["fd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode_json_str_to_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["jd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decode_metadatum_to_json_str", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["gd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encrypt_with_password", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrypt_with_password", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["hd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_daedalus_bootstrap_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["sd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_icarus_bootstrap_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["td"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_vkey_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_auxiliary_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["od"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_transaction", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["rd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_plutus_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["pd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_script_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["qd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get_implicit_input", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get_deposit", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["md"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min_ada_required", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["vd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode_json_str_to_native_script", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min_fee", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["wd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificateKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIRPot", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIRKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelayKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeScriptKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHashNamespace", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkIdKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatumKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["wc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataJsonSchema", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptSchema", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeCredKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusDataKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedeemerTagKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetName", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetNames", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assets", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuxiliaryData", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuxiliaryDataHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuxiliaryDataSet", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAddress", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BigInt", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BigNum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bip32PrivateKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bip32PublicKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapWitness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapWitnesses", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ByronAddress", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Certificate", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Certificates", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrPlutusData", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CostModel", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Costmdls", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DNSRecordAorAAAA", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DNSRecordSRV", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ed25519KeyHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ed25519KeyHashes", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ed25519Signature", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnterpriseAddress", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExUnitPrices", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExUnits", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralTransactionMetadata", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenesisDelegateHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenesisHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenesisHashes", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenesisKeyDelegation", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderBody", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ipv4", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ipv6", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KESSignature", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KESVKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegacyDaedalusPrivateKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearFee", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIRToStakeCredentials", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataList", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataMap", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mint", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MintAssets", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveInstantaneousReward", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveInstantaneousRewardsCert", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiAsset", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiHostName", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeScript", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeScripts", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkId", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkInfo", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nonce", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationalCert", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusData", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusList", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusMap", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusScript", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlutusScripts", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pointer", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointerAddress", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoolMetadata", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoolMetadataHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoolParams", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoolRegistration", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoolRetirement", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivateKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposedProtocolParameterUpdates", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProtocolParamUpdate", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProtocolVersion", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProtocolVersions", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublicKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublicKeys", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redeemer", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedeemerTag", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redeemers", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relay", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relays", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RewardAddress", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RewardAddresses", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptAll", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptAny", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptDataHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHashes", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptNOfK", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptPubkey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleHostAddr", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleHostName", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeCredential", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeCredentials", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeDelegation", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeDeregistration", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeRegistration", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Strings", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelockExpiry", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelockStart", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBodies", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBody", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBuilder", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionInput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionInputs", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["uc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["vc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatumLabels", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["xc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionOutput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["yc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionOutputs", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["zc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionUnspentOutput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionWitnessSet", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionWitnessSets", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnitInterval", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFCert", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFKeyHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFVKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeys", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeywitness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeywitnesses", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Withdrawals", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["dd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_3a746f2619705add", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_f54d3a6dadb199ca", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_jsval_eq", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Zc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_ac379e780a0d8b94", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Wc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_crypto_1e4302b85d4f64a2", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Yc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_1b4ba144162a5c9e", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_require_6461b1e9a0d7c34a", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Vc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_1ef11e888e5228e9", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_randomFillSync_1b52c8482374c55b", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Uc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_get", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["cd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Xc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["bd"]; });




/***/ }),

/***/ "ad3a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__("0329");


// exec wasm module
wasmExports["Ht"]()

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
//# sourceMappingURL=web3-cardano-token.common.4.js.map