
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: './shared-app-built', to: './lib' },
    //   ],
    // }),
    new ModuleFederationPlugin({
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      remotes: {
        app2: 'app2', // Add remote (Second project)
      },
      // shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
