const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "deploy"),
  },
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};

/**
 * The order of loaders is important.
 * They’re evaluated in reverse order — that is, from right to left and from bottom to top.
 * In our case, the css-loader is evaluated first, followed by the style-loader.
 */
