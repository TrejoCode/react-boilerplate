/**
 *  @name: 404.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Página de error 404
*/

import React from 'react';
import Layout from './layout';

const Page404 = () => (
    <Layout title = "404- - Error" description = "La página no existe" keywords = "Reactjs, SEO Ready, Ejemplo" >

        <div className="page404 column">
            <div className="white-space-32"></div>
            <div className="justify-center">
                <div className="container">
                    <div className="justify-center full">
                        <h1> 404 - La página no existe </h1>
                    </div>
                </div>
            </div>
            <div className="white-space-32"></div>
        </div>
        
    </Layout>
);

export default Page404;