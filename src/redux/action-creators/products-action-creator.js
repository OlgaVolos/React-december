import {
    START_PRODUCT_LOADING,
    END_PRODUCT_LOADING,
    SET_PRODUCTS,
} from '../action-types'

const qsHelper = (params) => {
    const keys = Object.keys(params);
    let result = '';
    if(!keys?.length) return result;
    keys.forEach((el, i) => {
        result += `${el}=${params[el]}`

        if (i !==  keys.length-1) result += '&'
    })
    return result
}

const startProductsLoading = () => ({type: START_PRODUCT_LOADING});
const endProductsLoading = () => ({type: END_PRODUCT_LOADING});
const setProduct = (payload) => ({type: SET_PRODUCTS, payload});
const loadProducts = (params) => async (dispatch, getState) => {
    const hasItems = !!getState().products.products.length

    try {
        !hasItems && dispatch(startProductsLoading())
        const response = await fetch(`https://fakestoreapi.com/products?${qsHelper(params)}`)
        const json = await response.json();
        dispatch(setProduct(json))
        console.log(json)

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
qsHelper({limit:5, sort: 'DESC'})
