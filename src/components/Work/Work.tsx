import { Link } from "react-router-dom";
import "./Work.css";

type WorkItem = {
  title: string;
  description: string;
  stack: string;
  to: string;
  wip?: boolean;
};

const Work = () => {
  const workItems: WorkItem[] = [
    {
      title: "Strava AI Descriptions",
      description: "Automatically generates AI-powered descriptions for Strava activities using webhooks and Google Gemini.",
      stack: "Next.js · Google Gemini",
      to: "/strava",
    },
    {
      title: "Lowes Book Library",
      description: "A book library app with ratings, comments, and CRUD operations. Built for my son Lowe.",
      stack: "React · .NET · C#",
      to: "/books",
      wip: true,
    },
  ];

  return (
    <section className="section-work">
      <h2 className="work-title">Projects</h2>
      <div className="work-list">
        {workItems.map((item) => (
          <Link key={item.title} to={item.to} className="work-item">
            <div className="work-item-header">
              <h3>{item.title}</h3>
              {item.wip && <span className="work-wip">Work in Progress</span>}
              <div className="work-arrow">→</div>
            </div>
            <p>{item.description}</p>
            <span>{item.stack}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
