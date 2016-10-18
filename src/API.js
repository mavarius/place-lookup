import axios from 'axios'
import ServerAction from './actions/ServerAction'

const API = {
  search (query) {
    axios.get(`/api/googleApi/textsearch?${query}`)
      .then(res => {
        let data = res.data.results
        ServerAction.receiveSearchResults(data)
      })
      .catch(console.error)
  }
}

export default API
