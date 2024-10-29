const path = require("path");

module.exports = {
  // webpack의 목적 명시
  target: "node",

  // server app의 루트 파일 지정
  entry: "./src/index.js",

  // webpack의 리턴파일을 어디에 둘지 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targats: { browser: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
