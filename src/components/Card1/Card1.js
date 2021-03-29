import React from "react";
import './cardstyle.css'

export const ProductCard = (props) => {
    console.log(props);

    return (
        <div className="card">
            <h1>{props.title ?? 'N/A'}</h1>
            <h2>{props.price ?? 'N/A'}</h2>
            <h3>{props.description ?? 'N/A'}</h3>
        </div>
    )
}
