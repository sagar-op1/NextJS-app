import React from "react";

const Page7 = () => {
  return (
    <div className="page7-container">
      <div className="Pg7-headtext">
        <div className="pg7-para-text">
          <h1>SUBSCRIBE</h1>
        </div>
        <div className="pg7-heading-text">
          <p>Subscribe To Get The Latest </p>
          <p>News About Us</p>
        </div>
        <div className="pg7-heading-text1">
          <p>
            Please Drop Your Email Below To Get Daily Update About What We Do
          </p>
          <div className="pg7-subscribe-form-container">
            <form className="pg7-subscribe-form">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="pg7-input"
              />
              <button className="pg7-button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
