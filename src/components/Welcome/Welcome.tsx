import React from "react";

import "./Welcome.css";
import "../../App.css";

type WelcomeItemType = {
  text?: string;
  noBreak?: boolean;
  children?: React.ReactNode;
};

const Welcome = () => {
  const welcomeItem: WelcomeItemType[] = [
    { text: "Hello, my name is" },
    { text: "Tigge Nilsson." },
    { text: "I build things for the web." },
    {
      text: " I'm a software engineer specializing in React, building exceptional digital experiences. Currently I'm focused on building accessable and human friendly products at ",
      noBreak: true,
      children: (
        <a
          className="ericsson-text green-color"
          href="https://www.ericsson.com/"
          target="_blank "
          rel="noreferrer"
        >
          Ericsson.
        </a>
      ),
    },
    {
      children: (
        <button
          onClick={() => {
            window.open("https://github.com", "_blank");
          }}
          className="my-button"
        >
          GitHub
        </button>
      ),
    },
  ];

  const renderWelcomeItems = () =>
    welcomeItem.map(({ text, noBreak, children }, index) => (
      <div key={index} className="welcome-item">
        {noBreak ? <span>{text}</span> : <p>{text}</p>}
        {children}
      </div>
    ));

  return (
    <div className="welcome-container wave second-wave">
      {renderWelcomeItems()}
    </div>
  );
};

export default Welcome;
