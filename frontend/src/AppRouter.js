import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

/* Pages */
import App from "./views/pages/App";
import Game from "./views/pages/Game";


import MainLayout from './views/layouts/main';


class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                

                

                <Switch>
                    <Route exact={true} path="/" render={() => (
                        <App/>
                    )}/>
                    <Route path="/game/:gameId" component={Game} />
                    
                    <Route component={(() => {
                        //didnt have enough time for 404:

                        return <MainLayout>
                            <h1 class="title is-1 container">404 Not Found</h1>
                        </MainLayout>
                    })} />
                </Switch>

                

            </BrowserRouter>
        )
    }
}

export default AppRouter;