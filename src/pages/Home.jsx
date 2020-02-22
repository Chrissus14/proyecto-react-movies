import React, { useState, useEffect } from 'react';

const Pages = () => {
  const [movies, setMovies] = useState([]);
  // Obtener Imagen
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

  useEffect(() => {
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
  });
  const recentPoster = movies.map(poster => poster[0].poster_path);
  const BANNER_TITLE = movies.map(title => title[0].original_title);
  const PLOT = movies.map(plot => plot[0].overview);
  return (
    <>
      <div className="bg-light">
        {/* Header */}
        <header className="container-fluid bg-dark">
          <div className="container py-3  d-md-flex d-md-row justify-content-md-between">
            <div className="h1">
              <a href="/">
                <span className="text-white">React</span>{' '}
                <span className="font-italic font-weight-bold text-success">Movies</span>
              </a>
            </div>
            <div>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                alt="Logo movies database"
                width="50"
                height="50"
              />
            </div>
          </div>
        </header>
        {/* Header */}
        {/* Banner */}
        <section className="bg-dark">
          <div className="card bg-dark text-white">
            <img
              src={`${IMAGE_BASE_URL}w1280${recentPoster}`}
              className="card-img img-fluid"
              alt="poster pelicula"
              style={{
                height: '400px',
                opacity: '0.3'
              }}
            />
            <div className="card-img-overlay">
              <div className="row">
                <div className="col-md-6 ">
                  <h5 className="card-title h1 font-weight-bold">{BANNER_TITLE}</h5>
                  <p className="card-text">{PLOT}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
      </div>
    </>
  );
};

export default Pages;
