import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ImageCard from './components/ImageCard'
import data from './assets/scripts/list.json'
import './assets/css/style.css'

class App extends Component {
  state = {
    score: 0,
    currScore: 0,
    dataArr: data
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} currScore={this.state.currScore} />
        <ImageCard data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
