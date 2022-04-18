import React from "react";
import "./aboutview.css";
import Hero from "../Hero/Hero";
const Aboutview = () => {
  return (
    <div>
      <Hero text="about this website" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This is a movie database here you will find your favourite movies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutview;
