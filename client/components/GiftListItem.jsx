import React from 'react'

function GiftListItem(props) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, brewery, country, abv } = props.gift
  return (
    <div className="gift">
      <p className="name">{name}</p>
      <p className="description">{brewery}</p>
      <p>
        <span className="country">{country}</span>
        <span className="abv">{abv} abv</span>
        <a className="cart-link">Add to cart</a>
      </p>
    </div>
  )
}

export default GiftListItem
