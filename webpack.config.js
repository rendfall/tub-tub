module.exports = {
    entry: __dirname + '/src/App.js',

    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    }
};