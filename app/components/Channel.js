import React from 'react';

class Channel extends React.Component {

  render() {
    let statusText = this.props.status ? this.props.status : false;
    let status = statusText ? <span className="online">&#x02713;</span> : <span className="offline">&#x02717;</span>;

    return (
      <figure>
        <div className="image-wraper" style={{backgroundImage: 'url('+this.props.pic+')'}}></div>
        <figcaption>{this.props.caption}</figcaption>
        <p>{statusText}</p>
        {status}
      </figure>
    );
  }

}

export default Channel;
