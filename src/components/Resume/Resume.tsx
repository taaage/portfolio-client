import InterestBar from "../InterestBar/InterestBar";

import "./Resume.css";

const Resume = () => {
  return (
    <div className="section-resume">
      <h1 className="resume-title">Resume</h1>

      <section className="resume-section">
        <h2>Experience 💼</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Software Engineer @ Ericsson</h3>
            <span className="resume-date">2023-08 – Ongoing</span>
          </div>
          <p>
            Member of a DevSecOps team developing applications using React
            (TypeScript), Node, and .NET. Built and maintained CI/CD pipelines.
            Worked with services on Microsoft Azure.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>IT Trainee @ Ericsson</h3>
            <span className="resume-date">2022-08 – 2023-08</span>
          </div>
          <p>
            Completed a one-year rotational trainee program within Ericsson IT.
            Rotations: Automation & AI, Cloud, Data & Analytics. Contributed to
            production deliveries. Developed skills in cloud architecture, IaC,
            and software development.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Master Thesis @ Ericsson</h3>
            <span className="resume-date">2021-12 – 2022-06</span>
          </div>
          <p>
            Investigated privacy-preserving machine learning for enterprise
            environments. Analyzed technical feasibility and business value.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>R&D Intern @ Ericsson</h3>
            <span className="resume-date">2020-04 – 2021-12</span>
          </div>
          <p>
            Analyzed security value of quantum random number generators.
            Compared quantum vs classical RNG methods for IT security.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Cyber Mentee @ Ernst & Young</h3>
            <span className="resume-date">2020-06 – 2021-06</span>
          </div>
          <p>
            Participated in a cybersecurity mentorship program. Gained exposure
            to real-world cyber risk and business challenges.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>IT Support @ Handelsbanken</h3>
            <span className="resume-date">2019-12 – 2021-04</span>
          </div>
          <p>Provided support for private and corporate banking clients.</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education 🎓</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Stockholm University</h3>
            <span className="resume-date">2020 – 2022</span>
          </div>
          <p>Master's Degree in Computer Science</p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>KTH Royal Institute of Technology</h3>
            <span className="resume-date">2020 – 2021</span>
          </div>
          <p>Computer Science</p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Uppsala University</h3>
            <span className="resume-date">2017 – 2020</span>
          </div>
          <p>Bachelor's Degree in Business & Economics</p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Friluftsfrämjandet</h3>
            <span className="resume-date">2012 – 2013</span>
          </div>
          <p>Certified National Ski Instructor</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Volunteering 🤝</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>University (Student Association)</h3>
            <span className="resume-date">2017 – 2020</span>
          </div>
          <p>
            Webmaster. Art Director. Head of Marketing (4 projects). Sponsors.
            Involved in multiple student projects. Served on the student
            association board.
          </p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3>Swedish Outdoor Association</h3>
            <span className="resume-date">2012 – 2016</span>
          </div>
          <p>
            Ski instructor training (Level 1 & 2). Taught skiing to children and
            adults in the mountains and Stockholm area.
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills 🛠️</h2>
        <div className="resume-interests">
          <InterestBar label="React (JS/TS)" level={9} color="#64ffda" />
          <InterestBar label="Node.js (JS/TS)" level={8} color="#64ffda" />
          <InterestBar label=".NET" level={7} color="#64ffda" />
          <InterestBar label="CI/CD" level={9} color="#64ffda" />
          <InterestBar label="Cloud (Azure)" level={7} color="#64ffda" />
          <InterestBar label="Agile" level={8} color="#64ffda" />
          <InterestBar label="Teamwork" level={10} color="#64ffda" />
        </div>
      </section>

      <section className="resume-section">
        <h2>Personal Interests 🚴</h2>
        <div className="resume-interests">
          <InterestBar label="Cooking" level={6} />
          <InterestBar label="Skiing" level={9} />
          <InterestBar label="Hiking" level={7} />
          <InterestBar label="Cycling" level={10} />
        </div>
      </section>
    </div>
  );
};

export default Resume;
