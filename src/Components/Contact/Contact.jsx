import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with us 24/7.</p>
      
      <div className="contact-form">
        <form>
          <div className="row">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Name' name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' name="email" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder='Subject' name="subject" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder='Message' rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    )
}

export default Contact