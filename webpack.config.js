const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
        // pablicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }

                    },
                    'postcss-loader'
                ],
            },
        ]
    }


}