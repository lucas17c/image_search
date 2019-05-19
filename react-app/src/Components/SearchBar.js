import React, { Component } from 'react';

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
        return (<div className="searchBar ui segment">
            <form
                className="ui form"
                onSubmit={this.onFormSubmit}
            >
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                    />
                </div>
            </form>
        </div>
        );
    };
};

export default SearchBar;