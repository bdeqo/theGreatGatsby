import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "../style.scss";
import * as layoutStyles from "./layout.module.scss";
import { siteMetadata } from "../../gatsby-config";

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.container}>
      {" "}
      <div className={layoutStyles.content}>
        <header className={layoutStyles.header}>
          <h1>
            <Link className={layoutStyles.title} to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <nav>
            <ul className={layoutStyles.navList}>
              <li>
                {" "}
                <Link
                  className={layoutStyles.navItem}
                  activeClassName={layoutStyles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={layoutStyles.navItem}
                  activeClassName={layoutStyles.activeNavItem}
                  to="/projetos"
                >
                  Projetos
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={layoutStyles.navItem}
                  activeClassName={layoutStyles.activeNavItem}
                  to="/sobre-mim"
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={layoutStyles.navItem}
                  activeClassName={layoutStyles.activeNavItem}
                  to="/contato"
                >
                  Contato{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {props.children}
      </div>
      <footer className={layoutStyles.footer}>
        <p>Criado por {data.site.siteMetadata.author}, © 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
