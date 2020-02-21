import React from 'react';
import Title from '../components/Title';
import Plot from '../components/Plot';
import Genre from '../components/Genre';
import Rating from '../components/Rating';
import Directors from '../components/Directors';

const MovieInfo = () => (
  <div className="card mb-3" style={{ maxWidth: '960px' }}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1563646816307-b51fe5025916?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          className="card-img"
          style={{ height: '100%' }}
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body p-3">
          <Title />
          <Plot />
          <Genre />
          <Rating />
          <Directors />
        </div>
      </div>
    </div>
  </div>
);

export default MovieInfo;
