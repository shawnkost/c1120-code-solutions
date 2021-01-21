import React from "react";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accordionOpen: false };
    this.test = this.test.bind(this);
  }
  test(event) {
    if (this.state.accordionOpen === false) {
      this.setState({ accordionOpen: true} );
      return event.target.nextSibling.className = "show";
    } else if (event.target.nextSibling.className === "show") {
      this.setState({ accordionOpen: false });
      const details = document.querySelector(".show");
      details.className = "hide";
    } else {
      this.setState({ accordionOpen: true });
      const details = document.querySelector(".show");
      details.className = "hide";
      return (event.target.nextSibling.className = "show");
    }
  }
  render() {
    return (
      <div className="container">
        <Topics topics={this.props.topics} test={this.test} />
      </div>
    );
  }
}

function TopicDetails(props) {
  return <div className="hide">{props.value.details}</div>
}

function TopicName(props) {
  return <div className="topics" onClick={props.test}>{props.value.name}</div>
}

function Topics(props) {
  const topics = props.topics;
  const newTopics = topics.map((topic) => {
    return (
      <div>
        <TopicName key={topic.name} value={topic} test={props.test} />
        <TopicDetails value={topic} />
      </div>
    );
  });
  return newTopics;
}
