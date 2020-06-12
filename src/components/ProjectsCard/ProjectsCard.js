import React from "react";
import "./ProjectsCard.scss";
import Images from "../Images/Images"

function ProjectsCard() {
    return (
        <div className="projects-card">
            <div className="projectsCard-title">
               <h3>Projects</h3>
               <h3>3 of 12</h3>
            </div>
            <div className="projectsCard-body">
                <div className="card-item">
                <Images src="https://picsum.photos/200/300"></Images>
                <h4>Project Name</h4>
                <p>Project Date</p>
                </div>
                <div className="card-item">
                <Images src="https://picsum.photos/200/300"></Images>
                <h4>Project Name</h4>
                <p>Project Date</p>
                </div>
                <div className="card-item">
                <Images src="https://picsum.photos/200/300"></Images>
                <h4>Project Name</h4>
                <p>Project Date</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectsCard;