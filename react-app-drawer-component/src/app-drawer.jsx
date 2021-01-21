import React from "react";

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuClicked: false };
    this.menuItems = [
      { name: "Menu" },
      { name: "About" },
      { name: "Get Started" },
      { name: "Sign in" },
    ];
    this.icon = "fas fa-bars";
    this.handlesClick = this.handlesClick.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  handlesClick() {
    this.setState({ menuClicked: true });
  }
  closeDrawer(event) {
    if (event.target.classList.contains("link") || (event.target.classList.contains("container"))) {
      this.setState({ menuClicked: false });
    }
  }
  render() {
    return (
      <div className={this.state.menuClicked ? 'container gray' : "container"} onClick={ this.closeDrawer }>
        <i className={ this.state.menuClicked ? 'i-hide' : this.icon} onClick={ this.handlesClick }></i>
        <div className={ this.state.menuClicked ? 'style-on' : 'style-off' }>
          <LoopMenu menuItems={ this.menuItems } closeDrawer={this.closeDrawer} />
        </div>
      </div>
    );
  }
}

function CreateElement(props) {
  return (
    <div onClick={ props.closeDrawer } className="link">{props.value.name}</div>
  )
}

function LoopMenu(props) {
  const menuItems = props.menuItems;
  const loopItems = menuItems.map((item) => {
    return <CreateElement key={ item.name } value={ item } closeDrawer={ props.closeDrawer }/>;
  });
  return loopItems;
}
