import  Cookie  from 'react-cookies';
import { message } from 'antd';


export const logout=(access_token,history)=>{
    return (dispatch) => {
        axios.post('/api/users/logout',{access_token})
            .then(response => {
                Cookie.remove('access_token')
                history.push('/login');
                message.success("已退出登录")
            })
            .catch(err => {
                Cookie.remove('access_token')
                history.push('/login');
                message.success("已退出登录")
            })
    }
}
