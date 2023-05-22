import React from 'react'
import CusomtCard from './CusomtCard'

import { home_card_data } from '../data/home_card_data'

const HomeCard = () => {
  return (    
    <div>
      <div className="divider" />
      <div className="live-bidding-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="section-heading d-flex align-items-center">
                <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                <h2 className="mb-0 ms-3">Live Bid</h2>
              </div>
            </div>
            <div className="col-5 text-end"><a className="btn rounded-pill btn-outline-primary btn-sm border-2 mb-5" href="live-bidding.html">View All Bids</a></div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">

            {
              home_card_data.map((card) => {
                return <CusomtCard card_data = {card} key={card.id} />
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
