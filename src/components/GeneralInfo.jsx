import React from 'react';

const GeneralInfo = props => (
  <span>
    <span className="mr-2">{props.title}:</span>
    <span className="mr-2">{props.info}</span>
  </span>
);

export default GeneralInfo;
