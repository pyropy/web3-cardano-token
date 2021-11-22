const path = require("path");

module.exports = {
  entry: "./src/lib.js",
  experiments: {
    syncWebAssembly: true,
    layers: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "web3-cardano-token.js",
    globalObject: "this",
    library: {
      name: "web3-cardano-token",
      type: "umd",
    },
  },
};
