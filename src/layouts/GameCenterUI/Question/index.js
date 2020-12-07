import React from "react";
import "./index.css";

function Question({ question }) {
  return (
    <div className="container__question-wrap">
      <h3 className="container__question-text">{question?.name}</h3>
    </div>
  );
}

export default Question;
