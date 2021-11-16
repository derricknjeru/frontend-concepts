const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./app/app.ts"),
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
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};