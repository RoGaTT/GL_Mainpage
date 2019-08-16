const  path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: [
        "./src/main.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|eot|woff|ttf|svg|rb)$/i,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }), 
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            core: path.resolve(__dirname, 'src/core/'),
            root: path.resolve(__dirname, '')
        }
    }
};