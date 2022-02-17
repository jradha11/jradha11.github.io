import React from "react";
import Carousel from 'react-bootstrap/Carousel'

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
        <div>
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
               
                <div id="mobCreative">
                    <Carousel>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i2}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i3}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i4}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i5}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block mob-postcard"
                                src={i6}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    
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