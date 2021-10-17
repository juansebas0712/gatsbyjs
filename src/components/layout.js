import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import logo from "../../content/assets/logo-js.svg"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
          <Link className="header-link-home" to="/">
            <img
            alt="Juan S Aparicio Logo"
            className="logo"
            src={logo}
            width="300"
            height="148"
          />
          </Link>
      </header>

      <main>{children}</main>

      <footer>
        © {title} - {new Date().getFullYear()}.
      </footer>
    </div>
  )
}

export default Layout
