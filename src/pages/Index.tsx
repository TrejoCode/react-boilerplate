/**
 * @description Página de /index
 */

import Layout from "./Layout";

const PageIndex = (): JSX.Element => (
  <Layout
    title="Inicio"
    description="React Boilerplate: Página de Inicio"
    keywords="React.js, SEO Ready, Inicio"
  >
    <main className="page-index justify-center">
      <div className="full justify-center align-center">
        <div className="container column">
          <div className="justify-center">
            <h1 className="text-center color-secondary">
              React.js Boilerplate
              <span role="img" aria-label="Icono de React">
                ⚛️
              </span>
            </h1>
          </div>
          <div className="white-space-16"></div>
          <div className="justify-center">
            <h2 className="color-gray text-center">
              Edit everything for fun
              <span role="img" aria-label="Icono de computadora">
                {" "}
                💻
              </span>
            </h2>
          </div>
          <div className="white-space-16"></div>
          <div className="justify-center">
            <p className="text-center font-small">
              Created and maintained by:{" "}
              <a className="underline" href="https://www.trejocode.com">
                Trejocode
              </a>{" "}
              and the community
            </p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default PageIndex;
