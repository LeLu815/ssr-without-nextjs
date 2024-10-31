const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // webpack의 목적 명시
  target: "node",

  // server app의 루트 파일 지정
  entry: "./src/index.js",

  // webpack의 리턴파일을 어디에 둘지 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
