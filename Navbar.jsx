import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar__box">
        <a href='/' className="navbar__icon"><i className="fa fa-home fa-3x" aria-hidden="true"></i></a>
        <a href='/info' className="navbar__icon"><i className="fa fa-info fa-3x" aria-hidden="true"></i></a>
        <a href='/counselling' className="navbar__icon"><i className="fa fa-comments-o fa-3x" aria-hidden="true"></i></a>
        <a href='/activity' className="navbar__icon"><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i></a>
    </div>
  )
}

export default Navbar