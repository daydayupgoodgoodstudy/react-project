import React, { Component, cloneElement } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Form, Icon, message, Carousel, Input, Button, Checkbox } from 'antd';
import { logout } from './nav_action';
const { Header, Content, Footer } = Layout;
import Cookie from 'react-cookies';
import "./Top_nav.scss";

class Top_nav extends Component {
    constructor(props) {
        super(props);
        this.out = this.out.bind(this);
        // this.state = {login: ''};
    }
    out() {
        let { dispatch, history } = this.props;
        dispatch(logout(Cookie.load("access_token"), history))
    }



    componentWillMount() {
    }


    render() {
        return (
            <Header className="Top_nav_box" style={{ background: '#fff', padding: 0, height: 30, lineHeight: 0 }}>
                <ul className="nav_left">
                    <li><Link to="/" className="">名称</Link></li>
                    <li onClick={this.out}>退出</li>
                    <li><Icon type="mail" style={{ fontSize: 14, marginRight: 5, color: '#08c' }} />消息</li>
                </ul>
                <ul className="nav_right">
                    <li><Link to="/home">首页</Link> </li>
                    <li> 用户中心</li>
                    <li> 卖家中心</li>
                    <li> 购物车<span id="shoping">0</span></li>
                    <li> 客服服务</li>
                    <li><Icon type="mail" style={{ fontSize: 14, marginRight: 5, color: '#08c' }} />消息</li>
                </ul>
            </Header>
        )
    }
}

function mapStateToProps(state) {
    return {
        Login: state.Login
    }
}


export default withRouter(connect(mapStateToProps)(Top_nav))
