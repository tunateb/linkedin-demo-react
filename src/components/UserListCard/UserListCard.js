import React from "react";
import Image from "../Images/Images";
import "./UserListCard.scss";
import Button from "../Buttons/Buttons";

function UserListCard({ title, company, src, onButtonClick }) {
  return (
    <div className="user-list-card">
      <Image avatar circle src={src} />
      <div className="user-list-content">
        <div>
          <h3 className="user-name">{title}</h3>
          <p className="user-company">Company : {company}</p>
        </div>

        <Button onClick={onButtonClick} small color="dark-blue">
          Go To Profile
        </Button>
      </div>
    </div>
  );
}

export default UserListCard;
