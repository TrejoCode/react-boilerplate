/**
 * @version 3.0.0
 * @author Trejocode - Sergio
 * @description Template de las páginas, preparada para SEO.
 */

import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Header from "components/header";
import Footer from "components/footer";

/**
 *  @param {String} title: Título de la página
 *  @param {String} description: Descripción de la página
 *  @param {String} keywords: Etiquetas para SEO
 */

const Layout = ({ title, description, keywords, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          {title
            ? title + " - React Boilerplate"
            : "React.js Boilerplate - Trejocode"}{" "}
        </title>
        <meta
          name="description"
          content={
            description ||
            "React.js Simple and clean Boilerplate, SEO Ready | Reactjs plantilla limpia, organizada y optimizada para SEO"
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            "React.js, boilterplate, trejocode react, reactjs boilterplate, react-router-dom"
          }
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
