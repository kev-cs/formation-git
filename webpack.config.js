const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const revealjsWrapperWebpack = require("react-revealjs-wrapper/src/webpack-html-template-config.js");
const merge = require('webpack-merge');

module.exports = merge(revealjsWrapperWebpack, {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /reveal\.js$/,
        use: [ 'script-loader' ]
      },
      {
        test: /\.[jt]sx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: "file-loader?name=fonts/[name].[ext]!static"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: 'node_modules/reveal.js/plugin', to: 'plugin'},
      {from: 'src/assets', to: 'assets'},
    ]),
    new PrettierPlugin()
  ],
});
