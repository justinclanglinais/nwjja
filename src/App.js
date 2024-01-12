import './App.css';
import React from 'react';
import About from './components/About.js';
import Instructors from './components/Instructors.js';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      route: "",
      input: ""
    }
  }
  render () {
    return (
      <div className="App">
        <About />
        <Instructors />
      </div>
    );
  }
}

export default App;
