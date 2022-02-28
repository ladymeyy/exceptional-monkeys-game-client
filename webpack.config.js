const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // what's the main file
    entry: './src/index.js',

    // what to compile to --> dist/index.bundle.js (need for step2)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                // .babelrc file handles this
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },														
                            sourceMap: true
                        }
                     },
                     { 
                         loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [ 'autoprefixer', {}, ],
                                ],
                            },
                        }
                      }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{loader: 'url-loader',
                      options: {
                          limit: 10000,
                          name: 'img/[name].[ext]'
                      }}]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
