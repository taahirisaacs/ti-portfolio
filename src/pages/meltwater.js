import React from 'react'
import Link from 'gatsby-link'

import mlt1 from "../images/case-study/res/mlt-1@2x.png"

const Meltwater = () => (
  <div className="container">

  	<section className="row section-one">
	    <div className="col-md-12 work-item">
					<div className="row">
						<div className="col-md-6">
							<h1 className="work">Media intelligence software maker.</h1>
						</div>
						<div className="col-md-3">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Meltwater</p>
					   		<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Marketing Design, WordPress Development</p>
				   		</div>
				   		<div className="col-md-3">
							<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">Digital Contractor</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Feb 2017 - Feb 2018</p>
				   		</div>
			   		</div>
				</div>
    </section>

    <section className="row">
    	<div className="col-md-5 involvement">
			<div className="row">
				<div className="col-md-12">
					<h5 className="involvment--title">Involvement</h5>
					<ul>
					<li>Product Design</li>
					<li>User Experience Design</li>
					<li>Marketing Site Design</li>
					<li>Marketing Design</li>
					<li>Illustration</li>
					<li>Email Design</li>
					<li>Graphic Design</li>
					<li>WordPress Development</li>
					</ul>
				</div>
			</div>
		</div>
    	<div className="col-md-6 offset-md-1">
    		<p>Working with Meltwater was a welcoming challenge. Not only did I handle the end to end digital design but also ended up managing the web development teams I had sourced for the projects we worked on.</p> 

    		<p>In the beginning our relationship started out with a few banners and mockup logos here and there. Then as all design projects go, the inevitable question came my way, “Can you design a website for us?” - my answer, as always “Sure.”</p>
    		 
    		<p>We ended up designing and building 5 websites and 4 landing pages together in the space of 12 months. This allowed me to understand the multichannel marketing approach taken by tech “scale-ups”, as well as the fast paced nature of growth hacking marketing cam- paigns. In the same period we worked on the updated design for their internal communications portal utilised by their +1000 employees.</p>

    		<p>I designed marketing websites for a variety of their sub-brands such as Outside Insight, MEST, Shack15 and their CEO’s personal website. All of the sites had similar accessories such as newsletter and marketing brochure designs at its very least.</p>
    	</div>
    </section>
    <section className="row">
    	<div className="col-md-12">
    		<img src={mlt1} />
    	</div>
    </section>
  </div>
)

export default Meltwater
