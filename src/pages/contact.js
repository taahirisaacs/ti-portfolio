import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div className="container">
  	<section className="row">
  		<div className="col-md-6">
  			<h1>Hello! Drop me a mail and I promise I will get back to you as soon as I have a chance.</h1>
  		</div>
  		<div className="col-md-6">
  			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  				<input type="hidden" name="bot-field" />
			  <div className="form-group">
			    <label for="InputName">Your Name:</label>
			    <input type="text" name="name" className="form-control" id="InputName"/>
			  </div>
			  <div className="form-group">
			    <label for="InputEmail">Your Email:</label>
			    <input type="email" name="email" className="form-control" id="InputEmail"/>
			  </div>
			  <div className="form-group">
			  	<label>What would you like to chat about?</label>
			  	<textarea className="form-control" rows="5" name="message"></textarea>
			  </div>
			  <div className="form-group">
			    <button type="submit" className="btn btn-primary">Send</button>
			  </div>
			</form>
  		</div>
  	</section>
  </div>
)

export default ContactPage
