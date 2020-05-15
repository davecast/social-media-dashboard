import React, { useState, useEffect } from "react";
import "./globals.css";

import Header from "./components/header/header";
import Switch from "./components/switch/switch";
import TopCardList from "./components/topcardlist/top-card-list";
import Overview from "./components/overview/overview";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is__darkmode" : "is__ligthmode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
