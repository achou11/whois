const marked = require('marked');
const CompressionPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const renderer = new marked.Renderer();


module.exports = {
    plugins: [
        // new BundleAnalyzerPlugin(),
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
        compress: true,
        open: true,
        historyApiFallback: true,
        hot: true,
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
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
