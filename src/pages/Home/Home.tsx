import React from "react";
import Header from "../../components/Header/Header";

import "../../App.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-content-container">
        <div className="home-content-row-container-one">
          <p className="home-content-row-one">Hello, my name is</p>
        </div>
        <div className="home-content-row-container-two">
          <p className="home-content-row-two">Tigge Nilsson.</p>
        </div>
        <div className="home-content-row-container-three">
          <p className="home-content-row-three">I build things for the web.</p>
        </div>
        <div className="home-content-row-container-four">
          <p className="home-content-row-four">
            I'm a software engineer specializing in React building exceptional
            digital experiences. Currently I'm focused on building accessable
            and human friendly products at{" "}
            <span className="green-color">Ericsson</span> in Stockholm.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
