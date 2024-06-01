/**
 * @description Página: /private
 */

import Layout from "./Layout";

const PagePrivate = (): JSX.Element => (
  <Layout
    title="Página Privada"
    description="Página privada, No puedes acceder"
  >
    <div className="page-index justify-center">
      <div className="full justify-center align-center">
        <div className="container column">
          <div className="justify-center">
            <h1 className="text-center color-secondary">
              Página Privada
              <span role="img" aria-label="Icono de sorpresa">
                🙊
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PagePrivate;
