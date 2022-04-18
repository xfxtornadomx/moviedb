import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Aboutview from "./aboutview/Aboutview";
import Movieview from "./movieview/Movieview";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./search/Search";
import { useState, useEffect } from "react";
import Notfound from "./notFound/Notfound";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, "is the search text");
    if (searchText != "") {
      const fetcher = async () => {
        const resb = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=5ef71ba8ba1b7e26f4ec87e41f2dc64e&language=en-US&query=${searchText}&page=1&include_adult=false`
        );
        const res = await resb.json();
        console.log(res);
        setSearchResults(res.results);
      };
      fetcher();
    }
  }, [searchText]);
  return (
    <div className="app">
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutview />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<Movieview />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
