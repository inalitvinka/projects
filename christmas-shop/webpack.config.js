const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'; 
const target = devMode ? 'web' : 'browserslist';
// const devtool = devMode ? 'source-map' : 'source-map';
const devtool = 'source-map';

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
      port: 3000,
      open: true,
      hot: false,
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    optimization: {
      minimize: false,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.pug'),
        }),
        new HtmlWebpackPlugin({
          filename: 'page.html',
          template: path.resolve(__dirname, 'src', 'page.pug'),
      }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.pug$/i,
            loader: 'pug-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [
                devMode ? 'style-loader' :  MiniCssExtractPlugin.loader, 
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [require('postcss-preset-env')]
                    }
                  },
                },
                'sass-loader'
            ],
          },
          {
            test: /\.ttf$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext]'
            }
          },
          { 
            test: /\.mp4$/i, 
            type: "asset/resource" ,
            generator: {
              filename: 'video/[name][ext]'
            }
          },
          {
            test: /\.(jpe?g|png|webp|gif|svg)$/i,
            use: [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              }
            ],
            type: 'asset/resource',
          },
          {
            test: /\.(?:js|mjs|cjs)$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ],
      },
}