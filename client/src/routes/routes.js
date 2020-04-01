import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Shipments from "../pages/Shipments";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/shipments"
                    component={Shipments}
                />

                <Route
                    exact
                    path="/"
                    component={Home}
                />
            </Switch>
        );
    }
}

export default Routes;