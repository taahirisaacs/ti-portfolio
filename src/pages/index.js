import React from 'react'
import Link from 'gatsby-link'

import GreenPattern from "../images/patterns/green-pattern.png"
import print from "../images/skills/Print@2x.png"
import web from "../images/skills/Web@2x.png"
import dev from "../images/skills/Dev@2x.png"
import hero from "../images/hero-bg.jpg"
import arrow from "../images/arrow.png"

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
			    <Link className="btn">Pop me an email</Link>
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
			<div className="row work-list">

				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<h4>On-demand design services for tech start ups</h4>
							<p>Case study coming soon</p>
						</div>
						<div className="col-md-4">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Breadcrumb Studio</p>
					   		<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">Founder & Design Director</p>
				   		</div>
				   		<div className="col-md-4">
							<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Business & Project Management, Design Lead</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Oct 2014 - Jul 2018</p>
				   		</div>
			   		</div>
				</div>

				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<Link to="resin">
							<h4>Internet of Things software deployment done right.</h4>
							<p>View Work<span className="arrow-icn"><img src={arrow} /></span></p>
							</Link>
						</div>
						<div className="col-md-4">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Resin.io</p>
					   		<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">UI/UX Contractor</p>					   		
				   		</div>
				   		<div className="col-md-4">
							<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Product & Marketing Design Lead</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Nov 2014 - Oct 2017</p>
				   		</div>
			   		</div>
				</div>

				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<h4>Media intelligence software maker.</h4>
							<p>View Work<span className="arrow-icn"><img src={arrow} /></span></p>
						</div>
						<div className="col-md-4">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Meltwater</p>
					   		<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">Digital Contractor</p>
				   		</div>
				   		<div className="col-md-4">
					   		<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Marketing Design, WordPress Development</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Feb 2017 - Feb 2018</p>
				   		</div>
			   		</div>
				</div>

				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<h4>Automated legal spend management.</h4>
							<p>View Work<span className="arrow-icn"><img src={arrow} /></span></p>
						</div>
						<div className="col-md-4">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Apperio</p>
							<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">Design Contractor</p>
				   		</div>
				   		<div className="col-md-4">
					   		<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Brand Development, Product & Marketing Design</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Mar 2016 - Dec 2016</p>
				   		</div>
			   		</div>
				</div>
				
			</div>
		</section>

		<div className="container footer">
			<div className="copyright">
				<p>This website was designed by <Link to="about">Taahir Isaacs</Link> using Sketch & developed with Gatsby.js & Bootstrap 4. It took approximately 8 hours.</p>
			</div>
		</div>
	</div>
)

export default IndexPage
