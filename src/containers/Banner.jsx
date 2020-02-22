import React from 'react';

const Banner = props => {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  const recentPoster = props.movie.map(poster => poster[0].backdrop_path);
  const BANNER_TITLE = props.movie.map(title => title[0].original_title);
  const PLOT = props.movie.map(plot => plot[0].overview);
  return (
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
        <div className="card-img-overlay container">
          <div className="row">
            <div className="col-md-6 ">
              <h5 className="card-title h1 font-weight-bold">{BANNER_TITLE}</h5>
              <p className="card-text">{PLOT}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
