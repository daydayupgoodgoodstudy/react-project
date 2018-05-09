//生产环境 webpack 配置
var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var PrerenderSPAPlugin = require('prerender-spa-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


function pathTo() {
    return path.join(__dirname, path.join.apply(path, arguments));
}
module.exports = {
    mode: 'production',
    entry:['babel-polyfill','./src/main.jsx' ],
    devServer: {
        // historyApiFallback: true,
        // progress: false,
        // contentBase: './app',
        host: "localhost",
        port: 8080,
        proxy: {
            '/api/*': {
                //localhost:3000是接口地址
                target: 'http://localhost:3000/',
                changeOrigin: true,

            }
        }
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.[hash:8].js',
        publicPath: '/',
        chunkFilename:'chunkRoute/[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx', '.scss'],
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
            //jsx装载器
            {
                test: /\.jsx|js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            //css装载器
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            },
            {
                test: /\.(png)|(jpg)|(jpeg)$/,
                loader: "url?limit=50000"
            },
            {
                // 图片加载器
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=2048'
            },
            //sass
            {
                test: /\.scss$/,
                
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
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
                }),
                // use: [{
                //     loader: 'style-loader',
                //     options: {} // style-loader options
                // }, {
                //     loader: 'css-loader',
                //     options: {
                //         importLoaders: 2 // css-loader options
                //     }
                // }, 
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         config: {
                //             path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                //           }
                //     } // postcss-loader options
                // }, 
                // {
                //     loader: 'sass-loader',
                //     options: {} // sass-loader options
                // }]
            }
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
        new BundleAnalyzerPlugin(),

        new webpack.ProvidePlugin({
            "React":"react",
            // 'window.React': 'react',
            'axios': 'axios'
        }),
        //index模板文件
        new HtmlWebpackPlugin({
            template: './indexTemplate.html', //模板路径
            // hash: true,
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            },
            inject: true
        }),
        
        new CleanWebpackPlugin(
            [
                'dist/bundle.*',
                'dist/index.html',
                'dist/chunkRoute/*'
            ], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),

        // dll预打包，提高编译速度·
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest: require('./dist/manifest.dev.json')
        }),
        //指定一个文件作为公共文件


        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["vendor"],
        //     minChunks: Infinity
        // }),
        //SPA
        new PrerenderSPAPlugin({
            staticDir:path.join(__dirname,'dist'),
            routes:['/']
        }),
        // new webpack.NoErrorsPlugin(),

      


        // new ExtractTextPlugin("styles.css"),

        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'index.html'),//模板
        //     filename: 'index.html',
        //     hash: true,//防止缓存
        //     minify: {
        //         removeAttributeQuotes: true//压缩 去掉引号
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "vendor.js",
        //     minChunks: 2,
        // }),

        // new webpack.optimize.AggressiveSplittingPlugin({
        //     minSize: 30000, //Byte, split point. Default: 30720
        //     maxSize: 50000, //Byte, maxsize of per file. Default: 51200
        //     chunkOverhead: 2, //Default: 0
        //     entryChunkMultiplicator: 1, //Default: 1
        // }),
        // new OpenBrowserPlugin({ url: 'http://localhost:8089' }),

    ]
};