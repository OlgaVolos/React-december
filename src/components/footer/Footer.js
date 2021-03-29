import React from "react";
import './footer.css'

export const Footer = (props) => {

    return (
        <div className="footer">
            <div>{props.text}</div>
            <div>{props.info}</div>

        </div>
    )
}
