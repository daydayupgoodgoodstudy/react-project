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
import Home_content1 from '../components/home_content1';
import Home_content2 from '../components/home_content2';
import Home_content3 from '../components/home_content3';
import Home_content4 from '../components/home_content4';

import Hisday from '../components/hisday.jsx';

import Icon_up from '../components/icon_up.jsx';

import "../asset/css/header";

class Admin extends React.Component {

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
                        {/* {中部导航栏} */}
                        <Mid_nav />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1200}>
                        <Top_nav_mobile />
                    </MediaQuery>
                    {/* 轮播图 */}
                    {/* 主体内容 */}
                    <Content>
                        {/* <Content style={{ background: '#fff', padding: 0, maxHeight: 500, lineHeight: 500 }} className="carousel_header">
                            <Carousel autoplay>
                                <div><img src="http://echarts.baidu.com/examples/data/thumb-dark/map-parallel-prices.png" alt="" /></div>
                                <div><img src="http://echarts.baidu.com/examples/data/thumb-dark/dataset-default.png" alt="" /></div>
                                <div><img src="http://echarts.baidu.com/examples/data/thumb-dark/custom-wind.png" alt="" /></div>
                                <div><img src="http://echarts.baidu.com/examples/data/thumb-dark/custom-error-bar.png" alt="" /></div>
                            </Carousel>
                        </Content> */}
                        <Content className="inner">
                            <Route exact path='/home' component={Home_content1} />
                            <Route exact path='/home' component={Icon_up} />
                            <Route exact path={`${this_url}/two`} component={Home_content2} />
                            <Route exact path={`${this_url}/three`} component={Home_content3} />
                            <Route exact path={`${this_url}/four`} component={Home_content4} />
                            <Route exact path={`${this_url}/hisday`} component={Hisday} />
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

export default connect(mapStateToProps)(Admin)