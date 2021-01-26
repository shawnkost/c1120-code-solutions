import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoId: 1 };
    this.timeoutId = null;
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
    clearTimeout(this.timeoutId);
    this.timeOut();
  }
  nextPhoto() {
    if (this.state.currentPhotoId === 5) {
      this.setState({ currentPhotoId: 1 });
    } else {
      this.setState({ currentPhotoId: this.state.currentPhotoId + 1 });
    }
    clearTimeout(this.timeoutId);
    this.timeOut();
  }
  specificPhoto(id) {
    clearTimeout(this.timeoutId);
    this.setState({ currentPhotoId: id });
    this.timeOut();
  }
  timeOut() {
    const time = setTimeout(this.nextPhoto, 3000);
    this.timeoutId = time;
  }
  render() {
    return (
      <div>
        <div className="container">
          <i
            className="fas fa-arrow-left arrow-left"
            onClick={this.previousPhoto}
          ></i>
          <Images
            images={this.props.images}
            currentPhotoId={this.state.currentPhotoId}
          />
          <i
            className="fas fa-arrow-right arrow-right"
            onClick={this.nextPhoto}
          ></i>
        </div>
        <div className="circles">
          <Circles
            images={this.props.images}
            currentPhotoId={this.state.currentPhotoId}
            specificPhoto={this.specificPhoto}
          />
        </div>
      </div>
    );
  }
}

const CurrentImage = (props) => {
  return (
    <img
      className={props.currentPhotoId === props.value.id ? "show" : "hide"}
      src={props.value.src}
    ></img>
  );
};

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
};

const CurrentCircle = (props) => {
  return (
    <i
      className={
        props.currentPhotoId === props.value.id
          ? "fas fa-circle circle"
          : "far fa-circle circle"
      }
      onClick={props.specificPhoto}
    ></i>
  );
};

const Circles = (props) => {
  const images = props.images;
  const newImages = images.map((image) => {
    return (
      <CurrentCircle
        key={image.id}
        value={image}
        currentPhotoId={props.currentPhotoId}
        specificPhoto={() => props.specificPhoto(image.id)}
      />
    );
  });
  return newImages;
};
