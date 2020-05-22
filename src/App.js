import React, { Component } from "react";
import Slider from "./components/Slider/Slider";
import Arrow from "./components/Arrow/Arrow";
import Dots from "./components/Dots/Dots";
import { images } from "./images";

import "./App.css";

class App extends Component {
  state = {
    activeSlide: 0,
    translate: 0,
    transition: 0.4,
  };

  getWidth = () => window.innerWidth;

  nextSlide = () => {
    if (this.state.activeSlide === images.length - 1) return;
    this.setState({
      ...this.state,
      activeSlide: this.state.activeSlide + 1,
      translate: (this.state.activeSlide + 1) * this.getWidth(),
    });
  };

  prevSlide = () => {
    if (this.state.activeSlide === 0) return;
    this.setState({
      ...this.state,
      activeSlide: this.state.activeSlide - 1,
      translate: (this.state.activeSlide - 1) * this.getWidth(),
    });
  };

  render() {
    return (
      <div className="App">
        <Slider
          slides={images}
          translate={this.state.translate}
          transition={this.state.transition}
          width={this.getWidth() * images.length}
        />
        <Arrow clicked={this.prevSlide} direction="left" />
        <Arrow clicked={this.nextSlide} direction="right" />
        <Dots slides={images} activeSlide={this.state.activeSlide} />
      </div>
    );
  }
}

export default App;
