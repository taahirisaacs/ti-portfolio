import React from 'react'
import Link from 'gatsby-link'

import taahir from "../images/taahir@2x.png"

const About = () => (
  <div className="container">

  	<section className="row title">
	    <h1>A designer that codes, builds (failed) startups, changes diapers, and is married to a beautiful wife.</h1>
    </section>

    <section className="row">

    	<div className="col-md-4">
    		<img src={taahir}/>
    	</div>

    	<div className="col-md-1">
    	</div>

    	<div className="col-md-6">
    		<Link className="btn">Download my CV</Link>
    		<p>I'm Taahir, currently based in Cape Town working as a freelance multidisciplinary designer and front-end developer. Previously founder of Breadcrumb Studio - an on demand design service for start ups.</p>
    		<p>Having run my design start-up successfully for 4 years, I've established a focus on design management and refined design processes.</p>
    		<p> I have experience with clients ranging from global corporations to one man shops, including: Dimension Data, GQ, DHL, Standard Bank, Resin.io, Meltwater, Apperio, Undercurrent News and DevicePilot.</p>
    		<p> User empathy is the basis to my work, with a well thought out theory behind them. The focus of my work varies between mediums ranging from; user experience and interfaces, web design and development, branding, and print.</p>
    	</div>

    	<div className="col-md-1">
    	</div>

    </section>

  </div>
)

export default About
