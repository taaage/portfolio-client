import React, { useState } from "react";
import github from "../../images/socials/github.svg";
import instagram from "../../images/socials/instagram.svg";
import like from "../../images/socials/like.svg";
import linkedinWhite from "../../images/socials/linkedin-white.svg";
import pinterest from "../../images/socials/pinterest.svg";
import share from "../../images/socials/share.svg";
import sharePurple from "../../images/socials/share-purple.svg";
import youtube from "../../images/socials/youtube.svg";

import "./Hero.css";

type HeroLine = {
  text?: string;
  noBreak?: boolean;
  children?: React.ReactNode;
};

type SocialLink = {
  image: string;
  alt: string;
  url?: string;
};

const Hero = () => {
  const [likeIcon, setLikeIcon] = useState(false);
  const [shareIcon, setShareIcon] = useState(false);
  const [message, setMessage] = useState("");

  const baseUrl = "https://tigge-nilsson.vercel.app/";

  const heroLines: HeroLine[] = [
    { text: "Hello, my name is" },
    { text: "Tigge Nilsson." },
    { text: "I build things for the web." },
    {
      text: " I'm a software engineer specializing in React, crafting thoughtful user interfaces and resilient front-end systems. I care about accessibility, performance, and clear UX, and I enjoy collaborating across product and design to ship meaningful experiences. Right now I'm focused on building human-friendly products at ",
      noBreak: true,
      children: (
        <a
          className="hero-link green-color"
          href="https://www.ericsson.com/"
          target="_blank "
          rel="noreferrer"
        >
          Ericsson.
        </a>
      ),
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      image: linkedinWhite,
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
    window.navigator.clipboard.writeText(baseUrl);
    setMessage("URL Copied to clipboard!");
    setShareIcon(true);
    setTimeout(() => {
      setMessage("");
      setShareIcon(false);
    }, 2000);
  };

  const renderHeroLines = () =>
    heroLines.map(({ text, noBreak, children }, index) => (
      <div key={index} className="hero-line">
        {noBreak ? <span>{text}</span> : <p>{text}</p>}
        {children}
      </div>
    ));

  const renderSocialItems = () => {
    return (
      <div className="hero-socials">
        {socialLinks.map(({ image, alt, url }, index) => (
          <div key={index} className="hero-social">
            {alt !== "share" && alt !== "like" && (
              <img
                className="hero-social-icon"
                key={index}
                src={image}
                alt={alt}
                onClick={() => window.open(url, "_blank")}
              ></img>
            )}
            {alt === "share" && (
              <img
                className={
                  shareIcon
                    ? "hero-social-icon is-active"
                    : "hero-social-icon"
                }
                key={index}
                src={shareIcon ? sharePurple : image}
                alt="share"
                onClick={() => copyToClipboard()}
              ></img>
            )}
            {alt === "like" && (
              <img
                className={
                  likeIcon
                    ? "hero-social-icon is-active"
                    : "hero-social-icon"
                }
                key={index}
                src={image}
                alt="like"
                onClick={() => triggerLike()}
              ></img>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderClipboardResult = () => (
    <div className="hero-message">
      {message && <p className="hero-message-text">{message}</p>}
    </div>
  );

  return (
    <div className="section-hero">
      {renderHeroLines()}
      {renderSocialItems()}
      {renderClipboardResult()}
    </div>
  );
};

export default Hero;
