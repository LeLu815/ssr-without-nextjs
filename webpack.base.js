module.exports = {
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
