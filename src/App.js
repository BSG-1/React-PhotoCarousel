import React, { Component } from "react";
import { imagesArray } from "./data/images";
import { ImageComponent } from "./components/imageComponent";
import { ProgressComponent } from "./components/ProgressComponent";

class App extends Component {
  state = {
    imagesArray,
    currentImage: 0
  };

  render() {
    return (
      <div className="App">
        <ImageComponent imageUrl={imagesArray[this.state.currentImage]} />
        <ProgressComponent
          currentIndex={this.state.currentImage + 1}
          totalImages={this.state.imagesArray.length}
        />
      </div>
    );
  }
}

export default App;
