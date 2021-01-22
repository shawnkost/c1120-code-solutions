import React from "react";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false,
      openId: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    if (
      this.state.accordionOpen === false ||
      (this.state.accordionOpen === true &&
        id !== 0 &&
        id !== this.state.openId)
    ) {
      this.setState({
        accordionOpen: true,
        openId: id,
      });
    } else {
      this.setState({
        accordionOpen: false,
        openId: 0,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <Topics
          topics={this.props.topics}
          handleClick={this.handleClick}
          openId={this.state.openId}
        />
      </div>
    );
  }
}

function TopicDetails(props) {
  if (props.openId === props.value.id) {
    return <div className="show">{props.value.details}</div>;
  }
  return <div className="hide">{props.value.details}</div>;
}

function TopicName(props) {
  return (
    <div className="topics" onClick={props.handleClick}>
      {props.value.name}
    </div>
  );
}

function Topics(props) {
  const topics = props.topics;
  const newTopics = topics.map((topic) => {
    return (
      <div>
        <TopicName
          key={topic.id}
          value={topic}
          handleClick={() => props.handleClick(topic.id)}
        />
        <TopicDetails value={topic} openId={props.openId} />
      </div>
    );
  });
  return newTopics;
}
