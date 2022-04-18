import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    navigate("/search");
    console.log(e.target.value);
    props.setSearchText(e.target.value);
  };
  // const addf = async (props) => {
  //   const resb = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=5ef71ba8ba1b7e26f4ec87e41f2dc64e&language=en-US&query=${props.searchText}&page=1&include_adult=false`
  //   );
  //   const res = await resb.json();
  //   console.log(res);
  //   props.setSearchResults(res.results);
  //   const updateSearchText = (e) => {
  //     navigate("/search");
  //     console.log(e.target.value);
  //     props.setSearchText(e.target.value);
  //   };

  return (
    <div className="navv">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            movie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={props.searchText}
                onChange={updateSearchText}
              ></input>
              <button className="btn btn-outline-success" type="submit">
                <Link to="/search">Search</Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
