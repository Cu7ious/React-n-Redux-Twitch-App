import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import * as reducers from './reducers'
import thunk from 'redux-thunk'

// ** EDUCATIONAL ** //
// ping middleware - simplest Middleware example
const ping = function ping(store) {
  return function (next) {
    return function (action) {
      console.log('ping middleware was triggered');
      return next(action);
    };
  };
};
// ** EDUCATIONAL ** //

const store = createStore(
  combineReducers(
    {
      data: reducers.data,
      query: reducers.query,
      filter: reducers.filter,
      byQuery: reducers.byQuery
    }
  ),
  applyMiddleware(thunk, ping)
)

// ** DEBUG CODE ** //
import { fetchData, searchChannels, filterAll, filterOnline, filterOffline, filterByQuery } from './actions'
window.store = store
window.fetchData = fetchData
window.searchChannels = searchChannels
window.filterAll = filterAll
window.filterOnline = filterOnline
window.filterOffline = filterOffline
window.filterOffline = filterByQuery
// ** DEBUG CODE ** //

const run = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}

run();
store.subscribe(run)
