/**
 * @description Componente <Footer />
 */

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="justify-center">
      <div className="container">
        <div className="row-responsive full align-center">
          <div className="full legend">
            <p className="color-white font-small weight-medium">
              {currentYear}® Boilerplate Brand
            </p>
          </div>
          <div className="social full align-center">
            <div className="align-center">
              <a
                title="Facebook de Trejocode"
                href="https://www.facebook.com/trejocode"
              >
                <AiFillFacebook
                  size={20}
                  className="color-white"
                  title="Facebook de Trejocode"
                />
              </a>
            </div>
            <div className="align-center">
              <a
                title="Instagram de Trejocode"
                href="https://www.instragram.com/trejocode"
              >
                <AiFillInstagram
                  size={20}
                  className="color-white"
                  title="Instagram de trejocode"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
