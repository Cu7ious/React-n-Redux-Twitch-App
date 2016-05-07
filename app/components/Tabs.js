import React from 'react';
import Tab from '../components/Tab';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: this.props.store.getState()
    }
  }

  _setState() {
    this.setState({
      current: this.props.store.getState()
    })
  }

  render () {
    let $props = this.props;
    let $state = this.state;
    let tabs = [];

    this.props.items.forEach((el, idx) => {
      tabs.push(
        <Tab
          key={idx}
          index={idx}
          dispatch={$props.dispatcher}
          current={($state.current.tab == idx) ? "current" : false}
        >
          {el}
        </Tab>
      )
    });

    return (
      <div className="app-tabs">
        <ul className="tabs" onClick={this._setState.bind(this)}>
          {tabs}
        </ul>
      </div>
    );
  }

}

export default Tabs;
