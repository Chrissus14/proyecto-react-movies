import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
import GeneralInfo from '../components/GeneralInfo';

const MovieGeneralInfo = props => {
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  //Api URL
  const API_URL = 'https://api.themoviedb.org/3/';
  //Api Key
  const API_KEY = '0d59c137d4b1775154cc094577fbe290';
  const GET_MOVIE = `${API_URL}movie/${props.id}?api_key=${API_KEY}&language=en-US`;

  const api = () => {
    fetch(GET_MOVIE)
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
        setGenres(data.genres);
      });
  };
  useEffect(api, []);

  const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };

  const convertMoney = money => {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/NumberFormat
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    return formatter.format(money);
  };

  console.log(movieData);
  return (
    <>
      <section className="container py-3">
        <MovieInfo
          title={movieData.original_title}
          plot={movieData.overview}
          genres={genres}
          rating={movieData.vote_average}
          poster={movieData.poster_path}
        />
        <div className="d-md-flex justify-content-between">
          <GeneralInfo title="Duración" info={calcTime(movieData.runtime)} />
          <GeneralInfo title="Presupuesto" info={convertMoney(movieData.budget)} />
          <GeneralInfo title="Ingresos" info={convertMoney(movieData.revenue)} />
        </div>
      </section>
    </>
  );
};

export default MovieGeneralInfo;
