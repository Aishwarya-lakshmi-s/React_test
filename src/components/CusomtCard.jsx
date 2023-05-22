import React from 'react'
import { IMGE_BASE_URL } from '../config.js'

import heart_outline from '../assets/img/core-img/heart-outline.png';
import heart_fill from '../assets/img/core-img/heart-fill.png';
const CusomtCard = ({card_data}) => {

    // const IMGE_BASE_URL = 'https://designing-world.com/funto-v1.2.1/'

  return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            {/* Featured Card */}
            <div className="nft-card card shadow-sm">
            <div className="card-body">
                <div className="img-wrap"><img src={ IMGE_BASE_URL + card_data.img_wrap_img } alt />
                {/* Badge */}
                <div className={`badge ${ (card_data.badge_bk === 'red') ? 'bg-danger' : 'bg-dark'} position-absolute`}><img src={ IMGE_BASE_URL + card_data.badge_img } alt />New Bid</div>
                {/* Dropdown */}
                <div className="dropdown">
                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownqwa22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                    {/* Dropdown Menu */}
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownqwa22">
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share" />Share</a></li>
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag" />Report</a></li>
                    <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                    </ul>
                </div>
                {/* Bid End */}
                <div className="bid-ends" data-date="March 31, 2023 14:19:54">
                    <div><span className="days" /><span>Days</span></div>
                    <div><span className="hours" /><span>Hours</span></div>
                    <div><span className="minutes" /><span>Min</span></div>
                    <div><span className="seconds" /><span>Sec</span></div>
                </div>
                </div>
                {/* Others Info */}
                <div className="row gx-2 align-items-center mt-3">
                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />{(card_data.stock_count > 0) ? card_data.stock_count +' stock available' : 'Not available'}</span></div>
                <div className="col-4 text-end">
                
                    <button className="wishlist-btn" type="button"><img className='wishlist-btn-custom' src={card_data.is_fav ? heart_fill :heart_outline} alt="fav" /></button>
                </div>
                </div>
                {/* Meta Info */}
                <div className="row gx-2 align-items-center mt-2">
                <div className="col-8">
                    <div className="name-info d-flex align-items-center">
                    <div className="author-img position-relative"><img className="shadow" src={ IMGE_BASE_URL + card_data.user_img } alt /><i className="bi bi-check position-absolute bg-success" /></div>
                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title={card_data.title}>{card_data.title}</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@{card_data.user_account}</a></div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                    <h6 className="mb-0">{card_data.eth}</h6>
                    </div>
                </div>
                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default CusomtCard
