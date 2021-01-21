import React from "react";

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: " ",
      error: "",
    };
    this.icon = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const password = event.target.value;
    this.setState({ password: password });
  }
  handleSubmit(event) {
    event.preventDefault();
    const password = this.state.password;
    if (password === " ") {
      this.icon = "fas fa-times red";
      return this.setState({ error: "A password is required." });
    }
    if (password.length < 8) {
      this.icon = "fas fa-times red";
      return this.setState({ error: "Your password is too short." });
    }
    this.setState({ error: "" });
    this.icon = "fas fa-check green";
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="passwords">Password</label>
        <input
          type="password"
          name="passwords"
          id="passwords"
          onChange={this.handleChange}
        />
        <i className={this.icon}></i>
        <div>{this.state.error}</div>
      </form>
    );
  }
}
