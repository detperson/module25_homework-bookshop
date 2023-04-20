const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: path.join('source', '[name].[contenthash][ext]'),
    },
    optimization: {
        //Минифицируем JS и CSS
        minimize: false,
        minimizer: [
            `...`,
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    performance: {
        hints: false,
    },
    devServer: {
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            //Минифицируем HTML
            minify: {
                collapseWhitespace: false
            },
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images/slider'),
                    to: path.resolve(__dirname, 'dist/images/slider')
                },
                { from: path.resolve(__dirname, 'src/images/no-cover.png'), to: path.resolve(__dirname, 'dist/images') }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]'
                }
            }
        ]
    }
}