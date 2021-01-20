import React from "react";
import ReactDOM from "react-dom";

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("state:", this.state);
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="email" placeholder="Email" onChange={ this.handleChange } value={this.state.value}></input>
        <button>Sign Up</button>
      </form>
    )
  }
}

ReactDOM.render(<NewsletterForm />, document.querySelector("#root"));
