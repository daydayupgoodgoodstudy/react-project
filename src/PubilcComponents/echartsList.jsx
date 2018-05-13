import React, { Component, cloneElement } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Cookie from 'react-cookies';
import { Get_echarts_list, clear } from '../action/home';
import Shop_box from "../PubilcComponents/shop_box.jsx";

class echartsList extends Component {
    constructor(props) {
        super(props);
        this.state = { content1_data: [] }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.home.content1_data.length !== nextProps.home.content1_data.length) {
            this.setState({ content1_data: nextProps.home.content1_data });
        }
    }
    handler() {
        let { dispatch, home } = this.props;
        // alert(11)
        if (!home.loading) {
            // debugger
            let yTop = document.body.scrollTop || document.documentElement.scrollTop,
                elementHeight = document.body.scrollHeight,
                clientHeight = document.body.clientHeight;
            //距离最底部100px的时候加载下一页
            if (elementHeight - 100 < yTop + clientHeight) {
                dispatch(Get_echarts_list(home.content1_Pagination.currentPage + 1, home.content1_Pagination.pageSize));
            }
        }
    }

    componentDidMount() {
        const { dispatch, home } = this.props;
        let _this = this;

        dispatch(Get_echarts_list(_this.props.home.content1_Pagination.currentPage, _this.props.home.content1_Pagination.pageSize));


        regScroll(this.handler.bind(this));

        function regScroll(myHandler) {
            if (window.onscroll === null) {
                window.onscroll = myHandler
            } else if (typeof window.onscroll === 'function') {
                var oldHandler = window.onscroll;
                window.onscroll = function () {
                    myHandler();
                    oldHandler();
                }
            }
        }



    }
    //组件渲染前
    componentWillMount() {

    }



    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(clear())
        window.onscroll = '';
    };
    render() {
        const mapHome = this.state.content1_data.map((index, n) =>
            <Col key={index.id} xs={12} sm={12} md={6} lg={6} xl={6} ><Shop_box data={index} /></Col>
        )
        return (
            <div>
                <Row gutter={{ xs: 8, sm: 16, xl: 24 }} type="flex" justify="start" align="middle">
                    {mapHome}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.Home
    }
}


export default connect(mapStateToProps)(echartsList)
