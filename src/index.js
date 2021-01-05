/**
 * @version 2.0.0
 * @author Trejocode - Sergio
 * @description Punto de Entrada de React
 * @process 1
*/

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App      from './App';
import WebFont  from 'webfontloader';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/**
 * @description Cargar la hoja de estilos, requiere SASS
*/
import './sass/style.scss';


/**
 * @description WebFontLoader nos permite cargar la fuente de Google de manera asíncrona.
 * @url https://github.com/typekit/webfontloader
*/

WebFont.load({
	google: {
		families: ['IBM Plex Sans:400,500,600,700', 'sans-serif']
	}
});


ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>, 
	document.getElementById('root')
);

/**
 * @description Registra el Service Worker para una PWA
 * @url https://create-react-app.dev/docs/making-a-progressive-web-app
*/

reportWebVitals();
serviceWorkerRegistration.register();
