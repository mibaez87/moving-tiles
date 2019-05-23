import React, { Component } from 'react';
import TileImage from './TileImage';
import PropTypes from 'prop-types';

class Tiles extends Component {
  render() {
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