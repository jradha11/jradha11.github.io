import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';


/* css imports */
import "../static/styles/components/Navbar.css";
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";

/* local imports */
import logo_light from "../static/images/mylogo-light.svg";
import logo_dark from "../static/images/mylogo-dark.svg";
import * as URLS from "../utils/AppUrls"
import $ from 'jquery';
import resume from "../static/radha_resume.pdf";
import { ThemeContext } from "../components/Theme";

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

    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeStyle = {
        color: 'var(--primary-text)'
    }
    console.log(theme);



    return(
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <Link to={URLS.HOME_PAGE} className='remove-underline'>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img src={theme === "light-theme" ? logo_light : logo_dark} alt="my-logo" className='my-logo'/>
                                <p className='navbar-name'> RADHA JAYARAMAN </p>
                            </div>
                        </Link>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <Link to={URLS.ABOUT_ME} className='remove-underline'>
                                <li>
                                    <div className="navbar-items hover-underline-animation">
                                        about me
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.WORK} className='remove-underline'>
                                <li>
                                    <div className="navbar-items hover-underline-animation">
                                        work
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.CREATIVE_CORNER} className='remove-underline'>
                                <li>
                                    <div className="navbar-items hover-underline-animation">
                                        creative corner
                                    </div>
                                </li>
                            </Link>
                            <Link to={resume} className='remove-underline' target='__blank'>
                                <li>
                                    <div className="navbar-items hover-underline-animation">
                                        resume
                                    </div>
                                </li>
                            </Link>
                            <Link to={URLS.CONTACT_ME} className='remove-underline'>
                                <li>
                                    <div className="navbar-items hover-underline-animation">
                                        contact me
                                    </div>
                                </li>
                            </Link>
                            <li onClick={toggleTheme}>
                                <div className="navbar-items">
                                    {theme === "light-theme" ? <DarkModeIcon style={themeStyle}/> : <Brightness5Icon style={themeStyle}/>}
                                </div>
                            </li>

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