import React from "react";
import "./TodoCard.scss";
import Image from "../../components/Images/Images";
import Buttons from "../Buttons/Buttons";

const TodoCard = ({ todoTitle, imgSrc, todoText }) => {
  return (
    <div className="todo-card">
      <div className="todo-card-content">
        <Image avatar circle src={imgSrc} />

        <div className="todo-text">
          <h3>{todoTitle}</h3>
          <p>{todoText}</p>
        </div>
      </div>
      <div className="todo-actions">
        <Buttons small color="blue">
          MORE
        </Buttons>
      </div>
    </div>
  );
};

export default TodoCard;
