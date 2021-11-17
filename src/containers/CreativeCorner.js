import React from "react";

/* css imports */
import "../static/styles/containers/CreativeCorner.css"
import "../static/styles/CommonCss.css"

/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";

const CreativeCorner = () => {
    const header_data = PAGE_HEADING['CREATIVE_CORNER']
    return(
        <div>
            <Navbar/>
            <Header header_data={header_data}/>
        </div>
    )
}

export default CreativeCorner;