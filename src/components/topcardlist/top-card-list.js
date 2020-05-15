import React from "react";
import "./top-card-list.css";

import Card from "../card/card";

const cardListData = [
  {
    username: "@Davecast",
    network: "facebook",
    number: 52,
    today: 12,
    icon: "img/icon-facebook.svg",
  },
  {
    username: "@Davecast",
    network: "twitter",
    number: 92,
    today: 20,
    icon: "img/icon-twitter.svg",
  },
  {
    username: "@Davecast",
    network: "instagram",
    number: 612,
    today: -1,
    icon: "img/icon-instagram.svg",
  },
  {
    username: "@Davecast",
    network: "youtube",
    number: 0,
    today: 0,
    icon: "img/icon-youtube.svg",
  },
];

function TopCardList() {
  return (
    <section className="top__cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData, index) => (
            <Card {...cardData} key={`${cardData.username}_${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
