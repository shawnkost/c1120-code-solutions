import React from "react";

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerTime: 0,
      icon: "fas fa-play",
      intervalId: ""
    }
    this.playbackSwitch = this.playbackSwitch.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }
  playbackSwitch() {
    if (this.state.timerOn === true) {
      clearInterval(this.state.intervalId);
      this.setState({
        timerOn: false,
        icon: "fas fa-play",
        intervalId: ""
      });
      return;
    }
    this.setState({
      timerOn: true,
      icon: "fas fa-pause"
    });
    this.startWatch();
  }
  startWatch() {
    const interval = setInterval(this.updateTime, 1000);
    this.setState({intervalId: interval});
  }
  updateTime() {
    this.setState({
      timerTime: this.state.timerTime + 1
    })
  }
  resetWatch() {
    if (this.state.timerOn === false)
    this.setState({
      timerTime: 0
    })
  }
  render() {
    return (
      <div className="margin-left">
        <div className="time-div" onClick={this.resetWatch}>{this.state.timerTime}</div>
        <i className={this.state.icon} onClick={this.playbackSwitch}></i>
      </div>
    )
  }
}
