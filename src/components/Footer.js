import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/* local imports*/
import "../static/styles/components/Footer.css";
import { LINKEDIN_URL } from "../utils/AppConstants";

const Footer = () => {
    return(
        <div className='footer'>
            designed and developed with <FontAwesomeIcon icon={faHeart} size='xs'/> by <a href={LINKEDIN_URL} className='footer-link' target='__blank'>radha</a>
        </div>
    )
}

export default Footer;