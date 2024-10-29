const path = require("path");

module.exports = {
  // server app의 루트 파일 지정
  entry: "./src/client/client.js",

  // webpack의 리턴파일을 어디에 둘지 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
