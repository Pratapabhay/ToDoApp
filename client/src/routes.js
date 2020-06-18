import React from "react";
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

import Projects from './pages/projects/index';


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/",
        component: Projects,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/signup",
        component: SignUp,
    }
];

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Projects />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}