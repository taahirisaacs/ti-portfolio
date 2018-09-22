import React from 'react'
import Link from 'gatsby-link'
import WorkList from '../components/worklist'

import GreenPattern from "../images/patterns/green-pattern.png"
import print from "../images/skills/Print@2x.png"
import web from "../images/skills/Web@2x.png"
import dev from "../images/skills/Dev@2x.png"
import hero from "../images/hero-bg.jpg"

const IndexPage = () => (
	<div className="container">
		
		<div className="row section-one">
			<div className="col-md-4 extra-box">
				<h5 className="extra-desc">Full Name:</h5>
			    <h4 className="extra-info"> Taahir Isaacs</h4>
			    <h5 className="extra-desc">Core skill:</h5>
			    <h4 className="extra-info">Product & Visual Design</h4>
			    <h5 className="extra-desc">Current Location:</h5>
			    <h4 className="extra-info"> *Cape Flats, South Africa &#x1F1FF;&#x1F1E6;</h4>
			    <h5 className="extra-desc">Availibility:</h5>
			    <h4 className="extra-info"> Available for Freelance</h4>
			</div>
			<div className="col-md-1"></div>
			<div className="col-md-7 hero-text">
			    <h1>A multifunctional designer/developer based anywhere* there’s fast wifi.</h1>
			    <Link className="btn" to="/contact">Pop me an email</Link>
			</div>
		</div>

		<section className="container skills">
			<div className="row">
				<p>Services</p>
			</div>
			<div className="row services">
				<div className="col-md-4 text-center">
					<div className="row">
						<div className="col-12 text-center">
							<span className="icon"><img src={print} /></span>
							<h4>Print, branding & graphic design</h4>
							<p>Modern design mixed with the theory of traditional graphic design.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 text-center">
					<div className="row">
						<div className="col-12 text-center">
							<span className="icon"><img src={web} /></span>
							<h4>App & website design</h4>
							<p>User-centered website and application design. Using Agile methods to produce quick and effective results.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 text-center">
					<div className="row">
						<div className="col-12 text-center">
							<span className="icon"><img src={dev} /></span>
							<h4>Front-end development</h4>
							<p>The entire process from rapid prototyping, visual concepts to a fully functional live product.</p>
						</div>
					</div>
				</div>
			</div>

		</section>

		<section className="container work">
			<div className="row section-title">
				<p>Selected Work Experience</p>
			</div>
			<WorkList />
		</section>
	</div>
)

export default IndexPage
