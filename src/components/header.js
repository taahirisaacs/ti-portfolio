import React from 'react'
import Link from 'gatsby-link'

import logo from "../images/logos/ti-logo.png"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '1.85rem 1.0875rem 1.45rem',
      }}
    >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            height: 'auto',
          }}
        >
          <img 
            src={logo} alt="Logo"
            style={{
              width: 'auto',
              height: '40px',
            }}
          />
        </Link>
        <ul className="menu"
          style={{
            float:'right',
          }}
        >
          <li><Link to="about">About</Link></li>
          <li>Work</li>
          <li>Say Hello &#x1F44B;</li>
        </ul>
    </div>
  </div>
)

export default Header
