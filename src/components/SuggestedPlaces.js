import React, { Component } from 'react'
import uuid from 'uuid'

export default class SuggestedPlaces extends Component {
  render () {
    const { places } = this.props
    let ratingSize
    return (
      <div className="allPlaces row">
          {places.map(place => {
            let { name, rating, photos, formatted_address, geometry } = place
            ratingSize = {maxWidth: `${150 * (parseFloat(rating) / 5)}px`}
            return (
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={uuid()}>
                <div className="placeCard">
                {photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${process.env.GOOGLE_API_KEY}`} /> : <img src="../images/placeholder.png" />}
                <div className="cardDetails">
                  <div className="info col-xs-12">
                    <h3>{name}</h3>
                    <p>{formatted_address}</p>
                    <p>{rating}</p>
                    {/* {rating ? <span className="ratingStars" style={ratingSize}><img src="../images/stars.png" /></span> : null} */}
                  </div>
                </div>
                  <div className="map col-xs-12">
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${geometry.location.lat},${geometry.location.lng}&zoom=15&size=600x200&maptype=roadmap&markers=color:gray%7C${geometry.location.lat},${geometry.location.lng}&key=${process.env.GOOGLE_API_KEY}`} />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
