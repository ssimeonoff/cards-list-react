import React from "react";

const CardTags = card => {
  const cardTags = card.tags;

  return (
    <>
      {cardTags &&
        cardTags.map((tag, index) => (
          <Tag key={index} tag={tag} index={index} />
        ))}
    </>
  );
};

const Tag = tag => {
  return (
    <div
      className={`card-tag tag-${tag.tag}`}
      style={{ backgroundImage: `url(images/${tag.tag}.png)` }}
    />
  );
};

export default CardTags;
