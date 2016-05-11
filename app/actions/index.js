export const fetchData = () => {

  var channelsData = []
  var queryCounter = 0

  const CHANNELS = [
    'freecodecamp', 'terakilobyte', 'habathcx',
    'RobotCaleb', 'test_channel', 'OgamingSC2',
    'ESL_SC2', 'cretetion', 'sheevergaming'
  ]
  const streamsURL = 'https://api.twitch.tv/kraken/streams?channel=' + CHANNELS.join(',')
  const channelsURL = "https://api.twitch.tv/kraken/channels/"

  const _dispatchFailure = (err, dispatch) => {
    err.queryNumber = ++queryCounter
    dispatch({
      type: 'FETCH_POSTS_FAILURE',
      error: err,
      fetching: false
    })
  }

  const _dispatchSucess = (success, dispatch) => {
    dispatch({
      type: 'FETCH_POSTS_SUCCESS',
      response: success,
      fetching: false
    })
  }

  const _secondQueryChannels = (streamsData) => {
    let mainQueryData = JSON.parse(streamsData).streams
    mainQueryData.map(el => {channelsData.push(el)})
    let compareMask = mainQueryData.map(el => {
      return el.channel.display_name
    })
    let secQCh = CHANNELS.filter(el => {
      return compareMask.indexOf(el) === -1
    })

    return secQCh
  }

  const getURL = (u, dispatch) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', u, true)

      xhr.onload = function() {
        if (this.status == 200) {
          ++queryCounter
          resolve(this.response)
        } else {
          let error = new Error(this.statusText)
          error.code = this.status
          _dispatchFailure('failure', error, dispatch)
          reject(error)
        }
      }

      xhr.onerror = function() {
        queryCounter++
        let error = new Error("Network Error")
        _dispatchFailure(error, dispatch)
        reject(error)
      };

      xhr.send()
    });
  }

  return (dispatch) => {
    dispatch({type: 'FETCH_POSTS_REQUEST', fetching: true})

    getURL(streamsURL, dispatch)
      .then(
        (success) => {
          let secQCh = _secondQueryChannels(success)
          secQCh.forEach((el, i) => {
            getURL(channelsURL + el, dispatch)
              .then(
                (success) => {
                  channelsData.push(JSON.parse(success))
                  if (secQCh.length == i + 1 ) {
                    _dispatchSucess(channelsData, dispatch)
                  }
                },
                err => {
                  let error = new Error("Promise Error")
                  _dispatchFailure(error, dispatch)
                }
              )
          })
        },
        err => {
          let error = new Error("Promise Error")
          _dispatchFailure(error, dispatch)
        }
      )
  }
}

export const filterAll       =  () => ({ type: 'FILTER_ALL', filter: 'all' })
export const filterOnline    =  () => ({ type: 'FILTER_ONLINE', filter: 'online' })
export const filterOffline   =  () => ({ type: 'FILTER_OFFLINE', filter: 'offline' })
export const filterByQuery   =  (arr) => ({ type: 'FILTER_BY_QUERY', byQuery: arr })
export const searchChannels  =  (value) => ({ type: 'SEARCH_QUERY', query: value })
