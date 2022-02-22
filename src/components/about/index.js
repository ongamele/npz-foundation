import React from 'react';
import { Link } from 'react-router-dom';
import abimg from '../../images/about/img-1.jpg';
import abimg2 from '../../images/about/1.png';
import abimg3 from '../../images/about/2.png';
import abimg4 from '../../images/shape/shape2.png';
import './style.css';

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12  grid col-12">
            <div className="about-cercle">
              <div className="about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 grid  col-md-12 col-12">
            <div className="about-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>ABOUT US</span>
                </div>
                <h2>
                  NPZ Foundation <span>Nonprofit</span> Organization{' '}
                  <span>For Help</span>
                </h2>
              </div>
              <p>
                focusing on improving the lives of disadvantaged and disengaged
                youth within rural and informal communities of South Africa.
              </p>
              <div className="ab-icon-area">
                <div className="about-icon-wrap">
                  <div className="about-icon-item">
                    <div className="ab-icon">
                      <img draggable="false" src={abimg2} alt="" />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <Link onClick={ClickHandler} to="/case-single">
                          Mentor Children.
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="about-icon-item">
                    <div className="ab-icon ab-icon2">
                      <img draggable="false" src={abimg3} alt="" />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <Link onClick={ClickHandler} to="/case-single">
                          Improve Lives.
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-shape">
        <img src={abimg4} alt="" />
      </div>
    </div>
  );
};

export default About;
