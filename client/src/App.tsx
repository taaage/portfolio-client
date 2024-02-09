import React from "react";
import Menu from "./components/Menu/Menu";
import Welcome from "./components/Welcome/Welcome";

import "./App.css";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Menu />
      <Welcome />
      <Contact />
    </>
  );
};

export default App;
