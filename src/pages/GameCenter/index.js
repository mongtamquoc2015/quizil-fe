import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GameCenterUI from "../../layouts/GameCenterUI";
import CountdownTime from "../../layouts/GameCenterUI/CountdownTime";
import { GlobalContext } from "../../providers/global";

function GameCenter() {
  const { duration } = useContext(GlobalContext);

  const [userSelectedAnsers, setUserSelectedAnsers] = useState([]);
  const [questions, setQuestions] = useState(null);
  const [date] = useState(Date.now() + duration * 60 * 1000);

  const { setScore } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/questions`
      );
      setQuestions(response.data);
    };
    fetchData();
  }, []);

  const onUserSelectedAnswer = (answer) => {
    const newSelectedAnswers = [...userSelectedAnsers, answer];
    setUserSelectedAnsers(newSelectedAnswers);
  };

  const onSubmitButtonClicked = () => {
    let storagedScore = 0;
    userSelectedAnsers.forEach((answer) => {
      if (answer.isCorrect) {
        storagedScore++;
      }
    });
    setScore(storagedScore);
    history.push(`/summary`);
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      onSubmitButtonClicked();
    }
    return <CountdownTime minutes={minutes} seconds={seconds} />;
  };

  return (
    <GameCenterUI
      onSubmitButtonClicked={onSubmitButtonClicked}
      onUserSelectedAnswer={onUserSelectedAnswer}
      questions={questions}
      duration={date}
      renderer={renderer}
    />
  );
}

export default GameCenter;
