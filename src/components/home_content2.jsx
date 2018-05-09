import React, { Component, cloneElement } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Cookie from 'react-cookies';

class Home_content2 extends Component {
    constructor(props) {
        super(props);
        // this.out = this.out.bind(this);
        // this.state = {login: ''};
    }
    // out() {
    //     let { dispatch, history } = this.props;
    //     dispatch(logout(Cookie("access_token"), history))
    // }

    componentWillMount() {

    }


    render() {
        let html = this.props.match.url;
        return (
            <div style={{
                textAlign:"center",
                verticalAlign:"middle",
                width:"100%",
                height:"100%",
                background:"#b9b612",
                lineHeight: "300px"
                }}>
                <h1>{html}秋香色</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // Login: state.Login
    }
}


export default connect(mapStateToProps)(Home_content2)
