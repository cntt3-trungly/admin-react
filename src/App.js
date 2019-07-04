import React, { Component } from 'react';
import Header from './scenes/Header';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterURL from './router/RouterURL';
import Menu from './scenes/Menu';
import './loader'



// Toggle Sidebar



class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
      <Menu/>
      <Header/>
      <RouterURL/>
      </div>
      </Router>
    );
  }
}

export default App;