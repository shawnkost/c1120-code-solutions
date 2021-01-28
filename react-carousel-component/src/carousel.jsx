import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoIndex: 0 };
    this.timeoutId = null;
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.specificPhoto = this.specificPhoto.bind(this);
    this.timeOut();
  }
  previousPhoto() {
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const imagesArray = this.props.images;
    if (currentPhotoIndex === 0) {
      this.setState({ currentPhotoIndex: imagesArray.length - 1 });
    } else {
      this.setState({ currentPhotoIndex: currentPhotoIndex - 1 });
    }
    clearTimeout(this.timeoutId);
    this.timeOut();
  }
  nextPhoto() {
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const imagesArray = this.props.images;
    if (currentPhotoIndex === imagesArray.length - 1) {
      this.setState({ currentPhotoIndex: 0 });
    } else {
      this.setState({ currentPhotoIndex: currentPhotoIndex + 1 });
    }
    clearTimeout(this.timeoutId);
    this.timeOut();
  }
  specificPhoto(index) {
    clearTimeout(this.timeoutId);
    this.setState({ currentPhotoIndex: index });
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
            currentPhotoIndex={this.state.currentPhotoIndex}
          />
          <i
            className="fas fa-arrow-right arrow-right"
            onClick={this.nextPhoto}
          ></i>
        </div>
        <div className="circles">
          <Circles
            images={this.props.images}
            currentPhotoIndex={this.state.currentPhotoIndex}
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
      className={props.currentPhotoIndex === props.index ? "show" : "hide"}
      src={props.value.src}
    ></img>
  );
};

const Images = (props) => {
  const images = props.images;
  const newImages = images.map((image, index) => {
    return (
      <CurrentImage
        key={image.id}
        value={image}
        currentPhotoIndex={props.currentPhotoIndex}
        index={index}
      />
    );
  });
  return newImages;
};

const CurrentCircle = (props) => {
  return (
    <i
      className={
        props.currentPhotoIndex === props.index
          ? "fas fa-circle circle"
          : "far fa-circle circle"
      }
      onClick={props.specificPhoto}
    ></i>
  );
};

const Circles = (props) => {
  const images = props.images;
  const newImages = images.map((image, index) => {
    return (
      <CurrentCircle
        key={image.id}
        value={image}
        currentPhotoIndex={props.currentPhotoIndex}
        specificPhoto={() => props.specificPhoto(index)}
        index={index}
      />
    );
  });
  return newImages;
};
