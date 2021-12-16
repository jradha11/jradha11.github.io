import React from "react";
import { ArrowRightAlt } from "@material-ui/icons";
import "../static/styles/CommonCss.css";
import "../static/styles/components/CustomButton.css";

const CustomButton = (props) => {
    return(
        <button className='button'>
            <span style={{display: 'flex', alignItems: 'center'}}>
                {props.text} <span style={{marginLeft: '16px', alignItems: 'center', display: 'flex'}}><ArrowRightAlt/></span>
            </span>
             
        </button>
    )
}

export default CustomButton;