((typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpweb3_cardano_token"] || []).push([[4],{

/***/ "16ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea7e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode_arbitrary_bytes_as_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["gd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decode_arbitrary_bytes_from_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["dd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode_json_str_to_metadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["hd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decode_metadatum_to_json_str", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encrypt_with_password", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["id"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrypt_with_password", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["fd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min_fee", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["td"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_daedalus_bootstrap_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["pd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_icarus_bootstrap_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["qd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "make_vkey_witness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["rd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_auxiliary_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_transaction", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["od"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_plutus_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["md"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash_script_data", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get_implicit_input", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get_deposit", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["jd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min_ada_required", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["sd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificateKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIRPot", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIRKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelayKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeScriptKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHashNamespace", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkIdKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatumKind", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["uc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataJsonSchema", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ab"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleHostAddr", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleHostName", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeCredential", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeCredentials", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeDelegation", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeDeregistration", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakeRegistration", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Strings", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelockExpiry", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelockStart", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBodies", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBody", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionBuilder", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionInput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionInputs", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatum", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionMetadatumLabels", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["vc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionOutput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["wc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionOutputs", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["xc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionUnspentOutput", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["yc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionWitnessSet", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["zc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionWitnessSets", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnitInterval", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFCert", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFKeyHash", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRFVKey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkey", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeys", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeywitness", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vkeywitnesses", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Withdrawals", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Yc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["bd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_3a746f2619705add", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_f54d3a6dadb199ca", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_jsval_eq", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Xc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_ac379e780a0d8b94", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Uc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_crypto_1e4302b85d4f64a2", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Wc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_1b4ba144162a5c9e", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_require_6461b1e9a0d7c34a", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_randomFillSync_1b52c8482374c55b", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_1ef11e888e5228e9", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_get", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Vc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["cd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return _cardano_serialization_lib_bg_js__WEBPACK_IMPORTED_MODULE_0__["Zc"]; });




/***/ }),

/***/ "629b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__("ea7e");


// exec wasm module
wasmExports["Bt"]()

/***/ }),

/***/ "ea7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gd", function() { return encode_arbitrary_bytes_as_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return decode_arbitrary_bytes_from_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hd", function() { return encode_json_str_to_metadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ed", function() { return decode_metadatum_to_json_str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return encrypt_with_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fd", function() { return decrypt_with_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "td", function() { return min_fee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pd", function() { return make_daedalus_bootstrap_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qd", function() { return make_icarus_bootstrap_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rd", function() { return make_vkey_witness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ld", function() { return hash_auxiliary_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "od", function() { return hash_transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md", function() { return hash_plutus_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nd", function() { return hash_script_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kd", function() { return get_implicit_input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jd", function() { return get_deposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sd", function() { return min_ada_required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CertificateKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return MIRPot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return MIRKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return RelayKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return NativeScriptKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return ScriptHashNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return NetworkIdKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uc", function() { return TransactionMetadatumKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return MetadataJsonSchema; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return SingleHostAddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return SingleHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return StakeCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return StakeCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return StakeDelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return StakeDeregistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return StakeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return Strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return TimelockExpiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return TimelockStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return TransactionBodies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return TransactionBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return TransactionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return TransactionHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return TransactionInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return TransactionInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return TransactionMetadatum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc", function() { return TransactionMetadatumLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wc", function() { return TransactionOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xc", function() { return TransactionOutputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yc", function() { return TransactionUnspentOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zc", function() { return TransactionWitnessSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ac", function() { return TransactionWitnessSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bc", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cc", function() { return UnitInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dc", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ec", function() { return VRFCert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fc", function() { return VRFKeyHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gc", function() { return VRFVKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hc", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ic", function() { return Vkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jc", function() { return Vkeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kc", function() { return Vkeywitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lc", function() { return Vkeywitnesses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mc", function() { return Withdrawals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yc", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bd", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rc", function() { return __wbg_new_3a746f2619705add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nc", function() { return __wbg_call_f54d3a6dadb199ca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xc", function() { return __wbindgen_jsval_eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uc", function() { return __wbg_self_ac379e780a0d8b94; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oc", function() { return __wbg_crypto_1e4302b85d4f64a2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wc", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pc", function() { return __wbg_getRandomValues_1b4ba144162a5c9e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tc", function() { return __wbg_require_6461b1e9a0d7c34a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sc", function() { return __wbg_randomFillSync_1b52c8482374c55b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qc", function() { return __wbg_getRandomValues_1ef11e888e5228e9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return __wbindgen_string_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vc", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cd", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zc", function() { return __wbindgen_rethrow; });
/* harmony import */ var _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("629b");


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

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer);
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

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

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

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer);
    }
    return cachegetInt32Memory0;
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

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer) {
        cachegetUint32Memory0 = new Uint32Array(_cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "ki"].buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
function encode_arbitrary_bytes_as_metadatum(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* encode_arbitrary_bytes_as_metadatum */ "hg"](ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
}

/**
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array}
*/
function decode_arbitrary_bytes_from_metadatum(metadata) {
    try {
        const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
        _assertClass(metadata, TransactionMetadatum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* decode_arbitrary_bytes_from_metadatum */ "Gf"](retptr, metadata.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
        return v0;
    } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
    }
}

/**
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/
function encode_json_str_to_metadatum(json, schema) {
    var ptr0 = passStringToWasm0(json, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* encode_json_str_to_metadatum */ "ig"](ptr0, len0, schema);
    return TransactionMetadatum.__wrap(ret);
}

/**
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/
function decode_metadatum_to_json_str(metadatum, schema) {
    try {
        const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
        _assertClass(metadatum, TransactionMetadatum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* decode_metadatum_to_json_str */ "Hf"](retptr, metadatum.ptr, schema);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
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
        const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
        var ptr0 = passStringToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(salt, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passStringToWasm0(nonce, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = passStringToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len3 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* encrypt_with_password */ "jg"](retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
    }
}

/**
* @param {string} password
* @param {string} data
* @returns {string}
*/
function decrypt_with_password(password, data) {
    try {
        const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
        var ptr0 = passStringToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len1 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* decrypt_with_password */ "If"](retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
    }
}

/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/
function min_fee(tx, linear_fee) {
    _assertClass(tx, Transaction);
    _assertClass(linear_fee, LinearFee);
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* min_fee */ "Ei"](tx.ptr, linear_fee.ptr);
    return BigNum.__wrap(ret);
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
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* make_daedalus_bootstrap_witness */ "hi"](tx_body_hash.ptr, addr.ptr, key.ptr);
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
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* make_icarus_bootstrap_witness */ "ii"](tx_body_hash.ptr, addr.ptr, key.ptr);
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
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* make_vkey_witness */ "ji"](tx_body_hash.ptr, sk.ptr);
    return Vkeywitness.__wrap(ret);
}

/**
* @param {AuxiliaryData} auxiliary_data
* @returns {AuxiliaryDataHash}
*/
function hash_auxiliary_data(auxiliary_data) {
    _assertClass(auxiliary_data, AuxiliaryData);
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* hash_auxiliary_data */ "bh"](auxiliary_data.ptr);
    return AuxiliaryDataHash.__wrap(ret);
}

/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/
function hash_transaction(tx_body) {
    _assertClass(tx_body, TransactionBody);
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* hash_transaction */ "eh"](tx_body.ptr);
    return TransactionHash.__wrap(ret);
}

/**
* @param {PlutusData} plutus_data
* @returns {DataHash}
*/
function hash_plutus_data(plutus_data) {
    _assertClass(plutus_data, PlutusData);
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* hash_plutus_data */ "ch"](plutus_data.ptr);
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
    let ptr0 = 0;
    if (!isLikeNone(datums)) {
        _assertClass(datums, PlutusList);
        ptr0 = datums.ptr;
        datums.ptr = 0;
    }
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* hash_script_data */ "dh"](redeemers.ptr, cost_models.ptr, ptr0);
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
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* get_implicit_input */ "ah"](txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
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
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* get_deposit */ "Zg"](txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
    return BigNum.__wrap(ret);
}

/**
* @param {Value} assets
* @param {BigNum} minimum_utxo_val
* @returns {BigNum}
*/
function min_ada_required(assets, minimum_utxo_val) {
    _assertClass(assets, Value);
    _assertClass(minimum_utxo_val, BigNum);
    var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* min_ada_required */ "Di"](assets.ptr, minimum_utxo_val.ptr);
    return BigNum.__wrap(ret);
}

/**
*/
const CertificateKind = Object.freeze({ StakeRegistration:0,"0":"StakeRegistration",StakeDeregistration:1,"1":"StakeDeregistration",StakeDelegation:2,"2":"StakeDelegation",PoolRegistration:3,"3":"PoolRegistration",PoolRetirement:4,"4":"PoolRetirement",GenesisKeyDelegation:5,"5":"GenesisKeyDelegation",MoveInstantaneousRewardsCert:6,"6":"MoveInstantaneousRewardsCert", });
/**
*/
const MIRPot = Object.freeze({ Reserves:0,"0":"Reserves",Treasury:1,"1":"Treasury", });
/**
*/
const MIRKind = Object.freeze({ ToOtherPot:0,"0":"ToOtherPot",ToStakeCredentials:1,"1":"ToStakeCredentials", });
/**
*/
const RelayKind = Object.freeze({ SingleHostAddr:0,"0":"SingleHostAddr",SingleHostName:1,"1":"SingleHostName",MultiHostName:2,"2":"MultiHostName", });
/**
*/
const NativeScriptKind = Object.freeze({ ScriptPubkey:0,"0":"ScriptPubkey",ScriptAll:1,"1":"ScriptAll",ScriptAny:2,"2":"ScriptAny",ScriptNOfK:3,"3":"ScriptNOfK",TimelockStart:4,"4":"TimelockStart",TimelockExpiry:5,"5":"TimelockExpiry", });
/**
* Each new language uses a different namespace for hashing its script
* This is because you could have a language where the same bytes have different semantics
* So this avoids scripts in different languages mapping to the same hash
* Note that the enum value here is different than the enum value for deciding the cost model of a script
*/
const ScriptHashNamespace = Object.freeze({ NativeScript:0,"0":"NativeScript", });
/**
*/
const NetworkIdKind = Object.freeze({ Testnet:0,"0":"Testnet",Mainnet:1,"1":"Mainnet", });
/**
*/
const TransactionMetadatumKind = Object.freeze({ MetadataMap:0,"0":"MetadataMap",MetadataList:1,"1":"MetadataList",Int:2,"2":"Int",Bytes:3,"3":"Bytes",Text:4,"4":"Text", });
/**
*/
const MetadataJsonSchema = Object.freeze({ NoConversions:0,"0":"NoConversions",BasicConversions:1,"1":"BasicConversions",DetailedSchema:2,"2":"DetailedSchema", });
/**
*/
const LanguageKind = Object.freeze({ PlutusV1:0,"0":"PlutusV1", });
/**
*/
const PlutusDataKind = Object.freeze({ ConstrPlutusData:0,"0":"ConstrPlutusData",Map:1,"1":"Map",List:2,"2":"List",Integer:3,"3":"Integer",Bytes:4,"4":"Bytes", });
/**
*/
const RedeemerTagKind = Object.freeze({ Spend:0,"0":"Spend",Mint:1,"1":"Mint",Cert:2,"2":"Cert",Reward:3,"3":"Reward", });
/**
*/
class Address {

    static __wrap(ptr) {
        const obj = Object.create(Address.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_address_free */ "a"](ptr);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Address}
    */
    static from_bytes(data) {
        var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* address_from_bytes */ "Gc"](ptr0, len0);
        return Address.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* address_to_bytes */ "Jc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string | undefined} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* address_to_bech32 */ "Ic"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {Address}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* address_from_bech32 */ "Fc"](ptr0, len0);
        return Address.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* address_network_id */ "Hc"](this.ptr);
        return ret;
    }
}
/**
*/
class AssetName {

    static __wrap(ptr) {
        const obj = Object.create(AssetName.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_assetname_free */ "b"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetname_to_bytes */ "Nc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AssetName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetname_from_bytes */ "Kc"](ptr0, len0);
        return AssetName.__wrap(ret);
    }
    /**
    * @param {Uint8Array} name
    * @returns {AssetName}
    */
    static new(name) {
        var ptr0 = passArray8ToWasm0(name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetname_new */ "Mc"](ptr0, len0);
        return AssetName.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    name() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetname_name */ "Lc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class AssetNames {

    static __wrap(ptr) {
        const obj = Object.create(AssetNames.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_assetnames_free */ "c"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_to_bytes */ "Tc"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AssetNames}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_from_bytes */ "Pc"](ptr0, len0);
        return AssetNames.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_new */ "Sc"]();
        return AssetNames.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_len */ "Rc"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {AssetName}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_get */ "Qc"](this.ptr, index);
        return AssetName.__wrap(ret);
    }
    /**
    * @param {AssetName} elem
    */
    add(elem) {
        _assertClass(elem, AssetName);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assetnames_add */ "Oc"](this.ptr, elem.ptr);
    }
}
/**
*/
class Assets {

    static __wrap(ptr) {
        const obj = Object.create(Assets.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_assets_free */ "d"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_to_bytes */ "ad"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Assets}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_from_bytes */ "Uc"](ptr0, len0);
        return Assets.__wrap(ret);
    }
    /**
    * @returns {Assets}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_new */ "Zc"]();
        return Assets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_len */ "Yc"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */
    insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_insert */ "Wc"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {BigNum | undefined}
    */
    get(key) {
        _assertClass(key, AssetName);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_get */ "Vc"](this.ptr, key.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* assets_keys */ "Xc"](this.ptr);
        return AssetNames.__wrap(ret);
    }
}
/**
*/
class AuxiliaryData {

    static __wrap(ptr) {
        const obj = Object.create(AuxiliaryData.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_auxiliarydata_free */ "e"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_to_bytes */ "jd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AuxiliaryData}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_from_bytes */ "bd"](ptr0, len0);
        return AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryData}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_new */ "ed"]();
        return AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata | undefined}
    */
    metadata() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_metadata */ "cd"](this.ptr);
        return ret === 0 ? undefined : GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @param {GeneralTransactionMetadata} metadata
    */
    set_metadata(metadata) {
        _assertClass(metadata, GeneralTransactionMetadata);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_set_metadata */ "gd"](this.ptr, metadata.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */
    native_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_native_scripts */ "dd"](this.ptr);
        return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */
    set_native_scripts(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_set_native_scripts */ "hd"](this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */
    plutus_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_plutus_scripts */ "fd"](this.ptr);
        return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */
    set_plutus_scripts(plutus_scripts) {
        _assertClass(plutus_scripts, PlutusScripts);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydata_set_plutus_scripts */ "id"](this.ptr, plutus_scripts.ptr);
    }
}
/**
*/
class AuxiliaryDataHash {

    static __wrap(ptr) {
        const obj = Object.create(AuxiliaryDataHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_auxiliarydatahash_free */ "f"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydatahash_to_bytes */ "nd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydatahash_to_bech32 */ "md"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {AuxiliaryDataHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydatahash_from_bech32 */ "kd"](ptr0, len0);
        return AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {AuxiliaryDataHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydatahash_from_bytes */ "ld"](ptr0, len0);
        return AuxiliaryDataHash.__wrap(ret);
    }
}
/**
*/
class AuxiliaryDataSet {

    static __wrap(ptr) {
        const obj = Object.create(AuxiliaryDataSet.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_auxiliarydataset_free */ "g"](ptr);
    }
    /**
    * @returns {AuxiliaryDataSet}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydataset_new */ "sd"]();
        return AuxiliaryDataSet.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydataset_len */ "rd"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} tx_index
    * @param {AuxiliaryData} data
    * @returns {AuxiliaryData | undefined}
    */
    insert(tx_index, data) {
        _assertClass(data, AuxiliaryData);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydataset_insert */ "qd"](this.ptr, tx_index, data.ptr);
        return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {number} tx_index
    * @returns {AuxiliaryData | undefined}
    */
    get(tx_index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydataset_get */ "od"](this.ptr, tx_index);
        return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */
    indices() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* auxiliarydataset_indices */ "pd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU32FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class BaseAddress {

    static __wrap(ptr) {
        const obj = Object.create(BaseAddress.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_baseaddress_free */ "h"](ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {StakeCredential} stake
    * @returns {BaseAddress}
    */
    static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* baseaddress_new */ "ud"](network, payment.ptr, stake.ptr);
        return BaseAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* baseaddress_payment_cred */ "vd"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_cred() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* baseaddress_stake_cred */ "wd"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* baseaddress_to_address */ "xd"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {BaseAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* baseaddress_from_address */ "td"](addr.ptr);
        return ret === 0 ? undefined : BaseAddress.__wrap(ret);
    }
}
/**
*/
class BigInt {

