import React from "react";
import './header.css'

export const Header = (props) => {

    return(
        <div className='header'>
            <h1>{props.title}</h1>
            <h1>{props.price ?? 'N/A'}</h1>
        </div>
    )
}
