import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    startProductsLoading,
    endProductsLoading,
    setProduct,
    loadProducts, toggleItemInCart, toggleItemInWishlist
} from '../../action-creators'
import './products.css'

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
                <div key={el.id} className={'product-item'}>
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <p>{el.description}</p>
                    <button style={{
                        backgroundColor: productsInWishlist.includes(el.id) ? 'red' : 'green'
                    }}
                            onClick={() => dispatch(toggleItemInWishlist(el.id))}>
                        {productsInWishlist.includes(el.id) ? 'remove from wishlist' : 'add to wishlist'}
                    </button>
                    <button style={{
                        backgroundColor: productsInCart.includes(el.id) ? 'red' : 'green'
                    }}
                            onClick={() => dispatch(toggleItemInCart(el.id))}>
                        {productsInCart.includes(el.id) ? 'remove from cart' : 'add to cart'}
                    </button>
                    <img style={{width: '100%'}} src={el.image} alt=""/>


                </div>
            ))}
        </div>
    );
}

export default ProductList;
