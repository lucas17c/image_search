import React, { Component } from 'react';

class ImageCard extends Component 
{
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() 
    {
        
        return(
            <div className="imageCard">
                <img 
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    };
};

export default ImageCard;