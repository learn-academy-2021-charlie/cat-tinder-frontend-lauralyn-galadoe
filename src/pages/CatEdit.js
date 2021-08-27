import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
        id: ""
      },
      submitted: false
    }
  }

  componentDidMount() {
    const { cat } = this.props
    const { form } = this.state
    for (const property in cat) {
      form[property] = cat[property];
    }
    this.setState({form: form})
  }

  handleChange = (e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form : form})
  }

  handleSubmit = (e) => {
    this.props.updateCat(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <h3>Edit {this.props.cat.name}'s information</h3>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit} className = "button-style">
          Edit Cat information
          </Button>
        </Form>
        { this.state.submitted && <Redirect to={`/catshow/${this.state.form.id}`} />}
      </>
    )
  }
}
export default CatEdit
