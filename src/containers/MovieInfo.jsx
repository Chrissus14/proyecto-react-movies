import React from 'react';
import Title from '../components/Title';
import Plot from '../components/Plot';
import Genre from '../components/Genre';
import Rating from '../components/Rating';
import Directors from '../components/Directors';

const MovieInfo = props => {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  return (
    <div className="card mb-3" style={{ maxWidth: '960px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`${IMAGE_BASE_URL}w500${props.poster}`}
            className="card-img"
            style={{ height: '100%' }}
            alt={props.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-3">
            <Title title={props.title} />
            <Plot plot={props.plot} />
            <Genre genres={props.genres} />
            <Rating rating={props.rating} />
            {/* <Directors /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
