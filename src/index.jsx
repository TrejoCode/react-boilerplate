/**
 *  @name: index.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Punto de Entrada de React
 * 	@process: 1
*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import App from './app';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

// Hoja de estilos
import './sass/style.scss';

// Función para cargar la fuente de Google de manera asíncrona.
WebFont.load({
    google: {
        families: ['Roboto:400,500,700,900', 'sans-serif']
    }
})


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);


// Service Worker "register" para una PWA.
serviceWorker.register();
