import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'


class CatShow extends Component {

  render() {
      const {cat} = this.props
      return(
        <>
        <Container>
          <Row>
            <Col sm="6">
              <Card body>
              {cat && <>
              <CardTitle>Meet {cat.name}</CardTitle><CardText>Age: {cat.age}</CardText><CardText>Enjoys: {cat.enjoys}</CardText>
              </>}
              </Card>
            </Col>
          </Row>
          <Button>
            <NavLink to={`/catedit/${cat.id}`}>Edit Cat</NavLink>
          </Button>
        </Container>
        </>
      )
  }
}
export default CatShow
