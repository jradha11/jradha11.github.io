import React from "react";
/* css imports */
import "../static/styles/containers/ContactMe.css";
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";


/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { BEHANCE_URL, PAGE_HEADING } from "../utils/AppConstants";
import Footer from "../components/Footer";
import img from "../static/images/contact-me.png";
import behance from "../static/images/behance.png";
import { Facebook, Mail, Instagram,GitHub, LinkedIn } from "@mui/icons-material";
import { TextField } from '@mui/material'
import { FACEBOOK_URL, INSTAGRAM_URL, EMAIL_ADD, GITHUB_URL, LINKEDIN_URL } from "../utils/AppConstants";

const ContactMe = () => {
    const header_data = PAGE_HEADING['CONTACT_ME'];
    const color_style = {color: '#777777', marginRight: '16px'};
    const font_size = 'small';
    const mail_to = "https://mail.google.com/mail/?view=cm&fs=1&to="+EMAIL_ADD;
    console.log(mail_to)
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container contact-me-wrapper'>
                <div>
                    <p className='bold-blue-text contact-heading'>I welcome any idea, suggestion or a simple acknowledgement.</p>
                    <div className='contact-content-container'>
                        <TextField 
                            id="outlined-basic" 
                            label="Name" variant="outlined" 
                            style={{width: '100%'}}
                        />
                        <br/>
                        <br/>
                        <TextField 
                            id="outlined-basic" 
                            label="Message" 
                            variant="outlined" 
                            multiline
                            rows={6}
                            style={{width: '100%'}}
                        />
                        <br/>
                        <button className='send-btn'>
                            SEND
                        </button>
                        <div className='contact-social-wrapper'>
                            <a href={mail_to} className='icon-wrapper' target='__blank'><Mail style={color_style} fontSize={font_size}/>{EMAIL_ADD}</a>
                            <br/>
                            <div className='other-social-wrapper'>
                                <a href={LINKEDIN_URL} className='icon-wrapper' target='__blank'>
                                    <LinkedIn style={color_style} fontSize={font_size}/> 
                                </a>
                                <a href={GITHUB_URL} className='icon-wrapper' target='__blank'>
                                    <GitHub style={color_style} fontSize={font_size}/> 
                                </a>
                                <a href={FACEBOOK_URL} className='icon-wrapper' target='__blank'>
                                    <Facebook style={color_style} fontSize={font_size}/> 
                                </a>
                                <a href={INSTAGRAM_URL} className='icon-wrapper' target='__blank'>
                                    <Instagram style={color_style} fontSize={font_size}/> 
                                </a>
                                <a href={BEHANCE_URL} className='icon-wrapper' target='__blank'>
                                    <img src={behance} alt='behance-img'/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-me-img-div'>
                    <img  src={img} alt="contact-me" className='contact-me-img'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactMe;