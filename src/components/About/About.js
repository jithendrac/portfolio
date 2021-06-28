import React from "react"
import "./About.css"
import Header from "../Header/Header"
import aboutVector from './../../assets/about_vector.png'
import Footer from "../Footer/Footer"
import aboutAnime from './../../assets/about_anime.gif'
import github from "./../../assets/gh.png"
import linkedin from "./../../assets/li.png"
import instagram from "./../../assets/in.png"
import web from "./../../assets/web.png"

const About = () => {
    return (
      <div className="section-container">
        <Header heading="About Me" details="Frontend Developer | Photographer | Bibliophile | Traveller | Foodie" />
        <div className="about-main">
          <div className="about-main-left">

            <h3 className="about-sub-head">Software Engineer - Flexera(2021-Present)</h3>
            <p className="about-details">Part of the backend team responsible to create microservices to datasets present over MRSDB and making it available for the users through various endpoints. Working on Go, Goa for development language and deployed using Docker, Kubernetes, and AWS. </p>

            <h3 className="about-sub-head">Asst System Engineer - Tata Consultancy Services(2019-2021)</h3>
            <p className="about-details">A main part of the Frontend Team aimed to create an Insurance based Web Application using recent technologies like Angular, Micro-Services,SpringBoot. Working as an Angular Developer, I handled 2 Modules-Financial Need Analysis and Lead Management System, addition to the creating of Login page with its securities. The work included predominantly of fetching data by making API cals and dynamically mapping it over the UI components. with this project I was part of the complete Software Lifecycle from design to production.</p>

            <h3 className="about-sub-head">Bachelors of Engineering(2015-2019)</h3>
            <p className="about-details">A Computer Science Graduate from Visweshwaraya Technological University.</p>

            <h3 className="about-sub-head">Hobbies / Other Interests</h3>
            <p className="about-details">The science behind a picture having a story intrigued me to pick up the camera and shoot, photographer is the name associated with it. I am a traveller, compelled to explore the streets of every city and feel the vibe of the new city and it's people. When not exploring or hopping from one city to another I tend to lose myself in imagination over a good book. I sometimes volunteer over Social Groups during weekends.</p>

            <h3 className="about-sub-head">Have a look at my blogs and posts:</h3>
            <p className="about-details">
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
            </p>

          </div>
          <div className="about-main-right">
            <img src={aboutAnime} className="about-anime" />
          </div>
        </div>
        <Footer phrase="Check out my " link="projects!" toAddress='/projects'/>
        <div className="vector-frame">
          <img src={aboutVector} className="about-vector" />
        </div>
      </div>
    )
}

export default About;