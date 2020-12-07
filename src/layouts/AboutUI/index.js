import React from "react";
import Header from "../../components/Header";
import "./index.css";

function AboutUI() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container__about">
          <h1 className="container__about-title">Quizil</h1>
          <div className="container__about-content">
            <p className="container__about-text">Version: 1.0.0</p>
            <p className="container__about-text">Author: namisan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUI;
