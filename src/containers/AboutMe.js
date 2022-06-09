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

import i1 from "../static/images/acrylics/i1.jpg";
import i2 from "../static/images/acrylics/i2.jpg";
import i3 from "../static/images/acrylics/i3.jpg";
import i4 from "../static/images/acrylics/i4.jpg";

/* img imports */

const AboutMe = () => {
    const header_data = PAGE_HEADING['ABOUT_ME'];

    return(
        <div>
            <Navbar/>
            <Header header_data={header_data} />
            <div className='page-content-container'>
                <p className='bold-blue-text primary-text-font'> Hi there!! I’m Radha. </p>
                <p className='light-theme-content primary-text-font'>
                    I graduated from IIT Roorkee in May 2022 with a bachelors degree in Chemical Engineering. I am a tamilian, born and brought up in Delhi. 
                    Because of my belief in exploration, during my college life I’ve explored the field of Design, Data Science, Web Development and little bit of Open Source Development.  
                    I have contributed to the java bindings of <a href='https://github.com/OpenTimelineIO/OpenTimelineIO-Java-Bindings' target='__blank' className='anchor-tag-link'>OpenTimelineIo</a>, an API interchange format lead by Pixar Animated Studios.
                    In my prefinal and final year, I contributed significantly to a B2C startup <a href='https://explorin.io' target='__blank' className='anchor-tag-link'>Explorin</a>, that helps freshers and sophomores from engineering colleges to find their career passion. 
                    At Explorin, I majorly worked in the software Development area, but also gained significant insights about product management and consumer needs.
                </p>
                <p className='light-theme-content primary-text-font'>
                    This year I will be joining <b>JPMorgan Chase & Co</b> as a full time Software Engineer.
                </p>
                <p className='bold-blue-text primary-text-font'> All work and no play makes Jack a dull boy :( </p>
                <p className='light-theme-content primary-text-font'>
                    When I am not working you’ll mostly find me strumming my guitar and singing some songs, <br/>
                    or painting with acrylics, <br/>
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
                        <Link to={URLS.CREATIVE_CORNER}>
                            <div className="view-more-link">
                                view more
                            </div>
                        </Link>
                    </div>
                    <div className='postcards-container'>
                        <img alt='img-1'  src={i1} className='postcards'/>
                        <img alt='img-2'  src={i2} className='postcards'/>
                        <img alt='img-3'  src={i3} className='postcards'/>
                        <img alt='img-4'  src={i4} className='postcards'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;