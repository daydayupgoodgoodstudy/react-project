
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
// HashRouter
import { createLogger } from 'redux-logger';
import { HashRouter as Router, Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';

// import Login from './contents/login';
// import asyncComponent from './Bundle';
// const Admin = asyncComponent(() => import("./contents/admin.jsx"));
import PcWeb from "./PcWeb/index";
import MobileWeb from "./MobileWeb/index";





const logger = createLogger();
const store = configStore();
// import 'antd/dist/antd.css';


// axios.defaults.headers.common['Authorization'] = "TvSm6Y6v8g0TCqIXSt7KvsMPax4FW3CkQXBovUCb0wAhqtba1TgXVHG3Vy7Dme7z";

// 1 安卓  2 ios 3 其他 判断终端
const shell = function () {
  var agent = navigator.userAgent;
  var a = "";
  var isAndroid = agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1;
  var isIOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid) {
    a = 1;
  } else if (isIOS) {
    a = 2;
  } else {
    a = 3;
  }
  return a;
}
const isPC = function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

const c = isPC() ? <Route component={PcWeb} /> : <Route component={MobileWeb} />;

console.log(isPC, '++++')
const render = (a) => 
ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={a}>
      <div>
        <Switch>
          {c}
          {/* <Route path="/" component={MobileWeb} /> */}
          {/* <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/home" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route path="/map" component={Maps} /> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
);


store.subscribe(render);
render();