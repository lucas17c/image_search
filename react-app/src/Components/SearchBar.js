import React, { Component } from 'react';

class SearchBar extends Component 
{
    render() 
    {
        return (
            <div className="searchBar ui element">
                <form
                className="ui form"
                >
                    <label>What images are you looking for?</label>
                    <input 
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;