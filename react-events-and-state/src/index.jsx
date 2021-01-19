import React from "react";
import ReactDOM from "react-dom";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false }
  }
  handleClick() {
    this.setState({ isClicked: true })
  }
  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <button>Thanks!</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={ this.handleClick.bind(this) }>Click Me!</button>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector("#root")
);
