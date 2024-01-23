import Header from "../../components/Header/Header";

import "../../App.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-content-container">
        <div>
          <p className="home-content-row-one">Hello, my name is</p>
        </div>
        <div>
          <p className="home-content-row-two">Tigge Nilsson.</p>
        </div>
        <div>
          <p className="home-content-row-three">I build things for the web.</p>
        </div>
        <div>
          <p className="home-content-row-four">
            I'm a software engineer specializing in React, building exceptional
            digital experiences. Currently I'm focused on building accessable
            and human friendly products at{" "}
            <a
              className="ericsson-text green-color"
              href="https://www.ericsson.com/"
              target="_blank "
              rel="noreferrer"
            >
              Ericsson.
            </a>
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              window.open("https://github.com", "_blank");
            }}
            className="github-button"
          >
            GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
