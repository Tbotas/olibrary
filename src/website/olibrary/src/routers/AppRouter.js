import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from "../components/Menu";
import HomePage from "../components/HomePage";
import BookPage from "../components/BookPage";
import ErrorPage from "../containers/ErrorPage";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Menu/>
            <Switch>
                <Route path={'/'} component={HomePage} exact={true}/>
                <Route path={'/book/:id'} component={BookPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;