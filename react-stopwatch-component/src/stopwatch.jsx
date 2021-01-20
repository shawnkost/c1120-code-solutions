import React from "react";

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerTime: 0,
      intervalId: null
    }
    this.icon = ""
    this.playbackSwitch = this.playbackSwitch.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }
  playbackSwitch() {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
      return;
    }
    this.startWatch();
  }
  startWatch() {
    const interval = setInterval(this.updateTime, 1000);
    this.setState({ intervalId: interval });
  }
  updateTime() {
    this.setState({ timerTime: this.state.timerTime + 1 })
  }
  resetWatch() {
    if (this.state.intervalId === null)
    this.setState({ timerTime: 0 })
  }
  render() {
    if (this.state.intervalId !== null) {
      this.icon = "fas fa-pause"
    } else {
      this.icon = "fas fa-play";
    }
    return (
      <div className="margin-left">
        <div className="time-div" onClick={ this.resetWatch }>{ this.state.timerTime }</div>
        <i className={ this.icon } onClick={ this.playbackSwitch }></i>
      </div>
    )
  }
}
