import React from "react";
class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      Albums: [],
    };
  }
  handlefetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log("data", data);
    this.setState({ Albums: data });
  };
  componentDidMount() {
    this.handlefetchData();
  }
  render() {
    return (
      <div>
        {this.state.Albums.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    );
  }
}
export default Albums;
