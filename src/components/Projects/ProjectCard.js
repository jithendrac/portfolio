import React from "react"
import "./Projects.css"

const ProjectCard = ({
    projectName, projectDescription, imageUrl, projectUrl
}) => {
    return (
    <div className="project-card">
        <div className="img-container">
            <a href={projectUrl} target="_blank" className="project-external-link">
                <img src={imageUrl} className="project-image" />
            </a>
        </div>
        <div className="project-details-container">
            <h2 className="project-heading">{projectName}</h2>
            <p className="project-details">{projectDescription}</p>
        </div>
    </div>
    )
}

export default ProjectCard;