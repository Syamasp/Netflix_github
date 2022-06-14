

import axios from "./axios";
import React, { useEffect, useState } from "react";
import './Banner.css';
import requests from "./Requests";

function Banner() {
const[movie,setMovie]=useState([]);
useEffect(()=>{
  async function fetchData(){
    const request= await axios.get(requests. fetchactionMovies);
    setMovie(
      request.data.results[
        Math.floor(Math.random()* request.data.results.length-1)
      ]
    );
    return requests;
  }
  
  fetchData();
},[]);
function truncate(string, n){
  return string?.length>n?string.substr(0, n-1) + "..." : string;
}
console.log(movie);

  return <header 
  className="banner" 
  style={{
      backgroundSize: "cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
  }}
  >
<div className="banner_contents">
    <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_name}
    </h1>
    <div className="banner_buttons"> 
     <button className="banner_button">Play</button>
        <button className="banner_button">My list</button>
    </div>
    <h1 className="banner__description">
      {truncate(
        movie?.overview,150)}
    </h1>
</div>

<div className="banner__fadebottom"/>
  </header>
   
    
  
}

export default Banner