    static __wrap(ptr) {
        const obj = Object.create(BigInt.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bigint_free */ "i"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bigint_to_bytes */ "Bd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BigInt}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bigint_from_bytes */ "zd"](ptr0, len0);
        return BigInt.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_u64() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bigint_as_u64 */ "yd"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {BigInt}
    */
    static from_str(text) {
        var ptr0 = passStringToWasm0(text, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bigint_from_str */ "Ad"](ptr0, len0);
        return BigInt.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_str() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bigint_to_str */ "Cd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
}
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bignum_free */ "j"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_to_bytes */ "Kd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BigNum}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_from_bytes */ "Id"](ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {string} string
    * @returns {BigNum}
    */
    static from_str(string) {
        var ptr0 = passStringToWasm0(string, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_from_str */ "Jd"](ptr0, len0);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_str() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_to_str */ "Ld"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {BigNum}
    */
    static zero() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_zero */ "Md"]();
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_mul(other) {
        _assertClass(other, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_mul */ "Ed"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_add(other) {
        _assertClass(other, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_add */ "Dd"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} other
    * @returns {BigNum}
    */
    checked_sub(other) {
        _assertClass(other, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_checked_sub */ "Fd"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * returns 0 if it would otherwise underflow
    * @param {BigNum} other
    * @returns {BigNum}
    */
    clamped_sub(other) {
        _assertClass(other, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_clamped_sub */ "Gd"](this.ptr, other.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} rhs_value
    * @returns {number}
    */
    compare(rhs_value) {
        _assertClass(rhs_value, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bignum_compare */ "Hd"](this.ptr, rhs_value.ptr);
        return ret;
    }
}
/**
*/
class Bip32PrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(Bip32PrivateKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bip32privatekey_free */ "k"](ptr);
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
    derive(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_derive */ "Pd"](this.ptr, index);
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
    static from_128_xprv(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_from_128_xprv */ "Qd"](ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * see from_128_xprv
    * @returns {Uint8Array}
    */
    to_128_xprv() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_to_128_xprv */ "Vd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {Bip32PrivateKey}
    */
    static generate_ed25519_bip32() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_generate_ed25519_bip32 */ "Ud"]();
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    to_raw_key() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_to_raw_key */ "Yd"](this.ptr);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Bip32PublicKey}
    */
    to_public() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_to_public */ "Xd"](this.ptr);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PrivateKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_from_bytes */ "Td"](ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_as_bytes */ "Nd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} bech32_str
    * @returns {Bip32PrivateKey}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_from_bech32 */ "Rd"](ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_to_bech32 */ "Wd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {Uint8Array} entropy
    * @param {Uint8Array} password
    * @returns {Bip32PrivateKey}
    */
    static from_bip39_entropy(entropy, password) {
        var ptr0 = passArray8ToWasm0(entropy, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(password, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_from_bip39_entropy */ "Sd"](ptr0, len0, ptr1, len1);
        return Bip32PrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32privatekey_chaincode */ "Od"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class Bip32PublicKey {

    static __wrap(ptr) {
        const obj = Object.create(Bip32PublicKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bip32publickey_free */ "l"](ptr);
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
    derive(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_derive */ "be"](this.ptr, index);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */
    to_raw_key() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_to_raw_key */ "fe"](this.ptr);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Bip32PublicKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_from_bytes */ "de"](ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_as_bytes */ "Zd"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} bech32_str
    * @returns {Bip32PublicKey}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_from_bech32 */ "ce"](ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_to_bech32 */ "ee"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bip32publickey_chaincode */ "ae"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class Block {

    static __wrap(ptr) {
        const obj = Object.create(Block.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_block_free */ "m"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_to_bytes */ "le"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Block}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_from_bytes */ "he"](ptr0, len0);
        return Block.__wrap(ret);
    }
    /**
    * @returns {Header}
    */
    header() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_header */ "ie"](this.ptr);
        return Header.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */
    transaction_bodies() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_transaction_bodies */ "me"](this.ptr);
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */
    transaction_witness_sets() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_transaction_witness_sets */ "ne"](this.ptr);
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {AuxiliaryDataSet}
    */
    auxiliary_data_set() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_auxiliary_data_set */ "ge"](this.ptr);
        return AuxiliaryDataSet.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */
    invalid_transactions() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_invalid_transactions */ "je"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU32FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
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
    static new(header, transaction_bodies, transaction_witness_sets, auxiliary_data_set, invalid_transactions) {
        _assertClass(header, Header);
        _assertClass(transaction_bodies, TransactionBodies);
        _assertClass(transaction_witness_sets, TransactionWitnessSets);
        _assertClass(auxiliary_data_set, AuxiliaryDataSet);
        var ptr0 = passArray32ToWasm0(invalid_transactions, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* block_new */ "ke"](header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, auxiliary_data_set.ptr, ptr0, len0);
        return Block.__wrap(ret);
    }
}
/**
*/
class BlockHash {

    static __wrap(ptr) {
        const obj = Object.create(BlockHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_blockhash_free */ "n"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* blockhash_to_bytes */ "re"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* blockhash_to_bech32 */ "qe"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {BlockHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* blockhash_from_bech32 */ "oe"](ptr0, len0);
        return BlockHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BlockHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* blockhash_from_bytes */ "pe"](ptr0, len0);
        return BlockHash.__wrap(ret);
    }
}
/**
*/
class BootstrapWitness {

    static __wrap(ptr) {
        const obj = Object.create(BootstrapWitness.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bootstrapwitness_free */ "o"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_to_bytes */ "xe"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {BootstrapWitness}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_from_bytes */ "ue"](ptr0, len0);
        return BootstrapWitness.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    vkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_vkey */ "ye"](this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */
    signature() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_signature */ "we"](this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    chain_code() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_chain_code */ "te"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    attributes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_attributes */ "se"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @param {Uint8Array} chain_code
    * @param {Uint8Array} attributes
    * @returns {BootstrapWitness}
    */
    static new(vkey, signature, chain_code, attributes) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ptr0 = passArray8ToWasm0(chain_code, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(attributes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitness_new */ "ve"](vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
        return BootstrapWitness.__wrap(ret);
    }
}
/**
*/
class BootstrapWitnesses {

    static __wrap(ptr) {
        const obj = Object.create(BootstrapWitnesses.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_bootstrapwitnesses_free */ "p"](ptr);
    }
    /**
    * @returns {BootstrapWitnesses}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitnesses_new */ "Ce"]();
        return BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitnesses_len */ "Be"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BootstrapWitness}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitnesses_get */ "Ae"](this.ptr, index);
        return BootstrapWitness.__wrap(ret);
    }
    /**
    * @param {BootstrapWitness} elem
    */
    add(elem) {
        _assertClass(elem, BootstrapWitness);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* bootstrapwitnesses_add */ "ze"](this.ptr, elem.ptr);
    }
}
/**
*/
class ByronAddress {

    static __wrap(ptr) {
        const obj = Object.create(ByronAddress.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_byronaddress_free */ "q"](ptr);
    }
    /**
    * @returns {string}
    */
    to_base58() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_to_base58 */ "Me"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_to_bytes */ "Ne"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ByronAddress}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_from_bytes */ "He"](ptr0, len0);
        return ByronAddress.__wrap(ret);
    }
    /**
    * returns the byron protocol magic embedded in the address, or mainnet id if none is present
    * note: for bech32 addresses, you need to use network_id instead
    * @returns {number}
    */
    byron_protocol_magic() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_byron_protocol_magic */ "Ee"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */
    attributes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_attributes */ "De"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_network_id */ "Ke"](this.ptr);
        return ret;
    }
    /**
    * @param {string} s
    * @returns {ByronAddress}
    */
    static from_base58(s) {
        var ptr0 = passStringToWasm0(s, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_from_base58 */ "Ge"](ptr0, len0);
        return ByronAddress.__wrap(ret);
    }
    /**
    * @param {Bip32PublicKey} key
    * @param {number} protocol_magic
    * @returns {ByronAddress}
    */
    static icarus_from_key(key, protocol_magic) {
        _assertClass(key, Bip32PublicKey);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_icarus_from_key */ "Ie"](key.ptr, protocol_magic);
        return ByronAddress.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {boolean}
    */
    static is_valid(s) {
        var ptr0 = passStringToWasm0(s, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_is_valid */ "Je"](ptr0, len0);
        return ret !== 0;
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_to_address */ "Le"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {ByronAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* byronaddress_from_address */ "Fe"](addr.ptr);
        return ret === 0 ? undefined : ByronAddress.__wrap(ret);
    }
}
/**
*/
class Certificate {

    static __wrap(ptr) {
        const obj = Object.create(Certificate.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_certificate_free */ "r"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_to_bytes */ "ef"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Certificate}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_from_bytes */ "Ve"](ptr0, len0);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeRegistration} stake_registration
    * @returns {Certificate}
    */
    static new_stake_registration(stake_registration) {
        _assertClass(stake_registration, StakeRegistration);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_stake_registration */ "df"](stake_registration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDeregistration} stake_deregistration
    * @returns {Certificate}
    */
    static new_stake_deregistration(stake_deregistration) {
        _assertClass(stake_deregistration, StakeDeregistration);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_stake_deregistration */ "cf"](stake_deregistration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {StakeDelegation} stake_delegation
    * @returns {Certificate}
    */
    static new_stake_delegation(stake_delegation) {
        _assertClass(stake_delegation, StakeDelegation);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_stake_delegation */ "bf"](stake_delegation.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRegistration} pool_registration
    * @returns {Certificate}
    */
    static new_pool_registration(pool_registration) {
        _assertClass(pool_registration, PoolRegistration);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_pool_registration */ "Ze"](pool_registration.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {PoolRetirement} pool_retirement
    * @returns {Certificate}
    */
    static new_pool_retirement(pool_retirement) {
        _assertClass(pool_retirement, PoolRetirement);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_pool_retirement */ "af"](pool_retirement.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {GenesisKeyDelegation} genesis_key_delegation
    * @returns {Certificate}
    */
    static new_genesis_key_delegation(genesis_key_delegation) {
        _assertClass(genesis_key_delegation, GenesisKeyDelegation);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_genesis_key_delegation */ "Xe"](genesis_key_delegation.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousRewardsCert} move_instantaneous_rewards_cert
    * @returns {Certificate}
    */
    static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert) {
        _assertClass(move_instantaneous_rewards_cert, MoveInstantaneousRewardsCert);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_new_move_instantaneous_rewards_cert */ "Ye"](move_instantaneous_rewards_cert.ptr);
        return Certificate.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_kind */ "We"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {StakeRegistration | undefined}
    */
    as_stake_registration() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_stake_registration */ "Ue"](this.ptr);
        return ret === 0 ? undefined : StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeDeregistration | undefined}
    */
    as_stake_deregistration() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_stake_deregistration */ "Te"](this.ptr);
        return ret === 0 ? undefined : StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeDelegation | undefined}
    */
    as_stake_delegation() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_stake_delegation */ "Se"](this.ptr);
        return ret === 0 ? undefined : StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {PoolRegistration | undefined}
    */
    as_pool_registration() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_pool_registration */ "Qe"](this.ptr);
        return ret === 0 ? undefined : PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolRetirement | undefined}
    */
    as_pool_retirement() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_pool_retirement */ "Re"](this.ptr);
        return ret === 0 ? undefined : PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {GenesisKeyDelegation | undefined}
    */
    as_genesis_key_delegation() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_genesis_key_delegation */ "Oe"](this.ptr);
        return ret === 0 ? undefined : GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousRewardsCert | undefined}
    */
    as_move_instantaneous_rewards_cert() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificate_as_move_instantaneous_rewards_cert */ "Pe"](this.ptr);
        return ret === 0 ? undefined : MoveInstantaneousRewardsCert.__wrap(ret);
    }
}
/**
*/
class Certificates {

    static __wrap(ptr) {
        const obj = Object.create(Certificates.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_certificates_free */ "s"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_to_bytes */ "kf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Certificates}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_from_bytes */ "gf"](ptr0, len0);
        return Certificates.__wrap(ret);
    }
    /**
    * @returns {Certificates}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_new */ "jf"]();
        return Certificates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_len */ "if"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Certificate}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_get */ "hf"](this.ptr, index);
        return Certificate.__wrap(ret);
    }
    /**
    * @param {Certificate} elem
    */
    add(elem) {
        _assertClass(elem, Certificate);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* certificates_add */ "ff"](this.ptr, elem.ptr);
    }
}
/**
*/
class ConstrPlutusData {

    static __wrap(ptr) {
        const obj = Object.create(ConstrPlutusData.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_constrplutusdata_free */ "t"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* constrplutusdata_to_bytes */ "pf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ConstrPlutusData}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* constrplutusdata_from_bytes */ "mf"](ptr0, len0);
        return ConstrPlutusData.__wrap(ret);
    }
    /**
    * @returns {Int}
    */
    tag() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* constrplutusdata_tag */ "of"](this.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */
    data() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* constrplutusdata_data */ "lf"](this.ptr);
        return PlutusList.__wrap(ret);
    }
    /**
    * @param {Int} tag
    * @param {PlutusList} data
    * @returns {ConstrPlutusData}
    */
    static new(tag, data) {
        _assertClass(tag, Int);
        var ptr0 = tag.ptr;
        tag.ptr = 0;
        _assertClass(data, PlutusList);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* constrplutusdata_new */ "nf"](ptr0, data.ptr);
        return ConstrPlutusData.__wrap(ret);
    }
}
/**
*/
class CostModel {

    static __wrap(ptr) {
        const obj = Object.create(CostModel.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_costmodel_free */ "v"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmodel_to_bytes */ "Bf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {CostModel}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmodel_from_bytes */ "xf"](ptr0, len0);
        return CostModel.__wrap(ret);
    }
    /**
    * @returns {CostModel}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmodel_new */ "zf"]();
        return CostModel.__wrap(ret);
    }
    /**
    * @param {number} operation
    * @param {Int} cost
    * @returns {Int}
    */
    set(operation, cost) {
        _assertClass(cost, Int);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmodel_set */ "Af"](this.ptr, operation, cost.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @param {number} operation
    * @returns {Int}
    */
    get(operation) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmodel_get */ "yf"](this.ptr, operation);
        return Int.__wrap(ret);
    }
}
/**
*/
class Costmdls {

    static __wrap(ptr) {
        const obj = Object.create(Costmdls.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_costmdls_free */ "u"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_to_bytes */ "wf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Costmdls}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_from_bytes */ "qf"](ptr0, len0);
        return Costmdls.__wrap(ret);
    }
    /**
    * @returns {Costmdls}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_new */ "vf"]();
        return Costmdls.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_len */ "uf"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {Language} key
    * @param {CostModel} value
    * @returns {CostModel | undefined}
    */
    insert(key, value) {
        _assertClass(key, Language);
        _assertClass(value, CostModel);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_insert */ "sf"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : CostModel.__wrap(ret);
    }
    /**
    * @param {Language} key
    * @returns {CostModel | undefined}
    */
    get(key) {
        _assertClass(key, Language);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_get */ "rf"](this.ptr, key.ptr);
        return ret === 0 ? undefined : CostModel.__wrap(ret);
    }
    /**
    * @returns {Languages}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* costmdls_keys */ "tf"](this.ptr);
        return Languages.__wrap(ret);
    }
}
/**
*/
class DNSRecordAorAAAA {

    static __wrap(ptr) {
        const obj = Object.create(DNSRecordAorAAAA.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_dnsrecordaoraaaa_free */ "x"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordaoraaaa_to_bytes */ "Mf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DNSRecordAorAAAA}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordaoraaaa_from_bytes */ "Jf"](ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordAorAAAA}
    */
    static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordaoraaaa_new */ "Kf"](ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    record() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordaoraaaa_record */ "Lf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
}
/**
*/
class DNSRecordSRV {

    static __wrap(ptr) {
        const obj = Object.create(DNSRecordSRV.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_dnsrecordsrv_free */ "y"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordsrv_to_bytes */ "Qf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DNSRecordSRV}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordsrv_from_bytes */ "Nf"](ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {string} dns_name
    * @returns {DNSRecordSRV}
    */
    static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordsrv_new */ "Of"](ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    record() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* dnsrecordsrv_record */ "Pf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
}
/**
*/
class DataHash {

    static __wrap(ptr) {
        const obj = Object.create(DataHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_datahash_free */ "w"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* datahash_to_bytes */ "Ff"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* datahash_to_bech32 */ "Ef"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {DataHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* datahash_from_bech32 */ "Cf"](ptr0, len0);
        return DataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {DataHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* datahash_from_bytes */ "Df"](ptr0, len0);
        return DataHash.__wrap(ret);
    }
}
/**
*/
class Ed25519KeyHash {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_ed25519keyhash_free */ "z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhash_to_bytes */ "Uf"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhash_to_bech32 */ "Tf"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {Ed25519KeyHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhash_from_bech32 */ "Rf"](ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhash_from_bytes */ "Sf"](ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
    }
}
/**
*/
class Ed25519KeyHashes {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHashes.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_ed25519keyhashes_free */ "A"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_to_bytes */ "ag"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519KeyHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_from_bytes */ "Wf"](ptr0, len0);
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_new */ "Zf"]();
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_len */ "Yf"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Ed25519KeyHash}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_get */ "Xf"](this.ptr, index);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} elem
    */
    add(elem) {
        _assertClass(elem, Ed25519KeyHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519keyhashes_add */ "Vf"](this.ptr, elem.ptr);
    }
}
/**
*/
class Ed25519Signature {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519Signature.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_ed25519signature_free */ "B"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_to_bytes */ "fg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_to_bech32 */ "eg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    to_hex() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_to_hex */ "gg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech32_str
    * @returns {Ed25519Signature}
    */
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_from_bech32 */ "bg"](ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {string} input
    * @returns {Ed25519Signature}
    */
    static from_hex(input) {
        var ptr0 = passStringToWasm0(input, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_from_hex */ "dg"](ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ed25519Signature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ed25519signature_from_bytes */ "cg"](ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
}
/**
*/
class EnterpriseAddress {

    static __wrap(ptr) {
        const obj = Object.create(EnterpriseAddress.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_enterpriseaddress_free */ "C"](ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {EnterpriseAddress}
    */
    static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* enterpriseaddress_new */ "lg"](network, payment.ptr);
        return EnterpriseAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* enterpriseaddress_payment_cred */ "mg"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* enterpriseaddress_to_address */ "ng"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {EnterpriseAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* enterpriseaddress_from_address */ "kg"](addr.ptr);
        return ret === 0 ? undefined : EnterpriseAddress.__wrap(ret);
    }
}
/**
*/
class ExUnitPrices {

    static __wrap(ptr) {
        const obj = Object.create(ExUnitPrices.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_exunitprices_free */ "D"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunitprices_to_bytes */ "sg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ExUnitPrices}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunitprices_from_bytes */ "og"](ptr0, len0);
        return ExUnitPrices.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */
    mem_price() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunitprices_mem_price */ "pg"](this.ptr);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */
    step_price() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunitprices_step_price */ "rg"](this.ptr);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} mem_price
    * @param {UnitInterval} step_price
    * @returns {ExUnitPrices}
    */
    static new(mem_price, step_price) {
        _assertClass(mem_price, UnitInterval);
        _assertClass(step_price, UnitInterval);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunitprices_new */ "qg"](mem_price.ptr, step_price.ptr);
        return ExUnitPrices.__wrap(ret);
    }
}
/**
*/
class ExUnits {

