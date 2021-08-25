import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-footer">
          <h3 id="header-style">Cat Tinder!</h3>
          <NavLink to="/catnew">Add a Cat</NavLink>
        </div>
      </>
    )
  }
}
export default Header
