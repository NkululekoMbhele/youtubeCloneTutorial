import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
                <h1>Nkululeko Youtube</h1>
                <label htmlFor="search">Search</label>
                <input 
                id="search"
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value) } type="text"/>
                <i class="fa fa-search" aria-hidden="true"></i>
          
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;