import { Component, Fragment } from "react";
import ImageButton from "../ImageButton";
import PropTypes from "prop-types";
import "./slider.css";

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  prev = () => {
    let newSlide =
      this.state.count === 0
        ? this.props.imageData.length - 1
        : this.state.count - 1;
    this.setState({ count: newSlide });
  };

  next = () => {
    let newSlide =
      this.state.count === this.props.imageData.length - 1
        ? 0
        : this.state.count + 1;
    this.setState({ count: newSlide });
  };

  render() {
    let data = this.props.imageData[this.state.count].image;
    return (
      <Fragment>
        <img src={data} width={300} height={400} alt="nature" />
        <div className="buttons">
          <ImageButton slider={this.prev} text="prev" />
          <ImageButton slider={this.next} text="next" />
        </div>
      </Fragment>
    );
  }
}

ImageSlider.propTypes = {
  imageData: PropTypes.array,
};

export default ImageSlider;
