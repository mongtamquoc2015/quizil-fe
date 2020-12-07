import React, { useEffect, useState } from "react";
import "./index.css";
import Answer from "../Answer";
import axios from "axios";

function Answers({ questionId, onUserSelectedAnswer }) {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/answers/${questionId}`
      );
      setAnswers(response.data);
    };
    fetchData();
  }, [questionId]);

  if (!answers) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container__answer-wrap">
      <ul id="container__answer-list">
        {answers?.map((answer) => (
          <Answer
            onUserSelectedAnswer={onUserSelectedAnswer}
            answer={answer}
            key={answer.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Answers;
