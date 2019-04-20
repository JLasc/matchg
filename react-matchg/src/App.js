import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import data from './assets/json/list.json'
import './assets/css/style.css'

class App extends Component {
  state = {
    score: 0,
    currScore: 0,
    dataArr: data
  }

  componenetDidMount() {

  }

  handleClick = id => {
    const imageId = this.state.dataArr
    const clickedImage = imageId.filter(data => data.id === id)
    console.log(clickedImage)
  }



  render() {
    const ImageCard = this.state.dataArr.map((item, index) => {
      return (
        <div className='container drop'>
          <img className='img-thumbnail' onClick={() => this.handleClick(item.id)} key={index} src={item.src} alt="" />
        </div>
      )
    });

    return (
      <div>
        <Header score={this.state.score} currScore={this.state.currScore} />
        <div className='container drop'>
          {ImageCard}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
