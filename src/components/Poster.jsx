import React from 'react';
import { Link } from 'react-router-dom';

const Poster = props => {
  return (
    <>
      <div className="text-center p-2 col-sm-12 col-md-3">
        <Link to={`/movies/${props.id}`}>
          <img src={props.images} alt="imagen no encontrada" className="img-fluid" />
        </Link>
      </div>
    </>
  );
};

export default Poster;
