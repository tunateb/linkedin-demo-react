import React from "react";
import "./AboutCard.scss";

function AboutCard({name,company,website}) {
    return (
        <div className="about-card">
            <div className="about-title">
                <h4>About {name}</h4>
                <p>I'm more experienced in web projects and mobile banking apps, My Company name is {company}.
And I have a site called www.{website}. </p>
                <a href="#">SEE MORE</a>
            </div>
        </div>
    );
}

export default AboutCard;