import React from 'react';

class Tabs extends React.Component {
  render () {
    return (
      <ul>{this.props.children}</ul>
    );
  }
}

export default Tabs;
