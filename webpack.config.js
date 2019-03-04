const ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css'
})

function sassRules () {
  return [
    {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
    }
  ]
}

function scriptRules () {
  return [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

module.exports = {
  entry: [
    './src/bundle.scss',
    './src/bundle.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    extractSass
  ]
}