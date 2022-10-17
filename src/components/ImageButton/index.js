import { Component, Fragment } from "react";
import "./button.css";
import PropTypes from "prop-types";

class ImageButton extends Component {
  render() {
    return (
      <Fragment>
        <button onClick={this.props.slider}>{this.props.text}</button>
      </Fragment>
    );
  }
}

ImageButton.propTypes = {
  slider: PropTypes.func,
  text: PropTypes.string,
};

export default ImageButton;
