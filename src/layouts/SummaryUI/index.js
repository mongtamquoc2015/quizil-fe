import React from "react";
import Header from "../../components/Header";
import "./index.css";

function SummaryUI({ score, totalNumberQuestions, onRestartGameClicked }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container__summary">
          <div className="container__summary-title">End game</div>
          <div className="container__summary-frame">
            <span className="container__summary-text">Total Questions:</span>
            <span className="container__summary-number">
              {totalNumberQuestions}
            </span>
          </div>
          <div className="container__summary-frame">
            <span className="container__summary-text">Score:</span>
            <span className="container__summary-number">{score}</span>
          </div>
          <button
            onClick={onRestartGameClicked}
            className="container__summary-button"
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default SummaryUI;
