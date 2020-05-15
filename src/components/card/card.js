import React from "react";
import "./card.css";

function Card({ network, username, icon, number, today }) {
  const cardClass = `card card--${network}`;

  return (
    <article className={cardClass}>
      <p className="card__social">
        <img src={icon} alt="" />
        {username}
      </p>
      <p className="card__followers">
        <span className="card__number">{number}</span>
        <span className="card__title">Followers</span>
      </p>
      <p className="card__today">
        <img src="img/icon-up.svg" alt="" />
        {today} Today
      </p>
    </article>
  );
}

export default Card;
