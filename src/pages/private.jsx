/**
 *  @name: private.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Página privada
*/

import React from 'react';
import Layout from './layout';

const PagePrivate = () => (
    <Layout title = "Perfil" description = "Página privada de perfil" keywords = "Reactjs, SEO Ready, Ejemplo" >

        <div className="private column">
            <div className="white-space-32"></div>
            <div className="justify-center">
                <div className="container">
                    <div className="justify-center full">
                        <h1> Private Page </h1>
                    </div>
                </div>
            </div>
            <div className="white-space-32"></div>
        </div>
        
    </Layout>
);

export default PagePrivate;