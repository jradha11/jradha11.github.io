import React from "react";

/* css imports */
import "../static/styles/components/Header.css";
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";


/* local imports */

const Header = (props) => {
    const heading = props.header_data.heading;
    const subheading = props.header_data.subheading;
    return(
        <div className='header-container'>
            <div>
                <p className='header-heading'> {heading} </p>
                <p className='header-subheading'> "{subheading}" </p>
            </div>
        </div>
    )

}

export default Header;