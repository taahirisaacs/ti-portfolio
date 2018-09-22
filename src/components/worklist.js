import React from 'react'
import Link from 'gatsby-link'

import arrow from "../images/arrow.png"

const WorkList = () => (
  			<div className="row work-list">
				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<Link to="resin" className="work-link">
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
							<Link to="meltwater" className="work-link">
							<h4>Media intelligence software maker.</h4>
							<p>View Work<span className="arrow-icn"><img src={arrow} /></span></p>
							</Link>
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

				<div className="col-md-9 work-item">
					<div className="row">
						<div className="col-md-4">
							<h4>On-demand design services for tech start ups</h4>
							<p>(Case study Coming Soon)</p>
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
			</div>
)

export default WorkList
