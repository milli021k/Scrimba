import React from 'react'
import logo from "./logo.svg";
 function Header() {
  return (
    <header>
    <nav className="nav">
      <img className="nav-logo" src={logo} />
      <ul className="nav-items">
        <li>
          pricing
        </li>
        <li>
          about
        </li>
        <li>
          Contact
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default  Header;