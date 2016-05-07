import React from 'react';
import { connect } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import Tabs from '../components/Tabs';
import SearchBar from '../components/SearchBar';
import ChannelsList from '../components/ChannelsList';

class App extends React.Component {

  render() {
    const { dispatch } = this.props;
    window.dispatch = dispatch;

    return(
      <AppContainer>
        <Tabs
          items={['All', 'Online', 'Offline']}
          dispatcher={dispatch}
          store={this.props.store}
        />
        <SearchBar />
        <ChannelsList />
      </AppContainer>
    );
  }

}

function select(state) {
  return {
    tab: state.tab
  }
}

export default connect(select)(App);
