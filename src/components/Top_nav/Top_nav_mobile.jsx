import React, { Component, cloneElement } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'react-cookies';
import { logout } from './nav_action';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import "./Top_nav.scss";


const data = [
  {
    value: '1',
    label: '首页',
    isLeaf: true,
  }, {
    value: '2',
    label: '智能硬件',
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
    value: '5',
    label: '退出登录',
    isLeaf: true,
  },

];

class Top_nav_mobile extends Component {
  constructor(...args) {
    super(...args);
    this.map_to = this.map_to.bind(this);
    this.state = {
      initData: '',
      show: false,
    };
  }
  map_to = (value) => {
    const { history } = this.props
    this.setState({
      show: false,
    });
    switch (value) {
      case "1":
        return history.push("/map");
      case "2":
        return history.push("/map/mapplugins")
      case "3":
        return history.push("/map/mapeven");
      case "4":
        return history.push("/map/mapmarkers")
      default:
        return
    }
  }

  onChange = (value) => {
    console.log(value)
    const { dispatch, history } = this.props
    let label = '';
    switch (value[0]) {
      case "1":
        return history.push("/home");
      case "5":
        return dispatch(logout(Cookie.load("access_token"), history))
      case "6":
        return this.map_to(value[1])
      default:
        return;
    }
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
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

function mapStateToProps(state) {
  return {
    num: state.reducers.num,
    name: state.reducers.name
  }
}


export default withRouter(connect(mapStateToProps)(Top_nav_mobile))
