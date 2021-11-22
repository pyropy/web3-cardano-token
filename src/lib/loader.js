/**
 * Loads the WASM modules
 */

class Loader {
  async load() {
    if (this._wasm && this._wasm2) return;
    /**
     * @private
     */

    const isBrowser = window !== undefined;

    this._wasm = isBrowser
      ? await import(
          "../../temporary_modules/@emurgo/cardano-serialization-lib-browser"
        )
      : await import(
          "../../temporary_modules/@emurgo/cardano-serialization-lib-nodejs"
        );

    this._wasm2 = isBrowser
      ? await import(
          "../../temporary_modules/@emurgo/cardano-message-signing-browser"
        )
      : await import(
          "../../temporary_modules/@emurgo/cardano-message-signing-nodejs"
        );
  }


  get Cardano() {
    return this._wasm;
  }

  get Message() {
    return this._wasm2;
  }
}

export default new Loader();
