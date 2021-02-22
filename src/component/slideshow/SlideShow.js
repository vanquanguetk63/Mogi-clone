import React from "react";
import "../slideshow/SlideShow.css";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  setSlideIndex = (i) => {
    this.setState({
      slideIndex: this.state.slideIndex + i,
    });
  };

  backward = () => {
    var index = this.state.slideIndex;
    if (index === 0) {
      this.setSlideIndex(this.props.input.length - 1);
    } else {
      this.setSlideIndex(-1);
    }
  };

  forward = () => {
    var index = this.state.slideIndex;
    if (index === this.props.input.length - 1) {
      this.setSlideIndex(-this.props.input.length + 1);
    } else {
      this.setSlideIndex(1);
    }
  };

  render() {
    return (
      <div className="lp-slideshow">
        {this.props.input !== undefined
          ? this.props.input.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`slide ${
                    this.state.slideIndex === index ? "active" : ""
                  }`}
                >
                  <div className="number-text">
                    {`${index + 1} / ${this.props.input.length}`}
                  </div>
                  <img className="image" src={this.props.input[index].urlImage} alt="" />
                </div>
              );
            })
          : ""}

        <span className="prev" onClick={this.backward}>
          ❮
        </span>
        <span className="next" onClick={this.forward}>
          ❯
        </span>
      </div>
    );
  }
}
