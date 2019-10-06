/**
 *  @name: header.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Header
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

    <header className="justify-center">
        <div className="container row-responsive">
            <div className="logo full">
                <h2>
                    Company Name
                </h2>
            </div>
            <nav className="full">
                <NavLink exact to = "/" className="weight-medium color-gray" activeClassName = "nav-active">
                    Inicio
                </NavLink>
                <NavLink exact to = "/nosotros" className="weight-medium color-gray" activeClassName = "nav-active">
                    Nosotros
                </NavLink>
            </nav>
        </div>
    </header>

);

export default Header;