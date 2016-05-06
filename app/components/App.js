import React from 'react';
import { connect } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import Tabs from '../components/Tabs';
import Tabs from '../components/Tab';

class App extends React.Component {

  render() {
    const { dispatch } = this.props;

    window.dispatch = dispatch;

    return(
      <AppContainer data={this.props}>
        <Tabs>
          <Tab>All</Tab>
          <Tab>Online</Tab>
          <Tab>Offline</Tab>
        </Tabs>
      </AppContainer>
    );
  }

  // <SearchBar />
  // <TabContent />

}

function select(state) {
  return {
    tab: state.tab
  }
}

export default connect(select)(App);
