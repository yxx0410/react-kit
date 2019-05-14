const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const pp = new webpack.ProvidePlugin({
  React: 'react'
})
const hmr = new webpack.HotModuleReplacementPlugin();
// const definePlugin = new webpack.DefinePlugin({
//   API_URL: JSON.stringify("https://lms1210.azurewebsites.net"),
//   HOST_URL: JSON.stringify("http://localhost:8080")
// });

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: ["eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin, hmr, pp, new BundleAnalyzerPlugin()]
};