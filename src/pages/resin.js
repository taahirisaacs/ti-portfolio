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

    <section className="row">
    	<div className="col-md-6 offset-md-6">
    		<p>I was contracted to handle resin.io's internal and external design systems. This would predominantly cover product design, however as I was the sole designer on the team - it ended up bleeding into the marketing site, documentation and other user touchpoints. The initial backlog of design work ranged from the redesign of their marketing website to calibrating all marketing materials with their updated branding. The key was to prioritise implementation of their new brand on touchpoints their customers would reach first then work my way out to seldomly viewed assets.</p>
    		<p>The exciting challenge that was at my fingertips was designing a user-centric product dashboard for an IoT service. At this point in time, circa 2014, there wasn't really any dominant IoT player in the field so creating this dashboard would rely heavily on user testing and creating a solid feedback structure for improvements. We applied an agile methodology to how we shipped new design and features. This worked out fantastic as it gave existing users the ability to suggest alternatives to what we had given them. In the end, we shipped a V1 of the product that I was super proud of, as it really empathised with our users and their ultimate requirements. You can read the release blogpost here.</p>
    		<p>Below you can see a selection of different mediums I designed for over a 3 year period at resin.io. There are a lot more but this gives you a gist of the scope of work.</p>
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
