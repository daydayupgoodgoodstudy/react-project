
import React from 'react';
import { Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';
import { Home, Login } from "./loadroute";

class MIndex extends React.Component {

    render() {
        let this_url = this.props.match.url;
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route render={() => <Redirect to="/home" />} />
            </Switch>
        )
    }
}


export default MIndex