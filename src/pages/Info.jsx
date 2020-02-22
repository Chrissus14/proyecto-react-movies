import React from 'react';
import Header from '../containers/Header';
import MovieGeneralInfo from '../containers/MovieGeneralInfo';

const Info = props => {
  const { params } = props.match;
  return (
    <>
      <Header />
      <MovieGeneralInfo id={params.id} />
    </>
  );
};

export default Info;
