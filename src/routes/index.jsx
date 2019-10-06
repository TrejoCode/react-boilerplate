/**
 *  @name: routes.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Manejo de todas las rutas de la aplicación
 * 	@process: 3
*/

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Páginas
import PagePublic from '../pages/public';
import PagePrivate from '../pages/private';
import Page404 from '../pages/404';
import PageOther from '../pages/other';

// Función para declarar rutas privadas
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render = {
            props => {
                const auth = window.localStorage.getItem("localStorageItem");
                if (auth) {
                    return <Component { ...props } />;
                } else {
                    return (
                        <Redirect to = { { pathname: "/", state: { from: props.location } } } />
                    );
                }
            }
        }
    />
);

const Routes = () => (

    <BrowserRouter>
        <div className="flex main">
            <div className="column full">
                <Switch>
                    <Route path = "/" exact component = { PagePublic } />
                    <Route path = "/nosotros" exact component = { PageOther } />
                    <PrivateRoute path = "/private" exact component = { PagePrivate } />
                    <Route component = { Page404 } />
                </Switch>
            </div>
        </div>
    </BrowserRouter>

);

export default Routes;