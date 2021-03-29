import React from "react";
import './card2.css';

export const Card2 = (props) => {
    return (
        <div className="card2">
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
        </div>
    )
}
