/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Página: /404
*/

import React    from 'react';
import { Link } from 'react-router-dom';
import Layout   from './layout';

const Page404 = _ => (
    <Layout title = "No existe la página solicitada" description = "La página no existe">
        <div className="page-index justify-center">
            <div className="full justify-center align-center">
                <div className="container column">
                    <div className="justify-center">
                        <h1 className="text-center color-secondary">
                            404 - Lá página no existe
                            <span role="img" aria-label="Icono de casco rojo">⛑️</span>
                        </h1>
                    </div>
                    <div className="white-space-16"></div>
                    <div className="justify-center">
                        <h2 className="color-gray text-center">
                            Quizá ocurrió un error
                        </h2>
                    </div>
                    <div className="white-space-16"></div>
                    <div className="justify-center">
                        <p className="text-center font-small">
                            Regresar a: <Link className = "underline" to = "/">Inicio</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Page404;