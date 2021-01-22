import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoId: 1, timeoutId: null };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.timeOut = this.timeOut.bind(this);
    this.specificPhoto = this.specificPhoto.bind(this);
    this.timeOut();
  }
  previousPhoto() {
    if (this.state.currentPhotoId === 1) {
      this.setState({ currentPhotoId: 5 });
    } else {
      this.setState({ currentPhotoId: this.state.currentPhotoId - 1 });
    }
    clearTimeout(this.state.timeoutId);
    this.timeOut();
  }
  nextPhoto() {
    if (this.state.currentPhotoId === 5) {
      this.setState({ currentPhotoId: 1 });
    } else {
      this.setState({ currentPhotoId: this.state.currentPhotoId + 1 });
    }
    clearTimeout(this.state.timeoutId);
    this.timeOut();
  }
  specificPhoto(id) {
    clearTimeout(this.state.timeoutId);
    this.setState({ currentPhotoId: id });
    this.timeOut();
  }
  timeOut() {
    const time = setTimeout(this.nextPhoto, 3000);
    this.setState({ timeoutId: time });
  }
  render() {
    return (
      <div>
        <div className="container">
          <i className="fas fa-arrow-left" onClick={this.previousPhoto}></i>
          <Images
            images={this.props.images}
            currentPhotoId={this.state.currentPhotoId}
          />
          <i className="fas fa-arrow-right" onClick={this.nextPhoto}></i>
        </div>
        <div className="circles">
          <Circles
            circles={this.props.circles}
            currentPhotoId={this.state.currentPhotoId}
            specificPhoto={this.specificPhoto}
          />
        </div>
      </div>
    );
  }
}

const CurrentImage = (props) => {
  if (props.currentPhotoId === props.value.id) {
    return <img className="show" src={props.value.src}></img>;
  } else {
    return <img className="hide"></img>;
  }
}

const Images = (props) => {
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

const CurrentCircle = (props) => {
  if (props.currentPhotoId === props.value.id) {
    return <i className="fas fa-circle" onClick={props.specificPhoto}></i>;
  } else {
    return <i className="far fa-circle" onClick={props.specificPhoto}></i>;
  }
}

const Circles = (props) => {
  const circles = props.circles;
  const newCircles = circles.map((circle) => {
    return (
      <CurrentCircle
        key={circle.id}
        value={circle}
        currentPhotoId={props.currentPhotoId}
        specificPhoto={() => props.specificPhoto(circle.id)}
      />
    );
  });
  return newCircles;
}