    static __wrap(ptr) {
        const obj = Object.create(ExUnits.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_exunits_free */ "E"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunits_to_bytes */ "xg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ExUnits}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunits_from_bytes */ "tg"](ptr0, len0);
        return ExUnits.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    mem() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunits_mem */ "ug"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    steps() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunits_steps */ "wg"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} mem
    * @param {BigNum} steps
    * @returns {ExUnits}
    */
    static new(mem, steps) {
        _assertClass(mem, BigNum);
        _assertClass(steps, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* exunits_new */ "vg"](mem.ptr, steps.ptr);
        return ExUnits.__wrap(ret);
    }
}
/**
*/
class GeneralTransactionMetadata {

    static __wrap(ptr) {
        const obj = Object.create(GeneralTransactionMetadata.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_generaltransactionmetadata_free */ "F"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_to_bytes */ "Eg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GeneralTransactionMetadata}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_from_bytes */ "yg"](ptr0, len0);
        return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {GeneralTransactionMetadata}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_new */ "Dg"]();
        return GeneralTransactionMetadata.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_len */ "Cg"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {BigNum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert(key, value) {
        _assertClass(key, BigNum);
        _assertClass(value, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_insert */ "Ag"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {BigNum} key
    * @returns {TransactionMetadatum | undefined}
    */
    get(key) {
        _assertClass(key, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_get */ "zg"](this.ptr, key.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* generaltransactionmetadata_keys */ "Bg"](this.ptr);
        return TransactionMetadatumLabels.__wrap(ret);
    }
}
/**
*/
class GenesisDelegateHash {

    static __wrap(ptr) {
        const obj = Object.create(GenesisDelegateHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_genesisdelegatehash_free */ "G"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesisdelegatehash_to_bytes */ "Ig"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesisdelegatehash_to_bech32 */ "Hg"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisDelegateHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesisdelegatehash_from_bech32 */ "Fg"](ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisDelegateHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesisdelegatehash_from_bytes */ "Gg"](ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
    }
}
/**
*/
class GenesisHash {

    static __wrap(ptr) {
        const obj = Object.create(GenesisHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_genesishash_free */ "H"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishash_to_bytes */ "Mg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishash_to_bech32 */ "Lg"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {GenesisHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishash_from_bech32 */ "Jg"](ptr0, len0);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishash_from_bytes */ "Kg"](ptr0, len0);
        return GenesisHash.__wrap(ret);
    }
}
/**
*/
class GenesisHashes {

    static __wrap(ptr) {
        const obj = Object.create(GenesisHashes.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_genesishashes_free */ "I"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_to_bytes */ "Sg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_from_bytes */ "Og"](ptr0, len0);
        return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_new */ "Rg"]();
        return GenesisHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_len */ "Qg"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {GenesisHash}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_get */ "Pg"](this.ptr, index);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} elem
    */
    add(elem) {
        _assertClass(elem, GenesisHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesishashes_add */ "Ng"](this.ptr, elem.ptr);
    }
}
/**
*/
class GenesisKeyDelegation {

    static __wrap(ptr) {
        const obj = Object.create(GenesisKeyDelegation.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_genesiskeydelegation_free */ "J"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_to_bytes */ "Xg"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {GenesisKeyDelegation}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_from_bytes */ "Tg"](ptr0, len0);
        return GenesisKeyDelegation.__wrap(ret);
    }
    /**
    * @returns {GenesisHash}
    */
    genesishash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_genesishash */ "Vg"](this.ptr);
        return GenesisHash.__wrap(ret);
    }
    /**
    * @returns {GenesisDelegateHash}
    */
    genesis_delegate_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_genesis_delegate_hash */ "Ug"](this.ptr);
        return GenesisDelegateHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */
    vrf_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_vrf_keyhash */ "Yg"](this.ptr);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {GenesisHash} genesishash
    * @param {GenesisDelegateHash} genesis_delegate_hash
    * @param {VRFKeyHash} vrf_keyhash
    * @returns {GenesisKeyDelegation}
    */
    static new(genesishash, genesis_delegate_hash, vrf_keyhash) {
        _assertClass(genesishash, GenesisHash);
        _assertClass(genesis_delegate_hash, GenesisDelegateHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* genesiskeydelegation_new */ "Wg"](genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
        return GenesisKeyDelegation.__wrap(ret);
    }
}
/**
*/
class Header {

    static __wrap(ptr) {
        const obj = Object.create(Header.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_header_free */ "K"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* header_to_bytes */ "jh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Header}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* header_from_bytes */ "gh"](ptr0, len0);
        return Header.__wrap(ret);
    }
    /**
    * @returns {HeaderBody}
    */
    header_body() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* header_header_body */ "hh"](this.ptr);
        return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {KESSignature}
    */
    body_signature() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* header_body_signature */ "fh"](this.ptr);
        return KESSignature.__wrap(ret);
    }
    /**
    * @param {HeaderBody} header_body
    * @param {KESSignature} body_signature
    * @returns {Header}
    */
    static new(header_body, body_signature) {
        _assertClass(header_body, HeaderBody);
        _assertClass(body_signature, KESSignature);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* header_new */ "ih"](header_body.ptr, body_signature.ptr);
        return Header.__wrap(ret);
    }
}
/**
*/
class HeaderBody {

    static __wrap(ptr) {
        const obj = Object.create(HeaderBody.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_headerbody_free */ "L"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_to_bytes */ "wh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {HeaderBody}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_from_bytes */ "nh"](ptr0, len0);
        return HeaderBody.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    block_number() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_block_number */ "mh"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_slot */ "vh"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {BlockHash | undefined}
    */
    prev_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_prev_hash */ "th"](this.ptr);
        return ret === 0 ? undefined : BlockHash.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    issuer_vkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_issuer_vkey */ "oh"](this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {VRFVKey}
    */
    vrf_vkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_vrf_vkey */ "xh"](this.ptr);
        return VRFVKey.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */
    nonce_vrf() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_nonce_vrf */ "rh"](this.ptr);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {VRFCert}
    */
    leader_vrf() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_leader_vrf */ "ph"](this.ptr);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    block_body_size() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_block_body_size */ "lh"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {BlockHash}
    */
    block_body_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_block_body_hash */ "kh"](this.ptr);
        return BlockHash.__wrap(ret);
    }
    /**
    * @returns {OperationalCert}
    */
    operational_cert() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_operational_cert */ "sh"](this.ptr);
        return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersion}
    */
    protocol_version() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_protocol_version */ "uh"](this.ptr);
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
    static new(block_number, slot, prev_hash, issuer_vkey, vrf_vkey, nonce_vrf, leader_vrf, block_body_size, block_body_hash, operational_cert, protocol_version) {
        let ptr0 = 0;
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
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* headerbody_new */ "qh"](block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
        return HeaderBody.__wrap(ret);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_int_free */ "M"](ptr);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new(x) {
        _assertClass(x, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new */ "Ch"](x.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @param {BigNum} x
    * @returns {Int}
    */
    static new_negative(x) {
        _assertClass(x, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new_negative */ "Eh"](x.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @param {number} x
    * @returns {Int}
    */
    static new_i32(x) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_new_i32 */ "Dh"](x);
        return Int.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    is_positive() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_is_positive */ "Bh"](this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_positive() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_positive */ "Ah"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_negative() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_negative */ "zh"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    as_i32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* int_as_i32 */ "yh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class Ipv4 {

    static __wrap(ptr) {
        const obj = Object.create(Ipv4.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_ipv4_free */ "N"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv4_to_bytes */ "Ih"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ipv4}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv4_from_bytes */ "Fh"](ptr0, len0);
        return Ipv4.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv4}
    */
    static new(data) {
        var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv4_new */ "Hh"](ptr0, len0);
        return Ipv4.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    ip() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv4_ip */ "Gh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class Ipv6 {

    static __wrap(ptr) {
        const obj = Object.create(Ipv6.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_ipv6_free */ "O"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv6_to_bytes */ "Mh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Ipv6}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv6_from_bytes */ "Jh"](ptr0, len0);
        return Ipv6.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {Ipv6}
    */
    static new(data) {
        var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv6_new */ "Lh"](ptr0, len0);
        return Ipv6.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    ip() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* ipv6_ip */ "Kh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class KESSignature {

    static __wrap(ptr) {
        const obj = Object.create(KESSignature.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_kessignature_free */ "P"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kessignature_to_bytes */ "Oh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESSignature}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kessignature_from_bytes */ "Nh"](ptr0, len0);
        return KESSignature.__wrap(ret);
    }
}
/**
*/
class KESVKey {

    static __wrap(ptr) {
        const obj = Object.create(KESVKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_kesvkey_free */ "Q"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kesvkey_to_bytes */ "Sh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kesvkey_to_bech32 */ "Rh"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {KESVKey}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kesvkey_from_bech32 */ "Ph"](ptr0, len0);
        return KESVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {KESVKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* kesvkey_from_bytes */ "Qh"](ptr0, len0);
        return KESVKey.__wrap(ret);
    }
}
/**
*/
class Language {

    static __wrap(ptr) {
        const obj = Object.create(Language.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_language_free */ "R"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* language_to_bytes */ "Wh"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Language}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* language_from_bytes */ "Th"](ptr0, len0);
        return Language.__wrap(ret);
    }
    /**
    * @returns {Language}
    */
    static new_plutus_v1() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* language_new_plutus_v1 */ "Vh"]();
        return Language.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* language_kind */ "Uh"](this.ptr);
        return ret >>> 0;
    }
}
/**
*/
class Languages {

    static __wrap(ptr) {
        const obj = Object.create(Languages.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_languages_free */ "S"](ptr);
    }
    /**
    * @returns {Languages}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* languages_new */ "ai"]();
        return Languages.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* languages_len */ "Zh"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Language}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* languages_get */ "Yh"](this.ptr, index);
        return Language.__wrap(ret);
    }
    /**
    * @param {Language} elem
    */
    add(elem) {
        _assertClass(elem, Language);
        var ptr0 = elem.ptr;
        elem.ptr = 0;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* languages_add */ "Xh"](this.ptr, ptr0);
    }
}
/**
*/
class LegacyDaedalusPrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(LegacyDaedalusPrivateKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_legacydaedalusprivatekey_free */ "T"](ptr);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {LegacyDaedalusPrivateKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* legacydaedalusprivatekey_from_bytes */ "di"](ptr0, len0);
        return LegacyDaedalusPrivateKey.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* legacydaedalusprivatekey_as_bytes */ "bi"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    chaincode() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* legacydaedalusprivatekey_chaincode */ "ci"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class LinearFee {

    static __wrap(ptr) {
        const obj = Object.create(LinearFee.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_linearfee_free */ "U"](ptr);
    }
    /**
    * @returns {BigNum}
    */
    constant() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* linearfee_constant */ "fi"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    coefficient() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* linearfee_coefficient */ "ei"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coefficient
    * @param {BigNum} constant
    * @returns {LinearFee}
    */
    static new(coefficient, constant) {
        _assertClass(coefficient, BigNum);
        _assertClass(constant, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* linearfee_new */ "gi"](coefficient.ptr, constant.ptr);
        return LinearFee.__wrap(ret);
    }
}
/**
*/
class MIRToStakeCredentials {

    static __wrap(ptr) {
        const obj = Object.create(MIRToStakeCredentials.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_mirtostakecredentials_free */ "Z"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_to_bytes */ "Xi"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MIRToStakeCredentials}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_from_bytes */ "Ri"](ptr0, len0);
        return MIRToStakeCredentials.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_new */ "Wi"]();
        return MIRToStakeCredentials.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_len */ "Vi"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {StakeCredential} cred
    * @param {Int} delta
    * @returns {Int | undefined}
    */
    insert(cred, delta) {
        _assertClass(cred, StakeCredential);
        _assertClass(delta, Int);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_insert */ "Ti"](this.ptr, cred.ptr, delta.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @param {StakeCredential} cred
    * @returns {Int | undefined}
    */
    get(cred) {
        _assertClass(cred, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_get */ "Si"](this.ptr, cred.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mirtostakecredentials_keys */ "Ui"](this.ptr);
        return StakeCredentials.__wrap(ret);
    }
}
/**
*/
class MetadataList {

    static __wrap(ptr) {
        const obj = Object.create(MetadataList.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_metadatalist_free */ "V"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_to_bytes */ "qi"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MetadataList}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_from_bytes */ "mi"](ptr0, len0);
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_new */ "pi"]();
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_len */ "oi"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionMetadatum}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_get */ "ni"](this.ptr, index);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} elem
    */
    add(elem) {
        _assertClass(elem, TransactionMetadatum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatalist_add */ "li"](this.ptr, elem.ptr);
    }
}
/**
*/
class MetadataMap {

    static __wrap(ptr) {
        const obj = Object.create(MetadataMap.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_metadatamap_free */ "W"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_to_bytes */ "Ci"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MetadataMap}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_from_bytes */ "ri"](ptr0, len0);
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataMap}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_new */ "Bi"]();
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_len */ "Ai"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {TransactionMetadatum} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert(key, value) {
        _assertClass(key, TransactionMetadatum);
        _assertClass(value, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_insert */ "wi"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert_str(key, value) {
        var ptr0 = passStringToWasm0(key, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(value, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_insert_str */ "yi"](this.ptr, ptr0, len0, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @param {TransactionMetadatum} value
    * @returns {TransactionMetadatum | undefined}
    */
    insert_i32(key, value) {
        _assertClass(value, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_insert_i32 */ "xi"](this.ptr, key, value.ptr);
        return ret === 0 ? undefined : TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {TransactionMetadatum}
    */
    get(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_get */ "si"](this.ptr, key.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} key
    * @returns {TransactionMetadatum}
    */
    get_str(key) {
        var ptr0 = passStringToWasm0(key, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_get_str */ "ui"](this.ptr, ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {number} key
    * @returns {TransactionMetadatum}
    */
    get_i32(key) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_get_i32 */ "ti"](this.ptr, key);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {TransactionMetadatum} key
    * @returns {boolean}
    */
    has(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_has */ "vi"](this.ptr, key.ptr);
        return ret !== 0;
    }
    /**
    * @returns {MetadataList}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* metadatamap_keys */ "zi"](this.ptr);
        return MetadataList.__wrap(ret);
    }
}
/**
*/
class Mint {

    static __wrap(ptr) {
        const obj = Object.create(Mint.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_mint_free */ "X"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_to_bytes */ "Li"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Mint}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_from_bytes */ "Fi"](ptr0, len0);
        return Mint.__wrap(ret);
    }
    /**
    * @returns {Mint}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_new */ "Ki"]();
        return Mint.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_len */ "Ji"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {MintAssets} value
    * @returns {MintAssets | undefined}
    */
    insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, MintAssets);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_insert */ "Hi"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {MintAssets | undefined}
    */
    get(key) {
        _assertClass(key, ScriptHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_get */ "Gi"](this.ptr, key.ptr);
        return ret === 0 ? undefined : MintAssets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mint_keys */ "Ii"](this.ptr);
        return ScriptHashes.__wrap(ret);
    }
}
/**
*/
class MintAssets {

