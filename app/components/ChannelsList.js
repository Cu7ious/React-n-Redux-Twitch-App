import React from 'react';
import Channel from '../components/Channel';

class ChannelsList extends React.Component {

  render() {
    let pic = "//s.jtvnw.net/jtv_user_pictures/hosted_images/";
    return(
      <section className="app-channels-list">
        <Channel pic={pic + 'dreamhackhs_fp_DHA16.png'} caption="FreeCodeCamp" />
        <Channel pic={pic + 'intelbz_fp_dha16.jpg'} caption="someOtherChannel" status="Some cool code talk" />
        <Channel pic={pic + 'levent_balim_tr_frontpage_thumbnail.png'} caption="andAnotherOne" />
      </section>
    )
  }

}

export default ChannelsList;
