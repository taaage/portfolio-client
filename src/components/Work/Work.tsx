import { Link } from "react-router-dom";

import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;
  to: string;
  year: string;
  wip?: boolean;
};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Home Assistant",
      description: "Smart home automation and custom integrations.",
      stack: "Docker · Philips Hue",
      to: "/home-assistant",
      year: "2026",
      wip: true,
    },
    {
      title: "Strava AI Descriptions",
      description:
        "Automatically generates AI-powered descriptions for Strava activities using webhooks and Google Gemini.",
      stack: "Next.js · Google Gemini",
      to: "/strava",
      year: "2026",
    },
    {
      title: "Lowes Book Library",
      description:
        "A book library app with ratings, comments, and CRUD operations. Built for my son Lowe.",
      stack: "React · .NET · C#",
      to: "/books",
      year: "2025",
      wip: true,
    },
  ];

  const grouped = workItems.reduce<Record<string, WorkItem[]>>((acc, item) => {
    (acc[item.year] ??= []).push(item);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <section className="section-work">
      <h2 className="work-title">Projects</h2>
      <div className="work-timeline">
        {years.map((year) => (
          <div key={year} className="work-timeline-group">
            <span className="work-year">{year}</span>
            <div className="work-timeline-line" />
            <div className="work-timeline-projects">
              {grouped[year].map((item) => (
                <Link key={item.title} to={item.to} className="work-item">
                  <div className="work-item-header">
                    <h3>{item.title}</h3>
                    {item.wip && (
                      <span className="work-wip">Work in Progress</span>
                    )}
                    <div className="work-arrow">→</div>
                  </div>
                  <p>{item.description}</p>
                  <span>{item.stack}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
