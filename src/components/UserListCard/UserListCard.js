import React from "react";
import Image from '../Images/Images';
import "./UserListCard.scss";
import Button from "../Buttons/Buttons";

function UserListCard({ title, company, src, onButtonClick }) {
  return (
    <div className="user-list-card">
      <Image
        avatar
        circle
        src={src}
      />
      <div className="user-list-content">
        <h5>{title}</h5>
        <p>Company : {company}</p>
        <Button
          onClick={onButtonClick}
          small
          color='dark-blue'>Go To Profile
         </Button>
      </div>
    </div>
  );
}

export default UserListCard;
