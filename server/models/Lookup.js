const axios = require('axios')

exports.getPlaces = (query, cb) => {
  let { location, keyword } = query
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=8000&keyword=${keyword}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => cb(null, res.data))
    .catch(console.error)
}

exports.textSearch = (query, cb) => {
  let { term } = query
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => cb(null, res.data))
    .catch(console.error)
}

exports.geocode = (query, cb) => {
  let { address } = query
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`)
  .then(res => cb(null, res.data))
  .catch(console.error)
}

exports.autocomplete = (query, cb) => {
  let { input } = query
  axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => cb(null, res.data))
    .catch(console.error)
}
