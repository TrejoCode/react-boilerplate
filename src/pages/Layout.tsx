/**
 * @description Template de las páginas, preparada para SEO.
 */

import { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";
import type { TypeLayoutProps } from "@/ts/layout";

/**
 * @param {string} title - Título de la página
 * @param {string} description - Descripción de la página
 * @param {string} keywords - Etiquetas para SEO
 * @param {JSX.Element} children - Contenido de la página
 */
const Layout = ({
  title,
  keywords,
  children,
  description,
}: TypeLayoutProps): JSX.Element => {
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
