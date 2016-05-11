import React from 'react';
import Channel from '../components/Channel';

class ChannelsList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let p = this.props
    // console.log(p);
    let channels = p.data.data ? p.data.data : false
    let channelsList = []

    if (channels.length) {
      channels.forEach((el, i) => {
        let logo = el.channel ? el.channel.logo : el.logo
        let caption = el.channel ? el.channel.display_name : el.display_name
        let status = el.channel ? el.channel.status : false

        let pushChannels = () => {
          if (p.query && p.byQuery.length) {
            if (p.byQuery.indexOf(caption) !== -1) {
              channelsList.push(
                <Channel key={i} pic={logo}
                  serchIndex={i} caption={caption} status={status}
                />
              )
            }
          } else if (!p.query) {
            channelsList.push(
              <Channel key={i} pic={logo}
                serchIndex={i} caption={caption} status={status}
              />
            )
          }
        }

        switch (p.filter) {
          case 'online': if (status) pushChannels(); break
          case 'offline': if (!status) pushChannels(); break
          default: pushChannels()
        }
      });
    }

    return(
      <section className="app-channels-list">
        {p.data.fetching ? <div className="app-preloader"><span></span></div> : false}
        {channelsList}
      </section>
    )
  }

}

export default ChannelsList;