    static __wrap(ptr) {
        const obj = Object.create(MintAssets.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_mintassets_free */ "Y"](ptr);
    }
    /**
    * @returns {MintAssets}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mintassets_new */ "Qi"]();
        return MintAssets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mintassets_len */ "Pi"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {AssetName} key
    * @param {Int} value
    * @returns {Int | undefined}
    */
    insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, Int);
        var ptr0 = value.ptr;
        value.ptr = 0;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mintassets_insert */ "Ni"](this.ptr, key.ptr, ptr0);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @param {AssetName} key
    * @returns {Int | undefined}
    */
    get(key) {
        _assertClass(key, AssetName);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mintassets_get */ "Mi"](this.ptr, key.ptr);
        return ret === 0 ? undefined : Int.__wrap(ret);
    }
    /**
    * @returns {AssetNames}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* mintassets_keys */ "Oi"](this.ptr);
        return AssetNames.__wrap(ret);
    }
}
/**
*/
class MoveInstantaneousReward {

    static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousReward.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_moveinstantaneousreward_free */ "ab"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_to_bytes */ "fj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MoveInstantaneousReward}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_from_bytes */ "aj"](ptr0, len0);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {number} pot
    * @param {BigNum} amount
    * @returns {MoveInstantaneousReward}
    */
    static new_to_other_pot(pot, amount) {
        _assertClass(amount, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_new_to_other_pot */ "cj"](pot, amount.ptr);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {number} pot
    * @param {MIRToStakeCredentials} amounts
    * @returns {MoveInstantaneousReward}
    */
    static new_to_stake_creds(pot, amounts) {
        _assertClass(amounts, MIRToStakeCredentials);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_new_to_stake_creds */ "dj"](pot, amounts.ptr);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    pot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_pot */ "ej"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_kind */ "bj"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {BigNum | undefined}
    */
    as_to_other_pot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_as_to_other_pot */ "Yi"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {MIRToStakeCredentials | undefined}
    */
    as_to_stake_creds() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousreward_as_to_stake_creds */ "Zi"](this.ptr);
        return ret === 0 ? undefined : MIRToStakeCredentials.__wrap(ret);
    }
}
/**
*/
class MoveInstantaneousRewardsCert {

    static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousRewardsCert.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_moveinstantaneousrewardscert_free */ "bb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousrewardscert_to_bytes */ "jj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MoveInstantaneousRewardsCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousrewardscert_from_bytes */ "gj"](ptr0, len0);
        return MoveInstantaneousRewardsCert.__wrap(ret);
    }
    /**
    * @returns {MoveInstantaneousReward}
    */
    move_instantaneous_reward() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousrewardscert_move_instantaneous_reward */ "hj"](this.ptr);
        return MoveInstantaneousReward.__wrap(ret);
    }
    /**
    * @param {MoveInstantaneousReward} move_instantaneous_reward
    * @returns {MoveInstantaneousRewardsCert}
    */
    static new(move_instantaneous_reward) {
        _assertClass(move_instantaneous_reward, MoveInstantaneousReward);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* moveinstantaneousrewardscert_new */ "ij"](move_instantaneous_reward.ptr);
        return MoveInstantaneousRewardsCert.__wrap(ret);
    }
}
/**
*/
class MultiAsset {

    static __wrap(ptr) {
        const obj = Object.create(MultiAsset.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_multiasset_free */ "cb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_to_bytes */ "rj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MultiAsset}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_from_bytes */ "kj"](ptr0, len0);
        return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {MultiAsset}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_new */ "pj"]();
        return MultiAsset.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_len */ "oj"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ScriptHash} key
    * @param {Assets} value
    * @returns {Assets | undefined}
    */
    insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, Assets);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_insert */ "mj"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @param {ScriptHash} key
    * @returns {Assets | undefined}
    */
    get(key) {
        _assertClass(key, ScriptHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_get */ "lj"](this.ptr, key.ptr);
        return ret === 0 ? undefined : Assets.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_keys */ "nj"](this.ptr);
        return ScriptHashes.__wrap(ret);
    }
    /**
    * removes an asset from the list if the result is 0 or less
    * @param {MultiAsset} rhs_ma
    * @returns {MultiAsset}
    */
    sub(rhs_ma) {
        _assertClass(rhs_ma, MultiAsset);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multiasset_sub */ "qj"](this.ptr, rhs_ma.ptr);
        return MultiAsset.__wrap(ret);
    }
}
/**
*/
class MultiHostName {

    static __wrap(ptr) {
        const obj = Object.create(MultiHostName.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_multihostname_free */ "db"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multihostname_to_bytes */ "vj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MultiHostName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multihostname_from_bytes */ "tj"](ptr0, len0);
        return MultiHostName.__wrap(ret);
    }
    /**
    * @returns {DNSRecordSRV}
    */
    dns_name() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multihostname_dns_name */ "sj"](this.ptr);
        return DNSRecordSRV.__wrap(ret);
    }
    /**
    * @param {DNSRecordSRV} dns_name
    * @returns {MultiHostName}
    */
    static new(dns_name) {
        _assertClass(dns_name, DNSRecordSRV);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* multihostname_new */ "uj"](dns_name.ptr);
        return MultiHostName.__wrap(ret);
    }
}
/**
*/
class NativeScript {

    static __wrap(ptr) {
        const obj = Object.create(NativeScript.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_nativescript_free */ "eb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_to_bytes */ "Lj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {NativeScript}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_from_bytes */ "Cj"](ptr0, len0);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {number} namespace
    * @returns {Ed25519KeyHash}
    */
    hash(namespace) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_hash */ "Dj"](this.ptr, namespace);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {ScriptPubkey} script_pubkey
    * @returns {NativeScript}
    */
    static new_script_pubkey(script_pubkey) {
        _assertClass(script_pubkey, ScriptPubkey);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_script_pubkey */ "Ij"](script_pubkey.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAll} script_all
    * @returns {NativeScript}
    */
    static new_script_all(script_all) {
        _assertClass(script_all, ScriptAll);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_script_all */ "Fj"](script_all.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptAny} script_any
    * @returns {NativeScript}
    */
    static new_script_any(script_any) {
        _assertClass(script_any, ScriptAny);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_script_any */ "Gj"](script_any.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {ScriptNOfK} script_n_of_k
    * @returns {NativeScript}
    */
    static new_script_n_of_k(script_n_of_k) {
        _assertClass(script_n_of_k, ScriptNOfK);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_script_n_of_k */ "Hj"](script_n_of_k.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockStart} timelock_start
    * @returns {NativeScript}
    */
    static new_timelock_start(timelock_start) {
        _assertClass(timelock_start, TimelockStart);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_timelock_start */ "Kj"](timelock_start.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {TimelockExpiry} timelock_expiry
    * @returns {NativeScript}
    */
    static new_timelock_expiry(timelock_expiry) {
        _assertClass(timelock_expiry, TimelockExpiry);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_new_timelock_expiry */ "Jj"](timelock_expiry.ptr);
        return NativeScript.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_kind */ "Ej"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {ScriptPubkey | undefined}
    */
    as_script_pubkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_script_pubkey */ "zj"](this.ptr);
        return ret === 0 ? undefined : ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {ScriptAll | undefined}
    */
    as_script_all() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_script_all */ "wj"](this.ptr);
        return ret === 0 ? undefined : ScriptAll.__wrap(ret);
    }
    /**
    * @returns {ScriptAny | undefined}
    */
    as_script_any() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_script_any */ "xj"](this.ptr);
        return ret === 0 ? undefined : ScriptAny.__wrap(ret);
    }
    /**
    * @returns {ScriptNOfK | undefined}
    */
    as_script_n_of_k() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_script_n_of_k */ "yj"](this.ptr);
        return ret === 0 ? undefined : ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {TimelockStart | undefined}
    */
    as_timelock_start() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_timelock_start */ "Bj"](this.ptr);
        return ret === 0 ? undefined : TimelockStart.__wrap(ret);
    }
    /**
    * @returns {TimelockExpiry | undefined}
    */
    as_timelock_expiry() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescript_as_timelock_expiry */ "Aj"](this.ptr);
        return ret === 0 ? undefined : TimelockExpiry.__wrap(ret);
    }
}
/**
*/
class NativeScripts {

    static __wrap(ptr) {
        const obj = Object.create(NativeScripts.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_nativescripts_free */ "fb"](ptr);
    }
    /**
    * @returns {NativeScripts}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescripts_new */ "Pj"]();
        return NativeScripts.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescripts_len */ "Oj"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {NativeScript}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescripts_get */ "Nj"](this.ptr, index);
        return NativeScript.__wrap(ret);
    }
    /**
    * @param {NativeScript} elem
    */
    add(elem) {
        _assertClass(elem, NativeScript);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nativescripts_add */ "Mj"](this.ptr, elem.ptr);
    }
}
/**
*/
class NetworkId {

    static __wrap(ptr) {
        const obj = Object.create(NetworkId.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_networkid_free */ "gb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkid_to_bytes */ "Uj"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {NetworkId}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkid_from_bytes */ "Qj"](ptr0, len0);
        return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */
    static testnet() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkid_testnet */ "Tj"]();
        return NetworkId.__wrap(ret);
    }
    /**
    * @returns {NetworkId}
    */
    static mainnet() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkid_mainnet */ "Sj"]();
        return NetworkId.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkid_kind */ "Rj"](this.ptr);
        return ret >>> 0;
    }
}
/**
*/
class NetworkInfo {

    static __wrap(ptr) {
        const obj = Object.create(NetworkInfo.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_networkinfo_free */ "hb"](ptr);
    }
    /**
    * @param {number} network_id
    * @param {number} protocol_magic
    * @returns {NetworkInfo}
    */
    static new(network_id, protocol_magic) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkinfo_new */ "Xj"](network_id, protocol_magic);
        return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    network_id() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkinfo_network_id */ "Wj"](this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    protocol_magic() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkinfo_protocol_magic */ "Yj"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {NetworkInfo}
    */
    static testnet() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkinfo_testnet */ "Zj"]();
        return NetworkInfo.__wrap(ret);
    }
    /**
    * @returns {NetworkInfo}
    */
    static mainnet() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* networkinfo_mainnet */ "Vj"]();
        return NetworkInfo.__wrap(ret);
    }
}
/**
*/
class Nonce {

    static __wrap(ptr) {
        const obj = Object.create(Nonce.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_nonce_free */ "ib"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nonce_to_bytes */ "ek"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Nonce}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nonce_from_bytes */ "ak"](ptr0, len0);
        return Nonce.__wrap(ret);
    }
    /**
    * @returns {Nonce}
    */
    static new_identity() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nonce_new_identity */ "dk"]();
        return Nonce.__wrap(ret);
    }
    /**
    * @param {Uint8Array} hash
    * @returns {Nonce}
    */
    static new_from_hash(hash) {
        var ptr0 = passArray8ToWasm0(hash, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nonce_new_from_hash */ "ck"](ptr0, len0);
        return Nonce.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    get_hash() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* nonce_get_hash */ "bk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class OperationalCert {

    static __wrap(ptr) {
        const obj = Object.create(OperationalCert.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_operationalcert_free */ "jb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_to_bytes */ "lk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {OperationalCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_from_bytes */ "fk"](ptr0, len0);
        return OperationalCert.__wrap(ret);
    }
    /**
    * @returns {KESVKey}
    */
    hot_vkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_hot_vkey */ "gk"](this.ptr);
        return KESVKey.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    sequence_number() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_sequence_number */ "jk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    kes_period() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_kes_period */ "hk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Ed25519Signature}
    */
    sigma() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_sigma */ "kk"](this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
    /**
    * @param {KESVKey} hot_vkey
    * @param {number} sequence_number
    * @param {number} kes_period
    * @param {Ed25519Signature} sigma
    * @returns {OperationalCert}
    */
    static new(hot_vkey, sequence_number, kes_period, sigma) {
        _assertClass(hot_vkey, KESVKey);
        _assertClass(sigma, Ed25519Signature);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* operationalcert_new */ "ik"](hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
        return OperationalCert.__wrap(ret);
    }
}
/**
*/
class PlutusData {

    static __wrap(ptr) {
        const obj = Object.create(PlutusData.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_plutusdata_free */ "kb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_to_bytes */ "yk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusData}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_from_bytes */ "rk"](ptr0, len0);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {ConstrPlutusData} constr_plutus_data
    * @returns {PlutusData}
    */
    static new_constr_plutus_data(constr_plutus_data) {
        _assertClass(constr_plutus_data, ConstrPlutusData);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_new_constr_plutus_data */ "uk"](constr_plutus_data.ptr);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusMap} map
    * @returns {PlutusData}
    */
    static new_map(map) {
        _assertClass(map, PlutusMap);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_new_map */ "xk"](map.ptr);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusList} list
    * @returns {PlutusData}
    */
    static new_list(list) {
        _assertClass(list, PlutusList);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_new_list */ "wk"](list.ptr);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {BigInt} integer
    * @returns {PlutusData}
    */
    static new_integer(integer) {
        _assertClass(integer, BigInt);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_new_integer */ "vk"](integer.ptr);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusData}
    */
    static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_new_bytes */ "tk"](ptr0, len0);
        return PlutusData.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_kind */ "sk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {ConstrPlutusData | undefined}
    */
    as_constr_plutus_data() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_as_constr_plutus_data */ "nk"](this.ptr);
        return ret === 0 ? undefined : ConstrPlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusMap | undefined}
    */
    as_map() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_as_map */ "qk"](this.ptr);
        return ret === 0 ? undefined : PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusList | undefined}
    */
    as_list() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_as_list */ "pk"](this.ptr);
        return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @returns {BigInt | undefined}
    */
    as_integer() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_as_integer */ "ok"](this.ptr);
        return ret === 0 ? undefined : BigInt.__wrap(ret);
    }
    /**
    * @returns {Uint8Array | undefined}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusdata_as_bytes */ "mk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU8FromWasm0(r0, r1).slice();
                _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            }
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class PlutusList {

    static __wrap(ptr) {
        const obj = Object.create(PlutusList.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_plutuslist_free */ "lb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_to_bytes */ "Ek"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusList}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_from_bytes */ "Ak"](ptr0, len0);
        return PlutusList.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_new */ "Dk"]();
        return PlutusList.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_len */ "Ck"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusData}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_get */ "Bk"](this.ptr, index);
        return PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusData} elem
    */
    add(elem) {
        _assertClass(elem, PlutusData);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutuslist_add */ "zk"](this.ptr, elem.ptr);
    }
}
/**
*/
class PlutusMap {

    static __wrap(ptr) {
        const obj = Object.create(PlutusMap.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_plutusmap_free */ "mb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_to_bytes */ "Lk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusMap}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_from_bytes */ "Fk"](ptr0, len0);
        return PlutusMap.__wrap(ret);
    }
    /**
    * @returns {PlutusMap}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_new */ "Kk"]();
        return PlutusMap.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_len */ "Jk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {PlutusData} key
    * @param {PlutusData} value
    * @returns {PlutusData | undefined}
    */
    insert(key, value) {
        _assertClass(key, PlutusData);
        _assertClass(value, PlutusData);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_insert */ "Hk"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : PlutusData.__wrap(ret);
    }
    /**
    * @param {PlutusData} key
    * @returns {PlutusData | undefined}
    */
    get(key) {
        _assertClass(key, PlutusData);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_get */ "Gk"](this.ptr, key.ptr);
        return ret === 0 ? undefined : PlutusData.__wrap(ret);
    }
    /**
    * @returns {PlutusList}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusmap_keys */ "Ik"](this.ptr);
        return PlutusList.__wrap(ret);
    }
}
/**
*/
class PlutusScript {

    static __wrap(ptr) {
        const obj = Object.create(PlutusScript.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_plutusscript_free */ "nb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscript_to_bytes */ "Pk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusScript}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscript_from_bytes */ "Nk"](ptr0, len0);
        return PlutusScript.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusScript}
    */
    static new(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscript_new */ "Ok"](ptr0, len0);
        return PlutusScript.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscript_bytes */ "Mk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
}
/**
*/
class PlutusScripts {

    static __wrap(ptr) {
        const obj = Object.create(PlutusScripts.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_plutusscripts_free */ "ob"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_to_bytes */ "Vk"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PlutusScripts}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_from_bytes */ "Rk"](ptr0, len0);
        return PlutusScripts.__wrap(ret);
    }
    /**
    * @returns {PlutusScripts}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_new */ "Uk"]();
        return PlutusScripts.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_len */ "Tk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PlutusScript}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_get */ "Sk"](this.ptr, index);
        return PlutusScript.__wrap(ret);
    }
    /**
    * @param {PlutusScript} elem
    */
    add(elem) {
        _assertClass(elem, PlutusScript);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* plutusscripts_add */ "Qk"](this.ptr, elem.ptr);
    }
}
/**
*/
class Pointer {

    static __wrap(ptr) {
        const obj = Object.create(Pointer.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_pointer_free */ "pb"](ptr);
    }
    /**
    * @param {number} slot
    * @param {number} tx_index
    * @param {number} cert_index
    * @returns {Pointer}
    */
    static new(slot, tx_index, cert_index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointer_new */ "Xk"](slot, tx_index, cert_index);
        return Pointer.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointer_slot */ "Yk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    tx_index() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointer_tx_index */ "Zk"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cert_index() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointer_cert_index */ "Wk"](this.ptr);
        return ret >>> 0;
    }
}
/**
*/
class PointerAddress {

