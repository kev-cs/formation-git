const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
      // {
      //   // I want to uglify with mangling only app files, not thirdparty libs
      //   test: /\.js$/,
      //   exclude: /node_modules\/reveal.js\/js\/reveal\.js/,
      //   use: 'uglify-loader',
      // },
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
    new PrettierPlugin(),
      // new webpack.IgnorePlugin({resourceRegExp: /^reveal\.js$/})
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   exclude: /node_modules/,
      // }),
      new TerserPlugin({
        exclude: /node_modules\/reveal\.js/,
      })
    ],
  },
});
