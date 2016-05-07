import React from 'react';
import { changeTab } from '../actions'

class Tab extends React.Component {

  constructor(props) {
    super(props);
  }

  _dispatchAction() {
    let dispatch = this.props.dispatch;
    dispatch(changeTab(this.props.index));
  }

  render () {
    var cName = (this.props.current) ? "tab current-tab" : "tab";
    return (
      <li className={cName} onClick={this._dispatchAction.bind(this)}>
        <span>{this.props.children}</span>
      </li>
    );
  }
}

export default Tab;
