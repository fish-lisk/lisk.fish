const path = require('path');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js?$/,
                options: {
                    presets: ['env', 'react'],
                },
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};
