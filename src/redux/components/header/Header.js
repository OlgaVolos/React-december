import React, {useMemo} from 'react';
import './header.css'
import {toggleItemInCart} from '../../action-creators'
import {useSelector} from "react-redux";

function Header() {
    const {products} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);

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
           <h2>Header</h2>
           <div className={'counter'} >
               <span>wishlist: {productsInWishlist.length} ($ {calculatedWishlist})</span>
               <span>cart: {productsInCart.length} ($ {calculatedCart})</span>
           </div>
       </header>
    );
}

export default Header;
