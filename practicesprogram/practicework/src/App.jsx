// import React from "react";
import React from "react";
// import Counter from "./ClassComponentUsingCounterApp/Counter";
import LifeCycleMethod from "./components/LifeCycleMethod";
// import ImageGallery from "./LifeCycleExample/ImageGallery";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shownComponent: true,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((prev) => ({ shownComponent: !prev.shownComponent }))
          }
        >
          Show/Hide Component
        </button>
        {this.state.shownComponent && <LifeCycleMethod />}
      </div>
    );
  }
}

export default App;
