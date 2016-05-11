import React from 'react';

class SearchBar extends React.Component {

  constructor() {
    super()
    this._query = ""
    this._updateQuery = this._updateQuery.bind(this)
    this._clearQuery = this._clearQuery.bind(this)
    this._filterByQuery = this._filterByQuery.bind(this)
  }

  // componentDidUpdate() {
  // }

  _updateQuery(e) {
    let p = this.props
    this.props.acts.searchChannels(this._query = e.target.value)
    // console.log(p);
    if (p.data.data) {
      p.acts.filterByQuery(this._filterByQuery())
    }
  }

  _clearQuery(e) {
    if (e.type !== 'click') {
      if (e.which !== 27) return;
    }
    this.props.acts.searchChannels("")
  }

  _filterByQuery() {
    let data = this.props.data.data
    let result = []
    data.filter((el, i) => {
      let name = el.channel ? el.channel.display_name : el.display_name
      let filterResultRaw = name.search(this._query)
      let filterResultLowerCase = name.toLowerCase().search(this._query)
      if (filterResultRaw !== -1 || filterResultLowerCase !== -1) result.push(name)
    });

    return result
  }

  render () {
    let t = this
    let p = this.props

    return (
      <div className="app-searchBar">
        <div className="input-wrapper">
          <input type="text" value={p.query}
            onChange={t._updateQuery}
            onKeyDown={t._clearQuery}
          />
        {p.query ? <button id="search" onClick={t._clearQuery} className="clear">⨂</button> : false}
        </div>
      </div>
    );
  }
}

export default SearchBar;
