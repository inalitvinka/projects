import path from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'production' | 'development';

interface EnvironmentVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvironmentVariables) => {
  const isDevelopment = env.mode === 'development';
  const isProduction = env.mode === 'production';
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: true,
    },
  };

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.(png|jpg|jpeg|ico|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          use: 'svg-sprite-loader',
        },
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'audio/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devtool: isDevelopment && 'inline-source-map',
    devServer: isDevelopment
      ? {
          port: env.port ?? 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: './src/assets/images/favicon.png',
        filename: 'index.html',
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ],
  };
  return config;
};
