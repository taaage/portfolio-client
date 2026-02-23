import React from "react";

import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;
  link?: string;
};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Strava AI Descriptions",
      description: "Automatically generates AI-powered descriptions for Strava activities using webhooks and Google Gemini.",
      stack: "Next.js · Google Gemini",
      link: "https://roastmyride.vercel.app/",
    },
    {
      title: "Project 2",
      description: "TBD.",
      stack: "C# · Entity Framework",
    },
    {
      title: "Project 3",
      description: "TBD.",
      stack: "Terraform",
    },
    {
      title: "Project 4",
      description: "TBD.",
      stack: "AI · Copilot",
    },
  ];

  return (
    <section className="section-work">
      <div className="work-grid">
        {workItems.map((item) => (
          item.link ? (
            <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="work-card">
              <div className="work-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.stack}</span>
              </div>
            </a>
          ) : (
            <button key={item.title} className="work-card" type="button">
              <div className="work-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.stack}</span>
              </div>
            </button>
          )
        ))}
      </div>
    </section>
  );
};

export default Work;
