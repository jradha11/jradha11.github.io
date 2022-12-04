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
import Footer from "../components/Footer";
import * as URLS from "../utils/AppUrls";

import i1 from "../static/images/acrylics/i1.jpg";
import i2 from "../static/images/acrylics/i2.jpg";
import i3 from "../static/images/acrylics/i3.jpg";

/* img imports */

const AboutMe = () => {
    const header_data = PAGE_HEADING['ABOUT_ME'];

    return(
        <div>
            <Navbar/>
            <Header header_data={header_data} />
            <div className='page-content-container'>
                <p className='bold-blue-text primary-text-font'> Hi there 😊<br></br> I’m Radha. </p>
                <p className='light-theme-content primary-text-font'>
                    I graduated from IIT Roorkee in May 2022 with a bachelors degree in Chemical Engineering. Tamilian by native, I have been born and brought up in Delhi. 
                    Throughout the entirity of my college life I tried to explore as much as I could. Starting with design, diving into web development and machine learning, and eventually applied
                    these skills by working in a B2C startup <a href='https://explorin.io' target='__blank' className='anchor-tag-link'>Explorin</a>, for a good year and a half.   
                    <a href='https://explorin.io' target='__blank' className='anchor-tag-link'>Explorin</a> aims at making every college student financially independent, 
                    by providing a holistic career exploration program inclusive of all the popular industry fields.                    
                    I have also contributed to the java bindings of <a href='https://github.com/OpenTimelineIO/OpenTimelineIO-Java-Bindings' target='__blank' className='anchor-tag-link'>OpenTimelineIo</a>, an API interchange format lead by Pixar Animated Studios.
                </p>
                <p className='light-theme-content primary-text-font'>
                    Currently, I am working as a Software Engineer at JP Morgan Chase & Co.
                </p>
                <br></br>
                <p className='bold-blue-text primary-text-font'> All work and no play makes Jack a dull boy 😥 </p>
                <p className='light-theme-content primary-text-font'>
                    When I am not working you’ll mostly find me painting (I love acrylics!), <br/>
                    or strumming my guitar and humming some song, <br/>
                    or simply standing out in the balcony and admiring the vastness of sky.
                    <br></br>
                    <br></br>
                    Also, I am beach person. 
                </p>
                <br/>
                <br/>

                {/* creative corner content */}
                <div className='creative-corner-container'>
                    <p className='section-heading bold-blue-text'>creative corner</p>
                    <div className='subheading-container'>
                        <p className='section-subheading primary-text-font'>few of tiny postcards I made using acrylics on 300gsm sheets.</p>
                        <Link to={URLS.CREATIVE_CORNER} id='view-more-postcard-web'>
                            <div className="view-more-link">
                                view more
                            </div>
                        </Link>
                    </div>
                    <div className='postcards-container'>
                        <img alt='img-1'  src={i1} className='postcards'/>
                        <img alt='img-2'  src={i2} className='postcards'/>
                        <img alt='img-3'  src={i3} className='postcards'/>
                        <Link to={URLS.CREATIVE_CORNER} id='view-more-postcard-mobile'>
                            view more
                        </Link>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;