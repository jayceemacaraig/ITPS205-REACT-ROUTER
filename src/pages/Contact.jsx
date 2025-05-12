import React from 'react'

const Contact = () => {
  return (
<section className="contact-section" id="contact">
        <div>
            <h4>GET IN TOUCH</h4>
            <h1>Contacts.</h1>
        </div>
        <form className="contact-form">
            <input type="text" id="name" name="name" placeholder="What is your Name?" required />

            <input type="email" id="email" name="email" placeholder="What is your Email Address?" required />
        
            <textarea id="message" name="message" placeholder="What do you want to say?" rows="5" required></textarea>
        
            <button type="submit">Send</button>
          </form>        
    </section>
  )
}

export default Contact
