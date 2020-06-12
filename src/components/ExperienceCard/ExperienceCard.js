import React from "react";
import "./ExperienceCard.scss";
import Images from "../Images/Images"

function ExperienceCard({ companyList }) {
    const experience = [companyList];
    return (
        <div className="experience-card">
            <h2>Experience</h2>
            {experience.map((exp,key) => (

                <div key={key} className="experience-body">
                    <div>
                        <Images experiencePic circle src="https://picsum.photos/200/300" />
                    </div>
                    <div className="experience-content">
                        <h3>{exp.name}</h3>
                        <div className="company-info">
                            <p>Self Employed</p>
                            <p>Around the world</p>
                        </div>
                        <div className="time-info">
                            <p>Jun 2016 — Present</p>
                            <p><span>3 yrs 3 mos</span></p>
                        </div>
                        <div className="explanation">
                            <p>{exp.catchPhrase}</p>
                        </div>
                    </div>
                </div>
                
            ))}

        </div>
    );
}

export default ExperienceCard;

