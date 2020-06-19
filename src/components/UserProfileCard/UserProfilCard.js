import React from "react";
import Image from "../Images/Images";
import BUttons from "../Buttons/Buttons";
import "./UserProfilCard.scss";
import Buttons from "../Buttons/Buttons";

function UserProfilCard({ name, location, onPostsBtnClick, onTodosBtnClick }) {
  return (
    <div className="profile-card">
      <div className="card-coverImg">
        <Image coverPhoto src="https://source.unsplash.com/800/180" />
      </div>
      <div className="profileCard-body">
        <div className="user-img">
          <Image circle profilePic src="https://source.unsplash.com/400/400" />
        </div>
        <div className="profileCard-content">
          <h5>{name}</h5>
          <h6>
            <i className="fas fa-location-arrow"></i>
            {location}
          </h6>
          <div className="profileCard-info">
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
          </div>
          <div className="profileCard-buttons">
            <Buttons color="dark-blue" onClick={onTodosBtnClick}>
              TODOS
            </Buttons>
            <Buttons color="transparent" onClick={onPostsBtnClick}>
              {" "}
              POSTS
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilCard;
