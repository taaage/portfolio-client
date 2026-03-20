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
      title: "Strava AI Descriptions",
      description: "Automatically generates AI-powered descriptions for Strava activities using webhooks and Google Gemini.",
      stack: "Next.js · Google Gemini",
      to: "/strava",
      year: "2026",
    },
    {
      title: "Lowes Book Library",
      description: "A book library app with ratings, comments, and CRUD operations. Built for my son Lowe.",
      stack: "React · .NET · C#",
      to: "/books",
      year: "2025",
      wip: true,
    },
  ];

  return (
    <section className="section-work">
      <h2 className="work-title">Projects</h2>
      <div className="work-timeline">
        {workItems.map((item) => (
          <div key={item.title} className="work-timeline-item">
            <span className="work-year">{item.year}</span>
            <div className="work-timeline-line" />
            <Link to={item.to} className="work-item">
              <div className="work-item-header">
                <h3>{item.title}</h3>
                {item.wip && <span className="work-wip">Work in Progress</span>}
                <div className="work-arrow">→</div>
              </div>
              <p>{item.description}</p>
              <span>{item.stack}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
