import React from "react";
import "./index.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function HomeUI() {
  return (
    <>
      <Header />
      <div className="container">
        <Link to="/play" className="container__button-link">
          Play
        </Link>
      </div>
    </>
  );
}

export default HomeUI;
