import react from "react";
import { Link } from "react-router-dom";


/* local imports */
import "../static/styles/components/Navbar.css";
import "../static/styles/CommonCss.css";
import logo from "../static/images/mylogo-light.svg"
import * as URLS from "../utils/AppUrls"

const Navbar = () => {
    return(
        <div className='navbar-web'>
            <div className='navbar-wrapper'>
                <Link to={URLS.HOME_PAGE} className='remove-underline'>
                    <div className='navbar-name-container'>
                        <img src={logo} alt="my-logo"/>
                        <p className='navbar-name'> RADHA JAYARAMAN </p>
                    </div>
                </Link>
                <div className='navbar-content'>
                    <Link to={URLS.ABOUT_ME} className='remove-underline'>
                        <div className="navbar-items">
                            about me
                        </div>
                    </Link>
                    <Link to={URLS.WORK} className='remove-underline'>
                        <div className="navbar-items">
                            work
                        </div>
                    </Link>
                    <Link to={URLS.CREATIVE_CORNER} className='remove-underline'>
                        <div className="navbar-items">
                            creative corner
                        </div>
                    </Link>
                    <Link to={URLS.RESUME} className='remove-underline'>
                        <div className="navbar-items">
                            resume
                        </div>
                    </Link>
                    <Link to={URLS.CONTACT_ME} className='remove-underline'>
                        <div className="navbar-items">
                            contact me
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Navbar;