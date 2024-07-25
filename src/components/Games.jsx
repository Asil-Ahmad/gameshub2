import React, { useState, useEffect } from "react";
import GamesCardApi from "./GamesCard/GamesCardApi";
import Sidebar from "./Sidebar/Sidebar";

const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="relative bg-[url('./assets/icons/mainbackgrounddark.png')] bg-fill
      w-full flex items-center justify-center"
    >
      <Sidebar />

      <GamesCardApi />
    </section>
  );
};

export default Games;
