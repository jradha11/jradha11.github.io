import React from "react";

/* css imports */
import "../static/styles/containers/HomePage.css";
import "../static/styles/CommonCss.css"

/*local imports*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";
import radha from "../static/images/radha.png";
import radhanobg from "../static/images/radha-nobg.png";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import {FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL} from "../utils/AppConstants"


const HomePage = () => {
    const color_style = {color: "#777777"}
    return(
        <div className='homepage-wrapper'>
            <Navbar/>
            <div className='homepage-container'>
                <div className='homepage-header'>
                    <p className='my-name'>RADHA <br></br> JAYARAMAN</p>
                    <p className='homepage-subtext'>an aspiring <span className='software-text'>software developer</span> <br></br> with a bit of <span className='design-text'>design</span> sense.</p>

                    <div className='homepage-social-media'>
                        <a href={FACEBOOK_URL}><Facebook style={color_style}/></a>
                        <a href={INSTAGRAM_URL}><Instagram style={color_style}/></a>
                        <a href={GITHUB_URL}><GitHub style={color_style}/></a>
                        <a href={LINKEDIN_URL}><LinkedIn style={color_style}/></a>
                    </div>
                    <CustomButton text='KNOW MORE' color='red'/>
                    <div className='footer-div-homepage'>
                        <Footer/>
                    </div>
                </div>
                <div className='homepage-img-container'>
                    <img src={radhanobg} alt='radha-img' className='my-img'/>
                </div>
            </div>
            {/* add background css later */}
            {/* <div className='trapezoid'>

            </div> */}
        </div>
    )
}

export default HomePage;