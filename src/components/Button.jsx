import React from 'react';

const Button = props => (
  <>
    <button type="button" className="btn btn-success btn-lg btn-block" onClick={props.action}>
      Cargar más películas
    </button>
  </>
);

export default Button;
