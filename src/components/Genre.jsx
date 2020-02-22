import React from 'react';

const Genre = props => {
  const genero = props.genres.map(genre => (
    <li className="mr-3" key={genre.id}>
      {genre.name}
    </li>
  ));
  return (
    <>
      <p className="font-weight-bold mb-0">Generos</p>
      <ul className="list-unstyled d-flex">{genero}</ul>
    </>
  );
};

export default Genre;
