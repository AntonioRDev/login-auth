import React from "react";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            </Switch>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Router;