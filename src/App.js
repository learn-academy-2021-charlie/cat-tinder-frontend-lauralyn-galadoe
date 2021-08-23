import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import NotFound from './pages/NotFound'
import mockCats from './mockCats.js'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }

  render() {
    console.log(this.state.cats);
    return (
      <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/catindex" component={ CatIndex } />
          <Route path="/catshow/:id" component={ CatShow } />
          <Route path="/catnew" component={ CatNew } />
          <Route path="/catedit/:id" component={ CatEdit } />
          <Route component={ NotFound }/>
        </Switch>
        <Footer />
      </Router>
      </>
    )
  }
}
export default App
