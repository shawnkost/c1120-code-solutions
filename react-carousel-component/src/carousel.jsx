import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoId: 1 };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }
  previousPhoto() {
    if (this.state.currentPhotoId === 1) {
      this.setState({ currentPhotoId: 5 });
    } else {
      this.setState({ currentPhotoId: this.state.currentPhotoId - 1 });
    }
  }
  nextPhoto() {
    if (this.state.currentPhotoId === 5) {
      this.setState({ currentPhotoId: 1 });
    } else {
      this.setState({ currentPhotoId: this.state.currentPhotoId + 1 });
    }
    this.timeOut()
  }
  timeOut() {
    const time = setTimeout(this.nextPhoto, 3000);
  }
  render() {
    return (
      <div className="container">
        <i className="fas fa-arrow-left" onClick={ this.previousPhoto }></i>
        <Images
          images={ this.props.images }
          currentPhotoId={ this.state.currentPhotoId }
        />
        <i className="fas fa-arrow-right" onClick={ this.nextPhoto }></i>
      </div>
    );
  }
}

function CurrentImage(props) {
  if (props.currentPhotoId === props.value.id) {
    return <img classname="show" src={props.value.src}></img>;
  } else {
    return <img className="hide"></img>;
  }
}

function Images(props) {
  const images = props.images;
  const newImages = images.map((image) => {
    return (
      <CurrentImage
        key={image.id}
        value={image}
        currentPhotoId={props.currentPhotoId}
      />
    );
  });
  return newImages;
}