    static __wrap(ptr) {
        const obj = Object.create(PointerAddress.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_pointeraddress_free */ "qb"](ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @param {Pointer} stake
    * @returns {PointerAddress}
    */
    static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, Pointer);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointeraddress_new */ "bl"](network, payment.ptr, stake.ptr);
        return PointerAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointeraddress_payment_cred */ "cl"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Pointer}
    */
    stake_pointer() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointeraddress_stake_pointer */ "dl"](this.ptr);
        return Pointer.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointeraddress_to_address */ "el"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {PointerAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* pointeraddress_from_address */ "al"](addr.ptr);
        return ret === 0 ? undefined : PointerAddress.__wrap(ret);
    }
}
/**
*/
class PoolMetadata {

    static __wrap(ptr) {
        const obj = Object.create(PoolMetadata.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_poolmetadata_free */ "rb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadata_to_bytes */ "il"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolMetadata}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadata_from_bytes */ "fl"](ptr0, len0);
        return PoolMetadata.__wrap(ret);
    }
    /**
    * @returns {URL}
    */
    url() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadata_url */ "jl"](this.ptr);
        return URL.__wrap(ret);
    }
    /**
    * @returns {PoolMetadataHash}
    */
    pool_metadata_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadata_pool_metadata_hash */ "hl"](this.ptr);
        return PoolMetadataHash.__wrap(ret);
    }
    /**
    * @param {URL} url
    * @param {PoolMetadataHash} pool_metadata_hash
    * @returns {PoolMetadata}
    */
    static new(url, pool_metadata_hash) {
        _assertClass(url, URL);
        _assertClass(pool_metadata_hash, PoolMetadataHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadata_new */ "gl"](url.ptr, pool_metadata_hash.ptr);
        return PoolMetadata.__wrap(ret);
    }
}
/**
*/
class PoolMetadataHash {

    static __wrap(ptr) {
        const obj = Object.create(PoolMetadataHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_poolmetadatahash_free */ "sb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadatahash_to_bytes */ "nl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadatahash_to_bech32 */ "ml"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {PoolMetadataHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadatahash_from_bech32 */ "kl"](ptr0, len0);
        return PoolMetadataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolMetadataHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolmetadatahash_from_bytes */ "ll"](ptr0, len0);
        return PoolMetadataHash.__wrap(ret);
    }
}
/**
*/
class PoolParams {

    static __wrap(ptr) {
        const obj = Object.create(PoolParams.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_poolparams_free */ "tb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_to_bytes */ "yl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolParams}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_from_bytes */ "pl"](ptr0, len0);
        return PoolParams.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    operator() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_operator */ "sl"](this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {VRFKeyHash}
    */
    vrf_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_vrf_keyhash */ "zl"](this.ptr);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    pledge() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_pledge */ "tl"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    cost() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_cost */ "ol"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {UnitInterval}
    */
    margin() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_margin */ "ql"](this.ptr);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {RewardAddress}
    */
    reward_account() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_reward_account */ "xl"](this.ptr);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHashes}
    */
    pool_owners() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_pool_owners */ "vl"](this.ptr);
        return Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */
    relays() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_relays */ "wl"](this.ptr);
        return Relays.__wrap(ret);
    }
    /**
    * @returns {PoolMetadata | undefined}
    */
    pool_metadata() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_pool_metadata */ "ul"](this.ptr);
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
    static new(operator, vrf_keyhash, pledge, cost, margin, reward_account, pool_owners, relays, pool_metadata) {
        _assertClass(operator, Ed25519KeyHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        _assertClass(pledge, BigNum);
        _assertClass(cost, BigNum);
        _assertClass(margin, UnitInterval);
        _assertClass(reward_account, RewardAddress);
        _assertClass(pool_owners, Ed25519KeyHashes);
        _assertClass(relays, Relays);
        let ptr0 = 0;
        if (!isLikeNone(pool_metadata)) {
            _assertClass(pool_metadata, PoolMetadata);
            ptr0 = pool_metadata.ptr;
            pool_metadata.ptr = 0;
        }
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolparams_new */ "rl"](operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
        return PoolParams.__wrap(ret);
    }
}
/**
*/
class PoolRegistration {

    static __wrap(ptr) {
        const obj = Object.create(PoolRegistration.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_poolregistration_free */ "ub"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolregistration_to_bytes */ "Dl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolRegistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolregistration_from_bytes */ "Al"](ptr0, len0);
        return PoolRegistration.__wrap(ret);
    }
    /**
    * @returns {PoolParams}
    */
    pool_params() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolregistration_pool_params */ "Cl"](this.ptr);
        return PoolParams.__wrap(ret);
    }
    /**
    * @param {PoolParams} pool_params
    * @returns {PoolRegistration}
    */
    static new(pool_params) {
        _assertClass(pool_params, PoolParams);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolregistration_new */ "Bl"](pool_params.ptr);
        return PoolRegistration.__wrap(ret);
    }
}
/**
*/
class PoolRetirement {

    static __wrap(ptr) {
        const obj = Object.create(PoolRetirement.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_poolretirement_free */ "vb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolretirement_to_bytes */ "Il"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PoolRetirement}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolretirement_from_bytes */ "Fl"](ptr0, len0);
        return PoolRetirement.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    pool_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolretirement_pool_keyhash */ "Hl"](this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    epoch() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolretirement_epoch */ "El"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {Ed25519KeyHash} pool_keyhash
    * @param {number} epoch
    * @returns {PoolRetirement}
    */
    static new(pool_keyhash, epoch) {
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* poolretirement_new */ "Gl"](pool_keyhash.ptr, epoch);
        return PoolRetirement.__wrap(ret);
    }
}
/**
*/
class PrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(PrivateKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_privatekey_free */ "wb"](ptr);
    }
    /**
    * @returns {PublicKey}
    */
    to_public() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_to_public */ "Ql"](this.ptr);
        return PublicKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    static generate_ed25519() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_generate_ed25519 */ "Ml"]();
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PrivateKey}
    */
    static generate_ed25519extended() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_generate_ed25519extended */ "Nl"]();
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_to_bech32 */ "Pl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_as_bytes */ "Jl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */
    static from_extended_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_from_extended_bytes */ "Kl"](ptr0, len0);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PrivateKey}
    */
    static from_normal_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_from_normal_bytes */ "Ll"](ptr0, len0);
        return PrivateKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} message
    * @returns {Ed25519Signature}
    */
    sign(message) {
        var ptr0 = passArray8ToWasm0(message, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* privatekey_sign */ "Ol"](this.ptr, ptr0, len0);
        return Ed25519Signature.__wrap(ret);
    }
}
/**
*/
class ProposedProtocolParameterUpdates {

    static __wrap(ptr) {
        const obj = Object.create(ProposedProtocolParameterUpdates.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_proposedprotocolparameterupdates_free */ "xb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_to_bytes */ "Xl"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProposedProtocolParameterUpdates}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_from_bytes */ "Rl"](ptr0, len0);
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_new */ "Wl"]();
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_len */ "Vl"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {GenesisHash} key
    * @param {ProtocolParamUpdate} value
    * @returns {ProtocolParamUpdate | undefined}
    */
    insert(key, value) {
        _assertClass(key, GenesisHash);
        _assertClass(value, ProtocolParamUpdate);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_insert */ "Tl"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @param {GenesisHash} key
    * @returns {ProtocolParamUpdate | undefined}
    */
    get(key) {
        _assertClass(key, GenesisHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_get */ "Sl"](this.ptr, key.ptr);
        return ret === 0 ? undefined : ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @returns {GenesisHashes}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* proposedprotocolparameterupdates_keys */ "Ul"](this.ptr);
        return GenesisHashes.__wrap(ret);
    }
}
/**
*/
class ProtocolParamUpdate {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolParamUpdate.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_protocolparamupdate_free */ "yb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_to_bytes */ "Rm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolParamUpdate}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_from_bytes */ "em"](ptr0, len0);
        return ProtocolParamUpdate.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_a
    */
    set_minfee_a(minfee_a) {
        _assertClass(minfee_a, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_minfee_a */ "Km"](this.ptr, minfee_a.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    minfee_a() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_minfee_a */ "om"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} minfee_b
    */
    set_minfee_b(minfee_b) {
        _assertClass(minfee_b, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_minfee_b */ "Lm"](this.ptr, minfee_b.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    minfee_b() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_minfee_b */ "pm"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_block_body_size
    */
    set_max_block_body_size(max_block_body_size) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_block_body_size */ "Cm"](this.ptr, max_block_body_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_block_body_size() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_block_body_size */ "gm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {number} max_tx_size
    */
    set_max_tx_size(max_tx_size) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_tx_size */ "Hm"](this.ptr, max_tx_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_tx_size() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_tx_size */ "lm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {number} max_block_header_size
    */
    set_max_block_header_size(max_block_header_size) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_block_header_size */ "Em"](this.ptr, max_block_header_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_block_header_size() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_block_header_size */ "im"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {BigNum} key_deposit
    */
    set_key_deposit(key_deposit) {
        _assertClass(key_deposit, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_key_deposit */ "Bm"](this.ptr, key_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    key_deposit() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_key_deposit */ "fm"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} pool_deposit
    */
    set_pool_deposit(pool_deposit) {
        _assertClass(pool_deposit, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_pool_deposit */ "Nm"](this.ptr, pool_deposit.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    pool_deposit() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_pool_deposit */ "sm"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {number} max_epoch
    */
    set_max_epoch(max_epoch) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_epoch */ "Fm"](this.ptr, max_epoch);
    }
    /**
    * @returns {number | undefined}
    */
    max_epoch() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_epoch */ "jm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {number} n_opt
    */
    set_n_opt(n_opt) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_n_opt */ "Mm"](this.ptr, n_opt);
    }
    /**
    * @returns {number | undefined}
    */
    n_opt() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_n_opt */ "qm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {UnitInterval} pool_pledge_influence
    */
    set_pool_pledge_influence(pool_pledge_influence) {
        _assertClass(pool_pledge_influence, UnitInterval);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_pool_pledge_influence */ "Om"](this.ptr, pool_pledge_influence.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    pool_pledge_influence() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_pool_pledge_influence */ "tm"](this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} expansion_rate
    */
    set_expansion_rate(expansion_rate) {
        _assertClass(expansion_rate, UnitInterval);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_expansion_rate */ "zm"](this.ptr, expansion_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    expansion_rate() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_expansion_rate */ "cm"](this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} treasury_growth_rate
    */
    set_treasury_growth_rate(treasury_growth_rate) {
        _assertClass(treasury_growth_rate, UnitInterval);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_treasury_growth_rate */ "Qm"](this.ptr, treasury_growth_rate.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    treasury_growth_rate() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_treasury_growth_rate */ "Sm"](this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {UnitInterval} d
    */
    set_d(d) {
        _assertClass(d, UnitInterval);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_d */ "xm"](this.ptr, d.ptr);
    }
    /**
    * @returns {UnitInterval | undefined}
    */
    d() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_d */ "am"](this.ptr);
        return ret === 0 ? undefined : UnitInterval.__wrap(ret);
    }
    /**
    * @param {Nonce} extra_entropy
    */
    set_extra_entropy(extra_entropy) {
        _assertClass(extra_entropy, Nonce);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_extra_entropy */ "Am"](this.ptr, extra_entropy.ptr);
    }
    /**
    * @returns {Nonce | undefined}
    */
    extra_entropy() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_extra_entropy */ "dm"](this.ptr);
        return ret === 0 ? undefined : Nonce.__wrap(ret);
    }
    /**
    * @param {ProtocolVersions} protocol_version
    */
    set_protocol_version(protocol_version) {
        _assertClass(protocol_version, ProtocolVersions);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_protocol_version */ "Pm"](this.ptr, protocol_version.ptr);
    }
    /**
    * @returns {ProtocolVersions | undefined}
    */
    protocol_version() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_protocol_version */ "um"](this.ptr);
        return ret === 0 ? undefined : ProtocolVersions.__wrap(ret);
    }
    /**
    * @param {BigNum} min_pool_cost
    */
    set_min_pool_cost(min_pool_cost) {
        _assertClass(min_pool_cost, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_min_pool_cost */ "Jm"](this.ptr, min_pool_cost.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    min_pool_cost() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_min_pool_cost */ "nm"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} ada_per_utxo_byte
    */
    set_ada_per_utxo_byte(ada_per_utxo_byte) {
        _assertClass(ada_per_utxo_byte, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_ada_per_utxo_byte */ "vm"](this.ptr, ada_per_utxo_byte.ptr);
    }
    /**
    * @returns {BigNum | undefined}
    */
    ada_per_utxo_byte() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_ada_per_utxo_byte */ "Yl"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {Costmdls} cost_models
    */
    set_cost_models(cost_models) {
        _assertClass(cost_models, Costmdls);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_cost_models */ "wm"](this.ptr, cost_models.ptr);
    }
    /**
    * @returns {Costmdls | undefined}
    */
    cost_models() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_cost_models */ "Zl"](this.ptr);
        return ret === 0 ? undefined : Costmdls.__wrap(ret);
    }
    /**
    * @param {ExUnitPrices} execution_costs
    */
    set_execution_costs(execution_costs) {
        _assertClass(execution_costs, ExUnitPrices);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_execution_costs */ "ym"](this.ptr, execution_costs.ptr);
    }
    /**
    * @returns {ExUnitPrices | undefined}
    */
    execution_costs() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_execution_costs */ "bm"](this.ptr);
        return ret === 0 ? undefined : ExUnitPrices.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_tx_ex_units
    */
    set_max_tx_ex_units(max_tx_ex_units) {
        _assertClass(max_tx_ex_units, ExUnits);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_tx_ex_units */ "Gm"](this.ptr, max_tx_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */
    max_tx_ex_units() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_tx_ex_units */ "km"](this.ptr);
        return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {ExUnits} max_block_ex_units
    */
    set_max_block_ex_units(max_block_ex_units) {
        _assertClass(max_block_ex_units, ExUnits);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_block_ex_units */ "Dm"](this.ptr, max_block_ex_units.ptr);
    }
    /**
    * @returns {ExUnits | undefined}
    */
    max_block_ex_units() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_block_ex_units */ "hm"](this.ptr);
        return ret === 0 ? undefined : ExUnits.__wrap(ret);
    }
    /**
    * @param {number} max_value_size
    */
    set_max_value_size(max_value_size) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_set_max_value_size */ "Im"](this.ptr, max_value_size);
    }
    /**
    * @returns {number | undefined}
    */
    max_value_size() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_max_value_size */ "mm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {ProtocolParamUpdate}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolparamupdate_new */ "rm"]();
        return ProtocolParamUpdate.__wrap(ret);
    }
}
/**
*/
class ProtocolVersion {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolVersion.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_protocolversion_free */ "zb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversion_to_bytes */ "Xm"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolVersion}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversion_from_bytes */ "Tm"](ptr0, len0);
        return ProtocolVersion.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    major() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversion_major */ "Um"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    minor() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversion_minor */ "Vm"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} major
    * @param {number} minor
    * @returns {ProtocolVersion}
    */
    static new(major, minor) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversion_new */ "Wm"](major, minor);
        return ProtocolVersion.__wrap(ret);
    }
}
/**
*/
class ProtocolVersions {

    static __wrap(ptr) {
        const obj = Object.create(ProtocolVersions.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_protocolversions_free */ "Ab"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_to_bytes */ "dn"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProtocolVersions}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_from_bytes */ "Zm"](ptr0, len0);
        return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {ProtocolVersions}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_new */ "cn"]();
        return ProtocolVersions.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_len */ "bn"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ProtocolVersion}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_get */ "an"](this.ptr, index);
        return ProtocolVersion.__wrap(ret);
    }
    /**
    * @param {ProtocolVersion} elem
    */
    add(elem) {
        _assertClass(elem, ProtocolVersion);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* protocolversions_add */ "Ym"](this.ptr, elem.ptr);
    }
}
/**
* ED25519 key used as public key
*/
class PublicKey {

    static __wrap(ptr) {
        const obj = Object.create(PublicKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_publickey_free */ "Bb"](ptr);
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
    static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_from_bech32 */ "fn"](ptr0, len0);
        return PublicKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    to_bech32() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_to_bech32 */ "in"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_as_bytes */ "en"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {PublicKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_from_bytes */ "gn"](ptr0, len0);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} data
    * @param {Ed25519Signature} signature
    * @returns {boolean}
    */
    verify(data, signature) {
        var ptr0 = passArray8ToWasm0(data, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(signature, Ed25519Signature);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_verify */ "jn"](this.ptr, ptr0, len0, signature.ptr);
        return ret !== 0;
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickey_hash */ "hn"](this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
}
/**
*/
class PublicKeys {

