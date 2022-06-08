import React from 'react'

import GiftListItem from './GiftListItem'

import giftData from '../../data/gifts'

function GiftList() {
  return (
    <div className="giftlist">
      <p className="welcome">
        Welcome!
      </p>
      {giftData.gifts.map((gift) => {
        return <GiftListItem key={gift.id} gift={gift} />
      })}
    </div>
  )
}

export default GiftList
