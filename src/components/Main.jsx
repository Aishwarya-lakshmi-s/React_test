import React from 'react'

import img1 from '../assets/img/illustrator/1.png'
import img2 from '../assets/img/illustrator/2.png'
import img3 from '../assets/img/illustrator/3.png'
import img4 from '../assets/img/illustrator/4.png'

const Main = () => {
  return (
    <div>
        <div className="divider" />
        <div className="process-wrapper" data-aos="zoom-in" data-aos-duration={500} data-aos-delay={200}>
            <div className="container">
            <div className="row g-4 g-xxl-5 align-items-center justify-content-center">
                <div className="col-12 col-sm-6 col-xl-3">
                {/* Single Card*/}
                <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration={750} data-aos-delay={400}>
                    <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src={img1} alt />
                    <h5 className="mb-3">Create your account &amp; add wallet</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    {/* Step */}
                    <div className="step-number">1</div>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                {/* Single Card*/}
                <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration={750} data-aos-delay={600}>
                    <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src={img2} alt />
                    <h5 className="mb-3">Get approval from our review team</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    {/* Step */}
                    <div className="step-number">2</div>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                {/* Single Card*/}
                <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration={750} data-aos-delay={800}>
                    <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src={img3} alt />
                    <h5 className="mb-3">Create your NFT's &amp; list them for sale</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    {/* Step */}
                    <div className="step-number">3</div>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                {/* Single Card*/}
                <div className="single-process-card card bg-gray border-0" data-aos="fade-up" data-aos-duration={750} data-aos-delay={1000}>
                    <div className="card-body p-4 text-center"><img className="mb-3 mx-auto" src={img4} alt />
                    <h5 className="mb-3">Now sale your items &amp; earn rewards</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    {/* Step */}
                    <div className="step-number">4</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="divider"></div>
    </div>
  )
}

export default Main
