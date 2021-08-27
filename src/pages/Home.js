import React, { Component } from 'react'
import HomeImage from '../assets/cat-on-back.jpeg'
import { Container, Row, Col } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <>
        <Container>
            <Row>
            <Col>
              <img src={HomeImage} alt="cat-sleeping-on-its-back" />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Home
