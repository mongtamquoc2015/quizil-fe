import React, { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import SummaryUI from "../../layouts/SummaryUI";
import { useHistory } from "react-router-dom";

function Summary() {
  const { score, totalNumberQuestions } = useContext(GlobalContext);
  const history = useHistory();
  const numberIncorrectNumber = totalNumberQuestions - score;
  const numberCorrectNumber = score;

  const onRestartGameClicked = () => {
    history.push("/play");
  };

  return (
    <SummaryUI
      numberIncorrectNumber={numberIncorrectNumber}
      score={score}
      totalNumberQuestions={totalNumberQuestions}
      numberCorrectNumber={numberCorrectNumber}
      onRestartGameClicked={onRestartGameClicked}
    />
  );
}

export default Summary;
