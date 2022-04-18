import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
const Movieview = () => {
  const { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState({});

  const [isloading, setisloading] = useState(true);
  const [poserpath, setposerpath] = useState(``);

  useEffect(() => {
    console.log("make an api request", id);
    const fetha = async (props) => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5ef71ba8ba1b7e26f4ec87e41f2dc64e&language=en-US`
      );
      const response = await res.json();
      setMovieDetails(response);
      setisloading(false);
    };

    fetha();
  }, id);

  const rendermov = (props) => {
    let poserUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    let backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
    if (isloading) {
      return <Hero text="...loading" />;
    }
    if (movieDetails) {
      //   if (poserpath != "https://image.tmdb.org/t/p/w500undefined") {
      //     setposerpath(poserUrl);
      //   } else {
      //     setposerpath(
      //       "https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png"
      //     );
      //   }

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={
                    poserUrl === "https://image.tmdb.org/t/p/w500null"
                      ? "https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png"
                      : poserUrl
                  }
                  alt="...."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">{movieDetails.release_date}</p>
                <p className="lead">rating :{movieDetails.vote_average}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return rendermov();
};

export default Movieview;
