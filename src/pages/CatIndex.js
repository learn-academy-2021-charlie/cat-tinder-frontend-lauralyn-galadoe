import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle, Col } from 'reactstrap'

class CatIndex extends Component {
  render() {
    return (
      <>
        <h3>Check out the cats!</h3>
        <Col sm="6">
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
      </>
    )
  }
}
export default CatIndex
