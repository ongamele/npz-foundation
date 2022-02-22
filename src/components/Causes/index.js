import React from 'react';
import { Link } from 'react-router-dom';
import causesimg from '../../images/cause/img-1.png';
import causesimg2 from '../../images/cause/img-2.jpg';
import causesimg3 from '../../images/cause/img-3.jpg';
import causesimg4 from '../../images/cause/img-4.jpg';
import causesimg5 from '../../images/cause/img-5.jpg';
import causesimg6 from '../../images/cause/img-6.jpg';
import './style.css';

const Causes = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title section-title2 text-center">
            <div className="thumb-text">
              <span>US</span>
            </div>
            <h2>What We Do.</h2>
            <p>
              Our constitutional objective is to empower and capacitate youth to
              become self sustainable and mentor them to take up their rightful
              space in society.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Investment in individuals
                  </Link>
                </h3>
                <p>
                  Improvements in life skills, personal development and social
                  skills are essential.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Education for Children
                  </Link>
                </h3>
                <p>
                  To distruct children positively through effective education.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Sustainable development goals
                  </Link>
                </h3>
                <p>
                  The SQG's is our blue print to make local changes that will
                  have an impact on global village.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Food And Home for Children
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Foster Dialogue
                  </Link>
                </h3>
                <p>
                  Facilitate youth dialogue to enable them to understand the
                  importance of shaping policies that affect them.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Partnerships
                  </Link>
                </h3>
                <p>
                  Working with various partners who share mutual alignment of
                  mission, vision and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
