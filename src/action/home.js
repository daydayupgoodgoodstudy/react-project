import iaxios from "../axios/iaxios.js"
export const Get_echarts_list=(currentPage,pageSize)=>{
    return (dispatch) => {
        dispatch({type:"Loading_true"})
        iaxios.get('/api/echarts/find',{
            params: {
              currentpage:currentPage,
              pagesize:pageSize
            }
          })
            .then(response => {
                dispatch({type:"Loading_false"})
                dispatch({
                    type:"Get_echarts_list",
                    data:response.data,
                    Pagination:{
                        currentPage,
                        pageSize
                    }
                })
            })
            .catch(err => {
                dispatch({type:"Loading_false"})
            })
    }
}

export const clear=()=>{
    return (dispatch)=>{
        dispatch({type:"clear_home"})
    }
}
