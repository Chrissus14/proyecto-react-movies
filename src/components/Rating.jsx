import React from 'react';

const Rating = props => (
  <>
    <p className="font-weight-bold mb-0">IMDB Rating</p>
    <p>
      <meter min="0" max="100" optimum="100" low="40" high="70" value={props.rating * 10} />
      &nbsp; &nbsp; &nbsp;
      {props.rating}
    </p>
  </>
);

export default Rating;
