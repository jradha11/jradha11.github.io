import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../static/styles/components/Footer.css"

const Footer = () => {
    return(
        <div className='footer'>
            designed and developed with <FontAwesomeIcon icon={faHeart} size='xs'/> by <a href="behance link" className='footer-link'>radha</a>
        </div>
    )
}

export default Footer;