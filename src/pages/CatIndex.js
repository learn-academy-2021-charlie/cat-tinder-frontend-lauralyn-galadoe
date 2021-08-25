import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Card, CardTitle } from 'reactstrap'

class CatIndex extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm="6">
              <h3>Check out the cats!</h3>
              {this.props.cats && this.props.cats.map(cat => {
                return (
                  <Card body key={cat.id}>
                    <CardTitle>
                      <NavLink to={`/catshow/${cat.id}`}>
                        <h4>{cat.name}</h4>
                      </NavLink>
                    </CardTitle>
                  </Card>
                )
              })}
            </Col>
          </Row>
          <Row>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </Row>
        </Container>
      </>
    )
  }
}
export default CatIndex
