const def = {
    //home_分页
    content1_Pagination: { currentPage: 1, pageSize: 12 },
    content1_data: [],
    loading: false,
}

export default function reducers(state = def, action) {
    switch (action.type) {
        //增加计数
        case 'Get_echarts_list':
            //content1_data数据合并
            let content1_datas = state.content1_data.concat(action.data.data);
            return { ...state, content1_data: content1_datas, content1_Pagination: { ...action.Pagination } };

            
        case 'Loading_true':
            return { ...state, loading: true }
        case 'Loading_false':
            return { ...state, loading: false }
        case "clear_home":
            return {
                ...state,    
                content1_Pagination: { currentPage: 1, pageSize: 12 },
                content1_data: [] 
            }
        default:
            return state;
    }
};