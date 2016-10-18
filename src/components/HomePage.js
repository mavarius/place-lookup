import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SuggestedPlaces from './SuggestedPlaces'
import LookupStore from '../stores/LookupStore'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      places: LookupStore.getSearchResult(),
      markers: LookupStore.getMarkers()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    LookupStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    LookupStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      places: LookupStore.getSearchResult(),
      markers: LookupStore.getMarkers()
    })
  }

  render () {
    const { places } = this.state
    console.log('places: ', places)

    return (
      <div className="container">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <SuggestedPlaces {...this.state} />
        </div>
      </div>
    )
  }
}
