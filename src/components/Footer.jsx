import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import piKombuchaLogo from "../assets/logo.png";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <Link to={"/about"}>SOBRE</Link>
            </li>
            <li>
              <Link to={"/about"}>LOJA</Link>
            </li>
            <li>
              <Link to={"/about"}>COMPRAR</Link>
            </li>
            <li>
              <Link to={"/about"}>CONTATO</Link>
            </li>
          </ul>

          <div className={styles.logos}>
            <img src={piKombuchaLogo} alt="Logo" />
            <div className={styles.socialLinks}>
              <Link to={"https://www.facebook.com/pitropical/"}>
                <FacebookLogo size={32} />
              </Link>
              <Link to={"https://www.instagram.com/pikombuchatropical/"}>
                <InstagramLogo size={32} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.company}>
          <hr />
          <p>
            © PI TROPICAL PRODUÇÃO COMERCIO DE BEBIDAS E ALIMENTOS LTDA -
            29.626.807/0001-16
          </p>
        </div>
      </footer>
    </>
  );
}
