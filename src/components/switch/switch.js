import React, { useRef } from "react";
import "./switch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  const ref = useRef(null);

  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="darkmode">
      <p className="darkmode__title">Dark Mode</p>
      <label htmlFor="darkmode" className="darkmode__switch">
        <input
          ref={ref}
          id="darkmode"
          type="checkbox"
          onChange={handleChange}
          checked={checked}
        />
        <div className="darkmode__inner">
          <div className="darkmode__inner--dot"></div>
        </div>
      </label>
    </div>
  );
}

export default Switch;
