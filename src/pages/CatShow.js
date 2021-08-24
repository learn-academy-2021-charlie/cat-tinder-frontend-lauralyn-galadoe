import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatShow extends Component {
  render() {
      const {cat} = this.props
      return(
        <>
          <Col sm="6">
            <Card body>
            {cat && <>
            <CardTitle>Meet {cat.name}</CardTitle><CardText>Age: {cat.age}</CardText><CardText>Enjoys: {cat.enjoys}</CardText>
            </>}
            </Card>
          </Col>
        </>
      )
  }
}
export default CatShow
