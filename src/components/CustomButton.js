import React from "react";
import { ArrowRightAlt } from "@mui/icons-material";
import "../static/styles/CommonCss.css";
import "../static/styles/components/CustomButton.css";

const CustomButton = (props) => {
    return(
        <button className='button'>
            <span style={{display: 'flex', alignItems: 'center'}}>
                {props.text} <span style={{marginLeft: '1em', alignItems: 'center', display: 'flex'}}><ArrowRightAlt/></span>
            </span>
             
        </button>
    )
}

export default CustomButton;