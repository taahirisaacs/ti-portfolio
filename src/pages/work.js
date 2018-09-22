import React from 'react'
import Link from 'gatsby-link'
import WorkList from '../components/worklist'

const Work = () => (
  <div className="container">

  	<section className="row title">
  		<div className="col-md-12">
	    	<h1>A list of work experience.</h1>
	    </div>
    </section>
    <WorkList />
  </div>
)

export default Work