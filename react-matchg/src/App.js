import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Alert from './components/Alert'
import data from './assets/json/list.json'
import './assets/scripts/scripts'
import './assets/css/style.css'


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    dataArr: data,
    isHidden: true,
    isWrong: false
  }

  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentWillMount() {
    this.shuffle(data)
  }
  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden })
  }

  toggleHiddenWrong = () => {
    this.setState({ isWrong: !this.state.isWrong })
  }

  endGame = () => {
    const reset = this.state.dataArr

    if (this.state.topScore > this.state.score) {
      //reset json values to clicked: false
      reset.forEach(item => { item.clicked = false; })
      this.setState({ score: 0 })
      this.shuffle(data)
    } else {
      reset.forEach(item => { item.clicked = false; })
      this.setState({ score: 0, topScore: this.state.score })
      this.shuffle(data)
    }
  }

  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden })
  }

  toggleHiddenWrong = () => {
    this.setState({ isWrong: !this.state.isWrong })
  }


  winListener = () => {
    if (this.state.isHidden === false) {
      setTimeout(this.toggleHidden, 2000)
    }

    else if (this.state.isWrong === true) {
      setTimeout(this.toggleHiddenWrong, 2000)
    }
  }

  handleClick = id => {
    const imageId = this.state.dataArr
    const clickedImage = imageId.filter(data => data.id === id)

    if (clickedImage[0].clicked === false) {
      clickedImage[0].clicked = true
      this.setState({
        score: this.state.score += 1,
      })
      this.shuffle(data)

    } else if (this.state.score === 12) {
      this.setState({ score: 0, topScore: 12 })
      this.toggleHidden()

    } else {
      this.toggleHiddenWrong()
      this.endGame()
    }

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
        <Header score={this.state.score} topScore={this.state.topScore} />
        {this.winListener()}
        {!this.state.isHidden && <Alert.successAlert />}
        {this.state.isWrong && <Alert.dangerAlert />}
        <div className='container drop'>
          {ImageCard}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
