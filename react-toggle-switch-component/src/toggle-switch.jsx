import React from "react";
import ReactDOM from "react-dom";

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: true };
    this.toggle = this.toggle.bind(this);
    this.labelText = "ON";
    this.switchClass = "circle-div-on";
    this.switchCircle = "switch-on";
  }
  toggle() {
    if (this.state.toggled === true) {
      this.setState({ toggled: false })
      this.switchCircle = "switch-off"
      this.switchClass = "circle-div-off"
      this.labelText = "OFF"
      return;
    }
    this.setState({ toggled: true })
    this.switchCircle = "switch-on"
    this.switchClass = "circle-div-on"
    this.labelText = "ON"
  }
  render() {
    return (
      <div className="toggle-container" onClick={this.toggle}>
        <div className={this.switchCircle}></div>
        <div className={this.switchClass}></div>
        <label for="switch">{this.labelText}</label>
      </div>
    )
  }
}
