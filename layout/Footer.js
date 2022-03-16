import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import img21 from "../assets/pic-21.jpg"
import img22 from "../assets/pic-22.jpg"

function Footer() {
    return (
        <div>
            <section className="site-footer">
                <div className="main-footer pt-142 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40 footer-widget__about">
                                    <Link to="{{route('home')}}" aria-label="logo image">
                                        <img src={Logo} className="footer-widget__logo" width="101"
                                            alt="" />
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.</p>
                                    <ul className="list-unstyled footer-widget__contact">
                                        <li><Link to="#"><i className="azino-icon-telephone"></i>666 888 0000</Link></li>
                                        <li><Link to="#"><i className="azino-icon-email"></i>needhelp@azino.com</Link></li>
                                        <li><Link to="#"><i className="azino-icon-pin"></i>88 Broklyn Golden Street, USA</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget footer-widget__link mb-40">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="list-unstyled footer-widget__link-list">
                                        <li><Link to="{{ route('contact')}}">About us</Link></li>
                                        <li><Link to="{{ route('events')}}">Upcoming Events</Link></li>
                                        <li><Link to="about.html">Site Map</Link></li>
                                        <li><Link to="{{ route('contact')}}">Help</Link></li>
                                        <li><Link to="causes.html">Donate</Link></li>
                                        <li><Link to="{{ route('contact')}}">Contact us</Link></li>
                                        <li><Link to="{{ route('contact')}}">Terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40 footer-widget__blog">
                                    <h3 className="footer-widget__title">Blog</h3>
                                    <ul className="list-unstyled footer-widget__blog">
                                        <li>
                                            <img src={img21} alt="" />
                                            <p>22 May, 2020</p>
                                            <h3><Link to="news-details.html">You can help the poor in need</Link></h3>
                                        </li>
                                        <li>
                                            <img src={img22} alt="" />
                                            <p>22 May, 2020</p>
                                            <h3><Link to="news-details.html">Rise fund for Healthy Food</Link></h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40 footer-widget__newsletter">
                                    <h3 className="footer-widget__title">Newletter</h3>
                                    <p>Signup now to get daily latest news
                                        & updates from us</p>
                                    <form
                                        data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                                        className="footer-widget__newsletter-form mc-form">
                                        <label for="mc-email" className="sr-only">Email Address</label>
                                        <input type="email" name="EMAIL" id="mc-email" className="dynamic-radius"
                                            placeholder="Email address" />
                                        <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                                            <button type="submit" className="thm-btn dynamic-radius">Subscribe Now</button>
                                        </div>

                                    </form>
                                    <div className="mc-form__response"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <span className="scroll-to-top scroll-to-target" data-target="html"><i
                            className="far fa-angle-up"></i></span>
                        <p>© Copyright 2021 by Layerdrops.com</p>
                        <div className="footer-social">
                            <Link to="#" aria-label="twitter"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" aria-label="facebook"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#" aria-label="pinterest"><i className="fab fa-pinterest-p"></i></Link>
                            <Link to="#" aria-label="instagram"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler"><i className="far fa-times"></i></span>

                    <div className="logo-box">
                        <Link to="{{route('home')}}" aria-label="logo image"><img src="assets/images/logo.png" width="101"
                            alt="" /></Link>
                    </div>
                    <div className="mobile-nav__container"></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="azino-icon-email"></i>
                            <Link to="mailto:needhelp@azino.com">needhelp@azino.com</Link>
                        </li>
                        <li>
                            <i className="azino-icon-telephone"></i>
                            <Link to="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__language">
                            <img src="assets/images/resources/flag-1-1.jpg" alt="" />
                            <label className="sr-only" for="language-select">select language</label>

                            <select className="selectpicker" id="language-select">
                                <option value="english">English</option>
                                <option value="arabic">Arabic</option>
                            </select>
                        </div>
                        <div className="mobile-nav__social">
                            <Link to="#" aria-label="twitter"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" aria-label="facebook"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#" aria-label="pinterest"><i className="fab fa-pinterest-p"></i></Link>
                            <Link to="#" aria-label="instagram"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>

                <div className="search-popup__content">
                    <form action="#">
                        <label for="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Footer;

{/* if (document.getElementById("app")) {
    ReactDOM.render( < Navbar / > , document.getElementById("app"));
} */}