const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname,"./src/index.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    },
    ]
  },
  resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000
  },

};