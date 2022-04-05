import React from 'react';
import './Social.css';

function Social() {
  return (
    <div id="social" className="social__media">
        <a href="#" className="social__link">
          <i className="fa fa-facebook-f fa-2x"></i>
        </a>
        <a href="#" className="social__link">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="social__link">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <a href="#" className="social__link">
          <i className="fa fa-drupal fa-2x"></i>
        </a>
    </div>
  )
}

export default Social