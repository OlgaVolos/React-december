import React, {useEffect, useState} from 'react';
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
import {useHistory} from "react-router-dom";

const LIMIT_sTEP = 5;

function ProductList() {
    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const [currentLimit, setCurrentLimit] = useState(LIMIT_sTEP)
    const history = useHistory();
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
        dispatch(loadProducts({limit: currentLimit}))
    }, [currentLimit])
    return (
        <div className={'product-wrapper'}>

            {isLoading && (
                <h1 style={{color: 'red'}}>LOADING</h1>)}
            {!isLoading && !!products.length && products.map(el => (
                <div  key={el.id} className={'product-item'}
                      // onClick={() => history.push(`/products/${el.id}`)}
                >
                <Product product={el}

                         onCartClick={() => dispatch(toggleItemInCart(el.id))}
                         onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                         IsInCart={productsInCart.includes(el.id)}
                         IsInWishlist={productsInWishlist.includes(el.id)}
                />
                </div>
                    ))}
            <div>
                {products.length<20 && <button onClick={() => setCurrentLimit(prev => prev += LIMIT_sTEP)}>Load more...</button>}
        </div>
        </div>
    );
}

export default ProductList;
