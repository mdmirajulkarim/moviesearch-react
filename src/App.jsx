import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar'
import News from './components/News'
import Home from './components/Home'
import About from './components/About'


class App extends Component {



  render() {

    return (
      <Router>
      <div>
        <Navbar/>
       <Route  exact path="/moviesearch-react" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path ="/news" component={News}/>
   </div>
    </Router>

    );
  }
}

export default App;