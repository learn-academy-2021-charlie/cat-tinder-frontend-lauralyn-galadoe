import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-footer">
          <h3 id="header-style">Cat Tinder!</h3>
          <NavLink to="/catindex" className="nav-styling">Check out the cats</NavLink> 
        </div>
      </>
    )
  }
}
export default Header
