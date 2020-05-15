import React from "react";

import CardSmall from "../card/card-small";

const cardSmallList = [
  {
    icon: "img/icon-facebook.svg",
    pageViews: "87",
    growth: 3,
    id: 1,
  },
  {
    icon: "img/icon-facebook.svg",
    pageViews: "52",
    growth: 2,
    id: 2,
  },
  {
    icon: "img/icon-instagram.svg",
    pageViews: "5462",
    growth: 2257,
    id: 3,
  },
  {
    icon: "img/icon-instagram.svg",
    pageViews: "52k",
    growth: 1375,
    id: 4,
  },
  {
    icon: "img/icon-twitter.svg",
    pageViews: "52k",
    growth: 303,
    id: 5,
  },
  {
    icon: "img/icon-twitter.svg",
    pageViews: "507",
    growth: 553,
    id: 6,
  },
  {
    icon: "img/icon-youtube.svg",
    pageViews: "107",
    growth: 19,
    id: 7,
  },
  {
    icon: "img/icon-youtube.svg",
    pageViews: "1407",
    growth: 12,
    id: 8,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2 className="section--title">Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(({ icon, pageViews, growth, id }) => {
            return (
              <CardSmall
                key={id}
                icon={icon}
                pageViews={pageViews}
                growth={growth}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Overview;
