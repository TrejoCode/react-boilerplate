/**
 *  @version1 1.0.1
 *  @author Trejocode - Sergio
 *  @description Componente <Footer />
*/

import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => (

    <footer className="justify-center">
        <div className="container">
            <div className="row-responsive full">
                <div className="full legend">
                    <p className="color-white weight-medium">
                        2020® Boilerplate Brand
                    </p>
                </div>
                <div className="social full">
                    <a href = "https://www.facebook.com/trejocode">
                        <AiFillFacebook size = { 18 } className = "color-white" />
                    </a>
                    <a href = "https://www.instragram.com/trejocode">
                        <AiFillInstagram size = { 18 } className = "color-white" />
                    </a>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;