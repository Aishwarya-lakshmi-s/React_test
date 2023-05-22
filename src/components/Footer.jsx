import React, { useEffect } from 'react';
import shap1 from '../assets/img/core-img/shape1.png'
import logo from '../assets/img/core-img/logo.png';
import logo_white from '../assets/img/core-img/logo-white.png';

import icons8_facebook from '../assets/img/core-img/icons8-facebook.svg';
import icons8_twitter from '../assets/img/core-img/icons8-twitter.svg';
import icons8_instagram from '../assets/img/core-img/icons8-instagram.svg';
import icons8_slack from '../assets/img/core-img/icons8-slack.svg';
import icons8_player from '../assets/img/core-img/icons8-player.svg';


const Footer = () => {

    useEffect(() => {
        // :: Sticky Header 

        let navarToggler = document.querySelector('.navbar-toggler');
        let header = document.querySelector('.header-area');
    

        if (navarToggler) {
            navarToggler.addEventListener('click', function () {
                header.classList.toggle('mobile-menu-open');
            });
        }

        if (header) {
            function stickyNavigation() {
                if (window.pageYOffset > 10) {
                    header.classList.add('sticky-on');
                } else {
                    header.classList.remove('sticky-on');
                }
            }
        
            window.addEventListener('load', stickyNavigation);
            window.addEventListener('scroll', stickyNavigation);
        }

        // :: Scroll to Top

        let scrollButton = document.getElementById('scrollTopButton');
        let topdistance = 600;

        if (scrollButton) {
            window.addEventListener('scroll', function () {
                if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
                    scrollButton.classList.add('scrolltop-show');
                    scrollButton.classList.remove('scrolltop-hide');
                } else {
                    scrollButton.classList.add('scrolltop-hide');
                    scrollButton.classList.remove('scrolltop-show');
                }
            });

            scrollButton.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }


    }, []);

  return (
    <div>
    <footer className="footer-area pb-120 pt-120" style={{ backgroundImage: "url('../assets/img/bg-img/1.jpg')" }}>
      <img className="footer-bg-shape" src={shap1} alt="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" />
      
      <div className="container">
        <div className="row">
          {/* Footer Widget */}
          <div className="col-12 col-lg-5">
            <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end">
              <a className="d-block mb-4" href="index.html">
                <img className="light-logo" src={logo} alt="" />
                <img className="dark-logo" src={logo_white} alt="" />
              </a>
              <p>It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <p className="mb-0">Call: +123 456 789 <br /> Email: help@example.com</p>
              {/* Social Icon */}
              <h5 className="mt-4 mb-3">Join the community</h5>
              <div className="footer-social-icon d-flex align-items-center flex-wrap">
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facbook"><img src={icons8_facebook} alt="" /></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><img src={icons8_twitter} alt="" /></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><img src={icons8_instagram} alt="" /></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Slack"><img src={icons8_slack} alt="" /></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><img src={icons8_player} alt="" /></a>
              </div>
              {/* Newsletter Form */}
              <div className="newsletter-form mt-5 me-5">
                <form className="d-flex align-items-stretch" action="#">
                  <input className="form-control" type="email" placeholder="Enter email" />
                  <button className="btn btn-warning px-3" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          {/* Footer Widget */}
          <div className="col-12 col-lg-7">
            <div className="row g-4">
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Explore</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="featured-items.html">Featured Drops</a></li>
                    <li><a href="live-bidding.html">Live Auctions</a></li>
                    <li><a href="collections.html">Collections</a></li>
                    <li><a href="top-seller.html">Top Seller</a></li>
                    <li><a href="top-buyer.html">Top Buyer</a></li>
                    <li><a href="item-details.html">Item Details</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Marketplace</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Cards</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Domain</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Videos</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 className="mb-4">Company</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Licences</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
          {/* Copywrite Text */}
          <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
            <p className="mb-0">2022 &copy; All rights reserved by <a href="https://themeforest.net/user/designing-world/portfolio" target="_blank" rel="noreferrer">Designing World</a></p>
          </div>
          {/* Footer Nav */}
          <div className="footer-nav">
            <ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div id="scrollTopButton"><i class="bi bi-arrow-up-short"></i></div>

    </div>
  );
};

export default Footer;
