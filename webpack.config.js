const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require("webpack-node-externals");

const generalConfig = {
  experiments: {
    syncWebAssembly: true,
    layers: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
  ],
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".ts", ".ts", ".js"],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      util: false,
    }
  },
};

const nodeConfig = {
  entry: "./src/lib.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "node.js",
    libraryTarget: "umd",
    libraryExport: "default",
  },
};

const browserConfig = {
  entry: "./src/lib.js",
  target: "web",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "browser.js",
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default",
    umdNamedDefine: true,
    library: "web3-cardano-token",
  },
};

module.exports = () => {
  Object.assign(nodeConfig, generalConfig);
  Object.assign(browserConfig, generalConfig);

  return [nodeConfig, browserConfig];
};
