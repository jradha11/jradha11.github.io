import React from "react";

/* css imports */
import "../static/styles/containers/Work.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";
import { WORK_DATA } from "../utils/AppConstants";

/* img imports */
import w1 from "../static/images/work/w1.png"
import Footer from "../components/Footer";



const Work = () => {
    const header_data = PAGE_HEADING['WORK']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container'>
                {WORK_DATA.map((work) => {
                    return(
                        <div className='work-card'>
                            <div className='card-img-container'>
                                <img src={w1}/>
                            </div>
                            <div className='card-data'>
                                <p className='card-heading bold-blue-text'>{work.heading}</p>
                                <p className='card-subheading'>{work.subheading}</p>
                                <p className='card-content'>{work.content}</p>
                                <button class='action-btn' href={work.btn_link}>KNOW MORE</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default Work;