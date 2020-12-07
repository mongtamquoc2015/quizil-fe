import React from "react";
import "./index.css";

function SubmitButton({ onSubmitButtonClicked }) {
  return (
    <div onClick={onSubmitButtonClicked} className="submit-button">
      <button className="submit-button__btn">Submit</button>
    </div>
  );
}

export default SubmitButton;
