import React from 'react';
import Channel from '../components/Channel';

class ChannelsList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let p = this.props
    let channels = p.data.data ? p.data.data : false
    let channelsList = []
    let twitchURL = "//twitch.tv/"

    if (channels) {

      switch (p.filter) {
        case 'online':
          pushChannels(channels.online);
          break
        case 'offline':
          pushChannels(channels.offline);
          break
        default:
          pushChannels( channels.online.concat(channels.offline) )
      }

      function pushChannels (channelsArray) {
        channelsArray.forEach((el, i) => {
          let logo    =  el.channel ? el.channel.logo : el.logo
          let caption =  el.channel ? el.channel.display_name : el.display_name
          let status  =  el.channel ? el.channel.status : false
          let link    =  el.channel ? twitchURL + el.channel.name : twitchURL + el.name

          if (!p.query) {
            channelsList.push(
              <Channel key={i} pic={logo} link={link}
                caption={caption} status={status}
              />
            )
          } else if (p.query && p.byQuery.length) {
            if (p.byQuery.indexOf(caption) !== -1) {
              channelsList.push(
                <Channel key={i} pic={logo} link={link}
                  caption={caption} status={status}
                />
              )
            }
          }
        })
      }
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
