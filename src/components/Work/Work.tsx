import { Link } from "react-router-dom";

import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;
  to: string;
  year: string;
  category: string;
  wip?: boolean;
};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Bike Gear Calculator",
      description:
        "Compare bike gear speeds across cadence, chainring, cassette, and tire combinations.",
      stack: "React · Vite · TypeScript",
      to: "/gear-calculator",
      year: "2026",
      category: "Cycling tool",
    },
    {
      title: "Design System",
      description:
        "A shared visual foundation and color-token catalog for the tools I build.",
      stack: "React · TypeScript · CSS",
      to: "/design-system",
      year: "2026",
      category: "Design system",
    },
    {
      title: "Strava Dashboard",
      description:
        "Personal cycling dashboard with power records, weekly distance, and year progress tracking.",
      stack: "Next.js · Strava API · Recharts",
      to: "/strava-dashboard",
      year: "2026",
      category: "Data visualization",
    },
    {
      title: "Strava AI Descriptions",
      description:
        "A self-hostable Gemini service for writing configurable descriptions from Strava activity data.",
      stack: "Next.js · Gemini · Strava API",
      to: "/strava-ai-descriptions",
      year: "2026",
      category: "Cycling automation",
      wip: true,
    },
    {
      title: "Home Assistant",
      description: "Smart home automation and custom integrations.",
      stack: "Docker · Philips Hue",
      to: "/home-assistant",
      year: "2026",
      category: "Home automation",
      wip: true,
    },
    {
      title: "Lowes Book Library",
      description:
        "A book library app with ratings, comments, and CRUD operations. Built for my son Lowe.",
      stack: "React · .NET · C#",
      to: "/books",
      year: "2025",
      category: "Family project",
      wip: true,
    },
  ];

  return (
    <section className="section-work" id="projects" aria-labelledby="work-title">
      <div className="work-heading">
        <div>
          <p className="work-kicker">A few things I’ve made</p>
          <h2 className="work-title" id="work-title">Selected work<span>.</span></h2>
        </div>
        <p className="work-intro">Small tools, personal projects, and experiments built around problems worth solving.</p>
      </div>
      <div className="work-grid">
        {workItems.map((item, index) => (
          <Link key={item.title} to={item.to} className={`work-item${index === 0 ? " work-item-featured" : ""}`}>
            <div className="work-item-topline">
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="work-category">{item.category}</span>
              {item.wip && <span className="work-wip">In progress</span>}
              <span className="work-arrow" aria-hidden="true">↗</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="work-item-footer">
              <span>{item.stack}</span>
              <time>{item.year}</time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
