import React from 'react'
import Link from 'gatsby-link'

import app1 from "../images/case-study/app/app-1.jpg"
import app2 from "../images/case-study/app/app-2.jpg"
import app3 from "../images/case-study/app/app-3.jpg"
import app4 from "../images/case-study/app/app-4.jpg"
import app5 from "../images/case-study/app/app-5.jpg"
import app6 from "../images/case-study/app/app-6.jpg"
import app7 from "../images/case-study/app/app-7@2x.png"

const Apperio = () => (
  <div className="container">

  	<section className="row section-one">
	    <div className="col-md-12 work-item">
					<div className="row">
						<div className="col-md-6">
							<h1 className="work">Automated legal spend management.</h1>
						</div>
						<div className="col-md-3">
							<h5 className="extra-desc">Company:</h5>
                <Link to="https://apperio.com">
					   		<p className="extra-info">Apperio</p>
                </Link>
					   		<h5 className="extra-desc">Duties:</h5>
					   		<p className="extra-info">Brand, Product & Marketing Design</p>
				   		</div>
				   		<div className="col-md-3">
							<h5 className="extra-desc">Role:</h5>
					   		<p className="extra-info">Design Contractor</p>
					   		<h5 className="extra-desc">Timeframe:</h5>
					   		<p className="extra-info">Mar 2016 - Dec 2016</p>
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
					<li>Brand Development</li>
          <li>UI/UX Design</li>
					<li>Marketing Design</li>
					<li>Product Design Design</li>
					</ul>
				</div>
			</div>
		</div>
    	<div className="col-md-6 offset-md-1">
    		<p>I was approached by a digital consultant who had seen my work with resin.io. I proceeded to have a chat with the founder, Nicholas. We hit it off immediately. The first port of call was to give Apperio a new fresh face. We spent the following 3 months developing what is now the defacto brand (See attached brand guideline)
Thereafter, I had the fun task of translating the brand to their pitch / sales decks as Nick was heading to many investor meetings at the time. The new brand was well received - getting praise from existing customers.</p>
    	</div>
    </section>
    <section className="row">
    	<div className="col-md-12">
    		<img src={app1} />
    	</div>
      <div className="col-md-12">
    		<img src={app2} />
    	</div>
      <div className="col-md-12">
    		<img src={app3} />
    	</div>
      <div className="col-md-12">
    		<img src={app4} />
    	</div>
      <div className="col-md-12">
    		<img src={app5} />
    	</div>
      <div className="col-md-12">
    		<img src={app6} />
    	</div>
      <div className="col-md-12">
    		<img src={app7} />
    	</div>
    </section>
  </div>
)

export default Apperio
