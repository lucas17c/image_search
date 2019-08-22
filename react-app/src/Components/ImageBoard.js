import React, { Component } from 'react';
import './ImageBoard.css';
import ImageCard from './ImageCard';

class ImageBoard extends Component 
{
    render()
    {
        return (
            <div className="imageBoard">
                {
                    this.props.images.map(image => {
                        return (
                            <ImageCard
                                key={image.id} 
                                image={image}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default ImageBoard;