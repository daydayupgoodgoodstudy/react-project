import { combineReducers } from 'redux';

import reducers from './add';
import Login from './login';
import Home from './home';


const rootReducer = combineReducers({
    reducers,
    Login,
    Home
})

export default rootReducer;