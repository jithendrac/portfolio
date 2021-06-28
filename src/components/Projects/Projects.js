import React from "react"
import "./Projects.css"
import Header from "../Header/Header"
import Footer from  "../Footer/Footer"
import {projectsData} from "./../../assets/projectsData"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
      <div className="section-container">
        <Header heading="My Projects" details="Here are few cool things I've worked on, do check them out"/>
        
        <div className="project-cards-container">
          {
            projectsData.map((project) => {
              return <ProjectCard 
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
              />
            })
          }
        </div>
        
        <Footer phrase="Check Out " link="my Skills" toAddress="/skills"/>
      </div>
    )
}

export default Projects;