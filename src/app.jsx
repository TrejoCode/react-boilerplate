/**
 *  @version 2.0.0
 *  @author Trejocode - Sergio
 *  @description Punto de Entrada de la aplicación
 * 	@process 2
*/

import React    from 'react';
import Routes   from './routes';
import { HelmetProvider } from 'react-helmet-async';


const App = () => (
	<div className="App">
		<HelmetProvider>
			<Routes />
		</HelmetProvider>
	</div>
);


export default App;
