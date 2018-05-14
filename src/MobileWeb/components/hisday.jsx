import React from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { Timeline,Icon } from 'antd';
import { connect } from 'react-redux';

import { hisday } from "../../action/history";

class Hisday extends React.Component {
    constructor(props) {
        super(props);
        this.changeday = this.changeday.bind(this)
    }

    componentWillMount() {

    }

    changeday() {

    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(hisday());
    }

    checkout = () => {

    }
    render() {
        let this_url = this.props.match.url;
        const hisdays = this.props.hisday.map((n, index) =>
            <Timeline.Item key={index}>
                <div>
                    <img style={{ width: "100%", maxHeight: "200px" }} src={n.img} alt="" />
                    <p>{n.title} </p>
                    <p>时间 {n.year}:{n.month}:{n.day}</p>
                </div>
            </Timeline.Item>
        )
        return (
            <div>
                <Timeline>
                    {hisdays}
                </Timeline>
                <Icon type="clock-circle-o" style={{
                    color: "#08c",
                    fontSize: 30,
                    color: '#08c',
                    position: "fixed",
                    bottom: "5%",
                    right: "5%",
                    zIndex: 999
                }} onClick={this.changeday} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hisday: state.Hisday.hisday
    }
}

export default connect(mapStateToProps)(Hisday)