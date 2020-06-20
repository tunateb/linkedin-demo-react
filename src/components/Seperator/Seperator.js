import React from "react";
import "./Seperator.scss";

const Seperator = ({ seperatorText, size="default" }) => {
  const seperatorClasses = ` seperator seperator-${size} `;

  return <div className={seperatorClasses}>{seperatorText}</div>;
};

export default Seperator;
