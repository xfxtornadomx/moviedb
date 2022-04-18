import React from "react";
import "./search.css";
import Hero from "../Hero/Hero";
import { useState } from "react";
import { Link } from "react-router-dom";
const Search = (props) => {
  //   const [Image, setImage] = useState(posterUrl);
  //   if ((posterUrl = "https://image.tmdb.org/t/p/null")) {
  //     setImage(
  //       `https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png`
  //     );
  //   }

  const MovieCard = (props) => {
    let posterUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
    const detailUrl = `/movies/${props.movie.id}`;
    const [Image, setImage] = useState(posterUrl);
    if (Image == "https://image.tmdb.org/t/p/w500null") {
      setImage(
        "https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png"
      );
    }

    return (
      <div className="col-lg-3 col-md-3 col-2 my-4">
        <img src={Image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    );
  };

  const title = ` you are searching for ${props.keyword}`;
  const resultshtml = props.searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <>
      <Hero text={title} />
      <div>
        {resultshtml != 0 ? (
          <div className="container">
            <div className="row">{resultshtml}</div>
          </div>
        ) : (
          <div className="fs-2 d-flex justify-content-center mt-4 ">
            please enter a valid input
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
