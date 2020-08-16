import React, { useState, useEffect } from "react";
import request_instance from "./axios_request";
import requests from "./requests";
import "./Banner.css"
function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
        const request = await request_instance.get(requests.fetchNetflixOriginals);
       
        const movie_array = request.data.results
        const random_number = Math.floor(Math.random() * movie_array.length-1 ) ; 
        const random_movie = movie_array[random_number]
        console.log(random_movie)
        setmovie(random_movie)

}
    fetchData();
    }, [])

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+ "...": str;

}
    
  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition : "center center center center",
    
    

    }}>
     <div className="banner__contents">
      <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>   {/* title */}
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
         <button className="banner__button">My List</button>
      </div>
      <p className="banner__description">
        {truncate(movie?.overview,170)}
        </p>
      </div>
    <div className="banner__fadeBottom"/>
    </header>
  );
}

export default Banner;
