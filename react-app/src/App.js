import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import ImageBoard from './Components/ImageBoard';
import unsplash from './api/unsplash';

class App extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            images: []
        };
    }

    onSearchSubmit = async term => 
    {
        const response = await unsplash.get(`/search/photos`, {params: { query: term },});
        this.setState({ images: response.data.results });
    };

    render() 
    {
        return (
            <div className="uiContainer">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageBoard images={this.state.images} />
            </div>
        );
    }
}

export default App;
