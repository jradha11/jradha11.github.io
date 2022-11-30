import React from "react";
import { Link } from "react-router-dom";

/* css imports */
import "../static/styles/containers/HomePage.css";
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";


/*local imports*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";
import radha_mob from "../static/images/mobile.png";
import radhanobg from "../static/images/radha-nobg.png";
import * as URLS from "../utils/AppUrls";


const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <div className='homepage-container'>
                <div className='homepage-header'>
                    <p className='my-name'>RADHA JAYARAMAN</p>
                    <p className='homepage-subtext'>a <span className='software-text'>software developer</span> by day, <br></br><span className='design-text'>artist</span> by night.</p>

                    {/* <div className='homepage-social-media'>
                        <a href={GITHUB_URL} target="__blank"><GitHub style={color_style}/></a>
                        <a href={LINKEDIN_URL} target="__blank"><LinkedIn style={color_style}/></a>
                        <a href={FACEBOOK_URL} target="__blank"><Facebook style={color_style}/></a>
                        <a href={INSTAGRAM_URL} target="__blank"><Instagram style={color_style}/></a>
                        <a href={BEHANCE_URL} target="__blank"><img src={behance} alt='behance-img'/></a>
                    </div> */}
                    <div className="know-more-homepage">
                        <Link to={URLS.ABOUT_ME} className='remove-underline' id='know-more'>
                            <CustomButton text='KNOW MORE' color='red'/>
                        </Link>
                    </div>
                    <div className='footer-div-homepage'>
                        <Footer/>
                    </div>
                </div>
                <div className='homepage-img-container'>
                    <img src={radhanobg} alt='radha-img' className='my-img'/>
                </div>
                <div className='homepage-img-container-mob'>
                    <img src={radha_mob} alt='radha-img' className='my-img-mob'/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;