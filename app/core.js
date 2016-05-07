import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import mainReducer from './reducers';

let store = createStore(mainReducer);

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app')
);

store.subscribe(() => {
  console.log(store.getState());
});

// function _askWikipedia(q) {
//   let url = 'https://api.twitch.tv/kraken/streams/featured?limit=5&callback=parseResponse';
//     // encodeURIComponent(q) +
//
//     let dataSrc = document.createElement('script');
//     dataSrc.src = url;
//     document.body.appendChild(dataSrc);
//
//     window.parseResponse = function(data) {
//       console.log(data);
//     }
// }

// _askWikipedia();
