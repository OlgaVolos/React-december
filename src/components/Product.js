import React from 'react';
import './style.css'
import {useHistory} from "react-router-dom";

export const Product = ({product, onCartClick, onWishlistClick, IsInCart, IsInWishlist}) => {
const history = useHistory()

    return (
            <div key={product.id} >
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
                <button style={{
                    backgroundColor: IsInWishlist ? 'red' : 'green'
                }}

                        onClick={onWishlistClick}>
                    {IsInWishlist ? 'remove from wishlist' : 'add to wishlist'}
                </button>
                <button style={{
                    backgroundColor: IsInCart ? 'red' : 'green'
                }}

                        onClick={onCartClick}>

                    {IsInCart? 'remove from cart' : 'add to cart'}
                </button>
                <button onClick={() => history.push(`/products/${product.id}`)}>Show Details</button>
                <img style={{width: '75%'}} src={product.image} alt=""/>



            </div>
    );
}


