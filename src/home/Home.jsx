import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
const Home = () => {
  return (
    <div>
      <Hero text="Find your favourite movies" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Begin searching!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
