import React, { useState } from "react";
import Navbar from "./Navbar";
import Application from "./Application";
import image from "../logo.png";
import $ from "jquery";

function Main() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (values) => {
    setSubmitted(true);

    if (typeof values.prev_programming === "undefined")
      values.prev_programming = "";

    values["course"] += " Development";
    values["a_year"] += " Year";

    $.ajax({
      url:
        "https://script.google.com/macros/s/AKfycbzhTWBEenjLwg6XrRA3sU3NsKFySpNxow_vYhibyHZi7OIV8FlP/exec",
      method: "GET",
      dataType: "json",
      data: values,
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="site-layout"
        style={{ padding: "0 50px", marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-lg-2 col-sm-0"></div>
          <div
            className="col-lg-8 col-sm-12"
            style={{ backgroundColor: "#eee", paddingTop: "1rem" }}
          >
            <div className="info-section">
              <div className="logo row">
                <div className="col-4"></div>
                <div className="col-lg-4 col-sm-0 col-md-2">
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={image}
                    alt="Energia Powered's logo"
                  />
                </div>
              </div>
              <div className="name">
                <div className="col">
                  <h1 style={{ fontSize: "1.8rem", textAlign: "center" }}>
                    Energia Powered
                  </h1>
                </div>
              </div>
              <div
                className="info"
                style={{ padding: "0.8rem", textAlign: "center" }}
              >
                {submitted ? (
                  <p>
                    Thank you for filling out your information! <br />
                    We will contact you as soon as possible. <br />
                    So, keep waiting for us.
                  </p>
                ) : (
                  <p>
                    Energia Powered is a student activity in Ain shams
                    University. <br />
                    This application form to join our academic sessions as a
                    participant, so if you are interested, fill this form and
                    join us.
                  </p>
                )}
              </div>
              {submitted ? null : <Application submit={submit} />}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">©2020 Energia Powered</div>
    </>
  );
}

export default Main;
