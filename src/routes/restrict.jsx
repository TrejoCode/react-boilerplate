/**
 *  @version 1.0.0
 *  @author Trejocode - Sergio
 *  @description Manejo de todas las rutas restringidas
*/
import React from 'react';
import { verifySession }    from 'auth/sessions';
import { Route, Redirect }  from 'react-router-dom';


const RestrictRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render = {
            props => {
                if (verifySession()) {
                    return <Redirect to = "/404" />
                } else {
                    return <Component { ...props } />;
                }
            }
        }
    />
);


export default RestrictRoute; 