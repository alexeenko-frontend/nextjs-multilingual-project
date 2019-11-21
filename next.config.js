const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const path = require("path");
const { parsed: localEnv } = require("dotenv").config();

const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["scenes"] = path.join(__dirname, "src/scenes");
    config.resolve.alias["features"] = path.join(__dirname, "src/features");
    config.resolve.alias["locale"] = path.join(__dirname, "src/locale");
    config.resolve.alias["services"] = path.join(__dirname, "src/services");
    config.resolve.alias["utils"] = path.join(__dirname, "src/utils");

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]_[hash:base64:5]"
        }
      }
    ],
    withImages,
    withFonts
  ],
  nextConfig
);
