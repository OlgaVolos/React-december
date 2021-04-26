import{
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,

} from '../action-types'

const addProductToWishlist = (id) => ({type: ADD_PRODUCT_TO_WISHLIST, payload: id});
const removeProductFromWishlist = (id) => ({type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id});

const toggleItemInWishlist = (id) => (dispatch, getState) => {
    console.log(getState(), id);
    const {wishlist: {productsInWishlist}} = getState();
    const alreadyExistsInWishlist = !!productsInWishlist.find(el => el===id);

    dispatch(alreadyExistsInWishlist ? removeProductFromWishlist(id)  : addProductToWishlist(id)  )
};

export {
    addProductToWishlist,
    removeProductFromWishlist,
    toggleItemInWishlist,

}
