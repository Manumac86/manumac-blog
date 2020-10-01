const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    // See https://github.com/gaearon/react-hot-loader/issues/1227
    'react-hot-loader/patch',
    './src/index.js'
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [
            [
              "@babel/preset-react",
              {
                "targets": {
                  "node": "current"
                }
              }
            ],
            "@babel/preset-env"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Solve Problems with url(...)
          'resolve-url-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  resolve: { 
    alias: {
      // See https://github.com/gaearon/react-hot-loader/issues/1227
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.jsx'] 
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    historyApiFallback: true,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ]
}