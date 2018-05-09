import React from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { Layout, Form, Icon, message, Carousel, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;
import MediaQuery from 'react-responsive';
import Helmet from "react-helmet";
import Cookie from 'react-cookies';
// 顶部导航-pc
import Top_nav from "../components/Top_nav/Top_nav.jsx";
//顶部导航 - mobile
import Top_nav_mobile from "../components/Top_nav/Top_nav_mobile.jsx";

//中部导航
import Mid_nav from "../components/Mid_nav/Mid_nav.jsx";

//底部信息
import Foot_info from "../components/Foot_info/Foot_info.jsx";

//contetn内容1,2,3,4
import Map_even, { Map_default, Map_plugins } from '../components/Map/map.jsx';
import Map_markers from "../components/Map/map_markers.jsx";


import Icon_up from '../components/icon_up.jsx';

import "../asset/css/header";

class Maps extends React.Component {

    componentWillMount() {
        // 代替 原 Route3 组件的 onEnter()
        let { match, history } = this.props;
        if (!Cookie.load("access_token")) {
            history.push("/")
        }
    }

    checkout = () => {

    }
    render() {
        let this_url = this.props.match.url;
        return (
            <div>
                <Layout>
                    {/* {顶部导航栏} */}
                    <MediaQuery minDeviceWidth={1200}>
                        <Top_nav historys={history} />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1200}>
                        <Top_nav_mobile />
                    </MediaQuery>
                    {/* 主体内容 */}
                    <Content>
                        <Content className="inner">
                            <div style={{ width: "100%", height: "500px" }}>
                                <Route exact path='/map' component={Map_default} />
                                <Route exact path={`${this_url}/mapplugins`} component={Map_plugins} />
                                <Route exact path={`${this_url}/mapeven`} component={Map_even} />
                                <Route exact path={`${this_url}/mapmarkers`} component={Map_markers} />
                            </div>
                        </Content>
                    </Content>
                </Layout>
            </div>
        )

    }

}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Maps)