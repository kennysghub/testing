const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [ [ '@babel/preset-env' ], '@babel/preset-react' ],
                  },
                },
              },
            {
                test: '/\.s?[ac]ss$/i',
                exclude: /node_modules/,
                use:[ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              },
            {
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    devServer: {
        // Other devServer options...
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            secure: false,
            changeOrigin: true
          }
        }
      }
}