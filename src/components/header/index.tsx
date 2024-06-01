/**
 * @description Estilos del componente <Header />
 */

import { useState } from "react";
import ImgLogo from "@/static/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Activar DarkTheme o LightTheme
  const handleTheme = (): void => {
    const siteDOM = document?.documentElement;

    if (theme === "light") {
      setTheme("dark");
      siteDOM?.setAttribute("data-theme", "dark");
      return;
    }

    setTheme("light");
    siteDOM?.setAttribute("data-theme", "light");
    return;
  };

  return (
    <header className="justify-center">
      <div className="container row-responsive align-center">
        <div className="logo align-center full">
          <a href="/" className="logo responsive-img">
            <img src={ImgLogo} alt="React Boilerplate Logo" />
          </a>
          <div className="column">
            <div className="white-space-16"></div>
            <h2 className="color-secondary">Boilerplate</h2>
          </div>
        </div>
        <nav className="full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item weight-semi font-small color-secondary ${
                isActive && "nav-active"
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/fetch"
            className={({ isActive }) =>
              `nav-item weight-semi font-small color-secondary ${
                isActive && "nav-active"
              }`
            }
          >
            Fetch Request
          </NavLink>
          <button
            className="nav-item weight-semi font-small color-secondary cursor-pointer"
            onClick={handleTheme}
          >
            Dark Theme
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
