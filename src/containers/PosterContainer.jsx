import React from 'react';
import Poster from '../components/Poster';
import Button from '../components/Button';

const PosterContainer = props => {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  const POSTERS = props.posters.map(poster =>
    poster.map((item, index) => (
      <Poster key={item.id} images={`${IMAGE_BASE_URL}w500${item.poster_path}`} id={item.id} />
    ))
  );
  return (
    <div className="container py-4">
      <div className=" row d-md-flex flex-sm-column  flex-md-row flex-md-wrap">
        {POSTERS}
        <Button action={props.event} />
      </div>
    </div>
  );
};

export default PosterContainer;
