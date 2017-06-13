import React, { Component } from 'react';
import './ScrollApp.css';

class ColoredContainer extends Component{
  render () {
    const containerStyle = {
      backgroundColor: this.props.color
    }
    return <div className="container" style={containerStyle}></div>
  }
}



class ScrollButton extends Component {
  constructor(){
    super()
    this.state = {intervalId: 0}
  }

  scrollStep(){
    if(window.pageYOffset === 0){
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop(){
    const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs)
    this.setState({ intervalId: intervalId })
  }

  render(){
    return (
      <button title='BackToTop' className='scroll' onClick={()=> {this.scrollToTop()}}/>
    )
  }
}

class ScrollApp extends Component {
  constructor(){
    super();

    this.state = {
      colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
    }
  }

  render(){
    return  <div className="long">
        { this.state.colors.map((color) => {
            return <ColoredContainer color={color}/>
          })
        }
        <ScrollButton scrollStepInPx="20" delayInMs="10" />
      </div>
  }
}

export default ScrollApp;
