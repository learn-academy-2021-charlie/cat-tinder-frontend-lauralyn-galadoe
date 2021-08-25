import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      }
    }
  }

  componentDidMount() {
    const { cat } = this.props
    const { form } = this.state
    for (const property in cat) {
      form[property] = cat[property];
    }
    console.log(form)
    this.setState({form: form})
  }

  handleChange(e){
    // let {form} = this.state
    // form[e.target.name] = e.target.value
    // this.setState({form : form})
  }

  handleSubmit(e){
    this.props.updateCat(this.state.form)
  }

  render() {
    return (
      <>
        <h3>I am the CatEdit Page!</h3>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.props.cat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.props.cat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.props.cat.enjoys}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
          Edit Cat information
          </Button>
        </Form>

      </>
    )
  }
}
export default CatEdit
