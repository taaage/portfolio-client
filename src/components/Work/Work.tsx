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
      link: "https://projects.tiggenilsson.se/",
    },
  ];

  return (
    <section className="section-work">
      <h2 className="work-title">Projects</h2>
      <div className="work-list">
        {workItems.map((item) => (
          <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="work-item">
            <div className="work-item-header">
              <h3>{item.title}</h3>
              <div className="work-arrow">→</div>
            </div>
            <p>{item.description}</p>
            <span>{item.stack}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
