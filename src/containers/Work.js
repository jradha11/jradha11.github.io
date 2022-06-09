import React from "react";
import ReactHtmlParser from 'react-html-parser';


/* css imports */
import "../static/styles/containers/Work.css"
import "../static/styles/CommonCss.css";
import "../static/styles/MediaQueries.css";

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";
import { WORK_DATA } from "../utils/AppConstants";

/* img imports */
import Footer from "../components/Footer";



const Work = () => {
    const header_data = PAGE_HEADING['WORK']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
            <div className='page-content-container'>
                {WORK_DATA.map((work) => {
                    const hasBtn = work.btn_link ? true : false;
                    const img_src = require("../static/images/work/" + work.img_src + ".png").default
                    return(
                        <div className='work-card'>
                            <div className='card-data'>
                                <div className='card-img-container'>
                                    <img src={img_src} alt='card-img' className='card-img'/>
                                    <div>
                                        <p className='card-heading bold-blue-text'>{work.heading}</p>
                                        <p className='card-subheading'>{work.subheading}</p>
                                    </div>
                                </div>
                                <p className='card-content'>{ReactHtmlParser(work.content)}</p>
                                {hasBtn ? <a className='action-btn' href={work.btn_link}>know more</a> : null}
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