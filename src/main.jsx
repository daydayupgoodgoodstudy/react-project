
import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';


const store = configStore();

//loading可以替换成模块 

const MobileWeb = Loadable({
  loader: () => import('./MobileWeb/index'),
  loading(){
    return <div>Loading...</div>
  },
});

const PcWeb = Loadable({
  loader: () => import('./PcWeb/index'),
  loading(){
    return <div>Loading...</div>
  },
});


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

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          {c}
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
);
