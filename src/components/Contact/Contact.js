import React from "react"
import "./Contact.css"
import Header from "../Header/Header"
import Footer from  "../Footer/Footer"
import contactVector from "./../../assets/about_vector.png"
import github from "./../../assets/gh.png"
import linkedin from "./../../assets/li.png"
import instagram from "./../../assets/in.png"
import web from "./../../assets/web.png"

const Contact = () => {
    return (
      <div className="section-container">
        <Header heading="Get in Touch" details="Feel free to drop an E-Mail."/>

        <div className="contact-form-container">
          <form className="contact-form" action="https://formspree.io/f/moqylear" method="POST">
            <input type="email" placeholder="Your Email Here" name="_replyto" className="input-box email-input" />
            <textarea type="text" placeholder="Your Message" name="message" className="input-box body-input" />
            <button type="submit" className="contact-btn" >Send Email</button>
          </form>
        </div>

        <div className="social-icons-container">
            <a href="https://github.com/jithendrac" target="_blank" className="social-icon">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/jithendra-c-69a339a6" target="_blank" className="social-icon">
              <img src={linkedin} />
            </a>
            <a href="https://www.instagram.com/endorsingworld/" target="_blank" className="social-icon">
              <img src={instagram} />
            </a>
            <a href="" target="_blank" className="social-icon">
              <img src={web} />
            </a>
        </div>

        <Footer phrase="Read more " link="about me" toAddress="/skills"/>
        <div className="vector-frame">
          <img src={contactVector} className="about-vector" />
        </div>
      </div>
    )
}

export default Contact;