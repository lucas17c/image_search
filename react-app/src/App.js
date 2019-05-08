import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import ImageBoard from './Components/ImageBoard';
import ImageCard from './Components/ImageCard';


class App extends Component 
{
    render() 
        {
            return (
                <div className="app ui container">
                <SearchBar />
                </div>
            );
        }
}

export default App;
