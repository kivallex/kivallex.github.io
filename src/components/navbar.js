import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className={classNames('navbar_wrapper', 'container', 'tight')}
    >
      {/* <Link to="/" className='hover'>
        Resume
      </Link> */}
      <a
        className="hover"
        href="/KennethSuh_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <Link to="/about" className='hover'>
        About
      </Link>
      {/* <Link to="/about" className="hover">
        hello
      </Link> */}
      <a
        className="hover"
        href="https://youtube.com/user/Gamer4Kill"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
    </div>
  );
};

export default Navbar;
