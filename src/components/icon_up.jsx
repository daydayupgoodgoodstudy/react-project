import React, { Component, cloneElement } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import Cookie from 'react-cookies';

class Icon_up extends Component {
    constructor(props) {
        super(props);
        this.up = this.up.bind(this);
        this.handler = this.handler.bind(this);
        this.state = { dis: false };
    }
    handler() {
        let yTop = document.body.scrollTop || document.documentElement.scrollTop,
            clientHeight = document.body.clientHeight;
        if (clientHeight * 5 < yTop) {
            if (!this.state.dis) {
                this.setState({ dis: true })
            }
        } else {
            if (this.state.dis) {
                this.setState({ dis: false })
            }
        }
    }

    componentDidMount() {

        regScroll(this.handler);

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
    componentWillUnmount() {
        window.onscroll = '';
    };

    up() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    render() {
        let icons = this.state.dis ? <Icon type="up-circle" onClick={this.up}
            style={{
                fontSize: 50,
                color: '#08c',
                position: "fixed",
                bottom: "5%",
                right: "5%",
                zIndex: 999
            }} /> : <Icon type="up-circle" onClick={this.up}
                style={{
                    display: "none"
                }} />;
        return (
            <div>
                {icons}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}


export default connect(mapStateToProps)(Icon_up)
