import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  _updateSearch(e) {
    this.setState({inputValue: e.target.value});
  }

  _clearSearchField() {
    this.setState({inputValue: ""});
  }

  render () {
    let clear = this.state.inputValue;
    return (
      <div className="app-searchBar">
        <div className="input-wrapper">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this._updateSearch.bind(this)}
            />
          {
            clear ? <button id="search" onClick={this._clearSearchField.bind(this)} className="clear">⨂</button> : false
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;