    static __wrap(ptr) {
        const obj = Object.create(PublicKeys.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_publickeys_free */ "Cb"](ptr);
    }
    /**
    */
    constructor() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickeys_new */ "mn"]();
        return PublicKeys.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    size() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickeys_size */ "nn"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {PublicKey}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickeys_get */ "ln"](this.ptr, index);
        return PublicKey.__wrap(ret);
    }
    /**
    * @param {PublicKey} key
    */
    add(key) {
        _assertClass(key, PublicKey);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* publickeys_add */ "kn"](this.ptr, key.ptr);
    }
}
/**
*/
class Redeemer {

    static __wrap(ptr) {
        const obj = Object.create(Redeemer.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_redeemer_free */ "Db"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_to_bytes */ "un"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Redeemer}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_from_bytes */ "qn"](ptr0, len0);
        return Redeemer.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */
    tag() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_tag */ "tn"](this.ptr);
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    index() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_index */ "rn"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {PlutusData}
    */
    data() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_data */ "on"](this.ptr);
        return PlutusData.__wrap(ret);
    }
    /**
    * @returns {ExUnits}
    */
    ex_units() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_ex_units */ "pn"](this.ptr);
        return ExUnits.__wrap(ret);
    }
    /**
    * @param {RedeemerTag} tag
    * @param {BigNum} index
    * @param {PlutusData} data
    * @param {ExUnits} ex_units
    * @returns {Redeemer}
    */
    static new(tag, index, data, ex_units) {
        _assertClass(tag, RedeemerTag);
        _assertClass(index, BigNum);
        _assertClass(data, PlutusData);
        _assertClass(ex_units, ExUnits);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemer_new */ "sn"](tag.ptr, index.ptr, data.ptr, ex_units.ptr);
        return Redeemer.__wrap(ret);
    }
}
/**
*/
class RedeemerTag {

    static __wrap(ptr) {
        const obj = Object.create(RedeemerTag.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_redeemertag_free */ "Fb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_to_bytes */ "Hn"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {RedeemerTag}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_from_bytes */ "Bn"](ptr0, len0);
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */
    static new_spend() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_new_spend */ "Gn"]();
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */
    static new_mint() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_new_mint */ "En"]();
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */
    static new_cert() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_new_cert */ "Dn"]();
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {RedeemerTag}
    */
    static new_reward() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_new_reward */ "Fn"]();
        return RedeemerTag.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemertag_kind */ "Cn"](this.ptr);
        return ret >>> 0;
    }
}
/**
*/
class Redeemers {

    static __wrap(ptr) {
        const obj = Object.create(Redeemers.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_redeemers_free */ "Eb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_to_bytes */ "An"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Redeemers}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_from_bytes */ "wn"](ptr0, len0);
        return Redeemers.__wrap(ret);
    }
    /**
    * @returns {Redeemers}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_new */ "zn"]();
        return Redeemers.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_len */ "yn"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Redeemer}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_get */ "xn"](this.ptr, index);
        return Redeemer.__wrap(ret);
    }
    /**
    * @param {Redeemer} elem
    */
    add(elem) {
        _assertClass(elem, Redeemer);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* redeemers_add */ "vn"](this.ptr, elem.ptr);
    }
}
/**
*/
class Relay {

    static __wrap(ptr) {
        const obj = Object.create(Relay.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_relay_free */ "Gb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_to_bytes */ "Qn"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Relay}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_from_bytes */ "Ln"](ptr0, len0);
        return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostAddr} single_host_addr
    * @returns {Relay}
    */
    static new_single_host_addr(single_host_addr) {
        _assertClass(single_host_addr, SingleHostAddr);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_new_single_host_addr */ "On"](single_host_addr.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @param {SingleHostName} single_host_name
    * @returns {Relay}
    */
    static new_single_host_name(single_host_name) {
        _assertClass(single_host_name, SingleHostName);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_new_single_host_name */ "Pn"](single_host_name.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @param {MultiHostName} multi_host_name
    * @returns {Relay}
    */
    static new_multi_host_name(multi_host_name) {
        _assertClass(multi_host_name, MultiHostName);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_new_multi_host_name */ "Nn"](multi_host_name.ptr);
        return Relay.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_kind */ "Mn"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {SingleHostAddr | undefined}
    */
    as_single_host_addr() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_as_single_host_addr */ "Jn"](this.ptr);
        return ret === 0 ? undefined : SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {SingleHostName | undefined}
    */
    as_single_host_name() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_as_single_host_name */ "Kn"](this.ptr);
        return ret === 0 ? undefined : SingleHostName.__wrap(ret);
    }
    /**
    * @returns {MultiHostName | undefined}
    */
    as_multi_host_name() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relay_as_multi_host_name */ "In"](this.ptr);
        return ret === 0 ? undefined : MultiHostName.__wrap(ret);
    }
}
/**
*/
class Relays {

    static __wrap(ptr) {
        const obj = Object.create(Relays.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_relays_free */ "Hb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_to_bytes */ "Wn"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Relays}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_from_bytes */ "Sn"](ptr0, len0);
        return Relays.__wrap(ret);
    }
    /**
    * @returns {Relays}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_new */ "Vn"]();
        return Relays.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_len */ "Un"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Relay}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_get */ "Tn"](this.ptr, index);
        return Relay.__wrap(ret);
    }
    /**
    * @param {Relay} elem
    */
    add(elem) {
        _assertClass(elem, Relay);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* relays_add */ "Rn"](this.ptr, elem.ptr);
    }
}
/**
*/
class RewardAddress {

    static __wrap(ptr) {
        const obj = Object.create(RewardAddress.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_rewardaddress_free */ "Ib"](ptr);
    }
    /**
    * @param {number} network
    * @param {StakeCredential} payment
    * @returns {RewardAddress}
    */
    static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddress_new */ "Yn"](network, payment.ptr);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    payment_cred() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddress_payment_cred */ "Zn"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    to_address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddress_to_address */ "ao"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @param {Address} addr
    * @returns {RewardAddress | undefined}
    */
    static from_address(addr) {
        _assertClass(addr, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddress_from_address */ "Xn"](addr.ptr);
        return ret === 0 ? undefined : RewardAddress.__wrap(ret);
    }
}
/**
*/
class RewardAddresses {

    static __wrap(ptr) {
        const obj = Object.create(RewardAddresses.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_rewardaddresses_free */ "Jb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_to_bytes */ "go"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {RewardAddresses}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_from_bytes */ "co"](ptr0, len0);
        return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_new */ "fo"]();
        return RewardAddresses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_len */ "eo"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {RewardAddress}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_get */ "do"](this.ptr, index);
        return RewardAddress.__wrap(ret);
    }
    /**
    * @param {RewardAddress} elem
    */
    add(elem) {
        _assertClass(elem, RewardAddress);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* rewardaddresses_add */ "bo"](this.ptr, elem.ptr);
    }
}
/**
*/
class ScriptAll {

    static __wrap(ptr) {
        const obj = Object.create(ScriptAll.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scriptall_free */ "Kb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptall_to_bytes */ "ko"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptAll}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptall_from_bytes */ "ho"](ptr0, len0);
        return ScriptAll.__wrap(ret);
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptall_native_scripts */ "io"](this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAll}
    */
    static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptall_new */ "jo"](native_scripts.ptr);
        return ScriptAll.__wrap(ret);
    }
}
/**
*/
class ScriptAny {

    static __wrap(ptr) {
        const obj = Object.create(ScriptAny.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scriptany_free */ "Lb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptany_to_bytes */ "oo"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptAny}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptany_from_bytes */ "lo"](ptr0, len0);
        return ScriptAny.__wrap(ret);
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptany_native_scripts */ "mo"](this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    * @returns {ScriptAny}
    */
    static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptany_new */ "no"](native_scripts.ptr);
        return ScriptAny.__wrap(ret);
    }
}
/**
*/
class ScriptDataHash {

    static __wrap(ptr) {
        const obj = Object.create(ScriptDataHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scriptdatahash_free */ "Mb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptdatahash_to_bytes */ "so"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptdatahash_to_bech32 */ "ro"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {ScriptDataHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptdatahash_from_bech32 */ "po"](ptr0, len0);
        return ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptDataHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptdatahash_from_bytes */ "qo"](ptr0, len0);
        return ScriptDataHash.__wrap(ret);
    }
}
/**
*/
class ScriptHash {

    static __wrap(ptr) {
        const obj = Object.create(ScriptHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scripthash_free */ "Nb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthash_to_bytes */ "wo"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthash_to_bech32 */ "vo"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {ScriptHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthash_from_bech32 */ "to"](ptr0, len0);
        return ScriptHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthash_from_bytes */ "uo"](ptr0, len0);
        return ScriptHash.__wrap(ret);
    }
}
/**
*/
class ScriptHashes {

    static __wrap(ptr) {
        const obj = Object.create(ScriptHashes.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scripthashes_free */ "Ob"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_to_bytes */ "Co"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptHashes}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_from_bytes */ "yo"](ptr0, len0);
        return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {ScriptHashes}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_new */ "Bo"]();
        return ScriptHashes.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_len */ "Ao"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {ScriptHash}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_get */ "zo"](this.ptr, index);
        return ScriptHash.__wrap(ret);
    }
    /**
    * @param {ScriptHash} elem
    */
    add(elem) {
        _assertClass(elem, ScriptHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scripthashes_add */ "xo"](this.ptr, elem.ptr);
    }
}
/**
*/
class ScriptNOfK {

    static __wrap(ptr) {
        const obj = Object.create(ScriptNOfK.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scriptnofk_free */ "Pb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptnofk_to_bytes */ "Ho"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptNOfK}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptnofk_from_bytes */ "Do"](ptr0, len0);
        return ScriptNOfK.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    n() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptnofk_n */ "Eo"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {NativeScripts}
    */
    native_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptnofk_native_scripts */ "Fo"](this.ptr);
        return NativeScripts.__wrap(ret);
    }
    /**
    * @param {number} n
    * @param {NativeScripts} native_scripts
    * @returns {ScriptNOfK}
    */
    static new(n, native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptnofk_new */ "Go"](n, native_scripts.ptr);
        return ScriptNOfK.__wrap(ret);
    }
}
/**
*/
class ScriptPubkey {

    static __wrap(ptr) {
        const obj = Object.create(ScriptPubkey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_scriptpubkey_free */ "Qb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptpubkey_to_bytes */ "Lo"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ScriptPubkey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptpubkey_from_bytes */ "Jo"](ptr0, len0);
        return ScriptPubkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    addr_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptpubkey_addr_keyhash */ "Io"](this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHash} addr_keyhash
    * @returns {ScriptPubkey}
    */
    static new(addr_keyhash) {
        _assertClass(addr_keyhash, Ed25519KeyHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* scriptpubkey_new */ "Ko"](addr_keyhash.ptr);
        return ScriptPubkey.__wrap(ret);
    }
}
/**
*/
class SingleHostAddr {

    static __wrap(ptr) {
        const obj = Object.create(SingleHostAddr.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_singlehostaddr_free */ "Rb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_to_bytes */ "Ro"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SingleHostAddr}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_from_bytes */ "Mo"](ptr0, len0);
        return SingleHostAddr.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    port() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_port */ "Qo"](this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {Ipv4 | undefined}
    */
    ipv4() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_ipv4 */ "No"](this.ptr);
        return ret === 0 ? undefined : Ipv4.__wrap(ret);
    }
    /**
    * @returns {Ipv6 | undefined}
    */
    ipv6() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_ipv6 */ "Oo"](this.ptr);
        return ret === 0 ? undefined : Ipv6.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {Ipv4 | undefined} ipv4
    * @param {Ipv6 | undefined} ipv6
    * @returns {SingleHostAddr}
    */
    static new(port, ipv4, ipv6) {
        let ptr0 = 0;
        if (!isLikeNone(ipv4)) {
            _assertClass(ipv4, Ipv4);
            ptr0 = ipv4.ptr;
            ipv4.ptr = 0;
        }
        let ptr1 = 0;
        if (!isLikeNone(ipv6)) {
            _assertClass(ipv6, Ipv6);
            ptr1 = ipv6.ptr;
            ipv6.ptr = 0;
        }
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostaddr_new */ "Po"](isLikeNone(port) ? 0xFFFFFF : port, ptr0, ptr1);
        return SingleHostAddr.__wrap(ret);
    }
}
/**
*/
class SingleHostName {

    static __wrap(ptr) {
        const obj = Object.create(SingleHostName.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_singlehostname_free */ "Sb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostname_to_bytes */ "Wo"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SingleHostName}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostname_from_bytes */ "To"](ptr0, len0);
        return SingleHostName.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    port() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostname_port */ "Vo"](this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @returns {DNSRecordAorAAAA}
    */
    dns_name() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostname_dns_name */ "So"](this.ptr);
        return DNSRecordAorAAAA.__wrap(ret);
    }
    /**
    * @param {number | undefined} port
    * @param {DNSRecordAorAAAA} dns_name
    * @returns {SingleHostName}
    */
    static new(port, dns_name) {
        _assertClass(dns_name, DNSRecordAorAAAA);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* singlehostname_new */ "Uo"](isLikeNone(port) ? 0xFFFFFF : port, dns_name.ptr);
        return SingleHostName.__wrap(ret);
    }
}
/**
*/
class StakeCredential {

    static __wrap(ptr) {
        const obj = Object.create(StakeCredential.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_stakecredential_free */ "Tb"](ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @returns {StakeCredential}
    */
    static from_keyhash(hash) {
        _assertClass(hash, Ed25519KeyHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_from_keyhash */ "Yo"](hash.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {ScriptHash} hash
    * @returns {StakeCredential}
    */
    static from_scripthash(hash) {
        _assertClass(hash, ScriptHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_from_scripthash */ "Zo"](hash.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash | undefined}
    */
    to_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_to_keyhash */ "cp"](this.ptr);
        return ret === 0 ? undefined : Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @returns {ScriptHash | undefined}
    */
    to_scripthash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_to_scripthash */ "dp"](this.ptr);
        return ret === 0 ? undefined : ScriptHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_kind */ "ap"](this.ptr);
        return ret;
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_to_bytes */ "bp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeCredential}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredential_from_bytes */ "Xo"](ptr0, len0);
        return StakeCredential.__wrap(ret);
    }
}
/**
*/
class StakeCredentials {

    static __wrap(ptr) {
        const obj = Object.create(StakeCredentials.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_stakecredentials_free */ "Ub"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_to_bytes */ "jp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeCredentials}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_from_bytes */ "fp"](ptr0, len0);
        return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {StakeCredentials}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_new */ "ip"]();
        return StakeCredentials.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_len */ "hp"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {StakeCredential}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_get */ "gp"](this.ptr, index);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} elem
    */
    add(elem) {
        _assertClass(elem, StakeCredential);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakecredentials_add */ "ep"](this.ptr, elem.ptr);
    }
}
/**
*/
class StakeDelegation {

    static __wrap(ptr) {
        const obj = Object.create(StakeDelegation.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_stakedelegation_free */ "Vb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakedelegation_to_bytes */ "op"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeDelegation}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakedelegation_from_bytes */ "kp"](ptr0, len0);
        return StakeDelegation.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakedelegation_stake_credential */ "np"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @returns {Ed25519KeyHash}
    */
    pool_keyhash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakedelegation_pool_keyhash */ "mp"](this.ptr);
        return Ed25519KeyHash.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @param {Ed25519KeyHash} pool_keyhash
    * @returns {StakeDelegation}
    */
    static new(stake_credential, pool_keyhash) {
        _assertClass(stake_credential, StakeCredential);
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakedelegation_new */ "lp"](stake_credential.ptr, pool_keyhash.ptr);
        return StakeDelegation.__wrap(ret);
    }
}
/**
*/
class StakeDeregistration {

    static __wrap(ptr) {
        const obj = Object.create(StakeDeregistration.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_stakederegistration_free */ "Wb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakederegistration_to_bytes */ "sp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeDeregistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakederegistration_from_bytes */ "pp"](ptr0, len0);
        return StakeDeregistration.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakederegistration_stake_credential */ "rp"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeDeregistration}
    */
    static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakederegistration_new */ "qp"](stake_credential.ptr);
        return StakeDeregistration.__wrap(ret);
    }
}
/**
*/
class StakeRegistration {

    static __wrap(ptr) {
        const obj = Object.create(StakeRegistration.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_stakeregistration_free */ "Xb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakeregistration_to_bytes */ "wp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {StakeRegistration}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakeregistration_from_bytes */ "tp"](ptr0, len0);
        return StakeRegistration.__wrap(ret);
    }
    /**
    * @returns {StakeCredential}
    */
    stake_credential() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakeregistration_stake_credential */ "vp"](this.ptr);
        return StakeCredential.__wrap(ret);
    }
    /**
    * @param {StakeCredential} stake_credential
    * @returns {StakeRegistration}
    */
    static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* stakeregistration_new */ "up"](stake_credential.ptr);
        return StakeRegistration.__wrap(ret);
    }
}
/**
*/
class Strings {

    static __wrap(ptr) {
        const obj = Object.create(Strings.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_strings_free */ "Yb"](ptr);
    }
    /**
    * @returns {Strings}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* strings_new */ "Ap"]();
        return Strings.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* strings_len */ "zp"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {string}
    */
    get(index) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* strings_get */ "yp"](retptr, this.ptr, index);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} elem
    */
    add(elem) {
        var ptr0 = passStringToWasm0(elem, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* strings_add */ "xp"](this.ptr, ptr0, len0);
    }
}
/**
*/
class TimelockExpiry {

