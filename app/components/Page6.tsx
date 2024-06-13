import React from "react";

const Page6 = () => {
  return (
    <div className="page6-container">
      <div className="Page6-headtext">
        <div className="pg6-para-text">
          <h1>SUBSCRIBE</h1>
        </div>
        <div className="pg6-heading-text">
          <p>Subscribe To Get The Latest </p>
          <p>News About Us</p>
        </div>
        <div className="pg6-heading-text1">
          <p>
            Please Drop Your Email Below To Get Daily Update About What We Do
          </p>

          <div className="subscribe-form-container">
            <form className="subscribe-form">
              <div className="flex-between">
                <input type="text" placeholder="Enter Your Email Address" className="w-22"/>
                <button className="buttn" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page6;
