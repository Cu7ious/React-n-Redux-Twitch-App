import React from 'react'
import Tab from '../components/Tab'

class Tabs extends React.Component {

  render () {
    let p = this.props;
    return (
      <div className="app-tabs">
        <ul className="tabs">
          {
            this.props.items.map((el, idx) => {
              return(
                <Tab key={idx}
                  act={p.acts[idx]}
                  current={(p.current === el) ? "current" : false}>
                  {el}
                </Tab>
              )
            })
          }
        </ul>
      </div>
    );
  }

}

export default Tabs;
