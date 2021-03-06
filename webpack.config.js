 module.exports = {
     entry: './src/main.js',
     output: {
         path: './build',
         filename: 'bundle.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
               presets: ['es2015', 'react']
            }
         }]
     }
 };