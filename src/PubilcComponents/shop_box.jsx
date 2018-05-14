import React, { Component, cloneElement } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import Cookie from 'react-cookies';
import "../asset/Publiccss/goods";


class Shop_box extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {

    }
    render() {
        return (
            <div className="goods">
                <a className="goods_box">
                    <h4 className="goods_title">{this.props.data.title}</h4>
                    <img className="goods_img" src={this.props.data.url} alt=""/>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // Login: state.Login
    }
}


export default connect(mapStateToProps)(Shop_box)
