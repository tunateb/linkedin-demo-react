import React from "react";
import "./UserPostsCard.scss";
import Images from "../Images/Images"

function UserPostsCard({title,post,userid}) {
  return (
    <div className="post-card">
        <div className="user">
        <Images avatar circle src="https://unsplash.it/640/425"/>
        <div>
        <h3>Name : {userid}</h3>
        <h4>JOB</h4>
        </div>
        </div>
            <h3 className="title">{title}</h3>
            <p className="post">{post}</p>
            <a className="read-button" href="#">READ MORE</a>
            
    </div>
  );
}

export default UserPostsCard;
