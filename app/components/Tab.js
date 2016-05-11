import React from 'react'

class Tab extends React.Component {

  constructor() {
    super()
    this._changeTab = this._changeTab.bind(this)
  }

  _changeTab() {
    this.props.act()
  }

  render () {
    let classes = (this.props.current) ? "tab current-tab" : "tab";
    return (
      <li className={classes} onClick={this._changeTab}>
        <span>{this.props.children}</span>
      </li>
    );
  }
}

export default Tab;
