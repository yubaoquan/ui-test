const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './index.jsx',
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', 'jsx', '.css', '.less' ],
  },
  output: {
    filename: '[name].js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-react",
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },

      {
        test: /\.css$|\.less$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'tpl.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};
