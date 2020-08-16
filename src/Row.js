import React, { useState, useEffect } from "react";
import request_instance from "./axios_request";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const BaseImageURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  //When a ROW loads we need to make a request to the API

  useEffect(() => {
    // if [] , run once the ROW loads,and don't run again
    async function fectcData() {
      const request = await request_instance.get(props.fetchURL);
      // console.log(request.data.results);
      let moviearray = request.data.results;
      setmovies(moviearray);
      return request;
    }
    fectcData();
  }, [props.fetchURL]);

  const LargerowStyle = {
    maxHeight: "250px",
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL){
       setTrailerURL("");
    }
    else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/*for a single row container*/}
      <h1>{props.title}</h1>
      <div className="row__posters">
        {/*for a list of posters*/}
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            style={props.isLargeRow ? LargerowStyle : null}
            key={movie.id}
            src={BaseImageURL.concat(
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            )}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
