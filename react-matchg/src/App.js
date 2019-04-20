import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Backdrop from './components/Backdrop'
import './assets/css/style.css'

class App extends Component {
  constructor(props) {
    super(props)

    state: {

    }
  }


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
