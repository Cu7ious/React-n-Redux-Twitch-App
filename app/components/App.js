import React from 'react';
import { connect } from 'react-redux';
import { fetchData, searchChannels, filterAll, filterOnline, filterOffline, filterByQuery } from '../actions'
import Tabs from '../components/Tabs';
import SearchBar from '../components/SearchBar';
import ChannelsList from '../components/ChannelsList';

const mapStateToProps = (state) => ({
  data: state.data,
  query: state.query,
  filter: state.filter,
  byQuery: state.byQuery
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  searchChannels: (v) => dispatch(searchChannels(v)),
  filterAll: () => dispatch(filterAll()),
  filterOnline: () => dispatch(filterOnline()),
  filterOffline: () => dispatch(filterOffline()),
  filterByQuery: (a) => dispatch(filterByQuery(a))
})

class App extends React.Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    let p = this.props
    // console.log(p);
    return(
      <div>
        <Tabs current={p.filter}
          acts={[p.filterAll, p.filterOnline, p.filterOffline]}
          items={['all', 'online', 'offline']} />
        <SearchBar acts={{
            searchChannels: p.searchChannels,
            filterByQuery: p.filterByQuery
          }}
          query={p.query} data={p.data}
        />
        <ChannelsList data={p.data} filter={p.filter}
          query={p.query} byQuery={p.byQuery}
        />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
