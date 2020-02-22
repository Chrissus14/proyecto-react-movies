import React, { useState, useEffect } from 'react';
import PosterContainer from '../containers/PosterContainer';
import Banner from '../containers/Banner';
import Header from '../containers/Header';

const Pages = () => {
  const [movies, setMovies] = useState([]);

  const api = () => {
    //Api URL
    const API_URL = 'https://api.themoviedb.org/3/';
    //Api Key
    const API_KEY = '0d59c137d4b1775154cc094577fbe290';
    // Obtener películas
    const GET_MOVIES = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(GET_MOVIES)
      .then(response => response.json())
      .then(data => {
        setMovies([data.results]);
      });
  };
  useEffect(api, []);

  return (
    <>
      <div className="bg-light">
        {/* Header */}
        <Header />

        {/* Header */}
        {/* Banner */}
        <Banner movie={movies} />
        {/* Banner */}
        {/* PosterContainer */}
        <div>Aqui va PosterContainer</div>
        {/* PosterContainer */}
      </div>
    </>
  );
};

export default Pages;
