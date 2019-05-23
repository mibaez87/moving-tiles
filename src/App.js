import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Tiles from './components/tiles/Tiles';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    tiles: [],
    // Add two images to initial enlargedImage array
    enlargedImageIds: [1, 12]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=18')
      .then(res => {
        // Set two images in initial enlargedImage array to true so they are actually enlarged
        res.data[1].selected = true;
        res.data[12].selected = true;
        // Set tiles array to contain images from API
        this.setState({ tiles: res.data })
      })
  }

  // Mark an image as selected to enlarge
  markSelected = (id) => {
    // If enlargedImage array includes current selected image ID, don't run the function
    if (!this.state.enlargedImageIds.includes(id)) {
      // If enlargedImage array doesn't include the current selected image ID,
      // store the enlargedImage values in a new variable.
      // Set the last selected image in the enlargedImage array to the first position and
      // set the current selected image by ID in the second position
      const newEnlargedImageIds = [this.state.enlargedImageIds[1], id];

      // Set state
      this.setState({
        // Set enlargedImage array to new values stored in the variable above
        enlargedImageIds: newEnlargedImageIds,
        // Loop through the tiles array and if an ID is included in the enlargedImage array,
        // set it to true so that it displays as enlarged.
        // Otherwise, set it to false so that it remains small.
        tiles: this.state.tiles.map(tile => {
          if (newEnlargedImageIds.includes(tile.id)) {
            tile.selected = true;
          } else {
            tile.selected = false;
          }
          return tile;
        })
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <div className="grid-container">
              <Route exact path="/" render={props => (
                // Define tiles array and markSelected function as props
                // to be accessed in components
                <Tiles tiles={this.state.tiles} markSelected={this.markSelected} />
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
