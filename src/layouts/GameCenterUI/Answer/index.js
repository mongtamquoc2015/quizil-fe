import React from "react";
import "./index.css";

function Answer({ answer, onUserSelectedAnswer }) {
  const onAnswerClicked = (e) => {
    e.target.classList.add("isSelected");
    onUserSelectedAnswer(answer);
  };

  return (
    <li onClick={onAnswerClicked} className="container__answer-item">
      <button className="container__answer-button">{answer?.location}</button>
      <div className="container__answer-text">{answer?.name}</div>
    </li>
  );
}

export default Answer;
