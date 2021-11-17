import React from "react";
import { TextField } from "@mui/material";
/* css imports */
import "../static/styles/containers/ContactMe.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";
import Footer from "../components/Footer";

import img from "../static/images/contact-me.png"

const ContactMe = () => {
    const header_data = PAGE_HEADING['CONTACT_ME']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container contact-me-wrapper'>
                <div>
                    <p className='bold-blue-text contact-heading'>I welcome any idea, suggestion or a simple acknowledgement.</p>
                    <div>
                        <TextField 
                            id="outlined-basic" 
                            label="Name" variant="outlined" 
                            style={{width: '60%'}}
                        />
                        <br/>
                        <br/>
                        <TextField 
                            id="outlined-basic" 
                            label="Message" 
                            variant="outlined" 
                            style={{width: '60%'}}
                            multiline
                            rows={6}
                        />
                    </div>
                </div>
                <div>
                    <img  src={img} alt="contact-me"/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ContactMe;