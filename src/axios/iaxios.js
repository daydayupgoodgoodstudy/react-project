//创建一个axios实例
//对于需要做请求拦截的ajax使用iaxios
import axios from 'axios';
var iaxios = axios.create({
})

//添加一个请求拦截器
iaxios.interceptors.request.use(function(config){
    //在请求发送之前做一些事
    console.log(config,'-bf for request----');
    return config;
},function(error){
    //当出现请求错误是做一些事
    console.log(error,'error for request')
    return Promise.reject(error);
});

//添加一个返回拦截器
iaxios.interceptors.response.use(function(response){
    //对返回的数据进行一些处理
    console.log(response,"-bf for response----")
    return response;
},function(error){
    //对返回的错误进行一些处理
    console.log("-bf for error----")
    return Promise.reject(error);
});

export default iaxios;