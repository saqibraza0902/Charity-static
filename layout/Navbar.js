import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./navbar.css";
function Navbar() {
    return (
        <div>
            <div className="main-header__two">
                <div className="main-header__top">
                    <div className="container">
                        <p>Welcome to non profit charity platform</p>
                        <div className="main-header__language">
                            <div className="main-header__language-image" >
                            </div>
                            <label for="language-header" className="sr-only">select language</label>
                            <select className="selectpicker" id="language-header">
                                <option value="#googtrans(en|en)">EN</option>
                                <option value="#googtrans(en|ar)">AR</option>
                            </select>
                        </div>

                        <div className="main-header__social">
                            <a href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="facebook"><i className="fab fa-facebook-square"></i></a>
                            <a href="#" aria-label="pinterest"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>


                <div className="header-upper">
                    <div className="container">
                        <div className="logo-box navbar-expand-lg navbar-light">
                            <a href="" aria-label="logo image"><img src={Logo} width="101" alt="" /></a>
                            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="header-info" id="navbarSupportedContent">
                            <div className="header-info__box">
                                <i className="azino-icon-email1"></i>
                                <div className="header-info__box-content">
                                    <h3>Email</h3>
                                    <p><a href="mailto:needhelp@azino.com">needhelp@azino.com</a></p>
                                </div>
                            </div>
                            <div className="header-info__box">
                                <i className="azino-icon-calling"></i>
                                <div className="header-info__box-content">
                                    <h3>Phone</h3>
                                    <p><a href="tel:666-888-0000">666 888 0000</a></p>
                                </div>
                            </div>
                            <div className="header-info__box">
                                <i className="azino-icon-address"></i>
                                <div className="header-info__box-content">
                                    <h3>Visit</h3>
                                    <p>88 Broklyn Golden Street, USA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <nav className="main-menu navbar-expand-lg navbar-light" id="navbarSupportedContent">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <ul className="main-menu__list resp navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link text-white home" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>

                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link text-white events" to="/events" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</Link>

                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link text-white causes" to="/causes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Causes</Link>

                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link text-white about" to="/about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About us</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link text-white contact" to="/contact" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</Link>
                                    </li>
                                    <li className="nav-item dropdown search-icon">
                                        <Link className="nav-link text-white" to="/"><i className="azino-icon-magnifying-glass"></i></Link>
                                    </li>
                                </ul>
                                <a href="contact.html" className="thm-btn">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>

        </div >


    );
}
export default Navbar;

{/* if (document.getElementById("app")) {
    ReactDOM.render( < Navbar / > , document.getElementById("app"));
} */}