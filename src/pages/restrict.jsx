/**
 *  @version 1.0.2
 *  @author Trejocode - Sergio
 *  @description Página: /restrict
*/

import React    from 'react';
import Layout   from './layout';

const PageRestrict = () => (
    <Layout title = "Página Privada" description = "Página privada, No puedes acceder">
        <div className="page-index justify-center">
            <div className="full justify-center align-center">
                <div className="container column">
                    <div className="justify-center">
                        <h1 className="text-center color-secondary">
                            Página Restringida
                            <span role="img" aria-label="Icono de prohibido">㊙️</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default PageRestrict;