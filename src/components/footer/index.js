import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import './style.css';

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="footer-logo widget-title">
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <p>
                  NPZ Foundation is a non for profit organization focusing on
                  improving the lives of disadvantaged and disengaged youth
                  within rural and informal communities of South Africa.{' '}
                </p>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Causes</Link>
                  </li>
                  <li>
                    <Link to="/">Our Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Event</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-6 col-sm-12 col-12"></div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget market-widget tp-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <p>NOZIBELE PRINCESS ZBESH FOUNDATION</p>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin"></i>28 Street,
                      Johannesburg, South Africa
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>+27 11 125 4454
                    </li>
                    <li>
                      <i className="fi flaticon-envelope"></i>
                      nfo@npzfoundation.co.za
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                &copy; 2022 NPZ Foundation. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
