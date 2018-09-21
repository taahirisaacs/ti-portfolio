import React from 'react'
import Link from 'gatsby-link'

import resinlogo from "../images/resin-io.png"

import res1 from "../images/case-study/res/res-1@2x.png"

const Resin = () => (
  <div className="container">

  	<section className="row section-one">
	    <div className="col-md-12 work-item">
					<div className="row">
						<div className="col-md-6">
							<h1>Internet of Things software deployment done right.</h1>
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

    <section className="row">

    	<div className="col-md-6">
    	</div>

    	<div className="col-md-6">
    		<p>I was contracted to handle resin.io's internal and external design systems. The initial backlog of design work ranged from the redesign of their marketing website to calibrating all marketing materials with their updated branding. The key was to prioritise implementation of their new brand on touchpoints their customers would reach first then work my way out to seldomly viewed assets.</p>
    	</div>
    </section>
    <section className="row">
    	<div className="col-md-12">
    		<img src={res1} />
    	</div>
    </section>

  </div>
)

export default Resin
