export const query = (state = "", action) => {

  switch (action.type) {
    case 'SEARCH_QUERY':
      return action.query
    default:
      return state
  }

}

export const filter = (state = "all", action) => {

  switch (action.type) {
    case 'FILTER_ALL':
      return "all"
    case 'FILTER_ONLINE':
      return "online"
    case 'FILTER_OFFLINE':
      return "offline"
    default:
      return state
  }

}

const dataInitState = {
  fetching: false,
  error: false,
  data: ""
}

export const data = (state = dataInitState, action) => {

  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return Object.assign({}, {fetching: action.fetching}, ...state)

    case 'FETCH_POSTS_SUCCESS':
      return Object.assign({}, {data: action.response, fetching: action.fetching}, ...state)

    case 'FETCH_POSTS_FAILURE':
      return Object.assign({}, {error: action.error, fetching: action.fetching}, ...state)

    default:
      return state
  }

}

export const byQuery = (state = [], action) => {

  switch (action.type) {
    case 'FILTER_BY_QUERY':
      return action.byQuery
    default:
      return state
  }

}
