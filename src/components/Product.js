import React from 'react';
import './style.css'

export const Product = ({product, onCartClick, onWishlistClick, IsInCart, IsInWishlist}) => {


    return (
            <div key={product.id} className={'product-item'}>
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
                <img style={{width: '75%'}} src={product.image} alt=""/>


            </div>
    );
}


