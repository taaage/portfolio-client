import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Work from "./components/Work/Work";
import Books from "./components/Books/Books";
import Strava from "./components/Strava/Strava";
import HomeAssistant from "./components/HomeAssistant/HomeAssistant";

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
        <Route path="/books" element={<Books />} />
        <Route path="/strava" element={<Strava />} />
        <Route path="/home-assistant" element={<HomeAssistant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
