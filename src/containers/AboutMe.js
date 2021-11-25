import React from "react";
import { Link } from "react-router-dom";

/* css imports */
import "../static/styles/containers/AboutMe.css";
import "../static/styles/CommonCss.css"
import "../static/styles/MediaQueries.css"


/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";
import { INSTAGRAM_URL } from "../utils/AppConstants";
import Footer from "../components/Footer";
import * as URLS from "../utils/AppUrls";

/* img imports */
import p1 from "../static/images/postcards/postcard1.jpg"

const AboutMe = () => {
    const header_data = PAGE_HEADING['ABOUT_ME']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data} />
            <div className='page-content-container'>
                <p className='bold-blue-text primary-text-font'> Hi there!! I’m Radha. </p>
                <p className='light-theme-content primary-text-font'>
                    I am a final year undergraduate student at IIT Roorkee persuing my bachelors in Chemical Engineering. 
                    I am a tamilian, born and brought up in Delhi. During the first three years of my college life I’ve explored the Design, Data Science and Web Development. 
                    I have also contributed to  open-source softwares by contributing to the java bindings of <a href='https://github.com/OpenTimelineIO/OpenTimelineIO-Java-Bindings' target='__blank' className='anchor-tag-link'>OpenTimelineIo</a>, an API interchange format lead by Pixar Animated Studios.
                </p>
                <p className='light-theme-content primary-text-font'>
                    Currently, I am working as a Software Developer in a B2C startup called <a href='https://explorin.io' target='__blank' className='anchor-tag-link'>Explorin</a>, 
                    that helps freshers and sophomores from engineering colleges to find their career passion.
                </p>
                <p className='bold-blue-text primary-text-font'> All work and no play makes Jack a dull boy :( </p>
                <p className='light-theme-content primary-text-font'>
                    When I am not working you’ll mostly find me strumming my guitar and singing some songs, <br/>
                    or painting with acrylics, <br/>
                    or simply standing out in the balcony and admiring the vastness of sky.
                </p>
                <br/>
                <br/>

                {/* creative corner content */}
                <div className='creative-corner-container'>
                    <p className='section-heading bold-blue-text'>my creative corner</p>
                    <div className='subheading-container'>
                        <p className='section-subheading primary-text-font'>Few of tiny postcards I made using acrylics on 300gsm sheets.</p>
                        <Link to={URLS.CREATIVE_CORNER}>
                            <div className="view-more-link">
                                view more
                            </div>
                        </Link>
                    </div>
                    <div className='postcards-container'>
                        <img alt='img-1' src={p1} className='postcards'/>
                        <img alt='img-1' src={p1} className='postcards'/>
                        <img alt='img-1' src={p1} className='postcards'/>
                        <img alt='img-1' src={p1} className='postcards'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;