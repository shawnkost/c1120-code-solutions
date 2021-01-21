import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props)
  }
  render() {
    // const images = props.images;
    return (
      <div>
        <i className="fas fa-arrow-left"></i>
        <img src={ this.props.images[0].src }></img>
        <i className="fas fa-arrow-right"></i>
      </div>
    );
  }
}
