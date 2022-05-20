const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: {
      app: "./src/index.js"
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "Production"
      })
   , new MiniCssExtractPlugin()],
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader, "css-loader"],
       },
     ],
   },
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
   }
};
