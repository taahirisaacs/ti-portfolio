import React from 'react'
import Link from 'gatsby-link'

import resinlogo from "../images/resin-io.png"

import res1 from "../images/case-study/res/res-1@2x.png"
import res2 from "../images/case-study/res/res-2@2x.png"
import res3 from "../images/case-study/res/res-3@2x.png"
import res4 from "../images/case-study/res/res-4@2x.png"
import res5 from "../images/case-study/res/res-5@2x.png"
import res6 from "../images/case-study/res/res-6@2x.png"
import res7 from "../images/case-study/res/res-7@2x.png"
import res8 from "../images/case-study/res/res-8@2x.png"
import res9 from "../images/case-study/res/res-9@2x.png"

const Resin = () => (
  <div className="container">

  	<section className="row section-one">
	    <div className="col-md-12 work-item">
					<div className="row">
						<div className="col-md-6">
							<h1 className="work">Internet of Things software deployment done right.</h1>
						</div>
						<div className="col-md-3">
							<h5 className="extra-desc">Company:</h5>
					   		<p className="extra-info">Resin.io</p>
					   		<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Product & Marketing Design Lead</p>
				   		</div>
				   		<div className="col-md-3">
							<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">UI/UX Contractor</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Nov 2014 - Oct 2017</p>
				   		</div>
			   		</div>
				</div>
    </section>

    <section className="row info">

    	 <div className="col-md-5 involvement">
			<div className="row">
				<div className="col-md-12">
					<h5 className="involvment--title">Involvement</h5>
					<ul>
					<li>Product Design</li>
					<li>UI/UX Design</li>
          <li>Wireframing</li>
					<li>Marketing Design</li>
					<li>Illustration</li>
					<li>Email Design</li>
					</ul>
				</div>
			</div>
		</div>

    	<div className="col-md-6 offset-md-1">
    		<p>I was contracted to handle resin.io's internal and external design systems. This would predominantly cover product design, however as I was the sole designer on the team - it ended up bleeding into the marketing site, documentation and other user touchpoints. The initial backlog of design work ranged from the redesign of their marketing website to calibrating all marketing materials with their updated branding. The key was to prioritise implementation of their new brand on touchpoints their customers would reach first then work my way out to seldomly viewed assets.</p>
    	</div>
    </section>
    <section className="row">
    	<div className="col-md-12">
    		<img src={res1} />
    	</div>
      <div className="col-md-12">
    		<img src={res2} />
    	</div>
      <div className="col-md-12">
    		<img src={res3} />
    	</div>
      <div className="col-md-12">
    		<img src={res4} />
    	</div>
      <div className="col-md-12">
    		<img src={res5} />
    	</div>
      <div className="col-md-12">
    		<img src={res6} />
    	</div>
      <div className="col-md-12">
    		<img src={res7} />
    	</div>
      <div className="col-md-12">
    		<img src={res8} />
    	</div>
      <div className="col-md-12">
    		<img src={res9} />
    	</div>
    </section>
  </div>
)

export default Resin
