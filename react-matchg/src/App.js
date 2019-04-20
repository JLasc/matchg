import React, { Component } from 'react';
import Header from './components/Header'
import Backdrop from './components/Backdrop'
import './assets/css/style.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Backdrop />
      </div>
    );
  }
}

export default App;
