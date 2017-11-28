module.exports = options => {
    return {
      entry: './src/index.js',
      module: {
        rules: [{
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          }, {
              test: /\.(png|jpe?g|gif|svg|eot|svg|ttf|woff|woff2)(\?\S*)?$/,
              loader: 'file-loader',
              query: {name: '[name].[ext]?[hash]'}
          }, {
              test: /\.css|scss$/,
              use: [
                'style-loader','css-loader','sass-loader'
              ]
            },  {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url-loader?limit=1000000&mimetype=application/font-woff'
          }],
      },
    }
  }
  