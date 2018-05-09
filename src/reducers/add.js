const def = {
  num: 0,
  name: ""
}

export default function reducers(state = def, action) {
  switch (action.type) {
    //增加计数
    case 'INCREMENT':
      return { ...state, num: state.num + 1 };
    //减少计数
    case "DECREMENT":
      return { ...state, num: state.num - 1 };
    case "GETDATA":
      return { ...state, name: action.data.name };
    // case "EDIT":
    //   return { ...state, name: action.success };
    default:
      return state;
  }
};