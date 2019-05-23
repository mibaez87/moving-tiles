import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TileImage extends Component {
    // Add background color and increase CSS grid span to enlarge a tile
    // when it's selected
    tileSelectStyle = () => {
        return {
            backgroundColor: this.props.tile.selected ? '#000' : '#dcdcdc',
            gridColumnEnd: this.props.tile.selected ? 'span 2' : 'span 1',
            gridRowEnd: this.props.tile.selected ? 'span 2' : 'span 1'
        }
    }

    // Change cursor to pointer when hovering over selected image and
    // increase image size to display as enlarged when selected
    imageSelectStyle = () => {
        return {
            cursor: 'pointer',
            height: this.props.tile.selected ? '250px' : '150px',
            width: this.props.tile.selected ? '250px' : '150px'
        }
    }

    render() {
        const { thumbnailUrl, id } = this.props.tile;

        return (
            // Apply background color and span size to container around image and
            // receive markSelected function as props that will be triggered as a hover effect
            <div style={this.tileSelectStyle()} className="tile-container">
                {/* Apply cursor and image size to image within container */}
                <img style={this.imageSelectStyle()} src={thumbnailUrl} alt='Color' onMouseOver={this.props.markSelected.bind(this, id)} />
            </div>
        )
    }
}

// PropTypes
TileImage.propTypes = {
    markSelected: PropTypes.func.isRequired
}

export default TileImage