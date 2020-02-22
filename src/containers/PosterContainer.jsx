import React from 'react';
import Poster from '../components/Poster';
import Button from '../components/Button';

const PosterContainer = props => {
  console.log(props.data);
  const MOVIES = props.data.map((movie, index) => (
    <li>
      <Poster data={movie} />
    </li>
  ));
  return (
    <div className="container">
      <div className=" row d-md-flex flex-sm-column  flex-md-row flex-md-wrap">
        {MOVIES}
        <Button />
      </div>
    </div>
  );
};

export default PosterContainer;
