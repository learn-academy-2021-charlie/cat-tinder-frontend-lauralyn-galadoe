import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
        <div className="header-footer" id="footer">
          <h3 id="footer-style">I am the Footer!</h3>
          <NavLink to="/">Go Home</NavLink> 
          <NavLink to="/catindex">Check out the cats!</NavLink>
        </div>
      </>
    )
  }
}
export default Footer
