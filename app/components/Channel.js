import React from 'react';

class Channel extends React.Component {
  // http://fakeimg.pl/300/E3E3E3/?text=?&font=museo&font_size=200
  render() {
    let p = this.props
    // console.log(p);
    let pic = p.pic ? p.pic : '//fakeimg.pl/300/E3E3E3/?text=?&font=museo&font_size=200'
    let status = p.status ? <span className="online">&#x02713;</span> : <span className="offline">&#x02717;</span>;
    let statusText = p.status ? p.status : false;

    return (
      <figure>
        <div className="image-wraper" style={{backgroundImage: 'url('+ pic +')'}}></div>
        <figcaption>{p.caption}</figcaption>
        <p>{statusText}</p>
        {status}
      </figure>
    );
  }

}

export default Channel;
