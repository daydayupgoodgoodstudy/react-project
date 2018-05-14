
import React from 'react';
import { Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';
import Home from "./contents/home";
import Login from '../MobileWeb/contents/login';


class PIndex extends React.Component {
    render() {
        let this_url = this.props.match.url;
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}


export default PIndex