import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
function HomeScreen() {
  return ( <div className="homescreen">
      <Nav/>
<Banner/>
<Row
title ='NETFLIX ORIGINALS'
fetchUrl={requests.fetchactionMovies}
isLargeRow/>
<Row title ='Trending Now'fetchUrl={requests.fetchTrending}/>
<Row title ='Action Movies' fetchUrl={requests.fetchActionMovies}/>
<Row title ='Orginals' fetchUrl={requests. fetchoriginals}/>
<Row title ='Romance Movies'fetchUrl={requests.fetchRomanceMovies}/>
<Row title ='Horror movies'fetchUrl={requests.fetchHorrorMovies}/>
<Row title ='Documentaries'fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default HomeScreen;