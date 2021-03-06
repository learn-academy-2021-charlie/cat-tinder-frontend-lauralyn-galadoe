import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, Button} from 'reactstrap'
import {NavLink, Redirect} from 'react-router-dom'

class CatShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      submitted: false
    }
  }

  handleSubmit = (e) => {
    const {cat} = this.props
    this.props.deleteCat(cat.id)
    this.setState({submitted: true})
  }
  render() {
      const {cat} = this.props
      return(
        <>
        <Container className="margin">
          <Row>
            <Col sm="6">

              <Card>
              {cat && 
              <>
                <CardBody>
                  <CardTitle>{cat.name}, {cat.age}</CardTitle>
                  <CardText>Enjoys: {cat.enjoys}</CardText>
                </CardBody>
              </>}
              </Card>

            </Col>
          </Row>
          <Button className="button-style">
            <NavLink to={`/catedit/${cat.id}`} id="edit-nav">Edit Cat</NavLink>
          </Button>
          <Button className="button-style" onClick={this.handleSubmit}>
            Delete Cat
          </Button>
          { this.state.submitted && <Redirect to={`/catindex/`} />}
        </Container>
        </>
      )
  }
}
export default CatShow
