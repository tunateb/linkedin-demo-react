import React from "react";
import './Images.scss';

function Image({ avatar = false,coverPhoto= false,projectPic=false, profilePic = false, circle = false,experiencePic=false, src, alt, border=false}) {
  const imageClasses = `
    img 
    ${avatar ? "img-avatar" : ""}  
    ${profilePic ? "profile-pic" : ""}  
    ${coverPhoto ? "cover-pic" : ""}  
    ${projectPic ? "project-pic" : ""}  
    ${experiencePic ? "experience-pic" : ""}  
    ${circle ? "circle" : ""}  
    ${border ? "border": ""}
    
    `;
  return (
    <div className='card-image'>
      <img className={imageClasses} src={src} alt={alt}></img>
    </div>
  );
}

export default Image;
