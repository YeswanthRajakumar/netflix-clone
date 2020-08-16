import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      <Banner/>
      {/* Big banner */}


      {/* List of generes and movies */}
      <Row title="NETFLIX ORIGINALS" isLargeRow ={true} fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW"  fetchURL={requests.fetchTrending} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="BEST IN ROMANCE" fetchURL={requests.fetchRomanceMovies} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTRIES" fetchURL={requests.fetchDocumentaries} />
    


    </div>
  );
}

export default App;
