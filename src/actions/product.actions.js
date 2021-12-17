import axios from 'axios'
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export const setProducts = () => {
    return (dispatch) => {
        axios({
            method: "get",
            url: 'https://fakestoreapi.com/products'
        })
            .then(res => {
                dispatch({ type: SET_PRODUCTS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            })


    }
}


export const selectedProduct = (productId) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${productId}`
        })
            .then(res => {
                console.log("res", res.data.id)
                dispatch({ type: SELECTED_PRODUCT, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

}
export const removeProduct = () => {
    return ({ type: REMOVE_PRODUCT })

}

