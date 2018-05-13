const def = {
    hisday:[]
}

export default function reducers(state = def, action) {
    switch (action.type) {
        //增加计数
        case 'gethisday':
            return { ...state, hisday:action.data.list };
        // case "EDIT":
        //   return { ...state, name: action.success };
        default:
            return state;
    }
};