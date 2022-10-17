import { Component } from "react";
import imageData from "../imageData";
import ImageSlider from "../ImageSlider";
import "./imageContent.css";

class ImageContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: imageData,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Natura Images</h1>
        <ImageSlider imageData={this.state.image} />
      </div>
    );
  }
}

export default ImageContent;
