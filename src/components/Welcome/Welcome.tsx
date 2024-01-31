import React, { useState } from "react";
import github from "../../images/socials/github.svg";
import instagram from "../../images/socials/instagram.svg";
import likeGreen from "../../images/socials/like-green.svg";
import like from "../../images/socials/like.svg";
import linkedin from "../../images/socials/linkedin.svg";
import pinterest from "../../images/socials/pinterest.svg";
import share from "../../images/socials/share.svg";
import youtube from "../../images/socials/youtube.svg";

import "./Welcome.css";

type WelcomeItemType = {
  text?: string;
  noBreak?: boolean;
  children?: React.ReactNode;
};

type SocialItemType = {
  image: string;
  alt: string;
  url?: string;
};

const Welcome = () => {
  const [likeIcon, setLikeIcon] = useState(false);
  const [message, setMessage] = useState("");

  const baseUrl = "https://tigge-nilsson.vercel.app/";

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
  ];

  const socialItem: SocialItemType[] = [
    {
      image: linkedin,
      alt: "linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      image: youtube,
      alt: "youtube",
      url: "https://www.youtube.com/",
    },
    {
      image: instagram,
      alt: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: pinterest,
      alt: "pinterest",
      url: "https://www.pinterest.com/",
    },
    {
      image: github,
      alt: "github",
      url: "https://www.github.com/",
    },
    {
      image: share,
      alt: "share",
    },
    {
      image: like,
      alt: "like",
    },
  ];

  const triggerLike = () => {
    setLikeIcon(!likeIcon);
  };

  const copyToClipboard = () => {
    // Assuming baseUrl is defined somewhere in your component or props
    window.navigator.clipboard.writeText(baseUrl);
    setMessage("URL Copied to clipboard!");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const renderWelcomeItems = () =>
    welcomeItem.map(({ text, noBreak, children }, index) => (
      <div key={index} className="welcome-item">
        {noBreak ? <span>{text}</span> : <p>{text}</p>}
        {children}
      </div>
    ));

  const renderSocialItems = () => {
    return (
      <div className="social-item-container">
        {socialItem.map(({ image, alt, url }, index) => (
          <div key={index}>
            {alt !== "share" && alt !== "like" && (
              <img
                className="social-item"
                key={index}
                src={image}
                alt={alt}
                onClick={() => window.open(url, "_blank")}
              ></img>
            )}
            {alt === "share" && (
              <img
                className="social-item"
                key={index}
                src={image}
                alt="share"
                onClick={() => copyToClipboard()}
              ></img>
            )}
            {alt === "like" && (
              <img
                className="social-item"
                key={index}
                src={likeIcon ? likeGreen : image}
                alt="like"
                onClick={() => triggerLike()}
              ></img>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderClipBoardCopyResult = () => (
    <div className="copy-message-container">
      {message && <p className="copy-message">{message}</p>}
    </div>
  );

  return (
    <div className="welcome-container wave second-wave">
      {renderWelcomeItems()}
      {renderSocialItems()}
      {renderClipBoardCopyResult()}
    </div>
  );
};

export default Welcome;
