/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Manejo de todas las rutas privadas
*/
import React from 'react';
import { verifySession }    from 'auth/sessions';
import { Route, Redirect }  from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render = {
            props => {
                if (verifySession()) {
                    return <Component { ...props } />;
                } else {
                    return <Redirect to = "/" />;
                }
            }
        }
    />
);


export default PrivateRoute; 