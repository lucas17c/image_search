import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component 
{
    constructor() 
    {
        super();
        this.state = 
        {
            term: ''
        }
    }

    onFormSubmit = e => 
    {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    onInputChange = e => 
    {
        this.setState({ term: e.target.value });
    };
    
    render() 
    {
        return (<div className="searchBar">
            <form
                className="form"
                onSubmit={this.onFormSubmit}
            >
                <div className="field">
                    <input 
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                        placeholder="Search beautiful photos"
                        className="search"
                    />
                    <button
                        type="submit"
                    ></button>
                </div>
            </form>
        </div>
        );
    };
};

export default SearchBar;