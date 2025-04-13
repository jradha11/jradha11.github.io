import React from "react";

/* css imports */
import "../static/styles/containers/CreativeCorner.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { INSTAGRAM_URL, PAGE_HEADING } from "../utils/AppConstants";
import i1 from "../static/images/acrylics/i1.jpg";
import i2 from "../static/images/acrylics/i2.jpg";
import i3 from "../static/images/acrylics/i3.jpg";
import i4 from "../static/images/acrylics/i4.jpg";
import i5 from "../static/images/acrylics/i5.jpg";
import i6 from "../static/images/acrylics/i6.jpg";


/* img import */
import Footer from "../components/Footer";

const CreativeCorner = () => {
    const header_data = PAGE_HEADING['CREATIVE_CORNER']
    const img_index = [i1, i2, i3, i4, i5, i6]
    return(
        <div className="creative-corner-wrapper">
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container'>
                <div id="webCreative">
                     <div className='creative-postcards-container'>
                        {img_index.map((index) => {
                            return(
                                <img src={index} alt='postcards' className='creative-postcard'/>
                            )
                        })}
                    </div>
                </div>
                {/* <div className='view-more-container'>
                    <p className='bold-blue-text'>Liked what you saw? Checkout my insta profile to find some more!</p>
                    <a className='view-more' href={INSTAGRAM_URL} target='__blank'>click here</a>
                </div> */}
            </div>
            <Footer/>
        </div>
    )
}

export default CreativeCorner;