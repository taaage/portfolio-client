import React from "react";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";

import "./App.css";

const App = () => {
  return (
    <div className="page-home">
      <Hero />
      <Work />
    </div>
  );
};

export default App;
