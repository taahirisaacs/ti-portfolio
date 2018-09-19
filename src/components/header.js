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
              height: '60px',
            }}
          />
        </Link>
        <h4
          style={{
            float:'right',
          }}
        >
        Hello &#x1F44B;
        </h4>
    </div>
  </div>
)

export default Header
