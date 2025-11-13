import React from "react";
import Albums from "./Albums";
import PhotosGallery from "./PhotosGallery";
class ImageGallery extends React.Component {
  render() {
    return (
      <div>
        <Albums />
        <PhotosGallery />
      </div>
    );
  }
}
export default ImageGallery;
