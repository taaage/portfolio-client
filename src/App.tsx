import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Work from "./components/Work/Work";

import "./App.css";

const Home = () => (
  <div className="page-home">
    <Hero />
    <Work />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/resume">CV/Resume</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
