// import { history } from 'react-router-dom'
import { message } from 'antd';
import iaxios from "../axios/iaxios.js"

export const register=(data)=>{
    return (dispatch) => {
        axios.post('/api/users/register',{username:data.username,password:data.password})
            .then(response => {
                // message.success("登录成功");
                // dispatch({
                //     type: "REGISTER",
                //     data: response.data.data,
                // })
            })
            .catch(err => {
                
            })
    }
}

export const login=(data,history)=>{
    return (dispatch) => {
        iaxios.post('/api/users/login',{username:data.username,password:data.password})
            .then(response => {
                if(response.status === 200){
                    history.push('/home')
                }
                message.success("登录成功");
            })
            .catch(err => {
                message.error("登录失败");
            })
    }
}

