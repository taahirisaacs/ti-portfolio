import React from 'react'
import Link from 'gatsby-link'

import taahir from "../images/taahir@2x.png"

const About = () => (
  <div className="container">

  	<section className="row title">
        <div className="col-md-12">
	       <h1>A designer that codes, builds (failed) startups, changes diapers, and is happily married.</h1>
        </div>
    </section>

    <section className="row about">
    	<div className="col-md-4">
    		<img src={taahir}/>
    	</div>

    	<div className="col-md-6 offset-md-1">
    		<Link className="btn">Download my CV</Link>
    		<p>I'm Taahir, currently based in Cape Town working as a freelance multidisciplinary designer and front-end developer. Previously founder of Breadcrumb Studio - an on-demand design service for start ups.</p>
    		<p>Having been in the tech industry for 6 years, I've established a focus on design management, refined design processes and design methodologies(Atomic Design FTW).</p>
    		<p> I have experience with clients ranging from global corporations to one man shops, including: Dimension Data, GQ, DHL, Standard Bank, Resin.io, Meltwater, Apperio, Undercurrent News and DevicePilot.</p>
    		<p> User empathy is the basis to my work, with a well thought out theory behind them. The focus of my work varies between mediums ranging from; user experience and interfaces, web design and development, branding, and print.</p>
            <p>When I'm not at my desk, you can find me playing football and supporting Manchester United, watching copious amounts of Paw Patrol with my kids (Isā & Zidan) or having coffee dates with my beautiful wife.</p>
    	</div>
    </section>

    <section className="row tools">
        <div className="col-md-12">
            <h2>Design Tools</h2>
        </div>
        <div className="col-md-4 extra-box">
            <h5 className="extra-desc">UI:</h5>
            <h4 className="extra-info">Sketch</h4>
            <h5 className="extra-desc">UX:</h5>
            <h4 className="extra-info">Adobe RP</h4>
            <h5 className="extra-desc">Prototyping:</h5>
            <h4 className="extra-info"> Invision</h4>
            <h5 className="extra-desc">Dev Handover:</h5>
            <h4 className="extra-info">Zeplin</h4>
        </div>
        <div className="col-md-4 extra-box">
            <h5 className="extra-desc">Illustration:</h5>
            <h4 className="extra-info">Adobe Illustrator</h4>
            <h5 className="extra-desc">Photo Retouching:</h5>
            <h4 className="extra-info">Adobe Photoshop</h4>
            <h5 className="extra-desc">Interaction Prototyping:</h5>
            <h4 className="extra-info"> Principal</h4>
        </div>
    </section>

    <section className="row tools">
        <div className="col-md-12">
            <h2>Dev Tools</h2>
        </div>
        <div className="col-md-4 extra-box">
            <h5 className="extra-desc">Languages:</h5>
            <h4 className="extra-info">HTML5, SCSS, React.js, PHP</h4>
            <h5 className="extra-desc">CMS:</h5>
            <h4 className="extra-info">WordPress</h4>
            <h5 className="extra-desc">Headless CMS:</h5>
            <h4 className="extra-info">Contentful</h4>
        </div>
        <div className="col-md-4 extra-box">
            <h5 className="extra-desc">SSG:</h5>
            <h4 className="extra-info">Gatsby.js</h4>
            <h5 className="extra-desc">CSS Framework:</h5>
            <h4 className="extra-info">Bootstrap, Bulma.io</h4>
            <h5 className="extra-desc">Text Editor:</h5>
            <h4 className="extra-info">Atom, Sublime Text</h4>
        </div>
    </section>

  </div>
)

export default About
