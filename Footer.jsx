import React from 'react'
import './Footer.css'
import logo from '../images/logo2.png';
import text from '../images/Mind2.png';
import quote from '../images/end.png';
import stamp from '../images/stamp.png'

function Footer() {
  return (
    <div className="footer__container">
        <div className="footer__member">
            <div className="footer__circle">
                <div className="member">
                    <div className="member__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="footer__circle">
                <div className="member">
                    <div className="member__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="footer__circle">
                <div className="member">
                    <div className="member__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
        </div>
        <div className="footer__box">
            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>
            <a href='#Donation' className="footer__donate">
                <img src={stamp} alt="" />
            </a>
            <div className="footer__text">
                <img src={text} alt="" />
            </div>
        </div>
        <div className="footer__quote">
            <img src={quote} alt="" />
        </div>
    </div>
  )
}

export default Footer