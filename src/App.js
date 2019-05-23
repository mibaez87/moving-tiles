import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Tiles from './components/tiles/Tiles';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    tiles: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=18')
      .then(res => this.setState({ tiles: res.data }))
  }

  // Set two tiles as selected on init
  twoSelected = (id) => {
    this.setState({
      tiles: this.state.tiles.map(tile => {
        if (tile.id === 1 || tile.id === 10) {
          tile.selected = true;
        }
        return tile;
      })
    });
  }

  // Toggle select
  markSelected = (id) => {
    this.setState({
      tiles: this.state.tiles.map(tile => {
        if (tile.id === id) {
          tile.selected = true;
        } else {
          tile.selected = false;
        }
        return tile;
      })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <div className="grid-container">
              <Route exact path="/" render={props => (
                <Tiles tiles={this.state.tiles} markSelected={this.markSelected} twoSelected={this.twoSelected}/>
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
