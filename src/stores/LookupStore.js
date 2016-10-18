import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _searchResult = []

let _markerArr = []

class LookupStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _searchResult = action.payload
          this.emit('CHANGE')
          break
        case 'ADD_MARKER':
          _markerArr.push(action.payload)
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getSearchResult () {
    return _searchResult
  }

  getMarkers () {
    return _markerArr
  }
}

export default new LookupStore()
