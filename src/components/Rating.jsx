import React from 'react';

const Rating = props => (
  <>
    <p className="font-weight-bold mb-0">IMDB Rating</p>
    <p>{props.rating}</p>
  </>
);

export default Rating;
