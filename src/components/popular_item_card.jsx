import React from 'react'

import { IMGE_BASE_URL } from '../config.js'

const PopularItem_card = ({popular_card_data}) => {
    return (
        
            <div className="col-12 col-sm-10 col-md-6 col-xl-4">
                <div className="nft-card card shadow-sm">
                    <div className="card-body">
                        <div className="row align-items-center g-3">
                            <div className="col-4">
                                <div className="img-wrap"><img src={IMGE_BASE_URL + popular_card_data.img_wrap_img} alt />
                                    <div className="badge bg-danger position-absolute px-2 py-1">#{popular_card_data.id}</div>
                                </div>
                            </div>
                            <div className="col-8">
                                {/* Meta Info */}
                                <div className="meta-info">
                                    <div className="name-info d-flex align-items-center mb-3">
                                        <div className="author-img position-relative"><img className="shadow" src={IMGE_BASE_URL + popular_card_data.user_img} alt /><i className="bi bi-check position-absolute bg-success" /></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Trees Growing Seedlings">Trees Growing Seedlings</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@{popular_card_data.user_account}</a></div>
                                    </div>
                                    <div className="price-bid d-flex align-items-center">
                                        <div className="price me-2 me-sm-3">
                                            <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">0.06 ETH</h6>
                                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src={IMGE_BASE_URL + popular_card_data.badge_img} alt />Place bid</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default PopularItem_card
