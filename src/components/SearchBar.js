import React, { Component } from 'react'

import LookupActions from '../actions/LookupActions'

export default class SearchBar extends Component {
  handleSearch (e) {
    e.preventDefault()
    let { searchTerm } = this.refs

    let query = `term=${searchTerm.value}`

    LookupActions.search(query)
  }

  render () {
    return (
      <div className="searchBlock col-sm-12">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="searchTerm" required />
          <div>
            <button className="btn btn-primary searchBtn">Search</button>
          </div>
        </form>
      </div>
    )
  }
}
