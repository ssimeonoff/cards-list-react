import React from "react";
import "./styles.css";

const ButtonsContainer = props => {
  return <div className="buttons-container borders">{props.children}</div>;
};

export default ButtonsContainer;
