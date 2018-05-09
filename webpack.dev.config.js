//开发环境 webpack配置
var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


function pathTo() {
    return path.join(__dirname, path.join.apply(path, arguments));
}

module.exports = {
    mode: 'development',
    devServer: {
        // historyApiFallback: true,
        // progress: false,
        // contentBase: './app',
        // host: "localhost",
        port: 8080,
        proxy: {
            '/api/*': {
                //localhost:3000是接口地址
                // target: 'http://172.18.11.129:3000/',
                // target: 'http://172.18.11.211:3000/',
                // target: 'http://119.29.223.81:3000/',
                 target: 'http://localhost:3000/',
                changeOrigin: true,

            }
        }
    },
    entry: ['babel-polyfill','./src/main.jsx'],
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename:'chunkRoute/[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx','.scss'],
        alias: {
            actions: pathTo('src/actions'),
            assets: pathTo('src/assets'),
            components: pathTo('src/components'),
            constants: pathTo('src/constants'),
            containers: pathTo('src/containers'),
            reducers: pathTo('src/reducers'),
            store: pathTo('src/store'),
            utils: pathTo('src/utils'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','stage-0','react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            },
            {
                // 图片加载器
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=2048'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                    options: {} // style-loader options
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2 // css-loader options
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                        }
                    } // postcss-loader options
                },
                {
                    loader: 'sass-loader',
                    options: {} // sass-loader options
                }]
            }
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({ use: 'css-loader' })
            // },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader'
            //   }

        ]
    },
    //performance 这些选项允许您控制webpack如何通知您超出特定文件限制的资产和入口点
    performance: {
        //鉴于创建超过250kb的资源
        //hints:false 没有提示警告或错误显示
        //hints:"warning" 将显示警告，通知您大型资产。我们推荐这样的开发环境。
        //hints:"error" 将显示错误，通知您大型资产。我们建议hints: "error"在生产版本中使用，以防止部署过大的生产捆绑包，从而影响网页性能。
        hints: false,
        //maxEntrypointSize：int 入口点表示在特定条目的初始加载时间内将使用的所有资源 默认值 250000
        maxEntrypointSize: 400000,
        //maxAssetSize:int 250000,
        maxAssetSize: 400000
    },
    plugins: [
        // new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            // React: 'react',
            // // 'window.React': 'react',
            'axios': 'axios'
        }),
        // new ExtractTextPlugin("styles.css"),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "vendor.js",
        //     minChunks: 2,
        // }),

        // new OpenBrowserPlugin({ url: 'http://localhost:8089' }),

    ]
};