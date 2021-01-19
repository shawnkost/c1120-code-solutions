import React from "react";
import ReactDOM from "react-dom";

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
    this.changeColor();
  }
  changeColor() {
    let newClass = " ";
    if (this.state.count > 3) {
      newClass = 'threeClicks';
    }
    if (this.state.count > 6) {
      newClass = 'sixClicks';
    }
    if (this.state.count > 9) {
      newClass = 'nineClicks';
    }
    if (this.state.count > 12) {
      newClass = 'twelveClicks';
    }
    if (this.state.count > 15) {
      newClass = 'fifteenClicks';
    }
    if (this.state.count > 18) {
      newClass = 'eighteenClicks';
    }
    return newClass;
  }
  render() {
    let newClass = this.changeColor();
    return (
      <div>
        <button onClick={this.handleClick} className={newClass}>Click Me!</button>
      </div>
    )
  }
}
