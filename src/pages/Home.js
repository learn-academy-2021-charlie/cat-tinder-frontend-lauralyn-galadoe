import React, { Component } from 'react'
import HomeImage from '../assets/cat-on-back.jpeg'

class Home extends Component {
  render() {
    return (
      <>
        <h3>I am the Home page!</h3>
        <img src={HomeImage} alt="cat-sleeping-on-its-back" />
        <p>Almost before we knew it, we had left the ground.</p>
      </>
    )
  }
}
export default Home
