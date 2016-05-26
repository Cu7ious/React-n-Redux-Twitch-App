import React from 'react'
import Tab from '../components/Tab'

class Tabs extends React.Component {

  render () {
    let p = this.props;
    return (
      <div className="app-tabs">
        <ul className="tabs">
          {
            p.items.map((el, idx) => {
              return(
                <Tab
                  key={idx}
                  act={p.acts[idx]}
                  info={p.info[idx]}
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
