import React from "react";
import './card3.css'

export const Card3 = (props) => {
    return(
        <div className='card3'>
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
        </div>
    )
}
