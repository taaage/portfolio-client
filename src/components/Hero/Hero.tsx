import { useState } from "react";
import { Link } from "react-router-dom";
import github from "../../images/socials/github.svg";
import like from "../../images/socials/like.svg";
import linkedinWhite from "../../images/socials/linkedin-white.svg";

import "./Hero.css";

const Hero = () => {
  const [likeIcon, setLikeIcon] = useState(false);

  return (
    <header className="section-hero" aria-labelledby="hero-title">
      <p className="hero-kicker"><span /> Software engineer · Stockholm, Sweden</p>
      <h1 id="hero-title" className="hero-title">Tigge Nilsson<span>.</span></h1>
      <p className="hero-lede">I build thoughtful digital products, from polished React interfaces to the systems behind them, AI native.</p>
      <p className="hero-copy">I care about clear UX, and making useful things that feel good to use.</p>
      <div className="hero-actions">
        <a className="hero-primary-action" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
        <Link className="hero-secondary-action" to="/resume">View CV <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-socials" aria-label="Social links">
        <a className="hero-social" href="https://www.linkedin.com/tigge-nilsson" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img className="hero-social-icon" src={linkedinWhite} alt="" />
        </a>
        <a className="hero-social" href="https://github.com/taaage" target="_blank" rel="noreferrer" aria-label="GitHub">
          <img className="hero-social-icon" src={github} alt="" />
        </a>
        <button
          className={`hero-social like-button${likeIcon ? " is-active" : ""}`}
          type="button"
          aria-label={likeIcon ? "Unlike this portfolio" : "Like this portfolio"}
          aria-pressed={likeIcon}
          onClick={() => setLikeIcon((current) => !current)}
        >
          <img className="hero-social-icon" src={like} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Hero;
