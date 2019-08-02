import {
    Switch,
    BrowserRouter as AppRouter,
    Route
} from 'react-router-dom'
import React, { Component } from 'react'

import Home from './components/MainContent'
import About from './components/About'

export class Router extends Component {
    render() {
        return (
            <AppRouter>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        exact
                        path='/about'
                        component={About}
                    />
                </Switch>
            </AppRouter>
        )
    }
}

export default Router
