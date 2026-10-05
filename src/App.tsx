import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import DesignSystem from "./components/DesignSystem/DesignSystem";
import GearCalculator from "./components/GearCalculator/GearCalculator";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import StravaDashboard from "./components/StravaDashboard/StravaDashboard";
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
              <ComingSoon
                title="Lowes Book Library"
                eyebrow="Family project"
                description="A small family library for tracking books, ratings, and comments."
                highlights={[
                  "Browse the collection",
                  "Rate books and add comments",
                  "Add, update, and remove books",
                ]}
              />
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
        <Route path="/gear-calculator" element={<GearCalculator />} />
        <Route path="/strava-dashboard" element={<StravaDashboard />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
