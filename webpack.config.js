const path = require('path');
const webpack = require('webpack');
const marked = require('marked');
const CompressionPlugin = require('compression-webpack-plugin')

const renderer = new marked.Renderer();


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    devServer: {
        index: 'index.html',
        compress: true
    },
    module: {
        rules: [{
                test: /\.md$/,
                use: [{
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            ghf: true,
                            breaks: true,
                            smartypants: true,
                            xhtml: true,
                            renderer
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};