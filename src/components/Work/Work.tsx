import React from "react";

import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;

};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Project 1",
      description: "TBD.",
      stack: "Typescript · Tailwind CSS"
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
          <button key={item.title} className="work-card" type="button">
            <div className="work-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.stack}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Work;
