import React from "react";
import ReactDOM from "react-dom";

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.changeColor.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
    this.changeColor();
  }
  changeColor(props) {
    if (this.state.count === 3) {
      this.props.class = 'threeClicks';
    }
    if (this.state.count === 6) {
      this.props.class = 'sixClicks';
    }
    if (this.state.count === 9) {
      this.props.class = 'nineClicks';
    }
    if (this.state.count === 12) {
      this.props.class = 'twelveClicks';
    }
    if (this.state.count === 15) {
      this.props.class = 'fifteenClicks';
    }
    if (this.state.count === 18) {
      this.props.class = 'eighteenClicks';
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} className={this.props.class}>Click Me!</button>
      </div>
    )
  }
}
