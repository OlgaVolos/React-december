import React, {useEffect, useState} from "react";
import {Product} from "./Product";
import {useParams} from 'react-router-dom'
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";

export const ProductDetails = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const params = useParams()
    console.log(params);
    const dispatch = useDispatch();
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
const fetchItem = async () => {
    if(!params.id) return;
    try {
        setIsLoading(true)
        const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const json = await resp.json()
        setProduct(json)

    } catch (e) {
        console.log(e);
    } finally {
        setIsLoading(false)

    }
};
    useEffect(()=> {
        fetchItem()

    }, [])

    return (
        <div className={'product-item'}>
            {!isLoading && !!product && <Product product={product} onCartClick={() => dispatch(toggleItemInCart(product.id))}
                                                 onWishlistClick={() => dispatch(toggleItemInWishlist(product.id))}
                                                 IsInCart={productsInCart.includes(product.id)}
                                                 IsInWishlist={productsInWishlist.includes(product.id)}/>}
            {isLoading && (
                <h3>LOADING</h3>
            )}

        </div>
    );
}
