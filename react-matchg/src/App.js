import React, { Component } from 'react';
import Backdrop from './components/Backdrop'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/css/style.css'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Backdrop />
        <Footer />
      </div>
    );
  }
}

export default App;
