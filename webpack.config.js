const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: { presets: ["@babel/react"] }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
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
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // inlineSource: '.(js|css)$'
    }),
    new CopyPlugin([
      { from: 'node_modules/reveal.js/plugin', to: 'plugin' },
      { from: 'src/assets', to: 'assets' },
    ]),
    // new HtmlWebpackInlineSourcePlugin(),
    new PrettierPlugin()
  ]
};
