import React from 'react';

const Header = () => {
  return (
    <header className="container-fluid bg-dark">
      <div className="container py-3  d-md-flex d-md-row justify-content-md-between">
        <div className="h1">
          <a href="/">
            <span className="text-white">React</span>{' '}
            <span className="font-italic font-weight-bold text-success">Movies</span>
          </a>
        </div>
        <div>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
            alt="Logo movies database"
            width="50"
            height="50"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
