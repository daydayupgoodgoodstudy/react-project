
export const add=()=>{

    return {
        type:"INCREMENT"
    }
}

export const down=()=>{
    return {
        type:"DECREMENT"
    }
}

export const getdata=()=>{

    return (dispatch) => {
        axios.get('/api/tests/getdata')
            .then(response => {
                dispatch({
                    type: "GETDATA",
                    data: response.data.data,
                })
            })
            .catch(err => {

            })
    }
}

export const edit=()=>{
    return (dispatch) => {
        axios.get('/api/tests/edit',{params:{name:'czg'}})
            .then(response => {
                // dispatch({
                //     type: "EDIT",
                //     data: response.data.data,
                // })
            })
            .catch(err => {

            })
    }
}
