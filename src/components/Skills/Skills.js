import React from "react"
import "./Skills.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import skillsVector from "./../../assets/skills_vector.png"
import {skillList} from "./../../assets/skillsData"
import SkillCard from "./SkillCard"

const Skills = () => {
    return (
      <div className="section-container">
          <Header heading="MY SKILLS" details="Passionate about new technologies. Here is the Tech Stack I have worked with."/>
          
          <div className="skill-card-container">
            {skillList.map((skill) => {
              return <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl}/>
            })}
          </div>

          <Footer phrase="Get In " link="touch" toAddress='/contact'/>
          <div className="skills-vector-frame">
            <img src={skillsVector} className="skills-vector" />
          </div>
      </div>
    )
}

export default Skills;