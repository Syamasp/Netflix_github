const API_KEY="3d7956cfd6992aa9e2bf0281e9f7ca42";
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchactionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchoriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;
