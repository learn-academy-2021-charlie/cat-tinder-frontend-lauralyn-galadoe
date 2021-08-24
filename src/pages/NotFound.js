import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class NotFound extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h3 id="notfound-h3">404: Page not found</h3>
              <img src = "https://cat-world.com/wp-content/uploads/2017/06/tips-to-find-a-missing-cat.jpg" width="50%" alt ="missing-cat" id="notfound-cat-image"/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default NotFound
