import React from "react";
import Countdown from "react-countdown";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import Answers from "./Answers";
import "./index.css";
import Question from "./Question";
import SubmitButton from "./SubmitButton";

function GameCenterUI({
  onSubmitButtonClicked,
  onUserSelectedAnswer,
  questions,
  duration,
  renderer,
}) {
  if (!questions) {
    return <Spinner />;
  }
  return (
    <>
      <Header />
      <div className="container">
        <Countdown date={duration} renderer={renderer} />
        {questions?.map((question) => (
          <div className="container__inner" key={question.id}>
            <Question question={question} />
            <Answers
              questionId={question.id}
              onUserSelectedAnswer={onUserSelectedAnswer}
            />
          </div>
        ))}
        <SubmitButton onSubmitButtonClicked={onSubmitButtonClicked} />
      </div>
    </>
  );
}

export default GameCenterUI;
