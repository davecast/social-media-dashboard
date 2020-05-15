import React from "react";
import "./card-small.css";

function CardSmall({ icon, pageViews, growth }) {
  return (
    <article className="card card--small">
      <div className="card__area--title">Page views</div>
      <div className="card__area--icon">
        <img src={icon} alt="" />
      </div>
      <div className="card__area--count">{pageViews}</div>
      <div className="card__area--percentage card__area--up">
        <img src="img/icon-up.svg" alt="" />
        {growth}%
      </div>
    </article>
  );
}

export default CardSmall;
