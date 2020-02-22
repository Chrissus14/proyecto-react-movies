import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container-fluid bg-dark">
      <div className="container py-3  d-md-flex d-md-row justify-content-md-between">
        <div className="h1">
          <Link to="/" className="text-decoration-none">
            <span className="text-white">React</span>{' '}
            <span className="font-italic font-weight-bold text-success">Movies</span>
          </Link>
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
