import React from "react";

/* css imports */
import "../static/styles/containers/CreativeCorner.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { INSTAGRAM_URL, PAGE_HEADING } from "../utils/AppConstants";

/* img import */
import p1 from "../static/images/postcards/postcard1.jpg"
import Footer from "../components/Footer";

const CreativeCorner = () => {
    const header_data = PAGE_HEADING['CREATIVE_CORNER']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container'>
                <div className='creative-postcards-container'>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                    <img src={p1} alt='postcard1' className='creative-postcard'/>
                </div>
            </div>
            <div className='view-more-container'>
                <p className='bold-blue-text'>Liked what you saw? Checkout my insta profile to find some more!</p>
                <a className='view-more' href={INSTAGRAM_URL} target='__blank'>view more</a>
            </div>
            <Footer/>
        </div>
    )
}

export default CreativeCorner;