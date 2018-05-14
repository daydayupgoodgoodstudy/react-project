import React, { Component, cloneElement } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'react-cookies';
import { logout } from '../../action/nav_action';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import "../../asset/Mcss/Top_nav.scss";


let data = [
  {
    value: '1',
    label: '首页',
    isLeaf: true,
  },
  {
    value: '3',
    label: 'APP下载',
    isLeaf: true,
  },
  {
    value: '4',
    label: '关于我们',
    isLeaf: true,
    disabled: false
  },
  {
    value: "6",
    label: "地图",
    children: [{
      label: "Map_default",
      value: "1"
    }, {
      label: "Map_plugins",
      value: "2"
    }, {
      label: "Map_even",
      value: "3"
    }, {
      label: "Map_markers",
      value: "4"
    }
    ]
  },
  {
    value: "7",
    label: "历史今日",
    isLeaf: true
  },
  {}
];



class Top_nav_mobile extends Component {
  constructor(...args) {
    super(...args);
    this.map_to = this.map_to.bind(this);

    this.state = {
      initData: '',
      show: false
    };
  }
  map_to = (value) => {
    const { history } = this.props
    this.setState({
      show: false,
    });
    switch (value) {
      case "1":
        return history.push("/home/map");
      case "2":
        return history.push("/home/mapplugins")
      case "3":
        return history.push("/home/mapeven");
      case "4":
        return history.push("/home/mapmarkers")
      default:
        return
    }
  }

  onChange = (value) => {
    const { dispatch, history } = this.props
    let label = '';
    this.setState({
      show: false,
    });
    switch (value[0]) {
      case "1":
        return history.push("/home");
      case "998":
        return dispatch(logout(Cookie.load("access_token"), history))
      case "999":
        return history.push("/login");
      case "6":
        return this.map_to(value[1]);
      case "7":
        return history.push("/home/hisday");
      default:
        return;
    }
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      data.pop()
      if (Cookie.load("access_token")) {
        data.push({
          value: '998',
          label: '退出登录',
          isLeaf: true,
        })
      } else {
        data.push({
          value: '999',
          label: '登陆',
          isLeaf: true,
        })
      }
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={2}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'fixed', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu1"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            OneLevel menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}


export default withRouter(connect()(Top_nav_mobile))