    static __wrap(ptr) {
        const obj = Object.create(TimelockExpiry.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_timelockexpiry_free */ "Zb"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockexpiry_to_bytes */ "Ep"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TimelockExpiry}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockexpiry_from_bytes */ "Bp"](ptr0, len0);
        return TimelockExpiry.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockexpiry_slot */ "Dp"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockExpiry}
    */
    static new(slot) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockexpiry_new */ "Cp"](slot);
        return TimelockExpiry.__wrap(ret);
    }
}
/**
*/
class TimelockStart {

    static __wrap(ptr) {
        const obj = Object.create(TimelockStart.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_timelockstart_free */ "ac"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockstart_to_bytes */ "Ip"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TimelockStart}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockstart_from_bytes */ "Fp"](ptr0, len0);
        return TimelockStart.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    slot() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockstart_slot */ "Hp"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} slot
    * @returns {TimelockStart}
    */
    static new(slot) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* timelockstart_new */ "Gp"](slot);
        return TimelockStart.__wrap(ret);
    }
}
/**
*/
class Transaction {

    static __wrap(ptr) {
        const obj = Object.create(Transaction.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transaction_free */ "bc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_to_bytes */ "Pp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Transaction}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_from_bytes */ "Lp"](ptr0, len0);
        return Transaction.__wrap(ret);
    }
    /**
    * @returns {TransactionBody}
    */
    body() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_body */ "Kp"](this.ptr);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */
    witness_set() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_witness_set */ "Qp"](this.ptr);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    is_valid() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_is_valid */ "Mp"](this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {AuxiliaryData | undefined}
    */
    auxiliary_data() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_auxiliary_data */ "Jp"](this.ptr);
        return ret === 0 ? undefined : AuxiliaryData.__wrap(ret);
    }
    /**
    * @param {boolean} valid
    */
    set_is_valid(valid) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_set_is_valid */ "Op"](this.ptr, valid);
    }
    /**
    * @param {TransactionBody} body
    * @param {TransactionWitnessSet} witness_set
    * @param {AuxiliaryData | undefined} auxiliary_data
    * @returns {Transaction}
    */
    static new(body, witness_set, auxiliary_data) {
        _assertClass(body, TransactionBody);
        _assertClass(witness_set, TransactionWitnessSet);
        let ptr0 = 0;
        if (!isLikeNone(auxiliary_data)) {
            _assertClass(auxiliary_data, AuxiliaryData);
            ptr0 = auxiliary_data.ptr;
            auxiliary_data.ptr = 0;
        }
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transaction_new */ "Np"](body.ptr, witness_set.ptr, ptr0);
        return Transaction.__wrap(ret);
    }
}
/**
*/
class TransactionBodies {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBodies.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionbodies_free */ "cc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_to_bytes */ "Wp"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionBodies}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_from_bytes */ "Sp"](ptr0, len0);
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {TransactionBodies}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_new */ "Vp"]();
        return TransactionBodies.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_len */ "Up"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionBody}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_get */ "Tp"](this.ptr, index);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @param {TransactionBody} elem
    */
    add(elem) {
        _assertClass(elem, TransactionBody);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbodies_add */ "Rp"](this.ptr, elem.ptr);
    }
}
/**
*/
class TransactionBody {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBody.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionbody_free */ "dc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_to_bytes */ "tq"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionBody}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_from_bytes */ "bq"](ptr0, len0);
        return TransactionBody.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */
    inputs() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_inputs */ "cq"](this.ptr);
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */
    outputs() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_outputs */ "gq"](this.ptr);
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    fee() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_fee */ "aq"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    ttl() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_ttl */ "uq"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Certificates} certs
    */
    set_certs(certs) {
        _assertClass(certs, Certificates);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_certs */ "kq"](this.ptr, certs.ptr);
    }
    /**
    * @returns {Certificates | undefined}
    */
    certs() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_certs */ "Yp"](this.ptr);
        return ret === 0 ? undefined : Certificates.__wrap(ret);
    }
    /**
    * @param {Withdrawals} withdrawals
    */
    set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_withdrawals */ "sq"](this.ptr, withdrawals.ptr);
    }
    /**
    * @returns {Withdrawals | undefined}
    */
    withdrawals() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_withdrawals */ "xq"](this.ptr);
        return ret === 0 ? undefined : Withdrawals.__wrap(ret);
    }
    /**
    * @param {Update} update
    */
    set_update(update) {
        _assertClass(update, Update);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_update */ "qq"](this.ptr, update.ptr);
    }
    /**
    * @returns {Update | undefined}
    */
    update() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_update */ "vq"](this.ptr);
        return ret === 0 ? undefined : Update.__wrap(ret);
    }
    /**
    * @param {AuxiliaryDataHash} auxiliary_data_hash
    */
    set_auxiliary_data_hash(auxiliary_data_hash) {
        _assertClass(auxiliary_data_hash, AuxiliaryDataHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_auxiliary_data_hash */ "jq"](this.ptr, auxiliary_data_hash.ptr);
    }
    /**
    * @returns {AuxiliaryDataHash | undefined}
    */
    auxiliary_data_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_auxiliary_data_hash */ "Xp"](this.ptr);
        return ret === 0 ? undefined : AuxiliaryDataHash.__wrap(ret);
    }
    /**
    * @param {number} validity_start_interval
    */
    set_validity_start_interval(validity_start_interval) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_validity_start_interval */ "rq"](this.ptr, validity_start_interval);
    }
    /**
    * @returns {number | undefined}
    */
    validity_start_interval() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_validity_start_interval */ "wq"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Mint} mint
    */
    set_mint(mint) {
        _assertClass(mint, Mint);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_mint */ "mq"](this.ptr, mint.ptr);
    }
    /**
    * @returns {Mint | undefined}
    */
    multiassets() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_multiassets */ "dq"](this.ptr);
        return ret === 0 ? undefined : Mint.__wrap(ret);
    }
    /**
    * @param {ScriptDataHash} script_data_hash
    */
    set_script_data_hash(script_data_hash) {
        _assertClass(script_data_hash, ScriptDataHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_script_data_hash */ "pq"](this.ptr, script_data_hash.ptr);
    }
    /**
    * @returns {ScriptDataHash | undefined}
    */
    script_data_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_script_data_hash */ "iq"](this.ptr);
        return ret === 0 ? undefined : ScriptDataHash.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} collateral
    */
    set_collateral(collateral) {
        _assertClass(collateral, TransactionInputs);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_collateral */ "lq"](this.ptr, collateral.ptr);
    }
    /**
    * @returns {TransactionInputs | undefined}
    */
    collateral() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_collateral */ "Zp"](this.ptr);
        return ret === 0 ? undefined : TransactionInputs.__wrap(ret);
    }
    /**
    * @param {Ed25519KeyHashes} required_signers
    */
    set_required_signers(required_signers) {
        _assertClass(required_signers, Ed25519KeyHashes);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_required_signers */ "oq"](this.ptr, required_signers.ptr);
    }
    /**
    * @returns {Ed25519KeyHashes | undefined}
    */
    required_signers() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_required_signers */ "hq"](this.ptr);
        return ret === 0 ? undefined : Ed25519KeyHashes.__wrap(ret);
    }
    /**
    * @param {NetworkId} network_id
    */
    set_network_id(network_id) {
        _assertClass(network_id, NetworkId);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_set_network_id */ "nq"](this.ptr, network_id.ptr);
    }
    /**
    * @returns {NetworkId | undefined}
    */
    network_id() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_network_id */ "eq"](this.ptr);
        return ret === 0 ? undefined : NetworkId.__wrap(ret);
    }
    /**
    * @param {TransactionInputs} inputs
    * @param {TransactionOutputs} outputs
    * @param {BigNum} fee
    * @param {number | undefined} ttl
    * @returns {TransactionBody}
    */
    static new(inputs, outputs, fee, ttl) {
        _assertClass(inputs, TransactionInputs);
        _assertClass(outputs, TransactionOutputs);
        _assertClass(fee, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbody_new */ "fq"](inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
        return TransactionBody.__wrap(ret);
    }
}
/**
*/
class TransactionBuilder {

    static __wrap(ptr) {
        const obj = Object.create(TransactionBuilder.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionbuilder_free */ "ec"](ptr);
    }
    /**
    * @param {Ed25519KeyHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_key_input(hash, input, amount) {
        _assertClass(hash, Ed25519KeyHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_key_input */ "Bq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ScriptHash} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_script_input(hash, input, amount) {
        _assertClass(hash, ScriptHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_script_input */ "Dq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {ByronAddress} hash
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_bootstrap_input(hash, input, amount) {
        _assertClass(hash, ByronAddress);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_bootstrap_input */ "yq"](this.ptr, hash.ptr, input.ptr, amount.ptr);
    }
    /**
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    */
    add_input(address, input, amount) {
        _assertClass(address, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_input */ "Aq"](this.ptr, address.ptr, input.ptr, amount.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {Address} address
    * @param {TransactionInput} input
    * @param {Value} amount
    * @returns {BigNum}
    */
    fee_for_input(address, input, amount) {
        _assertClass(address, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_fee_for_input */ "Fq"](this.ptr, address.ptr, input.ptr, amount.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} output
    */
    add_output(output) {
        _assertClass(output, TransactionOutput);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_output */ "Cq"](this.ptr, output.ptr);
    }
    /**
    * calculates how much the fee would increase if you added a given output
    * @param {TransactionOutput} output
    * @returns {BigNum}
    */
    fee_for_output(output) {
        _assertClass(output, TransactionOutput);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_fee_for_output */ "Gq"](this.ptr, output.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} fee
    */
    set_fee(fee) {
        _assertClass(fee, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_fee */ "Sq"](this.ptr, fee.ptr);
    }
    /**
    * @param {number} ttl
    */
    set_ttl(ttl) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_ttl */ "Tq"](this.ptr, ttl);
    }
    /**
    * @param {number} validity_start_interval
    */
    set_validity_start_interval(validity_start_interval) {
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_validity_start_interval */ "Uq"](this.ptr, validity_start_interval);
    }
    /**
    * @param {Certificates} certs
    */
    set_certs(certs) {
        _assertClass(certs, Certificates);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_certs */ "Rq"](this.ptr, certs.ptr);
    }
    /**
    * @param {Withdrawals} withdrawals
    */
    set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_withdrawals */ "Vq"](this.ptr, withdrawals.ptr);
    }
    /**
    * @param {AuxiliaryData} auxiliary_data
    */
    set_auxiliary_data(auxiliary_data) {
        _assertClass(auxiliary_data, AuxiliaryData);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_set_auxiliary_data */ "Qq"](this.ptr, auxiliary_data.ptr);
    }
    /**
    * @param {LinearFee} linear_fee
    * @param {BigNum} minimum_utxo_val
    * @param {BigNum} pool_deposit
    * @param {BigNum} key_deposit
    * @param {number} max_value_size
    * @param {number} max_tx_size
    * @returns {TransactionBuilder}
    */
    static new(linear_fee, minimum_utxo_val, pool_deposit, key_deposit, max_value_size, max_tx_size) {
        _assertClass(linear_fee, LinearFee);
        _assertClass(minimum_utxo_val, BigNum);
        _assertClass(pool_deposit, BigNum);
        _assertClass(key_deposit, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_new */ "Oq"](linear_fee.ptr, minimum_utxo_val.ptr, pool_deposit.ptr, key_deposit.ptr, max_value_size, max_tx_size);
        return TransactionBuilder.__wrap(ret);
    }
    /**
    * does not include refunds or withdrawals
    * @returns {Value}
    */
    get_explicit_input() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_get_explicit_input */ "Jq"](this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * withdrawals and refunds
    * @returns {Value}
    */
    get_implicit_input() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_get_implicit_input */ "Mq"](this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * does not include fee
    * @returns {Value}
    */
    get_explicit_output() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_get_explicit_output */ "Kq"](this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    get_deposit() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_get_deposit */ "Iq"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum | undefined}
    */
    get_fee_if_set() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_get_fee_if_set */ "Lq"](this.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * Warning: this function will mutate the /fee/ field
    * @param {Address} address
    * @returns {boolean}
    */
    add_change_if_needed(address) {
        _assertClass(address, Address);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_add_change_if_needed */ "zq"](this.ptr, address.ptr);
        return ret !== 0;
    }
    /**
    * @returns {number}
    */
    full_size() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_full_size */ "Hq"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Uint32Array}
    */
    output_sizes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_output_sizes */ "Pq"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU32FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 4);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {TransactionBody}
    */
    build() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_build */ "Eq"](this.ptr);
        return TransactionBody.__wrap(ret);
    }
    /**
    * warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
    * warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
    * this is done to simplify the library code, but can be fixed later
    * @returns {BigNum}
    */
    min_fee() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionbuilder_min_fee */ "Nq"](this.ptr);
        return BigNum.__wrap(ret);
    }
}
/**
*/
class TransactionHash {

    static __wrap(ptr) {
        const obj = Object.create(TransactionHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionhash_free */ "fc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionhash_to_bytes */ "Zq"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionhash_to_bech32 */ "Yq"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {TransactionHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionhash_from_bech32 */ "Wq"](ptr0, len0);
        return TransactionHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionhash_from_bytes */ "Xq"](ptr0, len0);
        return TransactionHash.__wrap(ret);
    }
}
/**
*/
class TransactionInput {

    static __wrap(ptr) {
        const obj = Object.create(TransactionInput.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactioninput_free */ "gc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninput_to_bytes */ "dr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionInput}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninput_from_bytes */ "ar"](ptr0, len0);
        return TransactionInput.__wrap(ret);
    }
    /**
    * @returns {TransactionHash}
    */
    transaction_id() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninput_transaction_id */ "er"](this.ptr);
        return TransactionHash.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    index() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninput_index */ "br"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {TransactionHash} transaction_id
    * @param {number} index
    * @returns {TransactionInput}
    */
    static new(transaction_id, index) {
        _assertClass(transaction_id, TransactionHash);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninput_new */ "cr"](transaction_id.ptr, index);
        return TransactionInput.__wrap(ret);
    }
}
/**
*/
class TransactionInputs {

    static __wrap(ptr) {
        const obj = Object.create(TransactionInputs.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactioninputs_free */ "hc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_to_bytes */ "kr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionInputs}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_from_bytes */ "gr"](ptr0, len0);
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {TransactionInputs}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_new */ "jr"]();
        return TransactionInputs.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_len */ "ir"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionInput}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_get */ "hr"](this.ptr, index);
        return TransactionInput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} elem
    */
    add(elem) {
        _assertClass(elem, TransactionInput);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactioninputs_add */ "fr"](this.ptr, elem.ptr);
    }
}
/**
*/
class TransactionMetadatum {

    static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatum.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionmetadatum_free */ "ic"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_to_bytes */ "xr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_from_bytes */ "qr"](ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataMap} map
    * @returns {TransactionMetadatum}
    */
    static new_map(map) {
        _assertClass(map, MetadataMap);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_new_map */ "vr"](map.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {MetadataList} list
    * @returns {TransactionMetadatum}
    */
    static new_list(list) {
        _assertClass(list, MetadataList);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_new_list */ "ur"](list.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Int} int
    * @returns {TransactionMetadatum}
    */
    static new_int(int) {
        _assertClass(int, Int);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_new_int */ "tr"](int.ptr);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatum}
    */
    static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_new_bytes */ "sr"](ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @param {string} text
    * @returns {TransactionMetadatum}
    */
    static new_text(text) {
        var ptr0 = passStringToWasm0(text, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_new_text */ "wr"](ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    kind() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_kind */ "rr"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {MetadataMap}
    */
    as_map() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_as_map */ "or"](this.ptr);
        return MetadataMap.__wrap(ret);
    }
    /**
    * @returns {MetadataList}
    */
    as_list() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_as_list */ "nr"](this.ptr);
        return MetadataList.__wrap(ret);
    }
    /**
    * @returns {Int}
    */
    as_int() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_as_int */ "mr"](this.ptr);
        return Int.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    as_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_as_bytes */ "lr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {string}
    */
    as_text() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatum_as_text */ "pr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
}
/**
*/
class TransactionMetadatumLabels {

    static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatumLabels.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionmetadatumlabels_free */ "jc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_to_bytes */ "Dr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionMetadatumLabels}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_from_bytes */ "zr"](ptr0, len0);
        return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {TransactionMetadatumLabels}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_new */ "Cr"]();
        return TransactionMetadatumLabels.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_len */ "Br"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {BigNum}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_get */ "Ar"](this.ptr, index);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} elem
    */
    add(elem) {
        _assertClass(elem, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionmetadatumlabels_add */ "yr"](this.ptr, elem.ptr);
    }
}
/**
*/
class TransactionOutput {

