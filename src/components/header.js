import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="contentWrapper">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">ODUNSI</Link>
        </div>
        <div className="header__nav">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
