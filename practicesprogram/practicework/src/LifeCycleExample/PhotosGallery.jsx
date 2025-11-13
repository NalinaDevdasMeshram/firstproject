import React from "react";
class PhotosGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }
  handlephotosGallery = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const datas = await response.json();
    console.log("datas", datas);
    this.setState({ photos: datas });
  };
  componentDidMount() {
    this.handlephotosGallery();
  }
  render() {
    return (
      <div>
        {this.state.photos.map((photo) => {
          return <img key={photo.id} src={photo.thumbnailUrl} alt="" />;
        })}
      </div>
    );
  }
}
export default PhotosGallery;
