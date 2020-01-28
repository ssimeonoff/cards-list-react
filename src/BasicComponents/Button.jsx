import React from "react";
import "../styles.css";

const Button = ({ filter, tag, filterCallback }) => {
  return (
    <button
      key={filter.id}
      className={`button borders ${
        filter.active === false ? "" : "button-active"
      }
      `}
      style={{
        backgroundColor: filter.color,
        backgroundImage: "url(images/" + filter.key + ".png)"
      }}
      onClick={() => {
        filter.active = !filter.active;
        filterCallback();
      }}
    />
  );
};

export default Button;
