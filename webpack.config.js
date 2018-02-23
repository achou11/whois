const path = require('path');
const webpack = require('webpack');
const marked = require('marked');


const renderer = new marked.Renderer();


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            { 
                test: /\.md$/,
                use: [
                    {
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
                test: /\.txt$/, 
                use: 'raw-loader' 
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
};
