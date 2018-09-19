import React from 'react'
import Link from 'gatsby-link'

import GreenPattern from "../images/patterns/green-pattern.png"
import iphone from "../images/iphone6.png"

const IndexPage = () => (
	<div className="row">
		<div className="row section-one">
			<div className="col-md-7 hero-text">
			    <h1>A multidisciplinary digital designer, developer and strategist working from anywhere* there’s fast wifi.</h1>
			    <p>I’ve been designing since I was 14, using MS Paint and MS Word as my canvas. Funnily enough, my first job in the tech space was as a newsletter developer. I sliced out newsletter elements and coded them up using some pre-historic programming language (Some say it was once used to transcribe revelation)</p>
			</div>
			<div className="col-md-1"></div>
			<div className="col-md-4 extra-box">
				<h5 className="extra-desc">Full Name:</h5>
			    <h4 className="extra-info"> Taahir Isaacs</h4>
			    <h5 className="extra-desc">Craft:</h5>
			    <h4 className="extra-info"> Digital Design, WordPress, React, Gatsby.js</h4>
			    <h5 className="extra-desc">Current Location:</h5>
			    <h4 className="extra-info"> *Cape Flats &#x1F1FF;&#x1F1E6;</h4>
			    <h5 className="extra-desc">Availibility:</h5>
			    <h4 className="extra-info"> Available (60hours)</h4>
			    <Link className="btn">Book a Skype call</Link>
			    <img className="green-pattern" 
					src={GreenPattern} alt="Green Pattern"
				/>
			</div>
		</div>

		<div className="row section-two">
			<div className="col-md-3">
				<img className="iphone" 
					src={iphone} alt="iphone"
				/>
			</div>
			<div className="col-md-1"></div>
			<div className="col-md-7">
				<h1>This site was made to showcase what I can do. Not what I did. So, look at everything designed and see the meaning behind it.</h1>
			</div>
			<div className="col-md-1"></div>
		</div>
	</div>
)

export default IndexPage
