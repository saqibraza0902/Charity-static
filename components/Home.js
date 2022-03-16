import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Logo from '../assets/logo.png';
import img1 from '../assets/pic-1.jpg';
import img4 from '../assets/pic-4.png';
import img5 from '../assets/pic-5.jpg';
import img6 from '../assets/pic-6.jpg';
import img7 from '../assets/pic-7.jpg';
import img8 from '../assets/pic-8.jpg';
import img9 from '../assets/pic-9.jpg';
import img10 from '../assets/pic-10.jpg';
import img11 from '../assets/pic-11.jpg';
import img12 from '../assets/pic-12.jpg';
import img13 from '../assets/pic-13.jpg';
import img14 from '../assets/pic-14.jpg';
import img15 from '../assets/pic-15.jpg';
import img16 from '../assets/pic-16.jpg';
import img17 from '../assets/pic-17.jpg';
import img18 from '../assets/pic-18.jpg';
import img19 from '../assets/pic-19.jpg';
import img20 from '../assets/pic-20.jpg';
import logo_2 from '../assets/logo-2.png';
import Footer from "../layout/Footer";
function Home() {
    return (
        <div>

            <div className="page-wrapper">
                <Navbar />
                <div className="stricky-header stricked-menu stricky-header-two">
                    <div className="container">
                        <div className="logo-box">
                            <Link to=""><img src="assets/images/logo-light.png" width="101" alt="" /></Link>

                        </div>
                        <div className="sticky-header__content">
                            <ul className="main-menu__list dynamic-radius">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/events" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/causes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Causes</Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/contact" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</Link>
                                </li>
                                <li className="search-btn search-toggler nav-item dropdown">
                                    <Link className="nav-link" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="azino-icon-magnifying-glass"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="main-slider main-slider__two">
                    <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                    "el": "#main-slider-pagination",
                    "type": "bullets",
                    "clickable": true
                },
                "autoplay": {
                    "delay": 5000
                }}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="image-layer" ></div>

                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-xl-6 col-lg-12 text-left">
                                            <h2>Donat<span>i</span>on   Can Change   Someone’s Life</h2>
                                            <p>Make a difference in families lives with just $5 a Month</p>
                                            <Link to="#" data-target=".donate-options"
                                                className="scroll-to-target thm-btn dynamic-radius">Start Donating</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-layer" ></div>

                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-xl-6 col-lg-12 text-left">
                                            <h2>Donat<span>i</span>on  Can Change   Someone’s Life</h2>
                                            <p>Make a difference in families lives with just $5 a Month</p>
                                            <Link to="#" data-target=".donate-options"
                                                className="scroll-to-target thm-btn dynamic-radius">Start Donating</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-layer" ></div>

                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-xl-6 col-lg-12 text-left">
                                            <h2>Donat<span>i</span>on   Can Change  Someone’s Life</h2>
                                            <p>Make a difference in families lives with just $5 a Month</p>
                                            <Link to="#" data-target=".donate-options"
                                                className="scroll-to-target thm-btn dynamic-radius">Start Donating</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination" id="main-slider-pagination"></div>
                    </div>
                </section>
                <section className="service-two">
                    <div className="container">
                        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 3, "spaceBetween": 30,
            "breakpoints": {
                "0": {
                    "slidesPerView": 1,
                    "spaceBetween": 0
                },
                "375": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "575": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "768": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "991": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                },
                "1199": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                },
                "1200": {
                    "slidesPerView": 3,
                    "spaceBetween": 30
                }
            }
            }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="service-two__box background-primary wow fadeInUp" data-wow-duration="1500ms">
                                        <div className="service-two__box-inner">
                                            <img src="assets/images/shapes/heart-2-2.png" width="15" alt="" />
                                            <p>Start Donating</p>
                                            <h3><Link to="contact.html">More charity  better lives</Link></h3>
                                            <Link to="contact.html" className="service-two__box-link"><i
                                                className="far fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="service-two__box background-secondary wow fadeInDown" data-wow-duration="1500ms"
                                        data-wow-delay="100ms" >
                                        <div className="service-two__box-inner">
                                            <img src="assets/images/shapes/heart-2-2.png" width="15" alt="" />
                                            <p>Let’s Join</p>
                                            <h3><Link to="become-volunteer.html">Join our  volunteers</Link></h3>
                                            <Link to="become-volunteer.html" className="service-two__box-link"><i
                                                className="far fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="service-two__box background-base wow fadeInUp" data-wow-duration="1500ms"
                                        data-wow-delay="200ms" >
                                        <div className="service-two__box-inner">
                                            <img src="assets/images/shapes/heart-2-2.png" width="15" alt="" />
                                            <p>Quick Funding</p>
                                            <h3><Link to="contact.html">Poor childs education</Link></h3>
                                            <Link to="contact.html" className="service-two__box-link"><i
                                                className="far fa-angle-right"></i></Link>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-two pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-two__image wow fadeInLeft" data-wow-duration="1500ms">
                                    <img src={img4} alt="" />
                                    <div className="about-two__award">
                                        <img src={Logo} alt="" width="201" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-two__content">
                                    <div className="block-title">
                                        <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" /> About Azino Platform
                                        </p>
                                        <h3>Welcome to non-profit charity organization.</h3>
                                    </div>
                                    <p className="mb-40 pr-10">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
                                        do
                                        eiusmod tempor incididunt simply free ut labore et dolore magna aliqua simhy adndnh
                                        qkhhn.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="about-two__box">
                                                <h3><i className="azino-icon-confirmation"></i> Become a Volunteer</h3>
                                                <p>Lorem ipsum dolor sit ametelit sed consectetur notted.</p>
                                            </div>
                                            <div className="about-two__box">
                                                <h3><i className="azino-icon-confirmation"></i> Quick Fundraising</h3>
                                                <p>Lorem ipsum dolor sit ametelit sed consectetur notted.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-two__box-two">
                                                <i className="azino-icon-support"></i>
                                                <h3>You can make a big difference in someone’s life.</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="about.html" className="thm-btn dynamic-radius">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-card">
                    <div className="video-card__bg" >
                    </div>
                    <div className="container text-center pt-120 pb-120">
                        <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" />Help Other People</p>
                        <h3>Our fingerprints on the
                            lives we touch never fade.</h3>
                        <div className="video-card__btn-block">
                            <Link to="cause-details.html" className="thm-btn dynamic-radius">Start Donating</Link>

                            <Link to="https://www.youtube.com/watch?v=k0ZvG_917YI" className="video-popup video-card__btn"><i
                                className="fa fa-play"></i></Link>
                        </div>
                    </div>
                </section>
                <section className="causes-page causes-home pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
                            <div className="col-lg-7">
                                <div className="block-title">
                                    <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" />Popular Causes</p>
                                    <h3>Donate to charity causes  around the world.</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex">
                                <div className="my-auto">
                                    <p className="block-text pr-10 mb-0">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting
                                        industry.
                                        Have
                                        you done google research which works all the time. </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 3, "spaceBetween": 30,
            "breakpoints": {
                "0": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "375": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "575": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "768": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "991": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                },
                "1199": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                },
                "1200": {
                    "slidesPerView": 3,
                    "spaceBetween": 30
                }
            }
            }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="cause-card">
                                        <div className="cause-card__inner">
                                            <div className="cause-card__image">
                                                <img src={img5} alt="" />
                                            </div>
                                            <div className="cause-card__content">
                                                <div className="cause-card__top">

                                                    <div className="cause-card__goals">
                                                        <p><strong>Raised:</strong> $25,270</p>
                                                        <p><strong>Goal:</strong> $30,000</p>
                                                    </div>
                                                </div>
                                                <h3><Link to="cause-details.html">Our donation is hope for poor childrens</Link>
                                                </h3>
                                                <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                                                <div className="cause-card__bottom">
                                                    <Link to="cause-details.html" className="thm-btn dynamic-radius">Donate Now</Link>
                                                    <Link to="#" className="cause-card__share" aria-label="share postr"><i
                                                        className="azino-icon-share"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">

                                    <div className="cause-card">
                                        <div className="cause-card__inner">
                                            <div className="cause-card__image">
                                                <img src={img6} alt="" />
                                            </div>
                                            <div className="cause-card__content">
                                                <div className="cause-card__top">

                                                    <div className="cause-card__goals">
                                                        <p><strong>Raised:</strong> $25,270</p>
                                                        <p><strong>Goal:</strong> $30,000</p>
                                                    </div>
                                                </div>
                                                <h3><Link to="cause-details.html">Education for Poor Children</Link></h3>
                                                <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                                                <div className="cause-card__bottom">
                                                    <Link to="cause-details.html" className="thm-btn dynamic-radius">Donate Now</Link>
                                                    <Link to="#" className="cause-card__share" aria-label="share postr"><i
                                                        className="azino-icon-share"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">

                                    <div className="cause-card">
                                        <div className="cause-card__inner">
                                            <div className="cause-card__image">
                                                <img src={img7} alt="" />
                                            </div>
                                            <div className="cause-card__content">
                                                <div className="cause-card__top">

                                                    <div className="cause-card__goals">
                                                        <p><strong>Raised:</strong> $25,270</p>
                                                        <p><strong>Goal:</strong> $30,000</p>
                                                    </div>
                                                </div>
                                                <h3><Link to="cause-details.html">Promoting The Rights of Children</Link></h3>
                                                <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                                                <div className="cause-card__bottom">
                                                    <Link to="cause-details.html" className="thm-btn dynamic-radius">Donate Now</Link>
                                                    <Link to="#" className="cause-card__share" aria-label="share postr"><i
                                                        className="azino-icon-share"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <section className="faq-one pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="faq-one__content">
                                    <div className="block-title">
                                        <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" />Help People Now</p>
                                        <h3>Charity for the people  you care about.</h3>
                                    </div>
                                    <ul id="accordion" className=" wow fadeInUp list-unstyled" data-wow-duration="1500ms">
                                        <li>
                                            <h2 className="para-title">
                                                <span className="collapsed" role="button" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    <i className="far fa-plus"></i>
                                                    Make a difference in their life
                                                </span>
                                            </h2>
                                            <div id="collapseTwo" className="collapse" role="button" aria-labelledby="collapseTwo"
                                                data-parent="#accordion">
                                                <p>There are many variations of passages the majority have suffered alteration
                                                    in some
                                                    fo injected humour, or randomised words believable.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h2 className="para-title active">
                                                <span className="collapsed" role="button" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="false"
                                                    aria-controls="collapseOne">
                                                    <i className="far fa-minus"></i>
                                                    Make a difference in their life
                                                </span>
                                            </h2>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="collapseOne"
                                                data-parent="#accordion">
                                                <p>There are many variations of passages the majority have suffered alteration
                                                    in some
                                                    fo injected humour, or randomised words believable.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h2 className="para-title">
                                                <span className="collapsed" data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="false" role="button" aria-controls="collapseThree">
                                                    <i className="far fa-plus"></i>
                                                    Make a difference in their life
                                                </span>
                                            </h2>
                                            <div id="collapseThree" className="collapse" aria-labelledby="collapseThree"
                                                data-parent="#accordion">
                                                <p>There are many variations of passages the majority have suffered alteration
                                                    in some
                                                    fo injected humour, or randomised words believable.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-counter__image clearfix">
                                    <div className="about-counter__image-content">
                                        <img src="assets/images/shapes/Linkbout-count-heart-1-1.png" alt="" />
                                        <p>We’re here to support you every step of the way.</p>
                                    </div>
                                    <img src={img8} alt="" className="float-left" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="fact-counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-center">
                                <h3 className="odometer" data-count="8860">00</h3>
                                <p>Fund Raised</p>
                                <Link to="#">+</Link>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center">
                                <h3 className="odometer" data-count="456">00</h3>
                                <p>Fund Raised</p>
                                <Link to="#">+</Link>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center">
                                <h3 className="odometer" data-count="6208">00</h3>
                                <p>Fund Raised</p>
                                <Link to="#">+</Link>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center">
                                <h3 className="odometer" data-count="960">00</h3>
                                <p>Fund Raised</p>
                                <Link to="#">+</Link>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="price-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="price-one__main">
                                    <div className="block-title">
                                        <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" />Popular Causes</p>
                                        <h3>Donate to charity causes  around the world.</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod
                                        tincidunt
                                        ut laoreet dolore magna aliquam erat volutpat. </p>
                                    <div className="price-one__image-box">
                                        <img src={img9} alt="" />
                                        <div className="price-one__image-box-content">
                                            <h3><i className="fa fa-check"></i> Fundraising Platform</h3>
                                            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                lorem is
                                                simply free text quis bibendum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="price-one__single wow flipInY" data-wow-duration="1500ms">
                                            <i className="fa fa-paper-plane"></i>
                                            <p>Silver Package</p>
                                            <h3>$30.00</h3>
                                            <ul className="price-one__list">
                                                <li>Free text goes here</li>
                                                <li>Write here anything</li>
                                                <li>Above mention it</li>
                                                <li>Say once again</li>
                                            </ul>
                                            <Link to="#" className="thm-btn dynamic-radius">Choose Plan</Link>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="price-one__single gold wow flipInY" data-wow-duration="1500ms">
                                            <i className="fa fa-plane"></i>
                                            <p>Gold Package</p>
                                            <h3>$60.00</h3>
                                            <ul className="price-one__list">
                                                <li>Free text goes here</li>
                                                <li>Write here anything</li>
                                                <li>Above mention it</li>
                                                <li>Say once again</li>
                                            </ul>
                                            <Link to="#" className="thm-btn dynamic-radius">Choose Plan</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="gallery-home-two pt-120 pb-120">
                    <div className="container">
                        <img src="assets/images/shapes/gallery-dot-1-1.png" alt="" className="gallery-home-two__dots" />
                        <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 4, "autoplay": { "delay": 5000 }, "breakpoints": {
                    "0": {
                        "spaceBetween": 0,
                        "slidesPerView": 1
                    },
                    "425": {
                        "spaceBetween": 0,
                        "slidesPerView": 1
                    },
                    "575": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "767": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "991": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "1199": {
                        "spaceBetween": 30,
                        "slidesPerView": 4
                    }
                }}'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img10} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-1.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img11} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-2.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img12} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-3.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img13} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-4.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img10} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-1.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img11} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-2.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img12} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-3.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img13} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-4.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img10} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-1.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img11} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-2.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img12} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-3.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="gallery-card">
                                        <img src={img13} className="img-fluid" alt="" />
                                        <div className="gallery-content">
                                            <Link to="assets/images/gallery/gallery-2-4.jpg" className="img-popup"
                                                aria-label="open image"><i className="fal fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="event-home-two pb-120">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
                            <div className="col-lg-7">
                                <div className="block-title">
                                    <p><img src={img14} width="15" alt="" />Latest Event List</p>
                                    <h3>Checkout our upcoming full event list.</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex">
                                <div className="my-auto">
                                    <p className="block-text pr-10 mb-0">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting
                                        industry.
                                        Have
                                        you done google research which works all the time. </p>
                                </div>
                            </div>
                        </div>
                        <div className="event-grid">
                            <div className="event-card">
                                <div className="event-card-inner">
                                    <div className="event-card-image">
                                        <div className="event-card-image-inner">
                                            <img src={img15} alt="" />
                                            <span>20 May</span>
                                        </div>
                                    </div>
                                    <div className="event-card-content">
                                        <h3><Link to="event-details.html">Help for needy people</Link></h3>
                                        <ul className="event-card-list">
                                            <li>
                                                <i className="azino-icon-clock"></i>
                                                <strong>Time:</strong> 9:00am 02:00pm
                                            </li>
                                            <li>
                                                <i className="azino-icon-pin1"></i>
                                                <strong>Location:</strong> New York
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-card">
                                <div className="event-card-inner">
                                    <div className="event-card-image">
                                        <div className="event-card-image-inner">
                                            <img src={img16} alt="" />
                                            <span>20 May</span>
                                        </div>
                                    </div>
                                    <div className="event-card-content">
                                        <h3><Link to="event-details.html">Funding for Food</Link></h3>
                                        <ul className="event-card-list">
                                            <li>
                                                <i className="azino-icon-clock"></i>
                                                <strong>Time:</strong> 9:00am 02:00pm
                                            </li>
                                            <li>
                                                <i className="azino-icon-pin1"></i>
                                                <strong>Location:</strong> New York
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-card">
                                <div className="event-card-inner">
                                    <div className="event-card-image">
                                        <div className="event-card-image-inner">
                                            <img src={img16} alt="" />
                                            <span>20 May</span>
                                        </div>
                                    </div>
                                    <div className="event-card-content">
                                        <h3><Link to="event-details.html">Education for children</Link></h3>
                                        <ul className="event-card-list">
                                            <li>
                                                <i className="azino-icon-clock"></i>
                                                <strong>Time:</strong> 9:00am 02:00pm
                                            </li>
                                            <li>
                                                <i className="azino-icon-pin1"></i>
                                                <strong>Location:</strong> New York
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-card">
                                <div className="event-card-inner">
                                    <div className="event-card-image">
                                        <div className="event-card-image-inner">
                                            <img src={img17} alt="" />
                                            <span>20 May</span>
                                        </div>
                                    </div>
                                    <div className="event-card-content">
                                        <h3><Link to="event-details.html">Donation Day for people</Link></h3>
                                        <ul className="event-card-list">
                                            <li>
                                                <i className="azino-icon-clock"></i>
                                                <strong>Time:</strong> 9:00am 02:00pm
                                            </li>
                                            <li>
                                                <i className="azino-icon-pin1"></i>
                                                <strong>Location:</strong> New York
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news__top news-home  pt-120" >
                    <div className="container">
                        <div className="row align-items-start align-items-md-center flex-column flex-md-row">
                            <div className="col-lg-7">
                                <div className="block-title">
                                    <p><img src="assets/images/shapes/heart-2-1.png" width="15" alt="" />Popular Causes</p>
                                    <h3>Donate to charity causes around the world.</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex">
                                <div className="my-auto">
                                    <p className="block-text pr-10 mb-0">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting
                                        industry.
                                        Have
                                        you done google research which works all the time. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="client-carousel pt-120 pb-120 client-carousel__has-border-top">
                    <section className="news-page pb-120">
                        <div className="container">
                            <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 3, "spaceBetween": 30,
                "breakpoints": {
                    "0": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "375": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "575": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "768": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "991": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "1199": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "1200": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                    }
                }
                }'>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                            <div className="blog-card">
                                                <div className="blog-card__inner">
                                                    <div className="blog-card__image">
                                                        <img src={img18} alt="" />
                                                        <div className="blog-card__date">20 May</div>
                                                    </div>
                                                    <div className="blog-card__content">
                                                        <div className="blog-card__meta">
                                                            <Link to="news-details.html"><i className="far fa-user-circle"></i> Admin</Link>
                                                            <Link to="news-details.html"><i className="far fa-comments"></i> 2
                                                                Comments</Link>
                                                        </div>
                                                        <h3><Link to="news-details.html">Our donation is hope for poor childrens</Link>
                                                        </h3>
                                                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                                                        <Link to="news-details.html" className="blog-card__more"><i
                                                            className="far fa-angle-right"></i>Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">

                                            <div className="blog-card">
                                                <div className="blog-card__inner">
                                                    <div className="blog-card__image">
                                                        <img src={img19} alt="" />
                                                        <div className="blog-card__date">20 May</div>
                                                    </div>
                                                    <div className="blog-card__content">
                                                        <div className="blog-card__meta">
                                                            <Link to="news-details.html"><i className="far fa-user-circle"></i> Admin</Link>
                                                            <Link to="news-details.html"><i className="far fa-comments"></i> 2
                                                                Comments</Link>
                                                        </div>
                                                        <h3><Link to="news-details.html">Education for Poor Children</Link></h3>
                                                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                                                        <Link to="news-details.html" className="blog-card__more"><i
                                                            className="far fa-angle-right"></i>Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">

                                        <div className="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">

                                            <div className="blog-card">
                                                <div className="blog-card__inner">
                                                    <div className="blog-card__image">
                                                        <img src={img20} alt="" />
                                                        <div className="blog-card__date">20 May</div>
                                                    </div>
                                                    <div className="blog-card__content">
                                                        <div className="blog-card__meta">
                                                            <Link to="news-details.html"><i className="far fa-user-circle"></i> Admin</Link>
                                                            <Link to="news-details.html"><i className="far fa-comments"></i> 2
                                                                Comments</Link>
                                                        </div>
                                                        <h3><Link to="news-details.html">Promoting The Rights of Children</Link></h3>
                                                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                                                        <Link to="news-details.html" className="blog-card__more"><i
                                                            className="far fa-angle-right"></i>Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className="container">
                        {/* <h3 style=" margin: 0;
  letter-spacing: $letter-space;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 45px;">Sponsors</h3> */}
                        <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "375": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "575": {
                    "spaceBetween": 30,
                    "slidesPerView": 3
                },
                "767": {
                    "spaceBetween": 50,
                    "slidesPerView": 4
                },
                "991": {
                    "spaceBetween": 50,
                    "slidesPerView": 5
                },
                "1199": {
                    "spaceBetween": 100,
                    "slidesPerView": 5
                }
            }}'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={logo_2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default Home;

