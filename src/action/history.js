
import iaxios from "../axios/iaxios.js"
import { message } from 'antd';
import qs from 'qs';

export const hisday = (date = "", history) => {
    return (dispatch) => {
        iaxios({
            method: "post",
            url: "http://route.showapi.com/119-42",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                "showapi_appid": 64449,
                "showapi_sign": "e792436a5f31491e96ac48e256930a06",
                "date": date
            })
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response,'---')
                    dispatch({
                        type: "gethisday",
                        data: response.data.showapi_res_body
                    })
                }
                // message.success("获取成功");
            })
            .catch(err => {
                message.error("获取成功失败");
            })
    }
}