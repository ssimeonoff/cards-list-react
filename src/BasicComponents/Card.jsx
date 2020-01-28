import React from "react";
import "./card.css";
import CardTitle from "./CardTitle";
import CardPrice from "./CardPrice";
import CardID from "./CardID";
import CardTags from "./CardTags";

const Card = ({ card, children }) => {
  return (
    <div className="card borders" style={{ background: card.color }}>
      <div className="cardHeaderTest">
        <div className="blaHeader">
          <CardPrice price={card.price} />
          <CardID id={card.key} />
        </div>
        <div className="tagContainer">
          <CardTags tags={card.tags} />
        </div>
      </div>
      <CardTitle title={card.title} type={card.type} />
      <div>{card.content} </div>
    </div>
  );
};

export default Card;
