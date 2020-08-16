import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests"
function App() {
  return (
    <div className="App">
      <h1> Welcome to Netflix clone</h1>

      <Row title="NETFLIX ORIGINALS" 
            fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" 
            fetchURL={requests.fetchTrending} />

    </div>
  );
}

export default App;
