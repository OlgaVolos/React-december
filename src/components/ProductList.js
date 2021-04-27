import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    startProductsLoading,
    endProductsLoading,
    setProduct,
    loadProducts,
    toggleItemInCart,
    toggleItemInWishlist
} from '../redux/action-creators'
import './style.css'
import {Product} from "./Product";

function ProductList() {
    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);

    const dispatch = useDispatch()


    //1.11
    //20.00 localStorage


    // console.log({products, isLoading})
    // const fetchProducts = async () => {
    //     try {
    //         dispatch(startProductsLoading())
    //         const response = await fetch('https://fakestoreapi.com/products')
    //         const json = await response.json();
    //         dispatch(setProduct(json))
    //         console.log(json)
    //     } catch (e) {
    //         console.error(e)
    //
    //     }finally {
    //         dispatch(endProductsLoading())
    //     }
    //
    // }; // не потрібен, оскільки ми перенесли в action-creators

    useEffect(() => {
        // fetchProducts() не потрібен, оскільки ми перенесли в action-creators
        dispatch(loadProducts())
    }, [])
    return (
        <div className={'product-wrapper'}>

            {isLoading && (
                <h1 style={{color: 'red'}}>LOADING</h1>)}
            {!isLoading && !!products.length && products.map(el => (
                <Product product={el}
                         key={el.id}
                         onCartClick={() => dispatch(toggleItemInCart(el.id))}
                         onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                         IsInCart={productsInCart.includes(el.id)}
                         IsInWishlist={productsInWishlist.includes(el.id)}
                /> ))}

        </div>
    );
}

export default ProductList;
