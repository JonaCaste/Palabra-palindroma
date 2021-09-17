module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /nodemon_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
    }
}