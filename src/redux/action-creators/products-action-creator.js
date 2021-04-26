import {
    START_PRODUCT_LOADING,
    END_PRODUCT_LOADING,
    SET_PRODUCTS,
} from '../action-types'

const startProductsLoading = () => ({type: START_PRODUCT_LOADING});
const endProductsLoading = () => ({type: END_PRODUCT_LOADING});
const setProduct = (payload) => ({type: SET_PRODUCTS, payload});
const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startProductsLoading())
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json();
        dispatch(setProduct(json))
        console.log(json)
        console.log(typeof json[0].price)
    } catch (e) {
        console.error(e)

    }finally {
        dispatch(endProductsLoading())
    }
};
export {
    startProductsLoading,
    endProductsLoading,
    setProduct,
    loadProducts,
}
