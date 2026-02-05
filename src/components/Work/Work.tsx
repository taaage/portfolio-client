import React from "react";

import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;
  action: string;
};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Portfolio Redesign",
      description: "A full UI refresh with motion and accessibility in mind.",
      stack: "React · Tailwind · TypeScript",
      action: "View Case Study",
    },
    {
      title: "Realtime Analytics",
      description: "Streaming dashboards with live collaboration features.",
      stack: "React · D3 · WebSockets",
      action: "Open Project",
    },
    {
      title: "Design System",
      description: "Reusable components and tokens for consistent delivery.",
      stack: "Storybook · CSS · Figma",
      action: "Browse Library",
    },
    {
      title: "Ecommerce Experience",
      description: "High-converting storefront with fast checkout flow.",
      stack: "Next.js · Stripe · Tailwind",
      action: "See Details",
    },
    {
      title: "Mobile Companion",
      description: "Cross-platform app for on-the-go product insights.",
      stack: "React Native · Expo",
      action: "View Demo",
    },
    {
      title: "AI Content Studio",
      description: "Smart editing tools for faster publishing workflows.",
      stack: "Node · React · OpenAI",
      action: "Learn More",
    },
  ];

  return (
    <section className="section-work">
      <div className="work-header">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className="work-title">Projects that showcase impact</h2>
        <p className="work-subtitle">
          A curated set of builds spanning UI, data, and product experiences.
        </p>
      </div>

      <div className="work-grid">
        {workItems.map((item) => (
          <button key={item.title} className="work-card" type="button">
            <div className="work-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.stack}</span>
            </div>
            <div className="work-card-action">{item.action}</div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Work;
