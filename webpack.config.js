const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dylan Gresham - Portfolio',
            template: './src/index.html',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|ttf|otf|ot)$/i,
                type: 'asset/resource',
            },
        ],
    },
};