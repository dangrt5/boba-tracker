const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";
  const scopedClassNames = devMode
    ? "[path]-[name]-[local]-[contenthash:3]"
    : "[contenthash:8]";

  const babel = {
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
            modules: false
          }
        ],
        ["@babel/preset-react", { development: devMode }]
      ],
      plugins: [
        ["@babel/plugin-transform-react-jsx"],
        [
          "react-css-modules",
          {
            filetypes: {
              ".scss": { syntax: "postcss-scss", plugins: ["postcss-nested"] },
              ".sass": { syntax: "postcss-sass", plugins: ["postcss-nested"] }
            },
            handleMissingStyleName: "throw",
            autoResolveMultipleImports: true,
            webpackHotModuleReloading: devMode,
            generateScopedName: scopedClassNames
          }
        ]
      ]
    }
  };

  const webpackConfig = {
    entry: {
      index: [
        "core-js/stable",
        "regenerator-runtime/runtime",
        // "raf/polyfill",
        "./src/index.js"
      ]
    },
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        },
        {
          test: /\.(md)$/i,
          use: "raw-loader"
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
          loaders: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "[contenthash:8].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(|pdf|txt|doc|xlsx)(\?v=\d+\.\d+\.\d+)?$/,
          loaders: [
            {
              loader: "file-loader",
              options: {
                limit: 8192,
                name: "[contenthash:8].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png)$/i,
          use: [
            {
              loader: "responsive-loader",
              options: {
                name: "[contenthash:8].[ext]",
                adapter: require("responsive-loader/sharp"),
                // sizes: devMode ? [2000] : sizes,
                disable: devMode
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: [babel]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            {
              loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
              options: devMode ? {} : { sourceMap: true }
            },
            {
              loader: "css-loader",
              options: { importLoaders: 1, sourceMap: true }
            },
            { loader: "postcss-loader", options: { sourceMap: true } }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
              options: devMode ? {} : { sourceMap: true }
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: {
                  localIdentName: scopedClassNames
                }
              }
            },
            { loader: "postcss-loader", options: { sourceMap: true } }
            // { loader: "sass-loader", options: { sourceMap: true } }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx", ".json", ".scss"]
    },
    output: {
      publicPath: "/"
    }
  };

  if (devMode) {
    webpackConfig.devServer = {
      historyApiFallback: true,
      overlay: true
    };
  }

  if (!devMode) {
    webpackConfig.plugins = webpackConfig.plugins.concat([
      new MiniCssExtractPlugin({
        filename: "[contenthash:8].css",
        chunkFilename: "[contenthash:8].css"
      })
    ]);
  }

  return webpackConfig;
};
