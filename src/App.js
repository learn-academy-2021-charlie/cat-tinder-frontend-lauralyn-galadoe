import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import NotFound from './pages/NotFound'
import './App.css'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(catsArray => this.setState({ cats: catsArray }))
      .catch(errors => console.log("Cat read errors: ", errors))
  }

  createCat = (newCat) => {
    if(newCat.enjoys.length < 10){
        alert("Please check your submission. Enjoy has to be 10 characters minimum.")
    }else{
      fetch("http://localhost:3000/cats", {
        body: JSON.stringify(newCat),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("Cat create errors: ", errors))
    }
  }

  updateCat = (cat) => {
    if(cat.enjoys.length < 10){
        alert("Please check your submission. Enjoy has to be 10 characters minimum.")
    }else{
      fetch(`http://localhost:3000/cats/${cat.id}`, {
        body: JSON.stringify(cat),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("Cat update error: ", errors))
    }
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat delete errors: ", errors))
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats }/> } />
            <Route path="/catshow/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatShow cat={cat} deleteCat={this.deleteCat}/>
            }}/>
            <Route path="/catnew" render={ (props) => <CatNew createCat={this.createCat} /> } />
            <Route path="/catedit/:id" render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit cat={cat} updateCat={this.updateCat} />
            }} />
            <Route component={ NotFound }/>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App
