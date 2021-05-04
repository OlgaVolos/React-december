import React, {useMemo} from 'react';
import './style.css'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const Header = () => {
    const {products} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);

    const history = useHistory()

    const calculatedCart = useMemo(()=> {
        return products
            .filter(el=> productsInCart.includes(el.id))
            .reduce((acc, el) => acc+= el.price, 0)

    }, [products, productsInCart]) ;

    const calculatedWishlist = useMemo(()=> {
        return products
            .filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc+=el.price, 0)

    }, [products, productsInWishlist]) ;

    return (
       <header className={'header'}>
           <h2 onClick={()=>history.push('/')}>Header</h2>
           <div className={'counter'} >
               <span>wishlist: {productsInWishlist.length} ($ {calculatedWishlist})</span>
               <span>cart: {productsInCart.length} ($ {calculatedCart})</span>
           </div>
       </header>
    );
}


