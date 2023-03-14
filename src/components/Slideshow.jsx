import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./slideshow.css";
import "react-slideshow-image/dist/styles.css";

class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = this.props.images;
    return (
      <div className="Slideshow">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index+2} className="each-slide">
                <img className="lazy" src={each.url} alt="sample" />
                <p>{each.caption}</p>
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button className="btn btn-ghost" onClick={this.back}>
            Go Back
          </button>
          <button className="btn btn-ghost" onClick={this.next}>
            Go Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;
