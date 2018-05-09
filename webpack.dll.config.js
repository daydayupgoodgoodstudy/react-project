const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-helmet',
            'react-redux',
            'react-router',
            'react-router-dom',
            'redux-logger',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname,'./dist'),//存放在根目录下
        publicPath:'/',
        filename: '[name].[chunkhash:5].js',//生成的文件名字
        library: '[name]' //生成文件的一些映射关系
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname,'./dist/manifest.dev.json'),
            name: '[name]',//与上面output中配置对应,
            context:__dirname
        })
    ]
};