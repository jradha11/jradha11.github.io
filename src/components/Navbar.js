import react from "react";
import { Link } from "react-router-dom";


/* css imports */
import "../static/styles/components/Navbar.css";
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";

/* local imports */
import logo from "../static/images/mylogo-light.svg"
import * as URLS from "../utils/AppUrls"
import $ from 'jquery';

const Navbar = () => {
    $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
            } else {
                $('.nav').removeClass('affix');
            }
    });

    const navTriggerOnClick = () => {
        $('.navTrigger').toggleClass('active');
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

        /* need to add fadeout */
    }
    return(
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <Link to={URLS.HOME_PAGE} className='remove-underline'>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img src={logo} alt="my-logo" className='my-logo'/>
                                <p className='navbar-name'> RADHA JAYARAMAN </p>
                            </div>
                        </Link>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <Link to={URLS.ABOUT_ME} className='remove-underline'>
                                <li>
                                    <div className="navbar-items">
                                        about me
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.WORK} className='remove-underline'>
                                <li>
                                    <div className="navbar-items">
                                        work
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.CREATIVE_CORNER} className='remove-underline'>
                                <li>
                                    <div className="navbar-items">
                                        creative corner
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.RESUME} className='remove-underline'>
                                <li>
                                    <div className="navbar-items">
                                        resume
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.CONTACT_ME} className='remove-underline'>
                                <li>
                                    <div className="navbar-items">
                                        contact me
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <span className="navTrigger" onClick={navTriggerOnClick}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
    )
}

export default Navbar;