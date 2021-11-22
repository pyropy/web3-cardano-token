/**
 * Loads the WASM modules
 */

class Loader {
  async load() {
    if (this._wasm && this._wasm2) return;
    /**
     * @private
     */

    this.isBrowser = typeof window !== "undefined";

    this._wasm = this.isBrowser
      ? await import(
          "@emurgo/cardano-serialization-lib-browser"
        )
      : await import(
          "@emurgo/cardano-serialization-lib-nodejs"
        );

    this._wasm2 = this.isBrowser
      ? await import(
          "emurgo-message-signing"
        )
      : await import(
          "emurgo-message-signing-nodejs"
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
