import React from "react";
import "./index.css";

function CountdownTime({ minutes, seconds }) {
  return (
    <div className="container__countdown">
      <div className="container__countdown-item">
        <div className="container__countdown-number">{minutes}</div>
        <div className="container__countdown-text">Minutes</div>
      </div>
      <div className="container__countdown-space">:</div>
      <div className="container__countdown-item">
        <div className="container__countdown-number">{seconds}</div>
        <div className="container__countdown-text">Seconds</div>
      </div>
    </div>
  );
}

export default CountdownTime;
