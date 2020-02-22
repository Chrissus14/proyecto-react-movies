import React from 'react';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const Poster = props => {
  const movieImage = props.data.poster_path;
  return (
    <>
      {/* {console.log(props.data)} */}

      <div className="text-center p-2 col-sm-12 col-md-3">
        <a href="https://www.google.com.mx">
          <img src={`${IMAGE_BASE_URL}w500${movieImage}`} alt="..." className="img-fluid" />
        </a>
      </div>
    </>
  );
};

export default Poster;
