import { createStore } from 'redux';
//fn == reducer 
// const store = createStore(fn);

//生成store的时候将reducer传入
store = createStore(reducer);


//createStore的内部实现
// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
  
//     const getState = () => state;
  
//     const dispatch = (action) => {
//       state = reducer(state, action);
//       listeners.forEach(listener => listener());
//     };
  
//     const subscribe = (listener) => {
//       listeners.push(listener);
//       return () => {
//         listeners = listeners.filter(l => l !== listener);
//       }
//     };
  
//     dispatch({});
  
//     return { getState, dispatch, subscribe };
//   };


//监听state,发生改变调用listener
store.subscribe(listener);
//获取某个节点的数据

const state = store.getState();



//store.dispatch()是 View 发出 Action 的唯一方法
store.dispatch(addTodo("Learn Redux"));

//action
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}


//store。dispatch()会自动触发reducer 
//reducer是一个纯函数，输入的值相同结果必定相同
const defaultState = 0;
let defaul = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4
}

const reducer = (state = defaul, action) => {
    switch (action.type) {
        case 'ADD':
            // return Object.assign({}, state, { thingToChange });
            // 或者
            return { ...state, ...newState };
        default:
            return state;
    }
};

const state = reducer(1, {
    type: 'ADD',
    payload: 2
});


