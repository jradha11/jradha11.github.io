import React, { useState } from "react";
import emailjs from '@emailjs/browser';
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
import {Alert} from "@mui/material";
import { TextField } from '@mui/material'
import { FACEBOOK_URL, INSTAGRAM_URL, EMAIL_ADD, GITHUB_URL, LINKEDIN_URL } from "../utils/AppConstants";

const ContactMe = () => {
    const header_data = PAGE_HEADING['CONTACT_ME'];
    const color_style = {color: '#777777'};
    const font_size = 'small';
    const mail_to = "https://mail.google.com/mail/?view=cm&fs=1&to="+EMAIL_ADD;
    const [who, setWho] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(true);
    const [showError, setShowError] = useState(false);


    function useEmailAPI(){
        if(email.length==0){
            console.log("email empty");
            alert("I think you forgot to mention your email!");
        }
        if(who.length == 0){
            console.log("name empty");
            alert("I'd love to know your name :)");
        }
        if(message.length == 0){
            alert("Oops! The message is empty! :)");
        }
        else{
            emailjs.send(
                process.env.REACT_APP_MY_SERVICE_ID, 
                process.env.REACT_APP_MY_TEMPLATE_ID, 
                {
                    "name": who, 
                    "email": email,
                    "message": message
                }, 
                process.env.REACT_APP_MY_PUBLIC_KEY).then((result) => {
                    console.log("success");
                    alert("Appreciate you for taking out time to reach out to me. I'll respond back at the earliest!");
                }, (error) => {
                    console.log(error.text);
                    alert("Oops! I think something went wrong while sending the message. So, lets connect on LinkedIn?");
                });
                return;
        }
        };

    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container'>
                <div className='contact-me-wrapper'>
                    <div className='other-social-wrapper'>
                        <div className='contact-me-icon-div'>
                            <a href={mail_to} className='icon-wrapper' target='__blank'>
                                <Mail style={color_style} fontSize={font_size}/> 
                            </a>
                            <p className='contact-me-icon-desc'>Email</p>
                        </div>
                        <div className='contact-me-icon-div'>

                            <a href={LINKEDIN_URL} className='icon-wrapper' target='__blank'>
                                <LinkedIn style={color_style} fontSize={font_size}/> 
                            </a>
                            <p className='contact-me-icon-desc'>LinkedIn</p>

                        </div>
                        <div className='contact-me-icon-div'>

                            <a href={GITHUB_URL} className='icon-wrapper' target='__blank'>
                                <GitHub style={color_style} fontSize={font_size}/> 
                            </a>
                            <p className='contact-me-icon-desc'>GitHub</p>

                        </div>
                        <div className='contact-me-icon-div'>

                            <a href={FACEBOOK_URL} className='icon-wrapper' target='__blank'>
                                <Facebook style={color_style} fontSize={font_size}/> 
                            </a>
                            <p className='contact-me-icon-desc'>Facebook</p>
                        </div>

                        <div className='contact-me-icon-div'>

                            <a href={INSTAGRAM_URL} className='icon-wrapper' target='__blank'>
                                <Instagram style={color_style} fontSize={font_size}/> 
                            </a>
                            <p className='contact-me-icon-desc'>Instagram</p>

                        </div>

                        <div className='contact-me-icon-div'>
                            <a href={BEHANCE_URL} className='icon-wrapper' target='__blank'>
                                <img src={behance} alt='behance-img'/>
                            </a>
                            <p className='contact-me-icon-desc'>Behance</p>

                        </div>
                    </div>
                    <br></br>    

                    <div className='contact-content-container'>
                        <p className='bold-blue-text contact-heading'>I welcome any idea, suggestion or a simple acknowledgement.</p>
                        <TextField 
                            id="outlined-basic" 
                            label="Name" variant="outlined" 
                            style={{width: '100%'}}
                            value={who}
                            onChange={e => setWho(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <TextField 
                            id="outlined-basic" 
                            label="Email Address" 
                            variant="outlined" 
                            style={{width: '100%'}}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        
                        <br/>
                        <button className='send-btn' onClick={useEmailAPI}>
                            SEND
                        </button>
                    </div>
                </div>
                {/* {showSuccess?
                        <Alert severity="success" onClose={() => {setShowSuccess(false)}}>
                            Appreciate you for taking out time to reach out to me. 
                            I'll respond back at the earliest!
                        </Alert> 
                    : null}
                    {showError?<Alert severity="error" onClose={() => {setShowError(false)}}>Oops! I think something went wrong while sending the email. So, lets connect on LinkedIn?</Alert>:null} */}


                {/* <div className='contact-me-img-div'>
                    <img  src={img} alt="contact-me" className='contact-me-img'/>
                </div> */}
            </div>
            <Footer/>
        </div>
    )
}

export default ContactMe;