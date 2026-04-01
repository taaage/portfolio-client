import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Strava from "./components/Strava/Strava";
import Work from "./components/Work/Work";
import HomeAssistant from "./components/HomeAssistant/HomeAssistant";
import { featureFlags } from "./featureFlags";

import "./App.css";

const Home = () => (
  <>
    <Hero />
    <Work />
  </>
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
        <Route
          path="/books"
          element={
            featureFlags.books ? (
              <Books />
            ) : (
              <ComingSoon title="Lowes Book Library 📚" />
            )
          }
        />
        <Route
          path="/strava"
          element={
            featureFlags.strava ? (
              <Strava />
            ) : (
              <ComingSoon title="Strava AI Descriptions 🤖" />
            )
          }
        />
        <Route
          path="/home-assistant"
          element={
            featureFlags.homeAssistant ? (
              <HomeAssistant />
            ) : (
              <ComingSoon title="Home Assistant 🏠" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
