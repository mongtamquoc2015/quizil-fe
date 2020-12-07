import React from "react";
import Header from "../../components/Header";
import "./index.css";

function ContactUI() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container__contact">
          <img
            src="../../assets/images/mcOS-BS7.jpeg"
            alt="avatar"
            className="container__contact-avatar"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUI;
