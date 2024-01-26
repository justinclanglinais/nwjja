import './App.css';
import React from 'react';
import About from './components/About.js';
import Instructors from './components/Instructors.js';
import Intro from './components/Intro.js';
import Programs from './components/Programs.js';
import Contact from './components/Contact.js';

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
        <Intro />
        <Programs />
        {/* <Instructors /> */}
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;
