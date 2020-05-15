import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__grid">
          <div className="header__info">
            <h1 className="header__title">Social Media Dashboard</h1>
            <p className="header__subtitle">Total followers: 23,004</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
