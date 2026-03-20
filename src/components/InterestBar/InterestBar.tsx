import React from "react";
import "./InterestBar.css";

type InterestBarProps = {
  label: string;
  level: number;
  color?: string;
};

const InterestBar = ({ label, level, color = "#d1a2f9" }: InterestBarProps) => {
  return (
    <div className="interest-bar">
      <span className="interest-label">{label}</span>
      <div className="interest-track">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className={`interest-segment ${i <= level ? "filled" : ""}`} style={i <= level ? { background: color } : undefined} />
        ))}
      </div>
    </div>
  );
};

export default InterestBar;
