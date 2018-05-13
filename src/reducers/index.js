import { combineReducers } from 'redux';

import reducers from './add';
import Login from './login';
import Home from './home';
import Hisday from './hisday';

const rootReducer = combineReducers({
    reducers,
    Login,
    Home,
    Hisday
})

export default rootReducer;