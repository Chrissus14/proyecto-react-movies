import React from 'react';

const Poster = props => {
  return (
    <>
      <div className="text-center p-2 col-sm-12 col-md-3">
        <a href="https://www.google.com.mx">
          <img src={props.images} alt="..." className="img-fluid" />
        </a>
      </div>
    </>
  );
};

export default Poster;
