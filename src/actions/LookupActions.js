import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const LookupActions = {
  search (searchInfo) {
    API.search(searchInfo)
  }
}

export default LookupActions
