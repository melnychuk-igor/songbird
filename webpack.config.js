const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const SRC = path.resolve(__dirname, 'node_modules');

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'script.js')],
  // optimization: {
  //   minimize: false,
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'assets/js/script.js', //.[contenthash]
    assetModuleFilename: 'assets/img/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      scriptLoading: 'defer',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'game.html',
      template: path.resolve(__dirname, 'src', 'game.html'),
      scriptLoading: 'defer',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'result.html',
      template: path.resolve(__dirname, 'src', 'result.html'),
      scriptLoading: 'defer',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'gallery.html',
      template: path.resolve(__dirname, 'src', 'gallery.html'),
      scriptLoading: 'defer',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css', //.[contenthash]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // publicPath: path.resolve("/style")  ,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        // use: [
        //   {
        //     loader: 'image-webpack-loader',
        //     options: {
        //       mozjpeg: {
        //         progressive: true,
        //       },
        //       optipng: {
        //         enabled: false,
        //       },
        //       pngquant: {
        //         quality: [0.65, 0.90],
        //         speed: 4
        //       },
        //       gifsicle: {
        //         interlaced: false,
        //       },
        //       webp: {
        //         quality: 75
        //       },
        //     }
        //   }
        // ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/sounds/[name].[ext]',
        },
      },
    ],
  },
};
