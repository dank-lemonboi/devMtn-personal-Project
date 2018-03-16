import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <HashRouter> 
      <div className="App">
       <Navbar />    
       {routes}
       </div>
       </HashRouter>     
    );
  }
}

export default App;
