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
    enlargedImageIds: [1, 10]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=18')
      .then(res => {
      res.data[1].selected = true;
        res.data[12].selected = true;
        this.setState({ tiles: res.data })
      })
  }

  // Toggle select
  markSelected = (id) => {
    if (!this.state.enlargedImageIds.includes(id)) {
      const newEnlargedImageIds = [this.state.enlargedImageIds[1], id];

      this.setState({
        enlargedImageIds: newEnlargedImageIds,
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
