import { REMOVE_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../actions/product.actions";

const initialState = { products: [], selectedProduct: {} }
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload }
        case SELECTED_PRODUCT:

            return {
                ...state,
                selectedProduct: action.payload
            }
        case REMOVE_PRODUCT:

            return { ...state, selectedProduct: {} }



        default:
            return state
    }
}