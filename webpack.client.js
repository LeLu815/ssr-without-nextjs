const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // server app의 루트 파일 지정
  entry: "./src/client/client.js",

  // webpack의 리턴파일을 어디에 둘지 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
