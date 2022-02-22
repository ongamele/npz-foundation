import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HeaderTopbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i className="fi flaticon-call"></i>+27 11 125 4454
                </li>
                <li>
                  <i className="fi flaticon-envelope"></i>{' '}
                  info@npzfoundation.co.za
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
                <li>
                  <Link className="theme-btn" to="/donate">
                    Donate Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
