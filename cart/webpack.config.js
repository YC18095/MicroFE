const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: "8082",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      exposes: {
        "./CartsIndex": "./src/index.js",
      },
      shared: ["faker"],
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
