import React from "react";

/* css imports */
import "../static/styles/containers/Work.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";

const Work = () => {
    const header_data = PAGE_HEADING['WORK']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
        </div>
    )
}

export default Work;