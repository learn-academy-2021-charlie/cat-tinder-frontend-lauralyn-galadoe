import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
        <div className="header-footer" id="footer">
          <NavLink to="/" className="nav-styling">Go Home</NavLink> 
          <p>&#169; Galadoe and Lauralyn</p>
        </div>
      </>
    )
  }
}
export default Footer