    static __wrap(ptr) {
        const obj = Object.create(TransactionOutput.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionoutput_free */ "kc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_to_bytes */ "Kr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionOutput}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_from_bytes */ "Hr"](ptr0, len0);
        return TransactionOutput.__wrap(ret);
    }
    /**
    * @returns {Address}
    */
    address() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_address */ "Er"](this.ptr);
        return Address.__wrap(ret);
    }
    /**
    * @returns {Value}
    */
    amount() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_amount */ "Fr"](this.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @returns {DataHash | undefined}
    */
    data_hash() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_data_hash */ "Gr"](this.ptr);
        return ret === 0 ? undefined : DataHash.__wrap(ret);
    }
    /**
    * @param {DataHash} data_hash
    */
    set_data_hash(data_hash) {
        _assertClass(data_hash, DataHash);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_set_data_hash */ "Jr"](this.ptr, data_hash.ptr);
    }
    /**
    * @param {Address} address
    * @param {Value} amount
    * @returns {TransactionOutput}
    */
    static new(address, amount) {
        _assertClass(address, Address);
        _assertClass(amount, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutput_new */ "Ir"](address.ptr, amount.ptr);
        return TransactionOutput.__wrap(ret);
    }
}
/**
*/
class TransactionOutputs {

    static __wrap(ptr) {
        const obj = Object.create(TransactionOutputs.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionoutputs_free */ "lc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_to_bytes */ "Qr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionOutputs}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_from_bytes */ "Mr"](ptr0, len0);
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {TransactionOutputs}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_new */ "Pr"]();
        return TransactionOutputs.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_len */ "Or"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionOutput}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_get */ "Nr"](this.ptr, index);
        return TransactionOutput.__wrap(ret);
    }
    /**
    * @param {TransactionOutput} elem
    */
    add(elem) {
        _assertClass(elem, TransactionOutput);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionoutputs_add */ "Lr"](this.ptr, elem.ptr);
    }
}
/**
*/
class TransactionUnspentOutput {

    static __wrap(ptr) {
        const obj = Object.create(TransactionUnspentOutput.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionunspentoutput_free */ "mc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionunspentoutput_to_bytes */ "Vr"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionUnspentOutput}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionunspentoutput_from_bytes */ "Rr"](ptr0, len0);
        return TransactionUnspentOutput.__wrap(ret);
    }
    /**
    * @param {TransactionInput} input
    * @param {TransactionOutput} output
    * @returns {TransactionUnspentOutput}
    */
    static new(input, output) {
        _assertClass(input, TransactionInput);
        _assertClass(output, TransactionOutput);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionunspentoutput_new */ "Tr"](input.ptr, output.ptr);
        return TransactionUnspentOutput.__wrap(ret);
    }
    /**
    * @returns {TransactionInput}
    */
    input() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionunspentoutput_input */ "Sr"](this.ptr);
        return TransactionInput.__wrap(ret);
    }
    /**
    * @returns {TransactionOutput}
    */
    output() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionunspentoutput_output */ "Ur"](this.ptr);
        return TransactionOutput.__wrap(ret);
    }
}
/**
*/
class TransactionWitnessSet {

    static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSet.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionwitnessset_free */ "nc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_to_bytes */ "js"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionWitnessSet}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_from_bytes */ "Xr"](ptr0, len0);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {Vkeywitnesses} vkeys
    */
    set_vkeys(vkeys) {
        _assertClass(vkeys, Vkeywitnesses);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_vkeys */ "is"](this.ptr, vkeys.ptr);
    }
    /**
    * @returns {Vkeywitnesses | undefined}
    */
    vkeys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_vkeys */ "ks"](this.ptr);
        return ret === 0 ? undefined : Vkeywitnesses.__wrap(ret);
    }
    /**
    * @param {NativeScripts} native_scripts
    */
    set_native_scripts(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_native_scripts */ "es"](this.ptr, native_scripts.ptr);
    }
    /**
    * @returns {NativeScripts | undefined}
    */
    native_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_native_scripts */ "Yr"](this.ptr);
        return ret === 0 ? undefined : NativeScripts.__wrap(ret);
    }
    /**
    * @param {BootstrapWitnesses} bootstraps
    */
    set_bootstraps(bootstraps) {
        _assertClass(bootstraps, BootstrapWitnesses);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_bootstraps */ "ds"](this.ptr, bootstraps.ptr);
    }
    /**
    * @returns {BootstrapWitnesses | undefined}
    */
    bootstraps() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_bootstraps */ "Wr"](this.ptr);
        return ret === 0 ? undefined : BootstrapWitnesses.__wrap(ret);
    }
    /**
    * @param {PlutusScripts} plutus_scripts
    */
    set_plutus_scripts(plutus_scripts) {
        _assertClass(plutus_scripts, PlutusScripts);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_plutus_scripts */ "gs"](this.ptr, plutus_scripts.ptr);
    }
    /**
    * @returns {PlutusScripts | undefined}
    */
    plutus_scripts() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_plutus_scripts */ "bs"](this.ptr);
        return ret === 0 ? undefined : PlutusScripts.__wrap(ret);
    }
    /**
    * @param {PlutusList} plutus_data
    */
    set_plutus_data(plutus_data) {
        _assertClass(plutus_data, PlutusList);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_plutus_data */ "fs"](this.ptr, plutus_data.ptr);
    }
    /**
    * @returns {PlutusList | undefined}
    */
    plutus_data() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_plutus_data */ "as"](this.ptr);
        return ret === 0 ? undefined : PlutusList.__wrap(ret);
    }
    /**
    * @param {Redeemers} redeemers
    */
    set_redeemers(redeemers) {
        _assertClass(redeemers, Redeemers);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_set_redeemers */ "hs"](this.ptr, redeemers.ptr);
    }
    /**
    * @returns {Redeemers | undefined}
    */
    redeemers() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_redeemers */ "cs"](this.ptr);
        return ret === 0 ? undefined : Redeemers.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSet}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnessset_new */ "Zr"]();
        return TransactionWitnessSet.__wrap(ret);
    }
}
/**
*/
class TransactionWitnessSets {

    static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSets.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_transactionwitnesssets_free */ "oc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_to_bytes */ "qs"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {TransactionWitnessSets}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_from_bytes */ "ms"](ptr0, len0);
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {TransactionWitnessSets}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_new */ "ps"]();
        return TransactionWitnessSets.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_len */ "os"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {TransactionWitnessSet}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_get */ "ns"](this.ptr, index);
        return TransactionWitnessSet.__wrap(ret);
    }
    /**
    * @param {TransactionWitnessSet} elem
    */
    add(elem) {
        _assertClass(elem, TransactionWitnessSet);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* transactionwitnesssets_add */ "ls"](this.ptr, elem.ptr);
    }
}
/**
*/
class URL {

    static __wrap(ptr) {
        const obj = Object.create(URL.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_url_free */ "rc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* url_to_bytes */ "Ds"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {URL}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* url_from_bytes */ "Bs"](ptr0, len0);
        return URL.__wrap(ret);
    }
    /**
    * @param {string} url
    * @returns {URL}
    */
    static new(url) {
        var ptr0 = passStringToWasm0(url, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* url_new */ "Cs"](ptr0, len0);
        return URL.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    url() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* url_url */ "Es"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
}
/**
*/
class UnitInterval {

    static __wrap(ptr) {
        const obj = Object.create(UnitInterval.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_unitinterval_free */ "pc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* unitinterval_to_bytes */ "vs"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {UnitInterval}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* unitinterval_from_bytes */ "ss"](ptr0, len0);
        return UnitInterval.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    numerator() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* unitinterval_numerator */ "us"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    denominator() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* unitinterval_denominator */ "rs"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} numerator
    * @param {BigNum} denominator
    * @returns {UnitInterval}
    */
    static new(numerator, denominator) {
        _assertClass(numerator, BigNum);
        _assertClass(denominator, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* unitinterval_new */ "ts"](numerator.ptr, denominator.ptr);
        return UnitInterval.__wrap(ret);
    }
}
/**
*/
class Update {

    static __wrap(ptr) {
        const obj = Object.create(Update.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_update_free */ "qc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* update_to_bytes */ "As"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Update}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* update_from_bytes */ "xs"](ptr0, len0);
        return Update.__wrap(ret);
    }
    /**
    * @returns {ProposedProtocolParameterUpdates}
    */
    proposed_protocol_parameter_updates() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* update_proposed_protocol_parameter_updates */ "zs"](this.ptr);
        return ProposedProtocolParameterUpdates.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    epoch() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* update_epoch */ "ws"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {ProposedProtocolParameterUpdates} proposed_protocol_parameter_updates
    * @param {number} epoch
    * @returns {Update}
    */
    static new(proposed_protocol_parameter_updates, epoch) {
        _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* update_new */ "ys"](proposed_protocol_parameter_updates.ptr, epoch);
        return Update.__wrap(ret);
    }
}
/**
*/
class VRFCert {

    static __wrap(ptr) {
        const obj = Object.create(VRFCert.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vrfcert_free */ "xc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfcert_to_bytes */ "lt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFCert}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfcert_from_bytes */ "ht"](ptr0, len0);
        return VRFCert.__wrap(ret);
    }
    /**
    * @returns {Uint8Array}
    */
    output() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfcert_output */ "jt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    proof() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfcert_proof */ "kt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} output
    * @param {Uint8Array} proof
    * @returns {VRFCert}
    */
    static new(output, proof) {
        var ptr0 = passArray8ToWasm0(output, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(proof, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfcert_new */ "it"](ptr0, len0, ptr1, len1);
        return VRFCert.__wrap(ret);
    }
}
/**
*/
class VRFKeyHash {

    static __wrap(ptr) {
        const obj = Object.create(VRFKeyHash.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vrfkeyhash_free */ "yc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfkeyhash_to_bytes */ "pt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfkeyhash_to_bech32 */ "ot"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFKeyHash}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfkeyhash_from_bech32 */ "mt"](ptr0, len0);
        return VRFKeyHash.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFKeyHash}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfkeyhash_from_bytes */ "nt"](ptr0, len0);
        return VRFKeyHash.__wrap(ret);
    }
}
/**
*/
class VRFVKey {

    static __wrap(ptr) {
        const obj = Object.create(VRFVKey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vrfvkey_free */ "zc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfvkey_to_bytes */ "tt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {string} prefix
    * @returns {string}
    */
    to_bech32(prefix) {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            var ptr0 = passStringToWasm0(prefix, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
            var len0 = WASM_VECTOR_LEN;
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfvkey_to_bech32 */ "st"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1);
        }
    }
    /**
    * @param {string} bech_str
    * @returns {VRFVKey}
    */
    static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfvkey_from_bech32 */ "qt"](ptr0, len0);
        return VRFVKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VRFVKey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vrfvkey_from_bytes */ "rt"](ptr0, len0);
        return VRFVKey.__wrap(ret);
    }
}
/**
*/
class Value {

    static __wrap(ptr) {
        const obj = Object.create(Value.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_value_free */ "sc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_to_bytes */ "Ps"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Value}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_from_bytes */ "Ks"](ptr0, len0);
        return Value.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    * @returns {Value}
    */
    static new(coin) {
        _assertClass(coin, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_new */ "Ms"](coin.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @returns {BigNum}
    */
    coin() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_coin */ "Is"](this.ptr);
        return BigNum.__wrap(ret);
    }
    /**
    * @param {BigNum} coin
    */
    set_coin(coin) {
        _assertClass(coin, BigNum);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_set_coin */ "Ns"](this.ptr, coin.ptr);
    }
    /**
    * @returns {MultiAsset | undefined}
    */
    multiasset() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_multiasset */ "Ls"](this.ptr);
        return ret === 0 ? undefined : MultiAsset.__wrap(ret);
    }
    /**
    * @param {MultiAsset} multiasset
    */
    set_multiasset(multiasset) {
        _assertClass(multiasset, MultiAsset);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_set_multiasset */ "Os"](this.ptr, multiasset.ptr);
    }
    /**
    * @param {Value} rhs
    * @returns {Value}
    */
    checked_add(rhs) {
        _assertClass(rhs, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_checked_add */ "Fs"](this.ptr, rhs.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */
    checked_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_checked_sub */ "Gs"](this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
    }
    /**
    * @param {Value} rhs_value
    * @returns {Value}
    */
    clamped_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_clamped_sub */ "Hs"](this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
    }
    /**
    * note: values are only partially comparable
    * @param {Value} rhs_value
    * @returns {number | undefined}
    */
    compare(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* value_compare */ "Js"](this.ptr, rhs_value.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
}
/**
*/
class Vkey {

    static __wrap(ptr) {
        const obj = Object.create(Vkey.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vkey_free */ "tc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkey_to_bytes */ "Ts"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Vkey}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkey_from_bytes */ "Qs"](ptr0, len0);
        return Vkey.__wrap(ret);
    }
    /**
    * @param {PublicKey} pk
    * @returns {Vkey}
    */
    static new(pk) {
        _assertClass(pk, PublicKey);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkey_new */ "Rs"](pk.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */
    public_key() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkey_public_key */ "Ss"](this.ptr);
        return PublicKey.__wrap(ret);
    }
}
/**
*/
class Vkeys {

    static __wrap(ptr) {
        const obj = Object.create(Vkeys.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vkeys_free */ "uc"](ptr);
    }
    /**
    * @returns {Vkeys}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeys_new */ "Xs"]();
        return Vkeys.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeys_len */ "Ws"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkey}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeys_get */ "Vs"](this.ptr, index);
        return Vkey.__wrap(ret);
    }
    /**
    * @param {Vkey} elem
    */
    add(elem) {
        _assertClass(elem, Vkey);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeys_add */ "Us"](this.ptr, elem.ptr);
    }
}
/**
*/
class Vkeywitness {

    static __wrap(ptr) {
        const obj = Object.create(Vkeywitness.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vkeywitness_free */ "vc"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitness_to_bytes */ "bt"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Vkeywitness}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitness_from_bytes */ "Ys"](ptr0, len0);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkey} vkey
    * @param {Ed25519Signature} signature
    * @returns {Vkeywitness}
    */
    static new(vkey, signature) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitness_new */ "Zs"](vkey.ptr, signature.ptr);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @returns {Vkey}
    */
    vkey() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitness_vkey */ "ct"](this.ptr);
        return Vkey.__wrap(ret);
    }
    /**
    * @returns {Ed25519Signature}
    */
    signature() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitness_signature */ "at"](this.ptr);
        return Ed25519Signature.__wrap(ret);
    }
}
/**
*/
class Vkeywitnesses {

    static __wrap(ptr) {
        const obj = Object.create(Vkeywitnesses.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_vkeywitnesses_free */ "wc"](ptr);
    }
    /**
    * @returns {Vkeywitnesses}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitnesses_new */ "gt"]();
        return Vkeywitnesses.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitnesses_len */ "ft"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @returns {Vkeywitness}
    */
    get(index) {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitnesses_get */ "et"](this.ptr, index);
        return Vkeywitness.__wrap(ret);
    }
    /**
    * @param {Vkeywitness} elem
    */
    add(elem) {
        _assertClass(elem, Vkeywitness);
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* vkeywitnesses_add */ "dt"](this.ptr, elem.ptr);
    }
}
/**
*/
class Withdrawals {

    static __wrap(ptr) {
        const obj = Object.create(Withdrawals.prototype);
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
        _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_withdrawals_free */ "Ac"](ptr);
    }
    /**
    * @returns {Uint8Array}
    */
    to_bytes() {
        try {
            const retptr = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](-16);
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_to_bytes */ "At"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "Cc"](r0, r1 * 1);
            return v0;
        } finally {
            _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_add_to_stack_pointer */ "Bc"](16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Withdrawals}
    */
    static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_from_bytes */ "ut"](ptr0, len0);
        return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {Withdrawals}
    */
    static new() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_new */ "zt"]();
        return Withdrawals.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_len */ "yt"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {RewardAddress} key
    * @param {BigNum} value
    * @returns {BigNum | undefined}
    */
    insert(key, value) {
        _assertClass(key, RewardAddress);
        _assertClass(value, BigNum);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_insert */ "wt"](this.ptr, key.ptr, value.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @param {RewardAddress} key
    * @returns {BigNum | undefined}
    */
    get(key) {
        _assertClass(key, RewardAddress);
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_get */ "vt"](this.ptr, key.ptr);
        return ret === 0 ? undefined : BigNum.__wrap(ret);
    }
    /**
    * @returns {RewardAddresses}
    */
    keys() {
        var ret = _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* withdrawals_keys */ "xt"](this.ptr);
        return RewardAddresses.__wrap(ret);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbg_new_3a746f2619705add(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_call_f54d3a6dadb199ca(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
};

function __wbindgen_jsval_eq(arg0, arg1) {
    var ret = getObject(arg0) === getObject(arg1);
    return ret;
};

function __wbg_self_ac379e780a0d8b94(arg0) {
    var ret = getObject(arg0).self;
    return addHeapObject(ret);
};

function __wbg_crypto_1e4302b85d4f64a2(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

function __wbindgen_is_undefined(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

function __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {
    var ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

function __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {
    var ret = __webpack_require__("b7e7")(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

function __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

function __wbindgen_string_get(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_debug_string(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "Dc"], _cardano_serialization_lib_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "Ec"]);
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



/***/ })

}]);
//# sourceMappingURL=web3-cardano-token.umd.4.js.map