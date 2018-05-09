
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
// HashRouter
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';
import Login from './contents/login';

import asyncComponent from './Bundle';

const Admin = asyncComponent(() => import("./contents/admin.jsx"));
// const aMap = asyncComponent(()=> import("./components/Map/map.jsx"))
// import { Map } from './components/Map/map.jsx';
import Maps from './contents/map.jsx';

const logger = createLogger();
const store = configStore();
// import 'antd/dist/antd.css';


// axios.defaults.headers.common['Authorization'] = "TvSm6Y6v8g0TCqIXSt7KvsMPax4FW3CkQXBovUCb0wAhqtba1TgXVHG3Vy7Dme7z";

const render = (a) => {

  ReactDOM.render(
    <Provider store={store}>
      <Router onUpdate={a}>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/home" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route path="/map" component={Maps} />
            {/* <Route render={() => <Redirect to="/login" />} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>,
    document.getElementById('wrapper')
  );
}

store.subscribe(render);
render();