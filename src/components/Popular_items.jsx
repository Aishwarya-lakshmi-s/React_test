import React from 'react'
import PopularItem_card from './popular_item_card'
import { popular_card_data } from '../data/home_card_data'

const PopularItems = () => {
    return (

        <div className="popular-collection-wrapper">
            <div className="container">
                <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
                    <h2 className="mb-0">Popular items in last</h2>
                    <div className='nice-select-dropdown'>
                        <select className="popular-collection-select" id="popularSelect">
                            <option selected value={1} className='option selected null focus'>1 day</option>
                            <option value={7} className='option null'>7 days</option>
                            <option value={15} className='option null'>15 days</option>
                            <option value={30} className='option null'>1 month</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Single Card */}

                    {
                        popular_card_data.map((card) => {
                            return <PopularItem_card popular_card_data={card} key={card.id} />
                        })
                    }


                    <div className="divider" />
                </div>
            </div>
        </div>






    )
}

export default PopularItems
