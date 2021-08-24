import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import missing_cat from '../assets/missing-cat.jpg'

class NotFound extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h3 id="notfound-h3">404: Page not found</h3>
              <img src ={missing_cat} width="50%" alt ="missing-cat" id="notfound-cat-image"/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default NotFound
