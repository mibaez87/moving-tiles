import React, { Component } from 'react';
import TileImage from './TileImage';
import PropTypes from 'prop-types';

class Tiles extends Component {
  render() {
    // Loop tiles array to capture and set each tile value and
    // receive markSelected function as props
    return this.props.tiles.map((tile) => (
      <TileImage key={tile.id} tile={tile} markSelected={this.props.markSelected} />
    ));
  }
}

// PropTypes
Tiles.propTypes = {
  tiles: PropTypes.array.isRequired,
  markSelected: PropTypes.func.isRequired
}

export default Tiles;