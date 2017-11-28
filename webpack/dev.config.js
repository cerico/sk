const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig(), {

    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
       port: 3000,
       host: '0.0.0.0',
      disableHostCheck: true,
       historyApiFallback: {
         rewrites: [{
          from: /./,
          to: '/src/index.html'
         }]
       },
    }
  })

