const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./deploy/js/app.js"),
  },
  /*output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "deploy"),
  },*/
  /**
   * This tells webpack-dev-server to serve the files from the deploy directory
   * and to open the entry page automatically.
   */
  devServer: {
    static: {
      directory: path.join(__dirname, "deploy"),
    },
    open: true,
    port: 9000,
  },
  /*devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },*/
};
