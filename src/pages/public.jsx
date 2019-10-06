/**
 *  @name: public.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Página pública
*/

import React from 'react';
import Layout from './layout';

const PagePublic = () => (
    <Layout title = "Inicio" description = "Descripción de la página de Inicio" keywords = "Reactjs, SEO Ready, Ejemplo" >

        <div className="public column">
            <div className="white-space-32"></div>
            <div className="justify-center">
                <div className="container">
                    <div className="justify-center full">
                        <h1> Public Page </h1>
                    </div>
                </div>
            </div>
            <div className="white-space-32"></div>
        </div>
        
    </Layout>
);

export default PagePublic;