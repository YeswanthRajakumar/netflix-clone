import React, { useState, useEffect } from "react";
import request_instance from "./axios_request";
import "./Row.css";

function Row(props) {
  const BaseImageURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);

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
  return (
    <div className="row">
      {/*for a single row container*/}
      <h1>{props.title}</h1>
      <div className="row__posters">
        {/*for a list of posters*/}
        {movies.map((movie) => (
          <img
            style={props.isLargeRow ? LargerowStyle : null}
            key={movie.id}
            src={BaseImageURL.concat(
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            )}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
