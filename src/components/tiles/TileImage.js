import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TileImage extends Component {
    tileSelectStyle = () => {
        return {
            backgroundColor: this.props.tile.selected ? '#ff0000' : '#dcdcdc',
            gridColumnEnd: this.props.tile.selected ? 'span 2' : 'span 1',
            gridRowEnd: this.props.tile.selected ? 'span 2' : 'span 1'
        }
    }

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
            <div style={this.tileSelectStyle()} className="tile-container">
                <img style={this.imageSelectStyle()} src={thumbnailUrl} alt='Color' onMouseOver={this.props.markSelected.bind(this, id)} onLoad={this.props.twoSelected.bind(this, id)} />
            </div>
        )
    }
}

// PropTypes
TileImage.propTypes = {
    //     tiles: PropTypes.object.isRequired,
    markSelected: PropTypes.func.isRequired
}

export default TileImage